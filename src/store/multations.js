export default {
    SET_LOGGED_IN(state, status) {
      state.isLoggedIn = status;
    },
    SET_USER(state, user) {
      state.user = user;
    }
  }