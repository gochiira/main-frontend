<template>
  <nuxt-link style="color: inherit;" :to="artAddress">
    <div class="card" :class="{'has-background-grey': result.nsfw, 'has-background-light': !result.nsfw}">
      <div class="card-header">
        <p class="card-header-title">
          {{ result.name }}
        </p>
      </div>
      <div class="card-content">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">
                Total Arts
              </p>
              <p class="subtitle">
                {{ result.count }}
              </p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">
                Total Likes
              </p>
              <p class="subtitle">
                {{ result.lcount }}
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      default: () => {
        return {
          id: 1,
          name: '香風智乃',
          count: 1204,
          lcount: 1204,
          nsfw: false
        }
      }
    },
    pageType: {
      type: String,
      default: 'characters'
    }
  },
  data () {
    return {
      artAddress: '/search/' + this.pageType + '/' + this.result.id
    }
  }
}
</script>
