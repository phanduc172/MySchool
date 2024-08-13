<template>
  <b-card title="Danh sách giáo viên">
    <b-table :items="teachers" :fields="fields" hover>
      <template v-slot:cell(avatar)="data">
        <b-img v-if="data.item.avatar" :src="`/${data.item.avatar}`" rounded="circle" width="50" height="50" />
        <span v-else>No Avatar</span>
      </template>
      <template v-slot:cell(actions)="data">
          <b-button-group>
            <b-button variant="info" @click="editStudent(data.item)"><b-icon icon="pencil"></b-icon></b-button>
            <b-button variant="danger" @click="deleteStudent(data.item)"> <b-icon icon="trash"></b-icon></b-button>
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
      teachers: [],
      fields: [
        { key: 'ten', label: 'Tên' },
        { key: 'ngaySinh', label: 'Ngày Sinh' },
        { key: 'avatar', label: 'Ảnh đại diện' },
        { key: 'chuyenMon', label: 'Chuyên Môn' },
        { key: 'lopPhuTrach', label: 'Lớp Phụ Trách' },
        { key: 'soNamKinhNghiem', label: 'Số Năm Kinh Nghiệm' },
        { key: 'diaChi', label: 'Địa Chỉ' },
        { key: 'soDienThoai', label: 'Số Điện Thoại' },
        { key: 'actions', label: 'Hành động' },
      ]
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(API_ENDPOINTS.GIAO_VIEN);
        this.teachers = response.data;
        // console.log("Dữ liệu giáo viên:", this.teachers)
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>

</style>
