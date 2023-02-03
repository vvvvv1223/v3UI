import { withInstall } from '@vv/utils/with-install'
import _Tree from './src/tree.vue'
const Tree = withInstall(_Tree)

export default Tree

declare module 'vue' {
  export interface GlobalComponents {  // 接口自动合并
    VTree: typeof Tree
  }
}