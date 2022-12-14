// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 第一种方式：简化的方式,无法指定默认值
    // max:Number,
    // 第二种方式：完整定义方式
    max:{
      type:Number,
      value:20
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:1,
    n1:0,
    n2:0,
    sum:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    countAdd(e){
      console.log(e.target.dataset.num);
      if(this.data.count>=this.properties.max){
        wx.showToast({
          title: '最大值为'+this.properties.max,
          icon:"none"
        })
        return;
      }
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
    },
    maxAdd(){
      this.setData({
        max:this.properties.max+1,
      });
    },
    n1Add(){
      this.setData({
        n1:this.data.n1+1,
      });
    },
    n2Add(){
      this.setData({
        n2:this.data.n2+1,
      })
    }
  },
  observers:{
    'n1, n2':function(newN1,newN2){
      this.setData({
        sum:newN1+newN2,
      });
    }
  }
})
