<template>
    <b-card :title="isEditing ? 'Sửa giáo viên' : 'Thêm giáo viên'">
      <b-form @submit.prevent="handleSubmit">
        <b-form-group label="Họ tên" label-for="ten">
          <b-form-input
            id="ten"
            v-model="teacher.ten"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group label="Ngày sinh" label-for="ngaySinh">
          <b-form-input
            id="ngaySinh"
            v-model="teacher.ngaySinh"
            type="date"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group label="Ảnh đại diện" label-for="avatar">
          <b-form-input
            id="avatar"
            v-model="teacher.avatar"
            placeholder="Nhập đường dẫn ảnh"
          ></b-form-input>
        </b-form-group>
  
        <b-form-group label="Chuyên môn" label-for="chuyenMon">
          <b-form-input
            id="chuyenMon"
            v-model="teacher.chuyenMon"
          ></b-form-input>
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
          <b-form-input
            id="diaChi"
            v-model="teacher.diaChi"
          ></b-form-input>
        </b-form-group>
  
        <b-form-group label="Số điện thoại" label-for="soDienThoai">
          <b-form-input
            id="soDienThoai"
            v-model="teacher.soDienThoai"
            type="tel"
          ></b-form-input>
        </b-form-group>
  
        <b-form-group label="Học sinh" label-for="hocSinh">
          <b-form-input
            id="hocSinh"
            v-model="teacher.hocSinh"
            placeholder="Nhập danh sách học sinh (ID cách nhau bằng dấu phẩy)"
          ></b-form-input>
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
          hocSinh: []
        })
      },
      isEditing: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        teacher: { ...this.teacherData },
        teacherOptions: []
      };
    },
    computed: {
      ...mapState('teacher', ['teachers'])
    },
    methods: {
      ...mapActions('teacher', ['addTeacher', 'updateTeacher']),
      async handleSubmit() {
        if (this.isEditing) {
          await this.updateTeacher(this.teacher);
        } else {
          await this.addTeacher(this.teacher);
        }
        this.$emit('save');
      },
      cancel() {
        this.$emit('cancel');
      }
    },
    watch: {
      teachers(newTeachers) {
        this.teacherOptions = newTeachers.map(teacher => ({
          value: teacher.id,
          text: teacher.ten
        }));
      }
    },
    created() {
      this.$store.dispatch('teacher/fetchTeachers');
    }
  };
  </script>
  
  <style scoped>
  </style>
  