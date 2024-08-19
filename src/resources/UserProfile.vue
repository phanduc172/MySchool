<template>
  <b-container fluid="md" class="my-4 vh-75" style="padding-top: 65px">
    <b-row>
      <user-menu class="mb-3"></user-menu>
      <user-detail v-if="isProfile"></user-detail>
      <change-password v-else></change-password>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import UserMenu from "../components/user/UserMenu.vue";
import UserDetail from '../components/user/UserDetail.vue';
import ChangePassword from '../components/auth/ChangePassword.vue';

export default {
  components: {
    UserMenu,
    UserDetail,
    ChangePassword,
  },
  computed: {
    ...mapGetters("auth", ["name", "age"]),
    isProfile() {
      return this.$route.name === 'profile';
    }
  },
  methods: {},
};
</script>

<style scoped>
</style>
