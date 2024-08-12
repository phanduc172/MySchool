<template>
  <b-container class="my-4" style="padding-top: 80px;">
    <b-row>
      <b-col lg="12">
        <teacher/>
      </b-col>
      <b-col lg="12" class="mt-5">
        <student />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import Teacher from './Teacher.vue';
import Student from './Student.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      account: '',
      password: '',
    };
  },
  components: {
    Teacher,Student,
  },
  computed: {
    ...mapState([])
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
  },
};
</script>

<style scoped>
</style>
