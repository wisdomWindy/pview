import Col from './src/col'
import type { App } from 'vue'
Col.name= 'PCol'
Col.install=(app:App)=>{
  app.component(Col.name!, Col)
}
export const PCol = Col