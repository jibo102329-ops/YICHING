(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const data = window.IChingResearch, UI=window.ResearchUI;
  const read = key => {try{return localStorage.getItem(key);}catch{return null;}};
  const save = (key,value) => {try{localStorage.setItem(key,value);}catch{}};
  let lang=read('iching.language')==='en'?'en':'zh';
  let motion=read('iching.motion') || (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches?'off':'on');
  let pendingPreset=null;
  let view='overview', diagramIndex=0, overviewScroll=0, previousFigureButton=null;
  const descriptions = [
    {zh:'未分化的状态。无极为本研究提供声音尚未明确成形的哲学参照。',en:'An undifferentiated state. Wuji provides a philosophical reference for sound before materials become clearly formed.'},
    {zh:'阴阳关系的整体原则。图中两极各包含另一极的痕迹，启发音乐中的对比与相互包含。',en:'The principle of yin-yang polarity. Each pole contains a trace of the other, suggesting contrast and mutual inclusion in music.'},
    {zh:'阳爻为实线，阴爻为断线。一条爻具有两种状态，可构成更复杂的符号组合。',en:'A yang line is solid and a yin line broken. These two states allow increasingly complex symbolic combinations.'},
    {zh:'两条爻的四种组合，2 × 2 = 4。作曲中可以借此组织四种可识别的状态。',en:'Four combinations of two lines, 2 × 2 = 4. In the proposed framework, these can organise four recognisable musical states.'},
    {zh:'三条爻的八种组合，2 × 2 × 2 = 8。每一卦具有名称与物象联想。默认三音核由作曲者另行设定。',en:'Eight combinations of three lines, 2 × 2 × 2 = 8. Each trigram has a name and symbolic associations. The default musical nuclei are specified by the composer.'},
    {zh:'上下两个三爻卦相叠，8 × 8 = 64。六条爻由下向上读。上下层的组合为材料互动提供结构模型。',en:'Pair a lower and an upper trigram, 8 × 8 = 64. Read the six lines from bottom to top. Their pairing offers a structural model for interactions between materials.'}
  ];
  const cycle=UI.mountCycle($('cycleWidget'),lang);
  document.querySelector('.brand-emblem').innerHTML=UI.taiji();
  $('heroSymbol').innerHTML=UI.taiji();
  $('xuSymbol').innerHTML=UI.symbol('xu');
  $('orbitalTrigrams').innerHTML=data.trigrams.map((t,i) => {
    const angle=i*Math.PI/4-Math.PI/2;
    return `<span class="orbital-trigram" style="left:${50+47*Math.cos(angle)}%;top:${50+47*Math.sin(angle)}%;transform:translate(-50%,-50%) rotate(${i*45}deg)"><svg viewBox="0 0 40 32" fill="none">${UI.lines(t.bits,2,5,36,10,2.5)}</svg></span>`;
  }).join('');
  function renderDiagram() {
    $('generativeDiagram').innerHTML=data.stages.slice(0,6).map((s,i) => `<button class="generation-node ${i===diagramIndex?'active':''}" type="button" aria-pressed="${i===diagramIndex}" data-node="${i}"><span class="node-index">0${i+1}</span><span class="node-symbol">${UI.symbol(s.id)}</span><strong>${s.name[lang]}</strong><small>${lang==='zh'?s.name.en:s.label.en}</small></button>`).join('');
    $('diagramIndex').textContent=`0${diagramIndex+1}`;
    $('diagramTitle').textContent=data.stages[diagramIndex].name[lang];
    $('diagramDescription').textContent=descriptions[diagramIndex][lang];
    $('generativeDiagram').querySelectorAll('[data-node]').forEach(button => button.addEventListener('click',() => {diagramIndex=Number(button.dataset.node);renderDiagram();}));
  }
  function sendPreset(frame){if(pendingPreset&&frame.id==='laboratoryFrame'){frame.contentWindow?.postMessage({channel:'iching-research',type:'preset',id:pendingPreset},'*');pendingPreset=null;}}
  function sendConfiguration(frame) {
    if(frame.hasAttribute('src')) frame.contentWindow?.postMessage({channel:'iching-research',type:'configure',lang,motion,visible:frame.id===`${view}Frame`},'*');
  }
  function syncFrames() { ['laboratoryFrame','fortuneFrame'].forEach(id => sendConfiguration($(id))); }
  function translate() {
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    document.title=lang==='zh'?'易经作曲系统 · 张睿哲 Ruizhe Zhang':'I Ching Composition System · Ruizhe Zhang';
    document.querySelectorAll('[data-zh][data-en]').forEach(element => element.textContent=element.dataset[lang]);
    $('languageToggle').textContent=lang==='zh'?'EN':'中文';
    $('languageToggle').setAttribute('aria-label',lang==='zh'?'Switch to English':'切换为中文');
    $('closeFigure').setAttribute('aria-label',lang==='zh'?'关闭图解':'Close figure');
    $('motionToggle').textContent=lang==='zh'?`动态 ${motion==='on'?'开':'关'}`:`Motion ${motion}`;
    cycle.language(lang); renderDiagram(); syncFrames();
  }
  function navigate(next, section) {
    if(!['overview','laboratory','fortune'].includes(next)) return;
    if(view==='overview' && next!=='overview') overviewScroll=window.scrollY;
    view=next;
    ['overview','laboratory','fortune'].forEach(name => $(name+'View').hidden=name!==view);
    document.querySelectorAll('.main-nav [data-view]').forEach(button => {
      button.classList.toggle('active',button.dataset.view===view);
      if(button.dataset.view===view) button.setAttribute('aria-current','page');
      else button.removeAttribute('aria-current');
    });
    if(view!=='overview') {
      document.querySelectorAll('#overviewView audio').forEach(audio => audio.pause());
      const frame=$(view+'Frame');
      if(!frame.hasAttribute('src')) frame.src=frame.dataset.src;
      cycle.pause(); window.scrollTo({top:0,behavior:'instant'});
    } else {
      requestAnimationFrame(() => section?$(section)?.scrollIntoView({behavior:motion==='on'?'smooth':'instant'}):window.scrollTo({top:overviewScroll,behavior:'instant'}));
    }
    syncFrames(); updateField();
  }
  document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click',() => {
    const destination=button.dataset.view;
    if(location.hash===`#${destination}`) navigate(destination);
    else location.hash=destination;
  }));
  window.addEventListener('hashchange',() => {
    const key=location.hash.slice(1);
    if(['laboratory','fortune'].includes(key)) navigate(key);
    else navigate('overview',['understanding','cycle','portfolio','listening'].includes(key)?key:null);
  });
  $('languageToggle').addEventListener('click',() => {lang=lang==='zh'?'en':'zh';save('iching.language',lang);translate();});
  function setMotion() {
    document.documentElement.dataset.motion=motion;
    $('motionToggle').setAttribute('aria-pressed',String(motion==='on'));
    $('motionToggle').textContent=lang==='zh'?`动态 ${motion==='on'?'开':'关'}`:`Motion ${motion}`;
    cycle.motion();syncFrames();updateField();
  }
  $('motionToggle').addEventListener('click',() => {motion=motion==='on'?'off':'on';save('iching.motion',motion);setMotion();});
  window.addEventListener('message',event => {
    const frame=['laboratoryFrame','fortuneFrame'].map($).find(frame => frame.contentWindow===event.source);
    if(!frame || event.data?.channel!=='iching-research') return;
    if(event.data.type==='ready'){sendConfiguration(frame);frame.dataset.ready='true';sendPreset(frame);}
    if(event.data.type==='navigate' && ['understanding','cycle','portfolio','listening'].includes(event.data.section)) {
      location.hash=event.data.section;
      navigate('overview',event.data.section);
    }
  });
  ['laboratoryFrame','fortuneFrame'].forEach(id => $(id).addEventListener('load',() => {sendConfiguration($(id));$(id).dataset.ready='true';sendPreset($(id));}));
  document.querySelectorAll('[data-demo-preset]').forEach(button=>button.addEventListener('click',()=>{
    pendingPreset=button.dataset.demoPreset;
    navigate('laboratory');
    if(location.hash!=='#laboratory')location.hash='laboratory';
    const frame=$('laboratoryFrame');if(frame.dataset.ready==='true')sendPreset(frame);
  }));
  const dialog=$('figureDialog');
  document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click',() => {
    previousFigureButton=button; $('largeFigure').src=button.dataset.image; $('downloadFigure').href=button.dataset.image;
    dialog.showModal();
  }));
  function closeFigure() {dialog.close();previousFigureButton?.focus();}
  $('closeFigure').addEventListener('click',closeFigure);
  dialog.addEventListener('click',event => {if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeFigure();}});
  dialog.addEventListener('close',() => previousFigureButton?.focus());
  document.querySelectorAll('#overviewView audio').forEach(audio => audio.addEventListener('play',() => {
    document.querySelectorAll('#overviewView audio').forEach(other => {if(other!==audio)other.pause();});
  }));
  if(typeof IntersectionObserver==='function') {
    document.documentElement.classList.add('motion-ready');
    const observer=new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.06});
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
  const canvas=$('fieldCanvas'), context=canvas.getContext?.('2d');
  const particles=Array.from({length:26},(_,i) => ({x:(i*67%97)/97,y:(i*43%89)/89,r:i%5===0?1.25:.65}));
  let animation=null, time=0;
  function drawField() {
    if(!context) return;
    const width=canvas.clientWidth || 500,height=canvas.clientHeight || 500,ratio=Math.min(window.devicePixelRatio||1,2);
    if(canvas.width!==Math.round(width*ratio)||canvas.height!==Math.round(height*ratio)){canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);}
    context.setTransform(ratio,0,0,ratio,0,0);context.clearRect(0,0,width,height);
    context.fillStyle='#d4bd7b';
    particles.forEach((point,i) => {context.globalAlpha=.16+(i%4)*.08;context.beginPath();context.arc(point.x*width+Math.sin(time*.0002+i)*5,point.y*height+Math.cos(time*.00015+i)*7,point.r,0,Math.PI*2);context.fill();});
  }
  function animate(timestamp) {
    animation=null;
    if(motion!=='on'||view!=='overview'||document.hidden) return;
    time=timestamp;drawField();animation=requestAnimationFrame(animate);
  }
  function updateField() {
    if(animation!==null){cancelAnimationFrame(animation);animation=null;}
    drawField();
    if(context&&motion==='on'&&view==='overview'&&!document.hidden) animation=requestAnimationFrame(animate);
  }
  window.addEventListener('resize',drawField);
  document.addEventListener('visibilitychange',() => {if(document.hidden)cycle.pause();updateField();});
  translate();setMotion();
  const initial=location.hash.slice(1);
  if(['laboratory','fortune'].includes(initial)) navigate(initial);
  else if(['understanding','cycle','portfolio','listening'].includes(initial)) navigate('overview',initial);
  window.IChingSite={navigate,setLanguage(value){if(['zh','en'].includes(value)){lang=value;translate();}},cycle,get view(){return view;},get language(){return lang;}};
})();
