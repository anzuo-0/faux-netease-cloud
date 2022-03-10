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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) scale(0.8);
  z-index: 0;
  transition: all ease-out 1.2s;
  img {
    border-radius: 8px;
  }
}

</style>
