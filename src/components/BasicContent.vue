<template>
  <div class="basicContainer">
    <div id="header">
      <span id="category">{{category_no}}</span>
      <span id="contentNum">{{contentNum}}</span>
    </div>
    <div id="info">
      <span id="email">{{email}}</span>
      <span id="updated_at">{{ updated_at}}</span>
    </div>
    <div id="textBox">
      <div id="title" v-on:click="sayHello">{{title}}</div>
      <div id="message">{{message}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category_no: String,
    message: String,
    email: String,
    title: String,
    updated_at: String,
    user_no: String,
    contentNum: String
  },

  methods: { sayHello: () => alert("hello") }
};
</script>

<style lang="less">
.basicContainer {
  border: 2px solid black;
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
