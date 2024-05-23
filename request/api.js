import request from './request'

const {post} = request
const {get} = request

// 登录
export function login(data) {
    return post(`/user/login`, data)
}

// 发送订阅消息请求
export function sendSubscribeMessage(data) {
    return post(`/reminders/createReminder`, data)
}

// 学生信息
export function getStudentInfo(data) {
    return get(`/edu/getUserProfile`, data)
}

// 课表信息
export function getSchedule(data) {
    return get(`/edu/getTimetable`, data)
}

// 当前学期的成绩
export function getCurrentGrades(data) {
    return get(`/edu/getExamGrade`, data)
}

// 全部学期的成绩
export function getAllGrades(data) {
    return get(`/edu/getAllExamGrade`, data)
}

// 模拟教务系统的登录
export function stuLogin(data) {
    console.log(data)
    return post(`/edu/stuLogin`, data)
}

// 模拟教务系统的退出
export function stuLogout(data) {
    return post(`/user/stuLogout`, data)
}

// 获取学期开始的时间
export function getTermStart(data) {
    return get(`/edu/getSchoolCalender`, data)
}

// 考试时间
export function getExamTime(data) {
    return post(`/user/getExamDetail`, data)
}
