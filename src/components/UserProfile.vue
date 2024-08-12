<template>
  <div style="padding: 100px">
    <h1>Profile</h1>
    <h5>{{ name }}</h5>
    <h5>{{ age }}</h5>

  </div>
</template>

<script>
import {mapState, mapMutations,  } from 'vuex';

export default {
  computed: {
    ...mapState(['name','age'])
  },
  methods: {
    ...mapMutations(['setName', 'setAge'])
  }
};
</script>

<style scoped>
</style>
