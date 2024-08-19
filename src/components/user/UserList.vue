<template>
  <b-card title="Danh sách người dùng">
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th style="width: 5%;;">STT</th>
            <th>Ảnh đại diện</th>
            <th>Tên tài khoản</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Vai trò</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td class="text-center">{{ index+1 }}</td>
            <td class="text-center">
              <b-img v-if="user.hoSo.avatar" :src="`/${user.hoSo.avatar}`" rounded="circle" style="width: 50px;" />
              <span v-else>No Avatar</span>
            </td>
            <td>{{ user.tenTaiKhoan }}</td>
            <td>{{ user.hoSo.hoTen }}</td>
            <td class="text-center">{{ user.hoSo.ngaySinh }}</td>
            <td class="text-center">{{ user.vaiTro }}</td>
            <td class="text-center">
              <b-button-group>
                <b-button variant="info" @click="() => editUser(user)">
                  <b-icon icon="pencil"></b-icon>
                </b-button>
                <b-button variant="danger" @click="() => confirmDeleteUser(user.id)">
                  <b-icon icon="trash"></b-icon>
                </b-button>
              </b-button-group>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </b-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "User",
  computed: {
    ...mapState("user", ["users"]),
  },
  methods: {
    ...mapActions("user", ["fetchUsers", "editUser", "confirmDeleteUser"]),
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.table th {
  text-align: center;
  font-weight: bold;
}

.table-responsive {
  overflow-x: scroll;
}

.table td, .table th {
  white-space: nowrap;
}
</style>
