import chunk from 'lodash-es/chunk'
import type { QuestionList } from '~/types'

const n4 = [
  {
    question: 'お見舞い',
    answer: 'omimai',
    explantion: '\n      汉字: お見舞い\n      读音: おみまい\n      意思: calling on someone who is ill\n      来源: enquiry\n      同义词: お見舞い, お見舞, 御見舞い, 御見舞\n    ',
  },
  {
    question: 'お嬢さん',
    answer: 'ojōsan',
    explantion: '\n      汉字: お嬢さん\n      读音: おじょうさん\n      意思: young lady\n      来源: waller\n      同义词: 御嬢さん\n    ',
  },
  {
    question: 'お宅',
    answer: 'otaku',
    explantion: '\n      汉字: お宅\n      读音: おたく\n      意思: (polite) your house\n      来源: waller\n      同义词: 御宅\n    ',
  },
  {
    question: 'お土産',
    answer: 'omiyage',
    explantion: '\n      汉字: お土産\n      读音: おみやげ\n      意思: souvenir\n      来源: waller\n      同义词: お土産, 御土産, 御土産\n    ',
  },
  {
    question: '斯う',
    answer: '斯u',
    explantion: '\n      汉字: 斯う\n      读音: こう\n      意思: this way\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '先',
    answer: 'saki',
    explantion: '\n      汉字: 先\n      读音: さっき\n      意思: some time ago\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '安心',
    answer: 'anshin',
    explantion: '\n      汉字: 安心\n      读音: あんしん\n      意思: relief\n      来源: waller\n      同义词: 安神\n    ',
  },
  {
    question: '安全',
    answer: 'anzen',
    explantion: '\n      汉字: 安全\n      读音: あんぜん\n      意思: safety\n      来源: waller\n      同义词: 安全\n    ',
  },
  {
    question: '案内',
    answer: 'annai',
    explantion: '\n      汉字: 案内\n      读音: あんない\n      意思: to guide\n      来源: waller\n      同义词: 案内\n    ',
  },
  {
    question: '以下',
    answer: 'ika',
    explantion: '\n      汉字: 以下\n      读音: いか\n      意思: less than\n      来源: waller\n      同义词: 以下, 已下, 已下\n    ',
  },
  {
    question: '以外',
    answer: 'igai',
    explantion: '\n      汉字: 以外\n      读音: いがい\n      意思: with the exception of\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '以上',
    answer: 'ijō',
    explantion: '\n      汉字: 以上\n      读音: いじょう\n      意思: more than\n      来源: this is all\n      同义词: 以上, 已上\n    ',
  },
  {
    question: '以内',
    answer: 'inai',
    explantion: '\n      汉字: 以内\n      读音: いない\n      意思: within\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '意見',
    answer: 'iken',
    explantion: '\n      汉字: 意見\n      读音: いけん\n      意思: opinion\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '為',
    answer: 'tame',
    explantion: '\n      汉字: 為\n      读音: ため\n      意思: in order to\n      来源: waller\n      同义词: , 爲, 為め\n    ',
  },
  {
    question: '移る',
    answer: 'utsuru',
    explantion: '\n      汉字: 移る\n      读音: うつる\n      意思: to move house or transfer\n      来源: waller\n      同义词: , 遷る\n    ',
  },
  {
    question: '医学',
    answer: 'igaku',
    explantion: '\n      汉字: 医学\n      读音: いがく\n      意思: medical science\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '育てる',
    answer: 'sodateru',
    explantion: '\n      汉字: 育てる\n      读音: そだてる\n      意思: to rear\n      来源: to bring up\n      同义词: 育てる\n    ',
  },
  {
    question: '一生懸命',
    answer: 'isshōkemmei',
    explantion: '\n      汉字: 一生懸命\n      读音: いっしょうけんめい\n      意思: with utmost effort\n      来源: waller\n      同义词: 一生けんめい, 一生けん命\n    ',
  },
  {
    question: '一杯',
    answer: 'ichihai',
    explantion: '\n      汉字: 一杯\n      读音: いっぱい\n      意思: full\n      来源: waller\n      同义词: , １杯, 一ぱい, １ぱい, 一盃\n    ',
  },
  {
    question: '引っ越す',
    answer: 'hikkosu',
    explantion: '\n      汉字: 引っ越す\n      读音: ひっこす\n      意思: to move house\n      来源: waller\n      同义词: 引越す, 引き越す, 引っこす\n    ',
  },
  {
    question: '嘘',
    answer: 'uso',
    explantion: '\n      汉字: 嘘\n      读音: うそ\n      意思: a lie\n      来源: waller\n      同义词: 噓, \n    ',
  },
  {
    question: '運ぶ',
    answer: 'hakobu',
    explantion: '\n      汉字: 運ぶ\n      读音: はこぶ\n      意思: to transport\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '運転',
    answer: 'unten',
    explantion: '\n      汉字: 運転\n      读音: うんてん\n      意思: to drive\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '運転手',
    answer: 'untenshu',
    explantion: '\n      汉字: 運転手\n      读音: うんてんしゅ\n      意思: driver\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '運動',
    answer: 'undō',
    explantion: '\n      汉字: 運動\n      读音: うんどう\n      意思: to exercise\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '雲',
    answer: 'kumo',
    explantion: '\n      汉字: 雲\n      读音: くも\n      意思: cloud\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '遠く',
    answer: 'tōku',
    explantion: '\n      汉字: 遠く\n      读音: とおく\n      意思: distant\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '遠慮',
    answer: 'enryo',
    explantion: '\n      汉字: 遠慮\n      读音: えんりょ\n      意思: to be reserved\n      来源:  to be restrained\n      同义词: 遠慮\n    ',
  },
  {
    question: '汚れる',
    answer: 'yogoreru',
    explantion: '\n      汉字: 汚れる\n      读音: よごれる\n      意思: to get dirty\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '億',
    answer: 'oku',
    explantion: '\n      汉字: 億\n      读音: おく\n      意思: one hundred million\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '屋上',
    answer: 'okujō',
    explantion: '\n      汉字: 屋上\n      读音: おくじょう\n      意思: rooftop\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '下る',
    answer: 'kudaru',
    explantion: '\n      汉字: 下る\n      读音: さがる\n      意思: to get down\n      来源: to descend\n      同义词: 下る, 下がる\n    ',
  },
  {
    question: '下げる',
    answer: 'sageru',
    explantion: '\n      汉字: 下げる\n      读音: さげる\n      意思: to hang\n      来源: to lower\n      同义词: 下げる\n    ',
  },
  {
    question: '下宿',
    answer: 'geshuku',
    explantion: '\n      汉字: 下宿\n      读音: げしゅく\n      意思: lodging\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '下着',
    answer: 'shitagi',
    explantion: '\n      汉字: 下着\n      读音: したぎ\n      意思: underwear\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '家内',
    answer: 'kanai',
    explantion: '\n      汉字: 家内\n      读音: かない\n      意思: housewife\n      来源: waller\n      同义词: 家内\n    ',
  },
  {
    question: '科学',
    answer: 'kagaku',
    explantion: '\n      汉字: 科学\n      读音: かがく\n      意思: science\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '火',
    answer: 'hi',
    explantion: '\n      汉字: 火\n      读音: ひ\n      意思: fire\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '火事',
    answer: 'kaji',
    explantion: '\n      汉字: 火事\n      读音: かじ\n      意思: fire\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '花見',
    answer: 'hanami',
    explantion: '\n      汉字: 花見\n      读音: はなみ\n      意思: cherry-blossom viewing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '課長',
    answer: 'kachō',
    explantion: '\n      汉字: 課長\n      读音: かちょう\n      意思: section manager\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '過ぎる',
    answer: 'yogiru',
    explantion: '\n      汉字: 過ぎる\n      读音: すぎる\n      意思: to exceed\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '会議',
    answer: 'kaigi',
    explantion: '\n      汉字: 会議\n      读音: かいぎ\n      意思: meeting\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '会議室',
    answer: 'kaigishitsu',
    explantion: '\n      汉字: 会議室\n      读音: かいぎしつ\n      意思: meeting room\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '会場',
    answer: 'kaijō',
    explantion: '\n      汉字: 会場\n      读音: かいじょう\n      意思: assembly hall or meeting place\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '会話',
    answer: 'kaiwa',
    explantion: '\n      汉字: 会話\n      读音: かいわ\n      意思: conversation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '壊す',
    answer: 'kowasu',
    explantion: '\n      汉字: 壊す\n      读音: こわす\n      意思: to break\n      来源: waller\n      同义词: 毀す\n    ',
  },
  {
    question: '壊れる',
    answer: 'kowareru',
    explantion: '\n      汉字: 壊れる\n      读音: こわれる\n      意思: to be broken\n      来源: waller\n      同义词: 毀れる\n    ',
  },
  {
    question: '怪我',
    answer: 'kega',
    explantion: '\n      汉字: 怪我\n      读音: けが\n      意思: to injure\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '海岸',
    answer: 'kaigan',
    explantion: '\n      汉字: 海岸\n      读音: かいがん\n      意思: coast\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '皆',
    answer: 'mina',
    explantion: '\n      汉字: 皆\n      读音: みな\n      意思: everybody\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '開く',
    answer: 'hiraku',
    explantion: '\n      汉字: 開く\n      读音: ひらく\n      意思: to open an event\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '楽しみ',
    answer: 'tanoshimi',
    explantion: '\n      汉字: 楽しみ\n      读音: たのしみ\n      意思: joy\n      来源: waller\n      同义词: 愉しみ\n    ',
  },
  {
    question: '楽む',
    answer: 'rakumu',
    explantion: '\n      汉字: 楽む\n      读音: たのしむ\n      意思: to enjoy oneself\n      来源: waller\n      同义词: 楽しむ, 愉しむ\n    ',
  },
  {
    question: '割れる',
    answer: 'wareru',
    explantion: '\n      汉字: 割れる\n      读音: われる\n      意思: to break\n      来源: waller\n      同义词: 破れる\n    ',
  },
  {
    question: '滑る',
    answer: 'suberu',
    explantion: '\n      汉字: 滑る\n      读音: すべる\n      意思: to slide\n      来源: to slip\n      同义词: 滑る, 辷る\n    ',
  },
  {
    question: '噛む',
    answer: 'kamu',
    explantion: '\n      汉字: 噛む\n      读音: かむ\n      意思: to bite\n      来源: to chew\n      同义词: 噛む, 咬む, 嚙む, 嚼む\n    ',
  },
  {
    question: '乾く',
    answer: 'kawaku',
    explantion: '\n      汉字: 乾く\n      读音: かわく\n      意思: to get dry\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '慣れる',
    answer: 'nareru',
    explantion: '\n      汉字: 慣れる\n      读音: なれる\n      意思: to grow accustomed to\n      来源: waller\n      同义词: 馴れる\n    ',
  },
  {
    question: '看護婦',
    answer: 'kangofu',
    explantion: '\n      汉字: 看護婦\n      读音: かんごふ\n      意思: female nurse\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '簡単',
    answer: 'kantan',
    explantion: '\n      汉字: 簡単\n      读音: かんたん\n      意思: simple\n      来源: waller\n      同义词: 簡短, 簡端\n    ',
  },
  {
    question: '間',
    answer: 'ma',
    explantion: '\n      汉字: 間\n      读音: あいだ\n      意思: a space\n      来源: waller\n      同义词: 間\n    ',
  },
  {
    question: '間に合う',
    answer: 'maniau',
    explantion: '\n      汉字: 間に合う\n      读音: まにあう\n      意思: to be in time for\n      来源: waller\n      同义词: 間にあう\n    ',
  },
  {
    question: '間違える',
    answer: 'machigaeru',
    explantion: '\n      汉字: 間違える\n      读音: まちがえる\n      意思: to make a mistake\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '関係',
    answer: 'kankei',
    explantion: '\n      汉字: 関係\n      读音: かんけい\n      意思: relationship\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '危険',
    answer: 'kiken',
    explantion: '\n      汉字: 危険\n      读音: きけん\n      意思: danger\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '喜ぶ',
    answer: 'yorokobu',
    explantion: '\n      汉字: 喜ぶ\n      读音: よろこぶ\n      意思: to be delighted\n      来源: waller\n      同义词: 悦ぶ, 歓ぶ, 慶ぶ, 欣ぶ\n    ',
  },
  {
    question: '寄る',
    answer: 'yoru',
    explantion: '\n      汉字: 寄る\n      读音: よる\n      意思: to visit\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '機会',
    answer: 'kikai',
    explantion: '\n      汉字: 機会\n      读音: きかい\n      意思: opportunity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '帰り',
    answer: 'kaeri',
    explantion: '\n      汉字: 帰り\n      读音: かえり\n      意思: return\n      来源: waller\n      同义词: 還り\n    ',
  },
  {
    question: '気',
    answer: 'ki',
    explantion: '\n      汉字: 気\n      读音: き\n      意思: spirit\n      来源: mood\n      同义词: 気, 氣\n    ',
  },
  {
    question: '気分',
    answer: 'kibun',
    explantion: '\n      汉字: 気分\n      读音: きぶん\n      意思: mood\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '汽車',
    answer: 'kisha',
    explantion: '\n      汉字: 汽車\n      读音: きしゃ\n      意思: steam train\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '祈る',
    answer: 'inoru',
    explantion: '\n      汉字: 祈る\n      读音: いのる\n      意思: to pray\n      来源: waller\n      同义词: 祷る\n    ',
  },
  {
    question: '季節',
    answer: 'kisetsu',
    explantion: '\n      汉字: 季節\n      读音: きせつ\n      意思: season\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '規則',
    answer: 'kisoku',
    explantion: '\n      汉字: 規則\n      读音: きそく\n      意思: regulations\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '起す',
    answer: 'okosu',
    explantion: '\n      汉字: 起す\n      读音: おこす\n      意思: to wake\n      来源: waller\n      同义词: 起こす\n    ',
  },
  {
    question: '技術',
    answer: 'gijutsu',
    explantion: '\n      汉字: 技術\n      读音: ぎじゅつ\n      意思: art\n      来源: technology\n      同义词: 技術\n    ',
  },
  {
    question: '客',
    answer: 'kyaku',
    explantion: '\n      汉字: 客\n      读音: きゃく\n      意思: guest\n      来源: customer\n      同义词: 客, 客\n    ',
  },
  {
    question: '久しぶり',
    answer: 'hisashiburi',
    explantion: '\n      汉字: 久しぶり\n      读音: ひさしぶり\n      意思: after a long time\n      来源: waller\n      同义词: 久し振り\n    ',
  },
  {
    question: '急',
    answer: 'kyū',
    explantion: '\n      汉字: 急\n      读音: きゅう\n      意思: urgent\n      来源:  steep\n      同义词: 急\n    ',
  },
  {
    question: '急ぐ',
    answer: 'isogu',
    explantion: '\n      汉字: 急ぐ\n      读音: いそぐ\n      意思: to hurry\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '急行',
    answer: 'kyūkō',
    explantion: '\n      汉字: 急行\n      读音: きゅうこう\n      意思: speedy\n      来源:  express\n      同义词: 急行\n    ',
  },
  {
    question: '泣く',
    answer: 'naku',
    explantion: '\n      汉字: 泣く\n      读音: なく\n      意思: to weep\n      来源: waller\n      同义词: 哭く\n    ',
  },
  {
    question: '競争',
    answer: 'kyōsō',
    explantion: '\n      汉字: 競争\n      读音: きょうそう\n      意思: competition\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '教育',
    answer: 'kyōiku',
    explantion: '\n      汉字: 教育\n      读音: きょういく\n      意思: education\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '教会',
    answer: 'kyōkai',
    explantion: '\n      汉字: 教会\n      读音: きょうかい\n      意思: church\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '興味',
    answer: 'kyōmi',
    explantion: '\n      汉字: 興味\n      读音: きょうみ\n      意思: an interest\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '鏡',
    answer: 'kagami',
    explantion: '\n      汉字: 鏡\n      读音: かがみ\n      意思: mirror\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '驚く',
    answer: 'odoroku',
    explantion: '\n      汉字: 驚く\n      读音: おどろく\n      意思: to be surprised\n      来源: waller\n      同义词: 愕く, 駭く\n    ',
  },
  {
    question: '近所',
    answer: 'kinjo',
    explantion: '\n      汉字: 近所\n      读音: きんじょ\n      意思: neighbourhood\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '金持ち',
    answer: 'kanemochi',
    explantion: '\n      汉字: 金持ち\n      读音: かねもち\n      意思: rich man\n      来源: waller\n      同义词: 金持, 銀持\n    ',
  },
  {
    question: '苦い',
    answer: 'nigai',
    explantion: '\n      汉字: 苦い\n      读音: にがい\n      意思: bitter\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '空気',
    answer: 'kūki',
    explantion: '\n      汉字: 空気\n      读音: くうき\n      意思: air\n      来源: atmosphere\n      同义词: 空気\n    ',
  },
  {
    question: '空港',
    answer: 'kūkō',
    explantion: '\n      汉字: 空港\n      读音: くうこう\n      意思: airport\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '隅',
    answer: 'sumi',
    explantion: '\n      汉字: 隅\n      读音: すみ\n      意思: corner\n      来源: nook\n      同义词: 隅, 隅, 角\n    ',
  },
  {
    question: '君',
    answer: 'kimi',
    explantion: '\n      汉字: 君\n      读音: きみ\n      意思: (informal) You (used by men towards women)\n      来源: waller\n      同义词: 公\n    ',
  },
  {
    question: '君',
    answer: 'kimi',
    explantion: '\n      汉字: 君\n      读音: くん\n      意思: suffix for familiar young male\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '形',
    answer: 'katachi',
    explantion: '\n      汉字: 形\n      读音: かたち\n      意思: shape\n      来源: waller\n      同义词: 容, 容, 貌\n    ',
  },
  {
    question: '景色',
    answer: 'keshiki',
    explantion: '\n      汉字: 景色\n      读音: けしき\n      意思: scene\n      来源: landscape\n      同义词: 景色, 景色\n    ',
  },
  {
    question: '経験',
    answer: 'keiken',
    explantion: '\n      汉字: 経験\n      读音: けいけん\n      意思: to experience\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '経済',
    answer: 'keizai',
    explantion: '\n      汉字: 経済\n      读音: けいざい\n      意思: finance\n      来源: economy\n      同义词: 経済\n    ',
  },
  {
    question: '計画',
    answer: 'keikaku',
    explantion: '\n      汉字: 計画\n      读音: けいかく\n      意思: to plan\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '警察',
    answer: 'keisatsu',
    explantion: '\n      汉字: 警察\n      读音: けいさつ\n      意思: police\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '迎える',
    answer: 'mukaeru',
    explantion: '\n      汉字: 迎える\n      读音: むかえる\n      意思: to go out to meet\n      来源: waller\n      同义词: 邀える\n    ',
  },
  {
    question: '決して',
    answer: 'kesshite',
    explantion: '\n      汉字: 決して\n      读音: けっして\n      意思: never\n      来源: waller\n      同义词: 決して\n    ',
  },
  {
    question: '決める',
    answer: 'kimeru',
    explantion: '\n      汉字: 決める\n      读音: きめる\n      意思: to decide\n      来源: waller\n      同义词: 極める\n    ',
  },
  {
    question: '血',
    answer: 'chi',
    explantion: '\n      汉字: 血\n      读音: ち\n      意思: blood\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '月',
    answer: 'tsuki',
    explantion: '\n      汉字: 月\n      读音: つき\n      意思: moon\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '喧嘩',
    answer: 'kenka',
    explantion: '\n      汉字: 喧嘩\n      读音: けんか\n      意思: to quarrel\n      来源: waller\n      同义词: 諠譁, \n    ',
  },
  {
    question: '固い',
    answer: 'katai',
    explantion: '\n      汉字: 固い\n      读音: かたい\n      意思: hard\n      来源: waller\n      同义词: 緊い\n    ',
  },
  {
    question: '建てる',
    answer: 'tateru',
    explantion: '\n      汉字: 建てる\n      读音: たてる\n      意思: to build\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '研究',
    answer: 'kenkyū',
    explantion: '\n      汉字: 研究\n      读音: けんきゅう\n      意思: research\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '研究室',
    answer: 'kenkyūshitsu',
    explantion: '\n      汉字: 研究室\n      读音: けんきゅうしつ\n      意思: study room\n      来源: laboratory\n      同义词: 研究室\n    ',
  },
  {
    question: '絹',
    answer: 'kinu',
    explantion: '\n      汉字: 絹\n      读音: きぬ\n      意思: silk\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '見える',
    answer: 'mieru',
    explantion: '\n      汉字: 見える\n      读音: みえる\n      意思: to be in sight\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '見物',
    answer: 'kembutsu',
    explantion: '\n      汉字: 見物\n      读音: けんぶつ\n      意思: sightseeing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '原因',
    answer: 'gen\'in',
    explantion: '\n      汉字: 原因\n      读音: げんいん\n      意思: cause\n      来源: source\n      同义词: 原因, 原因\n    ',
  },
  {
    question: '厳しい',
    answer: 'kibishii',
    explantion: '\n      汉字: 厳しい\n      读音: きびしい\n      意思: strict\n      来源: waller\n      同义词: 酷しい\n    ',
  },
  {
    question: '故障',
    answer: 'koshō',
    explantion: '\n      汉字: 故障\n      读音: こしょう\n      意思: to break-down\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '湖',
    answer: 'mizuumi',
    explantion: '\n      汉字: 湖\n      读音: みずうみ\n      意思: lake\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '呉れる',
    answer: 'kureru',
    explantion: '\n      汉字: 呉れる\n      读音: くれる\n      意思: to give\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '御主人',
    answer: 'goshujin',
    explantion: '\n      汉字: 御主人\n      读音: ごしゅじん\n      意思: (honorable) your husband\n      来源: waller\n      同义词: ご主人\n    ',
  },
  {
    question: 'お礼',
    answer: 'orei',
    explantion: '\n      汉字: お礼\n      读音: おれい\n      意思: expression of gratitude\n      来源: waller\n      同义词: 御礼, 御礼\n    ',
  },
  {
    question: '交通',
    answer: 'kōtsū',
    explantion: '\n      汉字: 交通\n      读音: こうつう\n      意思: traffic\n      来源: transportation\n      同义词: 交通\n    ',
  },
  {
    question: '光',
    answer: 'hikari',
    explantion: '\n      汉字: 光\n      读音: ひかり\n      意思: light\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '光る',
    answer: 'hikaru',
    explantion: '\n      汉字: 光る\n      读音: ひかる\n      意思: to shine\n      来源: to glitter\n      同义词: 光る\n    ',
  },
  {
    question: '公務員',
    answer: 'kōmuin',
    explantion: '\n      汉字: 公務員\n      读音: こうむいん\n      意思: government worker\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '工業',
    answer: 'kōgyō',
    explantion: '\n      汉字: 工業\n      读音: こうぎょう\n      意思: the manufacturing industry\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '校長',
    answer: 'kōchō',
    explantion: '\n      汉字: 校長\n      读音: こうちょう\n      意思: headmaster\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '港',
    answer: 'minato',
    explantion: '\n      汉字: 港\n      读音: みなと\n      意思: harbour\n      来源: waller\n      同义词: 湊\n    ',
  },
  {
    question: '考える',
    answer: 'kangaeru',
    explantion: '\n      汉字: 考える\n      读音: かんがえる\n      意思: to consider\n      来源: waller\n      同义词: 勘える, 稽える\n    ',
  },
  {
    question: '講義',
    answer: 'kōgi',
    explantion: '\n      汉字: 講義\n      读音: こうぎ\n      意思: lecture\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '講堂',
    answer: 'kōdō',
    explantion: '\n      汉字: 講堂\n      读音: こうどう\n      意思: auditorium\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '郊外',
    answer: 'kōgai',
    explantion: '\n      汉字: 郊外\n      读音: こうがい\n      意思: outskirts\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '降り出す',
    answer: 'furidasu',
    explantion: '\n      汉字: 降り出す\n      读音: ふりだす\n      意思: to start to rain\n      来源: waller\n      同义词: 降りだす\n    ',
  },
  {
    question: '高校',
    answer: 'kōkō',
    explantion: '\n      汉字: 高校\n      读音: こうこう\n      意思: high school\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '高校生',
    answer: 'kōkōsei',
    explantion: '\n      汉字: 高校生\n      读音: こうこうせい\n      意思: high school student\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '高等学校',
    answer: 'kōtōgakkō',
    explantion: '\n      汉字: 高等学校\n      读音: こうとうがっこう\n      意思: high school\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '合う',
    answer: 'au',
    explantion: '\n      汉字: 合う\n      读音: あう\n      意思: to match\n      来源: waller\n      同义词: 合う\n    ',
  },
  {
    question: '国際',
    answer: 'kokusai',
    explantion: '\n      汉字: 国際\n      读音: こくさい\n      意思: international\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '今度',
    answer: 'kondo',
    explantion: '\n      汉字: 今度\n      读音: こんど\n      意思: now\n      来源: next time\n      同义词: 今度\n    ',
  },
  {
    question: '今夜',
    answer: 'kon\'ya',
    explantion: '\n      汉字: 今夜\n      读音: こんや\n      意思: tonight\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '差し上げる',
    answer: 'sashiageru',
    explantion: '\n      汉字: 差し上げる\n      读音: さしあげる\n      意思: (polite) to give\n      来源: waller\n      同义词: 差上げる, さし上げる\n    ',
  },
  {
    question: '砂',
    answer: 'suna',
    explantion: '\n      汉字: 砂\n      读音: すな\n      意思: sand\n      来源: waller\n      同义词: 砂, 沙, 沙, 砂子\n    ',
  },
  {
    question: 'さ来月',
    answer: 'saraigetsu',
    explantion: '\n      汉字: さ来月\n      读音: さらいげつ\n      意思: the month after next\n      来源: waller\n      同义词: 再来月\n    ',
  },
  {
    question: 'さ来週',
    answer: 'saraishū',
    explantion: '\n      汉字: さ来週\n      读音: さらいしゅう\n      意思: the week after next\n      来源: waller\n      同义词: 再来週\n    ',
  },
  {
    question: '最も',
    answer: 'mottomo',
    explantion: '\n      汉字: 最も\n      读音: もっとも\n      意思: extremely\n      来源: waller\n      同义词: 最も, 尤も, 尤も\n    ',
  },
  {
    question: '最近',
    answer: 'saikin',
    explantion: '\n      汉字: 最近\n      读音: さいきん\n      意思: latest\n      来源: nowadays\n      同义词: 最近\n    ',
  },
  {
    question: '最後',
    answer: 'saigo',
    explantion: '\n      汉字: 最後\n      读音: さいご\n      意思: last\n      来源: end\n      同义词: 最後\n    ',
  },
  {
    question: '最初',
    answer: 'saisho',
    explantion: '\n      汉字: 最初\n      读音: さいしょ\n      意思: beginning\n      来源: first\n      同义词: 最初\n    ',
  },
  {
    question: '妻',
    answer: 'tsuma',
    explantion: '\n      汉字: 妻\n      读音: つま\n      意思: (humble) wife\n      来源: waller\n      同义词: , 夫, 具\n    ',
  },
  {
    question: '済む',
    answer: 'sumu',
    explantion: '\n      汉字: 済む\n      读音: すむ\n      意思: to finish\n      来源: waller\n      同义词: 濟む\n    ',
  },
  {
    question: '細かい',
    answer: 'komakai',
    explantion: '\n      汉字: 細かい\n      读音: こまかい\n      意思: small\n      来源:  fine\n      同义词: 細かい\n    ',
  },
  {
    question: '坂',
    answer: 'saka',
    explantion: '\n      汉字: 坂\n      读音: さか\n      意思: slope\n      来源: hill\n      同义词: 坂, 阪\n    ',
  },
  {
    question: '参る',
    answer: 'mairu',
    explantion: '\n      汉字: 参る\n      读音: まいる\n      意思: (humble) to go\n      来源: to come\n      同义词: 参る, , 詣る\n    ',
  },
  {
    question: '産業',
    answer: 'sangyō',
    explantion: '\n      汉字: 産業\n      读音: さんぎょう\n      意思: industry\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '残る',
    answer: 'nokoru',
    explantion: '\n      汉字: 残る\n      读音: のこる\n      意思: to remain\n      来源: waller\n      同义词: 遺る\n    ',
  },
  {
    question: '残念',
    answer: 'zannen',
    explantion: '\n      汉字: 残念\n      读音: ざんねん\n      意思: disappointment\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '伺う',
    answer: 'ukagau',
    explantion: '\n      汉字: 伺う\n      读音: うかがう\n      意思: to visit\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '始める',
    answer: 'hajimeru',
    explantion: '\n      汉字: 始める\n      读音: はじめる\n      意思: to begin\n      来源: waller\n      同义词: 創める\n    ',
  },
  {
    question: '子',
    answer: 'ko',
    explantion: '\n      汉字: 子\n      读音: こ\n      意思: child\n      来源: waller\n      同义词: 児\n    ',
  },
  {
    question: '市',
    answer: 'shi',
    explantion: '\n      汉字: 市\n      读音: し\n      意思: city\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '市民',
    answer: 'shimin',
    explantion: '\n      汉字: 市民\n      读音: しみん\n      意思: citizen\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '思い出す',
    answer: 'omoidasu',
    explantion: '\n      汉字: 思い出す\n      读音: おもいだす\n      意思: to remember\n      来源: waller\n      同义词: 思いだす, おもい出す, 思出す\n    ',
  },
  {
    question: '指',
    answer: 'yubi',
    explantion: '\n      汉字: 指\n      读音: ゆび\n      意思: finger\n      来源: waller\n      同义词: 指, 指\n    ',
  },
  {
    question: '指輪',
    answer: 'yubiwa',
    explantion: '\n      汉字: 指輪\n      读音: ゆびわ\n      意思: finger ring\n      来源: waller\n      同义词: 指環\n    ',
  },
  {
    question: '支度',
    answer: 'shitaku',
    explantion: '\n      汉字: 支度\n      读音: したく\n      意思: to prepare\n      来源: waller\n      同义词: 仕度\n    ',
  },
  {
    question: '上手い',
    answer: 'umai',
    explantion: '\n      汉字: 上手い\n      读音: うまい\n      意思: delicious\n      来源: waller\n      同义词: , 美味い, 旨い, 巧い, 甘い, 美い\n    ',
  },
  {
    question: '枝',
    answer: 'eda',
    explantion: '\n      汉字: 枝\n      读音: えだ\n      意思: branch\n      来源:  twig\n      同义词: 枝\n    ',
  },
  {
    question: '止む',
    answer: 'yamu',
    explantion: '\n      汉字: 止む\n      读音: やむ\n      意思: to stop\n      来源: waller\n      同义词: 已む, 罷む\n    ',
  },
  {
    question: '止める',
    answer: 'tomeru',
    explantion: '\n      汉字: 止める\n      读音: とめる\n      意思: to stop something\n      来源: waller\n      同义词: 留める, 停める\n    ',
  },
  {
    question: '止める',
    answer: 'tomeru',
    explantion: '\n      汉字: 止める\n      读音: やめる\n      意思: to stop\n      来源: waller\n      同义词: , 已める, 廃める\n    ',
  },
  {
    question: '糸',
    answer: 'ito',
    explantion: '\n      汉字: 糸\n      读音: いと\n      意思: thread\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '試験',
    answer: 'shiken',
    explantion: '\n      汉字: 試験\n      读音: しけん\n      意思: examination\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '試合',
    answer: 'shiai',
    explantion: '\n      汉字: 試合\n      读音: しあい\n      意思: match\n      来源: game\n      同义词: 試合, 仕合\n    ',
  },
  {
    question: '歯医者',
    answer: 'haisha',
    explantion: '\n      汉字: 歯医者\n      读音: はいしゃ\n      意思: dentist\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '事故',
    answer: 'jiko',
    explantion: '\n      汉字: 事故\n      读音: じこ\n      意思: accident\n      来源: waller\n      同义词: 事故\n    ',
  },
  {
    question: '事務所',
    answer: 'jimusho',
    explantion: '\n      汉字: 事務所\n      读音: じむしょ\n      意思: office\n      来源: waller\n      同义词: 事ム所\n    ',
  },
  {
    question: '似る',
    answer: 'niru',
    explantion: '\n      汉字: 似る\n      读音: にる\n      意思: to be similar\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '字',
    answer: 'ji',
    explantion: '\n      汉字: 字\n      读音: じ\n      意思: character\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '寺',
    answer: 'tera',
    explantion: '\n      汉字: 寺\n      读音: てら\n      意思: temple\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '時代',
    answer: 'jidai',
    explantion: '\n      汉字: 時代\n      读音: じだい\n      意思: era\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '自由',
    answer: 'jiyū',
    explantion: '\n      汉字: 自由\n      读音: じゆう\n      意思: freedom\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '失敗',
    answer: 'shippai',
    explantion: '\n      汉字: 失敗\n      读音: しっぱい\n      意思: failure\n      来源: mistake\n      同义词: 失敗\n    ',
  },
  {
    question: '捨てる',
    answer: 'suteru',
    explantion: '\n      汉字: 捨てる\n      读音: すてる\n      意思: to throw away\n      来源: waller\n      同义词: 棄てる\n    ',
  },
  {
    question: '社会',
    answer: 'shakai',
    explantion: '\n      汉字: 社会\n      读音: しゃかい\n      意思: society\n      来源: public\n      同义词: 社会\n    ',
  },
  {
    question: '社長',
    answer: 'shachō',
    explantion: '\n      汉字: 社長\n      读音: しゃちょう\n      意思: company president\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '謝る',
    answer: 'ayamaru',
    explantion: '\n      汉字: 謝る\n      读音: あやまる\n      意思: to apologize\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '取り替える',
    answer: 'torikaeru',
    explantion: '\n      汉字: 取り替える\n      读音: とりかえる\n      意思: to exchange\n      来源: waller\n      同义词: 取り換える, 取りかえる, 取替える, 取換える, 取換る\n    ',
  },
  {
    question: '手袋',
    answer: 'tebukuro',
    explantion: '\n      汉字: 手袋\n      读音: てぶくろ\n      意思: glove\n      来源: waller\n      同义词: 手ぶくろ\n    ',
  },
  {
    question: '手伝う',
    answer: 'tetsudau',
    explantion: '\n      汉字: 手伝う\n      读音: てつだう\n      意思: to assist\n      来源: waller\n      同义词: 手つだう\n    ',
  },
  {
    question: '趣味',
    answer: 'shumi',
    explantion: '\n      汉字: 趣味\n      读音: しゅみ\n      意思: hobby\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '受ける',
    answer: 'ukeru',
    explantion: '\n      汉字: 受ける\n      读音: うける\n      意思: to take a lesson or test\n      来源: waller\n      同义词: , 請ける, 承ける, 享ける, \n    ',
  },
  {
    question: '拾う',
    answer: 'hirou',
    explantion: '\n      汉字: 拾う\n      读音: ひろう\n      意思: to pick up\n      来源: to gather\n      同义词: 拾う\n    ',
  },
  {
    question: '習慣',
    answer: 'shūkan',
    explantion: '\n      汉字: 習慣\n      读音: しゅうかん\n      意思: custom\n      来源: manners\n      同义词: 習慣\n    ',
  },
  {
    question: '集る',
    answer: 'takaru',
    explantion: '\n      汉字: 集る\n      读音: あつまる\n      意思: to gather\n      来源: waller\n      同义词: 集まる\n    ',
  },
  {
    question: '集める',
    answer: 'atsumeru',
    explantion: '\n      汉字: 集める\n      读音: あつめる\n      意思: to collect something\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '住所',
    answer: 'jūsho',
    explantion: '\n      汉字: 住所\n      读音: じゅうしょ\n      意思: an address\n      来源: a residence\n      同义词: 住所, 住処\n    ',
  },
  {
    question: '十分',
    answer: 'jūfun',
    explantion: '\n      汉字: 十分\n      读音: じゅうぶん\n      意思: enough\n      来源: waller\n      同义词: 充分\n    ',
  },
  {
    question: '柔道',
    answer: 'jūdō',
    explantion: '\n      汉字: 柔道\n      读音: じゅうどう\n      意思: judo\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '出席',
    answer: 'shusseki',
    explantion: '\n      汉字: 出席\n      读音: しゅっせき\n      意思: to attend\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '出発',
    answer: 'shuppatsu',
    explantion: '\n      汉字: 出発\n      读音: しゅっぱつ\n      意思: to depart\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '準備',
    answer: 'jumbi',
    explantion: '\n      汉字: 準備\n      读音: じゅんび\n      意思: to prepare\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '女性',
    answer: 'josei',
    explantion: '\n      汉字: 女性\n      读音: じょせい\n      意思: woman\n      来源: waller\n      同义词: 女性\n    ',
  },
  {
    question: '勝つ',
    answer: 'katsu',
    explantion: '\n      汉字: 勝つ\n      读音: かつ\n      意思: to win\n      来源: waller\n      同义词: 克つ, 贏つ\n    ',
  },
  {
    question: '召し上がる',
    answer: 'meshiagaru',
    explantion: '\n      汉字: 召し上がる\n      读音: めしあがる\n      意思: (polite) to eat\n      来源: waller\n      同义词: 召しあがる, 召上がる, 召し上る\n    ',
  },
  {
    question: '将来',
    answer: 'shōrai',
    explantion: '\n      汉字: 将来\n      读音: しょうらい\n      意思: future\n      来源: prospects\n      同义词: 将来\n    ',
  },
  {
    question: '小学校',
    answer: 'shōgakkō',
    explantion: '\n      汉字: 小学校\n      读音: しょうがっこう\n      意思: elementary school\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '小説',
    answer: 'shōsetsu',
    explantion: '\n      汉字: 小説\n      读音: しょうせつ\n      意思: novel\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '小鳥',
    answer: 'kotori',
    explantion: '\n      汉字: 小鳥\n      读音: ことり\n      意思: small bird\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '承知',
    answer: 'shōchi',
    explantion: '\n      汉字: 承知\n      读音: しょうち\n      意思: to consent\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '招待',
    answer: 'shōtai',
    explantion: '\n      汉字: 招待\n      读音: しょうたい\n      意思: to invite\n      来源: waller\n      同义词: 招待, 請待, 請待\n    ',
  },
  {
    question: '消しゴム',
    answer: 'keshigomu',
    explantion: '\n      汉字: 消しゴム\n      读音: けしゴム\n      意思: eraser\n      来源: waller\n      同义词: 消ゴム\n    ',
  },
  {
    question: '焼く',
    answer: 'yaku',
    explantion: '\n      汉字: 焼く\n      读音: やく\n      意思: to bake\n      来源: to grill\n      同义词: 焼く, 燬く, 焚く\n    ',
  },
  {
    question: '焼ける',
    answer: 'yakeru',
    explantion: '\n      汉字: 焼ける\n      读音: やける\n      意思: to burn\n      来源: to be roasted\n      同义词: 焼ける, 灼ける, 妬ける\n    ',
  },
  {
    question: '笑う',
    answer: 'warau',
    explantion: '\n      汉字: 笑う\n      读音: わらう\n      意思: to laugh\n      来源: to smile\n      同义词: 笑う, 咲う, 嗤う\n    ',
  },
  {
    question: '紹介',
    answer: 'shōkai',
    explantion: '\n      汉字: 紹介\n      读音: しょうかい\n      意思: introduction\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '上る',
    answer: 'noboru',
    explantion: '\n      汉字: 上る\n      读音: あがる\n      意思: to rise\n      来源: waller\n      同义词: 上がる, 揚がる, 挙がる\n    ',
  },
  {
    question: '場合',
    answer: 'baai',
    explantion: '\n      汉字: 場合\n      读音: ばあい\n      意思: situation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '場所',
    answer: 'basho',
    explantion: '\n      汉字: 場所\n      读音: ばしょ\n      意思: location\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '畳',
    answer: 'tatami',
    explantion: '\n      汉字: 畳\n      读音: たたみ\n      意思: Japanese straw mat\n      来源: waller\n      同义词: 疊\n    ',
  },
  {
    question: '飾る',
    answer: 'kazaru',
    explantion: '\n      汉字: 飾る\n      读音: かざる\n      意思: to decorate\n      来源: waller\n      同义词: 餝る, 錺る, 荘る\n    ',
  },
  {
    question: '植える',
    answer: 'ueru',
    explantion: '\n      汉字: 植える\n      读音: うえる\n      意思: to plant\n      来源: to grow\n      同义词: 植える\n    ',
  },
  {
    question: '触る',
    answer: 'sawaru',
    explantion: '\n      汉字: 触る\n      读音: さわる\n      意思: to touch\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '食事',
    answer: 'shokuji',
    explantion: '\n      汉字: 食事\n      读音: しょくじ\n      意思: to have a meal\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '食料品',
    answer: 'shokuryōhin',
    explantion: '\n      汉字: 食料品\n      读音: しょくりょうひん\n      意思: groceries\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '寝坊',
    answer: 'nebō',
    explantion: '\n      汉字: 寝坊\n      读音: ねぼう\n      意思: sleeping in late\n      来源: waller\n      同义词: 寐坊\n    ',
  },
  {
    question: '心',
    answer: 'kokoro',
    explantion: '\n      汉字: 心\n      读音: こころ\n      意思: core\n      来源: heart\n      同义词: 心\n    ',
  },
  {
    question: '心配',
    answer: 'shimpai',
    explantion: '\n      汉字: 心配\n      读音: しんぱい\n      意思: to worry\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '新聞社',
    answer: 'shimbunsha',
    explantion: '\n      汉字: 新聞社\n      读音: しんぶんしゃ\n      意思: newspaper company\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '森',
    answer: 'mori',
    explantion: '\n      汉字: 森\n      读音: もり\n      意思: forest\n      来源: waller\n      同义词: 杜\n    ',
  },
  {
    question: '深い',
    answer: 'fukai',
    explantion: '\n      汉字: 深い\n      读音: ふかい\n      意思: deep\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '申し上げる',
    answer: 'mōshiageru',
    explantion: '\n      汉字: 申し上げる\n      读音: もうしあげる\n      意思: (humble) to say\n      来源: to tell\n      同义词: 申し上げる, 申上げる, 申しあげる\n    ',
  },
  {
    question: '申す',
    answer: 'mōsu',
    explantion: '\n      汉字: 申す\n      读音: もうす\n      意思: (humble) to be called\n      来源: to say\n      同义词: 申す\n    ',
  },
  {
    question: '神社',
    answer: 'jinja',
    explantion: '\n      汉字: 神社\n      读音: じんじゃ\n      意思: Shinto shrine\n      来源: waller\n      同义词: 神社\n    ',
  },
  {
    question: '親',
    answer: 'oya',
    explantion: '\n      汉字: 親\n      读音: おや\n      意思: parents\n      来源: waller\n      同义词: 祖\n    ',
  },
  {
    question: '親切',
    answer: 'shinsetsu',
    explantion: '\n      汉字: 親切\n      读音: しんせつ\n      意思: kindness\n      来源: waller\n      同义词: 深切\n    ',
  },
  {
    question: '進む',
    answer: 'susumu',
    explantion: '\n      汉字: 進む\n      读音: すすむ\n      意思: to make progress\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '人形',
    answer: 'ningyō',
    explantion: '\n      汉字: 人形\n      读音: にんぎょう\n      意思: doll\n      来源:  figure\n      同义词: 人形\n    ',
  },
  {
    question: '人口',
    answer: 'jinkō',
    explantion: '\n      汉字: 人口\n      读音: じんこう\n      意思: population\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '塵',
    answer: 'chiri',
    explantion: '\n      汉字: 塵\n      读音: ごみ\n      意思: rubbish\n      来源: waller\n      同义词: , 芥, , 芥, \n    ',
  },
  {
    question: '尋ねる',
    answer: 'tazuneru',
    explantion: '\n      汉字: 尋ねる\n      读音: たずねる\n      意思: to ask\n      来源: waller\n      同义词: 訊ねる\n    ',
  },
  {
    question: '水泳',
    answer: 'suiei',
    explantion: '\n      汉字: 水泳\n      读音: すいえい\n      意思: swimming\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '水道',
    answer: 'suidō',
    explantion: '\n      汉字: 水道\n      读音: すいどう\n      意思: water supply\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '数学',
    answer: 'sūgaku',
    explantion: '\n      汉字: 数学\n      读音: すうがく\n      意思: mathematics\n      来源: arithmetic\n      同义词: 数学\n    ',
  },
  {
    question: '世界',
    answer: 'sekai',
    explantion: '\n      汉字: 世界\n      读音: せかい\n      意思: the world\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '世話',
    answer: 'sewa',
    explantion: '\n      汉字: 世話\n      读音: せわ\n      意思: to look after\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '凄い',
    answer: 'sugoi',
    explantion: '\n      汉字: 凄い\n      读音: すごい\n      意思: terrific\n      来源: waller\n      同义词: , , \n    ',
  },
  {
    question: '政治',
    answer: 'seiji',
    explantion: '\n      汉字: 政治\n      读音: せいじ\n      意思: politics\n      来源: government\n      同义词: 政治\n    ',
  },
  {
    question: '星',
    answer: 'hoshi',
    explantion: '\n      汉字: 星\n      读音: ほし\n      意思: star\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '正しい',
    answer: 'tadashii',
    explantion: '\n      汉字: 正しい\n      读音: ただしい\n      意思: correct\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '生きる',
    answer: 'ikiru',
    explantion: '\n      汉字: 生きる\n      读音: いきる\n      意思: to live\n      来源: waller\n      同义词: 活きる\n    ',
  },
  {
    question: '生活',
    answer: 'seikatsu',
    explantion: '\n      汉字: 生活\n      读音: せいかつ\n      意思: to live\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '生産',
    answer: 'seisan',
    explantion: '\n      汉字: 生産\n      读音: せいさん\n      意思: to produce\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '盛ん',
    answer: 'sakan',
    explantion: '\n      汉字: 盛ん\n      读音: さかん\n      意思: popularity\n      来源: prosperous\n      同义词: 盛ん, 旺ん, 壮ん\n    ',
  },
  {
    question: '西洋',
    answer: 'seiyō',
    explantion: '\n      汉字: 西洋\n      读音: せいよう\n      意思: western countries\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '席',
    answer: 'seki',
    explantion: '\n      汉字: 席\n      读音: せき\n      意思: seat\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '昔',
    answer: 'mukashi',
    explantion: '\n      汉字: 昔\n      读音: むかし\n      意思: olden days\n      来源:  former\n      同义词: 昔\n    ',
  },
  {
    question: '石',
    answer: 'ishi',
    explantion: '\n      汉字: 石\n      读音: いし\n      意思: stone\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '積もり',
    answer: 'tsumori',
    explantion: '\n      汉字: 積もり\n      读音: つもり\n      意思: intention\n      来源: waller\n      同义词: , 積り\n    ',
  },
  {
    question: '赤ん坊',
    answer: 'akambō',
    explantion: '\n      汉字: 赤ん坊\n      读音: あかんぼう\n      意思: baby\n      来源: waller\n      同义词: 赤ん坊, 赤んぼ, 赤んぼう\n    ',
  },
  {
    question: '折る',
    answer: 'oru',
    explantion: '\n      汉字: 折る\n      读音: おる\n      意思: to break or to fold\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '折れる',
    answer: 'oreru',
    explantion: '\n      汉字: 折れる\n      读音: おれる\n      意思: to break or be folded\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '説明',
    answer: 'setsumei',
    explantion: '\n      汉字: 説明\n      读音: せつめい\n      意思: explanation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '先ず',
    answer: 'mazu',
    explantion: '\n      汉字: 先ず\n      读音: まず\n      意思: first of all\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '先輩',
    answer: 'sempai',
    explantion: '\n      汉字: 先輩\n      读音: せんぱい\n      意思: senior\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '戦争',
    answer: 'sensō',
    explantion: '\n      汉字: 戦争\n      读音: せんそう\n      意思: war\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '浅い',
    answer: 'asai',
    explantion: '\n      汉字: 浅い\n      读音: あさい\n      意思: shallow\n      来源: superficial\n      同义词: 浅い\n    ',
  },
  {
    question: '線',
    answer: 'sen',
    explantion: '\n      汉字: 線\n      读音: せん\n      意思: line\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '然る',
    answer: 'shikaru',
    explantion: '\n      汉字: 然る\n      读音: しかる\n      意思: a particular\n      来源: waller\n      同义词: , 然る, \n    ',
  },
  {
    question: '全然',
    answer: 'zenzen',
    explantion: '\n      汉字: 全然\n      读音: ぜんぜん\n      意思: not entirely (used in a negative sentence)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '祖父',
    answer: 'sofu',
    explantion: '\n      汉字: 祖父\n      读音: そふ\n      意思: grandfather\n      来源: waller\n      同义词: 祖父, 祖父, 祖父, 祖父, 祖父\n    ',
  },
  {
    question: '祖母',
    answer: 'sobo',
    explantion: '\n      汉字: 祖母\n      读音: そぼ\n      意思: grandmother\n      来源: waller\n      同义词: 祖母, 祖母, 祖母, 祖母\n    ',
  },
  {
    question: '相談',
    answer: 'sōdan',
    explantion: '\n      汉字: 相談\n      读音: そうだん\n      意思: to discuss\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '草',
    answer: 'kusa',
    explantion: '\n      汉字: 草\n      读音: くさ\n      意思: grass\n      来源: waller\n      同义词: 艸\n    ',
  },
  {
    question: '送る',
    answer: 'okuru',
    explantion: '\n      汉字: 送る\n      读音: おくる\n      意思: to send\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '騒ぐ',
    answer: 'sawagu',
    explantion: '\n      汉字: 騒ぐ\n      读音: さわぐ\n      意思: to make noise\n      来源: to be excited\n      同义词: 騒ぐ, 騷ぐ\n    ',
  },
  {
    question: '息子',
    answer: 'musuko',
    explantion: '\n      汉字: 息子\n      读音: むすこ\n      意思: (humble) son\n      来源: waller\n      同义词: むす子, 息, 息\n    ',
  },
  {
    question: '足す',
    answer: 'tasu',
    explantion: '\n      汉字: 足す\n      读音: たす\n      意思: to add a number\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '足りる',
    answer: 'tariru',
    explantion: '\n      汉字: 足りる\n      读音: たりる\n      意思: to be enough\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '続く',
    answer: 'tsuzuku',
    explantion: '\n      汉字: 続く\n      读音: つづく\n      意思: to be continued\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '続ける',
    answer: 'tsuzukeru',
    explantion: '\n      汉字: 続ける\n      读音: つづける\n      意思: to continue\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '卒業',
    answer: 'sotsugyō',
    explantion: '\n      汉字: 卒業\n      读音: そつぎょう\n      意思: graduation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '太る',
    answer: 'futoru',
    explantion: '\n      汉字: 太る\n      读音: ふとる\n      意思: to become fat\n      来源: waller\n      同义词: 肥る\n    ',
  },
  {
    question: '打つ',
    answer: 'utsu',
    explantion: '\n      汉字: 打つ\n      读音: うつ\n      意思: to hit\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '退院',
    answer: 'taiin',
    explantion: '\n      汉字: 退院\n      读音: たいいん\n      意思: to leave hospital\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大学生',
    answer: 'daigakusei',
    explantion: '\n      汉字: 大学生\n      读音: だいがくせい\n      意思: university student\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大事',
    answer: 'daiji',
    explantion: '\n      汉字: 大事\n      读音: だいじ\n      意思: important\n      来源: valuable\n      同义词: 大事\n    ',
  },
  {
    question: '大体',
    answer: 'daitai',
    explantion: '\n      汉字: 大体\n      读音: だいたい\n      意思: generally\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大抵',
    answer: 'taitei',
    explantion: '\n      汉字: 大抵\n      读音: たいてい\n      意思: usually\n      来源: waller\n      同义词: , 大てい\n    ',
  },
  {
    question: '大分',
    answer: 'ōita',
    explantion: '\n      汉字: 大分\n      读音: だいぶ\n      意思: greatly\n      来源: waller\n      同义词: , , 大分\n    ',
  },
  {
    question: '棚',
    answer: 'tana',
    explantion: '\n      汉字: 棚\n      读音: たな\n      意思: shelves\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '暖房',
    answer: 'dambō',
    explantion: '\n      汉字: 暖房\n      读音: だんぼう\n      意思: heating\n      来源: waller\n      同义词: 煖房\n    ',
  },
  {
    question: '男性',
    answer: 'dansei',
    explantion: '\n      汉字: 男性\n      读音: だんせい\n      意思: male\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '知らせる',
    answer: 'shiraseru',
    explantion: '\n      汉字: 知らせる\n      读音: しらせる\n      意思: to notify\n      来源: waller\n      同义词: 報せる\n    ',
  },
  {
    question: '地震',
    answer: 'jishin',
    explantion: '\n      汉字: 地震\n      读音: じしん\n      意思: earthquake\n      来源: waller\n      同义词: 地震, 地震, 地震\n    ',
  },
  {
    question: '地理',
    answer: 'chiri',
    explantion: '\n      汉字: 地理\n      读音: ちり\n      意思: geography\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '恥ずかしい',
    answer: 'hazukashii',
    explantion: '\n      汉字: 恥ずかしい\n      读音: はずかしい\n      意思: embarrassed\n      来源: waller\n      同义词: 恥かしい, 恥しい, 羞ずかしい, 羞しい, 羞かしい\n    ',
  },
  {
    question: '致す',
    answer: 'itasu',
    explantion: '\n      汉字: 致す\n      读音: いたす\n      意思: (humble) to do\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '着物',
    answer: 'kimono',
    explantion: '\n      汉字: 着物\n      读音: きもの\n      意思: kimono\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '中学校',
    answer: 'chūgakkō',
    explantion: '\n      汉字: 中学校\n      读音: ちゅうがっこう\n      意思: junior high school\n      来源: middle school\n      同义词: 中学校\n    ',
  },
  {
    question: '昼休み',
    answer: 'hiruyasumi',
    explantion: '\n      汉字: 昼休み\n      读音: ひるやすみ\n      意思: noon break\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '注意',
    answer: 'chūi',
    explantion: '\n      汉字: 注意\n      读音: ちゅうい\n      意思: caution\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '注射',
    answer: 'chūsha',
    explantion: '\n      汉字: 注射\n      读音: ちゅうしゃ\n      意思: injection\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '虫',
    answer: 'mushi',
    explantion: '\n      汉字: 虫\n      读音: むし\n      意思: insect\n      来源: waller\n      同义词: , 蟲\n    ',
  },
  {
    question: '駐車場',
    answer: 'chūshajō',
    explantion: '\n      汉字: 駐車場\n      读音: ちゅうしゃじょう\n      意思: parking lot\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '丁寧',
    answer: 'teinei',
    explantion: '\n      汉字: 丁寧\n      读音: ていねい\n      意思: polite\n      来源: waller\n      同义词: 叮嚀\n    ',
  },
  {
    question: '調べる',
    answer: 'shiraberu',
    explantion: '\n      汉字: 調べる\n      读音: しらべる\n      意思: to investigate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '珍しい',
    answer: 'mezurashii',
    explantion: '\n      汉字: 珍しい\n      读音: めずらしい\n      意思: rare\n      来源: waller\n      同义词: 珍らしい\n    ',
  },
  {
    question: '通う',
    answer: 'kayou',
    explantion: '\n      汉字: 通う\n      读音: かよう\n      意思: to commute\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '通る',
    answer: 'tōru',
    explantion: '\n      汉字: 通る\n      读音: とおる\n      意思: to go through\n      来源: waller\n      同义词: 徹る, 透る\n    ',
  },
  {
    question: '漬ける',
    answer: 'tsukeru',
    explantion: '\n      汉字: 漬ける\n      读音: つける\n      意思: to soak\n      来源: to pickle\n      同义词: 漬ける, 浸ける\n    ',
  },
  {
    question: '釣る',
    answer: 'tsuru',
    explantion: '\n      汉字: 釣る\n      读音: つる\n      意思: to fish\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '程',
    answer: 'hodo',
    explantion: '\n      汉字: 程\n      读音: ほど\n      意思: extent\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '適当',
    answer: 'tekitō',
    explantion: '\n      汉字: 適当\n      读音: てきとう\n      意思: suitability\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '天気予報',
    answer: 'tenkiyohō',
    explantion: '\n      汉字: 天気予報\n      读音: てんきよほう\n      意思: weather forecast\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '展覧会',
    answer: 'tenrankai',
    explantion: '\n      汉字: 展覧会\n      读音: てんらんかい\n      意思: exhibition\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '店員',
    answer: 'ten\'in',
    explantion: '\n      汉字: 店員\n      读音: てんいん\n      意思: shop assistant\n      来源: waller\n      同义词: 店員\n    ',
  },
  {
    question: '点',
    answer: 'ten',
    explantion: '\n      汉字: 点\n      读音: てん\n      意思: point\n      来源: dot\n      同义词: 点\n    ',
  },
  {
    question: '伝える',
    answer: 'tsutaeru',
    explantion: '\n      汉字: 伝える\n      读音: つたえる\n      意思: to report\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '田舎',
    answer: 'inaka',
    explantion: '\n      汉字: 田舎\n      读音: いなか\n      意思: countryside\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '電灯',
    answer: 'dentō',
    explantion: '\n      汉字: 電灯\n      读音: でんとう\n      意思: electric light\n      来源: waller\n      同义词: 電燈\n    ',
  },
  {
    question: '電報',
    answer: 'dempō',
    explantion: '\n      汉字: 電報\n      读音: でんぽう\n      意思: telegram\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '塗る',
    answer: 'nuru',
    explantion: '\n      汉字: 塗る\n      读音: ぬる\n      意思: to paint\n      来源: to plaster\n      同义词: 塗る\n    ',
  },
  {
    question: '都合',
    answer: 'tsugō',
    explantion: '\n      汉字: 都合\n      读音: つごう\n      意思: circumstances\n      来源: convenience\n      同义词: 都合\n    ',
  },
  {
    question: '怒る',
    answer: 'okoru',
    explantion: '\n      汉字: 怒る\n      读音: おこる\n      意思: to get angry\n      来源: to be angry\n      同义词: 怒る, 怒る, 瞋る\n    ',
  },
  {
    question: '倒れる',
    answer: 'taoreru',
    explantion: '\n      汉字: 倒れる\n      读音: たおれる\n      意思: to break down\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '島',
    answer: 'shima',
    explantion: '\n      汉字: 島\n      读音: しま\n      意思: island\n      来源: waller\n      同义词: , 嶋\n    ',
  },
  {
    question: '投げる',
    answer: 'nageru',
    explantion: '\n      汉字: 投げる\n      读音: なげる\n      意思: to throw or cast away\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '盗む',
    answer: 'nusumu',
    explantion: '\n      汉字: 盗む\n      读音: ぬすむ\n      意思: to steal\n      来源: waller\n      同义词: 偸む\n    ',
  },
  {
    question: '湯',
    answer: 'yu',
    explantion: '\n      汉字: 湯\n      读音: ゆ\n      意思: hot water\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '答',
    answer: 'kotae',
    explantion: '\n      汉字: 答\n      读音: こたえ\n      意思: response\n      来源: waller\n      同义词: 答え, 答え, 応え, 応え, 報え\n    ',
  },
  {
    question: '到頭',
    answer: 'tōtō',
    explantion: '\n      汉字: 到頭\n      读音: とうとう\n      意思: finally\n      来源:  after all\n      同义词: 到頭, \n    ',
  },
  {
    question: '踏む',
    answer: 'fumu',
    explantion: '\n      汉字: 踏む\n      读音: ふむ\n      意思: to step on\n      来源: waller\n      同义词: 履む, 践む\n    ',
  },
  {
    question: '逃げる',
    answer: 'nigeru',
    explantion: '\n      汉字: 逃げる\n      读音: にげる\n      意思: to escape\n      来源: waller\n      同义词: 迯げる\n    ',
  },
  {
    question: '動く',
    answer: 'ugoku',
    explantion: '\n      汉字: 動く\n      读音: うごく\n      意思: to move\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '動物園',
    answer: 'dōbutsuen',
    explantion: '\n      汉字: 動物園\n      读音: どうぶつえん\n      意思: zoo\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '道具',
    answer: 'dōgu',
    explantion: '\n      汉字: 道具\n      读音: どうぐ\n      意思: tool\n      来源: means\n      同义词: 道具\n    ',
  },
  {
    question: '特に',
    answer: 'tokuni',
    explantion: '\n      汉字: 特に\n      读音: とくに\n      意思: particularly\n      来源: especially\n      同义词: 特に\n    ',
  },
  {
    question: '特急',
    answer: 'tokkyū',
    explantion: '\n      汉字: 特急\n      读音: とっきゅう\n      意思: limited express train (faster than an express train)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '特別',
    answer: 'tokubetsu',
    explantion: '\n      汉字: 特別\n      读音: とくべつ\n      意思: special\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '届ける',
    answer: 'todokeru',
    explantion: '\n      汉字: 届ける\n      读音: とどける\n      意思: to reach\n      来源: waller\n      同义词: 屆ける\n    ',
  },
  {
    question: '内',
    answer: 'uchi',
    explantion: '\n      汉字: 内\n      读音: うち\n      意思: within\n      来源: waller\n      同义词: , 中\n    ',
  },
  {
    question: '日',
    answer: 'hi',
    explantion: '\n      汉字: 日\n      读音: ひ\n      意思: day\n      来源:  sun\n      同义词: 日\n    ',
  },
  {
    question: '日記',
    answer: 'nikki',
    explantion: '\n      汉字: 日記\n      读音: にっき\n      意思: journal\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '入院',
    answer: 'nyūin',
    explantion: '\n      汉字: 入院\n      读音: にゅういん\n      意思: to hospitalise\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '入学',
    answer: 'nyūgaku',
    explantion: '\n      汉字: 入学\n      读音: にゅうがく\n      意思: to enter school or university\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '熱',
    answer: 'netsu',
    explantion: '\n      汉字: 熱\n      读音: ねつ\n      意思: fever\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '拝見',
    answer: 'haiken',
    explantion: '\n      汉字: 拝見\n      读音: はいけん\n      意思: (humble) to look at\n      来源: waller\n      同义词: 拜見\n    ',
  },
  {
    question: '背中',
    answer: 'senaka',
    explantion: '\n      汉字: 背中\n      读音: せなか\n      意思: back of the body\n      来源: waller\n      同义词: 背なか\n    ',
  },
  {
    question: '倍',
    answer: 'bai',
    explantion: '\n      汉字: 倍\n      读音: ばい\n      意思: double\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '泊まる',
    answer: 'tomaru',
    explantion: '\n      汉字: 泊まる\n      读音: とまる\n      意思: to lodge at\n      来源: waller\n      同义词: 泊る\n    ',
  },
  {
    question: '筈',
    answer: 'hazu',
    explantion: '\n      汉字: 筈\n      读音: はず\n      意思: it should be so\n      来源: waller\n      同义词: , 弭\n    ',
  },
  {
    question: '発音',
    answer: 'hatsuon',
    explantion: '\n      汉字: 発音\n      读音: はつおん\n      意思: pronunciation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '髪',
    answer: 'kami',
    explantion: '\n      汉字: 髪\n      读音: かみ\n      意思: hair\n      来源: waller\n      同义词: 髮\n    ',
  },
  {
    question: '反対',
    answer: 'hantai',
    explantion: '\n      汉字: 反対\n      读音: はんたい\n      意思: opposition\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '番組',
    answer: 'bangumi',
    explantion: '\n      汉字: 番組\n      读音: ばんぐみ\n      意思: television or radio program\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '彼',
    answer: 'kare',
    explantion: '\n      汉字: 彼\n      读音: かれ\n      意思: he\n      来源: boyfriend\n      同义词: 彼\n    ',
  },
  {
    question: '彼ら',
    answer: 'karera',
    explantion: '\n      汉字: 彼ら\n      读音: かれら\n      意思: they\n      来源: waller\n      同义词: 彼等\n    ',
  },
  {
    question: '彼女',
    answer: 'kanojo',
    explantion: '\n      汉字: 彼女\n      读音: かのじょ\n      意思: she\n      来源: girlfriend\n      同义词: 彼女\n    ',
  },
  {
    question: '悲しい',
    answer: 'kanashii',
    explantion: '\n      汉字: 悲しい\n      读音: かなしい\n      意思: sad\n      来源: waller\n      同义词: 哀しい, 愛しい\n    ',
  },
  {
    question: '比べる',
    answer: 'kuraberu',
    explantion: '\n      汉字: 比べる\n      读音: くらべる\n      意思: to compare\n      来源: waller\n      同义词: 較べる, 競べる\n    ',
  },
  {
    question: '非常に',
    answer: 'hijōni',
    explantion: '\n      汉字: 非常に\n      读音: ひじょうに\n      意思: extremely\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '飛行場',
    answer: 'hikōjō',
    explantion: '\n      汉字: 飛行場\n      读音: ひこうじょう\n      意思: airport\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '美しい',
    answer: 'utsukushii',
    explantion: '\n      汉字: 美しい\n      读音: うつくしい\n      意思: beautiful\n      来源: waller\n      同义词: 愛しい\n    ',
  },
  {
    question: '美術館',
    answer: 'bijutsukan',
    explantion: '\n      汉字: 美術館\n      读音: びじゅつかん\n      意思: art gallery\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '必ず',
    answer: 'kanarazu',
    explantion: '\n      汉字: 必ず\n      读音: かならず\n      意思: certainly\n      来源: necessarily\n      同义词: 必ず\n    ',
  },
  {
    question: '必要',
    answer: 'hitsuyō',
    explantion: '\n      汉字: 必要\n      读音: ひつよう\n      意思: necessary\n      来源: waller\n      同义词: 必用\n    ',
  },
  {
    question: '表',
    answer: 'hyō',
    explantion: '\n      汉字: 表\n      读音: おもて\n      意思: the front\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '品物',
    answer: 'shinamono',
    explantion: '\n      汉字: 品物\n      读音: しなもの\n      意思: goods\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '不便',
    answer: 'fuben',
    explantion: '\n      汉字: 不便\n      读音: ふべん\n      意思: inconvenience\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '付く',
    answer: 'tsuku',
    explantion: '\n      汉字: 付く\n      读音: つく\n      意思: to be attached\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '夫',
    answer: 'otto',
    explantion: '\n      汉字: 夫\n      读音: おっと\n      意思: husband\n      来源: waller\n      同义词: 良人\n    ',
  },
  {
    question: '布団',
    answer: 'futon',
    explantion: '\n      汉字: 布団\n      读音: ふとん\n      意思: Japanese bedding\n      来源:  futon\n      同义词: 布団, 蒲団, 薄団\n    ',
  },
  {
    question: '普通',
    answer: 'futsū',
    explantion: '\n      汉字: 普通\n      读音: ふつう\n      意思: usually\n      来源:  or a train that stops at every station\n      同义词: 普通\n    ',
  },
  {
    question: '負ける',
    answer: 'makeru',
    explantion: '\n      汉字: 負ける\n      读音: まける\n      意思: to lose\n      来源: waller\n      同义词: 敗ける, 敗北る\n    ',
  },
  {
    question: '葡萄',
    answer: 'budō',
    explantion: '\n      汉字: 葡萄\n      读音: ぶどう\n      意思: grapes\n      来源: waller\n      同义词: , , 葡萄, \n    ',
  },
  {
    question: '部長',
    answer: 'buchō',
    explantion: '\n      汉字: 部長\n      读音: ぶちょう\n      意思: head of a section\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '復習',
    answer: 'fukushū',
    explantion: '\n      汉字: 復習\n      读音: ふくしゅう\n      意思: revision\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '複雑',
    answer: 'fukuzatsu',
    explantion: '\n      汉字: 複雑\n      读音: ふくざつ\n      意思: complexity\n      来源: complication\n      同义词: 複雑\n    ',
  },
  {
    question: '払う',
    answer: 'harau',
    explantion: '\n      汉字: 払う\n      读音: はらう\n      意思: to pay\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '沸かす',
    answer: 'wakasu',
    explantion: '\n      汉字: 沸かす\n      读音: わかす\n      意思: to boil\n      来源: to heat\n      同义词: 沸かす, 鎔かす\n    ',
  },
  {
    question: '文化',
    answer: 'bunka',
    explantion: '\n      汉字: 文化\n      读音: ぶんか\n      意思: culture\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '文学',
    answer: 'bungaku',
    explantion: '\n      汉字: 文学\n      读音: ぶんがく\n      意思: literature\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '文法',
    answer: 'bumpō',
    explantion: '\n      汉字: 文法\n      读音: ぶんぽう\n      意思: grammar\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '米',
    answer: 'bei',
    explantion: '\n      汉字: 米\n      读音: こめ\n      意思: uncooked rice\n      来源: waller\n      同义词: 米, \n    ',
  },
  {
    question: '壁',
    answer: 'kabe',
    explantion: '\n      汉字: 壁\n      读音: かべ\n      意思: wall\n      来源: waller\n      同义词: 壁\n    ',
  },
  {
    question: '別',
    answer: 'betsu',
    explantion: '\n      汉字: 別\n      读音: べつ\n      意思: different\n      来源: waller\n      同义词: 別\n    ',
  },
  {
    question: '変',
    answer: 'hen',
    explantion: '\n      汉字: 変\n      读音: へん\n      意思: strange\n      来源: waller\n      同义词: 變\n    ',
  },
  {
    question: '変える',
    answer: 'kaeru',
    explantion: '\n      汉字: 変える\n      读音: かえる\n      意思: to change\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '変わる',
    answer: 'kawaru',
    explantion: '\n      汉字: 変わる\n      读音: かわる\n      意思: to change\n      来源: waller\n      同义词: 変る\n    ',
  },
  {
    question: '片付ける',
    answer: 'katazukeru',
    explantion: '\n      汉字: 片付ける\n      读音: かたづける\n      意思: to tidy up\n      来源: waller\n      同义词: 片づける\n    ',
  },
  {
    question: '返事',
    answer: 'henji',
    explantion: '\n      汉字: 返事\n      读音: へんじ\n      意思: reply\n      来源: waller\n      同义词: 返辞\n    ',
  },
  {
    question: '暮れる',
    answer: 'kureru',
    explantion: '\n      汉字: 暮れる\n      读音: くれる\n      意思: to get dark\n      来源: to come to an end\n      同义词: 暮れる, 眩れる, 暗れる, 昏れる\n    ',
  },
  {
    question: '放送',
    answer: 'hōsō',
    explantion: '\n      汉字: 放送\n      读音: ほうそう\n      意思: to broadcast\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '法律',
    answer: 'hōritsu',
    explantion: '\n      汉字: 法律\n      读音: ほうりつ\n      意思: law\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '訪ねる',
    answer: 'tazuneru',
    explantion: '\n      汉字: 訪ねる\n      读音: たずねる\n      意思: to visit\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '亡くなる',
    answer: 'nakunaru',
    explantion: '\n      汉字: 亡くなる\n      读音: なくなる\n      意思: to die\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '忘れ物',
    answer: 'wasuremono',
    explantion: '\n      汉字: 忘れ物\n      读音: わすれもの\n      意思: lost article\n      来源: waller\n      同义词: 忘れもの\n    ',
  },
  {
    question: '貿易',
    answer: 'bōeki',
    explantion: '\n      汉字: 貿易\n      读音: ぼうえき\n      意思: trade\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '僕',
    answer: 'boku',
    explantion: '\n      汉字: 僕\n      读音: ぼく\n      意思: I (used by males)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '翻訳',
    answer: 'hon\'yaku',
    explantion: '\n      汉字: 翻訳\n      读音: ほんやく\n      意思: translation\n      来源: waller\n      同义词: 飜訳\n    ',
  },
  {
    question: '漫画',
    answer: 'manga',
    explantion: '\n      汉字: 漫画\n      读音: まんが\n      意思: comic\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '味',
    answer: 'aji',
    explantion: '\n      汉字: 味\n      读音: あじ\n      意思: flavour\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '味噌',
    answer: 'miso',
    explantion: '\n      汉字: 味噌\n      读音: みそ\n      意思: bean paste\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '眠い',
    answer: 'nemui',
    explantion: '\n      汉字: 眠い\n      读音: ねむい\n      意思: sleepy\n      来源: waller\n      同义词: 睡い\n    ',
  },
  {
    question: '眠る',
    answer: 'nemuru',
    explantion: '\n      汉字: 眠る\n      读音: ねむる\n      意思: to sleep\n      来源: waller\n      同义词: 眠る, 睡る, 睡る\n    ',
  },
  {
    question: '夢',
    answer: 'yume',
    explantion: '\n      汉字: 夢\n      读音: ゆめ\n      意思: dream\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '無くなる',
    answer: 'nakunaru',
    explantion: '\n      汉字: 無くなる\n      读音: なくなる\n      意思: to disappear\n      来源: to get lost\n      同义词: 無くなる, \n    ',
  },
  {
    question: '無理',
    answer: 'muri',
    explantion: '\n      汉字: 無理\n      读音: むり\n      意思: impossible\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '娘',
    answer: 'musume',
    explantion: '\n      汉字: 娘\n      读音: むすめ\n      意思: (humble) daughter\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '鳴る',
    answer: 'naru',
    explantion: '\n      汉字: 鳴る\n      读音: なる\n      意思: to sound\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '毛',
    answer: 'mō',
    explantion: '\n      汉字: 毛\n      读音: け\n      意思: hair or fur\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '木綿',
    answer: 'kowata',
    explantion: '\n      汉字: 木綿\n      读音: もめん\n      意思: cotton\n      来源: waller\n      同义词: 木綿, , 木棉\n    ',
  },
  {
    question: '戻る',
    answer: 'modoru',
    explantion: '\n      汉字: 戻る\n      读音: もどる\n      意思: to turn back\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '役に立つ',
    answer: 'yakunitatsu',
    explantion: '\n      汉字: 役に立つ\n      读音: やくにたつ\n      意思: to be helpful\n      来源: waller\n      同义词: 役にたつ, やくに立つ\n    ',
  },
  {
    question: '約束',
    answer: 'yakusoku',
    explantion: '\n      汉字: 約束\n      读音: やくそく\n      意思: promise\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '訳',
    answer: 'wake',
    explantion: '\n      汉字: 訳\n      读音: わけ\n      意思: meaning\n      来源: reason\n      同义词: 訳, \n    ',
  },
  {
    question: '踊る',
    answer: 'odoru',
    explantion: '\n      汉字: 踊る\n      读音: おどる\n      意思: to dance\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '輸出',
    answer: 'yushutsu',
    explantion: '\n      汉字: 輸出\n      读音: ゆしゅつ\n      意思: to export\n      来源: waller\n      同义词: 輸出\n    ',
  },
  {
    question: '輸入',
    answer: 'yunyū',
    explantion: '\n      汉字: 輸入\n      读音: ゆにゅう\n      意思: to import\n      来源: waller\n      同义词: 輸入\n    ',
  },
  {
    question: '優しい',
    answer: 'yasashii',
    explantion: '\n      汉字: 優しい\n      读音: やさしい\n      意思: kind\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '遊び',
    answer: 'asobi',
    explantion: '\n      汉字: 遊び\n      读音: あそび\n      意思: play\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '予習',
    answer: 'yoshū',
    explantion: '\n      汉字: 予習\n      读音: よしゅう\n      意思: preparation for a lesson\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '予定',
    answer: 'yotei',
    explantion: '\n      汉字: 予定\n      读音: よてい\n      意思: arrangement\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '予約',
    answer: 'yoyaku',
    explantion: '\n      汉字: 予約\n      读音: よやく\n      意思: reservation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '揺れる',
    answer: 'yureru',
    explantion: '\n      汉字: 揺れる\n      读音: ゆれる\n      意思: to shake\n      来源: to sway\n      同义词: 揺れる\n    ',
  },
  {
    question: '用',
    answer: 'yō',
    explantion: '\n      汉字: 用\n      读音: よう\n      意思: use\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '用意',
    answer: 'yōi',
    explantion: '\n      汉字: 用意\n      读音: ようい\n      意思: preparation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '用事',
    answer: 'yōji',
    explantion: '\n      汉字: 用事\n      读音: ようじ\n      意思: things to do\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '葉',
    answer: 'ha',
    explantion: '\n      汉字: 葉\n      读音: は\n      意思: leaf\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '踊り',
    answer: 'odori',
    explantion: '\n      汉字: 踊り\n      读音: おどり\n      意思: a dance\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '落る',
    answer: '落ru',
    explantion: '\n      汉字: 落る\n      读音: おちる\n      意思: to fall or drop\n      来源: waller\n      同义词: 落ちる, 堕ちる, 墜ちる\n    ',
  },
  {
    question: '利用',
    answer: 'riyō',
    explantion: '\n      汉字: 利用\n      读音: りよう\n      意思: utilization\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '理由',
    answer: 'riyū',
    explantion: '\n      汉字: 理由\n      读音: りゆう\n      意思: reason\n      来源: waller\n      同义词: 理由\n    ',
  },
  {
    question: '裏',
    answer: 'ura',
    explantion: '\n      汉字: 裏\n      读音: うら\n      意思: reverse side\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '立てる',
    answer: 'tateru',
    explantion: '\n      汉字: 立てる\n      读音: たてる\n      意思: to stand something up\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '留守',
    answer: 'rusu',
    explantion: '\n      汉字: 留守\n      读音: るす\n      意思: absence\n      来源: waller\n      同义词: 留主\n    ',
  },
  {
    question: '旅館',
    answer: 'ryokan',
    explantion: '\n      汉字: 旅館\n      读音: りょかん\n      意思: Japanese hotel\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '両方',
    answer: 'ryōhō',
    explantion: '\n      汉字: 両方\n      读音: りょうほう\n      意思: both sides\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '力',
    answer: 'chikara',
    explantion: '\n      汉字: 力\n      读音: ちから\n      意思: strength\n      来源: power\n      同义词: 力\n    ',
  },
  {
    question: '林',
    answer: 'hayashi',
    explantion: '\n      汉字: 林\n      读音: はやし\n      意思: woods\n      来源: forester\n      同义词: 林\n    ',
  },
  {
    question: '例えば',
    answer: 'tatoeba',
    explantion: '\n      汉字: 例えば\n      读音: たとえば\n      意思: for example\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '冷える',
    answer: 'hieru',
    explantion: '\n      汉字: 冷える\n      读音: ひえる\n      意思: to grow cold\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '冷房',
    answer: 'reibō',
    explantion: '\n      汉字: 冷房\n      读音: れいぼう\n      意思: air conditioning\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '歴史',
    answer: 'rekishi',
    explantion: '\n      汉字: 歴史\n      读音: れきし\n      意思: history\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '連れる',
    answer: 'tsureru',
    explantion: '\n      汉字: 連れる\n      读音: つれる\n      意思: to lead\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '連絡',
    answer: 'renraku',
    explantion: '\n      汉字: 連絡\n      读音: れんらく\n      意思: contact\n      来源: waller\n      同义词: 聯絡\n    ',
  },
  {
    question: '腕',
    answer: 'ude',
    explantion: '\n      汉字: 腕\n      读音: うで\n      意思: arm\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '掏摸',
    answer: 'suri',
    explantion: '\n      汉字: 掏摸\n      读音: すり\n      意思: pickpocket\n      来源: waller\n      同义词: , 掏児, \n    ',
  },
  {
    question: '一度',
    answer: 'ichido',
    explantion: '\n      汉字: 一度\n      读音: いちど\n      意思: once\n      来源: waller\n      同义词: 一度, １度, １度, 一たび, ひと度, 一とたび\n    ',
  },
  {
    question: '音',
    answer: 'oto',
    explantion: '\n      汉字: 音\n      读音: おと\n      意思: sound\n      来源: note\n      同义词: 音, 音, 音\n    ',
  },
  {
    question: '工場',
    answer: 'kōjō',
    explantion: '\n      汉字: 工場\n      读音: こうじょう\n      意思: factory\n      来源: waller\n      同义词: 工場\n    ',
  },
  {
    question: '寂しい',
    answer: 'sabishii',
    explantion: '\n      汉字: 寂しい\n      读音: さびしい\n      意思: lonely\n      来源: waller\n      同义词: 寂しい, 淋しい, 淋しい\n    ',
  },
  {
    question: '昼間',
    answer: 'hiruma',
    explantion: '\n      汉字: 昼間\n      读音: ひるま\n      意思: daytime\n      来源: during the day\n      同义词: 昼間, 昼間\n    ',
  },
  {
    question: '途中',
    answer: 'tochū',
    explantion: '\n      汉字: 途中\n      读音: とちゅう\n      意思: on the way\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '包む',
    answer: 'tsutsumu',
    explantion: '\n      汉字: 包む\n      读音: つつむ\n      意思: to wrap\n      来源: waller\n      同义词: 裹む\n    ',
  },
  {
    question: '明日',
    answer: 'ashita',
    explantion: '\n      汉字: 明日\n      读音: あす\n      意思: tomorrow\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '空く',
    answer: 'suku',
    explantion: '\n      汉字: 空く\n      读音: すく\n      意思: to become empty\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '空く',
    answer: 'suku',
    explantion: '\n      汉字: 空く\n      读音: あく\n      意思: to open\n      来源:  to become empty\n      同义词: 空く\n    ',
  },
  {
    question: '受付',
    answer: 'uketsuke',
    explantion: '\n      汉字: 受付\n      读音: うけつけ\n      意思: receipt\n      来源: waller\n      同义词: 受け付け, 受付け, 受け付\n    ',
  },
  {
    question: '写す',
    answer: 'utsusu',
    explantion: '\n      汉字: 写す\n      读音: うつす\n      意思: to copy or photograph\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '売り場',
    answer: 'uriba',
    explantion: '\n      汉字: 売り場\n      读音: うりば\n      意思: place where things are sold\n      来源: waller\n      同义词: 売場\n    ',
  },
  {
    question: '選ぶ',
    answer: 'erabu',
    explantion: '\n      汉字: 選ぶ\n      读音: えらぶ\n      意思: to choose\n      来源: waller\n      同义词: 撰ぶ, 択ぶ\n    ',
  },
  {
    question: '贈り物',
    answer: 'okurimono',
    explantion: '\n      汉字: 贈り物\n      读音: おくりもの\n      意思: gift\n      来源: waller\n      同义词: 贈りもの, 贈物\n    ',
  },
  {
    question: '遅れる',
    answer: 'okureru',
    explantion: '\n      汉字: 遅れる\n      读音: おくれる\n      意思: to be late\n      来源: waller\n      同义词: 後れる\n    ',
  },
  {
    question: '行う',
    answer: 'okonau',
    explantion: '\n      汉字: 行う\n      读音: おこなう\n      意思: to do\n      来源: waller\n      同义词: 行なう\n    ',
  },
  {
    question: '押し入れ',
    answer: 'oshiire',
    explantion: '\n      汉字: 押し入れ\n      读音: おしいれ\n      意思: closet\n      来源: waller\n      同义词: 押入, 押入れ\n    ',
  },
  {
    question: '落す',
    answer: 'otosu',
    explantion: '\n      汉字: 落す\n      读音: おとす\n      意思: to drop\n      来源: waller\n      同义词: 落とす\n    ',
  },
  {
    question: '思う',
    answer: 'omou',
    explantion: '\n      汉字: 思う\n      读音: おもう\n      意思: to think\n      来源: to feel\n      同义词: 思う, 想う, 念う, 憶う, 懐う, 惟う\n    ',
  },
  {
    question: '下りる',
    answer: 'oriru',
    explantion: '\n      汉字: 下りる\n      读音: おりる\n      意思: to get off\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '終わり',
    answer: 'owari',
    explantion: '\n      汉字: 終わり\n      读音: おわり\n      意思: the end\n      来源: waller\n      同义词: 終り, 終\n    ',
  },
  {
    question: '格好',
    answer: 'kakkō',
    explantion: '\n      汉字: 格好\n      读音: かっこう\n      意思: appearance\n      来源: waller\n      同义词: 格好, 恰好, 恰好, \n    ',
  },
  {
    question: '代わり',
    answer: 'kawari',
    explantion: '\n      汉字: 代わり\n      读音: かわり\n      意思: substitute\n      来源: alternate\n      同义词: 代わり, 替わり, 代り, 替り\n    ',
  },
  {
    question: '聞こえる',
    answer: 'kikoeru',
    explantion: '\n      汉字: 聞こえる\n      读音: きこえる\n      意思: to be heard\n      来源: waller\n      同义词: 聞える, 聴こえる, 聴える\n    ',
  },
  {
    question: '決る',
    answer: 'kimaru',
    explantion: '\n      汉字: 決る\n      读音: きまる\n      意思: to be decided\n      来源: waller\n      同义词: 決まる, 極る, \n    ',
  },
  {
    question: '気持ち',
    answer: 'kimochi',
    explantion: '\n      汉字: 気持ち\n      读音: きもち\n      意思: feeling\n      来源: mood\n      同义词: 気持ち, 気持\n    ',
  },
  {
    question: '首',
    answer: 'kubi',
    explantion: '\n      汉字: 首\n      读音: くび\n      意思: neck\n      来源: waller\n      同义词: , 頸, 頚, \n    ',
  },
  {
    question: '具合',
    answer: 'guai',
    explantion: '\n      汉字: 具合\n      读音: ぐあい\n      意思: condition\n      来源: health\n      同义词: 具合, 具合, 工合, 工合, 具合い, 工合い\n    ',
  },
  {
    question: '込む',
    answer: 'komu',
    explantion: '\n      汉字: 込む\n      读音: こむ\n      意思: to be crowded\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '怖い',
    answer: 'kowai',
    explantion: '\n      汉字: 怖い\n      读音: こわい\n      意思: frightening\n      来源: waller\n      同义词: 恐い\n    ',
  },
  {
    question: 'ご存じ',
    answer: 'gozonji',
    explantion: '\n      汉字: ご存じ\n      读音: ごぞんじ\n      意思: knowing\n      来源: acquaintance\n      同义词: ご存じ, ご存知, 御存じ, 御存知\n    ',
  },
  {
    question: '探す',
    answer: 'sagasu',
    explantion: '\n      汉字: 探す\n      读音: さがす\n      意思: to look for\n      来源: waller\n      同义词: 捜す\n    ',
  },
  {
    question: '仕方',
    answer: 'shikata',
    explantion: '\n      汉字: 仕方\n      读音: しかた\n      意思: method\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '辞典',
    answer: 'jiten',
    explantion: '\n      汉字: 辞典\n      读音: じてん\n      意思: dictionary\n      来源: waller\n      同义词: 辞典, 辭典, 辭典, ことば典, 言葉典\n    ',
  },
  {
    question: '台風',
    answer: 'taifū',
    explantion: '\n      汉字: 台風\n      读音: たいふう\n      意思: typhoon\n      来源: waller\n      同义词: 颱風\n    ',
  },
  {
    question: '確か',
    answer: 'tashika',
    explantion: '\n      汉字: 確か\n      读音: たしか\n      意思: definite\n      来源: waller\n      同义词: 確, 慥か\n    ',
  },
  {
    question: '捕まえる',
    answer: 'tsukamaeru',
    explantion: '\n      汉字: 捕まえる\n      读音: つかまえる\n      意思: to seize\n      来源: waller\n      同义词: 捉まえる, 掴まえる\n    ',
  },
  {
    question: '泥棒',
    answer: 'dorobō',
    explantion: '\n      汉字: 泥棒\n      读音: どろぼう\n      意思: thief\n      来源: waller\n      同义词: 泥坊, , \n    ',
  },
  {
    question: '直す',
    answer: 'naosu',
    explantion: '\n      汉字: 直す\n      读音: なおす\n      意思: to fix\n      来源: to repair\n      同义词: 直す, 治す\n    ',
  },
  {
    question: '治る',
    answer: 'naoru',
    explantion: '\n      汉字: 治る\n      读音: なおる\n      意思: to be cured\n      来源: to heal\n      同义词: 治る\n    ',
  },
  {
    question: '中々',
    answer: 'naka々',
    explantion: '\n      汉字: 中々\n      读音: なかなか\n      意思: considerably\n      来源: waller\n      同义词: , 仲々, 中中\n    ',
  },
  {
    question: '二階建て',
    answer: 'nikaidate',
    explantion: '\n      汉字: 二階建て\n      读音: にかいだて\n      意思: two storied\n      来源: waller\n      同义词: 二階建, ２階建て, ２階建\n    ',
  },
  {
    question: '喉',
    answer: 'nodo',
    explantion: '\n      汉字: 喉\n      读音: のど\n      意思: throat\n      来源: waller\n      同义词: , , 喉, , 喉, , 喉, 咽, 咽, 咽, 咽, 吭, 吭, 吭, 吭, \n    ',
  },
  {
    question: '乗り換える',
    answer: 'norikaeru',
    explantion: '\n      汉字: 乗り換える\n      读音: のりかえる\n      意思: to change between buses or trains\n      来源: waller\n      同义词: 乗りかえる, 乗換える, 乗り替える, 乗替える\n    ',
  },
  {
    question: '乗り物',
    answer: 'norimono',
    explantion: '\n      汉字: 乗り物\n      读音: のりもの\n      意思: vehicle\n      来源: waller\n      同义词: 乗物\n    ',
  },
  {
    question: '引き出し',
    answer: 'hikidashi',
    explantion: '\n      汉字: 引き出し\n      读音: ひきだし\n      意思: drawer\n      来源: drawing out\n      同义词: 引き出し, 引出し, 抽き出し, 抽出し, 抽斗, 抽匣\n    ',
  },
  {
    question: '引き出す',
    answer: 'hikidasu',
    explantion: '\n      汉字: 引き出す\n      读音: ひきだす\n      意思: to withdraw\n      来源: waller\n      同义词: 引出す, 引きだす\n    ',
  },
  {
    question: '髭',
    answer: 'hige',
    explantion: '\n      汉字: 髭\n      读音: ひげ\n      意思: beard\n      来源: waller\n      同义词: , 鬚, 髯, \n    ',
  },
  {
    question: '増える',
    answer: 'fueru',
    explantion: '\n      汉字: 増える\n      读音: ふえる\n      意思: to increase\n      来源: waller\n      同义词: 殖える\n    ',
  },
  {
    question: '舟',
    answer: 'fune',
    explantion: '\n      汉字: 舟\n      读音: ふね\n      意思: ship\n      来源: waller\n      同义词: 船, 槽\n    ',
  },
  {
    question: 'お祭り',
    answer: 'omatsuri',
    explantion: '\n      汉字: お祭り\n      读音: おまつり\n      意思: festival\n      来源: waller\n      同义词: お祭, 御祭り, 御祭\n    ',
  },
  {
    question: '周り',
    answer: 'mawari',
    explantion: '\n      汉字: 周り\n      读音: まわり\n      意思: surroundings\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '回る',
    answer: 'mawaru',
    explantion: '\n      汉字: 回る\n      读音: まわる\n      意思: to go around\n      来源: waller\n      同义词: 廻る\n    ',
  },
  {
    question: '真ん中',
    answer: 'mannaka',
    explantion: '\n      汉字: 真ん中\n      读音: まんなか\n      意思: middle\n      来源: waller\n      同义词: まん中\n    ',
  },
  {
    question: '見つかる',
    answer: 'mitsukaru',
    explantion: '\n      汉字: 見つかる\n      读音: みつかる\n      意思: to be discovered\n      来源: waller\n      同义词: 見付かる\n    ',
  },
  {
    question: '見つける',
    answer: 'mitsukeru',
    explantion: '\n      汉字: 見つける\n      读音: みつける\n      意思: to discover\n      来源: waller\n      同义词: 見付ける, 見付ける, 見附ける, 見附ける, 見附る, 見附る\n    ',
  },
  {
    question: '向かう',
    answer: 'mukau',
    explantion: '\n      汉字: 向かう\n      读音: むかう\n      意思: to face\n      来源: waller\n      同义词: 向う, 対う\n    ',
  },
  {
    question: '痩せる',
    answer: 'yaseru',
    explantion: '\n      汉字: 痩せる\n      读音: やせる\n      意思: to become thin\n      来源: waller\n      同义词: 痩る, 瘠せる, 瘠る, 瘦せる\n    ',
  },
  {
    question: '柔らかい',
    answer: 'yawarakai',
    explantion: '\n      汉字: 柔らかい\n      读音: やわらかい\n      意思: soft\n      来源: waller\n      同义词: 軟らかい, 柔かい\n    ',
  },
  {
    question: '別れる',
    answer: 'wakareru',
    explantion: '\n      汉字: 別れる\n      读音: わかれる\n      意思: to separate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '沸く',
    answer: 'waku',
    explantion: '\n      汉字: 沸く\n      读音: わく\n      意思: to boil\n      来源:  to grow hot\n      同义词: 沸く\n    ',
  },
  {
    question: '割合',
    answer: 'wariai',
    explantion: '\n      汉字: 割合\n      读音: わりあい\n      意思: rate\n      来源: ratio\n      同义词: 割合, 割り合い\n    ',
  },
  {
    question: 'お祝い',
    answer: 'oiwai',
    explantion: '\n      汉字: お祝い\n      读音: おいわい\n      意思: congratulation\n      来源: waller\n      同义词: 御祝い, お祝, 御祝\n    ',
  },
  {
    question: '都',
    answer: 'to',
    explantion: '\n      汉字: 都\n      读音: と\n      意思: metropolitan\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '泳ぎ方',
    answer: 'oyogikata',
    explantion: '\n      汉字: 泳ぎ方\n      读音: およぎかた\n      意思: way of swimming\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お金持ち',
    answer: 'okanemochi',
    explantion: '\n      汉字: お金持ち\n      读音: おかねもち\n      意思: rich man\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '直る',
    answer: 'naoru',
    explantion: '\n      汉字: 直る\n      读音: なおる\n      意思: to be fixed\n      来源: to be repaired\n      同义词: 直る\n    ',
  },
]

const chunkSize = 50

export default (() => {
  const dbList = chunk(n4, chunkSize)
  const questionMap: { [key: string]: QuestionList } = {}

  dbList.map((list, index) => {
    const data = {
      title: `N4-${index + 1}-${list.length}`,
      name: `N4-${index + 1}-${list.length}`,
      data: list,
    }
    return data
  })
    .forEach((data) => {
      questionMap[data.name] = data
    })
  return questionMap
})()
