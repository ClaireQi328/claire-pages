// CyberPPT Stage 3 generator · 报价细项周报 0713
// Style #4 象牙白+深蓝. Native editable text/shape/table/chart via PptxGenJS.
const PptxGenJS = require("pptxgenjs");
const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pptx.author = "Claire Qi";
pptx.title = "报价细项周报 0713";

const W = 13.333, H = 7.5;
const C = {
  bg: "F7F6F0", title: "101820", body: "303030", sub: "6F7275",
  line: "C9CDD1", accent: "12355B", accentLt: "3E5C82", accentLt2: "9DB2C9",
  panel: "FCFCFA", panelBd: "D7DBDE", grey: "E3E6E8",
  green: "2E7D5B", red: "B23B3B", amber: "C8881E", navyBar: "12355B"
};
const FONT = "Microsoft YaHei";

function bg(slide) { slide.background = { color: C.bg }; }
function footer(slide, idx) {
  slide.addText("来源：20260713.csv · 报价细项明细数据分析0713", { x: 0.4, y: 7.04, w: 8.5, h: 0.32, fontSize: 7.5, color: C.sub, fontFace: FONT, align: "left", valign: "middle" });
  slide.addText(`报价细项周报 0713  ·  ${idx} / 14`, { x: 9.8, y: 7.04, w: 3.13, h: 0.32, fontSize: 7.5, color: C.sub, fontFace: FONT, align: "right", valign: "middle" });
}
function title(slide, t, sub) {
  slide.addShape(pptx.ShapeType.rect, { x: 0.4, y: 0.34, w: 0.09, h: 0.66, fill: { color: C.accent }, line: { type: "none" } });
  slide.addText(t, { x: 0.62, y: 0.3, w: 11.8, h: 0.52, fontSize: 22, bold: true, color: C.title, fontFace: FONT, valign: "middle" });
  if (sub) slide.addText(sub, { x: 0.64, y: 0.84, w: 11.8, h: 0.3, fontSize: 10, color: C.sub, fontFace: FONT });
}
function panel(slide, x, y, w, h, fill) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.06, fill: { color: fill || C.panel }, line: { color: C.panelBd, width: 1 } });
}

// ---------- Slide 1 · Cover ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  s.addShape(pptx.ShapeType.rect, { x: 0.9, y: 2.5, w: 0.12, h: 1.5, fill: { color: C.accent }, line: { type: "none" } });
  s.addText("报价细项周报 · 0713", { x: 1.25, y: 2.45, w: 11, h: 0.9, fontSize: 44, bold: true, color: C.title, fontFace: FONT, valign: "middle" });
  s.addText("规模稳增，拆解质量待破局", { x: 1.27, y: 3.45, w: 11, h: 0.6, fontSize: 20, color: C.sub, fontFace: FONT, valign: "middle" });
  s.addText("小米汽车采购数字化 · EP 系统报价细项功能 · 数据截至 2026-07-13", { x: 1.27, y: 5.9, w: 11, h: 0.4, fontSize: 11, color: C.sub, fontFace: FONT });
  s.addShape(pptx.ShapeType.roundRect, { x: 1.27, y: 5.35, w: 1.7, h: 0.42, rectRadius: 0.2, fill: { color: C.accent }, line: { type: "none" } });
  s.addText("v2026.07.13", { x: 1.27, y: 5.35, w: 1.7, h: 0.42, fontSize: 11, bold: true, color: "FFFFFF", fontFace: FONT, align: "center", valign: "middle" });
  footer(s, 1);
})();

// ---------- Slide 2 · KPI + donuts ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "全局概览：规模与渗透率", "截至 2026-07-13 · 口径：按报价包");
  const kpis = [
    { n: "138", l: "活跃报价包", d: "▲ +5 vs 0707", c: C.green },
    { n: "243", l: "活跃供应商", d: "▲ +8 vs 0707", c: C.green },
    { n: "31.9%", l: "拆解渗透率", d: "▲ +0.3pp", c: C.green },
    { n: "44", l: "已拆解包(L2+L3+L4)", d: "L1 占 68.1%", c: C.accent }
  ];
  kpis.forEach((k, i) => {
    const x = 0.5 + i * 3.05;
    panel(s, x, 1.35, 2.8, 1.45);
    s.addText(k.n, { x: x + 0.15, y: 1.5, w: 2.5, h: 0.7, fontSize: 30, bold: true, color: C.title, fontFace: FONT, valign: "middle" });
    s.addText(k.l, { x: x + 0.15, y: 2.18, w: 2.5, h: 0.3, fontSize: 11, color: C.body, fontFace: FONT });
    s.addText(k.d, { x: x + 0.15, y: 2.45, w: 2.5, h: 0.28, fontSize: 9.5, bold: true, color: k.c, fontFace: FONT });
  });
  // donut 1: 报价包分布
  panel(s, 0.5, 3.1, 5.9, 3.6);
  s.addText("报价包分布 (138)", { x: 0.7, y: 3.2, w: 5.5, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  s.addChart(pptx.ChartType.doughnut, [{ name: "报价包", labels: ["L1", "L2", "L3", "L4"], values: [94, 35, 7, 2] }], {
    x: 0.6, y: 3.6, w: 3.2, h: 3.0, holeSize: 58, chartColors: [C.accent, C.accentLt, C.accentLt2, C.grey],
    showLegend: true, legendPos: "r", legendFontSize: 11, legendFontFace: FONT, legendColor: C.body,
    showValue: false, dataLabelFontFace: FONT, showLabel: false
  });
  s.addText([{ text: "L1 94 (68.1%)   L2 35   L3 7   L4 2", options: { fontSize: 9.5, color: C.sub, fontFace: FONT } }], { x: 3.9, y: 4.7, w: 2.4, h: 1.6, valign: "top" });
  // donut 2: 供应商分布
  panel(s, 6.6, 3.1, 6.2, 3.6);
  s.addText("供应商分布 (243)", { x: 6.8, y: 3.2, w: 5.5, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  s.addChart(pptx.ChartType.doughnut, [{ name: "供应商", labels: ["L1", "L2", "L3", "L4"], values: [198, 36, 8, 1] }], {
    x: 6.7, y: 3.6, w: 3.2, h: 3.0, holeSize: 58, chartColors: [C.accent, C.accentLt, C.accentLt2, C.grey],
    showLegend: true, legendPos: "r", legendFontSize: 11, legendFontFace: FONT, legendColor: C.body,
    showValue: false, dataLabelFontFace: FONT, showLabel: false
  });
  s.addText([{ text: "L1 198 (81.5%)\nL2 36   L3 8   L4 1", options: { fontSize: 9.5, color: C.sub, fontFace: FONT } }], { x: 9.9, y: 4.7, w: 2.7, h: 1.6, valign: "top" });
  footer(s, 2);
})();

// ---------- Slide 3 · Exec summary ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "执行摘要：四项核心结论", "Situation → Complication → Resolution 收束");
  const cards = [
    { t: "规模稳增", d: "活跃报价包 138（+5）、供应商 243（+8），覆盖持续扩大", stat: "▲ +5 包 / ▲ +8 家", c: C.green },
    { t: "渗透率微升但质量停滞", d: "整体拆解渗透率 31.9%（+0.3pp），但深层拆解无新增", stat: "31.9% ▲ +0.3pp", c: C.accent },
    { t: "深层拆解零增长", d: "L3/L4 本周零新增，陷入平台期；BOM→VSM 是堵点", stat: "L3/L4 本周 0 新增", c: C.red },
    { t: "预选优势反转", d: "正式 19.4% > 预选 17.0%，预选由领先 8pp 转为落后 2.4pp", stat: "▼ −2.4pp", c: C.red }
  ];
  cards.forEach((c, i) => {
    const x = 0.5 + i * 3.05;
    panel(s, x, 1.45, 2.8, 3.0);
    s.addShape(pptx.ShapeType.rect, { x, y: 1.45, w: 2.8, h: 0.1, fill: { color: c.c }, line: { type: "none" } });
    s.addText(c.t, { x: x + 0.18, y: 1.65, w: 2.5, h: 0.7, fontSize: 14, bold: true, color: C.title, fontFace: FONT, valign: "top" });
    s.addText(c.d, { x: x + 0.18, y: 2.35, w: 2.5, h: 1.4, fontSize: 10.5, color: C.body, fontFace: FONT, valign: "top" });
    s.addText(c.stat, { x: x + 0.18, y: 3.85, w: 2.5, h: 0.4, fontSize: 11, bold: true, color: c.c, fontFace: FONT });
  });
  s.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 4.75, w: 12.33, h: 1.55, rectRadius: 0.06, fill: { color: C.accent }, line: { type: "none" } });
  s.addText("SO WHAT", { x: 0.8, y: 4.9, w: 2, h: 0.4, fontSize: 12, bold: true, color: "FFFFFF", fontFace: FONT });
  s.addText("把增量引导到「深层拆解 + 预选 SVC 开放 + 询价中窗口」三条行动线，并以采购员分化作为落地抓手。", { x: 0.8, y: 5.3, w: 11.7, h: 0.8, fontSize: 13, color: "FFFFFF", fontFace: FONT, valign: "middle" });
  footer(s, 3);
})();

// ---------- Slide 4 · Layer composition (100% stacked) ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "全局概览：层级构成", "报价包与供应商两维度 L1–L4 构成对比");
  panel(s, 0.5, 1.45, 8.4, 4.9);
  s.addText("报价包维度（按占比）", { x: 0.7, y: 1.6, w: 8, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  s.addChart(pptx.ChartType.bar, [{ name: "L1", labels: ["报价包"], values: [68.1] }, { name: "L2", labels: ["报价包"], values: [25.4] }, { name: "L3", labels: ["报价包"], values: [5.1] }, { name: "L4", labels: ["报价包"], values: [1.4] }], {
    x: 0.7, y: 2.0, w: 8.0, h: 1.9, barDir: "bar", barGrouping: "stacked", chartColors: [C.accent, C.accentLt, C.accentLt2, C.grey],
    showValue: true, dataLabelColor: "FFFFFF", dataLabelFontFace: FONT, dataLabelFontSize: 10, dataLabelPosition: "inEnd",
    valAxisHidden: true, catAxisHidden: true, valAxisMaxVal: 100, showLegend: false, barGapWidthPct: 60
  });
  s.addText("供应商维度（按占比）", { x: 0.7, y: 4.05, w: 8, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  s.addChart(pptx.ChartType.bar, [{ name: "L1", labels: ["供应商"], values: [81.5] }, { name: "L2", labels: ["供应商"], values: [14.8] }, { name: "L3", labels: ["供应商"], values: [3.3] }, { name: "L4", labels: ["供应商"], values: [0.4] }], {
    x: 0.7, y: 4.45, w: 8.0, h: 1.7, barDir: "bar", barGrouping: "stacked", chartColors: [C.accent, C.accentLt, C.accentLt2, C.grey],
    showValue: true, dataLabelColor: "FFFFFF", dataLabelFontFace: FONT, dataLabelFontSize: 10, dataLabelPosition: "inEnd",
    valAxisHidden: true, catAxisHidden: true, valAxisMaxVal: 100, showLegend: false, barGapWidthPct: 60
  });
  // right annotations
  panel(s, 9.1, 1.45, 3.73, 4.9);
  s.addText("关键注解", { x: 9.3, y: 1.6, w: 3.4, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  s.addText([
    { text: "L4 仅浙江戈尔德（2 包 / 1 家）\n", options: { fontSize: 11, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "L3 共 7 包 / 8 家\n", options: { fontSize: 11, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "L2 为浅层主力（35 包）\n", options: { fontSize: 11, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "L1 占主导，深层(L3+L4)仅 6.5%", options: { fontSize: 11, color: C.body, fontFace: FONT, bullet: { code: "2022" } } }
  ], { x: 9.3, y: 2.1, w: 3.4, h: 4.0, valign: "top", lineSpacingMultiple: 1.25 });
  footer(s, 4);
})();

// ---------- Slide 5 · Weekly delta ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "本周增量对比（0707 → 0713）", "规模在涨，但增量主要靠 L1；深层拆解零增长");
  // growth strip
  const chips = [
    { t: "▲ +5 报价包", c: C.green }, { t: "▲ +8 供应商", c: C.green }, { t: "▲ +0.3pp 渗透率", c: C.green },
    { t: "▲ +2 L2 包", c: C.green }, { t: "— 0 L3/L4 零增长", c: C.sub }, { t: "▼ −2.4pp 预选优势收窄", c: C.red }
  ];
  chips.forEach((c, i) => {
    const x = 0.5 + i * 2.07;
    s.addShape(pptx.ShapeType.roundRect, { x, y: 1.4, w: 1.95, h: 0.6, rectRadius: 0.3, fill: { color: C.panel }, line: { color: c.c, width: 1.25 } });
    s.addText(c.t, { x, y: 1.4, w: 1.95, h: 0.6, fontSize: 9.5, bold: true, color: c.c, fontFace: FONT, align: "center", valign: "middle" });
  });
  // dual-line trend
  panel(s, 0.5, 2.25, 8.1, 4.1);
  s.addText("规模增长趋势（三周）", { x: 0.7, y: 2.35, w: 7.5, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  s.addChart(pptx.ChartType.line, [
    { name: "报价包", labels: ["0706", "0707", "0713"], values: [119, 133, 138] },
    { name: "供应商", labels: ["0706", "0707", "0713"], values: [216, 235, 243] }
  ], {
    x: 0.7, y: 2.75, w: 7.7, h: 3.4, chartColors: [C.accent, C.accentLt2], lineSize: 2.5, lineSmooth: true,
    showLegend: true, legendPos: "t", legendFontFace: FONT, legendColor: C.body, legendFontSize: 10,
    catAxisLabelFontFace: FONT, valAxisLabelFontFace: FONT, catAxisLabelColor: C.sub, valAxisLabelColor: C.sub,
    showValue: true, dataLabelFontFace: FONT, dataLabelFontSize: 9, dataLabelColor: C.body, dataLabelPosition: "t"
  });
  // stacked mini
  panel(s, 8.8, 2.25, 4.03, 4.1);
  s.addText("层级增量（0707→0713）", { x: 9.0, y: 2.35, w: 3.7, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  s.addText([
    { text: "L2：+2 包 / +4 家\n", options: { fontSize: 11, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "L1：+3 包 / +4 家\n", options: { fontSize: 11, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "L3 / L4：0 新增\n", options: { fontSize: 11, color: C.red, bold: true, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "\n解读：深层拆解进入平台期，\nBOM→VSM 衔接为最大堵点；\nL2 仍为主要载体但向 L3\n转化通道未打通。", options: { fontSize: 10.5, color: C.sub, fontFace: FONT } }
  ], { x: 9.0, y: 2.8, w: 3.7, h: 3.4, valign: "top", lineSpacingMultiple: 1.2 });
  footer(s, 5);
})();

// ---------- Slide 6 · Layer anatomy ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "层级结构解剖", "L1 主导，L2 为浅层主力，L3/L4 极小");
  panel(s, 0.5, 1.5, 8.6, 4.85);
  s.addChart(pptx.ChartType.bar, [
    { name: "报价包", labels: ["L1", "L2", "L3", "L4"], values: [94, 35, 7, 2] },
    { name: "供应商", labels: ["L1", "L2", "L3", "L4"], values: [198, 36, 8, 1] }
  ], {
    x: 0.7, y: 1.7, w: 8.2, h: 4.4, barDir: "col", barGrouping: "clustered", chartColors: [C.accent, C.accentLt2],
    showValue: true, dataLabelFontFace: FONT, dataLabelFontSize: 10, dataLabelColor: C.body, dataLabelPosition: "outEnd",
    catAxisLabelFontFace: FONT, valAxisLabelFontFace: FONT, catAxisLabelColor: C.body, valAxisLabelColor: C.sub,
    showLegend: true, legendPos: "t", legendFontFace: FONT, legendColor: C.body, legendFontSize: 10, barGapWidthPct: 40
  });
  panel(s, 9.3, 1.5, 3.53, 4.85);
  s.addText("注解", { x: 9.5, y: 1.65, w: 3.2, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  s.addText([
    { text: "L2 为浅层拆解主力（35 包 / 36 家）\n", options: { fontSize: 11, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "L3/L4 极小，是平台期核心\n", options: { fontSize: 11, color: C.red, bold: true, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "\nL4 仅浙江戈尔德（2 包）保持全维度成本穿透；L3 部分供应商有二次提交，说明在维护 BOM 数据，但 VSM 仍未深入。", options: { fontSize: 10.5, color: C.sub, fontFace: FONT } }
  ], { x: 9.5, y: 2.1, w: 3.2, h: 4.0, valign: "top", lineSpacingMultiple: 1.2 });
  footer(s, 6);
})();

// ---------- Slide 7 · Platform diagnosis (BOM->VSM) ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "深层拆解平台期：BOM → VSM 是最大堵点", "L3/L4 本周零增长，拆解深度难以突破");
  const stages = ["L1 未拆解", "L2 自行拆解", "L3 BOM结构", "L4 BOM+VSM"];
  const bx = [0.6, 3.35, 6.1, 8.85], bw = 2.3, by = 2.0, bh = 1.5;
  stages.forEach((st, i) => {
    const isBottleneck = i === 3;
    s.addShape(pptx.ShapeType.roundRect, { x: bx[i], y: by, w: bw, h: bh, rectRadius: 0.08, fill: { color: isBottleneck ? C.accent : C.panel }, line: { color: C.accent, width: 1.5 } });
    s.addText(st, { x: bx[i], y: by, w: bw, h: bh, fontSize: 14, bold: true, color: isBottleneck ? "FFFFFF" : C.title, fontFace: FONT, align: "center", valign: "middle" });
    if (i < 3) s.addShape(pptx.ShapeType.line, { x: bx[i] + bw, y: by + bh / 2, w: bx[i + 1] - (bx[i] + bw), h: 0.03, line: { color: C.accent, width: 2, endArrowType: "triangle" } });
  });
  s.addShape(pptx.ShapeType.roundRect, { x: 8.85, y: 3.7, w: 2.3, h: 0.55, rectRadius: 0.1, fill: { color: C.red }, line: { type: "none" } });
  s.addText("堵点：VSM 深入", { x: 8.85, y: 3.7, w: 2.3, h: 0.55, fontSize: 11, bold: true, color: "FFFFFF", fontFace: FONT, align: "center", valign: "middle" });
  // signal panel
  panel(s, 0.6, 4.55, 12.2, 1.85);
  s.addText("信号", { x: 0.85, y: 4.7, w: 2, h: 0.35, fontSize: 13, bold: true, color: C.accent, fontFace: FONT });
  s.addText([
    { text: "L3 供应商（海拉、握奇、埃泰克、万丰）出现二次提交，说明在维护 BOM 数据；\n", options: { fontSize: 11.5, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "但均未完成 VSM 深入，拆解停留在 BOM 结构层；\n", options: { fontSize: 11.5, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "根因：VSM 建模能力 / 数据口径未打通，是深层拆解平台期的核心堵点。", options: { fontSize: 11.5, color: C.body, fontFace: FONT, bullet: { code: "2022" } } }
  ], { x: 0.85, y: 5.1, w: 11.7, h: 1.2, valign: "top", lineSpacingMultiple: 1.2 });
  footer(s, 7);
})();

// ---------- Slide 8 · Pre vs formal ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "预选 vs 正式：优势已反转", "预选由领先 8pp 转为落后 2.4pp");
  panel(s, 0.5, 1.5, 8.4, 4.85);
  s.addChart(pptx.ChartType.bar, [
    { name: "上周", labels: ["预选", "正式"], values: [18.8, 10.8] },
    { name: "本周", labels: ["预选", "正式"], values: [17.0, 19.4] }
  ], {
    x: 0.7, y: 1.8, w: 8.0, h: 4.2, barDir: "col", barGrouping: "clustered", chartColors: [C.accentLt2, C.accent],
    showValue: true, dataLabelFontFace: FONT, dataLabelFontSize: 11, dataLabelColor: C.body, dataLabelPosition: "outEnd",
    catAxisLabelFontFace: FONT, valAxisLabelFontFace: FONT, catAxisLabelColor: C.body, valAxisLabelColor: C.sub,
    showLegend: true, legendPos: "t", legendFontFace: FONT, legendColor: C.body, legendFontSize: 10, barGapWidthPct: 50, valAxisMaxVal: 25
  });
  panel(s, 9.1, 1.5, 3.73, 4.85);
  s.addText("结论", { x: 9.3, y: 1.65, w: 3.4, h: 0.35, fontSize: 13, bold: true, color: C.red, fontFace: FONT });
  s.addText("预选由领先 8pp 转为落后 2.4pp", { x: 9.3, y: 2.1, w: 3.4, h: 0.9, fontSize: 13, bold: true, color: C.title, fontFace: FONT, valign: "top" });
  s.addText([
    { text: "15 家预选达 L2\n", options: { fontSize: 11, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "受限于无法登录 SVC\n", options: { fontSize: 11, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "江苏天华最积极（4 RFQ）\n", options: { fontSize: 11, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "\n加快 SVC 开放，预选杠杆可释放。", options: { fontSize: 10.5, color: C.sub, fontFace: FONT } }
  ], { x: 9.3, y: 3.1, w: 3.4, h: 3.0, valign: "top", lineSpacingMultiple: 1.2 });
  footer(s, 8);
})();

// ---------- Slide 9 · Caliber contrast ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "含预选 vs 仅正式：两种口径方向相反", "避免“预选既弱又强”的误读");
  panel(s, 0.5, 1.5, 7.6, 4.85);
  s.addChart(pptx.ChartType.bar, [
    { name: "上周", labels: ["含预选报价包", "仅正式报价包"], values: [51.0, 18.9] },
    { name: "本周", labels: ["含预选报价包", "仅正式报价包"], values: [46.9, 18.9] }
  ], {
    x: 0.7, y: 1.8, w: 7.2, h: 4.2, barDir: "col", barGrouping: "clustered", chartColors: [C.accentLt2, C.accent],
    showValue: true, dataLabelFontFace: FONT, dataLabelFontSize: 11, dataLabelColor: C.body, dataLabelPosition: "outEnd",
    catAxisLabelFontFace: FONT, valAxisLabelFontFace: FONT, catAxisLabelColor: C.body, valAxisLabelColor: C.sub,
    showLegend: true, legendPos: "t", legendFontFace: FONT, legendColor: C.body, legendFontSize: 10, barGapWidthPct: 50, valAxisMaxVal: 60
  });
  panel(s, 8.3, 1.5, 4.53, 2.5);
  s.addText("两种口径结论", { x: 8.5, y: 1.62, w: 4.2, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  s.addTable([
    [{ text: "口径", options: { bold: true, fill: { color: C.accent }, color: "FFFFFF", fontFace: FONT, fontSize: 10 } }, { text: "结论", options: { bold: true, fill: { color: C.accent }, color: "FFFFFF", fontFace: FONT, fontSize: 10 } }],
    [{ text: "预选拆解率 17.0% vs 正式 19.4%", options: { fontFace: FONT, fontSize: 9.5 } }, { text: "预选弱", options: { color: C.red, bold: true, fontFace: FONT, fontSize: 9.5, align: "center" } }],
    [{ text: "含预选报价包 46.9% vs 仅正式 18.9%", options: { fontFace: FONT, fontSize: 9.5 } }, { text: "预选强", options: { color: C.green, bold: true, fontFace: FONT, fontSize: 9.5, align: "center" } }]
  ], { x: 8.5, y: 2.05, w: 4.2, h: 1.8, border: { type: "solid", color: C.panelBd, pt: 0.75 }, align: "left", valign: "middle" });
  panel(s, 8.3, 4.15, 4.53, 2.2, C.panel);
  s.addShape(pptx.ShapeType.rect, { x: 8.3, y: 4.15, w: 0.08, h: 2.2, fill: { color: C.amber }, line: { type: "none" } });
  s.addText("Caveat", { x: 8.55, y: 4.3, w: 4.2, h: 0.35, fontSize: 12, bold: true, color: C.amber, fontFace: FONT });
  s.addText("两种口径方向相反，汇报时需并列展示并标注口径，避免误读为“预选既弱又强”。", { x: 8.55, y: 4.7, w: 4.2, h: 1.5, fontSize: 11, color: C.body, fontFace: FONT, valign: "top", lineSpacingMultiple: 1.2 });
  footer(s, 9);
})();

// ---------- Slide 10 · Weekly dynamics ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "近一周动态（07-08 → 07-13）", "47 条提交、38 家活跃、16 家预选以 L1 入场");
  panel(s, 0.5, 1.5, 7.7, 4.85);
  s.addText("每日提交量", { x: 0.7, y: 1.62, w: 7, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  s.addChart(pptx.ChartType.bar, [
    { name: "提交", labels: ["07-08", "07-09", "07-10", "07-11", "07-12", "07-13"], values: [8, 14, 9, 7, 6, 3] }
  ], {
    x: 0.7, y: 2.0, w: 7.3, h: 4.1, barDir: "col", chartColors: [C.accent],
    showValue: true, dataLabelFontFace: FONT, dataLabelFontSize: 10, dataLabelColor: C.body, dataLabelPosition: "outEnd",
    catAxisLabelFontFace: FONT, valAxisLabelFontFace: FONT, catAxisLabelColor: C.body, valAxisLabelColor: C.sub,
    showLegend: false, barGapWidthPct: 45, valAxisMaxVal: 16
  });
  panel(s, 8.4, 1.5, 4.43, 4.85);
  s.addText("提交层级分布", { x: 8.6, y: 1.62, w: 4, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  s.addText([
    { text: "L1 70.2%\n", options: { fontSize: 12, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "L2 21.3%\n", options: { fontSize: 12, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "L3 8.5%\n", options: { fontSize: 12, color: C.body, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "\n非 L1 占比 29.8%（高于平均）\n", options: { fontSize: 11, bold: true, color: C.accent, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "活跃供应商拆解意识较强\n", options: { fontSize: 11, color: C.sub, fontFace: FONT, bullet: { code: "2022" } } },
    { text: "16 家预选首次入场（占 42%）", options: { fontSize: 11, color: C.sub, fontFace: FONT, bullet: { code: "2022" } } }
  ], { x: 8.6, y: 2.1, w: 4.1, h: 4.0, valign: "top", lineSpacingMultiple: 1.2 });
  footer(s, 10);
})();

// ---------- Slide 11 · Status window ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "最佳窗口在“询价中”", "48 个询价中 RFQ 中 38 个未拆解");
  panel(s, 0.5, 1.5, 7.6, 4.85);
  s.addText("按 RFQ 状态渗透率", { x: 0.7, y: 1.62, w: 7, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  s.addChart(pptx.ChartType.bar, [
    { name: "渗透率", labels: ["询价中", "已完成", "ENQUIRING", "NOMINATING", "HAVE_NOT_ENQUIRED"], values: [20.8, 13.3, 12.5, 0, 0] }
  ], {
    x: 0.7, y: 2.0, w: 7.2, h: 4.1, barDir: "bar", chartColors: [C.accent, C.accentLt, C.accentLt2, C.grey, C.grey],
    showValue: true, dataLabelFontFace: FONT, dataLabelFontSize: 10, dataLabelColor: C.body, dataLabelPosition: "outEnd",
    catAxisLabelFontFace: FONT, valAxisLabelFontFace: FONT, catAxisLabelColor: C.body, valAxisLabelColor: C.sub,
    showLegend: false, barGapWidthPct: 40, valAxisMaxVal: 25
  });
  panel(s, 8.3, 1.5, 4.53, 4.85);
  s.addText("机会漏斗", { x: 8.5, y: 1.62, w: 4, h: 0.35, fontSize: 13, bold: true, color: C.title, fontFace: FONT });
  // funnel shapes
  const fw = [4.1, 3.0, 1.9]; const fx = 8.55; let fy = 2.2;
  const flabels = ["48 个 询价中 RFQ", "38 个 未拆解", "优先跟进窗口"];
  fw.forEach((w, i) => {
    s.addShape(pptx.ShapeType.trapezoid, { x: fx + (4.1 - w) / 2, y: fy, w: w, h: 0.85, fill: { color: i === 1 ? C.accent : C.accentLt2 }, line: { type: "none" }, rotate: i === 2 ? 180 : 0 });
    s.addText(flabels[i], { x: fx, y: fy, w: 4.1, h: 0.85, fontSize: 11, bold: true, color: "FFFFFF", fontFace: FONT, align: "center", valign: "middle" });
    fy += 1.05;
  });
  s.addShape(pptx.ShapeType.roundRect, { x: 8.4, y: 5.55, w: 4.43, h: 0.7, rectRadius: 0.08, fill: { color: C.accent }, line: { type: "none" } });
  s.addText("SO WHAT：最佳介入窗口在询价中", { x: 8.4, y: 5.55, w: 4.43, h: 0.7, fontSize: 11.5, bold: true, color: "FFFFFF", fontFace: FONT, align: "center", valign: "middle" });
  footer(s, 11);
})();

// ---------- Slide 12 · Buyer divergence (manual bars) ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "采购员能力分化", "标杆 100% vs 待支持 0%");
  const rows = [
    { n: "张俊 / 徐颖晟 / 白雪", v: 100, c: C.green },
    { n: "王瑞玚", v: 66.7, c: C.green },
    { n: "徐佳浩", v: 50, c: C.amber },
    { n: "金鑫", v: 20, c: C.red },
    { n: "仓基伟", v: 0, c: C.red }
  ];
  const x0 = 3.4, maxW = 8.6, y0 = 1.7, rh = 0.82, gap = 0.18;
  rows.forEach((r, i) => {
    const y = y0 + i * (rh + gap);
    s.addText(r.n, { x: 0.5, y, w: 2.8, h: rh, fontSize: 12, color: C.body, fontFace: FONT, align: "left", valign: "middle" });
    const w = Math.max(0.15, (r.v / 100) * maxW);
    s.addShape(pptx.ShapeType.roundRect, { x: x0, y: y + 0.12, w, h: rh - 0.24, rectRadius: 0.04, fill: { color: r.c }, line: { type: "none" } });
    s.addText(r.v + "%", { x: x0 + w + 0.1, y, w: 1.2, h: rh, fontSize: 12, bold: true, color: C.title, fontFace: FONT, valign: "middle" });
  });
  panel(s, 0.5, 6.0, 12.33, 0.7);
  s.addText("注：0% 或受项目阶段 / 询价状态影响，建议称“待支持”而非“低能力”；仓基伟 12 个 RFQ 全部 L1，需重点辅导。", { x: 0.7, y: 6.0, w: 12, h: 0.7, fontSize: 10.5, color: C.sub, fontFace: FONT, valign: "middle" });
  footer(s, 12);
})();

// ---------- Slide 13 · Action roadmap (2x2) ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "运营建议路线图", "四条行动线 + 优先级");
  const acts = [
    { t: "① 补数据", d: "对已完成高价值 RFQ（座椅、减振器、电池包等）回溯拆解补数据", p: "P1" },
    { t: "② 定目标", d: "聚焦询价中 48 个 RFQ；推动 8 家 L3 供应商深入 VSM", p: "P0" },
    { t: "③ 开放 SVC", d: "加快预选供应商 SVC 权限开放，释放预选拆解杠杆", p: "P0" },
    { t: "④ 培训", d: "近一周 16 家预选以 L1 入场，配套拆解培训", p: "P1" }
  ];
  const gx = [0.5, 6.5], gy = [1.5, 3.7], cw = 6.33, ch = 2.05;
  acts.forEach((a, i) => {
    const x = gx[i % 2], y = gy[Math.floor(i / 2)];
    panel(s, x, y, cw, ch);
    s.addShape(pptx.ShapeType.rect, { x, y, w: 0.1, h: ch, fill: { color: C.accent }, line: { type: "none" } });
    s.addText(a.t, { x: x + 0.3, y: y + 0.2, w: cw - 1.6, h: 0.5, fontSize: 16, bold: true, color: C.title, fontFace: FONT });
    s.addShape(pptx.ShapeType.roundRect, { x: x + cw - 1.25, y: y + 0.22, w: 1.0, h: 0.45, rectRadius: 0.2, fill: { color: a.p === "P0" ? C.red : C.amber }, line: { type: "none" } });
    s.addText(a.p, { x: x + cw - 1.25, y: y + 0.22, w: 1.0, h: 0.45, fontSize: 12, bold: true, color: "FFFFFF", fontFace: FONT, align: "center", valign: "middle" });
    s.addText(a.d, { x: x + 0.3, y: y + 0.85, w: cw - 0.6, h: 1.05, fontSize: 12, color: C.body, fontFace: FONT, valign: "top", lineSpacingMultiple: 1.15 });
  });
  footer(s, 13);
})();

// ---------- Slide 14 · Closing ----------
(function () {
  const s = pptx.addSlide(); bg(s);
  title(s, "下一步：把增量引导到深层拆解与预选开放", null);
  s.addText("规模稳增但质量停滞，下一步把增量引导到深层拆解与预选 SVC 开放。", { x: 0.7, y: 1.7, w: 11.8, h: 0.9, fontSize: 18, bold: true, color: C.title, fontFace: FONT, valign: "top" });
  const acts = ["询价中窗口：重点跟进 48 个询价中 RFQ（20.8% 拆解率）", "L3 → VSM：推动 8 家 L3 供应商深入 VSM，突破平台期", "SVC 开放：加快预选供应商 SVC 权限，释放预选杠杆", "采购员辅导：重点支持仓基伟等低拆解率采购员"];
  acts.forEach((a, i) => {
    const y = 3.0 + i * 0.75;
    s.addShape(pptx.ShapeType.roundRect, { x: 0.9, y: y + 0.05, w: 0.42, h: 0.42, rectRadius: 0.21, fill: { color: C.accent }, line: { type: "none" } });
    s.addText(String(i + 1), { x: 0.9, y: y + 0.05, w: 0.42, h: 0.42, fontSize: 13, bold: true, color: "FFFFFF", fontFace: FONT, align: "center", valign: "middle" });
    s.addText(a, { x: 1.5, y: y, w: 11, h: 0.55, fontSize: 13.5, color: C.body, fontFace: FONT, valign: "middle" });
  });
  s.addText("来源：20260713.csv · 报价细项明细数据分析0713", { x: 0.9, y: 6.4, w: 11, h: 0.4, fontSize: 10, color: C.sub, fontFace: FONT });
  footer(s, 14);
})();

const out = "C:/Users/qi'yue/Desktop/Claire/09_Xiaomi/02_询报价/报价细项/报价细项数据分析/报价细项明细数据分析0713.pptx";
pptx.writeFile({ fileName: out }).then(() => console.log("DECK WRITTEN:", out)).catch(e => { console.error("ERR", e); process.exit(1); });
