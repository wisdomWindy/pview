import ButtonGroup from './src/PButtonGroup.vue'
import type {App} from 'vue'
ButtonGroup.name = 'PButton'
ButtonGroup.install = (app:App)=>{
  app.component(ButtonGroup.name!,ButtonGroup)
}
export const PButtonGroup = ButtonGroup