<template>
  <b-container class="my-4" fluid style="padding-top: 45px;">
    <b-row>
      <b-col lg="12" v-if="!showTeacherForm">
        <div class="d-flex justify-content-between mb-3">
          <input
            type="text"
            v-model="searchQuery"
            @input="searchTeachers"
            placeholder="Tìm kiếm giáo viên theo tên..."
          />
          <b-button @click="showForm" variant="primary">
            Thêm
          </b-button>
        </div>
      </b-col>
    </b-row>
    <b-row v-if="showTeacherForm">
      <b-col lg="12">
        <teacher-form
          :isEditing="isEditing"
          :teacherData="selectedTeacher"
          @save="handleSave"
          @cancel="closeForm"
        />
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col lg="12">
        <teacher-list @edit="editTeacher" @delete="handleDelete" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TeacherList from '../components/teacher/TeacherList.vue';
import TeacherForm from '../components/teacher/TeacherForm.vue';
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      isEditing: false,
      selectedTeacher: null,
      searchQuery: '',
    };
  },
  components: {
    TeacherList,
    TeacherForm,
  },
  computed: {
    ...mapState('teacher', ['teachers','showTeacherForm']),
  },
  methods: {
    ...mapActions('teacher', ['fetchTeachers', 'confirmDeleteTeacher', 'addTeacher', 'updateTeacher', 'searchTeachers', 'closeTeacherForm']),
    
    showForm() {
      this.$router.push('/manager/teacher/create');
      this.$store.commit('teacher/SET_SHOW_TEACHER_FORM', true);
      this.isEditing = false;
      this.selectedTeacher = null;
    },

    async searchTeachers() {
      console.log("Searching for:", this.searchQuery);
      await this.$store.dispatch("teacher/searchTeachers", {
        ten: this.searchQuery
      });
    },
    
    async handleSave() {
      await this.fetchTeachers();
      this.closeForm();
    },

    closeForm() {
      this.$store.commit('teacher/SET_SHOW_TEACHER_FORM', false);
      this.isEditing = false;
      this.selectedTeacher = null;
      this.$router.push('/manager/teacher');
    },

    editTeacher(teacher) {
      this.$store.commit('teacher/SET_SHOW_TEACHER_FORM', true);
      this.isEditing = true;
      this.selectedTeacher = teacher;
    },

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