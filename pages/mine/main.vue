<template>
  <div class="main">
    <image
        class="banner-bg"
        src="/static/images/mine-bg.png"
        mode="widthFix"
    />

    <div class="user-info">
      <!-- 头部信息 -->
      <div class="user-content flex align-center">
        <open-data
            class="user-content__avatar"
            type="userAvatarUrl"
        ></open-data>
        <div class="flex flex-column justify-center">
          <div class="mb-3">
            <open-data
                class="nick-name primary bg-white"
                type="userNickName"
                lang="zh_CN"
            ></open-data>
          </div>
          <div class="user-content__text">
            <div
                class="flex align-center"
                v-if="logged"
            >
              <span>已绑定Myscse账号</span>
              <i class="iconfont icon-v ml-1"></i>
            </div>
            <div v-else>未绑定Myscse账号</div>
          </div>
        </div>
      </div>

      <!-- 卡片 -->
      <div class="user-card bg-white">
        <div
            class="user-card__header flex align-center justify-between p-2"
            @click="viewInfo"
        >
          <div>查看个人信息</div>
          <i
              class="iconfont icon-more"
              style="font-size: 36rpx;"
          ></i>
        </div>
        <div class="user-card__content flex align-center justify-around py-3">
          <div
              class="user-card__section flex flex-column align-center justify-center"
              v-for="(section, i) in sections"
              :key="i"
          >
            <image
                class="user-card__icon"
                mode="widthFix"
                :src="section.icon"
            />
            <div
                class="gray"
                style="margin: 15rpx 0;"
            >{{ section.label }}
            </div>
            <div>{{ info[i] || '--' }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 单元格 -->
    <div class="cell-group mb-2 bg-white">
      <!--      <div-->
      <!--          class="cell flex align-center p-3"-->
      <!--          @click="toMiniProgram"-->
      <!--      >-->
      <!--        <i class="iconfont icon-block cell-icon ml-1 mr-3"></i>-->
      <!--        <div>前往意想社团</div>-->
      <!--        <i class="iconfont icon-arrow"></i>-->
      <!--      </div>-->
      <navigator
          class="cell flex align-center p-3"
          v-for="(cell, key) in cells"
          :key="key"
          :url="cell.url"
      >
        <i
            class="iconfont cell-icon ml-1 mr-3"
            :class="cell.icon"
        ></i>
        <div>{{ cell.title }}</div>
        <i class="iconfont icon-arrow"></i>
      </navigator>
    </div>

    <!-- 登录/取绑单元格 -->
    <div class="cell-group mb-2 bg-white">
      <div
          class="cell flex align-center p-3"
          @click="goToLogin"
      >
        <i class="iconfont icon-bind cell-icon ml-1 mr-3"></i>
        <div>{{ logged ? '取消绑定' : '绑定学号' }}</div>
        <i class="iconfont icon-arrow"></i>
      </div>
    </div>

    <div
        v-if="showMask"
        class="mask"
        @click="showMask = false"
    >
      <div class="mask-modal">
        <div>
          <image
              class="mask-modal__img"
              src="/static/images/img-modal.jpg"
              mode="widthFix"
          />
        </div>
        <div class="bg-white p-3">
          <div class="mask-modal__text gray">
            解绑账号后会清除本地缓存数据，如个人信息、成绩、课表信息等，但在下次登录时仍会重新获取。
          </div>
          <div class="footer flex align-center justify-between mt-4">
            <div
                class="footer-btn bg-white"
                style="border: 1rpx solid #afafaf;color: #afafaf;"
                @click="showMask = false"
            >取消
            </div>
            <div
                class="footer-btn"
                style="border: 1rpx solid #ff7474;background: #ff7474;color: white"
                @click="logout"
            >解除绑定
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sections = [
  {
    label: '年级',
    icon: '/static/icons/icon-major.png'
  },
  {
    label: '姓名',
    icon: '/static/icons/icon-student.png'
  },
  {
    label: '绩点',
    icon: '/static/icons/icon-grade-point.png'
  }
]
const cells = [
  {
    title: '关于本程序',
    icon: 'icon-code',
    url: '../about/main'
  },
  {
    title: '更多信息',
    icon: 'icon-list',
    url: '../more/main'
  }
]

export default {
  data() {
    return {
      showMask: false, // 是否显示遮罩层
      sections,
      cells
    }
  },

  computed: {
    logged() {
      return this.$store.state.logged
    },

    info() {
      const info = this.$store.state.info
      console.log(info)
      if (info.length > 0) {
        return [info[2].value, info[1].value, info[6].value]
      }
      return info
    }
  },

  methods: {
    goToLogin() {
      if (this.logged) {
        this.showMask = true
      } else {
        uni.navigateTo({url: '../login/main'})
      }
    },

    viewInfo() {
      if (this.logged) {
        uni.navigateTo({url: '../user-info/main'})
      } else {
        uni.showModal({
          content: '您还没有绑定 Myscse 账号哦',
          confirmText: '去绑定',
          confirmColor: '#5d97f7',
          success({confirm}) {
            if (confirm) {
              uni.navigateTo({url: '../login/main'})
            }
          }
        })
      }
    },

    toMiniProgram() {
      uni.navigateToMiniProgram({
        appId: 'wx7a674884ec88d424'
      })
    },

    logout() {
      this.showMask = false
      this.$store.commit('logout')
      uni.navigateTo({url: '../login/main'})
    }
  },

  onShareAppMessage() {
    return {
      title: '个人中心',
      path: '/pages/mine/main'
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #5d97f7;
$gray: #afafaf;
$radius: 28rpx;
$shadow: 0 0 20rpx 10rpx rgba(0, 0, 0, 0.01);
.main {
  position: relative;
  min-height: calc(100vh - 60rpx);
  padding-top: 60rpx;
}

.banner-bg {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
}

.user-info {
  position: relative;
  z-index: 999;
  padding: 50rpx;
}

.user-content__avatar {
  width: 150rpx;
  height: 150rpx;
  margin-right: 40rpx;
  border-radius: 50%;
  background-size: cover;
  overflow: hidden;
}

.user-content__text {
  color: #969696;
}

.nick-name {
  max-width: 300rpx;
  padding: 10rpx 15rpx;
  font-size: 32rpx;
  border-radius: 10rpx;
  overflow: hidden;
}

.user-card {
  margin-top: 40rpx;
  border-radius: $radius;
  box-shadow: $shadow;
}

.user-card__header {
  border-bottom: 1rpx solid #ececec;
}

.user-card__icon {
  width: 100rpx;
  height: 100rpx;
}

.cell {
  border-bottom: 1rpx solid #ececec;
}

.cell:last-child {
  border: none;
}

.cell-icon {
  font-size: 40rpx;
}

.icon-arrow {
  margin-left: auto;
}

.mask {
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: rgba(90, 90, 90, 0.3);
}

.mask-modal {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
  border-radius: $radius;
  overflow: hidden;
  animation: scale 0.3s;
}

@keyframes scale {
  from {
    transform: translateX(-50%) scale(0);
  }
  to {
    transform: translateX(-50%) scale(1);
  }
}

.mask-modal__img {
  width: 100%;
  display: block;
}

.mask-modal__text {
  text-align: justify;
}

.footer-btn {
  width: 43%;
  height: 63rpx;
  line-height: 63rpx;
  text-align: center;
  border-radius: $radius;
}
</style>