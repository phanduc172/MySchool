<template>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand href="/">QLTH</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <b-nav-item to="/dashboard">Dashboard</b-nav-item>
        </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-if="isLoggedIn" right>
          <template #button-content>
            <em class="mx-2">{{ user.hoSo.hoTen }}</em> 
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
  methods: {
    logout() {
      this.$emit('logout');
    },
  },
  computed: {
    ...mapState(['isLoggedIn', 'user'])
  },
  methods: {
    ...mapActions(['handleLogin', 'handleLogout']),
    async logout() {
      await this.handleLogout();
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
</style>
