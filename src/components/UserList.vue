<template>
    <b-card title="Danh sách người dùng">
      <b-table :items="users" :fields="fields" hover>
        <template v-slot:cell(avatar)="data">
          <b-img v-if="data.item.hoSo.avatar" :src="`/${data.item.hoSo.avatar}`" rounded="circle" width="50" height="50" />
          <span v-else>No Avatar</span>
        </template>
        <template v-slot:cell(actions)="data">
          <b-button-group>
            <b-button variant="info" @click="editUser(data.item)"><b-icon icon="pencil"></b-icon></b-button>
            <b-button variant="danger" @click="deleteUser(data.item)"><b-icon icon="trash"></b-icon></b-button>
          </b-button-group>
        </template>
      </b-table>
    </b-card>
  </template>
  
  <script>
  import axios from 'axios';
  import { API_ENDPOINTS } from '@/api/api';
  
  export default {
    data() {
      return {
        users: [],
        fields: [
          { key: 'tenTaiKhoan', label: 'Tài khoản' },
          { key: 'hoSo.hoTen', label: 'Tên' },
          { key: 'hoSo.ngaySinh', label: 'Ngày Sinh' },
          { key: 'hoSo.avatar', label: 'Ảnh đại diện' },
          { key: 'vaiTro', label: 'Vai trò' },
          { key: 'actions', label: 'Hành động' },
        ]
      };
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get(API_ENDPOINTS.NGUOI_DUNG);
          this.users = response.data;
          // console.log("Dữ liệu người dùng:", this.users);
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu:", error);
        }
      },
      editUser(user) {
        // Xử lý chỉnh sửa người dùng
      },
      deleteUser(user) {
        // Xử lý xóa người dùng
      }
    },
    created() {
      this.fetchData();
    }
  };
  </script>
  
  <style scoped>
  /* Thêm các kiểu CSS tùy chỉnh ở đây nếu cần */
  </style>
  