<template>
  <button :class="className" @click="$emit('click')">
    <i v-if="loading" class="pview-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <div v-if="$slots.default"><slot></slot></div>
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
type ButtonType =  'primary'|'success'|'warning'|'danger'|'info';
type ButtonSize = 'small'|'medium'|'large';
const props = withDefaults(defineProps<{
  size?:ButtonSize,
  type?: ButtonType,
  disabled?: boolean,
  round?:boolean,
  loading?:boolean,
  icon?:string,
  plain?:boolean,
  circle?:boolean
}>(),{
  size:'medium',
  type:'primary',
  disabled:false,
  round:false,
  loading:false,
  icon:'',
  plain:false,
  circle:false
}) 

// 创建button类名
const className = computed(()=>{
  return [
    'pview-button',
    `pview-button--${props.type}`,
    `is-${props.size}`,
    {
      'is-disabled':props.disabled,
      'is-round':props.round,
      'is-loading':props.loading,
      'is-plain':props.plain,
      'is-circle':props.circle,
    }
  ]
})
</script>
