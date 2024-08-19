  <template>
    <b-col md="8">
      <b-card>
          <b-img :src="user.hoSo.avatar" center rounded="circle"></b-img>
        <h2 class="text-truncate">{{ user.hoSo.hoTen }}</h2>

        <ul class="list-group">
          <li class="list-group-item">
            <strong>Mã sinh viên:</strong> 123
          </li>
          <li class="list-group-item">
            <strong>Tên tài khoản</strong> {{ user.tenTaiKhoan }}
          </li>
          <li class="list-group-item">
            <strong>Ngày sinh:</strong> {{ user.hoSo.ngaySinh }}
          </li>
        </ul>
      </b-card>
          <!-- <em class="mx-2">{{ user }}</em> -->
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

  <style scoped>
    .text-truncate {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }
  </style>