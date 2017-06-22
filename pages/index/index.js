//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    products: [
        {
            "cName": "豆粕",
            "cPrice": "2645",
            "cAttrs": "汇福, 泰州, 50kg, 43%  秒杀",
            "cPriceHint": "仅剩：147.00吨",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "运通商贸",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 1,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2645",
            "id": "1773",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2645",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "汇福",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "产地",
                    "value": "泰州",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "规格",
                    "value": "50kg",
                    "items": [
                        "50kg",
                        "70kg"
                    ],
                    "editable": 0
                },
                {
                    "key": "蛋白",
                    "value": "43%  秒杀",
                    "items": [
                        "43%",
                        "46%"
                    ],
                    "editable": 0
                }
            ],
            "cNameExtra": [],
            "lat": 32.47605327483,
            "lng": 119.91960601619,
            "distince": 201,
            "range": 1
        },
        {
            "cName": "豆粕",
            "cPrice": "2645",
            "cAttrs": "汇福, 泰州, 50kg, 43%  本月提完",
            "cPriceHint": "仅剩：128.00吨",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "富友商贸",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 1,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2645",
            "id": "1767",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2645",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "汇福",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "产地",
                    "value": "泰州",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "规格",
                    "value": "50kg",
                    "items": [
                        "50kg",
                        "70kg"
                    ],
                    "editable": 0
                },
                {
                    "key": "蛋白",
                    "value": "43%  本月提完",
                    "items": [
                        "43%",
                        "46%"
                    ],
                    "editable": 0
                }
            ],
            "cNameExtra": [],
            "lat": 32.47605327483,
            "lng": 119.91960601619,
            "distince": 201,
            "range": 1
        },
        {
            "cName": "豆粕",
            "cPrice": "2650",
            "cAttrs": "汇福, 泰州, 50kg, 43% 本月提完",
            "cPriceHint": "仅剩：65.00吨",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "东台农道",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 1,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2650",
            "id": "1937",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2650",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "汇福",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "产地",
                    "value": "泰州",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "规格",
                    "value": "50kg",
                    "items": [
                        "50kg",
                        "70kg"
                    ],
                    "editable": 0
                },
                {
                    "key": "蛋白",
                    "value": "43% 本月提完",
                    "items": [
                        "43%",
                        "46%"
                    ],
                    "editable": 0
                }
            ],
            "cNameExtra": [],
            "lat": 32.47605327483,
            "lng": 119.91960601619,
            "distince": 201,
            "range": 1
        },
        {
            "cName": "豆粕",
            "cPrice": "2660",
            "cAttrs": "嘉吉, 南通, 70kg, 43%",
            "cPriceHint": "",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "苏农集团",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2660",
            "id": "1062",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2660",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "嘉吉",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "产地",
                    "value": "南通",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "规格",
                    "value": "70kg",
                    "items": [
                        "50kg",
                        "70kg"
                    ],
                    "editable": 0
                },
                {
                    "key": "蛋白",
                    "value": "43%",
                    "items": [
                        "43%",
                        "46%"
                    ],
                    "editable": 0
                }
            ],
            "cNameExtra": [],
            "lat": 32.014664540823,
            "lng": 120.87380095093,
            "distince": 103,
            "range": 1
        },
        {
            "cName": "豆粕",
            "cPrice": "2665",
            "cAttrs": "嘉吉, 南通, 70kg, 43% 本月提完",
            "cPriceHint": "仅剩：134.00吨",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "东台农道",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2665",
            "id": "1666",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2665",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "嘉吉",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "产地",
                    "value": "南通",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "规格",
                    "value": "70kg",
                    "items": [
                        "50kg",
                        "70kg"
                    ],
                    "editable": 0
                },
                {
                    "key": "蛋白",
                    "value": "43% 本月提完",
                    "items": [
                        "43%",
                        "46%"
                    ],
                    "editable": 0
                }
            ],
            "cNameExtra": [],
            "lat": 32.014664540823,
            "lng": 120.87380095093,
            "distince": 103,
            "range": 1
        },
        {
            "cName": "豆粕",
            "cPrice": "2670",
            "cAttrs": "嘉吉, 南通, 70kg, 43% 本月提完",
            "cPriceHint": "仅剩：96.00吨",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "世通商贸",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2670",
            "id": "312",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2670",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "嘉吉",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "产地",
                    "value": "南通",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "规格",
                    "value": "70kg",
                    "items": [
                        "50kg",
                        "70kg"
                    ],
                    "editable": 0
                },
                {
                    "key": "蛋白",
                    "value": "43% 本月提完",
                    "items": [
                        "43%",
                        "46%"
                    ],
                    "editable": 0
                }
            ],
            "cNameExtra": [],
            "lat": 32.014664540823,
            "lng": 120.87380095093,
            "distince": 103,
            "range": 1
        },
        {
            "cName": "豆粕",
            "cPrice": "2670",
            "cAttrs": "嘉吉, 南通, 50kg, 43%",
            "cPriceHint": "仅剩：96.00吨",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "世通商贸",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2670",
            "id": "1300",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2670",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "嘉吉"
                },
                {
                    "key": "产地",
                    "value": "南通"
                },
                {
                    "key": "规格",
                    "value": "50kg"
                },
                {
                    "key": "蛋白",
                    "value": "43%"
                }
            ],
            "cNameExtra": [],
            "lat": 32.014664540823,
            "lng": 120.87380095093,
            "distince": 103,
            "range": 1
        },
        {
            "cName": "豆粕",
            "cPrice": "2675",
            "cAttrs": "嘉吉, 南通, 50kg, 43%一周提清",
            "cPriceHint": "仅剩：96.00吨",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "苏农集团",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2675",
            "id": "1756",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2675",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "嘉吉",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "产地",
                    "value": "南通",
                    "items": [],
                    "editable": 1
                },
                {
                    "key": "规格",
                    "value": "50kg",
                    "items": [
                        "50kg",
                        "70kg"
                    ],
                    "editable": 0
                },
                {
                    "key": "蛋白",
                    "value": "43%一周提清",
                    "items": [
                        "43%",
                        "46%"
                    ],
                    "editable": 0
                }
            ],
            "cNameExtra": [],
            "lat": 32.014664540823,
            "lng": 120.87380095093,
            "distince": 103,
            "range": 1
        },
        {
            "cName": "豆粕",
            "cPrice": "2615",
            "cAttrs": "邦基, 日照, 70kg, 43%",
            "cPriceHint": "仅剩：64.00吨",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "康源饲料原料",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2615",
            "id": "1213",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2615",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "邦基"
                },
                {
                    "key": "产地",
                    "value": "日照"
                },
                {
                    "key": "规格",
                    "value": "70kg"
                },
                {
                    "key": "蛋白含量",
                    "value": "43%"
                }
            ],
            "cNameExtra": [],
            "lat": 35.420225193144,
            "lng": 119.50717994299,
            "distince": 498,
            "range": 2
        },
        {
            "cName": "豆粕",
            "cPrice": "2615",
            "cAttrs": "凌云海, 日照, 70kg, 43%",
            "cPriceHint": "仅剩：96.00吨",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "益丰粮行",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2615",
            "id": "1594",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2615",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "凌云海"
                },
                {
                    "key": "产地",
                    "value": "日照"
                },
                {
                    "key": "规格",
                    "value": "70kg"
                },
                {
                    "key": "蛋白",
                    "value": "43%"
                }
            ],
            "cNameExtra": [],
            "lat": 35.420225193144,
            "lng": 119.50717994299,
            "distince": 498,
            "range": 2
        },
        {
            "cName": "豆粕",
            "cPrice": "2625",
            "cAttrs": "香驰, 龙口, 50kg, 43%",
            "cPriceHint": "仅剩：100.00吨",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "河北优粮",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2625",
            "id": "1755",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2625",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "香驰"
                },
                {
                    "key": "产地",
                    "value": "龙口"
                },
                {
                    "key": "规格",
                    "value": "50kg"
                },
                {
                    "key": "蛋白",
                    "value": "43%"
                }
            ],
            "cNameExtra": [],
            "lat": 37.610401281677,
            "lng": 120.5227995064,
            "distince": 712,
            "range": 3
        },
        {
            "cName": "豆粕",
            "cPrice": "2720",
            "cAttrs": "嘉好, 黄骅, 70kg, 43%",
            "cPriceHint": "",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "北方商贸",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2720",
            "id": "1847",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2720",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "嘉好"
                },
                {
                    "key": "产地",
                    "value": "黄骅"
                },
                {
                    "key": "规格",
                    "value": "70kg"
                },
                {
                    "key": "蛋白",
                    "value": "43%"
                }
            ],
            "cNameExtra": [],
            "lat": 38.401521845487,
            "lng": 117.40021701974,
            "distince": 877,
            "range": 3
        },
        {
            "cName": "豆粕",
            "cPrice": "2720",
            "cAttrs": "三维, 临沂, 70kg, 43%",
            "cPriceHint": "仅剩：64.00吨",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "青丰商贸公司",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2720",
            "id": "1838",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2720",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "三维"
                },
                {
                    "key": "产地",
                    "value": "临沂"
                },
                {
                    "key": "规格",
                    "value": "70kg"
                },
                {
                    "key": "蛋白",
                    "value": "43%"
                }
            ],
            "cNameExtra": [],
            "lat": 35.072409074391,
            "lng": 118.34076823661,
            "distince": 515,
            "range": 3
        },
        {
            "cName": "豆粕",
            "cPrice": "2785",
            "cAttrs": "九三, 天津, 70kg, 43%",
            "cPriceHint": "",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "天运饲料原料",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2785",
            "id": "706",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2785",
            "attrs": [
                {
                    "value": "九三",
                    "key": "品牌"
                },
                {
                    "value": "天津",
                    "key": "产地"
                },
                {
                    "value": "70kg",
                    "key": "规格"
                },
                {
                    "value": "43%",
                    "key": "蛋白含量"
                }
            ],
            "cNameExtra": [],
            "lat": 39.14392990331,
            "lng": 117.21081309155,
            "distince": 959,
            "range": 3
        },
        {
            "cName": "豆粕",
            "cPrice": "2830",
            "cAttrs": "京粮, 天津, 70kg, 43%",
            "cPriceHint": "",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "康源饲料原料",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2830",
            "id": "1346",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2830",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "京粮"
                },
                {
                    "key": "产地",
                    "value": "天津"
                },
                {
                    "key": "规格",
                    "value": "70kg"
                },
                {
                    "key": "蛋白含量",
                    "value": "43%"
                }
            ],
            "cNameExtra": [],
            "lat": 39.14392990331,
            "lng": 117.21081309155,
            "distince": 959,
            "range": 3
        },
        {
            "cName": "豆粕",
            "cPrice": "2695",
            "cAttrs": "北京汇福, 北京, 50kg   按计划提货, 43%",
            "cPriceHint": "",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "原粮集团",
            "cTime": "报价时间：06月16日",
            "enabled": "1",
            "onSale": 0,
            "priceday": "2017-06-16",
            "type_id": "2",
            "price": "2695",
            "id": "1181",
            "priceUpdateTime": "2017-06-16 00:00:00",
            "priceMode": "1",
            "cJichaContractMonth": "",
            "cJichaContract": "",
            "cJichaContractMonthEnd": "",
            "priceName": "￥2695",
            "attrs": [
                {
                    "key": "品牌",
                    "value": "北京汇福"
                },
                {
                    "key": "产地",
                    "value": "北京"
                },
                {
                    "key": "规格",
                    "value": "50kg   按计划提货"
                },
                {
                    "key": "蛋白",
                    "value": "43%"
                }
            ],
            "cNameExtra": [],
            "lat": 39.92998577808,
            "lng": 116.39564503788,
            "distince": 1068,
            "range": 4
        }
    ],
    animationData: {},
    tabTxt: [
        {
            'text': '品类',
            'originalText': '品类',
            'active': false,
            'child': [
                { 'id': 1, 'text': '华语' },
                { 'id': 2, 'text': '粤语' },
                { 'id': 3, 'text': '欧美' }
            ],
            'type': 0
        },
        {
            'text': '产地',
            'originalText': '产地',
            'active': false,
            'child': [
                { 'id': 1, 'text': '流行' },
                { 'id': 2, 'text': '摇滚' },
                { 'id': 3, 'text': '民谣' },
                { 'id': 4, 'text': '轻音乐' }
            ], 'type': 0
        },
        {
            'text': '品牌',
            'originalText': '品牌',
            'active': false,
            'child': [
                { 'id': 1, 'text': '学习' },
                { 'id': 2, 'text': '工作' },
                { 'id': 3, 'text': '运动' }
            ],
            'type': 0
        },
        {
            'text': '报价方式',
            'originalText': '报价方式',
            'active': false,
            'child': [
                { 'id': 1, 'text': '怀旧' },
                { 'id': 2, 'text': '清新' },
                { 'id': 3, 'text': '治愈' }
            ],
            'type': 0
        }
    ],
    searchParam: []



//{"productConditions":"[{\"value\":\"2\",\"title\":\"豆粕\",\"key\":\"category\"},{\"value\":\"1\",\"title\":\"全部\",\"key\":\"madein\"},{\"value\":\"1\",\"title\":\"全部\",\"key\":\"brand\"},{\"value\":\"1\",\"title\":\"现货价\",\"key\":\"pricemode\"}]","model":"Coolpad 5891Q","m_deviceID":"99000525472341","token":"11","page":0,"m_channel":"","m_simSerialNumber":"","sdk":16,"release":"4.1.2","customer_id":11,"version_code":302}


  },
  //事件处理函数
  bindViewTapV2: function (e) {
      var that =this;
      var index = e.currentTarget.dataset.index;

      if (that.data.products[index].onSale == "1"){
          wx.navigateTo({
              url: '../detail/detail?id=' + that.data.products[index].id
          })

      }
      else{
          wx.showModal({
              content: '此商品报价失效，不在购买时间',
              showCancel: false,
              success: function (res) {
                  if (res.confirm) {
                    //   console.log('用户点击确定')
                  }
              }
          });
      }





    // wx.navigateTo({
    //     url: '../detail/detail'
    // })
    // wx.switchTab({
    //   url: '../detail/detail'
    // })
  },

  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })


    // start request
    // wx.request({
    //   url: 'https://lostc.com/test.php', //仅为示例，并非真实的接口地址
    //   data: {
    //     act: 'onLogin',
    //     param: { code: 1 }
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   method: 'POST',
    //   success: function (res) {
    //     var rdata = res.data.data;

    //     // that.products = JSON.parse(JSON.stringify(rdata));
    //     // console.log(that.products);

    //     that.setData({
    //       // products: JSON.parse(JSON.stringify(rdata))
    //       products: rdata
    //     }); 
    //     // this.products = JSON.parse(res.data.trim()).data;
    //     //一定要先调用trim，\ufeff 导致接送无法解析
    //     // var rt = JSON.parse(res.data.trim())
    //     // var code = rt.code
    //     // var message = rt.message
    //     // var data = rt.data
    //   }
    // })


    // var that = getApp()

    // try {
    //   //首先检查缓存中是否有我们需要请求的数据，如果没有，我们再跟服务器连接，获取数据
    //   //首次登陆肯定是没有的
    //   that.globalData.token = wx.getStorageSync('token')

    //   if (wx.getStorageSync('token') != '') {
    //     //如果缓存不为空，即已经存在数据，我们不用再跟服务器交互了，那么直接跳转到首页
    //     wx.switchTab({
    //       url: '../index/index',
    //     })
    //   }

    //   if (value) {
    //     // Do something with return value
    //     console.log(that.globalData.token)
    //   }
    // } catch (e) {
    //   // Do something when catch error
    //   //当try中的缓存数据不存在时，将跳到这步，这步中，我们将与服务器进行连接，并获取数据
    //   if (that.globalData.token == '') {
    //     wx.login({
    //       success: function (res) {
    //         if (res.code) {
    //           //发起网络请求
    //           wx.request({
    //             url: 'https://app.efunong.com/wx' + '/wx.php',
    //             data: {
    //               act: 'onLogin',
    //               param: { code: res.code }
    //             },
    //             header: {
    //               'content-type': 'application/json'
    //             },
    //             method: 'POST',
    //             success: function (res) {
    //               console.log("wlecome.onLoad.login.request.onLogin:" + res.data)

    //               //一定要先调用trim，\ufeff 导致接送无法解析
    //               var rt = JSON.parse(res.data.trim())
    //               var code = rt.code
    //               var message = rt.message
    //               var data = rt.data

    //               //获取token值              
    //               that.globalData.token = data.token

    //               //验证签名 && 获取用户敏感数据
    //               wx.getUserInfo({
    //                 success: function (res) {
    //                   console.log("wlecome.onLoad.login.getUserInfo:" + res.userInfo)

    //                   //写入全局变量
    //                   that.globalData.userInfo = res.userInfo

    //                   //发起网络请求
    //                   wx.request({
    //                     url: 'https://app.efunong.com/wx' + '/wx.php',
    //                     data: {
    //                       act: 'getUserInfo',
    //                       param: { token: that.globalData.token, res: res }
    //                     },
    //                     header: {
    //                       'content-type': 'application/json'
    //                     },
    //                     method: 'POST',
    //                     success: function (res) {
    //                       var rt = JSON.parse(res.data.trim())
    //                       var code = rt.code
    //                       var message = rt.message
    //                       var data = rt.data

    //                       console.log("wlecome.onLoad.request.getUserInfo:openId:" + data.openId + "  unionId:" + data.unionId)

    //                       wx.hideToast()

    //                       //写入缓存                                   
    //                       wx.setStorage({
    //                         key: 'token',
    //                         data: that.globalData.token,
    //                         success: function (res) {
    //                           console.log("insert token success")
    //                         },
    //                         fail: function () {
    //                           // fail
    //                         },
    //                         complete: function () {
    //                           // complete
    //                         }
    //                       })

    //                       wx.setStorage({
    //                         key: 'userInfo',
    //                         data: that.globalData.userInfo,
    //                         success: function (res) {
    //                           console.log("insert success")
    //                         },
    //                         fail: function () {
    //                           // fail
    //                         },
    //                         complete: function () {
    //                           // complete
    //                         }
    //                       })

    //                       //写入后，我们将跳转到主页
    //                       wx.switchTab({
    //                         url: '../index/index',
    //                       })
    //                     },
    //                     fail: function () {
    //                       console.log('wx.getUserInfo fail')
    //                     },
    //                     complete: function () {
    //                       console.log('wx.getUserInfo complete')
    //                     }
    //                   })
    //                 }
    //               })
    //             },
    //             fail: function () {
    //               console.log('wx.login fail')
    //             },
    //             complete: function () {
    //               console.log('wx.login complete')
    //             }
    //           })
    //         } else {
    //           console.log('获取用户登录态失败！' + res.errMsg)
    //         }
    //       }
    //     })
    //   }
    // }    






    // end request 
  },
    filterTab: function (e) {
        var that = this;
        var data = JSON.parse(JSON.stringify(that.data.tabTxt));
        var index = e.currentTarget.dataset.index;
        var newTabTxt = data.map(function (e) {
            e.active = false;
            return e;
        });
        newTabTxt[index].active = !that.data.tabTxt[index].active;
        this.setData({
            tabTxt: data
        })

    },
    filterTabChild: function (e) {

        //我需要切换选中项 修改展示文字 并收回抽屉  
        var that = this;
        var index = e.currentTarget.dataset.index;
        var data = JSON.parse(JSON.stringify(that.data.tabTxt));
        if (typeof (e.target.dataset.id) == 'undefined' || e.target.dataset.id == '') {
            data[index].active = !that.data.tabTxt[index].active;
        }
        else {
            data[index].type = e.target.dataset.id;
            data[index].active = !that.data.tabTxt[index].active;
            if (e.target.dataset.id == '0') {
                data[index].text = that.data.tabTxt[index].originalText;
                //不限删除条件
                delete that.data.searchParam[index];
            }
            else {
                data[index].text = e.target.dataset.txt;
                //更改删除条件
                that.data.searchParam[index] = data[index].text;
            }


        }

        that.setData({
            tabTxt: data
        })
        console.log(that.data.searchParam);


    }






})
