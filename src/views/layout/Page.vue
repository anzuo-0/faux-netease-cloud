<!-- 整个页面 -->
<template>
  <div class="page-view">
    <page-header />
    <div id="scrollView" class="page-container">
      <page-aside />
      <main class="page-main">
        <router-view />
      </main>
    </div>
    <page-bottom />
  </div>
</template>

<script>
import PageHeader from './Header.vue'
import PageAside from './Aside.vue'
import PageBottom from './Bottom.vue'
export default {
  name: 'page',
  components: {
    PageHeader,
    PageAside,
    PageBottom
  },
  data () {
    return {}
  }
}
</script>

<style  scoped>
.page-header {
  position: fixed;
  left: 0;
  right: 0;
  top:0;
  z-index: 99;
}
.page-view {
  height: 100%;
  min-height: 100%;
}
.page-container {
  display: flex;
  position: absolute;
  top: 54px;
  bottom: 100px;
  left: 0;
  right: 0;
}
.page-aside {
  width: 216px;
  height: 100%;
}
.page-main {
  flex: 1;
  margin: 28px 20px 20px;
}
.page-bottom {
  position: fixed;
  bottom:0;
  z-index: 99;
  height: 100px;
}
</style>
