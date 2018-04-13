import Vue from 'vue'
import Router from 'vue-router'
import FicheTechnique from '@/components/FicheTechnique'

Vue.use(Router)

export default new Router({
  mode: 'history', // with that we get a nice URL (without '#')
  routes: [
    {
      path: '/fiche',
      component: FicheTechnique
    }
  ]
})
