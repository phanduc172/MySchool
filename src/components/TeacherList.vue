<template>
  <b-card title="Danh sách giáo viên">
    <b-table :items="teachers" :fields="fields" hover>
      <template v-slot:cell(avatar)="data">
        <b-img v-if="data.item.avatar" :src="`/${data.item.avatar}`" rounded="circle" width="50" height="50" />
        <span v-else>No Avatar</span>
      </template>
      <template v-slot:cell(actions)="data">
        <b-button-group>
          <b-button variant="info" @click="editTeacher(data.item)"><b-icon icon="pencil"></b-icon></b-button>
          <b-button variant="danger" @click="deleteTeacher(data.item.id)"><b-icon icon="trash"></b-icon></b-button>
        </b-button-group>
      </template>
    </b-table>
  </b-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('teacher', ['teachers']),
    fields() {
      return [
        { key: 'ten', label: 'Tên', thStyle: 'width: 150px;' },
        { key: 'ngaySinh', label: 'Ngày sinh', thStyle: 'width: 120px;' },
        { key: 'avatar', label: 'Ảnh đại diện', thStyle: 'width: 120px;' },
        { key: 'chuyenMon', label: 'Chuyên môn', thStyle: 'width: 120px;' },
        { key: 'lopPhuTrach', label: 'Lớp phụ trách', thStyle: 'width: 120px;' },
        { key: 'soNamKinhNghiem', label: 'Kinh nghiệm', thStyle: 'width: 120px;' },
        { key: 'diaChi', label: 'Địa chỉ', thStyle: 'width: 220px;' },
        { key: 'soDienThoai', label: 'Số điện thoại', thStyle: 'width: 120px;' },
        { key: 'actions', label: 'Hành động' }
      ];
    }
  },
  methods: {
    ...mapActions('teacher', ['fetchTeachers', 'deleteTeacher']),
    async editTeacher(teacher) {
      console.log('Edit teacher:', teacher);
      // Add logic to edit teacher
    }
  },
  created() {
    this.fetchTeachers();
  }
};
</script>

<style scoped>
/* Add custom styles here */
</style>
