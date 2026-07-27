---
created: 2026-07-16
updated: 2026-02-26
tags:
  - Clippings
  - 采购
source: "https://mi.feishu.cn/wiki/E8S5dNka4owFhbxsOfucGq0PnBh"
status: draft
---

> [!summary] SQMS PPAP 数据导出 SQL 与看板需求：支持 M0/M1 阀点 PPAP 完成率追踪
> - **核心**：提供 PPAP 数据导出的 SQL 代码及数据看板需求，用于追踪 M0 和 M1 阀点的 PPAP3 完成情况
> - **要点**：SQL 查询涵盖零件号、供应商、PPAP 编号/阶段/结论、SQE/SQE 主管、关联 APQP/PPAP、风险等级等字段；看板需求包括饼图（已发布/正式认可/临时认可/未发布/拒绝认可）和按 SQE 管理组的分布图；通过数据工场每日导出全量数据

# SQMS PPAP数据导出和看板需求

# 数据导出

通过[数据工场](https://data.mioffice.cn/workspace/?wid=14504#/workspace/14504/adHoc?fileId=197692)每日导出，注意导出全量数据

## SQL代码

```SQL
select
    tap.PART_NO `零件号`,
    ts.supplier_name `供应商`,
    ta.ppap_no `PPAP编号`,
    ta.supplier_link_man `供应商联系人`,
    tp.project_no `项目编号`,
    ta.sqe_office `专业组`,
    ta.ppap_name `PPAP名称`,
    upper(ta.PPAP_STAGE)  `PPAP阶段`,
    tu.name `SQE`,
    sqeSeniorManager.name `SQE主管`,
    b.projectSqeUserName `SQE项目管理`,
    case ta.APPROVAL_REASON
        when 'FIRST' then '首次提交'
        when 'CHANGE_STRUCTURE_MATERIAL' then '更改可选用的结构或材料'
        when 'DESIGN_CHANGES' then '工程设计更改'
        when 'SOURCE_CHANGE' then '分供方或材料来源更改'
        when 'FROCK' then '工装：转移、代替、整修或附加'
        when 'PROCESS_CHANGES' then '零件加工过程更改'
        when 'DEVIATION_CORRECTION' then '临时偏差校正'
        when 'PRODUCTION_IN_OTHER_PLACES' then '在其它地方生产零件'
        when 'OTHER' then '其他'
        end
        `认可原因`,
    ta.apqp_no `关联APQP`,
    ta.risk_level `风险等级`,

    ta.status `是否生效`,
    case
        ta.release_flag
        when 'UNPUBLISHED' then '未发布'
        when 'PUBLISHED' then '已发布'
        when 'INAPPROVAL' then '审批中'
        when 'APPROVAL_RETURN' then '审批退回'
        when 'APPROVER' then '已批准'
        end `发布状态`,

    case ta.ppap_conclusion
        when 'TEMPORARY' then '临时认可'
        when 'FORMAL' then '正式认可'
        end `PPAP结论`,
    ta2.ppap_no `关联PPAP`

from
    iceberg_nc4prc_hadoop.tmp.iceberg_tt_ppap  ta
        inner join iceberg_nc4prc_hadoop.tmp.iceberg_tt_project  tp on ta.project_id = tp.project_id
        left join (
        select
            tpsu.project_id,
            concat_ws(',', collect_set(tup.name)) projectSqeUserName
        from
            iceberg_nc4prc_hadoop.tmp.iceberg_tt_project_sqe_user  tpsu
                inner join iceberg_nc4prc_hadoop.tmp.iceberg_tm_user  tup on tpsu.SQE_USER_ID = tup.user_id
        group by
            tpsu.project_id
    ) b on tp.PROJECT_ID = b.project_id
        left join iceberg_nc4prc_hadoop.tmp.iceberg_tt_ppap_part  tap on ta.ppap_id = tap.ppap_id

        left join iceberg_nc4prc_hadoop.tmp.iceberg_tm_supplier  ts on ts.supplier_id = ta.supplier_id
        left join iceberg_nc4prc_hadoop.tmp.iceberg_tm_user  tu on ta.sqe_id = tu.user_id
        left join iceberg_nc4prc_hadoop.tmp.iceberg_tm_user  sqeSeniorManager on sqeSeniorManager.USER_ID = ta.SQE_SENIOR_MANAGER
        left join iceberg_nc4prc_hadoop.tmp.iceberg_tt_ppap  ta2 on ta.associated_ppap_id = ta2.ppap_id

group by
    ta.PPAP_id,
    tap.PPAP_PART_ID,
    tap.PART_NO,
    ts.supplier_name,
    ta.ppap_no,
    ta.supplier_link_man,
    tp.project_no,
    ta.sqe_office,
    ta.ppap_name,
    ta.PPAP_STAGE,
    tu.name,
    sqeSeniorManager.name,
    b.projectSqeUserName,
    ta.APPROVAL_REASON,
     ta.apqp_no,
      ta.risk_level,
      ta.status,
      ta.release_flag,
      ta.ppap_conclusion,
      ta2.ppap_no
order by
    ta.PPAP_ID desc,
    tap.PPAP_PART_ID asc
```

## 数据样例

<figure view-type="Preview"><source href="https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MWQ4ZjlkY2Y0Y2EwNTRmYWNhMGMxNDUzMDhjY2Y4MGZfNjMwY2JkMGJkOGFhNzE3ZDNlMjRjZjkyYzQ5MzgwNWZfSUQ6NzYxMTA1OTc1OTA1NTc4NDkwNV8xNzg0MTY5NDI0OjE3ODQxNzMwMjRfVjM" mime="text/csv" token="NSf0bAA9JoVSgLxk76xcS1FynQe"/></figure>

# 数据看板需求

## 数据需求信息源

> 
关注总共XX零件，已完成XX，未完成XX，认可结论正式 OR 临时

现状：基于每日导出的数据，用飞书多维表格统计**M0和M1** **PPAP3**的完成情况

- 表1：饼图，已发布/正式认可/临时认可/未发布/拒绝认可
- 表2：管理组分布图：按照SQE管理组统计分布
- 文字：已完成XX%，正式认可%，临时认可%，拒绝认可%

![图片展示的是飞书应用界面中“26A DPU状态”下的“PPAP批准看板”选项。该图片位于文档“数据看板需求”部分，用于说明看板实现方式中“基于现有数据另做看板”的内容。图片中“PPAP批准看板”选项被红色箭头指向，突出显示，表明这是基于现有数据另做看板的示例，与文档中基于现有数据另做看板的需求描述相呼应。](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YmVmNWEzYTliZjFhYjllMzhjNWM4ZmE1MTRjY2YzZTFfYzI0OWViOWE1ZDViOGE2YjljMmQ5MzlmY2I4NmY1MDVfSUQ6NzYxMTA2MjIyODI3NTk0MDU2Nl8xNzg0MTY5NDI0OjE3ODQxNzMwMjRfVjM)

![图片展示的是“26A可看板”界面，左侧为项目管理导航栏，右侧是看板内容。看板 addCriterion图片展示的是“26A可看板”界面，左侧为项目管理导航栏，右侧是看板内容。看板上方有“分享”“自动化”等按钮，主题为“XYN-PPAP可看板”。看板分为“26A整体认可情况”和“专业组认可情况”两部分，分别以饼图和柱状图呈现数据。饼图显示已发布273（29.26%）、正式认可522（55.95%）、临时认可134（14.54%）、未发布2（0.21%）、拒绝认可2（0.22%）；柱状图显示各专业组的已发布、正式认可、临时认可、未发布、拒绝认可数量。该图片与文档中数据看板需求部分相关，展示了看板实现方式中基于现有数据另做看板的示例。](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=M2E1MzM3OWZiMGMyZTE0NzVkNDZiNDMzZTJjYTJiMmVfZjk2ZDU5NzdmYzZjMzRjODk4YTIwNjAwYmFhZWRhYzdfSUQ6NzYxMTA2MjE5OTU3MTcyOTYwOF8xNzg0MTY5NDI0OjE3ODQxNzMwMjRfVjM)

![图片展示的是飞书文档中关于M0阀点材料的PPAP3批准进展信息。总体说明为中风险。PPAP3批准进展目标为：2/6~70%，2/ 自动生成](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=OTcwNTRkZWRlMTdiM2I1Y2IwNmE4ZTE0Y2ZlYTk0MmZfMTc0NDBkMzI0MTkyMjA1NzE5ODUwMzAyNTEwODdkZDZfSUQ6NzYxMTA2Mjc2ODQ3MjQ2MDI0OF8xNzg0MTY5NDI0OjE3ODQxNzMwMjRfVjM)

![图片展示了SQMS PPAP相关数据看板。左侧突出显示了M0和M1节点的PPAP3信息。右侧主要分为两部分，一是PPAP3批准状态，包含批准进度同步的目标与实际完成情况，以及正式认可、临时认可等的数量和占比；二是2TP&投产攻坚专项相关内容。该图片与上文的数据看板需求部分相关，直观呈现了M0和M1的PPAP3完成情况等数据需求信息源中的关键数据。](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=Y2JjYWFkY2ZjZmI5MjcwMTQ2NzBiMWQ5MjQ4MWQwNzBfMTViYjgyNzA5NDY4NmI1ZjIwMjE3OTU0M2JmOWE1ZWFfSUQ6NzYxMTA2MzEwMTk0ODUxMzIzMV8xNzg0MTY5NDI0OjE3ODQxNzMwMjRfVjM)

## 看板实现方式

1. 飞书表格自动更新数据源
2. 基于现有数据另做看板