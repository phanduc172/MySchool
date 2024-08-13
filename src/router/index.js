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
      path: '/manager/teacher',
      name: 'teacher',
      component: () => import('../resources/Teacher.vue')
    },
    {
      path: '/manager/student',
      name: 'student',
      component: () => import('../resources/Student.vue')
    }     
  ]
})

export default router
