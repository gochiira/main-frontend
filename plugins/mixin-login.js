import Vue from 'vue'

Vue.mixin({
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
        useInfinity: true,
        useFixed: this.$device.isMacOS,
        useBottom: !this.$device.isDesktop,
        useChinoMascot: 'none',
        acceptR18: false
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
      // ウォレットAPIにつないで所有している物一覧を取得
      this.$notify(
        {
          group: 'default',
          type: 'warning',
          duration: 2000,
          title: this.$t('gate.notify.login_steps.title'),
          text: this.$t('gate.notify.login_steps.loading_shop')
        }
      )
      const assets = await this.$axios.get('/toymoney/users/assets')
      // 持っているプロダクトID一覧をセット
      this.$store.commit(
        'user/setObtainedProducts', assets.data.assets.map(a => a.id)
      )
      // 持っているカラースター一覧をセット
      const inventory = {}
      assets.data.assets.forEach((asset) => {
        inventory[asset.id] = { limit: asset.limit, count: asset.count }
      })
      this.$store.commit(
        'user/setCurrentStars', inventory
      )
      // マイリストに入っているデータ数を取得する
      this.$notify(
        {
          group: 'default',
          type: 'warning',
          duration: 2000,
          title: this.$t('gate.notify.login_steps.title'),
          text: this.$t('gate.notify.login_steps.loading_mylist')
        }
      )
      const mylistCount = await this.$axios.get(`/mylist/${this.$auth.user.mylist.id}`)
      if (mylistCount.data.data) {
        this.$store.commit(
          'user/updateSetting', { path: 'mylistCount', param: mylistCount.data.data.count }
        )
      } else {
        this.$store.commit(
          'user/updateSetting', { path: 'mylistCount', param: 0 }
        )
      }
      // ミュートしている情報を取得し、対応するリストにつっこむ
      if (
        this.$store.state.user.obtainedProducts.includes(9) ||
        this.$store.state.user.obtainedProducts.includes(10) ||
        this.$store.state.user.obtainedProducts.includes(11)
      ) {
        this.$notify(
          {
            group: 'default',
            type: 'warning',
            duration: 2000,
            title: this.$t('gate.notify.login_steps.title'),
            text: this.$t('gate.notify.login_steps.loading_mute')
          }
        )
        const muteData = await this.$axios.get('mute/list')
        // とりあえずアーティストのミュートだけ
        this.$store.commit(
          'user/setArtistMuteIds', muteData.data.data.artist
        )
      }
      this.$notify(
        {
          group: 'default',
          type: 'success',
          duration: 2000,
          title: this.$t('gate.notify.login_steps.title'),
          text: this.$t('gate.notify.login_steps.load_complete')
        }
      )
    }
  }
})
