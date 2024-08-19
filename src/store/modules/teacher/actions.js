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
  async addTeacher({ commit }, teacher) {
    try {
      const response = await axios.post(API_ENDPOINTS.GIAO_VIEN, teacher);
      showSuccessMessage();
      commit('ADD_TEACHER', response.data);
    } catch (error) {
      console.error('Lỗi khi thêm giáo viên:', error);
    }
  },
  async updateTeacher({ commit }, teacher) {
    try {
      const response = await axios.put(`${API_ENDPOINTS.GIAO_VIEN}/${teacher.id}`, teacher);
      commit('UPDATE_TEACHER', response.data);
      showSuccessMessage();
    } catch (error) {
      console.error('Lỗi khi cập nhật giáo viên:', error);
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
  async confirmDeleteTeacher({ dispatch }, teacherId) {
    const isConfirmed = await showDeleteConfirmation();
    if (isConfirmed) {
      await dispatch('deleteTeacher', teacherId);
      dispatch('fetchTeachers');
    }
  },
  showTeacherForm({ commit }) {
    commit('SET_SHOW_TEACHER_FORM', true);
  },
  closeTeacherForm({ commit }) {
    commit('SET_SHOW_TEACHER_FORM', false);
  },

};
