<!-- 发现音乐 -->
<template>
  <div class="findmusic">
    <swiper class="swiper">
      <swiper-item v-for='(item, index) in banners' :key='index'>
        <a :href="item.url">
          <img :src='item.imageUrl' alt='' />
        </a>
        <span class="slide-title">{{item.typeTitle}}</span>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from '@/components/swiper/Swiper'
import SwiperItem from '@/components/swiper/SwiperItem'
import { getBanners } from '@/api/swiper'
export default {
  components: { Swiper, SwiperItem },
  data () {
    return {
      banners: []
    }
  },
  created () {
    this.getBanners()
  },
  methods: {
    async getBanners () {
      const { status, data } = await getBanners()
      if (status === 200) {
        this.banners = data.banners
      }
      console.log(this.banners)
    }
  }
}
</script>

<style scoped lang = 'scss'>
.findmusic{
  margin-left: 100px;
  margin-right: 100px;
  height: 100%;
}
.swiper{
  height: 20%;
}
.slide-title{
    position: absolute;
    right: 0;
    bottom: 0;
    color: #fff;
    padding: 5px;
    border-radius: 8px 0;
    background-color: #ac97db;
  }
</style>
