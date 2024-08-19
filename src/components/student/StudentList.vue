<template>
  <div>
    <b-row v-if="showForm" class="mb-5">
      <b-col lg="12">
        <student-form
          :studentData="student"
          :isEditing="isEditing"
          @update-success="handleUpdateSuccess"
          @cancel="cancel"
        />
      </b-col>
    </b-row>
    <b-card title="Danh sách học sinh">
      <div class="table-responsive m-0">
        <table class="table table-striped">
          <thead>
            <tr>
              <th style="width:5%">STT</th>
              <th>Họ tên</th>
              <th>Ngày sinh</th>
              <th>Lớp</th>
              <th >Số điện thoại</th>
              <th >Giáo viên chủ nhiệm</th>
              <th >Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student, index) in paginatedStudents" :key="index">
              <td class="text-center">{{ index+1 }}</td>
              <td style="width: 120px;">{{ student.ten }}</td>
              <td style="width: 80px;" class="text-center">{{ student.ngaySinh }}</td>
              <td  style="width: 50px;" class="text-center">{{ student.lop }}</td>
              <td style="width: 100px;" class="text-center">{{ student.soDienThoai }}</td>
              <td style="width: 100px;">{{ student.giaoVienChuNhiem }}</td>
              <td style="width: 20px;" class="text-center">
                <b-button-group>
                  <b-button variant="info" @click="editStudent(student)">
                    <b-icon icon="pencil"></b-icon>
                  </b-button>
                  <b-button variant="danger" @click="confirmDeleteStudent(student.id)">
                    <b-icon icon="trash"></b-icon>
                  </b-button>
                </b-button-group>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination
          :total="totalStudents"
          :per-page="perPage"
          :current-page.sync="currentPage"
        />
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import StudentForm from './StudentForm.vue';
import Pagination from '../layout/Pagination.vue';

export default {
  components: {
    StudentForm,
    Pagination,
  },
  data() {
    return {
      student: {
        ten: null,
        ngaySinh: '',
        lop: '',
        soDienThoai: '',
        giaoVienChuNhiem: null
      },
      showForm: false,
      isEditing: false,
      perPage: 10,
      currentPage: 1
    };
  },
  computed: {
    ...mapState('student', ['students']),
    totalStudents() {
      return this.students.length;
    },
    paginatedStudents() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.students.slice(start, end);
    }
  },
  methods: {
    ...mapActions('student', ['fetchStudents', 'confirmDeleteStudent', 'updateStudent', 'addStudent']),
    editStudent(student) {
      this.student = { ...student };
      this.isEditing = true;
      this.showForm = true;
      this.$store.commit('student/SET_SHOW_BTN_ADD', true);
      this.$nextTick(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },
    cancel() {
      this.showForm = false;
      this.isEditing = false;
      this.student = {
        ten: '',
        ngaySinh: '',
        lop: '',
        soDienThoai: '',
        giaoVienChuNhiem: null
      };
      this.$store.commit('student/SET_SHOW_BTN_ADD', false);
    },
    handleUpdateSuccess() {
      this.showForm = false;
      this.isEditing = false;
      this.fetchStudents();
    }
  },
  created() {
    this.fetchStudents(); 
  }
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

