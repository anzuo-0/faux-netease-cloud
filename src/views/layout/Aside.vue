<!-- 侧边栏 -->
<template>
  <div class="aside">
    <el-menu>
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
     navLists:[]
    }
  },
  mounted: {
  //  this.navLists = this.$router.options.routes.filter((el) => el.meta);
  }
}
</script>

<style  scoped>
.aside {
  background-color: rgb(194, 12, 12);
}
.el-menu{
  width: 200px;
}
</style>
