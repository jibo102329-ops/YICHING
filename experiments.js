(() => {
  'use strict';
  const adapter=window.IChingExperimentAdapter;
  if(!adapter)return;
  const PREFIX='iching.experiment.v1.';
  const SCHEMA='iching-composition-experiment';
  const APP_VERSION='2026-11-10.2';
  const strings={
    zh:{examples:'先听懂三个例子',examplesSub:'选择一个默认方案，再比较音核处理的前后。',xu:'需 · 保留原位',qian:'乾 · 全音极点',kun:'坤 · 半音密集',xuNote:'C–D–E 与 G–A–B 保持 T0。',qianNote:'重复的乾音核，经 T+6 展开。',kunNote:'重复的坤音核，经 T+3 分开。',raw:'原始双三音核',rawStatus:'此处保留原始音核；上卦移位发生在下一步合成中。',coreStatus:'此处为动爻前的合成核心，单音滑动另在当前发声阶段呈现。',core:'合成核心',sounding:'当前发声',listen:'试听所选阶段',stop:'停止试听',positions:'个声部位置',distinct:'个不同音级',shift:'上卦移位',automatic:'默认规则',manual:'自由移位',slideOff:'动爻滑动关闭，合成核心与当前发声相同。',slideOn:'动爻作用于一个音，当前发声可能包含重音。',notebook:'保存创作实验',notebookSub:'保存音乐参数和研究笔记，在同一板块恢复或通过 JSON 迁移。',title:'实验标题',titlePlaceholder:'例如：需卦的流动音色研究',stage:'研究阶段',stageNone:'尚未指定',source:'材料来源与参考版本',sourcePlaceholder:'填写曲谱、录音、文献链接或自创材料说明',mapping:'自由改配与选择理由',mappingPlaceholder:'记录音核、移调、音色或材料层的选择',reflection:'聆听与创作反思',reflectionPlaceholder:'听到了什么？下一次准备修改什么？',save:'保存当前实验',export:'导出当前 JSON',print:'打印 / 保存 PDF',import:'导入 JSON',saved:'已保存的实验',choose:'选择一条记录',load:'恢复选中记录',exportSaved:'导出选中记录',remove:'删除选中记录',empty:'尚无保存的实验。',local:'音乐参数与笔记保存在当前浏览器，JSON 文件可用于迁移。',savedOk:'实验已保存。',restored:'实验已恢复。',exported:'JSON 记录已导出。',imported:'记录已导入并恢复。',deleted:'所选记录已删除。',chooseFirst:'请先选择一条记录。',storageError:'当前浏览器无法保存记录，请使用 JSON 导出。',invalid:'记录格式或参数无效，当前音乐参数仍可继续使用。',wrongModule:'请在记录原来的作曲板块导入。',unsupported:'此记录版本暂无法导入。',fileLarge:'请选择小于 1 MB 的实验 JSON 文件。',audioError:'浏览器暂时无法播放音频，请再次点击试听。',printReady:'已生成研究记录页，可通过浏览器打印为 PDF。',deleteConfirm:'删除选中的本地实验记录？',reportTitle:'易经作曲实验记录',date:'记录时间',module:'创作板块',lab:'作曲实验室',fortune:'命格作曲',ruleVersion:'规则版本',appVersion:'界面版本',hexagram:'卦象',lower:'下卦',upper:'上卦',tonic:'主音',moving:'动爻',slide:'滑动半音数',settings:'其他音乐参数',material:'音高处理',notes:'研究笔记',recordId:'记录编号',printAction:'打印记录',defaultTitle:'作曲实验',sampleNotice:'本地音色采样可在恢复后重新载入。'},
    en:{examples:'Hear three starting points',examplesSub:'Select a default pairing, then compare its source nuclei and transformations.',xu:'Xu · retain T0',qian:'Qian · whole-tone pole',kun:'Kun · chromatic density',xuNote:'C–D–E and G–A–B retain T0.',qianNote:'Repeated Qian nuclei unfold through T+6.',kunNote:'Repeated Kun nuclei separate through T+3.',raw:'Source nuclei',rawStatus:'These are the original nuclei. Upper-cell transposition occurs in the next synthesis step.',coreStatus:'This is the core before the moving-line slide. Hear the single-note change in the sounding stage.',core:'Combined core',sounding:'Current sounding pitches',listen:'Audition this stage',stop:'Stop audition',positions:'voice positions',distinct:'distinct pitch classes',shift:'Upper transposition',automatic:'Default rule',manual:'Free transposition',slideOff:'The moving-line slide is off, so the core and sounding pitches coincide.',slideOn:'The moving line changes one pitch. The sounding result may include shared pitches.',notebook:'Save a composition experiment',notebookSub:'Save musical parameters and research notes. Restore them in the same module or transfer them through JSON.',title:'Experiment title',titlePlaceholder:'For example, a study of fluid timbres in Xu',stage:'Research stage',stageNone:'Not specified',source:'Material sources and editions',sourcePlaceholder:'Score, recording, reference link or a description of original material',mapping:'Remapping and reasons for choices',mappingPlaceholder:'Document nuclei, transpositions, timbres or the assignment of layers',reflection:'Listening and compositional reflection',reflectionPlaceholder:'What did you hear? What will you revise next?',save:'Save current experiment',export:'Export current JSON',print:'Print / save PDF',import:'Import JSON',saved:'Saved experiments',choose:'Select a record',load:'Restore selected record',exportSaved:'Export selected record',remove:'Delete selected record',empty:'No experiments have been saved yet.',local:'Musical parameters and notes are stored in this browser. JSON files can transfer records.',savedOk:'Experiment saved.',restored:'Experiment restored.',exported:'JSON record exported.',imported:'Record imported and restored.',deleted:'Selected record deleted.',chooseFirst:'Select a saved record first.',storageError:'Browser storage is unavailable. Export a JSON record instead.',invalid:'The record format or parameters are invalid. You can continue with the current musical settings.',wrongModule:'Import this record in its original composition module.',unsupported:'This record version is not supported yet.',fileLarge:'Choose an experiment JSON file smaller than 1 MB.',audioError:'Audio is unavailable at the moment. Try the audition button again.',printReady:'A research record page is ready. Use the browser’s print command to save a PDF.',deleteConfirm:'Delete the selected local experiment record?',reportTitle:'I Ching composition experiment',date:'Recorded at',module:'Composition module',lab:'Composition laboratory',fortune:'Fortune-telling Composition',ruleVersion:'Rule version',appVersion:'Interface version',hexagram:'Hexagram',lower:'Lower trigram',upper:'Upper trigram',tonic:'Tonic',moving:'Moving line',slide:'Slide in semitones',settings:'Other musical parameters',material:'Pitch treatment',notes:'Research notes',recordId:'Record ID',printAction:'Print record',defaultTitle:'Composition experiment',sampleNotice:'Local timbre samples can be loaded again after restoring a record.'}
  };
  const lang=()=>document.documentElement.lang==='en'?'en':'zh';
  const copy=()=>strings[lang()];
  const node=(tag,className,text)=>{const element=document.createElement(tag);if(className)element.className=className;if(text!==undefined)element.textContent=text;return element;};
  const examples=node('section','experiment-examples');examples.id='experimentExamples';examples.dataset.researchUi='';
  examples.innerHTML='<div class="experiment-section-title"><span class="eyebrow">LISTENING STUDIES</span><h3 data-copy="examples"></h3><p data-copy="examplesSub"></p></div><div class="demo-pairings"></div><div class="phase-player"><div class="phase-options" role="group"></div><div class="phase-notes" aria-live="polite"></div><div class="phase-footer"><p class="phase-description"></p><button type="button" class="button primary phase-listen"></button></div></div>';
  const book=node('section','panel experiment-studio');book.id='experimentNotebook';book.dataset.researchUi='';
  book.innerHTML='<div class="panel-head"><div><h3 data-copy="notebook"></h3><p data-copy="notebookSub"></p></div><span class="eyebrow">RESEARCH NOTEBOOK</span></div><div class="notebook-body"><div class="notebook-grid"><label><span data-copy="title"></span><input id="experimentTitle" maxlength="120" data-placeholder="titlePlaceholder"></label><label><span data-copy="stage"></span><select id="experimentStage"></select></label><label><span data-copy="source"></span><textarea id="experimentSource" rows="3" maxlength="6000" data-placeholder="sourcePlaceholder"></textarea></label><label><span data-copy="mapping"></span><textarea id="experimentMapping" rows="3" maxlength="6000" data-placeholder="mappingPlaceholder"></textarea></label></div><label class="reflection-field"><span data-copy="reflection"></span><textarea id="experimentReflection" rows="3" maxlength="10000" data-placeholder="reflectionPlaceholder"></textarea></label><div class="notebook-actions"><button type="button" class="button primary" data-action="save" data-copy="save"></button><button type="button" class="button" data-action="export" data-copy="export"></button><button type="button" class="button" data-action="print" data-copy="print"></button><button type="button" class="button" data-action="import" data-copy="import"></button><input id="experimentImport" type="file" accept=".json,application/json" hidden></div><p class="notebook-storage" data-copy="local"></p><div class="saved-experiments"><label for="experimentSaved" data-copy="saved"></label><select id="experimentSaved"></select><div class="saved-actions"><button type="button" class="button" data-action="load" data-copy="load"></button><button type="button" class="button" data-action="exportSaved" data-copy="exportSaved"></button><button type="button" class="button subtle-danger" data-action="remove" data-copy="remove"></button></div></div><p id="experimentStatus" class="experiment-status" role="status" aria-live="polite"></p></div>';
  if(adapter.module==='laboratory'){
    const workspace=document.querySelector('.workspace');workspace.before(examples);workspace.after(book);
  }else{
    const modal=document.getElementById('modalLab');modal.querySelector('.studio-body').prepend(examples);modal.after(book);
  }
  const field=id=>book.querySelector('#'+id);
  let phase='core',playToken=0,playing=false,playTimers=[];
  const phases=['raw','core','sounding'];
  function message(key){field('experimentStatus').textContent=copy()[key]||key;}
  function stopAudio(){
    playToken++;playTimers.forEach(clearTimeout);playTimers=[];playing=false;
    window.MusicVoices?.stop();
    examples.querySelectorAll('.pitch-chip').forEach(chip=>chip.classList.remove('sounding'));
    updatePlayButton();
  }
  function updatePlayButton(){const button=examples.querySelector('.phase-listen');button.textContent=(playing?'Ⅱ  ':'▷  ')+copy()[playing?'stop':'listen'];button.setAttribute('aria-pressed',String(playing));}
  function updateMaterial(){
    const snapshot=adapter.snapshot(),C=copy();
    const notes=snapshot.material[phase+'Notes'];
    const row=examples.querySelector('.phase-notes');row.replaceChildren();
    notes.forEach((pitch,i)=>{const chip=node('span','pitch-chip',pitch);chip.dataset.pitchIndex=String(i);row.append(chip);});
    const shift=snapshot.rule.upperShift;
    const summary=`${notes.length} ${C.positions} · ${new Set(snapshot.material[phase]).size} ${C.distinct} · ${C.shift} T${shift>0?'+':''}${shift}`;
    const explanation=phase==='raw'?C.rawStatus:phase==='core'?C.coreStatus:snapshot.parameters.slide===0?C.slideOff:C.slideOn;
    examples.querySelector('.phase-description').textContent=summary+' · '+explanation;
    examples.querySelectorAll('[data-phase]').forEach(button=>{button.classList.toggle('active',button.dataset.phase===phase);button.setAttribute('aria-pressed',String(button.dataset.phase===phase));});
    const pair=snapshot.parameters.lower+'-'+snapshot.parameters.upper;
    const selected={'qian-kan':'xu','qian-qian':'qian','kun-kun':'kun'}[pair];
    examples.querySelectorAll('[data-preset]').forEach(button=>{const active=button.dataset.preset===selected&&snapshot.parameters.tonic===0&&snapshot.rule.automatic;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    updatePlayButton();
  }
  async function audition(){
    if(playing){stopAudio();return;}
    stopAudio();const token=playToken;
    try{
      const snapshot=adapter.snapshot(),audio=window.MusicVoices,context=audio.context();
      if(context.state==='suspended'&&context.resume)await context.resume();
      if(token!==playToken)return;
      playing=true;updatePlayButton();
      const origin=context.currentTime+.05;
      snapshot.material[phase].forEach((pc,index)=>{
        const midi=60+pc+snapshot.parameters.tonic;
        const bit=snapshot.material.bits[index];
        audio.play(440*Math.pow(2,(midi-69)/12),origin+index*.32,bit?1:.55,snapshot.parameters.instrument,!!bit);
        if(document.documentElement.dataset.motion!=='off')playTimers.push(setTimeout(()=>{
          examples.querySelectorAll('.pitch-chip').forEach(chip=>chip.classList.toggle('sounding',Number(chip.dataset.pitchIndex)===index));
        },50+index*320));
      });
      playTimers.push(setTimeout(()=>{if(token===playToken){playing=false;examples.querySelectorAll('.pitch-chip').forEach(chip=>chip.classList.remove('sounding'));updatePlayButton();}},2650));
    }catch{if(token===playToken){playing=false;updatePlayButton();message('audioError');}}
  }
  examples.querySelector('.phase-listen').addEventListener('click',audition);
  function renderExamples(){
    const C=copy(),pairings=examples.querySelector('.demo-pairings');pairings.replaceChildren();
    for(const [id,number,pitches] of [['xu','05','C D E · G A B'],['qian','01','C D E · F♯ G♯ A♯'],['kun','02','C C♯ D · E♭ E F']]){
      const button=node('button','demo-pairing');button.type='button';button.dataset.preset=id;
      button.append(node('span','demo-index',number),node('strong','',C[id]),node('span','demo-pitches',pitches),node('small','',C[id+'Note']));
      button.addEventListener('click',()=>{stopAudio();adapter.preset(id);phase='core';updateMaterial();});pairings.append(button);
    }
    const options=examples.querySelector('.phase-options');options.replaceChildren();
    phases.forEach(value=>{const button=node('button','',C[value]);button.type='button';button.dataset.phase=value;button.addEventListener('click',()=>{stopAudio();phase=value;updateMaterial();});options.append(button);});
    updateMaterial();
  }
  const uuid=()=>window.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  function createRecord(){
    const snapshot=adapter.snapshot();
    return {schema:SCHEMA,schemaVersion:1,id:uuid(),createdAt:new Date().toISOString(),appVersion:APP_VERSION,...snapshot,title:field('experimentTitle').value.trim().slice(0,120),research:{stage:field('experimentStage').value,source:field('experimentSource').value.slice(0,6000),mapping:field('experimentMapping').value.slice(0,6000),reflection:field('experimentReflection').value.slice(0,10000)}};
  }
  function validateRecord(record){
    if(!record||typeof record!=='object'||record.schema!==SCHEMA)throw Error('invalid');
    if(record.schemaVersion!==1)throw Error('unsupported');
    if(record.module!==adapter.module)throw Error('wrongModule');
    try{adapter.validate(record.parameters);}catch{throw Error('invalid');}
    if(typeof record.title!=='string'||record.title.length>120||typeof record.createdAt!=='string'||record.createdAt.length>80)throw Error('invalid');
    if(!record.research||!['','wuji','taiji','liangyi','sixiang','bagua','hexagrams','return'].includes(record.research.stage))throw Error('invalid');
    for(const [key,max] of [['source',6000],['mapping',6000],['reflection',10000]])if(typeof record.research[key]!=='string'||record.research[key].length>max)throw Error('invalid');
    return record;
  }
  function listRecords(){
    const records=[];
    try{
      for(let index=0;index<localStorage.length;index++){
        const key=localStorage.key(index);
        if(!key?.startsWith(PREFIX))continue;
        try{const record=validateRecord(JSON.parse(localStorage.getItem(key)));records.push({key,record});}catch{}
      }
    }catch{}
    return records.sort((a,b)=>b.record.createdAt.localeCompare(a.record.createdAt)||a.key.localeCompare(b.key));
  }
  function recordTitle(record){return record.title||`${copy().defaultTitle} · ${record.hexagram?.number||''}`;}
  function renderSaved(selected=field('experimentSaved').value){
    const select=field('experimentSaved');select.replaceChildren();
    const records=listRecords();const placeholder=node('option','',copy()[records.length?'choose':'empty']);placeholder.value='';select.append(placeholder);
    records.forEach(({key,record})=>{const option=node('option','',recordTitle(record)+' · '+record.createdAt.slice(0,16).replace('T',' '));option.value=key;select.append(option);});
    select.value=records.some(item=>item.key===selected)?selected:'';
  }
  function selectedRecord(){
    const key=field('experimentSaved').value;
    if(!key){message('chooseFirst');return null;}
    try{return {key,record:validateRecord(JSON.parse(localStorage.getItem(key)))};}catch{message('invalid');return null;}
  }
  function store(record){
    const key=PREFIX+record.id;
    try{localStorage.setItem(key,JSON.stringify(record));}catch{throw Error('storageError');}
    renderSaved(key);return record;
  }
  function restore(record){
    validateRecord(record);adapter.restore(record.parameters);
    field('experimentTitle').value=record.title;
    field('experimentStage').value=record.research.stage;
    field('experimentSource').value=record.research.source;
    field('experimentMapping').value=record.research.mapping;
    field('experimentReflection').value=record.research.reflection;
  }
  function download(record,format='json'){
    const report=format==='html';
    const blob=new Blob([report?reportHtml(record):JSON.stringify(record,null,2)],{type:report?'text/html;charset=utf-8':'application/json;charset=utf-8'});
    const url=URL.createObjectURL(blob),anchor=node('a');
    anchor.href=url;anchor.download='IChing_experiment_'+record.createdAt.replace(/[^0-9]/g,'').slice(0,14)+'.'+format;
    document.body.append(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);
  }
  const escape=value=>String(value??'').replace(/[&<>"']/g,character=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  function reportHtml(record){
    const C=copy(),label=key=>C[key],row=(key,value)=>`<tr><th>${escape(label(key))}</th><td>${escape(value)}</td></tr>`;
    const p=record.parameters,h=record.hexagram,material=record.material;
    const settings=Object.entries(p).filter(([key])=>!['lower','upper','tonic','moving','slide'].includes(key)).map(([key,value])=>key+' = '+String(value)).join('\n');
    const stage=window.IChingResearch.stages.find(item=>item.id===record.research.stage)?.name[lang()]||C.stageNone;
    return `<!doctype html><html lang="${lang()==='zh'?'zh-CN':'en'}"><head><meta charset="utf-8"><title>${escape(record.title||C.reportTitle)}</title><style>body{max-width:850px;margin:40px auto;padding:0 25px;font:14px/1.8 Georgia,"Microsoft YaHei",serif;color:#17251f}h1{font-size:27px;font-weight:400}h2{font-size:19px;margin-top:30px}table{border-collapse:collapse;width:100%;font-size:12px}th,td{border:1px solid #d5d5ca;padding:9px 12px;text-align:left;vertical-align:top;white-space:pre-wrap;overflow-wrap:anywhere}th{width:29%;background:#f3f0e6;font-weight:400}pre,p.notes{font:inherit;white-space:pre-wrap;overflow-wrap:anywhere}small{color:#687267}button{padding:9px 16px;background:#ece5d0;border:1px solid #9d946c;cursor:pointer}@media print{body{margin:0;max-width:none}button{display:none}h2{break-after:avoid}tr{break-inside:avoid}@page{size:A4;margin:18mm}}</style></head><body><button onclick="window.print()">${escape(C.printAction)}</button><h1>${escape(record.title||C.reportTitle)}</h1><p>${escape(C.reportTitle)} · Ruizhe Zhang</p><table>${row('date',record.createdAt)}${row('module',record.module==='laboratory'?C.lab:C.fortune)}${row('ruleVersion',record.ruleVersion)}${row('appVersion',record.appVersion)}${row('recordId',record.id)}${row('hexagram','#'+h.number+' '+(lang()==='zh'?h.zh:h.en))}${row('lower',p.lower)}${row('upper',p.upper)}${row('tonic',['C','C♯','D','E♭','E','F','F♯','G','A♭','A','B♭','B'][p.tonic])}${row('moving',p.moving+1)}${row('slide',p.slide)}${row('settings',settings)}</table><h2>${escape(C.material)}</h2><table>${row('raw',material.rawNotes.join(' · '))}${row('core',material.coreNotes.join(' · '))}${row('sounding',material.soundingNotes.join(' · '))}${row('shift','T'+(record.rule.upperShift>0?'+':'')+record.rule.upperShift)}</table><h2>${escape(C.notes)}</h2><table>${row('stage',stage)}${row('source',record.research.source)}${row('mapping',record.research.mapping)}${row('reflection',record.research.reflection)}</table><p><small>${escape(C.sampleNotice)}</small></p></body></html>`;
  }
  const actions={
    save(){try{store(createRecord());message('savedOk');}catch(error){message(error.message);}},
    export(){download(createRecord());message('exported');},
    print(){
      const record=createRecord(),markup=reportHtml(record);
      const popup=window.open?.('','_blank');
      if(popup){popup.opener=null;popup.document.open();popup.document.write(markup);popup.document.close();}
      else download(record,'html');
      message('printReady');
    },
    import(){field('experimentImport').click();},
    load(){const item=selectedRecord();if(item)try{restore(item.record);message('restored');}catch{message('invalid');}},
    exportSaved(){const item=selectedRecord();if(item){download(item.record);message('exported');}},
    remove(){const item=selectedRecord();if(item&&window.confirm(copy().deleteConfirm)){try{localStorage.removeItem(item.key);renderSaved();message('deleted');}catch{message('storageError');}}}
  };
  book.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',()=>actions[button.dataset.action]()));
  async function importText(source){
    if(typeof source!=='string'||source.length>1000000)throw Error('fileLarge');
    let record;
    try{record=JSON.parse(source);}catch{throw Error('invalid');}
    validateRecord(record);
    // Validate the full record before restoring. Fresh IDs preserve any earlier
    // local record when the same JSON file is imported again.
    restore(record);
    const canonical=adapter.snapshot();
    const imported={...record,...canonical,id:uuid(),importedFrom:typeof record.id==='string'?record.id.slice(0,100):'',importedAt:new Date().toISOString(),appVersion:APP_VERSION};
    store(imported);message('imported');return imported;
  }
  field('experimentImport').addEventListener('change',async event=>{
    const file=event.target.files?.[0];if(!file)return;
    try{if(file.size>1000000)throw Error('fileLarge');await importText(await file.text());}catch(error){message(error.message in copy()?error.message:'invalid');}finally{event.target.value='';}
  });
  function translate(){
    const C=copy();
    examples.querySelectorAll('[data-copy]').forEach(element=>element.textContent=C[element.dataset.copy]);
    book.querySelectorAll('[data-copy]').forEach(element=>element.textContent=C[element.dataset.copy]);
    book.querySelectorAll('[data-placeholder]').forEach(element=>element.placeholder=C[element.dataset.placeholder]);
    const select=field('experimentStage'),selected=select.value;select.replaceChildren();
    const empty=node('option','',C.stageNone);empty.value='';select.append(empty);
    window.IChingResearch.stages.forEach(stage=>{const option=node('option','',stage.name[lang()]);option.value=stage.id;select.append(option);});
    select.value=selected||'';renderExamples();renderSaved();
  }
  document.addEventListener('iching-composition-change',()=>{stopAudio();updateMaterial();});
  new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  window.addEventListener('storage',event=>{if(event.key?.startsWith(PREFIX))renderSaved();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAudio();});
  translate();
  window.IChingExperiments={createRecord,validateRecord,restore,importText,listRecords,reportHtml,stopAudio,selectPhase(value){if(phases.includes(value)){stopAudio();phase=value;updateMaterial();}},audition,get phase(){return phase;}};
})();
