<template>
  <b-card title="Danh sách giáo viên">
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th style="width: 5%;">STT</th>
            <th>Ảnh đại diện</th>
            <th style="width: 200px">Họ tên</th>
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
          <tr v-for="(teacher, index) in paginatedTeachers" :key="teacher.id">
            <td class="text-center">{{ (currentPage - 1) * perPage + index + 1 }}</td>
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
                <b-button variant="info" @click="$emit('edit', teacher)">
                  <b-icon icon="pencil"></b-icon>
                </b-button>
                <b-button variant="danger" @click="handleDelete(teacher.id)">
                  <b-icon icon="trash"></b-icon>
                </b-button>
              </b-button-group>
            </td>
          </tr>
        </tbody>
      </table>
      <pagination
        :total="totalTeachers"
        :per-page="perPage"
        :current-page.sync="currentPage"
      />
    </div>
  </b-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Pagination from '../layout/Pagination.vue';

export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
    };
  },
  components: {
    Pagination,
  },
  computed: {
    ...mapState('teacher', ['teachers']),
    totalTeachers() {
      return this.teachers.length;
    },
    paginatedTeachers() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.teachers.slice(start, end);
    },
  },
  methods: {
    ...mapActions('teacher', ['fetchTeachers', 'confirmDeleteTeacher']),
    handleDelete(teacherId) {
      this.confirmDeleteTeacher(teacherId);
    },
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
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .table td {
    max-width: 150px;
  }

  .table td, .table th {
    word-break: break-word;
  }

  .table th {
    text-align: center;
    font-weight: bold;
  }

  .b-card {
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
  }

  .table {
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    background-color: #ffffff;
  }

  .table th, .table td {
    vertical-align: middle;
  }

  .table thead th {
    background-color: #2a99c1;
    color: #ffffff;
    font-weight: bold;
  }

  .table tbody tr {
    transition: background-color 0.2s ease;
  }

  .table tbody tr:hover {
    background-color: #f1f1f1;
  }

  .table td {
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
  }

  .table .text-center {
    text-align: center;
  }

  .b-button-group {
    display: flex;
    gap: 0.5rem;
  }

  .b-button {
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  .b-button-info {
    background-color: #17a2b8;
    border-color: #17a2b8;
  }

  .b-button-info:hover {
    background-color: #138496;
  }

  .b-button-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }

  .b-button-danger:hover {
    background-color: #c82333;
  }

  .pagination {
    margin-top: 1rem;
    justify-content: center;
  }
</style>
