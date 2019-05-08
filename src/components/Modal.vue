<template>
  <div id="ModalContainer modal fade">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">필터</h5>
        <div id="close" v-on:click="handleCloseBtnClick">X</div>
      </div>
      <div id="categoryDiv">
        <input type="checkbox" name="category1" value="Bike" v-on:click="handleCheckBoxClick">카테고리1
        <input type="checkbox" name="category2" value="Bike">카테고리2
        <input type="checkbox" name="category3" value="Bike">카테고리3
      </div>
      <div class="modal-footer">
        <button id="saveBtn">저장</button>
      </div>
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
  margin: 30px 30px;
  padding: 10px;
  display: flex;
}
#btnDiv {
  display: flex;
  justify-content: flex-end;
}
#saveBtn {
}
</style>
