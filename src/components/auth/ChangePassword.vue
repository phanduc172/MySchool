<template>
  <b-col md="8">
    <b-card
      title="Đổi mật khẩu"
      class="card-responsive-form-auth"
      header-bg-variant="primary"
      header-text-variant="white"
      header-tag="header"
    >
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="oldPasswordGroup"
          label="Mật khẩu cũ"
          label-for="oldPasswordInput"
        >
          <b-form-input
            id="oldPasswordInput"
            v-model="oldPassword"
            type="password"
            placeholder="Nhập mật khẩu cũ"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="newPasswordGroup"
          label="Mật khẩu mới"
          label-for="newPasswordInput"
        >
          <b-form-input
            id="newPasswordInput"
            v-model="newPassword"
            type="password"
            placeholder="Nhập mật khẩu mới"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="confirmNewPasswordGroup"
          label="Xác nhận mật khẩu mới"
          label-for="confirmNewPasswordInput"
        >
          <b-form-input
            id="confirmNewPasswordInput"
            v-model="confirmNewPassword"
            type="password"
            placeholder="Xác nhận mật khẩu mới"
          ></b-form-input>
        </b-form-group>

        <b-form-group v-if="errorMessage">
          <b-alert variant="danger" show>{{ errorMessage }}</b-alert>
        </b-form-group>

        <b-button type="submit" variant="primary" block>Đổi mật khẩu</b-button>
      </b-form>
    </b-card>
  </b-col>
</template>
  
  <script>
import axios from "axios";
import { mapState } from "vuex";
import { showSuccessMessage } from '@/store/ui/ConfirmDelete';

export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      errorMessage: "",
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    async onSubmit() {
      this.errorMessage = "";

      if (!this.oldPassword) {
        this.errorMessage = "Mật khẩu cũ là bắt buộc.";
        return;
      }

      if (!this.newPassword) {
        this.errorMessage = "Mật khẩu mới là bắt buộc.";
        return;
      }

      if (this.newPassword !== this.confirmNewPassword) {
        this.errorMessage = "Mật khẩu xác nhận không khớp.";
        return;
      }

      try {
        const userId = this.user ? this.user.id : null;

        if (!userId) {
          this.errorMessage = "Người dùng không hợp lệ.";
          return;
        }

        const response = await axios.put(
          `http://localhost:3000/api/nguoi-dung/${userId}/mat-khau`,
          {
            matKhauCu: this.oldPassword,
            matKhauMoi: this.newPassword,
          }
        );

        showSuccessMessage();
        
        this.oldPassword = "";
        this.newPassword = "";
        this.confirmNewPassword = "";
        
      } catch (error) {
        this.errorMessage = error.response
          ? error.response.data.message
          : "Có lỗi xảy ra!";
      }
    },
  },
};
</script>
  
  <style scoped>
.card-responsive-form-auth {
  width: 100%;
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
  