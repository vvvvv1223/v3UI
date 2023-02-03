// 组件相关属性及ts类型
import { ExtractPropTypes, PropType } from "vue"

// 由于单项数据流 将icon的属性设置只读 as const: 将一个对象变为只读类型
export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>




/**
 * note
 */
// 这样写 color自动推导的string类型是构造函数 不是我们要的string，使用vue3中自带的props类型声明ExtractPropTypes
// 其中size的数组项size: [Number, String]，还需要通过 Vue3 内置的 PropType 类型声明进行具体的类型断言声明
// export const iconProps = {
//   color: String,
//   size: [Number, String]
// } 
/** 组件 Props 类型, ExtractPropTypes 可将 Constructor 转换为对应值类型 */
// type Props = ExtractPropTypes<typeof componentProps>