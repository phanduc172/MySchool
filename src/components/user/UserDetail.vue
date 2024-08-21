<template>
  <b-col md="8">
    <b-card>
      <b-img
        class="profile-img"
        :src="user.hoSo.avatar"
        center
        rounded="circle"
      ></b-img>
      <h2 class="text-truncate my-2">{{ user.hoSo.hoTen }}</h2>

      <ul class="list-group">
        <li class="list-group-item"><strong>Mã sinh viên:</strong> 123</li>
        <li class="list-group-item">
          <strong>Tên tài khoản</strong> {{ user.tenTaiKhoan }}
        </li>
        <li class="list-group-item">
          <strong>Ngày sinh:</strong> {{ user.hoSo.ngaySinh }}
        </li>
      </ul>
    </b-card>
  </b-col>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["isLoggedIn", "user"]),
  },
};
</script>

<style scoped>
.text-truncate {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.profile-img {
  border: 5px solid #17a2b8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
}
</style>