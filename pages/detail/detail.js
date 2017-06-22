// detail.js

Page({

    /**
     * 页面的初始数据
     */
    data: {

        // ProductDetailActivityRequestGetProduct
        // {"model": "Coolpad 5891Q", "m_deviceID": "99000525472341", "token": "11", "m_channel": "", "m_simSerialNumber": "", "sdk": 16, "release": "4.1.2", "customer_id": 11, "version_code": 302, "productId": 1767 }
        date:"",
        product: {
            "agent_product_id": "1767",
            "enabled": "1",
            "agent_id": "652",
            "name": "豆粕",
            "spec": "",
            "unit": "",
            "price": "2690",
            "vendor": "",
            "type_id": "2",
            "brand": "",
            "discount_per_ton": "0",
            "place_of_origin": null,
            "remark": "",
            "status": 0,
            "grade": "",
            "push_to_not_self": "0",
            "discount_type": "0",
            "prepayment_ratio": "0",
            "kgOfUnit": null,
            "coupon_per_ton": "0.00",
            "minqty": null,
            "maxqty": null,
            "starttime": "",
            "endtime": "",
            "prepayMinqty": "0",
            "prepayMaxqty": "0",
            "skuCode": "0",
            "skuUnit": "公斤",
            "ratePack2SKU": "70",
            "rateSale2Pack": "32",
            "priceUnit": "吨",
            "ratePrice2SKU": "1000",
            "freight": "20",
            "merchantID": "652",
            "saleRole": "1",
            "sort_no": "0",
            "saleUnit": "车",
            "priceHint": "出厂价",
            "priceUpdateTime": "2017-06-19 11:28:12",
            "createTime": "2017-02-07 11:13:17",
            "lat": null,
            "lng": null,
            "bargaining": "10",
            "canTalkPrice": "0",
            "priceMode": "1",
            "cJichaContract": "",
            "cJichaContractMonth": "",
            "jiChaSaleQty": "0",
            "product_type": "2",
            "cJichaContractMonthEnd": "",
            "plan_sale_qty": "196",
            "id": "1767",
            "madeIn": null,
            "level": null,
            "isOnSale": "1",
            "merchantAddress": null,
            "merchantName": "富友商贸",
            "merchantPhone": "13901818269",
            "isSelf": "0",
            "typeID": "2",
            "typeName": "豆粕",
            "cName": "豆粕",
            "cPrice": 2690,
            "cAttrs": "",
            "cPriceHint": "出厂价",
            "cNotice": "",
            "cNoticeDetail": "",
            "cMerchant": "富友商贸",
            "cTime": "报价时间：2017-06-19 11:28:12",
            "productExtraInfo": "",
            "serviceName": "",
            "serviceDeatilUrl": "http://debug.efunong.com:10080/aide/loan.php?act=server",
            "serviceDesc": "",
            "productReminder": "仅剩5.00吨",
            "rateSale2Price": "32",
            "onSale": "1",
            "unSaleReson": "",
            "isJiajiService": "0",
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
                    "value": "43%  当月提完",
                    "items": [
                        "43%",
                        "46%"
                    ],
                    "editable": 0
                }
            ],
            "cNameExtra": [],
            "priceName": "￥2690",
            "hasDiscountCoupon": false
        },
        items: [
            { name: 'ZT', value: '自提', checked: 'true'},
            { name: 'WT', value: '委托提货' }
        ]
    },
    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that= this
        var UrlObj = getCurrentPages();
        var id = UrlObj[1].options.id;
        console.log(id);

    },                              

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }

})