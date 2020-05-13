<template>
  <section class="section">
    <div class="container is-widescreen">
      <h1 class="title has-text-centered">
        イラスト投稿ルール
      </h1>
      <p class="has-text-centered has-text-weight-bold">
        このルールを読んでいない投稿を連続ですると
        投稿/招待/ログインの順に各機能の利用を禁止します。
        ただしルール上曖昧なものは問い合わせなく投稿しても構いません
      </p>
      <br>
      <Accordion title="ごちイラに投稿してよいもの">
        <p class="subtitle">
          ごちうさに関係あり、作者が誰か明確なアートのみ投稿可
        </p>
        <p>
          機械学習を用いたものに関してはAIが作者です。
        </p>
        <br>
        <p class="has-text-weight-bold">
          投稿OKなもの
        </p>
        <ul>
          <li>(公式同人エログロ上手さ問わず)イラスト</li>
          <li>1-4ページほどの漫画</li>
          <li>SNSのプロフィール</li>
          <li>SNSの背景</li>
          <li>ねんどろいど</li>
          <li>フィギュア</li>
          <li>ドール</li>
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
          投稿NGなもの
        </p>
        <ul>
          <li>ごちうさと全く関係ないもの</li>
          <li>作者のわからないイラスト</li>
          <li>アニメ 漫画 同人誌の本編</li>
          <li>加工 コラ画像</li>
          <li>痛部屋(映りこんだイラストの作者がおおよそ不明なため)</li>
        </ul>
      </Accordion>
      <Accordion title="名称/説明の入力規則">
        <h4 class="subtitle">
          なければ無しでもいい
        </h4>
        <p>
          ですが、ご協力お願いします。
          Pixivから取得する場合は 名称と説明をなるべく維持してください。
          Twitterからの場合は、少しややこしいです。
          ツイートが長い場合は、名称と説明文に分けて入れてください。
          ツイートが短い場合は、名称だけを入れてください。
          画像だけの場合は、キャラクター名を入れるか、
          画像にあった名称を入れてください。
        </p>
        <p>
          空行やスペースは消してください。
          URLはきれいに弄ってください。
          なるべく見やすくなるようにお願いします。
        </p>
      </Accordion>
      <Accordion title="タグの入力規則">
        <h4 class="subtitle">
          主観的なタグは付けない
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
          複数に分かれないよう確認してください
        </h4>
        <p>
          (自動取得されていない場合は)ペンネーム正式名フルネームで入れてください。
          (自動取得されていない場合は)サークル名と間違えないよう注意お願いします。
          絵文字や、宣伝、イベントでのサークル場所、読み、＠以降に関しては外してください。
          ペンネームが以前と変わった場合は変わった後の名前にしてください。
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
          おおよそPixiv基準
        </p>
        <p>
          具が見えていない、かつ修正が入っていなければセーフです。
          おっぱいが見えてたらアウトです。
          限りなくアウトでもPixivがセーフと言っていたらR-18ではないです。
          なお、R-15は R-18ではないものとします。
        </p>
      </Accordion>
      <Accordion title="重複について">
        <p class="subtitle">
          それほど気にしなくて大丈夫
        </p>
        <p>
          重複してしまったとしても、殆どの場合は自動でサーバーが弾きます。
          なお、Pixivで投稿されたものがTwitterから投稿されたものと重複した場合、Pixivの方が画質が高いのですが
          重複扱いとなってしまいます。この問題は今後のアップデートで解決予定です。
          ご迷惑おかけしますが、上記問題が発生した場合はご一報ください。
        </p>
      </Accordion>
    </div>
  </section>
</template>

<script>
import Accordion from '~/components/ui/Accordion.vue'

export default {
  components: {
    Accordion
  },
  head () {
    return {
      title: 'イラスト投稿ルール'
    }
  }
}
</script>
