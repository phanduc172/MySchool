import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const adminApi = {
  getTeachers: () => axios.get(`${API_BASE_URL}/giao-vien`),
  getStudents: () => axios.get(`${API_BASE_URL}/hoc-sinh`),
  createTeacher: (teacherData) => axios.post(`${API_BASE_URL}/giao-vien`, teacherData),
  createStudent: (studentData) => axios.post(`${API_BASE_URL}/hoc-sinh`, studentData),
  updateTeacher: (id, teacherData) => axios.put(`${API_BASE_URL}/giao-vien/${id}`, teacherData),
  updateStudent: (id, studentData) => axios.put(`${API_BASE_URL}/hoc-sinh/${id}`, studentData),
  deleteTeacher: (id) => axios.delete(`${API_BASE_URL}/giao-vien/${id}`),
  deleteStudent: (id) => axios.delete(`${API_BASE_URL}/hoc-sinh/${id}`),
};
