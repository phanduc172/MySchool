<template>
  <b-card :title="isEditing ? 'Sửa học sinh' : 'Thêm học sinh'">
    <b-form @submit.prevent="handleSubmit">
      <b-form-group label="Họ tên" label-for="ten">
        <b-form-input
          id="ten"
          v-model="student.ten"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Ngày sinh" label-for="ngaySinh">
        <b-form-input
          id="ngaySinh"
          v-model="student.ngaySinh"
          type="date"
          :max="maxDate"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Lớp" label-for="lop">
        <b-form-input
          id="lop"
          v-model="student.lop"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Số điện thoại" label-for="soDienThoai">
        <b-form-input
          id="soDienThoai"
          v-model="student.soDienThoai"
          type="tel"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Giáo viên chủ nhiệm" label-for="giaoVienChuNhiem">
        <b-form-select
          id="giaoVienChuNhiem"
          v-model="student.giaoVienChuNhiem"
          :options="[
            { value: null, text: '-- Chọn giáo viên --', disabled: true },
            ...teacherOptions
          ]"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group>
        <b-button type="submit" variant="primary">
          {{ isEditing ? 'Cập nhật' : 'Thêm mới' }}
        </b-button>
        <b-button class="ml-3" @click="cancel" variant="secondary">
          Hủy
        </b-button>
      </b-form-group>
    </b-form>
  </b-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { getMaxDate } from '../common/utils'

export default {
  props: {
    studentData: {
      type: Object,
      default: () => ({
        ten: '',
        ngaySinh: '',
        lop: '',
        soDienThoai: '',
        giaoVienChuNhiem: null
      })
    },
    isEditing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      student: { ...this.studentData },
      teacherOptions: [],
      maxDate: getMaxDate()
    };
  },
  computed: {
    ...mapState('teacher', ['teachers'])
  },
  methods: {
    ...mapActions('student', ['addStudent', 'updateStudent']),
    async handleSubmit() {
      if (this.isEditing) {
        await this.updateStudent(this.student);
        this.$emit('update-success');
        this.$store.commit('student/SET_SHOW_FORM', false);
        this.$emit('cancel');
      } else {
        await this.addStudent(this.student);
      }
    },
    cancel() {
      this.$emit('cancel');
      this.$store.commit('student/SET_SHOW_FORM', false);
    }
  },
  watch: {
    // Giải thích lý do vì sao phải sử dụng watch ở đây
    teachers(newTeachers) {
      this.teacherOptions = newTeachers.map(teacher => ({
        value: teacher.id,
        text: teacher.ten
      }));
    },
  },
  created() {
    this.$store.dispatch('teacher/fetchTeachers');
  }
};
</script>
