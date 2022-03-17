<!-- 侧边栏 -->
<template>
  <div class="navigator">
    <el-menu
      class="navigator-menu"
      text-color="#333"
      @select="handleSelect">
        <!-- 一个菜单 -->
        <!-- 遍历路由,获取路由的索引值和value -->
        <!-- 判断路由有没有子路由,没有子路由或者子路由的长度为1且没有名字 -->
        <el-menu-item v-for="(navList_item, i) in navLists" :key="i" :index="navList_item.path">
          <!-- 显示路由的icon和title -->
          <span slot="title">{{ navList_item.meta.title }}</span>
        </el-menu-item>
        <!-- 如果有子路由 -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      navLists: []
    }
  },
  mounted () {
    this.navLists = this.$router.options.routes.filter((el) => el.meta)
    this.$forceUpdate()
  },
  methods: {
    handleSelect (key) {
      this.$forceUpdate()
      this.$router.push(key)
    }
  }
}
</script>

<style scoped lang='scss'>
.navigator {
  background: #fff;
  border-right: 1px rgb(197, 197, 197) solid;
  overflow: scroll;
  .el-menu{
  width: 240px;
  height: 500px;
  }
/* 修改各式webkit浏览器的滚动条样式 */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    opacity: 0;
  }
  &::-webkit-scrollbar-thumb {
    opacity: 0;
  }

  &:hover {
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.07);
    }
  }
  & > ul {
    border-right: 0;
  }
}
@mixin active-after-container{
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.navigator-menu {
  &::v-deep div > i,
  &::v-deep .el-menu-item > i {
    margin-right: 10px;
    &:last-child {
      margin-top: -5px;
      margin-right: 5px;
    }
  }
  & > li {
    margin:8px;
  }
  & .el-menu-item {
    @include active-after-container;
    &.is-active,&:hover{
      background-color: rgb(214, 214, 214,.5) !important;
    }
    // &.is-active:after {
    //   @include active-after;
    // }
    &:hover {
      background-color: rgb(214, 214, 214,.5) !important;
    }
    &.is-active > i,
    &.is-active > span {
      color: #000;
      font-weight: bold;
      font-size: 1.2em;
    }
  }
}
</style>
