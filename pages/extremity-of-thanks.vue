<template>
  <section class="section">
    <div class="container is-fullhd">
      <h1 class="title has-text-centered">
        感謝の極み
      </h1>
      <p class="has-text-centered">
        ごちイラは以下の方々によって成り立っています。
        いつもありがとうございます。
      </p>
      <br>
      <Accordion title="ごちうさ コミュニティの方々">
        <p>Koi先生が描いてくれなかったらごちうさはなかった。創造神です、ありがとうございます。</p>
        <p>二次創作絵師さん。彼/彼女らがいなければ3期までごちうさが来ることはなかったかもしれない、ありがとうございます。</p>
      </Accordion>
      <Accordion title="ごちイラ コミュニティの方々">
        <p>みなさんのアイデアがなければ、このサイトはここまで使いやすいものになっていないです、ありがとうございます。</p>
        <p>みなさんのおー、といいねに助けられています、ありがとうございます。</p>
      </Accordion>
      <Accordion title="OSSコミュニティの方々">
        <p>このサイトは様々なライブラリを開発し公開してきた、多くの開発者の方々の手によってなりたっています。</p>
        <p>OSSライブラリがなければ全く成り立ちません、ありがとうございます。</p>
        <p>
          (使用したライブラリは
          <nuxt-link to="/license">
            ライセンスページ
          </nuxt-link> に別途記載させていただいております。)
        </p>
      </Accordion>
      <Accordion title="身内の方々">
        <p>Nuxt.jsを布教してくださった某Sくんに感謝します、助かってますありがとうございます。</p>
        <p>しれっと電気代増えてるのに特に気にせず 趣味に没頭するのはいいことと言う家族に感謝します、ありがとうございます。</p>
      </Accordion>
      <h1 class="title has-text-centered">
        Thanks to all contributors, artists, community members, and sure, you!
      </h1>
      <br>
      <br>
      <h1 class="has-text-centered is-bold">
        From Gochiusa Illustrations admin, Omado 2020.
      </h1>
    </div>
  </section>
</template>

<script>
import Accordion from '@/components/ui/Accordion.vue'

export default {
  components: {
    Accordion
  },
  head () {
    return {
      title: '感謝の極み'
    }
  }
}
</script>
