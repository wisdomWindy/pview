import Transfer from './src/PTransfer.vue'
import { App } from 'vue'

Transfer.name = 'PTransfer'
Transfer.install = function (app: App) {
  app.component(Transfer.name!, Transfer)
}

export const PTransfer = Transfer