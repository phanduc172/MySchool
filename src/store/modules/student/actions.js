import axios from 'axios';
import { API_ENDPOINTS } from '@/api/api';
import { showDeleteConfirmation, showSuccessMessage } from '@/store/ui/ConfirmDelete';

export default {
  async fetchStudents({ commit }) {
    try {
      const response = await axios.get(API_ENDPOINTS.HOC_SINH);
      commit('SET_STUDENTS', response.data);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
    }
  },

  async addStudent({ dispatch }, student) {
    try {
      await axios.post(API_ENDPOINTS.HOC_SINH, student);
      showSuccessMessage('Thêm học sinh thành công!');
      dispatch('fetchStudents');
    } catch (error) {
      console.error('Lỗi khi thêm học sinh:', error);
    }
  },

  async updateStudent({ dispatch }, student) {
    try {     
      const response = await axios.put(`${API_ENDPOINTS.HOC_SINH}/${student.id}`, student);
      console.log('Dữ liệu học sinh sau khi cập nhật:', response.data);
      showSuccessMessage('Cập nhật học sinh thành công!');
      dispatch('fetchStudents');
    } catch (error) {
      console.error('Lỗi khi cập nhật học sinh:', error);
    }
  },
   

  async deleteStudent({ commit }, studentId) {
    try {
      await axios.delete(`${API_ENDPOINTS.HOC_SINH}/${studentId}`);
      commit('REMOVE_STUDENT', studentId);
    } catch (error) {
      console.error('Lỗi khi xóa học sinh:', error);
    }
  },

  async confirmDeleteStudent({ dispatch }, studentId) {
    const isConfirmed = await showDeleteConfirmation();

    if (isConfirmed) {
      try {
        await dispatch('deleteStudent', studentId);
        showSuccessMessage('Xóa học sinh thành công!');
      } catch (error) {
        console.error('Lỗi khi xóa học sinh:', error);
      }
    }
  },
};
