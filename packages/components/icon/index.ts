import PIcon from './src/PIcon.vue'

PIcon.name= 'PIcon'

PIcon.install = (app: any) => {
  app.component(PIcon.name, PIcon)
}

export default PIcon