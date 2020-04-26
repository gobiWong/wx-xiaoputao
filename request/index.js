let ajaxTimes = 0;


export const request = (parmas) => {
  let header ={...parmas.header}
  //限制接口请求路径
  if(parmas.url.includes('/mobilecms1/')){
    header['Authorization'] = wx.getStorageSync('token');
      
  }
  ajaxTimes++; 
  wx.showLoading({
    title: "加载中...",
    mask: true
  });
  const baseUrl = 'https://m.360buyimg.com';//域名地址
  return new Promise((resolve, reject) => {
    wx.request({
      ...parmas,
      header:header,
      url: baseUrl + parmas.url,
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        ajaxTimes--;
        if (ajaxTimes === 0) {
          wx.hideLoading();
        }
      }
    });
  })
}