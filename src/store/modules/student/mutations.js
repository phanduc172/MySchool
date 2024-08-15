export default {
  SET_STUDENTS(state, students) {
    state.students = students;
  },
  REMOVE_STUDENT(state, studentId) {
    state.students = state.students.filter(student => student.id !== studentId);
  },
  SET_STUDENT(state, student) {
    state.student = { ...student };
  },
  SET_EDITING(state, isEditing) {
    state.isEditing = isEditing;
  },
  SET_SHOW_FORM(state, showForm) {
    state.showForm = showForm;
  },
  SET_SHOW_BTN_ADD(state, showBtnAdd) {
    state.showBtnAdd = showBtnAdd;
  },
  RESET_FORM(state) {
    state.student = {
      ten: '',
      ngaySinh: '',
      lop: '',
      soDienThoai: '',
      giaoVienChuNhiem: null
    };
    state.isEditing = false;
    state.showForm = false;
  }
};
