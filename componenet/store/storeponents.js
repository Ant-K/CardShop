// componenet/store/storeponents.js
var utils = require("../../utils/util.js");

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shuoming:{
      type:String,
      value:"本商品由厂家直接提供"
    },
    //关注人数
    guanzhu: {
      type: Number,
      value: 12
    },
    //商品名称
    goodsName: {
      type: String,
      value: "商品名称"
    },
    //商品现在价格
    newPrice: {
      type: String,
      value: "0"
    },
    oldPrice: {
      type: String,
      value: "0"
    },
    //预售日期
    yushoudate: {
      type: String,
      value: utils.formatDate(new Date())
    },
    tihuodate: {
      type: String,
      value: utils.addDate(new Date(),1)
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    //测试组建内部方法
    testMethod() {
      wx.showLoading({
        title: '加载中',
      });
      console.log(12);
      setTimeout(function () {
        wx.hideLoading()
      }, 2000);
    }
  }
})
