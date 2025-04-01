import Button from './src/PButton.vue'
import type {App} from 'vue'
Button.name = 'PButton'
Button.install = (app:App)=>{
  app.component(Button.name!,Button)
}
export const PButton = Button