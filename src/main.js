import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Navbar from './components/Navbar.vue'
import Register from './components/Register.vue'
import Student from './components/Student.vue'
import Teacher from './components/Teacher.vue'
import UserProfile from './components/UserProfile.vue'

import storeConfig from './store';


Vue.component('app-dashboard',Dashboard);
Vue.component('app-login',Login);
Vue.component('app-navbar',Navbar);
Vue.component('app-register',Register);
Vue.component('app-student',Student);
Vue.component('app-teacher',Teacher);
Vue.component('app-user-profile',UserProfile);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuex);

const store = new Vuex.Store(storeConfig)

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount('#app')
