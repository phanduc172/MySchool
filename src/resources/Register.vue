<template>
  <AuthForm
    title="Đăng ký"
    buttonText="Đăng ký"
    :showConfirmPassword="true"
    :showUsername="true"
    :showBirthdate="true"
    @submit="onSubmitRegister"
  />
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';
import { mapActions } from 'vuex';
import { showErrorMessage, showSuccessMessage } from '@/store/ui/ConfirmDelete';

export default {
  components: { AuthForm },
  methods: {
    ...mapActions('auth', ['registerUser']),
    async onSubmitRegister({ username, birthdate, account, password, confirmPassword }) {
      if (password !== confirmPassword) {
        showErrorMessage('Mật khẩu không khớp!');
        return;
      }
      try {
        await this.registerUser({
          tenTaiKhoan: account,
          matKhau: password,
          vaiTro: 'student',
          hoSo: {
            hoTen: username,
            ngaySinh: birthdate,
            avatar: 'avatar.jpg',
          },
        });
        this.$router.push('/dashboard');
        showSuccessMessage('Đăng ký thành công!');
      } catch (error) {
        showErrorMessage('Đăng ký thất bại! Vui lòng thử lại.');
      }
    },
  },
};
</script>
