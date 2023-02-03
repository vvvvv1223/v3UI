<template>
  <i :class="[
      'v-icon'
      ]" 
      :style="style">
    <slot></slot>
  </i>
</template>
<script lang="ts">
export default {
  name: 'v-icon'
}
</script>
<script setup lang="ts">
import { createNamespace } from '../../../utils/create'
import { iconProps } from './icon'
import { computed } from 'vue'
// defineOptions({
//   name: 'v-icon'
// })

const bem = createNamespace('icon')

const props = defineProps(iconProps)

// 计算属性计算样式
const style = computed(() => {
  if (!props.size && !props.color) return {}
  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.color ? { 'color': props.color } : {})
  }
})

</script>