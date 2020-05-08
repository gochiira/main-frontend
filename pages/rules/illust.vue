<template>
  <section class="section">
    <div class="container is-widescreen">
      <h1 class="title has-text-centered">
        イラスト投稿ルール
      </h1>
      <p class="has-text-weight-bold">
        ルールで曖昧なものは問い合わせなく投稿して構いませんが、明らかにこのルールを読んでいない投稿を連続ですると
        対象利用者の投稿/招待/利用を停止しますのでご注意ください。
      </p>
      <br>
      <Accordion title="ごちイラに投稿してよいもの">
        <p class="subtitle">
          ごちうさに関係あり、作者が誰か明確なアートのみ投稿可能とします。
        </p>
        <p>
          機械学習を用いたものに関してはAIが作者ということにします。
        </p>
        <br>
        <p class="has-text-weight-bold">
          投稿OKなものの例
        </p>
        <ul>
          <li>(公式同人エログロ上手さ問わず)イラスト</li>
          <li>1-4ページほどの漫画</li>
          <li>SNSのプロフィール画像</li>
          <li>SNSの背景画像</li>
          <li>ねんどろいどの撮影</li>
          <li>フィギュアの撮影</li>
          <li>ドールの撮影</li>
          <li>カスタムメイド3D</li>
          <li>カスタムキャスト</li>
          <li>ラテアート</li>
          <li>ケーキ</li>
          <li>元の作者がわかるBB素材</li>
        </ul>
      </Accordion>
      <Accordion title="ごちイラに投稿してはいけないもの">
        <p class="subtitle">
          ごちうさに関係がない、または作者が明確でないものは不可
        </p>
        <p>
          また、登録するとなると画像枚数が多くなり
          検索に支障がでる可能性のあるものも禁止とします。
        </p>
        <br>
        <p class="has-text-weight-bold">
          投稿NGなものの例
        </p>
        <ul>
          <li>ごちうさと全く関係ないもの</li>
          <li>作者のわからないイラスト</li>
          <li>アニメ 漫画 同人誌の本編</li>
          <li>加工 コラ画像</li>
          <li>痛部屋</li>
        </ul>
        <p>
          これら例外については 今後別途で投稿ページを作る可能性があります。
        </p>
      </Accordion>
      <Accordion title="名称/説明の入力規則">
        <h4 class="subtitle">
          なければ無しでもいいですが、ご協力お願いします
        </h4>
        <p>
          Pixivから取得する場合は 名称と説明をなるべく維持してください。
          Twitterからの場合は、少しややこしいです。
          ツイートが長い場合は、名称と説明文に分けて入れてください。
          ツイートが短い場合は、名称だけを入れてください。
          画像だけの場合は、キャラクター名を入れるか、
          画像にあった名称を入れてください。
        </p>
        <p>
          自動整形に失敗している場合は空行やスペースは消してください。
          URLはなるべく見やすくなるよう弄ってください。
        </p>
      </Accordion>
      <Accordion title="タグの入力規則">
        <h4 class="subtitle">
          主観的なタグは付けないでください
        </h4>
        <p>
          上手 下手 神絵 すき きらい ☆5 等はタグにしないでください。
          別の人は真逆のことを思うかもしれません。
          客観的なもの(キャラクター名、服装、背景、人数、〇〇生誕祭 等)だけでお願いします。
          キャラクター名は、愛称ではなくフルネーム(香風智乃等)でお願いします。
          基準としては 既存のイラストを確認するか、Danbooruを参考にしてください。
          R-18については 別途選択欄があるので タグにしないでください。
        </p>
      </Accordion>
      <Accordion title="作者名の入力規則">
        <h4 class="subtitle">
          後で検索する際 複数に分かれないよう確認を
        </h4>
        <p>
          (自動取得されていない場合は)ペンネーム正式名フルネームで入れてください。
          (自動取得されていない場合は)サークル名と間違えないよう注意お願いします。
          絵文字や、宣伝、イベントでのサークル場所、読み、＠以降に関しては外してください。
        </p>
      </Accordion>
      <Accordion title="ソースの入力規則">
        <p class="subtitle">
          自動で入力されている場合は触らないで
        </p>
        <p>
          今後のアップデートで自動入力の場合は変更不可となる予定です。
        </p>
      </Accordion>
      <Accordion title="R-18の入力規則">
        <p class="subtitle">
          絵師さんがどう言っているかで判断
        </p>
        <p>
          限りなくアウトでも絵師さんがセーフと言っていたらR-18ではないです。
          また、R-15は R-18ではないです。
          ここであえて基準とするならば、具が見えていない、かつ修正が入っていなければセーフだと思います。
        </p>
      </Accordion>
      <Accordion title="重複について">
        <p class="subtitle">
          それほど気にしなくて大丈夫
        </p>
        <p>
          重複してしまったとしても、殆どの場合は自動でサーバーが弾きます。
          なお、TwitterとPixivで重複した場合、Pixivの方が画質が高いためサーバーの誤検知です。
          この対策は 現在対応策を検討中です。
          ご迷惑おかけしますが、Pixivから送った画像がTwitterと重複してしまった場合は
          ご一報ください。
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
