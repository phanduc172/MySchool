<template>
  <div
    class="d-flex justify-content-center align-items-center vh-100"
    style="padding-top: 56px"
  >
    <img class="img-auth" src="/login.png" alt="" style="width: 35%" />
    <div
      :title="title"
      class="card-responsive-form-auth p-4"
      header-bg-variant="primary"
      header-text-variant="white"
      header-tag="header"
    >
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          v-if="showUsername"
          id="userNameGroup"
          label="Họ tên"
          label-for="userNameInput"
        >
          <b-form-input
            id="userNameInput"
            v-model="username"
            type="text"
            :placeholder="placeholderUserName"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          v-if="showBirthdate"
          id="dateBirthDate"
          label="Ngày sinh"
          label-for="birthDateInput"
        >
          <b-form-input
            id="birthDateInput"
            v-model="birthdate"
            type="date"
            :placeholder="placeholderBirthDate"
            :max="maxDate"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="accountGroup"
          label="Tài khoản"
          label-for="accountInput"
        >
          <b-form-input
            id="accountInput"
            v-model.lazy="account"
            type="text"
            :placeholder="placeholderAccount"
            @blur="validateAccount"
            @input="validateAccount"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="passwordGroup"
          label="Mật khẩu"
          label-for="passwordInput"
        >
          <b-form-input
            id="passwordInput"
            v-model="password"
            type="password"
            :placeholder="placeholderPassword"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          v-if="showConfirmPassword"
          id="confirmPasswordGroup"
          label="Xác nhận mật khẩu"
          label-for="confirmPasswordInput"
        >
          <b-form-input
            id="confirmPasswordInput"
            v-model="confirmPassword"
            type="password"
            :placeholder="placeholderConfirmPassword"
          ></b-form-input>
        </b-form-group>

        <b-form-group v-if="showLink">
          <b-link :to="linkTo">{{ linkText }}</b-link>
        </b-form-group>

        <b-form-group v-if="errorMessage">
          <b-alert variant="danger" show>{{ errorMessage }}</b-alert>
        </b-form-group>

        <b-button
          type="submit"
          style="background-color: rgb(24 148 235)"
          block
          >{{ buttonText }}</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
import "@/assets/css/responsive.css";
import { getMaxDate, validateAccount } from "../common/utils";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    placeholderUserName: {
      type: String,
      default: "Nhập họ tên",
    },
    placeholderBirthDate: {
      type: String,
      default: "",
    },
    placeholderAccount: {
      type: String,
      default: "Nhập tài khoản",
    },
    placeholderPassword: {
      type: String,
      default: "Nhập mật khẩu",
    },
    placeholderConfirmPassword: {
      type: String,
      default: "Nhập lại mật khẩu",
    },
    buttonText: {
      type: String,
      default: "Xác nhận",
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
      default: "",
    },
    linkText: {
      type: String,
      default: "",
    },
    showBirthdate: {
      type: Boolean,
      default: false,
    },
    showUsername: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      username: "",
      birthdate: "",
      account: "",
      password: "",
      confirmPassword: "",
      maxDate: getMaxDate(),
      errorMessage: "",
    };
  },
  methods: {
    validateAccount() {
      this.errorMessage = validateAccount(this.account);
    },
    onSubmit() {
      this.validateAccount();
      if (this.errorMessage) {
        return;
      }
      let data = {
        account: this.account,
        password: this.password,
        username: this.username,
        birthdate: this.birthdate,
      };
      this.errorMessage = "";
      if (this.showUsername && !this.username) {
        this.showError("Họ tên là bắt buộc.");
        return;
      }
      if (!this.account) {
        this.showError("Tài khoản là bắt buộc.");
        return;
      }
      if (!this.password) {
        this.showError("Mật khẩu là bắt buộc.");
        return;
      }
      if (this.showBirthdate && !this.birthdate) {
        this.showError("Ngày sinh là bắt buộc.");
        return;
      }
      if (this.showConfirmPassword && this.password !== this.confirmPassword) {
        this.showError("Mật khẩu xác nhận không khớp.");
        return;
      }
      if (this.showConfirmPassword) {
        data.confirmPassword = this.confirmPassword;
      }
      this.$emit("submit", data);
    },
    showError(message) {
      this.errorMessage = message;
    },
  },
};
</script>

<style scoped>
.card-responsive-form-auth {
  width: 90%;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.b-form-group {
  margin-bottom: 1.5rem;
}

.b-form-input {
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  padding: 0.75rem 1.25rem;
}

.b-button {
  border-radius: 0.25rem;
  padding: 0.75rem;
}

.b-link {
  display: block;
  margin-top: 1rem;
}
</style>
