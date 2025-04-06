import CheckboxGroup from './src/PCheckboxGroup.vue'
import type {App} from 'vue'

CheckboxGroup.name = 'PCheckboxGroup'

CheckboxGroup.install = (app:App)=>{
  app.component(CheckboxGroup.name,Checkbox)
}
export const PCheckboxGroup = CheckboxGroup