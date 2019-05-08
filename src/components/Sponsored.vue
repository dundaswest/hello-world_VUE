<template>
  <div class="sponsoredContainer">
    <div id="header">
      <span id="head" v-on:click="handleClick">Sponsored</span>
    </div>
    <div id="body">
      <div>
        <img v-bind:src="'http://comento.cafe24.com/public/images/' + img" id="image">
      </div>
      <div id="textBox">
        <div id="title">{{data.title}}</div>
        <div id="text">{{data.contents}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {},
  data() {
    return {
      data: null,
      img: "test1.jpg"
    };
  },
  methods: {
    handleClick: function() {
      console.log(this.data);
    }
  },
  mounted() {
    axios
      .get("http://comento.cafe24.com/ads.php", {
        params: {
          page: 4,
          limit: 2
        }
      })
      .then(response => (this.data = response.data.list[0]))
      .catch(error => console.log(error));
  }
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
