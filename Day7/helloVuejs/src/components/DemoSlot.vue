<template>
  <div class="demo-slot">
    <!-- <h2>DemoSlot</h2>
    <div class="test">
      <slot></slot>
    </div>
    <h2>DemoSlot</h2> -->
    <comp-tabs title="Tiêu đề của tab">
      <ul class="tabs-header">
        <li
          v-for="(item, index) in tabHeader" v-bind:key="index"
          v-on:click="setActiveTab(index)"
          v-bind:class="{ active: tabActive == index}">{{ item.text }}</li>
      </ul>
      <div class="tab-content tab1" v-if="tabActive === 0">
        <p>Tab1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus sint, iste unde quos, voluptatibus, amet delectus sit itaque rerum repudiandae sunt quo adipisci facilis ducimus consequuntur. Animi, beatae quae!</p>
        <p>Tab1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis animi facere ipsum impedit nihil nostrum rerum, ducimus magnam doloremque! Corporis consequuntur aliquam placeat optio dicta alias necessitatibus possimus dignissimos!</p>
      </div>
      <div class="tab-content tab2" v-if="tabActive === 1">
        <p>Tab2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione architecto, amet eos repellendus molestias! Totam adipisci illum, rerum quis quisquam aliquam minus ducimus at alias tempora nesciunt necessitatibus consequuntur.</p>
      </div>
      <div class="tab-content tab3" v-if="tabActive === 2">
        <p>Tab3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi obcaecati sed, praesentium reprehenderit repudiandae similique laboriosam illo nostrum rerum harum eos nisi rem qui dolor quasi distinctio laudantium? Error, maiores!</p>
      </div>
    </comp-tabs>
  </div>
</template>

<script>
import CompTabs from './CompTabs';
export default {
  name: 'demo-slot',
  components:{
    CompTabs,
  },
  data() {
    return {
      tabHeader: [
        { text: 'Tab1'},
        { text: 'Tab2'},
        { text: 'Tab3'},
      ],
      tabActive: 1,
    }
  },
  methods: {
    setActiveTab(index){
      console.log('setActive tab', index);
      this.tabActive = index;
    }
  },
}
</script>

<style>
.demo-slot{
  margin-top: 100px;
  padding: 100px 30px;
  border: 1px solid #000;
}

</style>