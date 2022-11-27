// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    msg:"你好！",
    phone:['华为','苹果','三星'],
    list:[{id:1,name:'只是'},{id:2,name:'老师'},{id:3,name:'忘舞'}],
  },
  bindTapButton(e){
    console.log(e);
  },
  countAdd(){
    this.setData({
      count:this.data.count+1,
    });
  },
  bindTapEvent(e){
    console.log(e.target.dataset.addcounted);
    console.log(e.target.dataset);
  },
  bindTapAdd(e){
    this.setData({
      count:this.data.count+e.target.dataset.addnum,
    });
  },
  bindInputEvent(e){
    console.log(e.detail.value);
  },
  bindInputNum(e){
    this.setData({
      msg:e.detail.value,
    });
  },
   // 编程式导航跳转到index页面(tabBar页面)
   gotoIndex(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  // 编程式导航跳转到非tabBar页面
  gotoPost(){
    wx.navigateTo({
      url: '/pages/post/post',
    })
  },
  // 函数式导航传参
  gotoGet(){
    wx.navigateTo({
      url: '/pages/get/get?name=ls&age=19',
    })
  },
  // 定义一个自定义事件，让子组件调用
  syncCount(e){
    console.log("我被调用了！");
    this.setData({
      // 通过ewx.detail.value拿到数据
      count:e.detail.value
    });
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
    console.log("触发了上拉触底");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})