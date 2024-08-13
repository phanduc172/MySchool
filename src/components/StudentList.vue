<template>
  <div>
    <b-card title="Danh sách học sinh">
      <b-table :items="students" :fields="fields" hover>
        <template v-slot:cell(actions)="data">
          <b-button-group>
            <b-button variant="info" @click="editStudent(data.item)"><b-icon icon="pencil"></b-icon></b-button>
            <b-button variant="danger" @click="deleteStudent(data.item.id)"> <b-icon icon="trash"></b-icon></b-button>
          </b-button-group>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('student', ['students']),
    fields() {
      return [
        { key: 'ten', label: 'Tên' },
        { key: 'ngaySinh', label: 'Ngày sinh' },
        { key: 'lop', label: 'Lớp' },
        { key: 'soDienThoai', label: 'Số điện thoại' },
        { key: 'giaoVienChuNhiem', label: 'Giáo viên chủ nhiệm' },
        { key: 'actions', label: 'Hành động' }
      ];
    }
  },
  methods: {
    ...mapActions('student', ['fetchStudents', 'deleteStudent']),
    async editStudent(student) {
      console.log('Edit student:', student);
    }
  },
  created() {
    this.fetchStudents();
  }
};
</script>
