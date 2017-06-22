var app = getApp();
Page({
    data: {
        info: "下单失败，不在购买时间范围内或商品余货不足，",
        // 稍后会有内勤工作人员与您联系，请保持电话畅通
        times: 5,
        tips: 's后自动返回',
        infoTitle: '下单失败'
    },
    onReady: function () {
        var self = this, d;
        d = setInterval(function () {
            self.setData({
                times: (self.data.times - 1)
            });
            if (self.data.times == 0) {
                self.gotoCase();
                clearInterval(d);
            }
        }, 1000)
    },
    gotoCase: function () {
        wx.navigateBack(1)
    }
})