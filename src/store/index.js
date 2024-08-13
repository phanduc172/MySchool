import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import student from './modules/student';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    student
  }
});

export default store;
