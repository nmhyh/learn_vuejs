<template>
  <div id="app">
    <!-- Cach 1 -->
    <!-- <CompHeader></CompHeader> -->
    <!-- Cach 2 -->
    <!-- <CompHeader /> -->
    <!-- Cach 3 -->
    <div class="container">
      <button v-on:click="title = 'Học lập trình Vuejs tại ZendVN'">
        Thay đổi title từ Component App.vue
        </button>
      <comp-header
        v-bind:title="title"
        v-on:changeTitleEvent="handleChangeTitle"
        v-bind:listUser="listUser" />
      <list-user v-bind:listUser="listUser"
        v-on:deleteUserEvent="handleDeleteEvent" />
      <comp-footer v-bind:tFooter="tFooter" />
      <demo-ref />
      <!-- <demo-slot>
        <div class="app-slot">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos praesentium voluptatibus dolores dolor suscipit nostrum rem sunt vel libero! Similique reprehenderit cum amet. Iste ex aliquid iure voluptates eaque totam?</p>
        </div>
      </demo-slot> -->
      <demo-slot />
    </div>
  </div>
</template>

<script>
/*
App (title, tFooter, listUser[])
  CompHeader (title)
  ListUser (listUser[])
    User (user - object)
    User (user - object)
    ...
  CompFooter (tFooter)
  -> props -> Những dữ liệu từ Component cha vào Component con
    -> Cú pháp giống thuộc tính
      -> Sử dụng v-bind
*/
import ListUser from './components/ListUser.vue';
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
import DemoRef from './components/DemoRef.vue';
import DemoSlot from './components/DemoSlot.vue';
export default {
  name: 'app',
  data () {
    return {
      title: 'Hello VueJs - Header ..',
      tFooter: 'Hello VueJs - Footer ..',
      listUser: [
        {
          id : 100, email: 'test1@gmail.com', active: true,
        },
        {
          id : 101, email: 'test2@gmail.com', active: false,
        },
        {
          id : 102, email: 'test3@gmail.com', active: true,
        },
        {
          id : 103, email: 'test4@gmail.com', active: false,
        },
        {
          id : 104, email: 'test5@gmail.com', active: true,
        },
        {
          id : 105, email: 'test6@gmail.com', active: false,
        },
        {
          id : 106, email: 'test7@gmail.com', active: false,
        },
      ]
    }
  },
  components:{
    CompHeader,
    CompFooter,
    ListUser,
    DemoRef,
    DemoSlot,
  },
  methods: {
    handleChangeTitle(data){
      // this.title = 'Học lập trình front-end';
      this.title = data.title;
      // console.log('HandleChangeTitle được gọi sau khi kích hoạt thành công App.vue', data);
    },
    handleDeleteEvent(data){
      var indexDelete = -1;
      this.listUser.forEach((u, idx) => {
        // console.log(u.id, idx, data.id);
        if(u.id === data.id){
          indexDelete = idx;
        }
      });
      if(indexDelete != -1){
        // Ham xoa phan tu tai 1 vi tri bat ky
        var test = this.listUser.splice(indexDelete, 1);
        // console.log('test: ', test);
      }
      // console.log('IndexDelete sau khi chay vong for', indexDelete);
      // console.log('handleDeleteEvent trong App.vue', data);
    }
  },

  //End methods
  beforeCreate(){
    console.log('beforeCreate', this.title, document.querySelector('.container'));
  },
  created(){
    // Goi API, Call Ajax
    console.log('created', this.title, document.querySelector('.container'));
  },
  beforeMount(){
    console.log('beforeMount', this.title, document.querySelector('.container'));
  },
  mounted(){
    // Noi render template (cau truc DOM)
    // Neu muon su dung jquery -> chi truy xuat DOM dc trong mouted -> co the su dung jquery
    console.log('mounted', this.title, document.querySelector('.container').classList);
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.title);
  },
  updated() {
    console.log('update', this.title);
  },
  // Chay khi doi tuong Vue bi huy bo
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    // Destroyed cac thu vien cua ben thu 3
    console.log('destroyed');
  },
}
/*
Props Down
  Dữ liệu từ cha truyền vào -> truyền xuống dữ liệu cho comp con sử dụng và nó sẽ tự động render lại giao diện
  Truyền dữ liệu vào comp con, comp con chỉ được sài, không đc phép thay đổi trực tiếp

Event Up
  Truyền thông điệp (truyền sự kiện) thông báo cho comp cha biết là comp con muốn thay đổi dữ liệu
  -> Nhiệm vụ của comp cha là nhận được thông điệp và tiến hành thay đổi data
    -> Custom Event trong Vuejs

  click -> Sự kiện có sẵn trong VueJS
  v-on:click="changeTitle"
    'click' -> Tên của sự kiện
    'changeTitle' -> Hàm xử lý khi sự kiện được kích hoạt (khi người dùng click)
*/
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 3000px;
}

</style>
