<template>
  <div class="v-input">
    <div class="v-input-group">
      <div v-if="slots.prepend" class="v-input-group__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="v-input__wrapper">
        <span v-if="slots.prefixIcon" class="prefix">
          <slot name="prefixIcon"></slot>
        </span>
        <input
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          v-bind="attrs"
          class="inner"
          ref="inputRef"
          :placeholder="placeholder"
          :readonly="readonly"
          :disabled="disabled"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <span v-if="slots.suffixIcon" class="suffix">
          <slot name="suffixIcon"> </slot>
        </span>
        <v-icon
          v-if="showPwdVisible"
          @click="handlePasswordVisible"
          :color="'blue'"
          :size="20"
        >
          <Eye v-if="!showPassword"></Eye>
          <EyeOff v-else></EyeOff>
        </v-icon>
        <v-icon
          v-if="showClear"
          @click="clear"
          :color="'blue'"
          :size="20"
        >
          <Close></Close>
        </v-icon>
      </div>

      <div v-if="slots.append" :class="['v-input-group__append']">
        <slot name="append"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, useAttrs, ref, watch, onMounted, nextTick, computed } from "vue";
import { inputEmits, inputProps } from "./input";
import { Eye, EyeOff, Close } from "@vicons/ionicons5";
defineOptions({
  name: "v-input",
  inheritAttrs: false,
});

const slots = useSlots();
const attrs = useAttrs();

const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);

const inputRef = ref<HTMLInputElement | null>(null);

// showPassword
const passwordVisible = ref(false);
const focus = async () => {
  // 重新获取焦点
  await nextTick();
  inputRef.value?.focus();
};
const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
  focus();
};
const showPwdVisible = computed(() => {
  return props.modelValue && props.showPassword && !props.readonly && !props.disabled;
});

// clearable
const showClear = computed(() => {
  return props.modelValue && props.clearable && !props.readonly && !props.disabled;
});
const clear = () => {
  emit('input', '')
  emit('update:modelValue', '')
  emit('clear')
  focus()
}
watch(
  () => props.modelValue,
  () => {
    setNativeInputValue();
  }
);

const setNativeInputValue = () => {
  const inputEle = inputRef.value;
  if (!inputEle) return;
  inputEle.value = String(props.modelValue);
};

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emit("input", value);
  emit("update:modelValue", value); // 触发事件 双向绑定
};

const handleChange = (e: Event) => {
  emit("change", (e.target as HTMLInputElement).value);
};

const handleFocus = (e: FocusEvent) => {
  emit("focus", e);
};
const handleBlur = (e: FocusEvent) => {
  emit("blur", e);
};
onMounted(() => {
  setNativeInputValue();
});
</script>

<style scoped></style>
