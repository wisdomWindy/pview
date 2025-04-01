<template>
 <i :class="className"></i>
</template>

<script setup lang="ts">
import {computed} from 'vue'
const props = withDefaults(defineProps<{
  type?:string
}>(),{
  type:''
})
const className = computed(()=>{
  return ['pview-icon',`pview-icon-${props.type}`]
})
</script>