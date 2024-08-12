import chunk from 'lodash-es/chunk'
import type { QuestionList } from '~/types'

const n2 = [
  {
    question: 'お参り',
    answer: 'omairi',
    explantion: '\n      汉字: お参り\n      读音: おまいり\n      意思: worship\n      来源: shrine visit\n      同义词: お参り, 御参り\n    ',
  },
  {
    question: '御辞儀',
    answer: 'gojigi',
    explantion: '\n      汉字: 御辞儀\n      读音: おじぎ\n      意思: bow\n      来源: waller\n      同义词: お辞儀\n    ',
  },
  {
    question: 'お手伝いさん',
    answer: 'otetsudaisan',
    explantion: '\n      汉字: お手伝いさん\n      读音: おてつだいさん\n      意思: maid\n      来源: waller\n      同义词: 御手伝いさん\n    ',
  },
  {
    question: '圧縮',
    answer: 'asshuku',
    explantion: '\n      汉字: 圧縮\n      读音: あっしゅく\n      意思: compression\n      来源: condensation\n      同义词: 圧縮, あっ縮\n    ',
  },
  {
    question: '安易',
    answer: 'an\'i',
    explantion: '\n      汉字: 安易\n      读音: あんい\n      意思: easy-going\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '案外',
    answer: 'angai',
    explantion: '\n      汉字: 案外\n      读音: あんがい\n      意思: unexpectedly\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '以後',
    answer: 'igo',
    explantion: '\n      汉字: 以後\n      读音: いご\n      意思: after this\n      来源: from now on\n      同义词: 以後, 已後\n    ',
  },
  {
    question: '以降',
    answer: 'ikō',
    explantion: '\n      汉字: 以降\n      读音: いこう\n      意思: on and after\n      来源: hereafter\n      同义词: 以降, 已降\n    ',
  },
  {
    question: '偉い',
    answer: 'erai',
    explantion: '\n      汉字: 偉い\n      读音: えらい\n      意思: great\n      来源: celebrated\n      同义词: 偉い, , 豪い, , \n    ',
  },
  {
    question: '威張る',
    answer: 'ibaru',
    explantion: '\n      汉字: 威張る\n      读音: いばる\n      意思: to be proud\n      来源: to swagger\n      同义词: 威張る, 威張る, 意張る\n    ',
  },
  {
    question: '意義',
    answer: 'igi',
    explantion: '\n      汉字: 意義\n      读音: いぎ\n      意思: meaning\n      来源: significance\n      同义词: 意義\n    ',
  },
  {
    question: '意地悪',
    answer: 'ijiwaru',
    explantion: '\n      汉字: 意地悪\n      读音: いじわる\n      意思: malicious\n      来源: ill-tempered\n      同义词: 意地悪\n    ',
  },
  {
    question: '慰める',
    answer: 'nagusameru',
    explantion: '\n      汉字: 慰める\n      读音: なぐさめる\n      意思: to comfort\n      来源: to console\n      同义词: 慰める\n    ',
  },
  {
    question: '為す',
    answer: 'nasu',
    explantion: '\n      汉字: 為す\n      读音: なす\n      意思: to accomplish\n      来源: to do\n      同义词: 為す, , 成す\n    ',
  },
  {
    question: '為替',
    answer: 'kawase',
    explantion: '\n      汉字: 為替\n      读音: かわせ\n      意思: money order\n      来源: exchange\n      同义词: 為替, 為替\n    ',
  },
  {
    question: '移転',
    answer: 'iten',
    explantion: '\n      汉字: 移転\n      读音: いてん\n      意思: moving\n      来源: transfer\n      同义词: 移転\n    ',
  },
  {
    question: '緯度',
    answer: 'ido',
    explantion: '\n      汉字: 緯度\n      读音: いど\n      意思: latitude (nav.)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '衣食住',
    answer: 'ishokujū',
    explantion: '\n      汉字: 衣食住\n      读音: いしょくじゅう\n      意思: necessities of life (food\n      来源:  clothing\n      同义词: 衣食住\n    ',
  },
  {
    question: '井戸',
    answer: 'ido',
    explantion: '\n      汉字: 井戸\n      读音: いど\n      意思: water well\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '育児',
    answer: 'ikuji',
    explantion: '\n      汉字: 育児\n      读音: いくじ\n      意思: childcare\n      来源: nursing\n      同义词: 育児\n    ',
  },
  {
    question: '一応',
    answer: 'ichiō',
    explantion: '\n      汉字: 一応\n      读音: いちおう\n      意思: once\n      来源: tentatively\n      同义词: 一応, 一往\n    ',
  },
  {
    question: '一休み',
    answer: 'hitoyasumi',
    explantion: '\n      汉字: 一休み\n      读音: ひとやすみ\n      意思: a rest\n      来源: waller\n      同义词: ひと休み\n    ',
  },
  {
    question: '一斉',
    answer: 'issei',
    explantion: '\n      汉字: 一斉\n      读音: いっせい\n      意思: simultaneous\n      来源: all at once\n      同义词: 一斉\n    ',
  },
  {
    question: '一旦',
    answer: 'ittan',
    explantion: '\n      汉字: 一旦\n      读音: いったん\n      意思: once\n      来源: for a moment\n      同义词: 一旦, \n    ',
  },
  {
    question: '一段',
    answer: 'ichidan',
    explantion: '\n      汉字: 一段\n      读音: いちだん\n      意思: greater\n      来源: more\n      同义词: 一段\n    ',
  },
  {
    question: '一通り',
    answer: 'ichitōri',
    explantion: '\n      汉字: 一通り\n      读音: ひととおり\n      意思: ordinary\n      来源: usual\n      同义词: 一通り\n    ',
  },
  {
    question: '一定',
    answer: 'ittei',
    explantion: '\n      汉字: 一定\n      读音: いってい\n      意思: fixed\n      来源: settled\n      同义词: 一定, 一定\n    ',
  },
  {
    question: '一流',
    answer: 'ichiryū',
    explantion: '\n      汉字: 一流\n      读音: いちりゅう\n      意思: first class\n      来源: top grade\n      同义词: 一流\n    ',
  },
  {
    question: '引分け',
    answer: 'hikiwakeke',
    explantion: '\n      汉字: 引分け\n      读音: ひきわけ\n      意思: a draw (in competition)\n      来源: tie game\n      同义词: 引分け, 引き分け\n    ',
  },
  {
    question: '引返す',
    answer: 'hikikaesu',
    explantion: '\n      汉字: 引返す\n      读音: ひきかえす\n      意思: to repeat\n      来源: to send back\n      同义词: 引返す, 引き返す, 引きかえす\n    ',
  },
  {
    question: '引っ繰り返る',
    answer: 'hikkurikaeru',
    explantion: '\n      汉字: 引っ繰り返る\n      读音: ひっくりかえる\n      意思: to be overturned\n      来源: to be upset\n      同义词: 引っ繰り返る, ひっくり返る, ひっくり返る, 引っくり返る, 引っくり返る, 引っ繰り返る, 引繰り返る, 引繰り返る\n    ',
  },
  {
    question: '引っ掛かる',
    answer: 'hikkakaru',
    explantion: '\n      汉字: 引っ掛かる\n      读音: ひっかかる\n      意思: to be caught in\n      来源: to be stuck in\n      同义词: 引っ掛かる, 引っかかる, 引っ掛る\n    ',
  },
  {
    question: '引っ込む',
    answer: 'hikkomu',
    explantion: '\n      汉字: 引っ込む\n      读音: ひっこむ\n      意思: to draw back\n      来源: to sink\n      同义词: 引っ込む, 引っこむ\n    ',
  },
  {
    question: '引力',
    answer: 'inryoku',
    explantion: '\n      汉字: 引力\n      读音: いんりょく\n      意思: gravity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '羽根',
    answer: 'hane',
    explantion: '\n      汉字: 羽根\n      读音: はね\n      意思: shuttlecock\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '雨戸',
    answer: 'amado',
    explantion: '\n      汉字: 雨戸\n      读音: あまど\n      意思: sliding storm door\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '運河',
    answer: 'unga',
    explantion: '\n      汉字: 運河\n      读音: うんが\n      意思: canal\n      来源: waterway\n      同义词: 運河\n    ',
  },
  {
    question: '映る',
    answer: 'utsuru',
    explantion: '\n      汉字: 映る\n      读音: うつる\n      意思: to be reflected\n      来源: to harmonize with\n      同义词: 映る\n    ',
  },
  {
    question: '英文',
    answer: 'eibun',
    explantion: '\n      汉字: 英文\n      读音: えいぶん\n      意思: sentence in English\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '英和',
    answer: 'eiwa',
    explantion: '\n      汉字: 英和\n      读音: えいわ\n      意思: English-Japanese (e.g. dictionary)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '液体',
    answer: 'ekitai',
    explantion: '\n      汉字: 液体\n      读音: えきたい\n      意思: liquid\n      来源: fluid\n      同义词: 液体\n    ',
  },
  {
    question: '超す',
    answer: 'kosu',
    explantion: '\n      汉字: 超す\n      读音: こす\n      意思: to cross\n      来源: to pass\n      同义词: 超す\n    ',
  },
  {
    question: '円周',
    answer: 'enshū',
    explantion: '\n      汉字: 円周\n      读音: えんしゅう\n      意思: circumference\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '園芸',
    answer: 'engei',
    explantion: '\n      汉字: 園芸\n      读音: えんげい\n      意思: horticulture\n      来源: gardening\n      同义词: 園芸\n    ',
  },
  {
    question: '宴会',
    answer: 'enkai',
    explantion: '\n      汉字: 宴会\n      读音: えんかい\n      意思: party\n      来源: banquet\n      同义词: 宴会\n    ',
  },
  {
    question: '延長',
    answer: 'enchō',
    explantion: '\n      汉字: 延長\n      读音: えんちょう\n      意思: extension\n      来源: elongation\n      同义词: 延長\n    ',
  },
  {
    question: '演劇',
    answer: 'engeki',
    explantion: '\n      汉字: 演劇\n      读音: えんげき\n      意思: play (theatrical)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '煙い',
    answer: 'kemui',
    explantion: '\n      汉字: 煙い\n      读音: けむい\n      意思: smoky\n      来源: waller\n      同义词: 煙い, 烟い, 烟い\n    ',
  },
  {
    question: '煙突',
    answer: 'entotsu',
    explantion: '\n      汉字: 煙突\n      读音: えんとつ\n      意思: chimney\n      来源: waller\n      同义词: 烟突\n    ',
  },
  {
    question: '艶',
    answer: 'tsuya',
    explantion: '\n      汉字: 艶\n      读音: つや\n      意思: gloss\n      来源: glaze\n      同义词: 艶\n    ',
  },
  {
    question: '遠足',
    answer: 'ensoku',
    explantion: '\n      汉字: 遠足\n      读音: えんそく\n      意思: trip\n      来源: hike\n      同义词: 遠足\n    ',
  },
  {
    question: '汚す',
    answer: 'kegasu',
    explantion: '\n      汉字: 汚す\n      读音: よごす\n      意思: (1) to disgrace\n      来源: to dishonour\n      同义词: 汚す, 汚す, 穢す\n    ',
  },
  {
    question: '凹む',
    answer: 'hekomu',
    explantion: '\n      汉字: 凹む\n      读音: へこむ\n      意思: to be dented\n      来源: to be indented\n      同义词: 凹む, \n    ',
  },
  {
    question: '往復',
    answer: 'ōfuku',
    explantion: '\n      汉字: 往復\n      读音: おうふく\n      意思: (col) round trip\n      来源: coming and going\n      同义词: 往復\n    ',
  },
  {
    question: '応援',
    answer: 'ōen',
    explantion: '\n      汉字: 応援\n      读音: おうえん\n      意思: aid\n      来源: assistance\n      同义词: 応援\n    ',
  },
  {
    question: '応接',
    answer: 'ōsetsu',
    explantion: '\n      汉字: 応接\n      读音: おうせつ\n      意思: reception\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '応対',
    answer: 'ōtai',
    explantion: '\n      汉字: 応対\n      读音: おうたい\n      意思: receiving\n      来源: dealing with\n      同义词: 応対, 応待\n    ',
  },
  {
    question: '応用',
    answer: 'ōyō',
    explantion: '\n      汉字: 応用\n      读音: おうよう\n      意思: application\n      来源: put to practical use\n      同义词: 応用\n    ',
  },
  {
    question: '王女',
    answer: 'ōjo',
    explantion: '\n      汉字: 王女\n      读音: おうじょ\n      意思: princess\n      来源: waller\n      同义词: 王女\n    ',
  },
  {
    question: '襖',
    answer: 'fusuma',
    explantion: '\n      汉字: 襖\n      读音: ふすま\n      意思: sliding screen\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '屋外',
    answer: 'okugai',
    explantion: '\n      汉字: 屋外\n      读音: おくがい\n      意思: outdoors\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '卸す',
    answer: 'orosu',
    explantion: '\n      汉字: 卸す\n      读音: おろす\n      意思: to sell wholesale\n      来源: grated (vegetables)\n      同义词: 卸す\n    ',
  },
  {
    question: '恩恵',
    answer: 'onkei',
    explantion: '\n      汉字: 恩恵\n      读音: おんけい\n      意思: grace\n      来源: favor\n      同义词: 恩恵\n    ',
  },
  {
    question: '温室',
    answer: 'onshitsu',
    explantion: '\n      汉字: 温室\n      读音: おんしつ\n      意思: greenhouse\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '温泉',
    answer: 'onsen',
    explantion: '\n      汉字: 温泉\n      读音: おんせん\n      意思: spa\n      来源: hot spring\n      同义词: 温泉\n    ',
  },
  {
    question: '温帯',
    answer: 'ontai',
    explantion: '\n      汉字: 温帯\n      读音: おんたい\n      意思: temperate zone\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '下る',
    answer: 'kudaru',
    explantion: '\n      汉字: 下る\n      读音: くだる\n      意思: to get down\n      来源: to descend\n      同义词: 下る, 降る\n    ',
  },
  {
    question: '下降',
    answer: 'kakō',
    explantion: '\n      汉字: 下降\n      读音: かこう\n      意思: downward\n      来源: descent\n      同义词: 下降\n    ',
  },
  {
    question: '下車',
    answer: 'gesha',
    explantion: '\n      汉字: 下車\n      读音: げしゃ\n      意思: alighting\n      来源: getting off\n      同义词: 下車\n    ',
  },
  {
    question: '下旬',
    answer: 'gejun',
    explantion: '\n      汉字: 下旬\n      读音: げじゅん\n      意思: month (last third of)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '下書き',
    answer: 'shitagaki',
    explantion: '\n      汉字: 下書き\n      读音: したがき\n      意思: rough copy\n      来源: draft\n      同义词: 下書き\n    ',
  },
  {
    question: '下水',
    answer: 'gesui',
    explantion: '\n      汉字: 下水\n      读音: げすい\n      意思: drainage\n      来源: sewage\n      同义词: 下水\n    ',
  },
  {
    question: '下線',
    answer: 'kasen',
    explantion: '\n      汉字: 下線\n      读音: かせん\n      意思: underline\n      来源: underscore\n      同义词: 下線\n    ',
  },
  {
    question: '下駄',
    answer: 'geta',
    explantion: '\n      汉字: 下駄\n      读音: げた\n      意思: geta (Japanese footwear)\n      来源: wooden clogs\n      同义词: 下駄\n    ',
  },
  {
    question: '下町',
    answer: 'shitamachi',
    explantion: '\n      汉字: 下町\n      读音: したまち\n      意思: Shitamachi\n      来源: lower parts of town\n      同义词: 下町\n    ',
  },
  {
    question: '下品',
    answer: 'gehin',
    explantion: '\n      汉字: 下品\n      读音: げひん\n      意思: vulgarity\n      来源: meanness\n      同义词: 下品\n    ',
  },
  {
    question: '仮定',
    answer: 'katei',
    explantion: '\n      汉字: 仮定\n      读音: かてい\n      意思: assumption\n      来源: supposition\n      同义词: 仮定\n    ',
  },
  {
    question: '仮名遣い',
    answer: 'kanazukai',
    explantion: '\n      汉字: 仮名遣い\n      读音: かなづかい\n      意思: kana orthography\n      来源: syllabary spelling\n      同义词: 仮名遣い, 仮名遣, かな遣い, かな使い, 仮名使い\n    ',
  },
  {
    question: '何分',
    answer: 'nanibun',
    explantion: '\n      汉字: 何分\n      读音: なにぶん\n      意思: what minute?\n      来源: how many minutes?\n      同义词: 何分, 何ぶん\n    ',
  },
  {
    question: '加速',
    answer: 'kasoku',
    explantion: '\n      汉字: 加速\n      读音: かそく\n      意思: acceleration\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '加速度',
    answer: 'kasokudo',
    explantion: '\n      汉字: 加速度\n      读音: かそくど\n      意思: acceleration\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '加熱',
    answer: 'kanetsu',
    explantion: '\n      汉字: 加熱\n      读音: かねつ\n      意思: heating\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '可決',
    answer: 'kaketsu',
    explantion: '\n      汉字: 可決\n      读音: かけつ\n      意思: approval\n      来源: adoption (e.g. motion\n      同义词: 可決\n    ',
  },
  {
    question: '家屋',
    answer: 'kaoku',
    explantion: '\n      汉字: 家屋\n      读音: かおく\n      意思: house\n      来源: building\n      同义词: 家屋\n    ',
  },
  {
    question: '家主',
    answer: 'yanushi',
    explantion: '\n      汉字: 家主\n      读音: やぬし\n      意思: landlord\n      来源: waller\n      同义词: 家主, 家主\n    ',
  },
  {
    question: '果実',
    answer: 'kajitsu',
    explantion: '\n      汉字: 果実\n      读音: かじつ\n      意思: fruit\n      来源: nut\n      同义词: 果実\n    ',
  },
  {
    question: '架空',
    answer: 'kakū',
    explantion: '\n      汉字: 架空\n      读音: かくう\n      意思: aerial\n      来源: overhead\n      同义词: 架空, 架空\n    ',
  },
  {
    question: '歌謡',
    answer: 'kayō',
    explantion: '\n      汉字: 歌謡\n      读音: かよう\n      意思: song\n      来源: ballad\n      同义词: 歌謡\n    ',
  },
  {
    question: '火口',
    answer: 'kakō',
    explantion: '\n      汉字: 火口\n      读音: かこう\n      意思: a burner\n      来源: origin of a fire\n      同义词: 火口\n    ',
  },
  {
    question: '火山',
    answer: 'kazan',
    explantion: '\n      汉字: 火山\n      读音: かざん\n      意思: volcano\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '花嫁',
    answer: 'hanayome',
    explantion: '\n      汉字: 花嫁\n      读音: はなよめ\n      意思: bride\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '花火',
    answer: 'hanabi',
    explantion: '\n      汉字: 花火\n      读音: はなび\n      意思: fireworks\n      来源: waller\n      同义词: 煙火\n    ',
  },
  {
    question: '課税',
    answer: 'kazei',
    explantion: '\n      汉字: 課税\n      读音: かぜい\n      意思: taxation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '課程',
    answer: 'katei',
    explantion: '\n      汉字: 課程\n      读音: かてい\n      意思: course\n      来源: curriculum\n      同义词: 課程\n    ',
  },
  {
    question: '貨物',
    answer: 'kamotsu',
    explantion: '\n      汉字: 貨物\n      读音: かもつ\n      意思: cargo\n      来源: freight\n      同义词: 貨物, 貨物\n    ',
  },
  {
    question: '過失',
    answer: 'kashitsu',
    explantion: '\n      汉字: 過失\n      读音: かしつ\n      意思: error\n      来源: blunder\n      同义词: 過失\n    ',
  },
  {
    question: '過剰',
    answer: 'kajō',
    explantion: '\n      汉字: 過剰\n      读音: かじょう\n      意思: excess\n      来源: over-\n      同义词: 過剰\n    ',
  },
  {
    question: '過程',
    answer: 'katei',
    explantion: '\n      汉字: 過程\n      读音: かてい\n      意思: process\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '過半数',
    answer: 'kahansū',
    explantion: '\n      汉字: 過半数\n      读音: かはんすう\n      意思: majority\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '蚊',
    answer: 'ka',
    explantion: '\n      汉字: 蚊\n      读音: か\n      意思: mosquito\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '遭う',
    answer: 'au',
    explantion: '\n      汉字: 遭う\n      读音: あう\n      意思: to meet\n      来源: to encounter (undesirable nuance)\n      同义词: 遭う\n    ',
  },
  {
    question: '解散',
    answer: 'kaisan',
    explantion: '\n      汉字: 解散\n      读音: かいさん\n      意思: breakup\n      来源: dissolution\n      同义词: 解散\n    ',
  },
  {
    question: '解説',
    answer: 'kaisetsu',
    explantion: '\n      汉字: 解説\n      读音: かいせつ\n      意思: explanation\n      来源: commentary\n      同义词: 解説\n    ',
  },
  {
    question: '解答',
    answer: 'kaitō',
    explantion: '\n      汉字: 解答\n      读音: かいとう\n      意思: answer\n      来源: solution\n      同义词: 解答\n    ',
  },
  {
    question: '解放',
    answer: 'kaihō',
    explantion: '\n      汉字: 解放\n      读音: かいほう\n      意思: release\n      来源: liberation\n      同义词: 解放\n    ',
  },
  {
    question: '回り道',
    answer: 'mawarimichi',
    explantion: '\n      汉字: 回り道\n      读音: まわりみち\n      意思: detour\n      来源: waller\n      同义词: まわり道, 廻り道, 廻り路, 回り路\n    ',
  },
  {
    question: '回数',
    answer: 'kaisū',
    explantion: '\n      汉字: 回数\n      读音: かいすう\n      意思: number of times\n      来源: frequency\n      同义词: 回数\n    ',
  },
  {
    question: '回数券',
    answer: 'kaisūken',
    explantion: '\n      汉字: 回数券\n      读音: かいすうけん\n      意思: book of tickets\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '回転',
    answer: 'kaiten',
    explantion: '\n      汉字: 回転\n      读音: かいてん\n      意思: rotation\n      来源: revolution\n      同义词: 回転, 廻転\n    ',
  },
  {
    question: '回答',
    answer: 'kaitō',
    explantion: '\n      汉字: 回答\n      读音: かいとう\n      意思: reply\n      来源: answer\n      同义词: 回答\n    ',
  },
  {
    question: '快晴',
    answer: 'kaisei',
    explantion: '\n      汉字: 快晴\n      读音: かいせい\n      意思: good weather\n      来源: waller\n      同义词: 快霽\n    ',
  },
  {
    question: '悔やむ',
    answer: 'kuyamu',
    explantion: '\n      汉字: 悔やむ\n      读音: くやむ\n      意思: to mourn\n      来源: waller\n      同义词: 悔む\n    ',
  },
  {
    question: '懐かしい',
    answer: 'natsukashii',
    explantion: '\n      汉字: 懐かしい\n      读音: なつかしい\n      意思: dear\n      来源: desired\n      同义词: 懐かしい\n    ',
  },
  {
    question: '改めて',
    answer: 'aratamete',
    explantion: '\n      汉字: 改めて\n      读音: あらためて\n      意思: another time\n      来源: again\n      同义词: 改めて, 新ためて\n    ',
  },
  {
    question: '改める',
    answer: 'aratameru',
    explantion: '\n      汉字: 改める\n      读音: あらためる\n      意思: to change\n      来源: to alter\n      同义词: 改める, 検める, 革める\n    ',
  },
  {
    question: '改札',
    answer: 'kaisatsu',
    explantion: '\n      汉字: 改札\n      读音: かいさつ\n      意思: examination of tickets\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '改正',
    answer: 'kaisei',
    explantion: '\n      汉字: 改正\n      读音: かいせい\n      意思: revision\n      来源: amendment\n      同义词: 改正\n    ',
  },
  {
    question: '改造',
    answer: 'kaizō',
    explantion: '\n      汉字: 改造\n      读音: かいぞう\n      意思: (1) remodeling\n      来源: (2) modding (comp)\n      同义词: 改造\n    ',
  },
  {
    question: '海水浴',
    answer: 'kaisuiyoku',
    explantion: '\n      汉字: 海水浴\n      读音: かいすいよく\n      意思: sea bathing\n      来源: seawater bath\n      同义词: 海水浴\n    ',
  },
  {
    question: '海洋',
    answer: 'kaiyō',
    explantion: '\n      汉字: 海洋\n      读音: かいよう\n      意思: ocean\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '灰色',
    answer: 'haiiro',
    explantion: '\n      汉字: 灰色\n      读音: はいいろ\n      意思: grey\n      来源: gray\n      同义词: 灰色, 灰色\n    ',
  },
  {
    question: '絵の具',
    answer: 'enogu',
    explantion: '\n      汉字: 絵の具\n      读音: えのぐ\n      意思: colors\n      来源: paints\n      同义词: 絵の具, 絵具\n    ',
  },
  {
    question: '開会',
    answer: 'kaikai',
    explantion: '\n      汉字: 開会\n      读音: かいかい\n      意思: opening of a meeting\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '開通',
    answer: 'kaitsū',
    explantion: '\n      汉字: 開通\n      读音: かいつう\n      意思: opening\n      来源: open\n      同义词: 開通\n    ',
  },
  {
    question: '開放',
    answer: 'kaihō',
    explantion: '\n      汉字: 開放\n      读音: かいほう\n      意思: open\n      来源: throw open\n      同义词: 開放\n    ',
  },
  {
    question: '貝',
    answer: 'kai',
    explantion: '\n      汉字: 貝\n      读音: かい\n      意思: shell\n      来源: shellfish\n      同义词: 貝\n    ',
  },
  {
    question: '外れる',
    answer: 'hazureru',
    explantion: '\n      汉字: 外れる\n      读音: はずれる\n      意思: to be disconnected\n      来源: to get out of place\n      同义词: 外れる\n    ',
  },
  {
    question: '外科',
    answer: 'geka',
    explantion: '\n      汉字: 外科\n      读音: げか\n      意思: surgical department\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '外部',
    answer: 'gaibu',
    explantion: '\n      汉字: 外部\n      读音: がいぶ\n      意思: the outside\n      来源: external\n      同义词: 外部\n    ',
  },
  {
    question: '概論',
    answer: 'gairon',
    explantion: '\n      汉字: 概論\n      读音: がいろん\n      意思: intro\n      来源: outline\n      同义词: 概論\n    ',
  },
  {
    question: '蓋',
    answer: 'futa',
    explantion: '\n      汉字: 蓋\n      读音: ふた\n      意思: cover\n      来源: lid\n      同义词: 蓋, \n    ',
  },
  {
    question: '街角',
    answer: 'machikado',
    explantion: '\n      汉字: 街角\n      读音: まちかど\n      意思: street corner\n      来源: waller\n      同义词: 町角\n    ',
  },
  {
    question: '垣根',
    answer: 'kakine',
    explantion: '\n      汉字: 垣根\n      读音: かきね\n      意思: hedge\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '各自',
    answer: 'kakuji',
    explantion: '\n      汉字: 各自\n      读音: かくじ\n      意思: individual\n      来源: each\n      同义词: 各自\n    ',
  },
  {
    question: '各地',
    answer: 'kakuchi',
    explantion: '\n      汉字: 各地\n      读音: かくち\n      意思: every place\n      来源: various places\n      同义词: 各地\n    ',
  },
  {
    question: '拡充',
    answer: 'kakujū',
    explantion: '\n      汉字: 拡充\n      读音: かくじゅう\n      意思: expansion\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '拡張',
    answer: 'kakuchō',
    explantion: '\n      汉字: 拡張\n      读音: かくちょう\n      意思: expansion\n      来源: extension\n      同义词: 拡張\n    ',
  },
  {
    question: '格別',
    answer: 'kakubetsu',
    explantion: '\n      汉字: 格別\n      读音: かくべつ\n      意思: exceptional\n      来源: waller\n      同义词: 格別, 各別, 各別\n    ',
  },
  {
    question: '殻',
    answer: 'kara',
    explantion: '\n      汉字: 殻\n      读音: から\n      意思: shell\n      来源: husk\n      同义词: 殻, 骸\n    ',
  },
  {
    question: '確率',
    answer: 'kakuritsu',
    explantion: '\n      汉字: 確率\n      读音: かくりつ\n      意思: probability\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '角度',
    answer: 'kakudo',
    explantion: '\n      汉字: 角度\n      读音: かくど\n      意思: angle\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '隔てる',
    answer: 'hedateru',
    explantion: '\n      汉字: 隔てる\n      读音: へだてる\n      意思: to be shut out\n      来源: waller\n      同义词: 距てる\n    ',
  },
  {
    question: '学科',
    answer: 'gakka',
    explantion: '\n      汉字: 学科\n      读音: がっか\n      意思: study subject\n      来源: course of study\n      同义词: 学科\n    ',
  },
  {
    question: '学会',
    answer: 'gakkai',
    explantion: '\n      汉字: 学会\n      读音: がっかい\n      意思: scientific society\n      来源: academic meeting\n      同义词: 学会\n    ',
  },
  {
    question: '学級',
    answer: 'gakkyū',
    explantion: '\n      汉字: 学級\n      读音: がっきゅう\n      意思: grade in school\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '学術',
    answer: 'gakujutsu',
    explantion: '\n      汉字: 学術\n      读音: がくじゅつ\n      意思: science\n      来源: learning\n      同义词: 学術\n    ',
  },
  {
    question: '学年',
    answer: 'gakunen',
    explantion: '\n      汉字: 学年\n      读音: がくねん\n      意思: year in school\n      来源: grade in school\n      同义词: 学年\n    ',
  },
  {
    question: '学部',
    answer: 'gakubu',
    explantion: '\n      汉字: 学部\n      读音: がくぶ\n      意思: department of a university\n      来源: undergraduate\n      同义词: 学部\n    ',
  },
  {
    question: '学力',
    answer: 'gakuryoku',
    explantion: '\n      汉字: 学力\n      读音: がくりょく\n      意思: scholarship\n      来源: knowledge\n      同义词: 学力\n    ',
  },
  {
    question: '楽器',
    answer: 'gakki',
    explantion: '\n      汉字: 楽器\n      读音: がっき\n      意思: musical instrument\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '裂く',
    answer: 'saku',
    explantion: '\n      汉字: 裂く\n      读音: さく\n      意思: to tear\n      来源: to split\n      同义词: 裂く, 割く\n    ',
  },
  {
    question: '括弧',
    answer: 'kakko',
    explantion: '\n      汉字: 括弧\n      读音: かっこ\n      意思: parenthesis\n      来源: brackets\n      同义词: 括弧, , \n    ',
  },
  {
    question: '活字',
    answer: 'katsuji',
    explantion: '\n      汉字: 活字\n      读音: かつじ\n      意思: printing type\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '活躍',
    answer: 'katsuyaku',
    explantion: '\n      汉字: 活躍\n      读音: かつやく\n      意思: activity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '活力',
    answer: 'katsuryoku',
    explantion: '\n      汉字: 活力\n      读音: かつりょく\n      意思: vitality\n      来源: energy\n      同义词: 活力\n    ',
  },
  {
    question: '渇く',
    answer: 'kawaku',
    explantion: '\n      汉字: 渇く\n      读音: かわく\n      意思: to be thirsty\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '釜',
    answer: 'kama',
    explantion: '\n      汉字: 釜\n      读音: かま\n      意思: iron pot\n      来源: kettle\n      同义词: 釜\n    ',
  },
  {
    question: '瓦',
    answer: 'kawara',
    explantion: '\n      汉字: 瓦\n      读音: かわら\n      意思: roof tile\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '乾かす',
    answer: 'kawakasu',
    explantion: '\n      汉字: 乾かす\n      读音: かわかす\n      意思: to dry (clothes\n      来源:  etc.)\n      同义词: 乾かす\n    ',
  },
  {
    question: '乾燥',
    answer: 'kansō',
    explantion: '\n      汉字: 乾燥\n      读音: かんそう\n      意思: dry\n      来源: arid\n      同义词: 乾燥\n    ',
  },
  {
    question: '乾電池',
    answer: 'kandenchi',
    explantion: '\n      汉字: 乾電池\n      读音: かんでんち\n      意思: dry cell\n      来源: battery\n      同义词: 乾電池\n    ',
  },
  {
    question: '寒帯',
    answer: 'kantai',
    explantion: '\n      汉字: 寒帯\n      读音: かんたい\n      意思: frigid zone\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '勘違い',
    answer: 'kanchigai',
    explantion: '\n      汉字: 勘違い\n      读音: かんちがい\n      意思: misunderstanding\n      来源: wrong guess\n      同义词: 勘違い\n    ',
  },
  {
    question: '巻く',
    answer: 'maku',
    explantion: '\n      汉字: 巻く\n      读音: まく\n      意思: to wind\n      来源: to coil\n      同义词: 巻く, 捲く\n    ',
  },
  {
    question: '官庁',
    answer: 'kanchō',
    explantion: '\n      汉字: 官庁\n      读音: かんちょう\n      意思: government office\n      来源: authorities\n      同义词: 官庁\n    ',
  },
  {
    question: '感激',
    answer: 'kangeki',
    explantion: '\n      汉字: 感激\n      读音: かんげき\n      意思: deep emotion\n      来源: impression\n      同义词: 感激\n    ',
  },
  {
    question: '感想',
    answer: 'kansō',
    explantion: '\n      汉字: 感想\n      读音: かんそう\n      意思: impressions\n      来源: thoughts\n      同义词: 感想\n    ',
  },
  {
    question: '馴れる',
    answer: 'nareru',
    explantion: '\n      汉字: 馴れる\n      读音: なれる\n      意思: to become domesticated\n      来源: to become tame\n      同义词: 馴れる\n    ',
  },
  {
    question: '換気',
    answer: 'kanki',
    explantion: '\n      汉字: 換気\n      读音: かんき\n      意思: ventilation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '漢和',
    answer: 'kanwa',
    explantion: '\n      汉字: 漢和\n      读音: かんわ\n      意思: Chinese Character-Japanese (e.g. dictionary)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '甘やかす',
    answer: 'amayakasu',
    explantion: '\n      汉字: 甘やかす\n      读音: あまやかす\n      意思: to pamper\n      来源: to spoil\n      同义词: 甘やかす\n    ',
  },
  {
    question: '看板',
    answer: 'kamban',
    explantion: '\n      汉字: 看板\n      读音: かんばん\n      意思: sign\n      来源: signboard\n      同义词: 看板\n    ',
  },
  {
    question: '看病',
    answer: 'kambyō',
    explantion: '\n      汉字: 看病\n      读音: かんびょう\n      意思: nursing (a patient)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '緩い',
    answer: 'yurui',
    explantion: '\n      汉字: 緩い\n      读音: ゆるい\n      意思: loose\n      来源: lenient\n      同义词: 緩い\n    ',
  },
  {
    question: '缶詰',
    answer: 'kanzume',
    explantion: '\n      汉字: 缶詰\n      读音: かんづめ\n      意思: packing (in cans)\n      来源: canning\n      同义词: 缶詰, 缶詰め, 罐詰め, 罐詰\n    ',
  },
  {
    question: '観測',
    answer: 'kansoku',
    explantion: '\n      汉字: 観測\n      读音: かんそく\n      意思: observation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '観念',
    answer: 'kannen',
    explantion: '\n      汉字: 観念\n      读音: かんねん\n      意思: (1) idea\n      来源: notion\n      同义词: 観念\n    ',
  },
  {
    question: '鑑賞',
    answer: 'kanshō',
    explantion: '\n      汉字: 鑑賞\n      读音: かんしょう\n      意思: appreciation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '間も無く',
    answer: 'mamonaku',
    explantion: '\n      汉字: 間も無く\n      读音: まもなく\n      意思: soon\n      来源: before long\n      同义词: 間も無く, , 間もなく\n    ',
  },
  {
    question: '間隔',
    answer: 'kankaku',
    explantion: '\n      汉字: 間隔\n      读音: かんかく\n      意思: space\n      来源: interval\n      同义词: 間隔\n    ',
  },
  {
    question: '間接',
    answer: 'kansetsu',
    explantion: '\n      汉字: 間接\n      读音: かんせつ\n      意思: indirection\n      来源: indirectness\n      同义词: 間接\n    ',
  },
  {
    question: '関西',
    answer: 'kansai',
    explantion: '\n      汉字: 関西\n      读音: かんさい\n      意思: \n      来源: waller\n      同义词: 関西, 関西\n    ',
  },
  {
    question: '関東',
    answer: 'kantō',
    explantion: '\n      汉字: 関東\n      读音: かんとう\n      意思: eastern half of Japan\n      来源:  including Tokyo\n      同义词: 関東\n    ',
  },
  {
    question: '含める',
    answer: 'fukumeru',
    explantion: '\n      汉字: 含める\n      读音: ふくめる\n      意思: to include\n      来源: to instruct\n      同义词: 含める\n    ',
  },
  {
    question: '危うい',
    answer: 'ayaui',
    explantion: '\n      汉字: 危うい\n      读音: あやうい\n      意思: dangerous\n      来源: critical\n      同义词: 危うい\n    ',
  },
  {
    question: '慶ぶ',
    answer: 'yorokobu',
    explantion: '\n      汉字: 慶ぶ\n      读音: よろこぶ\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '器具',
    answer: 'kigu',
    explantion: '\n      汉字: 器具\n      读音: きぐ\n      意思: utensil\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '基礎',
    answer: 'kiso',
    explantion: '\n      汉字: 基礎\n      读音: きそ\n      意思: foundation\n      来源: basis\n      同义词: 基礎\n    ',
  },
  {
    question: '基地',
    answer: 'kichi',
    explantion: '\n      汉字: 基地\n      读音: きち\n      意思: base\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '基盤',
    answer: 'kiban',
    explantion: '\n      汉字: 基盤\n      读音: きばん\n      意思: foundation\n      来源: basis\n      同义词: 基盤\n    ',
  },
  {
    question: '寄せる',
    answer: 'yoseru',
    explantion: '\n      汉字: 寄せる\n      读音: よせる\n      意思: to collect\n      来源: to gather\n      同义词: 寄せる\n    ',
  },
  {
    question: '幾分',
    answer: 'ikubun',
    explantion: '\n      汉字: 幾分\n      读音: いくぶん\n      意思: somewhat\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '期限',
    answer: 'kigen',
    explantion: '\n      汉字: 期限\n      读音: きげん\n      意思: term\n      来源: period\n      同义词: 期限\n    ',
  },
  {
    question: '器械',
    answer: 'kikai',
    explantion: '\n      汉字: 器械\n      读音: きかい\n      意思: instrument\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '機関車',
    answer: 'kikansha',
    explantion: '\n      汉字: 機関車\n      读音: きかんしゃ\n      意思: locomotive\n      来源: engine\n      同义词: 機関車\n    ',
  },
  {
    question: '帰す',
    answer: 'kisu',
    explantion: '\n      汉字: 帰す\n      读音: かえす\n      意思: to send back\n      来源: waller\n      同义词: 還す\n    ',
  },
  {
    question: '気圧',
    answer: 'kiatsu',
    explantion: '\n      汉字: 気圧\n      读音: きあつ\n      意思: atmospheric pressure\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '気体',
    answer: 'kitai',
    explantion: '\n      汉字: 気体\n      读音: きたい\n      意思: vapour\n      来源: gas\n      同义词: 気体\n    ',
  },
  {
    question: '気配',
    answer: 'kehai',
    explantion: '\n      汉字: 気配\n      读音: けはい\n      意思: indication\n      来源: market trend\n      同义词: 気配, 気配\n    ',
  },
  {
    question: '規律',
    answer: 'kiritsu',
    explantion: '\n      汉字: 規律\n      读音: きりつ\n      意思: order\n      来源: rules\n      同义词: 規律, 紀律\n    ',
  },
  {
    question: '記号',
    answer: 'kigō',
    explantion: '\n      汉字: 記号\n      读音: きごう\n      意思: symbol\n      来源: code\n      同义词: 記号\n    ',
  },
  {
    question: '起床',
    answer: 'kishō',
    explantion: '\n      汉字: 起床\n      读音: きしょう\n      意思: rising\n      来源: getting out of bed\n      同义词: 起床\n    ',
  },
  {
    question: '飢える',
    answer: 'ueru',
    explantion: '\n      汉字: 飢える\n      读音: うえる\n      意思: to starve\n      来源: waller\n      同义词: 飢える, 餓える, 餓える, 饑える\n    ',
  },
  {
    question: '儀式',
    answer: 'gishiki',
    explantion: '\n      汉字: 儀式\n      读音: ぎしき\n      意思: ceremony\n      来源: rite\n      同义词: 儀式\n    ',
  },
  {
    question: '詰まる',
    answer: 'tsumaru',
    explantion: '\n      汉字: 詰まる\n      读音: つまる\n      意思: to be blocked\n      来源: to be packed\n      同义词: 詰まる\n    ',
  },
  {
    question: '却って',
    answer: 'kaette',
    explantion: '\n      汉字: 却って\n      读音: かえって\n      意思: on the contrary\n      来源: rather\n      同义词: 却って, \n    ',
  },
  {
    question: '客間',
    answer: 'kyakuma',
    explantion: '\n      汉字: 客間\n      读音: きゃくま\n      意思: parlor\n      来源: guest room\n      同义词: 客間\n    ',
  },
  {
    question: '客席',
    answer: 'kyakuseki',
    explantion: '\n      汉字: 客席\n      读音: きゃくせき\n      意思: guest seating\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '逆さ',
    answer: 'sakasa',
    explantion: '\n      汉字: 逆さ\n      读音: さかさ\n      意思: reverse\n      来源: inversion\n      同义词: 逆さ, 倒さ\n    ',
  },
  {
    question: '休業',
    answer: 'kyūgyō',
    explantion: '\n      汉字: 休業\n      读音: きゅうぎょう\n      意思: closed (e.g. store)\n      来源: business suspended\n      同义词: 休業\n    ',
  },
  {
    question: '休講',
    answer: 'kyūkō',
    explantion: '\n      汉字: 休講\n      读音: きゅうこう\n      意思: lecture cancelled\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '休息',
    answer: 'kyūsoku',
    explantion: '\n      汉字: 休息\n      读音: きゅうそく\n      意思: rest\n      来源: relief\n      同义词: 休息, 休足\n    ',
  },
  {
    question: '休養',
    answer: 'kyūyō',
    explantion: '\n      汉字: 休養\n      读音: きゅうよう\n      意思: rest\n      来源: break\n      同义词: 休養\n    ',
  },
  {
    question: '汲む',
    answer: 'kumu',
    explantion: '\n      汉字: 汲む\n      读音: くむ\n      意思: (1) to draw (water)\n      来源: to dip\n      同义词: 汲む\n    ',
  },
  {
    question: '給与',
    answer: 'kyūyo',
    explantion: '\n      汉字: 給与\n      读音: きゅうよ\n      意思: allowance\n      来源: grant\n      同义词: 給与\n    ',
  },
  {
    question: '漁業',
    answer: 'gyogyō',
    explantion: '\n      汉字: 漁業\n      读音: ぎょぎょう\n      意思: fishing (industry)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '漁師',
    answer: 'ryōshi',
    explantion: '\n      汉字: 漁師\n      读音: りょうし\n      意思: fisherman\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '競馬',
    answer: 'keiba',
    explantion: '\n      汉字: 競馬\n      读音: けいば\n      意思: horse racing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '境界',
    answer: 'kyōkai',
    explantion: '\n      汉字: 境界\n      读音: きょうかい\n      意思: boundary\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '強引',
    answer: 'gōin',
    explantion: '\n      汉字: 強引\n      读音: ごういん\n      意思: overbearing\n      来源: coercive\n      同义词: 強引\n    ',
  },
  {
    question: '強化',
    answer: 'kyōka',
    explantion: '\n      汉字: 強化\n      读音: きょうか\n      意思: strengthen\n      来源: intensify\n      同义词: 強化\n    ',
  },
  {
    question: '強気',
    answer: 'tsuyoki',
    explantion: '\n      汉字: 強気\n      读音: つよき\n      意思: firm\n      来源: strong\n      同义词: 強気, 強き\n    ',
  },
  {
    question: '恐縮',
    answer: 'kyōshuku',
    explantion: '\n      汉字: 恐縮\n      读音: きょうしゅく\n      意思: shame\n      来源: very kind of you\n      同义词: 恐縮\n    ',
  },
  {
    question: '挟まる',
    answer: 'hasamaru',
    explantion: '\n      汉字: 挟まる\n      读音: はさまる\n      意思: to get between\n      来源: to be caught in\n      同义词: 挟まる\n    ',
  },
  {
    question: '教わる',
    answer: 'osowaru',
    explantion: '\n      汉字: 教わる\n      读音: おそわる\n      意思: to be taught\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '教養',
    answer: 'kyōyō',
    explantion: '\n      汉字: 教養\n      读音: きょうよう\n      意思: culture\n      来源: education\n      同义词: 教養\n    ',
  },
  {
    question: '蕎麦',
    answer: 'soba',
    explantion: '\n      汉字: 蕎麦\n      读音: そば\n      意思: soba (buckwheat noodles)\n      来源: waller\n      同义词: , , 蕎麦, , 蕎麦\n    ',
  },
  {
    question: '響く',
    answer: 'hibiku',
    explantion: '\n      汉字: 響く\n      读音: ひびく\n      意思: to resound\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '驚かす',
    answer: 'odorokasu',
    explantion: '\n      汉字: 驚かす\n      读音: おどろかす\n      意思: to surprise\n      来源: to frighten\n      同义词: 驚かす\n    ',
  },
  {
    question: '曲げる',
    answer: 'mageru',
    explantion: '\n      汉字: 曲げる\n      读音: まげる\n      意思: to bend\n      来源: to crook\n      同义词: 曲げる, 枉げる\n    ',
  },
  {
    question: '曲線',
    answer: 'kyokusen',
    explantion: '\n      汉字: 曲線\n      读音: きょくせん\n      意思: curve\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '努める',
    answer: 'tsutomeru',
    explantion: '\n      汉字: 努める\n      读音: つとめる\n      意思: (1) to serve\n      来源: to fill a post\n      同义词: 努める, 勉める, 力める\n    ',
  },
  {
    question: '務める',
    answer: 'tsutomeru',
    explantion: '\n      汉字: 務める\n      读音: つとめる\n      意思: (1) to serve\n      来源: to fill a post\n      同义词: 務める\n    ',
  },
  {
    question: '琴',
    answer: 'kin',
    explantion: '\n      汉字: 琴\n      读音: こと\n      意思: Koto (Japanese harp)\n      来源: waller\n      同义词: 箏, 箏, 筝, 筝\n    ',
  },
  {
    question: '近寄る',
    answer: 'chikayoru',
    explantion: '\n      汉字: 近寄る\n      读音: ちかよる\n      意思: to approach\n      来源: to draw near\n      同义词: 近寄る, 近よる\n    ',
  },
  {
    question: '近付ける',
    answer: 'chikazukeru',
    explantion: '\n      汉字: 近付ける\n      读音: ちかづける\n      意思: to bring near\n      来源: to put close\n      同义词: 近付ける, 近づける\n    ',
  },
  {
    question: '金魚',
    answer: 'kingyo',
    explantion: '\n      汉字: 金魚\n      读音: きんぎょ\n      意思: goldfish\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '句読点',
    answer: 'kutōten',
    explantion: '\n      汉字: 句読点\n      读音: くとうてん\n      意思: punctuation marks\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '区域',
    answer: 'kuiki',
    explantion: '\n      汉字: 区域\n      读音: くいき\n      意思: limits\n      来源: boundary\n      同义词: 区域\n    ',
  },
  {
    question: '区分',
    answer: 'kubun',
    explantion: '\n      汉字: 区分\n      读音: くぶん\n      意思: division\n      来源: section\n      同义词: 区分\n    ',
  },
  {
    question: '苦情',
    answer: 'kujō',
    explantion: '\n      汉字: 苦情\n      读音: くじょう\n      意思: complaint\n      来源: troubles\n      同义词: 苦情\n    ',
  },
  {
    question: '苦心',
    answer: 'kushin',
    explantion: '\n      汉字: 苦心\n      读音: くしん\n      意思: pain\n      来源: trouble\n      同义词: 苦心\n    ',
  },
  {
    question: '具える',
    answer: 'sonaeru',
    explantion: '\n      汉字: 具える\n      读音: そなえる\n      意思: to be furnished with\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '空っぽ',
    answer: 'karappo',
    explantion: '\n      汉字: 空っぽ\n      读音: からっぽ\n      意思: empty\n      来源: vacant\n      同义词: 空っぽ\n    ',
  },
  {
    question: '空想',
    answer: 'kūsō',
    explantion: '\n      汉字: 空想\n      读音: くうそう\n      意思: daydream\n      来源: fantasy\n      同义词: 空想\n    ',
  },
  {
    question: '空中',
    answer: 'kūchū',
    explantion: '\n      汉字: 空中\n      读音: くうちゅう\n      意思: sky\n      来源: air\n      同义词: 空中\n    ',
  },
  {
    question: '偶数',
    answer: 'gūsū',
    explantion: '\n      汉字: 偶数\n      读音: ぐうすう\n      意思: even number\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '櫛',
    answer: 'kushi',
    explantion: '\n      汉字: 櫛\n      读音: くし\n      意思: comb\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '屑',
    answer: 'kuzu',
    explantion: '\n      汉字: 屑\n      读音: くず\n      意思: waste\n      来源: scrap\n      同义词: 屑, , \n    ',
  },
  {
    question: '掘る',
    answer: 'horu',
    explantion: '\n      汉字: 掘る\n      读音: ほる\n      意思: to dig\n      来源: to excavate\n      同义词: 掘る\n    ',
  },
  {
    question: '群れ',
    answer: 'mure',
    explantion: '\n      汉字: 群れ\n      读音: むれ\n      意思: group\n      来源: crowd\n      同义词: 群れ\n    ',
  },
  {
    question: '郡',
    answer: 'gun',
    explantion: '\n      汉字: 郡\n      读音: ぐん\n      意思: country\n      来源: district\n      同义词: 郡, 郡\n    ',
  },
  {
    question: '形式',
    answer: 'keishiki',
    explantion: '\n      汉字: 形式\n      读音: けいしき\n      意思: form\n      来源: formality\n      同义词: 形式\n    ',
  },
  {
    question: '形容詞',
    answer: 'keiyōshi',
    explantion: '\n      汉字: 形容詞\n      读音: けいようし\n      意思: true adjective\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '形容動詞',
    answer: 'keiyōdōshi',
    explantion: '\n      汉字: 形容動詞\n      读音: けいようどうし\n      意思: adjectival noun\n      来源: quasi-adjective\n      同义词: 形容動詞\n    ',
  },
  {
    question: '敬う',
    answer: 'uyamau',
    explantion: '\n      汉字: 敬う\n      读音: うやまう\n      意思: to show respect\n      来源: to honour\n      同义词: 敬う\n    ',
  },
  {
    question: '敬語',
    answer: 'keigo',
    explantion: '\n      汉字: 敬語\n      读音: けいご\n      意思: honorific\n      来源: term of respect\n      同义词: 敬語\n    ',
  },
  {
    question: '稽古',
    answer: 'keiko',
    explantion: '\n      汉字: 稽古\n      读音: けいこ\n      意思: practice\n      来源: training\n      同义词: 稽古\n    ',
  },
  {
    question: '系統',
    answer: 'keitō',
    explantion: '\n      汉字: 系統\n      读音: けいとう\n      意思: system\n      来源: family line\n      同义词: 系統\n    ',
  },
  {
    question: '経度',
    answer: 'keido',
    explantion: '\n      汉字: 経度\n      读音: けいど\n      意思: longitude\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '継続',
    answer: 'keizoku',
    explantion: '\n      汉字: 継続\n      读音: けいぞく\n      意思: continuation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '繋がり',
    answer: 'tsunagari',
    explantion: '\n      汉字: 繋がり\n      读音: つながり\n      意思: connection\n      来源: link\n      同义词: 繋がり, \n    ',
  },
  {
    question: '繋がる',
    answer: 'tsunagaru',
    explantion: '\n      汉字: 繋がる\n      读音: つながる\n      意思: to be tied together\n      来源: to be connected to\n      同义词: 繋がる, , 繫がる, 接続る\n    ',
  },
  {
    question: '繋げる',
    answer: 'tsunageru',
    explantion: '\n      汉字: 繋げる\n      读音: つなげる\n      意思: to connect\n      来源: waller\n      同义词: , 繫げる\n    ',
  },
  {
    question: '警備',
    answer: 'keibi',
    explantion: '\n      汉字: 警備\n      读音: けいび\n      意思: defense\n      来源: guard\n      同义词: 警備\n    ',
  },
  {
    question: '芸能',
    answer: 'geinō',
    explantion: '\n      汉字: 芸能\n      读音: げいのう\n      意思: public entertainment\n      来源: accomplishments\n      同义词: 芸能\n    ',
  },
  {
    question: '討つ',
    answer: 'utsu',
    explantion: '\n      汉字: 討つ\n      读音: うつ\n      意思: to attack\n      来源: to avenge\n      同义词: 討つ\n    ',
  },
  {
    question: '激増',
    answer: 'gekizō',
    explantion: '\n      汉字: 激増\n      读音: げきぞう\n      意思: sudden increase\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '隙間',
    answer: 'sukima',
    explantion: '\n      汉字: 隙間\n      读音: すきま\n      意思: crevice\n      来源: crack\n      同义词: 隙間, すき間, 透き間, 透間, 隙き間\n    ',
  },
  {
    question: '桁',
    answer: 'keta',
    explantion: '\n      汉字: 桁\n      读音: けた\n      意思: column\n      来源: beam\n      同义词: 桁\n    ',
  },
  {
    question: '傑作',
    answer: 'kessaku',
    explantion: '\n      汉字: 傑作\n      读音: けっさく\n      意思: masterpiece\n      来源: best work\n      同义词: 傑作\n    ',
  },
  {
    question: '欠伸',
    answer: 'akubi',
    explantion: '\n      汉字: 欠伸\n      读音: あくび\n      意思: yawn\n      来源: waller\n      同义词: , , 欠伸, 欠\n    ',
  },
  {
    question: '血圧',
    answer: 'ketsuatsu',
    explantion: '\n      汉字: 血圧\n      读音: けつあつ\n      意思: blood pressure\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '血液',
    answer: 'ketsueki',
    explantion: '\n      汉字: 血液\n      读音: けつえき\n      意思: blood\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '月給',
    answer: 'gekkyū',
    explantion: '\n      汉字: 月給\n      读音: げっきゅう\n      意思: monthly salary\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '月日',
    answer: 'tsukihi',
    explantion: '\n      汉字: 月日\n      读音: つきひ\n      意思: time\n      来源: years\n      同义词: 月日\n    ',
  },
  {
    question: '月末',
    answer: 'getsumatsu',
    explantion: '\n      汉字: 月末\n      读音: げつまつ\n      意思: end of the month\n      来源: waller\n      同义词: 月末\n    ',
  },
  {
    question: '兼ねる',
    answer: 'kaneru',
    explantion: '\n      汉字: 兼ねる\n      读音: かねる\n      意思: to hold (position)\n      来源: to serve\n      同义词: 兼ねる, \n    ',
  },
  {
    question: '献立',
    answer: 'kondate',
    explantion: '\n      汉字: 献立\n      读音: こんだて\n      意思: menu\n      来源: program\n      同义词: 献立\n    ',
  },
  {
    question: '研修',
    answer: 'kenshū',
    explantion: '\n      汉字: 研修\n      读音: けんしゅう\n      意思: training\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '県庁',
    answer: 'kenchō',
    explantion: '\n      汉字: 県庁\n      读音: けんちょう\n      意思: prefectural office\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '見下ろす',
    answer: 'miorosu',
    explantion: '\n      汉字: 見下ろす\n      读音: みおろす\n      意思: to overlook\n      来源: to command a view of\n      同义词: 見下ろす, 見おろす\n    ',
  },
  {
    question: '見学',
    answer: 'kengaku',
    explantion: '\n      汉字: 見学\n      读音: けんがく\n      意思: inspection\n      来源: study by observation\n      同义词: 見学\n    ',
  },
  {
    question: '見出し',
    answer: 'midashi',
    explantion: '\n      汉字: 見出し\n      读音: みだし\n      意思: heading\n      来源: caption\n      同义词: 見出し\n    ',
  },
  {
    question: '見送る',
    answer: 'miokuru',
    explantion: '\n      汉字: 見送る\n      读音: みおくる\n      意思: (1) to see off\n      来源: to farewell\n      同义词: 見送る\n    ',
  },
  {
    question: '見直す',
    answer: 'minaosu',
    explantion: '\n      汉字: 見直す\n      读音: みなおす\n      意思: to look again\n      来源: to get a better opinion of\n      同义词: 見直す, 見なおす\n    ',
  },
  {
    question: '見舞う',
    answer: 'mimau',
    explantion: '\n      汉字: 見舞う\n      读音: みまう\n      意思: to ask after (health)\n      来源: to visit\n      同义词: 見舞う\n    ',
  },
  {
    question: '見本',
    answer: 'mihon',
    explantion: '\n      汉字: 見本\n      读音: みほん\n      意思: sample\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '謙虚',
    answer: 'kenkyo',
    explantion: '\n      汉字: 謙虚\n      读音: けんきょ\n      意思: modesty\n      来源: humility\n      同义词: 謙虚\n    ',
  },
  {
    question: '謙遜',
    answer: 'kenson',
    explantion: '\n      汉字: 謙遜\n      读音: けんそん\n      意思: humble\n      来源: humility\n      同义词: 謙遜, 謙そん\n    ',
  },
  {
    question: '険しい',
    answer: 'kewashii',
    explantion: '\n      汉字: 険しい\n      读音: けわしい\n      意思: inaccessible place\n      来源: sharp eyes\n      同义词: 険しい, 嶮しい\n    ',
  },
  {
    question: '顕微鏡',
    answer: 'kembikyō',
    explantion: '\n      汉字: 顕微鏡\n      读音: けんびきょう\n      意思: microscope\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '原稿',
    answer: 'genkō',
    explantion: '\n      汉字: 原稿\n      读音: げんこう\n      意思: manuscript\n      来源: copy\n      同义词: 原稿\n    ',
  },
  {
    question: '原産',
    answer: 'gensan',
    explantion: '\n      汉字: 原産\n      读音: げんさん\n      意思: place of origin\n      来源: habitat\n      同义词: 原産\n    ',
  },
  {
    question: '原始',
    answer: 'genshi',
    explantion: '\n      汉字: 原始\n      读音: げんし\n      意思: origin\n      来源: primeval\n      同义词: 原始\n    ',
  },
  {
    question: '原理',
    answer: 'genri',
    explantion: '\n      汉字: 原理\n      读音: げんり\n      意思: principle\n      来源: theory\n      同义词: 原理\n    ',
  },
  {
    question: '原料',
    answer: 'genryō',
    explantion: '\n      汉字: 原料\n      读音: げんりょう\n      意思: raw materials\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '厳重',
    answer: 'genjū',
    explantion: '\n      汉字: 厳重\n      读音: げんじゅう\n      意思: strict\n      来源: rigour\n      同义词: 厳重, 厳重, 厳重\n    ',
  },
  {
    question: '現に',
    answer: 'genni',
    explantion: '\n      汉字: 現に\n      读音: げんに\n      意思: actually\n      来源: really\n      同义词: 現に\n    ',
  },
  {
    question: '言い出す',
    answer: 'īdasu',
    explantion: '\n      汉字: 言い出す\n      读音: いいだす\n      意思: to start talking\n      来源: to speak\n      同义词: 言い出す, 言いだす, 言出す\n    ',
  },
  {
    question: '言い付ける',
    answer: 'ītsukeru',
    explantion: '\n      汉字: 言い付ける\n      读音: いいつける\n      意思: to tell\n      来源: to tell on (someone)\n      同义词: 言い付ける, 言いつける, 言付ける\n    ',
  },
  {
    question: '言葉遣い',
    answer: 'kotobazukai',
    explantion: '\n      汉字: 言葉遣い\n      读音: ことばづかい\n      意思: speech\n      来源: expression\n      同义词: 言葉遣い, 言葉使い, 言葉づかい\n    ',
  },
  {
    question: '限度',
    answer: 'gendo',
    explantion: '\n      汉字: 限度\n      读音: げんど\n      意思: limit\n      来源: bounds\n      同义词: 限度\n    ',
  },
  {
    question: '個体',
    answer: 'kotai',
    explantion: '\n      汉字: 個体\n      读音: こたい\n      意思: an individual\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '古典',
    answer: 'koten',
    explantion: '\n      汉字: 古典\n      读音: こてん\n      意思: old book\n      来源: classics\n      同义词: 古典\n    ',
  },
  {
    question: '呼び掛ける',
    answer: 'yobikakeru',
    explantion: '\n      汉字: 呼び掛ける\n      读音: よびかける\n      意思: to call out to\n      来源: to accost\n      同义词: 呼び掛ける, 呼びかける, 呼掛ける\n    ',
  },
  {
    question: '呼び出す',
    answer: 'yobidasu',
    explantion: '\n      汉字: 呼び出す\n      读音: よびだす\n      意思: to summon\n      来源: to call (e.g. phone)\n      同义词: 呼び出す, 呼びだす, 呼出す, 喚び出す\n    ',
  },
  {
    question: '固まる',
    answer: 'katamaru',
    explantion: '\n      汉字: 固まる\n      读音: かたまる\n      意思: to harden\n      来源: to solidify\n      同义词: 固まる\n    ',
  },
  {
    question: '戸棚',
    answer: 'todana',
    explantion: '\n      汉字: 戸棚\n      读音: とだな\n      意思: cupboard\n      来源: locker\n      同义词: 戸棚\n    ',
  },
  {
    question: '枯れる',
    answer: 'kareru',
    explantion: '\n      汉字: 枯れる\n      读音: かれる\n      意思: to wither\n      来源: to die (plant)\n      同义词: 枯れる\n    ',
  },
  {
    question: '糊',
    answer: 'nori',
    explantion: '\n      汉字: 糊\n      读音: のり\n      意思: paste\n      来源: starch\n      同义词: 糊\n    ',
  },
  {
    question: '胡椒',
    answer: 'koshō',
    explantion: '\n      汉字: 胡椒\n      读音: こしょう\n      意思: pepper\n      来源: waller\n      同义词: , , \n    ',
  },
  {
    question: '五十音',
    answer: 'gojūon',
    explantion: '\n      汉字: 五十音\n      读音: ごじゅうおん\n      意思: the Japanese syllabary\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '娯楽',
    answer: 'goraku',
    explantion: '\n      汉字: 娯楽\n      读音: ごらく\n      意思: pleasure\n      来源: amusement\n      同义词: 娯楽\n    ',
  },
  {
    question: '後輩',
    answer: 'kōhai',
    explantion: '\n      汉字: 後輩\n      读音: こうはい\n      意思: junior (at work or school)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '御中',
    answer: 'onchū',
    explantion: '\n      汉字: 御中\n      读音: おんちゅう\n      意思: and Company\n      来源: Messrs.\n      同义词: 御中\n    ',
  },
  {
    question: '御無沙汰',
    answer: 'gobusata',
    explantion: '\n      汉字: 御無沙汰\n      读音: ごぶさた\n      意思: not writing or contacting for a while\n      来源: waller\n      同义词: ご無沙汰, ご不沙汰, 御不沙汰\n    ',
  },
  {
    question: '御免',
    answer: 'gomen',
    explantion: '\n      汉字: 御免\n      读音: ごめん\n      意思: your pardon\n      来源: declining (something)\n      同义词: 御免, , ご免, \n    ',
  },
  {
    question: '御覧',
    answer: 'goran',
    explantion: '\n      汉字: 御覧\n      读音: ごらん\n      意思: (hon) look\n      来源: inspection\n      同义词: 御覧, , ご覧\n    ',
  },
  {
    question: '碁',
    answer: 'go',
    explantion: '\n      汉字: 碁\n      读音: ご\n      意思: Go (board game of capturing territory)\n      来源: waller\n      同义词: 棊, 棋\n    ',
  },
  {
    question: '交差',
    answer: 'kōsa',
    explantion: '\n      汉字: 交差\n      读音: こうさ\n      意思: cross\n      来源: waller\n      同义词: 交叉\n    ',
  },
  {
    question: '交通機関',
    answer: 'kōtsūkikan',
    explantion: '\n      汉字: 交通機関\n      读音: こうつうきかん\n      意思: transportation facilities\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '交流',
    answer: 'kōryū',
    explantion: '\n      汉字: 交流\n      读音: こうりゅう\n      意思: alternating current\n      来源: intercourse\n      同义词: 交流\n    ',
  },
  {
    question: '光線',
    answer: 'kōsen',
    explantion: '\n      汉字: 光線\n      读音: こうせん\n      意思: beam\n      来源: light ray\n      同义词: 光線\n    ',
  },
  {
    question: '公害',
    answer: 'kōgai',
    explantion: '\n      汉字: 公害\n      读音: こうがい\n      意思: public nuisance\n      来源: pollution\n      同义词: 公害\n    ',
  },
  {
    question: '公共',
    answer: 'kōkyō',
    explantion: '\n      汉字: 公共\n      读音: こうきょう\n      意思: public\n      来源: community\n      同义词: 公共\n    ',
  },
  {
    question: '公式',
    answer: 'kōshiki',
    explantion: '\n      汉字: 公式\n      读音: こうしき\n      意思: formula\n      来源: formality\n      同义词: 公式\n    ',
  },
  {
    question: '公衆',
    answer: 'kōshū',
    explantion: '\n      汉字: 公衆\n      读音: こうしゅう\n      意思: the public\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '公正',
    answer: 'kōsei',
    explantion: '\n      汉字: 公正\n      读音: こうせい\n      意思: justice\n      来源: fairness\n      同义词: 公正\n    ',
  },
  {
    question: '公表',
    answer: 'kōhyō',
    explantion: '\n      汉字: 公表\n      读音: こうひょう\n      意思: official announcement\n      来源: proclamation\n      同义词: 公表\n    ',
  },
  {
    question: '公務',
    answer: 'kōmu',
    explantion: '\n      汉字: 公務\n      读音: こうむ\n      意思: official business\n      来源: public business\n      同义词: 公務\n    ',
  },
  {
    question: '功績',
    answer: 'kōseki',
    explantion: '\n      汉字: 功績\n      读音: こうせき\n      意思: achievements\n      来源: merit\n      同义词: 功績\n    ',
  },
  {
    question: '効力',
    answer: 'kōryoku',
    explantion: '\n      汉字: 効力\n      读音: こうりょく\n      意思: effect\n      来源: efficacy\n      同义词: 効力\n    ',
  },
  {
    question: '厚かましい',
    answer: 'atsukamashii',
    explantion: '\n      汉字: 厚かましい\n      读音: あつかましい\n      意思: impudent\n      来源: shameless\n      同义词: 厚かましい\n    ',
  },
  {
    question: '口紅',
    answer: 'kuchibeni',
    explantion: '\n      汉字: 口紅\n      读音: くちべに\n      意思: lipstick\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '口実',
    answer: 'kōjitsu',
    explantion: '\n      汉字: 口実\n      读音: こうじつ\n      意思: excuse\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '好き嫌い',
    answer: 'sukikirai',
    explantion: '\n      汉字: 好き嫌い\n      读音: すききらい\n      意思: likes and dislikes\n      来源: taste\n      同义词: 好き嫌い\n    ',
  },
  {
    question: '孝行',
    answer: 'kōkō',
    explantion: '\n      汉字: 孝行\n      读音: こうこう\n      意思: filial piety\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '工員',
    answer: 'kōin',
    explantion: '\n      汉字: 工員\n      读音: こういん\n      意思: factory worker\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '工芸',
    answer: 'kōgei',
    explantion: '\n      汉字: 工芸\n      读音: こうげい\n      意思: industrial arts\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '工事',
    answer: 'kōji',
    explantion: '\n      汉字: 工事\n      读音: こうじ\n      意思: construction work\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '工夫',
    answer: 'kufū',
    explantion: '\n      汉字: 工夫\n      读音: くふう\n      意思: labourer\n      来源: worker\n      同义词: 工夫, 功夫\n    ',
  },
  {
    question: '広さ',
    answer: 'hirosa',
    explantion: '\n      汉字: 広さ\n      读音: ひろさ\n      意思: extent\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '広める',
    answer: 'hiromeru',
    explantion: '\n      汉字: 広める\n      读音: ひろめる\n      意思: to broaden\n      来源: to propagate\n      同义词: 広める, 弘める\n    ',
  },
  {
    question: '広場',
    answer: 'hiroba',
    explantion: '\n      汉字: 広場\n      读音: ひろば\n      意思: plaza\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '攻める',
    answer: 'semeru',
    explantion: '\n      汉字: 攻める\n      读音: せめる\n      意思: to attack\n      来源: to assault\n      同义词: 攻める\n    ',
  },
  {
    question: '更ける',
    answer: 'fukeru',
    explantion: '\n      汉字: 更ける\n      读音: ふける\n      意思: to get late\n      来源: to advance\n      同义词: 更ける, 深ける\n    ',
  },
  {
    question: '校舎',
    answer: 'kōsha',
    explantion: '\n      汉字: 校舎\n      读音: こうしゃ\n      意思: school building\n      来源: waller\n      同义词: 校しゃ\n    ',
  },
  {
    question: '校庭',
    answer: 'kōtei',
    explantion: '\n      汉字: 校庭\n      读音: こうてい\n      意思: campus\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '構造',
    answer: 'kōzō',
    explantion: '\n      汉字: 構造\n      读音: こうぞう\n      意思: structure\n      来源: construction\n      同义词: 構造\n    ',
  },
  {
    question: '綱',
    answer: 'tsuna',
    explantion: '\n      汉字: 綱\n      读音: つな\n      意思: rope\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '耕す',
    answer: 'tagayasu',
    explantion: '\n      汉字: 耕す\n      读音: たがやす\n      意思: to till\n      来源: to plow\n      同义词: 耕す\n    ',
  },
  {
    question: '耕地',
    answer: 'kōchi',
    explantion: '\n      汉字: 耕地\n      读音: こうち\n      意思: arable land\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '肯定',
    answer: 'kōtei',
    explantion: '\n      汉字: 肯定\n      读音: こうてい\n      意思: positive\n      来源: affirmation\n      同义词: 肯定\n    ',
  },
  {
    question: '荒い',
    answer: 'arai',
    explantion: '\n      汉字: 荒い\n      读音: あらい\n      意思: rough\n      来源: rude\n      同义词: 荒い\n    ',
  },
  {
    question: '行事',
    answer: 'gyōji',
    explantion: '\n      汉字: 行事\n      读音: ぎょうじ\n      意思: event\n      来源: function\n      同义词: 行事\n    ',
  },
  {
    question: '行列',
    answer: 'gyōretsu',
    explantion: '\n      汉字: 行列\n      读音: ぎょうれつ\n      意思: (1) line\n      来源: procession\n      同义词: 行列\n    ',
  },
  {
    question: '講師',
    answer: 'kōshi',
    explantion: '\n      汉字: 講師\n      读音: こうし\n      意思: lecturer\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '鉱物',
    answer: 'kōbutsu',
    explantion: '\n      汉字: 鉱物\n      读音: こうぶつ\n      意思: mineral\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '項目',
    answer: 'kōmoku',
    explantion: '\n      汉字: 項目\n      读音: こうもく\n      意思: item\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '香水',
    answer: 'kōsui',
    explantion: '\n      汉字: 香水\n      读音: こうすい\n      意思: perfume\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '高める',
    answer: 'takameru',
    explantion: '\n      汉字: 高める\n      读音: たかめる\n      意思: to raise\n      来源: to lift\n      同义词: 高める\n    ',
  },
  {
    question: '高級',
    answer: 'kōkyū',
    explantion: '\n      汉字: 高級\n      读音: こうきゅう\n      意思: high class\n      来源: high grade\n      同义词: 高級\n    ',
  },
  {
    question: '高層',
    answer: 'kōsō',
    explantion: '\n      汉字: 高層\n      读音: こうそう\n      意思: upper\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '高度',
    answer: 'kōdo',
    explantion: '\n      汉字: 高度\n      读音: こうど\n      意思: altitude\n      来源: height\n      同义词: 高度\n    ',
  },
  {
    question: '高等',
    answer: 'kōtō',
    explantion: '\n      汉字: 高等\n      读音: こうとう\n      意思: high class\n      来源: high grade\n      同义词: 高等\n    ',
  },
  {
    question: '合同',
    answer: 'gōdō',
    explantion: '\n      汉字: 合同\n      读音: ごうどう\n      意思: combination\n      来源: incorporation\n      同义词: 合同\n    ',
  },
  {
    question: '合理',
    answer: 'gōri',
    explantion: '\n      汉字: 合理\n      读音: ごうり\n      意思: rational\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '合流',
    answer: 'gōryū',
    explantion: '\n      汉字: 合流\n      读音: ごうりゅう\n      意思: confluence\n      来源: union\n      同义词: 合流\n    ',
  },
  {
    question: '刻む',
    answer: 'kizamu',
    explantion: '\n      汉字: 刻む\n      读音: きざむ\n      意思: to mince\n      来源: to carve\n      同义词: 刻む\n    ',
  },
  {
    question: '国王',
    answer: 'kokuō',
    explantion: '\n      汉字: 国王\n      读音: こくおう\n      意思: king\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '国籍',
    answer: 'kokuseki',
    explantion: '\n      汉字: 国籍\n      读音: こくせき\n      意思: nationality\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '国立',
    answer: 'kokuritsu',
    explantion: '\n      汉字: 国立\n      读音: こくりつ\n      意思: national\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '腰掛ける',
    answer: 'koshikakeru',
    explantion: '\n      汉字: 腰掛ける\n      读音: こしかける\n      意思: to sit (down)\n      来源: waller\n      同义词: 腰かける, 腰掛る\n    ',
  },
  {
    question: '腰掛け',
    answer: 'koshikake',
    explantion: '\n      汉字: 腰掛け\n      读音: こしかけ\n      意思: seat\n      来源: bench\n      同义词: 腰掛け, 腰掛, 腰かけ\n    ',
  },
  {
    question: '恨み',
    answer: 'urami',
    explantion: '\n      汉字: 恨み\n      读音: うらみ\n      意思: resentment\n      来源: waller\n      同义词: 憾み, 怨み\n    ',
  },
  {
    question: '恨む',
    answer: 'uramu',
    explantion: '\n      汉字: 恨む\n      读音: うらむ\n      意思: to curse\n      来源: to feel bitter\n      同义词: 恨む, 怨む\n    ',
  },
  {
    question: '混ぜる',
    answer: 'mazeru',
    explantion: '\n      汉字: 混ぜる\n      读音: まぜる\n      意思: to mix\n      来源: to stir\n      同义词: 混ぜる, 雑ぜる, 交ぜる\n    ',
  },
  {
    question: '混合',
    answer: 'kongō',
    explantion: '\n      汉字: 混合\n      读音: こんごう\n      意思: mixing\n      来源: mixture\n      同义词: 混合\n    ',
  },
  {
    question: '紺',
    answer: 'kon',
    explantion: '\n      汉字: 紺\n      读音: こん\n      意思: navy blue\n      来源: deep blue\n      同义词: 紺\n    ',
  },
  {
    question: '差し引き',
    answer: 'sashihiki',
    explantion: '\n      汉字: 差し引き\n      读音: さしひき\n      意思: deduction\n      来源: subtraction\n      同义词: 差し引き, 差引き, 差引\n    ',
  },
  {
    question: '座布団',
    answer: 'zabuton',
    explantion: '\n      汉字: 座布団\n      读音: ざぶとん\n      意思: cushion (Japanese)\n      来源: waller\n      同义词: 座ぶとん, 座蒲団, 坐蒲団\n    ',
  },
  {
    question: '座敷',
    answer: 'zashiki',
    explantion: '\n      汉字: 座敷\n      读音: ざしき\n      意思: tatami room\n      来源: waller\n      同义词: 坐敷\n    ',
  },
  {
    question: '催し',
    answer: 'moyōshi',
    explantion: '\n      汉字: 催し\n      读音: もよおし\n      意思: event\n      来源: festivities\n      同义词: 催し\n    ',
  },
  {
    question: '催促',
    answer: 'saisoku',
    explantion: '\n      汉字: 催促\n      读音: さいそく\n      意思: request\n      来源: demand\n      同义词: 催促\n    ',
  },
  {
    question: '再三',
    answer: 'saisan',
    explantion: '\n      汉字: 再三\n      读音: さいさん\n      意思: again and again\n      来源: repeatedly\n      同义词: 再三\n    ',
  },
  {
    question: '再来月',
    answer: 'saraigetsu',
    explantion: '\n      汉字: 再来月\n      读音: さらいげつ\n      意思: month after next\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '再来週',
    answer: 'saraishū',
    explantion: '\n      汉字: 再来週\n      读音: さらいしゅう\n      意思: week after next\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '再来年',
    answer: 'sarainen',
    explantion: '\n      汉字: 再来年\n      读音: さらいねん\n      意思: year after next\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '採点',
    answer: 'saiten',
    explantion: '\n      汉字: 採点\n      读音: さいてん\n      意思: marking\n      来源: grading\n      同义词: 採点\n    ',
  },
  {
    question: '災難',
    answer: 'sainan',
    explantion: '\n      汉字: 災難\n      读音: さいなん\n      意思: calamity\n      来源: misfortune\n      同义词: 災難\n    ',
  },
  {
    question: '砕く',
    answer: 'kudaku',
    explantion: '\n      汉字: 砕く\n      读音: くだく\n      意思: to break\n      来源: to smash\n      同义词: 砕く, 摧く\n    ',
  },
  {
    question: '砕ける',
    answer: 'kudakeru',
    explantion: '\n      汉字: 砕ける\n      读音: くだける\n      意思: to break\n      来源: to be broken\n      同义词: 砕ける, 摧ける\n    ',
  },
  {
    question: '祭る',
    answer: 'matsuru',
    explantion: '\n      汉字: 祭る\n      读音: まつる\n      意思: to deify\n      来源: to enshrine\n      同义词: 祭る, 祀る\n    ',
  },
  {
    question: '祭日',
    answer: 'saijitsu',
    explantion: '\n      汉字: 祭日\n      读音: さいじつ\n      意思: national holiday\n      来源: festival day\n      同义词: 祭日\n    ',
  },
  {
    question: '裁縫',
    answer: 'saihō',
    explantion: '\n      汉字: 裁縫\n      读音: さいほう\n      意思: sewing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '在る',
    answer: 'aru',
    explantion: '\n      汉字: 在る\n      读音: ある\n      意思: to live\n      来源: to be\n      同义词: 在る\n    ',
  },
  {
    question: '在学',
    answer: 'zaigaku',
    explantion: '\n      汉字: 在学\n      读音: ざいがく\n      意思: (enrolled) in school\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '材木',
    answer: 'zaimoku',
    explantion: '\n      汉字: 材木\n      读音: ざいもく\n      意思: lumber\n      来源: timber\n      同义词: 材木\n    ',
  },
  {
    question: '作者',
    answer: 'sakusha',
    explantion: '\n      汉字: 作者\n      读音: さくしゃ\n      意思: author\n      来源: authoress\n      同义词: 作者\n    ',
  },
  {
    question: '作成',
    answer: 'sakusei',
    explantion: '\n      汉字: 作成\n      读音: さくせい\n      意思: frame\n      来源: draw up\n      同义词: 作成\n    ',
  },
  {
    question: '作製',
    answer: 'sakusei',
    explantion: '\n      汉字: 作製\n      读音: さくせい\n      意思: manufacture\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '削る',
    answer: 'kezuru',
    explantion: '\n      汉字: 削る\n      读音: けずる\n      意思: to cut down little by little\n      来源: to take a percentage\n      同义词: 削る\n    ',
  },
  {
    question: '削除',
    answer: 'sakujo',
    explantion: '\n      汉字: 削除\n      读音: さくじょ\n      意思: elimination\n      来源: cancellation\n      同义词: 削除\n    ',
  },
  {
    question: '索引',
    answer: 'sakuin',
    explantion: '\n      汉字: 索引\n      读音: さくいん\n      意思: index\n      来源: indices\n      同义词: 索引\n    ',
  },
  {
    question: '刷る',
    answer: 'suru',
    explantion: '\n      汉字: 刷る\n      读音: する\n      意思: to print\n      来源: waller\n      同义词: 摺る\n    ',
  },
  {
    question: '撮影',
    answer: 'satsuei',
    explantion: '\n      汉字: 撮影\n      读音: さつえい\n      意思: photographing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '擦る',
    answer: 'kosuru',
    explantion: '\n      汉字: 擦る\n      读音: こする\n      意思: to rub\n      来源: to chafe\n      同义词: 擦る, , 錯る\n    ',
  },
  {
    question: '雑音',
    answer: 'zatsuon',
    explantion: '\n      汉字: 雑音\n      读音: ざつおん\n      意思: noise (jarring\n      来源:  grating)\n      同义词: 雑音\n    ',
  },
  {
    question: '雑巾',
    answer: 'zōkin',
    explantion: '\n      汉字: 雑巾\n      读音: ぞうきん\n      意思: house-cloth\n      来源: dust cloth\n      同义词: 雑巾, 雑布\n    ',
  },
  {
    question: '錆びる',
    answer: 'sabiru',
    explantion: '\n      汉字: 錆びる\n      读音: さびる\n      意思: to rust\n      来源: to become rusty\n      同义词: 錆びる\n    ',
  },
  {
    question: '三角',
    answer: 'sankaku',
    explantion: '\n      汉字: 三角\n      读音: さんかく\n      意思: triangle\n      来源: triangular\n      同义词: 三角\n    ',
  },
  {
    question: '三日月',
    answer: 'mikazuki',
    explantion: '\n      汉字: 三日月\n      读音: みかづき\n      意思: new moon\n      来源: crescent moon\n      同义词: 三日月, 三日月\n    ',
  },
  {
    question: '山林',
    answer: 'sanrin',
    explantion: '\n      汉字: 山林\n      读音: さんりん\n      意思: mountain forest\n      来源: mountains and forest\n      同义词: 山林\n    ',
  },
  {
    question: '撒く',
    answer: 'maku',
    explantion: '\n      汉字: 撒く\n      读音: まく\n      意思: to scatter\n      来源: to sprinkle\n      同义词: 撒く, \n    ',
  },
  {
    question: '散らかす',
    answer: 'chirakasu',
    explantion: '\n      汉字: 散らかす\n      读音: ちらかす\n      意思: to scatter around\n      来源: to leave untidy\n      同义词: 散らかす\n    ',
  },
  {
    question: '散らかる',
    answer: 'chirakaru',
    explantion: '\n      汉字: 散らかる\n      读音: ちらかる\n      意思: to be in disorder\n      来源: to lie scattered around\n      同义词: 散らかる\n    ',
  },
  {
    question: '散らす',
    answer: 'chirasu',
    explantion: '\n      汉字: 散らす\n      读音: ちらす\n      意思: to scatter\n      来源: to disperse\n      同义词: 散らす\n    ',
  },
  {
    question: '散る',
    answer: 'chiru',
    explantion: '\n      汉字: 散る\n      读音: ちる\n      意思: to fall\n      来源: to scatter (e.g. blossoms)\n      同义词: 散る\n    ',
  },
  {
    question: '産地',
    answer: 'sanchi',
    explantion: '\n      汉字: 産地\n      读音: さんち\n      意思: producing area\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '算数',
    answer: 'sansū',
    explantion: '\n      汉字: 算数\n      读音: さんすう\n      意思: arithmetic\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '酸性',
    answer: 'sansei',
    explantion: '\n      汉字: 酸性\n      读音: さんせい\n      意思: acidity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '斬る',
    answer: 'kiru',
    explantion: '\n      汉字: 斬る\n      读音: きる\n      意思: (v5r) to behead\n      来源: to murder\n      同义词: 斬る\n    ',
  },
  {
    question: '仕上がる',
    answer: 'shiagaru',
    explantion: '\n      汉字: 仕上がる\n      读音: しあがる\n      意思: to be finished\n      来源: waller\n      同义词: 仕上る\n    ',
  },
  {
    question: '刺さる',
    answer: 'sasaru',
    explantion: '\n      汉字: 刺さる\n      读音: ささる\n      意思: to stick\n      来源: to be stuck\n      同义词: 刺さる\n    ',
  },
  {
    question: '刺す',
    answer: 'sasu',
    explantion: '\n      汉字: 刺す\n      读音: さす\n      意思: to pierce\n      来源: to stab\n      同义词: 刺す\n    ',
  },
  {
    question: '刺身',
    answer: 'sashimi',
    explantion: '\n      汉字: 刺身\n      读音: さしみ\n      意思: sliced raw fish\n      来源: waller\n      同义词: 刺し身\n    ',
  },
  {
    question: '司会',
    answer: 'shikai',
    explantion: '\n      汉字: 司会\n      读音: しかい\n      意思: chairmanship\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '四つ角',
    answer: 'yotsukado',
    explantion: '\n      汉字: 四つ角\n      读音: よつかど\n      意思: four corners\n      来源: crossroads\n      同义词: 四つ角\n    ',
  },
  {
    question: '四角',
    answer: 'shikaku',
    explantion: '\n      汉字: 四角\n      读音: しかく\n      意思: square\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '四角い',
    answer: 'shikakui',
    explantion: '\n      汉字: 四角い\n      读音: しかくい\n      意思: square\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '四季',
    answer: 'shiki',
    explantion: '\n      汉字: 四季\n      读音: しき\n      意思: four seasons\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '四捨五入',
    answer: 'shishagonyū',
    explantion: '\n      汉字: 四捨五入\n      读音: ししゃごにゅう\n      意思: rounding up (fractions)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '初めに',
    answer: 'hajimeni',
    explantion: '\n      汉字: 初めに\n      读音: はじめに\n      意思: to begin with\n      来源: waller\n      同义词: 始めに, \n    ',
  },
  {
    question: '始終',
    answer: 'shijū',
    explantion: '\n      汉字: 始終\n      读音: しじゅう\n      意思: continuously\n      来源: from beginning to end\n      同义词: 始終\n    ',
  },
  {
    question: '姿勢',
    answer: 'shisei',
    explantion: '\n      汉字: 姿勢\n      读音: しせい\n      意思: attitude\n      来源: posture\n      同义词: 姿勢\n    ',
  },
  {
    question: '子孫',
    answer: 'shison',
    explantion: '\n      汉字: 子孫\n      读音: しそん\n      意思: descendants\n      来源: posterity\n      同义词: 子孫\n    ',
  },
  {
    question: '思い込む',
    answer: 'omoikomu',
    explantion: '\n      汉字: 思い込む\n      读音: おもいこむ\n      意思: to be under impression that\n      来源: to be convinced that\n      同义词: 思い込む, 思いこむ\n    ',
  },
  {
    question: '思いっ切り',
    answer: 'omoikkiri',
    explantion: '\n      汉字: 思いっ切り\n      读音: おもいっきり\n      意思: \n      来源: waller\n      同义词: 思いっきり\n    ',
  },
  {
    question: '指定',
    answer: 'shitei',
    explantion: '\n      汉字: 指定\n      读音: してい\n      意思: designation\n      来源: specification\n      同义词: 指定\n    ',
  },
  {
    question: '留まる',
    answer: 'tomaru',
    explantion: '\n      汉字: 留まる\n      读音: とまる\n      意思: (1) to be fixed\n      来源: (2) to abide\n      同义词: 留まる\n    ',
  },
  {
    question: '死体',
    answer: 'shitai',
    explantion: '\n      汉字: 死体\n      读音: したい\n      意思: corpse\n      来源: waller\n      同义词: 屍体\n    ',
  },
  {
    question: '氏名',
    answer: 'shimei',
    explantion: '\n      汉字: 氏名\n      读音: しめい\n      意思: full name\n      来源: identity\n      同义词: 氏名, 氏名\n    ',
  },
  {
    question: '私鉄',
    answer: 'shitetsu',
    explantion: '\n      汉字: 私鉄\n      读音: してつ\n      意思: private railway\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '私立',
    answer: 'shiritsu',
    explantion: '\n      汉字: 私立\n      读音: しりつ\n      意思: private (establishment)\n      来源: waller\n      同义词: 私立\n    ',
  },
  {
    question: '紙幣',
    answer: 'shihei',
    explantion: '\n      汉字: 紙幣\n      读音: しへい\n      意思: paper money\n      来源: notes\n      同义词: 紙幣\n    ',
  },
  {
    question: '紫',
    answer: 'murasaki',
    explantion: '\n      汉字: 紫\n      读音: むらさき\n      意思: purple colour\n      来源: violet\n      同义词: 紫, \n    ',
  },
  {
    question: '脂',
    answer: 'abura',
    explantion: '\n      汉字: 脂\n      读音: あぶら\n      意思: fat\n      来源: tallow\n      同义词: 脂, 膏, 膩\n    ',
  },
  {
    question: '至急',
    answer: 'shikyū',
    explantion: '\n      汉字: 至急\n      读音: しきゅう\n      意思: urgent\n      来源: pressing\n      同义词: 至急\n    ',
  },
  {
    question: '資料',
    answer: 'shiryō',
    explantion: '\n      汉字: 資料\n      读音: しりょう\n      意思: materials\n      来源: data\n      同义词: 資料\n    ',
  },
  {
    question: '歯車',
    answer: 'haguruma',
    explantion: '\n      汉字: 歯車\n      读音: はぐるま\n      意思: gear\n      来源: cog-wheel\n      同义词: 歯車\n    ',
  },
  {
    question: '児童',
    answer: 'jidō',
    explantion: '\n      汉字: 児童\n      读音: じどう\n      意思: children\n      来源: juvenile\n      同义词: 児童\n    ',
  },
  {
    question: '寺院',
    answer: 'jiin',
    explantion: '\n      汉字: 寺院\n      读音: じいん\n      意思: temple\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '持参',
    answer: 'jisan',
    explantion: '\n      汉字: 持参\n      读音: じさん\n      意思: bringing\n      来源: taking\n      同义词: 持参\n    ',
  },
  {
    question: '時間割',
    answer: 'jikanwari',
    explantion: '\n      汉字: 時間割\n      读音: じかんわり\n      意思: timetable\n      来源: schedule\n      同义词: 時間割, 時間割り\n    ',
  },
  {
    question: '時速',
    answer: 'jisoku',
    explantion: '\n      汉字: 時速\n      读音: じそく\n      意思: speed (per hour)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '次ぐ',
    answer: 'tsugu',
    explantion: '\n      汉字: 次ぐ\n      读音: つぐ\n      意思: to rank next to\n      来源: to come after\n      同义词: 次ぐ, 亜ぐ\n    ',
  },
  {
    question: '治める',
    answer: 'osameru',
    explantion: '\n      汉字: 治める\n      读音: おさめる\n      意思: (1) to govern\n      来源: to manage\n      同义词: 治める\n    ',
  },
  {
    question: '磁石',
    answer: 'jishaku',
    explantion: '\n      汉字: 磁石\n      读音: じしゃく\n      意思: magnet\n      来源: waller\n      同义词: 磁石\n    ',
  },
  {
    question: '自衛',
    answer: 'jiei',
    explantion: '\n      汉字: 自衛\n      读音: じえい\n      意思: self-defense\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '自治',
    answer: 'jichi',
    explantion: '\n      汉字: 自治\n      读音: じち\n      意思: self-government\n      来源: autonomy\n      同义词: 自治\n    ',
  },
  {
    question: '自習',
    answer: 'jishū',
    explantion: '\n      汉字: 自習\n      读音: じしゅう\n      意思: self-study\n      来源: waller\n      同义词: 自修\n    ',
  },
  {
    question: '自然科学',
    answer: 'shizenkagaku',
    explantion: '\n      汉字: 自然科学\n      读音: しぜんかがく\n      意思: natural science\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '執筆',
    answer: 'shippitsu',
    explantion: '\n      汉字: 執筆\n      读音: しっぴつ\n      意思: writing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '失恋',
    answer: 'shitsuren',
    explantion: '\n      汉字: 失恋\n      读音: しつれん\n      意思: disappointed love\n      来源: broken heart\n      同义词: 失恋\n    ',
  },
  {
    question: '湿る',
    answer: 'shimeru',
    explantion: '\n      汉字: 湿る\n      读音: しめる\n      意思: to be wet\n      来源: to become wet\n      同义词: 湿る, 湿る\n    ',
  },
  {
    question: '湿気',
    answer: 'shikke',
    explantion: '\n      汉字: 湿気\n      读音: しっけ\n      意思: moisture\n      来源: humidity\n      同义词: 湿気, 湿気\n    ',
  },
  {
    question: '湿度',
    answer: 'shitsudo',
    explantion: '\n      汉字: 湿度\n      读音: しつど\n      意思: level of humidity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '実る',
    answer: 'minoru',
    explantion: '\n      汉字: 実る\n      读音: みのる\n      意思: to bear fruit\n      来源: to ripen\n      同义词: 実る, 稔る\n    ',
  },
  {
    question: '実感',
    answer: 'jikkan',
    explantion: '\n      汉字: 実感\n      读音: じっかん\n      意思: feelings (actual\n      来源:  true)\n      同义词: 実感\n    ',
  },
  {
    question: '実習',
    answer: 'jisshū',
    explantion: '\n      汉字: 実習\n      读音: じっしゅう\n      意思: practice\n      来源: training\n      同义词: 実習\n    ',
  },
  {
    question: '実績',
    answer: 'jisseki',
    explantion: '\n      汉字: 実績\n      读音: じっせき\n      意思: achievements\n      来源: actual results\n      同义词: 実績\n    ',
  },
  {
    question: '実物',
    answer: 'jitsubutsu',
    explantion: '\n      汉字: 実物\n      读音: じつぶつ\n      意思: real thing\n      来源: original\n      同义词: 実物\n    ',
  },
  {
    question: '実用',
    answer: 'jitsuyō',
    explantion: '\n      汉字: 実用\n      读音: じつよう\n      意思: practical use\n      来源: utility\n      同义词: 実用\n    ',
  },
  {
    question: '実力',
    answer: 'jitsuryoku',
    explantion: '\n      汉字: 実力\n      读音: じつりょく\n      意思: merit\n      来源: efficiency\n      同义词: 実力\n    ',
  },
  {
    question: '実例',
    answer: 'jitsurei',
    explantion: '\n      汉字: 実例\n      读音: じつれい\n      意思: example\n      来源: illustration\n      同义词: 実例\n    ',
  },
  {
    question: '縞',
    answer: 'shima',
    explantion: '\n      汉字: 縞\n      读音: しま\n      意思: stripe\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '写る',
    answer: 'utsuru',
    explantion: '\n      汉字: 写る\n      读音: うつる\n      意思: to be photographed\n      来源: to be projected\n      同义词: 写る\n    ',
  },
  {
    question: '写生',
    answer: 'shasei',
    explantion: '\n      汉字: 写生\n      读音: しゃせい\n      意思: sketching\n      来源: drawing from nature\n      同义词: 写生\n    ',
  },
  {
    question: '射す',
    answer: 'sasu',
    explantion: '\n      汉字: 射す\n      读音: さす\n      意思: to shine\n      来源: to strike\n      同义词: 射す\n    ',
  },
  {
    question: '棄てる',
    answer: 'suteru',
    explantion: '\n      汉字: 棄てる\n      读音: すてる\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '斜め',
    answer: 'naname',
    explantion: '\n      汉字: 斜め\n      读音: ななめ\n      意思: obliqueness\n      来源: waller\n      同义词: 斜め, 斜, 斜, 傾, 傾\n    ',
  },
  {
    question: '煮える',
    answer: 'nieru',
    explantion: '\n      汉字: 煮える\n      读音: にえる\n      意思: to boil\n      来源: to cook\n      同义词: 煮える\n    ',
  },
  {
    question: '煮る',
    answer: 'niru',
    explantion: '\n      汉字: 煮る\n      读音: にる\n      意思: to boil\n      来源: to cook\n      同义词: 煮る\n    ',
  },
  {
    question: '社会科学',
    answer: 'shakaikagaku',
    explantion: '\n      汉字: 社会科学\n      读音: しゃかいかがく\n      意思: social science\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '社説',
    answer: 'shasetsu',
    explantion: '\n      汉字: 社説\n      读音: しゃせつ\n      意思: editorial\n      来源: leading article\n      同义词: 社説\n    ',
  },
  {
    question: '車庫',
    answer: 'shako',
    explantion: '\n      汉字: 車庫\n      读音: しゃこ\n      意思: garage\n      来源: car shed\n      同义词: 車庫\n    ',
  },
  {
    question: '車掌',
    answer: 'shashō',
    explantion: '\n      汉字: 車掌\n      读音: しゃしょう\n      意思: (train) conductor\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '車輪',
    answer: 'sharin',
    explantion: '\n      汉字: 車輪\n      读音: しゃりん\n      意思: (car) wheel\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '蛇口',
    answer: 'jaguchi',
    explantion: '\n      汉字: 蛇口\n      读音: じゃぐち\n      意思: faucet\n      来源: tap\n      同义词: 蛇口, じゃ口\n    ',
  },
  {
    question: '酌む',
    answer: 'kumu',
    explantion: '\n      汉字: 酌む\n      读音: くむ\n      意思: to serve sake\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '弱点',
    answer: 'jakuten',
    explantion: '\n      汉字: 弱点\n      读音: じゃくてん\n      意思: weak point\n      来源: weakness\n      同义词: 弱点\n    ',
  },
  {
    question: '主語',
    answer: 'shugo',
    explantion: '\n      汉字: 主語\n      读音: しゅご\n      意思: (gram) subject\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '主役',
    answer: 'shuyaku',
    explantion: '\n      汉字: 主役\n      读音: しゅやく\n      意思: leading part\n      来源: leading actor (actress)\n      同义词: 主役\n    ',
  },
  {
    question: '取り出す',
    answer: 'toridasu',
    explantion: '\n      汉字: 取り出す\n      读音: とりだす\n      意思: to take out\n      来源: to produce\n      同义词: 取り出す, 取出す, 取りだす, とり出す\n    ',
  },
  {
    question: '取り消す',
    answer: 'torikesu',
    explantion: '\n      汉字: 取り消す\n      读音: とりけす\n      意思: to cancel\n      来源: waller\n      同义词: 取消す\n    ',
  },
  {
    question: '取り入れる',
    answer: 'toriireru',
    explantion: '\n      汉字: 取り入れる\n      读音: とりいれる\n      意思: to harvest\n      来源: to take in\n      同义词: 取り入れる, 採り入れる, 取入れる, 取りいれる\n    ',
  },
  {
    question: '手頃',
    answer: 'tegoro',
    explantion: '\n      汉字: 手頃\n      读音: てごろ\n      意思: moderate\n      来源: handy\n      同义词: 手頃, 手ごろ\n    ',
  },
  {
    question: '手首',
    answer: 'tekubi',
    explantion: '\n      汉字: 手首\n      读音: てくび\n      意思: wrist\n      来源: waller\n      同义词: 手頸, 手頚\n    ',
  },
  {
    question: '手洗い',
    answer: 'tearai',
    explantion: '\n      汉字: 手洗い\n      读音: てあらい\n      意思: restroom\n      来源: lavatory\n      同义词: 手洗い, 手洗\n    ',
  },
  {
    question: '手前',
    answer: 'temae',
    explantion: '\n      汉字: 手前\n      读音: てまえ\n      意思: before\n      来源: this side\n      同义词: 手前\n    ',
  },
  {
    question: '手入れ',
    answer: 'teire',
    explantion: '\n      汉字: 手入れ\n      读音: ていれ\n      意思: repairs\n      来源: maintenance\n      同义词: 手入れ\n    ',
  },
  {
    question: '酒場',
    answer: 'sakaba',
    explantion: '\n      汉字: 酒場\n      读音: さかば\n      意思: bar\n      来源: bar-room\n      同义词: 酒場\n    ',
  },
  {
    question: '受け持つ',
    answer: 'ukemotsu',
    explantion: '\n      汉字: 受け持つ\n      读音: うけもつ\n      意思: to take (be in) charge of\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '受験',
    answer: 'juken',
    explantion: '\n      汉字: 受験\n      读音: じゅけん\n      意思: taking an examination\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '受取',
    answer: 'uketori',
    explantion: '\n      汉字: 受取\n      读音: うけとり\n      意思: receipt\n      来源: waller\n      同义词: 受取り, 受け取り, 受け取, 請け取り, 請取り, 請取, 請け取\n    ',
  },
  {
    question: '受話器',
    answer: 'juwaki',
    explantion: '\n      汉字: 受話器\n      读音: じゅわき\n      意思: (telephone) receiver\n      来源: waller\n      同义词: 受話機\n    ',
  },
  {
    question: '寿命',
    answer: 'jumyō',
    explantion: '\n      汉字: 寿命\n      读音: じゅみょう\n      意思: life span\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '周辺',
    answer: 'shūhen',
    explantion: '\n      汉字: 周辺\n      读音: しゅうへん\n      意思: circumference\n      来源: outskirts\n      同义词: 周辺\n    ',
  },
  {
    question: '就任',
    answer: 'shūnin',
    explantion: '\n      汉字: 就任\n      读音: しゅうにん\n      意思: inauguration\n      来源: assumption of office\n      同义词: 就任\n    ',
  },
  {
    question: '修繕',
    answer: 'shūzen',
    explantion: '\n      汉字: 修繕\n      读音: しゅうぜん\n      意思: repair\n      来源: mending\n      同义词: 修繕\n    ',
  },
  {
    question: '終点',
    answer: 'shūten',
    explantion: '\n      汉字: 終点\n      读音: しゅうてん\n      意思: terminus\n      来源: last stop (e.g train)\n      同义词: 終点\n    ',
  },
  {
    question: '終了',
    answer: 'shūryō',
    explantion: '\n      汉字: 終了\n      读音: しゅうりょう\n      意思: end\n      来源: close\n      同义词: 終了\n    ',
  },
  {
    question: '習字',
    answer: 'shūji',
    explantion: '\n      汉字: 習字\n      读音: しゅうじ\n      意思: penmanship\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '蹴る',
    answer: 'keru',
    explantion: '\n      汉字: 蹴る\n      读音: ける\n      意思: to kick\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '集会',
    answer: 'shūkai',
    explantion: '\n      汉字: 集会\n      读音: しゅうかい\n      意思: meeting\n      来源: assembly\n      同义词: 集会\n    ',
  },
  {
    question: '集金',
    answer: 'shūkin',
    explantion: '\n      汉字: 集金\n      读音: しゅうきん\n      意思: money collection\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '集合',
    answer: 'shūgō',
    explantion: '\n      汉字: 集合\n      读音: しゅうごう\n      意思: gathering\n      来源: assembly\n      同义词: 集合\n    ',
  },
  {
    question: '醜い',
    answer: 'minikui',
    explantion: '\n      汉字: 醜い\n      读音: みにくい\n      意思: ugly\n      来源: waller\n      同义词: 見憎い\n    ',
  },
  {
    question: '従姉妹',
    answer: 'itoko',
    explantion: '\n      汉字: 従姉妹\n      读音: いとこ\n      意思: cousin (female)\n      来源: waller\n      同义词: , , 従姉妹\n    ',
  },
  {
    question: '汁',
    answer: 'shiru',
    explantion: '\n      汉字: 汁\n      读音: しる\n      意思: juice\n      来源: sap\n      同义词: 汁, 液, 液\n    ',
  },
  {
    question: '重たい',
    answer: 'omotai',
    explantion: '\n      汉字: 重たい\n      读音: おもたい\n      意思: heavy\n      来源: massive\n      同义词: 重たい\n    ',
  },
  {
    question: '重なる',
    answer: 'kasanaru',
    explantion: '\n      汉字: 重なる\n      读音: かさなる\n      意思: to be piled up\n      来源: lie on top of one another\n      同义词: 重なる\n    ',
  },
  {
    question: '重ねる',
    answer: 'kasaneru',
    explantion: '\n      汉字: 重ねる\n      读音: かさねる\n      意思: to pile up\n      来源: to put something on another\n      同义词: 重ねる\n    ',
  },
  {
    question: '重点',
    answer: 'jūten',
    explantion: '\n      汉字: 重点\n      读音: じゅうてん\n      意思: important point\n      来源: lay stress on\n      同义词: 重点\n    ',
  },
  {
    question: '重役',
    answer: 'jūyaku',
    explantion: '\n      汉字: 重役\n      读音: じゅうやく\n      意思: director\n      来源: high executive\n      同义词: 重役, 重役\n    ',
  },
  {
    question: '重量',
    answer: 'jūryō',
    explantion: '\n      汉字: 重量\n      读音: じゅうりょう\n      意思: (1) weight\n      来源: (2) heavyweight boxer\n      同义词: 重量\n    ',
  },
  {
    question: '重力',
    answer: 'jūryoku',
    explantion: '\n      汉字: 重力\n      读音: じゅうりょく\n      意思: gravity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '祝日',
    answer: 'shukujitsu',
    explantion: '\n      汉字: 祝日\n      读音: しゅくじつ\n      意思: national holiday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '縮む',
    answer: 'chijimu',
    explantion: '\n      汉字: 縮む\n      读音: ちぢむ\n      意思: to shrink\n      来源: to be contracted\n      同义词: 縮む, 縮む\n    ',
  },
  {
    question: '縮める',
    answer: 'chijimeru',
    explantion: '\n      汉字: 縮める\n      读音: ちぢめる\n      意思: to shorten\n      来源: to reduce\n      同义词: 縮める\n    ',
  },
  {
    question: '縮れる',
    answer: 'chijireru',
    explantion: '\n      汉字: 縮れる\n      读音: ちぢれる\n      意思: to be wavy\n      来源: to be curled\n      同义词: 縮れる\n    ',
  },
  {
    question: '縮小',
    answer: 'shukushō',
    explantion: '\n      汉字: 縮小\n      读音: しゅくしょう\n      意思: reduction\n      来源: curtailment\n      同义词: 縮小\n    ',
  },
  {
    question: '熟語',
    answer: 'jukugo',
    explantion: '\n      汉字: 熟語\n      读音: じゅくご\n      意思: idiom\n      来源: idiomatic phrase\n      同义词: 熟語\n    ',
  },
  {
    question: '出合い',
    answer: 'deai',
    explantion: '\n      汉字: 出合い\n      读音: であい\n      意思: an encounter\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お出掛け',
    answer: 'odekake',
    explantion: '\n      汉字: お出掛け\n      读音: おでかけ\n      意思: \n      来源: waller\n      同义词: お出かけ, 御出掛け\n    ',
  },
  {
    question: '出勤',
    answer: 'shukkin',
    explantion: '\n      汉字: 出勤\n      读音: しゅっきん\n      意思: going to work\n      来源: at work\n      同义词: 出勤\n    ',
  },
  {
    question: '出迎え',
    answer: 'demukae',
    explantion: '\n      汉字: 出迎え\n      读音: でむかえ\n      意思: meeting\n      来源: reception\n      同义词: 出迎え\n    ',
  },
  {
    question: '出迎える',
    answer: 'demukaeru',
    explantion: '\n      汉字: 出迎える\n      读音: でむかえる\n      意思: to meet\n      来源: to greet\n      同义词: 出迎える\n    ',
  },
  {
    question: '出張',
    answer: 'shutchō',
    explantion: '\n      汉字: 出張\n      读音: しゅっちょう\n      意思: official tour\n      来源: business trip\n      同义词: 出張\n    ',
  },
  {
    question: '出入り',
    answer: 'deiri',
    explantion: '\n      汉字: 出入り\n      读音: でいり\n      意思: in and out\n      来源: coming and going\n      同义词: 出入り, 出入り, 出這入り\n    ',
  },
  {
    question: '出来上がり',
    answer: 'dekiagari',
    explantion: '\n      汉字: 出来上がり\n      读音: できあがり\n      意思: be finished\n      来源: ready\n      同义词: 出来上がり, でき上がり, 出来上り\n    ',
  },
  {
    question: '出来上がる',
    answer: 'dekiagaru',
    explantion: '\n      汉字: 出来上がる\n      读音: できあがる\n      意思: (1) to be finished\n      来源: to be ready\n      同义词: 出来上がる, でき上がる, 出来あがる, 出来上る\n    ',
  },
  {
    question: '述語',
    answer: 'jutsugo',
    explantion: '\n      汉字: 述語\n      读音: じゅつご\n      意思: predicate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '循環',
    answer: 'junkan',
    explantion: '\n      汉字: 循環\n      读音: じゅんかん\n      意思: circulation\n      来源: rotation\n      同义词: 循環\n    ',
  },
  {
    question: '純情',
    answer: 'junjō',
    explantion: '\n      汉字: 純情\n      读音: じゅんじょう\n      意思: pure heart\n      来源: naivete\n      同义词: 純情\n    ',
  },
  {
    question: '純粋',
    answer: 'junsui',
    explantion: '\n      汉字: 純粋\n      读音: じゅんすい\n      意思: pure\n      来源: true\n      同义词: 純粋\n    ',
  },
  {
    question: '巡る',
    answer: 'meguru',
    explantion: '\n      汉字: 巡る\n      读音: めぐる\n      意思: to go around\n      来源: waller\n      同义词: , 回る, 廻る\n    ',
  },
  {
    question: '巡査',
    answer: 'junsa',
    explantion: '\n      汉字: 巡査\n      读音: じゅんさ\n      意思: police\n      来源: policeman\n      同义词: 巡査\n    ',
  },
  {
    question: '順々',
    answer: 'junjun',
    explantion: '\n      汉字: 順々\n      读音: じゅんじゅん\n      意思: in order\n      来源: in turn\n      同义词: 順々, 順順\n    ',
  },
  {
    question: '順序',
    answer: 'junjo',
    explantion: '\n      汉字: 順序\n      读音: じゅんじょ\n      意思: order\n      来源: sequence\n      同义词: 順序\n    ',
  },
  {
    question: '初級',
    answer: 'shokyū',
    explantion: '\n      汉字: 初級\n      读音: しょきゅう\n      意思: elementary level\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '初旬',
    answer: 'shojun',
    explantion: '\n      汉字: 初旬\n      读音: しょじゅん\n      意思: first 10 days of the month\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '書籍',
    answer: 'shoseki',
    explantion: '\n      汉字: 書籍\n      读音: しょせき\n      意思: book\n      来源: publication\n      同义词: 書籍, 書籍\n    ',
  },
  {
    question: '書店',
    answer: 'shoten',
    explantion: '\n      汉字: 書店\n      读音: しょてん\n      意思: bookshop\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '書道',
    answer: 'shodō',
    explantion: '\n      汉字: 書道\n      读音: しょどう\n      意思: calligraphy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '助かる',
    answer: 'tasukaru',
    explantion: '\n      汉字: 助かる\n      读音: たすかる\n      意思: to be saved\n      来源: to be rescued\n      同义词: 助かる\n    ',
  },
  {
    question: '助教授',
    answer: 'jokyōju',
    explantion: '\n      汉字: 助教授\n      读音: じょきょうじゅ\n      意思: assistant professor\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '女の人',
    answer: 'onnanohito',
    explantion: '\n      汉字: 女の人\n      读音: おんなのひと\n      意思: woman\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '女房',
    answer: 'nyōbō',
    explantion: '\n      汉字: 女房\n      读音: にょうぼう\n      意思: wife\n      来源: waller\n      同义词: 女房, 女房\n    ',
  },
  {
    question: '序で',
    answer: 'tsuide',
    explantion: '\n      汉字: 序で\n      读音: ついで\n      意思: opportunity\n      来源: occasion\n      同义词: 序で, , 序\n    ',
  },
  {
    question: '勝敗',
    answer: 'shōhai',
    explantion: '\n      汉字: 勝敗\n      读音: しょうはい\n      意思: victory or defeat\n      来源: issue (of battle)\n      同义词: 勝敗\n    ',
  },
  {
    question: '勝負',
    answer: 'shōbu',
    explantion: '\n      汉字: 勝負\n      读音: しょうぶ\n      意思: victory or defeat\n      来源: match\n      同义词: 勝負\n    ',
  },
  {
    question: '商業',
    answer: 'shōgyō',
    explantion: '\n      汉字: 商業\n      读音: しょうぎょう\n      意思: commerce\n      来源: trade\n      同义词: 商業\n    ',
  },
  {
    question: '商社',
    answer: 'shōsha',
    explantion: '\n      汉字: 商社\n      读音: しょうしゃ\n      意思: trading company\n      来源: firm\n      同义词: 商社\n    ',
  },
  {
    question: '商店',
    answer: 'shōten',
    explantion: '\n      汉字: 商店\n      读音: しょうてん\n      意思: shop\n      来源: business firm\n      同义词: 商店\n    ',
  },
  {
    question: '将棋',
    answer: 'shōgi',
    explantion: '\n      汉字: 将棋\n      读音: しょうぎ\n      意思: Japanese chess\n      来源: waller\n      同义词: 象棋, 象戯\n    ',
  },
  {
    question: '小学生',
    answer: 'shōgakusei',
    explantion: '\n      汉字: 小学生\n      读音: しょうがくせい\n      意思: grade school student\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '小遣い',
    answer: 'kozukai',
    explantion: '\n      汉字: 小遣い\n      读音: こづかい\n      意思: personal expenses\n      来源: pocket money\n      同义词: 小遣い, 小遣い, 小遣, 小遣\n    ',
  },
  {
    question: '小指',
    answer: 'koyubi',
    explantion: '\n      汉字: 小指\n      读音: こゆび\n      意思: little finger\n      来源: waller\n      同义词: 子指\n    ',
  },
  {
    question: '小数',
    answer: 'shōsū',
    explantion: '\n      汉字: 小数\n      读音: しょうすう\n      意思: fraction (part of)\n      来源: decimal\n      同义词: 小数\n    ',
  },
  {
    question: '床の間',
    answer: 'tokonoma',
    explantion: '\n      汉字: 床の間\n      读音: とこのま\n      意思: alcove\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '床屋',
    answer: 'tokoya',
    explantion: '\n      汉字: 床屋\n      读音: とこや\n      意思: barber\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '承る',
    answer: 'uketamawaru',
    explantion: '\n      汉字: 承る\n      读音: うけたまわる\n      意思: (hum) to hear\n      来源: to be told\n      同义词: 承る, 受け賜る\n    ',
  },
  {
    question: '消化',
    answer: 'shōka',
    explantion: '\n      汉字: 消化\n      读音: しょうか\n      意思: digestion\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '消極的',
    answer: 'shōkyokuteki',
    explantion: '\n      汉字: 消極的\n      读音: しょうきょくてき\n      意思: passive\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '消毒',
    answer: 'shōdoku',
    explantion: '\n      汉字: 消毒\n      读音: しょうどく\n      意思: disinfection\n      来源: sterilization\n      同义词: 消毒\n    ',
  },
  {
    question: '消防署',
    answer: 'shōbōsho',
    explantion: '\n      汉字: 消防署\n      读音: しょうぼうしょ\n      意思: fire station\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '焦がす',
    answer: 'kogasu',
    explantion: '\n      汉字: 焦がす\n      读音: こがす\n      意思: to burn\n      来源: to scorch\n      同义词: 焦がす\n    ',
  },
  {
    question: '焦げる',
    answer: 'kogeru',
    explantion: '\n      汉字: 焦げる\n      读音: こげる\n      意思: to burn\n      来源: to be burned\n      同义词: 焦げる\n    ',
  },
  {
    question: '焦点',
    answer: 'shōten',
    explantion: '\n      汉字: 焦点\n      读音: しょうてん\n      意思: focus\n      来源: point\n      同义词: 焦点\n    ',
  },
  {
    question: '照らす',
    answer: 'terasu',
    explantion: '\n      汉字: 照らす\n      读音: てらす\n      意思: to shine on\n      来源: to illuminate\n      同义词: 照らす\n    ',
  },
  {
    question: '照る',
    answer: 'teru',
    explantion: '\n      汉字: 照る\n      读音: てる\n      意思: to shine\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '省略',
    answer: 'shōryaku',
    explantion: '\n      汉字: 省略\n      读音: しょうりゃく\n      意思: omission\n      来源: abbreviation\n      同义词: 省略\n    ',
  },
  {
    question: '賞金',
    answer: 'shōkin',
    explantion: '\n      汉字: 賞金\n      读音: しょうきん\n      意思: prize\n      来源: monetary award\n      同义词: 賞金\n    ',
  },
  {
    question: '賞品',
    answer: 'shōhin',
    explantion: '\n      汉字: 賞品\n      读音: しょうひん\n      意思: prize\n      来源: trophy\n      同义词: 賞品\n    ',
  },
  {
    question: '鐘',
    answer: 'kane',
    explantion: '\n      汉字: 鐘\n      读音: かね\n      意思: bell\n      来源: chime\n      同义词: 鐘\n    ',
  },
  {
    question: '障子',
    answer: 'shōji',
    explantion: '\n      汉字: 障子\n      读音: しょうじ\n      意思: paper sliding door\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '揚げる',
    answer: 'ageru',
    explantion: '\n      汉字: 揚げる\n      读音: あげる\n      意思: to lift\n      来源: to fry\n      同义词: 揚げる, 挙げる\n    ',
  },
  {
    question: '上り',
    answer: 'nobori',
    explantion: '\n      汉字: 上り\n      读音: のぼり\n      意思: up-train (going to Tokyo)\n      来源: ascent\n      同义词: 上り, 登り, 昇り\n    ',
  },
  {
    question: '上る',
    answer: 'noboru',
    explantion: '\n      汉字: 上る\n      读音: のぼる\n      意思: to ascend\n      来源: to go up\n      同义词: 上る\n    ',
  },
  {
    question: '上下',
    answer: 'jōka',
    explantion: '\n      汉字: 上下\n      读音: じょうげ\n      意思: high and low\n      来源: up and down\n      同义词: 上下\n    ',
  },
  {
    question: '上級',
    answer: 'jōkyū',
    explantion: '\n      汉字: 上級\n      读音: じょうきゅう\n      意思: advanced level\n      来源: high grade\n      同义词: 上級\n    ',
  },
  {
    question: '上旬',
    answer: 'jōjun',
    explantion: '\n      汉字: 上旬\n      读音: じょうじゅん\n      意思: first 10 days of month\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '乗車',
    answer: 'jōsha',
    explantion: '\n      汉字: 乗車\n      读音: じょうしゃ\n      意思: taking a train\n      来源: entraining\n      同义词: 乗車\n    ',
  },
  {
    question: '畳む',
    answer: 'tatamu',
    explantion: '\n      汉字: 畳む\n      读音: たたむ\n      意思: to fold (clothes)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '蒸し暑い',
    answer: 'mushiatsui',
    explantion: '\n      汉字: 蒸し暑い\n      读音: むしあつい\n      意思: humid\n      来源: sultry\n      同义词: 蒸し暑い, むし暑い, 蒸暑い\n    ',
  },
  {
    question: '蒸す',
    answer: 'fukasu',
    explantion: '\n      汉字: 蒸す\n      读音: むす\n      意思: to steam\n      来源: to poultice\n      同义词: 蒸す\n    ',
  },
  {
    question: '蒸気',
    answer: 'jōki',
    explantion: '\n      汉字: 蒸気\n      读音: じょうき\n      意思: steam\n      来源: vapour\n      同义词: 蒸気, 蒸汽\n    ',
  },
  {
    question: '蒸発',
    answer: 'jōhatsu',
    explantion: '\n      汉字: 蒸発\n      读音: じょうはつ\n      意思: evaporation\n      来源: unexplained disappearance\n      同义词: 蒸発\n    ',
  },
  {
    question: '飾り',
    answer: 'kazari',
    explantion: '\n      汉字: 飾り\n      读音: かざり\n      意思: decoration\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '拭く',
    answer: 'fuku',
    explantion: '\n      汉字: 拭く\n      读音: ふく\n      意思: to wipe\n      来源: to dry\n      同义词: 拭く\n    ',
  },
  {
    question: '職人',
    answer: 'shokunin',
    explantion: '\n      汉字: 職人\n      读音: しょくにん\n      意思: worker\n      来源: mechanic\n      同义词: 職人\n    ',
  },
  {
    question: '食塩',
    answer: 'shokuen',
    explantion: '\n      汉字: 食塩\n      读音: しょくえん\n      意思: table salt\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '食器',
    answer: 'shokki',
    explantion: '\n      汉字: 食器\n      读音: しょっき\n      意思: tableware\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '延びる',
    answer: 'nobiru',
    explantion: '\n      汉字: 延びる\n      读音: のびる\n      意思: to be prolonged\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '信ずる',
    answer: 'shinzuru',
    explantion: '\n      汉字: 信ずる\n      读音: しんずる\n      意思: to believe\n      来源: to believe in\n      同义词: 信ずる\n    ',
  },
  {
    question: '侵入',
    answer: 'shinnyū',
    explantion: '\n      汉字: 侵入\n      读音: しんにゅう\n      意思: penetration\n      来源: invasion\n      同义词: 侵入\n    ',
  },
  {
    question: '唇',
    answer: 'kuchibiru',
    explantion: '\n      汉字: 唇\n      读音: くちびる\n      意思: lips\n      来源: waller\n      同义词: 脣\n    ',
  },
  {
    question: '寝間着',
    answer: 'nemaki',
    explantion: '\n      汉字: 寝間着\n      读音: ねまき\n      意思: sleep-wear\n      来源: nightclothes\n      同义词: 寝間着, 寝巻き, 寝衣, 寝巻\n    ',
  },
  {
    question: '心身',
    answer: 'shinshin',
    explantion: '\n      汉字: 心身\n      读音: しんしん\n      意思: mind and body\n      来源: waller\n      同义词: 心身, 身心, 身心, 神身, 神身, 身神, 身神\n    ',
  },
  {
    question: '心当たり',
    answer: 'kokoroatari',
    explantion: '\n      汉字: 心当たり\n      读音: こころあたり\n      意思: having some knowledge of\n      来源: happening to know\n      同义词: 心当たり, 心当り, 心あたり\n    ',
  },
  {
    question: '心得る',
    answer: 'kokoroeru',
    explantion: '\n      汉字: 心得る\n      读音: こころえる\n      意思: to be informed\n      来源: to have thorough knowledge\n      同义词: 心得る\n    ',
  },
  {
    question: '振り仮名',
    answer: 'furikamei',
    explantion: '\n      汉字: 振り仮名\n      读音: ふりがな\n      意思: \n      来源: pronunciation key\n      同义词: 振り仮名, , 振りがな, 振仮名\n    ',
  },
  {
    question: '新幹線',
    answer: 'shinkansen',
    explantion: '\n      汉字: 新幹線\n      读音: しんかんせん\n      意思: bullet train (very high speed)\n      来源: shinkansen\n      同义词: 新幹線\n    ',
  },
  {
    question: '森林',
    answer: 'shinrin',
    explantion: '\n      汉字: 森林\n      读音: しんりん\n      意思: forest\n      来源: woods\n      同义词: 森林\n    ',
  },
  {
    question: '深まる',
    answer: 'fukamaru',
    explantion: '\n      汉字: 深まる\n      读音: ふかまる\n      意思: to deepen\n      来源: to heighten\n      同义词: 深まる\n    ',
  },
  {
    question: '深夜',
    answer: 'shin\'ya',
    explantion: '\n      汉字: 深夜\n      读音: しんや\n      意思: late at night\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '申請',
    answer: 'shinsei',
    explantion: '\n      汉字: 申請\n      读音: しんせい\n      意思: application\n      来源: request\n      同义词: 申請\n    ',
  },
  {
    question: '真っ暗',
    answer: 'makkura',
    explantion: '\n      汉字: 真っ暗\n      读音: まっくら\n      意思: total darkness\n      来源: shortsightedness\n      同义词: 真っ暗, 真暗, まっ暗\n    ',
  },
  {
    question: '真っ先',
    answer: 'massaki',
    explantion: '\n      汉字: 真っ先\n      读音: まっさき\n      意思: the head\n      来源: the foremost\n      同义词: 真っ先, まっ先, 真先\n    ',
  },
  {
    question: '真空',
    answer: 'shinkū',
    explantion: '\n      汉字: 真空\n      读音: しんくう\n      意思: vacuum\n      来源: hollow\n      同义词: 真空\n    ',
  },
  {
    question: '真似る',
    answer: 'maneru',
    explantion: '\n      汉字: 真似る\n      读音: まねる\n      意思: to mimic\n      来源: to imitate\n      同义词: 真似る\n    ',
  },
  {
    question: '神様',
    answer: 'kamisama',
    explantion: '\n      汉字: 神様\n      读音: かみさま\n      意思: god\n      来源: waller\n      同义词: 神さま\n    ',
  },
  {
    question: '神話',
    answer: 'shinwa',
    explantion: '\n      汉字: 神話\n      读音: しんわ\n      意思: myth\n      来源: legend\n      同义词: 神話\n    ',
  },
  {
    question: '親指',
    answer: 'oyayubi',
    explantion: '\n      汉字: 親指\n      读音: おやゆび\n      意思: thumb\n      来源: waller\n      同义词: おや指\n    ',
  },
  {
    question: '親類',
    answer: 'shinrui',
    explantion: '\n      汉字: 親類\n      读音: しんるい\n      意思: relation\n      来源: kin\n      同义词: 親類\n    ',
  },
  {
    question: '診る',
    answer: 'miru',
    explantion: '\n      汉字: 診る\n      读音: みる\n      意思: to examine (medical)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '診断',
    answer: 'shindan',
    explantion: '\n      汉字: 診断\n      读音: しんだん\n      意思: diagnosis\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '身分',
    answer: 'mibun',
    explantion: '\n      汉字: 身分\n      读音: みぶん\n      意思: social position\n      来源: social status\n      同义词: 身分\n    ',
  },
  {
    question: '針金',
    answer: 'harigane',
    explantion: '\n      汉字: 針金\n      读音: はりがね\n      意思: wire\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '針路',
    answer: 'shinro',
    explantion: '\n      汉字: 針路\n      读音: しんろ\n      意思: course\n      来源: direction\n      同义词: 針路\n    ',
  },
  {
    question: '人造',
    answer: 'jinzō',
    explantion: '\n      汉字: 人造\n      读音: じんぞう\n      意思: man-made\n      来源: synthetic\n      同义词: 人造\n    ',
  },
  {
    question: '人通り',
    answer: 'hitodōri',
    explantion: '\n      汉字: 人通り\n      读音: ひとどおり\n      意思: pedestrian traffic\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '人文科学',
    answer: 'jimbunkagaku',
    explantion: '\n      汉字: 人文科学\n      读音: じんぶんかがく\n      意思: social sciences\n      来源: humanities\n      同义词: 人文科学\n    ',
  },
  {
    question: '人命',
    answer: 'jimmei',
    explantion: '\n      汉字: 人命\n      读音: じんめい\n      意思: (human) life\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '甚だしい',
    answer: 'hanahadashii',
    explantion: '\n      汉字: 甚だしい\n      读音: はなはだしい\n      意思: extreme\n      来源: excessive\n      同义词: 甚だしい, 甚しい\n    ',
  },
  {
    question: '酢',
    answer: 'su',
    explantion: '\n      汉字: 酢\n      读音: す\n      意思: vinegar\n      来源: waller\n      同义词: 醋, 酸\n    ',
  },
  {
    question: '図鑑',
    answer: 'zukan',
    explantion: '\n      汉字: 図鑑\n      读音: ずかん\n      意思: picture book\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '図形',
    answer: 'zukei',
    explantion: '\n      汉字: 図形\n      读音: ずけい\n      意思: figure\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '図表',
    answer: 'zuhyō',
    explantion: '\n      汉字: 図表\n      读音: ずひょう\n      意思: chart\n      来源: diagram\n      同义词: 図表\n    ',
  },
  {
    question: '吹雪',
    answer: 'fubuki',
    explantion: '\n      汉字: 吹雪\n      读音: ふぶき\n      意思: snow storm\n      来源: waller\n      同义词: 乱吹\n    ',
  },
  {
    question: '垂直',
    answer: 'suichoku',
    explantion: '\n      汉字: 垂直\n      读音: すいちょく\n      意思: vertical\n      来源: perpendicular\n      同义词: 垂直\n    ',
  },
  {
    question: '推定',
    answer: 'suitei',
    explantion: '\n      汉字: 推定\n      读音: すいてい\n      意思: presumption\n      来源: assumption\n      同义词: 推定\n    ',
  },
  {
    question: '水蒸気',
    answer: 'suijōki',
    explantion: '\n      汉字: 水蒸気\n      读音: すいじょうき\n      意思: water vapour\n      来源: steam\n      同义词: 水蒸気\n    ',
  },
  {
    question: '水素',
    answer: 'suiso',
    explantion: '\n      汉字: 水素\n      读音: すいそ\n      意思: hydrogen\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '水滴',
    answer: 'suiteki',
    explantion: '\n      汉字: 水滴\n      读音: すいてき\n      意思: drop of water\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '水筒',
    answer: 'suitō',
    explantion: '\n      汉字: 水筒\n      读音: すいとう\n      意思: canteen\n      来源: flask\n      同义词: 水筒\n    ',
  },
  {
    question: '水分',
    answer: 'suibun',
    explantion: '\n      汉字: 水分\n      读音: すいぶん\n      意思: moisture\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '水平',
    answer: 'suihei',
    explantion: '\n      汉字: 水平\n      读音: すいへい\n      意思: water level\n      来源: horizon\n      同义词: 水平\n    ',
  },
  {
    question: '水平線',
    answer: 'suiheisen',
    explantion: '\n      汉字: 水平線\n      读音: すいへいせん\n      意思: horizon\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '水曜',
    answer: 'suiyō',
    explantion: '\n      汉字: 水曜\n      读音: すいよう\n      意思: Wednesday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '炊事',
    answer: 'suiji',
    explantion: '\n      汉字: 炊事\n      读音: すいじ\n      意思: cooking\n      来源: culinary arts\n      同义词: 炊事\n    ',
  },
  {
    question: '酔っ払い',
    answer: 'yopparai',
    explantion: '\n      汉字: 酔っ払い\n      读音: よっぱらい\n      意思: drunkard\n      来源: waller\n      同义词: 酔っぱらい, 酔払い\n    ',
  },
  {
    question: '随筆',
    answer: 'zuihitsu',
    explantion: '\n      汉字: 随筆\n      读音: ずいひつ\n      意思: essays\n      来源: miscellaneous writings\n      同义词: 随筆, 隨筆\n    ',
  },
  {
    question: '杉',
    answer: 'sugi',
    explantion: '\n      汉字: 杉\n      读音: すぎ\n      意思: Japanese cedar\n      来源: waller\n      同义词: 椙, \n    ',
  },
  {
    question: '清む',
    answer: 'kiyoshimu',
    explantion: '\n      汉字: 清む\n      读音: すむ\n      意思: to clear (e.g. weather)\n      来源: waller\n      同义词: 澄む\n    ',
  },
  {
    question: '寸法',
    answer: 'sumpō',
    explantion: '\n      汉字: 寸法\n      读音: すんぽう\n      意思: measurement\n      来源: size\n      同义词: 寸法\n    ',
  },
  {
    question: '瀬戸物',
    answer: 'setomono',
    explantion: '\n      汉字: 瀬戸物\n      读音: せともの\n      意思: earthenware\n      来源: crockery\n      同义词: 瀬戸物, 瀬戸もの, \n    ',
  },
  {
    question: '制作',
    answer: 'seisaku',
    explantion: '\n      汉字: 制作\n      读音: せいさく\n      意思: work (film\n      来源:  book)\n      同义词: 制作\n    ',
  },
  {
    question: '姓',
    answer: 'sei',
    explantion: '\n      汉字: 姓\n      读音: せい\n      意思: surname\n      来源: family name\n      同义词: 姓, 姓, 姓\n    ',
  },
  {
    question: '性質',
    answer: 'seishitsu',
    explantion: '\n      汉字: 性質\n      读音: せいしつ\n      意思: nature\n      来源: property\n      同义词: 性質\n    ',
  },
  {
    question: '性能',
    answer: 'seinō',
    explantion: '\n      汉字: 性能\n      读音: せいのう\n      意思: ability\n      来源: efficiency\n      同义词: 性能\n    ',
  },
  {
    question: '性別',
    answer: 'seibetsu',
    explantion: '\n      汉字: 性別\n      读音: せいべつ\n      意思: distinction by sex\n      来源: sex\n      同义词: 性別\n    ',
  },
  {
    question: '成分',
    answer: 'seibun',
    explantion: '\n      汉字: 成分\n      读音: せいぶん\n      意思: ingredient\n      来源: component\n      同义词: 成分\n    ',
  },
  {
    question: '成立',
    answer: 'seiritsu',
    explantion: '\n      汉字: 成立\n      读音: せいりつ\n      意思: coming into existence\n      来源: arrangements\n      同义词: 成立\n    ',
  },
  {
    question: '政党',
    answer: 'seitō',
    explantion: '\n      汉字: 政党\n      读音: せいとう\n      意思: (member of) political party\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '整数',
    answer: 'seisū',
    explantion: '\n      汉字: 整数\n      读音: せいすう\n      意思: integer\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '整備',
    answer: 'seibi',
    explantion: '\n      汉字: 整備\n      读音: せいび\n      意思: adjustment\n      来源: completion\n      同义词: 整備\n    ',
  },
  {
    question: '正方形',
    answer: 'seihōkei',
    explantion: '\n      汉字: 正方形\n      读音: せいほうけい\n      意思: square\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '正味',
    answer: 'shōmi',
    explantion: '\n      汉字: 正味\n      读音: しょうみ\n      意思: net (weight)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '正面',
    answer: 'shōmen',
    explantion: '\n      汉字: 正面\n      读音: しょうめん\n      意思: the front\n      来源: honesty\n      同义词: 正面\n    ',
  },
  {
    question: '正門',
    answer: 'seimon',
    explantion: '\n      汉字: 正門\n      读音: せいもん\n      意思: main gate\n      来源: main entrance\n      同义词: 正門\n    ',
  },
  {
    question: '清い',
    answer: 'kiyoi',
    explantion: '\n      汉字: 清い\n      读音: きよい\n      意思: clear\n      来源: pure\n      同义词: 清い, 浄い\n    ',
  },
  {
    question: '清書',
    answer: 'seisho',
    explantion: '\n      汉字: 清書\n      读音: せいしょ\n      意思: clean copy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '清掃',
    answer: 'seisō',
    explantion: '\n      汉字: 清掃\n      读音: せいそう\n      意思: cleaning\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '生える',
    answer: 'haeru',
    explantion: '\n      汉字: 生える\n      读音: はえる\n      意思: (1) to grow\n      来源: to spring up\n      同义词: 生える\n    ',
  },
  {
    question: '生ずる',
    answer: 'shōzuru',
    explantion: '\n      汉字: 生ずる\n      读音: しょうずる\n      意思: to cause\n      来源: to arise\n      同义词: 生ずる\n    ',
  },
  {
    question: '生意気',
    answer: 'namaiki',
    explantion: '\n      汉字: 生意気\n      读音: なまいき\n      意思: impertinent\n      来源: saucy\n      同义词: 生意気\n    ',
  },
  {
    question: '生存',
    answer: 'seizon',
    explantion: '\n      汉字: 生存\n      读音: せいぞん\n      意思: existence\n      来源: being\n      同义词: 生存\n    ',
  },
  {
    question: '生長',
    answer: 'seichō',
    explantion: '\n      汉字: 生長\n      读音: せいちょう\n      意思: growth\n      来源: increment\n      同义词: 生長\n    ',
  },
  {
    question: '生年月日',
    answer: 'seinengappi',
    explantion: '\n      汉字: 生年月日\n      读音: せいねんがっぴ\n      意思: birth date\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '盛る',
    answer: 'moru',
    explantion: '\n      汉字: 盛る\n      读音: もる\n      意思: (1) to serve (food\n      来源:  etc.)\n      同义词: 盛る\n    ',
  },
  {
    question: '製作',
    answer: 'seisaku',
    explantion: '\n      汉字: 製作\n      读音: せいさく\n      意思: manufacture\n      来源: production\n      同义词: 製作\n    ',
  },
  {
    question: '西暦',
    answer: 'seireki',
    explantion: '\n      汉字: 西暦\n      读音: せいれき\n      意思: Christian Era\n      来源: anno domini (A.D.)\n      同义词: 西暦\n    ',
  },
  {
    question: '誓う',
    answer: 'chikau',
    explantion: '\n      汉字: 誓う\n      读音: ちかう\n      意思: to swear\n      来源: to vow\n      同义词: 誓う, 盟う\n    ',
  },
  {
    question: '青少年',
    answer: 'seishōnen',
    explantion: '\n      汉字: 青少年\n      读音: せいしょうねん\n      意思: youth\n      来源: young person\n      同义词: 青少年\n    ',
  },
  {
    question: '青白い',
    answer: 'aojiroi',
    explantion: '\n      汉字: 青白い\n      读音: あおじろい\n      意思: pale\n      来源: pallid\n      同义词: 青白い, 蒼白い, 青じろい\n    ',
  },
  {
    question: '税関',
    answer: 'zeikan',
    explantion: '\n      汉字: 税関\n      读音: ぜいかん\n      意思: customs house\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '惜しい',
    answer: 'oshii',
    explantion: '\n      汉字: 惜しい\n      读音: おしい\n      意思: regrettable\n      来源: disappointing\n      同义词: 惜しい\n    ',
  },
  {
    question: '積む',
    answer: 'tsumu',
    explantion: '\n      汉字: 積む\n      读音: つむ\n      意思: to pile up\n      来源: to stack\n      同义词: 積む\n    ',
  },
  {
    question: '赤道',
    answer: 'sekidō',
    explantion: '\n      汉字: 赤道\n      读音: せきどう\n      意思: equator\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '接する',
    answer: 'sessuru',
    explantion: '\n      汉字: 接する\n      读音: せっする\n      意思: to come in contact with\n      来源: to connect\n      同义词: 接する\n    ',
  },
  {
    question: '接近',
    answer: 'sekkin',
    explantion: '\n      汉字: 接近\n      读音: せっきん\n      意思: getting closer\n      来源: drawing nearer\n      同义词: 接近\n    ',
  },
  {
    question: '接続',
    answer: 'setsuzoku',
    explantion: '\n      汉字: 接続\n      读音: せつぞく\n      意思: (1) connection\n      来源: union\n      同义词: 接続\n    ',
  },
  {
    question: '絶えず',
    answer: 'taezu',
    explantion: '\n      汉字: 絶えず\n      读音: たえず\n      意思: constantly\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '先祖',
    answer: 'senzo',
    explantion: '\n      汉字: 先祖\n      读音: せんぞ\n      意思: ancestor\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '先端',
    answer: 'sentan',
    explantion: '\n      汉字: 先端\n      读音: せんたん\n      意思: pointed end\n      来源: tip\n      同义词: 先端, 尖端\n    ',
  },
  {
    question: '先程',
    answer: 'sakihodo',
    explantion: '\n      汉字: 先程\n      读音: さきほど\n      意思: some time ago\n      来源: waller\n      同义词: 先ほど\n    ',
  },
  {
    question: '千切る',
    answer: 'senkiru',
    explantion: '\n      汉字: 千切る\n      读音: ちぎる\n      意思: to cut up fine\n      来源: to pick (fruit)\n      同义词: 千切る, \n    ',
  },
  {
    question: '占う',
    answer: 'uranau',
    explantion: '\n      汉字: 占う\n      读音: うらなう\n      意思: to forecast\n      来源: to predict\n      同义词: 占う, 卜う\n    ',
  },
  {
    question: '宣伝',
    answer: 'senden',
    explantion: '\n      汉字: 宣伝\n      读音: せんでん\n      意思: propaganda\n      来源: publicity\n      同义词: 宣伝\n    ',
  },
  {
    question: '専制',
    answer: 'sensei',
    explantion: '\n      汉字: 専制\n      读音: せんせい\n      意思: despotism\n      来源: autocracy\n      同义词: 専制, 擅制\n    ',
  },
  {
    question: '尖る',
    answer: 'togaru',
    explantion: '\n      汉字: 尖る\n      读音: とがる\n      意思: to taper to a point\n      来源: to become sharp\n      同义词: 尖る, 尖る, 尖がる, 尖がる, 尖んがる\n    ',
  },
  {
    question: '扇子',
    answer: 'sensu',
    explantion: '\n      汉字: 扇子\n      读音: せんす\n      意思: folding fan\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '扇風機',
    answer: 'sempūki',
    explantion: '\n      汉字: 扇風機\n      读音: せんぷうき\n      意思: electric fan\n      来源: waller\n      同义词: 扇風器\n    ',
  },
  {
    question: '洗剤',
    answer: 'senzai',
    explantion: '\n      汉字: 洗剤\n      读音: せんざい\n      意思: detergent\n      来源: washing material\n      同义词: 洗剤\n    ',
  },
  {
    question: '炒る',
    answer: 'iru',
    explantion: '\n      汉字: 炒る\n      读音: いる\n      意思: to parch\n      来源: waller\n      同义词: 煎る, 熬る\n    ',
  },
  {
    question: '線路',
    answer: 'senro',
    explantion: '\n      汉字: 線路\n      读音: せんろ\n      意思: line\n      来源: track\n      同义词: 線路\n    ',
  },
  {
    question: '羨ましい',
    answer: 'urayamashii',
    explantion: '\n      汉字: 羨ましい\n      读音: うらやましい\n      意思: envious\n      来源: enviable\n      同义词: 羨ましい\n    ',
  },
  {
    question: '羨む',
    answer: 'urayamu',
    explantion: '\n      汉字: 羨む\n      读音: うらやむ\n      意思: to envy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '船便',
    answer: 'funabin',
    explantion: '\n      汉字: 船便\n      读音: ふなびん\n      意思: surface mail (ship)\n      来源: waller\n      同义词: 船便\n    ',
  },
  {
    question: '前後',
    answer: 'zengo',
    explantion: '\n      汉字: 前後\n      读音: ぜんご\n      意思: around\n      来源: throughout\n      同义词: 前後\n    ',
  },
  {
    question: '漸く',
    answer: 'yōyaku',
    explantion: '\n      汉字: 漸く\n      读音: ようやく\n      意思: gradually\n      来源: finally\n      同义词: 漸く, \n    ',
  },
  {
    question: '全集',
    answer: 'zenshū',
    explantion: '\n      汉字: 全集\n      读音: ぜんしゅう\n      意思: complete works\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '全身',
    answer: 'zenshin',
    explantion: '\n      汉字: 全身\n      读音: ぜんしん\n      意思: the whole body\n      来源: full-length (portrait)\n      同义词: 全身\n    ',
  },
  {
    question: '全般',
    answer: 'zempan',
    explantion: '\n      汉字: 全般\n      读音: ぜんぱん\n      意思: (the) whole\n      来源: universal\n      同义词: 全般\n    ',
  },
  {
    question: '狙い',
    answer: 'nerai',
    explantion: '\n      汉字: 狙い\n      读音: ねらい\n      意思: aim\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '狙う',
    answer: 'nerau',
    explantion: '\n      汉字: 狙う\n      读音: ねらう\n      意思: to aim at\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '祖先',
    answer: 'sosen',
    explantion: '\n      汉字: 祖先\n      读音: そせん\n      意思: ancestor\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '粗い',
    answer: 'arai',
    explantion: '\n      汉字: 粗い\n      读音: あらい\n      意思: coarse\n      来源: rough\n      同义词: 粗い\n    ',
  },
  {
    question: '素質',
    answer: 'soshitsu',
    explantion: '\n      汉字: 素質\n      读音: そしつ\n      意思: character\n      来源: qualities\n      同义词: 素質\n    ',
  },
  {
    question: '素人',
    answer: 'shirōto',
    explantion: '\n      汉字: 素人\n      读音: しろうと\n      意思: amateur\n      来源: novice\n      同义词: 素人, 素人, 素人, 素人, 白人, 白人, 白人, 白人\n    ',
  },
  {
    question: '素直',
    answer: 'sunao',
    explantion: '\n      汉字: 素直\n      读音: すなお\n      意思: obedient\n      来源: meek\n      同义词: 素直\n    ',
  },
  {
    question: '組み立てる',
    answer: 'kumitateru',
    explantion: '\n      汉字: 組み立てる\n      读音: くみたてる\n      意思: to assemble\n      来源: to set up\n      同义词: 組み立てる, 組立てる, 組み立る\n    ',
  },
  {
    question: '遡る',
    answer: 'sakanoboru',
    explantion: '\n      汉字: 遡る\n      读音: さかのぼる\n      意思: to go back\n      来源: to go upstream\n      同义词: 遡る, , 溯る, 逆上る, 泝る\n    ',
  },
  {
    question: '創作',
    answer: 'sōsaku',
    explantion: '\n      汉字: 創作\n      读音: そうさく\n      意思: production\n      来源: literary creation\n      同义词: 創作\n    ',
  },
  {
    question: '倉庫',
    answer: 'sōko',
    explantion: '\n      汉字: 倉庫\n      读音: そうこ\n      意思: storehouse\n      来源: warehouse\n      同义词: 倉庫\n    ',
  },
  {
    question: '掃く',
    answer: 'haku',
    explantion: '\n      汉字: 掃く\n      读音: はく\n      意思: to sweep\n      来源: to brush\n      同义词: 掃く\n    ',
  },
  {
    question: '挿す',
    answer: 'sasu',
    explantion: '\n      汉字: 挿す\n      读音: さす\n      意思: to insert\n      来源: to put in\n      同义词: 挿す\n    ',
  },
  {
    question: '掻く',
    answer: 'kaku',
    explantion: '\n      汉字: 掻く\n      读音: かく\n      意思: to scratch\n      来源: to perspire\n      同义词: 掻く, , 搔く\n    ',
  },
  {
    question: '早口',
    answer: 'hayakuchi',
    explantion: '\n      汉字: 早口\n      读音: はやくち\n      意思: fast-talking\n      来源: waller\n      同义词: 早口, 速口, 速口\n    ',
  },
  {
    question: '早速',
    answer: 'sassoku',
    explantion: '\n      汉字: 早速\n      读音: さっそく\n      意思: at once\n      来源: immediately\n      同义词: 早速\n    ',
  },
  {
    question: '争う',
    answer: 'arasou',
    explantion: '\n      汉字: 争う\n      读音: あらそう\n      意思: to dispute\n      来源: to argue\n      同义词: 争う\n    ',
  },
  {
    question: '相違',
    answer: 'sōi',
    explantion: '\n      汉字: 相違\n      读音: そうい\n      意思: difference\n      来源: discrepancy\n      同义词: 相違, 相異\n    ',
  },
  {
    question: '相撲',
    answer: 'sumō',
    explantion: '\n      汉字: 相撲\n      读音: すもう\n      意思: sumo wrestling\n      来源: waller\n      同义词: 相撲, 角力, 角力\n    ',
  },
  {
    question: '窓口',
    answer: 'madoguchi',
    explantion: '\n      汉字: 窓口\n      读音: まどぐち\n      意思: ticket window\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '総理大臣',
    answer: 'sōridaijin',
    explantion: '\n      汉字: 総理大臣\n      读音: そうりだいじん\n      意思: Prime Minister\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '草履',
    answer: 'zōri',
    explantion: '\n      汉字: 草履\n      读音: ぞうり\n      意思: zoori (Japanese footwear)\n      来源: sandals\n      同义词: 草履, 草履\n    ',
  },
  {
    question: '葬式',
    answer: 'sōshiki',
    explantion: '\n      汉字: 葬式\n      读音: そうしき\n      意思: funeral\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '送り仮名',
    answer: 'okurikamei',
    explantion: '\n      汉字: 送り仮名\n      读音: おくりがな\n      意思: part of word written in kana\n      来源: waller\n      同义词: 送りがな\n    ',
  },
  {
    question: '送別',
    answer: 'sōbetsu',
    explantion: '\n      汉字: 送別\n      读音: そうべつ\n      意思: farewell\n      来源: send-off\n      同义词: 送別\n    ',
  },
  {
    question: '送料',
    answer: 'sōryō',
    explantion: '\n      汉字: 送料\n      读音: そうりょう\n      意思: postage\n      来源: carriage\n      同义词: 送料\n    ',
  },
  {
    question: '騒がしい',
    answer: 'sawagashii',
    explantion: '\n      汉字: 騒がしい\n      读音: さわがしい\n      意思: noisy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '増減',
    answer: 'zōgen',
    explantion: '\n      汉字: 増減\n      读音: ぞうげん\n      意思: increase and decrease\n      来源: fluctuation\n      同义词: 増減\n    ',
  },
  {
    question: '増大',
    answer: 'zōdai',
    explantion: '\n      汉字: 増大\n      读音: ぞうだい\n      意思: enlargement\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '憎い',
    answer: 'nikui',
    explantion: '\n      汉字: 憎い\n      读音: にくい\n      意思: hateful\n      来源: abominable\n      同义词: 憎い, 悪い\n    ',
  },
  {
    question: '憎む',
    answer: 'nikumu',
    explantion: '\n      汉字: 憎む\n      读音: にくむ\n      意思: to hate\n      来源: to detest\n      同义词: 憎む, 悪む\n    ',
  },
  {
    question: '憎らしい',
    answer: 'nikurashii',
    explantion: '\n      汉字: 憎らしい\n      读音: にくらしい\n      意思: odious\n      来源: hateful\n      同义词: 憎らしい\n    ',
  },
  {
    question: '造船',
    answer: 'zōsen',
    explantion: '\n      汉字: 造船\n      读音: ぞうせん\n      意思: shipbuilding\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '測定',
    answer: 'sokutei',
    explantion: '\n      汉字: 測定\n      读音: そくてい\n      意思: measurement\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '測量',
    answer: 'sokuryō',
    explantion: '\n      汉字: 測量\n      读音: そくりょう\n      意思: measurement\n      来源: surveying\n      同义词: 測量\n    ',
  },
  {
    question: '足る',
    answer: 'taru',
    explantion: '\n      汉字: 足る\n      读音: たる\n      意思: to be sufficient\n      来源: to be enough\n      同义词: 足る\n    ',
  },
  {
    question: '足袋',
    answer: 'tabi',
    explantion: '\n      汉字: 足袋\n      读音: たび\n      意思: tabi\n      来源: Japanese socks (with split toe)\n      同义词: 足袋, 単皮\n    ',
  },
  {
    question: '速達',
    answer: 'sokutatsu',
    explantion: '\n      汉字: 速達\n      读音: そくたつ\n      意思: express\n      来源: special delivery\n      同义词: 速達\n    ',
  },
  {
    question: '速力',
    answer: 'sokuryoku',
    explantion: '\n      汉字: 速力\n      读音: そくりょく\n      意思: speed\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '属する',
    answer: 'zokusuru',
    explantion: '\n      汉字: 属する\n      读音: ぞくする\n      意思: to belong to\n      来源: to come under\n      同义词: 属する\n    ',
  },
  {
    question: '揃う',
    answer: 'sorou',
    explantion: '\n      汉字: 揃う\n      读音: そろう\n      意思: to become complete\n      来源: to be equal\n      同义词: 揃う\n    ',
  },
  {
    question: '揃える',
    answer: 'soroeru',
    explantion: '\n      汉字: 揃える\n      读音: そろえる\n      意思: to put things in order\n      来源: to arrange\n      同义词: 揃える\n    ',
  },
  {
    question: '存じる',
    answer: 'zonjiru',
    explantion: '\n      汉字: 存じる\n      读音: ぞんじる\n      意思: (hum) to know\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '損得',
    answer: 'sontoku',
    explantion: '\n      汉字: 損得\n      读音: そんとく\n      意思: loss and gain\n      来源: advantage and disadvantage\n      同义词: 損得\n    ',
  },
  {
    question: '太鼓',
    answer: 'taiko',
    explantion: '\n      汉字: 太鼓\n      读音: たいこ\n      意思: drum\n      来源: tambourine\n      同义词: 太鼓\n    ',
  },
  {
    question: '妥当',
    answer: 'datō',
    explantion: '\n      汉字: 妥当\n      读音: だとう\n      意思: valid\n      来源: proper\n      同义词: 妥当\n    ',
  },
  {
    question: '楕円',
    answer: 'daen',
    explantion: '\n      汉字: 楕円\n      读音: だえん\n      意思: ellipse\n      来源: waller\n      同义词: だ円, 橢円\n    ',
  },
  {
    question: '体系',
    answer: 'taikei',
    explantion: '\n      汉字: 体系\n      读音: たいけい\n      意思: system\n      来源: organization\n      同义词: 体系\n    ',
  },
  {
    question: '体制',
    answer: 'taisei',
    explantion: '\n      汉字: 体制\n      读音: たいせい\n      意思: order\n      来源: system\n      同义词: 体制\n    ',
  },
  {
    question: '体積',
    answer: 'taiseki',
    explantion: '\n      汉字: 体積\n      读音: たいせき\n      意思: capacity\n      来源: volume\n      同义词: 体積\n    ',
  },
  {
    question: '体操',
    answer: 'taisō',
    explantion: '\n      汉字: 体操\n      读音: たいそう\n      意思: gymnastics\n      来源: physical exercises\n      同义词: 体操\n    ',
  },
  {
    question: '対策',
    answer: 'taisaku',
    explantion: '\n      汉字: 対策\n      读音: たいさく\n      意思: counter-plan\n      来源: counter-measure\n      同义词: 対策\n    ',
  },
  {
    question: '対照',
    answer: 'taishō',
    explantion: '\n      汉字: 対照\n      读音: たいしょう\n      意思: contrast\n      来源: antithesis\n      同义词: 対照\n    ',
  },
  {
    question: '対立',
    answer: 'tairitsu',
    explantion: '\n      汉字: 対立\n      读音: たいりつ\n      意思: confrontation\n      来源: opposition\n      同义词: 対立\n    ',
  },
  {
    question: '待ち合わせる',
    answer: 'machiawaseru',
    explantion: '\n      汉字: 待ち合わせる\n      读音: まちあわせる\n      意思: to rendezvous\n      来源: to meet at a prearranged place and time\n      同义词: 待ち合わせる, 待ち合せる, 待ちあわせる\n    ',
  },
  {
    question: '待合室',
    answer: 'machiaishitsu',
    explantion: '\n      汉字: 待合室\n      读音: まちあいしつ\n      意思: waiting room\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '怠る',
    answer: 'okotaru',
    explantion: '\n      汉字: 怠る\n      读音: おこたる\n      意思: to neglect\n      来源: to be off guard\n      同义词: 怠る\n    ',
  },
  {
    question: '貸家',
    answer: 'kashiya',
    explantion: '\n      汉字: 貸家\n      读音: かしや\n      意思: house for rent\n      来源: waller\n      同义词: 貸家, 貸し家, 貸し家, 貸屋, 貸し屋\n    ',
  },
  {
    question: '代名詞',
    answer: 'daimeishi',
    explantion: '\n      汉字: 代名詞\n      读音: だいめいし\n      意思: pronoun\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大して',
    answer: 'taishite',
    explantion: '\n      汉字: 大して\n      读音: たいして\n      意思: (not so) much\n      来源: (not) very\n      同义词: 大して, \n    ',
  },
  {
    question: '大学院',
    answer: 'daigakuin',
    explantion: '\n      汉字: 大学院\n      读音: だいがくいん\n      意思: graduate school\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大工',
    answer: 'daiku',
    explantion: '\n      汉字: 大工\n      读音: だいく\n      意思: carpenter\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大小',
    answer: 'daishō',
    explantion: '\n      汉字: 大小\n      读音: だいしょう\n      意思: size\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大層',
    answer: 'taisō',
    explantion: '\n      汉字: 大層\n      读音: たいそう\n      意思: very much\n      来源: exaggerated\n      同义词: 大層, , 大そう\n    ',
  },
  {
    question: '大通り',
    answer: 'ōdōri',
    explantion: '\n      汉字: 大通り\n      读音: おおどおり\n      意思: main street\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大分',
    answer: 'ōita',
    explantion: '\n      汉字: 大分\n      读音: だいぶん\n      意思: considerably\n      来源: greatly\n      同义词: 大分\n    ',
  },
  {
    question: '大凡',
    answer: 'ōyoso',
    explantion: '\n      汉字: 大凡\n      读音: おおよそ\n      意思: about\n      来源: roughly\n      同义词: 大凡, , 大よそ, 凡そ, 凡\n    ',
  },
  {
    question: '大木',
    answer: 'taiboku',
    explantion: '\n      汉字: 大木\n      读音: たいぼく\n      意思: large tree\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '第一',
    answer: 'daiichi',
    explantion: '\n      汉字: 第一\n      读音: だいいち\n      意思: first\n      来源: foremost\n      同义词: 第一, 第１\n    ',
  },
  {
    question: '題名',
    answer: 'daimei',
    explantion: '\n      汉字: 題名\n      读音: だいめい\n      意思: title\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '滝',
    answer: 'taki',
    explantion: '\n      汉字: 滝\n      读音: たき\n      意思: waterfall\n      来源: waller\n      同义词: 瀧\n    ',
  },
  {
    question: '濁る',
    answer: 'nigoru',
    explantion: '\n      汉字: 濁る\n      读音: にごる\n      意思: to become muddy\n      来源: to get impure\n      同义词: 濁る\n    ',
  },
  {
    question: '但し',
    answer: 'tadashi',
    explantion: '\n      汉字: 但し\n      读音: ただし\n      意思: but\n      来源: however\n      同义词: 但し, \n    ',
  },
  {
    question: '脱線',
    answer: 'dassen',
    explantion: '\n      汉字: 脱線\n      读音: だっせん\n      意思: derailment\n      来源: digression\n      同义词: 脱線\n    ',
  },
  {
    question: '単数',
    answer: 'tansū',
    explantion: '\n      汉字: 単数\n      读音: たんすう\n      意思: singular (number)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '担ぐ',
    answer: 'katsugu',
    explantion: '\n      汉字: 担ぐ\n      读音: かつぐ\n      意思: to shoulder\n      来源: to carry on shoulder\n      同义词: 担ぐ\n    ',
  },
  {
    question: '探る',
    answer: 'saguru',
    explantion: '\n      汉字: 探る\n      读音: さぐる\n      意思: to search\n      来源: to look for\n      同义词: 探る\n    ',
  },
  {
    question: '淡水',
    answer: 'tansui',
    explantion: '\n      汉字: 淡水\n      读音: たんすい\n      意思: fresh water\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '短期',
    answer: 'tanki',
    explantion: '\n      汉字: 短期\n      读音: たんき\n      意思: short term\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '短所',
    answer: 'tansho',
    explantion: '\n      汉字: 短所\n      读音: たんしょ\n      意思: (1) defect\n      来源: demerit\n      同义词: 短所\n    ',
  },
  {
    question: '団地',
    answer: 'danchi',
    explantion: '\n      汉字: 団地\n      读音: だんち\n      意思: multi-unit apartments\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '断水',
    answer: 'dansui',
    explantion: '\n      汉字: 断水\n      读音: だんすい\n      意思: water outage\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '断定',
    answer: 'dantei',
    explantion: '\n      汉字: 断定\n      读音: だんてい\n      意思: conclusion\n      来源: decision\n      同义词: 断定\n    ',
  },
  {
    question: '段階',
    answer: 'dankai',
    explantion: '\n      汉字: 段階\n      读音: だんかい\n      意思: gradation\n      来源: grade\n      同义词: 段階\n    ',
  },
  {
    question: '知人',
    answer: 'chijin',
    explantion: '\n      汉字: 知人\n      读音: ちじん\n      意思: friend\n      来源: acquaintance\n      同义词: 知人\n    ',
  },
  {
    question: '地質',
    answer: 'chishitsu',
    explantion: '\n      汉字: 地質\n      读音: ちしつ\n      意思: geological features\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '地帯',
    answer: 'chitai',
    explantion: '\n      汉字: 地帯\n      读音: ちたい\n      意思: area\n      来源: zone\n      同义词: 地帯\n    ',
  },
  {
    question: '地点',
    answer: 'chiten',
    explantion: '\n      汉字: 地点\n      读音: ちてん\n      意思: site\n      来源: point on a map\n      同义词: 地点\n    ',
  },
  {
    question: '地盤',
    answer: 'jiban',
    explantion: '\n      汉字: 地盤\n      读音: じばん\n      意思: (the) ground\n      来源: waller\n      同义词: 地盤\n    ',
  },
  {
    question: '地味',
    answer: 'jimi',
    explantion: '\n      汉字: 地味\n      读音: じみ\n      意思: plain\n      来源: simple\n      同义词: 地味\n    ',
  },
  {
    question: '地名',
    answer: 'chimei',
    explantion: '\n      汉字: 地名\n      读音: ちめい\n      意思: place name\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '竹',
    answer: 'take',
    explantion: '\n      汉字: 竹\n      读音: たけ\n      意思: bamboo\n      来源: middle (of a three-tier ranking system)\n      同义词: 竹, \n    ',
  },
  {
    question: '着せる',
    answer: 'kiseru',
    explantion: '\n      汉字: 着せる\n      读音: きせる\n      意思: to put on clothes\n      来源: waller\n      同义词: 被せる\n    ',
  },
  {
    question: '着替え',
    answer: 'kigae',
    explantion: '\n      汉字: 着替え\n      读音: きがえ\n      意思: changing clothes\n      来源: change of clothes\n      同义词: 着替え, 着がえ, 着換え\n    ',
  },
  {
    question: '中間',
    answer: 'chūkan',
    explantion: '\n      汉字: 中間\n      读音: ちゅうかん\n      意思: middle\n      来源: midway\n      同义词: 中間\n    ',
  },
  {
    question: '中旬',
    answer: 'chūjun',
    explantion: '\n      汉字: 中旬\n      读音: ちゅうじゅん\n      意思: second third of a month\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '中世',
    answer: 'chūsei',
    explantion: '\n      汉字: 中世\n      读音: ちゅうせい\n      意思: Middle Ages\n      来源: mediaeval times\n      同义词: 中世\n    ',
  },
  {
    question: '中性',
    answer: 'chūsei',
    explantion: '\n      汉字: 中性\n      读音: ちゅうせい\n      意思: neuter gender\n      来源: neutral (chem.)\n      同义词: 中性\n    ',
  },
  {
    question: '中途',
    answer: 'chūto',
    explantion: '\n      汉字: 中途\n      读音: ちゅうと\n      意思: in the middle\n      来源: half-way\n      同义词: 中途\n    ',
  },
  {
    question: '中年',
    answer: 'chūnen',
    explantion: '\n      汉字: 中年\n      读音: ちゅうねん\n      意思: middle-aged\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '仲直り',
    answer: 'nakanaori',
    explantion: '\n      汉字: 仲直り\n      读音: なかなおり\n      意思: reconciliation\n      来源: make peace with\n      同义词: 仲直り\n    ',
  },
  {
    question: '仲良し',
    answer: 'nakayoshi',
    explantion: '\n      汉字: 仲良し\n      读音: なかよし\n      意思: intimate friend\n      来源: bosom buddy\n      同义词: 仲良し, 仲好し, 仲よし, 仲好\n    ',
  },
  {
    question: '抽象',
    answer: 'chūshō',
    explantion: '\n      汉字: 抽象\n      读音: ちゅうしょう\n      意思: abstract\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '昼寝',
    answer: 'hirune',
    explantion: '\n      汉字: 昼寝\n      读音: ひるね\n      意思: nap (at home)\n      来源: siesta\n      同义词: 昼寝, 昼寐\n    ',
  },
  {
    question: '著す',
    answer: 'arawasu',
    explantion: '\n      汉字: 著す\n      读音: あらわす\n      意思: to write\n      来源: to publish\n      同义词: 著す, 著わす\n    ',
  },
  {
    question: '貯蔵',
    answer: 'chozō',
    explantion: '\n      汉字: 貯蔵\n      读音: ちょぞう\n      意思: storage\n      来源: preservation\n      同义词: 貯蔵\n    ',
  },
  {
    question: '張り切る',
    answer: 'harikiru',
    explantion: '\n      汉字: 張り切る\n      读音: はりきる\n      意思: to be in high spirits\n      来源: to be full of vigor\n      同义词: 張り切る\n    ',
  },
  {
    question: '彫る',
    answer: 'horu',
    explantion: '\n      汉字: 彫る\n      读音: ほる\n      意思: to carve\n      来源: to engrave\n      同义词: 彫る, 雕る, 雕る, 鐫る, 鐫る\n    ',
  },
  {
    question: '彫刻',
    answer: 'chōkoku',
    explantion: '\n      汉字: 彫刻\n      读音: ちょうこく\n      意思: carving\n      来源: engraving\n      同义词: 彫刻\n    ',
  },
  {
    question: '調整',
    answer: 'chōsei',
    explantion: '\n      汉字: 調整\n      读音: ちょうせい\n      意思: regulation\n      来源: adjustment\n      同义词: 調整\n    ',
  },
  {
    question: '調節',
    answer: 'chōsetsu',
    explantion: '\n      汉字: 調節\n      读音: ちょうせつ\n      意思: regulation\n      来源: adjustment\n      同义词: 調節\n    ',
  },
  {
    question: '調味料',
    answer: 'chōmiryō',
    explantion: '\n      汉字: 調味料\n      读音: ちょうみりょう\n      意思: condiment\n      来源: seasoning\n      同义词: 調味料\n    ',
  },
  {
    question: '超過',
    answer: 'chōka',
    explantion: '\n      汉字: 超過\n      读音: ちょうか\n      意思: excess\n      来源: being more than\n      同义词: 超過\n    ',
  },
  {
    question: '跳ねる',
    answer: 'haneru',
    explantion: '\n      汉字: 跳ねる\n      读音: はねる\n      意思: to jump\n      来源: to leap\n      同义词: 跳ねる\n    ',
  },
  {
    question: '跳ぶ',
    answer: 'tobu',
    explantion: '\n      汉字: 跳ぶ\n      读音: とぶ\n      意思: to jump\n      来源: to fly\n      同义词: 跳ぶ\n    ',
  },
  {
    question: '永い',
    answer: 'nagai',
    explantion: '\n      汉字: 永い\n      读音: ながい\n      意思: long\n      来源: lengthy\n      同义词: 永い\n    ',
  },
  {
    question: '長所',
    answer: 'chōsho',
    explantion: '\n      汉字: 長所\n      读音: ちょうしょ\n      意思: (1) strong point\n      来源: merit\n      同义词: 長所\n    ',
  },
  {
    question: '長女',
    answer: 'chōjo',
    explantion: '\n      汉字: 長女\n      读音: ちょうじょ\n      意思: eldest daughter\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '長短',
    answer: 'chōtan',
    explantion: '\n      汉字: 長短\n      读音: ちょうたん\n      意思: length\n      来源: long and short\n      同义词: 長短\n    ',
  },
  {
    question: '長男',
    answer: 'chōnan',
    explantion: '\n      汉字: 長男\n      读音: ちょうなん\n      意思: eldest son\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '長方形',
    answer: 'chōhōkei',
    explantion: '\n      汉字: 長方形\n      读音: ちょうほうけい\n      意思: rectangle\n      来源: oblong\n      同义词: 長方形\n    ',
  },
  {
    question: '頂点',
    answer: 'chōten',
    explantion: '\n      汉字: 頂点\n      读音: ちょうてん\n      意思: top\n      来源: summit\n      同义词: 頂点\n    ',
  },
  {
    question: '直角',
    answer: 'chokkaku',
    explantion: '\n      汉字: 直角\n      读音: ちょっかく\n      意思: right angle\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '直後',
    answer: 'chokugo',
    explantion: '\n      汉字: 直後\n      读音: ちょくご\n      意思: immediately following\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '直線',
    answer: 'chokusen',
    explantion: '\n      汉字: 直線\n      读音: ちょくせん\n      意思: straight line\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '直前',
    answer: 'chokuzen',
    explantion: '\n      汉字: 直前\n      读音: ちょくぜん\n      意思: just before\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '直通',
    answer: 'chokutsū',
    explantion: '\n      汉字: 直通\n      读音: ちょくつう\n      意思: direct communication\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '直流',
    answer: 'chokuryū',
    explantion: '\n      汉字: 直流\n      读音: ちょくりゅう\n      意思: direct current\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '追い越す',
    answer: 'oikosu',
    explantion: '\n      汉字: 追い越す\n      读音: おいこす\n      意思: to pass (e.g. car)\n      来源: to outdistance\n      同义词: 追い越す, 追越す, 追いこす\n    ',
  },
  {
    question: '追加',
    answer: 'tsuika',
    explantion: '\n      汉字: 追加\n      读音: ついか\n      意思: addition\n      来源: supplement\n      同义词: 追加\n    ',
  },
  {
    question: '通り掛かる',
    answer: 'tōrikakaru',
    explantion: '\n      汉字: 通り掛かる\n      读音: とおりかかる\n      意思: to happen to pass by\n      来源: waller\n      同义词: 通りかかる, 通り掛る\n    ',
  },
  {
    question: '通貨',
    answer: 'tsūka',
    explantion: '\n      汉字: 通貨\n      读音: つうか\n      意思: currency\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '通勤',
    answer: 'tsūkin',
    explantion: '\n      汉字: 通勤\n      读音: つうきん\n      意思: commuting to work\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '通知',
    answer: 'tsūchi',
    explantion: '\n      汉字: 通知\n      读音: つうち\n      意思: notice\n      来源: notification\n      同义词: 通知\n    ',
  },
  {
    question: '通帳',
    answer: 'kayoichō',
    explantion: '\n      汉字: 通帳\n      读音: つうちょう\n      意思: passbook\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '通訳',
    answer: 'tsūyaku',
    explantion: '\n      汉字: 通訳\n      读音: つうやく\n      意思: interpretation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '通用',
    answer: 'tsūyō',
    explantion: '\n      汉字: 通用\n      读音: つうよう\n      意思: popular use\n      来源: circulation\n      同义词: 通用\n    ',
  },
  {
    question: '通路',
    answer: 'tsūro',
    explantion: '\n      汉字: 通路\n      读音: つうろ\n      意思: passage\n      来源: pathway\n      同义词: 通路\n    ',
  },
  {
    question: '浸ける',
    answer: 'tsukeru',
    explantion: '\n      汉字: 浸ける\n      读音: つける\n      意思: to dip in\n      来源: to soak\n      同义词: 浸ける\n    ',
  },
  {
    question: '潰す',
    answer: 'tsubusu',
    explantion: '\n      汉字: 潰す\n      读音: つぶす\n      意思: to smash\n      来源: to waste\n      同义词: 潰す\n    ',
  },
  {
    question: '潰れる',
    answer: 'tsubureru',
    explantion: '\n      汉字: 潰れる\n      读音: つぶれる\n      意思: to be smashed\n      来源: to go bankrupt\n      同义词: 潰れる\n    ',
  },
  {
    question: '爪',
    answer: 'tsume',
    explantion: '\n      汉字: 爪\n      读音: つめ\n      意思: fingernail or toenail\n      来源: claw\n      同义词: 爪\n    ',
  },
  {
    question: '吊す',
    answer: 'tsurusu',
    explantion: '\n      汉字: 吊す\n      读音: つるす\n      意思: to hang\n      来源: waller\n      同义词: 吊るす\n    ',
  },
  {
    question: '吊る',
    answer: 'tsuru',
    explantion: '\n      汉字: 吊る\n      读音: つる\n      意思: to hang\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '釣り合う',
    answer: 'tsuriau',
    explantion: '\n      汉字: 釣り合う\n      读音: つりあう\n      意思: to balance\n      来源: to be in harmony\n      同义词: 釣り合う, つり合う, 釣合う\n    ',
  },
  {
    question: '低下',
    answer: 'teika',
    explantion: '\n      汉字: 低下\n      读音: ていか\n      意思: fall\n      来源: decline\n      同义词: 低下\n    ',
  },
  {
    question: '停止',
    answer: 'teishi',
    explantion: '\n      汉字: 停止\n      读音: ていし\n      意思: suspension\n      来源: interruption\n      同义词: 停止, 停止\n    ',
  },
  {
    question: '停車',
    answer: 'teisha',
    explantion: '\n      汉字: 停車\n      读音: ていしゃ\n      意思: stopping (e.g. train)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '停電',
    answer: 'teiden',
    explantion: '\n      汉字: 停電\n      读音: ていでん\n      意思: failure of electricity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '剃刀',
    answer: 'kamisori',
    explantion: '\n      汉字: 剃刀\n      读音: かみそり\n      意思: razor\n      来源: waller\n      同义词: , , 剃刀, , 剃刀, \n    ',
  },
  {
    question: '定員',
    answer: 'teiin',
    explantion: '\n      汉字: 定員\n      读音: ていいん\n      意思: fixed number of regular personnel\n      来源: capacity (of boat\n      同义词: 定員\n    ',
  },
  {
    question: '定価',
    answer: 'teika',
    explantion: '\n      汉字: 定価\n      读音: ていか\n      意思: established price\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '定期券',
    answer: 'teikiken',
    explantion: '\n      汉字: 定期券\n      读音: ていきけん\n      意思: commuter pass\n      来源: season ticket\n      同义词: 定期券\n    ',
  },
  {
    question: '定規',
    answer: 'jōgi',
    explantion: '\n      汉字: 定規\n      读音: じょうぎ\n      意思: (measuring) ruler\n      来源: waller\n      同义词: 定木\n    ',
  },
  {
    question: '定休日',
    answer: 'teikyūbi',
    explantion: '\n      汉字: 定休日\n      读音: ていきゅうび\n      意思: regular holiday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '梯子',
    answer: 'hashigo',
    explantion: '\n      汉字: 梯子\n      读音: はしご\n      意思: ladder\n      来源: stairs\n      同义词: 梯子, , , 梯子, 階子, 梯, \n    ',
  },
  {
    question: '釘',
    answer: 'kugi',
    explantion: '\n      汉字: 釘\n      读音: くぎ\n      意思: nail\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '的確',
    answer: 'tekikaku',
    explantion: '\n      汉字: 的確\n      读音: てきかく\n      意思: precise\n      来源: accurate\n      同义词: 的確, 的確, 適確, 適確\n    ',
  },
  {
    question: '鉄橋',
    answer: 'tekkyō',
    explantion: '\n      汉字: 鉄橋\n      读音: てっきょう\n      意思: railway bridge\n      来源: iron bridge\n      同义词: 鉄橋\n    ',
  },
  {
    question: '鉄砲',
    answer: 'teppō',
    explantion: '\n      汉字: 鉄砲\n      读音: てっぽう\n      意思: gun\n      来源: waller\n      同义词: 鉄炮\n    ',
  },
  {
    question: '展開',
    answer: 'tenkai',
    explantion: '\n      汉字: 展開\n      读音: てんかい\n      意思: develop\n      来源: expansion (opposite of compression)\n      同义词: 展開\n    ',
  },
  {
    question: '纏める',
    answer: 'matomeru',
    explantion: '\n      汉字: 纏める\n      读音: まとめる\n      意思: to put in order\n      来源: to collect\n      同义词: 纏める, \n    ',
  },
  {
    question: '転がす',
    answer: 'korogasu',
    explantion: '\n      汉字: 転がす\n      读音: ころがす\n      意思: to roll\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '転がる',
    answer: 'korogaru',
    explantion: '\n      汉字: 転がる\n      读音: ころがる\n      意思: to roll\n      来源: to tumble\n      同义词: 転がる\n    ',
  },
  {
    question: '点く',
    answer: 'tsuku',
    explantion: '\n      汉字: 点く\n      读音: つく\n      意思: to catch fire\n      来源: (electricity) comes on\n      同义词: 点く, \n    ',
  },
  {
    question: '点数',
    answer: 'tensū',
    explantion: '\n      汉字: 点数\n      读音: てんすう\n      意思: marks\n      来源: points\n      同义词: 点数\n    ',
  },
  {
    question: '伝わる',
    answer: 'tsutawaru',
    explantion: '\n      汉字: 伝わる\n      读音: つたわる\n      意思: to be handed down\n      来源: to be introduced\n      同义词: 伝わる\n    ',
  },
  {
    question: '伝記',
    answer: 'denki',
    explantion: '\n      汉字: 伝記\n      读音: でんき\n      意思: biography\n      来源: life story\n      同义词: 伝記\n    ',
  },
  {
    question: '伝染',
    answer: 'densen',
    explantion: '\n      汉字: 伝染\n      读音: でんせん\n      意思: contagion\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '田植え',
    answer: 'taue',
    explantion: '\n      汉字: 田植え\n      读音: たうえ\n      意思: rice planting\n      来源: waller\n      同义词: 田植\n    ',
  },
  {
    question: '田ぼ',
    answer: 'tabo',
    explantion: '\n      汉字: 田ぼ\n      读音: たんぼ\n      意思: paddy field\n      来源: farm\n      同义词: 田ぼ, 田んぼ, 田圃, 田圃, 田圃, 田ぼ, 田畝, 田畝\n    ',
  },
  {
    question: '電球',
    answer: 'denkyū',
    explantion: '\n      汉字: 電球\n      读音: でんきゅう\n      意思: light bulb\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '電池',
    answer: 'denchi',
    explantion: '\n      汉字: 電池\n      读音: でんち\n      意思: battery\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '電柱',
    answer: 'denchū',
    explantion: '\n      汉字: 電柱\n      读音: でんちゅう\n      意思: telephone pole\n      来源: telegraph pole\n      同义词: 電柱\n    ',
  },
  {
    question: '電波',
    answer: 'dempa',
    explantion: '\n      汉字: 電波\n      读音: でんぱ\n      意思: electro-magnetic wave\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '電流',
    answer: 'denryū',
    explantion: '\n      汉字: 電流\n      读音: でんりゅう\n      意思: electric current\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '電力',
    answer: 'denryoku',
    explantion: '\n      汉字: 電力\n      读音: でんりょく\n      意思: electric power\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '吐き気',
    answer: 'hakike',
    explantion: '\n      汉字: 吐き気\n      读音: はきけ\n      意思: nausea\n      来源: sickness in the stomach\n      同义词: 吐き気, 吐気, 吐きけ, 嘔き気\n    ',
  },
  {
    question: '登場',
    answer: 'tōjō',
    explantion: '\n      汉字: 登場\n      读音: とうじょう\n      意思: entry (on stage)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '都心',
    answer: 'toshin',
    explantion: '\n      汉字: 都心\n      读音: としん\n      意思: heart (of city)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '凍える',
    answer: 'kogoeru',
    explantion: '\n      汉字: 凍える\n      读音: こごえる\n      意思: to freeze\n      来源: to be chilled\n      同义词: 凍える\n    ',
  },
  {
    question: '投書',
    answer: 'tōsho',
    explantion: '\n      汉字: 投書\n      读音: とうしょ\n      意思: letter to the editor\n      来源: letter from a reader\n      同义词: 投書\n    ',
  },
  {
    question: '東西',
    answer: 'tōzai',
    explantion: '\n      汉字: 東西\n      读音: とうざい\n      意思: East and West\n      来源: whole country\n      同义词: 東西, 東西\n    ',
  },
  {
    question: '東洋',
    answer: 'tōyō',
    explantion: '\n      汉字: 東洋\n      读音: とうよう\n      意思: Orient\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '盗難',
    answer: 'tōnan',
    explantion: '\n      汉字: 盗難\n      读音: とうなん\n      意思: theft\n      来源: robbery\n      同义词: 盗難\n    ',
  },
  {
    question: '湯気',
    answer: 'yuge',
    explantion: '\n      汉字: 湯気\n      读音: ゆげ\n      意思: steam\n      来源: vapour\n      同义词: 湯気\n    ',
  },
  {
    question: '灯台',
    answer: 'tōdai',
    explantion: '\n      汉字: 灯台\n      读音: とうだい\n      意思: lighthouse\n      来源: waller\n      同义词: 燈台\n    ',
  },
  {
    question: '灯油',
    answer: 'tōyu',
    explantion: '\n      汉字: 灯油\n      读音: とうゆ\n      意思: lamp oil\n      来源: kerosene\n      同义词: 灯油\n    ',
  },
  {
    question: '当日',
    answer: 'tōjitsu',
    explantion: '\n      汉字: 当日\n      读音: とうじつ\n      意思: appointed day\n      来源: very day\n      同义词: 当日\n    ',
  },
  {
    question: '当番',
    answer: 'tōban',
    explantion: '\n      汉字: 当番\n      读音: とうばん\n      意思: being on duty\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '等分',
    answer: 'tōbun',
    explantion: '\n      汉字: 等分\n      读音: とうぶん\n      意思: division into equal parts\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '統一',
    answer: 'tōitsu',
    explantion: '\n      汉字: 統一\n      读音: とういつ\n      意思: unity\n      来源: consolidation\n      同义词: 統一\n    ',
  },
  {
    question: '統計',
    answer: 'tōkei',
    explantion: '\n      汉字: 統計\n      读音: とうけい\n      意思: scattering\n      来源: a scatter\n      同义词: 統計\n    ',
  },
  {
    question: '逃がす',
    answer: 'nigasu',
    explantion: '\n      汉字: 逃がす\n      读音: にがす\n      意思: to let loose\n      来源: to set free\n      同义词: 逃がす, 迯がす\n    ',
  },
  {
    question: '透き通る',
    answer: 'sukitōru',
    explantion: '\n      汉字: 透き通る\n      读音: すきとおる\n      意思: to be(come) transparent\n      来源: waller\n      同义词: 透きとおる, 透き徹る\n    ',
  },
  {
    question: '透明',
    answer: 'tōmei',
    explantion: '\n      汉字: 透明\n      读音: とうめい\n      意思: transparency\n      来源: cleanness\n      同义词: 透明\n    ',
  },
  {
    question: '頭脳',
    answer: 'zunō',
    explantion: '\n      汉字: 頭脳\n      读音: ずのう\n      意思: head\n      来源: brains\n      同义词: 頭脳\n    ',
  },
  {
    question: '動作',
    answer: 'dōsa',
    explantion: '\n      汉字: 動作\n      读音: どうさ\n      意思: action\n      来源: movements\n      同义词: 動作\n    ',
  },
  {
    question: '同格',
    answer: 'dōkaku',
    explantion: '\n      汉字: 同格\n      读音: どうかく\n      意思: the same rank\n      来源: equality\n      同义词: 同格\n    ',
  },
  {
    question: '憧れる',
    answer: 'akogareru',
    explantion: '\n      汉字: 憧れる\n      读音: あこがれる\n      意思: to long for\n      来源: to yearn after\n      同义词: 憧れる, 憬れる, 憧憬れる\n    ',
  },
  {
    question: '瞳',
    answer: 'hitomi',
    explantion: '\n      汉字: 瞳\n      读音: ひとみ\n      意思: pupil (of eye)\n      来源: waller\n      同义词: 眸\n    ',
  },
  {
    question: '童話',
    answer: 'dōwa',
    explantion: '\n      汉字: 童話\n      读音: どうわ\n      意思: fairy tale\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '峠',
    answer: 'tōge',
    explantion: '\n      汉字: 峠\n      读音: とうげ\n      意思: ridge\n      来源: (mountain) pass\n      同义词: 峠\n    ',
  },
  {
    question: '特殊',
    answer: 'tokushu',
    explantion: '\n      汉字: 特殊\n      读音: とくしゅ\n      意思: special\n      来源: unique\n      同义词: 特殊\n    ',
  },
  {
    question: '特色',
    answer: 'tokushoku',
    explantion: '\n      汉字: 特色\n      读音: とくしょく\n      意思: characteristic\n      来源: feature\n      同义词: 特色\n    ',
  },
  {
    question: '特長',
    answer: 'tokuchō',
    explantion: '\n      汉字: 特長\n      读音: とくちょう\n      意思: forte\n      来源: merit\n      同义词: 特長\n    ',
  },
  {
    question: '特定',
    answer: 'tokutei',
    explantion: '\n      汉字: 特定\n      读音: とくてい\n      意思: specific\n      来源: special\n      同义词: 特定\n    ',
  },
  {
    question: '特売',
    answer: 'tokubai',
    explantion: '\n      汉字: 特売\n      读音: とくばい\n      意思: special sale\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '独り言',
    answer: 'hitorigoto',
    explantion: '\n      汉字: 独り言\n      读音: ひとりごと\n      意思: a soliloquy\n      来源: a monologue\n      同义词: 独り言, ひとり言, 独りごと, 一人言, 一人ごと\n    ',
  },
  {
    question: '突き当たり',
    answer: 'tsukiatari',
    explantion: '\n      汉字: 突き当たり\n      读音: つきあたり\n      意思: end (e.g. of street)\n      来源: waller\n      同义词: 突き当り, 突当り, 突きあたり, つき当たり, 突当たり\n    ',
  },
  {
    question: '突き当たる',
    answer: 'tsukiataru',
    explantion: '\n      汉字: 突き当たる\n      读音: つきあたる\n      意思: to run into\n      来源: to collide with\n      同义词: 突き当たる, 突き当る, 衝き当たる, 衝き当る\n    ',
  },
  {
    question: '突く',
    answer: 'tsuku',
    explantion: '\n      汉字: 突く\n      读音: つく\n      意思: (1) to thrust\n      来源: to strike\n      同义词: 突く, 衝く, 撞く, 捺く\n    ',
  },
  {
    question: '突っ込む',
    answer: 'tsukkomu',
    explantion: '\n      汉字: 突っ込む\n      读音: つっこむ\n      意思: to plunge into\n      来源: to go into deeply\n      同义词: 突っ込む, 突っこむ, 突込む, \n    ',
  },
  {
    question: '内科',
    answer: 'naika',
    explantion: '\n      汉字: 内科\n      读音: ないか\n      意思: internist clinic\n      来源: internal medicine\n      同义词: 内科\n    ',
  },
  {
    question: '内線',
    answer: 'naisen',
    explantion: '\n      汉字: 内線\n      读音: ないせん\n      意思: phone extension\n      来源: indoor wiring\n      同义词: 内線\n    ',
  },
  {
    question: '南極',
    answer: 'nankyoku',
    explantion: '\n      汉字: 南極\n      读音: なんきょく\n      意思: south pole\n      来源: Antarctic\n      同义词: 南極\n    ',
  },
  {
    question: '南米',
    answer: 'nambei',
    explantion: '\n      汉字: 南米\n      读音: なんべい\n      意思: South America\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '南北',
    answer: 'namboku',
    explantion: '\n      汉字: 南北\n      读音: なんぼく\n      意思: south and north\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '虹',
    answer: 'niji',
    explantion: '\n      汉字: 虹\n      读音: にじ\n      意思: rainbow\n      来源: waller\n      同义词: 霓\n    ',
  },
  {
    question: '日の出',
    answer: 'hinode',
    explantion: '\n      汉字: 日の出\n      读音: ひので\n      意思: sunrise\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '日の入り',
    answer: 'hinoiri',
    explantion: '\n      汉字: 日の入り\n      读音: ひのいり\n      意思: sunset\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '日陰',
    answer: 'hikage',
    explantion: '\n      汉字: 日陰\n      读音: ひかげ\n      意思: shadow\n      来源: waller\n      同义词: 日蔭, 日影\n    ',
  },
  {
    question: '日課',
    answer: 'nikka',
    explantion: '\n      汉字: 日課\n      读音: にっか\n      意思: daily lesson\n      来源: daily work\n      同义词: 日課\n    ',
  },
  {
    question: '日帰り',
    answer: 'higaeri',
    explantion: '\n      汉字: 日帰り\n      读音: ひがえり\n      意思: day trip\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '日時',
    answer: 'nichiji',
    explantion: '\n      汉字: 日時\n      读音: にちじ\n      意思: date and time\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '日程',
    answer: 'nittei',
    explantion: '\n      汉字: 日程\n      读音: にってい\n      意思: agenda\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '日用品',
    answer: 'nichiyōhin',
    explantion: '\n      汉字: 日用品\n      读音: にちようひん\n      意思: daily necessities\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '入社',
    answer: 'nyūsha',
    explantion: '\n      汉字: 入社\n      读音: にゅうしゃ\n      意思: entry to a company\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '濡らす',
    answer: 'nurasu',
    explantion: '\n      汉字: 濡らす\n      读音: ぬらす\n      意思: to wet\n      来源: to soak\n      同义词: 濡らす, 濡す\n    ',
  },
  {
    question: '熱する',
    answer: 'netsusuru',
    explantion: '\n      汉字: 熱する\n      读音: ねっする\n      意思: to heat\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '年度',
    answer: 'nendo',
    explantion: '\n      汉字: 年度\n      读音: ねんど\n      意思: year\n      来源: fiscal year\n      同义词: 年度\n    ',
  },
  {
    question: '捻る',
    answer: 'hineru',
    explantion: '\n      汉字: 捻る\n      读音: ひねる\n      意思: to turn (a switch) on or off\n      来源: to twist\n      同义词: 捻る, , 拈る, 撚る\n    ',
  },
  {
    question: '濃度',
    answer: 'nōdo',
    explantion: '\n      汉字: 濃度\n      读音: のうど\n      意思: concentration\n      来源: brightness\n      同义词: 濃度\n    ',
  },
  {
    question: '能率',
    answer: 'nōritsu',
    explantion: '\n      汉字: 能率\n      读音: のうりつ\n      意思: efficiency\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '農産物',
    answer: 'nōsambutsu',
    explantion: '\n      汉字: 農産物\n      读音: のうさんぶつ\n      意思: agricultural produce\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '農村',
    answer: 'nōson',
    explantion: '\n      汉字: 農村\n      读音: のうそん\n      意思: agricultural community\n      来源: farm village\n      同义词: 農村\n    ',
  },
  {
    question: '農薬',
    answer: 'nōyaku',
    explantion: '\n      汉字: 農薬\n      读音: のうやく\n      意思: agricultural chemicals\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '覗く',
    answer: 'nozoku',
    explantion: '\n      汉字: 覗く\n      读音: のぞく\n      意思: to peep in\n      来源: to look in\n      同义词: 覗く, 覘く, 窺く, 臨く\n    ',
  },
  {
    question: '派手',
    answer: 'hade',
    explantion: '\n      汉字: 派手\n      读音: はで\n      意思: showy\n      来源: loud\n      同义词: 派手\n    ',
  },
  {
    question: '破れる',
    answer: 'wareru',
    explantion: '\n      汉字: 破れる\n      读音: やぶれる\n      意思: to get torn\n      来源: to wear out\n      同义词: 破れる\n    ',
  },
  {
    question: '破片',
    answer: 'hahen',
    explantion: '\n      汉字: 破片\n      读音: はへん\n      意思: fragment\n      来源: splinter\n      同义词: 破片\n    ',
  },
  {
    question: '俳句',
    answer: 'haiku',
    explantion: '\n      汉字: 俳句\n      读音: はいく\n      意思: haiku poetry\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '拝む',
    answer: 'ogamu',
    explantion: '\n      汉字: 拝む\n      读音: おがむ\n      意思: to worship\n      来源: to beg\n      同义词: 拝む\n    ',
  },
  {
    question: '背負う',
    answer: 'seou',
    explantion: '\n      汉字: 背負う\n      读音: せおう\n      意思: to be burdened with\n      来源: to carry on back or shoulder\n      同义词: 背負う, 背負う, 脊負う, 脊負う\n    ',
  },
  {
    question: '配る',
    answer: 'kubaru',
    explantion: '\n      汉字: 配る\n      读音: くばる\n      意思: to distribute\n      来源: to deliver\n      同义词: 配る, 賦る\n    ',
  },
  {
    question: '売り切れ',
    answer: 'urikire',
    explantion: '\n      汉字: 売り切れ\n      读音: うりきれ\n      意思: sold-out\n      来源: waller\n      同义词: 売切れ, 売切\n    ',
  },
  {
    question: '売り切れる',
    answer: 'urikireru',
    explantion: '\n      汉字: 売り切れる\n      读音: うりきれる\n      意思: to be sold out\n      来源: waller\n      同义词: 売切れる\n    ',
  },
  {
    question: '売店',
    answer: 'baiten',
    explantion: '\n      汉字: 売店\n      读音: ばいてん\n      意思: shop\n      来源: stand\n      同义词: 売店\n    ',
  },
  {
    question: '売買',
    answer: 'baibai',
    explantion: '\n      汉字: 売買\n      读音: ばいばい\n      意思: trade\n      来源: buying and selling\n      同义词: 売買\n    ',
  },
  {
    question: '這う',
    answer: 'hau',
    explantion: '\n      汉字: 這う\n      读音: はう\n      意思: to creep\n      来源: to crawl\n      同义词: 這う, 匍う, 延う\n    ',
  },
  {
    question: '秤',
    answer: 'hakari',
    explantion: '\n      汉字: 秤\n      读音: はかり\n      意思: scales\n      来源: weighing machine\n      同义词: 秤\n    ',
  },
  {
    question: '剥く',
    answer: 'muku',
    explantion: '\n      汉字: 剥く\n      读音: むく\n      意思: to peel\n      来源: to skin\n      同义词: 剥く, , 剝く\n    ',
  },
  {
    question: '泊める',
    answer: 'tomeru',
    explantion: '\n      汉字: 泊める\n      读音: とめる\n      意思: to give shelter to\n      来源: to lodge\n      同义词: 泊める\n    ',
  },
  {
    question: '薄める',
    answer: 'usumeru',
    explantion: '\n      汉字: 薄める\n      读音: うすめる\n      意思: to dilute\n      来源: to water down\n      同义词: 薄める\n    ',
  },
  {
    question: '薄暗い',
    answer: 'usugurai',
    explantion: '\n      汉字: 薄暗い\n      读音: うすぐらい\n      意思: dim\n      来源: gloomy\n      同义词: 薄暗い, うす暗い\n    ',
  },
  {
    question: '迫る',
    answer: 'semaru',
    explantion: '\n      汉字: 迫る\n      读音: せまる\n      意思: to draw near\n      来源: to press\n      同义词: 迫る, 迫る, 逼る\n    ',
  },
  {
    question: '縛る',
    answer: 'shibaru',
    explantion: '\n      汉字: 縛る\n      读音: しばる\n      意思: to tie\n      来源: to bind\n      同义词: 縛る\n    ',
  },
  {
    question: '肌着',
    answer: 'hadagi',
    explantion: '\n      汉字: 肌着\n      读音: はだぎ\n      意思: underwear\n      来源: waller\n      同义词: 膚着, 肌衣, 肌衣\n    ',
  },
  {
    question: '鉢',
    answer: 'hachi',
    explantion: '\n      汉字: 鉢\n      读音: はち\n      意思: a bowl\n      来源: a pot\n      同义词: 鉢\n    ',
  },
  {
    question: '発揮',
    answer: 'hakki',
    explantion: '\n      汉字: 発揮\n      读音: はっき\n      意思: exhibition\n      来源: demonstration\n      同义词: 発揮\n    ',
  },
  {
    question: '発射',
    answer: 'hassha',
    explantion: '\n      汉字: 発射\n      读音: はっしゃ\n      意思: firing\n      来源: shooting\n      同义词: 発射\n    ',
  },
  {
    question: '発想',
    answer: 'hassō',
    explantion: '\n      汉字: 発想\n      读音: はっそう\n      意思: expression (music)\n      来源: conceptualization\n      同义词: 発想\n    ',
  },
  {
    question: '発電',
    answer: 'hatsuden',
    explantion: '\n      汉字: 発電\n      读音: はつでん\n      意思: generation (e.g. power)\n      来源: waller\n      同义词: 發電\n    ',
  },
  {
    question: '発売',
    answer: 'hatsubai',
    explantion: '\n      汉字: 発売\n      读音: はつばい\n      意思: sale\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '判子',
    answer: 'hanko',
    explantion: '\n      汉字: 判子\n      读音: はんこ\n      意思: seal (used for signature)\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '判事',
    answer: 'hanji',
    explantion: '\n      汉字: 判事\n      读音: はんじ\n      意思: judge\n      来源: judiciary\n      同义词: 判事\n    ',
  },
  {
    question: '半径',
    answer: 'hankei',
    explantion: '\n      汉字: 半径\n      读音: はんけい\n      意思: radius\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '半島',
    answer: 'hantō',
    explantion: '\n      汉字: 半島\n      读音: はんとう\n      意思: peninsula\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '反省',
    answer: 'hansei',
    explantion: '\n      汉字: 反省\n      读音: はんせい\n      意思: reflection\n      来源: reconsideration\n      同义词: 反省\n    ',
  },
  {
    question: '番地',
    answer: 'banchi',
    explantion: '\n      汉字: 番地\n      读音: ばんち\n      意思: house number\n      来源: address\n      同义词: 番地\n    ',
  },
  {
    question: '卑怯',
    answer: 'hikyō',
    explantion: '\n      汉字: 卑怯\n      读音: ひきょう\n      意思: cowardice\n      来源: meanness\n      同义词: 卑怯\n    ',
  },
  {
    question: '比較的',
    answer: 'hikakuteki',
    explantion: '\n      汉字: 比較的\n      读音: ひかくてき\n      意思: comparatively\n      来源: relatively\n      同义词: 比較的\n    ',
  },
  {
    question: '皮肉',
    answer: 'hiniku',
    explantion: '\n      汉字: 皮肉\n      读音: ひにく\n      意思: cynicism\n      来源: sarcasm\n      同义词: 皮肉\n    ',
  },
  {
    question: '皮膚',
    answer: 'hifu',
    explantion: '\n      汉字: 皮膚\n      读音: ひふ\n      意思: skin\n      来源: waller\n      同义词: 皮フ\n    ',
  },
  {
    question: '被せる',
    answer: 'kabuseru',
    explantion: '\n      汉字: 被せる\n      读音: かぶせる\n      意思: to cover (with something)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '美容',
    answer: 'biyō',
    explantion: '\n      汉字: 美容\n      读音: びよう\n      意思: beauty of figure or form\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '肘',
    answer: 'hiji',
    explantion: '\n      汉字: 肘\n      读音: ひじ\n      意思: elbow\n      来源: waller\n      同义词: 肱, 臂, \n    ',
  },
  {
    question: '必需品',
    answer: 'hitsujuhin',
    explantion: '\n      汉字: 必需品\n      读音: ひつじゅひん\n      意思: necessities\n      来源: necessary article\n      同义词: 必需品\n    ',
  },
  {
    question: '筆記',
    answer: 'hikki',
    explantion: '\n      汉字: 筆記\n      读音: ひっき\n      意思: (taking) notes\n      来源: copying\n      同义词: 筆記\n    ',
  },
  {
    question: '筆者',
    answer: 'hissha',
    explantion: '\n      汉字: 筆者\n      读音: ひっしゃ\n      意思: writer\n      来源: author\n      同义词: 筆者\n    ',
  },
  {
    question: '標識',
    answer: 'hyōshiki',
    explantion: '\n      汉字: 標識\n      读音: ひょうしき\n      意思: sign\n      来源: mark\n      同义词: 標識\n    ',
  },
  {
    question: '標準',
    answer: 'hyōjun',
    explantion: '\n      汉字: 標準\n      读音: ひょうじゅん\n      意思: standard\n      来源: level\n      同义词: 標準\n    ',
  },
  {
    question: '標本',
    answer: 'hyōhon',
    explantion: '\n      汉字: 標本\n      读音: ひょうほん\n      意思: example\n      来源: specimen\n      同义词: 標本\n    ',
  },
  {
    question: '表紙',
    answer: 'hyōshi',
    explantion: '\n      汉字: 表紙\n      读音: ひょうし\n      意思: front cover\n      来源: binding\n      同义词: 表紙\n    ',
  },
  {
    question: '評論',
    answer: 'hyōron',
    explantion: '\n      汉字: 評論\n      读音: ひょうろん\n      意思: criticism\n      来源: critique\n      同义词: 評論\n    ',
  },
  {
    question: '瓶詰',
    answer: 'binzume',
    explantion: '\n      汉字: 瓶詰\n      读音: びんづめ\n      意思: bottling\n      来源: bottled\n      同义词: 瓶詰, 瓶詰め, 壜詰め, 壜詰\n    ',
  },
  {
    question: '不運',
    answer: 'fuun',
    explantion: '\n      汉字: 不運\n      读音: ふうん\n      意思: unlucky\n      来源: misfortune\n      同义词: 不運\n    ',
  },
  {
    question: '不規則',
    answer: 'fukisoku',
    explantion: '\n      汉字: 不規則\n      读音: ふきそく\n      意思: irregularity\n      来源: unsteadiness\n      同义词: 不規則\n    ',
  },
  {
    question: '不潔',
    answer: 'fuketsu',
    explantion: '\n      汉字: 不潔\n      读音: ふけつ\n      意思: unclean\n      来源: dirty\n      同义词: 不潔\n    ',
  },
  {
    question: '不通',
    answer: 'futsū',
    explantion: '\n      汉字: 不通\n      读音: ふつう\n      意思: suspension\n      来源: interruption\n      同义词: 不通\n    ',
  },
  {
    question: '着ける',
    answer: 'tsukeru',
    explantion: '\n      汉字: 着ける\n      读音: つける\n      意思: (1) to attach\n      来源: to join\n      同义词: 着ける\n    ',
  },
  {
    question: '付近',
    answer: 'fukin',
    explantion: '\n      汉字: 付近\n      读音: ふきん\n      意思: neighbourhood\n      来源: vicinity\n      同义词: 付近, 附近\n    ',
  },
  {
    question: '夫妻',
    answer: 'fusai',
    explantion: '\n      汉字: 夫妻\n      读音: ふさい\n      意思: man and wife\n      来源: married couple\n      同义词: 夫妻\n    ',
  },
  {
    question: '敷く',
    answer: 'shiku',
    explantion: '\n      汉字: 敷く\n      读音: しく\n      意思: to spread out\n      来源: to lay out\n      同义词: 敷く, 布く\n    ',
  },
  {
    question: '敷地',
    answer: 'shikichi',
    explantion: '\n      汉字: 敷地\n      读音: しきち\n      意思: site\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '普及',
    answer: 'fukyū',
    explantion: '\n      汉字: 普及\n      读音: ふきゅう\n      意思: diffusion\n      来源: spread\n      同义词: 普及\n    ',
  },
  {
    question: '浮かべる',
    answer: 'ukaberu',
    explantion: '\n      汉字: 浮かべる\n      读音: うかべる\n      意思: to float\n      来源: to express\n      同义词: 浮かべる, 浮べる, 泛かべる, 泛べる\n    ',
  },
  {
    question: '浮く',
    answer: 'uku',
    explantion: '\n      汉字: 浮く\n      读音: うく\n      意思: to float\n      来源: to become merry\n      同义词: 浮く\n    ',
  },
  {
    question: '浮ぶ',
    answer: 'ukabu',
    explantion: '\n      汉字: 浮ぶ\n      读音: うかぶ\n      意思: to float\n      来源: to rise to surface\n      同义词: 浮ぶ, 浮かぶ, 泛ぶ, 泛かぶ\n    ',
  },
  {
    question: '父母',
    answer: 'chichihaha',
    explantion: '\n      汉字: 父母\n      读音: ふぼ\n      意思: father and mother\n      来源: parents\n      同义词: 父母, 父母, 父母, 父母, 父母, 父母\n    ',
  },
  {
    question: '符号',
    answer: 'fugō',
    explantion: '\n      汉字: 符号\n      读音: ふごう\n      意思: sign\n      来源: mark\n      同义词: 符号\n    ',
  },
  {
    question: '撫でる',
    answer: 'naderu',
    explantion: '\n      汉字: 撫でる\n      读音: なでる\n      意思: to brush gently\n      来源: to stroke\n      同义词: 撫でる\n    ',
  },
  {
    question: '部首',
    answer: 'bushu',
    explantion: '\n      汉字: 部首\n      读音: ぶしゅ\n      意思: radical (of a kanji character)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '部品',
    answer: 'buhin',
    explantion: '\n      汉字: 部品\n      读音: ぶひん\n      意思: parts\n      来源: accessories\n      同义词: 部品\n    ',
  },
  {
    question: '風船',
    answer: 'fūsen',
    explantion: '\n      汉字: 風船\n      读音: ふうせん\n      意思: balloon\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '風呂敷',
    answer: 'furoshiki',
    explantion: '\n      汉字: 風呂敷\n      读音: ふろしき\n      意思: wrapping cloth\n      来源: cloth wrapper\n      同义词: 風呂敷\n    ',
  },
  {
    question: '副詞',
    answer: 'fukushi',
    explantion: '\n      汉字: 副詞\n      读音: ふくし\n      意思: adverb\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '複写',
    answer: 'fukusha',
    explantion: '\n      汉字: 複写\n      读音: ふくしゃ\n      意思: copy\n      来源: duplicate\n      同义词: 複写\n    ',
  },
  {
    question: '複数',
    answer: 'fukusū',
    explantion: '\n      汉字: 複数\n      读音: ふくすう\n      意思: plural\n      来源: multiple\n      同义词: 複数, 復数\n    ',
  },
  {
    question: '払い込む',
    answer: 'haraikomu',
    explantion: '\n      汉字: 払い込む\n      读音: はらいこむ\n      意思: to deposit\n      来源: to pay in\n      同义词: 払い込む\n    ',
  },
  {
    question: '払い戻す',
    answer: 'haraimodosu',
    explantion: '\n      汉字: 払い戻す\n      读音: はらいもどす\n      意思: to repay\n      来源: to pay back\n      同义词: 払い戻す, 払戻す\n    ',
  },
  {
    question: '物語る',
    answer: 'monogataru',
    explantion: '\n      汉字: 物語る\n      读音: ものがたる\n      意思: to tell\n      来源: to indicate\n      同义词: 物語る\n    ',
  },
  {
    question: '物差し',
    answer: 'monosashi',
    explantion: '\n      汉字: 物差し\n      读音: ものさし\n      意思: ruler\n      来源: measure\n      同义词: 物差し, 物差, 物指し, 物指\n    ',
  },
  {
    question: '物凄い',
    answer: 'monosugoi',
    explantion: '\n      汉字: 物凄い\n      读音: ものすごい\n      意思: earth-shattering\n      来源: staggering\n      同义词: 物凄い, , もの凄い\n    ',
  },
  {
    question: '物騒',
    answer: 'bussō',
    explantion: '\n      汉字: 物騒\n      读音: ぶっそう\n      意思: dangerous\n      来源: disturbed\n      同义词: 物騒\n    ',
  },
  {
    question: '物置',
    answer: 'monooki',
    explantion: '\n      汉字: 物置\n      读音: ものおき\n      意思: storage room\n      来源: waller\n      同义词: 物置き\n    ',
  },
  {
    question: '分解',
    answer: 'bunkai',
    explantion: '\n      汉字: 分解\n      读音: ぶんかい\n      意思: analysis\n      来源: disassembly\n      同义词: 分解\n    ',
  },
  {
    question: '分数',
    answer: 'bunsū',
    explantion: '\n      汉字: 分数\n      读音: ぶんすう\n      意思: fraction (in math)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '分布',
    answer: 'bumpu',
    explantion: '\n      汉字: 分布\n      读音: ぶんぷ\n      意思: distribution\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '分量',
    answer: 'bunryō',
    explantion: '\n      汉字: 分量\n      读音: ぶんりょう\n      意思: amount\n      来源: quantity\n      同义词: 分量\n    ',
  },
  {
    question: '分類',
    answer: 'bunrui',
    explantion: '\n      汉字: 分類\n      读音: ぶんるい\n      意思: classification\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '噴火',
    answer: 'funka',
    explantion: '\n      汉字: 噴火\n      读音: ふんか\n      意思: eruption\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '噴水',
    answer: 'funsui',
    explantion: '\n      汉字: 噴水\n      读音: ふんすい\n      意思: water fountain\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '文芸',
    answer: 'bungei',
    explantion: '\n      汉字: 文芸\n      读音: ぶんげい\n      意思: literature\n      来源: art and literature\n      同义词: 文芸, 文藝\n    ',
  },
  {
    question: '文献',
    answer: 'bunken',
    explantion: '\n      汉字: 文献\n      读音: ぶんけん\n      意思: literature\n      来源: books (reference)\n      同义词: 文献\n    ',
  },
  {
    question: '文体',
    answer: 'buntai',
    explantion: '\n      汉字: 文体\n      读音: ぶんたい\n      意思: literary style\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '文房具',
    answer: 'bumbōgu',
    explantion: '\n      汉字: 文房具\n      读音: ぶんぼうぐ\n      意思: stationery\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '文脈',
    answer: 'bummyaku',
    explantion: '\n      汉字: 文脈\n      读音: ぶんみゃく\n      意思: context\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '兵隊',
    answer: 'heitai',
    explantion: '\n      汉字: 兵隊\n      读音: へいたい\n      意思: soldier\n      来源: sailor\n      同义词: 兵隊\n    ',
  },
  {
    question: '平仮名',
    answer: 'hiragana',
    explantion: '\n      汉字: 平仮名\n      读音: ひらがな\n      意思: hiragana\n      来源: 47 syllables\n      同义词: 平仮名, , ひら仮名\n    ',
  },
  {
    question: '平気',
    answer: 'heiki',
    explantion: '\n      汉字: 平気\n      读音: へいき\n      意思: coolness\n      来源: calmness\n      同义词: 平気\n    ',
  },
  {
    question: '平日',
    answer: 'heijitsu',
    explantion: '\n      汉字: 平日\n      读音: へいじつ\n      意思: weekday\n      来源: ordinary days\n      同义词: 平日, 平日\n    ',
  },
  {
    question: '平凡',
    answer: 'heibon',
    explantion: '\n      汉字: 平凡\n      读音: へいぼん\n      意思: common\n      来源: commonplace\n      同义词: 平凡\n    ',
  },
  {
    question: '平野',
    answer: 'heiya',
    explantion: '\n      汉字: 平野\n      读音: へいや\n      意思: plain\n      来源: open field\n      同义词: 平野\n    ',
  },
  {
    question: '並行',
    answer: 'heikō',
    explantion: '\n      汉字: 並行\n      读音: へいこう\n      意思: (going) side by side\n      来源: concurrent\n      同义词: 並行, 併行\n    ',
  },
  {
    question: '閉会',
    answer: 'heikai',
    explantion: '\n      汉字: 閉会\n      读音: へいかい\n      意思: closure\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '別荘',
    answer: 'bessō',
    explantion: '\n      汉字: 別荘\n      读音: べっそう\n      意思: holiday house\n      来源: villa\n      同义词: 別荘\n    ',
  },
  {
    question: '片仮名',
    answer: 'katakana',
    explantion: '\n      汉字: 片仮名\n      读音: かたかな\n      意思: katakana\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '片道',
    answer: 'katamichi',
    explantion: '\n      汉字: 片道\n      读音: かたみち\n      意思: one-way (trip)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '片付く',
    answer: 'katazuku',
    explantion: '\n      汉字: 片付く\n      读音: かたづく\n      意思: to put in order\n      来源: to dispose of\n      同义词: 片付く, 片づく\n    ',
  },
  {
    question: '編む',
    answer: 'amu',
    explantion: '\n      汉字: 編む\n      读音: あむ\n      意思: to knit\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '反る',
    answer: 'soru',
    explantion: '\n      汉字: 反る\n      读音: かえる\n      意思: to warp\n      来源: to be warped\n      同义词: 反る, 返る\n    ',
  },
  {
    question: '便所',
    answer: 'benjo',
    explantion: '\n      汉字: 便所\n      读音: べんじょ\n      意思: toilet\n      来源: lavatory\n      同义词: 便所\n    ',
  },
  {
    question: '便箋',
    answer: 'binsen',
    explantion: '\n      汉字: 便箋\n      读音: びんせん\n      意思: writing paper\n      来源: stationery\n      同义词: 便箋, 便せん\n    ',
  },
  {
    question: '保健',
    answer: 'hoken',
    explantion: '\n      汉字: 保健\n      读音: ほけん\n      意思: health preservation\n      来源: hygiene\n      同义词: 保健\n    ',
  },
  {
    question: '捕る',
    answer: 'toru',
    explantion: '\n      汉字: 捕る\n      读音: とる\n      意思: to take\n      来源: to catch (fish)\n      同义词: 捕る, 獲る\n    ',
  },
  {
    question: '補う',
    answer: 'oginau',
    explantion: '\n      汉字: 補う\n      读音: おぎなう\n      意思: to compensate for\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '募集',
    answer: 'boshū',
    explantion: '\n      汉字: 募集\n      读音: ぼしゅう\n      意思: recruiting\n      来源: taking applications\n      同义词: 募集\n    ',
  },
  {
    question: '包装',
    answer: 'hōsō',
    explantion: '\n      汉字: 包装\n      读音: ほうそう\n      意思: packing\n      来源: wrapping\n      同义词: 包装\n    ',
  },
  {
    question: '庖丁',
    answer: 'hōchō',
    explantion: '\n      汉字: 庖丁\n      读音: ほうちょう\n      意思: kitchen knife\n      来源: carving knife\n      同义词: 庖丁, 包丁\n    ',
  },
  {
    question: '崩す',
    answer: 'kuzusu',
    explantion: '\n      汉字: 崩す\n      读音: くずす\n      意思: to destroy\n      来源: to pull down\n      同义词: 崩す\n    ',
  },
  {
    question: '崩れる',
    answer: 'kuzureru',
    explantion: '\n      汉字: 崩れる\n      读音: くずれる\n      意思: to collapse\n      来源: to crumble\n      同义词: 崩れる\n    ',
  },
  {
    question: '放る',
    answer: 'hōru',
    explantion: '\n      汉字: 放る\n      读音: ほうる\n      意思: to let go\n      来源: waller\n      同义词: 放る, 抛る, 抛る\n    ',
  },
  {
    question: '放れる',
    answer: 'hanareru',
    explantion: '\n      汉字: 放れる\n      读音: はなれる\n      意思: to leave\n      来源: to get free\n      同义词: 放れる\n    ',
  },
  {
    question: '方角',
    answer: 'hōgaku',
    explantion: '\n      汉字: 方角\n      读音: ほうがく\n      意思: direction\n      来源: way\n      同义词: 方角\n    ',
  },
  {
    question: '方言',
    answer: 'hōgen',
    explantion: '\n      汉字: 方言\n      读音: ほうげん\n      意思: dialect\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '方針',
    answer: 'hōshin',
    explantion: '\n      汉字: 方針\n      读音: ほうしん\n      意思: objective\n      来源: plan\n      同义词: 方針\n    ',
  },
  {
    question: '方程式',
    answer: 'hōteishiki',
    explantion: '\n      汉字: 方程式\n      读音: ほうていしき\n      意思: equation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '方面',
    answer: 'hōmen',
    explantion: '\n      汉字: 方面\n      读音: ほうめん\n      意思: direction\n      来源: district\n      同义词: 方面\n    ',
  },
  {
    question: '法則',
    answer: 'hōsoku',
    explantion: '\n      汉字: 法則\n      读音: ほうそく\n      意思: law\n      来源: rule\n      同义词: 法則, 方則\n    ',
  },
  {
    question: '縫う',
    answer: 'nuu',
    explantion: '\n      汉字: 縫う\n      读音: ぬう\n      意思: to sew\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '飽くまで',
    answer: 'akumade',
    explantion: '\n      汉字: 飽くまで\n      读音: あくまで\n      意思: to the end\n      来源: to the last\n      同义词: 飽くまで, , 飽く迄\n    ',
  },
  {
    question: '坊さん',
    answer: 'bōsan',
    explantion: '\n      汉字: 坊さん\n      读音: ぼうさん\n      意思: Buddhist priest\n      来源: monk\n      同义词: 坊さん\n    ',
  },
  {
    question: '坊や',
    answer: 'bōya',
    explantion: '\n      汉字: 坊や\n      读音: ぼうや\n      意思: boy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '妨げる',
    answer: 'samatageru',
    explantion: '\n      汉字: 妨げる\n      读音: さまたげる\n      意思: to disturb\n      来源: to prevent\n      同义词: 妨げる\n    ',
  },
  {
    question: '暴れる',
    answer: 'abareru',
    explantion: '\n      汉字: 暴れる\n      读音: あばれる\n      意思: to act violently\n      来源: to rage\n      同义词: 暴れる\n    ',
  },
  {
    question: '望遠鏡',
    answer: 'bōenkyō',
    explantion: '\n      汉字: 望遠鏡\n      读音: ぼうえんきょう\n      意思: telescope\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '膨らます',
    answer: 'fukuramasu',
    explantion: '\n      汉字: 膨らます\n      读音: ふくらます\n      意思: to swell\n      来源: to expand\n      同义词: 膨らます\n    ',
  },
  {
    question: '膨らむ',
    answer: 'fukuramu',
    explantion: '\n      汉字: 膨らむ\n      读音: ふくらむ\n      意思: to expand\n      来源: to swell (out)\n      同义词: 膨らむ, 脹らむ\n    ',
  },
  {
    question: '防止',
    answer: 'bōshi',
    explantion: '\n      汉字: 防止\n      读音: ぼうし\n      意思: prevention\n      来源: check\n      同义词: 防止\n    ',
  },
  {
    question: '防犯',
    answer: 'bōhan',
    explantion: '\n      汉字: 防犯\n      读音: ぼうはん\n      意思: prevention of crime\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '北極',
    answer: 'hokkyoku',
    explantion: '\n      汉字: 北極\n      读音: ほっきょく\n      意思: North Pole\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '墨',
    answer: 'sumi',
    explantion: '\n      汉字: 墨\n      读音: すみ\n      意思: ink\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '牧畜',
    answer: 'bokuchiku',
    explantion: '\n      汉字: 牧畜\n      读音: ぼくちく\n      意思: stock-farming\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '堀',
    answer: 'hori',
    explantion: '\n      汉字: 堀\n      读音: ほり\n      意思: moat\n      来源: canal\n      同义词: 堀\n    ',
  },
  {
    question: '本部',
    answer: 'hombu',
    explantion: '\n      汉字: 本部\n      读音: ほんぶ\n      意思: headquarters\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '本来',
    answer: 'honrai',
    explantion: '\n      汉字: 本来\n      读音: ほんらい\n      意思: essentially\n      来源: naturally\n      同义词: 本来\n    ',
  },
  {
    question: '盆',
    answer: 'bon',
    explantion: '\n      汉字: 盆\n      读音: ぼん\n      意思: Lantern Festival\n      来源: Festival of the Dead\n      同义词: 盆\n    ',
  },
  {
    question: '盆地',
    answer: 'bonchi',
    explantion: '\n      汉字: 盆地\n      读音: ぼんち\n      意思: basin (e.g. between mountains)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '摩擦',
    answer: 'masatsu',
    explantion: '\n      汉字: 摩擦\n      读音: まさつ\n      意思: friction\n      来源: rubbing\n      同义词: 摩擦\n    ',
  },
  {
    question: '埋める',
    answer: 'umeru',
    explantion: '\n      汉字: 埋める\n      读音: うめる\n      意思: to bury\n      来源: to fill up\n      同义词: 埋める\n    ',
  },
  {
    question: '枚数',
    answer: 'maisū',
    explantion: '\n      汉字: 枚数\n      读音: まいすう\n      意思: the number of flat things\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '毎度',
    answer: 'maido',
    explantion: '\n      汉字: 毎度\n      读音: まいど\n      意思: each time\n      来源: common service-sector greeting\n      同义词: 毎度\n    ',
  },
  {
    question: '枕',
    answer: 'makura',
    explantion: '\n      汉字: 枕\n      读音: まくら\n      意思: pillow\n      来源: bolster\n      同义词: 枕\n    ',
  },
  {
    question: '又は',
    answer: 'matawa',
    explantion: '\n      汉字: 又は\n      读音: または\n      意思: or\n      来源: otherwise\n      同义词: 又は\n    ',
  },
  {
    question: '満員',
    answer: 'man\'in',
    explantion: '\n      汉字: 満員\n      读音: まんいん\n      意思: full house\n      来源: no vacancy\n      同义词: 満員\n    ',
  },
  {
    question: '味わう',
    answer: 'ajiwau',
    explantion: '\n      汉字: 味わう\n      读音: あじわう\n      意思: to taste\n      来源: to savor\n      同义词: 味わう\n    ',
  },
  {
    question: '未満',
    answer: 'miman',
    explantion: '\n      汉字: 未満\n      读音: みまん\n      意思: less than\n      来源: insufficient\n      同义词: 未満\n    ',
  },
  {
    question: '民間',
    answer: 'minkan',
    explantion: '\n      汉字: 民間\n      读音: みんかん\n      意思: private\n      来源: civilian\n      同义词: 民間\n    ',
  },
  {
    question: '民謡',
    answer: 'min\'yō',
    explantion: '\n      汉字: 民謡\n      读音: みんよう\n      意思: folk song\n      来源: popular song\n      同义词: 民謡\n    ',
  },
  {
    question: '無限',
    answer: 'mugen',
    explantion: '\n      汉字: 無限\n      读音: むげん\n      意思: infinite\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '無数',
    answer: 'musū',
    explantion: '\n      汉字: 無数\n      读音: むすう\n      意思: countless number\n      来源: infinite number\n      同义词: 無数\n    ',
  },
  {
    question: '無地',
    answer: 'muji',
    explantion: '\n      汉字: 無地\n      读音: むじ\n      意思: plain\n      来源: unfigured\n      同义词: 無地\n    ',
  },
  {
    question: '矛盾',
    answer: 'mujun',
    explantion: '\n      汉字: 矛盾\n      读音: むじゅん\n      意思: contradiction\n      来源: inconsistency\n      同义词: 矛盾\n    ',
  },
  {
    question: '名作',
    answer: 'meisaku',
    explantion: '\n      汉字: 名作\n      读音: めいさく\n      意思: masterpiece\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '名刺',
    answer: 'meishi',
    explantion: '\n      汉字: 名刺\n      读音: めいし\n      意思: business card\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '名詞',
    answer: 'meishi',
    explantion: '\n      汉字: 名詞\n      读音: めいし\n      意思: noun\n      来源: waller\n      同义词: 名詞\n    ',
  },
  {
    question: '名所',
    answer: 'meisho',
    explantion: '\n      汉字: 名所\n      读音: めいしょ\n      意思: famous place\n      来源: waller\n      同义词: 名所\n    ',
  },
  {
    question: '名物',
    answer: 'meibutsu',
    explantion: '\n      汉字: 名物\n      读音: めいぶつ\n      意思: famous product\n      来源: special product\n      同义词: 名物\n    ',
  },
  {
    question: '命ずる',
    answer: 'meizuru',
    explantion: '\n      汉字: 命ずる\n      读音: めいずる\n      意思: to command\n      来源: to appoint\n      同义词: 命ずる\n    ',
  },
  {
    question: '明け方',
    answer: 'akegata',
    explantion: '\n      汉字: 明け方\n      读音: あけがた\n      意思: dawn\n      来源: waller\n      同义词: 明方, 明けがた\n    ',
  },
  {
    question: '迷信',
    answer: 'meishin',
    explantion: '\n      汉字: 迷信\n      读音: めいしん\n      意思: superstition\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '銘々',
    answer: 'meimei',
    explantion: '\n      汉字: 銘々\n      读音: めいめい\n      意思: each\n      来源: individual\n      同义词: 銘々, , 銘銘\n    ',
  },
  {
    question: '鳴らす',
    answer: 'narasu',
    explantion: '\n      汉字: 鳴らす\n      读音: ならす\n      意思: to ring\n      来源: to sound\n      同义词: 鳴らす\n    ',
  },
  {
    question: '姪',
    answer: 'mei',
    explantion: '\n      汉字: 姪\n      读音: めい\n      意思: niece\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '免税',
    answer: 'menzei',
    explantion: '\n      汉字: 免税\n      读音: めんぜい\n      意思: tax exemption\n      来源: duty exemption\n      同义词: 免税\n    ',
  },
  {
    question: '面積',
    answer: 'menseki',
    explantion: '\n      汉字: 面積\n      读音: めんせき\n      意思: area\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '面接',
    answer: 'mensetsu',
    explantion: '\n      汉字: 面接\n      读音: めんせつ\n      意思: interview\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '面倒臭い',
    answer: 'mendōkusai',
    explantion: '\n      汉字: 面倒臭い\n      读音: めんどうくさい\n      意思: bother to do\n      来源: tiresome\n      同义词: 面倒臭い, , 面倒くさい, , 面倒くさい, 面倒臭い\n    ',
  },
  {
    question: '茂る',
    answer: 'shigeru',
    explantion: '\n      汉字: 茂る\n      读音: しげる\n      意思: to grow thick\n      来源: to luxuriate\n      同义词: 茂る, 繁る, 滋る\n    ',
  },
  {
    question: '毛糸',
    answer: 'keito',
    explantion: '\n      汉字: 毛糸\n      读音: けいと\n      意思: knitting wool\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '毛皮',
    answer: 'kegawa',
    explantion: '\n      汉字: 毛皮\n      读音: けがわ\n      意思: fur\n      来源: skin\n      同义词: 毛皮, 毛皮, 毛革, 毛革\n    ',
  },
  {
    question: '儲かる',
    answer: 'mōkaru',
    explantion: '\n      汉字: 儲かる\n      读音: もうかる\n      意思: to be profitable\n      来源: to yield a profit\n      同义词: 儲かる\n    ',
  },
  {
    question: '儲ける',
    answer: 'mōkeru',
    explantion: '\n      汉字: 儲ける\n      读音: もうける\n      意思: to get\n      来源: to earn\n      同义词: 儲ける\n    ',
  },
  {
    question: '木材',
    answer: 'mokuzai',
    explantion: '\n      汉字: 木材\n      读音: もくざい\n      意思: lumber\n      来源: timber\n      同义词: 木材\n    ',
  },
  {
    question: '目安',
    answer: 'meyasu',
    explantion: '\n      汉字: 目安\n      读音: めやす\n      意思: criterion\n      来源: aim\n      同义词: 目安\n    ',
  },
  {
    question: '目印',
    answer: 'mejirushi',
    explantion: '\n      汉字: 目印\n      读音: めじるし\n      意思: mark\n      来源: sign\n      同义词: 目印, 目標, 目じるし\n    ',
  },
  {
    question: '目下',
    answer: 'mokka',
    explantion: '\n      汉字: 目下\n      读音: めした\n      意思: at present\n      来源: now\n      同义词: 目下\n    ',
  },
  {
    question: '目覚し',
    answer: 'mezamashi',
    explantion: '\n      汉字: 目覚し\n      读音: めざまし\n      意思: (abbr) alarm-clock\n      来源: waller\n      同义词: 目覚まし, 目ざまし\n    ',
  },
  {
    question: '目指す',
    answer: 'mezasu',
    explantion: '\n      汉字: 目指す\n      读音: めざす\n      意思: to aim at\n      来源: to have an eye on\n      同义词: 目指す, 目差す, 目ざす\n    ',
  },
  {
    question: '目次',
    answer: 'mokuji',
    explantion: '\n      汉字: 目次\n      读音: もくじ\n      意思: table of contents\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '目上',
    answer: 'meue',
    explantion: '\n      汉字: 目上\n      读音: めうえ\n      意思: superior(s)\n      来源: senior\n      同义词: 目上\n    ',
  },
  {
    question: '目立つ',
    answer: 'medatsu',
    explantion: '\n      汉字: 目立つ\n      读音: めだつ\n      意思: to be conspicuous\n      来源: to stand out\n      同义词: 目立つ, 目だつ\n    ',
  },
  {
    question: '餅',
    answer: 'mochi',
    explantion: '\n      汉字: 餅\n      读音: もち\n      意思: sticky rice cake\n      来源: waller\n      同义词: , , 餅, , 餅, , 餅, 餠, 餠, 餠, 餠\n    ',
  },
  {
    question: '問答',
    answer: 'mondō',
    explantion: '\n      汉字: 問答\n      读音: もんどう\n      意思: questions and answers\n      来源: dialogue\n      同义词: 問答\n    ',
  },
  {
    question: '夜間',
    answer: 'yakan',
    explantion: '\n      汉字: 夜間\n      读音: やかん\n      意思: at night\n      来源: nighttime\n      同义词: 夜間\n    ',
  },
  {
    question: '矢印',
    answer: 'yajirushi',
    explantion: '\n      汉字: 矢印\n      读音: やじるし\n      意思: directing arrow\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '役者',
    answer: 'yakusha',
    explantion: '\n      汉字: 役者\n      读音: やくしゃ\n      意思: actor\n      来源: actress\n      同义词: 役者\n    ',
  },
  {
    question: '役所',
    answer: 'yakusho',
    explantion: '\n      汉字: 役所\n      读音: やくしょ\n      意思: government office\n      来源: public office\n      同义词: 役所\n    ',
  },
  {
    question: '役人',
    answer: 'yakunin',
    explantion: '\n      汉字: 役人\n      读音: やくにん\n      意思: government official\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '役目',
    answer: 'yakume',
    explantion: '\n      汉字: 役目\n      读音: やくめ\n      意思: duty\n      来源: business\n      同义词: 役目\n    ',
  },
  {
    question: '薬局',
    answer: 'yakkyoku',
    explantion: '\n      汉字: 薬局\n      读音: やっきょく\n      意思: pharmacy\n      来源: drugstore\n      同义词: 薬局\n    ',
  },
  {
    question: '薬指',
    answer: 'kusuriyubi',
    explantion: '\n      汉字: 薬指\n      读音: くすりゆび\n      意思: ring finger\n      来源: waller\n      同义词: くすり指\n    ',
  },
  {
    question: '薬品',
    answer: 'yakuhin',
    explantion: '\n      汉字: 薬品\n      读音: やくひん\n      意思: medicine(s)\n      来源: chemical(s)\n      同义词: 薬品\n    ',
  },
  {
    question: '訳す',
    answer: 'yakusu',
    explantion: '\n      汉字: 訳す\n      读音: やくす\n      意思: to translate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '油断',
    answer: 'yudan',
    explantion: '\n      汉字: 油断\n      读音: ゆだん\n      意思: negligence\n      来源: unpreparedness\n      同义词: 油断\n    ',
  },
  {
    question: '輸血',
    answer: 'yuketsu',
    explantion: '\n      汉字: 輸血\n      读音: ゆけつ\n      意思: blood transfusion\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '輸送',
    answer: 'yusō',
    explantion: '\n      汉字: 輸送\n      读音: ゆそう\n      意思: transport\n      来源: transportation\n      同义词: 輸送\n    ',
  },
  {
    question: '勇ましい',
    answer: 'isamashii',
    explantion: '\n      汉字: 勇ましい\n      读音: いさましい\n      意思: brave\n      来源: valiant\n      同义词: 勇ましい\n    ',
  },
  {
    question: '友好',
    answer: 'yūkō',
    explantion: '\n      汉字: 友好\n      读音: ゆうこう\n      意思: friendship\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '有難い',
    answer: 'arigatai',
    explantion: '\n      汉字: 有難い\n      读音: ありがたい\n      意思: grateful\n      来源: thankful\n      同义词: 有難い, , 有り難い\n    ',
  },
  {
    question: '有無',
    answer: 'umu',
    explantion: '\n      汉字: 有無\n      读音: うむ\n      意思: yes or no\n      来源: existence\n      同义词: 有無, 有無\n    ',
  },
  {
    question: '有料',
    answer: 'yūryō',
    explantion: '\n      汉字: 有料\n      读音: ゆうりょう\n      意思: admission-paid\n      来源: toll\n      同义词: 有料\n    ',
  },
  {
    question: '遊園地',
    answer: 'yūenchi',
    explantion: '\n      汉字: 遊園地\n      读音: ゆうえんち\n      意思: amusement park\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '郵送',
    answer: 'yūsō',
    explantion: '\n      汉字: 郵送\n      读音: ゆうそう\n      意思: mailing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '夕刊',
    answer: 'yūkan',
    explantion: '\n      汉字: 夕刊\n      读音: ゆうかん\n      意思: evening paper\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '夕日',
    answer: 'yūhi',
    explantion: '\n      汉字: 夕日\n      读音: ゆうひ\n      意思: (in) the evening sun\n      来源: setting sun\n      同义词: 夕日, 夕日, 夕陽, 夕陽\n    ',
  },
  {
    question: '夕立',
    answer: 'yūdachi',
    explantion: '\n      汉字: 夕立\n      读音: ゆうだち\n      意思: (sudden) evening shower (rain)\n      来源: waller\n      同义词: 夕立ち\n    ',
  },
  {
    question: '予備',
    answer: 'yobi',
    explantion: '\n      汉字: 予備\n      读音: よび\n      意思: preparation\n      来源: preliminaries\n      同义词: 予備, 預備\n    ',
  },
  {
    question: '余る',
    answer: 'amaru',
    explantion: '\n      汉字: 余る\n      读音: あまる\n      意思: to remain\n      来源: to be left over\n      同义词: 余る\n    ',
  },
  {
    question: '余計',
    answer: 'yokei',
    explantion: '\n      汉字: 余計\n      读音: よけい\n      意思: too much\n      来源: unnecessary\n      同义词: 余計\n    ',
  },
  {
    question: '預かる',
    answer: 'azukaru',
    explantion: '\n      汉字: 預かる\n      读音: あずかる\n      意思: to keep in custody\n      来源: to receive on deposit\n      同义词: 預かる\n    ',
  },
  {
    question: '幼児',
    answer: 'yōji',
    explantion: '\n      汉字: 幼児\n      读音: ようじ\n      意思: infant\n      来源: baby\n      同义词: 幼児\n    ',
  },
  {
    question: '幼稚',
    answer: 'yōchi',
    explantion: '\n      汉字: 幼稚\n      读音: ようち\n      意思: infancy\n      来源: childish\n      同义词: 幼稚\n    ',
  },
  {
    question: '幼稚園',
    answer: 'yōchien',
    explantion: '\n      汉字: 幼稚園\n      读音: ようちえん\n      意思: kindergarten\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '容器',
    answer: 'yōki',
    explantion: '\n      汉字: 容器\n      读音: ようき\n      意思: container\n      来源: vessel\n      同义词: 容器\n    ',
  },
  {
    question: '容積',
    answer: 'yōseki',
    explantion: '\n      汉字: 容積\n      读音: ようせき\n      意思: capacity\n      来源: volume\n      同义词: 容積\n    ',
  },
  {
    question: '溶かす',
    answer: 'tokasu',
    explantion: '\n      汉字: 溶かす\n      读音: とかす\n      意思: to melt\n      来源: to dissolve\n      同义词: 溶かす, 解かす, 融かす, 熔かす, 鎔かす\n    ',
  },
  {
    question: '溶く',
    answer: 'toku',
    explantion: '\n      汉字: 溶く\n      读音: とく\n      意思: to dissolve (paint)\n      来源: waller\n      同义词: 融く, 鎔く, 熔く\n    ',
  },
  {
    question: '溶ける',
    answer: 'tokeru',
    explantion: '\n      汉字: 溶ける\n      读音: とける\n      意思: to melt\n      来源: to thaw\n      同义词: 溶ける, 融ける, 解ける, 熔ける, 鎔ける\n    ',
  },
  {
    question: '溶け込む',
    answer: 'tokekomu',
    explantion: '\n      汉字: 溶け込む\n      读音: とけこむ\n      意思: to melt into\n      来源: waller\n      同义词: 解け込む, 融け込む, 溶込む, 解込む, 溶けこむ, とけ込む\n    ',
  },
  {
    question: '溶岩',
    answer: 'yōgan',
    explantion: '\n      汉字: 溶岩\n      读音: ようがん\n      意思: lava\n      来源: waller\n      同义词: 熔岩\n    ',
  },
  {
    question: '用語',
    answer: 'yōgo',
    explantion: '\n      汉字: 用語\n      读音: ようご\n      意思: term\n      来源: terminology\n      同义词: 用語\n    ',
  },
  {
    question: '用途',
    answer: 'yōto',
    explantion: '\n      汉字: 用途\n      读音: ようと\n      意思: use\n      来源: usefulness\n      同义词: 用途\n    ',
  },
  {
    question: '羊毛',
    answer: 'yōmō',
    explantion: '\n      汉字: 羊毛\n      读音: ようもう\n      意思: wool\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '要旨',
    answer: 'yōshi',
    explantion: '\n      汉字: 要旨\n      读音: ようし\n      意思: gist\n      来源: essentials\n      同义词: 要旨\n    ',
  },
  {
    question: '要領',
    answer: 'yōryō',
    explantion: '\n      汉字: 要領\n      读音: ようりょう\n      意思: point\n      来源: gist\n      同义词: 要領\n    ',
  },
  {
    question: '欲張り',
    answer: 'yokubari',
    explantion: '\n      汉字: 欲張り\n      读音: よくばり\n      意思: avarice\n      来源: covetousness\n      同义词: 欲張り, 欲ばり\n    ',
  },
  {
    question: '来日',
    answer: 'rainichi',
    explantion: '\n      汉字: 来日\n      读音: らいにち\n      意思: arrival in Japan\n      来源: coming to Japan\n      同义词: 来日\n    ',
  },
  {
    question: '頼もしい',
    answer: 'tanomoshii',
    explantion: '\n      汉字: 頼もしい\n      读音: たのもしい\n      意思: reliable\n      来源: trustworthy\n      同义词: 頼もしい\n    ',
  },
  {
    question: '落第',
    answer: 'rakudai',
    explantion: '\n      汉字: 落第\n      读音: らくだい\n      意思: failure\n      来源: dropping out of a class\n      同义词: 落第\n    ',
  },
  {
    question: '乱暴',
    answer: 'rambō',
    explantion: '\n      汉字: 乱暴\n      读音: らんぼう\n      意思: rude\n      来源: violent\n      同义词: 乱暴, 亂暴\n    ',
  },
  {
    question: '欄',
    answer: 'ran',
    explantion: '\n      汉字: 欄\n      读音: らん\n      意思: column of text (e.g. as in a newspaper)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '利害',
    answer: 'rigai',
    explantion: '\n      汉字: 利害\n      读音: りがい\n      意思: advantages and disadvantages\n      来源: interest\n      同义词: 利害\n    ',
  },
  {
    question: '理科',
    answer: 'rika',
    explantion: '\n      汉字: 理科\n      读音: りか\n      意思: science\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '裏口',
    answer: 'uraguchi',
    explantion: '\n      汉字: 裏口\n      读音: うらぐち\n      意思: backdoor\n      来源: rear entrance\n      同义词: 裏口\n    ',
  },
  {
    question: '裏返す',
    answer: 'uragaesu',
    explantion: '\n      汉字: 裏返す\n      读音: うらがえす\n      意思: to turn inside out\n      来源: to turn (something) over\n      同义词: 裏返す\n    ',
  },
  {
    question: '立ち止まる',
    answer: 'tachidomaru',
    explantion: '\n      汉字: 立ち止まる\n      读音: たちどまる\n      意思: to stop\n      来源: to halt\n      同义词: 立ち止まる, 立ち止まる, 立ち止る, 立ち止る, 立ちどまる, 立止る, 立止る, 立ち留まる, 立ち留まる, 立留まる, 立留まる, 立留る, 立留る\n    ',
  },
  {
    question: '略す',
    answer: 'ryakusu',
    explantion: '\n      汉字: 略す\n      读音: りゃくす\n      意思: to abbreviate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '流域',
    answer: 'ryūiki',
    explantion: '\n      汉字: 流域\n      读音: りゅういき\n      意思: (river) basin\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '流行る',
    answer: 'hayaru',
    explantion: '\n      汉字: 流行る\n      读音: はやる\n      意思: to flourish\n      来源: to thrive\n      同义词: 流行る\n    ',
  },
  {
    question: '流石',
    answer: 'sasuga',
    explantion: '\n      汉字: 流石\n      读音: さすが\n      意思: clever\n      来源: adept\n      同义词: 流石, , 遉, 有繋\n    ',
  },
  {
    question: '溜める',
    answer: 'tameru',
    explantion: '\n      汉字: 溜める\n      读音: ためる\n      意思: to amass\n      来源: to accumulate\n      同义词: 溜める\n    ',
  },
  {
    question: '溜まる',
    answer: 'tamaru',
    explantion: '\n      汉字: 溜まる\n      读音: たまる\n      意思: to collect\n      来源: to gather\n      同义词: 溜まる, , 溜る\n    ',
  },
  {
    question: '留守番',
    answer: 'rusuban',
    explantion: '\n      汉字: 留守番\n      读音: るすばん\n      意思: care-taking\n      来源: caretaker\n      同义词: 留守番\n    ',
  },
  {
    question: '粒',
    answer: 'tsubu',
    explantion: '\n      汉字: 粒\n      读音: つぶ\n      意思: grain\n      来源: waller\n      同义词: 粒, 粒, 粒\n    ',
  },
  {
    question: '寮',
    answer: 'ryō',
    explantion: '\n      汉字: 寮\n      读音: りょう\n      意思: hostel\n      来源: dormitory\n      同义词: 寮\n    ',
  },
  {
    question: '涼む',
    answer: 'suzumu',
    explantion: '\n      汉字: 涼む\n      读音: すずむ\n      意思: to cool oneself\n      来源: to cool off\n      同义词: 涼む\n    ',
  },
  {
    question: '領事',
    answer: 'ryōji',
    explantion: '\n      汉字: 領事\n      读音: りょうじ\n      意思: consul\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '領収',
    answer: 'ryōshū',
    explantion: '\n      汉字: 領収\n      读音: りょうしゅう\n      意思: receipt\n      来源: voucher\n      同义词: 領収\n    ',
  },
  {
    question: '力強い',
    answer: 'chikarazuyoi',
    explantion: '\n      汉字: 力強い\n      读音: ちからづよい\n      意思: reassuring\n      来源: emboldened\n      同义词: 力強い\n    ',
  },
  {
    question: '臨時',
    answer: 'rinji',
    explantion: '\n      汉字: 臨時\n      读音: りんじ\n      意思: temporary\n      来源: special\n      同义词: 臨時\n    ',
  },
  {
    question: '例外',
    answer: 'reigai',
    explantion: '\n      汉字: 例外\n      读音: れいがい\n      意思: exception\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '冷ます',
    answer: 'samasu',
    explantion: '\n      汉字: 冷ます\n      读音: さます\n      意思: to cool\n      来源: to dampen\n      同义词: 冷ます\n    ',
  },
  {
    question: '冷める',
    answer: 'sameru',
    explantion: '\n      汉字: 冷める\n      读音: さめる\n      意思: to become cool\n      来源: to wear off\n      同义词: 冷める\n    ',
  },
  {
    question: '冷やす',
    answer: 'hiyasu',
    explantion: '\n      汉字: 冷やす\n      读音: ひやす\n      意思: to cool\n      来源: to refrigerate\n      同义词: 冷やす, 冷す\n    ',
  },
  {
    question: '冷凍',
    answer: 'reitō',
    explantion: '\n      汉字: 冷凍\n      读音: れいとう\n      意思: freezing\n      来源: cold storage\n      同义词: 冷凍\n    ',
  },
  {
    question: '鈴',
    answer: 'suzu',
    explantion: '\n      汉字: 鈴\n      读音: すず\n      意思: bell\n      来源: waller\n      同义词: 鈴, 鈴\n    ',
  },
  {
    question: '零れる',
    answer: 'koboreru',
    explantion: '\n      汉字: 零れる\n      读音: こぼれる\n      意思: to overflow\n      来源: to spill\n      同义词: 零れる, , 溢れる\n    ',
  },
  {
    question: '零点',
    answer: 'reiten',
    explantion: '\n      汉字: 零点\n      读音: れいてん\n      意思: zero\n      来源: no marks\n      同义词: 零点\n    ',
  },
  {
    question: '列島',
    answer: 'rettō',
    explantion: '\n      汉字: 列島\n      读音: れっとう\n      意思: chain of islands\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '恋しい',
    answer: 'koishii',
    explantion: '\n      汉字: 恋しい\n      读音: こいしい\n      意思: (1) dear\n      来源: beloved\n      同义词: 恋しい\n    ',
  },
  {
    question: '煉瓦',
    answer: 'renga',
    explantion: '\n      汉字: 煉瓦\n      读音: れんが\n      意思: brick\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '連合',
    answer: 'rengō',
    explantion: '\n      汉字: 連合\n      读音: れんごう\n      意思: union\n      来源: alliance\n      同义词: 連合, 聯合\n    ',
  },
  {
    question: '朗らか',
    answer: 'hogaraka',
    explantion: '\n      汉字: 朗らか\n      读音: ほがらか\n      意思: brightness\n      来源: cheerfulness\n      同义词: 朗らか\n    ',
  },
  {
    question: '蝋燭',
    answer: 'rōsoku',
    explantion: '\n      汉字: 蝋燭\n      读音: ろうそく\n      意思: candle\n      来源: waller\n      同义词: , 蠟燭, , \n    ',
  },
  {
    question: '録音',
    answer: 'rokuon',
    explantion: '\n      汉字: 録音\n      读音: ろくおん\n      意思: (audio) recording\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '論ずる',
    answer: 'ronzuru',
    explantion: '\n      汉字: 論ずる\n      读音: ろんずる\n      意思: to argue\n      来源: to discuss\n      同义词: 論ずる\n    ',
  },
  {
    question: '和英',
    answer: 'kazuhide',
    explantion: '\n      汉字: 和英\n      读音: わえい\n      意思: Japanese-English\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '和服',
    answer: 'wafuku',
    explantion: '\n      汉字: 和服\n      读音: わふく\n      意思: Japanese clothes\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '話し掛ける',
    answer: 'hanashikakeru',
    explantion: '\n      汉字: 話し掛ける\n      读音: はなしかける\n      意思: to accost a person\n      来源: to talk (to someone)\n      同义词: 話し掛ける, 話しかける\n    ',
  },
  {
    question: '椀',
    answer: 'wan',
    explantion: '\n      汉字: 椀\n      读音: わん\n      意思: Japanese soup bowl\n      来源: wooden bowl\n      同义词: 椀\n    ',
  },
  {
    question: '碗',
    answer: 'wan',
    explantion: '\n      汉字: 碗\n      读音: わん\n      意思: bowl\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '丼',
    answer: 'domburi',
    explantion: '\n      汉字: 丼\n      读音: どんぶり\n      意思: porcelain bowl\n      来源: bowl of rice with food on top\n      同义词: 丼, 丼, 丼ぶり\n    ',
  },
  {
    question: '嗅ぐ',
    answer: 'kagu',
    explantion: '\n      汉字: 嗅ぐ\n      读音: かぐ\n      意思: to sniff\n      来源: to smell\n      同义词: 嗅ぐ\n    ',
  },
  {
    question: '囁く',
    answer: 'sasayaku',
    explantion: '\n      汉字: 囁く\n      读音: ささやく\n      意思: to whisper\n      来源: to murmur\n      同义词: 囁く, , 私語く\n    ',
  },
  {
    question: '箒',
    answer: 'hōki',
    explantion: '\n      汉字: 箒\n      读音: ほうき\n      意思: (n) broom\n      来源: waller\n      同义词: , 帚\n    ',
  },
  {
    question: '揉む',
    answer: 'momu',
    explantion: '\n      汉字: 揉む\n      读音: もむ\n      意思: to rub\n      来源: to crumple (up)\n      同义词: 揉む, \n    ',
  },
  {
    question: '曖昧',
    answer: 'aimai',
    explantion: '\n      汉字: 曖昧\n      读音: あいまい\n      意思: vague\n      来源: ambiguous\n      同义词: 曖昧, あい昧\n    ',
  },
  {
    question: '洒落',
    answer: 'share',
    explantion: '\n      汉字: 洒落\n      读音: しゃれ\n      意思: joke\n      来源: pun\n      同义词: 洒落, \n    ',
  },
  {
    question: '狡い',
    answer: 'zurui',
    explantion: '\n      汉字: 狡い\n      读音: ずるい\n      意思: sly\n      来源: cunning\n      同义词: 狡い, , , 狡い\n    ',
  },
  {
    question: '睨む',
    answer: 'niramu',
    explantion: '\n      汉字: 睨む\n      读音: にらむ\n      意思: to glare at\n      来源: to scowl at\n      同义词: 睨む, \n    ',
  },
  {
    question: '臍',
    answer: 'hozo',
    explantion: '\n      汉字: 臍\n      读音: へそ\n      意思: navel\n      来源: belly-button\n      同义词: 臍, , , 臍, 𦜝, 𦜝, \n    ',
  },
  {
    question: '一昨日',
    answer: 'ototoi',
    explantion: '\n      汉字: 一昨日\n      读音: おととい\n      意思: day before yesterday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '一昨年',
    answer: 'issakunen',
    explantion: '\n      汉字: 一昨年\n      读音: おととし\n      意思: year before last\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '逸れる',
    answer: 'soreru',
    explantion: '\n      汉字: 逸れる\n      读音: それる\n      意思: to stray (turn) from subject\n      来源: to get lost\n      同义词: 逸れる, \n    ',
  },
  {
    question: '火傷',
    answer: 'kashō',
    explantion: '\n      汉字: 火傷\n      读音: やけど\n      意思: burn\n      来源: scald\n      同义词: 火傷, , , 火傷\n    ',
  },
  {
    question: '冠',
    answer: 'kammuri',
    explantion: '\n      汉字: 冠\n      读音: かんむり\n      意思: crown\n      来源: diadem\n      同义词: 冠, 冠, 冠, 冠\n    ',
  },
  {
    question: '近々',
    answer: 'chikajika',
    explantion: '\n      汉字: 近々\n      读音: ちかぢか\n      意思: nearness\n      来源: before long\n      同义词: 近々, 近々, 近近, 近近, 近ぢか\n    ',
  },
  {
    question: '傾く',
    answer: 'katamuku',
    explantion: '\n      汉字: 傾く\n      读音: かたむく\n      意思: to incline toward\n      来源: to slant\n      同义词: 傾く, 傾く\n    ',
  },
  {
    question: '紅葉',
    answer: 'kōyō',
    explantion: '\n      汉字: 紅葉\n      读音: もみじ\n      意思: (1) (Japanese) maple\n      来源: waller\n      同义词: 黄葉, 黄葉, 椛\n    ',
  },
  {
    question: '小便',
    answer: 'shōben',
    explantion: '\n      汉字: 小便\n      读音: しょうべん\n      意思: (col) urine\n      来源: piss\n      同义词: 小便, 小便\n    ',
  },
  {
    question: '消耗',
    answer: 'shōmō',
    explantion: '\n      汉字: 消耗\n      读音: しょうもう\n      意思: exhaustion\n      来源: consumption\n      同义词: 消耗, 消耗\n    ',
  },
  {
    question: '寝台',
    answer: 'shindai',
    explantion: '\n      汉字: 寝台\n      读音: しんだい\n      意思: bed\n      来源: couch\n      同义词: 寝台, 寝台\n    ',
  },
  {
    question: '真っ白',
    answer: 'masshiro',
    explantion: '\n      汉字: 真っ白\n      读音: まっしろ\n      意思: pure white\n      来源: waller\n      同义词: まっ白, 真白, 真白\n    ',
  },
  {
    question: '足跡',
    answer: 'ashiato',
    explantion: '\n      汉字: 足跡\n      读音: あしあと\n      意思: footprints\n      来源: waller\n      同义词: 足跡, 足あと\n    ',
  },
  {
    question: '中指',
    answer: 'nakayubi',
    explantion: '\n      汉字: 中指\n      读音: なかゆび\n      意思: middle finger\n      来源: waller\n      同义词: 中指\n    ',
  },
  {
    question: '剃る',
    answer: 'soru',
    explantion: '\n      汉字: 剃る\n      读音: そる\n      意思: to shave\n      来源: waller\n      同义词: 剃る\n    ',
  },
  {
    question: '天皇',
    answer: 'tennō',
    explantion: '\n      汉字: 天皇\n      读音: てんのう\n      意思: Emperor of Japan\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '銅',
    answer: 'dō',
    explantion: '\n      汉字: 銅\n      读音: どう\n      意思: copper\n      来源: waller\n      同义词: 銅, 銅, 赤金\n    ',
  },
  {
    question: '凸凹',
    answer: 'ōtotsu',
    explantion: '\n      汉字: 凸凹\n      读音: でこぼこ\n      意思: unevenness\n      来源: roughness\n      同义词: 凸凹, 凸凹, 凸凹\n    ',
  },
  {
    question: '鈍い',
    answer: 'nibui',
    explantion: '\n      汉字: 鈍い\n      读音: にぶい\n      意思: dull (e.g. a knife)\n      来源: thickheaded\n      同义词: 鈍い\n    ',
  },
  {
    question: '燃やす',
    answer: 'moyasu',
    explantion: '\n      汉字: 燃やす\n      读音: もやす\n      意思: to burn\n      来源: waller\n      同义词: 燃す, 燃す\n    ',
  },
  {
    question: '白髪',
    answer: 'hakuhatsu',
    explantion: '\n      汉字: 白髪\n      读音: しらが\n      意思: white or grey hair\n      来源: trendy hair bleaching\n      同义词: 白髪, 白髪, 白髪, 白髪\n    ',
  },
  {
    question: '武士',
    answer: 'bushi',
    explantion: '\n      汉字: 武士\n      读音: ぶし\n      意思: warrior\n      来源: samurai\n      同义词: 武士, 武士, 武夫\n    ',
  },
  {
    question: '牧場',
    answer: 'bokujō',
    explantion: '\n      汉字: 牧場\n      读音: ぼくじょう\n      意思: (1) farm (livestock)\n      来源: (2) pasture land\n      同义词: 牧場, 牧場\n    ',
  },
  {
    question: '末っ子',
    answer: 'suekko',
    explantion: '\n      汉字: 末っ子\n      读音: すえっこ\n      意思: youngest child\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '夜行',
    answer: 'yakō',
    explantion: '\n      汉字: 夜行\n      读音: やこう\n      意思: walking around at night\n      来源: night train\n      同义词: 夜行, 夜行\n    ',
  },
  {
    question: '浴衣',
    answer: 'yukata',
    explantion: '\n      汉字: 浴衣\n      读音: ゆかた\n      意思: bathrobe\n      来源: informal summer kimono\n      同义词: 浴衣, 浴衣\n    ',
  },
  {
    question: '両側',
    answer: 'ryōgawa',
    explantion: '\n      汉字: 両側\n      读音: りょうがわ\n      意思: both sides\n      来源: waller\n      同义词: 両側\n    ',
  },
  {
    question: '佚',
    answer: '佚',
    explantion: '\n      汉字: 佚\n      读音: いつ\n      意思: be lost\n      来源: peace\n      同义词: 佚\n    ',
  },
  {
    question: '匙',
    answer: 'saji',
    explantion: '\n      汉字: 匙\n      读音: さじ\n      意思: spoon\n      来源: waller\n      同义词: , , 匙, , 匙, 匕, 匕, 匕\n    ',
  },
  {
    question: '暖まる',
    answer: 'atatamaru',
    explantion: '\n      汉字: 暖まる\n      读音: あたたまる\n      意思: to warm up\n      来源: to get warm\n      同义词: 暖まる, 温まる, 温まる, 温まる, 暖まる\n    ',
  },
  {
    question: '暖める',
    answer: 'atatameru',
    explantion: '\n      汉字: 暖める\n      读音: あたためる\n      意思: to warm\n      来源: to heat\n      同义词: 暖める, 温める, 温める, 温める, 暖める\n    ',
  },
  {
    question: '宛名',
    answer: 'atena',
    explantion: '\n      汉字: 宛名\n      读音: あてな\n      意思: address\n      来源: direction\n      同义词: 宛名, 宛て名, あて名\n    ',
  },
  {
    question: '編物',
    answer: 'amimono',
    explantion: '\n      汉字: 編物\n      读音: あみもの\n      意思: knitting\n      来源: web\n      同义词: 編物, 編み物\n    ',
  },
  {
    question: '怪しい',
    answer: 'ayashii',
    explantion: '\n      汉字: 怪しい\n      读音: あやしい\n      意思: suspicious\n      来源: dubious\n      同义词: 怪しい\n    ',
  },
  {
    question: '生け花',
    answer: 'ikebana',
    explantion: '\n      汉字: 生け花\n      读音: いけばな\n      意思: (1) flower arrangement\n      来源: waller\n      同义词: 生花, 生花, 活け花, 活花, 活花\n    ',
  },
  {
    question: '入れ物',
    answer: 'iremono',
    explantion: '\n      汉字: 入れ物\n      读音: いれもの\n      意思: container\n      来源: case\n      同义词: 入れ物, 容れ物, 入物, 容物\n    ',
  },
  {
    question: '植木',
    answer: 'ueki',
    explantion: '\n      汉字: 植木\n      读音: うえき\n      意思: garden shrubs\n      来源: trees\n      同义词: 植木, 植え木\n    ',
  },
  {
    question: '打合せ',
    answer: 'uchiawase',
    explantion: '\n      汉字: 打合せ\n      读音: うちあわせ\n      意思: business meeting\n      来源: previous arrangement\n      同义词: 打合せ, 打ち合わせ, 打ち合せ, 打合わせ\n    ',
  },
  {
    question: '映す',
    answer: 'utsusu',
    explantion: '\n      汉字: 映す\n      读音: うつす\n      意思: to project\n      来源: to reflect\n      同义词: 映す\n    ',
  },
  {
    question: '売上',
    answer: 'uriage',
    explantion: '\n      汉字: 売上\n      读音: うりあげ\n      意思: amount sold\n      来源: proceeds\n      同义词: 売上, 売り上げ, 売上げ, 売り上\n    ',
  },
  {
    question: '売行き',
    answer: 'ureyuki',
    explantion: '\n      汉字: 売行き\n      读音: うれゆき\n      意思: sales\n      来源: waller\n      同义词: 売れ行き, 売行\n    ',
  },
  {
    question: '押える',
    answer: 'osaeru',
    explantion: '\n      汉字: 押える\n      读音: おさえる\n      意思: to stop\n      来源: to restrain\n      同义词: 押える, 押さえる\n    ',
  },
  {
    question: '納める',
    answer: 'osameru',
    explantion: '\n      汉字: 納める\n      读音: おさめる\n      意思: to obtain\n      来源: to reap\n      同义词: 納める\n    ',
  },
  {
    question: '落着く',
    answer: 'rakuchakuku',
    explantion: '\n      汉字: 落着く\n      读音: おちつく\n      意思: to calm down\n      来源: to settle down\n      同义词: 落着く, 落ち着く, 落ちつく, 落ち付く, 落付く\n    ',
  },
  {
    question: '落し物',
    answer: 'otoshimono',
    explantion: '\n      汉字: 落し物\n      读音: おとしもの\n      意思: lost property\n      来源: waller\n      同义词: 落とし物\n    ',
  },
  {
    question: '思い付く',
    answer: 'omoitsuku',
    explantion: '\n      汉字: 思い付く\n      读音: おもいつく\n      意思: to think of\n      来源: to hit upon\n      同义词: 思い付く, 思いつく\n    ',
  },
  {
    question: '会館',
    answer: 'kaikan',
    explantion: '\n      汉字: 会館\n      读音: かいかん\n      意思: meeting hall\n      来源: assembly hall\n      同义词: 会館, 会舘\n    ',
  },
  {
    question: '代える',
    answer: 'kaeru',
    explantion: '\n      汉字: 代える\n      读音: かえる\n      意思: to exchange\n      来源: to interchange\n      同义词: 代える\n    ',
  },
  {
    question: '係わる',
    answer: 'kakawaru',
    explantion: '\n      汉字: 係わる\n      读音: かかわる\n      意思: to concern oneself in\n      来源: to have to do with\n      同义词: 係わる, 関わる, 拘る, 関る, 拘わる, 係る\n    ',
  },
  {
    question: '書留',
    answer: 'kakitome',
    explantion: '\n      汉字: 書留\n      读音: かきとめ\n      意思: writing down\n      来源: putting on record\n      同义词: 書留, 書き留め, 書留め\n    ',
  },
  {
    question: '書取',
    answer: 'kakitori',
    explantion: '\n      汉字: 書取\n      读音: かきとり\n      意思: dictation\n      来源: waller\n      同义词: 書き取り\n    ',
  },
  {
    question: '掛け算',
    answer: 'kakezan',
    explantion: '\n      汉字: 掛け算\n      读音: かけざん\n      意思: multiplication\n      来源: waller\n      同义词: 掛算, かけ算\n    ',
  },
  {
    question: '貸し出し',
    answer: 'kashidashi',
    explantion: '\n      汉字: 貸し出し\n      读音: かしだし\n      意思: lending\n      来源: loaning\n      同义词: 貸し出し, 貸出, 貸出し\n    ',
  },
  {
    question: '個所',
    answer: 'kasho',
    explantion: '\n      汉字: 個所\n      读音: かしょ\n      意思: passage\n      来源: place\n      同义词: 個所, 箇所, カ所, ヶ所, か所, ヵ所, ケ所\n    ',
  },
  {
    question: '塊',
    answer: 'katamari',
    explantion: '\n      汉字: 塊\n      读音: かたまり\n      意思: lump\n      来源: mass\n      同义词: 塊, 固まり, 塊まり\n    ',
  },
  {
    question: '片寄る',
    answer: 'katayoru',
    explantion: '\n      汉字: 片寄る\n      读音: かたよる\n      意思: to be one-sided\n      来源: to incline\n      同义词: 片寄る, 偏る\n    ',
  },
  {
    question: '仮名',
    answer: 'kamei',
    explantion: '\n      汉字: 仮名\n      读音: かな\n      意思: (n) alias\n      来源: pseudonym\n      同义词: 仮名, 仮字, 假名\n    ',
  },
  {
    question: '代る',
    answer: 'kawaru',
    explantion: '\n      汉字: 代る\n      读音: かわる\n      意思: (v5r\n      来源: vi) to take the place of\n      同义词: 代る, 替わる, 代わる, 換わる, 替る, 換る\n    ',
  },
  {
    question: '乾杯',
    answer: 'kampai',
    explantion: '\n      汉字: 乾杯\n      读音: かんぱい\n      意思: toast (drink)\n      来源: waller\n      同义词: 乾盃\n    ',
  },
  {
    question: '飢饉',
    answer: 'kikin',
    explantion: '\n      汉字: 飢饉\n      读音: ききん\n      意思: famine\n      来源: waller\n      同义词: 飢きん, 饑饉\n    ',
  },
  {
    question: '基準',
    answer: 'kijun',
    explantion: '\n      汉字: 基準\n      读音: きじゅん\n      意思: standard\n      来源: basis\n      同义词: 基準, 規準\n    ',
  },
  {
    question: '気を付ける',
    answer: 'kiotsukeru',
    explantion: '\n      汉字: 気を付ける\n      读音: きをつける\n      意思: to be careful\n      来源: to pay attention\n      同义词: 気を付ける, 気をつける\n    ',
  },
  {
    question: '区切る',
    answer: 'kugiru',
    explantion: '\n      汉字: 区切る\n      读音: くぎる\n      意思: to punctuate\n      来源: to cut off\n      同义词: 区切る, 句切る\n    ',
  },
  {
    question: '組合せ',
    answer: 'kumiawase',
    explantion: '\n      汉字: 組合せ\n      读音: くみあわせ\n      意思: combination\n      来源: waller\n      同义词: 組み合わせ, 組合わせ, 組み合せ\n    ',
  },
  {
    question: '悔しい',
    answer: 'kuyashii',
    explantion: '\n      汉字: 悔しい\n      读音: くやしい\n      意思: regrettable\n      来源: mortifying\n      同义词: 悔しい, 口惜しい, 口惜しい, 悔やしい\n    ',
  },
  {
    question: '蛍光灯',
    answer: 'keikōtō',
    explantion: '\n      汉字: 蛍光灯\n      读音: けいこうとう\n      意思: fluorescent lamp\n      来源: person who is slow to react\n      同义词: 蛍光灯, 蛍光燈, 螢光灯, 螢光燈\n    ',
  },
  {
    question: '請う',
    answer: 'kou',
    explantion: '\n      汉字: 請う\n      读音: こう\n      意思: to ask\n      来源: to request\n      同义词: 請う, 乞う\n    ',
  },
  {
    question: '交替',
    answer: 'kōtai',
    explantion: '\n      汉字: 交替\n      读音: こうたい\n      意思: alternation\n      来源: change\n      同义词: 交替, 交代\n    ',
  },
  {
    question: '超える',
    answer: 'koeru',
    explantion: '\n      汉字: 超える\n      读音: こえる\n      意思: to exceed\n      来源: to cross over\n      同义词: 超える\n    ',
  },
  {
    question: '言付ける',
    answer: 'ītsukeru',
    explantion: '\n      汉字: 言付ける\n      读音: ことづける\n      意思: to send word\n      来源: to send a message\n      同义词: 言付ける, 言づける, 託ける\n    ',
  },
  {
    question: '御馳走',
    answer: 'gochisō',
    explantion: '\n      汉字: 御馳走\n      读音: ごちそう\n      意思: feast\n      来源: treating (someone)\n      同义词: 御馳走\n    ',
  },
  {
    question: '逆様',
    answer: 'sakasama',
    explantion: '\n      汉字: 逆様\n      读音: さかさま\n      意思: inversion\n      来源: upside down\n      同义词: 逆様, 逆さま, 倒\n    ',
  },
  {
    question: '捜す',
    answer: 'sagasu',
    explantion: '\n      汉字: 捜す\n      读音: さがす\n      意思: to search\n      来源: to seek\n      同义词: 捜す\n    ',
  },
  {
    question: '差し支え',
    answer: 'sashitsukae',
    explantion: '\n      汉字: 差し支え\n      读音: さしつかえ\n      意思: hindrance\n      来源: impediment\n      同义词: 差し支え, 差支え, 差閊, 差閊え\n    ',
  },
  {
    question: '錆',
    answer: 'sabi',
    explantion: '\n      汉字: 錆\n      读音: さび\n      意思: rust (colour)\n      来源: waller\n      同义词: 錆び\n    ',
  },
  {
    question: '静まる',
    answer: 'shizumaru',
    explantion: '\n      汉字: 静まる\n      读音: しずまる\n      意思: to quieten down\n      来源: to calm down\n      同义词: 静まる, 鎮まる\n    ',
  },
  {
    question: '絞る',
    answer: 'shiboru',
    explantion: '\n      汉字: 絞る\n      读音: しぼる\n      意思: to press\n      来源: to wring\n      同义词: 絞る, 搾る\n    ',
  },
  {
    question: '締切',
    answer: 'shimekiri',
    explantion: '\n      汉字: 締切\n      读音: しめきり\n      意思: closing\n      来源: cut-off\n      同义词: 締切, 締め切り, 締切り, 〆切, 〆切り, 乄切り, 閉め切り, 閉切り\n    ',
  },
  {
    question: '締め切る',
    answer: 'shimekiru',
    explantion: '\n      汉字: 締め切る\n      读音: しめきる\n      意思: to shut up\n      来源: waller\n      同义词: 閉め切る, 〆切る, 閉切る, 締切る\n    ',
  },
  {
    question: '醤油',
    answer: 'shōyu',
    explantion: '\n      汉字: 醤油\n      读音: しょうゆ\n      意思: soy sauce\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '知合い',
    answer: 'shiriai',
    explantion: '\n      汉字: 知合い\n      读音: しりあい\n      意思: acquaintance\n      来源: waller\n      同义词: 知り合い, 知りあい, 知り合, 知合\n    ',
  },
  {
    question: '退く',
    answer: 'shirizoku',
    explantion: '\n      汉字: 退く\n      读音: どく\n      意思: (1) to retreat\n      来源: to recede\n      同义词: 退く, , , 退く\n    ',
  },
  {
    question: '芯',
    answer: 'shin',
    explantion: '\n      汉字: 芯\n      读音: しん\n      意思: core\n      来源: heart\n      同义词: 芯\n    ',
  },
  {
    question: '重体',
    answer: 'jūtai',
    explantion: '\n      汉字: 重体\n      读音: じゅうたい\n      意思: seriously ill\n      来源: serious condition\n      同义词: 重体, 重態\n    ',
  },
  {
    question: '絨毯',
    answer: 'jūtan',
    explantion: '\n      汉字: 絨毯\n      读音: じゅうたん\n      意思: carpet\n      来源: waller\n      同义词: 絨緞, 絨氈, , \n    ',
  },
  {
    question: '好き好き',
    answer: 'sukisuki',
    explantion: '\n      汉字: 好き好き\n      读音: すきずき\n      意思: matter of taste\n      来源: waller\n      同义词: 好きずき\n    ',
  },
  {
    question: '住まい',
    answer: 'sumai',
    explantion: '\n      汉字: 住まい\n      读音: すまい\n      意思: dwelling\n      来源: house\n      同义词: 住まい, 住い, 住居\n    ',
  },
  {
    question: '折角',
    answer: 'sekkaku',
    explantion: '\n      汉字: 折角\n      读音: せっかく\n      意思: with trouble\n      来源: at great pains\n      同义词: 折角, \n    ',
  },
  {
    question: '先々月',
    answer: 'sakizakitsuki',
    explantion: '\n      汉字: 先々月\n      读音: せんせんげつ\n      意思: month before last\n      来源: waller\n      同义词: 先先月\n    ',
  },
  {
    question: '先頭',
    answer: 'sentō',
    explantion: '\n      汉字: 先頭\n      读音: せんとう\n      意思: head\n      来源: lead\n      同义词: 先頭, 先登\n    ',
  },
  {
    question: '相互',
    answer: 'sōgo',
    explantion: '\n      汉字: 相互\n      读音: そうご\n      意思: mutual\n      来源: reciprocal\n      同义词: 相互\n    ',
  },
  {
    question: '騒々しい',
    answer: 'sōzōshii',
    explantion: '\n      汉字: 騒々しい\n      读音: そうぞうしい\n      意思: noisy\n      来源: boisterous\n      同义词: 騒々しい, 騒騒しい\n    ',
  },
  {
    question: '卒直',
    answer: 'sotsutadashi',
    explantion: '\n      汉字: 卒直\n      读音: そっちょく\n      意思: frankness\n      来源: candour\n      同义词: 卒直, 率直\n    ',
  },
  {
    question: '算盤',
    answer: 'soroban',
    explantion: '\n      汉字: 算盤\n      读音: そろばん\n      意思: abacus\n      来源: waller\n      同义词: , 十露盤, 珠盤, \n    ',
  },
  {
    question: '続々',
    answer: 'zokuzoku',
    explantion: '\n      汉字: 続々\n      读音: ぞくぞく\n      意思: successively\n      来源: one after another\n      同义词: 続々, 続続\n    ',
  },
  {
    question: '炊く',
    answer: 'taku',
    explantion: '\n      汉字: 炊く\n      读音: たく\n      意思: to boil\n      来源: to cook\n      同义词: 炊く\n    ',
  },
  {
    question: '焚く',
    answer: 'taku',
    explantion: '\n      汉字: 焚く\n      读音: たく\n      意思: to burn\n      来源: to kindle\n      同义词: 焚く\n    ',
  },
  {
    question: '蓄える',
    answer: 'takuwaeru',
    explantion: '\n      汉字: 蓄える\n      读音: たくわえる\n      意思: to store\n      来源: to lay in stock\n      同义词: 蓄える, 貯える\n    ',
  },
  {
    question: '発つ',
    answer: 'tatsu',
    explantion: '\n      汉字: 発つ\n      读音: たつ\n      意思: to depart (on a plane\n      来源:  train\n      同义词: 発つ\n    ',
  },
  {
    question: '建つ',
    answer: 'tatsu',
    explantion: '\n      汉字: 建つ\n      读音: たつ\n      意思: to erect\n      来源: to be erected\n      同义词: 建つ\n    ',
  },
  {
    question: '例える',
    answer: 'tatoeru',
    explantion: '\n      汉字: 例える\n      读音: たとえる\n      意思: to compare\n      来源: to liken\n      同义词: 例える, 喩える, 譬える\n    ',
  },
  {
    question: '溜息',
    answer: 'tameiki',
    explantion: '\n      汉字: 溜息\n      读音: ためいき\n      意思: a sigh\n      来源: waller\n      同义词: ため息, 溜め息\n    ',
  },
  {
    question: '炭鉱',
    answer: 'tankō',
    explantion: '\n      汉字: 炭鉱\n      读音: たんこう\n      意思: coal mine\n      来源: coal pit\n      同义词: 炭鉱, 炭坑, 炭礦\n    ',
  },
  {
    question: '短編',
    answer: 'tampen',
    explantion: '\n      汉字: 短編\n      读音: たんぺん\n      意思: short (e.g. story\n      来源:  film)\n      同义词: 短編, 短篇\n    ',
  },
  {
    question: '着々',
    answer: 'chakuchaku',
    explantion: '\n      汉字: 着々\n      读音: ちゃくちゃく\n      意思: steadily\n      来源: waller\n      同义词: 着着\n    ',
  },
  {
    question: '茶碗',
    answer: 'chawan',
    explantion: '\n      汉字: 茶碗\n      读音: ちゃわん\n      意思: rice bowl\n      来源: tea cup\n      同义词: 茶碗\n    ',
  },
  {
    question: '直径',
    answer: 'chokkei',
    explantion: '\n      汉字: 直径\n      读音: ちょっけい\n      意思: diameter\n      来源: waller\n      同义词: 直経\n    ',
  },
  {
    question: '付合う',
    answer: 'tsukiau',
    explantion: '\n      汉字: 付合う\n      读音: つきあう\n      意思: to associate with\n      来源: to keep company with\n      同义词: 付合う, 付き合う, つき合う\n    ',
  },
  {
    question: '造る',
    answer: 'tsukuru',
    explantion: '\n      汉字: 造る\n      读音: つくる\n      意思: to make\n      来源: to create\n      同义词: 造る\n    ',
  },
  {
    question: '手帳',
    answer: 'techō',
    explantion: '\n      汉字: 手帳\n      读音: てちょう\n      意思: notebook\n      来源: waller\n      同义词: 手帖\n    ',
  },
  {
    question: '手続き',
    answer: 'tetsuzuki',
    explantion: '\n      汉字: 手続き\n      读音: てつづき\n      意思: procedure\n      来源: (legal) process\n      同义词: 手続き, 手続\n    ',
  },
  {
    question: '手拭い',
    answer: 'tenugui',
    explantion: '\n      汉字: 手拭い\n      读音: てぬぐい\n      意思: (hand) towel\n      来源: waller\n      同义词: 手ぬぐい, 手拭\n    ',
  },
  {
    question: '点々',
    answer: 'tenten',
    explantion: '\n      汉字: 点々\n      读音: てんてん\n      意思: here and there\n      来源: little by little\n      同义词: 点々, 点点\n    ',
  },
  {
    question: '出入口',
    answer: 'deiriguchi',
    explantion: '\n      汉字: 出入口\n      读音: でいりぐち\n      意思: exit and entrance\n      来源: waller\n      同义词: 出入り口\n    ',
  },
  {
    question: '出掛ける',
    answer: 'dekakeru',
    explantion: '\n      汉字: 出掛ける\n      读音: でかける\n      意思: to depart\n      来源: to set out\n      同义词: 出掛ける\n    ',
  },
  {
    question: '問い合わせ',
    answer: 'toiawase',
    explantion: '\n      汉字: 問い合わせ\n      读音: といあわせ\n      意思: enquiry\n      来源: ENQ\n      同义词: 問い合わせ, 問合せ, 問い合せ, 問合わせ\n    ',
  },
  {
    question: '所々',
    answer: 'tokorodokoro',
    explantion: '\n      汉字: 所々\n      读音: ところどころ\n      意思: here and there\n      来源: some parts (of something)\n      同义词: 所々, 所々, 所所, 所所, 処々, 処処\n    ',
  },
  {
    question: '整う',
    answer: 'totonou',
    explantion: '\n      汉字: 整う\n      读音: ととのう\n      意思: to be prepared\n      来源: to be in order\n      同义词: 整う, 調う, 斉う\n    ',
  },
  {
    question: '飛び込む',
    answer: 'tobikomu',
    explantion: '\n      汉字: 飛び込む\n      读音: とびこむ\n      意思: to jump in\n      来源: to leap in\n      同义词: 飛び込む, 飛びこむ, 飛込む\n    ',
  },
  {
    question: '捕える',
    answer: 'toraeru',
    explantion: '\n      汉字: 捕える\n      读音: とらえる\n      意思: to seize\n      来源: to grasp\n      同义词: 捕える, 捉える, 捕らえる\n    ',
  },
  {
    question: '採る',
    answer: 'toru',
    explantion: '\n      汉字: 採る\n      读音: とる\n      意思: (1) to adopt (measure\n      来源:  proposal)\n      同义词: 採る\n    ',
  },
  {
    question: '治す',
    answer: 'naosu',
    explantion: '\n      汉字: 治す\n      读音: なおす\n      意思: to cure\n      来源: to heal\n      同义词: 治す\n    ',
  },
  {
    question: '中身',
    answer: 'nakami',
    explantion: '\n      汉字: 中身\n      读音: なかみ\n      意思: contents\n      来源: interior\n      同义词: 中身, 中味\n    ',
  },
  {
    question: '謎謎',
    answer: 'nazonazo',
    explantion: '\n      汉字: 謎謎\n      读音: なぞなぞ\n      意思: riddle\n      来源: puzzle\n      同义词: 謎謎, , 謎々\n    ',
  },
  {
    question: '何々',
    answer: 'nani々',
    explantion: '\n      汉字: 何々\n      读音: なになに\n      意思: such and such\n      来源: What?\n      同义词: 何々, 何何\n    ',
  },
  {
    question: '並木',
    answer: 'namiki',
    explantion: '\n      汉字: 並木\n      读音: なみき\n      意思: roadside tree\n      来源: row of trees\n      同义词: 並木, 並樹, 並み木\n    ',
  },
  {
    question: '倣う',
    answer: 'narau',
    explantion: '\n      汉字: 倣う\n      读音: ならう\n      意思: to imitate\n      来源: to follow\n      同义词: 倣う, , 傚う, 慣らう\n    ',
  },
  {
    question: '匂う',
    answer: 'niou',
    explantion: '\n      汉字: 匂う\n      读音: におう\n      意思: to be fragrant\n      来源: to smell\n      同义词: 匂う, 臭う\n    ',
  },
  {
    question: '俄',
    answer: 'niwaka',
    explantion: '\n      汉字: 俄\n      读音: にわか\n      意思: sudden\n      来源: abrupt\n      同义词: 俄, , 俄か\n    ',
  },
  {
    question: '載せる',
    answer: 'noseru',
    explantion: '\n      汉字: 載せる\n      读音: のせる\n      意思: to place on (something)\n      来源: to take on board\n      同义词: 載せる\n    ',
  },
  {
    question: '延ばす',
    answer: 'nobasu',
    explantion: '\n      汉字: 延ばす\n      读音: のばす\n      意思: to lengthen\n      来源: to stretch\n      同义词: 延ばす\n    ',
  },
  {
    question: '乗換',
    answer: 'norikae',
    explantion: '\n      汉字: 乗換\n      读音: のりかえ\n      意思: (n) transfer (trains\n      来源:  buses\n      同义词: 乗換, 乗り換え, 乗換え, 乗りかえ, 乗り替え, 乗替え\n    ',
  },
  {
    question: '呑気',
    answer: 'nonki',
    explantion: '\n      汉字: 呑気\n      读音: のんき\n      意思: carefree\n      来源: optimistic\n      同义词: 呑気, , 暢気, 暖気, のん気, \n    ',
  },
  {
    question: '量る',
    answer: 'hakaru',
    explantion: '\n      汉字: 量る\n      读音: はかる\n      意思: to measure\n      来源: to weigh\n      同义词: 量る, 測る\n    ',
  },
  {
    question: '剥す',
    answer: 'hagasu',
    explantion: '\n      汉字: 剥す\n      读音: はがす\n      意思: (v5s) to tear off\n      来源: to peel off\n      同义词: 剥す, , 剥がす, , 剥がす, 剝がす, 剝がす, 剥す\n    ',
  },
  {
    question: '挟む',
    answer: 'hasamu',
    explantion: '\n      汉字: 挟む\n      读音: はさむ\n      意思: to interpose\n      来源: to hold between\n      同义词: 挟む, 挿む, 挾む\n    ',
  },
  {
    question: '果して',
    answer: 'hatashite',
    explantion: '\n      汉字: 果して\n      读音: はたして\n      意思: as was expected\n      来源: really\n      同义词: 果して, 果たして\n    ',
  },
  {
    question: '話合い',
    answer: 'hanashiai',
    explantion: '\n      汉字: 話合い\n      读音: はなしあい\n      意思: discussion\n      来源: conference\n      同义词: 話合い, 話し合い\n    ',
  },
  {
    question: '話中',
    answer: 'hanashichū',
    explantion: '\n      汉字: 話中\n      读音: はなしちゅう\n      意思: while talking\n      来源: the line is busy\n      同义词: 話中, 話し中\n    ',
  },
  {
    question: '歯磨き',
    answer: 'hamigaki',
    explantion: '\n      汉字: 歯磨き\n      读音: はみがき\n      意思: dentifrice\n      来源: toothpaste\n      同义词: 歯磨き, 歯磨\n    ',
  },
  {
    question: '反映',
    answer: 'han\'ei',
    explantion: '\n      汉字: 反映\n      读音: はんえい\n      意思: reflection\n      来源: influence\n      同义词: 反映, 反影\n    ',
  },
  {
    question: '万歳',
    answer: 'banzai',
    explantion: '\n      汉字: 万歳\n      读音: ばんざい\n      意思: hurrah\n      来源:  cheers\n      同义词: 万歳, 万歳, 万才, 万才, \n    ',
  },
  {
    question: '日当たり',
    answer: 'hiatari',
    explantion: '\n      汉字: 日当たり\n      读音: ひあたり\n      意思: exposure to the sun\n      来源: sunny place\n      同义词: 日当たり, 日あたり, 日当り, 陽当り, 陽当たり, 陽あたり, 日当\n    ',
  },
  {
    question: '引受る',
    answer: 'hikiukeru',
    explantion: '\n      汉字: 引受る\n      读音: ひきうける\n      意思: to undertake\n      来源: to take up\n      同义词: 引受る, 引き受ける, 引受ける, 引きうける\n    ',
  },
  {
    question: '引算',
    answer: 'hikizan',
    explantion: '\n      汉字: 引算\n      读音: ひきざん\n      意思: subtraction\n      来源: waller\n      同义词: 引き算\n    ',
  },
  {
    question: '引出す',
    answer: 'hikidasu',
    explantion: '\n      汉字: 引出す\n      读音: ひきだす\n      意思: to pull out\n      来源: to take out\n      同义词: 引出す\n    ',
  },
  {
    question: '引き止める',
    answer: 'hikitomeru',
    explantion: '\n      汉字: 引き止める\n      读音: ひきとめる\n      意思: to detain\n      来源: to check\n      同义词: 引き止める, 引止める, 引き留める\n    ',
  },
  {
    question: '陽射',
    answer: 'hisha',
    explantion: '\n      汉字: 陽射\n      读音: ひざし\n      意思: sunlight\n      来源: rays of the sun\n      同义词: 陽射, 日差し, 陽射し, 日射し, 陽差し, 日ざし, 陽ざし, 日差\n    ',
  },
  {
    question: '引っ繰り返す',
    answer: 'hikkurikaesu',
    explantion: '\n      汉字: 引っ繰り返す\n      读音: ひっくりかえす\n      意思: to turn over\n      来源: to overturn\n      同义词: 引っ繰り返す, ひっくり返す, ひっくり返す, 引っくり返す, 引っくり返す, 引っ繰り返す, 引繰り返す, 引繰り返す\n    ',
  },
  {
    question: '引越し',
    answer: 'hikkoshi',
    explantion: '\n      汉字: 引越し\n      读音: ひっこし\n      意思: moving (dwelling etc.)\n      来源: changing residence\n      同义词: 引越し, 引っ越し, 引越\n    ',
  },
  {
    question: '人差指',
    answer: 'hitosashiyubi',
    explantion: '\n      汉字: 人差指\n      读音: ひとさしゆび\n      意思: index finger\n      来源: waller\n      同义词: 人差し指, 人指し指, 人さし指\n    ',
  },
  {
    question: '響き',
    answer: 'hibiki',
    explantion: '\n      汉字: 響き\n      读音: ひびき\n      意思: echo\n      来源: sound\n      同义词: 響き, 響\n    ',
  },
  {
    question: '広げる',
    answer: 'hirogeru',
    explantion: '\n      汉字: 広げる\n      读音: ひろげる\n      意思: to spread\n      来源: to extend\n      同义词: 広げる, 拡げる, 展げる\n    ',
  },
  {
    question: '広々',
    answer: 'hirobiro',
    explantion: '\n      汉字: 広々\n      读音: ひろびろ\n      意思: extensive\n      来源: spacious\n      同义词: 広々, 広広\n    ',
  },
  {
    question: '殖える',
    answer: 'fueru',
    explantion: '\n      汉字: 殖える\n      读音: ふえる\n      意思: to increase\n      来源: to multiply\n      同义词: 殖える\n    ',
  },
  {
    question: '塞がる',
    answer: 'fusagaru',
    explantion: '\n      汉字: 塞がる\n      读音: ふさがる\n      意思: to be plugged up\n      来源: to be shut up\n      同义词: 塞がる, , , 塞がる\n    ',
  },
  {
    question: '塞ぐ',
    answer: 'fusagu',
    explantion: '\n      汉字: 塞ぐ\n      读音: ふさぐ\n      意思: to stop up\n      来源: to close up\n      同义词: 塞ぐ\n    ',
  },
  {
    question: '附属',
    answer: 'fuzoku',
    explantion: '\n      汉字: 附属\n      读音: ふぞく\n      意思: attached\n      来源: belonging\n      同义词: 附属, 付属\n    ',
  },
  {
    question: '踏切',
    answer: 'fumikiri',
    explantion: '\n      汉字: 踏切\n      读音: ふみきり\n      意思: railway crossing\n      来源: level crossing\n      同义词: 踏切, 踏切り, 踏み切り, 踏み切\n    ',
  },
  {
    question: '増やす',
    answer: 'fuyasu',
    explantion: '\n      汉字: 増やす\n      读音: ふやす\n      意思: to increase\n      来源: to add to\n      同义词: 増やす, 殖やす\n    ',
  },
  {
    question: '振舞う',
    answer: 'furumau',
    explantion: '\n      汉字: 振舞う\n      读音: ふるまう\n      意思: to behave\n      来源: to conduct oneself\n      同义词: 振舞う, 振る舞う\n    ',
  },
  {
    question: '編集',
    answer: 'henshū',
    explantion: '\n      汉字: 編集\n      读音: へんしゅう\n      意思: editing\n      来源: compilation\n      同义词: 編集, 編修, 編輯\n    ',
  },
  {
    question: '別々',
    answer: 'betsu々',
    explantion: '\n      汉字: 別々\n      读音: べつべつ\n      意思: separately\n      来源: individually\n      同义词: 別々, 別別\n    ',
  },
  {
    question: '包帯',
    answer: 'hōtai',
    explantion: '\n      汉字: 包帯\n      读音: ほうたい\n      意思: bandage\n      来源: dressing\n      同义词: 包帯, 繃帯\n    ',
  },
  {
    question: '干す',
    answer: 'hosu',
    explantion: '\n      汉字: 干す\n      读音: ほす\n      意思: to air\n      来源: to dry\n      同义词: 干す, 乾す\n    ',
  },
  {
    question: '膨大',
    answer: 'bōdai',
    explantion: '\n      汉字: 膨大\n      读音: ぼうだい\n      意思: huge\n      来源: bulky\n      同义词: 膨大, 厖大, 尨大\n    ',
  },
  {
    question: '坊っちゃん',
    answer: 'botchan',
    explantion: '\n      汉字: 坊っちゃん\n      读音: ぼっちゃん\n      意思: son (of others)\n      来源: waller\n      同义词: 坊ちゃん\n    ',
  },
  {
    question: '混ざる',
    answer: 'mazaru',
    explantion: '\n      汉字: 混ざる\n      读音: まざる\n      意思: to be mixed\n      来源: to be blended with\n      同义词: 混ざる, 雑ざる, 交ざる\n    ',
  },
  {
    question: '混じる',
    answer: 'majiru',
    explantion: '\n      汉字: 混じる\n      读音: まじる\n      意思: to be mixed\n      来源: to be blended with\n      同义词: 混じる, 雑じる, 交る, 交じる\n    ',
  },
  {
    question: '真っ黒',
    answer: 'makkuro',
    explantion: '\n      汉字: 真っ黒\n      读音: まっくろ\n      意思: pitch black\n      来源: waller\n      同义词: まっ黒, 真黒\n    ',
  },
  {
    question: '真っ青',
    answer: 'massao',
    explantion: '\n      汉字: 真っ青\n      读音: まっさお\n      意思: deep blue\n      来源: ghastly pale\n      同义词: 真っ青, まっ青, 真青\n    ',
  },
  {
    question: '稀',
    answer: 'mare',
    explantion: '\n      汉字: 稀\n      读音: まれ\n      意思: rare\n      来源: seldom\n      同义词: 稀, , 希\n    ',
  },
  {
    question: '満点',
    answer: 'manten',
    explantion: '\n      汉字: 満点\n      读音: まんてん\n      意思: perfect score\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '見掛け',
    answer: 'mikake',
    explantion: '\n      汉字: 見掛け\n      读音: みかけ\n      意思: outward appearance\n      来源: waller\n      同义词: 見かけ\n    ',
  },
  {
    question: '見付かる',
    answer: 'mitsukaru',
    explantion: '\n      汉字: 見付かる\n      读音: みつかる\n      意思: to be found\n      来源: to be discovered\n      同义词: 見付かる\n    ',
  },
  {
    question: '見付ける',
    answer: 'mitsukeru',
    explantion: '\n      汉字: 見付ける\n      读音: みつける\n      意思: to be familiar\n      来源: to discover\n      同义词: 見付ける\n    ',
  },
  {
    question: '見慣れる',
    answer: 'minareru',
    explantion: '\n      汉字: 見慣れる\n      读音: みなれる\n      意思: to become used to seeing\n      来源: to be familiar with\n      同义词: 見慣れる, 見馴れる, 見なれる\n    ',
  },
  {
    question: '名字',
    answer: 'myōji',
    explantion: '\n      汉字: 名字\n      读音: みょうじ\n      意思: surname\n      来源: family name\n      同义词: 名字, 苗字\n    ',
  },
  {
    question: '向う',
    answer: 'mukō',
    explantion: '\n      汉字: 向う\n      读音: むかう\n      意思: (v5u) to face\n      来源: to go towards\n      同义词: 向う\n    ',
  },
  {
    question: '元々',
    answer: 'motomoto',
    explantion: '\n      汉字: 元々\n      读音: もともと\n      意思: originally\n      来源: by nature\n      同义词: 元々, , 本々, 元元, 本本\n    ',
  },
  {
    question: '薬缶',
    answer: 'yakan',
    explantion: '\n      汉字: 薬缶\n      读音: やかん\n      意思: kettle\n      来源: waller\n      同义词: , 薬罐, 薬鑵, 藥罐\n    ',
  },
  {
    question: '軟らかい',
    answer: 'yawarakai',
    explantion: '\n      汉字: 軟らかい\n      读音: やわらかい\n      意思: soft\n      来源: tender\n      同义词: 軟らかい\n    ',
  },
  {
    question: '悠々',
    answer: 'yūyū',
    explantion: '\n      汉字: 悠々\n      读音: ゆうゆう\n      意思: quiet\n      来源: calm\n      同义词: 悠々, 悠悠\n    ',
  },
  {
    question: '余所',
    answer: 'yoso',
    explantion: '\n      汉字: 余所\n      读音: よそ\n      意思: another place\n      来源: somewhere else\n      同义词: 余所, , 他所, 外\n    ',
  },
  {
    question: '蘇る',
    answer: 'yomigaeru',
    explantion: '\n      汉字: 蘇る\n      读音: よみがえる\n      意思: to be resurrected\n      来源: to be revived\n      同义词: 蘇る, 甦る, 蘇える, 甦える\n    ',
  },
  {
    question: '慶び',
    answer: 'yorokobi',
    explantion: '\n      汉字: 慶び\n      读音: よろこび\n      意思: (n) (a) joy\n      来源: (a) delight\n      同义词: 慶び\n    ',
  },
  {
    question: '分る',
    answer: 'wakaru',
    explantion: '\n      汉字: 分る\n      读音: わかる\n      意思: to be understood\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '分かれる',
    answer: 'wakareru',
    explantion: '\n      汉字: 分かれる\n      读音: わかれる\n      意思: to branch off\n      来源: to diverge from\n      同义词: 分かれる, 分れる\n    ',
  },
  {
    question: '若々しい',
    answer: 'wakawakashii',
    explantion: '\n      汉字: 若々しい\n      读音: わかわかしい\n      意思: youthful\n      来源: young\n      同义词: 若々しい, 若若しい\n    ',
  },
  {
    question: '湧く',
    answer: 'waku',
    explantion: '\n      汉字: 湧く\n      读音: わく\n      意思: to boil\n      来源: to grow hot\n      同义词: 湧く, 涌く\n    ',
  },
  {
    question: '詫びる',
    answer: 'wabiru',
    explantion: '\n      汉字: 詫びる\n      读音: わびる\n      意思: to apologize\n      来源: waller\n      同义词: 詫る\n    ',
  },
  {
    question: '割算',
    answer: 'warizan',
    explantion: '\n      汉字: 割算\n      读音: わりざん\n      意思: division (math)\n      来源: waller\n      同义词: 割り算, わり算\n    ',
  },
  {
    question: '割引',
    answer: 'waribiki',
    explantion: '\n      汉字: 割引\n      读音: わりびき\n      意思: discount\n      来源: reduction\n      同义词: 割引, 割引き, 割り引き, 割り引\n    ',
  },
  {
    question: '追い掛ける',
    answer: 'oikakeru',
    explantion: '\n      汉字: 追い掛ける\n      读音: おいかける\n      意思: to chase or run after someone\n      来源: to run down\n      同义词: 追い掛ける, 追いかける, 追い駆ける, 追掛ける\n    ',
  },
  {
    question: '扇ぐ',
    answer: 'aogu',
    explantion: '\n      汉字: 扇ぐ\n      读音: あおぐ\n      意思: to fan\n      来源: to flap\n      同义词: 扇ぐ, 煽ぐ\n    ',
  },
  {
    question: '明き',
    answer: 'akaki',
    explantion: '\n      汉字: 明き\n      读音: あき\n      意思: room\n      来源: time to spare\n      同义词: 明き\n    ',
  },
  {
    question: '生き生き',
    answer: 'ikiiki',
    explantion: '\n      汉字: 生き生き\n      读音: いきいき\n      意思: vividly\n      来源: lively\n      同义词: 生き生き, 活き活き\n    ',
  },
  {
    question: '嫌がる',
    answer: 'iyagaru',
    explantion: '\n      汉字: 嫌がる\n      读音: いやがる\n      意思: to hate\n      来源: to dislike\n      同义词: 嫌がる, 厭がる\n    ',
  },
  {
    question: '打ち消す',
    answer: 'uchikesu',
    explantion: '\n      汉字: 打ち消す\n      读音: うちけす\n      意思: to deny\n      来源: to negate\n      同义词: 打ち消す, 打消す\n    ',
  },
  {
    question: '応ずる',
    answer: 'ōzuru',
    explantion: '\n      汉字: 応ずる\n      读音: おうずる\n      意思: to answer\n      来源: to respond\n      同义词: 応ずる\n    ',
  },
  {
    question: '欧米',
    answer: 'ōbei',
    explantion: '\n      汉字: 欧米\n      读音: おうべい\n      意思: Europe and America\n      来源: the West\n      同义词: 欧米\n    ',
  },
  {
    question: '貸間',
    answer: 'kashima',
    explantion: '\n      汉字: 貸間\n      读音: かしま\n      意思: room to let\n      来源: waller\n      同义词: 貸し間\n    ',
  },
  {
    question: '紙屑',
    answer: 'kamikuzu',
    explantion: '\n      汉字: 紙屑\n      读音: かみくず\n      意思: wastepaper\n      来源: waller\n      同义词: 紙くず\n    ',
  },
  {
    question: '感ずる',
    answer: 'kanzuru',
    explantion: '\n      汉字: 感ずる\n      读音: かんずる\n      意思: to feel\n      来源: to sense\n      同义词: 感ずる\n    ',
  },
  {
    question: '潜る',
    answer: 'moguru',
    explantion: '\n      汉字: 潜る\n      读音: もぐる\n      意思: (1) to drive\n      来源: to pass through\n      同义词: 潜る, 潜る\n    ',
  },
  {
    question: '咥える',
    answer: '咥eru',
    explantion: '\n      汉字: 咥える\n      读音: くわえる\n      意思: \n      来源: waller\n      同义词: , 銜える, 啣える\n    ',
  },
  {
    question: '注す',
    answer: 'sasu',
    explantion: '\n      汉字: 注す\n      读音: さす\n      意思: to pour (drink)\n      来源: to serve (drinks)\n      同义词: 注す, 点す\n    ',
  },
  {
    question: '塩辛い',
    answer: 'shiokarai',
    explantion: '\n      汉字: 塩辛い\n      读音: しおからい\n      意思: salty (taste)\n      来源: waller\n      同义词: 鹹い, 鹹い\n    ',
  },
  {
    question: '水産',
    answer: 'suisan',
    explantion: '\n      汉字: 水産\n      读音: すいさん\n      意思: marine products\n      来源: fisheries\n      同义词: 水産\n    ',
  },
  {
    question: '点ける',
    answer: 'tenkeru',
    explantion: '\n      汉字: 点ける\n      读音: つける\n      意思: to turn on\n      来源: to switch on\n      同义词: 点ける, \n    ',
  },
  {
    question: '思い掛けない',
    answer: 'omoikakenai',
    explantion: '\n      汉字: 思い掛けない\n      读音: おもいがけない\n      意思: unexpected\n      来源: casual\n      同义词: 思い掛けない, 思いがけない, 思い掛け無い\n    ',
  },
  {
    question: '長引く',
    answer: 'nagabiku',
    explantion: '\n      汉字: 長引く\n      读音: ながびく\n      意思: to be prolonged\n      来源: to drag on\n      同义词: 長引く, 長びく\n    ',
  },
  {
    question: '生る',
    answer: 'naru',
    explantion: '\n      汉字: 生る\n      读音: なる\n      意思: to bear fruit\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '捩る',
    answer: 'sujiru',
    explantion: '\n      汉字: 捩る\n      读音: ねじる\n      意思: to twist\n      来源: waller\n      同义词: , , 捩る, , 捩る, 捻る, 拗る, 捩じる, 捻じる, 拗じる\n    ',
  },
  {
    question: '残らず',
    answer: 'nokorazu',
    explantion: '\n      汉字: 残らず\n      读音: のこらず\n      意思: all\n      来源: entirely\n      同义词: 残らず\n    ',
  },
  {
    question: '日日',
    answer: 'hibi',
    explantion: '\n      汉字: 日日\n      读音: ひにち\n      意思: every day\n      来源: daily\n      同义词: 日日, 日にち\n    ',
  },
  {
    question: '麓',
    answer: 'fumoto',
    explantion: '\n      汉字: 麓\n      读音: ふもと\n      意思: the foot\n      来源: the bottom\n      同义词: 麓, , 梺\n    ',
  },
  {
    question: '纏まる',
    answer: 'matomaru',
    explantion: '\n      汉字: 纏まる\n      读音: まとまる\n      意思: to be collected\n      来源: to be settled\n      同义词: 纏まる, \n    ',
  },
  {
    question: '岬',
    answer: 'misaki',
    explantion: '\n      汉字: 岬\n      读音: みさき\n      意思: cape (on coast)\n      来源: waller\n      同义词: 崎\n    ',
  },
  {
    question: '道順',
    answer: 'michijun',
    explantion: '\n      汉字: 道順\n      读音: みちじゅん\n      意思: itinerary\n      来源: route\n      同义词: 道順\n    ',
  },
  {
    question: '恵まれる',
    answer: 'megumareru',
    explantion: '\n      汉字: 恵まれる\n      读音: めぐまれる\n      意思: to be blessed with\n      来源: to be rich in\n      同义词: 恵まれる\n    ',
  },
  {
    question: '申し訳ない',
    answer: 'mōshiwakenai',
    explantion: '\n      汉字: 申し訳ない\n      读音: もうしわけない\n      意思: inexcusable\n      来源: waller\n      同义词: 申し訳無い, 申しわけない\n    ',
  },
  {
    question: '湯飲み',
    answer: 'yunomi',
    explantion: '\n      汉字: 湯飲み\n      读音: ゆのみ\n      意思: teacup\n      来源: waller\n      同义词: 湯のみ, 湯呑み, 湯呑, 湯飲\n    ',
  },
  {
    question: '塵紙',
    answer: 'chirigami',
    explantion: '\n      汉字: 塵紙\n      读音: ちりがみ\n      意思: tissue paper\n      来源: toilet paper\n      同义词: 塵紙, ちり紙, ちり紙, チリ紙, 塵紙\n    ',
  },
  {
    question: 'お帰り',
    answer: 'okaeri',
    explantion: '\n      汉字: お帰り\n      读音: おかえり\n      意思: return\n      来源: welcome\n      同义词: お帰り, 御帰り\n    ',
  },
  {
    question: 'お代わり',
    answer: 'okawari',
    explantion: '\n      汉字: お代わり\n      读音: おかわり\n      意思: second helping\n      来源: another cup\n      同义词: お代わり, , お替り, お替わり, 御代わり, お代り, 御代り\n    ',
  },
  {
    question: '地下水',
    answer: 'chikasui',
    explantion: '\n      汉字: 地下水\n      读音: ちかすい\n      意思: underground water\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '傾らか',
    answer: '傾raka',
    explantion: '\n      汉字: 傾らか\n      读音: なだらか\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '養分',
    answer: 'yōbun',
    explantion: '\n      汉字: 養分\n      读音: ようぶん\n      意思: nourishment\n      来源: nutrient\n      同义词: 養分\n    ',
  },
  {
    question: '無沙汰',
    answer: 'musata',
    explantion: '\n      汉字: 無沙汰\n      读音: ぶさた\n      意思: neglecting to stay in contact\n      来源: waller\n      同义词: 不沙汰\n    ',
  },
  {
    question: '御手洗',
    answer: 'mitarashi',
    explantion: '\n      汉字: 御手洗\n      读音: みたらし\n      意思: font of purifying water placed at entrance of shrine\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '転々',
    answer: 'tenten',
    explantion: '\n      汉字: 転々\n      读音: てんてん\n      意思: \n      来源: waller\n      同义词: 転転\n    ',
  },
  {
    question: '洋品店',
    answer: 'yōhinten',
    explantion: '\n      汉字: 洋品店\n      读音: ようひんてん\n      意思: shop which handles Western-style apparel and accessories\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '先々週',
    answer: 'sakizakishū',
    explantion: '\n      汉字: 先々週\n      读音: せんせんしゅう\n      意思: \n      来源: waller\n      同义词: 先先週\n    ',
  },
  {
    question: '店屋',
    answer: 'miseya',
    explantion: '\n      汉字: 店屋\n      读音: みせや\n      意思: store\n      来源: shop\n      同义词: 店屋\n    ',
  },
  {
    question: '栓',
    answer: 'sen',
    explantion: '\n      汉字: 栓\n      读音: せん\n      意思: stopper\n      来源: cork\n      同义词: 栓\n    ',
  },
  {
    question: '割と',
    answer: 'warito',
    explantion: '\n      汉字: 割と\n      读音: わりと\n      意思: relatively\n      来源:  comparitively\n      同义词: 割と, 割りと\n    ',
  },
  {
    question: '存ずる',
    answer: 'zonzuru',
    explantion: '\n      汉字: 存ずる\n      读音: ぞんずる\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '茶色い',
    answer: 'chairoi',
    explantion: '\n      汉字: 茶色い\n      读音: ちゃいろい\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '通ずる',
    answer: 'tsūzuru',
    explantion: '\n      汉字: 通ずる\n      读音: つうずる\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '破く',
    answer: 'yabuku',
    explantion: '\n      汉字: 破く\n      读音: やぶく\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '斜',
    answer: 'hasu',
    explantion: '\n      汉字: 斜\n      读音: はす\n      意思: \n      来源: waller\n      同义词: 斜\n    ',
  },
  {
    question: 'ｘ',
    answer: 'ｘ',
    explantion: '\n      汉字: ｘ\n      读音: バツ\n      意思: \n      来源: waller\n      同义词: , ｘ, \n    ',
  },
  {
    question: '伯父さん',
    answer: 'ojisan',
    explantion: '\n      汉字: 伯父さん\n      读音: おじさん\n      意思: middle-aged gentleman\n      来源: uncle\n      同义词: 伯父さん, 小父さん, 叔父さん\n    ',
  },
  {
    question: '叔母さん',
    answer: 'obasan',
    explantion: '\n      汉字: 叔母さん\n      读音: おばさん\n      意思: (1) aunt\n      来源: (2) middle-aged lady\n      同义词: 叔母さん\n    ',
  },
  {
    question: '蒔く',
    answer: 'maku',
    explantion: '\n      汉字: 蒔く\n      读音: まく\n      意思: to sow (seeds)\n      来源: waller\n      同义词: 播く\n    ',
  },
  {
    question: '載る',
    answer: 'noru',
    explantion: '\n      汉字: 載る\n      读音: のる\n      意思: to appear (in print)\n      来源: to be recorded\n      同义词: 載る\n    ',
  },
  {
    question: '留まる',
    answer: 'tomaru',
    explantion: '\n      汉字: 留まる\n      读音: とどまる\n      意思: (1) to be fixed\n      来源: (2) to abide\n      同义词: 留まる, , 止まる, 停まる, 駐まる\n    ',
  },
  {
    question: '各々',
    answer: 'kaku々',
    explantion: '\n      汉字: 各々\n      读音: おのおの\n      意思: each\n      来源: every\n      同义词: 各々, 各各, 各\n    ',
  },
  {
    question: '亡くす',
    answer: 'nakusu',
    explantion: '\n      汉字: 亡くす\n      读音: なくす\n      意思: to lose someone\n      来源:  wife\n      同义词: 亡くす\n    ',
  },
  {
    question: '鈍い',
    answer: 'nibui',
    explantion: '\n      汉字: 鈍い\n      读音: のろい\n      意思: dull (e.g. a knife)\n      来源: thickheaded\n      同义词: 鈍い, \n    ',
  },
  {
    question: '住居',
    answer: 'jūkyo',
    explantion: '\n      汉字: 住居\n      读音: じゅうきょ\n      意思: dwelling\n      来源: house\n      同义词: 住居\n    ',
  },
  {
    question: '元気でね',
    answer: 'genkidene',
    explantion: '\n      汉字: 元気でね\n      读音: げんきでね\n      意思: \n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '退ける',
    answer: 'shirizokeru',
    explantion: '\n      汉字: 退ける\n      读音: どける\n      意思: to remove\n      来源: to take away\n      同义词: 退ける\n    ',
  },
]

const chunkSize = 100

export default (() => {
  const dbList = chunk(n2, chunkSize)
  const questionMap: { [key: string]: QuestionList } = {}

  dbList.map((list, index) => {
    const data = {
      title: `N2-${index + 1}-${list.length}`,
      name: `N2-${index + 1}-${list.length}`,
      data: list,
    }
    return data
  })
    .forEach((data) => {
      questionMap[data.name] = data
    })
  return questionMap
})()
