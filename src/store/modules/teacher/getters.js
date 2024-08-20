export default {
  allTeachers: state => state.teachers,
  showTeacherForm: (state) => state.showTeacherForm,
  filteredTeachers(state) {
    return state.teachers;
  },
};
