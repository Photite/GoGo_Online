<!--<template>-->
<!--  <view class="container">-->
<!--    <view class="tabs">-->
<!--      <view class="tab active">动态</view>-->
<!--      <view class="tab">消息</view>-->
<!--    </view>-->
<!--    <view class="search-bar">-->
<!--      <input type="text" placeholder="查找精彩动态内容" />-->
<!--    </view>-->
<!--    <view class="post">-->
<!--      <view class="post-header">-->
<!--        <image class="avatar" src="/static/icons/icon-avatar.png" />-->
<!--        <view class="post-info">-->
<!--          <view class="post-author">-->
<!--            意想社团 <text class="verified">V</text>-->
<!--          </view>-->
<!--          <view class="post-meta">广大会软 · 54分钟前</view>-->
<!--        </view>-->
<!--        <text class="post-options">...</text>-->
<!--      </view>-->
<!--      <view class="post-content">-->
<!--        瑞士最高法院裁定，如果雇主主要求雇员在家工作，则必须为雇员支付一部分房租。-->
<!--      </view>-->
<!--      <image class="post-image" src="/static/icons/icon-avatar.png" />-->
<!--      <view class="post-actions">-->
<!--        <view class="action">-->
<!--          <text class="icon">↻</text> 4566-->
<!--        </view>-->
<!--        <view class="action">-->
<!--          <text class="icon">💬</text> 5467-->
<!--        </view>-->
<!--        <view class="action">-->
<!--          <text class="icon">❤</text> 2.8k-->
<!--        </view>-->
<!--      </view>-->
<!--    </view>-->
<!--  </view>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {};-->
<!--  },-->
<!--  methods: {}-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.container {-->
<!--  padding: 10px;-->
<!--  background-color: #f5f5f5;-->
<!--}-->

<!--.tabs {-->
<!--  display: flex;-->
<!--  justify-content: space-around;-->
<!--  background-color: #fff;-->
<!--  padding: 10px 0;-->
<!--  border-bottom: 1px solid #eee;-->
<!--}-->

<!--.tab {-->
<!--  flex: 1;-->
<!--  text-align: center;-->
<!--  font-size: 16px;-->
<!--  color: #aaa;-->
<!--}-->

<!--.tab.active {-->
<!--  color: #ff9900;-->
<!--  font-weight: bold;-->
<!--}-->

<!--.search-bar {-->
<!--  margin: 10px 0;-->
<!--  padding: 0 10px;-->
<!--  background-color: #fff;-->
<!--  border-radius: 20px;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--}-->

<!--.search-bar input {-->
<!--  flex: 1;-->
<!--  height: 30px;-->
<!--  border: none;-->
<!--  padding: 0 10px;-->
<!--  font-size: 14px;-->
<!--}-->

<!--.post {-->
<!--  background-color: #fff;-->
<!--  padding: 10px;-->
<!--  margin-top: 10px;-->
<!--  border-radius: 10px;-->
<!--}-->

<!--.post-header {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--}-->

<!--.avatar {-->
<!--  width: 40px;-->
<!--  height: 40px;-->
<!--  border-radius: 20px;-->
<!--  margin-right: 10px;-->
<!--}-->

<!--.post-info {-->
<!--  flex: 1;-->
<!--}-->

<!--.post-author {-->
<!--  font-size: 16px;-->
<!--  font-weight: bold;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--}-->

<!--.post-author .verified {-->
<!--  margin-left: 5px;-->
<!--  font-size: 14px;-->
<!--  color: #ff9900;-->
<!--}-->

<!--.post-meta {-->
<!--  font-size: 12px;-->
<!--  color: #aaa;-->
<!--}-->

<!--.post-options {-->
<!--  font-size: 20px;-->
<!--  color: #aaa;-->
<!--}-->

<!--.post-content {-->
<!--  margin-top: 10px;-->
<!--  font-size: 16px;-->
<!--  line-height: 1.5;-->
<!--}-->

<!--.post-image {-->
<!--  width: 100%;-->
<!--  height: auto;-->
<!--  margin-top: 10px;-->
<!--  border-radius: 10px;-->
<!--}-->

<!--.post-actions {-->
<!--  display: flex;-->
<!--  justify-content: space-around;-->
<!--  margin-top: 10px;-->
<!--}-->

<!--.action {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  color: #aaa;-->
<!--}-->

<!--.action .icon {-->
<!--  font-size: 18px;-->
<!--  margin-right: 5px;-->
<!--}-->
<!--</style>-->


<template>
  <view class="container">
    <!-- 顶部导航栏 -->
<!--    <view class="navbar">-->
<!--      <text class="nav-item active">动态</text>-->
<!--&lt;!&ndash;      <text class="nav-item">消息</text>&ndash;&gt;-->
<!--    </view>-->

<!--    &lt;!&ndash; 搜索框 &ndash;&gt;-->
<!--    <view class="search-bar">-->
<!--      <input type="text" placeholder="查找精彩动态内容" />-->
<!--    </view>-->

    <!-- 动态列表 -->
    <scroll-view class="content" scroll-y>
      <view class="post" v-for="(post, index) in posts" :key="index">
        <view class="post-header">
          <image class="avatar" :src="post.avatar" />
          <view class="user-info">
            <view class="user-name">{{ post.userName }} <text v-if="post.verified" class="verified">V</text></view>
            <view class="user-details">{{ post.details }}</view>
          </view>
        </view>
        <view class="post-content">{{ post.content }}</view>
        <image class="post-image" :src="post.image" v-if="post.image" />
        <view class="post-footer">
          <view class="icon-item">
            <text class="iconfont icon-share"></text>
            <text>{{ post.shares }}</text>
          </view>
          <view class="icon-item">
            <text class="iconfont icon-comment"></text>
            <text>{{ post.comments }}</text>
          </view>
          <view class="icon-item">
            <text class="iconfont icon-like"></text>
            <text>{{ post.likes }}</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          avatar: 'https://bbsstatic.oneplus.com/upload/image/front/avatar/20231130/4943285842241515311/1475780062610456585/1475780062610456585.jpg?x-ocs-process=image/format,webp/resize,limit_1,w_144',
          userName: '意想社团',
          verified: true,
          details: '广大华软 - 54分钟前',
          content: '瑞士最高法院裁定，如果雇主要求雇员在家工作，则必须为雇员支付一部分房租。',
          image: 'https://bbsstatic.oneplus.com/upload/image/front/thread/20231130/4943285842241515311/1475790512140058625/1475790512140058625.jpg?x-ocs-process=image/format,webp',
          shares: 4566,
          comments: 5467,
          likes: '2.8k'
        },
        {
          avatar: 'https://bbsstatic.oneplus.com/upload/image/front/avatar/20231130/4943285842241515311/1475780062610456585/1475780062610456585.jpg?x-ocs-process=image/format,webp/resize,limit_1,w_144',
          userName: '软件系新媒体工作部',
          verified: true,
          details: '软件系分团委 - 3小时前',
          content: '面试是求职的最后一关，如果准备得不好，会导致前功尽弃。而且，程序员的面试往往跟最终职级和薪资直接相关。两个应聘者的其他条件都类似，就是面试表现有差异，最后的薪资可能就会有不小的差距。',
          shares: 1234,
          comments: 2345,
          likes: '1.2k'
        }
      ]
    };
  }
};
</script>

<style>
.container {
  padding: 10px;
}
.navbar {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
.nav-item {
  font-size: 18px;
  color: #666;
}
.nav-item.active {
  color: #ff9900;
  font-weight: bold;
}
.search-bar {
  padding: 10px 0;
}
.search-bar input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 20px;
}
.content {
  padding-top: 10px;
}
.post {
  background: #fff;
  border-radius:  10px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.post-header {
  display: flex;
  align-items: center;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.user-info {
  margin-left: 10px;
}
.user-name {
  font-weight: bold;
}
.verified {
  color: #ff9900;
}
.user-details {
  color: #999;
  font-size: 12px;
}
.post-content {
  margin: 10px 0;
  line-height: 1.6;
}
.post-image {
  width: 100%;
  border-radius: 10px;
}
.post-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}
.icon-item {
  display: flex;
  align-items: center;
}
.icon-item text {
  margin-left: 5px;
}

/* Icon 字体样式（需要引入 iconfont） */
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
}
.icon-share:before {
  content: "\e600"; /* 分享图标的 Unicode */
}
.icon-comment:before {
  content: "\e601"; /* 评论图标的 Unicode */
}
.icon-like:before {
  content: "\e602"; /* 点赞图标的 Unicode */
}
</style>
