import Row from './src/row'
import type { App } from 'vue'

Row.name = 'PRow'
Row.install = function(app:App) {
  app.component(Row.name!,Row)
}
export const PRow = Row