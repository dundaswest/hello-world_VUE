<template>
  <div class="mainContainer" v-on:scroll="handleScroll">
    <div class="main" v-bind:class="{modalBackground: isModalShow }">
      <h1></h1>
      <Header/>
      <div>
        <div v-for="(dataObj, index) in dataList" v-bind:key="index">
          <BasicContent
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
          <!-- 4번째 content마다 sponsored Compoent를 붙임 -->
          <!-- adsLoading(광고 Data loading이 끝나면 render) -->
          <div v-if="(index + 1) % 4 === 0 && !adsLoading">
            <Sponsored :index="Math.floor((index + 1)/4)"/>
          </div>
        </div>
      </div>

      <Modal v-if="categoryList" v-show="isModalShow" :categoryList="categoryList"/>
    </div>
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
      filterList: null,
      currentSort: "asc",
      categoryList: null,
      sponsoredList: [],
      page: 1,
      adsLoading: true
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
    this.getCategoryList();
    this.getAdsList();
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    //filterList(사과,코코넛 등등 체크한 category)가 바뀔 때마다 dataList를 filter된 list로 set
    filterList: function(val) {
      this.dataList = this.dataList.filter(data =>
        val.includes(data.category_no)
      );
    },
    currentSort: function(val) {
      let sorted = this.dataList.slice();
      if (this.currentSort === "asc") {
        sorted.sort((a, b) => parseInt(a.no) - parseInt(b.no));
      } else {
        sorted.sort((a, b) => parseInt(b.no) - parseInt(a.no));
      }
      this.dataList = sorted;
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
        .then(response => {
          let filteredResult = response.data.list;
          const filterList = this.filterList;
          if (filterList) {
            filteredResult = filteredResult.filter(data =>
              filterList.includes(data.category_no)
            );
          }

          if (this.currentSort === "asc") {
            this.dataList.push(...filteredResult);
          } else {
            this.dataList.unshift(...filteredResult);
          }
        })
        .catch(error => console.log(error));
      this.page = this.page + 1;
    },
    sortList: function() {
      let sorted = this.dataList.slice();
      if (this.currentSort === "asc") {
        this.dataList.sort((a, b) => parseInt(a.no) - parseInt(b.no));
      } else {
        this.dataList.sort((a, b) => parseInt(b.no) - parseInt(a.no));
      }
      this.dataList = sorted;
    },
    getCategoryList: function() {
      axios
        .get("http://comento.cafe24.com/category.php", {})
        .then(response => (this.categoryList = response.data.list))
        .catch(error => console.log(error));
    },
    getAdsList: function() {
      axios
        .get("http://comento.cafe24.com/ads.php", {
          params: {
            page: this.page
          }
        })
        .then(response => {
          this.sponsoredList.push(...response.data.list);
          //response 받기 완료
          this.adsLoading = false;
        })
        .catch(error => console.log(error));
    },
    handleScroll: function(evt) {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.getContentList(this.page);
        this.getAdsList(this.page);
      }
    }
  }
};
</script>


<style lang="less">
.mainContainer {
  width: 100%;
  height: 100%;
  display: flex;
}
.main {
  margin: 0 auto;
  border: 1px solid black;
  width: 70%;
  height: 70%;
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

