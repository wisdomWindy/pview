import Icon from './src/PIcon.vue'

Icon.name= 'PIcon'

Icon.install = (app: any) => {
  app.component(Icon.name, Icon)
}

export const PIcon = Icon