// pages/category/category.js
import dataJson from '../../mock/dataJson.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenu: [],
    rightMenu: [],

  },
  //全局数据
  cates: [],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync("cates", { time: Date.now(), data: dataJson.categoryList });
    //获取本地数据
    const cates = wx.getStorageSync('cates');
    console.log(cates)
    if (!cates) {
      this.getcatList()
    } else {
      //定义过期时间戳
      if (Date.now() - cates.time > 1000 * 10) {
        this.getcatList()
      } else {
        this.setData({
          leftMenu: cates.data.map(v => v.cat_name),
          rightMenu: cates.data[0].children
        })
      }

    }

  },
  getcatList() {
    // this.cates = dataJson.categoryList
    return this.setData({
      leftMenu: dataJson.categoryList.map(v => v.cat_name),
      rightMenu: dataJson.categoryList[0].children
    })
  }


})