<template>
  <div id="ModalContainer modal fade">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">필터</h5>
        <div id="close" v-on:click="handleCloseBtnClick">X</div>
      </div>
      <div id="categoryDiv">
        <div class="category" v-for="categoryObj in categoryList" v-bind:key="categoryObj.no">
          <input
            type="checkbox"
            v-bind:num="categoryObj.num"
            v-bind:value="categoryObj.no"
            v-on:click="handleCheckBoxClick"
          >
          <label>{{categoryObj.name}}</label>
        </div>
      </div>
      <div class="modal-footer">
        <button id="saveBtn" v-on:click="handleSendClick">저장</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ModalContainer",
  data() {
    return { categoryList: null, checkedList: [] };
  },
  methods: {
    handleCheckBoxClick: function(event) {
      console.log(event.target);
      this.checkedList.push(event.target.value);
    },
    handleCloseBtnClick: function() {
      this.$parent.isModalShow = false;
    },
    handleSendClick: function(event) {
      this.$parent.filterList = this.checkedList;
    }
  },
  mounted() {
    axios
      .get("http://comento.cafe24.com/category.php", {})
      .then(response => (this.categoryList = response.data.list))
      .catch(error => console.log(error));
  }
};
</script>
<style lang="less">
#ModalContainer {
  display: flex;
  height: 300px;
  width: 600px;
  margin: 3px;
  flex-direction: column;
  padding: 5px;
  position: absolute;
  margin: 0px auto;
}
#modal-header {
  font-size: 15px;
  font-weight: bold;
  border: none;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
#close {
  margin-left: 3px;
}
#categoryDiv {
  margin: 20px;
  padding: 10px;
  display: flex;
}
.category {
  margin: 30px 30px;
}
label {
  margin-left: 5px;
}
#btnDiv {
  display: flex;
  justify-content: flex-end;
}
#saveBtn {
}
</style>
