<template>
  <Transition name="pview-message-fade" v-show="show" @before-leave="onClose" @after-leave="$emit('destroy')">
     <div :class="className"></div>
  </Transition>

</template>

<script setup lang="ts">
import { onMounted,ref,onUnmounted, computed } from 'vue';
import{ IMessageProps } from './message.type'
const emit = defineEmits(['destroy'])
const props = withDefaults(defineProps<IMessageProps>(),{
  message:'',
  type:'info',
  id:'',
  duration:3000,
  center:true,
  onClose:()=>{},
  offset:0
})
const className = computed(()=>{
  return ['pview-message',`pview-message--${props.type}`,props.center?'is-center':'']
})
let timer = 0
const show = ref(false)
onMounted(()=>{
  show.value = true;
  timerFn();
})
function timerFn(){
  setTimeout(()=>{
    show.value = false;
  },props.duration)
}
onUnmounted(()=>{
  clearTimeout(timer)
})
</script>

<style scoped>
 
</style>