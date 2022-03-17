<!-- 头部 -->
<template>
<div class="header">
  <div class="title">
       <img src='@/assets/imgs/music.png' alt=''/>
        <span>网易云音乐</span>
  </div>
  <div class="search">
    <button
        class='header-bar__btn el-icon-arrow-left'
        title='返回'
      />
    <el-input prefix-icon='el-icon-search' type= "text" placeholder="搜索歌曲"/>
  </div>
  <div class="message">
    <img src="" alt="">
    <span>{{name}}</span>
  </div>
</div>
</template>
<script>

export default {
  name: 'Header',
  data () {
    return {
      name: 'czy'
    }
  }
}
</script>

<style scoped lang='scss'>
.header{
  display: flex;
  height: 54px;
  background-color:rgb(236,65,65);
  line-height: 49px;
}
.title{
  display: flex;
  font-size: 1.2em;
  align-items: center;
  color:aliceblue;
  min-width: 200px;
  img{
    width:28px;
    height:28px;
    margin: 0 8px 0 18px;
  }
  span{
    margin-left: 5px;
  }
}
.search{
  flex: 1;
  min-width: 150px;
  .header-bar__btn{
    width: 24px;
    height: 24px;
    border-radius:10px;
    border:0;
    background-color: rgb(217,59,59);
    margin: 0 8px 0 8px;
  }
  .el-input {
    width: 30%;
  }
}
.el-input ::v-deep .el-input__inner {
  background-color: rgb(217,59,59);
  border: none;
  border-radius: 20px;
}
</style>
