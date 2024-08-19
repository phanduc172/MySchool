export default {
  students: state => state.students,
  showBtnAdd: state => state.showBtnAdd,
  showForm: state => state.showForm,
  filteredStudents(state) {
    return state.students;
  },
};
