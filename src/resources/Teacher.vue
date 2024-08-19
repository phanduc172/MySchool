<template>
  <b-container class="my-4" fluid style="padding-top: 45px;">
    <b-row>
      <b-col lg="12">
        <teacher-list />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import TeacherList from '../components/teacher/TeacherList.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
    };
  },
  components: {
      TeacherList,
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
  