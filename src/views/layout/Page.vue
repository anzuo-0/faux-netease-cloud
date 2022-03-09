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
  </div>
</template>

<script>
import PageHeader from './Header.vue'
import PageAside from './Aside.vue'
export default {
  name: 'page',
  components: {
    PageHeader,
    PageAside
  },
  data () {
    return {}
  }
}
</script>

<style  scoped>
.page-view {
  height: 100%;
  min-height: 100%;
}
.page-container {
  display: flex;
}
.page-aside {
  width: 216px;
}
.page-main {
  flex: 1;
  margin: 28px 20px 20px;
}
</style>
