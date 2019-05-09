<template>
  <div class="sponsoredContainer">
    <div id="header">
      <span id="head" v-on:click="handleClick">Sponsored</span>
    </div>
    <div id="body">
      <div>
        <img v-bind:src="'http://comento.cafe24.com/public/images/' + dataObj.img" id="image">
      </div>
      <div id="textBox">
        <div id="title">{{dataObj.title }}</div>
        <div
          id="text"
        >{{dataObj.contents.length > 100 ? dataObj.contents.slice(0,100) + '...': dataObj.contents}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { index: Number, obj: Object },
  data() {
    return {
      dataObj: this.$parent.$parent.sponsoredList[
        this.index > 29 ? this.index / 30 : this.index
      ] || { title: false, contents: false, img: "test1.jpg" },
      img: "test1.jpg"
    };
  },
  methods: {
    handleClick: function() {
      console.log(this.$props);
    }
  },
  mounted() {}
};
</script>

<style lang="less">
#sponsoredContainer {
  margin: auto 0;
}
#body {
  padding: 15px;
  display: flex;
  flex-direction: column;

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
