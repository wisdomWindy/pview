<template>
 <div class="pview-checkbox-group">
  
 </div>
</template>

<script setup lang="ts">
import { computed,defineEmits,provide } from 'vue'
const emit = defineEmits(['update:modelValue','change'])
const props = withDefaults(defineProps<{
  modelValue?:Array<any>
}>(),{
  modelValue:()=>[]
})
const modelValue = computed(()=> props.modelValue)
const handleChange = (val:any)=>{
  emit('update:modelValue',val)
  emit('change',val)
}
provide('checkboxGroup',{
  modelValue,
  handleChange
})
</script>

<style scoped>
 
</style>