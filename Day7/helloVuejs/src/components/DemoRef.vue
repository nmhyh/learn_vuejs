<template>
  <div class="demo-ref">
    <h3>DemoRef</h3>
    <button
      v-on:click="handleClickInputFile"
      class="avatar">Thay đổi Avatar</button>
    <input type="file"
      ref="fileInputAvatar"
      style="display: none">
  </div>
</template>

<script>
/*
Reference la mot bien tham chieu toi cac phan tu HTML
*/
export default {
  name: 'demo-ref',
  data() {
    return {
      
    }
  },
  methods: {
    handleClickInputFile(e){
      this.$refs.fileInputAvatar.click();
      // console.log(this.$refs);
    }
  },
}
</script>

<style>
  .demo-ref{
    margin-top: 100px;
    padding: 100px 30px;
    border: 1px solid #000;
  }
  .avatar{
    padding: 12px 15px;
    background: #333;
    color: #fff;
    border: 2px solid #333;
    transition: all .3s ease;
  }
  .avatar:hover{
    color: #333;
    background: #fff;
  }
</style>