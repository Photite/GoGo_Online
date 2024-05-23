<script setup>
import {getTodayInfo} from './utils'

export default {
  async created() {
    const {commit} = this.$store
    const user = uni.getStorageSync('user')
    const userInfo = uni.getStorageSync('info')
    const time = uni.getStorageSync('termStartDate')
    console.log("这是已登录的用户名" + user)
    console.log("这是已登录的用户信息" + userInfo)
    console.log("这是已登录的学期开始日期" + time.currentWeek)
    if (user && userInfo) {
      commit('login')
      commit('setUserInfo', userInfo)
    }
    // 如果已经设置学期开始日期，则跳过设置步骤
    if (this.$store.state.logged) {
      console.log('已登录' + this.$store.state.logged)
      console.log('设置学期开始日期')
      commit('setTodayInfo', time)

    } else {
      console.log('未登录' + this.$store.state.logged)
      // 获取当前日期，并设置为2024/3/27格式
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getDate()).padStart(2, '0')}`;
      // 设置当前周，当前星期几
      const data = getTodayInfo(formattedDate)
      commit('setTodayInfo', data)
    }
  }
}
</script>

<style>
.main {
  font-size: 30rpx;
  background: #f9f7fa;
}
</style>


<!--<script setup>-->
<!--import {getTodayInfo} from './utils'-->

<!--export default {-->
<!--  async created() {-->
<!--    await this.refreshDate();-->
<!--  },-->
<!--  methods: {-->
<!--    async refreshDate() {-->
<!--      const {commit} = this.$store-->
<!--      const user = uni.getStorageSync('user')-->
<!--      const userInfo = uni.getStorageSync('info')-->
<!--      const time = uni.getStorageSync('termStartDate')-->
<!--      console.log("这是已登录的用户名" + user)-->
<!--      console.log("这是已登录的用户信息" + userInfo)-->
<!--      console.log("这是已登录的学期开始日期" + time.currentWeek)-->
<!--      if (user && userInfo) {-->
<!--        commit('login')-->
<!--        commit('setUserInfo', userInfo)-->
<!--      }-->
<!--      // 获取当前日期，并设置为2024/3/27格式-->
<!--      const currentDate = new Date();-->
<!--      const formattedDate = `${currentDate.getFullYear()}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getDate()).padStart(2, '0')}`;-->
<!--      // 设置当前周，当前星期几-->
<!--      const data = getTodayInfo(formattedDate)-->
<!--      commit('setTodayInfo', data)-->
<!--    }-->
<!--  },-->
<!--  onShow() {-->
<!--    this.refreshDate();-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--.main {-->
<!--  font-size: 30rpx;-->
<!--  background: #f9f7fa;-->
<!--}-->
<!--</style>-->