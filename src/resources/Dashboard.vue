<template>
  <b-container class="my-4" style="padding-top: 80px;">
    <b-row>
      <b-col lg="12">
        <teacher-list/>
      </b-col>
      <b-col lg="12" class="mt-5">
        <student-list />
      </b-col>
      <b-col lg="12" class="mt-5">
        <user-list />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import TeacherList from '../components/TeacherList.vue';
import StudentList from '../components/StudentList.vue';
import UserList from '../components/UserList.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      account: '',
      password: '',
    };
  },
  components: {
    TeacherList,StudentList,UserList,
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
