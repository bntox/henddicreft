# CraftPath – 拼豆 & 串珠 静态教学站点

**技术说明**：本站点是**纯手写静态 HTML + CSS + 原生 JavaScript**，**没有使用任何框架**（不是 Astro、Hugo、Next.js、Vue、React 等）。  
所有页面都是普通 `.html` 文件，样式是普通 CSS，搜索功能用原生 JS 实现。  

**配色**：方案 B（柔奶油背景 #FAF7F2 + 软青绿主色 #4A7C6F + 柔珊瑚点缀 #D98B6B + 温暖深棕文字）

专注拼豆（Perler/Fuse Beads）与串珠（Beading）由浅入深的学习路径。  
分类清晰 + 客户端搜索 + 从小到大作品过程集 + 便于自己更新内容。

## 目录结构

```
craft-learn/
├── index.html              # 首页
├── path.html               # 完整学习路径
├── search.html             # 搜索页（客户端 JS 搜索）
├── css/style.css           # 样式（已更新为方案B配色）
├── js/main.js              # 搜索索引 + 简单交互
├── perler/                 # 拼豆分类
│   ├── index.html
│   ├── basics/
│   ├── patterns/
│   ├── techniques/
│   └── showcase/           # 新增：从小到大作品过程集
├── beading/                # 串珠分类
│   ├── index.html
│   ├── basics/
│   ├── stitches/
│   ├── wire-wrapping/
│   ├── projects/
│   └── showcase/           # 新增：从小到大作品过程集
└── assets/images/          # 放本地图片
```

## 如何更新内容

1. 新增教程：复制现有 HTML 页面改内容（支持 YouTube iframe 嵌入）
2. 让搜索收录：在 `js/main.js` 的 `CONTENT_INDEX` 数组追加对象
3. 分类页加入口：在对应 `index.html` 增加卡片
4. 过程集更新：直接在 `showcase/` 下按 S/M/L/XL 添加页面

部署推荐：GitHub + Netlify / Vercel / Cloudflare Pages，绑定自己的域名即可。

祝使用愉快！
