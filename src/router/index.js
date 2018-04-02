import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FicheTechnique from '@/components/FicheTechnique'

Vue.use(Router)

export default new Router({
  mode: 'history', // with that we get a nice URL (without '#')
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fiche',
      component: FicheTechnique
    }
  ]
})
