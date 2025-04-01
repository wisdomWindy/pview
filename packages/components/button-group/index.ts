import ButtonGroup from './src/ButtonGroup.vue'
import type {App} from 'vue'
ButtonGroup.name = 'ButtonGroup'
ButtonGroup.install = (app:App)=>{
  app.component(ButtonGroup.name!,ButtonGroup)
}
export default ButtonGroup