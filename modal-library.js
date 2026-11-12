/* Equal-tempered reference patterns and pitch-set comparisons. */
(() => {
  'use strict';
  const sources = {
    chinese: { title: 'Chinese and Western modes and scales · Journal of New Music Research', url: 'https://doi.org/10.1080/09298215.2024.2311650' },
    japanese: { title: 'Japan Arts Council · Five-note scales', url: 'https://www2.ntj.jac.go.jp/dglib/contents/learn/edc29/shiru/shikumi/onkai/goon/index.html' },
    tuning: { title: 'Japan Sankyoku Association · Terminology', url: 'https://sankyoku.01.ows-rs.com/term.php' },
    western: { title: 'Open Music Theory · Modal schemas', url: 'https://viva.pressbooks.pub/openmusictheory/chapter/modal-schemas/' }
  };
  const profiles = [];
  function add(id, family, zh, en, intervals, degrees, descriptionZh, descriptionEn, source) {
    profiles.push({ id, family, zh, en, intervals, degrees, descriptionZh, descriptionEn, source });
  }
  add('gong', 'chinese', '中国宫五声', 'Chinese gong pentatonic', [0,2,4,7,9], '1 · 2 · 3 · 5 · 6', '宫为中心，突出宫、徵的支撑以及级进与三度的交替。', 'Use gong as the centre, supported by zhi, with stepwise and third-based motion.', 'chinese');
  add('shang', 'chinese', '中国商五声', 'Chinese shang pentatonic', [0,2,5,7,10], '1 · 2 · 4 · 5 · ♭7', '商为中心的五声旋转；围绕中心音设计落音与句法。', 'A shang-centred rotation. Establish its centre through phrase endings and emphasis.', 'chinese');
  add('jue', 'chinese', '中国角五声', 'Chinese jue pentatonic', [0,3,5,8,10], '1 · ♭3 · 4 · ♭6 · ♭7', '角为中心的五声旋转；音级写法以所选中心音为 1。', 'A jue-centred rotation, numbered relative to the selected centre.', 'chinese');
  add('zhi', 'chinese', '中国徵五声', 'Chinese zhi pentatonic', [0,2,5,7,9], '1 · 2 · 4 · 5 · 6', '徵为中心；相同音集可通过落音、重音与持续音呈现不同中心。', 'A zhi-centred rotation. Cadences, accents and drones can establish a new centre within a shared collection.', 'chinese');
  add('yu', 'chinese', '中国羽五声', 'Chinese yu pentatonic', [0,3,5,7,10], '1 · ♭3 · 4 · 5 · ♭7', '羽为中心的五声旋转，可结合装饰、音区与句尾延长。', 'A yu-centred rotation, developed through ornament, register and extended phrase endings.', 'chinese');
  add('gong6-qingjiao', 'chinese', '宫六声 · 加清角', 'Gong hexatonic · added qingjiao', [0,2,4,5,7,9], '1 · 2 · 3 · 4 · 5 · 6', '五声骨干加入清角 4；可将清角处理为经过音或独立结构音。', 'Add qingjiao, degree 4, to the gong pentatonic framework, as a passing or structural tone.', 'chinese');
  add('gong6-biangong', 'chinese', '宫六声 · 加变宫', 'Gong hexatonic · added biangong', [0,2,4,7,9,11], '1 · 2 · 3 · 5 · 6 · 7', '五声骨干加入变宫 7；需卦 C 调默认核心可完整保留此音集。', 'Add biangong, degree 7, to the gong pentatonic framework. The default C-based Xu core contains this entire collection.', 'chinese');
  add('qingyue', 'chinese', '清乐宫七声', 'Qingyue gong heptatonic', [0,2,4,5,7,9,11], '1 · 2 · 3 · 4 · 5 · 6 · 7', '加入清角 4 与变宫 7。这里采用常见理论音阶表示，历史使用需结合具体曲谱。', 'Add qingjiao, 4, and biangong, 7. This is a conventional theoretical representation. Historical uses require specific scores.', 'chinese');
  add('yayue', 'chinese', '雅乐宫七声', 'Yayue gong heptatonic', [0,2,4,6,7,9,11], '1 · 2 · 3 · ♯4 · 5 · 6 · 7', '加入变徵 ♯4 与变宫 7；十二平均律下与现代利底亚音阶同构，可分别发展句法与文化参照。', 'Add bianzhi, ♯4, and biangong, 7. Its 12-TET pitch pattern matches modern Lydian. Develop phrasing and cultural references for each interpretation.', 'chinese');
  add('yanyue', 'chinese', '燕乐宫七声', 'Yanyue gong heptatonic', [0,2,4,5,7,9,10], '1 · 2 · 3 · 4 · 5 · 6 · ♭7', '加入清角 4 与闰 ♭7；记录闰音的使用方式与参考版本。', 'Add qingjiao, 4, and run, ♭7. Document the use of run and the source edition.', 'chinese');
  add('ritsu', 'japanese', '日本律音阶', 'Japanese ritsu', [0,2,5,7,9], '1 · 2 · 4 · 5 · 6', '小泉文夫四类五声音阶之一；四度框架内的中间音形成律的特征。', 'One of Koizumi Fumio’s four five-note types, defined through the intermediate tone within a fourth-based frame.', 'japanese');
  add('minyo', 'japanese', '日本民谣音阶', 'Japanese minyo', [0,3,5,7,10], '1 · ♭3 · 4 · 5 · ♭7', '采用民谣类五声音阶表示；结合具体曲调的重音、装饰与收束方式。', 'A minyo-type five-note representation. Consider the accents, ornaments and cadences of the selected repertoire.', 'japanese');
  add('in', 'japanese', '日本都节音阶', 'Japanese miyakobushi', [0,1,5,7,8], '1 · ♭2 · 4 · 5 · ♭6', '都节类五声的平均律表示；实际旋律可有方向性与音高变化。', 'An equal-tempered miyakobushi-type pattern. Melodic direction and pitch inflection depend on repertoire.', 'japanese');
  add('ryukyu', 'japanese', '琉球音阶', 'Ryukyuan scale', [0,4,5,7,11], '1 · 3 · 4 · 5 · 7', '四度框架中大三度中间音的五声类型；可探索长音、装饰与句末重心。', 'A five-note type with a major-third intermediate tone inside the fourth frame. Explore sustained notes, ornament and cadential emphasis.', 'japanese');
  add('hirajoshi', 'japanese', '平调子 · 常见转写', 'Hirajoshi · common transcription', [0,2,3,7,8], '1 · 2 · ♭3 · 5 · ♭6', '采用常见现代转写；筝的调弦、旋律方向与不同版本应另作记录。', 'A common modern transcription. Record the koto tuning, melodic direction and edition separately.', 'tuning');
  add('ionian', 'western', '伊奥尼亚式', 'Ionian', [0,2,4,5,7,9,11], '1 · 2 · 3 · 4 · 5 · 6 · 7', '现代大调式音阶参照，可用中心音与级进塑造句法。', 'A modern major-mode reference. Establish phrasing through the centre and stepwise motion.', 'western');
  add('dorian', 'western', '多利亚式', 'Dorian', [0,2,3,5,7,9,10], '1 · 2 · ♭3 · 4 · 5 · 6 · ♭7', '现代多利亚音阶，关注大六度；凯尔特相关使用可注明曲目和地域。', 'Modern Dorian, with its characteristic major sixth. For Celtic-related use, specify the repertoire and region.', 'western');
  add('phrygian', 'western', '弗里吉亚式', 'Phrygian', [0,1,3,5,7,8,10], '1 · ♭2 · ♭3 · 4 · 5 · ♭6 · ♭7', '现代调式表示，突出中心音上方的小二度。', 'A modern modal representation, emphasising the minor second above the centre.', 'western');
  add('lydian', 'western', '利底亚式', 'Lydian', [0,2,4,6,7,9,11], '1 · 2 · 3 · ♯4 · 5 · 6 · 7', '♯4 为特征音；需卦六音核心加入 ♯4 后可展开此七声音阶。', 'The raised fourth is characteristic. Add ♯4 to the Xu six-note core to obtain this seven-note pattern.', 'western');
  add('mixolydian', 'western', '混合利底亚式', 'Mixolydian', [0,2,4,5,7,9,10], '1 · 2 · 3 · 4 · 5 · 6 · ♭7', '现代调式表示，突出小七度，可参考具体民间或当代曲目。', 'A modern modal reference featuring the minor seventh, with repertoire-specific folk or contemporary applications.', 'western');
  add('aeolian', 'western', '爱奥利亚式', 'Aeolian', [0,2,3,5,7,8,10], '1 · 2 · ♭3 · 4 · 5 · ♭6 · ♭7', '自然小调式参照，关注小六度及句末中心。', 'A natural-minor reference, with attention to the minor sixth and cadential centre.', 'western');
  add('locrian', 'western', '洛克里亚式', 'Locrian', [0,1,3,5,6,8,10], '1 · ♭2 · ♭3 · 4 · ♭5 · ♭6 · ♭7', '减五度与小二度形成紧张，可结合持续音探索中心稳定性。', 'A diminished fifth and minor second create tension. A drone can support experiments with tonal stability.', 'western');
  add('hungarian', 'other', '匈牙利小调式', 'Hungarian minor', [0,2,3,6,7,8,11], '1 · 2 · ♭3 · ♯4 · 5 · ♭6 · 7', '现代命名的音阶参照；文化用法可补充具体演奏传统与来源。', 'A modern named scale. Add specific performance traditions and sources when developing a cultural interpretation.');
  add('hijaz', 'other', '希贾兹四音列参照', 'Hijaz tetrachord reference', [0,1,4,5], '1 · ♭2 · 3 · 4', '四音框架的十二平均律示意。完整 maqam 还涉及音准、旋律行进与演奏惯例。', 'A 12-TET illustration of a four-note frame. A full maqam also involves intonation, melodic development and performance practice.');
  add('whole', 'synthetic', '全音阶', 'Whole-tone', [0,2,4,6,8,10], '1 · 2 · 3 · ♯4 · ♯5 · ♯6', '对称全音音场，纯乾默认极点。可通过音区、节奏与音色创造方向。', 'A symmetrical whole-tone field, the default pure-Qian pole. Create direction through register, rhythm and timbre.');
  add('chromatic6', 'synthetic', '半音六音核', 'Chromatic hexachord', [0,1,2,3,4,5], '1 · ♭2 · 2 · ♭3 · 3 · 4', '六个连续半音，纯坤默认音场。可探索密度与声部展开。', 'Six consecutive semitones, the default pure-Kun field. Explore density and the distribution of voices.');
  add('octatonic', 'synthetic', '八音音阶', 'Octatonic', [0,1,3,4,6,7,9,10], '1 · ♭2 · ♭3 · 3 · ♯4 · 5 · 6 · ♭7', '半音与全音交替的对称音场。', 'A symmetrical field of alternating semitones and tones.');
  add('acoustic', 'synthetic', '声学音阶', 'Acoustic scale', [0,2,4,6,7,9,10], '1 · 2 · 3 · ♯4 · 5 · 6 · ♭7', '升四度与降七度并置的现代调式参照。', 'A modern modal reference combining a raised fourth and a lowered seventh.');

  const families = [
    ['all','全部音阶','All scales'], ['chinese','中国五声 · 六声 · 七声','Chinese · 5 / 6 / 7 notes'],
    ['japanese','日本与琉球','Japan & Ryukyu'], ['western','欧洲调式','European modes'],
    ['other','其他地区参照','Other regional references'], ['synthetic','人工与对称音阶','Synthetic & symmetrical']
  ];
  const mod = value => (value % 12 + 12) % 12;
  const pitches = (profile, centre = 0) => profile.intervals.map(value => mod(value + centre));
  function compare(core, profile, centre = 0) {
    const original = [...new Set(core.map(mod))];
    const target = pitches(profile, centre);
    const shared = target.filter(value => original.includes(value));
    const added = target.filter(value => !original.includes(value));
    const omitted = original.filter(value => !target.includes(value));
    const relation = !added.length && !omitted.length ? 'exact' : !added.length ? 'subset' : !omitted.length ? 'extension' : 'remapping';
    return { profile, centre, target, shared, added, omitted, relation, cost: added.length + omitted.length };
  }
  function matches(core, family = 'all') {
    return profiles.filter(profile => family === 'all' || profile.family === family)
      .flatMap(profile => Array.from({length:12}, (_, centre) => compare(core, profile, centre)))
      .sort((a,b) => a.cost - b.cost || a.added.length - b.added.length || a.centre - b.centre);
  }
  function suggestions(core) {
    const ranked = matches(core);
    const selected = [];
    const usedProfiles = new Set();
    function selectFirst(predicate) {
      const candidate = ranked.find(item => !usedProfiles.has(item.profile.id) && predicate(item));
      if (candidate) {
        selected.push(candidate);
        usedProfiles.add(candidate.profile.id);
      }
    }
    // Show the least invasive relationships first, then include other modal families.
    for (const relation of ['exact', 'subset', 'extension']) {
      selectFirst(item => item.relation === relation);
    }
    for (const [family] of families.slice(1)) {
      if (!selected.some(item => item.profile.family === family)) {
        selectFirst(item => item.profile.family === family);
      }
    }
    while (selected.length < 8) {
      selectFirst(() => true);
    }
    return selected;
  }
  window.IChingModes = Object.freeze({ version:'2026-11-12', profiles, sources, families, pitches, compare, matches,
    suggestions, legacyCatalog:() => profiles.map(p => [p.id,p.zh,p.en,p.intervals,p.descriptionZh,p.descriptionEn]) });
})();
