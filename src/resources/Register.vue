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
import AuthForm from '@/components/auth/AuthForm.vue';
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
      this.$router.push('/login');
      showSuccessMessage('Đăng ký thành công!');
    },
  },
};
</script>
