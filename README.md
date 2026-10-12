# 易经作曲研究 · 命格作曲

创作者：张睿哲 Ruizhe Zhang

双语静态网站，包含七阶段作曲体系、64卦文化调式档案、《太初 Primordial》作品案例，以及命格解读、Suno提示词和专业委托需求单。

## 文件结构

```text
index.html
README.md
.nojekyll
assets/
  Primordial.mp3
  Primordial-score.pdf
  Primordial-cover.png
  Primordial-opening.png
```

`index.html` 包含完整的 HTML、CSS 和 JavaScript；两个板块通过内嵌页面组织。可以用 VS Code 或其他文本编辑器打开并编辑。搜索页面上的文字即可找到对应内容。音频、乐谱和图片使用相对路径，适用于 GitHub Pages 的项目子目录。

## 上传 GitHub

1. 新建一个仓库，例如 `iching-composition`。
2. 解压代码包，将里面的 `index.html`、`README.md`、`.nojekyll` 和整个 `assets` 文件夹上传到仓库根目录。不要只上传 ZIP，也不要在它们外面再套一层 `github-site` 目录。
3. 提交文件到 `main` 分支。
4. 打开仓库的 **Settings → Pages**。
5. Source 选择 **Deploy from a branch**，分支选择 **main**，目录选择 **/(root)**，点击 **Save**。
6. 部署完成后，在 Pages 设置页面打开 GitHub 提供的网站地址。

官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 本地查看

双击 `index.html` 即可打开；保留同级的 `assets` 文件夹。浏览器音频播放需由用户点击启动。联网AI功能取决于网关的跨域设置，使用 GitHub Pages 的 HTTPS 地址更便于配置。

## 内容与功能

- 七阶段：无极、太极、两仪、四象、八卦、六十四卦、归无极，可组织单首作品或作品集大循环。
- 《太初》明确定位为无极阶段作品，为琵琶与弦乐四重奏而作。
- 支持中英文、合成乐器试听、本地单音采样导入、多调式和泛调性实验。
- 算卦为本站自定义种子算法，日常解读用于象征性娱乐与创作。
- Suno提示词可直接复制使用；AI请求需填写你自己的服务端网关地址。GitHub Pages只托管静态前端，不会自动提供AI服务端。
- 专业道士、易学顾问和作曲家服务目前提供需求单与用户自填联系页，没有真实预约或付款系统。

## AI网关约定

前端会向配置的HTTPS地址发送JSON POST请求。服务器应支持此网站来源的CORS请求，并自行处理鉴权、额度和供应商密钥。前端不保存API Key。

请求包含 `action`、`provider`、`context`、`style`、`structure` 和 `instructions`；`action` 可为 `expand_composition`、`fortune_reading` 或 `suno_generate`。用户勾选附带问句时，解读请求还会包含 `question`。

返回JSON可使用 `text`、`output_text` 或 `message` 字段，页面会显示其内容。Suno音乐生成的供应商协议需要由服务器适配。

## 作者与素材

网站展示张睿哲 Ruizhe Zhang 的作曲研究及作者提供的《太初》音频、乐谱。此代码包未额外授予作品音频、乐谱或其他素材的复制与商业使用许可。
