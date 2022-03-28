<!-- 底部音乐播放器 -->
<template>
  <div class='bottom'>
    <div class='left'>
      <img
        :src = 'music.al.picUrl'
        alt = ''
        @click = 'toMusicDetailPage'
      />
      <p style="height: 8px;font-size: 10px;">{{music.name}}</p>
      <br>
      <span style="color: gray;font-size: 10px;">{{music.ar[0].name}}</span>
    </div>
    <div class='right'>
        <el-row>
          <el-button class = "play">
            <i class="el-icon-video-pause"></i>
          </el-button>
        </el-row>
        <el-row>
          <el-col :span="18">
            <!--秒数通过 过滤器处理成看得懂的样式-->
            <span class="process">{{this.musicDuration | timeFormat}}</span>
            <!--音乐播放进度条-->
            <el-slider v-model="musicDuration" :max="totalDuration" @change="musicDurationChange"
            :show-tooltip="false"></el-slider>
            <span>{{totalDuration | timeFormat}}</span>
          </el-col>
          <audio :src="musicUrl" autoplay class="playMusicAudio"></audio>
          <!-- <el-col :span="6"> -->
            <!--音量控制-->
            <!-- <img src="@/assets/imgs/laba.png" v-if="musicVolume!==0" alt="" @click="silence" class="laba">
            <img src="@/assets/imgs/shutUp.png" v-else alt="" @click="silence" class="laba">
            <el-slider v-model="musicVolume" :show-tooltip="false" style="width: 200px"
              @change="musicVolumeChange">
            </el-slider>
          </el-col> -->
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttom',
  data () {
    return {
      // 播放音乐的链接
      musicUrl: '',
      // 当前音乐详情对象
      music: {
        name,
        al: {
          picUrl: ''
        },
        ar: [
          {
            name: ''
          }
        ]
      },
      // 当前音乐的进度条
      musicDuration: 0,
      // 当前音乐的id
      curId: 0,
      // 总进度条
      totalDuration: 0,
      // 默认是否在播放
      isPlay: false,
      // 当前播放的歌单的所有歌曲的url和其他信息
      currentMusicListInfo: [],
      // 当前播放的歌单的id
      songListInfo: []
    }
  },
  methods: {
    toMusicDetailPage () {},
    // 设置当前播放url
    setMusicUrl (mUrl, detail) {
    // 设置关于音乐的链接和歌曲信息
      this.musicUrl = mUrl
      this.music = detail
      this.curId = detail.id
      // 将当前轮播图传来的歌曲id放入歌单中
      this.playListInfo.push(detail.id)
      this.setAudioTagsInfo()
    },
    // 设置audio的各种信息
    setAudioTagsInfo () {
      const audio = this.$('.playMusicAudio')[0]
      // 监听audio的timeUpdate事件
      audio.addEventListener('timeupdate', () => {
        // 获取歌曲的总长度 example: 257s
        this.totalDuration = audio.duration
        // 获取歌曲时间
        this.musicDuration = audio.currentTime
        // 当前歌曲播放完毕自动播放下一首
        if (audio.currentTime >= audio.duration) {
          this.changeNextMusic()
        }
      })
      // 更新音乐播放状态
      this.isPlay = true
    },
    // 音乐进度条值变化的方法
    musicDurationChange () {
      if (this.totalDuration === 0) return
      const audio = this.$('.playMusicAudio')[0]
      audio.currentTime = this.musicDuration
    },
    // 接受子路由传递过来的歌单信息
    async setSongListInfo (songList, curId) {
      this.playListInfo = songList
      // 将当前歌单信息放入localStorage
      window.localStorage.setItem('playList', songList)
      // 设置当前歌单点击需要播放的音乐链接
      const res = await this.$http.get('song/url', { params: { id: curId } })
      if (res.data.data[0].url === null) {
        this.$message.info('当前歌曲暂不可用,已为您自动跳过')
        this.curId = curId
        this.changeNextMusic()
      } else {
        this.musicUrl = res.data.data[0].url
        // 设置当前歌单的详细信息
        this.$http.get('song/detail', { params: { ids: curId } }).then(res => {
          this.music = res.data.songs[0]
        })
        // 设置当前播放音乐的id
        this.curId = curId
        // 设置audio的各种信息
        this.setAudioTagsInfo()
      }
    },
    // 根据id获取音乐详情
    getMusicDetail (musicId) {
      this.$http.get('song/detail', { params: { ids: musicId } }).then(res => {
        this.music = res.data.songs[0]
      })
    },
    // 根据id获取音乐url
    getMusicUrl (musicId) {
      this.$http.get('song/url', { params: { id: musicId } }).then(res => {
        this.musicUrl = res.data.data[0].url
      })
    },
    // 切换下一首歌
    changeNextMusic () {
      const nextOne = this.playListInfo[this.playListInfo.findIndex(target => {
        return target === this.curId
      }) + 1]
      this.setSongListInfo(this.playListInfo, nextOne)
    },
    // 切换上一首歌
    changePrevMusic () {
      const prevOne = this.playListInfo[this.playListInfo.findIndex(target => {
        return target === this.curId
      }) - 1]
      this.setSongListInfo(this.playListInfo, prevOne)
    }
  }
}
</script>

<style  scoped lang='scss'>
.bottom {
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 10;
  height: 100px;
  width: 100%;
  background-color: #b7abd3;
}
.left{
  width: 200px;
  img{
    width: 60px;
    height: 60px;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px;
  }
}
.right{
  flex: 1;
  .el-row{
    height: 50%;
  }
  .play{
  font-size:28px;
  background-color:transparent;
  border-style:none;
  margin-left: 50%;
  }
  .process{
    margin-left: 50%;
  }
}

</style>
