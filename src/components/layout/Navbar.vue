<template>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand to="/">QLTH</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/dashboard">Tổng quan</b-nav-item>
        <b-nav-item to="/manager/student">Quản lý học sinh</b-nav-item>
        <b-nav-item to="/manager/teacher">Quản lý giáo viên</b-nav-item>
        <b-nav-item to="/manager/user">Quản lý người dùng</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-if="isLoggedIn" right>
          <template #button-content>
            <em class="mx-2">{{ user.hoSo && user.hoSo.hoTen ? user.hoSo.hoTen : user.tenTaiKhoan }}</em>
          </template>
          <b-dropdown-item to="/profile">Hồ sơ</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout">Đăng xuất</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item v-if="!isLoggedIn" to="/login">Đăng nhập</b-nav-item>
        <b-nav-item v-if="!isLoggedIn" to="/register">Đăng ký</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('auth', ['isLoggedIn', 'user'])
  },
  methods: {
    ...mapActions('auth', ['handleLogout']),
    async logout() {
      await this.handleLogout();
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
</style>
