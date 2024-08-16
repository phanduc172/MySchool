import axios from 'axios';
import { API_ENDPOINTS } from './api';

const API_BASE_URL = API_ENDPOINTS.HOC_SINH;

export const studentApi = {
  getStudents: () => axios.get(API_BASE_URL),
  getStudentById: (id) => axios.get(`${API_BASE_URL}/${id}`),
  createStudent: (studentData) => axios.post(API_BASE_URL, studentData),
  updateStudent: (id, studentData) => axios.put(`${API_BASE_URL}/${id}`, studentData),
  deleteStudent: (id) => axios.delete(`${API_BASE_URL}/${id}`),
};
