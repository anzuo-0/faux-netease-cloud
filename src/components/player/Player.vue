<!-- 播放器 -->
<template>
  <div class="player">
    <div class="left">
      <slot></slot>
    </div>
    <div class="main">hahh</div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'player',
  data () {
    return {
    }
  }
}
</script>

<style  scoped lang = "scss">
.player{
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 10;
  height: 100px;
  .left{
    width: 200px;
    background-color: red;
  }
}
</style>
