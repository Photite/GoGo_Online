<template>
  <div class="main">

    <image class="banner-img" src="/static/images/img-banner.png" mode="widthFix"/>
    <div class="content p-4">
      <!-- 首要功能 -->
      <div class="card flex justify-around">
        <div class="block flex flex-column align-center justify-center px-4 py-1" style="border-radius: 15rpx;"
             v-for="(block, i) in blocks" :key="i" @click="routerTo(block.url)">
          <image class="block-icon mb-1" mode="widthFix" :src="block.icon"/>
          <div>{{ block.label }}</div>
        </div>
      </div>

      <!-- 今日课程 -->
      <div class="card" style="padding: 0;">
        <div class="schedule-header flex align-center justify-between px-3 pt-2 pb-1">
          <span>{{ currentDate }}</span>
          <span>{{ days[currentDay] }}课程</span>
          <span class="flex align-center">
						<span class="primary mr-1" style="font-weight: bold;font-size: 38rpx;">{{ currentWeek }}</span>周
					</span>
        </div>

        <div class="schedule-content p-3" v-if="logged">
          <template v-if="schedules.length > 0">
            <div class="schedule-item flex align-center justify-between mb-1 gray"
                 v-for="(item, key) in schedules" :key="key">
              <span>{{ item.period }}</span>

              <span class="name">{{ item.name }} [{{ item.room }}]</span>
            </div>
          </template>
          <!-- 周末愉快 -->
          <div class="to-login text-center" v-else-if="isWeekend">
            <image class="to-login__icon mb-2" mode="widthFix" src="/static/images/img-tip0.svg"/>
            <div class="gray">周末愉快ヽ( ^∀^)ﾉ</div>
          </div>

          <div class="text-center gray" v-else>
            <image class="to-login__icon mb-2" mode="widthFix" src="/static/images/img-tip0.svg"/>
            <div class="text-center gray">今日无课，宜休息</div>
          </div>

        </div>

        <!-- 去登录 -->
        <div v-if="!logged" class="to-login text-center p-3">
          <div>
            <image class="to-login__icon mb-2" mode="widthFix" src="/static/images/empty-3.svg"/>
            <navigator class="to-login__btn bg-primary" url="../login/main">去登录</navigator>
          </div>
        </div>
      </div>

      <!-- 次要功能 -->
      <div class="card flex justify-around">
        <div class="section flex flex-column align-center justify-center py-2 px-3"
             style="border-radius: 10rpx;" v-for="(section, i) in sections" :key="i"
             @click="routerTo(section.url)">
          <image class="section-icon mb-1" mode="widthFix" :src="section.icon"/>
          <div class="section-label">{{ section.label }}</div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
const blocks = [{
  label: '成绩',
  icon: '/static/icons/icon-grade.png',
  url: '../grade/main'
},
  {
    label: '考勤',
    icon: '/static/icons/icon-attendance.png',
    url: '../attendance/main'
  },
  {
    label: '考试',
    icon: '/static/icons/icon-notice.png',
    url: '../exam-time/main'
  }
]
const sections = [{
  label: '校历',
  icon: '/static/icons/icon-cal.png',
  url: '../calendar/main'
},
  {
    label: '平时成绩',
    icon: '/static/icons/icon-pin.png',
    url: '../usual-grade/main'
  },
  {
    label: '微信登录',
    icon: '/static/icons/icon-tag.png',
    url: '../new/main'
    // url: '../wxlogin/main'
  },
  {
    label: '待开发',
    icon: '/static/icons/icon-flash.png',
    url: '../social/main'
  }
]
const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

export default {
  data() {
    return {
      blocks,
      sections,
      days,
      schedules: []
    }
  },

  mounted() {
  },

  computed: {
    currentWeek() {
      return this.$store.state.currentWeek
    },

    currentDate() {
      return this.$store.state.currentDate
    },

    currentDay() {
      return this.$store.state.currentDay
    },
    isWeekend() {
      // 0-周日， 6-周六
      return [0, 6].includes(this.currentDay)
    },

    logged() {
      const logged = this.$store.state.logged
      if (logged && this.currentDay && !this.isWeekend) {
        console.log(this.currentDay, this.currentWeek)
        this.setSchedule(this.currentDay - 1, this.currentWeek)
      }
      return logged // 返回登录状态
    }
  },

  methods: {
    setSchedule(day, week) {
      const schedules = []

      const periods = [
        '08:00 - 08:45',
        '08:55 - 09:40',
        '10:00 - 10:45',
        '10:55 - 11:40',
        '14:00 - 14:45',
        '14:55 - 15:40',
        '15:50 - 16:35',
        '16:45 - 17:30',
        '19:00 - 19.45',
        '19:55 - 20.40',
      ]
      let scheduleData = uni.getStorageSync('schedule');

      periods.forEach((period, periodIndex) => {
        let courseItem = scheduleData[periodIndex][day].course.find(course => {
          let weekNumber = Number(week);  // 将week转换为数字
          let flatWeeks = [].concat(...course.weeks);  // 将course.weeks数组进行扁平化处理
          return flatWeeks.includes(weekNumber);
        });

        if (courseItem) {
          courseItem.period = period;
          schedules.push(courseItem);
        }
      });

      this.schedules = schedules;
    },
    routerTo(url) {
      if (this.logged) {
        if (url.length > 0) {
          uni.navigateTo({
            url
          })
        }
      } else {
        uni.showModal({
          content: '您还没有绑定 Myhbwe 账号哦',
          confirmText: '去绑定',
          confirmColor: '#5d97f7',
          success({
                    confirm
                  }) {
            if (confirm) {
              uni.navigateTo({
                url: '../login/main'
              })
            }
          }
        })
      }
    }
  },

  onShareAppMessage() {
    return {
      title: '首页',
      path: '/pages/home/main'
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.banner-img {
  position: relative;
  z-index: 2;
  width: 100%;
  box-shadow: 0 0 45rpx #f9f7fa;
}

.content {
  flex: 1;
  height: auto;
  overflow-y: scroll;
  overflow-x: hidden;
}

.card {
  box-sizing: border-box;
  margin-bottom: 30rpx;
  padding: 15rpx;
  background: white;
  border-radius: $radius;
}

.name {
  width: 63%;
  text-align: right;
  word-wrap: break-word;
  word-break: break-all;
}

.block:active {
  background: rgba(0, 0, 0, 0.1);
}

.block-icon {
  width: 100rpx;
  height: 100rpx;
}

.section:active {
  background: rgba(0, 0, 0, 0.1);
}

.section-icon {
  width: 60rpx;
  height: 60rpx;
}

.section-label {
  font-size: 25rpx;
}

.schedule-header {
  border-bottom: 1rpx solid #ececec;
}

.schedule-content {
  font-size: 26rpx;
}

.schedule-item:last-child {
  margin-bottom: 0;
}

.to-login {
  box-sizing: border-box;
  width: 100%;
}

.to-login__icon {
  width: 40%;
}

.to-login__btn {
  width: 180rpx;
  height: 60rpx;
  margin: 0 auto;
  padding: 0;
  line-height: 60rpx;
  font-size: 28rpx;
  color: white;
  border-radius: 30rpx;
}
</style>