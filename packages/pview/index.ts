import type {App} from 'vue'
import * as components from './components'

const install = (app:App)=>{
  Object.keys(components).forEach((key) => {
    app.component(key,components[key as keyof typeof components])
  })
}
export default {
  install
}