<template>
  <div class="comp-tabs">
    <div class="tabs-title">
      <span>{{ title }}</span>
      <!-- <ion-icon name="heart-outline"></ion-icon> -->
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comp-tabs',
  props:{
    title: String,
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>
  .tabs-title{
    padding: 15px 30px;
    display: flex;
    border: 2px solid #000;
    justify-content: space-between;
  }
  .tabs-header{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .tabs-header li{
    padding: 8px 15px;
    background-color: #ccc;
    transition:  all .3s ease;
  }
  .tabs-header li:hover{
    color: #fff;
    background: #333;
  }
  .tabs-content{
    margin-top: 2px;
    padding: 2px;
    border: 2px solid blue;
  }
  .tab-content{
    padding: 15px;
    border: 2px solid green;
    text-align: left;
  }
</style>