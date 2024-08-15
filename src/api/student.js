import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/hoc-sinh';

export const studentApi = {
  getStudents: () => axios.get(API_BASE_URL),
  getStudentById: (id) => axios.get(`${API_BASE_URL}/${id}`),
  createStudent: (studentData) => axios.post(API_BASE_URL, studentData),
  updateStudent: (id, studentData) => axios.put(`${API_BASE_URL}/${id}`, studentData),
  deleteStudent: (id) => axios.delete(`${API_BASE_URL}/${id}`),
};
