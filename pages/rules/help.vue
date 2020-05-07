<template>
  <section class="section">
    <div class="container is-widescreen">
      <h1 class="title has-text-centered">
        イラストの投稿ルール
      </h1>
      <h2>
        (うちが)何を見たいかをなるべく明確にルールとして定めました。
        ですが、誰かがそれを必要とするとあなたが思うなら、
        このルール上で曖昧なものであっても投稿してしまっても構いません。
        ただし、明らかにこのルールを読んでいない全く関係ない投稿が連続して行われる場合は
        対象の利用者の投稿機能を停止しますのでご注意ください。
      </h2>
      <Accordion title="ごちイラに投稿してよいもの">
        <p>
          ごちうさに関係あり、作者が誰か明確なアートのみ投稿可能です。
          投稿可能なものの例:
        </p>
        <ul>
          <li>(公式同人問わず)イラスト</li>
          <li>ねんどろいどの撮影</li>
          <li>ドールの撮影</li>
          <li>ラテアート</li>
          <li>ケーキ</li>
          <li>プロフィール画像</li>
          <li>自分で作ったコラ画像</li>
          <li>1-4ページほどの漫画</li>
        </ul>
      </Accordion>
      <Accordion title="ごちイラに投稿してよいもの">
        <p>
          ごちうさに関係がない、または作者が明確でないものは不可です。
          また、公式アニメや公式漫画、同人誌の全ページなど、
          画像枚数が多く、検索結果に支障がでるものは禁止とします。
          ※ 1ページ漫画は例外とします
          投稿禁止なものの例:
        </p>
        <ul>
          <li>作者のわからないイラスト</li>
          <li>(自分で作っていない)コラ画像</li>
          <li>ドールの撮影</li>
        </ul>
        <p>
          ただし、投稿してもいいか微妙な場合はとりあえず投稿して構いません。
          NGとなった場合は 非表示します。
        </p>
      </Accordion>
      <Accordion title="投稿時の情報登録ルール">
        <p>
          違法ではありません。詳しくは<a href="http://www.bunka.go.jp/seisaku/chosakuken/hokaisei/h24_hokaisei/index.html">こちらを参照。</a>
        </p>
      </Accordion>
      <Accordion title="ごちイラの使い方は?">
        <p>
          上部メニューから好きな条件を選び検索することで、各種イラストを探すことができます。
          また、各イラストにいいねを押すことでいいね順ソートの検索に出やすくし、
          他のユーザーに宣伝できます。詳しくはマイページ内の"ガイド"より。
        </p>
      </Accordion>
      <Accordion title="ごちイラが重い、レイアウトが崩れる">
        <p>
          ごちイラは<a href="https://www.dell.com/ja-jp/shop/cty/pdp/spd/inspiron-15-7567-laptop?ref=PD_OC">Windows10/Chrome最新版</a>、
          <a href="https://www.oppo.com/jp/smartphone-reno-a/">Android9/Chrome最新版</a>、
          <a href="https://ja.wikipedia.org/wiki/IPhone_6s">iOS12/Chrome最新版</a>でのみ動作が確認されています。
          <a href="https://time-space.kddi.com/digicul-column/suguyaru/20151221/">
            インターネットエクスプローラ、ネットスケープなどの古代のブラウザ
          </a>、
          <a href="https://gigazine.net/news/20190815-fridge-tweet/">3DS、WiiU、冷蔵庫など</a>
          では正常に表示されないと思います。
          また<a href="https://ja.wikipedia.org/wiki/Tor">JavaScriptがオフのブラウザ</a>では表示できません。
          大変恐れ入りますが、<a href="https://kakaku.com/pc/note-pc/guide_0020/">普通のコンピュータ</a>をご用意ください。
        </p>
      </Accordion>
      <Accordion title="抜けがある・この画像が壊れてる・機能リクエスト">
        <p>
          <a href="https://forms.gle/uf3gYMfFSTNxqDuW8">
            お問い合わせフォームからご連絡ください
          </a>
        </p>
      </Accordion>
      <Accordion title="権利者の方へ / DMCAリクエスト">
        <p>
          ごちイラは日本国内のいかなる企業・個人との関わりはありません。
          また、画像の保管元ごちイラと一切関係ありません。
          ごちイラは、神絵師さんをより布教すること、出所不明の<a href="https://note.com/free_yaken/n/n066acf4d6581">転載</a>を無くすこと、
          この世のすべてのごちうさ絵を保存することを目的として完全無償で提供しているユーザー投稿型サイトです。
          このサイト上に広告は一切存在せず、完全招待制であり、
          かつGoogle等のあらゆる検索エンジンのインデックス(※検索結果に記載すること)をすべて拒否しています。
          今後その予定はありませんし、絵師様の活動の邪魔をするつもりも全くありません。
          しかし、それでも保存されると困る、このプロジェクトをどうしても受け入れられないという方は
          <a href="https://forms.gle/JSG5rWkC94fJaGWbA">こちら</a>からご連絡ください。
          可能な限り早く対応させていただきます。
          皆様の神がかったごちうさ絵は日々崇めさせて頂いております、いつもありがとうございます。
        </p>
      </Accordion>
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
