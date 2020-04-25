<template>
  <section class="section">
    <div class="container is-widescreen">
      <h1 class="title has-text-centered">
        リンク集
      </h1>
      <div class="columns is-multiline">
        <div v-for="article in articles" :key="article.title" class="column is-6">
          <div class="card">
            <div class="card-content">
              <a class="has-text-dark" :href="'https://' + article.link">
                <div class="container">
                  <div class="columns is-mobile is-vcentered is-centered">
                    <div class="column is-4-touch is-8-hd">
                      <figure class="image has-image-centered">
                        <img :src="article.img" :alt="article.title + 'logo image'">
                      </figure>
                    </div>
                    <div class="column is-8-touch is-4-hd has-text-centered">
                      <p class="title has-text-centered">
                        <a class="has-text-dark" :href="'https://' + article.link">
                          {{ article.title }}
                        </a>
                      </p>
                      <p class="subtitle has-text-centered">
                        <a class="has-text-dark" :href="'https://' + article.link">
                          {{ article.link }}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="content columns is-vcentered is-centered">
                    {{ article.description }}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.card {
  height: 100%;
}
</style>

<script>
export default {
  auth: false,
  data () {
    return {
      articles: [
        {
          title: '公式サイト',
          link: 'gochiusa.com',
          img: 'gochiusa.png',
          description: 'とりあえずまず見に行ってください。ここを見たことない人は居ないと思いますが、とりあえずまず行ってください。エイプリルフール、ココアの日、CD発売日など、様々なイベントのタイミングでサイトが変化します。その時しか見られないものもあるので 定期的に監視をおすすめします。いつもご迷惑をおかけしております。'
        },
        {
          title: 'ごちうさエイプリル',
          link: 'april.gochiusa.team',
          img: 'gochiusa.png',
          description: 'ごちうさのエイプリルフール関連サイト群へのポータル(要ごちイラログイン)'
        },
        {
          title: 'ごちうさイラストサイト開発部',
          link: 'line.me/ti/g2/yBHVVHzN90s1r-DPlk9BFg',
          img: 'square.png',
          description: 'このサイトの開発進捗報告・ちょっとしたごちうさ情報共有などを行うグループ'
        },
        {
          title: 'Mastodon',
          link: 'pawoo.net',
          img: 'pawoo.png',
          description: 'PixivのMastodonインスタンス。色んな絵師さんがTwitterの避難所として利用している。いつもご迷惑をおかけしております。'
        }
      ]
    }
  }
}
</script>
