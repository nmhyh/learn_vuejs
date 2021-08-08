<template>
  <div class="user">
    <h3>{{ user.email }}</h3>
    <button
      class="delete"
      v-on:click="handleDelete">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: {
    user: {
      type: Object,
      default: null,
    }
  },
  data(){
    return{

    }
  },
  methods: {
    handleDelete(e){
      var data = {
        id: this.user.id,
      }
      // console.log('handleDelete trong User.Vue');
      this.$emit('deleteUser', data);
    }
  },
}
</script>

<style>
  .user {
    position: relative;
  }
  .user .delete{
    position: absolute;
    top: 0;
    right: 0;
    background: red;
    color: white;
  }
</style>