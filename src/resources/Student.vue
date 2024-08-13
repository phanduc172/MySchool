<template>
    <b-container class="my-4" style="padding-top: 80px;">
      <b-row>
        <b-col lg="12">
          <student-list />
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  
  import StudentList from '../components/StudentList.vue';
  import { mapActions, mapMutations, mapState } from 'vuex';
  
  export default {
    data() {
      return {
      };
    },
    components: {
      StudentList,
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
  