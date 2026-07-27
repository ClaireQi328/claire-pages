#!/usr/bin/env python3
"""Build side-by-side (blueprint | render) montages for CyberPPT Stage 3 QA.
Also a 4-up overview grid for quick scanning.
Requires Pillow (pip install --target <dir> Pillow).
"""
import sys
from pathlib import Path

BASE = Path(r"C:/Users/qi'yue/Desktop/Claire/09_Xiaomi/02_询报价/报价细项/报价细项数据分析")
BP = BASE / "cyber-ppt" / "blueprints"
RN = BASE / "cyber-ppt" / "render"
OUT = BASE / "cyber-ppt" / "qa"
OUT.mkdir(parents=True, exist_ok=True)

from PIL import Image, ImageDraw


def load(p):
    return Image.open(p).convert("RGB")


def resize_keep(im, w):
    ratio = w / im.width
    return im.resize((w, int(im.height * ratio)))


def label(im, text, idx):
    d = ImageDraw.Draw(im)
    d.text((8, 6), f"{idx:02d} · {text}", fill=(18, 53, 91))
    return im


TITLES = {
    1: "封面", 2: "KPI概览", 3: "执行摘要", 4: "层级构成", 5: "本周增量",
    6: "层级解剖", 7: "平台期BOM→VSM", 8: "预选vs正式", 9: "口径辨析",
    10: "近一周动态", 11: "询价中窗口", 12: "采购员分化", 13: "行动路线图", 14: "结尾",
}

# Side-by-side
for i in range(1, 15):
    bp = BP / f"slide-{i:02d}.png"
    rn = RN / f"slide-{i:02d}.png"
    if not (bp.exists() and rn.exists()):
        print("skip", i, "missing", bp.exists(), rn.exists())
        continue
    b = resize_keep(load(bp), 760)
    r = resize_keep(load(rn), 760)
    # add header strip
    W = b.width + r.width
    H = b.height + 34
    canvas = Image.new("RGB", (W, H), (247, 246, 240))
    canvas.paste(b, (0, 34))
    canvas.paste(r, (b.width, 34))
    d = ImageDraw.Draw(canvas)
    d.rectangle([0, 0, b.width - 1, 33], fill=(18, 53, 91))
    d.rectangle([b.width, 0, W - 1, 33], fill=(61, 92, 130))
    d.text((10, 9), f"蓝图 Blueprint · {i:02d} {TITLES[i]}", fill=(255, 255, 255))
    d.text((b.width + 10, 9), f"渲染 Render · {i:02d} {TITLES[i]}", fill=(255, 255, 255))
    canvas.save(OUT / f"sbs-{i:02d}.png")
    print("wrote", OUT / f"sbs-{i:02d}.png")

# 4-up overview (2 cols x 7 rows) of RENDERS only
renders = [RN / f"slide-{i:02d}.png" for i in range(1, 15) if (RN / f"slide-{i:02d}.png").exists()]
tw = 360
cells = [resize_keep(load(p), tw) for p in renders]
cols = 2
rows = (len(cells) + cols - 1) // cols
cw = tw
ch = int(cells[0].height * (tw / cells[0].width))
grid = Image.new("RGB", (cw * cols + 10 * (cols - 1), ch * rows + 10 * (rows - 1)), (235, 235, 235))
for k, c in enumerate(cells):
    rr = k // cols
    cc = k % cols
    x = cc * (cw + 10)
    y = rr * (ch + 10)
    grid.paste(c, (x, y))
grid.save(OUT / "overview_renders.png")
print("wrote", OUT / "overview_renders.png")
print("DONE")
