<template>
  <div>
    <div id="header">
      <span id="category">{{category}}</span>
      <span id="contentNum">{{contentNum}}</span>
    </div>
    <div id="info">
      <span id="email">{{email}}</span>
      <span id="createdAt">{{createdAt}}</span>
    </div>
    <div id="textBox">
      <div id="title">{{title}}</div>
      <div id="message">{{message}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: "카테고리명",
      contentNum: "글번호",
      email: "이메일",
      createdAt: "작성일",
      title: "글제목",
      message: "글재목을 가져와라 어서"
    };
  }
};
</script>

<style lang="less">
#header {
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
}
#category,
#contentNum {
  margin: 10px;
}
#info,
#textBox {
  display: flex;
}
#textBox {
  flex-direction: column;
}
#email,
#createdAt {
  margin: 7px;
}
#title {
  font-weight: bold;
}
#email {
  padding-right: 5px;
  border-right: 2px solid black;
}
</style>
