#!/usr/bin/env python3
"""Build side-by-side blueprint vs render QA montage for each slide."""
import os, glob
from PIL import Image, ImageDraw, ImageFont

DATA = r"C:\Users\qi'yue\Desktop\Claire\09_Xiaomi\02_询报价\报价细项\报价细项数据分析"
BP_DIR = os.path.join(DATA, "cyber-ppt", "blueprints")
RN_DIR = os.path.join(DATA, "cyber-ppt", "render_aspose")
OUT_DIR = os.path.join(DATA, "cyber-ppt", "qa_montage")
os.makedirs(OUT_DIR, exist_ok=True)

# Target size for each side (blueprint is ~1024x724 typically)
SIDE_W, SIDE_H = 1280, 960
GAP = 4
MONTAGE_W = SIDE_W * 2 + GAP + 80  # extra for labels
MONTAGE_H = SIDE_H + 40

for i in range(1, 15):
    bp_path = os.path.join(BP_DIR, f"slide-{i:02d}.png")
    rn_path = os.path.join(RN_DIR, f"slide-{i:02d}.png")
    
    bp = Image.open(bp_path).convert("RGBA").resize((SIDE_W, SIDE_H), Image.LANCZOS)
    rn = Image.open(rn_path).convert("RGBA").resize((SIDE_W, SIDE_H), Image.LANCZOS)
    
    canvas = Image.new("RGB", (MONTAGE_W, MONTAGE_H), "#F0F0F0")
    # Left label area
    draw = ImageDraw.Draw(canvas)
    draw.rectangle([0, 0, MONTAGE_W-1, MONTAGE_H-1], outline="#CCCCCC", width=1)
    draw.text((8, 4), f"Slide {i:02d} — Blueprint vs Render", fill="#333333")
    draw.text((SIDE_W + 16, SIDE_H + 12), "← Blueprint (ImageGen) | Render (Aspose.Slides) →", fill="#666666")
    
    canvas.paste(bp, (0, 32))
    canvas.paste(rn, (SIDE_W + GAP + 40, 32))
    
    out_path = os.path.join(OUT_DIR, f"compare-{i:02d}.png")
    canvas.save(out_path, "PNG")
    print(f"[{i:02d}] {out_path} ({canvas.size[0]}x{canvas.size[1]})")

print(f"DONE: {OUT_DIR}")
