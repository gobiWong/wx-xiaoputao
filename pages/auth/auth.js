
// pages/auth/auth.js
import { login } from '../../utils/asyncWx.js'
Page({
  data: {

  },
  async getUserInfo(e) {
    try {
      // console.log(e)
      const { encryptedData, iv, rawData, signature } = e.detail
      const { code } = await login()
      // console.log(code)
      const postParams = { encryptedData, iv, rawData, signature, code }

      //模拟token接口
      let token = this.getToken(postParams)

      wx.setStorageSync("token", token);
      //返回上一层
      wx.navigateBack({
        delta: 1
      });

      console.log(token)
      // encryptedData: "OzDwMAZMMz1glkVLXKfOnH49WNsEkVpFA8dfApg4f7bH0lVD53huVcatJdtc5GVyx0IgJin4duBLlRG/FeepEkTlm0luMmT9fjvdGm9P5OQxbhoEruOQXGlxI0NAv8GWEyW0/h+96jcw99NsUItauAdQBPfjJojFwhQG7tvyyFvj2aWnIhvYfyqLWlZxOtJnIVy1Ok5702dAHUyyBSLZR8zyq6nVJF7iDwwHCOe34AcZSCaPu2Imdy+pKo88Yj36OErea5f6Wovj20oZsyN6+78obHt3Ox6fvoNhp0ybPHRjc+JRGa6R2JK4OmT6XfCLRvrwAt+CZ12hKclXpfgG2w5MhRlIAqmASO6+opbG09wv3S4g5HVrlmYxHVRWiJA5bpU0k2ltj+4eWT1HSGSwJb0tkq5vdv57/gyDe4UsDtQlVA1pzu/GjNPb9b090BlnK/dxM04YrkY+XBjVdHAMgvORn5uuA3LCXkXfN/0PprM="
      // errMsg: "getUserInfo:ok"
      // iv: "h/EwuXp5pfa+vkU+4vpQ+w=="
      // rawData: "{"nickName":"IsChris呀。","gender":1,"language":"zh_CN","city":"","province":"Firenze","country":"Italy","avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/w6XIu6AwrgyrIxD75v7uDeTY8Ks9MfJBvhbtbIMxG1jR96drChbbibtq4fHIVFJ2oXPkvg94bjm2sgQmVnTz2gw/132"}"
      // signature: "55dd10b4e48f27785aacccf278d6a05d8d8a43ed"
    } catch (error) {
      console.log(error)
    }
  },
  getToken(params1) {
    return "123" + params1.iv + 'token哈哈哈'
  }
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})