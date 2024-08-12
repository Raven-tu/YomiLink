import chunk from 'lodash-es/chunk'
import type { QuestionList } from '~/types'

const n3 = [
  {
    question: 'お腹',
    answer: 'onaka',
    explantion: '\n      汉字: お腹\n      读音: おなか\n      意思: stomach\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '仕舞った',
    answer: 'shimatta',
    explantion: '\n      汉字: 仕舞った\n      读音: しまった\n      意思: Damn it!\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'ジェット機',
    answer: 'jiettoki',
    explantion: '\n      汉字: ジェット機\n      读音: ジェットき\n      意思: jet aeroplane\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '哀れ',
    answer: 'aware',
    explantion: '\n      汉字: 哀れ\n      读音: あわれ\n      意思: helpless\n      来源: pity\n      同义词: 哀れ, 哀れ, 憐れ, 憐れ, 憫れ, 憫れ\n    ',
  },
  {
    question: '愛',
    answer: 'ai',
    explantion: '\n      汉字: 愛\n      读音: あい\n      意思: love\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '愛する',
    answer: 'aisuru',
    explantion: '\n      汉字: 愛する\n      读音: あいする\n      意思: to love\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '愛情',
    answer: 'aijiyou',
    explantion: '\n      汉字: 愛情\n      读音: あいじょう\n      意思: love\n      来源: affection\n      同义词: 愛情\n    ',
  },
  {
    question: '挨拶',
    answer: 'aisatsu',
    explantion: '\n      汉字: 挨拶\n      读音: あいさつ\n      意思: greeting\n      来源: salutation\n      同义词: 挨拶\n    ',
  },
  {
    question: '悪戯',
    answer: 'itazura',
    explantion: '\n      汉字: 悪戯\n      读音: いたずら\n      意思: tease\n      来源: prank\n      同义词: 悪戯, , , 悪戯, 惡戲, 惡戲, \n    ',
  },
  {
    question: '悪魔',
    answer: 'akuma',
    explantion: '\n      汉字: 悪魔\n      读音: あくま\n      意思: devil\n      来源: demon\n      同义词: 悪魔\n    ',
  },
  {
    question: '握る',
    answer: 'nigiru',
    explantion: '\n      汉字: 握る\n      读音: にぎる\n      意思: to grasp\n      来源: to seize\n      同义词: 握る\n    ',
  },
  {
    question: '握手',
    answer: 'akushiyu',
    explantion: '\n      汉字: 握手\n      读音: あくしゅ\n      意思: handshake\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '扱う',
    answer: 'atsukau',
    explantion: '\n      汉字: 扱う\n      读音: あつかう\n      意思: to handle\n      来源: to deal with\n      同义词: 扱う\n    ',
  },
  {
    question: '安定',
    answer: 'antei',
    explantion: '\n      汉字: 安定\n      读音: あんてい\n      意思: stability\n      来源: equilibrium\n      同义词: 安定\n    ',
  },
  {
    question: '案',
    answer: 'an',
    explantion: '\n      汉字: 案\n      读音: あん\n      意思: plan\n      来源: suffix meaning draft\n      同义词: 案\n    ',
  },
  {
    question: '以前',
    answer: 'izen',
    explantion: '\n      汉字: 以前\n      读音: いぜん\n      意思: ago\n      来源: since\n      同义词: 以前, 已前\n    ',
  },
  {
    question: '以来',
    answer: 'irai',
    explantion: '\n      汉字: 以来\n      读音: いらい\n      意思: since\n      来源: henceforth\n      同义词: 以来\n    ',
  },
  {
    question: '位',
    answer: 'kurai',
    explantion: '\n      汉字: 位\n      读音: くらい\n      意思: grade\n      来源: rank\n      同义词: 位\n    ',
  },
  {
    question: '依頼',
    answer: 'irai',
    explantion: '\n      汉字: 依頼\n      读音: いらい\n      意思: (1) request\n      来源: commission\n      同义词: 依頼\n    ',
  },
  {
    question: '偉大',
    answer: 'idai',
    explantion: '\n      汉字: 偉大\n      读音: いだい\n      意思: greatness\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '囲む',
    answer: 'kakomu',
    explantion: '\n      汉字: 囲む\n      读音: かこむ\n      意思: to surround\n      来源: to encircle\n      同义词: 囲む, 囲む\n    ',
  },
  {
    question: '委員',
    answer: 'iin',
    explantion: '\n      汉字: 委員\n      读音: いいん\n      意思: committee member\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '意外',
    answer: 'igai',
    explantion: '\n      汉字: 意外\n      读音: いがい\n      意思: unexpected\n      来源: surprising\n      同义词: 意外\n    ',
  },
  {
    question: '意志',
    answer: 'ishi',
    explantion: '\n      汉字: 意志\n      读音: いし\n      意思: will\n      来源: volition\n      同义词: 意志\n    ',
  },
  {
    question: '意思',
    answer: 'ishi',
    explantion: '\n      汉字: 意思\n      读音: いし\n      意思: intention\n      来源: purpose\n      同义词: 意思\n    ',
  },
  {
    question: '意識',
    answer: 'ishiki',
    explantion: '\n      汉字: 意識\n      读音: いしき\n      意思: consciousness\n      来源: senses\n      同义词: 意識\n    ',
  },
  {
    question: '椅子',
    answer: 'isu',
    explantion: '\n      汉字: 椅子\n      读音: いす\n      意思: chair\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '異なる',
    answer: 'kotonaru',
    explantion: '\n      汉字: 異なる\n      读音: ことなる\n      意思: to differ\n      来源: to vary\n      同义词: 異なる, 異る\n    ',
  },
  {
    question: '異常',
    answer: 'ijiyou',
    explantion: '\n      汉字: 異常\n      读音: いじょう\n      意思: strangeness\n      来源: abnormality\n      同义词: 異常\n    ',
  },
  {
    question: '移す',
    answer: 'utsusu',
    explantion: '\n      汉字: 移す\n      读音: うつす\n      意思: to remove\n      来源: to transfer\n      同义词: 移す, 遷す\n    ',
  },
  {
    question: '移動',
    answer: 'ido',
    explantion: '\n      汉字: 移動\n      读音: いどう\n      意思: removal\n      来源: migration\n      同义词: 移動\n    ',
  },
  {
    question: '維持',
    answer: 'iji',
    explantion: '\n      汉字: 維持\n      读音: いじ\n      意思: maintenance\n      来源: preservation\n      同义词: 維持\n    ',
  },
  {
    question: '胃',
    answer: 'i',
    explantion: '\n      汉字: 胃\n      读音: い\n      意思: stomach\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '衣服',
    answer: 'ifuku',
    explantion: '\n      汉字: 衣服\n      读音: いふく\n      意思: clothes\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '違い',
    answer: 'chigai',
    explantion: '\n      汉字: 違い\n      读音: ちがい\n      意思: difference\n      来源: discrepancy\n      同义词: 違い\n    ',
  },
  {
    question: '違反',
    answer: 'iwan',
    explantion: '\n      汉字: 違反\n      读音: いはん\n      意思: violation (of law)\n      来源: transgression\n      同义词: 違反\n    ',
  },
  {
    question: '医師',
    answer: 'ishi',
    explantion: '\n      汉字: 医師\n      读音: いし\n      意思: doctor\n      来源: physician\n      同义词: 医師\n    ',
  },
  {
    question: '医療',
    answer: 'iryo',
    explantion: '\n      汉字: 医療\n      读音: いりょう\n      意思: medical care\n      来源: medical treatment\n      同义词: 医療\n    ',
  },
  {
    question: '育つ',
    answer: 'sodatsu',
    explantion: '\n      汉字: 育つ\n      读音: そだつ\n      意思: to raise (child)\n      来源: to be brought up\n      同义词: 育つ\n    ',
  },
  {
    question: '一種',
    answer: 'isshiyu',
    explantion: '\n      汉字: 一種\n      读音: いっしゅ\n      意思: a species\n      来源: a kind\n      同义词: 一種\n    ',
  },
  {
    question: '一瞬',
    answer: 'itsushun',
    explantion: '\n      汉字: 一瞬\n      读音: いっしゅん\n      意思: a moment\n      来源: an instant\n      同义词: 一瞬\n    ',
  },
  {
    question: '一層',
    answer: 'isso',
    explantion: '\n      汉字: 一層\n      读音: いっそう\n      意思: much more\n      来源: still more\n      同义词: 一層\n    ',
  },
  {
    question: '一体',
    answer: 'ittai',
    explantion: '\n      汉字: 一体\n      读音: いったい\n      意思: (1) one object\n      来源: one body\n      同义词: 一体\n    ',
  },
  {
    question: '一致',
    answer: 'itchi',
    explantion: '\n      汉字: 一致\n      读音: いっち\n      意思: (1) coincidence\n      来源: agreement\n      同义词: 一致\n    ',
  },
  {
    question: '一般',
    answer: 'itsupan',
    explantion: '\n      汉字: 一般\n      读音: いっぱん\n      意思: general\n      来源: liberal\n      同义词: 一般\n    ',
  },
  {
    question: '一番',
    answer: 'ichiban',
    explantion: '\n      汉字: 一番\n      读音: いちばん\n      意思: best\n      来源: first\n      同义词: 一番\n    ',
  },
  {
    question: '一方',
    answer: 'ippo',
    explantion: '\n      汉字: 一方\n      读音: いっぽう\n      意思: (1) on the other hand\n      来源: (2) meanwhile\n      同义词: 一方\n    ',
  },
  {
    question: '稲',
    answer: 'ine',
    explantion: '\n      汉字: 稲\n      读音: いね\n      意思: rice-plant\n      来源: waller\n      同义词: 稻, \n    ',
  },
  {
    question: '印',
    answer: 'shirushi',
    explantion: '\n      汉字: 印\n      读音: しるし\n      意思: (1) mark\n      来源: (2) symbol\n      同义词: 印, , 標, 証, 証し\n    ',
  },
  {
    question: '印刷',
    answer: 'insatsu',
    explantion: '\n      汉字: 印刷\n      读音: いんさつ\n      意思: printing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '印象',
    answer: 'insho',
    explantion: '\n      汉字: 印象\n      读音: いんしょう\n      意思: impression\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '因る',
    answer: 'yoru',
    explantion: '\n      汉字: 因る\n      读音: よる\n      意思: according to\n      来源: waller\n      同义词: , 拠る, 依る, 由る\n    ',
  },
  {
    question: '引退',
    answer: 'intai',
    explantion: '\n      汉字: 引退\n      读音: いんたい\n      意思: retire\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '引用',
    answer: 'inyo',
    explantion: '\n      汉字: 引用\n      读音: いんよう\n      意思: quotation\n      来源: citation\n      同义词: 引用\n    ',
  },
  {
    question: '隠す',
    answer: 'kakusu',
    explantion: '\n      汉字: 隠す\n      读音: かくす\n      意思: to hide\n      来源: to conceal\n      同义词: 隠す, 隠くす, 匿す, 隱す\n    ',
  },
  {
    question: '隠れる',
    answer: 'kakureru',
    explantion: '\n      汉字: 隠れる\n      读音: かくれる\n      意思: to hide\n      来源: to be hidden\n      同义词: 隠れる, 匿れる\n    ',
  },
  {
    question: '宇宙',
    answer: 'uchiyuu',
    explantion: '\n      汉字: 宇宙\n      读音: うちゅう\n      意思: universe\n      来源: cosmos\n      同义词: 宇宙\n    ',
  },
  {
    question: '羽',
    answer: 'hane',
    explantion: '\n      汉字: 羽\n      读音: はね\n      意思: counter for birds\n      来源: counter for rabbits\n      同义词: 羽, 羽, 羽根\n    ',
  },
  {
    question: '噂',
    answer: 'uwasa',
    explantion: '\n      汉字: 噂\n      读音: うわさ\n      意思: rumour\n      来源: report\n      同义词: 噂\n    ',
  },
  {
    question: '運',
    answer: 'un',
    explantion: '\n      汉字: 運\n      读音: うん\n      意思: fortune\n      来源: luck\n      同义词: 運\n    ',
  },
  {
    question: '餌',
    answer: 'esa',
    explantion: '\n      汉字: 餌\n      读音: えさ\n      意思: feed\n      来源: bait\n      同义词: 餌, 餌, \n    ',
  },
  {
    question: '営業',
    answer: 'eigyou',
    explantion: '\n      汉字: 営業\n      读音: えいぎょう\n      意思: business\n      来源: trade\n      同义词: 営業\n    ',
  },
  {
    question: '影響',
    answer: 'eikyo',
    explantion: '\n      汉字: 影響\n      读音: えいきょう\n      意思: influence\n      来源: effect\n      同义词: 影響\n    ',
  },
  {
    question: '栄養',
    answer: 'eiyo',
    explantion: '\n      汉字: 栄養\n      读音: えいよう\n      意思: nutrition\n      来源: nourishment\n      同义词: 栄養, 営養\n    ',
  },
  {
    question: '永遠',
    answer: 'eien',
    explantion: '\n      汉字: 永遠\n      读音: えいえん\n      意思: eternity\n      来源: perpetuity\n      同义词: 永遠\n    ',
  },
  {
    question: '衛星',
    answer: 'eisei',
    explantion: '\n      汉字: 衛星\n      读音: えいせい\n      意思: satellite\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '鋭い',
    answer: 'surudoi',
    explantion: '\n      汉字: 鋭い\n      读音: するどい\n      意思: pointed\n      来源: sharp\n      同义词: 鋭い\n    ',
  },
  {
    question: '越す',
    answer: 'kosu',
    explantion: '\n      汉字: 越す\n      读音: こす\n      意思: to go over (e.g. with audience)\n      来源: waller\n      同义词: 超す\n    ',
  },
  {
    question: '円',
    answer: 'en',
    explantion: '\n      汉字: 円\n      读音: えん\n      意思: circle\n      来源: money\n      同义词: 円, 圓\n    ',
  },
  {
    question: '延期',
    answer: 'enki',
    explantion: '\n      汉字: 延期\n      读音: えんき\n      意思: postponement\n      来源: adjournment\n      同义词: 延期\n    ',
  },
  {
    question: '援助',
    answer: 'enjo',
    explantion: '\n      汉字: 援助\n      读音: えんじょ\n      意思: assistance\n      来源: aid\n      同义词: 援助\n    ',
  },
  {
    question: '演技',
    answer: 'engi',
    explantion: '\n      汉字: 演技\n      读音: えんぎ\n      意思: acting\n      来源: performance\n      同义词: 演技\n    ',
  },
  {
    question: '演説',
    answer: 'enzetsu',
    explantion: '\n      汉字: 演説\n      读音: えんぜつ\n      意思: speech\n      来源: address\n      同义词: 演説\n    ',
  },
  {
    question: '炎',
    answer: 'honoo',
    explantion: '\n      汉字: 炎\n      读音: ほのお\n      意思: flame\n      来源: waller\n      同义词: 炎, 焔, 焔\n    ',
  },
  {
    question: '煙',
    answer: 'kemuri',
    explantion: '\n      汉字: 煙\n      读音: けむり\n      意思: smoke\n      来源: fumes\n      同义词: 煙, 煙, 煙, 煙, 烟, 烟, 烟, 烟\n    ',
  },
  {
    question: '猿',
    answer: 'saru',
    explantion: '\n      汉字: 猿\n      读音: さる\n      意思: monkey\n      来源: waller\n      同义词: , 猨, \n    ',
  },
  {
    question: '縁',
    answer: 'fuchi',
    explantion: '\n      汉字: 縁\n      读音: ふち\n      意思: a means\n      来源:  e.g. of living\n      同义词: 縁\n    ',
  },
  {
    question: '汚染',
    answer: 'osen',
    explantion: '\n      汉字: 汚染\n      读音: おせん\n      意思: pollution\n      来源: contamination\n      同义词: 汚染\n    ',
  },
  {
    question: '奥',
    answer: 'oku',
    explantion: '\n      汉字: 奥\n      读音: おく\n      意思: interior\n      来源: inner part\n      同义词: 奥, 奧\n    ',
  },
  {
    question: '応じる',
    answer: 'ojiru',
    explantion: '\n      汉字: 応じる\n      读音: おうじる\n      意思: to respond\n      来源: to satisfy\n      同义词: 応じる\n    ',
  },
  {
    question: '横切る',
    answer: 'yokogiru',
    explantion: '\n      汉字: 横切る\n      读音: よこぎる\n      意思: to cross (e.g. arms)\n      来源: to traverse\n      同义词: 横切る, 横ぎる\n    ',
  },
  {
    question: '横断',
    answer: 'oudan',
    explantion: '\n      汉字: 横断\n      读音: おうだん\n      意思: crossing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '王子',
    answer: 'oji',
    explantion: '\n      汉字: 王子\n      读音: おうじ\n      意思: prince\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '王様',
    answer: 'ousama',
    explantion: '\n      汉字: 王様\n      读音: おうさま\n      意思: king\n      来源: waller\n      同义词: 王さま\n    ',
  },
  {
    question: '沖',
    answer: 'oki',
    explantion: '\n      汉字: 沖\n      读音: おき\n      意思: open sea\n      来源: waller\n      同义词: 澳\n    ',
  },
  {
    question: '屋根',
    answer: 'yane',
    explantion: '\n      汉字: 屋根\n      读音: やね\n      意思: roof\n      来源: waller\n      同义词: 家根\n    ',
  },
  {
    question: '恩',
    answer: 'on',
    explantion: '\n      汉字: 恩\n      读音: おん\n      意思: favour\n      来源: obligation\n      同义词: 恩\n    ',
  },
  {
    question: '温暖',
    answer: 'ondan',
    explantion: '\n      汉字: 温暖\n      读音: おんだん\n      意思: warmth\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '温度',
    answer: 'ondo',
    explantion: '\n      汉字: 温度\n      读音: おんど\n      意思: temperature\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '穏やか',
    answer: 'odayaka',
    explantion: '\n      汉字: 穏やか\n      读音: おだやか\n      意思: calm\n      来源: gentle\n      同义词: 穏やか\n    ',
  },
  {
    question: '下さる',
    answer: 'kudasaru',
    explantion: '\n      汉字: 下さる\n      读音: くださる\n      意思: (hon) to give\n      来源: to confer\n      同义词: 下さる\n    ',
  },
  {
    question: '下り',
    answer: 'kudari',
    explantion: '\n      汉字: 下り\n      读音: くだり\n      意思: down-train (going away from Tokyo)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '化学',
    answer: 'kagaku',
    explantion: '\n      汉字: 化学\n      读音: かがく\n      意思: chemistry\n      来源: waller\n      同义词: 化学\n    ',
  },
  {
    question: '何か',
    answer: 'nanika',
    explantion: '\n      汉字: 何か\n      读音: なにか\n      意思: something\n      来源: waller\n      同义词: 何か\n    ',
  },
  {
    question: '何とか',
    answer: 'nantoka',
    explantion: '\n      汉字: 何とか\n      读音: なんとか\n      意思: somehow\n      来源: anyhow\n      同义词: 何とか, \n    ',
  },
  {
    question: '何時か',
    answer: 'itsuka',
    explantion: '\n      汉字: 何時か\n      读音: いつか\n      意思: sometime\n      来源: someday\n      同义词: 何時か, \n    ',
  },
  {
    question: '何時も',
    answer: 'itsumo',
    explantion: '\n      汉字: 何時も\n      读音: いつも\n      意思: always\n      来源: usually\n      同义词: 何時も\n    ',
  },
  {
    question: '価格',
    answer: 'kakaku',
    explantion: '\n      汉字: 価格\n      读音: かかく\n      意思: price\n      来源: value\n      同义词: 価格\n    ',
  },
  {
    question: '価値',
    answer: 'kachi',
    explantion: '\n      汉字: 価値\n      读音: かち\n      意思: value\n      来源: worth\n      同义词: 価値\n    ',
  },
  {
    question: '加える',
    answer: 'kuwaeru',
    explantion: '\n      汉字: 加える\n      读音: くわえる\n      意思: to append\n      来源: to sum up\n      同义词: 加える\n    ',
  },
  {
    question: '加わる',
    answer: 'kuwawaru',
    explantion: '\n      汉字: 加わる\n      读音: くわわる\n      意思: to join in\n      来源: to accede to\n      同义词: 加わる\n    ',
  },
  {
    question: '加減',
    answer: 'kagen',
    explantion: '\n      汉字: 加減\n      读音: かげん\n      意思: addition and subtraction\n      来源: allowance for\n      同义词: 加減\n    ',
  },
  {
    question: '可',
    answer: 'ka',
    explantion: '\n      汉字: 可\n      读音: か\n      意思: passable\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '可能',
    answer: 'kano',
    explantion: '\n      汉字: 可能\n      读音: かのう\n      意思: possible\n      来源: practicable\n      同义词: 可能\n    ',
  },
  {
    question: '嫁',
    answer: 'yome',
    explantion: '\n      汉字: 嫁\n      读音: よめ\n      意思: bride\n      来源: daughter-in-law\n      同义词: 嫁, 娵, 婦, 媳\n    ',
  },
  {
    question: '家具',
    answer: 'kagu',
    explantion: '\n      汉字: 家具\n      读音: かぐ\n      意思: furniture\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '家事',
    answer: 'kaji',
    explantion: '\n      汉字: 家事\n      读音: かじ\n      意思: housework\n      来源: domestic chores\n      同义词: 家事\n    ',
  },
  {
    question: '家賃',
    answer: 'yachin',
    explantion: '\n      汉字: 家賃\n      读音: やちん\n      意思: rent\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '歌手',
    answer: 'kashiyu',
    explantion: '\n      汉字: 歌手\n      读音: かしゅ\n      意思: singer\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '火災',
    answer: 'kasai',
    explantion: '\n      汉字: 火災\n      读音: かさい\n      意思: conflagration\n      来源: fire\n      同义词: 火災\n    ',
  },
  {
    question: '火曜',
    answer: 'kayou',
    explantion: '\n      汉字: 火曜\n      读音: かよう\n      意思: (abbr) Tuesday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '稼ぐ',
    answer: 'kasegu',
    explantion: '\n      汉字: 稼ぐ\n      读音: かせぐ\n      意思: to earn income\n      来源: to labor\n      同义词: 稼ぐ\n    ',
  },
  {
    question: '菓子',
    answer: 'kashi',
    explantion: '\n      汉字: 菓子\n      读音: かし\n      意思: pastry\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '課',
    answer: 'ka',
    explantion: '\n      汉字: 課\n      读音: か\n      意思: counter for chapters (of a book)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '過ごす',
    answer: 'sugosu',
    explantion: '\n      汉字: 過ごす\n      读音: すごす\n      意思: to pass\n      来源: to spend\n      同义词: 過ごす, 過す\n    ',
  },
  {
    question: '過去',
    answer: 'kako',
    explantion: '\n      汉字: 過去\n      读音: かこ\n      意思: the past\n      来源: bygone days\n      同义词: 過去\n    ',
  },
  {
    question: '我慢',
    answer: 'gaman',
    explantion: '\n      汉字: 我慢\n      读音: がまん\n      意思: patience\n      来源: endurance\n      同义词: 我慢, \n    ',
  },
  {
    question: '画家',
    answer: 'gaka',
    explantion: '\n      汉字: 画家\n      读音: がか\n      意思: painter\n      来源: artist\n      同义词: 画家\n    ',
  },
  {
    question: '芽',
    answer: 'me',
    explantion: '\n      汉字: 芽\n      读音: め\n      意思: sprout\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '会',
    answer: 'kai',
    explantion: '\n      汉字: 会\n      读音: かい\n      意思: meeting\n      来源: assembly\n      同义词: 会\n    ',
  },
  {
    question: '会員',
    answer: 'kaiin',
    explantion: '\n      汉字: 会員\n      读音: かいいん\n      意思: member\n      来源: the membership\n      同义词: 会員\n    ',
  },
  {
    question: '会計',
    answer: 'kaikei',
    explantion: '\n      汉字: 会計\n      读音: かいけい\n      意思: account\n      来源: finance\n      同义词: 会計\n    ',
  },
  {
    question: '会合',
    answer: 'kaigou',
    explantion: '\n      汉字: 会合\n      读音: かいごう\n      意思: meeting\n      来源: assembly\n      同义词: 会合\n    ',
  },
  {
    question: '解く',
    answer: 'toku',
    explantion: '\n      汉字: 解く\n      读音: とく\n      意思: to unfasten\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '解ける',
    answer: 'tokeru',
    explantion: '\n      汉字: 解ける\n      读音: とける\n      意思: to come untied\n      来源: to come apart\n      同义词: 解ける\n    ',
  },
  {
    question: '解決',
    answer: 'kaiketsu',
    explantion: '\n      汉字: 解決\n      读音: かいけつ\n      意思: settlement\n      来源: solution\n      同义词: 解決\n    ',
  },
  {
    question: '解釈',
    answer: 'kaishaku',
    explantion: '\n      汉字: 解釈\n      读音: かいしゃく\n      意思: explanation\n      来源: interpretation\n      同义词: 解釈\n    ',
  },
  {
    question: '回',
    answer: 'kai',
    explantion: '\n      汉字: 回\n      读音: かい\n      意思: counter for occurrences\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '回す',
    answer: 'mawasu',
    explantion: '\n      汉字: 回す\n      读音: まわす\n      意思: to turn\n      来源: to revolve\n      同义词: 回す, 廻す\n    ',
  },
  {
    question: '回復',
    answer: 'kaifuku',
    explantion: '\n      汉字: 回復\n      读音: かいふく\n      意思: recovery (from illness)\n      来源: improvement\n      同义词: 回復, 快復, 恢復\n    ',
  },
  {
    question: '快適',
    answer: 'kaiteki',
    explantion: '\n      汉字: 快適\n      读音: かいてき\n      意思: pleasant\n      来源: agreeable\n      同义词: 快適\n    ',
  },
  {
    question: '改善',
    answer: 'kaizen',
    explantion: '\n      汉字: 改善\n      读音: かいぜん\n      意思: betterment\n      来源: improvement\n      同义词: 改善, \n    ',
  },
  {
    question: '海外',
    answer: 'kaigai',
    explantion: '\n      汉字: 海外\n      读音: かいがい\n      意思: foreign\n      来源: abroad\n      同义词: 海外\n    ',
  },
  {
    question: '灰',
    answer: 'hai',
    explantion: '\n      汉字: 灰\n      读音: はい\n      意思: ash\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '皆',
    answer: 'minna',
    explantion: '\n      汉字: 皆\n      读音: みんな\n      意思: all\n      来源: everyone\n      同义词: 皆\n    ',
  },
  {
    question: '絵画',
    answer: 'kaiga',
    explantion: '\n      汉字: 絵画\n      读音: かいが\n      意思: picture\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '明ける',
    answer: 'akeru',
    explantion: '\n      汉字: 明ける\n      读音: あける\n      意思: to dawn\n      来源: to become daylight\n      同义词: 明ける\n    ',
  },
  {
    question: '開始',
    answer: 'kaishi',
    explantion: '\n      汉字: 開始\n      读音: かいし\n      意思: start\n      来源: commencement\n      同义词: 開始\n    ',
  },
  {
    question: '他',
    answer: 'hoka',
    explantion: '\n      汉字: 他\n      读音: ほか\n      意思: other (esp. places and things)\n      来源: waller\n      同义词: 外\n    ',
  },
  {
    question: '外す',
    answer: 'hazusu',
    explantion: '\n      汉字: 外す\n      读音: はずす\n      意思: to unfasten\n      来源: to remove\n      同义词: 外す\n    ',
  },
  {
    question: '外交',
    answer: 'gaiko',
    explantion: '\n      汉字: 外交\n      读音: がいこう\n      意思: diplomacy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '外出',
    answer: 'gaishutsu',
    explantion: '\n      汉字: 外出\n      读音: がいしゅつ\n      意思: outing\n      来源: going out\n      同义词: 外出, 外出\n    ',
  },
  {
    question: '咳',
    answer: 'seki',
    explantion: '\n      汉字: 咳\n      读音: せき\n      意思: cough\n      来源: waller\n      同义词: 咳\n    ',
  },
  {
    question: '害',
    answer: 'gai',
    explantion: '\n      汉字: 害\n      读音: がい\n      意思: injury\n      来源: harm\n      同义词: 害\n    ',
  },
  {
    question: '拡大',
    answer: 'kakudai',
    explantion: '\n      汉字: 拡大\n      读音: かくだい\n      意思: magnification\n      来源: enlargement\n      同义词: 拡大\n    ',
  },
  {
    question: '確かめる',
    answer: 'tashikameru',
    explantion: '\n      汉字: 確かめる\n      读音: たしかめる\n      意思: to ascertain\n      来源: waller\n      同义词: 慥かめる\n    ',
  },
  {
    question: '確実',
    answer: 'kakujitsu',
    explantion: '\n      汉字: 確実\n      读音: かくじつ\n      意思: certainty\n      来源: reliability\n      同义词: 確実\n    ',
  },
  {
    question: '確認',
    answer: 'kakunin',
    explantion: '\n      汉字: 確認\n      读音: かくにん\n      意思: affirmation\n      来源: confirmation\n      同义词: 確認\n    ',
  },
  {
    question: '覚ます',
    answer: 'samasu',
    explantion: '\n      汉字: 覚ます\n      读音: さます\n      意思: to awaken\n      来源: waller\n      同义词: 醒ます\n    ',
  },
  {
    question: '覚める',
    answer: 'sameru',
    explantion: '\n      汉字: 覚める\n      读音: さめる\n      意思: to wake\n      来源: to wake up\n      同义词: 覚める, 醒める\n    ',
  },
  {
    question: '覚悟',
    answer: 'kakugo',
    explantion: '\n      汉字: 覚悟\n      读音: かくご\n      意思: resolution\n      来源: resignation\n      同义词: 覚悟\n    ',
  },
  {
    question: '学ぶ',
    answer: 'manabu',
    explantion: '\n      汉字: 学ぶ\n      读音: まなぶ\n      意思: to study (in depth)\n      来源: to learn\n      同义词: 学ぶ, 學ぶ\n    ',
  },
  {
    question: '学期',
    answer: 'gakki',
    explantion: '\n      汉字: 学期\n      读音: がっき\n      意思: term (school)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '学者',
    answer: 'gakusha',
    explantion: '\n      汉字: 学者\n      读音: がくしゃ\n      意思: scholar\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '学習',
    answer: 'gakushu',
    explantion: '\n      汉字: 学習\n      读音: がくしゅう\n      意思: study\n      来源: learning\n      同义词: 学習\n    ',
  },
  {
    question: '学問',
    answer: 'gakumon',
    explantion: '\n      汉字: 学問\n      读音: がくもん\n      意思: scholarship\n      来源: study\n      同义词: 学問, 学文, 学門\n    ',
  },
  {
    question: '楽',
    answer: 'raku',
    explantion: '\n      汉字: 楽\n      读音: らく\n      意思: comfort\n      来源: ease\n      同义词: 楽\n    ',
  },
  {
    question: '額',
    answer: 'gaku',
    explantion: '\n      汉字: 額\n      读音: がく\n      意思: forehead\n      来源: brow\n      同义词: 額\n    ',
  },
  {
    question: '額',
    answer: 'hitai',
    explantion: '\n      汉字: 額\n      读音: ひたい\n      意思: forehead\n      来源: brow\n      同义词: 額\n    ',
  },
  {
    question: '割る',
    answer: 'waru',
    explantion: '\n      汉字: 割る\n      读音: わる\n      意思: to divide\n      来源: to cut\n      同义词: 割る\n    ',
  },
  {
    question: '活気',
    answer: 'kakki',
    explantion: '\n      汉字: 活気\n      读音: かっき\n      意思: energy\n      来源: liveliness\n      同义词: 活気\n    ',
  },
  {
    question: '活動',
    answer: 'katsudo',
    explantion: '\n      汉字: 活動\n      读音: かつどう\n      意思: action\n      来源: activity\n      同义词: 活動\n    ',
  },
  {
    question: '活用',
    answer: 'katsuyo',
    explantion: '\n      汉字: 活用\n      读音: かつよう\n      意思: conjugation\n      来源: practical use\n      同义词: 活用\n    ',
  },
  {
    question: '株',
    answer: 'kabu',
    explantion: '\n      汉字: 株\n      读音: かぶ\n      意思: share\n      来源: stock\n      同义词: 株\n    ',
  },
  {
    question: '刈る',
    answer: 'karu',
    explantion: '\n      汉字: 刈る\n      读音: かる\n      意思: to cut (hair)\n      来源: to mow (grass)\n      同义词: 刈る, 苅る\n    ',
  },
  {
    question: '勘',
    answer: 'kan',
    explantion: '\n      汉字: 勘\n      读音: かん\n      意思: perception\n      来源: intuition\n      同义词: 勘\n    ',
  },
  {
    question: '勘定',
    answer: 'kanjo',
    explantion: '\n      汉字: 勘定\n      读音: かんじょう\n      意思: calculation\n      来源: counting\n      同义词: 勘定\n    ',
  },
  {
    question: '完成',
    answer: 'kansei',
    explantion: '\n      汉字: 完成\n      读音: かんせい\n      意思: (1) complete\n      来源: completion\n      同义词: 完成\n    ',
  },
  {
    question: '完全',
    answer: 'kanzen',
    explantion: '\n      汉字: 完全\n      读音: かんぜん\n      意思: perfection\n      来源: completeness\n      同义词: 完全\n    ',
  },
  {
    question: '完了',
    answer: 'kanryo',
    explantion: '\n      汉字: 完了\n      读音: かんりょう\n      意思: completion\n      来源: conclusion\n      同义词: 完了\n    ',
  },
  {
    question: '患者',
    answer: 'kanja',
    explantion: '\n      汉字: 患者\n      读音: かんじゃ\n      意思: a patient\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '感じ',
    answer: 'kanji',
    explantion: '\n      汉字: 感じ\n      读音: かんじ\n      意思: feeling\n      来源: sense\n      同义词: 感じ\n    ',
  },
  {
    question: '感じる',
    answer: 'kanjiru',
    explantion: '\n      汉字: 感じる\n      读音: かんじる\n      意思: to feel\n      来源: to sense\n      同义词: 感じる\n    ',
  },
  {
    question: '感覚',
    answer: 'kankaku',
    explantion: '\n      汉字: 感覚\n      读音: かんかく\n      意思: sense\n      来源: sensation\n      同义词: 感覚\n    ',
  },
  {
    question: '感謝',
    answer: 'kansha',
    explantion: '\n      汉字: 感謝\n      读音: かんしゃ\n      意思: thanks\n      来源: gratitude\n      同义词: 感謝\n    ',
  },
  {
    question: '感情',
    answer: 'kanjo',
    explantion: '\n      汉字: 感情\n      读音: かんじょう\n      意思: emotion(s)\n      来源: feeling(s)\n      同义词: 感情\n    ',
  },
  {
    question: '感心',
    answer: 'kanshin',
    explantion: '\n      汉字: 感心\n      读音: かんしん\n      意思: admiration\n      来源: Well done!\n      同义词: 感心\n    ',
  },
  {
    question: '感動',
    answer: 'kando',
    explantion: '\n      汉字: 感動\n      读音: かんどう\n      意思: being deeply moved\n      来源: excitement\n      同义词: 感動\n    ',
  },
  {
    question: '歓迎',
    answer: 'kangei',
    explantion: '\n      汉字: 歓迎\n      读音: かんげい\n      意思: welcome\n      来源: reception\n      同义词: 歓迎\n    ',
  },
  {
    question: '汗',
    answer: 'ase',
    explantion: '\n      汉字: 汗\n      读音: あせ\n      意思: sweat\n      来源: perspiration\n      同义词: 汗\n    ',
  },
  {
    question: '環境',
    answer: 'kankyo',
    explantion: '\n      汉字: 環境\n      读音: かんきょう\n      意思: environment\n      来源: circumstance\n      同义词: 環境\n    ',
  },
  {
    question: '監督',
    answer: 'kantoku',
    explantion: '\n      汉字: 監督\n      读音: かんとく\n      意思: supervision\n      来源: control\n      同义词: 監督\n    ',
  },
  {
    question: '管理',
    answer: 'kanri',
    explantion: '\n      汉字: 管理\n      读音: かんり\n      意思: control\n      来源: management (e.g. of a business)\n      同义词: 管理\n    ',
  },
  {
    question: '缶',
    answer: 'kan',
    explantion: '\n      汉字: 缶\n      读音: かん\n      意思: can\n      来源: tin\n      同义词: 缶, 罐, 鑵, \n    ',
  },
  {
    question: '観客',
    answer: 'kankyaku',
    explantion: '\n      汉字: 観客\n      读音: かんきゃく\n      意思: audience\n      来源: spectator(s)\n      同义词: 観客\n    ',
  },
  {
    question: '観光',
    answer: 'kanko',
    explantion: '\n      汉字: 観光\n      读音: かんこう\n      意思: sightseeing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '観察',
    answer: 'kansatsu',
    explantion: '\n      汉字: 観察\n      读音: かんさつ\n      意思: observation\n      来源: survey\n      同义词: 観察\n    ',
  },
  {
    question: '間',
    answer: 'ma',
    explantion: '\n      汉字: 間\n      读音: ま\n      意思: space\n      来源: room\n      同义词: 間\n    ',
  },
  {
    question: '間違い',
    answer: 'machigai',
    explantion: '\n      汉字: 間違い\n      读音: まちがい\n      意思: mistake\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '関する',
    answer: 'kansuru',
    explantion: '\n      汉字: 関する\n      读音: かんする\n      意思: to concern\n      来源: to be related\n      同义词: 関する\n    ',
  },
  {
    question: '関心',
    answer: 'kanshin',
    explantion: '\n      汉字: 関心\n      读音: かんしん\n      意思: concern\n      来源: interest\n      同义词: 関心\n    ',
  },
  {
    question: '関連',
    answer: 'kanren',
    explantion: '\n      汉字: 関連\n      读音: かんれん\n      意思: relation\n      来源: connection\n      同义词: 関連, 関聯\n    ',
  },
  {
    question: '丸',
    answer: 'maru',
    explantion: '\n      汉字: 丸\n      读音: まる\n      意思: circle\n      来源: full (month)\n      同义词: 丸, , 円\n    ',
  },
  {
    question: '含む',
    answer: 'fukumu',
    explantion: '\n      汉字: 含む\n      读音: ふくむ\n      意思: to hold in the mouth\n      来源: to bear in mind\n      同义词: 含む, 含む, 銜む, 銜む\n    ',
  },
  {
    question: '岸',
    answer: 'kishi',
    explantion: '\n      汉字: 岸\n      读音: きし\n      意思: bank\n      来源: coast\n      同义词: 岸\n    ',
  },
  {
    question: '岩',
    answer: 'iwa',
    explantion: '\n      汉字: 岩\n      读音: いわ\n      意思: rock\n      来源: crag\n      同义词: 岩, 巌, 磐, 巖\n    ',
  },
  {
    question: '願い',
    answer: 'negai',
    explantion: '\n      汉字: 願い\n      读音: ねがい\n      意思: desire\n      来源: wish\n      同义词: 願い, 願\n    ',
  },
  {
    question: '願う',
    answer: 'negau',
    explantion: '\n      汉字: 願う\n      读音: ねがう\n      意思: to desire\n      来源: to wish\n      同义词: 願う\n    ',
  },
  {
    question: '企業',
    answer: 'kigyou',
    explantion: '\n      汉字: 企業\n      读音: きぎょう\n      意思: enterprise\n      来源: undertaking\n      同义词: 企業\n    ',
  },
  {
    question: '器用',
    answer: 'kiyo',
    explantion: '\n      汉字: 器用\n      读音: きよう\n      意思: skillful\n      来源: handy\n      同义词: 器用\n    ',
  },
  {
    question: '基本',
    answer: 'kihon',
    explantion: '\n      汉字: 基本\n      读音: きほん\n      意思: foundation\n      来源: basis\n      同义词: 基本\n    ',
  },
  {
    question: '奇妙',
    answer: 'kimiyou',
    explantion: '\n      汉字: 奇妙\n      读音: きみょう\n      意思: strange\n      来源: queer\n      同义词: 奇妙\n    ',
  },
  {
    question: '嬉しい',
    answer: 'ureshii',
    explantion: '\n      汉字: 嬉しい\n      读音: うれしい\n      意思: happy\n      来源: glad\n      同义词: 嬉しい\n    ',
  },
  {
    question: '希望',
    answer: 'kibou',
    explantion: '\n      汉字: 希望\n      读音: きぼう\n      意思: hope\n      来源: wish\n      同义词: 希望, 冀望\n    ',
  },
  {
    question: '幾つ',
    answer: 'ikutsu',
    explantion: '\n      汉字: 幾つ\n      读音: いくつ\n      意思: how many?\n      来源: how old?\n      同义词: 幾つ\n    ',
  },
  {
    question: '幾ら',
    answer: 'ikura',
    explantion: '\n      汉字: 幾ら\n      读音: いくら\n      意思: how much?\n      来源: how many?\n      同义词: 幾ら\n    ',
  },
  {
    question: '旗',
    answer: 'hata',
    explantion: '\n      汉字: 旗\n      读音: はた\n      意思: flag\n      来源: waller\n      同义词: 幡, 旌\n    ',
  },
  {
    question: '既に',
    answer: 'sudeni',
    explantion: '\n      汉字: 既に\n      读音: すでに\n      意思: already\n      来源: too late\n      同义词: 既に, , , 既に, 已に, 已に\n    ',
  },
  {
    question: '期間',
    answer: 'kikan',
    explantion: '\n      汉字: 期間\n      读音: きかん\n      意思: period\n      来源: term\n      同义词: 期間\n    ',
  },
  {
    question: '期待',
    answer: 'kitai',
    explantion: '\n      汉字: 期待\n      读音: きたい\n      意思: expectation\n      来源: anticipation\n      同义词: 期待\n    ',
  },
  {
    question: '機械',
    answer: 'kikai',
    explantion: '\n      汉字: 機械\n      读音: きかい\n      意思: machine\n      来源: mechanism\n      同义词: 機械, 器械\n    ',
  },
  {
    question: '機関',
    answer: 'kikan',
    explantion: '\n      汉字: 機関\n      读音: きかん\n      意思: organ\n      来源: mechanism\n      同义词: 機関\n    ',
  },
  {
    question: '機嫌',
    answer: 'kigen',
    explantion: '\n      汉字: 機嫌\n      读音: きげん\n      意思: humour\n      来源: temper\n      同义词: 機嫌, 譏嫌, 気嫌\n    ',
  },
  {
    question: '機能',
    answer: 'kino',
    explantion: '\n      汉字: 機能\n      读音: きのう\n      意思: function\n      来源: faculty\n      同义词: 機能\n    ',
  },
  {
    question: '帰宅',
    answer: 'kitaku',
    explantion: '\n      汉字: 帰宅\n      读音: きたく\n      意思: returning home\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '気に入る',
    answer: 'kiniiru',
    explantion: '\n      汉字: 気に入る\n      读音: きにいる\n      意思: to be pleased with\n      来源: to suit\n      同义词: 気に入る, 気にいる\n    ',
  },
  {
    question: '気の毒',
    answer: 'kinodoku',
    explantion: '\n      汉字: 気の毒\n      读音: きのどく\n      意思: pitiful\n      来源: a pity\n      同义词: 気の毒, 気のどく\n    ',
  },
  {
    question: '気温',
    answer: 'kion',
    explantion: '\n      汉字: 気温\n      读音: きおん\n      意思: temperature\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '気候',
    answer: 'kiko',
    explantion: '\n      汉字: 気候\n      读音: きこう\n      意思: climate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '気味',
    answer: 'kimi',
    explantion: '\n      汉字: 気味\n      读音: きみ\n      意思: -like\n      来源: -looking\n      同义词: 気味, 気味\n    ',
  },
  {
    question: '記憶',
    answer: 'kioku',
    explantion: '\n      汉字: 記憶\n      读音: きおく\n      意思: memory\n      来源: recollection\n      同义词: 記憶\n    ',
  },
  {
    question: '記事',
    answer: 'kiji',
    explantion: '\n      汉字: 記事\n      读音: きじ\n      意思: article\n      来源: news story\n      同义词: 記事\n    ',
  },
  {
    question: '記者',
    answer: 'kisha',
    explantion: '\n      汉字: 記者\n      读音: きしゃ\n      意思: reporter\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '記入',
    answer: 'kiniyuu',
    explantion: '\n      汉字: 記入\n      读音: きにゅう\n      意思: entry\n      来源: filling in of forms\n      同义词: 記入\n    ',
  },
  {
    question: '記念',
    answer: 'kinen',
    explantion: '\n      汉字: 記念\n      读音: きねん\n      意思: commemoration\n      来源: memory\n      同义词: 記念, 紀念\n    ',
  },
  {
    question: '記録',
    answer: 'kiroku',
    explantion: '\n      汉字: 記録\n      读音: きろく\n      意思: record\n      来源: minutes\n      同义词: 記録\n    ',
  },
  {
    question: '貴重',
    answer: 'kichou',
    explantion: '\n      汉字: 貴重\n      读音: きちょう\n      意思: precious\n      来源: valuable\n      同义词: 貴重\n    ',
  },
  {
    question: '起こる',
    answer: 'okoru',
    explantion: '\n      汉字: 起こる\n      读音: おこる\n      意思: to occur\n      来源: to happen\n      同义词: 起こる, 起る\n    ',
  },
  {
    question: '輝く',
    answer: 'kagayaku',
    explantion: '\n      汉字: 輝く\n      读音: かがやく\n      意思: to shine\n      来源: to glitter\n      同义词: 輝く, 耀く, 赫く, 燿く, 煌く\n    ',
  },
  {
    question: '鬼',
    answer: 'oni',
    explantion: '\n      汉字: 鬼\n      读音: おに\n      意思: ogre\n      来源: demon\n      同义词: 鬼, 鬼\n    ',
  },
  {
    question: '宜しい',
    answer: 'yoroshii',
    explantion: '\n      汉字: 宜しい\n      读音: よろしい\n      意思: (hon) good\n      来源: OK\n      同义词: 宜しい\n    ',
  },
  {
    question: '宜しく',
    answer: 'yoroshiku',
    explantion: '\n      汉字: 宜しく\n      读音: よろしく\n      意思: well\n      来源: properly\n      同义词: 宜しく, , 宜敷く\n    ',
  },
  {
    question: '技師',
    answer: 'gishi',
    explantion: '\n      汉字: 技師\n      读音: ぎし\n      意思: engineer\n      来源: technician\n      同义词: 技師\n    ',
  },
  {
    question: '疑う',
    answer: 'utagau',
    explantion: '\n      汉字: 疑う\n      读音: うたがう\n      意思: to doubt\n      来源: to distrust\n      同义词: 疑う\n    ',
  },
  {
    question: '疑問',
    answer: 'gimon',
    explantion: '\n      汉字: 疑問\n      读音: ぎもん\n      意思: question\n      来源: problem\n      同义词: 疑問\n    ',
  },
  {
    question: '義務',
    answer: 'gimu',
    explantion: '\n      汉字: 義務\n      读音: ぎむ\n      意思: duty\n      来源: obligation\n      同义词: 義務\n    ',
  },
  {
    question: '議員',
    answer: 'giin',
    explantion: '\n      汉字: 議員\n      读音: ぎいん\n      意思: member of the Diet\n      来源:  congress or parliament\n      同义词: 議員\n    ',
  },
  {
    question: '議会',
    answer: 'gikai',
    explantion: '\n      汉字: 議会\n      读音: ぎかい\n      意思: Diet\n      来源: congress\n      同义词: 議会\n    ',
  },
  {
    question: '議長',
    answer: 'gichou',
    explantion: '\n      汉字: 議長\n      读音: ぎちょう\n      意思: chairman\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '議論',
    answer: 'giron',
    explantion: '\n      汉字: 議論\n      读音: ぎろん\n      意思: argument\n      来源: discussion\n      同义词: 議論\n    ',
  },
  {
    question: '詰める',
    answer: 'tsumeru',
    explantion: '\n      汉字: 詰める\n      读音: つめる\n      意思: to pack\n      来源: to shorten\n      同义词: 詰める\n    ',
  },
  {
    question: '逆',
    answer: 'gyaku',
    explantion: '\n      汉字: 逆\n      读音: ぎゃく\n      意思: reverse\n      来源: opposite\n      同义词: 逆\n    ',
  },
  {
    question: '逆らう',
    answer: 'sakarau',
    explantion: '\n      汉字: 逆らう\n      读音: さからう\n      意思: to go against\n      来源: to oppose\n      同义词: 逆らう\n    ',
  },
  {
    question: '休暇',
    answer: 'kyuka',
    explantion: '\n      汉字: 休暇\n      读音: きゅうか\n      意思: holiday\n      来源: day off\n      同义词: 休暇\n    ',
  },
  {
    question: '休憩',
    answer: 'kyukei',
    explantion: '\n      汉字: 休憩\n      读音: きゅうけい\n      意思: rest\n      来源: break\n      同义词: 休憩, 休けい\n    ',
  },
  {
    question: '及ぼす',
    answer: 'oyobosu',
    explantion: '\n      汉字: 及ぼす\n      读音: およぼす\n      意思: to exert\n      来源: to cause\n      同义词: 及ぼす\n    ',
  },
  {
    question: '吸収',
    answer: 'kyushu',
    explantion: '\n      汉字: 吸収\n      读音: きゅうしゅう\n      意思: absorption\n      来源: suction\n      同义词: 吸収\n    ',
  },
  {
    question: '急激',
    answer: 'kyugeki',
    explantion: '\n      汉字: 急激\n      读音: きゅうげき\n      意思: sudden\n      来源: precipitous\n      同义词: 急激, 急劇\n    ',
  },
  {
    question: '急速',
    answer: 'kyusoku',
    explantion: '\n      汉字: 急速\n      读音: きゅうそく\n      意思: rapid (e.g. progress)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '救う',
    answer: 'sukuu',
    explantion: '\n      汉字: 救う\n      读音: すくう\n      意思: to rescue from\n      来源: to help out of\n      同义词: 救う\n    ',
  },
  {
    question: '救助',
    answer: 'kyujo',
    explantion: '\n      汉字: 救助\n      读音: きゅうじょ\n      意思: relief\n      来源: aid\n      同义词: 救助\n    ',
  },
  {
    question: '求める',
    answer: 'motomeru',
    explantion: '\n      汉字: 求める\n      读音: もとめる\n      意思: to seek\n      来源: to request\n      同义词: 求める\n    ',
  },
  {
    question: '球',
    answer: 'kyu',
    explantion: '\n      汉字: 球\n      读音: きゅう\n      意思: globe\n      来源: sphere\n      同义词: 球\n    ',
  },
  {
    question: '給料',
    answer: 'kyuryo',
    explantion: '\n      汉字: 給料\n      读音: きゅうりょう\n      意思: salary\n      来源: wages\n      同义词: 給料\n    ',
  },
  {
    question: '旧',
    answer: 'kyu',
    explantion: '\n      汉字: 旧\n      读音: きゅう\n      意思: ex-\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '牛',
    answer: 'ushi',
    explantion: '\n      汉字: 牛\n      读音: うし\n      意思: cattle\n      来源: cow\n      同义词: 牛, 牛, \n    ',
  },
  {
    question: '去る',
    answer: 'saru',
    explantion: '\n      汉字: 去る\n      读音: さる\n      意思: to leave\n      来源: to go away\n      同义词: 去る, 避る\n    ',
  },
  {
    question: '居間',
    answer: 'ima',
    explantion: '\n      汉字: 居間\n      读音: いま\n      意思: living room (western style)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '居眠り',
    answer: 'inemuri',
    explantion: '\n      汉字: 居眠り\n      读音: いねむり\n      意思: dozing\n      来源: nodding off\n      同义词: 居眠り\n    ',
  },
  {
    question: '巨大',
    answer: 'kiyodai',
    explantion: '\n      汉字: 巨大\n      读音: きょだい\n      意思: huge\n      来源: gigantic\n      同义词: 巨大\n    ',
  },
  {
    question: '許す',
    answer: 'yurusu',
    explantion: '\n      汉字: 許す\n      读音: ゆるす\n      意思: to permit\n      来源: to allow\n      同义词: 許す, 赦す, 聴す\n    ',
  },
  {
    question: '許可',
    answer: 'kiyoka',
    explantion: '\n      汉字: 許可\n      读音: きょか\n      意思: permission\n      来源: approval\n      同义词: 許可\n    ',
  },
  {
    question: '供給',
    answer: 'kyokyu',
    explantion: '\n      汉字: 供給\n      读音: きょうきゅう\n      意思: supply\n      来源: provision\n      同义词: 供給\n    ',
  },
  {
    question: '競技',
    answer: 'kyogi',
    explantion: '\n      汉字: 競技\n      读音: きょうぎ\n      意思: game\n      来源: match\n      同义词: 競技\n    ',
  },
  {
    question: '共に',
    answer: 'tomoni',
    explantion: '\n      汉字: 共に\n      读音: ともに\n      意思: sharing with\n      来源: participate in\n      同义词: 共に, , 倶に, 供に\n    ',
  },
  {
    question: '共通',
    answer: 'kyotsu',
    explantion: '\n      汉字: 共通\n      读音: きょうつう\n      意思: commonness\n      来源: community\n      同义词: 共通\n    ',
  },
  {
    question: '叫ぶ',
    answer: 'sakebu',
    explantion: '\n      汉字: 叫ぶ\n      读音: さけぶ\n      意思: to shout\n      来源: to cry\n      同义词: 叫ぶ\n    ',
  },
  {
    question: '境',
    answer: 'sakai',
    explantion: '\n      汉字: 境\n      读音: さかい\n      意思: border\n      来源: boundary\n      同义词: 境, 境, 界\n    ',
  },
  {
    question: '強調',
    answer: 'kyochou',
    explantion: '\n      汉字: 強調\n      读音: きょうちょう\n      意思: emphasis\n      来源: stress\n      同义词: 強調\n    ',
  },
  {
    question: '強盗',
    answer: 'gouto',
    explantion: '\n      汉字: 強盗\n      读音: ごうとう\n      意思: robbery\n      来源: burglary\n      同义词: 強盗\n    ',
  },
  {
    question: '強力',
    answer: 'kiyouryoku',
    explantion: '\n      汉字: 強力\n      读音: きょうりょく\n      意思: herculean strength\n      来源: mountain carrier-guide\n      同义词: 強力\n    ',
  },
  {
    question: '恐ろしい',
    answer: 'osoroshii',
    explantion: '\n      汉字: 恐ろしい\n      读音: おそろしい\n      意思: terrible\n      来源: dreadful\n      同义词: 恐ろしい, 怖ろしい\n    ',
  },
  {
    question: '恐怖',
    answer: 'kyofu',
    explantion: '\n      汉字: 恐怖\n      读音: きょうふ\n      意思: be afraid\n      来源: dread\n      同义词: 恐怖, 恐怖\n    ',
  },
  {
    question: '教科書',
    answer: 'kyokasho',
    explantion: '\n      汉字: 教科書\n      读音: きょうかしょ\n      意思: text book\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '教師',
    answer: 'kyoshi',
    explantion: '\n      汉字: 教師\n      读音: きょうし\n      意思: teacher (classroom)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '教授',
    answer: 'kyojiyu',
    explantion: '\n      汉字: 教授\n      读音: きょうじゅ\n      意思: teaching\n      来源: instruction\n      同义词: 教授\n    ',
  },
  {
    question: '狂う',
    answer: 'kuruu',
    explantion: '\n      汉字: 狂う\n      读音: くるう\n      意思: to go mad\n      来源: to get out of order\n      同义词: 狂う\n    ',
  },
  {
    question: '胸',
    answer: 'mune',
    explantion: '\n      汉字: 胸\n      读音: むね\n      意思: breast\n      来源: chest\n      同义词: 胸, 胸\n    ',
  },
  {
    question: '局',
    answer: 'kyoku',
    explantion: '\n      汉字: 局\n      读音: きょく\n      意思: court lady\n      来源: lady in waiting\n      同义词: 局\n    ',
  },
  {
    question: '極',
    answer: 'goku',
    explantion: '\n      汉字: 極\n      读音: ごく\n      意思: quite\n      来源: very\n      同义词: 極, , 極く\n    ',
  },
  {
    question: '玉',
    answer: 'tama',
    explantion: '\n      汉字: 玉\n      读音: たま\n      意思: ball\n      来源: sphere\n      同义词: 玉, 珠, 球, 弾\n    ',
  },
  {
    question: '僅か',
    answer: 'wazuka',
    explantion: '\n      汉字: 僅か\n      读音: わずか\n      意思: only\n      来源: merely\n      同义词: 僅か, , 纔か\n    ',
  },
  {
    question: '勤め',
    answer: 'tsutome',
    explantion: '\n      汉字: 勤め\n      读音: つとめ\n      意思: (1) service\n      来源: duty\n      同义词: 勤め, 務め\n    ',
  },
  {
    question: '禁煙',
    answer: 'kinen',
    explantion: '\n      汉字: 禁煙\n      读音: きんえん\n      意思: No Smoking!\n      来源: waller\n      同义词: 禁烟\n    ',
  },
  {
    question: '禁止',
    answer: 'kinshi',
    explantion: '\n      汉字: 禁止\n      读音: きんし\n      意思: prohibition\n      来源: ban\n      同义词: 禁止\n    ',
  },
  {
    question: '筋',
    answer: 'suji',
    explantion: '\n      汉字: 筋\n      读音: すじ\n      意思: muscle\n      来源: string\n      同义词: 筋, 条, \n    ',
  },
  {
    question: '筋肉',
    answer: 'kinniku',
    explantion: '\n      汉字: 筋肉\n      读音: きんにく\n      意思: muscle\n      来源: sinew\n      同义词: 筋肉\n    ',
  },
  {
    question: '緊張',
    answer: 'kincho',
    explantion: '\n      汉字: 緊張\n      读音: きんちょう\n      意思: tension\n      来源: mental strain\n      同义词: 緊張\n    ',
  },
  {
    question: '近頃',
    answer: 'chikagoro',
    explantion: '\n      汉字: 近頃\n      读音: ちかごろ\n      意思: lately\n      来源: recently\n      同义词: 近頃, 近ごろ\n    ',
  },
  {
    question: '近代',
    answer: 'kindai',
    explantion: '\n      汉字: 近代\n      读音: きんだい\n      意思: present day\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '金',
    answer: 'kane',
    explantion: '\n      汉字: 金\n      读音: かね\n      意思: (1) gold\n      来源: (2) gold general (shogi) (abbr)\n      同义词: 金, 金, 鉄, 銀, 銅\n    ',
  },
  {
    question: '金',
    answer: 'kin',
    explantion: '\n      汉字: 金\n      读音: きん\n      意思: (1) gold\n      来源: (2) gold general (shogi) (abbr)\n      同义词: 金\n    ',
  },
  {
    question: '金額',
    answer: 'kingaku',
    explantion: '\n      汉字: 金額\n      读音: きんがく\n      意思: amount of money\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '金庫',
    answer: 'kinko',
    explantion: '\n      汉字: 金庫\n      读音: きんこ\n      意思: safe\n      来源: vault\n      同义词: 金庫\n    ',
  },
  {
    question: '金銭',
    answer: 'kinsen',
    explantion: '\n      汉字: 金銭\n      读音: きんせん\n      意思: money\n      来源: cash\n      同义词: 金銭\n    ',
  },
  {
    question: '金属',
    answer: 'kinzoku',
    explantion: '\n      汉字: 金属\n      读音: きんぞく\n      意思: metal\n      来源: waller\n      同义词: 金ぞく\n    ',
  },
  {
    question: '金融',
    answer: 'kinyuu',
    explantion: '\n      汉字: 金融\n      读音: きんゆう\n      意思: monetary circulation\n      来源: credit situation\n      同义词: 金融\n    ',
  },
  {
    question: '金曜',
    answer: 'kinyo',
    explantion: '\n      汉字: 金曜\n      读音: きんよう\n      意思: (abbr) Friday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '句',
    answer: 'ku',
    explantion: '\n      汉字: 句\n      读音: く\n      意思: sentence\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '区別',
    answer: 'kubetsu',
    explantion: '\n      汉字: 区別\n      读音: くべつ\n      意思: distinction\n      来源: differentiation\n      同义词: 区別, 區別\n    ',
  },
  {
    question: '苦しい',
    answer: 'kurushii',
    explantion: '\n      汉字: 苦しい\n      读音: くるしい\n      意思: painful\n      来源: difficult\n      同义词: 苦しい\n    ',
  },
  {
    question: '苦しむ',
    answer: 'kurushimu',
    explantion: '\n      汉字: 苦しむ\n      读音: くるしむ\n      意思: to suffer\n      来源: to groan\n      同义词: 苦しむ\n    ',
  },
  {
    question: '苦手',
    answer: 'nigate',
    explantion: '\n      汉字: 苦手\n      读音: にがて\n      意思: poor (at)\n      来源: weak (in)\n      同义词: 苦手\n    ',
  },
  {
    question: '苦痛',
    answer: 'kutsuu',
    explantion: '\n      汉字: 苦痛\n      读音: くつう\n      意思: pain\n      来源: agony\n      同义词: 苦痛\n    ',
  },
  {
    question: '苦労',
    answer: 'kuro',
    explantion: '\n      汉字: 苦労\n      读音: くろう\n      意思: troubles\n      来源: hardships\n      同义词: 苦労, 苦勞\n    ',
  },
  {
    question: '備える',
    answer: 'sonaeru',
    explantion: '\n      汉字: 備える\n      读音: そなえる\n      意思: to furnish\n      来源: to provide for\n      同义词: 備える, 具える\n    ',
  },
  {
    question: '具体',
    answer: 'gutai',
    explantion: '\n      汉字: 具体\n      读音: ぐたい\n      意思: concrete\n      来源: tangible\n      同义词: 具体\n    ',
  },
  {
    question: '空',
    answer: 'kara',
    explantion: '\n      汉字: 空\n      读音: から\n      意思: sky\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '偶然',
    answer: 'guzen',
    explantion: '\n      汉字: 偶然\n      读音: ぐうぜん\n      意思: (by) chance\n      来源: unexpectedly\n      同义词: 偶然\n    ',
  },
  {
    question: '角',
    answer: 'sumi',
    explantion: '\n      汉字: 角\n      读音: すみ\n      意思: horn\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '繰り返す',
    answer: 'kurikaesu',
    explantion: '\n      汉字: 繰り返す\n      读音: くりかえす\n      意思: to repeat\n      来源: to do something over again\n      同义词: 繰り返す, くり返す, 繰りかえす, 繰返す\n    ',
  },
  {
    question: '訓練',
    answer: 'kunren',
    explantion: '\n      汉字: 訓練\n      读音: くんれん\n      意思: practice\n      来源: training\n      同义词: 訓練, 訓連\n    ',
  },
  {
    question: '軍',
    answer: 'gun',
    explantion: '\n      汉字: 軍\n      读音: ぐん\n      意思: army\n      来源: force\n      同义词: 軍\n    ',
  },
  {
    question: '軍隊',
    answer: 'guntai',
    explantion: '\n      汉字: 軍隊\n      读音: ぐんたい\n      意思: army\n      来源: troops\n      同义词: 軍隊\n    ',
  },
  {
    question: '傾向',
    answer: 'keikou',
    explantion: '\n      汉字: 傾向\n      读音: けいこう\n      意思: tendency\n      来源: trend\n      同义词: 傾向\n    ',
  },
  {
    question: '刑事',
    answer: 'keiji',
    explantion: '\n      汉字: 刑事\n      读音: けいじ\n      意思: criminal case\n      来源: (police) detective\n      同义词: 刑事\n    ',
  },
  {
    question: '型',
    answer: 'kata',
    explantion: '\n      汉字: 型\n      读音: かた\n      意思: mold\n      来源: model\n      同义词: 型, 型\n    ',
  },
  {
    question: '契約',
    answer: 'keiyaku',
    explantion: '\n      汉字: 契約\n      读音: けいやく\n      意思: contract\n      来源: compact\n      同义词: 契約\n    ',
  },
  {
    question: '掲示',
    answer: 'keiji',
    explantion: '\n      汉字: 掲示\n      读音: けいじ\n      意思: notice\n      来源: bulletin\n      同义词: 掲示\n    ',
  },
  {
    question: '敬意',
    answer: 'keii',
    explantion: '\n      汉字: 敬意\n      读音: けいい\n      意思: respect\n      来源: honour\n      同义词: 敬意\n    ',
  },
  {
    question: '景気',
    answer: 'keiki',
    explantion: '\n      汉字: 景気\n      读音: けいき\n      意思: condition\n      来源: state\n      同义词: 景気\n    ',
  },
  {
    question: '経つ',
    answer: 'tatsu',
    explantion: '\n      汉字: 経つ\n      读音: たつ\n      意思: to pass\n      来源: to lapse\n      同义词: 経つ\n    ',
  },
  {
    question: '経営',
    answer: 'keiei',
    explantion: '\n      汉字: 経営\n      读音: けいえい\n      意思: management\n      来源: administration\n      同义词: 経営\n    ',
  },
  {
    question: '経由',
    answer: 'keiyu',
    explantion: '\n      汉字: 経由\n      读音: けいゆ\n      意思: go by the way\n      来源: via\n      同义词: 経由, 経由\n    ',
  },
  {
    question: '繋ぐ',
    answer: 'tsunagu',
    explantion: '\n      汉字: 繋ぐ\n      读音: つなぐ\n      意思: to tie\n      来源: to fasten\n      同义词: 繋ぐ, \n    ',
  },
  {
    question: '計',
    answer: 'kei',
    explantion: '\n      汉字: 計\n      读音: けい\n      意思: plan\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '計算',
    answer: 'keisan',
    explantion: '\n      汉字: 計算\n      读音: けいさん\n      意思: calculation\n      来源: reckoning\n      同义词: 計算\n    ',
  },
  {
    question: '警告',
    answer: 'keikoku',
    explantion: '\n      汉字: 警告\n      读音: けいこく\n      意思: warning\n      来源: advice\n      同义词: 警告\n    ',
  },
  {
    question: '芸術',
    answer: 'geijiyutsu',
    explantion: '\n      汉字: 芸術\n      读音: げいじゅつ\n      意思: (fine) art\n      来源: the arts\n      同义词: 芸術, 藝術\n    ',
  },
  {
    question: '迎え',
    answer: 'mukae',
    explantion: '\n      汉字: 迎え\n      读音: むかえ\n      意思: meeting\n      来源: person sent to pick up an arrival\n      同义词: 迎え\n    ',
  },
  {
    question: '劇',
    answer: 'geki',
    explantion: '\n      汉字: 劇\n      读音: げき\n      意思: drama\n      来源: play\n      同义词: 劇\n    ',
  },
  {
    question: '劇場',
    answer: 'gekijo',
    explantion: '\n      汉字: 劇場\n      读音: げきじょう\n      意思: theatre\n      来源: playhouse\n      同义词: 劇場\n    ',
  },
  {
    question: '撃つ',
    answer: 'utsu',
    explantion: '\n      汉字: 撃つ\n      读音: うつ\n      意思: to attack\n      来源: to defeat\n      同义词: 撃つ, 討つ, 射つ\n    ',
  },
  {
    question: '欠ける',
    answer: 'kakeru',
    explantion: '\n      汉字: 欠ける\n      读音: かける\n      意思: to be lacking\n      来源: waller\n      同义词: 缺ける, 闕ける\n    ',
  },
  {
    question: '欠陥',
    answer: 'kekkan',
    explantion: '\n      汉字: 欠陥\n      读音: けっかん\n      意思: defect\n      来源: fault\n      同义词: 欠陥\n    ',
  },
  {
    question: '欠席',
    answer: 'kesseki',
    explantion: '\n      汉字: 欠席\n      读音: けっせき\n      意思: absence\n      来源: non-attendance\n      同义词: 欠席\n    ',
  },
  {
    question: '欠点',
    answer: 'ketsuten',
    explantion: '\n      汉字: 欠点\n      读音: けってん\n      意思: faults\n      来源: defect\n      同义词: 欠点\n    ',
  },
  {
    question: '決心',
    answer: 'kesshin',
    explantion: '\n      汉字: 決心\n      读音: けっしん\n      意思: determination\n      来源: resolution\n      同义词: 決心\n    ',
  },
  {
    question: '決定',
    answer: 'kettei',
    explantion: '\n      汉字: 決定\n      读音: けってい\n      意思: decision\n      来源: determination\n      同义词: 決定\n    ',
  },
  {
    question: '穴',
    answer: 'ana',
    explantion: '\n      汉字: 穴\n      读音: あな\n      意思: hole\n      来源: waller\n      同义词: 孔\n    ',
  },
  {
    question: '結ぶ',
    answer: 'musubu',
    explantion: '\n      汉字: 結ぶ\n      读音: むすぶ\n      意思: to tie\n      来源: to bind\n      同义词: 結ぶ\n    ',
  },
  {
    question: '結果',
    answer: 'kekka',
    explantion: '\n      汉字: 結果\n      读音: けっか\n      意思: result\n      来源: consequence\n      同义词: 結果\n    ',
  },
  {
    question: '結局',
    answer: 'ketsukyoku',
    explantion: '\n      汉字: 結局\n      读音: けっきょく\n      意思: after all\n      来源: eventually\n      同义词: 結局\n    ',
  },
  {
    question: '結論',
    answer: 'ketsuron',
    explantion: '\n      汉字: 結論\n      读音: けつろん\n      意思: conclusion\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '月曜',
    answer: 'getsuyo',
    explantion: '\n      汉字: 月曜\n      读音: げつよう\n      意思: Monday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '健康',
    answer: 'kenko',
    explantion: '\n      汉字: 健康\n      读音: けんこう\n      意思: health\n      来源: sound\n      同义词: 健康\n    ',
  },
  {
    question: '券',
    answer: 'ken',
    explantion: '\n      汉字: 券\n      读音: けん\n      意思: ticket\n      来源: coupon\n      同义词: 券\n    ',
  },
  {
    question: '嫌う',
    answer: 'kirau',
    explantion: '\n      汉字: 嫌う\n      读音: きらう\n      意思: to hate\n      来源: to dislike\n      同义词: 嫌う\n    ',
  },
  {
    question: '建設',
    answer: 'kensetsu',
    explantion: '\n      汉字: 建設\n      读音: けんせつ\n      意思: construction\n      来源: establishment\n      同义词: 建設\n    ',
  },
  {
    question: '建築',
    answer: 'kenchiku',
    explantion: '\n      汉字: 建築\n      读音: けんちく\n      意思: construction\n      来源: architecture\n      同义词: 建築\n    ',
  },
  {
    question: '憲法',
    answer: 'kempo',
    explantion: '\n      汉字: 憲法\n      读音: けんぽう\n      意思: constitution\n      来源: waller\n      同义词: 憲法\n    ',
  },
  {
    question: '検査',
    answer: 'kensa',
    explantion: '\n      汉字: 検査\n      读音: けんさ\n      意思: inspection (e.g. customs\n      来源:  factory)\n      同义词: 検査\n    ',
  },
  {
    question: '検討',
    answer: 'kento',
    explantion: '\n      汉字: 検討\n      读音: けんとう\n      意思: consideration\n      来源: examination\n      同义词: 検討\n    ',
  },
  {
    question: '権利',
    answer: 'kenri',
    explantion: '\n      汉字: 権利\n      读音: けんり\n      意思: right\n      来源: privilege\n      同义词: 権利\n    ',
  },
  {
    question: '県',
    answer: 'ken',
    explantion: '\n      汉字: 県\n      读音: けん\n      意思: prefecture\n      来源: waller\n      同义词: 縣\n    ',
  },
  {
    question: '肩',
    answer: 'kata',
    explantion: '\n      汉字: 肩\n      读音: かた\n      意思: shoulder\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '見解',
    answer: 'kenkai',
    explantion: '\n      汉字: 見解\n      读音: けんかい\n      意思: opinion\n      来源: point of view\n      同义词: 見解\n    ',
  },
  {
    question: '見事',
    answer: 'migoto',
    explantion: '\n      汉字: 見事\n      读音: みごと\n      意思: splendid\n      来源: magnificent\n      同义词: 見事, 美事\n    ',
  },
  {
    question: '見送り',
    answer: 'miokuri',
    explantion: '\n      汉字: 見送り\n      读音: みおくり\n      意思: seeing one off\n      来源: farewell\n      同义词: 見送り\n    ',
  },
  {
    question: '見当',
    answer: 'kento',
    explantion: '\n      汉字: 見当\n      读音: けんとう\n      意思: be found\n      来源: aim\n      同义词: 見当\n    ',
  },
  {
    question: '賢い',
    answer: 'kashikoi',
    explantion: '\n      汉字: 賢い\n      读音: かしこい\n      意思: wise\n      来源: clever\n      同义词: 賢い, 畏い\n    ',
  },
  {
    question: '軒',
    answer: 'noki',
    explantion: '\n      汉字: 軒\n      读音: のき\n      意思: eaves\n      来源: waller\n      同义词: 簷, 檐, 宇\n    ',
  },
  {
    question: '素',
    answer: 'moto',
    explantion: '\n      汉字: 素\n      读音: もと\n      意思: prime\n      来源: waller\n      同义词: 本\n    ',
  },
  {
    question: '原',
    answer: 'hara',
    explantion: '\n      汉字: 原\n      读音: はら\n      意思: field\n      来源: plain\n      同义词: 原\n    ',
  },
  {
    question: '減らす',
    answer: 'herasu',
    explantion: '\n      汉字: 減らす\n      读音: へらす\n      意思: to abate\n      来源: to decrease\n      同义词: 減らす\n    ',
  },
  {
    question: '減る',
    answer: 'heru',
    explantion: '\n      汉字: 減る\n      读音: へる\n      意思: to decrease (in size or number)\n      来源: to diminish\n      同义词: 減る\n    ',
  },
  {
    question: '表す',
    answer: 'arawasu',
    explantion: '\n      汉字: 表す\n      读音: あらわす\n      意思: to express\n      来源: to show\n      同义词: 表す, 表わす, 現わす, 顕す, 現す\n    ',
  },
  {
    question: '現れる',
    answer: 'arawareru',
    explantion: '\n      汉字: 現れる\n      读音: あらわれる\n      意思: (1) to appear\n      来源: to come in sight\n      同义词: 現れる, 現われる, 表れる, 表われる, 顕れる, 顕われる\n    ',
  },
  {
    question: '現金',
    answer: 'genkin',
    explantion: '\n      汉字: 現金\n      读音: げんきん\n      意思: cash\n      来源: ready money\n      同义词: 現金\n    ',
  },
  {
    question: '現在',
    answer: 'genzai',
    explantion: '\n      汉字: 現在\n      读音: げんざい\n      意思: present\n      来源: up to now\n      同义词: 現在, 見在\n    ',
  },
  {
    question: '現実',
    answer: 'genjitsu',
    explantion: '\n      汉字: 現実\n      读音: げんじつ\n      意思: reality\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '現象',
    answer: 'gensho',
    explantion: '\n      汉字: 現象\n      读音: げんしょう\n      意思: phenomenon\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '現場',
    answer: 'genba',
    explantion: '\n      汉字: 現場\n      读音: げんば\n      意思: actual spot\n      来源: scene\n      同义词: 現場, 現場\n    ',
  },
  {
    question: '現状',
    answer: 'genjiyou',
    explantion: '\n      汉字: 現状\n      读音: げんじょう\n      意思: present condition\n      来源: existing state\n      同义词: 現状\n    ',
  },
  {
    question: '現代',
    answer: 'gendai',
    explantion: '\n      汉字: 現代\n      读音: げんだい\n      意思: nowadays\n      来源: modern times\n      同义词: 現代\n    ',
  },
  {
    question: '言わば',
    answer: 'iwaba',
    explantion: '\n      汉字: 言わば\n      读音: いわば\n      意思: so to speak\n      来源: waller\n      同义词: , 謂わば\n    ',
  },
  {
    question: '言語',
    answer: 'gengo',
    explantion: '\n      汉字: 言語\n      读音: げんご\n      意思: language\n      来源: waller\n      同义词: 言語, 言語\n    ',
  },
  {
    question: '諺',
    answer: 'kotowaza',
    explantion: '\n      汉字: 諺\n      读音: ことわざ\n      意思: proverb\n      来源: maxim\n      同义词: 諺, \n    ',
  },
  {
    question: '限る',
    answer: 'kagiru',
    explantion: '\n      汉字: 限る\n      读音: かぎる\n      意思: to restrict\n      来源: to limit\n      同义词: 限る\n    ',
  },
  {
    question: '限界',
    answer: 'genkai',
    explantion: '\n      汉字: 限界\n      读音: げんかい\n      意思: limit\n      来源: bound\n      同义词: 限界\n    ',
  },
  {
    question: '個人',
    answer: 'kojin',
    explantion: '\n      汉字: 個人\n      读音: こじん\n      意思: individual\n      来源: private person\n      同义词: 個人\n    ',
  },
  {
    question: '呼吸',
    answer: 'kokyu',
    explantion: '\n      汉字: 呼吸\n      读音: こきゅう\n      意思: breath\n      来源: respiration\n      同义词: 呼吸\n    ',
  },
  {
    question: '虎',
    answer: 'tora',
    explantion: '\n      汉字: 虎\n      读音: とら\n      意思: tiger\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '誇り',
    answer: 'hokori',
    explantion: '\n      汉字: 誇り\n      读音: ほこり\n      意思: pride\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '互い',
    answer: 'tagai',
    explantion: '\n      汉字: 互い\n      读音: たがい\n      意思: mutual\n      来源: reciprocal\n      同义词: 互い\n    ',
  },
  {
    question: '後',
    answer: 'nochi',
    explantion: '\n      汉字: 後\n      读音: のち\n      意思: afterwards\n      来源: since then\n      同义词: 後, \n    ',
  },
  {
    question: '後',
    answer: 'ushiro',
    explantion: '\n      汉字: 後\n      读音: うしろ\n      意思: afterwards\n      来源: since then\n      同义词: 後\n    ',
  },
  {
    question: '後者',
    answer: 'kosha',
    explantion: '\n      汉字: 後者\n      读音: こうしゃ\n      意思: the latter\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お目出度う',
    answer: 'omedeto',
    explantion: '\n      汉字: お目出度う\n      读音: おめでとう\n      意思: Congratulations!\n      来源: an auspicious occasion!\n      同义词: お目出度う, , 御目出度う, お芽出度う, 御芽出度う\n    ',
  },
  {
    question: '語',
    answer: 'go',
    explantion: '\n      汉字: 語\n      读音: ご\n      意思: language\n      来源: word\n      同义词: 語\n    ',
  },
  {
    question: '語る',
    answer: 'kataru',
    explantion: '\n      汉字: 語る\n      读音: かたる\n      意思: to talk\n      来源: to tell\n      同义词: 語る\n    ',
  },
  {
    question: '語学',
    answer: 'gogaku',
    explantion: '\n      汉字: 語学\n      读音: ごがく\n      意思: language study\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '誤り',
    answer: 'ayamari',
    explantion: '\n      汉字: 誤り\n      读音: あやまり\n      意思: error\n      来源: waller\n      同义词: 謬り, 謬\n    ',
  },
  {
    question: '誤解',
    answer: 'gokai',
    explantion: '\n      汉字: 誤解\n      读音: ごかい\n      意思: misunderstanding\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '交換',
    answer: 'kokan',
    explantion: '\n      汉字: 交換\n      读音: こうかん\n      意思: exchange\n      来源: interchange\n      同义词: 交換\n    ',
  },
  {
    question: '交際',
    answer: 'kosai',
    explantion: '\n      汉字: 交際\n      读音: こうさい\n      意思: company\n      来源: friendship\n      同义词: 交際\n    ',
  },
  {
    question: '候補',
    answer: 'koho',
    explantion: '\n      汉字: 候補\n      读音: こうほ\n      意思: candidacy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '光景',
    answer: 'kokei',
    explantion: '\n      汉字: 光景\n      读音: こうけい\n      意思: scene\n      来源: spectacle\n      同义词: 光景\n    ',
  },
  {
    question: '公平',
    answer: 'kohei',
    explantion: '\n      汉字: 公平\n      读音: こうへい\n      意思: fairness\n      来源: impartial\n      同义词: 公平\n    ',
  },
  {
    question: '効果',
    answer: 'koka',
    explantion: '\n      汉字: 効果\n      读音: こうか\n      意思: effect\n      来源: effectiveness\n      同义词: 効果\n    ',
  },
  {
    question: '向く',
    answer: 'muku',
    explantion: '\n      汉字: 向く\n      读音: むく\n      意思: to face\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '向ける',
    answer: 'mukeru',
    explantion: '\n      汉字: 向ける\n      读音: むける\n      意思: to turn towards\n      来源: to point\n      同义词: 向ける\n    ',
  },
  {
    question: '好み',
    answer: 'konomi',
    explantion: '\n      汉字: 好み\n      读音: このみ\n      意思: liking\n      来源: taste\n      同义词: 好み\n    ',
  },
  {
    question: '好む',
    answer: 'konomu',
    explantion: '\n      汉字: 好む\n      读音: このむ\n      意思: to like\n      来源: to prefer\n      同义词: 好む\n    ',
  },
  {
    question: '幸い',
    answer: 'saiwai',
    explantion: '\n      汉字: 幸い\n      读音: さいわい\n      意思: happiness\n      来源: blessedness\n      同义词: 幸い\n    ',
  },
  {
    question: '幸福',
    answer: 'kofuku',
    explantion: '\n      汉字: 幸福\n      读音: こうふく\n      意思: happiness\n      来源: blessedness\n      同义词: 幸福\n    ',
  },
  {
    question: '広告',
    answer: 'kokoku',
    explantion: '\n      汉字: 広告\n      读音: こうこく\n      意思: advertisement\n      来源: waller\n      同义词: 廣告\n    ',
  },
  {
    question: '攻撃',
    answer: 'kogeki',
    explantion: '\n      汉字: 攻撃\n      读音: こうげき\n      意思: attack\n      来源: strike\n      同义词: 攻撃\n    ',
  },
  {
    question: '更に',
    answer: 'sarani',
    explantion: '\n      汉字: 更に\n      读音: さらに\n      意思: furthermore\n      来源: again\n      同义词: 更に, \n    ',
  },
  {
    question: '構う',
    answer: 'kamau',
    explantion: '\n      汉字: 構う\n      读音: かまう\n      意思: to mind\n      来源: to care about\n      同义词: 構う\n    ',
  },
  {
    question: '構成',
    answer: 'kosei',
    explantion: '\n      汉字: 構成\n      读音: こうせい\n      意思: organization\n      来源: composition\n      同义词: 構成\n    ',
  },
  {
    question: '硬貨',
    answer: 'koka',
    explantion: '\n      汉字: 硬貨\n      读音: こうか\n      意思: coin\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '考え',
    answer: 'kangae',
    explantion: '\n      汉字: 考え\n      读音: かんがえ\n      意思: thinking\n      来源: thought\n      同义词: 考え\n    ',
  },
  {
    question: '考慮',
    answer: 'koriyo',
    explantion: '\n      汉字: 考慮\n      读音: こうりょ\n      意思: consideration\n      来源: taking into account\n      同义词: 考慮\n    ',
  },
  {
    question: '航空',
    answer: 'koku',
    explantion: '\n      汉字: 航空\n      读音: こうくう\n      意思: aviation\n      来源: flying\n      同义词: 航空\n    ',
  },
  {
    question: '行儀',
    answer: 'gyougi',
    explantion: '\n      汉字: 行儀\n      读音: ぎょうぎ\n      意思: manners\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '行動',
    answer: 'kodo',
    explantion: '\n      汉字: 行動\n      读音: こうどう\n      意思: action\n      来源: conduct\n      同义词: 行動\n    ',
  },
  {
    question: '講演',
    answer: 'koen',
    explantion: '\n      汉字: 講演\n      读音: こうえん\n      意思: lecture\n      来源: address\n      同义词: 講演\n    ',
  },
  {
    question: '貢献',
    answer: 'koken',
    explantion: '\n      汉字: 貢献\n      读音: こうけん\n      意思: contribution\n      来源: services\n      同义词: 貢献\n    ',
  },
  {
    question: '高価',
    answer: 'koka',
    explantion: '\n      汉字: 高価\n      读音: こうか\n      意思: high price\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '高速',
    answer: 'kosoku',
    explantion: '\n      汉字: 高速\n      读音: こうそく\n      意思: high speed\n      来源: high gear\n      同义词: 高速\n    ',
  },
  {
    question: '合わせる',
    answer: 'awaseru',
    explantion: '\n      汉字: 合わせる\n      读音: あわせる\n      意思: to join together\n      来源: to be opposite\n      同义词: 合わせる, 併せる, 合せる\n    ',
  },
  {
    question: '合格',
    answer: 'goukaku',
    explantion: '\n      汉字: 合格\n      读音: ごうかく\n      意思: success\n      来源: passing (e.g. exam)\n      同义词: 合格\n    ',
  },
  {
    question: '合計',
    answer: 'goukei',
    explantion: '\n      汉字: 合計\n      读音: ごうけい\n      意思: sum total\n      来源: total amount\n      同义词: 合計\n    ',
  },
  {
    question: '合図',
    answer: 'aizu',
    explantion: '\n      汉字: 合図\n      读音: あいず\n      意思: sign\n      来源: signal\n      同义词: 合図, 相図\n    ',
  },
  {
    question: '豪華',
    answer: 'gouka',
    explantion: '\n      汉字: 豪華\n      读音: ごうか\n      意思: wonderful\n      来源: gorgeous\n      同义词: 豪華\n    ',
  },
  {
    question: '克服',
    answer: 'kokufuku',
    explantion: '\n      汉字: 克服\n      读音: こくふく\n      意思: subjugation\n      来源: conquest\n      同义词: 克服\n    ',
  },
  {
    question: '国家',
    answer: 'kotsuka',
    explantion: '\n      汉字: 国家\n      读音: こっか\n      意思: state\n      来源: country\n      同义词: 国家\n    ',
  },
  {
    question: '国会',
    answer: 'kotsukai',
    explantion: '\n      汉字: 国会\n      读音: こっかい\n      意思: National Diet\n      来源: parliament\n      同义词: 国会\n    ',
  },
  {
    question: '国境',
    answer: 'kotsukyo',
    explantion: '\n      汉字: 国境\n      读音: こっきょう\n      意思: national or state border\n      来源: waller\n      同义词: 国境, 国界, 国界, 国界, 国堺, 国堺, 国堺\n    ',
  },
  {
    question: '国語',
    answer: 'kokugo',
    explantion: '\n      汉字: 国語\n      读音: こくご\n      意思: national language\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '国民',
    answer: 'kokumin',
    explantion: '\n      汉字: 国民\n      读音: こくみん\n      意思: national\n      来源: people\n      同义词: 国民\n    ',
  },
  {
    question: '穀物',
    answer: 'kokumotsu',
    explantion: '\n      汉字: 穀物\n      读音: こくもつ\n      意思: grain\n      来源: cereal\n      同义词: 穀物\n    ',
  },
  {
    question: '黒板',
    answer: 'kokuban',
    explantion: '\n      汉字: 黒板\n      读音: こくばん\n      意思: blackboard\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '腰',
    answer: 'koshi',
    explantion: '\n      汉字: 腰\n      读音: こし\n      意思: hip\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '骨',
    answer: 'hone',
    explantion: '\n      汉字: 骨\n      读音: ほね\n      意思: bone\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '骨折',
    answer: 'kossetsu',
    explantion: '\n      汉字: 骨折\n      读音: こっせつ\n      意思: bone fracture\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '今に',
    answer: 'imani',
    explantion: '\n      汉字: 今に\n      读音: いまに\n      意思: before long\n      来源: even now\n      同义词: 今に\n    ',
  },
  {
    question: '今にも',
    answer: 'imanimo',
    explantion: '\n      汉字: 今にも\n      读音: いまにも\n      意思: at any time\n      来源: soon\n      同义词: 今にも\n    ',
  },
  {
    question: '今回',
    answer: 'konkai',
    explantion: '\n      汉字: 今回\n      读音: こんかい\n      意思: now\n      来源: this time\n      同义词: 今回\n    ',
  },
  {
    question: '今後',
    answer: 'kongo',
    explantion: '\n      汉字: 今後\n      读音: こんご\n      意思: from now on\n      来源: hereafter\n      同义词: 今後\n    ',
  },
  {
    question: '困難',
    answer: 'konnan',
    explantion: '\n      汉字: 困難\n      读音: こんなん\n      意思: difficulty\n      来源: distress\n      同义词: 困難\n    ',
  },
  {
    question: '婚約',
    answer: 'konyaku',
    explantion: '\n      汉字: 婚約\n      读音: こんやく\n      意思: engagement\n      来源: betrothal\n      同义词: 婚約\n    ',
  },
  {
    question: '根',
    answer: 'ne',
    explantion: '\n      汉字: 根\n      读音: ね\n      意思: root\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '混雑',
    answer: 'konzatsu',
    explantion: '\n      汉字: 混雑\n      读音: こんざつ\n      意思: confusion\n      来源: congestion\n      同义词: 混雑\n    ',
  },
  {
    question: '混乱',
    answer: 'konran',
    explantion: '\n      汉字: 混乱\n      读音: こんらん\n      意思: disorder\n      来源: chaos\n      同义词: 混乱\n    ',
  },
  {
    question: '左右',
    answer: 'sayuu',
    explantion: '\n      汉字: 左右\n      读音: さゆう\n      意思: (1) left and right\n      来源: (2) influence\n      同义词: 左右, 左右, 左右\n    ',
  },
  {
    question: '差',
    answer: 'sa',
    explantion: '\n      汉字: 差\n      读音: さ\n      意思: difference\n      来源: variation\n      同义词: 差\n    ',
  },
  {
    question: '差別',
    answer: 'sabetsu',
    explantion: '\n      汉字: 差別\n      读音: さべつ\n      意思: discrimination\n      来源: distinction\n      同义词: 差別, 差別, 差別\n    ',
  },
  {
    question: '鎖',
    answer: 'kusari',
    explantion: '\n      汉字: 鎖\n      读音: くさり\n      意思: chain\n      来源: waller\n      同义词: 鏈\n    ',
  },
  {
    question: '座席',
    answer: 'zaseki',
    explantion: '\n      汉字: 座席\n      读音: ざせき\n      意思: seat\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '再び',
    answer: 'futatabi',
    explantion: '\n      汉字: 再び\n      读音: ふたたび\n      意思: again\n      来源: once more\n      同义词: 再び, 二度\n    ',
  },
  {
    question: '最高',
    answer: 'saiko',
    explantion: '\n      汉字: 最高\n      读音: さいこう\n      意思: highest\n      来源: supreme\n      同义词: 最高\n    ',
  },
  {
    question: '最終',
    answer: 'saishu',
    explantion: '\n      汉字: 最終\n      读音: さいしゅう\n      意思: last\n      来源: final\n      同义词: 最終\n    ',
  },
  {
    question: '最低',
    answer: 'saitei',
    explantion: '\n      汉字: 最低\n      读音: さいてい\n      意思: least\n      来源: lowest\n      同义词: 最低\n    ',
  },
  {
    question: '才能',
    answer: 'saino',
    explantion: '\n      汉字: 才能\n      读音: さいのう\n      意思: talent\n      来源: ability\n      同义词: 才能\n    ',
  },
  {
    question: '済ませる',
    answer: 'sumaseru',
    explantion: '\n      汉字: 済ませる\n      读音: すませる\n      意思: to be finished\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '裁判',
    answer: 'saiban',
    explantion: '\n      汉字: 裁判\n      读音: さいばん\n      意思: trial\n      来源: judgement\n      同义词: 裁判\n    ',
  },
  {
    question: '際',
    answer: 'sai',
    explantion: '\n      汉字: 際\n      读音: さい\n      意思: on the occasion of\n      来源: circumstances\n      同义词: 際\n    ',
  },
  {
    question: '材料',
    answer: 'zairyou',
    explantion: '\n      汉字: 材料\n      读音: ざいりょう\n      意思: ingredients\n      来源: material\n      同义词: 材料\n    ',
  },
  {
    question: '罪',
    answer: 'tsumi',
    explantion: '\n      汉字: 罪\n      读音: つみ\n      意思: crime\n      来源: fault\n      同义词: 罪\n    ',
  },
  {
    question: '財産',
    answer: 'zaisan',
    explantion: '\n      汉字: 財産\n      读音: ざいさん\n      意思: property\n      来源: fortune\n      同义词: 財産\n    ',
  },
  {
    question: '作家',
    answer: 'sakka',
    explantion: '\n      汉字: 作家\n      读音: さっか\n      意思: author\n      来源: writer\n      同义词: 作家\n    ',
  },
  {
    question: '作業',
    answer: 'sagyou',
    explantion: '\n      汉字: 作業\n      读音: さぎょう\n      意思: work\n      来源: operation\n      同义词: 作業\n    ',
  },
  {
    question: '作曲',
    answer: 'sakkyoku',
    explantion: '\n      汉字: 作曲\n      读音: さっきょく\n      意思: composition\n      来源: setting (of music)\n      同义词: 作曲\n    ',
  },
  {
    question: '作品',
    answer: 'sakuhin',
    explantion: '\n      汉字: 作品\n      读音: さくひん\n      意思: work\n      来源: opus\n      同义词: 作品\n    ',
  },
  {
    question: '作物',
    answer: 'sakumotsu',
    explantion: '\n      汉字: 作物\n      读音: さくもつ\n      意思: produce (e.g. agricultural)\n      来源: crops\n      同义词: 作物\n    ',
  },
  {
    question: '作法',
    answer: 'saho',
    explantion: '\n      汉字: 作法\n      读音: さほう\n      意思: manners\n      来源: etiquette\n      同义词: 作法, 作法\n    ',
  },
  {
    question: '昨',
    answer: 'saku',
    explantion: '\n      汉字: 昨\n      读音: さく\n      意思: last (year)\n      来源: yesterday\n      同义词: 昨\n    ',
  },
  {
    question: '札',
    answer: 'satsu',
    explantion: '\n      汉字: 札\n      读音: さつ\n      意思: (1) token\n      来源: label\n      同义词: 札\n    ',
  },
  {
    question: '殺す',
    answer: 'korosu',
    explantion: '\n      汉字: 殺す\n      读音: ころす\n      意思: to kill\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '皿',
    answer: 'sara',
    explantion: '\n      汉字: 皿\n      读音: さら\n      意思: plate\n      来源: dish\n      同义词: 皿, 盤\n    ',
  },
  {
    question: '参加',
    answer: 'sanka',
    explantion: '\n      汉字: 参加\n      读音: さんか\n      意思: participation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '参考',
    answer: 'sanko',
    explantion: '\n      汉字: 参考\n      读音: さんこう\n      意思: reference\n      来源: consultation\n      同义词: 参考, 參考\n    ',
  },
  {
    question: '賛成',
    answer: 'sansei',
    explantion: '\n      汉字: 賛成\n      读音: さんせい\n      意思: approval\n      来源: agreement\n      同义词: 賛成\n    ',
  },
  {
    question: '酸素',
    answer: 'sanso',
    explantion: '\n      汉字: 酸素\n      读音: さんそ\n      意思: oxygen\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '残り',
    answer: 'nokori',
    explantion: '\n      汉字: 残り\n      读音: のこり\n      意思: remnant\n      来源: residue\n      同义词: 残り\n    ',
  },
  {
    question: '仕舞う',
    answer: 'shimau',
    explantion: '\n      汉字: 仕舞う\n      读音: しまう\n      意思: to finish\n      来源: to close\n      同义词: 仕舞う, , 終う, 了う, 蔵う\n    ',
  },
  {
    question: '使用',
    answer: 'shiyo',
    explantion: '\n      汉字: 使用\n      读音: しよう\n      意思: use\n      来源: application\n      同义词: 使用\n    ',
  },
  {
    question: '姿',
    answer: 'sugata',
    explantion: '\n      汉字: 姿\n      读音: すがた\n      意思: figure\n      来源: shape\n      同义词: 姿\n    ',
  },
  {
    question: '市',
    answer: 'ichi',
    explantion: '\n      汉字: 市\n      读音: いち\n      意思: market\n      来源: fair\n      同义词: 市\n    ',
  },
  {
    question: '市場',
    answer: 'ichiba',
    explantion: '\n      汉字: 市場\n      读音: いちば\n      意思: (the) market (as a concept)\n      来源: waller\n      同义词: 市庭\n    ',
  },
  {
    question: '思わず',
    answer: 'omowazu',
    explantion: '\n      汉字: 思わず\n      读音: おもわず\n      意思: unintentional\n      来源: spontaneous\n      同义词: 思わず\n    ',
  },
  {
    question: '思想',
    answer: 'shiso',
    explantion: '\n      汉字: 思想\n      读音: しそう\n      意思: thought\n      来源: idea\n      同义词: 思想\n    ',
  },
  {
    question: '指す',
    answer: 'sasu',
    explantion: '\n      汉字: 指す\n      读音: さす\n      意思: to point\n      来源: to put up umbrella\n      同义词: 指す\n    ',
  },
  {
    question: '指導',
    answer: 'shido',
    explantion: '\n      汉字: 指導\n      读音: しどう\n      意思: leadership\n      来源: guidance\n      同义词: 指導\n    ',
  },
  {
    question: '支える',
    answer: 'sasaeru',
    explantion: '\n      汉字: 支える\n      读音: ささえる\n      意思: to be blocked\n      来源: to choke\n      同义词: 支える\n    ',
  },
  {
    question: '支給',
    answer: 'shikyu',
    explantion: '\n      汉字: 支給\n      读音: しきゅう\n      意思: payment\n      来源: allowance\n      同义词: 支給\n    ',
  },
  {
    question: '支出',
    answer: 'shishutsu',
    explantion: '\n      汉字: 支出\n      读音: ししゅつ\n      意思: expenditure\n      来源: expenses\n      同义词: 支出\n    ',
  },
  {
    question: '支店',
    answer: 'shiten',
    explantion: '\n      汉字: 支店\n      读音: してん\n      意思: branch store (office)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '支配',
    answer: 'shihai',
    explantion: '\n      汉字: 支配\n      读音: しはい\n      意思: rule\n      来源: control\n      同义词: 支配\n    ',
  },
  {
    question: '支払う',
    answer: 'shiharau',
    explantion: '\n      汉字: 支払う\n      读音: しはらう\n      意思: to pay\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '止す',
    answer: 'yosu',
    explantion: '\n      汉字: 止す\n      读音: よす\n      意思: to cease\n      来源: to abolish\n      同义词: 止す, \n    ',
  },
  {
    question: '留める',
    answer: 'tomeru',
    explantion: '\n      汉字: 留める\n      读音: とめる\n      意思: to fasten\n      来源: to turn off\n      同义词: 留める\n    ',
  },
  {
    question: '死亡',
    answer: 'shibou',
    explantion: '\n      汉字: 死亡\n      读音: しぼう\n      意思: death\n      来源: mortality\n      同义词: 死亡\n    ',
  },
  {
    question: '至る',
    answer: 'itaru',
    explantion: '\n      汉字: 至る\n      读音: いたる\n      意思: to come\n      来源: to arrive\n      同义词: 至る, 到る\n    ',
  },
  {
    question: '詩人',
    answer: 'shijin',
    explantion: '\n      汉字: 詩人\n      读音: しじん\n      意思: poet\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '試し',
    answer: 'tameshi',
    explantion: '\n      汉字: 試し\n      读音: ためし\n      意思: trial\n      来源: test\n      同义词: 試し, 験し, 験\n    ',
  },
  {
    question: '試す',
    answer: 'tamesu',
    explantion: '\n      汉字: 試す\n      读音: ためす\n      意思: to attempt\n      来源: to test\n      同义词: 試す, 験す\n    ',
  },
  {
    question: '資源',
    answer: 'shigen',
    explantion: '\n      汉字: 資源\n      读音: しげん\n      意思: resources\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '資本',
    answer: 'shihon',
    explantion: '\n      汉字: 資本\n      读音: しほん\n      意思: funds\n      来源: capital\n      同义词: 資本\n    ',
  },
  {
    question: '飼う',
    answer: 'kau',
    explantion: '\n      汉字: 飼う\n      读音: かう\n      意思: to keep\n      来源: to raise\n      同义词: 飼う\n    ',
  },
  {
    question: '事',
    answer: 'koto',
    explantion: '\n      汉字: 事\n      读音: こと\n      意思: thing\n      来源: matter\n      同义词: 事, , , 事, 縡, 縡\n    ',
  },
  {
    question: '事件',
    answer: 'jiken',
    explantion: '\n      汉字: 事件\n      读音: じけん\n      意思: event\n      来源: affair\n      同义词: 事件\n    ',
  },
  {
    question: '事実',
    answer: 'jijitsu',
    explantion: '\n      汉字: 事実\n      读音: じじつ\n      意思: fact\n      来源: truth\n      同义词: 事実\n    ',
  },
  {
    question: '事情',
    answer: 'jijiyou',
    explantion: '\n      汉字: 事情\n      读音: じじょう\n      意思: circumstances\n      来源: consideration\n      同义词: 事情\n    ',
  },
  {
    question: '事務',
    answer: 'jimu',
    explantion: '\n      汉字: 事務\n      读音: じむ\n      意思: business\n      来源: office work\n      同义词: 事務\n    ',
  },
  {
    question: '似合う',
    answer: 'niau',
    explantion: '\n      汉字: 似合う\n      读音: にあう\n      意思: to suit\n      来源: to match\n      同义词: 似合う, 似あう\n    ',
  },
  {
    question: '持ち上げる',
    answer: 'mochiageru',
    explantion: '\n      汉字: 持ち上げる\n      读音: もちあげる\n      意思: to raise\n      来源: to lift up\n      同义词: 持ち上げる, 持上げる\n    ',
  },
  {
    question: '時',
    answer: 'toki',
    explantion: '\n      汉字: 時\n      读音: とき\n      意思: (1) time\n      来源: hour\n      同义词: 時, 刻, 秋\n    ',
  },
  {
    question: '時期',
    answer: 'jiki',
    explantion: '\n      汉字: 時期\n      读音: じき\n      意思: time\n      来源: season\n      同义词: 時期\n    ',
  },
  {
    question: '時刻',
    answer: 'jikoku',
    explantion: '\n      汉字: 時刻\n      读音: じこく\n      意思: instant\n      来源: time\n      同义词: 時刻, 時剋\n    ',
  },
  {
    question: '次第',
    answer: 'shidai',
    explantion: '\n      汉字: 次第\n      读音: しだい\n      意思: (1) order\n      来源: precedence\n      同义词: 次第\n    ',
  },
  {
    question: '示す',
    answer: 'shimesu',
    explantion: '\n      汉字: 示す\n      读音: しめす\n      意思: to denote\n      来源: to show\n      同义词: 示す\n    ',
  },
  {
    question: '自殺',
    answer: 'jisatsu',
    explantion: '\n      汉字: 自殺\n      读音: じさつ\n      意思: suicide\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '自身',
    answer: 'jishin',
    explantion: '\n      汉字: 自身\n      读音: じしん\n      意思: by oneself\n      来源: personally\n      同义词: 自身\n    ',
  },
  {
    question: '自然',
    answer: 'shizen',
    explantion: '\n      汉字: 自然\n      读音: しぜん\n      意思: nature\n      来源: spontaneous\n      同义词: 自然\n    ',
  },
  {
    question: '自動',
    answer: 'jido',
    explantion: '\n      汉字: 自動\n      读音: じどう\n      意思: automatic\n      来源: self-motion\n      同义词: 自動, 自働\n    ',
  },
  {
    question: '自慢',
    answer: 'jiman',
    explantion: '\n      汉字: 自慢\n      读音: じまん\n      意思: pride\n      来源: boast\n      同义词: 自慢\n    ',
  },
  {
    question: '辞める',
    answer: 'yameru',
    explantion: '\n      汉字: 辞める\n      读音: やめる\n      意思: to retire\n      来源: waller\n      同义词: 罷める, 退める\n    ',
  },
  {
    question: '式',
    answer: 'shiki',
    explantion: '\n      汉字: 式\n      读音: しき\n      意思: equation\n      来源: formula\n      同义词: 式\n    ',
  },
  {
    question: '叱る',
    answer: 'shikaru',
    explantion: '\n      汉字: 叱る\n      读音: しかる\n      意思: to scold\n      来源: waller\n      同义词: , 𠮟る, 呵る\n    ',
  },
  {
    question: '失う',
    answer: 'ushinau',
    explantion: '\n      汉字: 失う\n      读音: うしなう\n      意思: to lose\n      来源: to part with\n      同义词: 失う, 喪う\n    ',
  },
  {
    question: '失業',
    answer: 'shitsugyou',
    explantion: '\n      汉字: 失業\n      读音: しつぎょう\n      意思: unemployment\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '失望',
    answer: 'shitsubou',
    explantion: '\n      汉字: 失望\n      读音: しつぼう\n      意思: disappointment\n      来源: despair\n      同义词: 失望\n    ',
  },
  {
    question: '質',
    answer: 'shitsu',
    explantion: '\n      汉字: 質\n      读音: しつ\n      意思: quality\n      来源: nature (of person)\n      同义词: 質\n    ',
  },
  {
    question: '実',
    answer: 'mi',
    explantion: '\n      汉字: 実\n      读音: み\n      意思: fruit\n      来源: nut\n      同义词: 実, 子\n    ',
  },
  {
    question: '実は',
    answer: 'jitsuwa',
    explantion: '\n      汉字: 実は\n      读音: じつは\n      意思: as a matter of fact\n      来源: by the way\n      同义词: 実は\n    ',
  },
  {
    question: '実験',
    answer: 'jikken',
    explantion: '\n      汉字: 実験\n      读音: じっけん\n      意思: experiment\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '実現',
    answer: 'jitsugen',
    explantion: '\n      汉字: 実現\n      读音: じつげん\n      意思: implementation\n      来源: materialization\n      同义词: 実現\n    ',
  },
  {
    question: '実行',
    answer: 'jikko',
    explantion: '\n      汉字: 実行\n      读音: じっこう\n      意思: practice\n      来源: performance\n      同义词: 実行\n    ',
  },
  {
    question: '実際',
    answer: 'jissai',
    explantion: '\n      汉字: 実際\n      读音: じっさい\n      意思: practical\n      来源: actual condition\n      同义词: 実際\n    ',
  },
  {
    question: '実施',
    answer: 'jisshi',
    explantion: '\n      汉字: 実施\n      读音: じっし\n      意思: enforcement\n      来源: enact\n      同义词: 実施\n    ',
  },
  {
    question: '芝居',
    answer: 'shibai',
    explantion: '\n      汉字: 芝居\n      读音: しばい\n      意思: play\n      来源: drama\n      同义词: 芝居\n    ',
  },
  {
    question: '芝生',
    answer: 'shibafu',
    explantion: '\n      汉字: 芝生\n      读音: しばふ\n      意思: lawn\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '者',
    answer: 'mono',
    explantion: '\n      汉字: 者\n      读音: もの\n      意思: person\n      来源: waller\n      同义词: 者\n    ',
  },
  {
    question: '邪魔',
    answer: 'jama',
    explantion: '\n      汉字: 邪魔\n      读音: じゃま\n      意思: hindrance\n      来源: intrusion\n      同义词: 邪魔\n    ',
  },
  {
    question: '借金',
    answer: 'shakkin',
    explantion: '\n      汉字: 借金\n      读音: しゃっきん\n      意思: debt\n      来源: loan\n      同义词: 借金\n    ',
  },
  {
    question: '主に',
    answer: 'omoni',
    explantion: '\n      汉字: 主に\n      读音: おもに\n      意思: mainly\n      来源: primarily\n      同义词: 主に\n    ',
  },
  {
    question: '主義',
    answer: 'shiyugi',
    explantion: '\n      汉字: 主義\n      读音: しゅぎ\n      意思: doctrine\n      来源: rule\n      同义词: 主義\n    ',
  },
  {
    question: '主張',
    answer: 'shucho',
    explantion: '\n      汉字: 主張\n      读音: しゅちょう\n      意思: claim\n      来源: request\n      同义词: 主張\n    ',
  },
  {
    question: '主婦',
    answer: 'shiyufu',
    explantion: '\n      汉字: 主婦\n      读音: しゅふ\n      意思: housewife\n      来源: mistress\n      同义词: 主婦\n    ',
  },
  {
    question: '主要',
    answer: 'shuyo',
    explantion: '\n      汉字: 主要\n      读音: しゅよう\n      意思: chief\n      来源: main\n      同义词: 主要\n    ',
  },
  {
    question: '取り上げる',
    answer: 'toriageru',
    explantion: '\n      汉字: 取り上げる\n      读音: とりあげる\n      意思: to take up\n      来源: to pick up\n      同义词: 取り上げる, 取りあげる, 取上げる, 採り上げる, とり上げる, 採りあげる, 採上げる\n    ',
  },
  {
    question: '取れる',
    answer: 'toreru',
    explantion: '\n      汉字: 取れる\n      读音: とれる\n      意思: to come off\n      来源: to be taken off\n      同义词: 取れる\n    ',
  },
  {
    question: '守る',
    answer: 'mamoru',
    explantion: '\n      汉字: 守る\n      读音: まもる\n      意思: to protect\n      来源: to obey\n      同义词: 守る, 護る, 戍る\n    ',
  },
  {
    question: '手間',
    answer: 'tema',
    explantion: '\n      汉字: 手間\n      读音: てま\n      意思: time\n      来源: labour\n      同义词: 手間\n    ',
  },
  {
    question: '手術',
    answer: 'shujutsu',
    explantion: '\n      汉字: 手術\n      读音: しゅじゅつ\n      意思: surgical operation\n      来源: waller\n      同义词: 手術\n    ',
  },
  {
    question: '手段',
    answer: 'shiyudan',
    explantion: '\n      汉字: 手段\n      读音: しゅだん\n      意思: means\n      来源: way\n      同义词: 手段\n    ',
  },
  {
    question: '手伝い',
    answer: 'tetsudai',
    explantion: '\n      汉字: 手伝い\n      读音: てつだい\n      意思: help\n      来源: helper\n      同义词: 手伝い, 手つだい\n    ',
  },
  {
    question: '手品',
    answer: 'tejina',
    explantion: '\n      汉字: 手品\n      读音: てじな\n      意思: sleight of hand\n      来源: conjuring trick\n      同义词: 手品\n    ',
  },
  {
    question: '種',
    answer: 'tane',
    explantion: '\n      汉字: 種\n      读音: たね\n      意思: (1) seed\n      来源: (2) material\n      同义词: 種, \n    ',
  },
  {
    question: '種類',
    answer: 'shiyurui',
    explantion: '\n      汉字: 種類\n      读音: しゅるい\n      意思: variety\n      来源: kind\n      同义词: 種類\n    ',
  },
  {
    question: '酒',
    answer: 'sake',
    explantion: '\n      汉字: 酒\n      读音: さけ\n      意思: alcohol\n      来源: sake\n      同义词: 酒, 酒, 酒, 酒, 酒\n    ',
  },
  {
    question: '首相',
    answer: 'shusho',
    explantion: '\n      汉字: 首相\n      读音: しゅしょう\n      意思: Prime Minister\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '首都',
    answer: 'shiyuto',
    explantion: '\n      汉字: 首都\n      读音: しゅと\n      意思: capital city\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '受け取る',
    answer: 'uketoru',
    explantion: '\n      汉字: 受け取る\n      读音: うけとる\n      意思: to receive\n      来源: to get\n      同义词: 受け取る, 受けとる, 受取る, 請け取る, 請取る, うけ取る\n    ',
  },
  {
    question: '需要',
    answer: 'jiyuyou',
    explantion: '\n      汉字: 需要\n      读音: じゅよう\n      意思: demand\n      来源: request\n      同义词: 需要\n    ',
  },
  {
    question: '収穫',
    answer: 'shukaku',
    explantion: '\n      汉字: 収穫\n      读音: しゅうかく\n      意思: harvest\n      来源: crop\n      同义词: 収穫\n    ',
  },
  {
    question: '収入',
    answer: 'shuniyuu',
    explantion: '\n      汉字: 収入\n      读音: しゅうにゅう\n      意思: income\n      来源: receipts\n      同义词: 収入\n    ',
  },
  {
    question: '周囲',
    answer: 'shui',
    explantion: '\n      汉字: 周囲\n      读音: しゅうい\n      意思: surroundings\n      来源: circumference\n      同义词: 周囲\n    ',
  },
  {
    question: '宗教',
    answer: 'shukyo',
    explantion: '\n      汉字: 宗教\n      读音: しゅうきょう\n      意思: religion\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '就く',
    answer: 'tsuku',
    explantion: '\n      汉字: 就く\n      读音: つく\n      意思: to settle in (place)\n      来源: to take (seat\n      同义词: 就く, 即く\n    ',
  },
  {
    question: '就職',
    answer: 'shushoku',
    explantion: '\n      汉字: 就職\n      读音: しゅうしょく\n      意思: finding employment\n      来源: inauguration\n      同义词: 就職\n    ',
  },
  {
    question: '州',
    answer: 'shu',
    explantion: '\n      汉字: 州\n      读音: しゅう\n      意思: sandbank\n      来源: waller\n      同义词: 洲\n    ',
  },
  {
    question: '修正',
    answer: 'shusei',
    explantion: '\n      汉字: 修正\n      读音: しゅうせい\n      意思: amendment\n      来源: correction\n      同义词: 修正\n    ',
  },
  {
    question: '修理',
    answer: 'shuri',
    explantion: '\n      汉字: 修理\n      读音: しゅうり\n      意思: repairing\n      来源: mending\n      同义词: 修理, 修理, 修理\n    ',
  },
  {
    question: '終える',
    answer: 'oeru',
    explantion: '\n      汉字: 終える\n      读音: おえる\n      意思: to finish\n      来源: waller\n      同义词: 了える, 卒える\n    ',
  },
  {
    question: '臭い',
    answer: 'kusai',
    explantion: '\n      汉字: 臭い\n      读音: くさい\n      意思: odour\n      来源: scent\n      同义词: 臭い\n    ',
  },
  {
    question: '週',
    answer: 'shu',
    explantion: '\n      汉字: 週\n      读音: しゅう\n      意思: week\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '週間',
    answer: 'shukan',
    explantion: '\n      汉字: 週間\n      读音: しゅうかん\n      意思: week\n      来源: weekly\n      同义词: 週間\n    ',
  },
  {
    question: '集団',
    answer: 'shudan',
    explantion: '\n      汉字: 集団\n      读音: しゅうだん\n      意思: group\n      来源: mass\n      同义词: 集団\n    ',
  },
  {
    question: '集中',
    answer: 'shuchiyuu',
    explantion: '\n      汉字: 集中\n      读音: しゅうちゅう\n      意思: concentration\n      来源: focusing the mind\n      同义词: 集中\n    ',
  },
  {
    question: '住宅',
    answer: 'jutaku',
    explantion: '\n      汉字: 住宅\n      读音: じゅうたく\n      意思: resident\n      来源: housing\n      同义词: 住宅\n    ',
  },
  {
    question: '住民',
    answer: 'jumin',
    explantion: '\n      汉字: 住民\n      读音: じゅうみん\n      意思: citizens\n      来源: inhabitants\n      同义词: 住民\n    ',
  },
  {
    question: '従う',
    answer: 'shitagau',
    explantion: '\n      汉字: 従う\n      读音: したがう\n      意思: to abide (by the rules)\n      来源: to obey\n      同义词: 従う, 随う, 順う, 遵う, 從う, 隨う\n    ',
  },
  {
    question: '従って',
    answer: 'shitagatte',
    explantion: '\n      汉字: 従って\n      读音: したがって\n      意思: therefore\n      来源: consequently\n      同义词: 従って, \n    ',
  },
  {
    question: '従兄弟',
    answer: 'itoko',
    explantion: '\n      汉字: 従兄弟\n      读音: いとこ\n      意思: cousin (male)\n      来源: waller\n      同义词: , , 従兄弟\n    ',
  },
  {
    question: '渋滞',
    answer: 'jutai',
    explantion: '\n      汉字: 渋滞\n      读音: じゅうたい\n      意思: congestion (e.g. traffic)\n      来源: delay\n      同义词: 渋滞\n    ',
  },
  {
    question: '重視',
    answer: 'jushi',
    explantion: '\n      汉字: 重視\n      读音: じゅうし\n      意思: importance\n      来源: stress\n      同义词: 重視\n    ',
  },
  {
    question: '重大',
    answer: 'judai',
    explantion: '\n      汉字: 重大\n      读音: じゅうだい\n      意思: serious\n      来源: important\n      同义词: 重大\n    ',
  },
  {
    question: '重要',
    answer: 'juyo',
    explantion: '\n      汉字: 重要\n      读音: じゅうよう\n      意思: important\n      来源: momentous\n      同义词: 重要\n    ',
  },
  {
    question: '銃',
    answer: 'ju',
    explantion: '\n      汉字: 銃\n      读音: じゅう\n      意思: gun\n      来源: waller\n      同义词: 砲\n    ',
  },
  {
    question: '宿',
    answer: 'yado',
    explantion: '\n      汉字: 宿\n      读音: やど\n      意思: inn\n      来源: lodging\n      同义词: 宿\n    ',
  },
  {
    question: '宿泊',
    answer: 'shukuhaku',
    explantion: '\n      汉字: 宿泊\n      读音: しゅくはく\n      意思: lodging\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '祝い',
    answer: 'iwai',
    explantion: '\n      汉字: 祝い\n      读音: いわい\n      意思: celebration\n      来源: festival\n      同义词: 祝い, 祝い, 祝, 祝, 斎, 斎\n    ',
  },
  {
    question: '祝う',
    answer: 'iwau',
    explantion: '\n      汉字: 祝う\n      读音: いわう\n      意思: to congratulate\n      来源: to celebrate\n      同义词: 祝う, 斎う\n    ',
  },
  {
    question: '出会い',
    answer: 'deai',
    explantion: '\n      汉字: 出会い\n      读音: であい\n      意思: meeting\n      来源: rendezvous\n      同义词: 出会い, 出逢い, 出合い, 出会, 出合, 出遭い\n    ',
  },
  {
    question: '出身',
    answer: 'shutsushin',
    explantion: '\n      汉字: 出身\n      读音: しゅっしん\n      意思: graduate from\n      来源: come from\n      同义词: 出身\n    ',
  },
  {
    question: '出版',
    answer: 'shuppan',
    explantion: '\n      汉字: 出版\n      读音: しゅっぱん\n      意思: publication\n      来源: waller\n      同义词: 出板\n    ',
  },
  {
    question: '出来るだけ',
    answer: 'dekirudake',
    explantion: '\n      汉字: 出来るだけ\n      读音: できるだけ\n      意思: if at all possible\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '出来事',
    answer: 'dekigoto',
    explantion: '\n      汉字: 出来事\n      读音: できごと\n      意思: incident\n      来源: affair\n      同义词: 出来事, 出来事, 出来ごと\n    ',
  },
  {
    question: '述べる',
    answer: 'noberu',
    explantion: '\n      汉字: 述べる\n      读音: のべる\n      意思: to state\n      来源: to express\n      同义词: 述べる, 宣べる, 陳べる\n    ',
  },
  {
    question: '瞬間',
    answer: 'shunkan',
    explantion: '\n      汉字: 瞬間\n      读音: しゅんかん\n      意思: moment\n      来源: second\n      同义词: 瞬間\n    ',
  },
  {
    question: '順',
    answer: 'jun',
    explantion: '\n      汉字: 順\n      读音: じゅん\n      意思: order\n      来源: turn\n      同义词: 順, 順\n    ',
  },
  {
    question: '順調',
    answer: 'junchou',
    explantion: '\n      汉字: 順調\n      读音: じゅんちょう\n      意思: favourable\n      来源: doing well\n      同义词: 順調\n    ',
  },
  {
    question: '順番',
    answer: 'junban',
    explantion: '\n      汉字: 順番\n      读音: じゅんばん\n      意思: turn (in line)\n      来源: order of things\n      同义词: 順番\n    ',
  },
  {
    question: '処理',
    answer: 'shori',
    explantion: '\n      汉字: 処理\n      读音: しょり\n      意思: processing\n      来源: dealing with\n      同义词: 処理\n    ',
  },
  {
    question: '署名',
    answer: 'shomei',
    explantion: '\n      汉字: 署名\n      读音: しょめい\n      意思: signature\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '書斎',
    answer: 'shosai',
    explantion: '\n      汉字: 書斎\n      读音: しょさい\n      意思: study\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '書物',
    answer: 'shomotsu',
    explantion: '\n      汉字: 書物\n      读音: しょもつ\n      意思: books\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '書類',
    answer: 'shorui',
    explantion: '\n      汉字: 書類\n      读音: しょるい\n      意思: documents\n      来源: official papers\n      同义词: 書類\n    ',
  },
  {
    question: '助ける',
    answer: 'tasukeru',
    explantion: '\n      汉字: 助ける\n      读音: たすける\n      意思: to help\n      来源: to save\n      同义词: 助ける, 援ける, 救ける, 扶ける, 佐ける, 佑ける, 輔ける\n    ',
  },
  {
    question: '助手',
    answer: 'joshiyu',
    explantion: '\n      汉字: 助手\n      读音: じょしゅ\n      意思: helper\n      来源: helpmeet\n      同义词: 助手, 助手\n    ',
  },
  {
    question: '女王',
    answer: 'jiyoou',
    explantion: '\n      汉字: 女王\n      读音: じょおう\n      意思: queen\n      来源: waller\n      同义词: 女王, 女王\n    ',
  },
  {
    question: '女子',
    answer: 'joshi',
    explantion: '\n      汉字: 女子\n      读音: じょし\n      意思: woman\n      来源: girl\n      同义词: 女子, 女子, 女子\n    ',
  },
  {
    question: '女優',
    answer: 'jiyoyuu',
    explantion: '\n      汉字: 女優\n      读音: じょゆう\n      意思: actress\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '除く',
    answer: 'nozoku',
    explantion: '\n      汉字: 除く\n      读音: のぞく\n      意思: to remove\n      来源: to exclude\n      同义词: 除く\n    ',
  },
  {
    question: '商売',
    answer: 'shoubai',
    explantion: '\n      汉字: 商売\n      读音: しょうばい\n      意思: trade\n      来源: business\n      同义词: 商売\n    ',
  },
  {
    question: '商品',
    answer: 'shohin',
    explantion: '\n      汉字: 商品\n      读音: しょうひん\n      意思: commodity\n      来源: article of commerce\n      同义词: 商品\n    ',
  },
  {
    question: '奨学金',
    answer: 'shogakukin',
    explantion: '\n      汉字: 奨学金\n      读音: しょうがくきん\n      意思: scholarship\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '小屋',
    answer: 'koya',
    explantion: '\n      汉字: 小屋\n      读音: こや\n      意思: hut\n      来源: cabin\n      同义词: 小屋, 小屋\n    ',
  },
  {
    question: '小麦',
    answer: 'komugi',
    explantion: '\n      汉字: 小麦\n      读音: こむぎ\n      意思: wheat\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '少しも',
    answer: 'sukoshimo',
    explantion: '\n      汉字: 少しも\n      读音: すこしも\n      意思: anything of\n      来源: not one bit\n      同义词: 少しも\n    ',
  },
  {
    question: '少年',
    answer: 'shonen',
    explantion: '\n      汉字: 少年\n      读音: しょうねん\n      意思: boys\n      来源: juveniles\n      同义词: 少年\n    ',
  },
  {
    question: '床',
    answer: 'yuka',
    explantion: '\n      汉字: 床\n      读音: ゆか\n      意思: floor\n      来源: waller\n      同义词: 牀\n    ',
  },
  {
    question: '承認',
    answer: 'shonin',
    explantion: '\n      汉字: 承認\n      读音: しょうにん\n      意思: recognition\n      来源: acknowledgement\n      同义词: 承認\n    ',
  },
  {
    question: '招く',
    answer: 'maneku',
    explantion: '\n      汉字: 招く\n      读音: まねく\n      意思: to invite\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '松',
    answer: 'matsu',
    explantion: '\n      汉字: 松\n      读音: まつ\n      意思: (1) pine tree\n      来源: (2) highest (of a three-tier ranking system)\n      同义词: 松, \n    ',
  },
  {
    question: '消費',
    answer: 'shohi',
    explantion: '\n      汉字: 消費\n      读音: しょうひ\n      意思: consumption\n      来源: expenditure\n      同义词: 消費\n    ',
  },
  {
    question: '消防',
    answer: 'shobou',
    explantion: '\n      汉字: 消防\n      读音: しょうぼう\n      意思: fire fighting\n      来源: fire department\n      同义词: 消防\n    ',
  },
  {
    question: '症状',
    answer: 'shojiyou',
    explantion: '\n      汉字: 症状\n      读音: しょうじょう\n      意思: symptoms\n      来源: condition\n      同义词: 症状\n    ',
  },
  {
    question: '省く',
    answer: 'habuku',
    explantion: '\n      汉字: 省く\n      读音: はぶく\n      意思: to omit\n      来源: to eliminate\n      同义词: 省く\n    ',
  },
  {
    question: '章',
    answer: 'sho',
    explantion: '\n      汉字: 章\n      读音: しょう\n      意思: (1) chapter\n      来源: section\n      同义词: 章\n    ',
  },
  {
    question: '笑い',
    answer: 'warai',
    explantion: '\n      汉字: 笑い\n      读音: わらい\n      意思: laugh\n      来源: laughter\n      同义词: 笑い, 咲い, 嗤い, 笑\n    ',
  },
  {
    question: '笑顔',
    answer: 'egao',
    explantion: '\n      汉字: 笑顔\n      读音: えがお\n      意思: smiling face\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '衝突',
    answer: 'shototsu',
    explantion: '\n      汉字: 衝突\n      读音: しょうとつ\n      意思: collision\n      来源: conflict\n      同义词: 衝突\n    ',
  },
  {
    question: '証明',
    answer: 'shomei',
    explantion: '\n      汉字: 証明\n      读音: しょうめい\n      意思: proof\n      来源: verification\n      同义词: 証明\n    ',
  },
  {
    question: '詳しい',
    answer: 'kuwashii',
    explantion: '\n      汉字: 詳しい\n      读音: くわしい\n      意思: knowing very well\n      来源: detailed\n      同义词: 詳しい, 精しい, 委しい\n    ',
  },
  {
    question: '象',
    answer: 'zou',
    explantion: '\n      汉字: 象\n      读音: ぞう\n      意思: elephant\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '賞',
    answer: 'sho',
    explantion: '\n      汉字: 賞\n      读音: しょう\n      意思: prize\n      来源: award\n      同义词: 賞\n    ',
  },
  {
    question: '障害',
    answer: 'shogai',
    explantion: '\n      汉字: 障害\n      读音: しょうがい\n      意思: obstacle\n      来源: impediment (fault)\n      同义词: 障害, 障がい, 障碍, 障碍, 障礙, 障礙\n    ',
  },
  {
    question: '上',
    answer: 'uwa',
    explantion: '\n      汉字: 上\n      读音: うわ\n      意思: upper\n      来源: outer\n      同义词: 上\n    ',
  },
  {
    question: '上',
    answer: 'kami',
    explantion: '\n      汉字: 上\n      读音: かみ\n      意思: (1) first volume\n      来源: (2) superior quality\n      同义词: 上\n    ',
  },
  {
    question: '上',
    answer: 'jiyou',
    explantion: '\n      汉字: 上\n      读音: じょう\n      意思: (1) first volume\n      来源: (2) superior quality\n      同义词: 上\n    ',
  },
  {
    question: '昇る',
    answer: 'noboru',
    explantion: '\n      汉字: 昇る\n      读音: のぼる\n      意思: to arise\n      来源: to ascend\n      同义词: 昇る\n    ',
  },
  {
    question: '上京',
    answer: 'jiyoukyou',
    explantion: '\n      汉字: 上京\n      读音: じょうきょう\n      意思: proceeding to the capital (Tokyo)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '上達',
    answer: 'jiyoutatsu',
    explantion: '\n      汉字: 上達\n      读音: じょうたつ\n      意思: improvement\n      来源: advance\n      同义词: 上達\n    ',
  },
  {
    question: '上等',
    answer: 'jiyoutou',
    explantion: '\n      汉字: 上等\n      读音: じょうとう\n      意思: superiority\n      来源: first class\n      同义词: 上等\n    ',
  },
  {
    question: '冗談',
    answer: 'jiyoudan',
    explantion: '\n      汉字: 冗談\n      读音: じょうだん\n      意思: jest\n      来源: joke\n      同义词: 冗談, 戯談, 戯談, 戯談, 串戯, 串戲\n    ',
  },
  {
    question: '城',
    answer: 'shiro',
    explantion: '\n      汉字: 城\n      读音: しろ\n      意思: castle\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '場',
    answer: 'ba',
    explantion: '\n      汉字: 場\n      读音: ば\n      意思: place\n      来源: field (physics)\n      同义词: 場\n    ',
  },
  {
    question: '場面',
    answer: 'bamen',
    explantion: '\n      汉字: 場面\n      读音: ばめん\n      意思: scene\n      来源: setting (e.g. of novel)\n      同义词: 場面\n    ',
  },
  {
    question: '常に',
    answer: 'tsuneni',
    explantion: '\n      汉字: 常に\n      读音: つねに\n      意思: always\n      来源: constantly\n      同义词: 常に\n    ',
  },
  {
    question: '常識',
    answer: 'joshiki',
    explantion: '\n      汉字: 常識\n      读音: じょうしき\n      意思: common sense\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '情報',
    answer: 'jiyouhou',
    explantion: '\n      汉字: 情報\n      读音: じょうほう\n      意思: information\n      来源: (military) intelligence\n      同义词: 情報\n    ',
  },
  {
    question: '条件',
    answer: 'jiyouken',
    explantion: '\n      汉字: 条件\n      读音: じょうけん\n      意思: conditions\n      来源: terms\n      同义词: 条件\n    ',
  },
  {
    question: '状況',
    answer: 'jiyoukyou',
    explantion: '\n      汉字: 状況\n      读音: じょうきょう\n      意思: state of affairs\n      来源: situation\n      同义词: 状況, 情況\n    ',
  },
  {
    question: '状態',
    answer: 'jotai',
    explantion: '\n      汉字: 状態\n      读音: じょうたい\n      意思: condition\n      来源: situation\n      同义词: 状態, 情態\n    ',
  },
  {
    question: '譲る',
    answer: 'yuzuru',
    explantion: '\n      汉字: 譲る\n      读音: ゆずる\n      意思: to turn over\n      来源: to assign\n      同义词: 譲る\n    ',
  },
  {
    question: '植物',
    answer: 'shokubutsu',
    explantion: '\n      汉字: 植物\n      读音: しょくぶつ\n      意思: plant\n      来源: vegetation\n      同义词: 植物\n    ',
  },
  {
    question: '職',
    answer: 'shoku',
    explantion: '\n      汉字: 職\n      读音: しょく\n      意思: employment\n      来源: waller\n      同义词: 職\n    ',
  },
  {
    question: '職業',
    answer: 'shokugyou',
    explantion: '\n      汉字: 職業\n      读音: しょくぎょう\n      意思: occupation\n      来源: business\n      同义词: 職業\n    ',
  },
  {
    question: '触れる',
    answer: 'fureru',
    explantion: '\n      汉字: 触れる\n      读音: ふれる\n      意思: to touch\n      来源: to be touched\n      同义词: 触れる\n    ',
  },
  {
    question: '食卓',
    answer: 'shokutaku',
    explantion: '\n      汉字: 食卓\n      读音: しょくたく\n      意思: dining table\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '食品',
    answer: 'shokuhin',
    explantion: '\n      汉字: 食品\n      读音: しょくひん\n      意思: commodity\n      来源: foodstuff\n      同义词: 食品\n    ',
  },
  {
    question: '食物',
    answer: 'shokumotsu',
    explantion: '\n      汉字: 食物\n      读音: しょくもつ\n      意思: food\n      来源: foodstuff\n      同义词: 食物\n    ',
  },
  {
    question: '食欲',
    answer: 'shokuyoku',
    explantion: '\n      汉字: 食欲\n      读音: しょくよく\n      意思: appetite (for food)\n      来源: waller\n      同义词: 食慾\n    ',
  },
  {
    question: '食料',
    answer: 'shokuryo',
    explantion: '\n      汉字: 食料\n      读音: しょくりょう\n      意思: food\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '食糧',
    answer: 'shokuryo',
    explantion: '\n      汉字: 食糧\n      读音: しょくりょう\n      意思: provisions\n      来源: rations\n      同义词: 食糧\n    ',
  },
  {
    question: '尻',
    answer: 'shiri',
    explantion: '\n      汉字: 尻\n      读音: しり\n      意思: buttocks\n      来源: bottom\n      同义词: 尻, 臀, 後\n    ',
  },
  {
    question: '伸びる',
    answer: 'nobiru',
    explantion: '\n      汉字: 伸びる\n      读音: のびる\n      意思: to stretch\n      来源: to extend\n      同义词: 伸びる, 延びる\n    ',
  },
  {
    question: '信じる',
    answer: 'shinjiru',
    explantion: '\n      汉字: 信じる\n      读音: しんじる\n      意思: to believe\n      来源: to place trust in\n      同义词: 信じる\n    ',
  },
  {
    question: '信仰',
    answer: 'shinko',
    explantion: '\n      汉字: 信仰\n      读音: しんこう\n      意思: (religious) faith\n      来源: belief\n      同义词: 信仰\n    ',
  },
  {
    question: '信号',
    answer: 'shingou',
    explantion: '\n      汉字: 信号\n      读音: しんごう\n      意思: traffic lights\n      来源: signal\n      同义词: 信号\n    ',
  },
  {
    question: '信用',
    answer: 'shinyo',
    explantion: '\n      汉字: 信用\n      读音: しんよう\n      意思: confidence\n      来源: dependence\n      同义词: 信用\n    ',
  },
  {
    question: '信頼',
    answer: 'shinrai',
    explantion: '\n      汉字: 信頼\n      读音: しんらい\n      意思: reliance\n      来源: trust\n      同义词: 信頼\n    ',
  },
  {
    question: '審判',
    answer: 'shimpan',
    explantion: '\n      汉字: 審判\n      读音: しんぱん\n      意思: refereeing\n      来源: trial\n      同义词: 審判, 審判\n    ',
  },
  {
    question: '心臓',
    answer: 'shinzou',
    explantion: '\n      汉字: 心臓\n      读音: しんぞう\n      意思: heart\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '心理',
    answer: 'shinri',
    explantion: '\n      汉字: 心理\n      读音: しんり\n      意思: mentality\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '慎重',
    answer: 'shincho',
    explantion: '\n      汉字: 慎重\n      读音: しんちょう\n      意思: discretion\n      来源: prudence\n      同义词: 慎重\n    ',
  },
  {
    question: '振る',
    answer: 'furu',
    explantion: '\n      汉字: 振る\n      读音: ふる\n      意思: (1) to wave\n      来源: to shake\n      同义词: 振る\n    ',
  },
  {
    question: '新た',
    answer: 'arata',
    explantion: '\n      汉字: 新た\n      读音: あらた\n      意思: new\n      来源: fresh\n      同义词: 新た\n    ',
  },
  {
    question: '新鮮',
    answer: 'shinsen',
    explantion: '\n      汉字: 新鮮\n      读音: しんせん\n      意思: fresh\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '深刻',
    answer: 'shinkoku',
    explantion: '\n      汉字: 深刻\n      读音: しんこく\n      意思: serious\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '申し込む',
    answer: 'moshikomu',
    explantion: '\n      汉字: 申し込む\n      读音: もうしこむ\n      意思: to apply for\n      来源: to make an application\n      同义词: 申し込む, 申込む, 申しこむ\n    ',
  },
  {
    question: '申し訳',
    answer: 'moshiwake',
    explantion: '\n      汉字: 申し訳\n      读音: もうしわけ\n      意思: apology\n      来源: excuse\n      同义词: 申し訳, 申しわけ, 申訳, 申し分け, 申分け, 申し訳け, 申分\n    ',
  },
  {
    question: '真っ赤',
    answer: 'makka',
    explantion: '\n      汉字: 真っ赤\n      读音: まっか\n      意思: deep red\n      来源: flushed (of face)\n      同义词: 真っ赤, まっ赤, 真赤\n    ',
  },
  {
    question: '真剣',
    answer: 'shinken',
    explantion: '\n      汉字: 真剣\n      读音: しんけん\n      意思: seriousness\n      来源: earnestness\n      同义词: 真剣\n    ',
  },
  {
    question: '真似',
    answer: 'mane',
    explantion: '\n      汉字: 真似\n      读音: まね\n      意思: mimicry\n      来源: imitation\n      同义词: 真似, \n    ',
  },
  {
    question: '真面目',
    answer: 'majime',
    explantion: '\n      汉字: 真面目\n      读音: まじめ\n      意思: diligent\n      来源: serious\n      同义词: 真面目\n    ',
  },
  {
    question: '神',
    answer: 'kami',
    explantion: '\n      汉字: 神\n      读音: かみ\n      意思: god\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '神経',
    answer: 'shinkei',
    explantion: '\n      汉字: 神経\n      读音: しんけい\n      意思: nerve\n      来源: sensitivity\n      同义词: 神経\n    ',
  },
  {
    question: '親しい',
    answer: 'shitashii',
    explantion: '\n      汉字: 親しい\n      读音: したしい\n      意思: intimate\n      来源: close (e.g. friend)\n      同义词: 親しい\n    ',
  },
  {
    question: '親戚',
    answer: 'shinseki',
    explantion: '\n      汉字: 親戚\n      读音: しんせき\n      意思: relative\n      来源: waller\n      同义词: 親せき\n    ',
  },
  {
    question: '親友',
    answer: 'shinyuu',
    explantion: '\n      汉字: 親友\n      读音: しんゆう\n      意思: close friend\n      来源: buddy\n      同义词: 親友\n    ',
  },
  {
    question: '診察',
    answer: 'shinsatsu',
    explantion: '\n      汉字: 診察\n      读音: しんさつ\n      意思: medical examination\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '身',
    answer: 'mi',
    explantion: '\n      汉字: 身\n      读音: み\n      意思: body\n      来源: main part\n      同义词: 身\n    ',
  },
  {
    question: '身長',
    answer: 'shincho',
    explantion: '\n      汉字: 身長\n      读音: しんちょう\n      意思: height (of body)\n      来源: stature\n      同义词: 身長\n    ',
  },
  {
    question: '辛い',
    answer: 'tsurai',
    explantion: '\n      汉字: 辛い\n      读音: つらい\n      意思: painful\n      来源: heart-breaking\n      同义词: 辛い, \n    ',
  },
  {
    question: '進める',
    answer: 'susumeru',
    explantion: '\n      汉字: 進める\n      读音: すすめる\n      意思: to advance\n      来源: to promote\n      同义词: 進める\n    ',
  },
  {
    question: '進学',
    answer: 'shingaku',
    explantion: '\n      汉字: 進学\n      读音: しんがく\n      意思: going on to university\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '進歩',
    answer: 'shimpo',
    explantion: '\n      汉字: 進歩\n      读音: しんぽ\n      意思: progress\n      来源: development\n      同义词: 進歩\n    ',
  },
  {
    question: '針',
    answer: 'hari',
    explantion: '\n      汉字: 針\n      读音: はり\n      意思: needle\n      来源: hand (e.g. clock)\n      同义词: 針, 鉤, 鉤, 鈎, 鈎\n    ',
  },
  {
    question: '震える',
    answer: 'furueru',
    explantion: '\n      汉字: 震える\n      读音: ふるえる\n      意思: to shiver\n      来源: to shake\n      同义词: 震える, 顫える\n    ',
  },
  {
    question: '人間',
    answer: 'ningen',
    explantion: '\n      汉字: 人間\n      读音: にんげん\n      意思: human being\n      来源: man\n      同义词: 人間\n    ',
  },
  {
    question: '人気',
    answer: 'ninki',
    explantion: '\n      汉字: 人気\n      读音: にんき\n      意思: sign of life\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '人工',
    answer: 'jinko',
    explantion: '\n      汉字: 人工\n      读音: じんこう\n      意思: artificial\n      来源: manmade\n      同义词: 人工\n    ',
  },
  {
    question: '人込み',
    answer: 'hitogomi',
    explantion: '\n      汉字: 人込み\n      读音: ひとごみ\n      意思: crowd of people\n      来源: waller\n      同义词: 人ごみ, 人混み, 人込\n    ',
  },
  {
    question: '人種',
    answer: 'jinshiyu',
    explantion: '\n      汉字: 人種\n      读音: じんしゅ\n      意思: race (of people)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '人生',
    answer: 'jinsei',
    explantion: '\n      汉字: 人生\n      读音: じんせい\n      意思: (human) life (i.e. conception to death)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '人物',
    answer: 'jinbutsu',
    explantion: '\n      汉字: 人物\n      读音: じんぶつ\n      意思: character\n      来源: personality\n      同义词: 人物\n    ',
  },
  {
    question: '人類',
    answer: 'jinrui',
    explantion: '\n      汉字: 人類\n      读音: じんるい\n      意思: mankind\n      来源: humanity\n      同义词: 人類\n    ',
  },
  {
    question: '図',
    answer: 'zu',
    explantion: '\n      汉字: 図\n      读音: ず\n      意思: figure (e.g. Fig 1)\n      来源: drawing\n      同义词: 図, 圖\n    ',
  },
  {
    question: '図書',
    answer: 'tosho',
    explantion: '\n      汉字: 図書\n      读音: としょ\n      意思: books\n      来源: waller\n      同义词: 図書\n    ',
  },
  {
    question: '推薦',
    answer: 'suisen',
    explantion: '\n      汉字: 推薦\n      读音: すいせん\n      意思: recommendation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '水準',
    answer: 'suijun',
    explantion: '\n      汉字: 水準\n      读音: すいじゅん\n      意思: (1) water level\n      来源: (2) level\n      同义词: 水準\n    ',
  },
  {
    question: '睡眠',
    answer: 'suimin',
    explantion: '\n      汉字: 睡眠\n      读音: すいみん\n      意思: sleep\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '遂に',
    answer: 'tsuini',
    explantion: '\n      汉字: 遂に\n      读音: ついに\n      意思: finally\n      来源: at last\n      同义词: 遂に, , 終に, 竟に\n    ',
  },
  {
    question: '酔う',
    answer: 'yo',
    explantion: '\n      汉字: 酔う\n      读音: よう\n      意思: to get drunk\n      来源: to become intoxicated\n      同义词: 酔う, 酔う\n    ',
  },
  {
    question: '随分',
    answer: 'zuibun',
    explantion: '\n      汉字: 随分\n      读音: ずいぶん\n      意思: extremely\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '数える',
    answer: 'kazoeru',
    explantion: '\n      汉字: 数える\n      读音: かぞえる\n      意思: to count\n      来源: waller\n      同义词: 算える\n    ',
  },
  {
    question: '数字',
    answer: 'suuji',
    explantion: '\n      汉字: 数字\n      读音: すうじ\n      意思: numeral\n      来源: figure\n      同义词: 数字\n    ',
  },
  {
    question: '世の中',
    answer: 'yononaka',
    explantion: '\n      汉字: 世の中\n      读音: よのなか\n      意思: society\n      来源: the world\n      同义词: 世の中\n    ',
  },
  {
    question: '世間',
    answer: 'seken',
    explantion: '\n      汉字: 世間\n      读音: せけん\n      意思: world\n      来源: society\n      同义词: 世間\n    ',
  },
  {
    question: '世紀',
    answer: 'seiki',
    explantion: '\n      汉字: 世紀\n      读音: せいき\n      意思: century\n      来源: era\n      同义词: 世紀\n    ',
  },
  {
    question: '是非',
    answer: 'zehi',
    explantion: '\n      汉字: 是非\n      读音: ぜひ\n      意思: certainly\n      来源: without fail\n      同义词: 是非\n    ',
  },
  {
    question: '制限',
    answer: 'seigen',
    explantion: '\n      汉字: 制限\n      读音: せいげん\n      意思: restriction\n      来源: restraint\n      同义词: 制限\n    ',
  },
  {
    question: '制度',
    answer: 'seido',
    explantion: '\n      汉字: 制度\n      读音: せいど\n      意思: system\n      来源: institution\n      同义词: 制度\n    ',
  },
  {
    question: '勢い',
    answer: 'ikioi',
    explantion: '\n      汉字: 勢い\n      读音: いきおい\n      意思: force\n      来源: vigor\n      同义词: 勢い, 勢い, 勢, 勢\n    ',
  },
  {
    question: '性',
    answer: 'sei',
    explantion: '\n      汉字: 性\n      读音: せい\n      意思: sex\n      来源: gender\n      同义词: 性\n    ',
  },
  {
    question: '性格',
    answer: 'seikaku',
    explantion: '\n      汉字: 性格\n      读音: せいかく\n      意思: character\n      来源: personality\n      同义词: 性格\n    ',
  },
  {
    question: '成る',
    answer: 'naru',
    explantion: '\n      汉字: 成る\n      读音: なる\n      意思: to become\n      来源: waller\n      同义词: 為る\n    ',
  },
  {
    question: '成功',
    answer: 'seiko',
    explantion: '\n      汉字: 成功\n      读音: せいこう\n      意思: success\n      来源: hit\n      同义词: 成功\n    ',
  },
  {
    question: '成人',
    answer: 'seijin',
    explantion: '\n      汉字: 成人\n      读音: せいじん\n      意思: adult\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '成績',
    answer: 'seiseki',
    explantion: '\n      汉字: 成績\n      读音: せいせき\n      意思: results\n      来源: record\n      同义词: 成績\n    ',
  },
  {
    question: '成長',
    answer: 'seicho',
    explantion: '\n      汉字: 成長\n      读音: せいちょう\n      意思: growth\n      来源: grow to adulthood\n      同义词: 成長\n    ',
  },
  {
    question: '政府',
    answer: 'seifu',
    explantion: '\n      汉字: 政府\n      读音: せいふ\n      意思: government\n      来源: administration\n      同义词: 政府\n    ',
  },
  {
    question: '整理',
    answer: 'seiri',
    explantion: '\n      汉字: 整理\n      读音: せいり\n      意思: sorting\n      来源: arrangement\n      同义词: 整理\n    ',
  },
  {
    question: '正',
    answer: 'sei',
    explantion: '\n      汉字: 正\n      读音: せい\n      意思: (logical) true\n      来源: regular\n      同义词: 正\n    ',
  },
  {
    question: '正確',
    answer: 'seikaku',
    explantion: '\n      汉字: 正確\n      读音: せいかく\n      意思: accurate\n      来源: punctuality\n      同义词: 正確\n    ',
  },
  {
    question: '正午',
    answer: 'shogo',
    explantion: '\n      汉字: 正午\n      读音: しょうご\n      意思: noon\n      来源: mid-day\n      同义词: 正午\n    ',
  },
  {
    question: '正式',
    answer: 'seishiki',
    explantion: '\n      汉字: 正式\n      读音: せいしき\n      意思: due form\n      来源: official\n      同义词: 正式\n    ',
  },
  {
    question: '正直',
    answer: 'shojiki',
    explantion: '\n      汉字: 正直\n      读音: しょうじき\n      意思: honesty\n      来源: integrity\n      同义词: 正直\n    ',
  },
  {
    question: '清潔',
    answer: 'seiketsu',
    explantion: '\n      汉字: 清潔\n      读音: せいけつ\n      意思: clean\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '生',
    answer: 'nama',
    explantion: '\n      汉字: 生\n      读音: なま\n      意思: (1) draft (beer)\n      来源: (2) raw\n      同义词: 生\n    ',
  },
  {
    question: '生き物',
    answer: 'ikimono',
    explantion: '\n      汉字: 生き物\n      读音: いきもの\n      意思: living thing\n      来源: animal\n      同义词: 生き物, 生きもの\n    ',
  },
  {
    question: '生じる',
    answer: 'shojiru',
    explantion: '\n      汉字: 生じる\n      读音: しょうじる\n      意思: to produce\n      来源: to yield\n      同义词: 生じる\n    ',
  },
  {
    question: '生地',
    answer: 'kiji',
    explantion: '\n      汉字: 生地\n      读音: きじ\n      意思: birthplace\n      来源: waller\n      同义词: 素地\n    ',
  },
  {
    question: '生物',
    answer: 'seibutsu',
    explantion: '\n      汉字: 生物\n      读音: せいぶつ\n      意思: raw food\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '生命',
    answer: 'seimei',
    explantion: '\n      汉字: 生命\n      读音: せいめい\n      意思: life\n      来源: existence\n      同义词: 生命\n    ',
  },
  {
    question: '盛り',
    answer: 'sakari',
    explantion: '\n      汉字: 盛り\n      读音: さかり\n      意思: helping\n      来源: serving\n      同义词: 盛り\n    ',
  },
  {
    question: '精神',
    answer: 'seishin',
    explantion: '\n      汉字: 精神\n      读音: せいしん\n      意思: mind\n      来源: soul\n      同义词: 精神\n    ',
  },
  {
    question: '製造',
    answer: 'seizou',
    explantion: '\n      汉字: 製造\n      读音: せいぞう\n      意思: manufacture\n      来源: production\n      同义词: 製造\n    ',
  },
  {
    question: '製品',
    answer: 'seihin',
    explantion: '\n      汉字: 製品\n      读音: せいひん\n      意思: manufactured goods\n      来源: finished goods\n      同义词: 製品\n    ',
  },
  {
    question: '請求',
    answer: 'seikyu',
    explantion: '\n      汉字: 請求\n      读音: せいきゅう\n      意思: claim\n      来源: demand\n      同义词: 請求\n    ',
  },
  {
    question: '青年',
    answer: 'seinen',
    explantion: '\n      汉字: 青年\n      读音: せいねん\n      意思: youth\n      来源: young man\n      同义词: 青年\n    ',
  },
  {
    question: '税金',
    answer: 'zeikin',
    explantion: '\n      汉字: 税金\n      读音: ぜいきん\n      意思: tax\n      来源: duty\n      同义词: 税金\n    ',
  },
  {
    question: '石炭',
    answer: 'sekitan',
    explantion: '\n      汉字: 石炭\n      读音: せきたん\n      意思: coal\n      来源: waller\n      同义词: 石炭\n    ',
  },
  {
    question: '石油',
    answer: 'sekiyu',
    explantion: '\n      汉字: 石油\n      读音: せきゆ\n      意思: oil\n      来源: petroleum\n      同义词: 石油\n    ',
  },
  {
    question: '積もる',
    answer: 'tsumoru',
    explantion: '\n      汉字: 積もる\n      读音: つもる\n      意思: to pile up\n      来源: waller\n      同义词: 積る\n    ',
  },
  {
    question: '積極的',
    answer: 'sekkyokuteki',
    explantion: '\n      汉字: 積極的\n      读音: せっきょくてき\n      意思: positive\n      来源: active\n      同义词: 積極的\n    ',
  },
  {
    question: '責める',
    answer: 'semeru',
    explantion: '\n      汉字: 責める\n      读音: せめる\n      意思: to condemn\n      来源: to blame\n      同义词: 責める\n    ',
  },
  {
    question: '責任',
    answer: 'sekinin',
    explantion: '\n      汉字: 責任\n      读音: せきにん\n      意思: duty\n      来源: responsibility\n      同义词: 責任\n    ',
  },
  {
    question: '跡',
    answer: 'ato',
    explantion: '\n      汉字: 跡\n      读音: あと\n      意思: (1) trace\n      来源: tracks\n      同义词: 跡, 迹, 痕, 址\n    ',
  },
  {
    question: '切れ',
    answer: 'kire',
    explantion: '\n      汉字: 切れ\n      读音: きれ\n      意思: cloth\n      来源: piece\n      同义词: 切れ\n    ',
  },
  {
    question: '切れる',
    answer: 'kireru',
    explantion: '\n      汉字: 切れる\n      读音: きれる\n      意思: (1) to cut well\n      来源: to be sharp\n      同义词: 切れる, \n    ',
  },
  {
    question: '設計',
    answer: 'sekkei',
    explantion: '\n      汉字: 設計\n      读音: せっけい\n      意思: plan\n      来源: design\n      同义词: 設計\n    ',
  },
  {
    question: '設備',
    answer: 'setsubi',
    explantion: '\n      汉字: 設備\n      读音: せつび\n      意思: equipment\n      来源: device\n      同义词: 設備\n    ',
  },
  {
    question: '節',
    answer: 'fushi',
    explantion: '\n      汉字: 節\n      读音: ふし\n      意思: tune\n      来源: tone\n      同义词: 節\n    ',
  },
  {
    question: '節約',
    answer: 'setsuyaku',
    explantion: '\n      汉字: 節約\n      读音: せつやく\n      意思: economising\n      来源: saving\n      同义词: 節約\n    ',
  },
  {
    question: '説',
    answer: 'setsu',
    explantion: '\n      汉字: 説\n      读音: せつ\n      意思: theory\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '絶対',
    answer: 'zettai',
    explantion: '\n      汉字: 絶対\n      读音: ぜったい\n      意思: absolute\n      来源: unconditional\n      同义词: 絶対\n    ',
  },
  {
    question: '絶滅',
    answer: 'zetsumetsu',
    explantion: '\n      汉字: 絶滅\n      读音: ぜつめつ\n      意思: destruction\n      来源: extinction\n      同义词: 絶滅\n    ',
  },
  {
    question: '舌',
    answer: 'shita',
    explantion: '\n      汉字: 舌\n      读音: した\n      意思: tongue\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '先日',
    answer: 'senjitsu',
    explantion: '\n      汉字: 先日\n      读音: せんじつ\n      意思: the other day\n      来源: a few days ago\n      同义词: 先日\n    ',
  },
  {
    question: '占める',
    answer: 'shimeru',
    explantion: '\n      汉字: 占める\n      读音: しめる\n      意思: (1) to comprise\n      来源: to account for\n      同义词: 占める\n    ',
  },
  {
    question: '専攻',
    answer: 'senko',
    explantion: '\n      汉字: 専攻\n      读音: せんこう\n      意思: major subject\n      来源: special study\n      同义词: 専攻\n    ',
  },
  {
    question: '泉',
    answer: 'izumi',
    explantion: '\n      汉字: 泉\n      读音: いずみ\n      意思: spring\n      来源: fountain\n      同义词: 泉\n    ',
  },
  {
    question: '選手',
    answer: 'senshiyu',
    explantion: '\n      汉字: 選手\n      读音: せんしゅ\n      意思: (1) player (in game)\n      来源: (2) team\n      同义词: 選手\n    ',
  },
  {
    question: '選択',
    answer: 'sentaku',
    explantion: '\n      汉字: 選択\n      读音: せんたく\n      意思: selection\n      来源: choice\n      同义词: 選択\n    ',
  },
  {
    question: '前者',
    answer: 'zensha',
    explantion: '\n      汉字: 前者\n      读音: ぜんしゃ\n      意思: the former\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '前進',
    answer: 'zenshin',
    explantion: '\n      汉字: 前進\n      读音: ぜんしん\n      意思: advance\n      来源: drive\n      同义词: 前進\n    ',
  },
  {
    question: '善',
    answer: 'zen',
    explantion: '\n      汉字: 善\n      读音: ぜん\n      意思: good\n      来源: goodness\n      同义词: 善\n    ',
  },
  {
    question: '全',
    answer: 'zen',
    explantion: '\n      汉字: 全\n      读音: ぜん\n      意思: all\n      来源: whole\n      同义词: 全\n    ',
  },
  {
    question: '全く',
    answer: 'mattaku',
    explantion: '\n      汉字: 全く\n      读音: まったく\n      意思: really\n      来源: truly\n      同义词: 全く, \n    ',
  },
  {
    question: '全員',
    answer: 'zenin',
    explantion: '\n      汉字: 全員\n      读音: ぜんいん\n      意思: all members (unanimity)\n      来源: all hands\n      同义词: 全員, 全員\n    ',
  },
  {
    question: '全体',
    answer: 'zentai',
    explantion: '\n      汉字: 全体\n      读音: ぜんたい\n      意思: whole\n      来源: entirety\n      同义词: 全体\n    ',
  },
  {
    question: '粗末',
    answer: 'somatsu',
    explantion: '\n      汉字: 粗末\n      读音: そまつ\n      意思: crude\n      来源: rough\n      同义词: 粗末\n    ',
  },
  {
    question: '素晴らしい',
    answer: 'subarashii',
    explantion: '\n      汉字: 素晴らしい\n      读音: すばらしい\n      意思: wonderful\n      来源: splendid\n      同义词: 素晴らしい\n    ',
  },
  {
    question: '組',
    answer: 'kumi',
    explantion: '\n      汉字: 組\n      读音: くみ\n      意思: class\n      来源: group\n      同义词: 組, 組み\n    ',
  },
  {
    question: '組む',
    answer: 'kumu',
    explantion: '\n      汉字: 組む\n      读音: くむ\n      意思: to put together\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '組合',
    answer: 'kumiai',
    explantion: '\n      汉字: 組合\n      读音: くみあい\n      意思: association\n      来源: union\n      同义词: 組合, 組み合い\n    ',
  },
  {
    question: '組織',
    answer: 'soshiki',
    explantion: '\n      汉字: 組織\n      读音: そしき\n      意思: (1) organization\n      来源: (2) structure\n      同义词: 組織, 組織, 組職, 組職\n    ',
  },
  {
    question: '訴える',
    answer: 'uttaeru',
    explantion: '\n      汉字: 訴える\n      读音: うったえる\n      意思: to sue (a person)\n      来源: to resort to\n      同义词: 訴える\n    ',
  },
  {
    question: '鼠',
    answer: 'nezumi',
    explantion: '\n      汉字: 鼠\n      读音: ねずみ\n      意思: (1) mouse\n      来源: rat\n      同义词: 鼠, , , 鼠, \n    ',
  },
  {
    question: '双子',
    answer: 'futago',
    explantion: '\n      汉字: 双子\n      读音: ふたご\n      意思: twins\n      来源: a twin\n      同义词: 双子, 双子, 二子, ふた子\n    ',
  },
  {
    question: '想像',
    answer: 'sozou',
    explantion: '\n      汉字: 想像\n      读音: そうぞう\n      意思: imagination\n      来源: guess\n      同义词: 想像\n    ',
  },
  {
    question: '操作',
    answer: 'sosa',
    explantion: '\n      汉字: 操作\n      读音: そうさ\n      意思: operation\n      来源: management\n      同义词: 操作\n    ',
  },
  {
    question: '巣',
    answer: 'su',
    explantion: '\n      汉字: 巣\n      读音: す\n      意思: nest\n      来源: rookery\n      同义词: 巣, 栖\n    ',
  },
  {
    question: '相手',
    answer: 'aite',
    explantion: '\n      汉字: 相手\n      读音: あいて\n      意思: companion\n      来源: partner\n      同义词: 相手\n    ',
  },
  {
    question: '相続',
    answer: 'sozoku',
    explantion: '\n      汉字: 相続\n      读音: そうぞく\n      意思: succession\n      来源: inheritance\n      同义词: 相続\n    ',
  },
  {
    question: '相当',
    answer: 'soto',
    explantion: '\n      汉字: 相当\n      读音: そうとう\n      意思: suitable\n      来源: fair\n      同义词: 相当\n    ',
  },
  {
    question: '装置',
    answer: 'sochi',
    explantion: '\n      汉字: 装置\n      读音: そうち\n      意思: equipment\n      来源: installation\n      同义词: 装置\n    ',
  },
  {
    question: '霜',
    answer: 'shimo',
    explantion: '\n      汉字: 霜\n      读音: しも\n      意思: frost\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '騒ぎ',
    answer: 'sawagi',
    explantion: '\n      汉字: 騒ぎ\n      读音: さわぎ\n      意思: uproar\n      来源: disturbance\n      同义词: 騒ぎ\n    ',
  },
  {
    question: '騒音',
    answer: 'soon',
    explantion: '\n      汉字: 騒音\n      读音: そうおん\n      意思: noise\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '増す',
    answer: 'masu',
    explantion: '\n      汉字: 増す\n      读音: ます\n      意思: to increase\n      来源: to grow\n      同义词: 増す\n    ',
  },
  {
    question: '増加',
    answer: 'zouka',
    explantion: '\n      汉字: 増加\n      读音: ぞうか\n      意思: increase\n      来源: addition\n      同义词: 増加\n    ',
  },
  {
    question: '贈る',
    answer: 'okuru',
    explantion: '\n      汉字: 贈る\n      读音: おくる\n      意思: to send\n      来源: to give to\n      同义词: 贈る\n    ',
  },
  {
    question: '息',
    answer: 'iki',
    explantion: '\n      汉字: 息\n      读音: いき\n      意思: breath\n      来源: tone\n      同义词: 息, 息\n    ',
  },
  {
    question: '束',
    answer: 'taba',
    explantion: '\n      汉字: 束\n      读音: たば\n      意思: handbreadth\n      来源: bundle\n      同义词: 束, 把\n    ',
  },
  {
    question: '速度',
    answer: 'sokudo',
    explantion: '\n      汉字: 速度\n      读音: そくど\n      意思: speed\n      来源: velocity\n      同义词: 速度\n    ',
  },
  {
    question: '袖',
    answer: 'sode',
    explantion: '\n      汉字: 袖\n      读音: そで\n      意思: sleeve\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '存在',
    answer: 'sonzai',
    explantion: '\n      汉字: 存在\n      读音: そんざい\n      意思: existence\n      来源: being\n      同义词: 存在\n    ',
  },
  {
    question: '孫',
    answer: 'mago',
    explantion: '\n      汉字: 孫\n      读音: まご\n      意思: grandchild\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '尊敬',
    answer: 'sonkei',
    explantion: '\n      汉字: 尊敬\n      读音: そんけい\n      意思: respect\n      来源: esteem\n      同义词: 尊敬\n    ',
  },
  {
    question: '尊重',
    answer: 'sonchou',
    explantion: '\n      汉字: 尊重\n      读音: そんちょう\n      意思: respect\n      来源: esteem\n      同义词: 尊重\n    ',
  },
  {
    question: '損',
    answer: 'son',
    explantion: '\n      汉字: 損\n      读音: そん\n      意思: loss\n      来源: disadvantage\n      同义词: 損\n    ',
  },
  {
    question: '損害',
    answer: 'songai',
    explantion: '\n      汉字: 損害\n      读音: そんがい\n      意思: damage\n      来源: injury\n      同义词: 損害\n    ',
  },
  {
    question: '多少',
    answer: 'tasho',
    explantion: '\n      汉字: 多少\n      读音: たしょう\n      意思: more or less\n      来源: somewhat\n      同义词: 多少\n    ',
  },
  {
    question: '太陽',
    answer: 'taiyou',
    explantion: '\n      汉字: 太陽\n      读音: たいよう\n      意思: sun\n      来源: solar\n      同义词: 太陽\n    ',
  },
  {
    question: '打つ',
    answer: 'butsu',
    explantion: '\n      汉字: 打つ\n      读音: ぶつ\n      意思: to hit\n      来源: to strike\n      同义词: 打つ, , 撃つ, 撲つ\n    ',
  },
  {
    question: '駄目',
    answer: 'dame',
    explantion: '\n      汉字: 駄目\n      读音: だめ\n      意思: useless\n      来源: no good\n      同义词: 駄目\n    ',
  },
  {
    question: '体育',
    answer: 'taiiku',
    explantion: '\n      汉字: 体育\n      读音: たいいく\n      意思: physical education\n      来源: gymnastics\n      同义词: 体育, 体育\n    ',
  },
  {
    question: '体温',
    answer: 'taion',
    explantion: '\n      汉字: 体温\n      读音: たいおん\n      意思: temperature (body)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '対',
    answer: 'tai',
    explantion: '\n      汉字: 対\n      读音: たい\n      意思: pair\n      来源: couple\n      同义词: 対, 對\n    ',
  },
  {
    question: '対象',
    answer: 'taisho',
    explantion: '\n      汉字: 対象\n      读音: たいしょう\n      意思: target\n      来源: object (of worship\n      同义词: 対象\n    ',
  },
  {
    question: '帯',
    answer: 'obi',
    explantion: '\n      汉字: 帯\n      读音: おび\n      意思: band (e.g. conduction\n      来源:  valence)\n      同义词: 帯, 帯, 帶, 帶\n    ',
  },
  {
    question: '怠ける',
    answer: 'namakeru',
    explantion: '\n      汉字: 怠ける\n      读音: なまける\n      意思: to be idle\n      来源: to neglect\n      同义词: 怠ける, 懶ける\n    ',
  },
  {
    question: '態度',
    answer: 'taido',
    explantion: '\n      汉字: 態度\n      读音: たいど\n      意思: attitude\n      来源: manner\n      同义词: 態度\n    ',
  },
  {
    question: '滞在',
    answer: 'taizai',
    explantion: '\n      汉字: 滞在\n      读音: たいざい\n      意思: stay\n      来源: sojourn\n      同义词: 滞在\n    ',
  },
  {
    question: '袋',
    answer: 'fukuro',
    explantion: '\n      汉字: 袋\n      读音: ふくろ\n      意思: bag\n      来源: sack\n      同义词: 袋, 嚢\n    ',
  },
  {
    question: '貸し',
    answer: 'kashi',
    explantion: '\n      汉字: 貸し\n      读音: かし\n      意思: loan\n      来源: lending\n      同义词: 貸し, 貸\n    ',
  },
  {
    question: '逮捕',
    answer: 'taiho',
    explantion: '\n      汉字: 逮捕\n      读音: たいほ\n      意思: arrest\n      来源: apprehension\n      同义词: 逮捕\n    ',
  },
  {
    question: '代金',
    answer: 'daikin',
    explantion: '\n      汉字: 代金\n      读音: だいきん\n      意思: price\n      来源: payment\n      同义词: 代金\n    ',
  },
  {
    question: '代表',
    answer: 'daihyou',
    explantion: '\n      汉字: 代表\n      读音: だいひょう\n      意思: representative\n      来源: representation\n      同义词: 代表\n    ',
  },
  {
    question: '代理',
    answer: 'dairi',
    explantion: '\n      汉字: 代理\n      读音: だいり\n      意思: representation\n      来源: agency\n      同义词: 代理\n    ',
  },
  {
    question: '台',
    answer: 'dai',
    explantion: '\n      汉字: 台\n      读音: だい\n      意思: stand\n      来源: rack\n      同义词: 台\n    ',
  },
  {
    question: '大いに',
    answer: 'oini',
    explantion: '\n      汉字: 大いに\n      读音: おおいに\n      意思: very\n      来源: much\n      同义词: 大いに\n    ',
  },
  {
    question: '大した',
    answer: 'taishita',
    explantion: '\n      汉字: 大した\n      读音: たいした\n      意思: considerable\n      来源: great\n      同义词: 大した\n    ',
  },
  {
    question: '大家',
    answer: 'ooya',
    explantion: '\n      汉字: 大家\n      读音: おおや\n      意思: rich family\n      来源: distinguished family\n      同义词: 大家, 大屋\n    ',
  },
  {
    question: '大会',
    answer: 'taikai',
    explantion: '\n      汉字: 大会\n      读音: たいかい\n      意思: convention\n      来源: tournament\n      同义词: 大会\n    ',
  },
  {
    question: '大気',
    answer: 'taiki',
    explantion: '\n      汉字: 大気\n      读音: たいき\n      意思: atmosphere\n      来源: waller\n      同义词: 大氣\n    ',
  },
  {
    question: '大使',
    answer: 'taishi',
    explantion: '\n      汉字: 大使\n      读音: たいし\n      意思: ambassador\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大臣',
    answer: 'daijin',
    explantion: '\n      汉字: 大臣\n      读音: だいじん\n      意思: cabinet minister\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大戦',
    answer: 'taisen',
    explantion: '\n      汉字: 大戦\n      读音: たいせん\n      意思: great war\n      来源: great battle\n      同义词: 大戦\n    ',
  },
  {
    question: '大統領',
    answer: 'daitouryo',
    explantion: '\n      汉字: 大統領\n      读音: だいとうりょう\n      意思: president\n      来源: chief executive\n      同义词: 大統領\n    ',
  },
  {
    question: '大半',
    answer: 'taihan',
    explantion: '\n      汉字: 大半\n      读音: たいはん\n      意思: majority\n      来源: mostly\n      同义词: 大半\n    ',
  },
  {
    question: '大部分',
    answer: 'daibubun',
    explantion: '\n      汉字: 大部分\n      读音: だいぶぶん\n      意思: most part\n      来源: greater part\n      同义词: 大部分\n    ',
  },
  {
    question: '大陸',
    answer: 'tairiku',
    explantion: '\n      汉字: 大陸\n      读音: たいりく\n      意思: continent\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '題',
    answer: 'dai',
    explantion: '\n      汉字: 題\n      读音: だい\n      意思: title\n      来源: subject\n      同义词: 題\n    ',
  },
  {
    question: '宅',
    answer: 'taku',
    explantion: '\n      汉字: 宅\n      读音: たく\n      意思: house\n      来源: home\n      同义词: 宅\n    ',
  },
  {
    question: '叩く',
    answer: 'tataku',
    explantion: '\n      汉字: 叩く\n      读音: たたく\n      意思: to strike\n      来源: to clap\n      同义词: 叩く, 敲く\n    ',
  },
  {
    question: '達する',
    answer: 'tassuru',
    explantion: '\n      汉字: 達する\n      读音: たっする\n      意思: to reach\n      来源: to get to\n      同义词: 達する\n    ',
  },
  {
    question: '奪う',
    answer: 'ubau',
    explantion: '\n      汉字: 奪う\n      读音: うばう\n      意思: to snatch away\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '単なる',
    answer: 'tannaru',
    explantion: '\n      汉字: 単なる\n      读音: たんなる\n      意思: mere\n      来源: simple\n      同义词: 単なる\n    ',
  },
  {
    question: '単に',
    answer: 'tanni',
    explantion: '\n      汉字: 単に\n      读音: たんに\n      意思: simply\n      来源: merely\n      同义词: 単に\n    ',
  },
  {
    question: '単位',
    answer: 'tani',
    explantion: '\n      汉字: 単位\n      读音: たんい\n      意思: unit\n      来源: denomination\n      同义词: 単位\n    ',
  },
  {
    question: '単語',
    answer: 'tango',
    explantion: '\n      汉字: 単語\n      读音: たんご\n      意思: word\n      来源: vocabulary\n      同义词: 単語\n    ',
  },
  {
    question: '単純',
    answer: 'tanjun',
    explantion: '\n      汉字: 単純\n      读音: たんじゅん\n      意思: simplicity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '担当',
    answer: 'tantou',
    explantion: '\n      汉字: 担当\n      读音: たんとう\n      意思: (in) charge\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '誕生',
    answer: 'tanjo',
    explantion: '\n      汉字: 誕生\n      读音: たんじょう\n      意思: birth\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '団体',
    answer: 'dantai',
    explantion: '\n      汉字: 団体\n      读音: だんたい\n      意思: organization\n      来源: association\n      同义词: 団体\n    ',
  },
  {
    question: '断る',
    answer: 'kotowaru',
    explantion: '\n      汉字: 断る\n      读音: ことわる\n      意思: to refuse\n      来源: to decline\n      同义词: 断る, 断わる\n    ',
  },
  {
    question: '男の人',
    answer: 'otokonohito',
    explantion: '\n      汉字: 男の人\n      读音: おとこのひと\n      意思: man\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '男子',
    answer: 'danshi',
    explantion: '\n      汉字: 男子\n      读音: だんし\n      意思: youth\n      来源: young man\n      同义词: 男子\n    ',
  },
  {
    question: '知らせ',
    answer: 'shirase',
    explantion: '\n      汉字: 知らせ\n      读音: しらせ\n      意思: notice\n      来源: waller\n      同义词: 報せ\n    ',
  },
  {
    question: '知恵',
    answer: 'chie',
    explantion: '\n      汉字: 知恵\n      读音: ちえ\n      意思: wisdom\n      来源: wit\n      同义词: 知恵, 智恵, 智慧\n    ',
  },
  {
    question: '知事',
    answer: 'chiji',
    explantion: '\n      汉字: 知事\n      读音: ちじ\n      意思: prefectural governor\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '知識',
    answer: 'chishiki',
    explantion: '\n      汉字: 知識\n      读音: ちしき\n      意思: knowledge\n      来源: information\n      同义词: 知識, 智識\n    ',
  },
  {
    question: '知能',
    answer: 'chinou',
    explantion: '\n      汉字: 知能\n      读音: ちのう\n      意思: intelligence\n      来源: brains\n      同义词: 知能, 智能\n    ',
  },
  {
    question: '地',
    answer: 'chi',
    explantion: '\n      汉字: 地\n      读音: ち\n      意思: earth\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '地位',
    answer: 'chii',
    explantion: '\n      汉字: 地位\n      读音: ちい\n      意思: (social) position\n      来源: status\n      同义词: 地位\n    ',
  },
  {
    question: '地域',
    answer: 'chiiki',
    explantion: '\n      汉字: 地域\n      读音: ちいき\n      意思: area\n      来源: region\n      同义词: 地域\n    ',
  },
  {
    question: '地下',
    answer: 'chika',
    explantion: '\n      汉字: 地下\n      读音: ちか\n      意思: basement\n      来源: underground\n      同义词: 地下\n    ',
  },
  {
    question: '地球',
    answer: 'chikyu',
    explantion: '\n      汉字: 地球\n      读音: ちきゅう\n      意思: the earth\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '地区',
    answer: 'chiku',
    explantion: '\n      汉字: 地区\n      读音: ちく\n      意思: district\n      来源: section\n      同义词: 地区\n    ',
  },
  {
    question: '地平線',
    answer: 'chieisen',
    explantion: '\n      汉字: 地平線\n      读音: ちへいせん\n      意思: horizon\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '地方',
    answer: 'chiho',
    explantion: '\n      汉字: 地方\n      读音: ちほう\n      意思: area\n      来源: locality\n      同义词: 地方\n    ',
  },
  {
    question: '遅刻',
    answer: 'chikoku',
    explantion: '\n      汉字: 遅刻\n      读音: ちこく\n      意思: lateness\n      来源: late coming\n      同义词: 遅刻\n    ',
  },
  {
    question: '茶',
    answer: 'cha',
    explantion: '\n      汉字: 茶\n      读音: ちゃ\n      意思: tea\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '中央',
    answer: 'chiyuuou',
    explantion: '\n      汉字: 中央\n      读音: ちゅうおう\n      意思: centre\n      来源: central\n      同义词: 中央\n    ',
  },
  {
    question: '中学',
    answer: 'chiyuugaku',
    explantion: '\n      汉字: 中学\n      读音: ちゅうがく\n      意思: middle school\n      来源: junior high school\n      同义词: 中学\n    ',
  },
  {
    question: '中古',
    answer: 'chiyuuko',
    explantion: '\n      汉字: 中古\n      读音: ちゅうこ\n      意思: (1) used\n      来源: second-hand\n      同义词: 中古, 中古\n    ',
  },
  {
    question: '中止',
    answer: 'chushi',
    explantion: '\n      汉字: 中止\n      读音: ちゅうし\n      意思: suspension\n      来源: stoppage\n      同义词: 中止\n    ',
  },
  {
    question: '中心',
    answer: 'chushin',
    explantion: '\n      汉字: 中心\n      读音: ちゅうしん\n      意思: center\n      来源: core\n      同义词: 中心\n    ',
  },
  {
    question: '仲',
    answer: 'naka',
    explantion: '\n      汉字: 仲\n      读音: なか\n      意思: relation\n      来源: relationship\n      同义词: 仲\n    ',
  },
  {
    question: '仲間',
    answer: 'nakama',
    explantion: '\n      汉字: 仲間\n      读音: なかま\n      意思: company\n      来源: fellow\n      同义词: 仲間\n    ',
  },
  {
    question: '注',
    answer: 'chiyuu',
    explantion: '\n      汉字: 注\n      读音: ちゅう\n      意思: annotation\n      来源: explanatory note\n      同义词: 注, 註\n    ',
  },
  {
    question: '注文',
    answer: 'chiyuumon',
    explantion: '\n      汉字: 注文\n      读音: ちゅうもん\n      意思: order\n      来源: request\n      同义词: 注文, 註文\n    ',
  },
  {
    question: '注目',
    answer: 'chiyuumoku',
    explantion: '\n      汉字: 注目\n      读音: ちゅうもく\n      意思: notice\n      来源: attention\n      同义词: 注目\n    ',
  },
  {
    question: '駐車',
    answer: 'chushiya',
    explantion: '\n      汉字: 駐車\n      读音: ちゅうしゃ\n      意思: parking (e.g. car)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '著者',
    answer: 'chosha',
    explantion: '\n      汉字: 著者\n      读音: ちょしゃ\n      意思: author\n      来源: writer\n      同义词: 著者\n    ',
  },
  {
    question: '貯金',
    answer: 'chokin',
    explantion: '\n      汉字: 貯金\n      读音: ちょきん\n      意思: (bank) savings\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '張る',
    answer: 'haru',
    explantion: '\n      汉字: 張る\n      读音: はる\n      意思: to stick\n      来源: to paste\n      同义词: 張る\n    ',
  },
  {
    question: '眺める',
    answer: 'nagameru',
    explantion: '\n      汉字: 眺める\n      读音: ながめる\n      意思: to view\n      来源: to gaze at\n      同义词: 眺める\n    ',
  },
  {
    question: '調査',
    answer: 'chousa',
    explantion: '\n      汉字: 調査\n      读音: ちょうさ\n      意思: investigation\n      来源: examination\n      同义词: 調査\n    ',
  },
  {
    question: '調子',
    answer: 'choshi',
    explantion: '\n      汉字: 調子\n      读音: ちょうし\n      意思: tune\n      来源: tone\n      同义词: 調子\n    ',
  },
  {
    question: '長期',
    answer: 'chouki',
    explantion: '\n      汉字: 長期\n      读音: ちょうき\n      意思: long time period\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '頂上',
    answer: 'chiyoujou',
    explantion: '\n      汉字: 頂上\n      读音: ちょうじょう\n      意思: top\n      来源: summit\n      同义词: 頂上\n    ',
  },
  {
    question: '頂戴',
    answer: 'chodai',
    explantion: '\n      汉字: 頂戴\n      读音: ちょうだい\n      意思: (1) please do for me (preceded by -te)\n      来源: (2) reception\n      同义词: 頂戴, , 頂だい, 頂載\n    ',
  },
  {
    question: '直',
    answer: 'nao',
    explantion: '\n      汉字: 直\n      读音: なお\n      意思: straight\n      来源: mischief\n      同义词: 直\n    ',
  },
  {
    question: '直ちに',
    answer: 'tadachini',
    explantion: '\n      汉字: 直ちに\n      读音: ただちに\n      意思: at once\n      来源: immediately\n      同义词: 直ちに\n    ',
  },
  {
    question: '直に',
    answer: 'jikani',
    explantion: '\n      汉字: 直に\n      读音: じかに\n      意思: immediately\n      来源: readily\n      同义词: 直に, \n    ',
  },
  {
    question: '直接',
    answer: 'chokusetsu',
    explantion: '\n      汉字: 直接\n      读音: ちょくせつ\n      意思: direct\n      来源: immediate\n      同义词: 直接\n    ',
  },
  {
    question: '沈む',
    answer: 'shizumu',
    explantion: '\n      汉字: 沈む\n      读音: しずむ\n      意思: to sink\n      来源: to feel depressed\n      同义词: 沈む\n    ',
  },
  {
    question: '追う',
    answer: 'ou',
    explantion: '\n      汉字: 追う\n      读音: おう\n      意思: to chase\n      来源: to run after\n      同义词: 追う, 逐う\n    ',
  },
  {
    question: '通じる',
    answer: 'tsujiru',
    explantion: '\n      汉字: 通じる\n      读音: つうじる\n      意思: to run to\n      来源: to lead to\n      同义词: 通じる\n    ',
  },
  {
    question: '通す',
    answer: 'tosu',
    explantion: '\n      汉字: 通す\n      读音: とおす\n      意思: to let pass\n      来源: to overlook\n      同义词: 通す, 徹す, 透す\n    ',
  },
  {
    question: '通り',
    answer: 'tori',
    explantion: '\n      汉字: 通り\n      读音: とおり\n      意思: in accordance with ~\n      来源: following ~\n      同义词: 通り\n    ',
  },
  {
    question: '通り過ぎる',
    answer: 'torisugiru',
    explantion: '\n      汉字: 通り過ぎる\n      读音: とおりすぎる\n      意思: to pass\n      来源: to pass through\n      同义词: 通り過ぎる, 通りすぎる\n    ',
  },
  {
    question: '通過',
    answer: 'tsuka',
    explantion: '\n      汉字: 通過\n      读音: つうか\n      意思: passage through\n      来源: passing\n      同义词: 通過\n    ',
  },
  {
    question: '通学',
    answer: 'tsugaku',
    explantion: '\n      汉字: 通学\n      读音: つうがく\n      意思: commuting to school\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '通行',
    answer: 'tsuko',
    explantion: '\n      汉字: 通行\n      读音: つうこう\n      意思: passage\n      来源: passing\n      同义词: 通行\n    ',
  },
  {
    question: '通信',
    answer: 'tsushin',
    explantion: '\n      汉字: 通信\n      读音: つうしん\n      意思: correspondence\n      来源: communication\n      同义词: 通信\n    ',
  },
  {
    question: '掴む',
    answer: 'tsukamu',
    explantion: '\n      汉字: 掴む\n      读音: つかむ\n      意思: to seize\n      来源: to catch\n      同义词: 掴む, , 摑む, 攫む, 把む, 捉む\n    ',
  },
  {
    question: '釣',
    answer: 'tsuri',
    explantion: '\n      汉字: 釣\n      读音: つり\n      意思: \n      来源: waller\n      同义词: 釣り, \n    ',
  },
  {
    question: '停留所',
    answer: 'teiriyuujo',
    explantion: '\n      汉字: 停留所\n      读音: ていりゅうじょ\n      意思: bus or tram stop\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '定期',
    answer: 'teiki',
    explantion: '\n      汉字: 定期\n      读音: ていき\n      意思: fixed term\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '底',
    answer: 'soko',
    explantion: '\n      汉字: 底\n      读音: そこ\n      意思: bottom\n      来源: sole\n      同义词: 底\n    ',
  },
  {
    question: '抵抗',
    answer: 'teiko',
    explantion: '\n      汉字: 抵抗\n      读音: ていこう\n      意思: electrical resistance\n      来源: resistance\n      同义词: 抵抗\n    ',
  },
  {
    question: '提案',
    answer: 'teian',
    explantion: '\n      汉字: 提案\n      读音: ていあん\n      意思: proposal\n      来源: proposition\n      同义词: 提案\n    ',
  },
  {
    question: '提出',
    answer: 'teishutsu',
    explantion: '\n      汉字: 提出\n      读音: ていしゅつ\n      意思: presentation\n      来源: submission\n      同义词: 提出, 堤出\n    ',
  },
  {
    question: '程度',
    answer: 'teido',
    explantion: '\n      汉字: 程度\n      读音: ていど\n      意思: degree\n      来源: amount\n      同义词: 程度\n    ',
  },
  {
    question: '諦める',
    answer: 'akirameru',
    explantion: '\n      汉字: 諦める\n      读音: あきらめる\n      意思: to give up\n      来源: to abandon\n      同义词: 諦める\n    ',
  },
  {
    question: '泥',
    answer: 'doro',
    explantion: '\n      汉字: 泥\n      读音: どろ\n      意思: mud\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '笛',
    answer: 'fue',
    explantion: '\n      汉字: 笛\n      读音: ふえ\n      意思: flute\n      来源: pipe\n      同义词: 笛, 笛\n    ',
  },
  {
    question: '適する',
    answer: 'tekisuru',
    explantion: '\n      汉字: 適する\n      读音: てきする\n      意思: to fit\n      来源: to suit\n      同义词: 適する\n    ',
  },
  {
    question: '適切',
    answer: 'tekisetsu',
    explantion: '\n      汉字: 適切\n      读音: てきせつ\n      意思: pertinent\n      来源: appropriate\n      同义词: 適切\n    ',
  },
  {
    question: '適度',
    answer: 'tekido',
    explantion: '\n      汉字: 適度\n      读音: てきど\n      意思: moderate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '適用',
    answer: 'tekiyo',
    explantion: '\n      汉字: 適用\n      读音: てきよう\n      意思: applying\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '溺れる',
    answer: 'oboreru',
    explantion: '\n      汉字: 溺れる\n      读音: おぼれる\n      意思: to be drowned\n      来源: to indulge in\n      同义词: 溺れる\n    ',
  },
  {
    question: '哲学',
    answer: 'tetsugaku',
    explantion: '\n      汉字: 哲学\n      读音: てつがく\n      意思: philosophy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '徹底',
    answer: 'tettei',
    explantion: '\n      汉字: 徹底\n      读音: てってい\n      意思: thoroughness\n      来源: completeness\n      同义词: 徹底\n    ',
  },
  {
    question: '徹夜',
    answer: 'tetsuya',
    explantion: '\n      汉字: 徹夜\n      读音: てつや\n      意思: all night\n      来源: all night vigil\n      同义词: 徹夜\n    ',
  },
  {
    question: '鉄',
    answer: 'tetsu',
    explantion: '\n      汉字: 鉄\n      读音: てつ\n      意思: iron\n      来源: waller\n      同义词: 鐵\n    ',
  },
  {
    question: '鉄道',
    answer: 'tetsudo',
    explantion: '\n      汉字: 鉄道\n      读音: てつどう\n      意思: railroad\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '典型',
    answer: 'tenkei',
    explantion: '\n      汉字: 典型\n      读音: てんけい\n      意思: type\n      来源: pattern\n      同义词: 典型\n    ',
  },
  {
    question: '天候',
    answer: 'tenko',
    explantion: '\n      汉字: 天候\n      读音: てんこう\n      意思: weather\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '天然',
    answer: 'tennen',
    explantion: '\n      汉字: 天然\n      读音: てんねん\n      意思: nature\n      来源: spontaneity\n      同义词: 天然\n    ',
  },
  {
    question: '伝統',
    answer: 'dentou',
    explantion: '\n      汉字: 伝統\n      读音: でんとう\n      意思: tradition\n      来源: convention\n      同义词: 伝統\n    ',
  },
  {
    question: '田',
    answer: 'ta',
    explantion: '\n      汉字: 田\n      读音: た\n      意思: rice field\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '電子',
    answer: 'denshi',
    explantion: '\n      汉字: 電子\n      读音: でんし\n      意思: electron\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '兎',
    answer: 'usagi',
    explantion: '\n      汉字: 兎\n      读音: うさぎ\n      意思: rabbit\n      来源: hare\n      同义词: 兎, , , 兎, 兔, 菟, \n    ',
  },
  {
    question: '登山',
    answer: 'tozan',
    explantion: '\n      汉字: 登山\n      读音: とざん\n      意思: mountain-climbing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '都',
    answer: 'miyako',
    explantion: '\n      汉字: 都\n      读音: みやこ\n      意思: capital\n      来源: waller\n      同义词: 京\n    ',
  },
  {
    question: '都会',
    answer: 'tokai',
    explantion: '\n      汉字: 都会\n      读音: とかい\n      意思: city\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '都市',
    answer: 'toshi',
    explantion: '\n      汉字: 都市\n      读音: とし\n      意思: town\n      来源: city\n      同义词: 都市\n    ',
  },
  {
    question: '努力',
    answer: 'doriyoku',
    explantion: '\n      汉字: 努力\n      读音: どりょく\n      意思: great effort\n      来源: exertion\n      同义词: 努力\n    ',
  },
  {
    question: '度',
    answer: 'tabi',
    explantion: '\n      汉字: 度\n      读音: たび\n      意思: counter for occurrences\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '度',
    answer: 'do',
    explantion: '\n      汉字: 度\n      读音: ど\n      意思: counter for occurrences\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '土',
    answer: 'tsuchi',
    explantion: '\n      汉字: 土\n      读音: つち\n      意思: earth\n      来源: soil\n      同义词: 土, 地, 地\n    ',
  },
  {
    question: '土産',
    answer: 'miyage',
    explantion: '\n      汉字: 土産\n      读音: みやげ\n      意思: present\n      来源: souvenir\n      同义词: 土産\n    ',
  },
  {
    question: '土地',
    answer: 'tochi',
    explantion: '\n      汉字: 土地\n      读音: とち\n      意思: plot of land\n      来源: lot\n      同义词: 土地, 土地, 土地, 土地\n    ',
  },
  {
    question: '土曜',
    answer: 'doyo',
    explantion: '\n      汉字: 土曜\n      读音: どよう\n      意思: Saturday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '倒す',
    answer: 'taosu',
    explantion: '\n      汉字: 倒す\n      读音: たおす\n      意思: to throw down\n      来源: to beat\n      同义词: 倒す, 斃す, 殪す, 仆す\n    ',
  },
  {
    question: '党',
    answer: 'tou',
    explantion: '\n      汉字: 党\n      读音: とう\n      意思: party (political)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '刀',
    answer: 'katana',
    explantion: '\n      汉字: 刀\n      读音: かたな\n      意思: sword\n      来源: saber\n      同义词: 刀, 刀\n    ',
  },
  {
    question: '塔',
    answer: 'tou',
    explantion: '\n      汉字: 塔\n      读音: とう\n      意思: tower\n      来源: pagoda\n      同义词: 塔\n    ',
  },
  {
    question: '投票',
    answer: 'touhyou',
    explantion: '\n      汉字: 投票\n      读音: とうひょう\n      意思: voting\n      来源: poll\n      同义词: 投票\n    ',
  },
  {
    question: '当たる',
    answer: 'ataru',
    explantion: '\n      汉字: 当たる\n      读音: あたる\n      意思: to be hit\n      来源: to be successful\n      同义词: 当たる, 当る, 中る, 中たる\n    ',
  },
  {
    question: '当てる',
    answer: 'ateru',
    explantion: '\n      汉字: 当てる\n      读音: あてる\n      意思: to hit\n      来源: to apply a patch\n      同义词: 当てる\n    ',
  },
  {
    question: '当時',
    answer: 'toji',
    explantion: '\n      汉字: 当時\n      读音: とうじ\n      意思: at that time\n      来源: in those days\n      同义词: 当時\n    ',
  },
  {
    question: '等しい',
    answer: 'hitoshii',
    explantion: '\n      汉字: 等しい\n      读音: ひとしい\n      意思: equal\n      来源: waller\n      同义词: 均しい, 斉しい\n    ',
  },
  {
    question: '答案',
    answer: 'touan',
    explantion: '\n      汉字: 答案\n      读音: とうあん\n      意思: examination paper\n      来源: examination script\n      同义词: 答案\n    ',
  },
  {
    question: '到着',
    answer: 'touchaku',
    explantion: '\n      汉字: 到着\n      读音: とうちゃく\n      意思: arrival\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '豆',
    answer: 'mame',
    explantion: '\n      汉字: 豆\n      读音: まめ\n      意思: beans\n      来源: peas\n      同义词: 豆, , 荳, 菽, \n    ',
  },
  {
    question: '頭痛',
    answer: 'zutsuu',
    explantion: '\n      汉字: 頭痛\n      读音: ずつう\n      意思: headache\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '働き',
    answer: 'hataraki',
    explantion: '\n      汉字: 働き\n      读音: はたらき\n      意思: work\n      来源: labor\n      同义词: 働き\n    ',
  },
  {
    question: '動かす',
    answer: 'ugokasu',
    explantion: '\n      汉字: 動かす\n      读音: うごかす\n      意思: to move\n      来源: to shift\n      同义词: 動かす\n    ',
  },
  {
    question: '動詞',
    answer: 'doshi',
    explantion: '\n      汉字: 動詞\n      读音: どうし\n      意思: verb\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '同一',
    answer: 'doitsu',
    explantion: '\n      汉字: 同一\n      读音: どういつ\n      意思: identity\n      来源: sameness\n      同义词: 同一\n    ',
  },
  {
    question: '同時',
    answer: 'doji',
    explantion: '\n      汉字: 同時\n      读音: どうじ\n      意思: simultaneous(ly)\n      来源: concurrent\n      同义词: 同時\n    ',
  },
  {
    question: '同様',
    answer: 'doyo',
    explantion: '\n      汉字: 同様\n      读音: どうよう\n      意思: identical\n      来源: equal to\n      同义词: 同様\n    ',
  },
  {
    question: '同僚',
    answer: 'doryo',
    explantion: '\n      汉字: 同僚\n      读音: どうりょう\n      意思: coworker\n      来源: colleague\n      同义词: 同僚\n    ',
  },
  {
    question: '道徳',
    answer: 'dotoku',
    explantion: '\n      汉字: 道徳\n      读音: どうとく\n      意思: morals\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '道路',
    answer: 'doro',
    explantion: '\n      汉字: 道路\n      读音: どうろ\n      意思: road\n      来源: highway\n      同义词: 道路\n    ',
  },
  {
    question: '得る',
    answer: 'uru',
    explantion: '\n      汉字: 得る\n      读音: うる\n      意思: to get\n      来源: to gain\n      同义词: 得る\n    ',
  },
  {
    question: '得意',
    answer: 'tokui',
    explantion: '\n      汉字: 得意\n      读音: とくい\n      意思: pride\n      来源: triumph\n      同义词: 得意\n    ',
  },
  {
    question: '特徴',
    answer: 'tokuchou',
    explantion: '\n      汉字: 特徴\n      读音: とくちょう\n      意思: feature\n      来源: characteristic\n      同义词: 特徴\n    ',
  },
  {
    question: '毒',
    answer: 'doku',
    explantion: '\n      汉字: 毒\n      读音: どく\n      意思: poison\n      来源: toxicant\n      同义词: 毒\n    ',
  },
  {
    question: '独身',
    answer: 'dokushin',
    explantion: '\n      汉字: 独身\n      读音: どくしん\n      意思: bachelorhood\n      来源: single\n      同义词: 独身\n    ',
  },
  {
    question: '独特',
    answer: 'dokutoku',
    explantion: '\n      汉字: 独特\n      读音: どくとく\n      意思: peculiarity\n      来源: uniqueness\n      同义词: 独特, 独得\n    ',
  },
  {
    question: '独立',
    answer: 'dokuritsu',
    explantion: '\n      汉字: 独立\n      读音: どくりつ\n      意思: independence (e.g. Ind. Day)\n      来源: self-support\n      同义词: 独立\n    ',
  },
  {
    question: '読み',
    answer: 'yomi',
    explantion: '\n      汉字: 読み\n      读音: よみ\n      意思: reading\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '読書',
    answer: 'dokusho',
    explantion: '\n      汉字: 読書\n      读音: どくしょ\n      意思: reading\n      来源: waller\n      同义词: 読書\n    ',
  },
  {
    question: '突然',
    answer: 'totsuzen',
    explantion: '\n      汉字: 突然\n      读音: とつぜん\n      意思: abruptly\n      来源: suddenly\n      同义词: 突然\n    ',
  },
  {
    question: '届く',
    answer: 'todoku',
    explantion: '\n      汉字: 届く\n      读音: とどく\n      意思: to reach\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '屯',
    answer: 'ton',
    explantion: '\n      汉字: 屯\n      读音: トン\n      意思: 1000 ton\n      来源: waller\n      同义词: , 噸, 瓲\n    ',
  },
  {
    question: '内容',
    answer: 'naiyo',
    explantion: '\n      汉字: 内容\n      读音: ないよう\n      意思: subject\n      来源: contents\n      同义词: 内容\n    ',
  },
  {
    question: '謎',
    answer: 'nazo',
    explantion: '\n      汉字: 謎\n      读音: なぞ\n      意思: riddle\n      来源: puzzle\n      同义词: 謎\n    ',
  },
  {
    question: '鍋',
    answer: 'nabe',
    explantion: '\n      汉字: 鍋\n      读音: なべ\n      意思: saucepan\n      来源: pot\n      同义词: 鍋\n    ',
  },
  {
    question: '縄',
    answer: 'nawa',
    explantion: '\n      汉字: 縄\n      读音: なわ\n      意思: rope\n      来源: hemp\n      同义词: 縄\n    ',
  },
  {
    question: '日光',
    answer: 'nitsuko',
    explantion: '\n      汉字: 日光\n      读音: にっこう\n      意思: sunlight\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '日常',
    answer: 'nichijiyou',
    explantion: '\n      汉字: 日常\n      读音: にちじょう\n      意思: ordinary\n      来源: regular\n      同义词: 日常\n    ',
  },
  {
    question: '日中',
    answer: 'nitchuu',
    explantion: '\n      汉字: 日中\n      读音: にっちゅう\n      意思: daytime\n      来源: broad daylight\n      同义词: 日中, 日中\n    ',
  },
  {
    question: '日付',
    answer: 'hizuke',
    explantion: '\n      汉字: 日付\n      读音: ひづけ\n      意思: date\n      来源: dating\n      同义词: 日付, 日付け, 日附\n    ',
  },
  {
    question: '日曜',
    answer: 'nichiyou',
    explantion: '\n      汉字: 日曜\n      读音: にちよう\n      意思: Sunday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '入場',
    answer: 'nyujo',
    explantion: '\n      汉字: 入場\n      读音: にゅうじょう\n      意思: entrance\n      来源: admission\n      同义词: 入場\n    ',
  },
  {
    question: '任せる',
    answer: 'makaseru',
    explantion: '\n      汉字: 任せる\n      读音: まかせる\n      意思: to entrust to another\n      来源: to leave to\n      同义词: 任せる, 委せる\n    ',
  },
  {
    question: '認める',
    answer: 'mitomeru',
    explantion: '\n      汉字: 認める\n      读音: みとめる\n      意思: to recognize\n      来源: to appreciate\n      同义词: 認める\n    ',
  },
  {
    question: '濡れる',
    answer: 'nureru',
    explantion: '\n      汉字: 濡れる\n      读音: ぬれる\n      意思: to get wet\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '熱心',
    answer: 'nesshin',
    explantion: '\n      汉字: 熱心\n      读音: ねっしん\n      意思: zeal\n      来源: enthusiasm\n      同义词: 熱心\n    ',
  },
  {
    question: '熱帯',
    answer: 'nettai',
    explantion: '\n      汉字: 熱帯\n      读音: ねったい\n      意思: tropics\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '熱中',
    answer: 'netchu',
    explantion: '\n      汉字: 熱中\n      读音: ねっちゅう\n      意思: nuts!\n      来源: enthusiasm\n      同义词: 熱中\n    ',
  },
  {
    question: '年間',
    answer: 'nenkan',
    explantion: '\n      汉字: 年間\n      读音: ねんかん\n      意思: year\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '年代',
    answer: 'nendai',
    explantion: '\n      汉字: 年代\n      读音: ねんだい\n      意思: age\n      来源: era\n      同义词: 年代\n    ',
  },
  {
    question: '年中',
    answer: 'nenjuu',
    explantion: '\n      汉字: 年中\n      读音: ねんじゅう\n      意思: whole year\n      来源: always\n      同义词: 年中, 年中, 年中, 年じゅう\n    ',
  },
  {
    question: '燃える',
    answer: 'moeru',
    explantion: '\n      汉字: 燃える\n      读音: もえる\n      意思: to burn\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '悩む',
    answer: 'nayamu',
    explantion: '\n      汉字: 悩む\n      读音: なやむ\n      意思: to be worried\n      来源: to be troubled\n      同义词: 悩む\n    ',
  },
  {
    question: '濃い',
    answer: 'koi',
    explantion: '\n      汉字: 濃い\n      读音: こい\n      意思: thick (as of color\n      来源:  liquid)\n      同义词: 濃い\n    ',
  },
  {
    question: '納得',
    answer: 'nattoku',
    explantion: '\n      汉字: 納得\n      读音: なっとく\n      意思: consent\n      来源: assent\n      同义词: 納得\n    ',
  },
  {
    question: '能',
    answer: 'no',
    explantion: '\n      汉字: 能\n      读音: のう\n      意思: being skilled in\n      来源: nicely\n      同义词: 能\n    ',
  },
  {
    question: '能力',
    answer: 'nouriyoku',
    explantion: '\n      汉字: 能力\n      读音: のうりょく\n      意思: ability\n      来源: faculty\n      同义词: 能力\n    ',
  },
  {
    question: '農家',
    answer: 'noka',
    explantion: '\n      汉字: 農家\n      读音: のうか\n      意思: farmer\n      来源: farm family\n      同义词: 農家\n    ',
  },
  {
    question: '農業',
    answer: 'nogyou',
    explantion: '\n      汉字: 農業\n      读音: のうぎょう\n      意思: agriculture\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '農民',
    answer: 'noumin',
    explantion: '\n      汉字: 農民\n      读音: のうみん\n      意思: farmers\n      来源: peasants\n      同义词: 農民\n    ',
  },
  {
    question: '波',
    answer: 'nami',
    explantion: '\n      汉字: 波\n      读音: なみ\n      意思: wave\n      来源: waller\n      同义词: 浪, 濤\n    ',
  },
  {
    question: '破る',
    answer: 'yaburu',
    explantion: '\n      汉字: 破る\n      读音: やぶる\n      意思: to tear\n      来源: to violate\n      同义词: 破る\n    ',
  },
  {
    question: '破産',
    answer: 'hasan',
    explantion: '\n      汉字: 破産\n      读音: はさん\n      意思: (personal) bankruptcy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '馬',
    answer: 'uma',
    explantion: '\n      汉字: 馬\n      读音: うま\n      意思: (1) horse\n      来源: (2) promoted bishop (shogi)\n      同义词: 馬, 馬, 馬, \n    ',
  },
  {
    question: '俳優',
    answer: 'haiyuu',
    explantion: '\n      汉字: 俳優\n      读音: はいゆう\n      意思: actor\n      来源: actress\n      同义词: 俳優\n    ',
  },
  {
    question: '背',
    answer: 'sei',
    explantion: '\n      汉字: 背\n      读音: せい\n      意思: height\n      来源: stature\n      同义词: 背, 脊\n    ',
  },
  {
    question: '配達',
    answer: 'haitatsu',
    explantion: '\n      汉字: 配達\n      读音: はいたつ\n      意思: delivery\n      来源: distribution\n      同义词: 配達, 配達\n    ',
  },
  {
    question: '梅',
    answer: 'ume',
    explantion: '\n      汉字: 梅\n      读音: うめ\n      意思: plum\n      来源: plum-tree\n      同义词: 梅, 梅, 楳, 楳, \n    ',
  },
  {
    question: '売れる',
    answer: 'ureru',
    explantion: '\n      汉字: 売れる\n      读音: うれる\n      意思: to be sold\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '博士',
    answer: 'hakase',
    explantion: '\n      汉字: 博士\n      读音: はかせ\n      意思: doctorate\n      来源: PhD\n      同义词: 博士\n    ',
  },
  {
    question: '博物館',
    answer: 'hakubutsukan',
    explantion: '\n      汉字: 博物館\n      读音: はくぶつかん\n      意思: museum\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '拍手',
    answer: 'hakushiyu',
    explantion: '\n      汉字: 拍手\n      读音: はくしゅ\n      意思: clapping hands\n      来源: applause\n      同义词: 拍手\n    ',
  },
  {
    question: '爆発',
    answer: 'bakuhatsu',
    explantion: '\n      汉字: 爆発\n      读音: ばくはつ\n      意思: explosion\n      来源: detonation\n      同义词: 爆発\n    ',
  },
  {
    question: '莫大',
    answer: 'bakudai',
    explantion: '\n      汉字: 莫大\n      读音: ばくだい\n      意思: enormous\n      来源: vast\n      同义词: 莫大, ばく大\n    ',
  },
  {
    question: '肌',
    answer: 'wada',
    explantion: '\n      汉字: 肌\n      读音: はだ\n      意思: skin\n      来源: waller\n      同义词: 肌, 膚, 膚\n    ',
  },
  {
    question: '畑',
    answer: 'hatake',
    explantion: '\n      汉字: 畑\n      读音: はたけ\n      意思: field\n      来源: waller\n      同义词: 畑, 畠, 畠\n    ',
  },
  {
    question: '発見',
    answer: 'hakken',
    explantion: '\n      汉字: 発見\n      读音: はっけん\n      意思: discovery\n      来源: detection\n      同义词: 発見\n    ',
  },
  {
    question: '発行',
    answer: 'hakko',
    explantion: '\n      汉字: 発行\n      读音: はっこう\n      意思: issue (publications)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '発車',
    answer: 'hassha',
    explantion: '\n      汉字: 発車\n      读音: はっしゃ\n      意思: departure of a vehicle\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '発達',
    answer: 'hattatsu',
    explantion: '\n      汉字: 発達\n      读音: はったつ\n      意思: development\n      来源: growth\n      同义词: 発達\n    ',
  },
  {
    question: '発展',
    answer: 'hatten',
    explantion: '\n      汉字: 発展\n      读音: はってん\n      意思: development\n      来源: growth\n      同义词: 発展\n    ',
  },
  {
    question: '発表',
    answer: 'happyo',
    explantion: '\n      汉字: 発表\n      读音: はっぴょう\n      意思: announcement\n      来源: publication\n      同义词: 発表\n    ',
  },
  {
    question: '発明',
    answer: 'hatsumei',
    explantion: '\n      汉字: 発明\n      读音: はつめい\n      意思: invention\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '髪の毛',
    answer: 'kaminoke',
    explantion: '\n      汉字: 髪の毛\n      读音: かみのけ\n      意思: hair (head)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '罰する',
    answer: 'bassuru',
    explantion: '\n      汉字: 罰する\n      读音: ばっする\n      意思: to punish\n      来源: to penalize\n      同义词: 罰する\n    ',
  },
  {
    question: '抜く',
    answer: 'nuku',
    explantion: '\n      汉字: 抜く\n      读音: ぬく\n      意思: to extract\n      来源: to omit\n      同义词: 抜く\n    ',
  },
  {
    question: '抜ける',
    answer: 'nukeru',
    explantion: '\n      汉字: 抜ける\n      读音: ぬける\n      意思: to come out\n      来源: to fall out\n      同义词: 抜ける, 脱ける\n    ',
  },
  {
    question: '判断',
    answer: 'handan',
    explantion: '\n      汉字: 判断\n      读音: はんだん\n      意思: judgement\n      来源: decision\n      同义词: 判断\n    ',
  },
  {
    question: '半ば',
    answer: 'nakaba',
    explantion: '\n      汉字: 半ば\n      读音: なかば\n      意思: middle\n      来源: half\n      同义词: 半ば, 中ば\n    ',
  },
  {
    question: '反抗',
    answer: 'hanko',
    explantion: '\n      汉字: 反抗\n      读音: はんこう\n      意思: opposition\n      来源: resistance\n      同义词: 反抗\n    ',
  },
  {
    question: '板',
    answer: 'ita',
    explantion: '\n      汉字: 板\n      读音: いた\n      意思: board\n      来源: plank\n      同义词: 板\n    ',
  },
  {
    question: '犯罪',
    answer: 'hanzai',
    explantion: '\n      汉字: 犯罪\n      读音: はんざい\n      意思: crime\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '犯人',
    answer: 'hannin',
    explantion: '\n      汉字: 犯人\n      读音: はんにん\n      意思: offender\n      来源: criminal\n      同义词: 犯人\n    ',
  },
  {
    question: '販売',
    answer: 'hanbai',
    explantion: '\n      汉字: 販売\n      读音: はんばい\n      意思: sale\n      来源: selling\n      同义词: 販売, \n    ',
  },
  {
    question: '範囲',
    answer: 'hani',
    explantion: '\n      汉字: 範囲\n      读音: はんい\n      意思: extent\n      来源: scope\n      同义词: 範囲\n    ',
  },
  {
    question: '飯',
    answer: 'meshi',
    explantion: '\n      汉字: 飯\n      读音: めし\n      意思: (sl) meals\n      来源: food\n      同义词: 飯\n    ',
  },
  {
    question: '否定',
    answer: 'hitei',
    explantion: '\n      汉字: 否定\n      读音: ひてい\n      意思: negation\n      来源: denial\n      同义词: 否定\n    ',
  },
  {
    question: '彼等',
    answer: 'karera',
    explantion: '\n      汉字: 彼等\n      读音: かれら\n      意思: they (usually male)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '悲しむ',
    answer: 'kanashimu',
    explantion: '\n      汉字: 悲しむ\n      读音: かなしむ\n      意思: to be sad\n      来源: to mourn for\n      同义词: 悲しむ, 哀しむ\n    ',
  },
  {
    question: '悲劇',
    answer: 'higeki',
    explantion: '\n      汉字: 悲劇\n      读音: ひげき\n      意思: tragedy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '批判',
    answer: 'hihan',
    explantion: '\n      汉字: 批判\n      读音: ひはん\n      意思: criticism\n      来源: judgement\n      同义词: 批判\n    ',
  },
  {
    question: '批評',
    answer: 'hihyou',
    explantion: '\n      汉字: 批評\n      读音: ひひょう\n      意思: criticism\n      来源: review\n      同义词: 批評\n    ',
  },
  {
    question: '比較',
    answer: 'hikaku',
    explantion: '\n      汉字: 比較\n      读音: ひかく\n      意思: comparison\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '疲れ',
    answer: 'tsukare',
    explantion: '\n      汉字: 疲れ\n      读音: つかれ\n      意思: tiredness\n      来源: fatigue\n      同义词: 疲れ\n    ',
  },
  {
    question: '皮',
    answer: 'kawa',
    explantion: '\n      汉字: 皮\n      读音: かわ\n      意思: skin\n      来源: hide\n      同义词: 皮\n    ',
  },
  {
    question: '革',
    answer: 'kawa',
    explantion: '\n      汉字: 革\n      读音: かわ\n      意思: leather\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '秘密',
    answer: 'himitsu',
    explantion: '\n      汉字: 秘密\n      读音: ひみつ\n      意思: secret\n      来源: secrecy\n      同义词: 秘密\n    ',
  },
  {
    question: '被る',
    answer: 'kaburu',
    explantion: '\n      汉字: 被る\n      读音: かぶる\n      意思: to suffer\n      来源: waller\n      同义词: , , 被る, 冠る, 冠る\n    ',
  },
  {
    question: '被害',
    answer: 'higai',
    explantion: '\n      汉字: 被害\n      读音: ひがい\n      意思: damage\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '費用',
    answer: 'hiyo',
    explantion: '\n      汉字: 費用\n      读音: ひよう\n      意思: cost\n      来源: expense\n      同义词: 費用\n    ',
  },
  {
    question: '非常',
    answer: 'hijiyou',
    explantion: '\n      汉字: 非常\n      读音: ひじょう\n      意思: emergency\n      来源: extraordinary\n      同义词: 非常\n    ',
  },
  {
    question: '飛ばす',
    answer: 'tobasu',
    explantion: '\n      汉字: 飛ばす\n      读音: とばす\n      意思: to skip over\n      来源: to omit\n      同义词: 飛ばす\n    ',
  },
  {
    question: '飛び出す',
    answer: 'tobidasu',
    explantion: '\n      汉字: 飛び出す\n      读音: とびだす\n      意思: to jump out\n      来源: to rush out\n      同义词: 飛び出す, 飛びだす, 飛出す, 跳び出す, 跳びだす\n    ',
  },
  {
    question: '飛行',
    answer: 'hiko',
    explantion: '\n      汉字: 飛行\n      读音: ひこう\n      意思: aviation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '微笑む',
    answer: 'hohoemu',
    explantion: '\n      汉字: 微笑む\n      读音: ほほえむ\n      意思: to smile\n      来源: waller\n      同义词: ほほ笑む, 頬笑む\n    ',
  },
  {
    question: '微妙',
    answer: 'bimyou',
    explantion: '\n      汉字: 微妙\n      读音: びみょう\n      意思: delicate\n      来源: subtle\n      同义词: 微妙, \n    ',
  },
  {
    question: '美人',
    answer: 'bijin',
    explantion: '\n      汉字: 美人\n      读音: びじん\n      意思: beautiful person (woman)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '膝',
    answer: 'hiza',
    explantion: '\n      汉字: 膝\n      读音: ひざ\n      意思: knee\n      来源: lap\n      同义词: 膝, \n    ',
  },
  {
    question: '必ずしも',
    answer: 'kanarazushimo',
    explantion: '\n      汉字: 必ずしも\n      读音: かならずしも\n      意思: (not) always\n      来源: (not) necessarily\n      同义词: 必ずしも\n    ',
  },
  {
    question: '筆',
    answer: 'fude',
    explantion: '\n      汉字: 筆\n      读音: ふで\n      意思: writing brush\n      来源: waller\n      同义词: 筆\n    ',
  },
  {
    question: '紐',
    answer: 'himo',
    explantion: '\n      汉字: 紐\n      读音: ひも\n      意思: (1) string\n      来源: cord\n      同义词: 紐, , \n    ',
  },
  {
    question: '氷',
    answer: 'kori',
    explantion: '\n      汉字: 氷\n      读音: こおり\n      意思: ice\n      来源: hail\n      同义词: 氷, 凍り\n    ',
  },
  {
    question: '表',
    answer: 'hyou',
    explantion: '\n      汉字: 表\n      读音: ひょう\n      意思: table (e.g. Tab 1)\n      来源: chart\n      同义词: 表\n    ',
  },
  {
    question: '表現',
    answer: 'hyogen',
    explantion: '\n      汉字: 表現\n      读音: ひょうげん\n      意思: expression\n      来源: presentation\n      同义词: 表現\n    ',
  },
  {
    question: '表情',
    answer: 'hyojo',
    explantion: '\n      汉字: 表情\n      读音: ひょうじょう\n      意思: facial expression\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '表面',
    answer: 'hyoumen',
    explantion: '\n      汉字: 表面\n      读音: ひょうめん\n      意思: surface\n      来源: outside\n      同义词: 表面\n    ',
  },
  {
    question: '評価',
    answer: 'hyouka',
    explantion: '\n      汉字: 評価\n      读音: ひょうか\n      意思: valuation\n      来源: estimation\n      同义词: 評価\n    ',
  },
  {
    question: '評判',
    answer: 'hyouban',
    explantion: '\n      汉字: 評判\n      读音: ひょうばん\n      意思: fame\n      来源: reputation\n      同义词: 評判\n    ',
  },
  {
    question: '秒',
    answer: 'byo',
    explantion: '\n      汉字: 秒\n      读音: びょう\n      意思: second (60th min)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '貧しい',
    answer: 'mazushii',
    explantion: '\n      汉字: 貧しい\n      读音: まずしい\n      意思: poor\n      来源: needy\n      同义词: 貧しい\n    ',
  },
  {
    question: '瓶',
    answer: 'bin',
    explantion: '\n      汉字: 瓶\n      读音: びん\n      意思: bottle\n      来源: waller\n      同义词: 壜, 罎, \n    ',
  },
  {
    question: '不安',
    answer: 'fuan',
    explantion: '\n      汉字: 不安\n      读音: ふあん\n      意思: anxiety\n      来源: uneasiness\n      同义词: 不安\n    ',
  },
  {
    question: '不可',
    answer: 'fuka',
    explantion: '\n      汉字: 不可\n      读音: ふか\n      意思: wrong\n      来源: bad\n      同义词: 不可\n    ',
  },
  {
    question: '不幸',
    answer: 'fuko',
    explantion: '\n      汉字: 不幸\n      读音: ふこう\n      意思: unhappiness\n      来源: sorrow\n      同义词: 不幸\n    ',
  },
  {
    question: '不思議',
    answer: 'fushigi',
    explantion: '\n      汉字: 不思議\n      读音: ふしぎ\n      意思: mystery\n      来源: curiosity\n      同义词: 不思議\n    ',
  },
  {
    question: '不自由',
    answer: 'fujiyuu',
    explantion: '\n      汉字: 不自由\n      读音: ふじゆう\n      意思: discomfort\n      来源: disability\n      同义词: 不自由\n    ',
  },
  {
    question: '不図',
    answer: 'futo',
    explantion: '\n      汉字: 不図\n      读音: ふと\n      意思: suddenly\n      来源: casually\n      同义词: 不図, , 不斗, 不圖\n    ',
  },
  {
    question: '不正',
    answer: 'fusei',
    explantion: '\n      汉字: 不正\n      读音: ふせい\n      意思: injustice\n      来源: unfairness\n      同义词: 不正\n    ',
  },
  {
    question: '不足',
    answer: 'fusoku',
    explantion: '\n      汉字: 不足\n      读音: ふそく\n      意思: insufficiency\n      来源: shortage\n      同义词: 不足\n    ',
  },
  {
    question: '不平',
    answer: 'fuei',
    explantion: '\n      汉字: 不平\n      读音: ふへい\n      意思: complaint\n      来源: discontent\n      同义词: 不平\n    ',
  },
  {
    question: '不満',
    answer: 'fuman',
    explantion: '\n      汉字: 不満\n      读音: ふまん\n      意思: dissatisfaction\n      来源: displeasure\n      同义词: 不満\n    ',
  },
  {
    question: '不利',
    answer: 'furi',
    explantion: '\n      汉字: 不利\n      读音: ふり\n      意思: disadvantage\n      来源: handicap\n      同义词: 不利\n    ',
  },
  {
    question: '付き合い',
    answer: 'tsukiai',
    explantion: '\n      汉字: 付き合い\n      读音: つきあい\n      意思: association\n      来源: socializing\n      同义词: 付き合い, つき合い, 付合い\n    ',
  },
  {
    question: '夫人',
    answer: 'fujin',
    explantion: '\n      汉字: 夫人\n      读音: ふじん\n      意思: wife\n      来源: Mrs\n      同义词: 夫人, 夫人, 夫人\n    ',
  },
  {
    question: '婦人',
    answer: 'fujin',
    explantion: '\n      汉字: 婦人\n      读音: ふじん\n      意思: woman\n      来源: female\n      同义词: 婦人\n    ',
  },
  {
    question: '布',
    answer: 'nuno',
    explantion: '\n      汉字: 布\n      读音: ぬの\n      意思: cloth\n      来源: waller\n      同义词: 布, 布, 布\n    ',
  },
  {
    question: '普段',
    answer: 'fudan',
    explantion: '\n      汉字: 普段\n      读音: ふだん\n      意思: usually\n      来源: habitually\n      同义词: 普段\n    ',
  },
  {
    question: '父親',
    answer: 'chichioya',
    explantion: '\n      汉字: 父親\n      读音: ちちおや\n      意思: father\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '腐る',
    answer: 'kusaru',
    explantion: '\n      汉字: 腐る\n      读音: くさる\n      意思: to rot\n      来源: to go bad\n      同义词: 腐る, \n    ',
  },
  {
    question: '負け',
    answer: 'make',
    explantion: '\n      汉字: 負け\n      读音: まけ\n      意思: defeat\n      来源: loss\n      同义词: 負け\n    ',
  },
  {
    question: '武器',
    answer: 'buki',
    explantion: '\n      汉字: 武器\n      读音: ぶき\n      意思: weapon\n      来源: arms\n      同义词: 武器\n    ',
  },
  {
    question: '舞台',
    answer: 'butai',
    explantion: '\n      汉字: 舞台\n      读音: ぶたい\n      意思: stage (theatre)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '部分',
    answer: 'bubun',
    explantion: '\n      汉字: 部分\n      读音: ぶぶん\n      意思: portion\n      来源: section\n      同义词: 部分\n    ',
  },
  {
    question: '風景',
    answer: 'fukei',
    explantion: '\n      汉字: 風景\n      读音: ふうけい\n      意思: scenery\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '幅',
    answer: 'waba',
    explantion: '\n      汉字: 幅\n      读音: はば\n      意思: width\n      来源: breadth\n      同义词: 幅, 巾\n    ',
  },
  {
    question: '服装',
    answer: 'fukuso',
    explantion: '\n      汉字: 服装\n      读音: ふくそう\n      意思: garments\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '腹',
    answer: 'hara',
    explantion: '\n      汉字: 腹\n      读音: はら\n      意思: abdomen\n      来源: belly\n      同义词: 腹, 肚\n    ',
  },
  {
    question: '仏',
    answer: 'hotoke',
    explantion: '\n      汉字: 仏\n      读音: ほとけ\n      意思: Buddha\n      来源: merciful person\n      同义词: 仏, 佛, 𠏹\n    ',
  },
  {
    question: '物音',
    answer: 'monooto',
    explantion: '\n      汉字: 物音\n      读音: ものおと\n      意思: sounds\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '物価',
    answer: 'butsuka',
    explantion: '\n      汉字: 物価\n      读音: ぶっか\n      意思: prices of commodities\n      来源: prices (in general)\n      同义词: 物価\n    ',
  },
  {
    question: '物語',
    answer: 'monogatari',
    explantion: '\n      汉字: 物語\n      读音: ものがたり\n      意思: tale\n      来源: story\n      同义词: 物語, 物語り\n    ',
  },
  {
    question: '物事',
    answer: 'monogoto',
    explantion: '\n      汉字: 物事\n      读音: ものごと\n      意思: things\n      来源: everything\n      同义词: 物事, 物ごと\n    ',
  },
  {
    question: '物質',
    answer: 'butsushitsu',
    explantion: '\n      汉字: 物質\n      读音: ぶっしつ\n      意思: material\n      来源: substance\n      同义词: 物質\n    ',
  },
  {
    question: '物理',
    answer: 'butsuri',
    explantion: '\n      汉字: 物理\n      读音: ぶつり\n      意思: physics\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '分',
    answer: 'bu',
    explantion: '\n      汉字: 分\n      读音: ぶ\n      意思: dividing\n      来源: part\n      同义词: 分\n    ',
  },
  {
    question: '分',
    answer: 'bun',
    explantion: '\n      汉字: 分\n      读音: ぶん\n      意思: dividing\n      来源: part\n      同义词: 分\n    ',
  },
  {
    question: '分ける',
    answer: 'wakeru',
    explantion: '\n      汉字: 分ける\n      读音: わける\n      意思: to divide\n      来源: to separate\n      同义词: 分ける, 別ける\n    ',
  },
  {
    question: '分析',
    answer: 'bunseki',
    explantion: '\n      汉字: 分析\n      读音: ぶんせき\n      意思: analysis\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '分野',
    answer: 'bunya',
    explantion: '\n      汉字: 分野\n      读音: ぶんや\n      意思: field\n      来源: sphere\n      同义词: 分野\n    ',
  },
  {
    question: '粉',
    answer: 'kona',
    explantion: '\n      汉字: 粉\n      读音: こな\n      意思: flour\n      来源: meal\n      同义词: 粉, 粉\n    ',
  },
  {
    question: '雰囲気',
    answer: 'funiki',
    explantion: '\n      汉字: 雰囲気\n      读音: ふんいき\n      意思: atmosphere (e.g. musical)\n      来源: mood\n      同义词: 雰囲気, 雰囲気, ふんい気, ふん囲気\n    ',
  },
  {
    question: '文',
    answer: 'bun',
    explantion: '\n      汉字: 文\n      读音: ぶん\n      意思: sentence\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '文句',
    answer: 'monku',
    explantion: '\n      汉字: 文句\n      读音: もんく\n      意思: phrase\n      来源: complaint\n      同义词: 文句\n    ',
  },
  {
    question: '文字',
    answer: 'moji',
    explantion: '\n      汉字: 文字\n      读音: もじ\n      意思: letter (of alphabet)\n      来源: character\n      同义词: 文字, 文字\n    ',
  },
  {
    question: '文明',
    answer: 'bunmei',
    explantion: '\n      汉字: 文明\n      读音: ぶんめい\n      意思: civilization\n      来源: culture\n      同义词: 文明\n    ',
  },
  {
    question: '塀',
    answer: 'ei',
    explantion: '\n      汉字: 塀\n      读音: へい\n      意思: wall\n      来源: fence\n      同义词: 塀, 屏\n    ',
  },
  {
    question: '平ら',
    answer: 'taira',
    explantion: '\n      汉字: 平ら\n      读音: たいら\n      意思: flatness\n      来源: level\n      同义词: 平ら\n    ',
  },
  {
    question: '平等',
    answer: 'byodo',
    explantion: '\n      汉字: 平等\n      读音: びょうどう\n      意思: equality (a)\n      来源: impartiality\n      同义词: 平等\n    ',
  },
  {
    question: '平和',
    answer: 'eiwa',
    explantion: '\n      汉字: 平和\n      读音: へいわ\n      意思: peace\n      来源: harmony\n      同义词: 平和\n    ',
  },
  {
    question: '柄',
    answer: 'e',
    explantion: '\n      汉字: 柄\n      读音: え\n      意思: handle\n      来源: grip\n      同义词: 柄\n    ',
  },
  {
    question: '柄',
    answer: 'gara',
    explantion: '\n      汉字: 柄\n      读音: がら\n      意思: hilt (of a sword)\n      来源: haft (of a dagger)\n      同义词: 柄\n    ',
  },
  {
    question: '閉じる',
    answer: 'tojiru',
    explantion: '\n      汉字: 閉じる\n      读音: とじる\n      意思: to close (e.g. book\n      来源:  eyes)\n      同义词: 閉じる\n    ',
  },
  {
    question: '癖',
    answer: 'kuse',
    explantion: '\n      汉字: 癖\n      读音: くせ\n      意思: a habit (often a bad habit)\n      来源: peculiarity\n      同义词: 癖, 癖\n    ',
  },
  {
    question: '別に',
    answer: 'betsuni',
    explantion: '\n      汉字: 別に\n      读音: べつに\n      意思: (not) particularly\n      来源: nothing\n      同义词: 別に\n    ',
  },
  {
    question: '別れ',
    answer: 'wakare',
    explantion: '\n      汉字: 別れ\n      读音: わかれ\n      意思: parting\n      来源: separation\n      同义词: 別れ\n    ',
  },
  {
    question: '変化',
    answer: 'henka',
    explantion: '\n      汉字: 変化\n      读音: へんか\n      意思: goblin\n      来源: ghost\n      同义词: 変化\n    ',
  },
  {
    question: '変更',
    answer: 'henko',
    explantion: '\n      汉字: 変更\n      读音: へんこう\n      意思: change\n      来源: modification\n      同义词: 変更\n    ',
  },
  {
    question: '辺り',
    answer: 'atari',
    explantion: '\n      汉字: 辺り\n      读音: あたり\n      意思: vicinity\n      来源: nearby\n      同义词: 辺り, \n    ',
  },
  {
    question: '便',
    answer: 'bin',
    explantion: '\n      汉字: 便\n      读音: びん\n      意思: way\n      来源: means\n      同义词: 便\n    ',
  },
  {
    question: '便り',
    answer: 'tayori',
    explantion: '\n      汉字: 便り\n      读音: たより\n      意思: news\n      来源: tidings\n      同义词: 便り, 便り\n    ',
  },
  {
    question: '弁当',
    answer: 'bento',
    explantion: '\n      汉字: 弁当\n      读音: べんとう\n      意思: box lunch\n      来源: waller\n      同义词: 辨當, 弁當, 辨当\n    ',
  },
  {
    question: '保存',
    answer: 'hozon',
    explantion: '\n      汉字: 保存\n      读音: ほぞん\n      意思: preservation\n      来源: conservation\n      同义词: 保存\n    ',
  },
  {
    question: '捕まる',
    answer: 'tsukamaru',
    explantion: '\n      汉字: 捕まる\n      读音: つかまる\n      意思: to be caught\n      来源: to be arrested\n      同义词: 捕まる, , 掴まる, 捉まる, 摑まる\n    ',
  },
  {
    question: '歩道',
    answer: 'hodou',
    explantion: '\n      汉字: 歩道\n      读音: ほどう\n      意思: footpath\n      来源: walkway\n      同义词: 歩道\n    ',
  },
  {
    question: '墓',
    answer: 'haka',
    explantion: '\n      汉字: 墓\n      读音: はか\n      意思: grave\n      来源: tomb\n      同义词: 墓\n    ',
  },
  {
    question: '暮らし',
    answer: 'kurashi',
    explantion: '\n      汉字: 暮らし\n      读音: くらし\n      意思: living\n      来源: livelihood\n      同义词: 暮らし, 暮し\n    ',
  },
  {
    question: '暮らす',
    answer: 'kurasu',
    explantion: '\n      汉字: 暮らす\n      读音: くらす\n      意思: to live\n      来源: to get along\n      同义词: 暮らす, 暮す\n    ',
  },
  {
    question: '暮れ',
    answer: 'kure',
    explantion: '\n      汉字: 暮れ\n      读音: くれ\n      意思: year end\n      来源: sunset\n      同义词: 暮れ, 暮\n    ',
  },
  {
    question: '母親',
    answer: 'wawaoya',
    explantion: '\n      汉字: 母親\n      读音: ははおや\n      意思: mother\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '包み',
    answer: 'tsutsumi',
    explantion: '\n      汉字: 包み\n      读音: つつみ\n      意思: bundle\n      来源: package\n      同义词: 包み\n    ',
  },
  {
    question: '報告',
    answer: 'hokoku',
    explantion: '\n      汉字: 報告\n      读音: ほうこく\n      意思: report\n      来源: information\n      同义词: 報告\n    ',
  },
  {
    question: '宝',
    answer: 'takara',
    explantion: '\n      汉字: 宝\n      读音: たから\n      意思: treasure\n      来源: waller\n      同义词: 財, 貨, 寳, 寶\n    ',
  },
  {
    question: '宝石',
    answer: 'hoseki',
    explantion: '\n      汉字: 宝石\n      读音: ほうせき\n      意思: gem\n      来源: jewel\n      同义词: 宝石\n    ',
  },
  {
    question: '抱える',
    answer: 'kakaeru',
    explantion: '\n      汉字: 抱える\n      读音: かかえる\n      意思: to hold or carry under or in the arms\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '放す',
    answer: 'hanasu',
    explantion: '\n      汉字: 放す\n      读音: はなす\n      意思: to separate\n      来源: to set free\n      同义词: 放す\n    ',
  },
  {
    question: '方向',
    answer: 'hoko',
    explantion: '\n      汉字: 方向\n      读音: ほうこう\n      意思: direction\n      来源: course\n      同义词: 方向\n    ',
  },
  {
    question: '方法',
    answer: 'hoho',
    explantion: '\n      汉字: 方法\n      读音: ほうほう\n      意思: method\n      来源: manner\n      同义词: 方法\n    ',
  },
  {
    question: '法',
    answer: 'ho',
    explantion: '\n      汉字: 法\n      读音: ほう\n      意思: Act (law: the X Act)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '泡',
    answer: 'awa',
    explantion: '\n      汉字: 泡\n      读音: あわ\n      意思: bubble\n      来源: foam\n      同义词: 泡, 泡, 沫\n    ',
  },
  {
    question: '訪問',
    answer: 'homon',
    explantion: '\n      汉字: 訪問\n      读音: ほうもん\n      意思: call\n      来源: visit\n      同义词: 訪問\n    ',
  },
  {
    question: '豊か',
    answer: 'yutaka',
    explantion: '\n      汉字: 豊か\n      读音: ゆたか\n      意思: abundant\n      来源: wealthy\n      同义词: 豊か, 豊\n    ',
  },
  {
    question: '豊富',
    answer: 'hofu',
    explantion: '\n      汉字: 豊富\n      读音: ほうふ\n      意思: abundance\n      来源: wealth\n      同义词: 豊富\n    ',
  },
  {
    question: '望み',
    answer: 'nozomi',
    explantion: '\n      汉字: 望み\n      读音: のぞみ\n      意思: wish\n      来源: desire\n      同义词: 望み\n    ',
  },
  {
    question: '望む',
    answer: 'nozomu',
    explantion: '\n      汉字: 望む\n      读音: のぞむ\n      意思: to desire\n      来源: to wish for\n      同义词: 望む\n    ',
  },
  {
    question: '棒',
    answer: 'bou',
    explantion: '\n      汉字: 棒\n      读音: ぼう\n      意思: pole\n      来源: rod\n      同义词: 棒\n    ',
  },
  {
    question: '冒険',
    answer: 'bouken',
    explantion: '\n      汉字: 冒険\n      读音: ぼうけん\n      意思: risk\n      来源: venture\n      同义词: 冒険\n    ',
  },
  {
    question: '防ぐ',
    answer: 'fusegu',
    explantion: '\n      汉字: 防ぐ\n      读音: ふせぐ\n      意思: to defend (against)\n      来源: to protect\n      同义词: 防ぐ, 禦ぐ, 拒ぐ\n    ',
  },
  {
    question: '濠',
    answer: 'hori',
    explantion: '\n      汉字: 濠\n      读音: ほり\n      意思: moat\n      来源: waller\n      同义词: 堀, 壕\n    ',
  },
  {
    question: '本人',
    answer: 'honnin',
    explantion: '\n      汉字: 本人\n      读音: ほんにん\n      意思: the person himself\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '本当',
    answer: 'honto',
    explantion: '\n      汉字: 本当\n      读音: ほんと\n      意思: truth\n      来源: reality\n      同义词: 本当\n    ',
  },
  {
    question: '本物',
    answer: 'honmono',
    explantion: '\n      汉字: 本物\n      读音: ほんもの\n      意思: genuine article\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '幕',
    answer: 'maku',
    explantion: '\n      汉字: 幕\n      读音: まく\n      意思: curtain\n      来源: bunting\n      同义词: 幕\n    ',
  },
  {
    question: '末',
    answer: 'sue',
    explantion: '\n      汉字: 末\n      读音: すえ\n      意思: the end of\n      来源: powder\n      同义词: 末\n    ',
  },
  {
    question: '万一',
    answer: 'manichi',
    explantion: '\n      汉字: 万一\n      读音: まんいち\n      意思: by some chance\n      来源: by some possibility\n      同义词: 万一, 万一, 万一, 万一\n    ',
  },
  {
    question: '満足',
    answer: 'manzoku',
    explantion: '\n      汉字: 満足\n      读音: まんぞく\n      意思: satisfaction\n      来源: waller\n      同义词: 滿足\n    ',
  },
  {
    question: '味方',
    answer: 'mikata',
    explantion: '\n      汉字: 味方\n      读音: みかた\n      意思: friend\n      来源: ally\n      同义词: 味方, 身方, 御方\n    ',
  },
  {
    question: '未だ',
    answer: 'mada',
    explantion: '\n      汉字: 未だ\n      读音: まだ\n      意思: yet\n      来源: still\n      同义词: 未だ\n    ',
  },
  {
    question: '未来',
    answer: 'mirai',
    explantion: '\n      汉字: 未来\n      读音: みらい\n      意思: future (life\n      来源:  tense)\n      同义词: 未来\n    ',
  },
  {
    question: '魅力',
    answer: 'miriyoku',
    explantion: '\n      汉字: 魅力\n      读音: みりょく\n      意思: charm\n      来源: fascination\n      同义词: 魅力\n    ',
  },
  {
    question: '妙',
    answer: 'myo',
    explantion: '\n      汉字: 妙\n      读音: みょう\n      意思: strange\n      来源: unusual\n      同义词: 妙\n    ',
  },
  {
    question: '夢中',
    answer: 'muchuu',
    explantion: '\n      汉字: 夢中\n      读音: むちゅう\n      意思: daze\n      来源: (in a) trance\n      同义词: 夢中\n    ',
  },
  {
    question: '無し',
    answer: 'nashi',
    explantion: '\n      汉字: 無し\n      读音: なし\n      意思: without\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '無視',
    answer: 'mushi',
    explantion: '\n      汉字: 無視\n      读音: むし\n      意思: disregard\n      来源: ignore\n      同义词: 無視\n    ',
  },
  {
    question: '無事',
    answer: 'buji',
    explantion: '\n      汉字: 無事\n      读音: ぶじ\n      意思: safety\n      来源: peace\n      同义词: 無事\n    ',
  },
  {
    question: '無駄',
    answer: 'muda',
    explantion: '\n      汉字: 無駄\n      读音: むだ\n      意思: futility\n      来源: uselessness\n      同义词: 無駄, 徒, \n    ',
  },
  {
    question: '無料',
    answer: 'muryou',
    explantion: '\n      汉字: 無料\n      读音: むりょう\n      意思: free\n      来源: no charge\n      同义词: 無料\n    ',
  },
  {
    question: '霧',
    answer: 'kiri',
    explantion: '\n      汉字: 霧\n      读音: きり\n      意思: fog\n      来源: mist\n      同义词: 霧\n    ',
  },
  {
    question: '名',
    answer: 'na',
    explantion: '\n      汉字: 名\n      读音: な\n      意思: name\n      来源: reputation\n      同义词: 名\n    ',
  },
  {
    question: '名人',
    answer: 'meijin',
    explantion: '\n      汉字: 名人\n      读音: めいじん\n      意思: master\n      来源: expert\n      同义词: 名人\n    ',
  },
  {
    question: '命',
    answer: 'inochi',
    explantion: '\n      汉字: 命\n      读音: いのち\n      意思: command\n      来源: decree\n      同义词: 命\n    ',
  },
  {
    question: '命じる',
    answer: 'meijiru',
    explantion: '\n      汉字: 命じる\n      读音: めいじる\n      意思: to order\n      来源: to command\n      同义词: 命じる\n    ',
  },
  {
    question: '命令',
    answer: 'meirei',
    explantion: '\n      汉字: 命令\n      读音: めいれい\n      意思: order\n      来源: command\n      同义词: 命令\n    ',
  },
  {
    question: '明らか',
    answer: 'akiraka',
    explantion: '\n      汉字: 明らか\n      读音: あきらか\n      意思: obvious\n      来源: evident\n      同义词: 明らか, 顕らか\n    ',
  },
  {
    question: '明確',
    answer: 'meikaku',
    explantion: '\n      汉字: 明確\n      读音: めいかく\n      意思: clear up\n      来源: clarify\n      同义词: 明確\n    ',
  },
  {
    question: '迷子',
    answer: 'maigo',
    explantion: '\n      汉字: 迷子\n      读音: まいご\n      意思: lost (stray) child\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '迷惑',
    answer: 'meiwaku',
    explantion: '\n      汉字: 迷惑\n      读音: めいわく\n      意思: trouble\n      来源: bother\n      同义词: 迷惑\n    ',
  },
  {
    question: '免許',
    answer: 'menkiyo',
    explantion: '\n      汉字: 免許\n      读音: めんきょ\n      意思: license\n      来源: permit\n      同义词: 免許\n    ',
  },
  {
    question: '綿',
    answer: 'men',
    explantion: '\n      汉字: 綿\n      读音: めん\n      意思: cotton\n      来源: padding\n      同义词: 綿, 棉\n    ',
  },
  {
    question: '綿',
    answer: 'wata',
    explantion: '\n      汉字: 綿\n      读音: わた\n      意思: cotton\n      来源: padding\n      同义词: 綿, , 棉, 草綿, \n    ',
  },
  {
    question: '面倒',
    answer: 'mendo',
    explantion: '\n      汉字: 面倒\n      读音: めんどう\n      意思: trouble\n      来源: difficulty\n      同义词: 面倒\n    ',
  },
  {
    question: '模様',
    answer: 'moyo',
    explantion: '\n      汉字: 模様\n      读音: もよう\n      意思: pattern\n      来源: figure\n      同义词: 模様\n    ',
  },
  {
    question: '毛布',
    answer: 'moufu',
    explantion: '\n      汉字: 毛布\n      读音: もうふ\n      意思: blanket\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '木曜',
    answer: 'mokuyo',
    explantion: '\n      汉字: 木曜\n      读音: もくよう\n      意思: Thursday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '黙る',
    answer: 'damaru',
    explantion: '\n      汉字: 黙る\n      读音: だまる\n      意思: to be silent\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お目に掛かる',
    answer: 'omenikakaru',
    explantion: '\n      汉字: お目に掛かる\n      读音: おめにかかる\n      意思: \n      来源: waller\n      同义词: お目にかかる, 御目にかかる, 御目に掛かる\n    ',
  },
  {
    question: '目的',
    answer: 'mokuteki',
    explantion: '\n      汉字: 目的\n      读音: もくてき\n      意思: purpose\n      来源: goal\n      同义词: 目的\n    ',
  },
  {
    question: '目標',
    answer: 'mokuhyou',
    explantion: '\n      汉字: 目標\n      读音: もくひょう\n      意思: mark\n      来源: objective\n      同义词: 目標\n    ',
  },
  {
    question: '勿論',
    answer: 'mochiron',
    explantion: '\n      汉字: 勿論\n      读音: もちろん\n      意思: of course\n      来源: certainly\n      同义词: 勿論\n    ',
  },
  {
    question: '尤も',
    answer: 'mottomo',
    explantion: '\n      汉字: 尤も\n      读音: もっとも\n      意思: quite right\n      来源: plausible\n      同义词: 尤も, \n    ',
  },
  {
    question: '戻す',
    answer: 'modosu',
    explantion: '\n      汉字: 戻す\n      读音: もどす\n      意思: to restore\n      来源: to put back\n      同义词: 戻す\n    ',
  },
  {
    question: '貰う',
    answer: 'morau',
    explantion: '\n      汉字: 貰う\n      读音: もらう\n      意思: to receive\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '問い',
    answer: 'toi',
    explantion: '\n      汉字: 問い\n      读音: とい\n      意思: question\n      来源: query\n      同义词: 問い, 問\n    ',
  },
  {
    question: '夜',
    answer: 'yo',
    explantion: '\n      汉字: 夜\n      读音: よ\n      意思: evening\n      来源: night\n      同义词: 夜\n    ',
  },
  {
    question: '夜中',
    answer: 'yonaka',
    explantion: '\n      汉字: 夜中\n      读音: よなか\n      意思: midnight\n      来源: dead of night\n      同义词: 夜中, 夜なか\n    ',
  },
  {
    question: '夜明け',
    answer: 'yoake',
    explantion: '\n      汉字: 夜明け\n      读音: よあけ\n      意思: dawn\n      来源: daybreak\n      同义词: 夜明け, 夜明\n    ',
  },
  {
    question: '野',
    answer: 'no',
    explantion: '\n      汉字: 野\n      读音: の\n      意思: field\n      来源: waller\n      同义词: 野, 野, 埜, 埜, 埜\n    ',
  },
  {
    question: '厄介',
    answer: 'yatsukai',
    explantion: '\n      汉字: 厄介\n      读音: やっかい\n      意思: trouble\n      来源: burden\n      同义词: 厄介\n    ',
  },
  {
    question: '役',
    answer: 'yaku',
    explantion: '\n      汉字: 役\n      读音: やく\n      意思: use\n      来源: service\n      同义词: 役\n    ',
  },
  {
    question: '役割',
    answer: 'yakuwari',
    explantion: '\n      汉字: 役割\n      读音: やくわり\n      意思: part\n      来源: assigning (allotment of) parts\n      同义词: 役割, 役割り\n    ',
  },
  {
    question: '約',
    answer: 'yaku',
    explantion: '\n      汉字: 約\n      读音: やく\n      意思: approximately\n      来源: about\n      同义词: 約\n    ',
  },
  {
    question: '愉快',
    answer: 'yukai',
    explantion: '\n      汉字: 愉快\n      读音: ゆかい\n      意思: pleasant\n      来源: happy\n      同义词: 愉快\n    ',
  },
  {
    question: '油',
    answer: 'abura',
    explantion: '\n      汉字: 油\n      读音: あぶら\n      意思: oil\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '只',
    answer: 'tada',
    explantion: '\n      汉字: 只\n      读音: ただ\n      意思: free of charge\n      来源: mere\n      同义词: 只, , 徒, 但, 常, , 唯\n    ',
  },
  {
    question: '唯一',
    answer: 'yuiitsu',
    explantion: '\n      汉字: 唯一\n      读音: ゆいいつ\n      意思: only\n      来源: sole\n      同义词: 唯一, 唯一, 唯一\n    ',
  },
  {
    question: '優れる',
    answer: 'sugureru',
    explantion: '\n      汉字: 優れる\n      读音: すぐれる\n      意思: to surpass\n      来源: to outstrip\n      同义词: 優れる, 勝れる, 傑れる\n    ',
  },
  {
    question: '優秀',
    answer: 'yuushu',
    explantion: '\n      汉字: 優秀\n      读音: ゆうしゅう\n      意思: superiority\n      来源: excellence\n      同义词: 優秀\n    ',
  },
  {
    question: '優勝',
    answer: 'yusho',
    explantion: '\n      汉字: 優勝\n      读音: ゆうしょう\n      意思: overall victory\n      来源: championship\n      同义词: 優勝\n    ',
  },
  {
    question: '勇気',
    answer: 'yuuki',
    explantion: '\n      汉字: 勇気\n      读音: ゆうき\n      意思: courage\n      来源: bravery\n      同义词: 勇気\n    ',
  },
  {
    question: '友',
    answer: 'tomo',
    explantion: '\n      汉字: 友\n      读音: とも\n      意思: friend\n      来源: companion\n      同义词: 友, 朋\n    ',
  },
  {
    question: '友情',
    answer: 'yujou',
    explantion: '\n      汉字: 友情\n      读音: ゆうじょう\n      意思: friendship\n      来源: fellowship\n      同义词: 友情\n    ',
  },
  {
    question: '友人',
    answer: 'yuujin',
    explantion: '\n      汉字: 友人\n      读音: ゆうじん\n      意思: friend\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '有効',
    answer: 'yuko',
    explantion: '\n      汉字: 有効\n      读音: ゆうこう\n      意思: validity\n      来源: availability\n      同义词: 有効\n    ',
  },
  {
    question: '有能',
    answer: 'yuuno',
    explantion: '\n      汉字: 有能\n      读音: ゆうのう\n      意思: able\n      来源: capable\n      同义词: 有能\n    ',
  },
  {
    question: '誘う',
    answer: 'saso',
    explantion: '\n      汉字: 誘う\n      读音: さそう\n      意思: (1) to invite\n      来源: to ask\n      同义词: 誘う, 誘う\n    ',
  },
  {
    question: '夕べ',
    answer: 'yube',
    explantion: '\n      汉字: 夕べ\n      读音: ゆうべ\n      意思: evening\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '予期',
    answer: 'yoki',
    explantion: '\n      汉字: 予期\n      读音: よき\n      意思: expectation\n      来源: assume will happen\n      同义词: 予期\n    ',
  },
  {
    question: '予算',
    answer: 'yosan',
    explantion: '\n      汉字: 予算\n      读音: よさん\n      意思: estimate\n      来源: budget\n      同义词: 予算\n    ',
  },
  {
    question: '予測',
    answer: 'yosoku',
    explantion: '\n      汉字: 予測\n      读音: よそく\n      意思: prediction\n      来源: estimation\n      同义词: 予測\n    ',
  },
  {
    question: '予報',
    answer: 'yoho',
    explantion: '\n      汉字: 予報\n      读音: よほう\n      意思: forecast\n      来源: prediction\n      同义词: 予報\n    ',
  },
  {
    question: '予防',
    answer: 'yobo',
    explantion: '\n      汉字: 予防\n      读音: よぼう\n      意思: prevention\n      来源: precaution\n      同义词: 予防\n    ',
  },
  {
    question: '余分',
    answer: 'yobun',
    explantion: '\n      汉字: 余分\n      读音: よぶん\n      意思: extra\n      来源: excess\n      同义词: 余分\n    ',
  },
  {
    question: '余裕',
    answer: 'yoyuu',
    explantion: '\n      汉字: 余裕\n      读音: よゆう\n      意思: surplus\n      来源: composure\n      同义词: 余裕\n    ',
  },
  {
    question: '与える',
    answer: 'ataeru',
    explantion: '\n      汉字: 与える\n      读音: あたえる\n      意思: to give\n      来源: to present\n      同义词: 与える\n    ',
  },
  {
    question: '預ける',
    answer: 'azukeru',
    explantion: '\n      汉字: 預ける\n      读音: あずける\n      意思: to give into custody\n      来源: to entrust\n      同义词: 預ける\n    ',
  },
  {
    question: '幼い',
    answer: 'osanai',
    explantion: '\n      汉字: 幼い\n      读音: おさない\n      意思: very young\n      来源: childish\n      同义词: 幼い, 幼い, 稚い, 幼けない, 稚けない\n    ',
  },
  {
    question: '容易',
    answer: 'youi',
    explantion: '\n      汉字: 容易\n      读音: ようい\n      意思: easy\n      来源: simple\n      同义词: 容易\n    ',
  },
  {
    question: '曜日',
    answer: 'yobi',
    explantion: '\n      汉字: 曜日\n      读音: ようび\n      意思: day of the week\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '様子',
    answer: 'yosu',
    explantion: '\n      汉字: 様子\n      读音: ようす\n      意思: aspect\n      来源: state\n      同义词: 様子, 容子\n    ',
  },
  {
    question: '用いる',
    answer: 'mochiiru',
    explantion: '\n      汉字: 用いる\n      读音: もちいる\n      意思: to use\n      来源: to make use of\n      同义词: 用いる\n    ',
  },
  {
    question: '用心',
    answer: 'yojin',
    explantion: '\n      汉字: 用心\n      读音: ようじん\n      意思: care\n      来源: precaution\n      同义词: 用心, 要心, 要慎\n    ',
  },
  {
    question: '要するに',
    answer: 'yosuruni',
    explantion: '\n      汉字: 要するに\n      读音: ようするに\n      意思: in a word\n      来源: after all\n      同义词: 要するに\n    ',
  },
  {
    question: '要求',
    answer: 'yokyu',
    explantion: '\n      汉字: 要求\n      读音: ようきゅう\n      意思: request\n      来源: demand\n      同义词: 要求\n    ',
  },
  {
    question: '要素',
    answer: 'youso',
    explantion: '\n      汉字: 要素\n      读音: ようそ\n      意思: element\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '要点',
    answer: 'yoten',
    explantion: '\n      汉字: 要点\n      读音: ようてん\n      意思: gist\n      来源: main point\n      同义词: 要点\n    ',
  },
  {
    question: '陽気',
    answer: 'yoki',
    explantion: '\n      汉字: 陽気\n      读音: ようき\n      意思: season\n      来源: weather\n      同义词: 陽気\n    ',
  },
  {
    question: '浴びる',
    answer: 'abiru',
    explantion: '\n      汉字: 浴びる\n      读音: あびる\n      意思: to bathe\n      来源: to bask in the sun\n      同义词: 浴びる\n    ',
  },
  {
    question: '翼',
    answer: 'tsubasa',
    explantion: '\n      汉字: 翼\n      读音: つばさ\n      意思: wings\n      来源: waller\n      同义词: 翼\n    ',
  },
  {
    question: '裸',
    answer: 'wadaka',
    explantion: '\n      汉字: 裸\n      读音: はだか\n      意思: naked\n      来源: nude\n      同义词: 裸\n    ',
  },
  {
    question: '来',
    answer: 'rai',
    explantion: '\n      汉字: 来\n      读音: らい\n      意思: \n      来源: for (10 days)\n      同义词: 来\n    ',
  },
  {
    question: '嵐',
    answer: 'arashi',
    explantion: '\n      汉字: 嵐\n      读音: あらし\n      意思: storm\n      来源: tempest\n      同义词: 嵐\n    ',
  },
  {
    question: '利益',
    answer: 'rieki',
    explantion: '\n      汉字: 利益\n      读音: りえき\n      意思: profits\n      来源: gains\n      同义词: 利益, 利益\n    ',
  },
  {
    question: '利口',
    answer: 'rikou',
    explantion: '\n      汉字: 利口\n      读音: りこう\n      意思: clever\n      来源: shrewd\n      同义词: 利口, 俐巧, 悧巧, 利巧\n    ',
  },
  {
    question: '理解',
    answer: 'rikai',
    explantion: '\n      汉字: 理解\n      读音: りかい\n      意思: understanding\n      来源: comprehension\n      同义词: 理解\n    ',
  },
  {
    question: '理想',
    answer: 'riso',
    explantion: '\n      汉字: 理想\n      读音: りそう\n      意思: ideal\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '裏切る',
    answer: 'uragiru',
    explantion: '\n      汉字: 裏切る\n      读音: うらぎる\n      意思: to betray\n      来源: to turn traitor to\n      同义词: 裏切る\n    ',
  },
  {
    question: '離す',
    answer: 'hanasu',
    explantion: '\n      汉字: 離す\n      读音: はなす\n      意思: to part\n      来源: divide\n      同义词: 離す\n    ',
  },
  {
    question: '離れる',
    answer: 'hanareru',
    explantion: '\n      汉字: 離れる\n      读音: はなれる\n      意思: to be separated from\n      来源: to leave\n      同义词: 離れる\n    ',
  },
  {
    question: '離婚',
    answer: 'rikon',
    explantion: '\n      汉字: 離婚\n      读音: りこん\n      意思: divorce\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '陸',
    answer: 'riku',
    explantion: '\n      汉字: 陸\n      读音: りく\n      意思: six (used in legal documents)\n      来源: waller\n      同义词: 陸\n    ',
  },
  {
    question: '率',
    answer: 'ritsu',
    explantion: '\n      汉字: 率\n      读音: りつ\n      意思: rate\n      来源: ratio\n      同义词: 率\n    ',
  },
  {
    question: '立ち上がる',
    answer: 'tachiagaru',
    explantion: '\n      汉字: 立ち上がる\n      读音: たちあがる\n      意思: to stand up\n      来源: waller\n      同义词: 立上がる, 起ち上がる, 立ちあがる\n    ',
  },
  {
    question: '立場',
    answer: 'tachiba',
    explantion: '\n      汉字: 立場\n      读音: たちば\n      意思: standpoint\n      来源: position\n      同义词: 立場\n    ',
  },
  {
    question: '略',
    answer: 'hobo',
    explantion: '\n      汉字: 略\n      读音: ほぼ\n      意思: almost\n      来源: roughly\n      同义词: 略, , 粗\n    ',
  },
  {
    question: '流す',
    answer: 'nagasu',
    explantion: '\n      汉字: 流す\n      读音: ながす\n      意思: to drain\n      来源: to float\n      同义词: 流す\n    ',
  },
  {
    question: '流れ',
    answer: 'nagare',
    explantion: '\n      汉字: 流れ\n      读音: ながれ\n      意思: stream\n      来源: current\n      同义词: 流れ\n    ',
  },
  {
    question: '流れる',
    answer: 'nagareru',
    explantion: '\n      汉字: 流れる\n      读音: ながれる\n      意思: to stream\n      来源: to flow\n      同义词: 流れる\n    ',
  },
  {
    question: '留学',
    answer: 'ryugaku',
    explantion: '\n      汉字: 留学\n      读音: りゅうがく\n      意思: studying abroad\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '旅',
    answer: 'tabi',
    explantion: '\n      汉字: 旅\n      读音: たび\n      意思: travel\n      来源: trip\n      同义词: 旅\n    ',
  },
  {
    question: '両替',
    answer: 'ryogae',
    explantion: '\n      汉字: 両替\n      读音: りょうがえ\n      意思: change\n      来源: money exchange\n      同义词: 両替\n    ',
  },
  {
    question: '料金',
    answer: 'ryokin',
    explantion: '\n      汉字: 料金\n      读音: りょうきん\n      意思: fee\n      来源: charge\n      同义词: 料金\n    ',
  },
  {
    question: '量',
    answer: 'ryo',
    explantion: '\n      汉字: 量\n      读音: りょう\n      意思: quantity\n      来源: amount\n      同义词: 量\n    ',
  },
  {
    question: '輪',
    answer: 'wa',
    explantion: '\n      汉字: 輪\n      读音: わ\n      意思: ring\n      来源: hoop\n      同义词: 輪, 環\n    ',
  },
  {
    question: '涙',
    answer: 'namida',
    explantion: '\n      汉字: 涙\n      读音: なみだ\n      意思: tear\n      来源: waller\n      同义词: 涙, 涙, 泪, 涕\n    ',
  },
  {
    question: '冷静',
    answer: 'reisei',
    explantion: '\n      汉字: 冷静\n      读音: れいせい\n      意思: calm\n      来源: composure\n      同义词: 冷静\n    ',
  },
  {
    question: '礼',
    answer: 'rei',
    explantion: '\n      汉字: 礼\n      读音: れい\n      意思: expression of gratitude\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '礼儀',
    answer: 'reigi',
    explantion: '\n      汉字: 礼儀\n      读音: れいぎ\n      意思: manners\n      来源: courtesy\n      同义词: 礼儀\n    ',
  },
  {
    question: '列',
    answer: 'retsu',
    explantion: '\n      汉字: 列\n      读音: れつ\n      意思: queue\n      来源: line\n      同义词: 列\n    ',
  },
  {
    question: '列車',
    answer: 'resshiya',
    explantion: '\n      汉字: 列車\n      读音: れっしゃ\n      意思: train (ordinary)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '劣る',
    answer: 'otoru',
    explantion: '\n      汉字: 劣る\n      读音: おとる\n      意思: to fall behind\n      来源: to be inferior to\n      同义词: 劣る\n    ',
  },
  {
    question: '恋',
    answer: 'koi',
    explantion: '\n      汉字: 恋\n      读音: こい\n      意思: love\n      来源: tender passion\n      同义词: 恋, 戀, 孤悲\n    ',
  },
  {
    question: '恋人',
    answer: 'koibito',
    explantion: '\n      汉字: 恋人\n      读音: こいびと\n      意思: lover\n      来源: sweetheart\n      同义词: 恋人\n    ',
  },
  {
    question: '連れ',
    answer: 'tsure',
    explantion: '\n      汉字: 連れ\n      读音: つれ\n      意思: companion\n      来源: company\n      同义词: 連れ, \n    ',
  },
  {
    question: '連想',
    answer: 'renso',
    explantion: '\n      汉字: 連想\n      读音: れんそう\n      意思: association (of ideas)\n      来源: suggestion\n      同义词: 連想, 聯想\n    ',
  },
  {
    question: '連続',
    answer: 'renzoku',
    explantion: '\n      汉字: 連続\n      读音: れんぞく\n      意思: serial\n      来源: consecutive\n      同义词: 連続\n    ',
  },
  {
    question: '老人',
    answer: 'rojin',
    explantion: '\n      汉字: 老人\n      读音: ろうじん\n      意思: the aged\n      来源: old person\n      同义词: 老人\n    ',
  },
  {
    question: '論じる',
    answer: 'ronjiru',
    explantion: '\n      汉字: 論じる\n      读音: ろんじる\n      意思: to argue\n      来源: to discuss\n      同义词: 論じる\n    ',
  },
  {
    question: '論争',
    answer: 'ronso',
    explantion: '\n      汉字: 論争\n      读音: ろんそう\n      意思: controversy\n      来源: dispute\n      同义词: 論争\n    ',
  },
  {
    question: '論文',
    answer: 'ronbun',
    explantion: '\n      汉字: 論文\n      读音: ろんぶん\n      意思: thesis\n      来源: essay\n      同义词: 論文\n    ',
  },
  {
    question: '話し合う',
    answer: 'hanashiau',
    explantion: '\n      汉字: 話し合う\n      读音: はなしあう\n      意思: to discuss\n      来源: to talk together\n      同义词: 話し合う, 話しあう, 話合う\n    ',
  },
  {
    question: '話題',
    answer: 'wadai',
    explantion: '\n      汉字: 話題\n      读音: わだい\n      意思: topic\n      来源: subject\n      同义词: 話題\n    ',
  },
  {
    question: '脇',
    answer: 'waki',
    explantion: '\n      汉字: 脇\n      读音: わき\n      意思: side\n      来源: waller\n      同义词: 腋, 掖\n    ',
  },
  {
    question: '湾',
    answer: 'wan',
    explantion: '\n      汉字: 湾\n      读音: わん\n      意思: bay\n      来源: gulf\n      同义词: 湾\n    ',
  },
  {
    question: '埃',
    answer: 'hokori',
    explantion: '\n      汉字: 埃\n      读音: ほこり\n      意思: dust\n      来源: waller\n      同义词: , , 埃, \n    ',
  },
  {
    question: '贅沢',
    answer: 'zeitaku',
    explantion: '\n      汉字: 贅沢\n      读音: ぜいたく\n      意思: luxury\n      来源: extravagance\n      同义词: 贅沢\n    ',
  },
  {
    question: '鋏',
    answer: 'hasami',
    explantion: '\n      汉字: 鋏\n      读音: はさみ\n      意思: scissors\n      来源: waller\n      同义词: , 剪刀, \n    ',
  },
  {
    question: '悪口',
    answer: 'warukuchi',
    explantion: '\n      汉字: 悪口\n      读音: わるくち\n      意思: abuse\n      来源: insult\n      同义词: 悪口, 悪口, 悪口, 惡口, 惡口, 惡口\n    ',
  },
  {
    question: '一家',
    answer: 'ikka',
    explantion: '\n      汉字: 一家\n      读音: いっか\n      意思: a house\n      来源: a home\n      同义词: 一家, 一家\n    ',
  },
  {
    question: '一言',
    answer: 'hitokoto',
    explantion: '\n      汉字: 一言\n      读音: ひとこと\n      意思: single word\n      来源: waller\n      同义词: 一言, 一言, ひと言\n    ',
  },
  {
    question: '一時',
    answer: 'ichiji',
    explantion: '\n      汉字: 一時\n      读音: いちじ\n      意思: moment\n      来源: time\n      同义词: 一時\n    ',
  },
  {
    question: '独り',
    answer: 'hitori',
    explantion: '\n      汉字: 独り\n      读音: ひとり\n      意思: alone\n      来源: unmarried\n      同义词: 独り\n    ',
  },
  {
    question: '一生',
    answer: 'issho',
    explantion: '\n      汉字: 一生\n      读音: いっしょう\n      意思: whole life\n      来源: a lifetime\n      同义词: 一生\n    ',
  },
  {
    question: '永久',
    answer: 'eikyu',
    explantion: '\n      汉字: 永久\n      读音: えいきゅう\n      意思: eternity\n      来源: perpetuity\n      同义词: 永久, 永久, 永久, 常, 長しえ, 常しえ, 永え, 永\n    ',
  },
  {
    question: '音',
    answer: 'on',
    explantion: '\n      汉字: 音\n      读音: おん\n      意思: sound\n      来源: note\n      同义词: 音\n    ',
  },
  {
    question: '化粧',
    answer: 'kesho',
    explantion: '\n      汉字: 化粧\n      读音: けしょう\n      意思: make-up (cosmetic)\n      来源: waller\n      同义词: 化粧, 化粧, 仮粧, 仮粧, 仮粧\n    ',
  },
  {
    question: '管',
    answer: 'kuda',
    explantion: '\n      汉字: 管\n      读音: くだ\n      意思: pipe\n      来源: tube\n      同义词: 管, 管\n    ',
  },
  {
    question: '嗽',
    answer: 'ugai',
    explantion: '\n      汉字: 嗽\n      读音: うがい\n      意思: gargle\n      来源: rinse mouth\n      同义词: 嗽, , 漱\n    ',
  },
  {
    question: '居る',
    answer: 'oru',
    explantion: '\n      汉字: 居る\n      读音: おる\n      意思: to be (animate)\n      来源: to be\n      同义词: 居る, \n    ',
  },
  {
    question: '魚',
    answer: 'uo',
    explantion: '\n      汉字: 魚\n      读音: うお\n      意思: fish\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '工場',
    answer: 'koba',
    explantion: '\n      汉字: 工場\n      读音: こうば\n      意思: factory\n      来源: plant\n      同义词: 工場\n    ',
  },
  {
    question: '行き',
    answer: 'yuki',
    explantion: '\n      汉字: 行き\n      读音: ゆき\n      意思: going\n      来源: waller\n      同义词: 往き, 往き\n    ',
  },
  {
    question: '頃',
    answer: 'koro',
    explantion: '\n      汉字: 頃\n      读音: ころ\n      意思: time\n      来源: about\n      同义词: 頃, , , 頃, 比, 比\n    ',
  },
  {
    question: '今日',
    answer: 'konnichi',
    explantion: '\n      汉字: 今日\n      读音: こんにち\n      意思: today\n      来源: this day\n      同义词: 今日\n    ',
  },
  {
    question: '最中',
    answer: 'saichiyuu',
    explantion: '\n      汉字: 最中\n      读音: さいちゅう\n      意思: in the middle of\n      来源: waller\n      同义词: 最中, さ中\n    ',
  },
  {
    question: '姉妹',
    answer: 'shimai',
    explantion: '\n      汉字: 姉妹\n      读音: しまい\n      意思: sisters\n      来源: waller\n      同义词: 姉妹\n    ',
  },
  {
    question: '傷',
    answer: 'kizu',
    explantion: '\n      汉字: 傷\n      读音: きず\n      意思: wound\n      来源: injury\n      同义词: 傷, 疵, 瑕, 創, \n    ',
  },
  {
    question: '商人',
    answer: 'shonin',
    explantion: '\n      汉字: 商人\n      读音: しょうにん\n      意思: trader\n      来源: shopkeeper\n      同义词: 商人, 商人, 商人, 商人, 商人\n    ',
  },
  {
    question: '少女',
    answer: 'shojiyo',
    explantion: '\n      汉字: 少女\n      读音: しょうじょ\n      意思: daughter\n      来源: young lady\n      同义词: 少女, 少女, 乙女, 小女\n    ',
  },
  {
    question: '乗客',
    answer: 'jiyoukyaku',
    explantion: '\n      汉字: 乗客\n      读音: じょうきゃく\n      意思: passenger\n      来源: waller\n      同义词: 乗客\n    ',
  },
  {
    question: '真っ直ぐ',
    answer: 'massugu',
    explantion: '\n      汉字: 真っ直ぐ\n      读音: まっすぐ\n      意思: straight (ahead)\n      来源: direct\n      同义词: 真っ直ぐ\n    ',
  },
  {
    question: '数',
    answer: 'kazu',
    explantion: '\n      汉字: 数\n      读音: かず\n      意思: number\n      来源: figure\n      同义词: 数\n    ',
  },
  {
    question: '数',
    answer: 'suu',
    explantion: '\n      汉字: 数\n      读音: すう\n      意思: number\n      来源: figure\n      同义词: 数\n    ',
  },
  {
    question: '全国',
    answer: 'zenkoku',
    explantion: '\n      汉字: 全国\n      读音: ぜんこく\n      意思: country-wide\n      来源: nation-wide\n      同义词: 全国\n    ',
  },
  {
    question: '他人',
    answer: 'tanin',
    explantion: '\n      汉字: 他人\n      读音: たにん\n      意思: another person\n      来源: unrelated person\n      同义词: 他人, 他人, 他人\n    ',
  },
  {
    question: '谷',
    answer: 'tani',
    explantion: '\n      汉字: 谷\n      读音: たに\n      意思: valley\n      来源: waller\n      同义词: 渓, 谿\n    ',
  },
  {
    question: '端',
    answer: 'hashi',
    explantion: '\n      汉字: 端\n      读音: はし\n      意思: end (e.g. of street)\n      来源: edge\n      同义词: 端, 端, 端\n    ',
  },
  {
    question: '注ぐ',
    answer: 'sosogu',
    explantion: '\n      汉字: 注ぐ\n      读音: そそぐ\n      意思: to pour (into)\n      来源: to irrigate\n      同义词: 注ぐ, 灌ぐ, 潅ぐ, 濺ぐ, 漑ぐ\n    ',
  },
  {
    question: '直',
    answer: 'jiki',
    explantion: '\n      汉字: 直\n      读音: じき\n      意思: earnestly\n      来源: immediately\n      同义词: 直\n    ',
  },
  {
    question: '敵',
    answer: 'teki',
    explantion: '\n      汉字: 敵\n      读音: てき\n      意思: enemy\n      来源: rival\n      同义词: 敵\n    ',
  },
  {
    question: '転ぶ',
    answer: 'korobu',
    explantion: '\n      汉字: 転ぶ\n      读音: ころぶ\n      意思: to fall down\n      来源: to fall over\n      同义词: 転ぶ, 転ぶ\n    ',
  },
  {
    question: '灯',
    answer: 'hi',
    explantion: '\n      汉字: 灯\n      读音: ひ\n      意思: light\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '等',
    answer: 'nado',
    explantion: '\n      汉字: 等\n      读音: など\n      意思: et cetera\n      来源: etc.\n      同义词: 等\n    ',
  },
  {
    question: '日本',
    answer: 'nihon',
    explantion: '\n      汉字: 日本\n      读音: にほん\n      意思: Japan\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '年月',
    answer: 'nengetsu',
    explantion: '\n      汉字: 年月\n      读音: ねんげつ\n      意思: months and years\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '梅雨',
    answer: 'tsuyu',
    explantion: '\n      汉字: 梅雨\n      读音: つゆ\n      意思: rainy season\n      来源: rain during the rainy season\n      同义词: 梅雨, 黴雨, 黴雨, 梅雨\n    ',
  },
  {
    question: '否',
    answer: 'ie',
    explantion: '\n      汉字: 否\n      读音: いえ\n      意思: TODO same as いいえ?\n      来源: waller\n      同义词: 否\n    ',
  },
  {
    question: '避ける',
    answer: 'sakeru',
    explantion: '\n      汉字: 避ける\n      读音: さける\n      意思: (1) to avoid (physical contact )\n      来源: (2) to ward off\n      同义词: 避ける, 避ける, 除ける\n    ',
  },
  {
    question: '描く',
    answer: 'egaku',
    explantion: '\n      汉字: 描く\n      读音: えがく\n      意思: to draw\n      来源: to paint\n      同义词: 描く, 画く, 画く, 描く\n    ',
  },
  {
    question: '品',
    answer: 'shina',
    explantion: '\n      汉字: 品\n      读音: しな\n      意思: thing\n      来源: article\n      同义词: 品, , 科, 階\n    ',
  },
  {
    question: '夫婦',
    answer: 'fuufu',
    explantion: '\n      汉字: 夫婦\n      读音: ふうふ\n      意思: married couple\n      来源: husband and wife\n      同义词: 夫婦, 夫婦, 夫婦\n    ',
  },
  {
    question: '平均',
    answer: 'eikin',
    explantion: '\n      汉字: 平均\n      读音: へいきん\n      意思: equilibrium\n      来源: balance\n      同义词: 平均, 平均\n    ',
  },
  {
    question: '抱く',
    answer: 'idaku',
    explantion: '\n      汉字: 抱く\n      读音: いだく\n      意思: (sl) to embrace\n      来源: to hug\n      同义词: 抱く, 懐く\n    ',
  },
  {
    question: '方々',
    answer: 'katagata',
    explantion: '\n      汉字: 方々\n      读音: かたがた\n      意思: persons\n      来源: this and that\n      同义词: 方々, 方方, 方がた\n    ',
  },
  {
    question: '方々',
    answer: 'hobo',
    explantion: '\n      汉字: 方々\n      读音: ほうぼう\n      意思: persons\n      来源: this and that\n      同义词: 方々, 方方\n    ',
  },
  {
    question: '頬',
    answer: 'ho',
    explantion: '\n      汉字: 頬\n      读音: ほお\n      意思: cheek (of face)\n      来源: waller\n      同义词: 頰, 頰\n    ',
  },
  {
    question: '明後日',
    answer: 'miyougonichi',
    explantion: '\n      汉字: 明後日\n      读音: みょうごにち\n      意思: day after tomorrow\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '面',
    answer: 'men',
    explantion: '\n      汉字: 面\n      读音: めん\n      意思: face\n      来源: mug\n      同义词: 面\n    ',
  },
  {
    question: '余り',
    answer: 'amari',
    explantion: '\n      汉字: 余り\n      读音: あまり\n      意思: not very (used as adverb)\n      来源: not much\n      同义词: 余り, \n    ',
  },
  {
    question: '雷',
    answer: 'kaminari',
    explantion: '\n      汉字: 雷\n      读音: かみなり\n      意思: thunder\n      来源: waller\n      同义词: 雷, 雷, 雷\n    ',
  },
  {
    question: '流行',
    answer: 'ryuko',
    explantion: '\n      汉字: 流行\n      读音: りゅうこう\n      意思: fashionable\n      来源: fad\n      同义词: 流行\n    ',
  },
  {
    question: '例',
    answer: 'rei',
    explantion: '\n      汉字: 例\n      读音: れい\n      意思: instance\n      来源: example\n      同义词: 例\n    ',
  },
  {
    question: '明かり',
    answer: 'akari',
    explantion: '\n      汉字: 明かり\n      读音: あかり\n      意思: lamplight\n      来源: light (in general)\n      同义词: 明かり, 明り, 灯り, 灯, 灯かり, 灯火\n    ',
  },
  {
    question: '飽きる',
    answer: 'akiru',
    explantion: '\n      汉字: 飽きる\n      读音: あきる\n      意思: to get tired of\n      来源: to lose interest in\n      同义词: 飽きる, 厭きる, 倦きる, 倦る\n    ',
  },
  {
    question: '粗',
    answer: 'ara',
    explantion: '\n      汉字: 粗\n      读音: あら\n      意思: defect\n      来源: flaw\n      同义词: 粗, , 荒, \n    ',
  },
  {
    question: '或',
    answer: 'aru',
    explantion: '\n      汉字: 或\n      读音: ある\n      意思: a certain...\n      来源: some...\n      同义词: 或, , 或る\n    ',
  },
  {
    question: '暗記',
    answer: 'anki',
    explantion: '\n      汉字: 暗記\n      读音: あんき\n      意思: memorization\n      来源: learning by heart\n      同义词: 暗記, 諳記\n    ',
  },
  {
    question: '言う',
    answer: 'yuu',
    explantion: '\n      汉字: 言う\n      读音: ゆう\n      意思: to say\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '頂く',
    answer: 'itadaku',
    explantion: '\n      汉字: 頂く\n      读音: いただく\n      意思: to receive\n      来源: to take food or drink (hum)\n      同义词: 頂く\n    ',
  },
  {
    question: '痛み',
    answer: 'itami',
    explantion: '\n      汉字: 痛み\n      读音: いたみ\n      意思: pain\n      来源: ache\n      同义词: 痛み, 傷み\n    ',
  },
  {
    question: '位置',
    answer: 'ichi',
    explantion: '\n      汉字: 位置\n      读音: いち\n      意思: place\n      来源: situation\n      同义词: 位置, 位地\n    ',
  },
  {
    question: '得る',
    answer: 'eru',
    explantion: '\n      汉字: 得る\n      读音: える\n      意思: to get\n      来源: to gain\n      同义词: 得る, 獲る\n    ',
  },
  {
    question: '追い付く',
    answer: 'oitsuku',
    explantion: '\n      汉字: 追い付く\n      读音: おいつく\n      意思: to overtake\n      来源: to catch up (with)\n      同义词: 追い付く, 追いつく, 追い着く, 追付く, 追着く, おい付く\n    ',
  },
  {
    question: '覆う',
    answer: 'oou',
    explantion: '\n      汉字: 覆う\n      读音: おおう\n      意思: to cover\n      来源: to hide\n      同义词: 覆う, 被う, 掩う, 蔽う, 蓋う\n    ',
  },
  {
    question: '丘',
    answer: 'oka',
    explantion: '\n      汉字: 丘\n      读音: おか\n      意思: hill\n      来源: height\n      同义词: 丘, , 岡, 壟, 陸符\n    ',
  },
  {
    question: '収める',
    answer: 'osameru',
    explantion: '\n      汉字: 収める\n      读音: おさめる\n      意思: to obtain\n      来源: to reap\n      同义词: 収める, 納める\n    ',
  },
  {
    question: '恐れる',
    answer: 'osoreru',
    explantion: '\n      汉字: 恐れる\n      读音: おそれる\n      意思: to fear\n      来源: to be afraid of\n      同义词: 恐れる, 怖れる, 畏れる, 懼れる, 惧れる\n    ',
  },
  {
    question: '思い出',
    answer: 'omoide',
    explantion: '\n      汉字: 思い出\n      读音: おもいで\n      意思: memories\n      来源: recollections\n      同义词: 思い出, 想い出, 思いで, 想いで, 思出\n    ',
  },
  {
    question: '下す',
    answer: 'orosu',
    explantion: '\n      汉字: 下す\n      读音: おろす\n      意思: to lower\n      来源: to let go down\n      同义词: 下す, 下ろす, 降ろす\n    ',
  },
  {
    question: '終',
    answer: 'owari',
    explantion: '\n      汉字: 終\n      读音: おわり\n      意思: the end\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '替える',
    answer: 'kaeru',
    explantion: '\n      汉字: 替える\n      读音: かえる\n      意思: to exchange\n      来源: to interchange\n      同义词: 替える, 代える, 換える\n    ',
  },
  {
    question: '香り',
    answer: 'kaori',
    explantion: '\n      汉字: 香り\n      读音: かおり\n      意思: aroma\n      来源: fragrance\n      同义词: 香り, 薫り, 馨り, 香, 薫\n    ',
  },
  {
    question: '係',
    answer: 'kakari',
    explantion: '\n      汉字: 係\n      读音: かかり\n      意思: official\n      来源: duty\n      同义词: 係, 係り\n    ',
  },
  {
    question: '影',
    answer: 'kage',
    explantion: '\n      汉字: 影\n      读音: かげ\n      意思: shade\n      来源: shadow\n      同义词: 影, 景\n    ',
  },
  {
    question: '陰',
    answer: 'kage',
    explantion: '\n      汉字: 陰\n      读音: かげ\n      意思: shade\n      来源: shadow\n      同义词: 陰, 蔭, 翳\n    ',
  },
  {
    question: '籠',
    answer: 'kago',
    explantion: '\n      汉字: 籠\n      读音: かご\n      意思: basket\n      来源: cage\n      同义词: 籠, , 篭, \n    ',
  },
  {
    question: '科目',
    answer: 'kamoku',
    explantion: '\n      汉字: 科目\n      读音: かもく\n      意思: (school) subject\n      来源: curriculum\n      同义词: 科目, 課目\n    ',
  },
  {
    question: '効く',
    answer: 'kiku',
    explantion: '\n      汉字: 効く\n      读音: きく\n      意思: to be effective\n      来源: waller\n      同义词: 利く\n    ',
  },
  {
    question: '気付く',
    answer: 'kizuku',
    explantion: '\n      汉字: 気付く\n      读音: きづく\n      意思: to notice\n      来源: to recognize\n      同义词: 気付く, 気づく\n    ',
  },
  {
    question: '寄付',
    answer: 'kifu',
    explantion: '\n      汉字: 寄付\n      读音: きふ\n      意思: contribution\n      来源: donation\n      同义词: 寄付, 寄附\n    ',
  },
  {
    question: '共同',
    answer: 'kyodo',
    explantion: '\n      汉字: 共同\n      读音: きょうどう\n      意思: cooperation\n      来源: association\n      同义词: 共同, 協同\n    ',
  },
  {
    question: '協力',
    answer: 'kiyouryoku',
    explantion: '\n      汉字: 協力\n      读音: きょうりょく\n      意思: cooperation\n      来源: collaboration\n      同义词: 協力, 共力\n    ',
  },
  {
    question: '食う',
    answer: 'kuu',
    explantion: '\n      汉字: 食う\n      读音: くう\n      意思: (male) (vulg) to eat\n      来源: waller\n      同义词: 喰う, 啖う\n    ',
  },
  {
    question: '曇',
    answer: 'kumori',
    explantion: '\n      汉字: 曇\n      读音: くもり\n      意思: cloudiness\n      来源: cloudy weather\n      同义词: 曇\n    ',
  },
  {
    question: '幸運',
    answer: 'koun',
    explantion: '\n      汉字: 幸運\n      读音: こううん\n      意思: good luck\n      来源: fortune\n      同义词: 幸運, 好運\n    ',
  },
  {
    question: '越える',
    answer: 'koeru',
    explantion: '\n      汉字: 越える\n      读音: こえる\n      意思: to exceed\n      来源: to cross over\n      同义词: 越える, 超える\n    ',
  },
  {
    question: '凍る',
    answer: 'koru',
    explantion: '\n      汉字: 凍る\n      读音: こおる\n      意思: to freeze\n      来源: to be frozen over\n      同义词: 凍る, 氷る, 凍おる\n    ',
  },
  {
    question: '小包',
    answer: 'kozutsumi',
    explantion: '\n      汉字: 小包\n      读音: こづつみ\n      意思: parcel\n      来源: package\n      同义词: 小包, 小包み\n    ',
  },
  {
    question: '桜',
    answer: 'sakura',
    explantion: '\n      汉字: 桜\n      读音: さくら\n      意思: cherry blossom\n      来源: cherry tree\n      同义词: 桜, 櫻, \n    ',
  },
  {
    question: '砂漠',
    answer: 'sabaku',
    explantion: '\n      汉字: 砂漠\n      读音: さばく\n      意思: desert\n      来源: waller\n      同义词: 沙漠\n    ',
  },
  {
    question: '様々',
    answer: 'samazama',
    explantion: '\n      汉字: 様々\n      读音: さまざま\n      意思: varied\n      来源: various\n      同义词: 様々, 様様\n    ',
  },
  {
    question: '幸せ',
    answer: 'shiawase',
    explantion: '\n      汉字: 幸せ\n      读音: しあわせ\n      意思: happiness\n      来源: good fortune\n      同义词: 幸せ, 幸せ, 仕合わせ, 仕合わせ, 倖せ, 倖せ, 仕合せ, 仕合せ\n    ',
  },
  {
    question: '刺激',
    answer: 'shigeki',
    explantion: '\n      汉字: 刺激\n      读音: しげき\n      意思: stimulus\n      来源: impetus\n      同义词: 刺激, 刺戟, 剌激\n    ',
  },
  {
    question: '支払',
    answer: 'shiharai',
    explantion: '\n      汉字: 支払\n      读音: しはらい\n      意思: payment\n      来源: waller\n      同义词: 支払い\n    ',
  },
  {
    question: '仕舞い',
    answer: 'shimai',
    explantion: '\n      汉字: 仕舞い\n      读音: しまい\n      意思: sisters\n      来源: waller\n      同义词: 仕舞, 終い, 了い\n    ',
  },
  {
    question: '少々',
    answer: 'shosho',
    explantion: '\n      汉字: 少々\n      读音: しょうしょう\n      意思: just a minute\n      来源: small quantity\n      同义词: 少々, 少少, 小々, 小小\n    ',
  },
  {
    question: '銀',
    answer: 'gin',
    explantion: '\n      汉字: 銀\n      读音: ぎん\n      意思: (1) silver\n      来源: silver coin\n      同义词: 銀, 銀, 銀, 白銀, 白銀, 白金, 白金\n    ',
  },
  {
    question: '事態',
    answer: 'jitai',
    explantion: '\n      汉字: 事態\n      读音: じたい\n      意思: situation\n      来源: present state of affairs\n      同义词: 事態, 事体\n    ',
  },
  {
    question: '徐々に',
    answer: 'jojoni',
    explantion: '\n      汉字: 徐々に\n      读音: じょじょに\n      意思: slowly\n      来源: little by little\n      同义词: 徐々に, 徐徐に, 除々に, 除除に\n    ',
  },
  {
    question: '勧める',
    answer: 'susumeru',
    explantion: '\n      汉字: 勧める\n      读音: すすめる\n      意思: to recommend\n      来源: to advise\n      同义词: 勧める, 薦める, 奨める\n    ',
  },
  {
    question: '全て',
    answer: 'subete',
    explantion: '\n      汉字: 全て\n      读音: すべて\n      意思: all\n      来源: the whole\n      同义词: 全て, , 総て, 凡て, 惣て, 渾て, 総べて\n    ',
  },
  {
    question: '精々',
    answer: 'seizei',
    explantion: '\n      汉字: 精々\n      读音: せいぜい\n      意思: at the most\n      来源: at best\n      同义词: 精々, , 精精\n    ',
  },
  {
    question: '退屈',
    answer: 'taikutsu',
    explantion: '\n      汉字: 退屈\n      读音: たいくつ\n      意思: tedium\n      来源: boredom\n      同义词: 退屈, 怠屈\n    ',
  },
  {
    question: '戦い',
    answer: 'tatakai',
    explantion: '\n      汉字: 戦い\n      读音: たたかい\n      意思: battle\n      来源: fight\n      同义词: 戦い, 闘い, 斗い\n    ',
  },
  {
    question: '戦う',
    answer: 'tatakau',
    explantion: '\n      汉字: 戦う\n      读音: たたかう\n      意思: to fight\n      来源: to battle\n      同义词: 戦う, 闘う\n    ',
  },
  {
    question: '例え',
    answer: 'tatoe',
    explantion: '\n      汉字: 例え\n      读音: たとえ\n      意思: simile\n      来源: metaphor\n      同义词: 例え, 喩え, 譬え\n    ',
  },
  {
    question: '偶々',
    answer: 'tamatama',
    explantion: '\n      汉字: 偶々\n      读音: たまたま\n      意思: casually\n      来源: unexpectedly\n      同义词: 偶々, , 偶偶, 偶, 適\n    ',
  },
  {
    question: '頼る',
    answer: 'tayoru',
    explantion: '\n      汉字: 頼る\n      读音: たよる\n      意思: to rely on\n      来源: to have recourse to\n      同义词: 頼る, 便る\n    ',
  },
  {
    question: '次々',
    answer: 'tsugitsugi',
    explantion: '\n      汉字: 次々\n      读音: つぎつぎ\n      意思: in succession\n      来源: one by one\n      同义词: 次々, 次次\n    ',
  },
  {
    question: '出会う',
    answer: 'deau',
    explantion: '\n      汉字: 出会う\n      读音: であう\n      意思: to meet by chance\n      来源: to come across\n      同义词: 出会う, 出逢う, 出合う, 出遭う, 出あう\n    ',
  },
  {
    question: '年寄',
    answer: 'toshiyori',
    explantion: '\n      汉字: 年寄\n      读音: としより\n      意思: old people\n      来源: the aged\n      同义词: 年寄, 年寄り, 年より\n    ',
  },
  {
    question: '匂い',
    answer: 'nioi',
    explantion: '\n      汉字: 匂い\n      读音: におい\n      意思: odour\n      来源: scent\n      同义词: 匂い\n    ',
  },
  {
    question: '値段',
    answer: 'nedan',
    explantion: '\n      汉字: 値段\n      读音: ねだん\n      意思: price\n      来源: cost\n      同义词: 値段\n    ',
  },
  {
    question: '年齢',
    answer: 'nenrei',
    explantion: '\n      汉字: 年齢\n      读音: ねんれい\n      意思: age\n      来源: years\n      同义词: 年齢, 年令\n    ',
  },
  {
    question: '残す',
    answer: 'nokosu',
    explantion: '\n      汉字: 残す\n      读音: のこす\n      意思: to leave (behind\n      来源:  over)\n      同义词: 残す\n    ',
  },
  {
    question: '乗せる',
    answer: 'noseru',
    explantion: '\n      汉字: 乗せる\n      读音: のせる\n      意思: to place on (something)\n      来源: to take on board\n      同义词: 乗せる, 載せる\n    ',
  },
  {
    question: '伸ばす',
    answer: 'nobasu',
    explantion: '\n      汉字: 伸ばす\n      读音: のばす\n      意思: to lengthen\n      来源: to stretch\n      同义词: 伸ばす, 延ばす\n    ',
  },
  {
    question: '計る',
    answer: 'hakaru',
    explantion: '\n      汉字: 計る\n      读音: はかる\n      意思: to measure\n      来源: to weigh\n      同义词: 計る, 測る, 量る\n    ',
  },
  {
    question: '激しい',
    answer: 'hageshii',
    explantion: '\n      汉字: 激しい\n      读音: はげしい\n      意思: violent\n      来源: vehement\n      同义词: 激しい, 劇しい, 烈しい\n    ',
  },
  {
    question: '二十',
    answer: 'hatachi',
    explantion: '\n      汉字: 二十\n      读音: はたち\n      意思: 20 years old\n      来源: 20th year\n      同义词: 二十\n    ',
  },
  {
    question: '馬鹿',
    answer: 'baka',
    explantion: '\n      汉字: 馬鹿\n      读音: ばか\n      意思: fool\n      来源: idiot\n      同义词: 馬鹿, , 莫迦, 破家, 馬稼, \n    ',
  },
  {
    question: '必死',
    answer: 'hitsushi',
    explantion: '\n      汉字: 必死\n      读音: ひっし\n      意思: inevitable death\n      来源: desperation\n      同义词: 必死\n    ',
  },
  {
    question: '引っ張る',
    answer: 'hipparu',
    explantion: '\n      汉字: 引っ張る\n      读音: ひっぱる\n      意思: (1) to pull\n      来源: to draw\n      同义词: 引っ張る, 引っぱる, 引張る\n    ',
  },
  {
    question: '昼食',
    answer: 'chushoku',
    explantion: '\n      汉字: 昼食\n      读音: ちゅうしょく\n      意思: lunch\n      来源: midday meal\n      同义词: 昼食, 昼食, 昼食, 中食, 昼餉\n    ',
  },
  {
    question: '広がる',
    answer: 'hirogaru',
    explantion: '\n      汉字: 広がる\n      读音: ひろがる\n      意思: to spread (out)\n      来源: to extend\n      同义词: 広がる, 拡がる\n    ',
  },
  {
    question: '船',
    answer: 'fune',
    explantion: '\n      汉字: 船\n      读音: ふね\n      意思: ship\n      来源: boat\n      同义词: 船\n    ',
  },
  {
    question: '故郷',
    answer: 'kokyo',
    explantion: '\n      汉字: 故郷\n      读音: こきょう\n      意思: home town\n      来源: birthplace\n      同义词: 故郷, , 故郷, , ふる里, 古里, 旧里, , 旧里, 故里\n    ',
  },
  {
    question: '吠える',
    answer: 'hoeru',
    explantion: '\n      汉字: 吠える\n      读音: ほえる\n      意思: to bark\n      来源: to bay\n      同义词: 吠える, 吠る, 吼える\n    ',
  },
  {
    question: '保証',
    answer: 'hosho',
    explantion: '\n      汉字: 保証\n      读音: ほしょう\n      意思: guarantee\n      来源: security\n      同义词: 保証, 保障\n    ',
  },
  {
    question: '褒める',
    answer: 'homeru',
    explantion: '\n      汉字: 褒める\n      读音: ほめる\n      意思: to praise\n      来源: to admire\n      同义词: 褒める\n    ',
  },
  {
    question: '街',
    answer: 'machi',
    explantion: '\n      汉字: 街\n      读音: まち\n      意思: (1) town\n      来源: (2) street\n      同义词: 街\n    ',
  },
  {
    question: '祭',
    answer: 'matsuri',
    explantion: '\n      汉字: 祭\n      读音: まつり\n      意思: festival\n      来源: feast\n      同义词: 祭, 祭り\n    ',
  },
  {
    question: '満ちる',
    answer: 'michiru',
    explantion: '\n      汉字: 満ちる\n      读音: みちる\n      意思: to be full\n      来源: to rise (tide)\n      同义词: 満ちる, 充ちる, 盈ちる\n    ',
  },
  {
    question: '見舞い',
    answer: 'mimai',
    explantion: '\n      汉字: 見舞い\n      读音: みまい\n      意思: enquiry\n      来源: expression of sympathy\n      同义词: 見舞い, 見舞\n    ',
  },
  {
    question: '向かい',
    answer: 'mukai',
    explantion: '\n      汉字: 向かい\n      读音: むかい\n      意思: facing\n      来源: opposite\n      同义词: 向かい, 向い, 対い\n    ',
  },
  {
    question: '虫歯',
    answer: 'mushiba',
    explantion: '\n      汉字: 虫歯\n      读音: むしば\n      意思: cavity\n      来源: tooth decay\n      同义词: 虫歯, むし歯, 齲歯, 齲歯, 齲歯, 齲\n    ',
  },
  {
    question: '寧ろ',
    answer: 'mushiro',
    explantion: '\n      汉字: 寧ろ\n      读音: むしろ\n      意思: rather\n      来源: better\n      同义词: 寧ろ, , 寧\n    ',
  },
  {
    question: '基づく',
    answer: 'motozuku',
    explantion: '\n      汉字: 基づく\n      读音: もとづく\n      意思: to be grounded on\n      来源: to be based on\n      同义词: 基づく, 基付く, 基く\n    ',
  },
  {
    question: '雇う',
    answer: 'yatou',
    explantion: '\n      汉字: 雇う\n      读音: やとう\n      意思: to employ\n      来源: to hire\n      同义词: 雇う, 傭う\n    ',
  },
  {
    question: '郵便',
    answer: 'yuubin',
    explantion: '\n      汉字: 郵便\n      读音: ゆうびん\n      意思: mail\n      来源: postal service\n      同义词: 郵便, 〒\n    ',
  },
  {
    question: '有利',
    answer: 'yuuri',
    explantion: '\n      汉字: 有利\n      读音: ゆうり\n      意思: advantageous\n      来源: better\n      同义词: 有利, 優利\n    ',
  },
  {
    question: '様',
    answer: 'yo',
    explantion: '\n      汉字: 様\n      读音: よう\n      意思: way\n      来源: manner\n      同义词: 様, \n    ',
  },
  {
    question: '喜び',
    answer: 'yorokobi',
    explantion: '\n      汉字: 喜び\n      读音: よろこび\n      意思: (a) joy\n      来源: (a) delight\n      同义词: 喜び, 歓び, 慶び, 悦び\n    ',
  },
  {
    question: '労働',
    answer: 'rodo',
    explantion: '\n      汉字: 労働\n      读音: ろうどう\n      意思: manual labor\n      来源: toil\n      同义词: 労働, 労動\n    ',
  },
  {
    question: '我々',
    answer: 'wareware',
    explantion: '\n      汉字: 我々\n      读音: われわれ\n      意思: we\n      来源: waller\n      同义词: 吾々, 我我, 吾吾\n    ',
  },
  {
    question: '演奏',
    answer: 'enso',
    explantion: '\n      汉字: 演奏\n      读音: えんそう\n      意思: musical performance\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '空き',
    answer: 'aki',
    explantion: '\n      汉字: 空き\n      读音: あき\n      意思: room\n      来源: time to spare\n      同义词: 空き, 明き\n    ',
  },
  {
    question: '集まり',
    answer: 'atsumari',
    explantion: '\n      汉字: 集まり\n      读音: あつまり\n      意思: gathering\n      来源: meeting\n      同义词: 集まり, 集り\n    ',
  },
  {
    question: '一度に',
    answer: 'ichidoni',
    explantion: '\n      汉字: 一度に\n      读音: いちどに\n      意思: all at once\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '生まれ',
    answer: 'umare',
    explantion: '\n      汉字: 生まれ\n      读音: うまれ\n      意思: birth\n      来源: birth-place\n      同义词: 生まれ, 生れ\n    ',
  },
  {
    question: '罹る',
    answer: 'kakaru',
    explantion: '\n      汉字: 罹る\n      读音: かかる\n      意思: to suffer from\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '勝ち',
    answer: 'kachi',
    explantion: '\n      汉字: 勝ち\n      读音: かち\n      意思: win\n      来源: victory\n      同义词: 勝ち\n    ',
  },
  {
    question: '決まり',
    answer: 'kimari',
    explantion: '\n      汉字: 決まり\n      读音: きまり\n      意思: settlement\n      来源: conclusion\n      同义词: 決まり, 決り, 極まり, 極り\n    ',
  },
  {
    question: '所為',
    answer: 'sei',
    explantion: '\n      汉字: 所為\n      读音: せい\n      意思: cause\n      来源: reason\n      同义词: 所為, , , 所為\n    ',
  },
  {
    question: '対する',
    answer: 'taisuru',
    explantion: '\n      汉字: 対する\n      读音: たいする\n      意思: to face\n      来源: to confront\n      同义词: 対する\n    ',
  },
  {
    question: '現れ',
    answer: 'araware',
    explantion: '\n      汉字: 現れ\n      读音: あらわれ\n      意思: embodiment\n      来源: materialization\n      同义词: 現れ, 表れ, 現われ, 表われ, 顕れ\n    ',
  },
  {
    question: '違いない',
    answer: 'chigainai',
    explantion: '\n      汉字: 違いない\n      读音: ちがいない\n      意思: (phrase) sure\n      来源: no mistaking it\n      同义词: 違いない, 違い無い\n    ',
  },
  {
    question: '途端',
    answer: 'totan',
    explantion: '\n      汉字: 途端\n      读音: とたん\n      意思: just (now\n      来源:  at the moment\n      同义词: 途端\n    ',
  },
  {
    question: '眺め',
    answer: 'nagame',
    explantion: '\n      汉字: 眺め\n      读音: ながめ\n      意思: scene\n      来源: view\n      同义词: 眺め\n    ',
  },
  {
    question: '何で',
    answer: 'nande',
    explantion: '\n      汉字: 何で\n      读音: なんで\n      意思: Why?\n      来源: What for?\n      同义词: 何で, \n    ',
  },
  {
    question: '何でも',
    answer: 'nandemo',
    explantion: '\n      汉字: 何でも\n      读音: なんでも\n      意思: by all means\n      来源: everything\n      同义词: 何でも, \n    ',
  },
  {
    question: '始まり',
    answer: 'hajimari',
    explantion: '\n      汉字: 始まり\n      读音: はじまり\n      意思: origin\n      来源: beginning\n      同义词: 始まり\n    ',
  },
  {
    question: '滅多に',
    answer: 'mettani',
    explantion: '\n      汉字: 滅多に\n      读音: めったに\n      意思: rarely (with neg. verb)\n      来源: seldom\n      同义词: 滅多に\n    ',
  },
  {
    question: '一人一人',
    answer: 'hitorihitori',
    explantion: '\n      汉字: 一人一人\n      读音: ひとりひとり\n      意思: one by one\n      来源: each\n      同义词: 一人一人, 一人一人, １人１人, １人１人, 一人ひとり\n    ',
  },
  {
    question: '轢く',
    answer: 'hiku',
    explantion: '\n      汉字: 轢く\n      读音: ひく\n      意思: to run somebody over (with vehicle)\n      来源: to knock someone down\n      同义词: 轢く, \n    ',
  },
  {
    question: '泳ぎ',
    answer: 'oyogi',
    explantion: '\n      汉字: 泳ぎ\n      读音: およぎ\n      意思: swimming\n      来源: waller\n      同义词: 游ぎ\n    ',
  },
  {
    question: '中',
    answer: 'chiyuu',
    explantion: '\n      汉字: 中\n      读音: ちゅう\n      意思: inside\n      来源: middle\n      同义词: 中\n    ',
  },
  {
    question: '王',
    answer: 'ou',
    explantion: '\n      汉字: 王\n      读音: おう\n      意思: king\n      来源: ruler\n      同义词: 王\n    ',
  },
  {
    question: '段',
    answer: 'dan',
    explantion: '\n      汉字: 段\n      读音: だん\n      意思: step\n      来源: stair\n      同义词: 段\n    ',
  },
  {
    question: '老い',
    answer: 'oi',
    explantion: '\n      汉字: 老い\n      读音: おい\n      意思: old age\n      来源: old person\n      同义词: 老い\n    ',
  },
  {
    question: 'お昼',
    answer: 'ohiru',
    explantion: '\n      汉字: お昼\n      读音: おひる\n      意思: lunch\n      来源: noon\n      同义词: お昼, 御昼\n    ',
  },
  {
    question: '続き',
    answer: 'tsuzuki',
    explantion: '\n      汉字: 続き\n      读音: つづき\n      意思: sequel\n      来源: continuation\n      同义词: 続き\n    ',
  },
  {
    question: '出',
    answer: 'de',
    explantion: '\n      汉字: 出\n      读音: で\n      意思: outflow\n      来源: coming (going) out\n      同义词: 出, \n    ',
  },
  {
    question: '級',
    answer: 'kyu',
    explantion: '\n      汉字: 級\n      读音: きゅう\n      意思: class\n      来源:  grade\n      同义词: 級\n    ',
  },
  {
    question: '不',
    answer: 'fu',
    explantion: '\n      汉字: 不\n      读音: ふ\n      意思: un\n      来源: non\n      同义词: 不\n    ',
  },
  {
    question: '詩',
    answer: 'shi',
    explantion: '\n      汉字: 詩\n      读音: し\n      意思: poem\n      来源: verse of poetry\n      同义词: 詩\n    ',
  },
  {
    question: '他',
    answer: 'ta',
    explantion: '\n      汉字: 他\n      读音: た\n      意思: other (esp. places and things)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '学',
    answer: 'gaku',
    explantion: '\n      汉字: 学\n      读音: がく\n      意思: learning\n      来源: scholarship\n      同义词: 学\n    ',
  },
  {
    question: '訓',
    answer: 'kun',
    explantion: '\n      汉字: 訓\n      读音: くん\n      意思: native Japanese reading of a Chinese character\n      来源: waller\n      同义词: 訓\n    ',
  },
  {
    question: '無',
    answer: 'mu',
    explantion: '\n      汉字: 無\n      读音: む\n      意思: nothing\n      来源: naught\n      同义词: 無, 无\n    ',
  },
  {
    question: 'お互い',
    answer: 'otagai',
    explantion: '\n      汉字: お互い\n      读音: おたがい\n      意思: mutual\n      来源: reciprocal\n      同义词: お互い, 御互い\n    ',
  },
  {
    question: '密',
    answer: 'mitsu',
    explantion: '\n      汉字: 密\n      读音: みつ\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '番',
    answer: 'ban',
    explantion: '\n      汉字: 番\n      读音: ばん\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '訳',
    answer: 'yaku',
    explantion: '\n      汉字: 訳\n      读音: やく\n      意思: meaning\n      来源: reason\n      同义词: 訳\n    ',
  },
  {
    question: '偶',
    answer: 'tama',
    explantion: '\n      汉字: 偶\n      读音: たま\n      意思: even number\n      来源: couple\n      同义词: 偶, , 適\n    ',
  },
  {
    question: '軒',
    answer: 'ken',
    explantion: '\n      汉字: 軒\n      读音: けん\n      意思: eaves\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '下',
    answer: 'ge',
    explantion: '\n      汉字: 下\n      读音: げ\n      意思: under\n      来源: below\n      同义词: 下\n    ',
  },
  {
    question: '下',
    answer: 'shimo',
    explantion: '\n      汉字: 下\n      读音: しも\n      意思: under\n      来源: below\n      同义词: 下\n    ',
  },
  {
    question: '税',
    answer: 'zei',
    explantion: '\n      汉字: 税\n      读音: ぜい\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大',
    answer: 'dai',
    explantion: '\n      汉字: 大\n      读音: だい\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '日',
    answer: 'nichi',
    explantion: '\n      汉字: 日\n      读音: にち\n      意思: sun\n      来源: sunshine\n      同义词: 日\n    ',
  },
  {
    question: '小',
    answer: 'sho',
    explantion: '\n      汉字: 小\n      读音: しょう\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '生',
    answer: 'sei',
    explantion: '\n      汉字: 生\n      读音: せい\n      意思: (1) draft (beer)\n      来源: (2) raw\n      同义词: 生, 生\n    ',
  },
  {
    question: '氏',
    answer: 'shi',
    explantion: '\n      汉字: 氏\n      读音: し\n      意思: family name\n      来源: lineage\n      同义词: 氏\n    ',
  },
  {
    question: '然う',
    answer: 'so',
    explantion: '\n      汉字: 然う\n      读音: そう\n      意思: so\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '注ぐ',
    answer: 'tsugu',
    explantion: '\n      汉字: 注ぐ\n      读音: つぐ\n      意思: to pour (into)\n      来源: to irrigate\n      同义词: 注ぐ, \n    ',
  },
  {
    question: '後',
    answer: 'go',
    explantion: '\n      汉字: 後\n      读音: ご\n      意思: afterwards\n      来源: since then\n      同义词: 後, 后\n    ',
  },
  {
    question: '元',
    answer: 'moto',
    explantion: '\n      汉字: 元\n      读音: もと\n      意思: (1) origin\n      来源: original\n      同义词: 元, 旧, 故\n    ',
  },
  {
    question: '急に',
    answer: 'kyuni',
    explantion: '\n      汉字: 急に\n      读音: きゅうに\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '不',
    answer: 'bu',
    explantion: '\n      汉字: 不\n      读音: ぶ\n      意思: un\n      来源: non\n      同义词: 不, 無\n    ',
  },
  {
    question: '吐く',
    answer: 'haku',
    explantion: '\n      汉字: 吐く\n      读音: はく\n      意思: (1) to breathe\n      来源: (2) to tell (lies)\n      同义词: 吐く\n    ',
  },
  {
    question: '品',
    answer: 'hin',
    explantion: '\n      汉字: 品\n      读音: ひん\n      意思: thing\n      来源: article\n      同义词: 品\n    ',
  },
  {
    question: '回り',
    answer: 'mawari',
    explantion: '\n      汉字: 回り\n      读音: まわり\n      意思: circumference\n      来源: surroundings\n      同义词: 回り, 廻り\n    ',
  },
  {
    question: '実に',
    answer: 'jitsuni',
    explantion: '\n      汉字: 実に\n      读音: じつに\n      意思: indeed\n      来源: truly\n      同义词: 実に, 実に, 実に, 實に, 實に, 實に\n    ',
  },
  {
    question: '御',
    answer: 'o',
    explantion: '\n      汉字: 御\n      读音: お\n      意思: honourable\n      来源: waller\n      同义词: , , 御\n    ',
  },
  {
    question: '身体',
    answer: 'shintai',
    explantion: '\n      汉字: 身体\n      读音: しんたい\n      意思: the body\n      来源: waller\n      同义词: 身体, 身体\n    ',
  },
  {
    question: '値',
    answer: 'ne',
    explantion: '\n      汉字: 値\n      读音: ね\n      意思: value\n      来源: price\n      同义词: 値, 直\n    ',
  },
]
const chunkSize = 80

export default (() => {
  const dbList = chunk(n3, chunkSize)
  const questionMap: { [key: string]: QuestionList } = {}

  dbList.map((list, index) => {
    const data = {
      title: `N3-${index + 1}-${list.length}`,
      name: `N3-${index + 1}-${list.length}`,
      data: list,
    }
    return data
  })
    .forEach((data) => {
      questionMap[data.name] = data
    })
  return questionMap
})()
