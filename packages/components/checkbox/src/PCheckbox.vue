<template>
 <div class="pview-checkbox">
  <span class="pview-checkbox__input">
    <input v-model="model" type="checkbox" :value="label" :checked="isChecked" @change="handleChange" :indeterminate="indeterminate" :disabled="disabled" :name="name" />
  </span>
  <span class="pview-checkbox__label"><slot>{{ label }}</slot></span>
 </div>
</template>

<script setup lang="ts">
import type {CheckboxProp} from './checkbox.type.ts'
import {useCheckboxProps} from './checkbox'
const emits = defineEmits(['update:modelValue','change'])
const props = withDefaults(defineProps<CheckboxProp>(),{
  indeterminate:false,
  checked:false,
  name:'',
  disabled:false,
  size:'',
  label:'',
  modelValue:''
})
const {model,isChecked,handleChange} = useCheckboxProps(props)
</script>

<style scoped>
 
</style>