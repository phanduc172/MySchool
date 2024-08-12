<template>
  <div id="app">
    <app-navbar :isLoggedIn="isLoggedIn" @logout="handleLogout" />
    <router-view @login="login" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['handleLogin', 'handleLogout']),
    async login() {
      await this.handleLogin();
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
}
</style>
