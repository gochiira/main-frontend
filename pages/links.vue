<template>
  <section class="section">
    <div class="container is-widescreen">
      <h1 class="title has-text-centered">
        リンク集
      </h1>
      <div class="columns is-multiline">
        <div v-for="article in articles" :key="article.title" class="column is-6">
          <div class="card">
            <a :href="'https://' + article.link" rel="noopener noreferrer nofollow">
              <div class="card-content">
                <a class="has-text-dark">
                  <div class="container">
                    <div class="columns is-mobile is-vcentered is-centered">
                      <div class="column is-6-touch is-8-hd">
                        <figure class="image is-128x128 has-image-centered">
                          <img :src="'../links/'+article.img" :alt="article.title + 'logo image'" decoding="async">
                        </figure>
                      </div>
                      <div class="column is-6-touch is-4-hd has-text-centered">
                        <p class="title has-text-centered">
                          <a class="has-text-dark">
                            {{ article.title }}
                          </a>
                        </p>
                        <p class="subtitle has-text-centered">
                          <a class="has-text-dark">
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
            </a>
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
  data () {
    return {
      articles: [
        {
          title: '公式サイト',
          link: 'gochiusa.com',
          img: 'animal_usagi_nihon_nousagi.png',
          description: 'いつもの。やっぱこれだね。親の顔より見た顔。実家のような安心感。'
        },
        {
          title: 'ごちイラ開発部',
          link: 'line.me/ti/g2/yBHVVHzN90s1r-DPlk9BFg',
          img: 'computer_girl.png',
          description: 'このサイトの開発進捗報告、ちょっとしたごちうさ情報共有などを行うグループ'
        },
        {
          title: 'ごちうさエイプリル',
          link: 'april.gochiusa.team',
          img: 'aprilfool_calender.png',
          description: 'ごちうさのエイプリルフール関連サイトへのポータル'
        },
        {
          title: 'ごちうさコミュ',
          link: 'illust.gochiusa.team',
          img: 'figure_group_colorful.png',
          description: 'ごちうさファンコミュニティへのポータル(そのうち作成)'
        }
      ]
    }
  },
  head () {
    return {
      title: 'リンク集'
    }
  }
}
</script>
