<!-- 轮播图 -->
<template>
  <div id ='wrap-swiper'>
    <!-- 存放图片 -->
    <div class='swiper'
      @mouseover="pause()"
      @mouseout="play()">
      <slot></slot>
    </div>
    <button class="slide-left-btn" @click="change('left')" >&lt;</button>
    <button class="slide-right-btn" @click="change('right')">&gt;</button>
    <!-- 存放小圆点 -->
    <slot name= 'indicator'></slot>
    <div class= 'indicator'>
      <slot name= 'indicator'>
        <div v-for='(item, index) in slideCount'
          class='indi-item'
          :class='{ active: index === currentIndex - 1 }'
          :key='index'
          @mouseover="showSlide(index)"
          @mouseout="auto()"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    // 循环滚动的时间间隔
    interval: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      slideCount: 0, // 圆的个数，初始为0，挂载完成后获取dom更新数目
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false, // 是否正在滚动
      initial: 0,
      isButton: false
    }
  },
  mounted () {
    // 挂载完成后开启定时，多少秒后执行
    // setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
    setTimeout(() => {
      // 1.操作Dom 在前后各添加一张slide,将前后的图片层级改变
      this.handleDom()
      // 2.开启轮播
      this.startTimer()
    }, 400)
  },
  methods: {
    // 操作元素
    handleDom (initial) {
      // 获取到元素
      const swiperEl = document.querySelector('.swiper')
      const slidesEls = swiperEl.getElementsByClassName('slide')
      this.swiperStyle = swiperEl.style
      // 这里的slideEls为一个数组，我们是不是可以遍历这个数组
      this.slideCount = slidesEls.length
      const len = slidesEls.length
      if (this.initial >= len) this.initial = 0
      if (this.initial < 0) this.initial = len - 1
      // this.initial = this.initial < 0 ? 0 : this.initial >= len ? 0 : this.initial
      const temp3 = this.initial
      let temp1 = this.initial - 1
      let temp2 = this.initial + 1
      temp1 = temp1 < 0 ? (temp1 = len + temp1) : temp1
      temp2 = temp2 >= len ? (temp2 = temp2 - len) : temp2
      console.log(temp1, temp3, temp2)
      for (let i = 0; i < slidesEls.length; i++) {
        if (i === temp3) {
          slidesEls[i].style.zIndex = 2
          slidesEls[i].style.transform = 'translate(-50%, -50%) scale(1)'
        } else if (i === temp1) {
          slidesEls[i].style.zIndex = 1
          slidesEls[i].style.transform = 'translate(-100%, -50%) scale(0.8)'
        } else if (i === temp2) {
          slidesEls[i].style.zIndex = 1
          slidesEls[i].style.transform = 'translate(0%, -50%) scale(0.8)'
        } else {
          slidesEls[i].style.zIndex = 0
          slidesEls[i].style.transform = 'translate(-50%, -50%) scale(0.8)'
        }
      }
      // this.slidesEls[i].style.transition = `${this.animDuration}ms`
      this.swiperStyle = swiperEl.style
      console.log(this.swiperStyle.transition)
    },
    // 当鼠标移到小圆点上的时候，显示的大图为小圆点所在索引的图片
    showSlide (index) {
      this.stopTimer()
      this.initial = index
      this.handleDom(this.initial)
      this.currentIndex = index + 1
    },
    auto () {
      this.startTimer()
    },
    // // setTransform函数（设置滚动到的位置）：setTransform函数（设置滚动到的位置）
    // // 开启轮播定时
    startTimer () {
      // window.setInterval按照指定的周期（以毫秒计）来调用函数或计算表达式
      this.playTimer = window.setInterval(() => {
        this.initial = this.currentIndex++
        this.handleDom(this.initial)
        this.checkPosition()
      }, this.interval)
    },
    stopTimer () {
      window.clearInterval(this.playTimer)
    },
    checkPosition () {
      // 延时等动画
      this.swiperStyle.transition = '0'
      window.setTimeout(() => {
        if (this.currentIndex > this.slideCount) {
          this.currentIndex = 1
          this.swiperStyle.transition = '0'
          this.handleDom(this.currentIndex)
        } else if (this.currentIndex === 0) {
          this.currentIndex = this.slideCount
          this.initial = this.currentIndex
          this.handleDom(this.initial)
        }
      }, 0)
    },
    change (dir) {
      this.stopTimer()
      if (dir === 'left') {
        this.currentIndex--
        this.currentIndex = this.currentIndex <= 0 ? (this.currentIndex = this.slideCount) : this.currentIndex
        this.initial++
        this.handleDom(this.initial)
      } else if (dir === 'right') {
        this.currentIndex++
        this.currentIndex = this.currentIndex >= this.slideCount ? 0 : this.currentIndex
        this.initial--
        this.handleDom(this.initial)
      }
    },
    play () {
      this.pause()
      this.startTimer()
    },
    pause () {
      this.stopTimer()
    }
  }
}
</script>

<style  scoped>
/* 设置轮播图占页面的高度 */
#wrap-swiper {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 240px;
}
.swiper {
  display: flex;
  width: 100%;
  min-width: 1000px;
  height: 200px;
  justify-content: center;
  transition: 300ms;
}
.indicator {
  display: flex;
  position: absolute;
  bottom: 0px;
  /* 使宽度撑满屏幕,可用width:100%代替 */
  left: 0;
  right: 0;
  /* 用于设置弹性盒子内元素在主轴（横轴）方向上的对齐方式。 */
  justify-content: center;
}

/* 小圆点 */
.indi-item {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  margin: 0 5px;
}
.slide-left-btn, .slide-right-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  font-size: 18px;
  color: rgb(241, 241, 241);
  border-radius: 50%;
  background-color: rgb(120,99,99,.6);
  z-index: 99;
  border: none;
}
.slide-left-btn:hover, .slide-right-btn:hover {
  color: #fff;
}
.slide-left-btn {
  left: 4%;
}

.slide-right-btn {
  right: 4%;
}
/*同一个元素的class之间不要加空格*/
.indi-item.active {
  background-color: rgb(236,65,65);
}
</style>
