<template>
  <section class="section">
    <div class="container is-widescreen">
      <div class="columns is-centered is-vcentered is-multiline">
        <div class="column is-8">
          <Notification :title="pageTitle" />
        </div>
        <div class="column is-8">
          <div class="columns is-centered is-vcentered">
            <div class="column is-8">
              <SelectForm
                class="is-fullwidth"
                :options="sortMethods"
                :sortMethod="String(sortID)"
                @onSelectChanged="updateSelect"
              />
            </div>
            <div v-if="!pageTitle.includes('キーワード')" class="column is-4">
              <NotifyRegister :notifyTitle="pageTitle" :notifyTargetType="notifyTargetType" :notifyTargetID="notifyTargetID" />
            </div>
          </div>
        </div>
        <div v-if="apiEndpoint.includes('artist')" class="column is-12 has-text-centered">
          <button
            v-if="!$store.state.user.mutedArtists.includes(notifyTargetID)"
            class="button is-primary is-small"
            @click="toggleArtistMute(true)"
          >
            この絵師をミュートする
          </button>
          <button
            v-else
            class="button is-primary is-small"
            @click="toggleArtistMute(false)"
          >
            この絵師のミュートを解除する
          </button>
        </div>
        <div v-if="hasWikiElement && !apiEndpoint.includes('all')" class="column is-12 has-text-centered">
          <Wiki
            :articleTitle="pageTitle"
            :articleTargetType="notifyTargetType"
            :articleTargetID="notifyTargetID"
            @noWikiContent="hasWikiElement = false"
          />
        </div>
      </div>
      <div
        class="columns is-centered is-vcentered is-multiline is-mobile"
        :class="{'is-gapless': $store.state.user.colSize < 6 && !$store.state.user.isPC}"
      >
        <div v-for="result in results" :key="result.illustID" :class="colSize">
          <Result :result="result" />
        </div>
      </div>
      <client-only v-if="$store.state.user.useInfinity">
        <infinite-loading @infinite="addNextpage">
          <div slot="no-more">
            最終ページまで読み込みました
          </div>
          <div slot="no-results">
            最終ページまで読み込みました
          </div>
        </infinite-loading>
      </client-only>
      <Pagination
        v-else
        :current-page-from-prop="pageID"
        :total-page="totalPage"
        @onPageChanged="updatePage"
      />
    </div>
  </section>
</template>

<script>
import Notification from '@/components/ui/Notification.vue'
import SelectForm from '@/components/ui/SelectForm.vue'
import Wiki from '@/components/ui/Wiki.vue'
import NotifyRegister from '@/components/ui/NotifyRegister.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Result from '@/components/page/search/Result.vue'

export default {
  components: {
    Notification,
    SelectForm,
    NotifyRegister,
    Wiki,
    Pagination,
    Result
  },
  props: {
    apiEndpoint: { type: String, default: '' },
    pageTitle: { type: String, default: '' },
    pageIdFromProps: { type: Number, default: 1 },
    sortIdFromProps: { type: Number, default: 0 },
    targetId: { type: Number, default: 1 },
    totalPageFromProps: { type: Number, default: 1 },
    resultsFromProps: {
      type: Array,
      default: () => {
        return [
          {
            illustID: 0,
            date: '2020-12-04',
            like: 0,
            nsfw: false,
            artist: {
              name: 'NoData'
            }
          }
        ]
      }
    }
  },
  data () {
    return {
      pageID: this.pageIdFromProps,
      sortID: this.sortIdFromProps,
      totalPage: this.totalPageFromProps,
      results: this.resultsFromProps,
      hasWikiElement: true,
      sortMethods: [
        { text: '投稿が新しい順', value: 0 },
        { text: '投稿が古い順', value: 1 },
        { text: 'いいね数が多い順', value: 4 },
        { text: 'いいね数が少ない順', value: 5 }
      ]
    }
  },
  computed: {
    colSize () {
      const colSize = this.$store.state.user.colSize
      if (colSize) {
        return `column is-${colSize}`
      }
      return 'column is-12-mobile is-6-touch is-3-desktop'
    },
    notifyTargetType () {
      switch (this.apiEndpoint) {
        case 'artist':
          return 2
        case 'tag':
        case 'character':
          return 1
        default:
          return 0
      }
    },
    notifyTargetID () {
      return parseInt(this.$route.params.id)
    }
  },
  methods: {
    async addNextpage ($state) {
      this.pageID += 1
      const resp = await this.$searchApi.getSearchResults(this.apiEndpoint, this.pageID, this.sortID, this.targetId)
      if (resp) {
        this.results = this.results.concat(resp.imgs)
        $state.loaded()
      } else {
        $state.complete()
      }
    },
    async updateSelect (newSort) {
      this.pageID = 1
      this.sortID = parseInt(newSort)
      const resp = await this.$searchApi.getSearchResults(this.apiEndpoint, this.pageID, this.sortID, this.targetId)
      this.results = resp.imgs
      this.$router.push({ path: this.$route.path, query: { ...this.$route.query, sort: newSort } })
      this.$scrollTo('#top')
    },
    async updatePage (newPage) {
      this.pageID = newPage
      const resp = await this.$searchApi.getSearchResults(this.apiEndpoint, this.pageID, this.sortID, this.targetId)
      this.results = resp.imgs
      this.$router.push({ path: this.$route.path, query: { ...this.$route.query, page: newPage } })
      this.$scrollTo('#top')
    }
  }
}
</script>