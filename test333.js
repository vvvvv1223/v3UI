const offMock = true
export default {
    // 枚举查询
    'lj.aa.bb.enumeration.query': {
        offMock,
        mock: function () {
            return {
                "bizCategory": [
                    {
                        "value": "didi_driving",
                        "desc": "滴滴代驾"
                    },
                    {
                        "value": "bargain_driving",
                        "desc": "特惠代驾"
                    }
                ],
                "strategyType": [
                    {
                        "value": 1,
                        "desc": "露出"
                    },
                    {
                        "value": 2,
                        "desc": "排序"
                    }
                ],
              "strategyStatus": [
                    {
                        "value": 1,
                        "desc": "待审核"
                    }
                ],
                "approveStatus": [
                    {
                        "value": 1,
                        "desc": "待审核"
                    }
                ],
                "validType": [
                    {
                        "value": 100,
                        "desc": "短期"
                    },
                  {
                        "value": 200,
                        "desc": "长期"
                    }
                ],
                "experimentType": [
                    {
                        "value": 0,
                        "desc": "否"
                    },
                    {
                        "value": 1,
                        "desc": "是"
                    }
                ],
             "fenceType": [
                    {
                        "value": 0,
                        "desc": "否"
                    },
                    {
                        "value": 1,
                        "desc": "是"
                    }
                ]
            }        
        }
    },
    // 列表
    'lj.bs.config.search.showStrategy': {
        offMock,
        mock: function () {
            return {
                "totalCount": 100,  // 数据总量
                "totalPage": 10,  // 总页数
                "showConfigBasisConfigResultList": [  // 行数据
                    {
                        "strategyId": 12,  // 策略ID
                        "strategyName": "策略名称",  // 策略名称
                        "strategyType": 1,  // 策略类型
                        "strategyTypeDesc": "策略类型描述",  // 策略类型描述
                        "productCategoryId": "",  // 品类ID
                        "productCategoryName": "品类名称",  // 品类名称
                        "validType": 0,  // 生效类型
                        "validTypeDesc": "生效类型描述",  // 生效类型描述
                        "expType": 0,  // 实验类型
                        "expTypeDesc": "",  // 实验类型描述
                        "cityId": 0,  // 城市ID
                        "cityName": "杭州",  // 城市名称
                        "fenceId": 0,  // 围栏ID
                        "fenceName": "",  // 围栏名称
                        "effectiveStartTime": "",  // 生效开始时间
                        "effectiveEndTime": "",  // 生效结束时间
                        "validStatus": 0,  // 生效状态
                        "validStatusDesc": "",  // 生效状态描述
                        "approveStatus": 0,  // 审批状态
                        "approveStatusDesc": "",  // 审批状态描述
                        "operator": "",  // 操作人
                        "bpmJumpUrl": "",  // 数据处于待审批状态下，对应的审批链接
                        "gmtCreate": "",  // 创建时间
                        "gmtModify": ""  // 修改时间
                    }
                ]
            }
            
        }
    },
    // 失效审核(多选)
    'lj.bs.config.invalid.showStrategy': {
        offMock,
        mock: function () {
            return {
                code: 200,
                data: {}
            }
        }
    },
    //失效不审核(单选)
    'lj.bs.config.without.approve.invalid.showStrategy': {
        offMock,
        mock: function () {
            return {
                code: 200,
                data: {}
            }
        }
    },
    // 批量上传
    'lj.bs.config.import.showStrategy': {
        offMock,
        mock: function () {
            return {
                code: 200,
                data: {}
            }
        }
    },
    // 详情
    'lj.bs.config.query.showStrategy': {
        offMock,
        mock: function () {
            return {
                "strategyId": 12,  // 策略ID
                "strategyName": "测试",  // 策略名称
                "strategyType": 1,  // 策略类型
                "strategyTypeDesc": "基础露出",  // 策略类型描述
                "productCategoryId": "didi_driving",  // 品类ID
                "productCategoryName": "滴滴代驾",  // 品类名称
                "validType": 1,  // 生效类型
                "validTypeDesc": "生效中",  // 生效类型描述
                "expType": 0,  // 实验类型
                "expTypeDesc": "否",  // 实验类型描述
                "cityId": 430300,  // 城市ID
                "cityName": "杭州市",  // 城市名称
                "fenceId": 23,  // 围栏ID
                "fenceName": "测试围栏",  // 围栏名称
                "effectiveStartTime": "2024-02-02 00:00:00",  // 生效开始时间
                "effectiveEndTime": "2026-02-02 00:00:00",  // 生效结束时间
                "validStatus": 1,  // 生效状态
                "validStatusDesc": "生成中",  // 生效状态描述
                "approveStatus": 1,  // 审批状态
                "approveStatusDesc": "待审批",  // 审批状态描述
                "showConfigExperimentConfig": {  // 实验详情配置
                    "strategyExpName": "ab_xxx_config",  // 实验名称
                    "strategyHitGroup": "xxx"  // 实验命中的分组名称
                },
                "showConfigStrategyConfig": {  // 策略详情配置
                    "productCategoryPriority": 10,  // 品类排序优先级
                    "productCategoryIsSelected": 0,  // 是否默认勾选(0=否 ，1=是)
                    "sceneIdentity": "first_page",  // 生效场景
                    "sceneIdentityDesc": "首页预估",  // 生效场景描述
                    "showConfigStrategyRuleConfigList": [  // 露出规则判定配置
                        {
                            "openTimePeriodConfigDesc": [  // 时段描述
                                "00:00:00~17:59:59",
                                "20:00:00~23:59:59"
                            ],
                            "distanceRangeConfigDesc": ">6000米",  // 预估里程配置描述
                            "driverShipAbilityConfigDesc": "2000米,司机数>1"  // 运力判定配置描述
                        }
                    ]
                },
               "showConfigBasisConfigOptLogList": [  // 操作日志
                    {
                        "operatorId": "test",  // 操作人
                        "optTime": 1234123412341,  // 操作时间戳
                        "optDesc": "提交"  // 操作描述
                    }
                ],
                "operator": "test",  // 操作人
                "bpmJumpUrl": "xx",  // 数据处于待审批状态下，对应的审批链接
                "gmtCreate": "2024-05-23 00:00:00",  // 创建时间
                "gmtModify": "2024-05-23 00:00:00",  // 修改时间
            }
        }
    }
}