export default {
    isAdmin: (state) => state.vaiTro === 'admin',
    isTeacher: (state) => state.vaiTro === 'teacher',
    isStudent: (state) => state.vaiTro === 'student',
    user: (state) => state.user,
};
