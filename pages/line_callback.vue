<template>
  <section class="section">
    <div class="container is-widescreen">
      <h1 class="title">
        認証中
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  auth: false,
  data () {
    return {
      form: {
        id: '',
        password: '',
        code: ''
      }
    }
  },
  async created () {
    if (process.client) {
      if (this.$route.query.code) {
        this.form.code = this.$route.query.code
        try {
          await this.$auth.loginWith('local', { data: this.form })
          const cookies = {
            name: 'gochiira_member',
            value: 'true',
            opts: {
              path: '/',
              domain: '',
              maxAge: 60 * 60 * 24 * 7
            }
          }
          const domains = [
            '2014.gochiusa.team',
            '2015.gochiusa.team',
            '2016.gochiusa.team',
            '2017.gochiusa.team',
            '2018.gochiusa.team',
            '2019.gochiusa.team',
            '2020.gochiusa.team'
          ]
          const cookieList = []
          domains.forEach((domain) => {
            cookies.opts.domain = domain
            cookieList.push(cookies)
          })
          this.$cookies.setAll(cookieList)
          this.$router.push({ path: '/' })
        } catch (error) {
          this.$router.push({ path: '/login?err=1' })
        }
      } else {
        this.$router.push({ path: '/login' })
      }
    }
  }
}
</script>
