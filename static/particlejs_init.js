// グローバル変数で巻き上げないと更新ができない...
var sakuraCanvas = document.getElementById('js-background')
var stage = new createjs.Stage("js-background")
var particleSystem = particleSystem = new particlejs.ParticleSystem()

// 設定代入とか
function initializeSakura() {
    // パーティクルシステム作成します。
    stage.addChild(particleSystem.container)
    // Particle Developから保存したパラメーターを反映します。
    particleSystem.importFromJson(
        {
            bgColor: '#00000',
            width: window.innerWidth,
            height: window.innerHeight,
            emitFrequency: 10,
            startX: window.innerWidth / 2 - 100,
            startXVariance: window.innerWidth,
            startY: window.innerHeight + 100,
            startYVariance: 0,
            initialDirection: 317,
            initialDirectionVariance: 90,
            initialSpeed: 1,
            initialSpeedVariance: 10,
            friction: 0.01,
            accelerationSpeed: 0.0113,
            accelerationDirection: 290,
            startScale: 1,
            startScaleVariance: 1.5,
            finishScale: 0,
            finishScaleVariance: 0.1,
            lifeSpan: 1000,
            lifeSpanVariance: 50,
            startAlpha: '1',
            startAlphaVariance: '0',
            finishAlpha: '1',
            finishAlphaVariance: '0',
            shapeIdList: [
                'sakura1',
                'sakura2',
                'sakura3',
                'sakura4',
                'sakura5',
                'sakura6',
                'sakura7',
                'sakura8',
                'sakura9',
                'sakura10',
                'sakura11',
                'sakura12',
                'sakura13'
            ],
            startColor: {
                hue: '0',
                hueVariance: 360,
                saturation: 70,
                saturationVariance: 0,
                luminance: 80,
                luminanceVariance: 0
            },
            blendMode: false,
            alphaCurveType: '0',
            VERSION: '1.0.0'
        }
    )
    // フレームレートの設定
    createjs.Ticker.framerate = 60
    // requestAnimationFrameに従った呼び出し
    createjs.Ticker.timingMode = createjs.Ticker.RAF
    // 定期的に呼ばれる関数を登録
    createjs.Ticker.addEventListener("tick", animateSakura)
}

// 桜を動かす
function animateSakura() {
    // パーティクルの発生・更新
    particleSystem.rotation++;
    particleSystem.update();
    // 描画を更新する
    stage.update();
}

// 画面サイズをあわせる
function updateSakura() {
    sakuraCanvas.width = window.innerWidth
    sakuraCanvas.height = window.innerHeight
}

// 読み込み完了まで待って初期化
// Vue.js側のinitが終わって要素ができるまで待つ
window.addEventListener('load', () => {
    updateSakura()
    initializeSakura()
})

// 画面サイズをあわせる
window.addEventListener('resize', () => {
    updateSakura()
    animateSakura()
})