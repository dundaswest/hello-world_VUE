<template>
  <div class="sponsoredContainer">
    <div id="header">
      <span id="head">Sponsored</span>
    </div>
    <div id="body">
      <span id="image">IMGAE</span>
      <div id="textBox">
        <div id="title"></div>
        <div id="text"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    category_no: String,
    message: String,
    email: String,
    title: String,
    updated_at: String,
    user_no: String,
    contentNum: String,
    category: String
  },
  methods: {
    handleClick: function(title) {
      console.log(title);
    }
  },
  mounted() {}
};
</script>

<style lang="less">
</style>
