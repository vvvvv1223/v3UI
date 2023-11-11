<script setup lang="ts">
import { ArrowForwardCircle } from '@vicons/ionicons5'
import { ref } from 'vue'
const handleClick = ((e: MouseEvent) => {
  // console.log(e);
})

const username = ref('e')
const handleFocus = (e:FocusEvent) => {
  console.log('focus',e);
}
const handleBlur = (e:FocusEvent) => {
  console.log(e);
}
</script>

<template>
  <!-- <v-icon :color="'pink'" :size="30">
    <AddOutline></AddOutline>
  </v-icon>
  <v-icon :color="'pink'" :size="30">
    <AddCircle></AddCircle>
  </v-icon> -->
  <!-- <v-tree></v-tree> -->
  <!-- <v-button type="success" size="large" @Mousedown="handleClick">测试</v-button>
  <v-input>ee</v-input> -->
  <v-input clearable v-model="username" placeholder="请输入" @focus="handleFocus" @blur="handleBlur">
    <template #prepend>前</template>
    <template #prefixIcon>
      <v-icon :color="'black'" :size="20">
        <ArrowForwardCircle></ArrowForwardCircle>
      </v-icon>
    </template>
    <template #suffixIcon>
      <v-icon :color="'black'" :size="20">
        <ArrowForwardCircle></ArrowForwardCircle>
      </v-icon>
    </template>
    <template #append>后</template>
  </v-input>
</template>

<style scoped lang="scss">

</style>
