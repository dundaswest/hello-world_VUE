<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Header/>
    <div>
      <BasicContent
        v-for="dataObj in dataList"
        v-bind:key="dataObj.contentNum"
        :category_no="dataObj.category_no"
        :message="dataObj.contents"
        :email="dataObj.email"
        :title="dataObj.title"
        :updated_at="dataObj.updated_at"
        :user_no="dataObj.user_no"
        :contentNum="dataObj.no"
      />
    </div>
    <Modal v-show="isModalShow"/>
  </div>
</template>

<script>
//v-bind:class="{modalBackground: isModalShow }"
import BasicContent from "./BasicContent.vue";
import Header from "./Header.vue";
import Modal from "./Modal.vue";

import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return { dataList: null, isModalShow: false };
  },

  components: {
    // Add a reference to the TodoList component in the components property
    BasicContent,
    Header,
    Modal
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
.modalBackground {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
}
</style>

