<template>
  <div id="top">
    <client-only>
      <notifications v-if="$device.isDesktop" classes="my-notify" width="30%" position="top right" group="default" />
      <notifications v-else classes="my-notify-mobile" width="90%" position="top center" group="default" />
    </client-only>
    <header>
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item has-text-white" style="font-weight:bold;">
              {{ $t('site_name') }}
            </nuxt-link>
            <span class="navbar-burger burger has-text-white" :class="{ 'is-active': openMenu }" data-target="navMenu" @click="openMenu = !openMenu">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navMenu" class="navbar-menu" :class="{ 'is-active': openMenu }">
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">
                  <p class="control">
                    <a href="https://gochiusa.com" class="button is-outlined">
                      <span class="icon">
                        <Fas i="home" />
                      </span>
                      <span>{{ $t('gate.text.gochiusa_official') }}</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <nuxt />
    </main>
    <NavbarDown />
  </div>
</template>

<script>
import NavbarDown from '@/components/NavbarDown.vue'
import Fas from '@/components/ui/Fas.vue'

export default {
  components: {
    Fas,
    NavbarDown
  },
  data () {
    return {
      openMenu: false
    }
  },
  created () {
    if (process.client) {
      console.clear()
      console.log('%cGochiusa Illustrations', 'color: blue; font-size: 30px')
      console.log('Wow, you found secret message!')
      console.log('Do you want invite?\nYou can get invite key with self-introduce.\nPlease input your email, and describe why you want to join.')
      console.log('https://forms.gle/uf3gYMfFSTNxqDuW8')
    }
  }
}
</script>
