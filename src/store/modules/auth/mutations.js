export default {
  SET_LOGGED_IN(state, status) {
    state.isLoggedIn = status;
    state.isAuthenticated = status;
  },
  SET_USER(state, user) {
    state.user = user;
    state.isLoggedIn = !!user;
    state.isAuthenticated = !!user;
  },
  LOGOUT(state) {
    state.user = null;
    state.isLoggedIn = false;
    state.isAuthenticated = false;
  },
  ADD_USER(state, user) {
    // Optional: Cập nhật thêm nếu cần
  }
};
