export default {
  SET_TEACHERS(state, teachers) {
    state.teachers = teachers;
  },
  REMOVE_TEACHER(state, teacherId) {
    state.teachers = state.teachers.filter(teacher => teacher.id !== teacherId);
  }
};
