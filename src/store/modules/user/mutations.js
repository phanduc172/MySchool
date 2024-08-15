export default {
  SET_USERS(state, users) {
    state.users = users;
  },
  REMOVE_USER(state, userId) {
    state.users = state.users.filter(user => user.id !== userId);
  }
};
