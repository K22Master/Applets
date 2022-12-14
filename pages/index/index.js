// index.js
// 获取mobx的绑定以及store实例
import {createStoreBindings} from "mobx-miniprogram-bindings";
import {store} from "../../store/store"
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  addCount(){
    this.setData({
      motto:this.data.motto+1,
    });
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    };
    // 为this挂在一个属性
    this.storeBindings= createStoreBindings(this,{
      // 数据源
      store,
      // 字段
      fields:['numA','numB','sum'],
      // 方法
      actions:["updateNumA"],
    });
  },
  numABtn(e){
    console.log(e.target.dataset.step);
    this.updateNumA(e.target.dataset.step);
  },
    /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({
      motto:0
    });
    // 重置之后，关闭下拉刷新
    wx.stopPullDownRefresh()
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //在onUnload生命周期函数处清除
  onUnload(){
    this.storeBindings.detrpyStoreBindings();
  }
})
