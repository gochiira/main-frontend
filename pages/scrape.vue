<template>
  <section class="section">
    <UploadScreen ref="uploadScreen" :scrapeInfo="scrapeInfo" :isScrapePage="true" />
  </section>
</template>

<script>
import UploadScreen from '@/components/page/upload/UploadScreen.vue'

export default {
  components: {
    UploadScreen
  },
  data () {
    return {
      scrapeInfo: {
        url: '',
        scraped: false
      }
    }
  },
  mounted () {
    const url = this.$route.query.url
    if (!url) {
      this.scrapeInfo.url = 'unsupported'
    } else {
      this.scrapeInfo.url = url.split('?')[0]
    }
    this.$refs.uploadScreen.getArtInfo()
  },
  head () {
    return {
      title: 'イラスト登録フォーム'
    }
  }
}
</script>
