import axios from 'axios';
import { API_ENDPOINTS } from '@/api/api';

export default {
  async registerUser({ commit }, userData) {
    try {
      const response = await axios.post(API_ENDPOINTS.NGUOI_DUNG, userData);
      const user = response.data;
      commit('ADD_USER', user);
      commit('SET_USER', user);
      commit('SET_LOGGED_IN', true);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      console.error('Lỗi khi đăng ký:', error.response ? error.response.data : error.message);
      throw error;
    }
  },

  async handleLogin({ commit }, { account, password }) {
    try {
      const response = await axios.get(API_ENDPOINTS.NGUOI_DUNG);
      const users = response.data;

      const user = users.find(user => 
        user.tenTaiKhoan === account && user.matKhau === password
      );

      if (user) {
        commit('SET_LOGGED_IN', true);
        commit('SET_USER', user);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      } else {
        throw new Error('Tài khoản hoặc mật khẩu không đúng');
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      throw error;
    }
  },
  async handleLogout({ commit }) {
    commit('LOGOUT');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  },
  autoLogin({ commit }) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('user'));
    if (isLoggedIn && user) {
      commit('SET_LOGGED_IN', true);
      commit('SET_USER', user);
    } else {
      commit('SET_LOGGED_IN', false);
      commit('SET_USER', null);
    }
  },
};
