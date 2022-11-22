// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // post数据请求
  postInfo(){
    wx.request({
      // 请求地址
      url: 'https://www.escook.cn/api/post',
      // 请求方式
      method:'POST',
      // 请求数据
      data:{
        name:"ls",
        age:32,
      },
      // 成功之后的函数
      success:(res)=>{
        console.log(res.data);
      }
    })
  },
  // 编程式导航后退
  gotoBack(){
    wx.navigateBack();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})