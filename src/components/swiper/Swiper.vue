<!-- 轮播图 -->
<template>
  <div id ='wrap-swiper'>
    <!-- 存放图片 -->
    <div class='swiper'
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend ="touchEnd">
      <slot></slot>
    </div>
    <!-- 存放小圆点 -->
    <slot name= 'indicator'></slot>
    <div class= 'indicator'>
      <slot name= 'indicator'>
        <div v-for='(item, index) in slideCount'
          class='indi-item'
          :class='{ active: index === currentIndex - 1 }'
          :key='index'
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
    },
    // 动画切换的时间,平移这个动画的速度
    animDuration: {
      type: Number,
      default: 500
    }
    // 拖动的比例 判断是否切换下一个swiperItem
    // 是否显示下方小圆点
  },
  data () {
    return {
      slideCount: 0, // 圆的个数，初始为0，挂载完成后获取dom更新数目
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false, // 是否正在滚动
      zIndex: 2,
      initial: 0 // 初始展示哪一项的索引，默认为0
    }
  },
  mounted () {
    // 挂载完成后开启定时，多少秒后执行
    // setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
    setTimeout(() => {
      // 1.操作Dom 在前后各添加一张slide
      this.handleDom()
      // 2.开启轮播
      this.startTimer()
    }, 400)
  },
  methods: {
    // 操作元素
    handleDom () {
      // 获取到元素
      const swiperEl = document.querySelector('.swiper')
      const slidesEls = swiperEl.getElementsByClassName('slide')
      // 小圆点的个数就是等于slider.length
      this.slideCount = slidesEls.length
      const len = slidesEls.length
      //   // 当图片的个数大于1时
      if (this.slideCount > 1) {
        // 获取到第一张和最后一张图的副本节点，利用cloneNode(true)
        const cloneFirst = slidesEls[0].cloneNode(true)
        const cloneLast = slidesEls[this.slideCount - 1].cloneNode(true)
        // 在第一张图的前面和最后一张图的后面插入节点
        swiperEl.insertBefore(cloneLast, slidesEls[0])
        swiperEl.appendChild(cloneFirst)
        // 做一个3d的效果，首先获取到左边的图片和右边的图片，通过索引来获取
        // 我们确保3个索引都是合法的
        this.initial = this.interval < 0 ? 0 : this.initial >= len ? len - 1 : this.initial
        // 这个是左边的
        let temp1 = this.initial - 1
        // 这个是中间的
        const temp2 = this.initial
        // 这个是右边的
        let temp3 = this.initial + 1
        // 左边的可能会为-1，索引我们需要判断
        temp1 = temp1 < 0 ? (temp1 = len + temp1) : null
        // 右边的可能会大于长度，所以也需要判断
        temp3 = temp3 >= len ? (temp3 = temp3 - len) : null
        // offsetWidth返回一个元素的布局宽度
        // 获取到元素样式;
        this.swiperStyle = swiperEl.style
        const position = 50
        // let transform = `translate(-${position}%, -${position}%) scale(0.6)`
        // let zIndex = 0
        // let className = 'slide'
        // switch (index) {
        //   case temp2:
        //     zIndex = 2
        //     transform = `translate(-${position}%, -${position}%) scale(1)`
        //     className = 'slide active'
        //     break
        //   case temp1:
        //     zIndex = 1
        //     transform = `translate(-${position - 80}%, -${position}%) scale(0.85)`
        //     className = 'slide'
        //     break
        //   case temp3:
        //     zIndex = 1
        //     transform = `translate(-${position + 80}%, -${position}%) scale(0.85)`
        //     className = 'slide'
        //     break
        // }
      
      }
      this.setTransform()
    },
    // // setTransform函数（设置滚动到的位置）：setTransform函数（设置滚动到的位置）
    setTransform (position) {
      // transform 属性向元素应用2D或3D转换,对元素进行旋转、缩放、移动或倾斜。
      // -webkit 是表示针对 safari 浏览器支持，-ms表示针对 IE 浏览器支持。
      // 定义转换，只是用 X 轴的值。
      // 模板字符串:${变量表达式},position是一个变量
      this.swiperStyle.transform = `translate(-${position}%, -${position}%, )`
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px, 0, 0)`
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px, 0, 0)`
    },
    // // 开启轮播定时
    startTimer () {
      // window.setInterval按照指定的周期（以毫秒计）来调用函数或计算表达式
      this.playTimer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval)
    },

    stopTimer () {
      window.clearInterval(this.playTimer)
    },
    // // 滑动到哪个位置
    scrollContent (currentPosition) {
      // 1.设置正在滚动
      this.scrolling = true
      //   // 2.开始滚动动画
      //   // transition用于在一定的时间内平滑的过度
      this.swiperStyle.transition = 'transform ' + this.animDuration + 'ms'
      //   这里应该可以设置两边图片的大小
      this.setTransform(currentPosition)
      //   // 3.判断滚动到的位置,校验正确的位置
      this.checkPosition()
      // 4.滚动完成
      this.scrolling = false
    },
    // // 校验到正确的位置
    checkPosition () {
      // 延时等动画
      window.setTimeout(() => {
        // 1.校验正确的位置
        // [1,2,3,4]--[4',1,2,3,4,1']当到达由1'变为1和4'变为4时需要瞬间变换
        // transition可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。
        this.swiperStyle.transition = '0ms'
        //
        if (this.currentIndex > this.slideCount) {
          this.currentIndex = 1
          this.setTransform(-this.currentIndex * this.totalWidth)
        } else if (this.currentIndex === 0) {
          this.currentIndex = this.slideCount
          this.setTransform(-this.currentIndex * this.totalWidth)
        }
      }, this.animDuration)
    },
    // // 控制上一张下一张
    previous () {
      this.changeItem(-1)
    },
    next () {
      this.changeItem(1)
    },

    changeItem (num) {
      // 1.移除定时器
      this.stopTimer()

      // 2.修改index和位置
      this.currentIndex += num
      this.scrollContent(-this.currentIndex * this.totalWidth)

      //   // 3.添加定时器
      this.startTimer()
    },
    touchStart (e) {
      // eslint-disable-line no-unused-vars
      // 1.如果正在滚动, 不可以拖动
      if (this.scrolling) return

      // 2.停止定时器
      this.stopTimer()

      // 3.保存开始滚动的位置
      this.startX = e.touches[0].pageX
    },
    touchMove (e) {
      // 1.计算出用户拖动的距离
      this.currentX = e.touches[0].pageX
      this.distance = this.currentX - this.startX
      const currentPosition = -this.currentIndex * this.totalWidth
      const moveDistance = this.distance + currentPosition

      // 2.设置当前的位置
      this.setTransform(moveDistance)
    },
    touchEnd () {
      // 1.获取移动的距离
      const currentMove = Math.abs(this.distance)
      // 2.判断最终的距离
      if (this.distance === 0) {
        return
      } else if (
        this.distance > 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        // 右边移动超过0.5
        this.currentIndex--
      } else if (
        this.distance < 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        // 向左移动超过0.5
        this.currentIndex++
      }
      // 3.移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth)
      // 4.移动完成后重新开启定时器
      this.startTimer()
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
}
.indicator {
  display: flex;
  position: absolute;
  bottom: 8px;
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

/*同一个元素的class之间不要加空格*/
.indi-item.active {
  background-color: rgb(236,65,65);
}
</style>
