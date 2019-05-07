<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="dataObj in dataList">
        <BasicContent
          :category_no="dataObj.category_no"
          :message="dataObj.contents"
          :email="dataObj.email"
          :title="dataObj.title"
          :updated_at="dataObj.updated_at"
          :user_no="dataObj.user_no"
          :contentNum="dataObj.no"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import BasicContent from "./BasicContent.vue";
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return { dataList: null };
  },
  components: {
    // Add a reference to the TodoList component in the components property
    BasicContent
  },
  mounted() {
    axios
      .get("http://comento.cafe24.com/request.php", {
        params: {
          page: 1,
          ord: "asc"
        }
      })
      .then(response => (this.dataList = response.data.list))
      .catch(error => console.log(error));
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

