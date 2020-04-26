// pages/cart/cart.js

import { getSetting, chooseAddress, openSetting, showModal, showToast } from '../../utils/asyncWx.js'
Page({
  data: {
    address: {},
    carts: [],
    allChecked: false,
    totalPrice: 0,
    totalNum: 0
  },
  onShow() {
    const address = wx.getStorageSync('address')
    const carts = wx.getStorageSync('carts') || []
    //全选
    // const allChecked = carts.length ? carts.every(v => v.checked) : false
    this.setCart(carts)
    this.setData({
      address
    })
  },
  async handleAddress() {
    //获取权限状态
    // wx.getSetting({
    //   success: (result) => {
    //     // console.log(result)
    //     const allow = result.authSetting['scope.address']
    //     // console.log(allow)
    //     if (allow === true || allow === undefined) {
    //       wx.chooseAddress({
    //         success: (result) => {
    //           console.log(result)
    //         }
    //       });
    //     } else {
    //       wx.openSetting({
    //         success: (result) => {
    //           wx.chooseAddress({
    //             success: (result) => {
    //               console.log(result)
    //             },

    //           });
    //         }
    //       });
    //     }
    //   },
    // });
    try {
      const resAllow = await getSetting();
      // console.log(resAllow)
      if (resAllow.authSetting['scope.address'] === false) await openSetting()
      const res = await chooseAddress()

      wx.setStorageSync('address', res);

    } catch (error) {
      console.log(error)
    }
  },
  handleItemChange(e) {
    let goods_id = e.currentTarget.dataset.idd
    console.log(goods_id)
    let { carts } = this.data
    let index = carts.findIndex(v => v.goods_id === goods_id)
    console.log(index)
    carts[index].checked = !carts[index].checked
    this.setCart(carts)
  },
  //设置购物处理的功能函数
  setCart(carts) {
    let allChecked = true
    let totalPrice = 0
    let totalNum = 0
    carts.forEach(v => {
      if (v.checked) {
        totalPrice += v.goods_price * v.num
        totalNum += v.num
      } else {
        allChecked = false
      }
    });
    allChecked = carts.length != 0 ? allChecked : false
    this.setData({
      carts,
      allChecked,
      totalPrice,
      totalNum
    })
    wx.setStorageSync("carts", carts);
  },
  //全选
  handleItemAllChecked() {
    let { carts, allChecked } = this.data
    allChecked = !allChecked
    carts.forEach(v => v.checked = allChecked)
    this.setCart(carts)
  },
  //购物车数量+1 -1
  async subCount(e) {
    let { id, operation } = e.currentTarget.dataset
    console.log(id, operation)
    let { carts } = this.data
    const index = carts.findIndex(v => v.goods_id === id)

    if (carts[index].num === 1 && operation === -1) {
      let res = await showModal({ content: "您确定要删除吗" })
      if (res.confirm) {
        carts.splice(index, 1)
        this.setCart(carts)
      }
    } else {
      carts[index].num += operation
      this.setCart(carts)
    }
  },
  //结算
  async handlePay() {
    let { address, totalNum } = this.data
    if (totalNum === 0) {
      await showToast({ title: '购物车为空' });
      return;
    }
    if (!address.userName) {
      await showToast({ title: '请添加收获地址' });
      return;
    }
    wx.navigateTo({
      url: '/pages/pay/pay'
    });

  }
})