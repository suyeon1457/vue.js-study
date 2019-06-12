import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexPage from '@/components/IndexPage'
import ShowPage from '@/components/ShowPage'
import UploadPage from '@/components/UploadPage'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/:id',
      name: 'show',
      component: ShowPage
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadPage
    }
  ]
})
