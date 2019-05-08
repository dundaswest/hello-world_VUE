<template>
  <div>
    <div class="basicContainer" v-on:click="handleClick(title)">
      <div id="header">
        <span id="category">{{category}}</span>
        <span id="contentNum">{{contentNum}}</span>
      </div>
      <div id="info">
        <span id="email">{{email}}</span>
        <span id="updated_at">{{ updated_at}}</span>
      </div>
      <div id="textBox">
        <div id="title">{{title}}</div>
        <div id="message">{{message}}</div>
      </div>
    </div>
    <Sponsored v-show="(index+1) % 3 === 0"/>
  </div>
</template>

<script>
import Sponsored from "./Sponsored";
export default {
  components: { Sponsored },
  props: {
    category_no: String,
    message: String,
    email: String,
    title: String,
    updated_at: String,
    user_no: String,
    contentNum: String,
    category: String,
    index: Number
  },
  methods: {
    handleClick: function(title) {
      console.log(title);
    }
  }
};
</script>

<style lang="less">
.basicContainer {
  border: 2px solid black;
  margin: 3px;
  padding: 2px;
}
#header {
  display: flex;
  justify-content: space-between;
}
#category,
#contentNum {
  margin: 10px;
}
#info,
#textBox {
  display: flex;
}
#textBox {
  flex-direction: column;
}
#email,
#updated_at {
  margin: 7px;
}
#title {
  font-weight: bold;
}
#email {
  padding-right: 5px;
  border-right: 2px solid black;
}
</style>
