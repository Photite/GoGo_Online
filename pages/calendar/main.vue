<template>
  <div>
    <div
      v-for="(item, key) in imgUrls"
      :key="key"
    >
      <image
        class="mb-1"
        style="width: 100%"
        mode="widthFix"
        :src="item"
        @click="preview(key)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrls: [
        'https://img2.imgtp.com/2024/03/31/vjrplIPE.png',
      ]
    }
  },

  mounted() {
    uni.setNavigationBarTitle({
      title: '2023-2024 校历'
    })
  },

  methods: {
    preview(i) {
      uni.previewImage({
        current: this.imgUrls[i],
        urls: this.imgUrls
      })
    }
  }
}
</script>