import axios from 'axios';
import { API_ENDPOINTS } from '@/api/api';
import { showDeleteConfirmation, showSuccessMessage } from '@/store/ui/ConfirmDelete';

export default {
  async fetchTeachers({ commit }) {
    const response = await axios.get(API_ENDPOINTS.GIAO_VIEN);
    const reversedData = response.data.reverse();
    commit('SET_TEACHERS', reversedData);
  },

  async addTeacher({ commit }, teacher) {
    const response = await axios.post(API_ENDPOINTS.GIAO_VIEN, teacher);
    showSuccessMessage();
    commit('ADD_TEACHER', response.data);
  },
  async updateTeacher({ commit }, teacher) {
      const response = await axios.put(`${API_ENDPOINTS.GIAO_VIEN}/${teacher.id}`, teacher);
      commit('UPDATE_TEACHER', response.data);
      showSuccessMessage();
  },
  async deleteTeacher({ commit }, teacherId) {
    await axios.delete(`${API_ENDPOINTS.GIAO_VIEN}/${teacherId}`);
    commit('REMOVE_TEACHER', teacherId);
  },
  async confirmDeleteTeacher({ dispatch }, teacherId) {
    const isConfirmed = await showDeleteConfirmation();
    if (isConfirmed) {
      await dispatch('deleteTeacher', teacherId);
      showSuccessMessage();
      dispatch('fetchTeachers');
    }
  },

  async searchTeachers({ commit }, { ten = '' }) {
    const params = {};
    if (ten) params.ten = ten;
    const response = await axios.get(`${API_ENDPOINTS.GIAO_VIEN}`, { params });
    console.log('API response:', response);
    commit('SET_TEACHERS', response.data);
  },
  

  showTeacherForm({ commit }) {
    commit('SET_SHOW_TEACHER_FORM', true);
  },
  
  closeTeacherForm({ commit }) {
    commit('SET_SHOW_TEACHER_FORM', false);
  },

};
