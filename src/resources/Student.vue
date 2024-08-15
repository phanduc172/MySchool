<template>
  <b-container class="my-4" fluid style="padding-top: 45px;">
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
    <b-row>
      <b-col lg="12">
        <div class="d-flex justify-content-end mb-3">
          <b-button @click="showAddForm" v-show="!showBtnAdd" variant="primary">Thêm</b-button>
        </div>
        <student-list />
      </b-col>
    </b-row>
  </b-container>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';
import StudentList from '../components/student/StudentList.vue';
import StudentForm from '../components/student/StudentForm.vue';

export default {
  components: {
    StudentList,
    StudentForm
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
      isEditing: false,
      selectedStudentId: null,
      teacherOptions: []
    };
  },
  computed: {
    ...mapState('student', ['students','showBtnAdd','showForm']),
    ...mapState('teacher', ['teachers'])
  },
  methods: {
    ...mapActions('student', ['addStudent', 'fetchStudents', 'confirmDeleteStudent']),
    cancel() {
      this.$store.commit('student/SET_SHOW_FORM', false);
      this.$store.commit('student/SET_SHOW_BTN_ADD', false);
      this.student = {
        ten: '',
        ngaySinh: '',
        lop: '',
        soDienThoai: '',
        giaoVienChuNhiem: null 
      };
    },
    showAddForm() {
      this.$store.commit('student/SET_SHOW_FORM', true);
      this.$store.commit('student/SET_SHOW_BTN_ADD', true);
    },
  },
  created() {
    this.fetchStudents();
    this.$store.dispatch('teacher/fetchTeachers').then(() => {
      this.teacherOptions = this.teachers.map(teacher => ({
        value: teacher.id,
        text: teacher.ten
      }));
    });
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
