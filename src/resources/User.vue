<template>
    <b-container class="my-4" fluid style="padding-top: 45px;">
    <b-row>
      <b-col lg="12">
        <user-list />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import UserList from '../components/user/UserList.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
    };
  },
  components: {
      UserList,
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
