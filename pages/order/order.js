// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { id: 0, title: "全部", isActive: true },
      { id: 1, title: "待付款", isActive: false },
      { id: 2, title: "待收货", isActive: false },
      { id: 3, title: "退款/退货", isActive: false }
    ],
    orders: [],
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function (options) {
    const token = wx.getStorageSync("token");
    if (!token) {
      wx.navigateTo({
        url: '/pages/auth/auth',
      });
      return
    }

    let currentPages = getCurrentPages();
    let currentPage = currentPages[currentPages.length - 1]
    console.log(currentPage.options)
    this.activeByIndex(currentPage.options.type - 1)
    let orders = this.getOrders(currentPage.options.type)
    console.log(orders)
    this.setData({
      orders
    })
  },
  //切换效果事件处理方法
  itemChange(e) {
    // console.log(e)
    const { index } = e.detail
    this.activeByIndex(index)
    let orders = this.getOrders1(index + 1)
    console.log(orders,'111111')
    // this.setData({
    //   orders
    // })
  },
  //公共方法
  getOrders(arg) {
    if (arg === "1") { return [{ type: 1, name: '全部', list: [1, 2, 3] }] }
    if (arg === "2") { return [{ type: 2, name: '待付款', list: [11, 22, 33] }] }
    if (arg === "3") { return [{ type: 3, name: '待收货', list: [111, 333, 333] }] }
    if (arg === "4") { return [{ type: 4, name: '退款/退货', list: ['tuihuo', 33234, 333] }] }
  },
  getOrders1(arg) {
    if (arg === "1") { return [{ type: 1, name: '全部', list: [1, 2, 3] }] }
    if (arg === "2") { return [{ type: 2, name: '待付款', list: [11, 22, 33] }] }
    if (arg === "3") { return [{ type: 3, name: '待收货', list: [111, 333, 333] }] }
    if (arg === "4") { return [{ type: 4, name: '退款/退货', list: ['tuihuo', 33234, 333] }] }
  },
  //提取根据标题点击选中
  activeByIndex(index) {
    let { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  }

})