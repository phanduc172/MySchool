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
      </b-col>ssss
    </b-row>
    <b-card title="Danh sách học sinh">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th style="width:5%">STT</th>
              <th style="width: 120px;">Họ tên</th>
              <th style="width: 80px;">Ngày sinh</th>
              <th style="width: 50px;">Lớp</th>
              <th style="width: 100px;">Số điện thoại</th>
              <th style="width: 100px;">Giáo viên chủ nhiệm</th>
              <th style="width: 20px;">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student, index) in paginatedStudents" :key="index">
              <td class="text-center">{{ index++ }}</td>
              <td>{{ student.ten }}</td>
              <td class="text-center">{{ student.ngaySinh }}</td>
              <td class="text-center">{{ student.lop }}</td>
              <td class="text-center">{{ student.soDienThoai }}</td>
              <td>{{ student.giaoVienChuNhiem }}</td>
              <td class="text-center">
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
}
</style>
