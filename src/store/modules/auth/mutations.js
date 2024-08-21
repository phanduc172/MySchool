export default {
  SET_LOGGED_IN(state, status) {
    state.isLoggedIn = status;
  },
  SET_USER(state, user) {
    state.user = user;
    state.isLoggedIn = !!user;
  },
  LOGOUT(state) {
    state.user = null;
    state.isLoggedIn = false;
  },
  ADD_USER(state, user) {
    state.user = user;
  }
};
