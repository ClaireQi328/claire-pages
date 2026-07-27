use `srm_gps_project_prod`;

CREATE TABLE `gps_proj_cross_info` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `gps_project_id` bigint NOT NULL COMMENT '关联项目管理的主键',
  `view_code` varchar(32) NOT NULL DEFAULT '' COMMENT 'viewCode',
  `ps_update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'ps更新时间',
  `is_deleted` tinyint NOT NULL DEFAULT '0' COMMENT '是否删除',
  `version` int DEFAULT NULL COMMENT '乐观锁',
  `create_by` varchar(32) DEFAULT '' COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT '' COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='crossInfo表' ;

CREATE TABLE `gps_proj_cross_info_detail` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `lane_type` varchar(32) NOT NULL DEFAULT '' COMMENT 'laneType',
  `cross_info_id` bigint NOT NULL COMMENT '关联crossInfo的主键',
  `cross_link_item_list` json DEFAULT NULL COMMENT '时间节点串信息',
  `is_deleted` tinyint NOT NULL DEFAULT '0' COMMENT '是否删除',
  `version` int DEFAULT NULL COMMENT '乐观锁',
  `create_by` varchar(32) DEFAULT '' COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT '' COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='crossInfo Detail表' ;

CREATE TABLE `gps_proj_project_attachment` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `version` int NOT NULL DEFAULT '1' COMMENT '乐观锁版本号',
  `create_by` varchar(32) NOT NULL DEFAULT '' COMMENT '创建人',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) NOT NULL DEFAULT '' COMMENT '更新人',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `biz_source` varchar(50) NOT NULL DEFAULT '' COMMENT '业务来源',
  `biz_source_id` varchar(50) NOT NULL DEFAULT '' COMMENT '业务主键id',
  `file_name` varchar(127) NOT NULL DEFAULT '' COMMENT '文件名字',
  `storage_key` varchar(512) NOT NULL DEFAULT '' COMMENT 'cos存储key',
  `byte_size` bigint NOT NULL DEFAULT '0' COMMENT '文件大小',
  `file_md5` varchar(64) NOT NULL DEFAULT '' COMMENT '文件md5值',
  PRIMARY KEY (`id`),
  KEY `idx_bizSourceAndId_idx` (`biz_source`,`biz_source_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='车型项目的文件附件' ;

CREATE TABLE `gps_proj_project_info` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `industry` varchar(32) DEFAULT NULL COMMENT '行业',
  `gps_mdt_project_code` varchar(32) NOT NULL DEFAULT '' COMMENT '项目编号',
  `gps_mdt_project_name` varchar(128) NOT NULL DEFAULT '' COMMENT '项目名称',
  `assembly_part_code` varchar(32) NOT NULL COMMENT '总成零件号',
  `is_deleted` tinyint NOT NULL DEFAULT '0' COMMENT '是否删除',
  `version` int DEFAULT NULL COMMENT '乐观锁',
  `create_by` varchar(32) DEFAULT '' COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) DEFAULT '' COMMENT '更新人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=640 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='主数据-项目信息表' ;

CREATE TABLE `gps_proj_trial_project` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `version` int NOT NULL DEFAULT '1' COMMENT '乐观锁版本号',
  `create_by` varchar(32) NOT NULL DEFAULT '' COMMENT '创建人',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) NOT NULL DEFAULT '' COMMENT '更新人',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `trial_project_id` varchar(32) NOT NULL COMMENT '试制项目号',
  `trial_project_description` varchar(128) NOT NULL COMMENT '试制项目描述',
  `model` varchar(32) NOT NULL COMMENT '车型',
  `model_year` varchar(16) NOT NULL COMMENT '年款',
  `shop` varchar(16) NOT NULL COMMENT '车间',
  `status` varchar(16) NOT NULL COMMENT '状态',
  `phases` varchar(128) NOT NULL COMMENT '阶段',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=276 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='试制项目表' ;

CREATE TABLE `gps_proj_trial_regional_phases` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `version` int NOT NULL DEFAULT '1' COMMENT '乐观锁版本号',
  `create_by` varchar(32) NOT NULL DEFAULT '' COMMENT '创建人',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) NOT NULL DEFAULT '' COMMENT '更新人',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `trial_project_id` varchar(16) NOT NULL COMMENT '试制项目号',
  `region` varchar(16) NOT NULL COMMENT '地区',
  `parent_phases` varchar(16) NOT NULL COMMENT '大阶段',
  `sub_phases` varchar(16) NOT NULL COMMENT '小阶段',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=298 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='地区阶段表' ;

CREATE TABLE `gps_proj_vehicle_model` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `version` int NOT NULL DEFAULT '1' COMMENT '乐观锁版本号',
  `create_by` varchar(32) NOT NULL DEFAULT '' COMMENT '创建人',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) NOT NULL DEFAULT '' COMMENT '更新人',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `vehicle_model_code` varchar(64) NOT NULL DEFAULT '' COMMENT '车型编码',
  `name_en` varchar(64) NOT NULL DEFAULT '' COMMENT '英文名',
  `name_cn` varchar(64) NOT NULL DEFAULT '' COMMENT '中文名',
  `plm_code` varchar(64) NOT NULL DEFAULT '' COMMENT '在PLM的编码',
  `ps_project_code` varchar(32) DEFAULT NULL COMMENT '对应的PS项目编码',
  PRIMARY KEY (`id`),
  KEY `idx_vehicle_model_code` (`vehicle_model_code`),
  KEY `idx_ps_code` (`ps_project_code`) COMMENT 'ps_project_code索引'
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='车型主数据' ;

CREATE TABLE `gps_proj_vehicle_model_i18n` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `version` int NOT NULL DEFAULT '1' COMMENT '乐观锁版本号',
  `create_by` varchar(32) NOT NULL DEFAULT '' COMMENT '创建人',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) NOT NULL DEFAULT '' COMMENT '更新人',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `vehicle_model_code` varchar(64) NOT NULL DEFAULT '' COMMENT '车型编码',
  `lang` varchar(64) NOT NULL DEFAULT '' COMMENT '语言',
  `name` varchar(64) NOT NULL DEFAULT '' COMMENT '名称',
  PRIMARY KEY (`id`),
  KEY `idx_vehicle_model_code` (`vehicle_model_code`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='车型名称多语言' ;

CREATE TABLE `gps_proj_vehicle_project` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `version` int NOT NULL DEFAULT '1' COMMENT '乐观锁版本号',
  `create_by` varchar(32) NOT NULL DEFAULT '' COMMENT '创建人',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) NOT NULL DEFAULT '' COMMENT '更新人',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `project_type` varchar(50) DEFAULT '' COMMENT '项目类型(默认值为空，值选项：新车型项目、NT项目、海外项目、改款项目、迭代项目)',
  `industry` varchar(50) NOT NULL DEFAULT 'VEHICLE' COMMENT '行业',
  `brand` varchar(50) NOT NULL DEFAULT '' COMMENT '品牌(NIO、ALPS、FIREFLY)',
  `factory_code` varchar(100) NOT NULL DEFAULT '' COMMENT '工厂',
  `status` varchar(10) NOT NULL COMMENT '项目状态(保存SAVE发布RELEASE取消CANCEL)',
  `remark` varchar(1024) NOT NULL DEFAULT '' COMMENT '备注',
  `gps_project_code` varchar(100) NOT NULL DEFAULT '' COMMENT '同步项目代号',
  `vehicle_project_name` varchar(50) DEFAULT '' COMMENT '项目名称',
  `vehicle_model` varchar(30) DEFAULT '' COMMENT '车型代码',
  `vsm_account` varchar(50) NOT NULL DEFAULT '' COMMENT '默认取创建人邮箱前缀+中文名填入',
  `life_cycle` varchar(50) NOT NULL DEFAULT '' COMMENT '生命周期',
  `vehicle_project_code` varchar(20) NOT NULL COMMENT '项目代码',
  `name_en` varchar(64) NOT NULL DEFAULT '' COMMENT '英文名',
  `name_cn` varchar(64) NOT NULL DEFAULT '' COMMENT '中文名',
  `ps_project_code` varchar(32) DEFAULT NULL COMMENT '对应的PS项目编码',
  `gps_mdt_project_code` varchar(64) DEFAULT NULL COMMENT '项目主数据编码',
  PRIMARY KEY (`id`),
  KEY `idx_gps_project_code` (`gps_project_code`),
  KEY `idx_vehicle_project_code` (`vehicle_project_code`),
  KEY `idx_vehicle_model` (`vehicle_model`),
  KEY `idx_ps_code` (`ps_project_code`) COMMENT 'ps_project_code索引'
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='项目管理' ;

CREATE TABLE `gps_proj_vehicle_project_detail` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `version` int NOT NULL DEFAULT '1' COMMENT '乐观锁版本号',
  `create_by` varchar(32) NOT NULL DEFAULT '' COMMENT '创建人',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) NOT NULL DEFAULT '' COMMENT '更新人',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `gps_project_id` bigint NOT NULL COMMENT '关联项目管理的主键',
  `np_platform` varchar(10) DEFAULT '' COMMENT 'NP平台',
  `nt_platform` varchar(10) DEFAULT '' COMMENT 'NT平台(NT1、NT2、NT3)',
  `first_model_flag` tinyint(1) DEFAULT NULL COMMENT '是否是NT首发车型',
  `mainly_used_model` varchar(50) DEFAULT '' COMMENT '对标/主要沿用车型',
  `jph` int DEFAULT NULL COMMENT 'JPH',
  `estimate_batch_production_date` datetime DEFAULT NULL COMMENT '预计量产时间',
  `gate_two_date` datetime DEFAULT NULL COMMENT 'Gate2',
  `gate_four_date` datetime DEFAULT NULL COMMENT 'Gate4',
  `gate_seven_date` datetime DEFAULT NULL COMMENT 'Gate7',
  `eop_date` datetime DEFAULT NULL COMMENT 'EOP',
  `sales_area` varchar(100) DEFAULT NULL COMMENT '销售区域',
  `k_zero_date` datetime DEFAULT NULL COMMENT 'K0',
  `gate_zero_date` datetime DEFAULT NULL COMMENT 'Gate0',
  `gate_one_date` datetime DEFAULT NULL COMMENT 'Gate1',
  `gate_three_date` datetime DEFAULT NULL COMMENT 'Gate3',
  `gate_five_date` datetime DEFAULT NULL COMMENT 'Gate5',
  `gate_five_point_five_date` datetime DEFAULT NULL COMMENT 'Gate5.5',
  `gate_six_date` datetime DEFAULT NULL COMMENT 'Gate6',
  `gate_six_point_five_date` datetime DEFAULT NULL COMMENT 'Gate6.5',
  `gate_eight_date` datetime DEFAULT NULL COMMENT 'Gate8',
  `gate_nine_date` datetime DEFAULT NULL COMMENT 'Gate9',
  `assembly_part_code` varchar(64) DEFAULT NULL COMMENT '总成零件号',
  PRIMARY KEY (`id`),
  KEY `idx_gps_project_id` (`gps_project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='项目管理明细' ;

CREATE TABLE `gps_proj_vehicle_project_dimension` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `version` int NOT NULL DEFAULT '1' COMMENT '乐观锁版本号',
  `create_by` varchar(32) NOT NULL DEFAULT '' COMMENT '创建人',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) NOT NULL DEFAULT '' COMMENT '更新人',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `gps_project_id` bigint NOT NULL COMMENT '关联项目管理的主键',
  `secondary_sales_area` varchar(20) DEFAULT NULL COMMENT '二级销售区域',
  `year` int DEFAULT NULL COMMENT '年份',
  `dimension_count` int DEFAULT '0' COMMENT '量纲数量',
  `primary_sales_area` varchar(20) DEFAULT NULL COMMENT '一级销售区域',
  `sales_area_zh` varchar(50) DEFAULT NULL COMMENT '销售区域中文',
  `sales_area_key` varchar(20) DEFAULT NULL COMMENT '销售区域key',
  PRIMARY KEY (`id`),
  KEY `idx_gps_project_id` (`gps_project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2816 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='量纲' ;

CREATE TABLE `gps_proj_vehicle_project_i18n` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `version` int NOT NULL DEFAULT '1' COMMENT '乐观锁版本号',
  `create_by` varchar(32) NOT NULL DEFAULT '' COMMENT '创建人',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(32) NOT NULL DEFAULT '' COMMENT '更新人',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `gps_project_code` varchar(64) NOT NULL DEFAULT '' COMMENT '项目编码',
  `lang` varchar(64) NOT NULL DEFAULT '' COMMENT '语言',
  `name` varchar(64) NOT NULL DEFAULT '' COMMENT '名称',
  PRIMARY KEY (`id`),
  KEY `idx_gps_project_code` (`gps_project_code`)
) ENGINE=InnoDB AUTO_INCREMENT=273 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='项目名称多语言' ;