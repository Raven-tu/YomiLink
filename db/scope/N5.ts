import chunk from 'lodash-es/chunk'
import type { QuestionList } from '~/types'

const n5 = [
  {
    question: 'お菓子',
    answer: 'okashi',
    explantion: '\n      汉字: お菓子\n      读音: おかし\n      意思: sweets\n      来源:  candy\n      同义词: お菓子, 御菓子\n    ',
  },
  {
    question: 'お金',
    answer: 'okane',
    explantion: '\n      汉字: お金\n      读音: おかね\n      意思: money\n      来源: waller\n      同义词: 御金\n    ',
  },
  {
    question: 'お兄さん',
    answer: 'onīsan',
    explantion: '\n      汉字: お兄さん\n      读音: おにいさん\n      意思: (honorable) older brother\n      来源: waller\n      同义词: 御兄さん\n    ',
  },
  {
    question: 'お姉さん',
    answer: 'onēsan',
    explantion: '\n      汉字: お姉さん\n      读音: おねえさん\n      意思: (honorable) older sister\n      来源: waller\n      同义词: お姐さん, 御姉さん, 御姐さん\n    ',
  },
  {
    question: 'お手洗い',
    answer: 'otearai',
    explantion: '\n      汉字: お手洗い\n      读音: おてあらい\n      意思: bathroom\n      来源: waller\n      同义词: 御手洗い\n    ',
  },
  {
    question: 'お茶',
    answer: 'ocha',
    explantion: '\n      汉字: お茶\n      读音: おちゃ\n      意思: green tea\n      来源: waller\n      同义词: 御茶\n    ',
  },
  {
    question: 'お父さん',
    answer: 'otōsan',
    explantion: '\n      汉字: お父さん\n      读音: おとうさん\n      意思: (honorable) father\n      来源: waller\n      同义词: お父さん, 御父さん, 御父さん\n    ',
  },
  {
    question: 'お母さん',
    answer: 'okāsan',
    explantion: '\n      汉字: お母さん\n      读音: おかあさん\n      意思: (honorable) mother\n      来源: waller\n      同义词: 御母さん\n    ',
  },
  {
    question: '此方',
    answer: '此kata',
    explantion: '\n      汉字: 此方\n      读音: こっち\n      意思: this person or way\n      来源: waller\n      同义词: 此方, , , 此方\n    ',
  },
  {
    question: '其処',
    answer: '其sho',
    explantion: '\n      汉字: 其処\n      读音: そこ\n      意思: that place\n      来源: waller\n      同义词: , 其所\n    ',
  },
  {
    question: '其の',
    answer: 'sono',
    explantion: '\n      汉字: 其の\n      读音: その\n      意思: That\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '如何',
    answer: 'ika',
    explantion: '\n      汉字: 如何\n      读音: どう\n      意思: how\n      来源: in what way\n      同义词: 如何, \n    ',
  },
  {
    question: '遣る',
    answer: 'yaru',
    explantion: '\n      汉字: 遣る\n      读音: やる\n      意思: to do\n      来源: waller\n      同义词: , 行る\n    ',
  },
  {
    question: '悪い',
    answer: 'warui',
    explantion: '\n      汉字: 悪い\n      读音: わるい\n      意思: bad\n      来源: waller\n      同义词: 惡い, 惡るい\n    ',
  },
  {
    question: '飴',
    answer: 'ame',
    explantion: '\n      汉字: 飴\n      读音: あめ\n      意思: candy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '安い',
    answer: 'yasui',
    explantion: '\n      汉字: 安い\n      读音: やすい\n      意思: cheap\n      来源: waller\n      同义词: 廉い\n    ',
  },
  {
    question: '暗い',
    answer: 'kurai',
    explantion: '\n      汉字: 暗い\n      读音: くらい\n      意思: Gloomy\n      来源: waller\n      同义词: 昏い, 冥い, 闇い\n    ',
  },
  {
    question: '意味',
    answer: 'imi',
    explantion: '\n      汉字: 意味\n      读音: いみ\n      意思: meaning\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '易しい',
    answer: 'yasashii',
    explantion: '\n      汉字: 易しい\n      读音: やさしい\n      意思: easy\n      来源:  simple\n      同义词: 易しい, \n    ',
  },
  {
    question: '為る',
    answer: 'naru',
    explantion: '\n      汉字: 為る\n      读音: する\n      意思: to do\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '違う',
    answer: 'chigau',
    explantion: '\n      汉字: 違う\n      读音: ちがう\n      意思: to differ\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '医者',
    answer: 'isha',
    explantion: '\n      汉字: 医者\n      读音: いしゃ\n      意思: medical doctor\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '一',
    answer: 'ichi',
    explantion: '\n      汉字: 一\n      读音: いち\n      意思: one\n      来源: waller\n      同义词: １, 壱, 弌, 壹\n    ',
  },
  {
    question: '一つ',
    answer: 'hitotsu',
    explantion: '\n      汉字: 一つ\n      读音: ひとつ\n      意思: one\n      来源: waller\n      同义词: １つ, 一\n    ',
  },
  {
    question: '一月',
    answer: 'ichigatsu',
    explantion: '\n      汉字: 一月\n      读音: ひとつき\n      意思: one month\n      来源: waller\n      同义词: 一月, ひと月\n    ',
  },
  {
    question: '一緒',
    answer: 'issho',
    explantion: '\n      汉字: 一緒\n      读音: いっしょ\n      意思: together\n      来源: waller\n      同义词: 一しょ\n    ',
  },
  {
    question: '引く',
    answer: 'hiku',
    explantion: '\n      汉字: 引く\n      读音: ひく\n      意思: to pull\n      来源: waller\n      同义词: 曳く, 牽く\n    ',
  },
  {
    question: '飲む',
    answer: 'nomu',
    explantion: '\n      汉字: 飲む\n      读音: のむ\n      意思: to drink\n      来源: waller\n      同义词: 呑む, 飮む\n    ',
  },
  {
    question: '右',
    answer: 'migi',
    explantion: '\n      汉字: 右\n      读音: みぎ\n      意思: right side\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '雨',
    answer: 'ame',
    explantion: '\n      汉字: 雨\n      读音: あめ\n      意思: rain\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '映画',
    answer: 'eiga',
    explantion: '\n      汉字: 映画\n      读音: えいが\n      意思: movie\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '映画館',
    answer: 'eigakan',
    explantion: '\n      汉字: 映画館\n      读音: えいがかん\n      意思: cinema\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '泳ぐ',
    answer: 'oyogu',
    explantion: '\n      汉字: 泳ぐ\n      读音: およぐ\n      意思: to swim\n      来源: waller\n      同义词: 游ぐ\n    ',
  },
  {
    question: '英語',
    answer: 'eigo',
    explantion: '\n      汉字: 英語\n      读音: えいご\n      意思: English language\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '駅',
    answer: 'eki',
    explantion: '\n      汉字: 駅\n      读音: えき\n      意思: station\n      来源: waller\n      同义词: 驛\n    ',
  },
  {
    question: '遠い',
    answer: 'tōi',
    explantion: '\n      汉字: 遠い\n      读音: とおい\n      意思: far\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '鉛筆',
    answer: 'empitsu',
    explantion: '\n      汉字: 鉛筆\n      读音: えんぴつ\n      意思: pencil\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '汚い',
    answer: 'kitanai',
    explantion: '\n      汉字: 汚い\n      读音: きたない\n      意思: Dirty\n      来源: waller\n      同义词: 穢い, 汚ない\n    ',
  },
  {
    question: '奥さん',
    answer: 'okusan',
    explantion: '\n      汉字: 奥さん\n      读音: おくさん\n      意思: (honorable) wife\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '押す',
    answer: 'osu',
    explantion: '\n      汉字: 押す\n      读音: おす\n      意思: to push\n      来源:  to stamp something\n      同义词: 押す, 圧す, 捺す\n    ',
  },
  {
    question: '横',
    answer: 'yoko',
    explantion: '\n      汉字: 横\n      读音: よこ\n      意思: beside\n      来源: side\n      同义词: 横, \n    ',
  },
  {
    question: '黄色い',
    answer: 'kiiroi',
    explantion: '\n      汉字: 黄色い\n      读音: きいろい\n      意思: yellow\n      来源: waller\n      同义词: 黄いろい\n    ',
  },
  {
    question: '温い',
    answer: 'nukui',
    explantion: '\n      汉字: 温い\n      读音: ぬるい\n      意思: luke warm\n      来源: waller\n      同义词: , , 温い, 緩い, 微温い\n    ',
  },
  {
    question: '音楽',
    answer: 'ongaku',
    explantion: '\n      汉字: 音楽\n      读音: おんがく\n      意思: Music\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '下',
    answer: 'shita',
    explantion: '\n      汉字: 下\n      读音: した\n      意思: Below\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '下手',
    answer: 'heta',
    explantion: '\n      汉字: 下手\n      读音: へた\n      意思: unskillful\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '何時',
    answer: 'itsu',
    explantion: '\n      汉字: 何時\n      读音: いつ\n      意思: when\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '夏',
    answer: 'natsu',
    explantion: '\n      汉字: 夏\n      读音: なつ\n      意思: summer\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '夏休み',
    answer: 'natsuyasumi',
    explantion: '\n      汉字: 夏休み\n      读音: なつやすみ\n      意思: summer holiday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '家',
    answer: 'ie',
    explantion: '\n      汉字: 家\n      读音: いえ\n      意思: house\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '家族',
    answer: 'kazoku',
    explantion: '\n      汉字: 家族\n      读音: かぞく\n      意思: Family\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '家庭',
    answer: 'katei',
    explantion: '\n      汉字: 家庭\n      读音: かてい\n      意思: Household\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '果物',
    answer: 'kudamono',
    explantion: '\n      汉字: 果物\n      读音: くだもの\n      意思: Fruit\n      来源: waller\n      同义词: 果物, 菓物\n    ',
  },
  {
    question: '歌',
    answer: 'uta',
    explantion: '\n      汉字: 歌\n      读音: うた\n      意思: song\n      来源: waller\n      同义词: 唄, 詩\n    ',
  },
  {
    question: '火曜日',
    answer: 'kayōbi',
    explantion: '\n      汉字: 火曜日\n      读音: かようび\n      意思: Tuesday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '花',
    answer: 'hana',
    explantion: '\n      汉字: 花\n      读音: はな\n      意思: flower\n      来源: waller\n      同义词: 華\n    ',
  },
  {
    question: '花瓶',
    answer: 'kabin',
    explantion: '\n      汉字: 花瓶\n      读音: かびん\n      意思: a vase\n      来源: waller\n      同义词: 花瓶, 花瓶, 花びん\n    ',
  },
  {
    question: '荷物',
    answer: 'nimotsu',
    explantion: '\n      汉字: 荷物\n      读音: にもつ\n      意思: luggage\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '会う',
    answer: 'au',
    explantion: '\n      汉字: 会う\n      读音: あう\n      意思: to meet\n      来源: waller\n      同义词: , 逢う, 遭う, 遇う\n    ',
  },
  {
    question: '会社',
    answer: 'kaisha',
    explantion: '\n      汉字: 会社\n      读音: かいしゃ\n      意思: Company\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '海',
    answer: 'umi',
    explantion: '\n      汉字: 海\n      读音: うみ\n      意思: sea\n      来源: waller\n      同义词: 海, 海, 海\n    ',
  },
  {
    question: '灰皿',
    answer: 'haizara',
    explantion: '\n      汉字: 灰皿\n      读音: はいざら\n      意思: ashtray\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '皆さん',
    answer: 'minasan',
    explantion: '\n      汉字: 皆さん\n      读音: みなさん\n      意思: everyone\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '絵',
    answer: 'e',
    explantion: '\n      汉字: 絵\n      读音: え\n      意思: picture\n      来源: waller\n      同义词: 画, 画\n    ',
  },
  {
    question: '開ける',
    answer: 'akeru',
    explantion: '\n      汉字: 開ける\n      读音: あける\n      意思: to open\n      来源: waller\n      同义词: 空ける, 明ける\n    ',
  },
  {
    question: '階段',
    answer: 'kaidan',
    explantion: '\n      汉字: 階段\n      读音: かいだん\n      意思: Stairs\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '外',
    answer: 'soto',
    explantion: '\n      汉字: 外\n      读音: そと\n      意思: Outside\n      来源: waller\n      同义词: 外\n    ',
  },
  {
    question: '外国',
    answer: 'gaikoku',
    explantion: '\n      汉字: 外国\n      读音: がいこく\n      意思: foreign country\n      来源: waller\n      同义词: 外国\n    ',
  },
  {
    question: '外国人',
    answer: 'gaikokujin',
    explantion: '\n      汉字: 外国人\n      读音: がいこくじん\n      意思: Foreigner\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '覚える',
    answer: 'oboeru',
    explantion: '\n      汉字: 覚える\n      读音: おぼえる\n      意思: to remember\n      来源: waller\n      同义词: 憶える\n    ',
  },
  {
    question: '角',
    answer: 'kaku',
    explantion: '\n      汉字: 角\n      读音: かど\n      意思: a corner\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '学校',
    answer: 'gakkō',
    explantion: '\n      汉字: 学校\n      读音: がっこう\n      意思: School\n      来源: waller\n      同义词: 學校\n    ',
  },
  {
    question: '学生',
    answer: 'gakusei',
    explantion: '\n      汉字: 学生\n      读音: がくせい\n      意思: Student\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '楽しい',
    answer: 'tanoshii',
    explantion: '\n      汉字: 楽しい\n      读音: たのしい\n      意思: enjoyable\n      来源: waller\n      同义词: 愉しい, 娯しい\n    ',
  },
  {
    question: '掛かる',
    answer: 'kakaru',
    explantion: '\n      汉字: 掛かる\n      读音: かかる\n      意思: to take time or money\n      来源: waller\n      同义词: , 懸かる, 掛る, 懸る\n    ',
  },
  {
    question: '掛ける',
    answer: 'kakeru',
    explantion: '\n      汉字: 掛ける\n      读音: かける\n      意思: to call by phone\n      来源: waller\n      同义词: , 懸ける\n    ',
  },
  {
    question: '鞄',
    answer: 'kaban',
    explantion: '\n      汉字: 鞄\n      读音: かばん\n      意思: bag\n      来源:  basket\n      同义词: 鞄, , \n    ',
  },
  {
    question: '寒い',
    answer: 'samui',
    explantion: '\n      汉字: 寒い\n      读音: さむい\n      意思: Cold\n      来源: waller\n      同义词: 寒い\n    ',
  },
  {
    question: '漢字',
    answer: 'kanji',
    explantion: '\n      汉字: 漢字\n      读音: かんじ\n      意思: Chinese character\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '甘い',
    answer: 'amai',
    explantion: '\n      汉字: 甘い\n      读音: あまい\n      意思: sweet\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '危ない',
    answer: 'abunai',
    explantion: '\n      汉字: 危ない\n      读音: あぶない\n      意思: dangerous\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '机',
    answer: 'tsukue',
    explantion: '\n      汉字: 机\n      读音: つくえ\n      意思: desk\n      来源: waller\n      同义词: 机, 案\n    ',
  },
  {
    question: '帰る',
    answer: 'kaeru',
    explantion: '\n      汉字: 帰る\n      读音: かえる\n      意思: to go back\n      来源: waller\n      同义词: 還る, 歸る\n    ',
  },
  {
    question: '貴方',
    answer: 'anata',
    explantion: '\n      汉字: 貴方\n      读音: あなた\n      意思: you\n      来源: waller\n      同义词: , 貴女, 貴男\n    ',
  },
  {
    question: '起きる',
    answer: 'okiru',
    explantion: '\n      汉字: 起きる\n      读音: おきる\n      意思: to get up\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '喫茶店',
    answer: 'kissaten',
    explantion: '\n      汉字: 喫茶店\n      读音: きっさてん\n      意思: coffee lounge\n      来源: waller\n      同义词: 喫茶店\n    ',
  },
  {
    question: '休み',
    answer: 'yasumi',
    explantion: '\n      汉字: 休み\n      读音: やすみ\n      意思: rest\n      来源: holiday\n      同义词: 休み\n    ',
  },
  {
    question: '休む',
    answer: 'yasumu',
    explantion: '\n      汉字: 休む\n      读音: やすむ\n      意思: to rest\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '吸う',
    answer: 'suu',
    explantion: '\n      汉字: 吸う\n      读音: すう\n      意思: to smoke\n      来源:  to suck\n      同义词: 吸う, 喫う\n    ',
  },
  {
    question: '牛肉',
    answer: 'gyūniku',
    explantion: '\n      汉字: 牛肉\n      读音: ぎゅうにく\n      意思: Beef\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '牛乳',
    answer: 'gyūnyū',
    explantion: '\n      汉字: 牛乳\n      读音: ぎゅうにゅう\n      意思: Milk\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '去年',
    answer: 'kyonen',
    explantion: '\n      汉字: 去年\n      读音: きょねん\n      意思: last year\n      来源: waller\n      同义词: 去年\n    ',
  },
  {
    question: '強い',
    answer: 'tsuyoi',
    explantion: '\n      汉字: 強い\n      读音: つよい\n      意思: powerful\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '教える',
    answer: 'oshieru',
    explantion: '\n      汉字: 教える\n      读音: おしえる\n      意思: to teach\n      来源:  to tell\n      同义词: 教える, 訓える\n    ',
  },
  {
    question: '教室',
    answer: 'kyōshitsu',
    explantion: '\n      汉字: 教室\n      读音: きょうしつ\n      意思: Classroom\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '橋',
    answer: 'hashi',
    explantion: '\n      汉字: 橋\n      读音: はし\n      意思: bridge\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '狭い',
    answer: 'semai',
    explantion: '\n      汉字: 狭い\n      读音: せまい\n      意思: Narrow\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '曲る',
    answer: 'magaru',
    explantion: '\n      汉字: 曲る\n      读音: まがる\n      意思: to turn\n      来源: to bend\n      同义词: 曲る, 曲がる\n    ',
  },
  {
    question: '勤める',
    answer: 'tsutomeru',
    explantion: '\n      汉字: 勤める\n      读音: つとめる\n      意思: to work for someone\n      来源: waller\n      同义词: 務める\n    ',
  },
  {
    question: '近い',
    answer: 'chikai',
    explantion: '\n      汉字: 近い\n      读音: ちかい\n      意思: near\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '近く',
    answer: 'chikaku',
    explantion: '\n      汉字: 近く\n      读音: ちかく\n      意思: near\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '金曜日',
    answer: 'kin\'yōbi',
    explantion: '\n      汉字: 金曜日\n      读音: きんようび\n      意思: Friday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '銀行',
    answer: 'ginkō',
    explantion: '\n      汉字: 銀行\n      读音: ぎんこう\n      意思: Bank\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '九つ',
    answer: 'kokonotsu',
    explantion: '\n      汉字: 九つ\n      读音: ここのつ\n      意思: Nine\n      来源: waller\n      同义词: ９つ\n    ',
  },
  {
    question: '九日',
    answer: 'kyūnichi',
    explantion: '\n      汉字: 九日\n      读音: ここのか\n      意思: nine days\n      来源:  ninth day\n      同义词: 九日, 九日, ９日, ９日\n    ',
  },
  {
    question: '空',
    answer: 'sora',
    explantion: '\n      汉字: 空\n      读音: そら\n      意思: Sky\n      来源: waller\n      同义词: 虚\n    ',
  },
  {
    question: '靴',
    answer: 'kutsu',
    explantion: '\n      汉字: 靴\n      读音: くつ\n      意思: Shoes\n      来源: waller\n      同义词: 沓, 履, 鞋\n    ',
  },
  {
    question: '靴下',
    answer: 'kutsushita',
    explantion: '\n      汉字: 靴下\n      读音: くつした\n      意思: Socks\n      来源: waller\n      同义词: くつ下, 沓下\n    ',
  },
  {
    question: '兄',
    answer: 'ani',
    explantion: '\n      汉字: 兄\n      读音: あに\n      意思: (humble) older brother\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '兄弟',
    answer: 'kyōdai',
    explantion: '\n      汉字: 兄弟\n      读音: きょうだい\n      意思: (humble) siblings\n      来源: waller\n      同义词: 兄弟\n    ',
  },
  {
    question: '警官',
    answer: 'keikan',
    explantion: '\n      汉字: 警官\n      读音: けいかん\n      意思: policeman\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '軽い',
    answer: 'karui',
    explantion: '\n      汉字: 軽い\n      读音: かるい\n      意思: Light\n      来源: waller\n      同义词: 軽い\n    ',
  },
  {
    question: 'とり肉',
    answer: 'toriniku',
    explantion: '\n      汉字: とり肉\n      读音: とりにく\n      意思: chicken meat\n      来源: waller\n      同义词: 鶏肉, 鶏肉, 鳥肉, 鳥肉\n    ',
  },
  {
    question: '結構',
    answer: 'kekkō',
    explantion: '\n      汉字: 結構\n      读音: けっこう\n      意思: splendid\n      来源:  enough\n      同义词: 結構\n    ',
  },
  {
    question: '結婚',
    answer: 'kekkon',
    explantion: '\n      汉字: 結婚\n      读音: けっこん\n      意思: Marriage\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '月曜日',
    answer: 'getsuyōbi',
    explantion: '\n      汉字: 月曜日\n      读音: げつようび\n      意思: Monday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '嫌い',
    answer: 'kirai',
    explantion: '\n      汉字: 嫌い\n      读音: きらい\n      意思: Hate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '建物',
    answer: 'tatemono',
    explantion: '\n      汉字: 建物\n      读音: たてもの\n      意思: building\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '犬',
    answer: 'inu',
    explantion: '\n      汉字: 犬\n      读音: いぬ\n      意思: dog\n      来源: waller\n      同义词: , 狗, \n    ',
  },
  {
    question: '見せる',
    answer: 'miseru',
    explantion: '\n      汉字: 見せる\n      读音: みせる\n      意思: to show\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '見る',
    answer: 'miru',
    explantion: '\n      汉字: 見る\n      读音: みる\n      意思: to see\n      来源:  to watch\n      同义词: 見る, , 視る, 観る\n    ',
  },
  {
    question: '鍵',
    answer: 'kagi',
    explantion: '\n      汉字: 鍵\n      读音: かぎ\n      意思: Key\n      来源: waller\n      同义词: 鑰, \n    ',
  },
  {
    question: '元気',
    answer: 'genki',
    explantion: '\n      汉字: 元気\n      读音: げんき\n      意思: health\n      来源:  vitality\n      同义词: 元気\n    ',
  },
  {
    question: '玄関',
    answer: 'genkan',
    explantion: '\n      汉字: 玄関\n      读音: げんかん\n      意思: entry hall\n      来源: waller\n      同义词: 玄關\n    ',
  },
  {
    question: '言葉',
    answer: 'kotoba',
    explantion: '\n      汉字: 言葉\n      读音: ことば\n      意思: word\n      来源:  language\n      同义词: 言葉, 言葉, 詞, 辞\n    ',
  },
  {
    question: '古い',
    answer: 'furui',
    explantion: '\n      汉字: 古い\n      读音: ふるい\n      意思: old (not used for people)\n      来源: waller\n      同义词: 故い, 旧い\n    ',
  },
  {
    question: '呼ぶ',
    answer: 'yobu',
    explantion: '\n      汉字: 呼ぶ\n      读音: よぶ\n      意思: to call out\n      来源: to invite\n      同义词: 呼ぶ, 喚ぶ, 招ぶ\n    ',
  },
  {
    question: '戸',
    answer: 'to',
    explantion: '\n      汉字: 戸\n      读音: と\n      意思: Japanese style door\n      来源: waller\n      同义词: 門\n    ',
  },
  {
    question: '五',
    answer: 'go',
    explantion: '\n      汉字: 五\n      读音: ご\n      意思: Five\n      来源: waller\n      同义词: 五, 五, ５, ５, ５, 伍, 伍, 伍\n    ',
  },
  {
    question: '五つ',
    answer: 'itsutsu',
    explantion: '\n      汉字: 五つ\n      读音: いつつ\n      意思: five\n      来源: waller\n      同义词: ５つ, 伍つ\n    ',
  },
  {
    question: '五日',
    answer: 'gonichi',
    explantion: '\n      汉字: 五日\n      读音: いつか\n      意思: five days\n      来源:  fifth day\n      同义词: 五日, ５日\n    ',
  },
  {
    question: '午後',
    answer: 'gogo',
    explantion: '\n      汉字: 午後\n      读音: ごご\n      意思: afternoon\n      来源: waller\n      同义词: 午后\n    ',
  },
  {
    question: '午前',
    answer: 'gozen',
    explantion: '\n      汉字: 午前\n      读音: ごぜん\n      意思: morning\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '後',
    answer: 'nochi',
    explantion: '\n      汉字: 後\n      读音: あと\n      意思: afterwards\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '後ろ',
    answer: 'ushiro',
    explantion: '\n      汉字: 後ろ\n      读音: うしろ\n      意思: behind\n      来源: waller\n      同义词: 後\n    ',
  },
  {
    question: '御飯',
    answer: 'gohan',
    explantion: '\n      汉字: 御飯\n      读音: ごはん\n      意思: cooked rice\n      来源:  meal\n      同义词: 御飯, ご飯\n    ',
  },
  {
    question: '交番',
    answer: 'kōban',
    explantion: '\n      汉字: 交番\n      读音: こうばん\n      意思: police box\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '公園',
    answer: 'kōen',
    explantion: '\n      汉字: 公園\n      读音: こうえん\n      意思: Park\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '厚い',
    answer: 'atsui',
    explantion: '\n      汉字: 厚い\n      读音: あつい\n      意思: kind\n      来源:  deep\n      同义词: 厚い, 篤い\n    ',
  },
  {
    question: '口',
    answer: 'kuchi',
    explantion: '\n      汉字: 口\n      读音: くち\n      意思: mouth\n      来源:  opening\n      同义词: 口\n    ',
  },
  {
    question: '向こう',
    answer: 'mukō',
    explantion: '\n      汉字: 向こう\n      读音: むこう\n      意思: over there\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '好き',
    answer: 'suki',
    explantion: '\n      汉字: 好き\n      读音: すき\n      意思: Likeable\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '広い',
    answer: 'hiroi',
    explantion: '\n      汉字: 広い\n      读音: ひろい\n      意思: spacious\n      来源: wide\n      同义词: 広い, 弘い, 廣い, 宏い\n    ',
  },
  {
    question: '紅茶',
    answer: 'kōcha',
    explantion: '\n      汉字: 紅茶\n      读音: こうちゃ\n      意思: black tea\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '降る',
    answer: 'furu',
    explantion: '\n      汉字: 降る\n      读音: ふる\n      意思: to fall\n      来源:  e.g. rain or snow\n      同义词: 降る\n    ',
  },
  {
    question: '高い',
    answer: 'takai',
    explantion: '\n      汉字: 高い\n      读音: たかい\n      意思: tall\n      来源:  expensive\n      同义词: 高い, 高価い\n    ',
  },
  {
    question: '黒',
    answer: 'kuro',
    explantion: '\n      汉字: 黒\n      读音: くろ\n      意思: Black\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '黒い',
    answer: 'kuroi',
    explantion: '\n      汉字: 黒い\n      读音: くろい\n      意思: black\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '此処',
    answer: 'koko',
    explantion: '\n      汉字: 此処\n      读音: ここ\n      意思: Here\n      来源: waller\n      同义词: , 此所, 是, 茲, 爰\n    ',
  },
  {
    question: '今',
    answer: 'ima',
    explantion: '\n      汉字: 今\n      读音: いま\n      意思: now\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '今月',
    answer: 'kongetsu',
    explantion: '\n      汉字: 今月\n      读音: こんげつ\n      意思: this month\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '今週',
    answer: 'konshū',
    explantion: '\n      汉字: 今週\n      读音: こんしゅう\n      意思: this week\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '今晩',
    answer: 'komban',
    explantion: '\n      汉字: 今晩\n      读音: こんばん\n      意思: this evening\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '困る',
    answer: 'komaru',
    explantion: '\n      汉字: 困る\n      读音: こまる\n      意思: to be worried\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '左',
    answer: 'hidari',
    explantion: '\n      汉字: 左\n      读音: ひだり\n      意思: left hand side\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '差す',
    answer: 'sasu',
    explantion: '\n      汉字: 差す\n      读音: さす\n      意思: to stretch out hands\n      来源:  to raise an umbrella\n      同义词: 差す\n    ',
  },
  {
    question: '砂糖',
    answer: 'satō',
    explantion: '\n      汉字: 砂糖\n      读音: さとう\n      意思: Sugar\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '座る',
    answer: 'suwaru',
    explantion: '\n      汉字: 座る\n      读音: すわる\n      意思: to sit\n      来源: waller\n      同义词: 坐る, 据わる, 据る\n    ',
  },
  {
    question: 'さ来年',
    answer: 'sarainen',
    explantion: '\n      汉字: さ来年\n      读音: さらいねん\n      意思: year after next\n      来源: waller\n      同义词: 再来年\n    ',
  },
  {
    question: '細い',
    answer: 'hosoi',
    explantion: '\n      汉字: 細い\n      读音: ほそい\n      意思: thin\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '有る',
    answer: 'aru',
    explantion: '\n      汉字: 有る\n      读音: ある\n      意思: to be\n      来源: to have (used for inanimate objects)\n      同义词: 有る, , 在る\n    ',
  },
  {
    question: '財布',
    answer: 'saifu',
    explantion: '\n      汉字: 財布\n      读音: さいふ\n      意思: Wallet\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '咲く',
    answer: 'saku',
    explantion: '\n      汉字: 咲く\n      读音: さく\n      意思: to bloom\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '作文',
    answer: 'sakubun',
    explantion: '\n      汉字: 作文\n      读音: さくぶん\n      意思: composition\n      来源:  writing\n      同义词: 作文\n    ',
  },
  {
    question: '撮る',
    answer: 'toru',
    explantion: '\n      汉字: 撮る\n      读音: とる\n      意思: to take a photo or record a film\n      来源: waller\n      同义词: 録る\n    ',
  },
  {
    question: '雑誌',
    answer: 'zasshi',
    explantion: '\n      汉字: 雑誌\n      读音: ざっし\n      意思: Magazine\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お皿',
    answer: 'osara',
    explantion: '\n      汉字: お皿\n      读音: おさら\n      意思: plate\n      来源:  dish\n      同义词: お皿\n    ',
  },
  {
    question: '三つ',
    answer: 'mittsu',
    explantion: '\n      汉字: 三つ\n      读音: みっつ\n      意思: three\n      来源: waller\n      同义词: 三つ, ３つ, ３つ\n    ',
  },
  {
    question: '三日',
    answer: 'sannichi',
    explantion: '\n      汉字: 三日\n      读音: みっか\n      意思: three days\n      来源:  third day of the month\n      同义词: 三日, ３日\n    ',
  },
  {
    question: '傘',
    answer: 'kasa',
    explantion: '\n      汉字: 傘\n      读音: かさ\n      意思: Umbrella\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '山',
    answer: 'yama',
    explantion: '\n      汉字: 山\n      读音: やま\n      意思: mountain\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '散歩',
    answer: 'sampo',
    explantion: '\n      汉字: 散歩\n      读音: さんぽ\n      意思: to stroll\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '仕事',
    answer: 'shigoto',
    explantion: '\n      汉字: 仕事\n      读音: しごと\n      意思: Job\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '使う',
    answer: 'tsukau',
    explantion: '\n      汉字: 使う\n      读音: つかう\n      意思: to use\n      来源: waller\n      同义词: 遣う\n    ',
  },
  {
    question: '四つ',
    answer: 'yottsu',
    explantion: '\n      汉字: 四つ\n      读音: よっつ\n      意思: four\n      来源: waller\n      同义词: 四つ, ４つ, ４つ\n    ',
  },
  {
    question: '四日',
    answer: 'yonnichi',
    explantion: '\n      汉字: 四日\n      读音: よっか\n      意思: four days\n      来源:  fouth day of the month\n      同义词: 四日, ４日\n    ',
  },
  {
    question: '始まる',
    answer: 'hajimaru',
    explantion: '\n      汉字: 始まる\n      读音: はじまる\n      意思: to begin\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '姉',
    answer: 'ane',
    explantion: '\n      汉字: 姉\n      读音: あね\n      意思: (humble) older sister\n      来源: waller\n      同义词: 姐\n    ',
  },
  {
    question: '子供',
    answer: 'kodomo',
    explantion: '\n      汉字: 子供\n      读音: こども\n      意思: Child\n      来源: waller\n      同义词: 子ども, 小供\n    ',
  },
  {
    question: '止まる',
    answer: 'tomaru',
    explantion: '\n      汉字: 止まる\n      读音: とまる\n      意思: to come to a halt\n      来源: waller\n      同义词: 留まる, 停まる, 駐まる, 止る, 留る\n    ',
  },
  {
    question: '死ぬ',
    answer: 'shinu',
    explantion: '\n      汉字: 死ぬ\n      读音: しぬ\n      意思: to die\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '私',
    answer: 'watashi',
    explantion: '\n      汉字: 私\n      读音: わたし\n      意思: I\n      来源: myself\n      同义词: 私\n    ',
  },
  {
    question: '紙',
    answer: 'kami',
    explantion: '\n      汉字: 紙\n      读音: かみ\n      意思: paper\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '歯',
    answer: 'ha',
    explantion: '\n      汉字: 歯\n      读音: は\n      意思: tooth\n      来源: waller\n      同义词: 齒\n    ',
  },
  {
    question: '字引',
    answer: 'jibiki',
    explantion: '\n      汉字: 字引\n      读音: じびき\n      意思: Dictionary\n      来源: waller\n      同义词: 字引き\n    ',
  },
  {
    question: '持つ',
    answer: 'motsu',
    explantion: '\n      汉字: 持つ\n      读音: もつ\n      意思: to hold\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '時間',
    answer: 'jikan',
    explantion: '\n      汉字: 時間\n      读音: じかん\n      意思: Time\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '時計',
    answer: 'tokei',
    explantion: '\n      汉字: 時計\n      读音: とけい\n      意思: watch\n      来源: clock\n      同义词: 時計, 時計, 土圭\n    ',
  },
  {
    question: '次',
    answer: 'tsugi',
    explantion: '\n      汉字: 次\n      读音: つぎ\n      意思: next\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '耳',
    answer: 'mimi',
    explantion: '\n      汉字: 耳\n      读音: みみ\n      意思: ear\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '自転車',
    answer: 'jitensha',
    explantion: '\n      汉字: 自転車\n      读音: じてんしゃ\n      意思: Bicycle\n      来源: waller\n      同义词: 自転車\n    ',
  },
  {
    question: '自動車',
    answer: 'jidōsha',
    explantion: '\n      汉字: 自動車\n      读音: じどうしゃ\n      意思: Automobile\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '自分',
    answer: 'jibun',
    explantion: '\n      汉字: 自分\n      读音: じぶん\n      意思: Oneself\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '辞書',
    answer: 'jisho',
    explantion: '\n      汉字: 辞書\n      读音: じしょ\n      意思: Dictionary\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '七',
    answer: 'nana',
    explantion: '\n      汉字: 七\n      读音: なな\n      意思: Seven\n      来源: waller\n      同义词: 七, 七, ７, ７, ７, ７, 漆, 漆, 漆, 漆, 柒, 柒, 柒, 柒\n    ',
  },
  {
    question: '七つ',
    answer: 'nanatsu',
    explantion: '\n      汉字: 七つ\n      读音: ななつ\n      意思: seven\n      来源: waller\n      同义词: ７つ\n    ',
  },
  {
    question: '質問',
    answer: 'shitsumon',
    explantion: '\n      汉字: 質問\n      读音: しつもん\n      意思: Question\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '写真',
    answer: 'shashin',
    explantion: '\n      汉字: 写真\n      读音: しゃしん\n      意思: photograph\n      来源: waller\n      同义词: 寫眞, 寫真\n    ',
  },
  {
    question: '車',
    answer: 'kuruma',
    explantion: '\n      汉字: 車\n      读音: くるま\n      意思: car\n      来源:  vehicle\n      同义词: 車\n    ',
  },
  {
    question: '借りる',
    answer: 'kariru',
    explantion: '\n      汉字: 借りる\n      读音: かりる\n      意思: to borrow\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '若い',
    answer: 'wakai',
    explantion: '\n      汉字: 若い\n      读音: わかい\n      意思: young\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '弱い',
    answer: 'yowai',
    explantion: '\n      汉字: 弱い\n      读音: よわい\n      意思: weak\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '取る',
    answer: 'toru',
    explantion: '\n      汉字: 取る\n      读音: とる\n      意思: to take something\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '手',
    answer: 'te',
    explantion: '\n      汉字: 手\n      读音: て\n      意思: hand\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '手紙',
    answer: 'tegami',
    explantion: '\n      汉字: 手紙\n      读音: てがみ\n      意思: letter\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お酒',
    answer: 'osake',
    explantion: '\n      汉字: お酒\n      读音: おさけ\n      意思: alcohol\n      来源:  rice wine\n      同义词: お酒, 御酒, 御酒\n    ',
  },
  {
    question: '授業',
    answer: 'jugyō',
    explantion: '\n      汉字: 授業\n      读音: じゅぎょう\n      意思: lesson\n      来源:  class work\n      同义词: 授業\n    ',
  },
  {
    question: '秋',
    answer: 'aki',
    explantion: '\n      汉字: 秋\n      读音: あき\n      意思: autumn\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '習う',
    answer: 'narau',
    explantion: '\n      汉字: 習う\n      读音: ならう\n      意思: to learn\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '住む',
    answer: 'sumu',
    explantion: '\n      汉字: 住む\n      读音: すむ\n      意思: to live in\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '十日',
    answer: 'jūnichi',
    explantion: '\n      汉字: 十日\n      读音: とおか\n      意思: ten days\n      来源: the tenth day\n      同义词: 十日, １０日\n    ',
  },
  {
    question: '縦',
    answer: 'tate',
    explantion: '\n      汉字: 縦\n      读音: たて\n      意思: length\n      来源: height\n      同义词: 縦, 竪, 経, \n    ',
  },
  {
    question: '重い',
    answer: 'omoi',
    explantion: '\n      汉字: 重い\n      读音: おもい\n      意思: Heavy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '宿題',
    answer: 'shukudai',
    explantion: '\n      汉字: 宿題\n      读音: しゅくだい\n      意思: homework\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '出す',
    answer: 'dasu',
    explantion: '\n      汉字: 出す\n      读音: だす\n      意思: to put out\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '出る',
    answer: 'deru',
    explantion: '\n      汉字: 出る\n      读音: でる\n      意思: to appear\n      来源: to leave\n      同义词: 出る\n    ',
  },
  {
    question: '出口',
    answer: 'ideguchi',
    explantion: '\n      汉字: 出口\n      读音: でぐち\n      意思: exit\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '出来る',
    answer: 'dekiru',
    explantion: '\n      汉字: 出来る\n      读音: できる\n      意思: to be able to\n      来源: waller\n      同义词: , 出きる, 出來る\n    ',
  },
  {
    question: '春',
    answer: 'haru',
    explantion: '\n      汉字: 春\n      读音: はる\n      意思: spring\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '始め',
    answer: 'hajime',
    explantion: '\n      汉字: 始め\n      读音: はじめ\n      意思: beginning\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '初めて',
    answer: 'hajimete',
    explantion: '\n      汉字: 初めて\n      读音: はじめて\n      意思: for the first time\n      来源: waller\n      同义词: 始めて, 甫めて\n    ',
  },
  {
    question: '所',
    answer: 'tokoro',
    explantion: '\n      汉字: 所\n      读音: ところ\n      意思: place\n      来源: waller\n      同义词: , 所, , 処, 處\n    ',
  },
  {
    question: '暑い',
    answer: 'atsui',
    explantion: '\n      汉字: 暑い\n      读音: あつい\n      意思: hot\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '書く',
    answer: 'kaku',
    explantion: '\n      汉字: 書く\n      读音: かく\n      意思: to write\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '女',
    answer: 'onna',
    explantion: '\n      汉字: 女\n      读音: おんな\n      意思: Woman\n      来源: waller\n      同义词: 女, 女, 女, 女\n    ',
  },
  {
    question: '女の子',
    answer: 'onnanoko',
    explantion: '\n      汉字: 女の子\n      读音: おんなのこ\n      意思: Girl\n      来源: waller\n      同义词: 女のコ, 女の児\n    ',
  },
  {
    question: '小さい',
    answer: 'chīsai',
    explantion: '\n      汉字: 小さい\n      读音: ちいさい\n      意思: little\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '少し',
    answer: 'sukoshi',
    explantion: '\n      汉字: 少し\n      读音: すこし\n      意思: Few\n      来源: waller\n      同义词: 寡し, 些し\n    ',
  },
  {
    question: '少ない',
    answer: 'sukunai',
    explantion: '\n      汉字: 少ない\n      读音: すくない\n      意思: a few\n      来源: waller\n      同义词: 少い, 尠い, 寡い\n    ',
  },
  {
    question: '消える',
    answer: 'kieru',
    explantion: '\n      汉字: 消える\n      读音: きえる\n      意思: to disappear\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '消す',
    answer: 'kesu',
    explantion: '\n      汉字: 消す\n      读音: けす\n      意思: to erase\n      来源:  to turn off power\n      同义词: 消す\n    ',
  },
  {
    question: '上',
    answer: 'ue',
    explantion: '\n      汉字: 上\n      读音: うえ\n      意思: on top of\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '上げる',
    answer: 'ageru',
    explantion: '\n      汉字: 上げる\n      读音: あげる\n      意思: to give\n      来源: waller\n      同义词: , 挙げる, 揚げる\n    ',
  },
  {
    question: '登る',
    answer: 'noboru',
    explantion: '\n      汉字: 登る\n      读音: のぼる\n      意思: to climb\n      来源: waller\n      同义词: 上る, 昇る, 陞る\n    ',
  },
  {
    question: '上手',
    answer: 'jōzu',
    explantion: '\n      汉字: 上手\n      读音: じょうず\n      意思: Skillful\n      来源: waller\n      同义词: 上手, 上手\n    ',
  },
  {
    question: '乗る',
    answer: 'noru',
    explantion: '\n      汉字: 乗る\n      读音: のる\n      意思: to get on\n      来源: to ride\n      同义词: 乗る, 乘る\n    ',
  },
  {
    question: '色',
    answer: 'iro',
    explantion: '\n      汉字: 色\n      读音: いろ\n      意思: colour\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '食べる',
    answer: 'taberu',
    explantion: '\n      汉字: 食べる\n      读音: たべる\n      意思: to eat\n      来源: waller\n      同义词: 喰べる\n    ',
  },
  {
    question: '食べ物',
    answer: 'tabemono',
    explantion: '\n      汉字: 食べ物\n      读音: たべもの\n      意思: food\n      来源: waller\n      同义词: 食べもの\n    ',
  },
  {
    question: '食堂',
    answer: 'shokudō',
    explantion: '\n      汉字: 食堂\n      读音: しょくどう\n      意思: dining hall\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '寝る',
    answer: 'neru',
    explantion: '\n      汉字: 寝る\n      读音: ねる\n      意思: to go to bed\n      来源: to sleep\n      同义词: 寝る, 寐る\n    ',
  },
  {
    question: '新しい',
    answer: 'atarashii',
    explantion: '\n      汉字: 新しい\n      读音: あたらしい\n      意思: new\n      来源: waller\n      同义词: 新らしい\n    ',
  },
  {
    question: '新聞',
    answer: 'shimbun',
    explantion: '\n      汉字: 新聞\n      读音: しんぶん\n      意思: newspaper\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '辛い',
    answer: 'tsurai',
    explantion: '\n      汉字: 辛い\n      读音: からい\n      意思: Spicy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '図書館',
    answer: 'toshokan',
    explantion: '\n      汉字: 図書館\n      读音: としょかん\n      意思: library\n      来源: waller\n      同义词: 図書館\n    ',
  },
  {
    question: '吹く',
    answer: 'fuku',
    explantion: '\n      汉字: 吹く\n      读音: ふく\n      意思: to blow\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '水',
    answer: 'mizu',
    explantion: '\n      汉字: 水\n      读音: みず\n      意思: water\n      来源: waller\n      同义词: 水\n    ',
  },
  {
    question: '水曜日',
    answer: 'suiyōbi',
    explantion: '\n      汉字: 水曜日\n      读音: すいようび\n      意思: Wednesday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '晴れ',
    answer: 'hare',
    explantion: '\n      汉字: 晴れ\n      读音: はれ\n      意思: clear weather\n      来源: waller\n      同义词: 晴, 霽れ\n    ',
  },
  {
    question: '晴れる',
    answer: 'hareru',
    explantion: '\n      汉字: 晴れる\n      读音: はれる\n      意思: to be sunny\n      来源: waller\n      同义词: 霽れる\n    ',
  },
  {
    question: '生まれる',
    answer: 'umareru',
    explantion: '\n      汉字: 生まれる\n      读音: うまれる\n      意思: to be born\n      来源: waller\n      同义词: 産まれる, 生れる, 産れる\n    ',
  },
  {
    question: '生徒',
    answer: 'seito',
    explantion: '\n      汉字: 生徒\n      读音: せいと\n      意思: Pupil\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '声',
    answer: 'koe',
    explantion: '\n      汉字: 声\n      读音: こえ\n      意思: Voice\n      来源: waller\n      同义词: 聲\n    ',
  },
  {
    question: '西',
    answer: 'nishi',
    explantion: '\n      汉字: 西\n      读音: にし\n      意思: west\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '青',
    answer: 'ao',
    explantion: '\n      汉字: 青\n      读音: あお\n      意思: blue\n      来源: waller\n      同义词: 蒼, 碧\n    ',
  },
  {
    question: '青い',
    answer: 'aoi',
    explantion: '\n      汉字: 青い\n      读音: あおい\n      意思: blue\n      来源: waller\n      同义词: 蒼い, 碧い\n    ',
  },
  {
    question: '静か',
    answer: 'shizuka',
    explantion: '\n      汉字: 静か\n      读音: しずか\n      意思: Quiet\n      来源: waller\n      同义词: 閑か\n    ',
  },
  {
    question: '石鹸',
    answer: 'sekken',
    explantion: '\n      汉字: 石鹸\n      读音: せっけん\n      意思: Economy\n      来源: waller\n      同义词: 石けん, 石鹼\n    ',
  },
  {
    question: '赤い',
    answer: 'akai',
    explantion: '\n      汉字: 赤い\n      读音: あかい\n      意思: red\n      来源: waller\n      同义词: 紅い, 朱い, 緋い, 赭い, 丹い\n    ',
  },
  {
    question: '切る',
    answer: 'kiru',
    explantion: '\n      汉字: 切る\n      读音: きる\n      意思: to cut\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '切手',
    answer: 'kitte',
    explantion: '\n      汉字: 切手\n      读音: きって\n      意思: postage stamp\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '切符',
    answer: 'kippu',
    explantion: '\n      汉字: 切符\n      读音: きっぷ\n      意思: Ticket\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '雪',
    answer: 'yuki',
    explantion: '\n      汉字: 雪\n      读音: ゆき\n      意思: snow\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '先',
    answer: 'saki',
    explantion: '\n      汉字: 先\n      读音: さき\n      意思: the future\n      来源:  previous\n      同义词: 先, 前, 先き\n    ',
  },
  {
    question: '先月',
    answer: 'sengetsu',
    explantion: '\n      汉字: 先月\n      读音: せんげつ\n      意思: last month\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '先週',
    answer: 'senshū',
    explantion: '\n      汉字: 先週\n      读音: せんしゅう\n      意思: last week\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '先生',
    answer: 'sensei',
    explantion: '\n      汉字: 先生\n      读音: せんせい\n      意思: teacher\n      来源:  doctor\n      同义词: 先生\n    ',
  },
  {
    question: '千',
    answer: 'sen',
    explantion: '\n      汉字: 千\n      读音: せん\n      意思: Thousand\n      来源: waller\n      同义词: 千, 阡, 仟\n    ',
  },
  {
    question: '河',
    answer: 'kawa',
    explantion: '\n      汉字: 河\n      读音: かわ\n      意思: River\n      来源: waller\n      同义词: 川, 河\n    ',
  },
  {
    question: '洗う',
    answer: 'arau',
    explantion: '\n      汉字: 洗う\n      读音: あらう\n      意思: to wash\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '洗濯',
    answer: 'sentaku',
    explantion: '\n      汉字: 洗濯\n      读音: せんたく\n      意思: Washing\n      来源: waller\n      同义词: 洗濯, 洗たく\n    ',
  },
  {
    question: '前',
    answer: 'mae',
    explantion: '\n      汉字: 前\n      读音: まえ\n      意思: before\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '全部',
    answer: 'zembu',
    explantion: '\n      汉字: 全部\n      读音: ぜんぶ\n      意思: All\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '掃除',
    answer: 'sōji',
    explantion: '\n      汉字: 掃除\n      读音: そうじ\n      意思: to clean\n      来源:  to sweep\n      同义词: 掃除\n    ',
  },
  {
    question: '窓',
    answer: 'mado',
    explantion: '\n      汉字: 窓\n      读音: まど\n      意思: window\n      来源: waller\n      同义词: 窗, 牖\n    ',
  },
  {
    question: '走る',
    answer: 'hashiru',
    explantion: '\n      汉字: 走る\n      读音: はしる\n      意思: to run\n      来源: waller\n      同义词: 奔る, 趨る\n    ',
  },
  {
    question: '側',
    answer: 'gawa',
    explantion: '\n      汉字: 側\n      读音: そば\n      意思: near\n      来源:  beside\n      同义词: 側, , , 側, , 側, 傍, 傍, 端\n    ',
  },
  {
    question: '足',
    answer: 'ashi',
    explantion: '\n      汉字: 足\n      读音: あし\n      意思: foot\n      来源:  leg\n      同义词: 足, 脚, 肢\n    ',
  },
  {
    question: '速い',
    answer: 'hayai',
    explantion: '\n      汉字: 速い\n      读音: はやい\n      意思: quick\n      来源: waller\n      同义词: 疾い, 捷い\n    ',
  },
  {
    question: '村',
    answer: 'mura',
    explantion: '\n      汉字: 村\n      读音: むら\n      意思: village\n      来源: waller\n      同义词: 村\n    ',
  },
  {
    question: '多い',
    answer: 'ōi',
    explantion: '\n      汉字: 多い\n      读音: おおい\n      意思: many\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '多分',
    answer: 'tabun',
    explantion: '\n      汉字: 多分\n      读音: たぶん\n      意思: probably\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '太い',
    answer: 'futoi',
    explantion: '\n      汉字: 太い\n      读音: ふとい\n      意思: fat\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '体',
    answer: 'karada',
    explantion: '\n      汉字: 体\n      读音: からだ\n      意思: Body\n      来源: waller\n      同义词: 身体, 躰, 躯\n    ',
  },
  {
    question: '待つ',
    answer: 'matsu',
    explantion: '\n      汉字: 待つ\n      读音: まつ\n      意思: to wait\n      来源: waller\n      同义词: 俟つ\n    ',
  },
  {
    question: '貸す',
    answer: 'kasu',
    explantion: '\n      汉字: 貸す\n      读音: かす\n      意思: to lend\n      来源: waller\n      同义词: 藉す\n    ',
  },
  {
    question: '台所',
    answer: 'daidokoro',
    explantion: '\n      汉字: 台所\n      读音: だいどころ\n      意思: kitchen\n      来源: waller\n      同义词: 台所, 臺處, 臺處\n    ',
  },
  {
    question: '大きな',
    answer: 'ōkina',
    explantion: '\n      汉字: 大きな\n      读音: おおきな\n      意思: big\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大学',
    answer: 'daigaku',
    explantion: '\n      汉字: 大学\n      读音: だいがく\n      意思: university\n      来源: waller\n      同义词: 大學\n    ',
  },
  {
    question: '大好き',
    answer: 'daisuki',
    explantion: '\n      汉字: 大好き\n      读音: だいすき\n      意思: to be very likeable\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大使館',
    answer: 'taishikan',
    explantion: '\n      汉字: 大使館\n      读音: たいしかん\n      意思: embassy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大丈夫',
    answer: 'daijōbu',
    explantion: '\n      汉字: 大丈夫\n      读音: だいじょうぶ\n      意思: all right\n      来源: waller\n      同义词: 大丈夫\n    ',
  },
  {
    question: '大人',
    answer: 'otona',
    explantion: '\n      汉字: 大人\n      读音: おとな\n      意思: Adult\n      来源: waller\n      同义词: 大人\n    ',
  },
  {
    question: '大勢',
    answer: 'taisei',
    explantion: '\n      汉字: 大勢\n      读音: おおぜい\n      意思: great number of people\n      来源: waller\n      同义词: 大勢, 大ぜい, 大ぜい\n    ',
  },
  {
    question: '大切',
    answer: 'taisetsu',
    explantion: '\n      汉字: 大切\n      读音: たいせつ\n      意思: important\n      来源: waller\n      同义词: 大切\n    ',
  },
  {
    question: '大変',
    answer: 'taihen',
    explantion: '\n      汉字: 大変\n      读音: たいへん\n      意思: difficult situation\n      来源: waller\n      同义词: 大へん\n    ',
  },
  {
    question: '脱ぐ',
    answer: 'nugu',
    explantion: '\n      汉字: 脱ぐ\n      读音: ぬぐ\n      意思: to take off clothes\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '誰',
    answer: 'dare',
    explantion: '\n      汉字: 誰\n      读音: だれ\n      意思: who\n      来源: waller\n      同义词: 誰, 誰, 誰\n    ',
  },
  {
    question: '誰か',
    answer: 'dareka',
    explantion: '\n      汉字: 誰か\n      读音: だれか\n      意思: somebody\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '短い',
    answer: 'mijikai',
    explantion: '\n      汉字: 短い\n      读音: みじかい\n      意思: short\n      来源: waller\n      同义词: 短かい\n    ',
  },
  {
    question: '誕生日',
    answer: 'tanjōbi',
    explantion: '\n      汉字: 誕生日\n      读音: たんじょうび\n      意思: birthday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '弾く',
    answer: 'hiku',
    explantion: '\n      汉字: 弾く\n      读音: ひく\n      意思: to play an instrument with strings\n      来源:  including piano\n      同义词: 弾く\n    ',
  },
  {
    question: '男',
    answer: 'otoko',
    explantion: '\n      汉字: 男\n      读音: おとこ\n      意思: Man\n      来源: waller\n      同义词: 男\n    ',
  },
  {
    question: '男の子',
    answer: 'otokonoko',
    explantion: '\n      汉字: 男の子\n      读音: おとこのこ\n      意思: Boy\n      来源: waller\n      同义词: 男のコ, 男の児\n    ',
  },
  {
    question: '知る',
    answer: 'shiru',
    explantion: '\n      汉字: 知る\n      读音: しる\n      意思: to know\n      来源: waller\n      同义词: 識る\n    ',
  },
  {
    question: '地下鉄',
    answer: 'chikatetsu',
    explantion: '\n      汉字: 地下鉄\n      读音: ちかてつ\n      意思: underground train\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '地図',
    answer: 'chizu',
    explantion: '\n      汉字: 地図\n      读音: ちず\n      意思: map\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '池',
    answer: 'ike',
    explantion: '\n      汉字: 池\n      读音: いけ\n      意思: pond\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '置く',
    answer: 'oku',
    explantion: '\n      汉字: 置く\n      读音: おく\n      意思: to put\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '遅い',
    answer: 'osoi',
    explantion: '\n      汉字: 遅い\n      读音: おそい\n      意思: late\n      来源:  slow\n      同义词: 遅い, 鈍い, 晩い, 遲い\n    ',
  },
  {
    question: '茶色',
    answer: 'chairo',
    explantion: '\n      汉字: 茶色\n      读音: ちゃいろ\n      意思: brown\n      来源: waller\n      同义词: ちゃ色, 茶いろ\n    ',
  },
  {
    question: '着く',
    answer: 'tsuku',
    explantion: '\n      汉字: 着く\n      读音: つく\n      意思: to arrive at\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '着る',
    answer: 'kiru',
    explantion: '\n      汉字: 着る\n      读音: きる\n      意思: to put on from the shoulders down\n      来源: waller\n      同义词: 著る\n    ',
  },
  {
    question: '中',
    answer: 'naka',
    explantion: '\n      汉字: 中\n      读音: なか\n      意思: middle\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '昼',
    answer: 'hiru',
    explantion: '\n      汉字: 昼\n      读音: ひる\n      意思: noon\n      来源:  daytime\n      同义词: 昼, 午, 晝\n    ',
  },
  {
    question: '丁度',
    answer: 'chōdo',
    explantion: '\n      汉字: 丁度\n      读音: ちょうど\n      意思: exactly\n      来源: waller\n      同义词: , 恰度\n    ',
  },
  {
    question: '貼る',
    answer: 'haru',
    explantion: '\n      汉字: 貼る\n      读音: はる\n      意思: to stick\n      来源: waller\n      同义词: 張る\n    ',
  },
  {
    question: '朝',
    answer: 'asa',
    explantion: '\n      汉字: 朝\n      读音: あさ\n      意思: morning\n      来源: waller\n      同义词: 朝, 晨\n    ',
  },
  {
    question: '飛ぶ',
    answer: 'tobu',
    explantion: '\n      汉字: 飛ぶ\n      读音: とぶ\n      意思: to fly\n      来源: to hop\n      同义词: 飛ぶ, 跳ぶ, 翔ぶ\n    ',
  },
  {
    question: '長い',
    answer: 'nagai',
    explantion: '\n      汉字: 長い\n      读音: ながい\n      意思: long\n      来源: waller\n      同义词: 永い\n    ',
  },
  {
    question: '鳥',
    answer: 'tori',
    explantion: '\n      汉字: 鳥\n      读音: とり\n      意思: bird\n      来源: waller\n      同义词: 鶏, 禽, \n    ',
  },
  {
    question: '痛い',
    answer: 'itai',
    explantion: '\n      汉字: 痛い\n      读音: いたい\n      意思: painful\n      来源: waller\n      同义词: 甚い\n    ',
  },
  {
    question: '低い',
    answer: 'hikui',
    explantion: '\n      汉字: 低い\n      读音: ひくい\n      意思: short\n      来源: low\n      同义词: 低い\n    ',
  },
  {
    question: '庭',
    answer: 'niwa',
    explantion: '\n      汉字: 庭\n      读音: にわ\n      意思: garden\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '閉まる',
    answer: 'shimaru',
    explantion: '\n      汉字: 閉まる\n      读音: しまる\n      意思: to close\n      来源:  to be closed\n      同义词: 閉まる, 締まる, 緊まる\n    ',
  },
  {
    question: '締める',
    answer: 'shimeru',
    explantion: '\n      汉字: 締める\n      读音: しめる\n      意思: to tie\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '天気',
    answer: 'tenki',
    explantion: '\n      汉字: 天気\n      读音: てんき\n      意思: weather\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '電気',
    answer: 'denki',
    explantion: '\n      汉字: 電気\n      读音: でんき\n      意思: electricity\n      来源: electric light\n      同义词: 電気\n    ',
  },
  {
    question: '電車',
    answer: 'densha',
    explantion: '\n      汉字: 電車\n      读音: でんしゃ\n      意思: electric train\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '電話',
    answer: 'denwa',
    explantion: '\n      汉字: 電話\n      读音: でんわ\n      意思: telephone\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '渡す',
    answer: 'watasu',
    explantion: '\n      汉字: 渡す\n      读音: わたす\n      意思: to hand over\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '渡る',
    answer: 'wataru',
    explantion: '\n      汉字: 渡る\n      读音: わたる\n      意思: to go across\n      来源: waller\n      同义词: 亘る, 渉る, 亙る, 弥る\n    ',
  },
  {
    question: '土曜日',
    answer: 'doyōbi',
    explantion: '\n      汉字: 土曜日\n      读音: どようび\n      意思: Saturday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '冬',
    answer: 'fuyu',
    explantion: '\n      汉字: 冬\n      读音: ふゆ\n      意思: winter\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '東',
    answer: 'higashi',
    explantion: '\n      汉字: 東\n      读音: ひがし\n      意思: east\n      来源: waller\n      同义词: 東, 東\n    ',
  },
  {
    question: '答える',
    answer: 'kotaeru',
    explantion: '\n      汉字: 答える\n      读音: こたえる\n      意思: to answer\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '働く',
    answer: 'hataraku',
    explantion: '\n      汉字: 働く\n      读音: はたらく\n      意思: to work\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '動物',
    answer: 'dōbutsu',
    explantion: '\n      汉字: 動物\n      读音: どうぶつ\n      意思: animal\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '同じ',
    answer: 'onaji',
    explantion: '\n      汉字: 同じ\n      读音: おなじ\n      意思: same\n      来源: waller\n      同义词: 同じ\n    ',
  },
  {
    question: '道',
    answer: 'michi',
    explantion: '\n      汉字: 道\n      读音: みち\n      意思: street\n      来源: waller\n      同义词: 途, 路, 径\n    ',
  },
  {
    question: '読む',
    answer: 'yomu',
    explantion: '\n      汉字: 読む\n      读音: よむ\n      意思: to read\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '豚肉',
    answer: 'butaniku',
    explantion: '\n      汉字: 豚肉\n      读音: ぶたにく\n      意思: pork\n      来源: waller\n      同义词: 豚肉, ぶた肉\n    ',
  },
  {
    question: '曇る',
    answer: 'kumoru',
    explantion: '\n      汉字: 曇る\n      读音: くもる\n      意思: to become cloudy\n      来源:  to become dim\n      同义词: 曇る\n    ',
  },
  {
    question: '南',
    answer: 'minami',
    explantion: '\n      汉字: 南\n      读音: みなみ\n      意思: south\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '難しい',
    answer: 'muzukashii',
    explantion: '\n      汉字: 難しい\n      读音: むずかしい\n      意思: difficult\n      来源: waller\n      同义词: 難しい, 六借しい, 六借しい, 六ヶ敷い, 六ヶ敷い\n    ',
  },
  {
    question: '二',
    answer: 'ni',
    explantion: '\n      汉字: 二\n      读音: に\n      意思: two\n      来源: waller\n      同义词: 二, 二, 二, ２, ２, ２, ２, 弐, 弐, 弐, 弐, 弍, 弍, 弍, 弍, 貳, 貳, 貳, 貳, 貮, 貮, 貮, 貮\n    ',
  },
  {
    question: '二つ',
    answer: 'futatsu',
    explantion: '\n      汉字: 二つ\n      读音: ふたつ\n      意思: two\n      来源: waller\n      同义词: ２つ\n    ',
  },
  {
    question: '二日',
    answer: 'ninichi',
    explantion: '\n      汉字: 二日\n      读音: ふつか\n      意思: two days\n      来源:  second day of the month\n      同义词: 二日, ２日\n    ',
  },
  {
    question: '賑やか',
    answer: 'nigiyaka',
    explantion: '\n      汉字: 賑やか\n      读音: にぎやか\n      意思: bustling\n      来源: busy\n      同义词: 賑やか\n    ',
  },
  {
    question: '肉',
    answer: 'niku',
    explantion: '\n      汉字: 肉\n      读音: にく\n      意思: meat\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '日曜日',
    answer: 'nichiyōbi',
    explantion: '\n      汉字: 日曜日\n      读音: にちようび\n      意思: Sunday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '入る',
    answer: 'hairu',
    explantion: '\n      汉字: 入る\n      读音: はいる\n      意思: to enter\n      来源: to contain\n      同义词: 入る, 這入る\n    ',
  },
  {
    question: '入れる',
    answer: 'ireru',
    explantion: '\n      汉字: 入れる\n      读音: いれる\n      意思: to put in\n      来源: waller\n      同义词: 容れる, 函れる\n    ',
  },
  {
    question: '猫',
    answer: 'neko',
    explantion: '\n      汉字: 猫\n      读音: ねこ\n      意思: cat\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '熱い',
    answer: 'atsui',
    explantion: '\n      汉字: 熱い\n      读音: あつい\n      意思: hot to the touch\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '年',
    answer: 'toshi',
    explantion: '\n      汉字: 年\n      读音: とし\n      意思: year\n      来源: waller\n      同义词: 歳\n    ',
  },
  {
    question: '背広',
    answer: 'sebiro',
    explantion: '\n      汉字: 背広\n      读音: せびろ\n      意思: business suit\n      来源: waller\n      同义词: 脊広, \n    ',
  },
  {
    question: '買う',
    answer: 'kau',
    explantion: '\n      汉字: 買う\n      读音: かう\n      意思: to buy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '売る',
    answer: 'uru',
    explantion: '\n      汉字: 売る\n      读音: うる\n      意思: to sell\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '白',
    answer: 'shiro',
    explantion: '\n      汉字: 白\n      读音: しろ\n      意思: White\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '白い',
    answer: 'shiroi',
    explantion: '\n      汉字: 白い\n      读音: しろい\n      意思: White\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '薄い',
    answer: 'usui',
    explantion: '\n      汉字: 薄い\n      读音: うすい\n      意思: thin\n      来源: weak\n      同义词: 薄い\n    ',
  },
  {
    question: '箸',
    answer: 'hashi',
    explantion: '\n      汉字: 箸\n      读音: はし\n      意思: chopsticks\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '八日',
    answer: 'hachinichi',
    explantion: '\n      汉字: 八日\n      读音: ようか\n      意思: eight days\n      来源:  eighth day of the month\n      同义词: 八日, ８日\n    ',
  },
  {
    question: '八百屋',
    answer: 'yaoya',
    explantion: '\n      汉字: 八百屋\n      读音: やおや\n      意思: greengrocer\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '半',
    answer: 'han',
    explantion: '\n      汉字: 半\n      读音: はん\n      意思: half\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '半分',
    answer: 'hambun',
    explantion: '\n      汉字: 半分\n      读音: はんぶん\n      意思: half minute\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '煩い',
    answer: 'urusai',
    explantion: '\n      汉字: 煩い\n      读音: うるさい\n      意思: noisy\n      来源:  annoying\n      同义词: 煩い, , 五月蝿い, 五月蠅い, 煩さい, , \n    ',
  },
  {
    question: '晩',
    answer: 'ban',
    explantion: '\n      汉字: 晩\n      读音: ばん\n      意思: evening\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '番号',
    answer: 'bangō',
    explantion: '\n      汉字: 番号\n      读音: ばんごう\n      意思: number\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '疲れる',
    answer: 'tsukareru',
    explantion: '\n      汉字: 疲れる\n      读音: つかれる\n      意思: to get tired\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '飛行機',
    answer: 'hikōki',
    explantion: '\n      汉字: 飛行機\n      读音: ひこうき\n      意思: aeroplane\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '鼻',
    answer: 'hana',
    explantion: '\n      汉字: 鼻\n      读音: はな\n      意思: nose\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '百',
    answer: 'hyaku',
    explantion: '\n      汉字: 百\n      读音: ひゃく\n      意思: hundred\n      来源: waller\n      同义词: １００, 百, 陌, 陌, 佰, 佰, 一〇〇\n    ',
  },
  {
    question: '病院',
    answer: 'byōin',
    explantion: '\n      汉字: 病院\n      读音: びょういん\n      意思: hospital\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '病気',
    answer: 'byōki',
    explantion: '\n      汉字: 病気\n      读音: びょうき\n      意思: illness\n      来源: waller\n      同义词: 病氣\n    ',
  },
  {
    question: '不味い',
    answer: 'mazui',
    explantion: '\n      汉字: 不味い\n      读音: まずい\n      意思: unpleasant\n      来源: waller\n      同义词: , , \n    ',
  },
  {
    question: '付ける',
    answer: 'tsukeru',
    explantion: '\n      汉字: 付ける\n      读音: つける\n      意思: to turn on\n      来源: waller\n      同义词: , 着ける, 附ける\n    ',
  },
  {
    question: '部屋',
    answer: 'heya',
    explantion: '\n      汉字: 部屋\n      读音: へや\n      意思: room\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '封筒',
    answer: 'fūtō',
    explantion: '\n      汉字: 封筒\n      读音: ふうとう\n      意思: envelope\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '風',
    answer: 'kaze',
    explantion: '\n      汉字: 風\n      读音: かぜ\n      意思: Wind\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '風呂',
    answer: 'furo',
    explantion: '\n      汉字: 風呂\n      读音: ふろ\n      意思: bath\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '服',
    answer: 'fuku',
    explantion: '\n      汉字: 服\n      读音: ふく\n      意思: clothes\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '物',
    answer: 'mono',
    explantion: '\n      汉字: 物\n      读音: もの\n      意思: thing\n      来源: waller\n      同义词: , 物, \n    ',
  },
  {
    question: '文章',
    answer: 'bunshō',
    explantion: '\n      汉字: 文章\n      读音: ぶんしょう\n      意思: sentence\n      来源: text\n      同义词: 文章, 文章, 文章\n    ',
  },
  {
    question: '然し',
    answer: 'shikashi',
    explantion: '\n      汉字: 然し\n      读音: しかし\n      意思: However\n      来源: waller\n      同义词: , 併し\n    ',
  },
  {
    question: '並ぶ',
    answer: 'narabu',
    explantion: '\n      汉字: 並ぶ\n      读音: ならぶ\n      意思: to line up\n      来源: to stand in a line\n      同义词: 並ぶ, 列ぶ, 双ぶ\n    ',
  },
  {
    question: '並べる',
    answer: 'naraberu',
    explantion: '\n      汉字: 並べる\n      读音: ならべる\n      意思: to line up\n      来源: to set up\n      同义词: 並べる, 双べる\n    ',
  },
  {
    question: '閉める',
    answer: 'shimeru',
    explantion: '\n      汉字: 閉める\n      读音: しめる\n      意思: to close something\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '辺',
    answer: 'atari',
    explantion: '\n      汉字: 辺\n      读音: へん\n      意思: area\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '返す',
    answer: 'kaesu',
    explantion: '\n      汉字: 返す\n      读音: かえす\n      意思: to return something\n      来源: waller\n      同义词: 反す\n    ',
  },
  {
    question: '便利',
    answer: 'benri',
    explantion: '\n      汉字: 便利\n      读音: べんり\n      意思: useful\n      来源:  convenient\n      同义词: 便利\n    ',
  },
  {
    question: '勉強',
    answer: 'benkyō',
    explantion: '\n      汉字: 勉強\n      读音: べんきょう\n      意思: to study\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お弁当',
    answer: 'obentō',
    explantion: '\n      汉字: お弁当\n      读音: おべんとう\n      意思: boxed lunch\n      来源: waller\n      同义词: 御弁当\n    ',
  },
  {
    question: '歩く',
    answer: 'aruku',
    explantion: '\n      汉字: 歩く\n      读音: あるく\n      意思: to walk\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '方',
    answer: 'hō',
    explantion: '\n      汉字: 方\n      读音: かた\n      意思: person\n      来源:  way of doing\n      同义词: 方\n    ',
  },
  {
    question: '方',
    answer: 'hō',
    explantion: '\n      汉字: 方\n      读音: ほう\n      意思: Used for comparison.\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '帽子',
    answer: 'bōshi',
    explantion: '\n      汉字: 帽子\n      读音: ぼうし\n      意思: hat\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '忘れる',
    answer: 'wasureru',
    explantion: '\n      汉字: 忘れる\n      读音: わすれる\n      意思: to forget\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '忙しい',
    answer: 'isogashii',
    explantion: '\n      汉字: 忙しい\n      读音: いそがしい\n      意思: busy\n      来源:  irritated\n      同义词: 忙しい, 忙がしい\n    ',
  },
  {
    question: '北',
    answer: 'kita',
    explantion: '\n      汉字: 北\n      读音: きた\n      意思: North\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '本',
    answer: 'hon',
    explantion: '\n      汉字: 本\n      读音: ほん\n      意思: book\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '本棚',
    answer: 'hondana',
    explantion: '\n      汉字: 本棚\n      读音: ほんだな\n      意思: bookshelves\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '本当',
    answer: 'hontō',
    explantion: '\n      汉字: 本当\n      读音: ほんとう\n      意思: truth\n      来源: waller\n      同义词: 本当, 本當, 本當, , , \n    ',
  },
  {
    question: '磨く',
    answer: 'migaku',
    explantion: '\n      汉字: 磨く\n      读音: みがく\n      意思: to brush teeth\n      来源:  to polish\n      同义词: 磨く, 研く, 琢く\n    ',
  },
  {
    question: '妹',
    answer: 'imōto',
    explantion: '\n      汉字: 妹\n      读音: いもうと\n      意思: (humble) younger sister\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '毎週',
    answer: 'maishū',
    explantion: '\n      汉字: 毎週\n      读音: まいしゅう\n      意思: every week\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '毎朝',
    answer: 'maiasa',
    explantion: '\n      汉字: 毎朝\n      读音: まいあさ\n      意思: every morning\n      来源: waller\n      同义词: 毎朝\n    ',
  },
  {
    question: '毎日',
    answer: 'mainichi',
    explantion: '\n      汉字: 毎日\n      读音: まいにち\n      意思: every day\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '毎晩',
    answer: 'maiban',
    explantion: '\n      汉字: 毎晩\n      读音: まいばん\n      意思: every night\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '又',
    answer: 'mata',
    explantion: '\n      汉字: 又\n      读音: また\n      意思: again\n      来源: and\n      同义词: 又, , 亦, 復\n    ',
  },
  {
    question: '万年筆',
    answer: 'mannenhitsu',
    explantion: '\n      汉字: 万年筆\n      读音: まんねんひつ\n      意思: fountain pen\n      来源: waller\n      同义词: 万年筆, 万年筆\n    ',
  },
  {
    question: '無くす',
    answer: 'nakusu',
    explantion: '\n      汉字: 無くす\n      读音: なくす\n      意思: to lose something\n      来源: waller\n      同义词: , 失くす\n    ',
  },
  {
    question: '名前',
    answer: 'namae',
    explantion: '\n      汉字: 名前\n      读音: なまえ\n      意思: name\n      来源: waller\n      同义词: 名まえ\n    ',
  },
  {
    question: '明い',
    answer: 'akai',
    explantion: '\n      汉字: 明い\n      读音: あかるい\n      意思: bright\n      来源: waller\n      同义词: 明るい\n    ',
  },
  {
    question: '鳴く',
    answer: 'naku',
    explantion: '\n      汉字: 鳴く\n      读音: なく\n      意思: animal noise. to chirp\n      来源:  roar or croak etc.\n      同义词: 鳴く, 啼く\n    ',
  },
  {
    question: '木',
    answer: 'ki',
    explantion: '\n      汉字: 木\n      读音: き\n      意思: tree\n      来源:  wood\n      同义词: 木, 樹\n    ',
  },
  {
    question: '木曜日',
    answer: 'mokuyōbi',
    explantion: '\n      汉字: 木曜日\n      读音: もくようび\n      意思: Thursday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '問題',
    answer: 'mondai',
    explantion: '\n      汉字: 問題\n      读音: もんだい\n      意思: problem\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '夜',
    answer: 'yoru',
    explantion: '\n      汉字: 夜\n      读音: よる\n      意思: evening\n      来源: night\n      同义词: 夜, 夜\n    ',
  },
  {
    question: '野菜',
    answer: 'yasai',
    explantion: '\n      汉字: 野菜\n      读音: やさい\n      意思: vegetable\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '薬',
    answer: 'kusuri',
    explantion: '\n      汉字: 薬\n      读音: くすり\n      意思: medicine\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '友達',
    answer: 'tomodachi',
    explantion: '\n      汉字: 友達\n      读音: ともだち\n      意思: friend\n      来源: waller\n      同义词: 友だち\n    ',
  },
  {
    question: '有名',
    answer: 'yūmei',
    explantion: '\n      汉字: 有名\n      读音: ゆうめい\n      意思: famous\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '遊ぶ',
    answer: 'asobu',
    explantion: '\n      汉字: 遊ぶ\n      读音: あそぶ\n      意思: to play\n      来源:  to make a visit\n      同义词: 遊ぶ, 遊ぶ\n    ',
  },
  {
    question: '郵便局',
    answer: 'yūbinkyoku',
    explantion: '\n      汉字: 郵便局\n      读音: ゆうびんきょく\n      意思: post office\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '昨夜',
    answer: 'sakuya',
    explantion: '\n      汉字: 昨夜\n      读音: ゆうべ\n      意思: last night\n      来源: waller\n      同义词: 夕べ, 昨夜, 昨夜\n    ',
  },
  {
    question: '夕方',
    answer: 'yūgata',
    explantion: '\n      汉字: 夕方\n      读音: ゆうがた\n      意思: evening\n      来源: waller\n      同义词: 夕がた\n    ',
  },
  {
    question: '洋服',
    answer: 'yōfuku',
    explantion: '\n      汉字: 洋服\n      读音: ようふく\n      意思: western-style clothes\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '葉書',
    answer: 'hagaki',
    explantion: '\n      汉字: 葉書\n      读音: はがき\n      意思: postcard\n      来源: waller\n      同义词: , 葉書き, 端書, 端書き, \n    ',
  },
  {
    question: '要る',
    answer: 'iru',
    explantion: '\n      汉字: 要る\n      读音: いる\n      意思: to need\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '欲しい',
    answer: 'hoshii',
    explantion: '\n      汉字: 欲しい\n      读音: ほしい\n      意思: want\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '来る',
    answer: 'kuru',
    explantion: '\n      汉字: 来る\n      读音: くる\n      意思: to come\n      来源: waller\n      同义词: , 來る\n    ',
  },
  {
    question: '来月',
    answer: 'raigetsu',
    explantion: '\n      汉字: 来月\n      读音: らいげつ\n      意思: next month\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '来週',
    answer: 'raishū',
    explantion: '\n      汉字: 来週\n      读音: らいしゅう\n      意思: next week\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '来年',
    answer: 'rainen',
    explantion: '\n      汉字: 来年\n      读音: らいねん\n      意思: next year\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '頼む',
    answer: 'tanomu',
    explantion: '\n      汉字: 頼む\n      读音: たのむ\n      意思: to ask\n      来源: waller\n      同义词: 恃む, 憑む\n    ',
  },
  {
    question: '卵',
    answer: 'tamago',
    explantion: '\n      汉字: 卵\n      读音: たまご\n      意思: egg\n      来源: waller\n      同义词: 玉子\n    ',
  },
  {
    question: '立派',
    answer: 'rippa',
    explantion: '\n      汉字: 立派\n      读音: りっぱ\n      意思: splendid\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '留学生',
    answer: 'ryūgakusei',
    explantion: '\n      汉字: 留学生\n      读音: りゅうがくせい\n      意思: overseas student\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '旅行',
    answer: 'ryokō',
    explantion: '\n      汉字: 旅行\n      读音: りょこう\n      意思: travel\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '料理',
    answer: 'ryōri',
    explantion: '\n      汉字: 料理\n      读音: りょうり\n      意思: cuisine\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '涼しい',
    answer: 'suzushii',
    explantion: '\n      汉字: 涼しい\n      读音: すずしい\n      意思: Refreshing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '緑',
    answer: 'midori',
    explantion: '\n      汉字: 緑\n      读音: みどり\n      意思: green\n      来源: waller\n      同义词: 翠\n    ',
  },
  {
    question: '隣',
    answer: 'tonari',
    explantion: '\n      汉字: 隣\n      读音: となり\n      意思: next door to\n      来源: waller\n      同义词: 隣り, 鄰\n    ',
  },
  {
    question: '冷たい',
    answer: 'tsumetai',
    explantion: '\n      汉字: 冷たい\n      读音: つめたい\n      意思: cold to the touch\n      来源: waller\n      同义词: 冷たい\n    ',
  },
  {
    question: '冷蔵庫',
    answer: 'reizōko',
    explantion: '\n      汉字: 冷蔵庫\n      读音: れいぞうこ\n      意思: refrigerator\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '零',
    answer: 'rei',
    explantion: '\n      汉字: 零\n      读音: れい\n      意思: zero\n      来源: waller\n      同义词: ０, 〇\n    ',
  },
  {
    question: '練習',
    answer: 'renshū',
    explantion: '\n      汉字: 練習\n      读音: れんしゅう\n      意思: to practice\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '廊下',
    answer: 'rōka',
    explantion: '\n      汉字: 廊下\n      读音: ろうか\n      意思: corridor\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '六日',
    answer: 'rokunichi',
    explantion: '\n      汉字: 六日\n      读音: むいか\n      意思: six days\n      来源:  sixth day of the month\n      同义词: 六日, 六日, 六日, ６日, ６日, ６日\n    ',
  },
  {
    question: '話す',
    answer: 'hanasu',
    explantion: '\n      汉字: 話す\n      读音: はなす\n      意思: to speak\n      来源: waller\n      同义词: 咄す\n    ',
  },
  {
    question: '一昨日',
    answer: 'ototoi',
    explantion: '\n      汉字: 一昨日\n      读音: おととい\n      意思: day before yesterday\n      来源: waller\n      同义词: 一昨日, 一昨日\n    ',
  },
  {
    question: '一昨年',
    answer: 'issakunen',
    explantion: '\n      汉字: 一昨年\n      读音: おととし\n      意思: year before last\n      来源: waller\n      同义词: 一昨年, おと年\n    ',
  },
  {
    question: '一人',
    answer: 'ichinin',
    explantion: '\n      汉字: 一人\n      读音: ひとり\n      意思: one person\n      来源: waller\n      同义词: , 一人, １人, １人, 独り\n    ',
  },
  {
    question: '一日',
    answer: 'ichinichi',
    explantion: '\n      汉字: 一日\n      读音: いちにち\n      意思: first of the month\n      来源: waller\n      同义词: 一日, 一日, 一日, １日, １日, １日, １日\n    ',
  },
  {
    question: '塩',
    answer: 'shio',
    explantion: '\n      汉字: 塩\n      读音: しお\n      意思: Salt\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '黄色',
    answer: 'kiiro',
    explantion: '\n      汉字: 黄色\n      读音: きいろ\n      意思: yellow\n      来源: waller\n      同义词: 黄色, 黄色\n    ',
  },
  {
    question: '何',
    answer: 'nani',
    explantion: '\n      汉字: 何\n      读音: なに\n      意思: what\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '暇',
    answer: 'hima',
    explantion: '\n      汉字: 暇\n      读音: ひま\n      意思: free time\n      来源: waller\n      同义词: 暇, 閑, 遑, \n    ',
  },
  {
    question: '眼鏡',
    answer: 'megane',
    explantion: '\n      汉字: 眼鏡\n      读音: めがね\n      意思: glasses\n      来源: waller\n      同义词: , , 眼鏡, \n    ',
  },
  {
    question: '居る',
    answer: 'oru',
    explantion: '\n      汉字: 居る\n      读音: いる\n      意思: to be\n      来源:  to have (used for people and animals)\n      同义词: 居る\n    ',
  },
  {
    question: '魚',
    answer: 'sakana',
    explantion: '\n      汉字: 魚\n      读音: さかな\n      意思: Fish\n      来源: waller\n      同义词: 魚\n    ',
  },
  {
    question: '九',
    answer: 'kyū',
    explantion: '\n      汉字: 九\n      读音: く\n      意思: Nine\n      来源: waller\n      同义词: 九, 九, 九, ９, ９, ９, ９, ９, 玖, 玖, 玖, 玖, 玖\n    ',
  },
  {
    question: '行く',
    answer: 'iku',
    explantion: '\n      汉字: 行く\n      读音: ゆく\n      意思: to go\n      来源: waller\n      同义词: , , 逝く, 逝く, 往く, 往く\n    ',
  },
  {
    question: '今朝',
    answer: 'kesa',
    explantion: '\n      汉字: 今朝\n      读音: けさ\n      意思: this morning\n      来源: waller\n      同义词: 今朝\n    ',
  },
  {
    question: '今日',
    answer: 'kyō',
    explantion: '\n      汉字: 今日\n      读音: きょう\n      意思: Today\n      来源: waller\n      同义词: 今日, 今日, 今日\n    ',
  },
  {
    question: '今年',
    answer: 'kotoshi',
    explantion: '\n      汉字: 今年\n      读音: ことし\n      意思: this year\n      来源: waller\n      同义词: 今年\n    ',
  },
  {
    question: '昨日',
    answer: 'kinō',
    explantion: '\n      汉字: 昨日\n      读音: きのう\n      意思: Yesterday\n      来源: waller\n      同义词: 昨日\n    ',
  },
  {
    question: '三',
    answer: 'san',
    explantion: '\n      汉字: 三\n      读音: さん\n      意思: Three\n      来源: waller\n      同义词: 三, ３, ３, 参, 参, 弎, 弎\n    ',
  },
  {
    question: '四',
    answer: 'yon',
    explantion: '\n      汉字: 四\n      读音: よん\n      意思: Four\n      来源: waller\n      同义词: 四, ４, 肆\n    ',
  },
  {
    question: '七日',
    answer: 'nananichi',
    explantion: '\n      汉字: 七日\n      读音: なのか\n      意思: seven days\n      来源: the seventh day\n      同义词: 七日, 七日, ７日, ７日\n    ',
  },
  {
    question: '十',
    answer: 'jū',
    explantion: '\n      汉字: 十\n      读音: とお\n      意思: Ten\n      来源: waller\n      同义词: 十, １０, １０, 拾, 一〇\n    ',
  },
  {
    question: '上着',
    answer: 'uwagi',
    explantion: '\n      汉字: 上着\n      读音: うわぎ\n      意思: jacket\n      来源: waller\n      同义词: 上衣, 上衣, 表着\n    ',
  },
  {
    question: '丈夫',
    answer: 'jōbu',
    explantion: '\n      汉字: 丈夫\n      读音: じょうぶ\n      意思: strong\n      来源:  durable\n      同义词: 丈夫\n    ',
  },
  {
    question: '人',
    answer: 'hito',
    explantion: '\n      汉字: 人\n      读音: ひと\n      意思: person\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '弟',
    answer: 'otōto',
    explantion: '\n      汉字: 弟\n      读音: おとうと\n      意思: younger brother\n      来源: waller\n      同义词: 弟\n    ',
  },
  {
    question: '店',
    answer: 'mise',
    explantion: '\n      汉字: 店\n      读音: みせ\n      意思: shop\n      来源: waller\n      同义词: 見世\n    ',
  },
  {
    question: '頭',
    answer: 'atama',
    explantion: '\n      汉字: 頭\n      读音: あたま\n      意思: head\n      来源: waller\n      同义词: 頭\n    ',
  },
  {
    question: '二人',
    answer: 'ninin',
    explantion: '\n      汉字: 二人\n      读音: ふたり\n      意思: two people\n      来源: waller\n      同义词: 二人, ２人, ２人\n    ',
  },
  {
    question: '入口',
    answer: 'iriguchi',
    explantion: '\n      汉字: 入口\n      读音: いりぐち\n      意思: entrance\n      来源: waller\n      同义词: 入口, 入口, 入口, 入り口, 入り口, 入り口, 入り口\n    ',
  },
  {
    question: '此の',
    answer: '此no',
    explantion: '\n      汉字: 此の\n      读音: この\n      意思: This\n      来源: waller\n      同义词: , 斯の, \n    ',
  },
  {
    question: '八',
    answer: 'hachi',
    explantion: '\n      汉字: 八\n      读音: はち\n      意思: eight\n      来源: waller\n      同义词: 八, ８, ８, 捌, 捌\n    ',
  },
  {
    question: '八つ',
    answer: 'yattsu',
    explantion: '\n      汉字: 八つ\n      读音: やっつ\n      意思: eight\n      来源: waller\n      同义词: 八つ, ８つ, ８つ\n    ',
  },
  {
    question: '風邪',
    answer: 'kaze',
    explantion: '\n      汉字: 風邪\n      读音: かぜ\n      意思: a cold\n      来源: waller\n      同义词: 風邪\n    ',
  },
  {
    question: '毎月',
    answer: 'maitsuki',
    explantion: '\n      汉字: 毎月\n      读音: まいつき\n      意思: every month\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '毎年',
    answer: 'maitoshi',
    explantion: '\n      汉字: 毎年\n      读音: まいとし\n      意思: every year\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '万',
    answer: 'ban',
    explantion: '\n      汉字: 万\n      读音: まん\n      意思: ten thousand\n      来源: waller\n      同义词: 万, 萬, 萬\n    ',
  },
  {
    question: '明日',
    answer: 'ashita',
    explantion: '\n      汉字: 明日\n      读音: あした\n      意思: tomorrow\n      来源: waller\n      同义词: 明日, 明日\n    ',
  },
  {
    question: '門',
    answer: 'mon',
    explantion: '\n      汉字: 門\n      读音: もん\n      意思: gate\n      来源: waller\n      同义词: 門\n    ',
  },
  {
    question: '夕飯',
    answer: 'yūhan',
    explantion: '\n      汉字: 夕飯\n      读音: ゆうはん\n      意思: dinner\n      来源: waller\n      同义词: 夕飯\n    ',
  },
  {
    question: '六',
    answer: 'roku',
    explantion: '\n      汉字: 六\n      读音: ろく\n      意思: six\n      来源: waller\n      同义词: 六, 六, ６, ６, ６, 陸, 陸, 陸\n    ',
  },
  {
    question: '六つ',
    answer: 'muttsu',
    explantion: '\n      汉字: 六つ\n      读音: むっつ\n      意思: six\n      来源: waller\n      同义词: 六つ, ６つ, ６つ\n    ',
  },
  {
    question: '箱',
    answer: 'hako',
    explantion: '\n      汉字: 箱\n      读音: はこ\n      意思: box\n      来源: waller\n      同义词: 函, 匣, 筥, 筐, 凾, \n    ',
  },
  {
    question: '開く',
    answer: 'hiraku',
    explantion: '\n      汉字: 開く\n      读音: あく\n      意思: to open\n      来源:  to become open\n      同义词: 開く, 空く, 明く\n    ',
  },
  {
    question: '朝御飯',
    answer: 'asagohan',
    explantion: '\n      汉字: 朝御飯\n      读音: あさごはん\n      意思: breakfast\n      来源: waller\n      同义词: 朝ご飯, 朝ごはん\n    ',
  },
  {
    question: '暖かい',
    answer: 'atatakai',
    explantion: '\n      汉字: 暖かい\n      读音: あたたかい\n      意思: warm\n      来源: waller\n      同义词: 暖かい, 温かい, 温かい, 暖い, 暖い\n    ',
  },
  {
    question: '言う',
    answer: 'iu',
    explantion: '\n      汉字: 言う\n      读音: いう\n      意思: to say\n      来源: waller\n      同义词: 言う, 云う, 云う, 謂う, 謂う\n    ',
  },
  {
    question: '嫌',
    answer: 'iya',
    explantion: '\n      汉字: 嫌\n      读音: いや\n      意思: unpleasant\n      来源: waller\n      同义词: 嫌, 厭, 厭, 厭や, \n    ',
  },
  {
    question: '歌う',
    answer: 'utau',
    explantion: '\n      汉字: 歌う\n      读音: うたう\n      意思: to sing\n      来源: waller\n      同义词: 唄う, 謡う, 詠う, 唱う\n    ',
  },
  {
    question: '大きい',
    answer: 'ōkii',
    explantion: '\n      汉字: 大きい\n      读音: おおきい\n      意思: big\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '降りる',
    answer: 'oriru',
    explantion: '\n      汉字: 降りる\n      读音: おりる\n      意思: to get off\n      来源:  to descend\n      同义词: 降りる, 下りる\n    ',
  },
  {
    question: '終る',
    answer: 'owaru',
    explantion: '\n      汉字: 終る\n      读音: おわる\n      意思: to finish\n      来源: waller\n      同义词: 終わる, 了わる, 卒わる, 畢わる, 竟わる, 了る, 卒る, 畢る, 竟る\n    ',
  },
  {
    question: '買い物',
    answer: 'kaimono',
    explantion: '\n      汉字: 買い物\n      读音: かいもの\n      意思: Shopping\n      来源: waller\n      同义词: 買い物, 買物, 買物, 買いもの, 買いもの, 買いもん\n    ',
  },
  {
    question: '聞く',
    answer: 'kiku',
    explantion: '\n      汉字: 聞く\n      读音: きく\n      意思: to hear\n      来源:  to listen to\n      同义词: 聞く, 聴く\n    ',
  },
  {
    question: '国',
    answer: 'kuni',
    explantion: '\n      汉字: 国\n      读音: くに\n      意思: Country\n      来源: waller\n      同义词: 邦, 國\n    ',
  },
  {
    question: '曇り',
    answer: 'kumori',
    explantion: '\n      汉字: 曇り\n      读音: くもり\n      意思: cloudy weather\n      来源: waller\n      同义词: 曇\n    ',
  },
  {
    question: '交差点',
    answer: 'kōsaten',
    explantion: '\n      汉字: 交差点\n      读音: こうさてん\n      意思: intersection\n      来源: waller\n      同义词: 交叉点\n    ',
  },
  {
    question: '立つ',
    answer: 'tatsu',
    explantion: '\n      汉字: 立つ\n      读音: たつ\n      意思: to stand\n      来源: waller\n      同义词: 発つ\n    ',
  },
  {
    question: '作る',
    answer: 'tsukuru',
    explantion: '\n      汉字: 作る\n      读音: つくる\n      意思: to make\n      来源: waller\n      同义词: 造る, 創る\n    ',
  },
  {
    question: '出かける',
    answer: 'dekakeru',
    explantion: '\n      汉字: 出かける\n      读音: でかける\n      意思: to go out\n      来源: waller\n      同义词: 出掛ける\n    ',
  },
  {
    question: '時々',
    answer: 'tokidoki',
    explantion: '\n      汉字: 時々\n      读音: ときどき\n      意思: sometimes\n      来源: waller\n      同义词: 時時, 時どき\n    ',
  },
  {
    question: '飲み物',
    answer: 'nomimono',
    explantion: '\n      汉字: 飲み物\n      读音: のみもの\n      意思: a drink\n      来源: waller\n      同义词: 飲みもの, 飲物\n    ',
  },
  {
    question: '二十歳',
    answer: 'nijūsai',
    explantion: '\n      汉字: 二十歳\n      读音: はたち\n      意思: 20 years old\n      来源: 20th year\n      同义词: 二十歳, ２０歳, 二十, 廿\n    ',
  },
  {
    question: '二十日',
    answer: 'nijūnichi',
    explantion: '\n      汉字: 二十日\n      读音: はつか\n      意思: twenty days\n      来源: twentieth\n      同义词: 二十日, ２０日, 廿日\n    ',
  },
  {
    question: '話',
    answer: 'hanashi',
    explantion: '\n      汉字: 話\n      读音: はなし\n      意思: talk\n      来源: story\n      同义词: 話, 話し, 咄, 噺\n    ',
  },
  {
    question: '晩御飯',
    answer: 'bangohan',
    explantion: '\n      汉字: 晩御飯\n      读音: ばんごはん\n      意思: evening meal\n      来源: waller\n      同义词: 晩ご飯, 晩ごはん\n    ',
  },
  {
    question: '昼御飯',
    answer: 'hirugohan',
    explantion: '\n      汉字: 昼御飯\n      读音: ひるごはん\n      意思: midday meal\n      来源: waller\n      同义词: 昼ご飯, 昼ごはん\n    ',
  },
  {
    question: '両親',
    answer: 'ryōshin',
    explantion: '\n      汉字: 両親\n      读音: りょうしん\n      意思: both parents\n      来源: waller\n      同义词: 両親\n    ',
  },
  {
    question: '町',
    answer: 'machi',
    explantion: '\n      汉字: 町\n      读音: まち\n      意思: town\n      来源: city\n      同义词: 町, 町, 街\n    ',
  },
  {
    question: '丸い',
    answer: 'marui',
    explantion: '\n      汉字: 丸い\n      读音: まるい\n      意思: round\n      来源: circular\n      同义词: 丸い, 丸い, 円い, 円い\n    ',
  },
  {
    question: '目',
    answer: 'me',
    explantion: '\n      汉字: 目\n      读音: め\n      意思: eye\n      来源: waller\n      同义词: , 眼\n    ',
  },
  {
    question: '良い',
    answer: 'yoi',
    explantion: '\n      汉字: 良い\n      读音: よい\n      意思: good\n      来源: waller\n      同义词: 良い, 善い, 善い, 好い, 好い, 佳い, 佳い, 吉い, 吉い, 宜い, 宜い\n    ',
  },
  {
    question: '良く',
    answer: 'yoku',
    explantion: '\n      汉字: 良く\n      读音: よく\n      意思: often\n      来源:  well\n      同义词: 良く, , 善く, 能く, 好く, 克く\n    ',
  },
  {
    question: '分かる',
    answer: 'wakaru',
    explantion: '\n      汉字: 分かる\n      读音: わかる\n      意思: to be understood\n      来源: waller\n      同义词: , 解る, 判る, 分る\n    ',
  },
  {
    question: '履く',
    answer: 'haku',
    explantion: '\n      汉字: 履く\n      读音: はく\n      意思: to wear\n      来源: to put on trousers\n      同义词: 履く, 佩く, 穿く, 着く, 帯く\n    ',
  },
  {
    question: '何の',
    answer: 'nanino',
    explantion: '\n      汉字: 何の\n      读音: どの\n      意思: which\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'もう一度',
    answer: 'mōichido',
    explantion: '\n      汉字: もう一度\n      读音: もういちど\n      意思: again\n      来源: waller\n      同义词: もう１度\n    ',
  },
  {
    question: '赤',
    answer: 'aka',
    explantion: '\n      汉字: 赤\n      读音: あか\n      意思: red\n      来源: waller\n      同义词: 紅, 朱, 緋\n    ',
  },
  {
    question: '小さな',
    answer: 'chīsana',
    explantion: '\n      汉字: 小さな\n      读音: ちいさな\n      意思: little\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '背',
    answer: 'se',
    explantion: '\n      汉字: 背\n      读音: せ\n      意思: height\n      来源:  stature\n      同义词: 背, 脊\n    ',
  },
  {
    question: 'お風呂',
    answer: 'ofuro',
    explantion: '\n      汉字: お風呂\n      读音: おふろ\n      意思: Bath\n      来源: waller\n      同义词: 御風呂\n    ',
  },
  {
    question: '一日',
    answer: 'ichinichi',
    explantion: '\n      汉字: 一日\n      读音: ついたち\n      意思: first of month\n      来源: waller\n      同义词: 一日, １日, 朔日, 朔日, 朔\n    ',
  },
  {
    question: '伯母さん',
    answer: 'obasan',
    explantion: '\n      汉字: 伯母さん\n      读音: おばさん\n      意思: Aunt\n      来源: waller\n      同义词: , 叔母さん\n    ',
  },
  {
    question: '私',
    answer: 'watashi',
    explantion: '\n      汉字: 私\n      读音: わたくし\n      意思: (humble) I\n      来源: myself\n      同义词: 私\n    ',
  },
  {
    question: '何',
    answer: 'nani',
    explantion: '\n      汉字: 何\n      读音: なん\n      意思: what\n      来源: waller\n      同义词: \n    ',
  },
]

const chunkSize = 50

export default (() => {
  const dbList = chunk(n5, chunkSize)
  const questionMap: { [key: string]: QuestionList } = {}

  dbList.map((list, index) => {
    const data = {
      title: `N5-${index + 1}-${list.length}`,
      name: `N5-${index + 1}-${list.length}`,
      data: list,
    }
    return data
  })
    .forEach((data) => {
      questionMap[data.name] = data
    })
  return questionMap
})()
