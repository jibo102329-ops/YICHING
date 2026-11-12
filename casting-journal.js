/* Three-coin casting and browser-local daily/question records. */
(() => {
  'use strict';
  const prefix='iching.casting.v1.';
  const lastKey='iching.casting.last';
  const memory=new Map();
  function localDate(date=new Date()) {
    return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');
  }
  function describe(lines) {
    if(!Array.isArray(lines)||lines.length!==6||!lines.every(n=>[6,7,8,9].includes(n)))throw Error('invalid-cast');
    const bits=lines.map(n=>n%2);
    const moving=lines.flatMap((n,i)=>n===6||n===9?[i]:[]);
    return {bits,moving,changedBits:bits.map((bit,i)=>moving.includes(i)?1-bit:bit)};
  }
  function draw() {
    const coins=new Uint8Array(18);
    if(window.crypto?.getRandomValues)window.crypto.getRandomValues(coins);
    else for(let i=0;i<coins.length;i++)coins[i]=Math.floor(Math.random()*256);
    return Array.from({length:6},(_,i)=>6+(coins[i*3]&1)+(coins[i*3+1]&1)+(coins[i*3+2]&1));
  }
  function validate(record) {
    if(!record||record.schema!=='iching-casting-journal'||record.version!==1||record.method!=='three-coins'||!['daily','question'].includes(record.mode))throw Error('invalid-cast');
    describe(record.lines);
    if(typeof record.id!=='string'||record.id.length>100||typeof record.day!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(record.day))throw Error('invalid-cast');
    if(typeof record.createdAt!=='string'||!Number.isFinite(Date.parse(record.createdAt)))throw Error('invalid-cast');
    if(localDate(new Date(record.day+'T12:00:00'))!==record.day)throw Error('invalid-cast');
    for(const [field,max] of [['creator',80],['question',200],['focus',30],['reflection',10000]])if(typeof record[field]!=='string'||record[field].length>max)throw Error('invalid-cast');
    if(!['material','process','rehearsal','presentation','life','career','love','money'].includes(record.focus))throw Error('invalid-cast');
    if(!Number.isInteger(record.tonic)||record.tonic<0||record.tonic>11)throw Error('invalid-cast');
    return record;
  }
  const normalized=value=>value.normalize('NFKC').trim().replace(/\s+/g,' ').toLowerCase();
  function dailyKey(input) {
    return prefix+'daily.'+input.day+'.'+encodeURIComponent(JSON.stringify([normalized(input.creator),input.focus,normalized(input.question)]));
  }
  function read(key) {
    let text=memory.get(key);
    try{text=window.localStorage.getItem(key)||text;}catch{}
    try {
      return text?validate(JSON.parse(text)):null;
    }catch{return null;}
  }
  function write(key,record) {
    const text=JSON.stringify(validate(record));
    memory.set(key,text);
    try{window.localStorage.setItem(key,text);window.localStorage.setItem(lastKey,key);return true;}catch{return false;}
  }
  function create(input) {
    return validate({schema:'iching-casting-journal',version:1,id:window.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2),
      mode:input.mode,day:input.day,createdAt:new Date().toISOString(),creator:input.creator,question:input.question,
      focus:input.focus,reflection:'',tonic:input.tonic,method:'three-coins',lines:draw()});
  }
  async function cast(input) {
    const perform=()=>{
      const key=input.mode==='daily'?dailyKey(input):prefix+'question.'+(window.crypto?.randomUUID?.()||Date.now()+'-'+Math.random());
      const existing=input.mode==='daily'?read(key):null;
      if(existing)return {key,record:existing,reused:true,persisted:write(key,existing)};
      const record=create(input);
      return {key,record,reused:false,persisted:write(key,record)};
    };
    if(input.mode==='daily'&&window.navigator?.locks?.request)return window.navigator.locks.request(dailyKey(input),perform);
    return perform();
  }
  function list() {
    const keys=new Set(memory.keys());
    try{for(let i=0;i<window.localStorage.length;i++){const key=window.localStorage.key(i);if(key?.startsWith(prefix))keys.add(key);}}catch{}
    return [...keys].flatMap(key=>{const record=read(key);return record?[{key,record}]:[];})
      .sort((a,b)=>b.record.createdAt.localeCompare(a.record.createdAt));
  }
  function latestToday() {
    try{const key=window.localStorage.getItem(lastKey),record=key&&read(key);if(record?.day===localDate())return {key,record};}catch{}
    return list().find(item=>item.record.day===localDate())||null;
  }
  function reflect(key,text) {
    const record=read(key);
    if(!record||typeof text!=='string'||text.length>10000)throw Error('invalid-cast');
    return {record:{...record,reflection:text},persisted:write(key,{...record,reflection:text})};
  }
  function importRecord(text) {
    const source=validate(JSON.parse(text));
    const id=window.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
    const record={...source,id};
    const daily=record.mode==='daily'?dailyKey(record):null;
    const key=daily&&!read(daily)?daily:prefix+'import.'+id;
    return {key,record,persisted:write(key,record)};
  }
  window.IChingCasting=Object.freeze({localDate,describe,draw,cast,list,read,latestToday,reflect,importRecord,validate});
})();
