<template>
  <div id="app">
    <div class="wrapper clearfix">
        <!-- Prop -> Parent to Child -->
        <players
          v-bind:scorePlayer="scorePlayer"
          v-bind:activePlayer="activePlayer"
          v-bind:currentScore="currentScore" />

        <controls 
          v-on:handleRollDice="handleRollDice"
          v-on:handleNewGame="handleNewGame"/>
        
        <dices
          v-bind:dices="dices"/>

        <popup-rule
          v-on:handleConfirm="handleConfirm"
          v-bind:isOpenPopup="isOpenPopup" />
    </div>
  </div>
</template>

<script>
import Players from './components/players';
import Controls from './components/Controls';
import Dices from './components/Dices';
import PopupRule from './components/PopupRule';
export default {
  name: 'app',
  data () {
    return {
      isPlaying: false,
      isOpenPopup: false,
      activePlayer: 0, // Ai là người chơi hiện tại?
      scorePlayer: [10, 20],
      currentScore: 30,
      dices: [2, 5],
    }
  },
  methods: {
    handleNewGame(){
      console.log('handleNewGame App.vue');
      // Hien thi Popup -> Show luat choi
      this.isOpenPopup = true;
    },
    handleConfirm(){
      // console.log("handleConfirm trong file App.vue");
      this.isPlaying = true;
      this.isOpenPopup = false;
      this.activePlayer = 0;
      this.scorePlayer = [0, 0];
      this.currentScore = 0;
      this.dices = [1, 1]
    },
    handleRollDice(){
      console.log('handleRollDice App.vue');
      if(this.isPlaying){
        /* Xoay xuc xac
          Math.ramdom(): 0 -> 1
          0 <= x <= 1
          0 <= y = x * 6 <= 6
        */
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        this.dices = [dice1, dice2];
        console.log(dice1, dice2);
      } else {
        alert('Vui lòng xoay xúc xắc');
      }
    }
  },
  components:{
    Players,
    Controls,
    Dices,
    PopupRule,
  }
  
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

body {
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url('/public/assets/images/back.jpg');
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

.wrapper {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
</style>
