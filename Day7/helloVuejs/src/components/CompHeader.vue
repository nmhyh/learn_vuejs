<template>
  <header>
    <h1>
      {{ title }} <br>
      <ul>
        <li
          v-for="user in listUser" v-bind:key="user.id">{{ user.id }}</li>
      </ul>
      <button v-on:click="changeTitleHeader">Thay đổi title từ CompHeader.vue</button>
    </h1>
  </header>
</template>

<script>
export default {
  name:'comp-header',
  props:{
    title: String,
    listUser: {
      type: Array,
      default: [],
    }
  },
  data(){
    return{
      
    }
  },
  methods: {
    changeTitleHeader(e){
      // Không đc phép thay đổi trực tiếp props từ comp cha
      // this.title = "Học lập trình front-end";
      // console.log(this.title);

      // -> Truyền sự kiện thông báo ra bên ngoài
      // -> Kích hoạt sự kiện 'changTitleEvent' trong CompHeader.vue
      // -> Khi kích hoạt function bên ngoài App.vue nó sẽ chạy
      // -> Khi function đó đc chạy -> thay đổi dữ liệu
      
      console.log('Trước khi kích hoạt sự kiện changeTitleEvent trong CompHeader.vue');
      var data = {
        title: 'test -> data truyền thông qua biến event'
      }
      this.$emit('changeTitleEvent', data);
      console.log('Sau khi kích hoạt sự kiện changeTitleEvent trong CompHeader.vue');
    }
  },
}
</script>

<style>

</style>