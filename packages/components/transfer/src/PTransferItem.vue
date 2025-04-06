<template>
 <div class="pview-transfer-item">
  <PCheckbox v-model="allCheck" @change="handleChange">全选/半选</PCheckbox>
  <div class="pview-transfer-body">
     <PCheckboxGroup v-model="checkedList">
      <PCheckbox v-for="(item,index) in data" :key="item[keyProps!]" :label="item[labelProps!]" :disabled="item[disabledProps!]" />
    </PCheckboxGroup>
  </div>
 
  
 </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import {PCheckbox} from '@pview/components/checkbox'
import { PCheckboxGroup } from '@pview/components/checkbox-group';
import type {IData, PropsItem,TransferItemProp} from './transfer.type'
import { useCheck } from './useCheck'
const emits = defineEmits(['update:modelValue','checkChange'])
const props = withDefaults(defineProps<TransferItemProp>(), {
  data:()=>[],
  props:()=>({
    label:'label',
    key:'key'
  })
}) 
const checkedList = ref([])
const allCheck = ref(false)
const {
  labelProps,
  keyProps,
  disabledProps,
  handleChange
} = useCheck(props,{checkedList,allCheck})

</script>

<style scoped>
 
</style>