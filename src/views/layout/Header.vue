<!-- 头部 -->
<template>
<div class="header">
  <div class="title">
       <img src='@/assets/imgs/music.png' alt=''/>
        <div>网易云音乐</div>
  </div>
  <div class="search">
    <button
        class='header-bar__btn el-icon-arrow-left'
        title='返回'
        @click='handleGoBack'
      />
    <el-input prefix-icon='el-icon-search' class='search-input'><el-button>搜索</el-button></el-input>
  </div>
  <div class="message">我的信息</div>
</div>
</template>
<script>
// import '@/assets/icons/iconfont'
export default {
  name: 'Header',
  data () {
    return {}
  }
}
</script>

<style scoped lang='scss'>
.header{
  display: flex;
  height: 49px;
  background-color:rgb(236,65,65);
  line-height: 49px;
}
.title{
  display: flex;
  font-size: 24px;
  align-items: center;
  color:aliceblue;
  width:240px;
  img{
    width:28px;
    height:28px;
    margin: 0 8px 0 18px;
  }
}
.search{
  flex: 1;
  .header-bar__btn{
    width: 24px;
    height: 24px;
    border-radius:10px;
    border:0;
    background-color: rgb(217,59,59);
    margin: 0 8px 0 8px;
  }
  .el-input{
      width: 250px;
      background-color: rgb(217,59,59);
      border-radius: 20px;
  }
}

</style>
