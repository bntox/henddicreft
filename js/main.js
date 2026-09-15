/**
 * CraftPath – Client-side search index
 * 已填充大量内容条目，便于搜索
 */

const CONTENT_INDEX = [
  // ===== 拼豆 基础 =====
  { id: "perler-tools", title: "拼豆基础：工具与珠子尺寸", category: "perler", level: "beginner", tags: ["工具", "尺寸", "Midi", "Mini"], path: "perler/basics/tools.html", summary: "认识 Perler / Hama / Artkal 珠子尺寸、pegboard 与必备工具。" },
  { id: "perler-ironing", title: "熨烫技巧详解", category: "perler", level: "beginner", tags: ["熨烫", "技巧", "温度"], path: "perler/basics/ironing.html", summary: "标准熔合、扁平熔合、冷却压平与常见问题解决。" },
  { id: "perler-first", title: "第一次摆豆完整流程", category: "perler", level: "beginner", tags: ["入门", "流程", "心形"], path: "perler/basics/first-project.html", summary: "从选图案、摆豆到熨烫的完整新手流程。" },
  { id: "perler-tape", title: "胶带法 Tape Method", category: "perler", level: "beginner", tags: ["胶带法", "转移", "大图"], path: "perler/basics/tape-method.html", summary: "大图或复杂图案如何安全转移到熨烫纸。" },
  { id: "perler-storage", title: "珠子收纳与整理技巧", category: "perler", level: "beginner", tags: ["收纳", "整理"], path: "perler/basics/storage.html", summary: "颜色分类、容器选择与高效取珠方法。" },
  { id: "perler-brands", title: "主流品牌对比", category: "perler", level: "beginner", tags: ["品牌", "Perler", "Hama", "Artkal"], path: "perler/basics/brands.html", summary: "Perler、Hama、Artkal 尺寸兼容性与色差说明。" },

  // ===== 拼豆 图案 =====
  { id: "perler-easy", title: "最适合新手的图案推荐", category: "perler", level: "beginner", tags: ["图案", "初级", "心形"], path: "perler/patterns/easy.html", summary: "15×15 以内、颜色少的推荐图案列表。" },
  { id: "perler-characters", title: "像素角色入门", category: "perler", level: "beginner", tags: ["角色", "像素", "游戏"], path: "perler/patterns/characters.html", summary: "简单游戏角色与卡通形象推荐。" },
  { id: "perler-functional", title: "功能小件制作", category: "perler", level: "beginner", tags: ["钥匙扣", "杯垫", "冰箱贴"], path: "perler/patterns/functional.html", summary: "钥匙扣、杯垫、冰箱贴等实用小件。" },
  { id: "perler-color", title: "颜色搭配基础", category: "perler", level: "beginner", tags: ["配色", "颜色"], path: "perler/patterns/color.html", summary: "常用配色思路与示例配色板。" },
  { id: "perler-seasonal", title: "节日主题图案", category: "perler", level: "beginner", tags: ["节日", "圣诞", "万圣节"], path: "perler/patterns/seasonal.html", summary: "圣诞、万圣节、情人节等主题图案入口。" },
  { id: "perler-animals", title: "简单动物图案", category: "perler", level: "beginner", tags: ["动物", "图案"], path: "perler/patterns/animals.html", summary: "猫、狗、小鸟等入门级动物像素图。" },

  // ===== 拼豆 技法 =====
  { id: "perler-3d", title: "3D 立体拼豆入门", category: "perler", level: "intermediate", tags: ["3D", "立体"], path: "perler/techniques/3d.html", summary: "切片法、粘合方式与常见 3D 结构。" },
  { id: "perler-effects", title: "特殊熨烫效果", category: "perler", level: "intermediate", tags: ["熨烫", "质感", "效果"], path: "perler/techniques/effects.html", summary: "不同垫层做出的皮革感、编织感等。" },
  { id: "perler-multi", title: "多板拼接大型作品", category: "perler", level: "intermediate", tags: ["拼接", "大型"], path: "perler/techniques/multi-board.html", summary: "板与板的连接与图案分割方法。" },
  { id: "perler-photo", title: "照片转图案工具", category: "perler", level: "intermediate", tags: ["工具", "照片", "转换"], path: "perler/techniques/photo-to-pattern.html", summary: "在线工具推荐与参数调整建议。" },
  { id: "perler-stand", title: "立式与底座制作", category: "perler", level: "intermediate", tags: ["底座", "立式"], path: "perler/techniques/stand.html", summary: "让平面作品站立的简单方法。" },
  { id: "perler-repair", title: "破损修复技巧", category: "perler", level: "intermediate", tags: ["修复", "破损"], path: "perler/techniques/repair.html", summary: "作品开裂或掉珠后的补救方法。" },

  // ===== 拼豆 过程集 =====
  { id: "perler-show-s", title: "小型作品过程集", category: "perler", level: "beginner", tags: ["过程", "小型", "延时"], path: "perler/showcase/index.html", summary: "1板以内完整过程视频与图片索引。" },
  { id: "perler-show-m", title: "中型作品过程集", category: "perler", level: "intermediate", tags: ["过程", "中型"], path: "perler/showcase/index.html", summary: "1-4板角色与场景过程。" },
  { id: "perler-show-l", title: "大型平面过程集", category: "perler", level: "advanced", tags: ["过程", "大型"], path: "perler/showcase/index.html", summary: "多板拼接与上万颗珠作品。" },
  { id: "perler-show-xl", title: "3D与超大型过程集", category: "perler", level: "advanced", tags: ["3D", "超大", "过程"], path: "perler/showcase/index.html", summary: "立体角色与挑战级作品过程。" },

  // ===== 串珠 基础 =====
  { id: "bead-tools", title: "串珠基础：工具与材料", category: "beading", level: "beginner", tags: ["工具", "种子珠", "线材"], path: "beading/basics/tools.html", summary: "种子珠规格、针、线、收尾配件清单。" },
  { id: "bead-string", title: "基础穿串与收尾", category: "beading", level: "beginner", tags: ["穿串", "手链", "收尾"], path: "beading/basics/stringing.html", summary: "弹性手链与简单项链的完整穿法。" },
  { id: "bead-finish", title: "安全收尾方法", category: "beading", level: "beginner", tags: ["收尾", "扣头"], path: "beading/basics/finishing.html", summary: "常用收尾方式与佩戴舒适度。" },
  { id: "bead-thread", title: "线材选择指南", category: "beading", level: "beginner", tags: ["线材", "Nymo", "FireLine"], path: "beading/basics/thread.html", summary: "不同线材特性与适用场景。" },
  { id: "bead-needle", title: "珠针使用技巧", category: "beading", level: "beginner", tags: ["珠针", "技巧"], path: "beading/basics/needle.html", summary: "选针、穿线与防断技巧。" },
  { id: "bead-size", title: "种子珠尺寸对照", category: "beading", level: "beginner", tags: ["尺寸", "11/0", "8/0"], path: "beading/basics/size.html", summary: "常见种子珠规格与实际用途对照。" },

  // ===== 串珠 针法 =====
  { id: "peyote", title: "Peyote Stitch 入门", category: "beading", level: "intermediate", tags: ["Peyote", "珠编"], path: "beading/stitches/peyote.html", summary: "偶数/奇数 Peyote、平面与管状基础。" },
  { id: "brick", title: "Brick Stitch 基础", category: "beading", level: "intermediate", tags: ["Brick Stitch", "耳环"], path: "beading/stitches/brick.html", summary: "适合三角形与耳环的经典针法。" },
  { id: "herringbone", title: "Herringbone 简介", category: "beading", level: "intermediate", tags: ["Herringbone", "针法"], path: "beading/stitches/herringbone.html", summary: "人字纹针法基础与适用场景。" },
  { id: "raw", title: "Right Angle Weave 基础", category: "beading", level: "intermediate", tags: ["RAW", "针法"], path: "beading/stitches/raw.html", summary: "直角编织的基本结构。" },
  { id: "ladder", title: "Ladder Stitch 入门", category: "beading", level: "beginner", tags: ["Ladder", "基础针法"], path: "beading/stitches/ladder.html", summary: "许多针法的基础起步针法。" },
  { id: "spiral", title: "Spiral Rope 简介", category: "beading", level: "intermediate", tags: ["螺旋", "绳编"], path: "beading/stitches/spiral.html", summary: "螺旋绳基础与变化。" },

  // ===== 串珠 绕线 =====
  { id: "wire-tools", title: "绕线基础：工具与基本环", category: "beading", level: "beginner", tags: ["绕线", "工具", "环"], path: "beading/wire-wrapping/basics.html", summary: "线径选择、钳子使用、简单环与收尾。" },
  { id: "wire-pendant", title: "简单绕线吊坠过程", category: "beading", level: "intermediate", tags: ["吊坠", "绕线", "过程"], path: "beading/wire-wrapping/pendant.html", summary: "从选石到完成一枚基础绕线吊坠。" },
  { id: "wire-loop", title: "专业绕线环技巧", category: "beading", level: "intermediate", tags: ["环", "技巧"], path: "beading/wire-wrapping/loop.html", summary: "一致大小、紧密缠绕的环制作方法。" },
  { id: "wire-earring", title: "绕线耳环入门", category: "beading", level: "intermediate", tags: ["耳环", "绕线"], path: "beading/wire-wrapping/earring.html", summary: "简单绕线耳环完整步骤。" },
  { id: "wire-gauge", title: "线径与硬度选择", category: "beading", level: "beginner", tags: ["线径", "Gauge"], path: "beading/wire-wrapping/gauge.html", summary: "不同 gauge 的用途与推荐。" },
  { id: "wire-tools-adv", title: "进阶绕线工具", category: "beading", level: "intermediate", tags: ["工具", "进阶"], path: "beading/wire-wrapping/tools-adv.html", summary: "Mandrel、尼龙钳等进阶工具介绍。" },

  // ===== 串珠 项目与过程 =====
  { id: "bead-bracelet", title: "多风格弹性手链", category: "beading", level: "beginner", tags: ["手链", "项目"], path: "beading/projects/bracelets.html", summary: "不同珠子组合的弹性手链示例。" },
  { id: "bead-earrings", title: "简单耳环制作", category: "beading", level: "beginner", tags: ["耳环", "项目"], path: "beading/projects/earrings.html", summary: "基础耳钩安装与设计。" },
  { id: "bead-show", title: "串珠作品过程集", category: "beading", level: "beginner", tags: ["过程", "展示"], path: "beading/showcase/index.html", summary: "从小到大串珠与绕线过程索引。" }
];

function searchContent(query) {
  if (!query || query.trim().length < 1) return CONTENT_INDEX;
  const q = query.toLowerCase().trim();
  return CONTENT_INDEX.filter(item => {
    const text = (item.title + " " + item.summary + " " + item.tags.join(" ") + " " + item.category + " " + item.level).toLowerCase();
    return text.includes(q);
  });
}

function renderResults(results, container) {
  if (!container) return;
  if (results.length === 0) {
    container.innerHTML = `<p style="color:var(--muted);padding:1rem 0;">没有找到相关内容，试试其他关键词。</p>`;
    return;
  }
  container.innerHTML = results.map(item => `
    <div class="result-item">
      <h3><a href="${item.path}">${item.title}</a></h3>
      <div class="path">${item.category === "perler" ? "拼豆" : "串珠"} · ${item.level === "beginner" ? "入门" : item.level === "intermediate" ? "进阶" : "高级"}</div>
      <p>${item.summary}</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search-input");
  const resultsEl = document.getElementById("search-results");
  const chips = document.querySelectorAll(".filter-chip");

  if (input && resultsEl) {
    renderResults(CONTENT_INDEX, resultsEl);
    input.addEventListener("input", () => {
      const results = searchContent(input.value);
      renderResults(results, resultsEl);
      chips.forEach(c => c.classList.remove("active"));
    });
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        const filter = chip.dataset.filter;
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        input.value = "";
        let results;
        if (filter === "all") results = CONTENT_INDEX;
        else if (filter === "perler" || filter === "beading") results = CONTENT_INDEX.filter(i => i.category === filter);
        else results = CONTENT_INDEX.filter(i => i.level === filter);
        renderResults(results, resultsEl);
      });
    });
  }
});
