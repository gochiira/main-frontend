<template>
  <section class="section">
    <div class="container is-widescreen">
      <h1 class="title has-text-centered">
        ヘルプ
      </h1>
      <Accordion
        title="ごちイラとは?"
        text="ごちイラはネット上に落ちている画像をユーザーおよび機械で収集して保存しているウェブクローンサイトです。 保存元で非公開になっても見ることができます。 サイトは無料で利用できます。自ら投稿もできます。本サイトは2020/04/YYより運営者・Omado(本名非公開)が運営しています。"
      />
      <Accordion
        title="ごちイラを見るのは違法じゃないの?"
        text="違法ではありません。詳しくは<a href='http://www.bunka.go.jp/seisaku/chosakuken/hokaisei/h24_hokaisei/index.html'>こちらを参照。</a>"
      />
      <Accordion
        title="ごちイラの使い方は?"
        text="上部メニューから好きな条件を選び検索することで、各種イラストを探すことができます。また、各イラストにいいねを押すことでいいね順ソートの検索に出やすくし、他のユーザーに宣伝できます。詳しくはマイページ内の'ガイド'より。"
      />
      <Accordion
        title="ごちイラが重い、レイアウトが崩れる"
        text="ごちイラは<a href='https://www.dell.com/ja-jp/shop/cty/pdp/spd/inspiron-15-7567-laptop?ref=PD_OC'>Windows10/Chrome最新版</a>、<a href='https://www.oppo.com/jp/smartphone-reno-a/'>Android9/Chrome最新版</a>、<a href='https://ja.wikipedia.org/wiki/IPhone_6s'>iOS12/Chrome最新版</a>でのみ動作が確認されています。<a href='https://time-space.kddi.com/digicul-column/suguyaru/20151221/'>インターネットエクスプローラ、ネットスケープなどの古代のブラウザ</a>、<a href='https://gigazine.net/news/20190815-fridge-tweet/'>3DS、WiiU、冷蔵庫など</a>では正常に表示されないと思います。また<a href='https://ja.wikipedia.org/wiki/Tor'>JavaScriptがオフのブラウザ</a>では表示できません。大変恐れ入りますが、<a href='https://kakaku.com/pc/note-pc/guide_0020/'>普通のコンピュータ</a>をご用意ください。"
      />
      <Accordion
        title="抜けがある・この画像が壊れてる・機能リクエスト"
        text="<a href='https://forms.gle/uf3gYMfFSTNxqDuW8'>お問い合わせフォームからご連絡ください</a>"
      />
      <Accordion
        title="権利者の方へ / DMCAリクエスト"
        text="ごちイラは日本国内のいかなる企業・個人との関わりはありません。また、画像の保管元ごちイラと一切関係ありません。ごちイラは、神絵師さんをより布教すること、出所不明の<a href='https://note.com/free_yaken/n/n066acf4d6581'>無断転載</a>を無くすこと、この世のすべてのごちうさ絵を保存することを目的として完全無償で提供しているユーザー投稿型サイトです。このサイト上に広告は一切存在せず、完全招待制であり、かつGoogle等のあらゆる検索エンジンのインデックス(※検索結果に記載すること)をすべて拒否しています。今後その予定はありませんし、絵師様の活動の邪魔をするつもりも全くありません。しかし、それでも保存されると困る、このプロジェクトをどうしても受け入れられないという方は<a href='https://forms.gle/JSG5rWkC94fJaGWbA'>こちら</a>からご連絡ください。可能な限り早く対応させていただきます。皆様の神がかったごちうさ絵は日々崇めさせて頂いております、いつもありがとうございます。"
      />
    </div>
  </section>
</template>

<script>
import Accordion from '~/components/ui/Accordion.vue'

export default {
  auth: false,
  components: {
    Accordion
  }
}
</script>
