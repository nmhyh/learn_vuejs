<template>
  <div class="list-user">
    <!-- phải ràng buộc cái key -->
    <user
      v-for="user in listUser" v-bind:key="user.id" v-bind:user="user"
      v-on:deleteUser="deleteUser" />
  </div>
</template>

<script>
/*
App
  ListUser -> Khong dc quyen thay doi arrListUser -> Truyen tiep Event them mot lan nua ra ngoai App
    User -> Truyen Event thong bao ra ListUser
    User
    ...
*/
import User from './User.vue';
export default {
  name: 'list-user',
  props: {
    listUser: {
      type: Array,
      default: [],
    }
  },
  data(){
    return{
      
    }
  },
  components:{
    User
  },
  methods: {
    deleteUser(data){
      // console.log('deleteUser ListUser.vue', data);
      this.$emit('deleteUserEvent', data);
    }
  },
}
</script>

<style>
  .list-user{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .list-user .user{
    padding: 30px;
    margin-bottom: 30px;
    border: 1px solid #333;
    width: calc(26% - 20px);
  }
</style>