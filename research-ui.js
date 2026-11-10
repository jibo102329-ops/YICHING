(() => {
  'use strict';
  const data = window.IChingResearch;
  const svg = (content, box = '0 0 100 100') => `<svg viewBox="${box}" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">${content}</svg>`;
  function taiji() {
    return svg('<circle cx="50" cy="50" r="44" fill="#e8dec0" stroke="#c5b17e" stroke-width=".65"/><path d="M50 6 A44 44 0 0 1 50 94 A22 22 0 0 0 50 50 A22 22 0 0 1 50 6" fill="#1b352c"/><circle cx="50" cy="28" r="5.5" fill="#e8dec0"/><circle cx="50" cy="72" r="5.5" fill="#1b352c"/>');
  }
  function lines(bits, x, y, width, gap = 13, weight = 4) {
    return [...bits].reverse().map((bit, row) => {
      const yy = y + row * gap;
      const ends = bit ? [[x, x + width]] : [[x, x + width * .42], [x + width * .58, x + width]];
      return ends.map(([a,b]) => `<path d="M${a} ${yy}H${b}" stroke="currentColor" stroke-width="${weight}"/>`).join('');
    }).join('');
  }
  function symbol(kind) {
    if (kind === 'wuji') return svg('<circle cx="50" cy="50" r="32" stroke="currentColor" stroke-width="1.4"/>');
    if (kind === 'taiji') return taiji();
    if (kind === 'liangyi') return svg(lines([0],10,32,80,0,5) + lines([1],10,68,80,0,5));
    if (kind === 'sixiang') return svg([[0,0],[1,0],[0,1],[1,1]].map((bits,i) => lines(bits,7+(i%2)*49,22+Math.floor(i/2)*45,36,12,4)).join(''));
    if (kind === 'bagua') return svg(data.trigrams.map((t,i) => lines(t.bits,3+(i%4)*25,16+Math.floor(i/4)*48,19,9,2.6)).join(''));
    if (kind === 'hexagrams') return svg(data.trigrams.map((upper,r) => data.trigrams.map((lower,c) => lines([...lower.bits,...upper.bits],2+c*12.3,3+r*12.3,9,1.65,.85)).join('')).join(''));
    return svg(lines([1,1,1,0,1,0],21,15,58,13,4));
  }
  function stageVisual(index) {
    if (index === 0) {
      const points = Array.from({length:20},(_,i) => {
        const x=12+(i*31%79), y=11+(i*19%81), radius=i%3===0?1.6:.8;
        return `<circle cx="${x}" cy="${y}" r="${radius}" fill="currentColor" opacity="${.2+(i%5)*.12}"/>`;
      }).join('');
      return svg(`<g class="svg-drift">${points}<path d="M12 63Q40 22 62 57T93 41" stroke="currentColor" opacity=".4" stroke-width=".7"/></g>`);
    }
    if (index === 1) return taiji();
    if (index === 2) return svg('<g class="svg-voice-a"><path d="M5 28Q28 5 49 34T95 24" stroke="currentColor" stroke-width="1.6"/></g><g class="svg-voice-b"><path d="M5 64Q33 85 50 58T95 66" stroke="currentColor" opacity=".45" stroke-width="1.6"/></g><path class="svg-flow-line" d="M9 47H91" stroke="currentColor" opacity=".25"/><circle cx="50" cy="47" r="3" fill="currentColor"/>');
    if (index === 3) return svg([.1,.25,.4,.65].map((a,i) => `<rect x="${5+(i%2)*48}" y="${5+Math.floor(i/2)*48}" width="42" height="42" rx="3" fill="currentColor" fill-opacity="${a}" stroke="currentColor" stroke-opacity=".4"/>`).join(''));
    if (index === 4) return symbol('bagua');
    if (index === 5) return svg(lines([1,1,1],3,18,34,11,3)+lines([0,1,0],63,18,34,11,3)+'<path class="svg-flow-line" d="M20 53Q50 79 80 53" stroke="currentColor" opacity=".5"/><circle cx="50" cy="77" r="11" stroke="currentColor" stroke-width=".8"/><circle cx="50" cy="77" r="2" fill="currentColor"/>');
    return svg('<circle cx="50" cy="50" r="32" stroke="currentColor" opacity=".5" stroke-width=".9"/><path d="M15 39H34M44 39H57M68 39H84M23 54H37M48 54H54M69 54H77M38 68H43M60 68H64" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".5"/>');
  }
  function mountCycle(element, language = 'zh') {
    if (element._researchController) return element._researchController;
    let selected = 0, lang = language, interval = null;
    const uid = element.id || 'researchCycle';
    function stop() { if(interval) { clearInterval(interval); interval=null; } }
    function reduced() { return document.documentElement.dataset.motion==='off' || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches; }
    function render() {
      const stage = data.stages[selected];
      element.innerHTML = `<div class="cycle-tools"><p>${lang==='zh'?'宏观结构 / 材料关系 / 具体操作':'FORM / RELATIONSHIPS / TECHNIQUES'}</p><button class="cycle-play" type="button" ${reduced()?'disabled':''}>${interval?(lang==='zh'?'暂停循环 Ⅱ':'Pause cycle Ⅱ'):(lang==='zh'?'播放循环 ▷':'Play cycle ▷')}</button></div>
        <div class="cycle-stage-tabs" role="tablist" aria-label="${lang==='zh'?'七阶段作曲规则':'Seven-stage compositional rules'}">${data.stages.map((s,i) => `<button type="button" class="cycle-stage-tab ${i===selected?'active':''}" id="${uid}-tab-${i}" role="tab" aria-selected="${i===selected}" aria-controls="${uid}-detail" tabindex="${i===selected?'0':'-1'}" data-stage-index="${i}"><span>0${i+1}</span><strong>${s.name[lang]}</strong><small>${s.label[lang]}</small></button>`).join('')}</div>
        <div class="stage-detail stage-enter" id="${uid}-detail" role="tabpanel" aria-labelledby="${uid}-tab-${selected}"><div class="stage-visual">${stageVisual(selected)}<small>${stage.name.en.toUpperCase()}</small></div><div><h3>${stage.name[lang]} <span style="opacity:.45;font-size:.6em">/ 0${selected+1}</span></h3><p class="stage-concept">${stage.concept[lang]}</p><div class="stage-prose"><div><h4>${lang==='zh'?'材料与范围':'MATERIALS AND SCOPE'}</h4><p>${stage.scope[lang]}</p></div><div><h4>${lang==='zh'?'可选择的作曲操作':'COMPOSITIONAL OPTIONS'}</h4><p>${stage.methods[lang]}</p></div></div><p class="stage-example">${stage.example[lang]}</p></div></div>`;
      element.querySelectorAll('[data-stage-index]').forEach(button => {
        button.addEventListener('click',() => select(Number(button.dataset.stageIndex)));
        button.addEventListener('keydown',event => {
          let next=selected;
          if(event.key==='ArrowRight') next=(selected+1)%7;
          else if(event.key==='ArrowLeft') next=(selected+6)%7;
          else if(event.key==='Home') next=0;
          else if(event.key==='End') next=6;
          else return;
          event.preventDefault(); select(next);
          element.querySelector(`[data-stage-index="${next}"]`).focus({preventScroll:true});
        });
      });
      element.querySelector('.cycle-play').addEventListener('click',() => {
        if(interval) stop();
        else if(!reduced()) interval=setInterval(() => select((selected+1)%7,false),5500);
        render();
      });
    }
    function select(index, user = true) {
      selected = Math.max(0,Math.min(6,index));
      if(user) stop();
      render();
      document.dispatchEvent(new CustomEvent('research-stage-change',{detail:{index:selected}}));
    }
    const controller = {select,language(value){lang=value;render();},motion(){if(reduced()) stop();render();},pause(){stop();render();},get selected(){return selected;}};
    element._researchController=controller;
    render();
    return controller;
  }
  window.ResearchUI = {taiji,lines,symbol,stageVisual,mountCycle};
})();
