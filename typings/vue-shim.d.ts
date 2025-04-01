import {defineComponent} from 'vue'
import type {App} from 'vue'
declare module '*.vue' {
  const component:ReturnType<typeof defineComponent> & {
    install(app:App):void
  }
  export default component
}