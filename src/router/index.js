import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../App.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../resources/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../resources/Register.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../resources/Dashboard.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../resources/UserProfile.vue')
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import('../resources/Teacher.vue')
    },
  ]
})

export default router
