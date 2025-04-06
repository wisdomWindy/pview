<template>
 <div class="pview-transfer">
  <PTransferItem v-model="sourceCheckData" @checkChange="sourceCheckChange"></PTransferItem>
  <div class="pview-transfer__button">
    <PButton @click="moveToRight">去右</PButton>
    <PButton @click="moveToLeft">去左</PButton>
  </div>
  <PTransferItem v-model="targetCheckData" @checkChange="targetCheckChange"></PTransferItem>

 </div>
</template>

<script setup lang="ts">
import PTransferItem from './PTransferItem.vue'
import {PButton} from '@pview/components/button'
import {TransferProp } from './transfer.type'
import {ref} from 'vue'
const emits = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<TransferProp>(),{
  data:()=>[],
  modelValue:()=>[],
  props:()=>{
     return {
      label:'label',
      key:'key'
    }
  }
})
const sourceCheckData = ref<any[]>([])
const targetCheckData = ref<any[]>(props.modelValue)
// 左边选中的数据
const sourceCheckChange = (leftValue:any[])=>{
  sourceCheckData.value = leftValue
}
// 右边选中的数据
const targetCheckChange = (rightValue:any[])=>{
  targetCheckData.value = rightValue
}
// 移到左边
const moveToLeft = ()=>{
  const rightValue = props.modelValue.slice(0)
  targetCheckData.value.forEach(item => {
    const index = rightValue.findIndex(item2=>item2[props.props.key] === item[props.props.key])
    if(index > -1){
      rightValue.splice(index,1)
    }
    emits('update:modelValue',rightValue)
  })

}
// 移到右边
const moveToRight = ()=>{
  const leftValue = props.modelValue.slice(0)
  leftValue.concat(sourceCheckData.value)
  emits('update:modelValue',leftValue)
}
</script>

<style scoped>
 
</style>