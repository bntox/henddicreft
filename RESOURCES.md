# CraftPath 本地资源与外链完整说明

## 一、已本地化的图片（assets/images/）

| 文件名 | 用途建议 |
|--------|----------|
| perler-beads.jpg | 拼豆珠子特写 |
| perler-board.jpg | 拼豆板 / 摆豆场景 |
| beads-colorful.jpg | 彩色珠子 |
| beading-tools.jpg | 串珠工具 |
| jewelry-making.jpg | 首饰制作场景 |
| wire-wrapping.jpg | 绕线相关 |
| craft-workspace.jpg | 手作工作区 |
| craft-hands.jpg | 手部制作场景 |

引用示例：
```html
<img src="assets/images/perler-beads.jpg" alt="拼豆" style="max-width:100%;border-radius:10px;">
```

## 二、本地视频模板（已写好）

以下页面已经预埋了 `<video>` 标签，你只需下载视频并放到对应文件名即可自动使用本地播放：

| 页面 | 本地视频文件名 | 建议内容 |
|------|----------------|----------|
| perler/basics/tools.html | assets/videos/perler-intro.mp4 | 拼豆入门过程 |
| perler/basics/ironing.html | assets/videos/perler-ironing.mp4 | 熨烫技巧过程 |
| beading/basics/tools.html | assets/videos/beading-tools.mp4 | 串珠工具与材料 |
| beading/wire-wrapping/basics.html | assets/videos/wire-basics.mp4 | 绕线基础 |

### 下载命令示例（推荐 yt-dlp）
```bash
# 拼豆入门
yt-dlp -f "best[height<=720]" -o "perler-intro.mp4" "https://www.youtube.com/watch?v=BbMsCMSY43k"

# 串珠基础
yt-dlp -f "best[height<=720]" -o "beading-tools.mp4" "https://www.youtube.com/watch?v=Z-oPptStJI8"
```

下载后直接放进 `assets/videos/` 文件夹，刷新页面即可看到本地视频。

如果本地文件不存在，页面会显示提示文字，并保留 YouTube 嵌入作为备用。

## 三、推荐持续关注的创作者

**拼豆过程**
- IronedArt
- QDCrafts
- BigBossRazz
- KandiPerlerFairy
- Perler Bead Planet

**串珠 / 绕线过程**
- PotomacBeads
- Beading Magic
- Fire Mountain Gems
- Imbali Crafts
- Andria Bieber Designs

## 四、体积说明

- 当前包：HTML + CSS + JS + 本地图片 ≈ 200KB 级
- 每增加一个 720p 视频约增加 20–80MB
- 建议只把最核心的 3–5 个教学视频放本地，其余继续用嵌入

