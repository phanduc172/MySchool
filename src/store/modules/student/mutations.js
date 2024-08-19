export default {
  SET_STUDENTS(state, students) {
    state.students = students.map(student => ({
      ...student,
      giaoVienChuNhiem: student.giaoVienChuNhiem ? student.giaoVienChuNhiem.ten : null
    }));
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
  },
  SET_SHOW_STUDENT_FORM(state, showStudentForm) {
    state.showStudentForm = showStudentForm;
  }  
};
