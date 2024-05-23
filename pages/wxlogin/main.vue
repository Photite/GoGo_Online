<template>
  <view>
    <view>
      <view>
        <view class="header">
          <image class="user-avatar" src="/static/images/user-avatar.png"></image>
        </view>
        <view class="content">
          <view>申请获取以下权限</view>
          <text>获得你的公开信息(昵称，头像、地区等)</text>
        </view>
        <button class="bottom" type="primary" :disabled="userInfoDisabled" @click="wxGetUserInfo">授权登录</button>
        <button class="bottom" type="submit" @click="Subscribe">订阅消息</button>
        <button class="bottom" type="submit" @click="Subscribe01">订阅消息</button>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  data() {
    return {
      userInfoDisabled: false
    }
  },
  onLoad() {

  },
  methods: {
    Subscribe() {
      uni.requestSubscribeMessage({
        //此处填写刚才申请模板的模板ID
        tmplIds: ['vOJxRJYk2eSsX2L4DcVqunPtPBHVakraf9x1tXO2Zpo'],
        success(res) {
          console.log(res)
          if (res.errMsg === 'requestSubscribeMessage:ok') {
            uni.showToast({
              title: '订阅成功',
              icon: 'success'
            })
          }
        }
      })
    },
    Subscribe01() {
      uni.requestSubscribeMessage({
        //此处填写刚才申请模板的模板ID
        tmplIds: ['5l_6BpkJ0bGLx2JxnK_Nff3t2CweO9SopJKXBE3qfJg'],
        success(res) {
          console.log(res)
          if (res.errMsg === 'requestSubscribeMessage:ok') {
            uni.showToast({
              title: '订阅成功',
              icon: 'success'
            })
          }
        }
      })
    },
    wxGetUserInfo() {
      console.log("点击测试！")
      uni.login({
        "provider": "weixin",
        "onlyAuthorize": true, // 微信登录仅请求授权认证
        success(res) {
          console.log(res.code);
          uni.showLoading({
            title: '授权中...'
          })

        }
      })
    },
    // 添加一个方法，实现订阅消息功能

  }
}

</script>
<style lang="scss" scoped>
.header {
  margin: 160rpx 0 60rpx 50rpx;
  text-align: center;
  width: 650rpx;

  .user-avatar {
    width: 180rpx;
    height: 180rpx;
    //将图片变成圆形
    border-radius: 50%;
  }
}

.content {
  margin-bottom: 68rpx;
  text-align: center;

  text {
    display: block;
    color: #9d9d9d;
    margin-top: 20rpx;
  }
}

.bottom {
  border-radius: 80rpx;
  margin: 70rpx 50rpx;
  font-size: 35rpx;
  color: #fff;
  background-color: rgb(93, 152, 247);
}

.login-wrapper {
  height: 100%;
  position: relative;

  .login-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 133rpx;
    background-color: #fff;

    button {
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #CA2915;
      transform: translate(-50%, -50%);
      border-radius: 30px;
      width: 435rpx;
      height: 68rpx;
      line-height: 68rpx;
    }
  }
}
</style>