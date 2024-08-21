import axios from 'axios';
import { API_ENDPOINTS } from '@/api/api';
import { showDeleteConfirmation, showSuccessMessage } from '@/store/ui/ConfirmDelete';

export default {
  async fetchUsers({ commit }) {
      const response = await axios.get(API_ENDPOINTS.NGUOI_DUNG);
      commit('SET_USERS', response.data);
  },
  async deleteUser({ commit }, userId) {
      await axios.delete(`${API_ENDPOINTS.NGUOI_DUNG}/${userId}`);
      commit('REMOVE_USER', userId);
  },
  async confirmDeleteUser({ dispatch }, userId) {
    const isConfirmed = await showDeleteConfirmation();
    if (isConfirmed) {
        await dispatch('deleteUser', userId);
        showSuccessMessage();
        dispatch('fetchUsers');
    }
  },
};
