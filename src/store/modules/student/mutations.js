export default {
    SET_STUDENTS(state, students) {
      state.students = students;
    },
    REMOVE_STUDENT(state, studentId) {
      state.students = state.students.filter(student => student.id !== studentId);
    },
  };
  