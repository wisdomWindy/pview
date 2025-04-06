import { TransferItemProp } from "./transfer.type";
import { computed,watch,getCurrentInstance } from "vue";

export const useCheck =(props:TransferItemProp,state:{[key:string]:any})=>{
  const {emit} = getCurrentInstance()!
  const labelProps = computed(()=>props.props?.label)
  const keyProps = computed(()=>props.props?.key)
  const disabledProps = computed(()=>props.props?.disabled)
  const checkDisable = computed(()=>{
    return props.data?.filter(item=>{
      return !item[disabledProps.value!]
    })
  })
  const handleChange= (val:boolean)=>{
    state.allCheck.value = val;
    state.checkedList.value = val? checkDisable.value!.map(item => {
      return item[keyProps.value!]
    }) :[]
  }
  watch(()=> state.checkedList.value,()=>{
   const checkKeys = checkDisable.value?.map(item => item[keyProps.value!])
   state.allCheck.value = checkKeys?.length && checkKeys.every(item => state.checkedList.value!.includes(item))
    // 通知父级更新数据源
    emit('checkChange',state.checkedList.value!)
  });
  watch(()=>props.data,()=>{
    state.allCheck.value = false
  })
  return {
    labelProps,
    keyProps,
    disabledProps,
    checkDisable,
    handleChange
  }
}