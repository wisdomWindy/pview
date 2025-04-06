import Message from './src/message'
import { App } from 'vue'

Message.install = (app:App)=>{
  app.config.globalProperties.$message = Message
}

export const PMessage = Message