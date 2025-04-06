import type {App} from 'vue'
import * as components from './components'
import { PMessage } from '@pview/components/message'


const install = (app:App)=>{
  app.use(PMessage)
  Object.keys(components).forEach((key) => {
    app.component(key,components[key as keyof typeof components])
  })
}
export default {
  install
}