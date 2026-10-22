# 最小干预规则更新包 / Minimum-intervention rules v2

张睿哲 Ruizhe Zhang · 21 October 2026

## 上传网站 / Website replacement
用 index.html 替换原 GitHub 仓库中的同名文件，完整保留原 assets 文件夹。未自动推送或部署。rules-preview.html 可单独预览规则页；主网站已内嵌规则及入门图，不需额外引用 rule-engine.js。主网站的作品资源仍依赖原 assets。
Replace index.html and retain the original assets folder. No remote push or deployment has been performed. The main file embeds its rules and explanatory graphics. Portfolio media still require the existing assets folder.

## 规则优先级 / Rule priority
1. 纯乾明确保留全音极点：CDE + F# G# A#，上卦 +6。此为艺术约束，不称为不受限制的最小移位。
2. 其余卦：原始上下音核没有共同音级，就保留原样（T0）。例如需卦 CDE + GAB。
3. 有重音才固定下卦，整体移动上卦，依次尝试 0,+1,-1,+2,-2,+3,-3,+4,-4,+5,-5,+6；取首个六音互异方案。保持三音核内部音程，等距时优先向上。纯坤自然得到 +3：CC#D + D#EF。
4. 不同卦可以共享集合，不再以64集合互异为目标。音序、中心、节奏、技法、音色、织体及曲式也构成差异。
5. 上卦整体移位、单声部动爻、变卦重新生成是三个操作。详细规则页默认关闭动爻；试听和 MIDI 使用页面最后一行的发声音高。动爻后重音可以作为声部汇合保留。
6. 文化参照独立选择。中国、欧洲、日本、匈牙利式及希贾兹四音核等仅是有条件的创作参照；不把一个十二平均律音阶当成完整 raga 或 maqam，不把唐代雅乐、敦煌、宋代曲调混称一个古调式。历史对应须注明具体谱本、转译及律制。

English summary: preserve the whole-tone Qian pole as an explicit +6 exception; otherwise retain disjoint nuclei and shift only overlapping upper cells by the smallest circular semitone distance, with upward tie-breaking. Kun uses the ordinary +3 minimum. Different hexagrams may share collections. Upper transposition, one-node slides and changed-hexagram regeneration remain separate. Cultural references do not establish historical derivation.

## Word 文件 / Word documents
修订标注版包含原有批注、本次中文批注和真实 Word 增删修订。Word 中选择“审阅 → 所有标记”查看；选择“无标记”可看最终文本。阅读版是接受同一组修订后的整洁副本。原主体样式、页面设置与旧图保留，需卦图更新，并在摘要后、背景前加入两张中英文图。新增说明不代表已完成实证验证。
The marked copy has native Word insertions/deletions plus Chinese comments. Review > All Markup displays the edits. The reading copy accepts the same edits. Existing formatting and page setup are retained; the Xu example is updated and two bilingual introductory figures are placed before the background. Proposed evaluation is not presented as completed evidence.

## 建议的研究记录 / Research documentation
每次保存规则版本、原始音列、移位理由、手动覆盖、动爻、发声音高、文化来源及排练反馈。用原始拼合、推荐最小干预、自由改配作对照；评价动机保持、听觉连续性、可演奏性和文化解释，而非只数音高。
Save rule versions, raw cells, shift reasons, overrides, slide settings, sounding pitches, cultural sources and rehearsal feedback. Compare raw, recommended and freely remapped studies. Assess motivic identity, continuity, performability and cultural interpretation, not just pitch counts.

## 核对范围 / Verification
64 个默认方案及 63 个普通最小移位规则已通过检查；无重音的组合均保持T0；纯乾极点例外单独检查。DOM 执行检查覆盖中英切换、自由移位、恢复推荐、动爻关闭／开启、非C主音下试听与MIDI一致性及命格板块同源数据。Word修订、批注、图像、样式和页面设置结构核对通过；图像已目视核对。当前环境无法进行浏览器视觉验收，且缺少LibreOffice，Word分页未渲染核对。请正式上传或提交前在浏览器和Word中打开检查。
Data and DOM tests passed. Native Word revisions/comments, matching accepted content, figures, styles and page setup checked. Graphics visually inspected. Browser visual rendering and Word pagination remain unverified in this environment.
