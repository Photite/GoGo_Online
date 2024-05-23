<template>
  <div class="main">
    <div
        class="wrapper"
        :class="display ? 'blur' : ''"
    >
      <div
          class="hidden-bar flex align-center justify-around bg-white"
          :class="active ? 'show' : 'hide'"
      >
        <picker
            style="flex: 1;"
            @change="weekChange"
            :value="index"
            :range="weeks"
        >
          <i
              class="iconfont icon-group"
              data-label="选择周数"
          ></i>
        </picker>
        <i
            class="iconfont icon-done"
            data-label="当前周"
            @click="setCurrentSchedule"
        ></i>
        <i
            class="iconfont icon-calendar"
            data-label="全学期"
            @click="setAllSchedule"
        ></i>
      </div>

      <div class="day-bar grid bg-white">
        <template v-if="logged">
          <div
              class="line-group week flex flex-column align-center justify-center py-2"
              @click="active = !active"
          >
            <div
                class="line"
                :class=" active ? 'line-one-active' : ''"
            ></div>
            <div
                class="line"
                :class=" active ? 'line-two-active' : ''"
            ></div>
            <div
                class="line"
                :class=" active ? 'line-three-active' : ''"
            ></div>
          </div>
          <div
              class="week py-2"
              v-for="(day, i) in days"
              :key="i"
          >
            {{ day }}
          </div>
        </template>
      </div>

      <div class="content py-1">
        <template v-if="logged && currentWeek">
          <div
              class="grid courses"
              v-for="(item, i) in schedule"
              :key="i"
          >
            <!-- 时间段 -->
            <div class="period flex align-center justify-center p-3">
              {{ periods[i] }}
            </div>
            <!-- 课程内容 -->
            <div
                class="course flex align-center justify-center"
                v-for="(it, key) in item"
                :key="key"
            >
              <div
                  class="course-content flex flex-column align-center justify-center"
                  :style="currentDay === key + 1 ? 'background: #5d97f7' : ''"
                  v-if="it.course.length > 0"
                  @click="showDetail(it.course[0], i ,key)"
              >
                <span class="mb-1">{{ it.course[0].name }}</span>
                <br/>
                <span>{{ it.course[0].room }}</span>
              </div>
              <div v-else></div>
            </div>
          </div>
        </template>

        <!-- 前往登录 -->
        <div
            class="to-login flex flex-column align-center justify-center"
            v-if="!logged"
        >
          <image
              class="to-login__icon"
              src="/static/images/img-tip.svg"
              mode="widthFix"
          />
          <div class="gray m-3">登录后查看课表</div>
          <navigator
              class="to-login__btn bg-primary"
              url="../login/main"
          >前往登录
          </navigator>
        </div>
      </div>
    </div>
    <div
        class="modal"
        :class="display ? 'modal-display' : 'modal-hidden'"
    >
      <div class="modal-header">
        <div
            class="flex align-center"
            style="overflow: hidden;"
        >
          <i
              class="iconfont icon-clear mr-2 p-2"
              style="flex: 0;margin-left: auto;font-weight: bold;"
              @click="display = false;this.reminderTime = '';this.content = '';this.homeworkcontent= '';"
          ></i>
        </div>
      </div>

      <div class="modal-content">
        <div class="flex align-center mb-2">
          <image
              class="modal-icon mr-1"
              src="/static/images/name.svg"
              mode="widthFix"
          />
          <span>课程名称</span>
          <span class="gray ml-2">{{ detail.name }}</span>
        </div>
        <div class="modal-grid">
          <div class="flex align-center mb-2">
            <image
                class="modal-icon mr-1"
                src="/static/images/teacher.svg"
                mode="widthFix"
            />
            <span>任课老师</span>
            <span class="gray ml-2">{{ detail.teacher }}</span>
          </div>
          <div class="flex align-center mb-2">
            <image
                class="modal-icon mr-1"
                src="/static/images/map.svg"
                mode="widthFix"
            />
            <span>课室地点</span>
            <span class="gray ml-2">{{ detail.room }}</span>
          </div>
          <div class="flex align-center mb-2">
            <image
                class="modal-icon mr-1"
                src="/static/images/3D-chart.svg"
                mode="widthFix"
            />
            <span>课程代码</span>
            <span class="gray ml-2">{{ detail.code }}</span>
          </div>
          <div class="flex align-center mb-2">
            <image
                class="modal-icon mr-1"
                src="/static/images/pie-chart.svg"
                mode="widthFix"
            />
            <span>上课周数</span>
            <span
                class="gray ml-2"
                v-if="detail.weeks"
            >
              {{ detail.weekEachLesson }}
            </span>
          </div>
        </div>

        <div class="flex align-center mb-2">
          <image
              class="modal-icon mr-1"
              src="/static/images/name.svg"
              mode="widthFix"
          />
          <span>设置备忘</span>
          <span class="gray ml-2"><input v-model="content" placeholder="输入提醒内容"></span>
          <!-- 生成一个蓝色圆角的按钮 -->
          <button class="to-login__btn01 bg-primary" @click="sendMessage(content,detail.name,detail.room)">设置</button>
        </div>

        <div class="flex align-center mb-2">
          <image
              class="modal-icon mr-1"
              src="/static/images/reminder.png"
              mode="widthFix"
          />
          <span>作业提醒</span>
          <span class="gray ml-2" style="width: 25%"><input v-model="homeworkcontent" placeholder="输入提醒内容"></span>
          <picker mode="selector" :range="days01" v-model="daysUntilReminder" @change="updateDaysUntilReminder"
                  class="gray picker01 ml-2">
            <!--            <i-->
            <!--                class="iconfont"-->
            <!--                data-label="选择周数"-->
            <!--            ></i>-->
            <input type="text" :value="days01[daysUntilReminder]" placeholder="选择周数" style="width: 100%"/>
          </picker>

          <!-- 生成一个蓝色圆角的按钮 -->
          <button class="to-login__btn01 bg-primary"
                  @click="sendHomeworkReminder(homeworkcontent,detail.name,detail.room)">设置
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import index from "vuex";
import {getTermStart, sendSubscribeMessage} from "@/request/api";

export default {
  data() {
    return {
      currentDay: null,
      currentWeek: null,
      periods: [
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
      ],
      display: false, // 是否显示课程详细信息
      detail: {
        name: '--',
        teacher: '--',
        room: '--',
        code: '--',
        weeks: [1]
      }, // 课程详细信息
      days: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      active: false,
      content: '',
      homeworkcontent: '',
      reminderTime: '',
      daysUntilReminder: '',
      days01: ['1天后', '2天后', '3天后', '4天后', '5天后', '6天后', '7天后'],
    }
  },

  mounted() {
    const state = this.$store.state
    this.currentWeek = state.currentWeek
    this.currentDay = state.currentDay
    this.setNavigationBarTitle(this.currentWeek)
  },

  computed: {
    index() {
      return index
    },
    logged() {
      return this.$store.state.logged
    },

    schedule() {
      if (this.logged && this.currentWeek) {
        this.active = false
        return this.getCurrentSchedule(this.currentWeek)
      }
      return []
    }
  },

  methods: {
    updateDaysUntilReminder(event) {
      this.daysUntilReminder = event.mp.detail.value;
    },
    getCurrentSchedule(week) {
      console.log("传入的周数" + week)
      if (week <= 18) {
        console.log(uni.getStorageSync('schedule'))
        return uni.getStorageSync('schedule').map(el => {
          return el.map(item => {
            if (item.course.length > 0) {
              const course = item.course.filter(it => {
                return it.weeks.includes(week) // 修改这一行
              })
              return {course}
            }
            return item
          })
        })
      }
      console.log(uni.getStorageSync('schedule'))
      return uni.getStorageSync('schedule')
    },
    toLocalISOString(date) {
      const tzo = -date.getTimezoneOffset(),
          dif = tzo >= 0 ? '+' : '-',
          pad = function (num) {
            const norm = Math.floor(Math.abs(num));
            return (norm < 10 ? '0' : '') + norm;
          };
      return date.getFullYear() +
          '-' + pad(date.getMonth() + 1) +
          '-' + pad(date.getDate()) +
          'T' + pad(date.getHours()) +
          ':' + pad(date.getMinutes()) +
          ':' + pad(date.getSeconds()) +
          dif + pad(tzo / 60) +
          ':' + pad(tzo % 60);
    },
    async sendMessage(content, name, room) {
      console.log(content)
      const content01 = this.createJson(name, room, content, this.reminderTime)
      const content01String = JSON.stringify(content01);
      let date = new Date(this.reminderTime);
      let localIsoDate = this.toLocalISOString(date);
      let localDateTime = localIsoDate.split('+')[0];

      const {code, msg} = await sendSubscribeMessage({
        openId: uni.getStorageSync('user').eduUsername,
        templateId: '5l_6BpkJ0bGLx2JxnK_Nff3t2CweO9SopJKXBE3qfJg',
        content: content01String,
        reminderTime: localDateTime,
      })
      if (code === '1000') {
        uni.showToast({
          title: '发送成功',
          icon: 'success'
        })
      } else {
        uni.showToast({
          title: msg,
          icon: 'none'
        })
      }
    },
    async sendHomeworkReminder(homeworkcontent, name, room) {
      // 获取当前的日期和时间
      let date = new Date(this.reminderTime);

      // 根据用户的选择设置日期
      date.setDate(date.getDate() + parseInt(this.daysUntilReminder) + 1);

      // 设置时间为早上8点
      date.setHours(8);
      date.setMinutes(0);
      date.setSeconds(0);

      // 将日期和时间转换为ISO格式的字符串
      let localIsoDate = this.toLocalISOString(date);
      let localDateTime = localIsoDate.split('+')[0];

      // 创建提醒内容
      const content01 = this.createhomeworkJson(name, room, homeworkcontent, localDateTime)
      const content01String = JSON.stringify(content01);

      // 发送提醒
      const {code, msg} = await sendSubscribeMessage({
        openId: uni.getStorageSync('user').eduUsername,
        templateId: 'vOJxRJYk2eSsX2L4DcVqunPtPBHVakraf9x1tXO2Zpo',
        content: content01String,
        reminderTime: localDateTime,
      })
      if (code === '1000') {
        uni.showToast({
          title: '发送成功',
          icon: 'success'
        })
      } else {
        uni.showToast({
          title: msg,
          icon: 'none'
        })
      }
    },
    setNavigationBarTitle(week) {
      uni.setNavigationBarTitle({
        title: `第 ${week} 周课表`
      })
    },
    createhomeworkJson(name, room, content, reminderTime) {
      return {
        "thing1": {
          "value": content
        },
        "thing2": {
          "value": name + room
        },
        "time3": {
          "value": reminderTime
        }
      }
    },
    createJson(name, room, content, reminderTime) {
      return {
        "thing1": {
          "value": name + room
        },
        "thing2": {
          "value": content
        },
        "time3": {
          "value": reminderTime
        },
        "phrase4": {
          "value": "重要"
        }
      }
    },
    weekChange(e) {
      this.currentWeek = +e.mp.detail.value + 1
      this.setNavigationBarTitle(this.currentWeek)
    },

    setCurrentSchedule() {
      const state = this.$store.state
      this.currentWeek = state.currentWeek
      this.setNavigationBarTitle(this.currentWeek)
    },

    setAllSchedule() {
      this.currentWeek = 19
      uni.setNavigationBarTitle({title: '全学期课表'})
    },
    async getReminderTime(i, key) {
      const period = this.periods[i] // 获取课程的时间段
      const startTime = period.split(' - ')[0] // "10:55"
      const user = uni.getStorageSync('user')
      const start = await getTermStart(user)
      let date;
      if (start.code === "1000") {
        console.log(start.data.start)
        const termStartDate = new Date(start.data.start); // 学期开始日期
        const state = this.$store.state;
        const currentWeek = state.currentWeek;
        const currentDay = state.currentDay - 1; // 将 currentDay 减 1
        const dateOffset = (currentWeek - 1) * 7 + key; // 日期偏移量
        termStartDate.setDate(termStartDate.getDate() + dateOffset); // 计算具体日期
        date = termStartDate;
      } else {
        // 创建一个新的 Date 对象
        return null;
      }

      // 设置时间
      date.setHours(parseInt(startTime.split(':')[0]));
      date.setMinutes(parseInt(startTime.split(':')[1]));
      // console.log(date)
      // return date;
      // 格式化日期
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      console.log("按钮课程时间" + `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`)
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
    async showDetail(v, i, key) {
      this.display = true
      this.detail = v
      this.reminderTime = await this.getReminderTime(i, key)
      console.log("这是详情获取到的时间" + this.reminderTime)
    },
  },

  onShareAppMessage() {
    return {
      title: '课表信息',
      path: '/pages/schedule/main'
    }
  }
}
</script>

<style>
.main {
  position: relative;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.header {
  height: 10%;
}

.hidden-bar {
  width: 100vw;
  margin: 0 auto;
  text-align: center;
  transition: all ease 0.3s;
}

.iconfont {
  position: relative;
  flex: 1;
  font-size: 50rpx;
}

.iconfont::after {
  position: absolute;
  width: 150rpx;
  content: attr(data-label);
  bottom: -45rpx;
  left: 50%;
  transform: translateX(-50%);
  font-size: 26rpx;
}

.show {
  opacity: 1;
  height: 150rpx;
  line-height: 150rpx;
}

.hide {
  opacity: 0;
  height: 0;
  line-height: 0;
}

.day-bar {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  z-index: 9999;
  box-shadow: 0 10rpx 40rpx #fff;

}

.line {
  width: 45rpx;
  height: 5rpx;
  margin: 5rpx 0;
  background: rgb(85, 85, 85);
  border-radius: 3rpx;
  transition: all ease 0.3s;
}

.line-one-active {
  width: 38rpx;
  transform-origin: 8%;
  transform: rotate3d(0, 0, 1, 45deg);
}

.line-two-active {
  opacity: 0;
}

.line-three-active {
  width: 38rpx;
  transform-origin: 8%;
  transform: rotate3d(0, 0, 1, -45deg);
}

.content {
  flex: 1;
  height: auto;
  max-width: 100vw;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
}

.grid {
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
}

.row {
  text-align: center;
}

.week {
  flex: 1;
  text-align: center;
}

.period {
  margin: 5rpx 0;
  text-align: center;
  background: white;
  font-size: 28rpx;
}

.course {
  box-sizing: border-box;
  margin: 5rpx 0;
  padding: 0 5rpx;
  text-align: center;
  font-size: 25rpx;
  border-radius: 14rpx;
  color: white;
  overflow: hidden;
}

.course-content {
  width: 100%;
  height: 100%;
  padding: 0 4rpx;
  background: rgba(93, 151, 247, 0.5);
  word-wrap: break-word;
  word-break: break-all;
}

.to-login {
  width: 100%;
  height: 100%;
}

.to-login__icon {
  width: 70%;
}

.to-login__btn {
  width: 50%;
  height: 70rpx;
  margin: 0 auto;
  line-height: 70rpx;
  border-radius: 35rpx;
  color: white;
  text-align: center;
}

.to-login__btn01 {
  width: 20%;
  height: 70rpx;
  margin: 0 auto;
  line-height: 70rpx;
  border-radius: 35rpx;
  color: white;
  text-align: center;
}

.blur {
  filter: blur(3rpx);
}

.modal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  bottom: 0;
  width: 100vw;
  font-size: 30rpx;
  background: #fff;
  border-top-left-radius: 30rpx;
  border-top-right-radius: 30rpx;
  overflow: hidden;
  transition: all 0.3s;
}

.modal-display {
  transform: translate3d(0, 0, 0);
}

.modal-hidden {
  transform: translate3d(0, 100%, 0);
}

.modal-header {
  text-align: right;
  color: white;
  font-size: 45rpx;
  background: rgba(93, 151, 247);
}

.modal-content {
  padding: 75rpx 35rpx;
}

.modal-icon {
  width: 55rpx;
}

.picker01 {
  width: 20%;
}
</style>