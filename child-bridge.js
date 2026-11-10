(() => {
  'use strict';
  const app=document.body.dataset.application;
  const UI=window.ResearchUI;
  let language=document.documentElement.lang==='en'?'en':'zh';
  let cycle=null;
  const stageSection=document.getElementById('sevenStageCycle');
  if(stageSection) {
    stageSection.dataset.researchUi='';
    stageSection.classList.add('refreshed-cycle');
    stageSection.innerHTML='<p class="eyebrow">SEVEN STAGES · AN ADAPTABLE FRAMEWORK</p><h2 id="cycleHeading"></h2><p id="cycleScope"></p><div class="cycle-widget" id="laboratoryCycle" data-research-ui></div>';
    cycle=UI.mountCycle(document.getElementById('laboratoryCycle'),language);
  }
  function syncContent() {
    language=document.documentElement.lang==='en'?'en':'zh';
    if(cycle) {
      document.getElementById('cycleHeading').textContent=language==='zh'?'七阶段生成与回归循环':'The seven-stage compositional cycle';
      document.getElementById('cycleScope').textContent=language==='zh'?'宏观曲式 → 材料关系 → 具体技法。用于单部作品、多个乐章或作品集；适用于室内乐、交响乐、电子与混合媒介。':'Formal structure → material relationships → techniques. Apply within one work, across movements or across a portfolio, using chamber, orchestral, electronic or mixed media.';
      cycle.language(language);
    }
    document.querySelectorAll('[data-copy-zh][data-copy-en]').forEach(node => node.textContent=language==='zh'?node.dataset.copyZh:node.dataset.copyEn);
  }
  function stopAudio() {
    window.MusicVoices?.stop();
    document.querySelectorAll('audio').forEach(audio => audio.pause());
    cycle?.pause();
  }
  const originalLanguage=window.setSiteLanguage;
  window.setSiteLanguage=value => {
    if(!['en','zh'].includes(value)) return;
    originalLanguage?.(value);
    document.documentElement.lang=value==='zh'?'zh-CN':'en';
    syncContent();
  };
  new MutationObserver(syncContent).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  window.addEventListener('message',event => {
    if(event.source!==window.parent || event.data?.channel!=='iching-research') return;
    const message=event.data;
    if(message.type==='configure') {
      if(['on','off'].includes(message.motion)) document.documentElement.dataset.motion=message.motion;
      window.setSiteLanguage(message.lang);
      cycle?.motion();
      if(!message.visible) stopAudio();
    }
    if(message.type==='preset'&&['xu','qian','kun'].includes(message.id)){window.IChingExperimentAdapter?.preset(message.id);document.getElementById('experimentExamples')?.scrollIntoView({behavior:document.documentElement.dataset.motion==='off'?'instant':'smooth'});}
    if(message.type==='navigate' && typeof message.section==='string') {
      document.getElementById(message.section)?.scrollIntoView({behavior:document.documentElement.dataset.motion==='off'?'instant':'smooth'});
    }
  });
  document.querySelectorAll('[data-parent-section]').forEach(button => button.addEventListener('click',() => {
    if(window.parent!==window) window.parent.postMessage({channel:'iching-research',type:'navigate',section:button.dataset.parentSection},'*');
    else location.href='index.html#'+button.dataset.parentSection;
  }));
  document.querySelectorAll('audio').forEach(audio => audio.addEventListener('play',() => {
    document.querySelectorAll('audio').forEach(other => {if(other!==audio)other.pause();});
  }));
  syncContent();
  window.parent.postMessage({channel:'iching-research',type:'ready',application:app},'*');
})();
