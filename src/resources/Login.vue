<template>
  <AuthForm
    title="Đăng nhập"
    buttonText="Đăng nhập"
    :showLink="true"
    linkTo="/forgot-password"
    linkText="Quên mật khẩu?"
    :showUsername="false"
    :showBirthdate="false"
    @submit="onSubmitLogin"
    ref="authForm"
  />
</template>

<script>
import AuthForm from '@/components/auth/AuthForm.vue';
import { mapActions } from 'vuex';
import { showSuccessMessage } from '@/store/ui/ConfirmDelete';

export default {
  components: { AuthForm },
  methods: {
    ...mapActions('auth', ['handleLogin']),
    async onSubmitLogin({ account, password }) {
      await this.handleLogin({ account, password });
      this.$router.push('/dashboard');
      showSuccessMessage();
    },
  },
};
</script>
