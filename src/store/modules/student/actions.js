import axios from 'axios';
import { API_ENDPOINTS } from '@/api/api';
import { studentApi } from '@/api/student.js';
import { showDeleteConfirmation, showSuccessMessage } from '@/store/ui/ConfirmDelete';

export default {
  async fetchStudents({ commit }) {
    try {
      const response = await studentApi.getStudents();
      const reversedData = response.data.reverse();
      commit('SET_STUDENTS', reversedData);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  },

  async addStudent({ commit, dispatch }, student) {
    try {
      await studentApi.createStudent(student);
      showSuccessMessage('Thêm học sinh thành công!');
      commit('SET_SHOW_FORM', false);
      dispatch('fetchStudents');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  },

  async updateStudent({ commit, dispatch }, student) {
    try {
      await studentApi.updateStudent(student.id, student);
      showSuccessMessage('Cập nhật học sinh thành công!');
      commit('SET_SHOW_FORM', false);
      dispatch('fetchStudents');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  },
   
  async deleteStudent({ commit }, studentId) {
    try {
      await axios.delete(`${API_ENDPOINTS.HOC_SINH}/${studentId}`);
      commit('REMOVE_STUDENT', studentId);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  },

  async confirmDeleteStudent({ dispatch }, studentId) {
    try {
      const isConfirmed = await showDeleteConfirmation();
      if (isConfirmed) {
        await dispatch('deleteStudent', studentId);
        showSuccessMessage('Xóa học sinh thành công!');
      }
    } catch (error) {
      console.error('Error confirming delete:', error);
    }
  },

  async searchStudents({ commit }, { ten = '', sodienthoai = '' }) {
    try {
      const params = {};
      if (ten) params.ten = ten;
      if (sodienthoai) params.soDienThoai = sodienthoai;
      
      const response = await axios.get(`${API_ENDPOINTS.HOC_SINH}`, { params });
      commit('SET_STUDENTS', response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  },

  showStudentForm({ commit }) {
    commit('SET_SHOW_FORM', true);
  },

  closeStudentForm({ commit }) {
    commit('SET_SHOW_FORM', false);
  },
};
