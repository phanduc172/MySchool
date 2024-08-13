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

export default {
  components: { AuthForm },
  methods: {
    ...mapActions('auth', ['registerUser']),
    async onSubmitRegister({ account, password, confirmPassword }) {
      if (password !== confirmPassword) {
        alert("Mật khẩu không trùng khớp!");
        return;
      }
      try {
        await this.registerUser({
          tenTaiKhoan: account,
          matKhau: password,
          vaiTro: 'student',
        });
        this.$router.push('/dashboard');
        alert("Đăng ký thành công!");
      } catch (error) {
        alert("Đăng ký thất bại! Vui lòng thử lại.");
      }
    },
  },
};
</script>
