<template>
  <div>
    <b-row v-if="showForm" class="mb-5">
      <b-col lg="12">
        <student-form
          :studentData="student"
          :isEditing="isEditing"
          @save="handleFormSave"
          @cancel="cancel"
        />
      </b-col>
    </b-row>
    <b-card title="Danh sách học sinh">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th style="width: 120px;">Họ tên</th>
              <th style="width: 80px;">Ngày sinh</th>
              <th style="width: 50px;">Lớp</th>
              <th style="width: 100px;">Số điện thoại</th>
              <th style="width: 120px;">Giáo viên chủ nhiệm</th>
              <th style="width: 20px;">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.id">
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
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import StudentForm from './StudentForm.vue';

export default {
  components: {
    StudentForm,
  },
  data() {
    return {
      student: {
        ten: '',
        ngaySinh: '',
        lop: '',
        soDienThoai: '',
        giaoVienChuNhiem: null
      },
      showForm: false,
      isEditing: false,
    };
  },
  computed: {
    ...mapState('student', ['students']),
  },
  methods: {
  ...mapActions('student', ['fetchStudents', 'confirmDeleteStudent', 'updateStudent', 'addStudent']),
    editStudent(student) {
      this.student = { ...student };
      this.isEditing = true;
      this.showForm = true;
    },
    handleFormSave() {
      console.log('Dữ liệu học sinh trước khi cập nhật:', this.student); 
      if (this.isEditing) {
        this.updateStudent(this.student);
      } else {
        this.addStudent(this.student);
      }
      this.fetchStudents();
      this.cancel();
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
