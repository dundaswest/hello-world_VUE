<template>
  <div id="headerContainer">
    <div id="filter" v-on:click="handleFilterClick">
      <button>필터</button>
    </div>
    <div id="sort">
      <span id="asc">
        <span>오름차순</span>
      </span>
      <span id="dsc">
        <span>내림차순</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerContainer",
  methods: {
    handleFilterClick: function() {
      console.log("filterClicked");
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
#asc,
#dsc {
  margin: 3px;
}
</style>
