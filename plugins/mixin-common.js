import Vue from 'vue'

Vue.mixin({
  layout ({ app, store }) {
    if (!app.$auth.loggedIn) {
      return 'gate'
    }
    return store.state.user.isPC ? 'desktop' : 'mobile'
  },
  methods: {
    async postLoggedIn () {
      // Aprilクッキーを焼く
      this.$cookies.set(
        'gochiira_member',
        'true',
        {
          path: '/',
          domain: 'gochiusa.team',
          maxAge: 60 * 60 * 24 * 31 * 6,
          secure: true
        }
      )
      // デフォルト設定代入
      const defaultSettings = {
        useWebP: !this.$device.isMacOS,
        isPC: this.$device.isDesktop,
        useJump: this.$device.isDesktop,
        useBack: this.$device.isMacOS && !this.$device.isDesktop,
        useSwipe: !this.$device.isMacOS,
        useBottom: !this.$device.isDesktop
      }
      for (const setting in defaultSettings) {
        this.$store.commit(
          'user/updateSetting',
          { path: setting, param: defaultSettings[setting] }
        )
      }
      // PCなら一応ナビゲーションを取り直す
      if (this.$device.isDesktop) {
        await this.$store.dispatch('getNavigations')
      }
    }
  }
})
