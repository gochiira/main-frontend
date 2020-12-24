<template>
  <div>
    <div class="field is-grouped is-grouped-centered">
      <NotifyRegister
        v-if="!apiEndpoint.includes('keyword') && !apiEndpoint.includes('timeline')"
        class="control"
        :notifyTitle="articleTitle"
        :notifyTargetType="targetType"
        :notifyTargetID="targetID"
      />
      <a
        class="control"
        @click="toggleAcceptR18()"
      >
        <div class="tags has-addons">
          <span class="tag is-small">
            <Fas v-if="!$store.state.user.acceptR18" i="grin-beam" classes="is-size-6" />
            <Fas v-else i="grin-hearts" classes="is-size-6" />
          </span>
          <span class="tag is-link is-small">
            {{ $t('UtilArea.toggle_show') }}
          </span>
        </div>
      </a>
      <a
        v-if="apiEndpoint.includes('artist')"
        class="control"
        @click="toggleMuteWrapped"
      >
        <div class="tags has-addons">
          <span class="tag is-small">
            <Fas v-if="$store.state.user.mutedArtists.includes(targetID)" i="eye-slash" classes="is-size-6" />
            <Fas v-else i="eye" classes="is-size-6" />
          </span>
          <span class="tag is-link is-small">
            {{ $t('UtilArea.toggle_show') }}
          </span>
        </div>
      </a>
    </div>
    <div class="field is-grouped is-grouped-centered">
      <nuxt-link
        v-if="$store.state.user.obtainedProducts.includes(2) && !apiEndpoint.includes('all') && !apiEndpoint.includes('timeline')"
        :to="writeArticleLink"
        class="control"
      >
        <div class="tags has-addons">
          <span class="tag is-small">
            <Fas i="pen-square" classes="is-size-6" />
          </span>
          <span class="tag is-link is-small">{{ $t('UtilArea.edit_article') }}</span>
        </div>
      </nuxt-link>
      <nuxt-link
        v-if="articleID && !apiEndpoint.includes('all') && !apiEndpoint.includes('timeline')"
        :to="'/wiki/'+articleID"
        class="control"
      >
        <div class="tags has-addons">
          <span class="tag is-small">
            <Fas i="file-alt" classes="is-size-6" />
          </span>
          <span class="tag is-link is-small">{{ $t('UtilArea.show_article') }}</span>
        </div>
      </nuxt-link>
      <a
        v-if="apiEndpoint.includes('artist') || apiEndpoint.includes('character')"
        class="control"
        @click="toggleFollowWrapped"
      >
        <div class="tags has-addons">
          <span class="tag is-small">
            <Far v-if="!following" i="check-square" classes="is-size-6" />
            <Fas v-else i="check-square" classes="is-size-6" />
          </span>
          <span class="tag is-link is-small">
            {{ $t('UtilArea.toggle_show') }}
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Fas from '@/components/ui/Fas.vue'
import Far from '@/components/ui/Far.vue'
import NotifyRegister from '@/components/ui/NotifyRegister.vue'

export default {
  components: {
    Fas,
    Far,
    NotifyRegister
  },
  props: {
    articleTitle: {
      type: String,
      default: '香風智乃'
    },
    targetType: {
      type: Number,
      default: 0
    },
    targetID: {
      type: Number,
      default: 0
    },
    apiEndpoint: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      articleID: null,
      following: false
    }
  },
  computed: {
    writeArticleLink () {
      if (this.articleID) {
        if (this.targetType === 0) {
          return `/wiki/create?id=${this.articleID}&title=${this.$auth.$state.user.name}`
        }
        return `/wiki/create?id=${this.articleID}&title=${this.articleTitle}`
      }
      if (this.targetType === 0) {
        return `/wiki/create?title=${this.$auth.$state.user.name}&targetType=${this.targetType}&targetID=${this.targetID}`
      }
      return `/wiki/create?title=${this.articleTitle}&targetType=${this.targetType}&targetID=${this.targetID}`
    }
  },
  async mounted () {
    await this.fetchWiki()
  },
  methods: {
    async fetchWiki () {
      const params = {
        id: this.targetID,
        type: this.targetType
      }
      const resp = await this.$axios.get('/wiki/find', { params })
      if (resp.data.status === 200) {
        this.articleID = resp.data.articleID
        this.revision = resp.data.revision
      }
    },
    toggleMuteWrapped () {
      if (this.$store.state.user.mutedArtists.includes(this.targetID)) {
        this.toggleMute(false, 2, this.targetID)
      } else {
        this.toggleMute(true, 2, this.targetID)
      }
    },
    toggleFollowWrapped () {
      this.toggleFollow(this.following, this.targetType, this.targetID)
      this.following = !this.following
    }
  }
}
</script>
