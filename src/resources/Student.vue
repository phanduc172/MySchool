<template>
  <b-container class="my-4" fluid style="padding-top: 45px">
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
    <b-row v-if="!showForm">
      <b-col lg="12">
        <div class="d-flex justify-content-between mb-3">
          <input
            type="text"
            v-model="search"
            @input="searchStudents"
            placeholder="Tìm kiếm học sinh..."
            v-show="!showBtnAdd"
          />
          <b-button @click="showAddForm" v-show="!showBtnAdd" variant="primary">
            Thêm
          </b-button>
        </div>
      </b-col>
    </b-row>
    <student-list :students="filteredStudents" v-show="!showForm" />
  </b-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import StudentList from "../components/student/StudentList.vue";
import StudentForm from "../components/student/StudentForm.vue";

export default {
  components: {
    StudentList,
    StudentForm,
  },
  data() {
    return {
      student: {
        ten: "",
        ngaySinh: "",
        lop: "",
        soDienThoai: "",
        giaoVienChuNhiem: null,
      },
      isEditing: false,
      selectedStudentId: null,
      teacherOptions: [],
      search: "",
    };
  },
  computed: {
    ...mapState("student", ["showBtnAdd", "showForm"]),
    ...mapGetters("student", ["filteredStudents"]),
    ...mapState("teacher", ["teachers"]),
  },
  methods: {
    ...mapActions("student", [
      "addStudent",
      "fetchStudents",
      "confirmDeleteStudent",
      "handleFormSave",
      "searchStudents",
    ]),
    cancel() {
      this.$store.commit("student/SET_SHOW_FORM", false);
      this.$store.commit("student/SET_SHOW_BTN_ADD", false);
      this.$store.commit("student/RESET_FORM");
      this.$router.push('/manager/student');
    },
    showAddForm() {
      this.$router.push('/manager/student/create');
      this.$store.commit("student/SET_SHOW_FORM", true);
      this.$store.commit("student/SET_SHOW_BTN_ADD", true);
    },
    searchStudents() {
      this.$store.dispatch("student/searchStudents", {
        ten: this.search,
        sodienthoai: "",
      });
    },
  },
  created() {
    this.fetchStudents();
    this.$store.dispatch("teacher/fetchTeachers").then(() => {
      this.teacherOptions = this.teachers.map((teacher) => ({
        value: teacher.id,
        text: teacher.ten,
      }));
    });
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

  .table td,
  .table th {
    white-space: nowrap;
  }


  input[type="text"] {
    width: 50%;
    border-radius: 0.375rem;
    border: 1px solid #ced4da;
    padding: 0.5rem 1rem; 
    font-size: 1rem;
    transition: border-color 0.2s ease;
  }

  input[type="text"]:focus {
    border-color: #007bff;
    outline: none;
  }

  .b-button {
    border-radius: 0.375rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
  }

  .b-button:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .d-flex {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 0.375rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
  }
</style>
