import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/giao-vien';

export const teacherApi = {
  getTeachers: () => axios.get(API_BASE_URL),
  getTeacherById: (id) => axios.get(`${API_BASE_URL}/${id}`),
  createTeacher: (teacherData) => axios.post(API_BASE_URL, teacherData),
  updateTeacher: (id, teacherData) => axios.put(`${API_BASE_URL}/${id}`, teacherData),
  deleteTeacher: (id) => axios.delete(`${API_BASE_URL}/${id}`),
};
