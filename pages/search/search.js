// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: '',
  },
  TimeId: -1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  handleChange(e) {
    console.log(e.detail)
    let value = e.detail.value

    if (!value.trim()) {
      return
    }
    clearInterval(this.TimeId)
    this.TimeId = setTimeout(() => {
      let res = this.getResult(value)
      this.setData({
        searchList: res
      })
    }, 1000)


  },
  getResult(query) {
    return query + '根据输入的内容接口要返回的数据'
  }
})