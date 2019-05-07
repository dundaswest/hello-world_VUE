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
<style lang="less">
.hello {
  border: 5px solid black;
  width: 100%;
  height: 100%;
}
</style>

