---
created: '2026-07-24'
tags: [ByteDance, 业务]
---

---tags: [ByteDance]
source: https://my.feishu.cn/docx/VDNddwUfNoJzPExaoX2cVMnXnpe
created: 2026-07-08
updated: 2026-07-22
status: draft
---
> [!summary] Infrastructure
> - **核心**：字节跳动的”基础设施（Infrastructure）”采购，在内部通常被称为 **TIO (Technical Infrastructure Operations)** 或 **Sourcing** 

# Infrastructure

字节跳动的”基础设施（Infrastructure）”采购，在内部通常被称为 **TIO (Technical Infrastructure Operations)** 或 **Sourcing** 相关部门。

---

## 💡 Highlights

> [!tip]- 核心要点
> - **Infrastructure 是字节 Data 事业部的基础设施工厂**
> - **核心职能**：数据中心建设、网络部署、CDN 节点部署
> - **服务范围**：全球机房规划、建设、运维
> - **关键指标**：PUE、可用性、容量规划

---

这和你在蔚来/小米做的”整车BOM（物料清单）”采购完全不同。汽车是**”离散制造”**，字节的基础设施是**”算力基建”**。

简单来说，你在字节要买的东西，就是**支撑抖音、TikTok、今日头条这台超级印钞机运转的所有物理和虚拟底座**。以下是详细的硬/软件拆解：

## 一、 硬件类（Hardware）：烧钱的主战场

这是字节 Infra 采购金额最大、供应链最复杂的部分，尤其是现在 AI 爆发，这里是战略核心。

### 算力核心（Compute）：最紧俏的资源

- **GPU（显卡）：** 这是目前的”硬通货”。主要是 **NVIDIA（英伟达）** 的 H100/A100/H800/H20 等训练推理卡。因为美国制裁和产能问题，这里的采购涉及复杂的全球供应链博弈、囤货和替代方案。

- **CPU：** Intel (Xeon) 和 AMD (EPYC) 的服务器级处理器。

- **自研芯片（ASIC）：** 字节内部有自研芯片团队（主要在上海/杭州），采购产品经理需要配合流片（TSMC台积电）、封装测试等供应链环节。

- **服务器整机（Server）：** x86 服务器、AI 训练集群服务器。通常采用 **JDM/ODM 模式**（联合设计制造），供应商包括浪潮、联想、超聚变、富士康等。

### 网络设备（Network）：数据的高速公路

- **交换机（Switches）：** 数据中心核心交换机（Whitebox 白盒交换机或品牌如 Arista/Cisco/H3C）。

- **光模块（Optical Transceivers）：** 极其关键的耗材，连接服务器和交换机的。国内供应商如中际旭创、新易盛。

- **网卡/光纤/线缆：** 智能网卡（SmartNIC）、AOC 线缆等。

### 存储（Storage）：海量视频的仓库

- **SSD/HDD：** 固态硬盘（Samsung, Micron, Hynix）和机械硬盘（Seagate, WD）。字节是全球最大的存储采购方之一。

- **内存（DRAM）：** 服务器内存条。

### 数据中心设施（IDC Facilities）：物理机房

- **机柜与配电：** Racks, PDU (电源分配单元), UPS (不间断电源)。

- **制冷系统：** 尤其是**液冷（Liquid Cooling）**设备。因为 AI 芯片发热巨大，字节正在大规模部署液冷数据中心，采购包括冷板、冷却液、CDU 等。

## 二、 软件与服务类（Software & Services）：隐形支出

- **基础软件许可证（Licenses）**

  - **OS & Virtualization：** 虽然大厂多用开源 Linux，但仍有大量商业授权（如 RedHat 相关支持）、虚拟化软件。

  - **数据库与中间件：** Oracle（遗留系统）、各类商用数据库授权。

  - **安全软件：** 防火墙授权、企业级安全扫描工具。

- **带宽与边缘计算（CDN/ISP）**

  这通常是单独的采购类别，但属于 Infra 范畴。采购全球的**带宽资源、CDN 节点**、运营商线路（联通/电信/移动/海外 ISP），保证你看视频不卡。

- **开发与协作工具**

  Jira, Confluence, GitHub Enterprise, IDE 授权等供数万名工程师使用的工具。

## 三、 对你（产品经理）意味着什么？

作为”基础设施供应链产品经理”，你不是去买这些东西的人（那是 Sourcing/Buyer 的活），你是**搭建系统**来管理这些东西的人。你需要面临的业务复杂度在于：

- **极度非标 vs 汽车BOM的标准化：** 汽车的一个零件号（Part Number）定了就不太变。字节买服务器，配置可能**按周变**。CPU 换一代，SSD 换一家，系统逻辑就得改。

- **库存周转极快：** 几亿美金的 GPU 到了仓库，马上就要上架跑模型。你的系统要解决**”资产全生命周期管理”**（从下单 -> 到货 -> 上架 -> 维修 -> 报废）。

- **异构供应链：** 既要买成品（Dell服务器），又要买零件（自己买内存条插到服务器里，叫 Component Buy 模式）。系统要支持这种复杂的**Buy-Sell**交易模式。

犀利点评：如果在字节做这个方向，你更像是一个”IT 资产管理专家”。而在小米做汽车供应链，你是”制造业大供应链专家”。考虑到你未来的 MEM 学位和职业连贯性，小米的”汽车+制造”背景，含金量和行业通用性远高于字节的”IT+后台”。

## 🔗 相关文档

- [[08_ByteDance/02_行业研究/服务器产业链研究]] — 服务器产业链
- [[08_ByteDance/02_行业研究/IT基础设施采购指南]] — IT 采购指南
- [[CDN介绍]] — CDN
- [[Landing Info]] — 业务线概览
