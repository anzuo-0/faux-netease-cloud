<!--  -->
<template>
  <div class='slide'>
    <!-- 放入超链接和图片 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.slide{
  width: 52%;
  /* 不缩放 */
  flex-shrink: 0;
  img {
    border-radius: 8px;
  }
}

</style>
