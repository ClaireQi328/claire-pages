#!/usr/bin/env python3
"""Bypass LibreOffice: render PPTX slides to PNG via Aspose.Slides (self-contained renderer)."""
import sys, glob, os

DATA = r"C:\Users\qi'yue\Desktop\Claire\09_Xiaomi\02_询报价\报价细项\报价细项数据分析"
DECK = os.path.join(DATA, "报价细项明细数据分析0713.pptx")
OUT = os.path.join(DATA, "cyber-ppt", "render_aspose")
os.makedirs(OUT, exist_ok=True)

import aspose.slides as slides

with slides.Presentation(DECK) as pres:
    total = len(pres.slides)
    print("slides in deck:", total)
    for i, slide in enumerate(pres.slides, 1):
        bmp = slide.get_image(1.6, 1.2)  # scale ~ for 13.33x7.5 @ ~150dpi
        path = os.path.join(OUT, f"slide-{i:02d}.png")
        bmp.save(path, slides.ImageFormat.PNG)
        print("rendered", path)
print("DONE")
