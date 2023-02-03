
// 整合组件 实现导出组件
import { Plugin } from 'vue'
import _Button from './src/button.vue';
import { withInstall} from '../../utils/with-install'

const Button = withInstall(_Button)
export default Button; // 可以通过app.use使用 也可以通过import
export * from './src/button'

// 组件提示 添加的类型可以在模板中被解析
declare module 'vue' {
  export interface GlobalComponents {  // 接口自动合并
    VButton: typeof Button
  }
}