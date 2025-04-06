import Checkbox from './src/PCheckbox.vue'
import type {App} from 'vue'

Checkbox.name = 'PCheckbox'
Checkbox.install = (app:App)=>{
  app.install(Checkbox.name,Checkbox)
}
export const PCheckbox = Checkbox