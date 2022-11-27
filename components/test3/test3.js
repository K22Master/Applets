// components/test3/test3.js
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
    rgb:{
      r:0,
      g:0,
      b:0
    },
    funllColor:'0,0,0',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changR(){
      this.setData({
        "rgb.r":this.data.rgb.r+5>255?255:this.data.rgb.r+5,
      })
    },
    changG(){
      this.setData({
        "rgb.g":this.data.rgb.g+5>255?255:this.data.rgb.g+5,
      })
    },
    changB(){
      this.setData({
        "rgb.b":this.data.rgb.b+5>255?255:this.data.rgb.b+5,
      })
    },
    // 随机颜色
    randomColor(){
      this.setData({
        rgb:{
          r:Math.floor(Math.random()*256),
          g:Math.floor(Math.random()*256),
          b:Math.floor(Math.random()*256)
        }
      });
    }
  },
  // 监听属性 
  observers:{
    // 'rgb.r, rgb.g, rgb.b':function(r,g,b){
    //   this.setData({
    //     funllColor:`${r},${g},${b}`
    //   });
    // }
    'rgb.**':function(obj){
      this.setData({
        funllColor:`${obj.r},${obj.g},${obj.b}`
      });
    }
  },
  // 组件的生命周期
  lifetimes:{
    created(){
      console.log("crteated");
    },
    attached(){
      console.log("attached");
    }
  },
  // 组件所在页面的生命周期
  pageLifetimes:{
    show:function(){
      console.log("show~~~");
      // 页面显示时调用随机颜色函数
      this.randomColor();
    },
    hide:function(){
      console.log("hide");
    },
    resize:function(){
      console.log("resize");
    }
  }
})
