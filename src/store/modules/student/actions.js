import axios from 'axios';
import { API_ENDPOINTS } from '@/api/api';
import { studentApi } from '@/api/student.js';
import { showDeleteConfirmation, showSuccessMessage } from '@/store/ui/ConfirmDelete';

export default {
  async fetchStudents({ commit }) {
    const response = await studentApi.getStudents();
    const reversedData = response.data.reverse();
    commit('SET_STUDENTS', reversedData);
  },


  async addStudent({ commit, dispatch }, student) {
      await studentApi.createStudent(student);
      showSuccessMessage('Thêm học sinh thành công!');
      commit('SET_SHOW_FORM', false);
      commit('SET_SHOW_BTN_ADD', false);
      dispatch('fetchStudents');
  },

  async updateStudent({ commit, dispatch }, student) {
      await studentApi.updateStudent(student.id, student);
      showSuccessMessage('Cập nhật học sinh thành công!');
      commit('SET_SHOW_FORM', false);
      commit('SET_SHOW_BTN_ADD', false);
      dispatch('fetchStudents');
  },
   
  async deleteStudent({ commit }, studentId) {
      await axios.delete(`${API_ENDPOINTS.HOC_SINH}/${studentId}`);
      commit('REMOVE_STUDENT', studentId);
  },

  async confirmDeleteStudent({ dispatch }, studentId) {
    const isConfirmed = await showDeleteConfirmation();

    if (isConfirmed) {
        await dispatch('deleteStudent', studentId);
        showSuccessMessage('Xóa học sinh thành công!');
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

  handleFormSave() {
    if (this.isEditing) {
      this.updateStudent(this.student);
    } else {
      this.addStudent(this.student);
    }
    this.fetchStudents();
    this.cancel();  
  },
};
