import _Input from './src/input.vue';
import { withInstall} from '../../utils/with-install'

const Input = withInstall(_Input)
export default Input; // 可以通过app.use使用 也可以通过import
export type { InputProps } from './src/input'

// 组件提示 添加的类型可以在模板中被解析
declare module 'vue' {
  export interface GlobalComponents {  // 接口自动合并
    VInput: typeof Input
  }
}