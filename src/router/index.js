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
      component: () => import('../components/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/Register.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../components/Dashboard.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../components/UserProfile.vue')
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import('../components/Teacher.vue')
    },
  ]
})

export default router
