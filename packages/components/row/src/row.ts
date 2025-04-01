import { computed, defineComponent,h } from "vue";
export default defineComponent({
  name:'PRow',
  props:{
    tag:{
      type:String,
      default:'div'
    },
    gutter:{
      type:Number,
      default:0
    },
    justify:{
      type:String,
      default:'start'
    },
  },
  setup(props,ctx){
      const {tag} = props
      const {slots} = ctx
      const className = computed(()=>{
        return `pview-row`
      })
      return h(tag,{
        class:className.value,
      },slots.default?.())
  }
})