import axios from 'axios';
import { API_ENDPOINTS } from '@/api/api';
import { studentApi } from '@/api/student.js';
import { showDeleteConfirmation, showSuccessMessage } from '@/store/ui/ConfirmDelete';

export default {
  async fetchStudents({ commit }) {
    try {
      const response = await studentApi.getStudents();
      commit('SET_STUDENTS', response.data);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
    }
  },

  async addStudent({ commit, dispatch }, student) {
    try {
      await studentApi.createStudent(student);
      showSuccessMessage('Thêm học sinh thành công!');
      commit('SET_SHOW_FORM', false);
      commit('SET_SHOW_BTN_ADD', false);
      dispatch('fetchStudents');
    } catch (error) {
      console.error('Lỗi khi thêm học sinh:', error);
    }
  },

  async updateStudent({ commit, dispatch }, student) {
    try {
      await studentApi.updateStudent(student.id, student);
      showSuccessMessage('Cập nhật học sinh thành công!');
      commit('SET_SHOW_FORM', false);
      commit('SET_SHOW_BTN_ADD', false);
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
  async searchStudents({ commit }, { ten = '', sodienthoai = '' }) {
    try {
      const response = await axios.get(`${API_ENDPOINTS.HOC_SINH}?ten=${ten}&soDienThoai=${sodienthoai}`);
      commit('SET_STUDENTS', response.data);
    } catch (error) {
      console.error('Lỗi khi tìm kiếm học sinh:', error);
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
