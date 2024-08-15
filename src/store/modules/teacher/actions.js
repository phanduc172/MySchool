import axios from 'axios';
import { API_ENDPOINTS } from '@/api/api';
import { showDeleteConfirmation, showSuccessMessage } from '@/store/ui/ConfirmDelete';

export default {
  async fetchTeachers({ commit }) {
    try {
      const response = await axios.get(API_ENDPOINTS.GIAO_VIEN);
      commit('SET_TEACHERS', response.data);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu giáo viên:', error);
    }
  },
  async deleteTeacher({ commit }, teacherId) {
    try {
      await axios.delete(`${API_ENDPOINTS.GIAO_VIEN}/${teacherId}`);
      commit('REMOVE_TEACHER', teacherId);
    } catch (error) {
      console.error('Lỗi khi xóa giáo viên:', error);
    }
  },
  async confirmDeleteTeacher({ dispatch, commit }, teacherId) {
    const isConfirmed = await showDeleteConfirmation();

    if (isConfirmed) {
      try {
        await dispatch('deleteTeacher', teacherId);
        showSuccessMessage();
        dispatch('fetchTeachers');
      } catch (error) {
        console.error('Lỗi khi xóa giáo viên:', error);
      }
    }
  },
};
