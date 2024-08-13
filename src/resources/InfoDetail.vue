<template>
  <b-col md="8">
        <b-card>
            <b-img :src="user.hoSo.avatar" center rounded="circle"></b-img>
          <h1 class="text-center">{{ user.hoSo.hoTen }}</h1>

          <ul class="list-group">
            <li class="list-group-item">
              <strong>Mã sinh viên:</strong> 123
            </li>
            <li class="list-group-item">
              <strong>Ngày sinh:</strong> {{ user.hoSo.ngaySinh }}
            </li>
            <li class="list-group-item">
              <strong>Địa chỉ:</strong> Bùi Thị Xuân - Tp. Huế
            </li>
          </ul>
        </b-card>
        <em class="mx-2">{{ user }}</em>
      </b-col>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('auth',['isLoggedIn','user'])
    }
}
</script>

<style>

</style>