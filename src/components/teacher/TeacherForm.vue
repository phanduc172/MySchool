<template>
  <b-card :title="isEditing ? 'Sửa giáo viên' : 'Thêm giáo viên'" class="form-container">
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
        <b-form-select
          id="chuyenMon"
          v-model="teacher.chuyenMon"
          :options="specialtyOptions"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Lớp phụ trách" label-for="lopPhuTrach">
        <b-form-select
          id="lopPhuTrach"
          v-model="teacher.lopPhuTrach"
          :options="classOptions"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Số năm kinh nghiệm" label-for="soNamKinhNghiem">
        <b-form-input
          id="soNamKinhNghiem"
          v-model="teacher.soNamKinhNghiem"
          type="number"
          min="0"
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
      classes: [],
      specialties: [],
      teacher: { ...this.teacherData },
      maxDate: getMaxDate(),
    };
  },
  computed: {
    ...mapState('teacher', ['teachers']),
    classOptions() {
      return this.classes.map(lop => ({
        value: lop.tenLop,
        text: lop.tenLop
      }));
    },
    specialtyOptions() {
      return this.specialties.map(mon => ({
        value: mon.tenChuyenMon,
        text: mon.tenChuyenMon
      }));
    },
  },
  methods: {
    ...mapActions('teacher', ['addTeacher', 'updateTeacher']),
    async fetchClasses() {
      const response = await fetch('http://localhost:3000/api/lop-hoc');
      const data = await response.json();
      this.classes = data;
    },
    async fetchSpecialties() {
      const response = await fetch('http://localhost:3000/api/chuyen-mon');
      const data = await response.json();
      this.specialties = data;
    },
    async handleSubmit() {
      if (this.isEditing) {
        await this.updateTeacher(this.teacher);
        this.$store.commit('teacher/SET_SHOW_TEACHER_FORM', false);
      } else {
        await this.addTeacher(this.teacher);
        this.$store.commit('teacher/SET_SHOW_TEACHER_FORM', false);
      }
      this.$emit('save');
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
    this.fetchClasses();
    this.fetchSpecialties();
  },
};
</script>