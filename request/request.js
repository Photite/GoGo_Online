
const host = 'http://localhost:8080' // 测试环境
// const host = 'https://hrspider.top/api' // 线上环境

const request = {
  get(url, data) {
    return new Promise((resolve, reject) => {
      uni.request({
        data,
        url: `${host}${url}`,
        method: 'GET',
        success(res) {
          resolve(res.data)
        },
        fail(error) {
          reject(error)
        }
      })
    })
  },

  post(url, data) {
    return new Promise((resolve, reject) => {
      uni.request({
        data,
        method: 'POST',
        url: `${host}${url}`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        success(res) {
          resolve(res.data)
        },
        fail(error) {
          reject(error)
        }
      })
    })
  }
}

export default request
