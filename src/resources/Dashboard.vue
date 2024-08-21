<template>
  <b-container class="my-4" style="padding-top: 80px;">
    <b-row>
      <b-col lg="12">
        <dashboard-chart/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import StudentList from '../components/student/StudentList.vue';
import TeacherList from '../components/teacher/TeacherList.vue';
import UserList from '../components/user/UserList.vue';
import DashboardChart from '../components/DashboardChart.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      account: '',
      password: '',
    };
  },
  components: {
    TeacherList,StudentList,UserList,DashboardChart
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
