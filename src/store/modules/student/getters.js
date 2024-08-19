export default {
  students: state => state.students,
  showForm: state => state.showForm,
  showStudentForm: state => state.showStudentForm,
  filteredStudents(state) {
    return state.students;
  },
};
