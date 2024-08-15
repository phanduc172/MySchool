import axios from 'axios';
import { API_ENDPOINTS } from '@/api/api';
import { showDeleteConfirmation, showSuccessMessage } from '@/store/ui/ConfirmDelete';

export default {
  async fetchUsers({ commit }) {
    try {
      const response = await axios.get(API_ENDPOINTS.NGUOI_DUNG);
      commit('SET_USERS', response.data);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu người dùng:', error);
    }
  },
  async deleteUser({ commit }, userId) {
    try {
      await axios.delete(`${API_ENDPOINTS.NGUOI_DUNG}/${userId}`);
      commit('REMOVE_USER', userId);
    } catch (error) {
      console.error('Lỗi khi xóa người dùng:', error);
    }
  },
  async confirmDeleteUser({ dispatch }, userId) {
    const isConfirmed = await showDeleteConfirmation();

    if (isConfirmed) {
      try {
        await dispatch('deleteUser', userId);
        showSuccessMessage();
        dispatch('fetchUsers');
      } catch (error) {
        console.error('Lỗi khi xóa người dùng:', error);
      }
    }
  },
};
