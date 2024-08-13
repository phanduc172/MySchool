<template>
  <b-container fluid="md" class="my-4" style="padding-top: 80px">
    <b-row>
      <student-menu></student-menu>
      <info-detail></info-detail>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import StudentMenu from "../components/StudentMenu.vue";
import InfoDetail from "../resources/InfoDetail.vue";

export default {
  components: {
    StudentMenu,InfoDetail,
  },
  computed: {
    ...mapGetters("auth", ["name", "age"]),
  },
  methods: {},
};
</script>

<style scoped>
</style>
