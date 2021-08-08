<template>
  <div id="app">
    <div class="wrapper clearfix">
        <!-- Prop -> Parent to Child -->
        <players
          v-bind:isWinner="isWinner"
          v-bind:scorePlayer="scorePlayer"
          v-bind:activePlayer="activePlayer"
          v-bind:currentScore="currentScore" />

        <controls 
          v-bind:isPlaying="isPlaying"
          v-bind:finalScore="finalScore"
          v-on:handleChangeFinalScore="handleChangeFinalScore"
          v-on:handleHoldScore="handleHoldScore"
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
      scorePlayer: [0, 0],
      currentScore: 0,
      dices: [2, 5],
      finalScore: 10,
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
    nextPlayer(){
      // activePlayer = 0 -> 1 va nguoc lai
      this.activePlayer = this.activePlayer === 0 ? 1 : 0;
      this.currentScore = 0;
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

        if(dice1 === 1 || dice2 === 1){
          let activePlayer = this.activePlayer;
          setTimeout(function(){
            alert(`Người chơi Player ${activePlayer + 1} đã qua trúng số 1. Rất tiếc`);
          }, 10);
          // Doi luot choi
          // Reset diem tam thoi ve 0
          this.nextPlayer();
        } else{
          // Cong don vao diem tam thoi cho nguoi dang choi
          this.currentScore = this.currentScore + dice1 + dice2;
        }
      } else {
        alert('Vui lòng nhấn nút New Game');
      }
    },
    handleHoldScore(){
      if(this.isPlaying){
        /*
          console.log('handleHoldScore');
          scorePlayer -> array
          scorePlayer[0] = scorePlayer[activePlayer]
          scorePlayer[0] = scorePlayer[activePlayer]
        */
        let { scorePlayer, activePlayer, currentScore } = this;
        let scoreOld = scorePlayer[activePlayer];
        // Su dung $set trong de thay doi gia tri trong mang
        this.$set(this.scorePlayer, activePlayer, scoreOld + currentScore);
        /*Su dung es6
          let cloneScorePlayer = [...scorePlayer];
          cloneScorePlayer[activePlayer] = scoreOld + currentScore;
          this.scorePlayer = cloneScorePlayer;*/
        if(!this.isWinner){
          this.nextPlayer();
        }
        /*
          this.scorePlayer[activePlayer] = scoreOld + currentScore;
          console.log(cloneScorePlayer);
          // Cach thong thuong
          this.scorePlayer[this.activePlayer] = this.scorePlayer[this.activePlayer] + this.currentScore;
        */
      } else {
        alert('Vui lòng nhấn nút New Game');
      }
    },
    handleChangeFinalScore(e){
      var number = parseInt(e.target.value);
      if(isNaN(number)){
        this.finalScore = '';
      } else {
        this.finalScore = number;
      }
    }
  },
  computed:{
    isWinner(){
      let { scorePlayer, finalScore} = this;
      if(scorePlayer[0] >= finalScore || scorePlayer[1] >= finalScore){
        // Dung cuoc choi
        this.isPlaying = false;
        return true;
      }
      return false;
    },
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
