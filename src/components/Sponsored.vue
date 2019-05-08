<template>
  <div class="sponsoredContainer">
    <div id="header">
      <span id="head" v-on:click="handleClick">Sponsored</span>
    </div>
    <div id="body">
      <div>
        <img v-bind:src="'http://comento.cafe24.com/public/images/' + data.img" id="image">
      </div>
      <div id="textBox">
        <div id="title">{{data.title }}</div>
        <div id="text">{{data.contents}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: { index: Number },
  data() {
    return {
      data: this.$parent.$parent.sponsoredList[this.index],
      img: "test1.jpg"
    };
  },
  methods: {
    handleClick: function() {
      console.log(this.data);
    }
  },
  mounted() {}
};
</script>

<style lang="less">
#body {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 480px) {
    flex-direction: row;
  }
}
#title,
#text {
  margin: 3px;
}
#textBox {
  padding: 10px;
}
#header {
  padding: 10px;
}
img {
  height: 300px;
  width: 300px;
}
</style>
