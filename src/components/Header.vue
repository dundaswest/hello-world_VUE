<template>
  <div id="headerContainer">
    <div id="filter" v-on:click="handleFilterClick">
      <button>필터</button>
    </div>
    <div id="sortSection">
      <div class="asc" v-bind:class="{red: currentSort === asc}" v-on:click="handleSortClick()">
        <span>오름차순</span>
      </div>
      <div class="dsc" v-bind:class="{red: currentSort === dsc}" v-on:click="handleSortClick()">
        <span>내림차순</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerContainer",
  data() {
    return { currentSort: "asc", asc: "asc", dsc: "dsc" };
  },
  methods: {
    handleFilterClick: function() {
      this.$parent.isModalShow = !this.$parent.isModalShow;
    },
    handleSortClick: function() {
      this.currentSort = event.target.innerHTML === "오름차순" ? "asc" : "dsc";
      this.$parent.currentSort = this.currentSort;
      this.sortList();
    },
    sortList: function() {
      let dataList = this.$parent.dataList;
      if (this.currentSort === "asc") {
        dataList.sort((a, b) => parseInt(a.no) - parseInt(b.no));
      } else {
        dataList.sort((a, b) => parseInt(b.no) - parseInt(a.no));
      }
      this.$parent.dataList = dataList;
    }
  }
};
</script>
<style lang="less">
#headerContainer {
  display: flex;
  margin: 3px;
  justify-content: space-between;
  padding: 5px;
}
#filter {
  margin-left: 3px;
}
#sortSection {
  display: flex;
}
.asc,
.dsc {
  margin: 3px;
}
.red {
  color: red;
}
</style>
