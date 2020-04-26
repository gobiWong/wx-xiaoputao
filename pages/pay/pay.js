// pages/cart/cart.js

import { requestPayment,showToast } from '../../utils/asyncWx.js'
Page({
  data: {
    address: {},
    carts: [],
    totalPrice: 0,
    totalNum: 0
  },
  onShow() {
    const address = wx.getStorageSync('address')
    let carts = wx.getStorageSync('carts') || []
    carts = carts.filter(v => v.checked)
    let totalPrice = 0
    let totalNum = 0
    carts.forEach(v => {
      totalPrice += v.goods_price * v.num
      totalNum += v.num
    });
    this.setData({
      carts,
      address,
      totalPrice,
      totalNum
    })
  },
  //支付
  async handlePayfor() {
    try {
      const token = wx.getStorageSync('token');
      if (!token) { wx.navigateTo({ url: '/pages/auth/auth' }); return }

      //准备参数发请求创建订单但
      const orderParams = { token, address: this.data.address.detailInfo }
      let orderNum = this.getOrder(orderParams)
      // console.log(orderNum)

      let paySignObj = this.getPay(orderNum)
      // console.log(paySignObj)

      let payRes = await requestPayment(paySignObj)
      console.log(payRes)
    } catch (error) {
      // console.log('未授权',error)
      showToast({title:'支付成功到账10万元'})
      let newCart = wx.getStorageSync('carts')
      newCart = newCart.filter(v=>!v.checked)
      wx.setStorageSync("carts", newCart);
        
      wx.navigateTo({
        url: '/pages/order/order'
    
      });
        
    }
  },
  //创建订单模拟接口返回订单号的方法
  getOrder(arg) {
    return 'dingdanbianhao' + arg.token + arg.address
  },

  //模拟支付接口返回的数据就是微信支付必须要的数据
  getPay(arg) {
    return {
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      orderNum: arg
    }
  }
})