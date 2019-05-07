<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <BasicContent/>
  </div>
</template>

<script>
import BasicContent from "./BasicContent.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    // Add a reference to the TodoList component in the components property
    BasicContent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

