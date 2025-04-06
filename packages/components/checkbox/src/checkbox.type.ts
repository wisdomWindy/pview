import { Ref } from "vue";
export interface CheckboxProp{
  indeterminate?:boolean,
  checked?:boolean,
  name?:string,
  disabled?:boolean,
  size?:string,
  label?:string|number|boolean|object,
  modelValue?:string|number|boolean
}
export interface CheckboxGroupProvide{
  modelValue?:Ref<string[]>,
  handleChange?:(v:any)=>void
}