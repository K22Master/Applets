// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    msg:"你好！",
    phone:['华为','苹果','三星'],
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