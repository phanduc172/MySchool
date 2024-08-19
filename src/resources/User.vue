<template>
    <b-container class="my-4" fluid style="padding-top: 45px;">
    <b-row>
      <b-col lg="12">
        <div class="d-flex justify-content-between mb-3">
          <input
            type="text"
            placeholder="Tìm kiếm người dùng..."
          />
          <b-button variant="primary">
            Thêm
          </b-button>
        </div>
      </b-col>
    </b-row>
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

<style scoped>
  .table th {
    text-align: center;
    font-weight: bold;
  }

  .table-responsive {
    overflow-x: auto;
  }

  .table td,
  .table th {
    white-space: nowrap;
  }


  input[type="text"] {
    width: 50%;
    border-radius: 0.375rem;
    border: 1px solid #ced4da;
    padding: 0.5rem 1rem; 
    font-size: 1rem;
    transition: border-color 0.2s ease;
  }

  input[type="text"]:focus {
    border-color: #007bff;
    outline: none;
  }

  .b-button {
    border-radius: 0.375rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
  }

  .b-button:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .d-flex {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 0.375rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
  }
</style>
