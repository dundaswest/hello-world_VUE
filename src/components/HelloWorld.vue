<template>
  <div class="mainContainer" v-bind:class="{modalBackground: isModalShow }">
    <h1>{{ msg }}</h1>
    <Header/>
    <div>
      <BasicContent
        v-for="dataObj in dataList"
        v-bind:key="dataObj.contentNum"
        v-show="firstMounted || filterList.includes(dataObj.category_no)"
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
    return {
      dataList: null,
      firstMounted: true,
      isModalShow: false,
      filterList: [],
      currentSort: "오름차순"
    };
  },

  components: {
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
  },
  computed: {
    showList: function() {
      return this.dataList.filter(data =>
        this.filterList.includes(data.category_no)
      );
    }
  },
  methods: {}
};
</script>


<style lang="less">
.mainContainer {
  border: 5px solid black;
  width: 100%;
  height: 100%;
}
.modalBackground {
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
  z-index: 10;
  position: relative;
  overflow: hidden;
}
</style>

