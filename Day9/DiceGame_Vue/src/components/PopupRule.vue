<template>
  <div class="wapper-popup"
    v-bind:class="getClassPopup">
    <div class="rule">
      <h3>Luật chơi</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquid quod aspernatur similique asperiores eos earum consequatur quidem maxime quo? Beatae sequi earum omnis nulla error dolor accusantium enim qui!</p>
    <button class="confirm"
      v-on:click="confirm">Đã hiểu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup-rule',
  props:{
    isOpenPopup: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      
    }
  },
  computed:{
    getClassPopup: function() {
      return{
        'open-popup': this.isOpenPopup
      }
    }
  },
  methods: {
    confirm(){
      // Truyen Event ra file App.vue
      console.log('confirm PopupRule.vue');
      this.$emit('handleConfirm');
    }
  },
}
</script>

<style>
  .wapper-popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
  }
  .wapper-popup.open-popup{
    opacity: 1;
    visibility: visible;
  }
  .rule{
    width: 350px;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2);
    position: absolute;
    background-color: #fff;
    transition: all .3s ease;
  }
  .open-popup .rule{
    transform: translate(-50%, -50%) scale(1);
  }
  /* scale -> class */
  .rule h3{
    margin-bottom: 10px;
  }
  .rule .confirm{
    border: 2px solid #333;
    background-color: #fff;
    padding: 8px 15px;
    cursor: pointer;
    margin-top: 20px;
    /* Muon cho dep thi su dung transition */
    transition: all .3s ease;
  }
  .rule .confirm:hover{
    background-color: #333;
    color: #fff;
  }
  /* Ket hop CSS3 voiws Vuejs de xay dung hieu ung - Zoom in - Zoom out */
</style>