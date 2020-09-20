<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered is-vcentered" style="min-height:70vh">
        <div class="column is-7 has-text-centered">
          <h4 class="title">
            {{ $t('upload_by_page.title') }}
          </h4>
          <p>
            {{ $t('upload_by_page.description') }}
          </p>
          <p>
            <b>
              投稿前には必ず
              <nuxt-link to="/help/articles/upload-guidelines">
                イラスト投稿ガイドライン / Upload guidelines
              </nuxt-link>
              をご確認ください!
            </b>
          </p>
          <br>
          <div v-show="!scrapeInfo.scraped">
            <div class="field">
              <label class="label">{{ $t('upload_by_page.page_url') }}</label>
              <div class="control">
                <input
                  v-model="scrapeInfo.url"
                  placeholder="https://twitter.com/usagi_anime/status/1256508743560261632"
                  class="input is-half"
                  type="text"
                >
              </div>
              <p class="help">
                {{ $t('upload_by_page.supported_sites') }}
              </p>
            </div>
            <br>
            <div class="field is-centered">
              <button class="button is-primary is-fullwidth is-large" :disabled="!scrapeInfo.url" @click="getArtInfo">
                {{ $t('upload_by_page.buttons.go_to_input') }}
              </button>
            </div>
            <br>
            <br>
            <div class="field is-centered">
              <nuxt-link to="/upload/image" class="button is-primary is-medium">
                {{ $t('upload_by_page.buttons.upload_by_image') }}
              </nuxt-link>
            </div>
            <div class="field is-centered">
              <nuxt-link to="/history/upload" class="button is-primary is-medium">
                {{ $t('upload_by_page.buttons.upload_history') }}
              </nuxt-link>
            </div>
          </div>
          <div v-show="scrapeInfo.scraped">
            <UploadScreen
              ref="uploadScreen"
              :scrapeInfo="scrapeInfo"
              @uploadComplete="resetScrape"
            />
            <br>
            <br>
            <button class="button is-primary is-warning" @click="scrapeInfo.scraped = false">
              戻る
            </button>
          </div>
        </div>
      </div>
    </div>
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
  watch: {
    'scrapeInfo.url' (url) {
      // URLパラメータ除去
      url = url.split('?')[0]
      // OriginURLとimageUrlを正規表現で切り出す
      const possibleLinks = url.match('https?://[\x21-\x7E]+')
      if (possibleLinks) {
        this.scrapeInfo.url = possibleLinks.filter(
          link => (
            link.includes('twitter.com') ||
            link.includes('pixiv.net') ||
            link.includes('seiga.nicovideo.jp') ||
            link.includes('danbooru') ||
            link.includes('booth.pm')
          )
        )[0]
      }
    }
  },
  methods: {
    async getArtInfo () {
      await this.$refs.uploadScreen.getArtInfo()
      this.scrapeInfo.scraped = true
    },
    resetScrape () {
      this.scrapeInfo.scraped = false
      this.scrapeInfo.url = ''
    }
  },
  head () {
    return {
      title: 'イラスト投稿'
    }
  }
}
</script>
