export interface TransferProp{
  data?:IData[],
  props?:PropsItem,
  modelValue?:Key[]
}
export type Key = string | number
export interface IData{
  key?:Key
  label?:string
  disabled?:number
  [key:string]:any
}
export interface PropsItem{
  key?:Key
  label?:string
  disabled?:number
}

export interface TransferItemProp{
  data?:IData[],
  props?:PropsItem
}