<template>
  <div class="main">
    <div>
      <p>本程序基于 Uniapp 开发，源码将会在毕业答辩结束后发布到Github</p>
      <p class="mt-1">信息获取接口由 Jsoup 爬虫服务提供</p>
      <p class="gray url mt-1">项目地址：https://github.com/Photite/GoGo</p>
      <div class="text-center py-4">
        <image
            class="img"
            style="width: 100%;"
            mode="widthFix"
            :src="img"
            @click="preview()"
        />
      </div>
      <p class="my-3">开发不易，留个⭐️</p>
      <div class="recruitment py-3 px-2">
        <div style="line-height: 45rpx;"><br/>
          感谢开源作者（令狐聪）对前端部分的支持 <br/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: 'https://gitee.com/chinesee/images/raw/master/img/img_002.png'
    }
  },

  methods: {
    preview() {
      uni.previewImage({
        current: this.img,
        urls: this.img
      })
    }
  }
}
</script>

<style scoped>
.main {
  padding: 35rpx 30rpx;
  background: white;
  font-size: 28rpx;
}

.url {
  font-size: 26rpx;
}

.img {
  box-shadow: 0 0 20rpx #ececec;
}

.recruitment {
  border-radius: 15rpx;
  color: #aaaaaa;
  background: #ececec;
  line-height: 35rpx;
}
</style>