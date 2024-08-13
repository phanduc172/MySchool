import axios from 'axios';
import { API_ENDPOINTS } from '@/api/api';

export default {
  async fetchStudents({ commit }) {
    try {
      const response = await axios.get(API_ENDPOINTS.HOC_SINH);
      commit('SET_STUDENTS', response.data);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
    }
  },

  async deleteStudent({ commit, state }, studentId) {
    try {
      await axios.delete(`${API_ENDPOINTS.HOC_SINH}/${studentId}`);
      commit('REMOVE_STUDENT', studentId);
      alert('Xóa học sinh thành công!');
    } catch (error) {
      console.error('Lỗi khi xóa học sinh:', error);
      alert('Xóa học sinh thất bại!');
    }
  },

  async editStudent({ commit }, student) {
    console.log('Edit student:', student);
    // Handle editing logic here
  },
};
