<template>
  <div id="live2d-widget-handler">
    <div
      class="button is-info"
      style="position: fixed; bottom: -3px; left: -3px; background-color:#955E4B;"
      :class="{'is-hidden': !live2DInitialized}"
      @click="toggleLive2D"
    >
      <Fas v-if="live2DHide" i="user" classes="has-text-white" />
      <Fas v-else i="times-circle" classes="has-text-white" />
    </div>
  </div>
</template>

<script>
import Fas from '@/components/ui/Fas.vue'
import { chinoSerifu, chinoModels } from '~/assets/texts/live2d.json'

export default {
  components: {
    Fas
  },
  data () {
    return {
      live2DInitialized: false,
      live2DModel: null,
      live2DMessage: null,
      live2DHide: false
    }
  },
  mounted () {
    const loader = document.createElement('script')
    loader.setAttribute('src', '/live2dw/L2Dwidget.min.js')
    document.body.appendChild(loader)
    const self = this
    setTimeout(function () {
      self.initLive2D()
    }, 4000)
  },
  methods: {
    initLive2D () {
      window.L2Dwidget.init({
        model: {
          jsonPath: `/live2dw/${chinoModels[this.$store.state.user.useChinoMascot]}`,
          scale: 1,
          hHeadPos: 0.5,
          vHeadPos: 0.618
        },
        display: { position: 'left', width: 200, height: 340, hOffset: 40, vOffset: -80 },
        mobile: { show: false },
        react: { opacity: 1.0 },
        dialog: { enable: true }
      })
      const self = this
      setTimeout(function () {
        self.live2DMessage = document.getElementsByClassName('live2d-widget-dialog')[0]
        self.live2DMessage.textContent = 'うるさいですね...'
        self.live2DMessage.style = 'opacity: 1'
        self.live2DModel = document.getElementById('live2d-widget')
        self.live2DModel.style = 'position: fixed; left: 40px; bottom: -80px; width: 200px; height: 340px; z-index: 99999; opacity: 1;'
        self.live2DModel.style.display = 'block'
        self.live2DModel.addEventListener('click', function () { self.clickLive2D() }, false)
        self.live2DInitialized = true
      }, 1000)
    },
    clickLive2D () {
      const serifu = chinoSerifu[Math.floor(Math.random() * chinoSerifu.length)]
      this.live2DMessage.textContent = serifu
    },
    toggleLive2D () {
      this.live2DHide = !this.live2DHide
      if (this.live2DHide) {
        this.live2DModel.style.display = 'none'
      } else {
        this.live2DModel.style.display = 'block'
      }
    }
  }
}
</script>
