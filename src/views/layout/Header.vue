<!-- 头部 -->
<template>
<div class="header">
  <div class="title">
       <img src='@/assets/imgs/music.png' alt=''/>
        <span>二十一</span>
  </div>
  <div class="search">
    <button
        class='header-bar__btn el-icon-arrow-left'
        title='返回'
      />
    <el-input placeholder="搜索单曲,歌手,视频,歌单" v-model="searchData" size="mini" suffix-icon="el-icon-search">
      <el-button slot="suffix" class="searchBtn" size="mini" @click="toSearchPage" style="border-style:none;background-color:transparent;"></el-button>
    </el-input>
  </div>
  <!-- 右侧登录区域 -->
  <div class="rightContainer">
    <img v-if="currentUserInfo === null" src= "@/assets/imgs/userIcon.png" class="userIcon">
    <img v-else :src="currentUserInfo.avatarUrl" class="userIcon">
    <span v-if="currentUserInfo === null" style="cursor:pointer;" @click="handleLogin">
      未登录
    </span>
    <span v-else>{{currentUserInfo.nickname}}</span>
    <el-button type="danger" @click="logout" v-if="currentUserInfo !== null" size="mini"
      style="height: 50%;margin-top: 10px;margin-left: 5px;">退出
    </el-button>
  </div>
</div>
</template>
<script>
import SearchPage from "@/views/search/SearchPage";
export default {
  name: 'Header',
  components: {
    SearchPage
  },
  data () {
    return {
      currentUserInfo: window.localStorage.getItem('currentUserInfo') === 'null' ? null : JSON.parse(window.localStorage.getItem('currentUserInfo')),
      searchData: ''
    }
  },
  methods: {
    toSearchPage () {
      if (this.searchData.trim() !== '') { // 搜索条件不为空
        // encodeURIComponent参数转换 应对中文参数
        this.$router.replace('/search/' + encodeURIComponent(this.searchData))
        // 调用子类的方法 实现搜索响应式
        this.$refs.child.toSingSearchPage()
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.header{
  display: flex;
  height: 54px;
  background-color:#ac97db;
  line-height: 49px;
}
.title{
  display: flex;
  font-size: 1.2em;
  align-items: center;
  color:rgb(255, 255, 255);
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
    background-color: #ac97db;
    margin: 0 8px 0 8px;
  }
  .el-input {
    width: 30%;
  }
}
.el-input ::v-deep .el-input__inner {
  background-color: #c6c0d1;
  opacity: 0.8;
  border: none;
  color: aliceblue;
  border-radius: 20px;
}
.rightContainer{
  display: flex;
  margin-right: 80px;
  .userIcon{
    border-radius: 50%;
    transform: scale(75%);
  }
}
</style>
