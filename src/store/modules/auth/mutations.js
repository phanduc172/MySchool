export default {
  SET_LOGGED_IN(state, status) {
      state.isLoggedIn = status;
  },
  SET_USER(state, user) {
      state.user = user;
  },
  SET_ACCOUNT(state, account) {
    state.account = account;
  },
  SET_PASSWORD(state, password) {
    state.password = password;
  },
};
