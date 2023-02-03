
// 整合组件 实现导出组件
import { Plugin } from 'vue'
import _Icon from './src/icon.vue';
import { withInstall} from '../../utils/with-install'

const Icon = withInstall(_Icon)
export default Icon; // 可以通过app.use使用 也可以通过import
export * from './src/icon'

// 组件提示 添加的类型可以在模板中被解析
declare module 'vue' {
  export interface GlobalComponents {  // 接口自动合并
    VIcon: typeof Icon
  }
}