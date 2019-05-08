<template>
  <div id="ModalContainer">
    <div id="modalHeader">
      <div id="title">필터</div>
      <div id="close" v-on:click="handleCloseBtnClick">X</div>
    </div>
    <div id="categoryDiv">
      <input type="checkbox" name="category1" value="Bike" v-on:click="handleCheckBoxClick">카테고리1
      <input type="checkbox" name="category2" value="Bike">카테고리2
      <input type="checkbox" name="category3" value="Bike">카테고리3
    </div>
    <div id="btnDiv">
      <button id="saveBtn">저장</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalContainer",
  methods: {
    handleCheckBoxClick: function() {
      console.log("checkBoxClicked");
    },
    handleCloseBtnClick: function() {
      console.log("close");
    }
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
  top: -100%;
  bottom: -100%;
  left: -100%;
  right: -100%;
}
#modalHeader {
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
#close {
  margin-left: 3px;
}
#categoryDiv {
  margin: 30px 30px;
  padding: 10px;
  display: flex;
}
#btnDiv {
  display: flex;
  justify-content: flex-end;
}
#saveBtn {
  width: 40px;
}
</style>
