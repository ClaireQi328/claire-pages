---
created: 2026-07-27
updated: 2026-07-27
tags: [Clippings, 微信收藏]
source: "http://mp.weixin.qq.com/s?__biz=MzIxOTQ5MjQxNQ==&mid=2247497149&idx=1&sn=9349ff8c5ee9a94eb3f217838940467b&chksm=97d8cceda0af45fb9db69f41ab3b80e9b001b8e5a1faace28916bdf46e10eab7f1ae98264cbb&mpshare=1&scene=24&srcid=0722rxSFQTdYthDNSoHKTeJI&sharer_shareinfo=75f7e636a88fbede3b2c00492f7486b6&sharer_shareinfo_first=75f7e636a88fbede3b2c00492f7486b6#rd"
status: draft
---


> 🌐 [在线阅读 HTML 版本](html/Power BI 多指标纵向富表格-趋势、总计同时显示.html)


# Power BI 多指标纵向富表格-趋势、总计同时显示

![cover_image](assets/4117fcb5fc136952c3c37e49ce0c7a8e_MD5.jpg)

# Power BI 多指标纵向富表格-趋势、总计同时显示

原创wujunminwujunminwujunmin

******

在小说阅读器读本章

去阅读

在小说阅读器中沉浸阅读

Seantheme.com有三页非常漂亮的可视化报告，其中有个表格如下图所示。这个表格纵向展示了不同指标的总计值、时间趋势，指标名称添加了圆角矩形背景进行美化。

![image](assets/c6725b27bf5f9be75e57143dcfdf0454_MD5.jpg)

Power BI要实现这样的效果不是那么容易。无论是表格还是矩阵，默认的指标都是横向排列。

![image](assets/4f6aaaa47dc1f27248c8c8940beb9627_MD5.jpg)

矩阵有一个功能是将值切换到行，顺利实现了所有指标纵向排列：

![image](assets/2334006cad3549680cfe2f63c0c0841d_MD5.jpg)

**接下来会遇到两个难题**，首先是趋势图如何添加？读者可能想到内置的添加迷你图功能：

![image](assets/f60013d054093f132629682670e6f048_MD5.jpg)

添加第一个指标的迷你图时你已经会感觉到不对，指标是纵向的，Power BI会把迷你图也按顺序纵向排列。

![image](assets/0db5f65de8c3e1171f0f4185e6d659bd_MD5.jpg)

添加到第六个指标的时候，你的失望情绪增加，一个弹框出现：

![image](assets/53de5b6171a70cd2e5189dc45e96862c_MD5.jpg)

第二个难题是指标名称这种标签样式Power BI不支持操作。通过我分享的《[Power BI 万能富标签生成器》可以借助SVG对指标值进行富标签设计，但是指标名称无法直接套用SVG。

![image](assets/6def050540315ebe7d7f2f2534595255_MD5.jpg)

尽管存在以上困难，但我还是实现了，**以下是Power BI模拟效果**：

![image](assets/025ac28f1c057292fd102046168d0cc6_MD5.jpg)

首先生成一个指标列表辅助表：

![image](assets/8341b96ee0f685144786f9350d592a46_MD5.jpg)

生成方式有两种，主页选项卡下手敲，或者建模选项卡下DAX生成：

![image](assets/34bd8e670dd8900f6d2ab19ada1f57f9_MD5.jpg)
通过SWITCH对原指标进行切换计算，并使用FORMAT锁定格式：*
*

![image](assets/33c78194f3f387550a5c152ebbb1e6a7_MD5.jpg)
这里使用传统的辅助表而不是字段参数功能进行指标切换，是因为字段参数不能满足这个场景的应用需求，后续会讲到。将指标列和上方的度量值拖入表格列，得到：

![image](assets/79384c05e009aecae00ef18e39ab7ec5_MD5.jpg)
此处的指标名称是实体列，所以可以使用我分享的《[Power BI 万能富标签生成器》加上圆角背景和图标。

总计值可以加上条件格式（本例为红绿灯）表示指标好坏，字段参数显示多个指标时，需要为每个指标各自设置一遍条件格式，而本文的方法将所有指标转换成了一个值，所以只需要设置一遍，具体的条件可以按指标名称SWITCH切换。

![image](assets/cc5891ca86f18949d0170c20f8442546_MD5.jpg)

条件格式图标使用我分享的免费SVG在线工具，参考《[Power BI 无代码SVG工具七大应用》

![image](assets/1aa6bb8347c3a93597526c59891f9b78_MD5.jpg)

最后的折线依然是SVG，想加多少加多少，代码见《[Power BI 卡片图趋势与过程指标组合》*
*

*![image](assets/d76d197edcdc4db33a48e0895bb3716e_MD5.jpg)*


*
*

**

---


[*Power BI SVG图表设计：从基础到实战*


![image](assets/9b296035e0ccd223c4ebd971b48529e3_MD5.jpg)


****


****


****


**

![作者头像](assets/d23a6a602ee5a0ab5d85b02503803dc8_MD5.jpg)

微信扫一扫可打开此内容，
使用完整服务