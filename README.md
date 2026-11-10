# 易经作曲系统网站更新包

本版以此前保存的最小干预规则网站源码为基础，界面更新日期为 2026 年 11 月 10 日。音乐规则沿用 2026 年 11 月 9 日整理的版本。

## 使用与上传

1. 解压后打开 index.html。首页、图解与七阶段规则可以直接阅读。
2. 将 index.html、laboratory.html、fortune.html、全部 CSS 和 JS 文件以及 assets 文件夹一并上传到原 GitHub 仓库根目录。
3. 保持文件名大小写和目录结构，等待原有 Vercel 项目部署成功后访问网站。

ZIP 需要先解压，再上传里面的文件。完整目录共 23 个文件，包含两部作品的音频与乐谱。

## 本次更新

- 新增研究首页、可点击的易经生成图解、七阶段规则面板及原始研究图放大与下载。
- 太极、两仪、四象、八卦与六十四卦按新的开放规则修订，中英文共用同一份研究内容。
- 加入低速轨道动画、阶段切换、可选循环演示及起卦六爻成形动画。动态开关与系统减少动态设置均可停止动画。
- 《太初》《九域天籁》的作者提供乐谱、音频及预览随包提供，采用站内相对路径。
- 保留原有六十四卦最小干预计算、试听、MIDI、文化调式、个人卦象、AI 网关设置及委托需求单入口。
- 补齐命格作曲的八卦下拉菜单、六个爻位及六十四卦表格英文。英文表格显示卦序与英文名称，中文与英文切换保留当前音乐设置。
- 首页与两个创作板块新增需、乾、坤三个试听入口，比较原始双三音核、合成核心和当前发声。需保留 T0，纯乾使用 T+6，纯坤使用 T+3。命格作曲继续应用其默认单音动爻滑动，作曲实验室可关闭滑动。
- 新增创作实验记录，保存当前音乐参数、研究阶段、材料出处、自由改配理由与反思。支持恢复、JSON 导入与导出，以及打印研究记录页或通过浏览器另存 PDF。
- 细化入门卡片、分阶段试听、音高提示、研究记录表单与六十四卦表格的视觉层次。窄屏表格横向滚动，动态服从现有开关与系统偏好。
- 修正命格作曲非 C 主音下 MIDI 导出与试听的八度一致性。

## 实验记录

记录保存在当前浏览器与当前网站地址的本地存储中。换浏览器、清除网站数据、从本地预览切换至线上域名时，需要先导出 JSON，再在目标地址导入。

每次保存生成一条新记录。导入同一 JSON 时生成新的本地编号，便于保留之前的实验。作曲实验室与命格作曲的参数范围不同，请在记录原来的板块导入。

记录包含音乐参数与主动填写的研究笔记。已载入的音色采样需要恢复后重新选择。名称、生日、个人提问及 AI 网关设置属于原命格表单，新的实验记录不自动采集这些字段。

“打印 / 保存 PDF”打开英文或中文研究记录页，再使用浏览器打印功能。浏览器阻止弹出页时，会下载一份可打开并打印的 HTML 记录。

## 内容与连接

默认三音核及七阶段音乐框架由张睿哲提出。文化素材、自由改配及回顾性作品分析分别说明。

命格模块采用原有姓名与出生信息映射。起卦动画展示该映射的生成过程。

AI 解读与 Suno 代理沿用可配置的服务端网关入口。实际调用需配置可用网关，页面中的 Suno 链接可直接打开服务网站。专业人士联系页由使用者填写公开 HTTPS 地址。

本更新包为网站源码与资源交付，线上版本以原仓库的实际部署结果为准。

## English

Upload the complete contents of this folder to the root of the existing GitHub repository. Keep assets and filenames intact. This buildless site contains a research overview, composition laboratory and Fortune-telling Composition module.

Shared bilingual research content is stored in research-content.js. The earlier minimum-intervention engine is retained. AI gateway and practitioner-contact settings remain configurable. Local assets include the composer-supplied recordings, scores and research diagrams. This package supplies source files for the existing hosting workflow.

The modal controls and all 64 matrix entries in Fortune-telling Composition now switch between Chinese and English. The three listening presets compare source nuclei, the combined core and the sounding result. A composition notebook saves musical settings and research notes, restores experiments within their original module, imports and exports JSON, and creates a printable record page.

Records are local to the current browser and site origin. Export JSON before transferring to another browser or domain. Each save and import receives a fresh ID. Instrument samples must be loaded again after restoring a record. The notebook automatically records musical settings and the notes entered in its own fields. Personal casting inputs and gateway settings remain in their existing forms.

## 检查范围

六十四组默认数据、63 组普通最小移位、12 组无需移位的组合、需卦 T0、纯乾与纯坤极点、自由移位恢复、非 C 主音下两个模块的试听与 MIDI 一致性、中英文七阶段规则、英文委托单及本地资源路径均已检查。新增检查覆盖尚未起卦时的完整英文选项与表格、三个示例及三个试听阶段、参数与笔记恢复、JSON 往返、无效导入、存储失败提示及记录文字转义。浏览器预览进程在当前环境启动失败，尚未完成真实浏览器的视觉验收。

Data and DOM checks cover all 64 default profiles, 63 ordinary minimal shifts, 12 disjoint pairs retained at T0, the Qian and Kun poles, free override/reset, audio–MIDI consistency at non-C tonics in both modules, bilingual stage content, the English commission brief and local asset paths. New checks cover English controls and the complete matrix before casting, all presets and playback phases, settings and notes restoration, JSON roundtrips, invalid imports, storage failures and escaped record text. A visual browser review remains outstanding because the local preview process could not start successfully.
