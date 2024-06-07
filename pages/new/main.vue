<template>
  <view class="container">
    <view class="activity-card" v-for="(activity, index) in activities" :key="index" @tap="navigateTo(activity.url)">
      <image class="activity-image" :src="activity.image"/>
      <view class="activity-content">
        <text class="activity-title">{{ activity.title }}</text>
        <view class="activity-break"></view>
        <text class="activity-description">{{ activity.description }}</text>
        <view class="activity-footer">
          <image class="activity-avatar" :src="activity.avatar"/> <!-- 替换为头像的路径 -->
          <view class="activity-info">
            <text class="activity-source">{{ activity.source }}</text>
            <text class="activity-time">{{ activity.time }}</text>
          </view>
        </view>
      </view>
    </view>
    <web-view v-if="currentUrl" :src="currentUrl"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          image: '/static/images/24053101.png',
          title: '虚实交融探前路 技术磨砺显真章——计算机系2023级数字媒体技术专业赴天津开展专业认识实习',
          description: '为帮助学生深入了解三维动画和包装设计领域的前沿动态，为其职业生涯打下坚实基础…',
          source: '计信之路',
          time: '2024-05-31 16:48',
          avatar: '/static/images/avatar.png',
          url: 'https://mp.weixin.qq.com/s/QeWaQ70SfLwJ1AWuJppf_w'
        },
        {
          image: '/static/images/24053102.png',
          title: '走进影视行业 感受技术魅力——计算机系2023级数字媒体技术专业赴北京开展专业认识实习',
          description: '为增强学生对专业的认识，提高学生的专业素养，2024年5月8日至10日，河北水利…',
          source: '计信之路',
          time: '2024-05-31 16:48',
          avatar: '/static/images/avatar.png',
          url: 'https://mp.weixin.qq.com/s/8TIScdWrCnUMe4LyMOREhg'
        }
      ],
      currentUrl: '',
    };
  },
  methods: {
    navigateTo(url) {
      this.currentUrl = url;
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20rpx;
  background-color: #ffffff;
}

.header {
  display: flex;
  align-items: center;
  padding-bottom: 20rpx;
}

.activity-break {
  height: 20rpx;
}

.back-icon {
  width: 40rpx;
  height: 40rpx;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
  margin-left: 20rpx;
}

.activity-card {
  margin-bottom: 40rpx;
  border-bottom: 1rpx solid #f0f0f0;
  padding-bottom: 20rpx;
}

.activity-image {
  width: 100%;
  border-radius: 10rpx;
}

.activity-content {
  padding-top: 20rpx;
}

.activity-title {
  font-size: 32rpx;
  font-weight: bold;
}

.activity-description {
  font-size: 28rpx;
  color: #666666;
  margin-top: 10rpx;
}

.activity-footer {
  display: flex;
  align-items: center;
  margin-top: 10rpx;
}

.activity-avatar {
  width: 60rpx; /* 调整为你需要的大小 */
  height: 60rpx; /* 调整为你需要的大小 */
  border-radius: 50%;
}

.activity-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10rpx; /* 调整为你需要的间距 */
}

.activity-source {
  font-size: 28rpx;
  color: rgb(93, 152, 247);
}

.activity-time {
  font-size: 24rpx;
  color: #aaaaaa;
}
</style>