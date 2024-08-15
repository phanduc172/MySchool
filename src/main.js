import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/main.css';
import { BootstrapVue, IconsPlugin,FormGroupPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Dashboard from './resources/Dashboard.vue';
import Login from './resources/Login.vue';
import Navbar from './components/layout/Navbar.vue';
import Register from './resources/Register.vue';
import Student from './components/student/StudentList.vue';
import Teacher from './components/teacher/TeacherList.vue';
import UserProfile from './resources/UserProfile.vue';

Vue.component('app-dashboard', Dashboard);
Vue.component('app-login', Login);
Vue.component('app-navbar', Navbar);
Vue.component('app-register', Register);
Vue.component('app-student', Student);
Vue.component('app-teacher', Teacher);
Vue.component('app-user-profile', UserProfile);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(FormGroupPlugin)
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
