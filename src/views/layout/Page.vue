<!-- 整个页面 -->
<template>
  <div class="page-view">
    <page-header />
    <page-aside />
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
</style>
