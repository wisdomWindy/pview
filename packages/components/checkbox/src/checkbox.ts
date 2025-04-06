import {computed,getCurrentInstance,inject,Ref} from 'vue'
import type {CheckboxProp,CheckboxGroupProvide} from './checkbox.type.ts'
const {emit} = getCurrentInstance()!;
function useModel(props:CheckboxProp){
  const checkboxGroup = inject<CheckboxGroupProvide>('checkboxGroup',{})
  return computed({
    get(){
      return props.modelValue || checkboxGroup?.modelValue?.value || false
    },
    set(v){
      if(checkboxGroup.modelValue){
        return checkboxGroup.handleChange!(v)
      }
      emit('update:modelValue',v)
    }
  })
}
function useCheckbox(model:Ref,props:CheckboxProp){
  return computed(()=>{
    const value = model.value;
    if(Array.isArray(value)){
      return value.includes(props.label)
    }else {
      return value
    }
  })
}
function useEvent(){
  return function handleChange(e:Event){
    const target = e.target;
    const value = !!target.isChecked
    emit('change',value)
  }
}
export const useCheckboxProps = (props:CheckboxProp)=>{
  const model = useModel(props)
  const isChecked = useCheckbox(model,props)
  const handleChange = useEvent();
  return {model,isChecked,handleChange}
}