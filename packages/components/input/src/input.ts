import { isStringLiteral } from "typescript"
import { ExtractPropTypes, PropType } from "vue"
import { isString } from '@vue/shared'
export type type = 'text' | 'textarea'

export const inputProps = {
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  placeholder: {
    type: String,
  },
  clearable: {
    type: Boolean,
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  label: {
    type: String
  }
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
  'update:modelValue': (value: string) => isString(value),
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  clear: () => true
}

export type inputEmits = typeof inputEmits