import type {App} from 'vue'
import PButton from '@pview/button'
import PIcon from '@pview/icon'
const components = [
  PButton,
  PIcon
]

const install = (app:App)=>{
  components.forEach(item => {
    app.component(item.name!,item)
  })
}
export default {
  install
}