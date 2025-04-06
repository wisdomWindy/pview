import { computed, defineComponent,h,provide } from "vue";
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
    
      const {tag,gutter} = props
      const {slots} = ctx
      provide<Number>('gutter',gutter)
      const className = computed(()=>{
        return [`pview-row`,`is-justify-${props.justify||'start'}`]
      })
      const gutterStyle = computed(()=>{
        return {
          marginLeft: `-${gutter}px`,
          marginRight:`-${gutter}px`
        }
      })
      return h(tag,{
        class:className.value,
        style:gutterStyle.value,
      },slots.default?.())
  }
})