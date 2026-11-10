/* Shared bilingual research content. Musical assignments are Ruizhe Zhang's proposals. */
window.IChingResearch = {
  revision: '2026-11-09',
  trigrams: [
    {id:'qian',zh:'乾',en:'Qian',imageZh:'天',imageEn:'Heaven',bits:[1,1,1],cell:'1–2–3'},
    {id:'kun',zh:'坤',en:'Kun',imageZh:'地',imageEn:'Earth',bits:[0,0,0],cell:'1–♭2–2'},
    {id:'zhen',zh:'震',en:'Zhen',imageZh:'雷',imageEn:'Thunder',bits:[1,0,0],cell:'5–1–♭2'},
    {id:'xun',zh:'巽',en:'Xun',imageZh:'风',imageEn:'Wind',bits:[0,1,1],cell:'3–4–6'},
    {id:'kan',zh:'坎',en:'Kan',imageZh:'水',imageEn:'Water',bits:[0,1,0],cell:'5–6–7'},
    {id:'li',zh:'离',en:'Li',imageZh:'火',imageEn:'Fire',bits:[1,0,1],cell:'1–♭3–3'},
    {id:'gen',zh:'艮',en:'Gen',imageZh:'山',imageEn:'Mountain',bits:[0,0,1],cell:'2–♭3–5'},
    {id:'dui',zh:'兑',en:'Dui',imageZh:'泽',imageEn:'Lake',bits:[1,1,0],cell:'6–1–2'}
  ],
  stages: [
    {
      id:'wuji', name:{zh:'无极',en:'Wuji'}, label:{zh:'材料萌生',en:'Emerging material'},
      concept:{zh:'未分化的声音中，材料开始浮现。',en:'Musical material begins to emerge from an undifferentiated sound field.'},
      scope:{zh:'自由节奏、噪音、模糊音高、稀疏事件，或尚未明确成形的旋律碎片。音高、脉搏与音色的清晰程度可由作曲者控制。',en:'Free rhythm, noise, blurred pitch, sparse events or emerging melodic fragments. The composer controls how clearly pitch, pulse and timbre become defined.'},
      methods:{zh:'环境音、气鸣、摩擦、刮奏、敲击、特殊拨弦与电子声音；使用不均匀密度、空间化和非线性展开，让声音逐渐获得形态。',en:'Use environmental sounds, air sounds, friction, scraping, percussion, unusual plucking or electronic sound. Vary density, space and nonlinear development as the material takes shape.'},
      example:{zh:'《太初》是无极阶段的作品案例，探索混乱开端与声音的未分化。',en:'Primordial provides a Wuji case study of chaotic beginnings and undifferentiated sound.'}
    },
    {
      id:'taiji',name:{zh:'太极',en:'Taiji'},label:{zh:'建立两极',en:'Establish polarity'},
      concept:{zh:'建立一组主要的两极关系，并让两极各自保留另一极的痕迹。',en:'Establish a principal polarity, with traces of each pole present within the other.'},
      scope:{zh:'可选择两个主题、两种调式、节奏、音色或音响状态。材料可来自同一文化，也可来自不同地区与传统。先明确本作品的主要对比维度。',en:'Choose two themes, modes, rhythmic or timbral states, or sound worlds. Materials may come from the same culture or from different traditions. Define the principal contrast for the work.'},
      methods:{zh:'清晰与模糊、连续与碎片、稳定与不稳定、共振与点描均可成为两极。三全音轴、全音与半音音场、不同调式中心可按需要选用；通过主题残片、共用音或音色渗入表现相互包含。',en:'Contrast clarity with ambiguity, continuity with fragments, stability with instability, or resonance with pointillism. A tritone axis, whole-tone and chromatic fields, or different modal centres are available options. Shared pitches, thematic traces and timbral infiltration can suggest mutual inclusion.'},
      example:{zh:'《帝女花》弦乐四重奏以主题的隐约显现与清晰呈现组织阴阳，两种状态中都可以出现两个主题。',en:'The developing Flower Princess quartet explores yin and yang through veiled and explicit thematic presentation. Both themes may appear within either state.'}
    },
    {
      id:'liangyi',name:{zh:'两仪',en:'Liangyi'},label:{zh:'对比与融合',en:'Contrast and interaction'},
      concept:{zh:'让两种已建立的材料进一步对话、碰撞、交换属性并形成新的联系。',en:'Develop the two established materials through dialogue, collision, exchanged attributes and emerging connections.'},
      scope:{zh:'强化主题、调式、音区、力度、密度或节奏的差异。作曲者可保持两者身份，也可使其在过程中逐渐融合，并说明转化如何发生。',en:'Intensify differences in theme, mode, register, dynamics, density or rhythm. Preserve the identities of the materials or gradually fuse them, making the process of transformation traceable.'},
      methods:{zh:'交替、模仿、对位、叠置、追逐与渐变；让材料 A 采用 B 的节奏或音色，让 B 吸收 A 的音程与轮廓。规则脉搏与自由节奏、旋律与噪音等可以交换角色。',en:'Alternate, imitate, layer, pursue, transform or combine contrapuntally. Give material A the rhythm or timbre of B, while B absorbs A’s intervals or contour. Pulse and free rhythm, or melody and noise, may exchange roles.'},
      example:{zh:'从 A 与 B 的鲜明对照，发展到共享片段、交叉变形或新的复合材料 C。',en:'Develop a contrast between A and B into shared fragments, intersecting transformations or a new composite material C.'}
    },
    {
      id:'sixiang',name:{zh:'四象',en:'Sixiang'},label:{zh:'分化四态',en:'Differentiate four states'},
      concept:{zh:'在两极关系之上，分化出四种可识别的音乐状态。',en:'Differentiate the principal polarity into four recognisable musical states.'},
      scope:{zh:'可交叉两个维度，例如主题清晰度 × 织体密度、运动速度 × 音色明暗，或音高中心 × 节拍规律性。四种调式、音色组、季节意象也可作为配置方式。',en:'Cross two dimensions, such as thematic clarity × textural density, speed × timbral brightness, or pitch centricity × pulse regularity. Four modes, timbral groups or seasonal images can also organise the states.'},
      methods:{zh:'为四态定义可听辨的特征，安排交替、并置、叠加与渐变。中国五声、印度拉格、中古调式、人工音阶等可作为选定的文化参照，并分别记录具体来源。',en:'Give each state audible features and organise alternation, juxtaposition, layering or gradual change. Selected Chinese pentatonic materials, Indian raga, medieval modes or synthetic scales can provide cultural references, with their sources documented individually.'},
      example:{zh:'清晰／稀疏、清晰／密集、模糊／稀疏、模糊／密集构成一个可扩展的四态模型。',en:'Clear/sparse, clear/dense, veiled/sparse and veiled/dense form one adaptable four-state model.'}
    },
    {
      id:'bagua',name:{zh:'八卦',en:'Bagua'},label:{zh:'八种配置',en:'Eight configurations'},
      concept:{zh:'将三爻组合转译为八种音乐配置，并以默认三音核提供可操作的起点。',en:'Translate three-line combinations into eight musical configurations, using default trichord nuclei as practical starting points.'},
      scope:{zh:'完整三爻查表选取音核。每种配置还可结合节奏、发音、音区、音色、密度与手势。文化来源在具体作品中选择，并可随语境重新配置。',en:'The whole trigram selects a lookup nucleus. Each configuration may also combine rhythm, articulation, register, timbre, density and gesture. Cultural sources are selected for individual works and may be remapped in context.'},
      methods:{zh:'默认音核为乾 1–2–3、坤 1–♭2–2、震 5–1–♭2、巽 3–4–6、坎 5–6–7、离 1–♭3–3、艮 2–♭3–5、兑 6–1–2。保留音程轮廓可移调，也可记录自选音核及其创作理由。',en:'Default nuclei are Qian 1–2–3, Kun 1–♭2–2, Zhen 5–1–♭2, Xun 3–4–6, Kan 5–6–7, Li 1–♭3–3, Gen 2–♭3–5 and Dui 6–1–2. Transpose while retaining the interval pattern, or document a freely chosen nucleus and its artistic purpose.'},
      example:{zh:'乾的全音倾向与坤的半音倾向构成默认极点，具体音乐性格通过节奏、配器和发展获得。',en:'Qian’s whole-tone tendency and Kun’s chromatic tendency establish default poles. Rhythm, orchestration and development shape their musical character.'}
    },
    {
      id:'hexagrams',name:{zh:'六十四卦',en:'64 Hexagrams'},label:{zh:'材料复合',en:'Combine and transform'},
      concept:{zh:'上下卦形成材料之间的关系，可展开为跨文化调式互动及多层声音结构。',en:'Pair upper and lower trigrams to organise relationships between materials, including cross-cultural modal interaction and layered sound structures.'},
      scope:{zh:'可采用调式并置、扩展、多调式、多调性、泛调性、复合节奏或频谱密度设计。选择合适的复杂度，允许不同卦象共享音高集合，并以节奏、音色和曲式行为加以区分。',en:'Explore modal juxtaposition or expansion, polymodality, polytonality, pantonality, rhythmic combinations or spectral density. Choose a suitable degree of complexity. Different hexagrams may share pitch collections and acquire distinct rhythmic, timbral and formal behaviours.'},
      methods:{zh:'默认最小干预规则为无重音时保留 T0，有重音时固定下卦，对上卦作最小消重音移位。纯乾采用 T+6 保留全音极点，纯坤采用 T+3 形成半音六音核。自由改配时记录音核、移调与文化来源。动爻的单音滑动可独立开启；变卦重新生成另行处理。',en:'Under the default minimum-intervention rule, retain T0 for disjoint nuclei. When pitches overlap, hold the lower nucleus and apply the smallest disjoint shift to the upper. Pure Qian uses T+6 to preserve its whole-tone pole; pure Kun uses T+3 for a chromatic six-note core. Document freely chosen nuclei, transpositions and cultural sources. Optional moving-line slides and regeneration of a changed hexagram are separate operations.'},
      example:{zh:'需卦为下乾 C–D–E 与上坎 G–A–B，无重音，采用 T0。《九域天籁》以唐宋与凯尔特素材的复合作为本阶段的乐队案例，三组卦象用于回顾性分析。',en:'Xu combines lower Qian C–D–E with upper Kan G–A–B and retains T0. Celestial Harmonies provides an orchestral case of Tang, Song and Celtic material interactions, with three selected hexagrams used for retrospective analysis.'}
    },
    {
      id:'return',name:{zh:'归无极',en:'Return to Wuji'},label:{zh:'消解与回响',en:'Dissolution and return'},
      concept:{zh:'将已形成的复杂关系逐渐消解，回到新的未分化状态，并与开篇建立联系。',en:'Dissolve developed musical relationships into a renewed undifferentiated state, recalling the opening.'},
      scope:{zh:'主题可以碎片化，中心感可以弱化，节奏可以消散，音色可以融合，声音也可以走向残影与静默。回归形式依作品的艺术构思决定。',en:'Fragment themes, weaken centricity, disperse rhythm, blend timbres or move towards sonic traces and silence. The form of return follows the work’s artistic purpose.'},
      methods:{zh:'安排渐弱、稀疏、衰减、音高模糊、时值拉伸或结构性停顿。通过开篇材料的变形、记忆或音色残留完成循环呼应。',en:'Use fading, thinning, decay, pitch blurring, temporal stretching or structural pauses. Transform or recall opening material through fragments, memory and timbral residue.'},
      example:{zh:'作为七阶段的第七个结构位置，可在一首作品的结尾，也可由作品集中的后续作品承担。',en:'As the seventh structural position, return may occur at the end of one work or in a later work within the portfolio.'}
    }
  ]
};
