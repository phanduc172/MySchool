<template>
  <b-card title="Danh sách giáo viên">
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Ảnh đại diện</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Chuyên môn</th>
            <th>Lớp phụ trách</th>
            <th>Kinh nghiệm</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="teacher in teachers" :key="teacher.id">
            <td class="text-center">
              <b-img v-if="teacher.avatar" :src="`/${teacher.avatar}`" rounded="circle" style="width: 50px;" />
              <span v-else>No Avatar</span>
            </td>
            <td>{{ teacher.ten }}</td>
            <td class="text-center">{{ teacher.ngaySinh }}</td>
            <td class="text-center">{{ teacher.chuyenMon }}</td>
            <td class="text-center">{{ teacher.lopPhuTrach }}</td>
            <td class="text-center">{{ teacher.soNamKinhNghiem }}</td>
            <td>{{ teacher.diaChi }}</td>
            <td class="text-center">{{ teacher.soDienThoai }}</td>
            <td class="text-center">
              <b-button-group>
                <b-button variant="info" @click="() => editTeacher(teacher)">
                  <b-icon icon="pencil"></b-icon>
                </b-button>
                <b-button variant="danger" @click="() => confirmDeleteTeacher(teacher.id)">
                  <b-icon icon="trash"></b-icon>
                </b-button>
              </b-button-group>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </b-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('teacher', ['teachers']),
  },
  methods: {
    ...mapActions('teacher', ['fetchTeachers', 'editTeacher', 'confirmDeleteTeacher']),
  },
  created() {
    this.fetchTeachers();
  },
};
</script>

<style scoped>
.table th {
  text-align: center;
  font-weight: bold;
}

.table-responsive {
  overflow-x: auto;
}

.table td, .table th {
  white-space: nowrap;
}
</style>
