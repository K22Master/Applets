// 此js用来存放Store实例
// 通过observable方法创建一个实例对象
import {observable} from 'mobx-miniprogram' 
// 将store实例暴露出去
export const store=observable({
  numA:10,
  numB:20,
});