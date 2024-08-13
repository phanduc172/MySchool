<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <b-card
      :title="title"
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
            :placeholder="placeholderAccount"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="passwordGroup" label="Mật khẩu:" label-for="passwordInput">
          <b-form-input
            id="passwordInput"
            v-model="password"
            type="password"
            required
            :placeholder="placeholderPassword"
          ></b-form-input>
        </b-form-group>

        <b-form-group v-if="showConfirmPassword" id="confirmPasswordGroup" label="Xác nhận mật khẩu:" label-for="confirmPasswordInput">
          <b-form-input
            id="confirmPasswordInput"
            v-model="confirmPassword"
            type="password"
            required
            :placeholder="placeholderConfirmPassword"
          ></b-form-input>
        </b-form-group>

        <b-form-group v-if="showLink">
          <b-link :to="linkTo">{{ linkText }}</b-link>
        </b-form-group>

        <b-button type="submit" variant="primary" block>{{ buttonText }}</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    placeholderAccount: {
      type: String,
      default: 'Nhập tên tài khoản',
    },
    placeholderPassword: {
      type: String,
      default: 'Nhập mật khẩu',
    },
    placeholderConfirmPassword: {
      type: String,
      default: 'Nhập lại mật khẩu',
    },
    buttonText: {
      type: String,
      default: 'Xác nhận',
    },
    showConfirmPassword: {
      type: Boolean,
      default: false,
    },
    showLink: {
      type: Boolean,
      default: false,
    },
    linkTo: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      default: '',
    },
    showOldPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      account: '',
      password: '',
      confirmPassword: '',
      oldPassword: '',
    };
  },
  methods: {
    onSubmit() {
      let data = {
        account: this.account,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      if (this.showOldPassword) {
        data.oldPassword = this.oldPassword;
      }
      this.$emit('submit', data);
    },
  },
};
</script>

<style scoped>
</style>
