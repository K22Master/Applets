// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    countAdd(e){
      console.log(e.target.dataset.num);
      this.setData({
        count:this.data.count+1,
      });
      this._showCount();
    },
    _showCount(){
      wx.showToast({
        title: 'count是'+this.data.count,
        icon:"none"
      })
    }
  }
})
