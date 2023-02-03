<template>
  <button 
    :class="[
    'v-button',
      type ? 'v-button--' + type : '',
      size ? 'v-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-round': round
      }
    ]" 
    :type="nativeType" 
    :disabled="disabled || loading"
    @click="emitClick"
    @mousedown="emitMousedown">
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  name: 'v-button'
}
</script>
<script setup lang="ts">
// import { createNamespace } from '../../../utils/create';
import { buttonEmits, buttonProps } from './button';

// defineOptions({
//   name: 'v-button'
// })

// const bem = createNamespace('button')
const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const emitClick = ((e:MouseEvent) => {
  emit('click', e)
})
const emitMousedown = ((e:MouseEvent) => {
  emit('mousedown', e)
})
</script>
<style lang="scss" scoped>

</style>