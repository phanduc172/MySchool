<template>
  <AuthForm
    title="Đăng ký"
    buttonText="Đăng ký"
    :showConfirmPassword="true"
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
    async onSubmitRegister({ account, password, confirmPassword }) {
      if (password !== confirmPassword) {
        showErrorMessage()
        return;
      }
      try {
        await this.registerUser({
          tenTaiKhoan: account,
          matKhau: password,
          vaiTro: 'student',
          avatar: 'user-avatar.jpg'
        });
        this.$router.push('/dashboard');
        showSuccessMessage()
      } catch (error) {
        showErrorMessage('Đăng ký thất bại! Vui lòng thử lại.')
      }
    },
  },
};
</script>
