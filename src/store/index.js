import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import student from './modules/student';
import teacher from './modules/teacher';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    student,
    teacher
  }
});

export default store;
