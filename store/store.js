// 此js用来存放Store实例
// 通过observable方法创建一个实例对象
import {action, observable} from 'mobx-miniprogram' 
// 将store实例暴露出去
export const store=observable({
  // 数据字段
  numA:10,
  numB:20,
  // 计算属性
  get sum(){
    return this.numA+this.numB;
  },
  // 通过action方法修改属性
  updateNumA:action(function(step){
    this.numA+=step;
  }),
  updateNumB:action(function(step){
    this.numB+=step;
  }),
});