export default {
  SET_TEACHERS(state, teachers) {
    state.teachers = teachers;
  },
  REMOVE_TEACHER(state, teacherId) {
    state.teachers = state.teachers.filter(teacher => teacher.id !== teacherId);
  },
  ADD_TEACHER(state, teacher) {
    state.teachers.push(teacher);
  },
  UPDATE_TEACHER(state, updatedTeacher) {
    const index = state.teachers.findIndex(t => t.id === updatedTeacher.id);
    if (index !== -1) {
      state.teachers.splice(index, 1, updatedTeacher);
    }
  },
  SET_SHOW_TEACHER_FORM(state, showTeacherForm) {
    state.showTeacherForm = showTeacherForm;
  },
};
