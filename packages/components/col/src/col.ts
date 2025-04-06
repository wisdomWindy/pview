import {defineComponent,h,computed,inject} from 'vue'

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
      const gutter = inject('gutter',0)
      const gutterStyle = computed(()=>{
        return {
          paddingLeft:gutter/2+'px',
          paddingRight:gutter/2+'px'
        }
      })
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
        class:className.value,
        style:gutterStyle.value,
      },slots.default?.())
    }
  }
})