<template>
  <div id="ModalContainer">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">필터</h5>
        <div id="close" v-on:click="handleCloseBtnClick">X</div>
      </div>
      <div id="categoryDiv">
        <div class="category" v-for="categoryObj in categoryList" v-bind:key="categoryObj.no">
          <input
            type="checkbox"
            checked
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
export default {
  name: "ModalContainer",
  props: {
    categoryList: Array
  },

  data() {
    return { checkedList: [] };
  },
  created() {
    this.checkedList = this.categoryList.map(category => category.no);
  },
  methods: {
    handleCheckBoxClick: function(event) {
      const value = event.target.value;
      const isChecked = event.target.checked;

      if (isChecked) {
        this.checkedList.push(value);
      } else {
        this.checkedList = this.checkedList.filter(
          listItem => listItem !== value
        );
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
  }
};
</script>
<style lang="less">
#ModalContainer {
  display: flex;
  height: 300px;
  width: 600px;
  flex-direction: column;
  position: fixed;
  top: -100%;
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
</style>
