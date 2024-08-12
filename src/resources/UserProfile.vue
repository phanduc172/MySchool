<template>
  <div style="padding: 100px">
    <h1>Profile</h1>
    <h5>{{ name }}</h5>
    <h5>{{ age }}</h5>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['name', 'age',])
  },
  methods: {
  }
};
</script>

<style scoped>
</style>
