import Vue from 'vue'
import Router from 'vue-router'
import billboard from '@/components/list/billboard'
import inTheaters from '@/components/inTheaters'
import comingSoon from '@/components/comingSoon'
import topTwenty from '@/components/topTwenty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/billboard',
      name: 'billboard',
      component: billboard
    },
    {
      path: '/inTheaters',
      name: 'inTheaters',
      component: inTheaters
    },
    {
      path: '/comingSoon',
      name: 'comingSoon',
      component: comingSoon
    },
    {
      path: '/topTwenty',
      name: 'topTwenty',
      component: topTwenty
    }
  ]
})
