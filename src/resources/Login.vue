<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <b-card
      title="Đăng nhập"
      class="w-50"
      header-bg-variant="primary"
      header-text-variant="white"
      header-tag="header"
    >
      <b-form @submit.prevent="onSubmit">
        <b-form-group id="accountGroup" label="Tài khoản:" label-for="accountInput">
          <b-form-input
            id="accountInput"
            v-model="account"
            type="text"
            required
            placeholder="Nhập tên đăng nhập"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="passwordGroup" label="Mật khẩu:" label-for="passwordInput">
          <b-form-input
            id="passwordInput"
            v-model="password"
            type="password"
            required
            placeholder="Nhập mật khẩu"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" block>Đăng nhập</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth',['account','password'])
  },
  methods: {
    ...mapActions('auth', ['handleLogin']),
    async onSubmit() {
      try {
        const user = await this.handleLogin({ account: this.account, password: this.password });
        console.log(user.hoSo.hoTen);
        this.$router.push('/dashboard');
      } catch (error) {
        alert(error.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.');
      }
    },
  },
};
</script>

<style scoped>
</style>
