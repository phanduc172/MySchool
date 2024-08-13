<template>
  <AuthForm
    title="Đăng nhập"
    buttonText="Đăng nhập"
    :showLink="true"
    linkTo="/forgot-password"
    linkText="Quên mật khẩu?"
    @submit="onSubmitLogin"
  />
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';
import { mapActions } from 'vuex';

export default {
  components: { AuthForm },
  methods: {
    ...mapActions('auth', ['handleLogin']),
    async onSubmitLogin({ account, password }) {
      try {
        await this.handleLogin({ account, password });
        this.$router.push('/dashboard');
      } catch (error) {
        alert("Đăng nhập thất bại! Vui lòng thử lại.");
      }
    },
  },
};
</script>
