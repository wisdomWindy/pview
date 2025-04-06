import { computed } from "vue"
import { IData, Key, TransferProp } from "./transfer.type"
export const useComponentData = (props:TransferProp)=>{
  const propKey = computed(()=> props.props?.key);
  const data = computed(()=>{
    return props.data?.reduce((pre:{[key:Key]:IData},current)=>{
      pre[current[propKey.value!]] = current
      return pre
    },{})
  })
  // 把数据分左右
  const sourceData = computed(()=>{
    return props.data?.filter(item=>!props.modelValue?.includes(item[propKey.value!]))
  })
  // 右边的数据
  const targetData = computed(()=>{
    return props.data?.filter(item=>props.modelValue?.includes(item[propKey.value!]))
  })
  return {
    sourceData,
    targetData
  }

}