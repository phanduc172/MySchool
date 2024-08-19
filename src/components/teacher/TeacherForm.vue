<template>
  <b-card :title="isEditing ? 'Sửa giáo viên' : 'Thêm giáo viên'">
    <b-form @submit.prevent="handleSubmit">
      <b-form-group label="Họ tên" label-for="ten">
        <b-form-input id="ten" v-model="teacher.ten" required></b-form-input>
      </b-form-group>

      <b-form-group label="Ngày sinh" label-for="ngaySinh">
        <b-form-input
          id="ngaySinh"
          v-model="teacher.ngaySinh"
          type="date"
          :max="maxDate"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Chuyên môn" label-for="chuyenMon">
        <b-form-input id="chuyenMon" v-model="teacher.chuyenMon"></b-form-input>
      </b-form-group>

      <b-form-group label="Lớp phụ trách" label-for="lopPhuTrach">
        <b-form-input
          id="lopPhuTrach"
          v-model="teacher.lopPhuTrach"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Số năm kinh nghiệm" label-for="soNamKinhNghiem">
        <b-form-input
          id="soNamKinhNghiem"
          v-model="teacher.soNamKinhNghiem"
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Địa chỉ" label-for="diaChi">
        <b-form-input id="diaChi" v-model="teacher.diaChi"></b-form-input>
      </b-form-group>

      <b-form-group label="Số điện thoại" label-for="soDienThoai">
        <b-form-input
          id="soDienThoai"
          v-model="teacher.soDienThoai"
          type="tel"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-button type="submit" variant="primary">
          {{ isEditing ? "Cập nhật" : "Thêm" }}
        </b-button>
        <b-button class="ml-3" @click="cancel" variant="secondary">Hủy</b-button>
      </b-form-group>
    </b-form>
  </b-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { getMaxDate } from '../common/utils';

export default {
  props: {
    teacherData: {
      type: Object,
      default: () => ({
        ten: '',
        ngaySinh: '',
        avatar: '',
        chuyenMon: '',
        lopPhuTrach: '',
        soNamKinhNghiem: '',
        diaChi: '',
        soDienThoai: '',
        hocSinh: [],
      }),
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      teacher: { ...this.teacherData },
      maxDate: getMaxDate(),
    };
  },
  computed: {
    ...mapState('teacher', ['teachers']),
  },
  methods: {
    ...mapActions('teacher', ['addTeacher', 'updateTeacher']),
    
    async handleSubmit() {
      try {
        if (this.isEditing) {
          await this.updateTeacher(this.teacher);
          this.$store.commit('teacher/SET_SHOW_TEACHER_FORM', false);
        } else {
          await this.addTeacher(this.teacher);
          this.$store.commit('teacher/SET_SHOW_TEACHER_FORM', false);
        }
        this.$emit('save');
      } catch (error) {
        console.error('Lỗi khi lưu giáo viên:', error);
      }
    },
    cancel() {
      this.$store.commit('teacher/SET_SHOW_TEACHER_FORM', false);
      this.$emit('cancel');
    },
  },
  watch: {
    teacherData(newTeacherData) {
      this.teacher = { ...newTeacherData };
    },
  },
  created() {
    this.maxDate = getMaxDate();
  },
};
</script>

<style scoped>
/* Các kiểu CSS cụ thể cho form nếu cần */
</style>
