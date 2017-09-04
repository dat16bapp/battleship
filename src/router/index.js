import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
      {
          path: '/rules',
          name: 'Rules',
          component: require('@/pages/rules')
      },
      {
          path: '/',
          name: 'Game',
          component: require('@/pages/game')
      }
  ]
})
