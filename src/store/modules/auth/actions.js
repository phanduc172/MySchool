import axios from 'axios';

export default {
  async handleLogin({ commit }, { account, password }) {
    try {
      const response = await axios.get('http://localhost:3000/api/nguoi-dung');
      const users = response.data;

      const user = users.find(user => 
        user.tenTaiKhoan === account && user.matKhau === password
      );

      if (user) {
        commit('SET_LOGGED_IN', true);
        commit('SET_USER', user);
        localStorage.setItem('isLoggedIn', 'true');
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
    commit('SET_LOGGED_IN', false);
    commit('SET_USER', null);
    localStorage.removeItem('isLoggedIn');
  }
};
