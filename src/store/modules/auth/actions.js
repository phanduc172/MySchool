import axios from 'axios';
import { API_ENDPOINTS } from '@/api/api';

export default {
  async registerUser({ commit }, userData) {
    const response = await axios.post(API_ENDPOINTS.NGUOI_DUNG, userData);
    const user = response.data;
    commit('ADD_USER', user);
    commit('SET_USER', user);
    commit('SET_LOGGED_IN', true);
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('user', JSON.stringify(user));
    return user;
  },

  async handleLogin({ commit }, { account, password }) {
      const response = await axios.get(API_ENDPOINTS.NGUOI_DUNG);
      const users = response.data;

      const user = users.find(user => 
        user.tenTaiKhoan === account && user.matKhau === password
      );

      if (user) {
        commit('SET_LOGGED_IN', true);
        commit('SET_USER', user);
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('user', JSON.stringify(user));
        return user;
      }  else {
        throw new Error('Tài khoản hoặc mật khẩu không đúng');
      }
  },
  
  async handleLogout({ commit }) {
    commit('LOGOUT');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('user');
  },
  
  autoLogin({ commit }) {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (isLoggedIn && user) {
      commit('SET_LOGGED_IN', true);
      commit('SET_USER', user);
    } else {
      commit('SET_LOGGED_IN', false);
      commit('SET_USER', null);
    }
  },
};
