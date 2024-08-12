<template>
  <div>
    <b-card title="Danh sách học sinh">
      <b-table :items="students" :fields="fields" hover>
        <template v-slot:cell(avatar)="data">
          <b-img :src="data.item.avatar" rounded="circle" width="50" height="50"></b-img>
        </template>
        <template v-slot:cell(actions)="data">
          <b-button-group>
            <b-button variant="info" @click="editStudent(data.item)"><b-icon icon="pencil"></b-icon></b-button>
            <b-button variant="danger" @click="deleteStudent(data.item)"> <b-icon icon="trash"></b-icon></b-button>
          </b-button-group>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      students: [],
      fields: [
        { key: 'ten', label: 'Tên' },
        { key: 'ngaySinh', label: 'Ngày sinh' },
        { key: 'lop', label: 'Lớp' },
        { key: 'soDienThoai', label: 'Số điện thoại' },
        { key: 'giaoVienChuNhiem', label: 'Giáo viên chủ nhiệm' },
        { key: 'actions', label: 'Hành động' }
      ]
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/hoc-sinh');
        this.students = response.data;
        // console.log("Dữ liệu học sinh:", this.students)
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
