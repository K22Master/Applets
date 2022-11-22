// pages/get/get.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 发送get请求
  getInfo(){
    wx.request({
      // 请求地址
      url: 'https://www.escook.cn/api/get',
      // 请求方式
      method:"GET",
      // 发送数据
      data:{
        name:"张三",
        age:20,
      },
      // success是一个回到函数
      success:(res)=>{
        console.log(res.data);
      }
    })
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