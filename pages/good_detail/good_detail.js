// pages/good_detail/good_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {
      goods_name: '这是一个很厉害的衣服',
      goods_price: 998,
      goods_id: 223,
      goods_introduce: '图片详情描述建议后台返回模板字符串',
      pics: [
        { pics_id: 11, pics_url: "http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg" },
        { pics_id: 12, pics_url: "http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg" },
        { pics_id: 13, pics_url: "http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg" },
      ]
    }
  },
  //全局数据
  // goodsObj1: {
  //   goods_name: '这是一个很厉害的衣服',
  //   goods_price: 998,
  //   goods_id: 223,
  //   goods_introduce: '图片详情描述建议后台返回模板字符串',
  //   pics: [
  //     { pics_id: 11, pics_url: "http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg" },
  //     { pics_id: 12, pics_url: "http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg" },
  //     { pics_id: 13, pics_url: "http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg" },
  //   ]
  // },
  //购物车商品对象
  goodsInfo: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.goods_id)
  },
  //图片预览
  handlePrivew(e) {
    // console.log(e)
    // console.log(this.goodsObj1)
    const urls = this.goodsObj1.pics.map(v => v.pics_url);
    const current = e.currentTarget.dataset.url
    wx.previewImage({
      current,
      urls
    });

  },
  handleAddCart() {
    console.log('jiayi')
    let { goodsObj } = this.data
    let carts = wx.getStorageSync('carts') || [];
    let index = carts.findIndex(v => v.goods_id === goodsObj.goods_id);
    if (index === -1) {
      this.goodsInfo.num = 1
      this.goodsInfo.checked = true
      carts.push({ ...goodsObj, ...this.goodsInfo })
    } else {
      carts[index].num++
    }
    wx.setStorageSync("carts", carts);
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 1000,
      mask: true,

    });

  }


})