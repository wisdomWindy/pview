import {defineComponent,h,computed} from 'vue'

export default defineComponent({
  name:'PCol',
  props:{
    tag:{
      type:String,
      default:'div'
    },
    span:{
      type:Number,
      default:24
    },
    offset:{
      type:Number,
      default:0
    }
  },
  setup(props,ctx){
    return () => {
      const {tag} = props
      const {slots} = ctx
      const className = computed(()=>{
        return [
          'pview-col',
          {
            [`pview-col-span-${props.span}`]:props.span,
            [`pview-col-offset-${props.offset}`]:props.offset
          }
        ]
      });
      return h(tag,{
        class:className.value
      },slots.default?.())
    }
  }
})