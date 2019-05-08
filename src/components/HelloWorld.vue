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
      dataList: [],
      firstMounted: true,
      isModalShow: false,
      filterList: [],
      currentSort: "오름차순",
      categoryList: null,
      sponsoredList: null,
      page: 1
    };
  },

  components: {
    BasicContent,
    Header,
    Modal,
    Sponsored
  },

  mounted() {
    this.getContentList(this.page);
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
    window.addEventListener("scroll", this.handleScroll);
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
    getContentList: function(page) {
      axios
        .get("http://comento.cafe24.com/request.php", {
          params: {
            page: page,
            ord: "asc"
          }
        })
        .then(response => this.dataList.push(...response.data.list))
        .catch(error => console.log(error));
      this.page = this.page + 1;
    },
    handleScroll: function(evt) {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.getContentList(this.page);
      }
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

