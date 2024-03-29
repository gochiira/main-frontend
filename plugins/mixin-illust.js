import Vue from 'vue'

Vue.mixin({
  methods: {
    async addLike (illustID) {
      await this.$axios.put(`/arts/${illustID}/likes/0`)
    },
    async toggleMute (isAdd, targetType, targetID) {
      /*
        targetType(通知と共通の種別番号):
          0: 全部(?)
          1: タグ(キャラ/グループ/システム含む)
          2: 絵師
      */
      if (isAdd && this.$store.state.user.isArtistMuteAddable) {
        this.$store.commit('user/addArtistMute', targetID)
        await this.$axios.post('mute/add', { type: targetType, id: targetID })
        this.$notify({ group: 'default', type: 'success', duration: 2000, title: 'ミュート', text: '絵師をミュートしました' })
      } else if (!isAdd) {
        this.$store.commit('user/removeArtistMute', targetID)
        await this.$axios.post('mute/remove', { type: 2, id: targetID })
        this.$notify({ group: 'default', type: 'success', duration: 2000, title: 'ミュート', text: '絵師のミュートを解除しました' })
      } else {
        this.$notify({ group: 'default', type: 'danger', duration: 2000, title: 'ミュート', text: 'ミュート数の上限に達しています' })
      }
    },
    async toggleBookmark (isAdd, illustID) {
      if (isAdd && this.$store.state.user.isBookmarkAddable) {
        this.$store.commit('user/addBookmark')
        await this.$axios.put(`/mylist/${this.$auth.$state.user.mylist.id}`, { illustID, action: 'add' })
        this.$notify({ group: 'default', type: 'success', duration: 2000, title: 'マイリスト', text: 'マイリストに追加しました' })
      } else if (!isAdd) {
        this.$store.commit('user/removeBookmark')
        await this.$axios.put(`/mylist/${this.$auth.$state.user.mylist.id}`, { illustID, action: 'remove' })
        this.$notify({ group: 'default', type: 'success', duration: 2000, title: 'マイリスト', text: 'マイリストから削除しました' })
      } else {
        this.$notify({ group: 'default', type: 'danger', duration: 2000, title: 'マイリスト', text: 'マイリスト数の上限に達しています' })
      }
    },
    toggleAcceptR18 () {
      this.$store.commit('user/toggleSetting', 'acceptR18')
      if (this.$store.state.user.acceptR18) {
        this.$notify({ group: 'default', type: 'success', duration: 2000, title: 'R18 / NSFW', text: '表示を有効にしました' })
      } else {
        this.$notify({ group: 'default', type: 'success', duration: 2000, title: 'R18 / NSFW', text: '表示を無効にしました' })
      }
    },
    async toggleFollow (isAdded, targetType, targetID) {
      if (!isAdded) {
        await this.$axios.post('timeline/follow', { type: targetType, id: targetID })
        this.$notify({ group: 'default', type: 'success', duration: 2000, title: 'タイムライン', text: 'フォローしました' })
      } else {
        await this.$axios.post('timeline/unfollow', { type: targetType, id: targetID })
        this.$notify({ group: 'default', type: 'success', duration: 2000, title: 'タイムライン', text: 'フォローを解除しました' })
      }
    }
  }
})
