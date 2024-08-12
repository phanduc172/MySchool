<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <b-card
      title="Đăng ký"
      class="w-50"
      header-bg-variant="primary"
      header-text-variant="white"
      header-tag="header"
    >
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="accountGroup"
          label="Tài khoản:"
          label-for="accountInput"
        >
          <b-form-input
            id="accountInput"
            v-model="account"
            type="text"
            required
            placeholder="Nhập tên tài khoản"
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

        <b-form-group id="confirmPasswordGroup" label="Xác nhận mật khẩu:" label-for="confirmPasswordInput">
          <b-form-input
            id="confirmPasswordInput"
            v-model="confirmPassword"
            type="password"
            required
            placeholder="Nhập lại mật khẩu"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" block>Đăng ký</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.password !== this.confirmPassword) {
        alert("Mật khẩu không trùng khớp!");
        return;
      }
      console.log('Account:', this.account);
      console.log('Password:', this.password);
      
    },
  },
};
</script>

<style scoped>

</style>
