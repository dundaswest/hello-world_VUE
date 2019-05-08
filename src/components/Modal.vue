<template>
  <div id="ModalContainer">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">필터</h5>
        <div id="close" v-on:click="handleCloseBtnClick">X</div>
      </div>
      <div id="categoryDiv">
        <div class="category" v-for="categoryObj in categoryList" v-bind:key="categoryObj.no">
          <input type="checkbox" v-bind:value="categoryObj.no" v-on:click="handleCheckBoxClick">
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
      const num = event.target.value;
      const index = this.checkedList.indexOf(num);

      if (index === -1) {
        this.checkedList.push(num);
      } else {
        this.checkedList.splice(index, 1);
      }
    },
    handleCloseBtnClick: function() {
      this.$parent.isModalShow = false;
    },
    handleSendClick: function(event) {
      this.$parent.filterList = this.checkedList;
      this.$parent.firstMounted = false;
      this.$parent.isModalShow = false;
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
  flex-direction: column;
  position: absolute;
  top: -150%;
  bottom: -100%;
  right: -100%;
  left: -100%;
  margin: auto;
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
