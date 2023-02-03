// 组件相关属性及ts类型
import { ExtractPropTypes, PropType } from "vue"

export type size = 'large'| 'default'| 'small'
export type type = 'primary'| 'success'| 'warning'| 'danger'| 'info' | ''
export type nativeType = 'button'| 'submit'| 'reset'

export const buttonProps = {
  size: String as PropType<size>,
  type: {
    type: String as PropType<type>,
    validator: (val:string) => {
      return ['primary', 'success', 'warning', 'danger', 'info', ''].includes(val)
    },
    default: ''
  },
  round: Boolean,
  loading: Boolean,
  disabled: Boolean,
  nativeType: {
    type: String as PropType<nativeType>,
    default: 'button'
  },
} as const

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  mousedown: (e: MouseEvent) => e instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits