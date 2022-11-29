// 导入store配置项
import {storeBindingsBehavior} from "mobx-miniprogram-bindings";
import {store} from "../../store/store"
// components/test6/test6.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  
  },
    // 通过behaviors进行绑定
    behaviors:[storeBindingsBehavior],
    // 通过storeBindings进行配制
    storeBindings:{
    //  数据源
    store,
    // 绑定属性
      fields:{
        numA:'numA',
        numB:'numB',
        sum:'sum'
      },
      // 绑定方法
      actions:{
        updateNumB:'updateNumB'
      }
    },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    numBBtn(e){
      this.updateNumB(e.target.dataset.step);
    }
  }
})
