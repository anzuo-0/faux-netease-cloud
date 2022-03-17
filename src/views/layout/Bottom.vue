<!-- 底部音乐播放器 -->
<template>
  <div class="buttom">
    <player></player>
  </div>
</template>

<script>
import Player from '@/components/player/Player'
export default {
  name: 'buttom',
  components: {
    Player
  },
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.buttom{
  display: block;
  height: 100px;
}
</style>
