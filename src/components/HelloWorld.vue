<template>
  <div
    class="mainContainer"
    v-bind:class="{modalBackground: isModalShow }"
    v-on:scroll="handleScroll"
  >
    <h1>{{ msg }}</h1>
    <Header/>
    <div>
      <BasicContent
        v-for="(dataObj,index) in dataList"
        v-bind:key="dataObj.no"
        v-show="firstMounted || filterList.includes(dataObj.category_no)"
        :index="index"
        :category_no="dataObj.category_no"
        :category="categoryList ? categoryList[dataObj.category_no -1].name : null"
        :message="dataObj.contents"
        :email="dataObj.email"
        :title="dataObj.title"
        :updated_at="dataObj.updated_at"
        :user_no="dataObj.user_no"
        :contentNum="dataObj.no"
      />
    </div>

    <Modal v-show="isModalShow" :categoryList="categoryList"/>
  </div>
</template>

<script>
import BasicContent from "./BasicContent.vue";
import Header from "./Header.vue";
import Modal from "./Modal.vue";
import Sponsored from "./Sponsored.vue";
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
      currentSort: "오름차순",
      categoryList: null,
      sponsoredList: null
    };
  },

  components: {
    BasicContent,
    Header,
    Modal,
    Sponsored
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
    axios
      .get("http://comento.cafe24.com/category.php", {})
      .then(response => (this.categoryList = response.data.list))
      .catch(error => console.log(error));
    axios
      .get("http://comento.cafe24.com/ads.php", {
        params: {
          page: 1,
          limit: 20
        }
      })
      .then(response => (this.sponsoredList = response.data.list))
      .catch(error => console.log(error));
  },
  computed: {
    showList: function() {
      return this.dataList.filter(data =>
        this.filterList.includes(data.category_no)
      );
    },
    listWithAds: function() {
      let result = [];
      this.dataList.forEach((data, index) => {
        if (index && index % 4 === 0) {
          result.push("ad");
        } else {
          result.push("content");
        }
        return result;
      });
    }
  },
  methods: {
    handleScroll: function(evt, el) {
      if (window.scrollY > 50) {
        console.log("HALP");
      }
      return window.scrollY > 100;
    }
  }
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

