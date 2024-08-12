export default {
  async handleLogin({ commit }, user) {
    commit('SET_LOGGED_IN', true);
    commit('SET_USER', user);
    localStorage.setItem('isLoggedIn', 'true');
  },
  handleLogout({ commit }) {
    commit('SET_LOGGED_IN', false);
    commit('SET_USER', null);
    localStorage.removeItem('isLoggedIn');
  },
};
