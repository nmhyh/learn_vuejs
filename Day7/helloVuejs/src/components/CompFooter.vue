<template>
  <footer>
    <h1>{{ tFooter }}</h1>
  </footer>
</template>

<script>
// Đối với props nếu mình không có quy định gì cả thì nó có thể truyền vào hoặc không
// Và khi nó có thể truyền vào hoặc không thì mình cần phải định nghĩa dữ liệu mặc định cho nó
export default {
  name:'comp-footer',
  props:{
    tFooter: {
      type: String,
      default: 'Giá trị mặc định',
    }
  },
  data(){
    return{
    }
  }
}
</script>

<style>

</style>