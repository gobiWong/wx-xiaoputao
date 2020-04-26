//index.js
//获取应用实例
// const app = getApp() {request}= 
import { request } from '../../request/index.js'
import  dataJson from '../../mock/dataJson.js'
Page({
  data: {
    swiperList: [{
      idd: 1,
      src: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/116518/11/749/127091/5e9019abE145866ea/ab6f0a0166095e26.jpg!cr_1125x445_0_171!q70.jpg.dpg",
      background: "rgb(203, 87, 60)",
    },
    {
      idd: 2,
      src: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/100143/1/18651/140539/5e96edf0Ed62bf6a0/f0782dbce187467a.jpg!cr_1125x445_0_171!q70.jpg.dpg",
      background: "rgb(205, 215, 218)",
    },
    {
      idd: 3,
      src: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/95842/38/12546/80187/5e4ba3e7E09e0da3b/92aac67aefdf6b6f.jpg!cr_1125x445_0_171!q70.jpg.dpg",
      background: "rgb(183, 73, 69)",
    }
    ],
    categoryList: dataJson.detailData,
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    request({
      url: '/mobilecms/s700x280_jfs/t1/95842/38/12546/80187/5e4ba3e7E09e0da3b/92aac67aefdf6b6f.jpg!cr_1125x445_0_171!q70.jpg.dpg'
    }).then(res => {
      console.log(res)
    })

  

    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  onShow: function () {
    console.log(request, dataJson.detailData)
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
