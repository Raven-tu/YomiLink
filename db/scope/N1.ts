import chunk from 'lodash-es/chunk'
import type { QuestionList } from '~/types'

const n1 = [
  {
    question: '明白',
    answer: 'akarasama',
    explantion: '\n      汉字: 明白\n      读音: あからさま\n      意思: obvious\n      来源:  overt\n      同义词: 明白, , 偸閑, 白地\n    ',
  },
  {
    question: '悪どい',
    answer: 'akudoi',
    explantion: '\n      汉字: 悪どい\n      读音: あくどい\n      意思: 1. gaudy\n      来源:  showy\n      同义词: 悪どい, \n    ',
  },
  {
    question: '彼処',
    answer: 'asoko',
    explantion: '\n      汉字: 彼処\n      读音: あそこ\n      意思: 1. (uk) there\n      来源:  over there\n      同义词: 彼処\n    ',
  },
  {
    question: '彼の',
    answer: 'ano',
    explantion: '\n      汉字: 彼の\n      读音: あの\n      意思: that over there\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '如何にも',
    answer: 'ikanimo',
    explantion: '\n      汉字: 如何にも\n      读音: いかにも\n      意思: indeed\n      来源:  really\n      同义词: 如何にも, \n    ',
  },
  {
    question: '嫌に',
    answer: 'iyani',
    explantion: '\n      汉字: 嫌に\n      读音: いやに\n      意思: awfully\n      来源:  terribly\n      同义词: 嫌に, , 厭に\n    ',
  },
  {
    question: '鱝',
    answer: 'ei',
    explantion: '\n      汉字: 鱝\n      读音: えい\n      意思: ray (fish)\n      来源: waller\n      同义词: , 鱏, 海鷂魚, \n    ',
  },
  {
    question: 'お出でになる',
    answer: 'oideninaru',
    explantion: '\n      汉字: お出でになる\n      读音: おいでになる\n      意思: to be\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お蔭',
    answer: 'okage',
    explantion: '\n      汉字: お蔭\n      读音: おかげ\n      意思: (your) backing\n      来源:  assistance\n      同义词: お蔭\n    ',
  },
  {
    question: 'お願いします',
    answer: 'onegaishimasu',
    explantion: '\n      汉字: お願いします\n      读音: おねがいします\n      意思: please\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お宮',
    answer: 'omiya',
    explantion: '\n      汉字: お宮\n      读音: おみや\n      意思: Shinto shrine\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お供',
    answer: 'otomo',
    explantion: '\n      汉字: お供\n      读音: おとも\n      意思: attendant\n      来源:  companion\n      同义词: お供, 御供, お伴, 御伴\n    ',
  },
  {
    question: 'お産',
    answer: 'osan',
    explantion: '\n      汉字: お産\n      读音: おさん\n      意思: (giving) birth\n      来源: waller\n      同义词: 御産\n    ',
  },
  {
    question: 'お使い',
    answer: 'otsukai',
    explantion: '\n      汉字: お使い\n      读音: おつかい\n      意思: errand\n      来源: waller\n      同义词: 御使い, お遣い, 御遣い, お使, 御使\n    ',
  },
  {
    question: 'お邪魔します',
    answer: 'ojamashimasu',
    explantion: '\n      汉字: お邪魔します\n      读音: おじゃまします\n      意思: Excuse me for disturbing (interrupting) you\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お手上げ',
    answer: 'oteage',
    explantion: '\n      汉字: お手上げ\n      读音: おてあげ\n      意思: all over\n      来源:  given in\n      同义词: お手上げ, お手あげ, 御手上げ\n    ',
  },
  {
    question: '御手洗い',
    answer: 'otearai',
    explantion: '\n      汉字: 御手洗い\n      读音: おてあらい\n      意思: toilet\n      来源:  restroom\n      同义词: 御手洗い\n    ',
  },
  {
    question: 'お巡りさん',
    answer: 'omawarisan',
    explantion: '\n      汉字: お巡りさん\n      读音: おまわりさん\n      意思: policeman (friendly term)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お世辞',
    answer: 'oseji',
    explantion: '\n      汉字: お世辞\n      读音: おせじ\n      意思: flattery\n      来源:  compliment\n      同义词: お世辞, お世辞, 御世辞, 御世辞\n    ',
  },
  {
    question: 'お先に',
    answer: 'osakini',
    explantion: '\n      汉字: お先に\n      读音: おさきに\n      意思: before\n      来源:  ahead\n      同义词: お先に\n    ',
  },
  {
    question: 'お祖父さん',
    answer: 'ojisan',
    explantion: '\n      汉字: お祖父さん\n      读音: おじいさん\n      意思: grandfather\n      来源:  male senior-citizen\n      同义词: お祖父さん\n    ',
  },
  {
    question: 'お祖母さん',
    answer: 'obasan',
    explantion: '\n      汉字: お祖母さん\n      读音: おばあさん\n      意思: grandmother\n      来源:  female senior-citizen\n      同义词: お祖母さん\n    ',
  },
  {
    question: 'お大事に',
    answer: 'odaijini',
    explantion: '\n      汉字: お大事に\n      读音: おだいじに\n      意思: Take care of yourself\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'お喋り',
    answer: 'oshaberi',
    explantion: '\n      汉字: お喋り\n      读音: おしゃべり\n      意思: chattering\n      来源:  talk\n      同义词: お喋り\n    ',
  },
  {
    question: 'お洒落',
    answer: 'oshare',
    explantion: '\n      汉字: お洒落\n      读音: おしゃれ\n      意思: smartly dressed\n      来源:  someone smartly dressed\n      同义词: お洒落\n    ',
  },
  {
    question: '畏まりました',
    answer: 'kashikomarimashita',
    explantion: '\n      汉字: 畏まりました\n      读音: かしこまりました\n      意思: certainly!\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'かも知れない',
    answer: 'kamoshirenai',
    explantion: '\n      汉字: かも知れない\n      读音: かもしれない\n      意思: may\n      来源:  might\n      同义词: かも知れない\n    ',
  },
  {
    question: '屹度',
    answer: 'kitto',
    explantion: '\n      汉字: 屹度\n      读音: きっと\n      意思: 1. (uk) surely\n      来源:  undoubtedly\n      同义词: 屹度\n    ',
  },
  {
    question: '嚏',
    answer: 'kushami',
    explantion: '\n      汉字: 嚏\n      读音: くしゃみ\n      意思: sneeze\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '擽ぐったい',
    answer: 'kusuguttai',
    explantion: '\n      汉字: 擽ぐったい\n      读音: くすぐったい\n      意思: ticklish\n      来源: waller\n      同义词: , 擽ったい\n    ',
  },
  {
    question: '草臥れる',
    answer: 'kutabireru',
    explantion: '\n      汉字: 草臥れる\n      读音: くたびれる\n      意思: to get tired\n      来源:  to wear out\n      同义词: 草臥れる\n    ',
  },
  {
    question: 'くっ付く',
    answer: 'kuttsuku',
    explantion: '\n      汉字: くっ付く\n      读音: くっつく\n      意思: to adhere to\n      来源:  to keep close to\n      同义词: くっ付く\n    ',
  },
  {
    question: 'くっ付ける',
    answer: 'kuttsukeru',
    explantion: '\n      汉字: くっ付ける\n      读音: くっつける\n      意思: to attach\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '拘る',
    answer: 'kodawaru',
    explantion: '\n      汉字: 拘る\n      读音: こだわる\n      意思: to fuss over\n      来源:  to be particular about\n      同义词: 拘る, , 拘わる\n    ',
  },
  {
    question: '悉く',
    answer: 'kotogotoku',
    explantion: '\n      汉字: 悉く\n      读音: ことごとく\n      意思: altogether\n      来源:  entirely\n      同义词: 悉く, , 尽く\n    ',
  },
  {
    question: 'この間',
    answer: 'konoaida',
    explantion: '\n      汉字: この間\n      读音: このあいだ\n      意思: the other day\n      来源:  lately\n      同义词: この間\n    ',
  },
  {
    question: 'この頃',
    answer: 'konogoro',
    explantion: '\n      汉字: この頃\n      读音: このごろ\n      意思: recently\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '此れ等',
    answer: 'korera',
    explantion: '\n      汉字: 此れ等\n      读音: これら\n      意思: these\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'ご苦労様',
    answer: 'gokurosama',
    explantion: '\n      汉字: ご苦労様\n      读音: ごくろうさま\n      意思: Thank you very much for your....\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '颯っと',
    answer: 'satto',
    explantion: '\n      汉字: 颯っと\n      读音: さっと\n      意思: quickly\n      来源:  suddenly\n      同义词: 颯っと, , 颯と\n    ',
  },
  {
    question: '頻りに',
    answer: 'shikirini',
    explantion: '\n      汉字: 頻りに\n      读音: しきりに\n      意思: frequently\n      来源:  repeatedly\n      同义词: 頻りに\n    ',
  },
  {
    question: '屡',
    answer: 'shibashiba',
    explantion: '\n      汉字: 屡\n      读音: しばしば\n      意思: often\n      来源:  again and again\n      同义词: 屡, , 屡々, 屡屡, 数数, 数々, 数\n    ',
  },
  {
    question: '泌み泌み',
    answer: 'shimijimi',
    explantion: '\n      汉字: 泌み泌み\n      读音: しみじみ\n      意思: keenly\n      来源:  deeply\n      同义词: 泌み泌み\n    ',
  },
  {
    question: '吃逆',
    answer: 'shakkuri',
    explantion: '\n      汉字: 吃逆\n      读音: しゃっくり\n      意思: hiccough\n      来源:  hiccup\n      同义词: 吃逆\n    ',
  },
  {
    question: 'じゃん拳',
    answer: 'janken',
    explantion: '\n      汉字: じゃん拳\n      读音: じゃんけん\n      意思: rock-scissors-paper game\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'ずぶ濡れ',
    answer: 'zubunure',
    explantion: '\n      汉字: ずぶ濡れ\n      读音: ずぶぬれ\n      意思: soaked\n      来源:  dripping wet\n      同义词: ずぶ濡れ\n    ',
  },
  {
    question: '其処ら',
    answer: 'sokora',
    explantion: '\n      汉字: 其処ら\n      读音: そこら\n      意思: everywhere\n      来源:  somewhere\n      同义词: 其処ら, \n    ',
  },
  {
    question: '然して',
    answer: 'soshite',
    explantion: '\n      汉字: 然して\n      读音: そして\n      意思: and\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '其方',
    answer: 'sochira',
    explantion: '\n      汉字: 其方\n      读音: そちら\n      意思: over there\n      来源:  the other\n      同义词: 其方\n    ',
  },
  {
    question: 'その為',
    answer: 'sonotame',
    explantion: '\n      汉字: その為\n      读音: そのため\n      意思: hence\n      来源:  for that reason\n      同义词: その為\n    ',
  },
  {
    question: 'その上',
    answer: 'sonoue',
    explantion: '\n      汉字: その上\n      读音: そのうえ\n      意思: in addition\n      来源:  furthermore\n      同义词: その上\n    ',
  },
  {
    question: 'その外',
    answer: 'sonohoka',
    explantion: '\n      汉字: その外\n      读音: そのほか\n      意思: besides\n      来源:  in addition\n      同义词: その外\n    ',
  },
  {
    question: 'その内',
    answer: 'sonouchi',
    explantion: '\n      汉字: その内\n      读音: そのうち\n      意思: eventually\n      来源:  sooner or later\n      同义词: その内\n    ',
  },
  {
    question: '其れ',
    answer: 'sore',
    explantion: '\n      汉字: 其れ\n      读音: それ\n      意思: it\n      来源:  that\n      同义词: 其れ, , 其\n    ',
  },
  {
    question: '其れから',
    answer: 'sorekara',
    explantion: '\n      汉字: 其れから\n      读音: それから\n      意思: and then\n      来源:  after that\n      同义词: 其れから\n    ',
  },
  {
    question: '其れで',
    answer: 'sorede',
    explantion: '\n      汉字: 其れで\n      读音: それで\n      意思: and (conj)\n      来源:  thereupon\n      同义词: 其れで\n    ',
  },
  {
    question: '其れ共',
    answer: 'soretomo',
    explantion: '\n      汉字: 其れ共\n      读音: それとも\n      意思: or\n      来源:  or else\n      同义词: 其れ共\n    ',
  },
  {
    question: '其れに',
    answer: 'soreni',
    explantion: '\n      汉字: 其れに\n      读音: それに\n      意思: besides\n      来源:  moreover\n      同义词: 其れに\n    ',
  },
  {
    question: '其れ程',
    answer: 'sorehodo',
    explantion: '\n      汉字: 其れ程\n      读音: それほど\n      意思: to that degree\n      来源:  extent\n      同义词: 其れ程\n    ',
  },
  {
    question: '丈',
    answer: 'dake',
    explantion: '\n      汉字: 丈\n      读音: だけ\n      意思: only\n      来源:  just\n      同义词: 丈, \n    ',
  },
  {
    question: '怠い',
    answer: 'darui',
    explantion: '\n      汉字: 怠い\n      读音: だるい\n      意思: sluggish\n      来源:  feel heavy\n      同义词: 怠い, , , 怠い, 懈い, 懈い, \n    ',
  },
  {
    question: '些とも',
    answer: 'chittomo',
    explantion: '\n      汉字: 些とも\n      读音: ちっとも\n      意思: not at all (neg. verb)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '詰らない',
    answer: 'tsumaranai',
    explantion: '\n      汉字: 詰らない\n      读音: つまらない\n      意思: insignificant\n      来源:  boring\n      同义词: 詰らない\n    ',
  },
  {
    question: '所が',
    answer: 'tokoroga',
    explantion: '\n      汉字: 所が\n      读音: ところが\n      意思: however\n      来源:  while\n      同义词: 所が\n    ',
  },
  {
    question: '迚も',
    answer: 'totemo',
    explantion: '\n      汉字: 迚も\n      读音: とても\n      意思: very\n      来源:  awfully\n      同义词: 迚も\n    ',
  },
  {
    question: 'どうぞ宜しく',
    answer: 'dozoyoroshiku',
    explantion: '\n      汉字: どうぞ宜しく\n      读音: どうぞよろしく\n      意思: pleased to meet you\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '何れ',
    answer: 'dore',
    explantion: '\n      汉字: 何れ\n      读音: どれ\n      意思: well\n      来源:  now\n      同义词: 何れ\n    ',
  },
  {
    question: '何故なら',
    answer: 'nazenara',
    explantion: '\n      汉字: 何故なら\n      读音: なぜなら\n      意思: because\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'ねじ回し',
    answer: 'nejimawashi',
    explantion: '\n      汉字: ねじ回し\n      读音: ねじまわし\n      意思: screwdriver\n      来源: waller\n      同义词: ネジ回し, 螺子回し\n    ',
  },
  {
    question: '延いては',
    answer: 'hitewa',
    explantion: '\n      汉字: 延いては\n      读音: ひいては\n      意思: not only...but also\n      来源:  in addition to\n      同义词: 延いては, \n    ',
  },
  {
    question: '一向',
    answer: 'hitasura',
    explantion: '\n      汉字: 一向\n      读音: ひたすら\n      意思: earnestly\n      来源: waller\n      同义词: , 只管, 頓\n    ',
  },
  {
    question: 'ぶら下げる',
    answer: 'burasageru',
    explantion: '\n      汉字: ぶら下げる\n      读音: ぶらさげる\n      意思: to hang\n      来源:  to suspend\n      同义词: ぶら下げる\n    ',
  },
  {
    question: '本の',
    answer: 'honno',
    explantion: '\n      汉字: 本の\n      读音: ほんの\n      意思: mere\n      来源:  only\n      同义词: 本の, \n    ',
  },
  {
    question: '間誤付く',
    answer: 'magotsuku',
    explantion: '\n      汉字: 間誤付く\n      读音: まごつく\n      意思: to be confused\n      来源:  to be flustered\n      同义词: 間誤付く, \n    ',
  },
  {
    question: '忠実',
    answer: 'chiyuujitsu',
    explantion: '\n      汉字: 忠実\n      读音: ちゅうじつ\n      意思: fidelity\n      来源:  faithfulness\n      同义词: 忠実\n    ',
  },
  {
    question: '藻掻く',
    answer: 'mogaku',
    explantion: '\n      汉字: 藻掻く\n      读音: もがく\n      意思: to struggle\n      来源:  to wriggle\n      同义词: 藻掻く, , 踠く, 藻搔く\n    ',
  },
  {
    question: '若し',
    answer: 'moshi',
    explantion: '\n      汉字: 若し\n      读音: もし\n      意思: if\n      来源:  in case\n      同义词: 若し, \n    ',
  },
  {
    question: '若しかしたら',
    answer: 'moshikashitara',
    explantion: '\n      汉字: 若しかしたら\n      读音: もしかしたら\n      意思: perhaps\n      来源:  maybe\n      同义词: 若しかしたら\n    ',
  },
  {
    question: '若しかして',
    answer: 'moshikashite',
    explantion: '\n      汉字: 若しかして\n      读音: もしかして\n      意思: perhaps\n      来源:  possibly\n      同义词: 若しかして, \n    ',
  },
  {
    question: '若しかすると',
    answer: 'moshikasuruto',
    explantion: '\n      汉字: 若しかすると\n      读音: もしかすると\n      意思: perhaps\n      来源:  maybe\n      同义词: 若しかすると\n    ',
  },
  {
    question: '諸に',
    answer: 'moroni',
    explantion: '\n      汉字: 諸に\n      读音: もろに\n      意思: completely\n      来源:  all the way\n      同义词: 諸に, \n    ',
  },
  {
    question: '軈て',
    answer: 'yagate',
    explantion: '\n      汉字: 軈て\n      读音: やがて\n      意思: before long\n      来源:  soon\n      同义词: 軈て\n    ',
  },
  {
    question: '矢っ張り',
    answer: 'yappari',
    explantion: '\n      汉字: 矢っ張り\n      读音: やっぱり\n      意思: also\n      来源:  as I thought\n      同义词: 矢っ張り\n    ',
  },
  {
    question: '寄こす',
    answer: 'yokosu',
    explantion: '\n      汉字: 寄こす\n      读音: よこす\n      意思: to send\n      来源:  to forward\n      同义词: 寄こす\n    ',
  },
  {
    question: '亜爾加里',
    answer: 'arukari',
    explantion: '\n      汉字: 亜爾加里\n      读音: アルカリ\n      意思: alkali\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'ＯＫ',
    answer: 'oke',
    explantion: '\n      汉字: ＯＫ\n      读音: オーケー\n      意思: OK\n      来源: waller\n      同义词: ＯＫ\n    ',
  },
  {
    question: 'Ｇパン',
    answer: 'jipan',
    explantion: '\n      汉字: Ｇパン\n      读音: ジーパン\n      意思: jeans (lit: jeans pants)\n      来源:  dungarees\n      同义词: Ｇパン, \n    ',
  },
  {
    question: '打',
    answer: 'dasu',
    explantion: '\n      汉字: 打\n      读音: ダース\n      意思: dozen\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '発条',
    answer: 'bane',
    explantion: '\n      汉字: 発条\n      读音: ばね\n      意思: spring (e.g. coil leaf)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'ローマ字',
    answer: 'romaji',
    explantion: '\n      汉字: ローマ字\n      读音: ローマじ\n      意思: romanization\n      来源:  Roman letters\n      同义词: ローマ字\n    ',
  },
  {
    question: '亜科',
    answer: 'aka',
    explantion: '\n      汉字: 亜科\n      读音: あか\n      意思: suborder\n      来源:  subfamily\n      同义词: 亜科\n    ',
  },
  {
    question: '悪',
    answer: 'aku',
    explantion: '\n      汉字: 悪\n      读音: あく\n      意思: evil\n      来源:  wickedness\n      同义词: 悪, 惡\n    ',
  },
  {
    question: '悪化',
    answer: 'akka',
    explantion: '\n      汉字: 悪化\n      读音: あっか\n      意思: deterioration\n      来源:  growing worse\n      同义词: 悪化, あっ化\n    ',
  },
  {
    question: '悪者',
    answer: 'warumono',
    explantion: '\n      汉字: 悪者\n      读音: わるもの\n      意思: bad fellow\n      来源:  rascal\n      同义词: 悪者\n    ',
  },
  {
    question: '葦',
    answer: 'yoshi',
    explantion: '\n      汉字: 葦\n      读音: よし\n      意思: reed\n      来源:  bulrush\n      同义词: 葦, , 葦, , 蘆, 蘆, 葭, 葭, 芦, 芦, , \n    ',
  },
  {
    question: '圧迫',
    answer: 'appaku',
    explantion: '\n      汉字: 圧迫\n      读音: あっぱく\n      意思: pressure\n      来源:  coercion\n      同义词: 圧迫\n    ',
  },
  {
    question: '圧力',
    answer: 'atsuriyoku',
    explantion: '\n      汉字: 圧力\n      读音: あつりょく\n      意思: stress\n      来源:  pressure\n      同义词: 圧力\n    ',
  },
  {
    question: '扱い',
    answer: 'atsukai',
    explantion: '\n      汉字: 扱い\n      读音: あつかい\n      意思: treatment\n      来源:  service\n      同义词: 扱い\n    ',
  },
  {
    question: '宛てる',
    answer: 'ateru',
    explantion: '\n      汉字: 宛てる\n      读音: あてる\n      意思: to address\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '安っぽい',
    answer: 'yasuppoi',
    explantion: '\n      汉字: 安っぽい\n      读音: やすっぽい\n      意思: cheap-looking\n      来源:  tawdry\n      同义词: 安っぽい\n    ',
  },
  {
    question: '安静',
    answer: 'ansei',
    explantion: '\n      汉字: 安静\n      读音: あんせい\n      意思: rest\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '暗殺',
    answer: 'ansatsu',
    explantion: '\n      汉字: 暗殺\n      读音: あんさつ\n      意思: assassination\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '暗算',
    answer: 'anzan',
    explantion: '\n      汉字: 暗算\n      读音: あんざん\n      意思: mental arithmetic\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '暗示',
    answer: 'anji',
    explantion: '\n      汉字: 暗示\n      读音: あんじ\n      意思: hint\n      来源:  suggestion\n      同义词: 暗示\n    ',
  },
  {
    question: '案じる',
    answer: 'anjiru',
    explantion: '\n      汉字: 案じる\n      读音: あんじる\n      意思: to be anxious\n      来源:  to ponder\n      同义词: 案じる, 按じる\n    ',
  },
  {
    question: '案の定',
    answer: 'annojo',
    explantion: '\n      汉字: 案の定\n      读音: あんのじょう\n      意思: sure enough\n      来源:  as usual\n      同义词: 案の定, 案の条, 案の上\n    ',
  },
  {
    question: '闇',
    answer: 'yami',
    explantion: '\n      汉字: 闇\n      读音: やみ\n      意思: darkness\n      来源:  the dark\n      同义词: 闇\n    ',
  },
  {
    question: '以て',
    answer: 'motsute',
    explantion: '\n      汉字: 以て\n      读音: もって\n      意思: with\n      来源:  by\n      同义词: 以て, , 以って\n    ',
  },
  {
    question: '依然',
    answer: 'izen',
    explantion: '\n      汉字: 依然\n      读音: いぜん\n      意思: still\n      来源:  as yet\n      同义词: 依然\n    ',
  },
  {
    question: '委託',
    answer: 'itaku',
    explantion: '\n      汉字: 委託\n      读音: いたく\n      意思: consign (goods (for sale) to a firm)\n      来源:  entrust (person with something)\n      同义词: 委託, 委托\n    ',
  },
  {
    question: '尉',
    answer: 'jiyou',
    explantion: '\n      汉字: 尉\n      读音: じょう\n      意思: jailer\n      来源:  old man\n      同义词: 尉\n    ',
  },
  {
    question: '意気込む',
    answer: 'ikigomu',
    explantion: '\n      汉字: 意気込む\n      读音: いきごむ\n      意思: to be enthusiastic about\n      来源: waller\n      同义词: 意気ごむ, 息込む\n    ',
  },
  {
    question: '意図',
    answer: 'ito',
    explantion: '\n      汉字: 意図\n      读音: いと\n      意思: intention\n      来源:  aim\n      同义词: 意図\n    ',
  },
  {
    question: '意地',
    answer: 'iji',
    explantion: '\n      汉字: 意地\n      读音: いじ\n      意思: disposition\n      来源:  spirit\n      同义词: 意地\n    ',
  },
  {
    question: '易い',
    answer: 'yasui',
    explantion: '\n      汉字: 易い\n      读音: やすい\n      意思: easy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '為さる',
    answer: 'nasaru',
    explantion: '\n      汉字: 為さる\n      读音: なさる\n      意思: to do\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '異議',
    answer: 'igi',
    explantion: '\n      汉字: 異議\n      读音: いぎ\n      意思: objection\n      来源:  dissent\n      同义词: 異議\n    ',
  },
  {
    question: '異見',
    answer: 'iken',
    explantion: '\n      汉字: 異見\n      读音: いけん\n      意思: different opinion\n      来源:  objection\n      同义词: 異見\n    ',
  },
  {
    question: '異性',
    answer: 'isei',
    explantion: '\n      汉字: 異性\n      读音: いせい\n      意思: the opposite sex\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '異動',
    answer: 'ido',
    explantion: '\n      汉字: 異動\n      读音: いどう\n      意思: a change\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '異論',
    answer: 'iron',
    explantion: '\n      汉字: 異論\n      读音: いろん\n      意思: different opinion\n      来源:  objection\n      同义词: 異論\n    ',
  },
  {
    question: '移行',
    answer: 'iko',
    explantion: '\n      汉字: 移行\n      读音: いこう\n      意思: switching over to\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '移住',
    answer: 'iju',
    explantion: '\n      汉字: 移住\n      读音: いじゅう\n      意思: migration\n      来源:  immigration\n      同义词: 移住\n    ',
  },
  {
    question: '移民',
    answer: 'imin',
    explantion: '\n      汉字: 移民\n      读音: いみん\n      意思: emigration\n      来源:  immigration\n      同义词: 移民\n    ',
  },
  {
    question: '萎びる',
    answer: 'shinabiru',
    explantion: '\n      汉字: 萎びる\n      读音: しなびる\n      意思: to wilt\n      来源:  to fade\n      同义词: 萎びる, \n    ',
  },
  {
    question: '衣装',
    answer: 'isho',
    explantion: '\n      汉字: 衣装\n      读音: いしょう\n      意思: clothing\n      来源:  costume\n      同义词: 衣装, 衣裳\n    ',
  },
  {
    question: '衣料',
    answer: 'iryo',
    explantion: '\n      汉字: 衣料\n      读音: いりょう\n      意思: clothing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '違える',
    answer: 'chigaeru',
    explantion: '\n      汉字: 違える\n      读音: ちがえる\n      意思: to change\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '遺跡',
    answer: 'iseki',
    explantion: '\n      汉字: 遺跡\n      读音: いせき\n      意思: historic ruins (remains relics)\n      来源: waller\n      同义词: 遺蹟\n    ',
  },
  {
    question: '域外',
    answer: 'ikigai',
    explantion: '\n      汉字: 域外\n      读音: いきがい\n      意思: outside the area\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '育ち',
    answer: 'sodachi',
    explantion: '\n      汉字: 育ち\n      读音: そだち\n      意思: breeding\n      来源:  growth\n      同义词: 育ち\n    ',
  },
  {
    question: '一概に',
    answer: 'ichigaini',
    explantion: '\n      汉字: 一概に\n      读音: いちがいに\n      意思: unconditionally\n      来源:  as a rule\n      同义词: 一概に\n    ',
  },
  {
    question: '一括',
    answer: 'ikkatsu',
    explantion: '\n      汉字: 一括\n      读音: いっかつ\n      意思: all together\n      来源:  batch\n      同义词: 一括\n    ',
  },
  {
    question: '一気',
    answer: 'ikki',
    explantion: '\n      汉字: 一気\n      读音: いっき\n      意思: drink!(said repeatedly as a party cheer)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '一頃',
    answer: 'hitokoro',
    explantion: '\n      汉字: 一頃\n      读音: ひところ\n      意思: once\n      来源:  some time ago\n      同义词: 一頃, , 一ころ\n    ',
  },
  {
    question: '一心',
    answer: 'isshin',
    explantion: '\n      汉字: 一心\n      读音: いっしん\n      意思: one mind\n      来源:  wholeheartedness\n      同义词: 一心\n    ',
  },
  {
    question: '一寸',
    answer: 'chotto',
    explantion: '\n      汉字: 一寸\n      读音: ちょっと\n      意思: (ateji) (adv int) (uk) just a minute\n      来源:  a short time\n      同义词: 一寸\n    ',
  },
  {
    question: '一切',
    answer: 'issai',
    explantion: '\n      汉字: 一切\n      读音: いっさい\n      意思: all\n      来源:  everything\n      同义词: 一切\n    ',
  },
  {
    question: '一息',
    answer: 'hitoiki',
    explantion: '\n      汉字: 一息\n      读音: ひといき\n      意思: puffy\n      来源:  a breath\n      同义词: 一息\n    ',
  },
  {
    question: '一帯',
    answer: 'ittai',
    explantion: '\n      汉字: 一帯\n      读音: いったい\n      意思: a region\n      来源:  a zone\n      同义词: 一帯\n    ',
  },
  {
    question: '一定',
    answer: 'ichijiyou',
    explantion: '\n      汉字: 一定\n      读音: いちじょう\n      意思: fixed\n      来源:  settled\n      同义词: 一定\n    ',
  },
  {
    question: '一同',
    answer: 'ichidou',
    explantion: '\n      汉字: 一同\n      读音: いちどう\n      意思: all present\n      来源:  all concerned\n      同义词: 一同\n    ',
  },
  {
    question: '一敗',
    answer: 'ippai',
    explantion: '\n      汉字: 一敗\n      读音: いっぱい\n      意思: one defeat\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '一部',
    answer: 'ichibu',
    explantion: '\n      汉字: 一部\n      读音: いちぶ\n      意思: 1. one copy e.g. of a document\n      来源:  2. a part\n      同义词: 一部\n    ',
  },
  {
    question: '一部分',
    answer: 'ichibubun',
    explantion: '\n      汉字: 一部分\n      读音: いちぶぶん\n      意思: a part\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '一別',
    answer: 'ichibetsu',
    explantion: '\n      汉字: 一別\n      读音: いちべつ\n      意思: parting\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '一変',
    answer: 'ippen',
    explantion: '\n      汉字: 一変\n      读音: いっぺん\n      意思: complete change\n      来源:  about-face\n      同义词: 一変\n    ',
  },
  {
    question: '一面',
    answer: 'ichimen',
    explantion: '\n      汉字: 一面\n      读音: いちめん\n      意思: one side\n      来源:  one phase\n      同义词: 一面, １面\n    ',
  },
  {
    question: '一様',
    answer: 'ichiyo',
    explantion: '\n      汉字: 一様\n      读音: いちよう\n      意思: uniformity\n      来源:  evenness\n      同义词: 一様\n    ',
  },
  {
    question: '一律',
    answer: 'ichiritsu',
    explantion: '\n      汉字: 一律\n      读音: いちりつ\n      意思: evenness\n      来源:  uniformity\n      同义词: 一律\n    ',
  },
  {
    question: '一連',
    answer: 'ichiren',
    explantion: '\n      汉字: 一連\n      读音: いちれん\n      意思: a series\n      来源:  a chain\n      同义词: 一連, 一嗹\n    ',
  },
  {
    question: '溢れる',
    answer: 'afureru',
    explantion: '\n      汉字: 溢れる\n      读音: あふれる\n      意思: to flood\n      来源:  to overflow\n      同义词: 溢れる\n    ',
  },
  {
    question: '逸らす',
    answer: 'sorasu',
    explantion: '\n      汉字: 逸らす\n      读音: そらす\n      意思: to turn away\n      来源:  to avert\n      同义词: 逸らす, \n    ',
  },
  {
    question: '稲光',
    answer: 'inabikari',
    explantion: '\n      汉字: 稲光\n      读音: いなびかり\n      意思: (flash of) lightning\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '印',
    answer: 'in',
    explantion: '\n      汉字: 印\n      读音: いん\n      意思: seal\n      来源:  stamp\n      同义词: 印\n    ',
  },
  {
    question: '印鑑',
    answer: 'inkan',
    explantion: '\n      汉字: 印鑑\n      读音: いんかん\n      意思: stamp\n      来源:  seal\n      同义词: 印鑑\n    ',
  },
  {
    question: '員',
    answer: 'in',
    explantion: '\n      汉字: 員\n      读音: いん\n      意思: member\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '引き起こす',
    answer: 'hikiokosu',
    explantion: '\n      汉字: 引き起こす\n      读音: ひきおこす\n      意思: to cause\n      来源: waller\n      同义词: 引きおこす, ひき起こす, 引き起す, 引起す, 引起こす, ひき起す, 惹き起こす, 惹き起す\n    ',
  },
  {
    question: '引き取る',
    answer: 'hikitoru',
    explantion: '\n      汉字: 引き取る\n      读音: ひきとる\n      意思: to take charge of\n      来源:  to take over\n      同义词: 引き取る, 引取る, 引きとる\n    ',
  },
  {
    question: '引きずる',
    answer: 'hikizuru',
    explantion: '\n      汉字: 引きずる\n      读音: ひきずる\n      意思: to seduce\n      来源:  to drag along\n      同义词: 引きずる, 引ずる, 引き摺る, 引摺る\n    ',
  },
  {
    question: '引き分け',
    answer: 'hikiwake',
    explantion: '\n      汉字: 引き分け\n      读音: ひきわけ\n      意思: a draw (in competition)\n      来源:  tie game\n      同义词: 引き分け\n    ',
  },
  {
    question: '引っ掛ける',
    answer: 'hikkakeru',
    explantion: '\n      汉字: 引っ掛ける\n      读音: ひっかける\n      意思: 1. to hang (something) on (something)\n      来源:  to throw on (clothes)\n      同义词: 引っ掛ける, 引っかける, 引っ懸ける\n    ',
  },
  {
    question: '引っ掻く',
    answer: 'hikkaku',
    explantion: '\n      汉字: 引っ掻く\n      读音: ひっかく\n      意思: to scratch\n      来源: waller\n      同义词: 引っかく, 引掻く, 引っ搔く\n    ',
  },
  {
    question: '陰気',
    answer: 'inki',
    explantion: '\n      汉字: 陰気\n      读音: いんき\n      意思: gloom\n      来源:  melancholy\n      同义词: 陰気\n    ',
  },
  {
    question: '隠居',
    answer: 'inkyo',
    explantion: '\n      汉字: 隠居\n      读音: いんきょ\n      意思: retirement\n      来源:  retired person\n      同义词: 隠居\n    ',
  },
  {
    question: '雨具',
    answer: 'amagu',
    explantion: '\n      汉字: 雨具\n      读音: あまぐ\n      意思: rain gear\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '雨天',
    answer: 'uten',
    explantion: '\n      汉字: 雨天\n      读音: うてん\n      意思: rainy weather\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '渦',
    answer: 'uzu',
    explantion: '\n      汉字: 渦\n      读音: うず\n      意思: swirl\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '嘘つき',
    answer: 'usotsuki',
    explantion: '\n      汉字: 嘘つき\n      读音: うそつき\n      意思: liar (sometimes said with not much seriousness)\n      来源:  fibber\n      同义词: 嘘つき, 嘘吐き, 嘘付き, ウソ付き, ウソ吐き, うそ付き, 噓吐き, うそ吐き\n    ',
  },
  {
    question: '運営',
    answer: 'unei',
    explantion: '\n      汉字: 運営\n      读音: うんえい\n      意思: management\n      来源:  administration\n      同义词: 運営\n    ',
  },
  {
    question: '運賃',
    answer: 'unchin',
    explantion: '\n      汉字: 運賃\n      读音: うんちん\n      意思: freight rates\n      来源:  shipping expenses\n      同义词: 運賃\n    ',
  },
  {
    question: '運搬',
    answer: 'umpan',
    explantion: '\n      汉字: 運搬\n      读音: うんぱん\n      意思: transport\n      来源:  carriage\n      同义词: 運搬\n    ',
  },
  {
    question: '運命',
    answer: 'unmei',
    explantion: '\n      汉字: 運命\n      读音: うんめい\n      意思: fate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '運輸',
    answer: 'unyu',
    explantion: '\n      汉字: 運輸\n      读音: うんゆ\n      意思: transportation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '運用',
    answer: 'unyo',
    explantion: '\n      汉字: 運用\n      读音: うんよう\n      意思: making use of\n      来源:  application\n      同义词: 運用\n    ',
  },
  {
    question: '営む',
    answer: 'itonamu',
    explantion: '\n      汉字: 営む\n      读音: いとなむ\n      意思: to carry on (e.g. in ceremony)\n      来源:  to run a business\n      同义词: 営む\n    ',
  },
  {
    question: '映写',
    answer: 'eisha',
    explantion: '\n      汉字: 映写\n      读音: えいしゃ\n      意思: projection\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '映像',
    answer: 'eizou',
    explantion: '\n      汉字: 映像\n      读音: えいぞう\n      意思: reflection\n      来源:  image\n      同义词: 映像\n    ',
  },
  {
    question: '栄える',
    answer: 'sakaeru',
    explantion: '\n      汉字: 栄える\n      读音: さかえる\n      意思: to prosper\n      来源:  to flourish\n      同义词: 栄える\n    ',
  },
  {
    question: '英字',
    answer: 'eiji',
    explantion: '\n      汉字: 英字\n      读音: えいじ\n      意思: English letter (character)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '英雄',
    answer: 'eiyuu',
    explantion: '\n      汉字: 英雄\n      读音: えいゆう\n      意思: hero\n      来源:  great man\n      同义词: 英雄\n    ',
  },
  {
    question: '衛生',
    answer: 'eisei',
    explantion: '\n      汉字: 衛生\n      读音: えいせい\n      意思: health\n      来源:  hygiene\n      同义词: 衛生\n    ',
  },
  {
    question: '液',
    answer: 'eki',
    explantion: '\n      汉字: 液\n      读音: えき\n      意思: liquid\n      来源:  fluid\n      同义词: 液\n    ',
  },
  {
    question: '閲覧',
    answer: 'etsuran',
    explantion: '\n      汉字: 閲覧\n      读音: えつらん\n      意思: inspection\n      来源:  reading\n      同义词: 閲覧\n    ',
  },
  {
    question: '円満',
    answer: 'enman',
    explantion: '\n      汉字: 円満\n      读音: えんまん\n      意思: perfection\n      来源:  harmony\n      同义词: 円満\n    ',
  },
  {
    question: '園',
    answer: 'en',
    explantion: '\n      汉字: 園\n      读音: えん\n      意思: garden (esp. man-made)\n      来源: waller\n      同义词: 苑, 苑, 園\n    ',
  },
  {
    question: '延べ',
    answer: 'nobe',
    explantion: '\n      汉字: 延べ\n      读音: のべ\n      意思: futures\n      来源:  credit (buying)\n      同义词: 延べ\n    ',
  },
  {
    question: '沿う',
    answer: 'so',
    explantion: '\n      汉字: 沿う\n      读音: そう\n      意思: to run along\n      来源:  to follow\n      同义词: 沿う\n    ',
  },
  {
    question: '沿岸',
    answer: 'engan',
    explantion: '\n      汉字: 沿岸\n      读音: えんがん\n      意思: coast\n      来源:  shore\n      同义词: 沿岸\n    ',
  },
  {
    question: '沿線',
    answer: 'ensen',
    explantion: '\n      汉字: 沿線\n      读音: えんせん\n      意思: along railway line\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '演じる',
    answer: 'enjiru',
    explantion: '\n      汉字: 演じる\n      读音: えんじる\n      意思: to perform (a play)\n      来源:  to play (a part)\n      同义词: 演じる\n    ',
  },
  {
    question: '演ずる',
    answer: 'enzuru',
    explantion: '\n      汉字: 演ずる\n      读音: えんずる\n      意思: to perform\n      来源:  to play\n      同义词: 演ずる\n    ',
  },
  {
    question: '演習',
    answer: 'enshu',
    explantion: '\n      汉字: 演習\n      读音: えんしゅう\n      意思: practice\n      来源:  exercises\n      同义词: 演習\n    ',
  },
  {
    question: '演出',
    answer: 'enshutsu',
    explantion: '\n      汉字: 演出\n      读音: えんしゅつ\n      意思: production (e.g. play)\n      来源:  direction\n      同义词: 演出\n    ',
  },
  {
    question: '煙たい',
    answer: 'kemutai',
    explantion: '\n      汉字: 煙たい\n      读音: けむたい\n      意思: smoky\n      来源:  feeling awkward\n      同义词: 煙たい, 煙たい, 烟たい, 烟たい\n    ',
  },
  {
    question: '煙る',
    answer: 'kemuru',
    explantion: '\n      汉字: 煙る\n      读音: けむる\n      意思: to smoke (e.g. fire)\n      来源: waller\n      同义词: 煙る, 烟る, 烟る\n    ',
  },
  {
    question: '縁',
    answer: 'en',
    explantion: '\n      汉字: 縁\n      读音: えん\n      意思: chance\n      来源:  fate\n      同义词: 縁, 縁, 縁, 縁, 江に\n    ',
  },
  {
    question: '縁側',
    answer: 'engawa',
    explantion: '\n      汉字: 縁側\n      读音: えんがわ\n      意思: veranda\n      来源:  porch\n      同义词: 縁側, 椽側\n    ',
  },
  {
    question: '縁談',
    answer: 'endan',
    explantion: '\n      汉字: 縁談\n      读音: えんだん\n      意思: marriage proposal\n      来源:  engagement\n      同义词: 縁談\n    ',
  },
  {
    question: '遠ざかる',
    answer: 'tozakaru',
    explantion: '\n      汉字: 遠ざかる\n      读音: とおざかる\n      意思: to go far off\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '遠回り',
    answer: 'toomawari',
    explantion: '\n      汉字: 遠回り\n      读音: とおまわり\n      意思: detour\n      来源:  roundabout way\n      同义词: 遠回り, 遠まわり\n    ',
  },
  {
    question: '遠方',
    answer: 'enpo',
    explantion: '\n      汉字: 遠方\n      读音: えんぽう\n      意思: long way\n      来源:  distant place\n      同义词: 遠方, 遠方\n    ',
  },
  {
    question: '鉛',
    answer: 'namari',
    explantion: '\n      汉字: 鉛\n      读音: なまり\n      意思: lead (the metal)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '於いて',
    answer: 'oite',
    explantion: '\n      汉字: 於いて\n      读音: おいて\n      意思: at\n      来源:  in\n      同义词: 於いて, , 於て, 於, 置いて\n    ',
  },
  {
    question: '汚す',
    answer: 'kegasu',
    explantion: '\n      汉字: 汚す\n      读音: けがす\n      意思: to disgrace\n      来源:  to dishonour\n      同义词: 汚す\n    ',
  },
  {
    question: '汚らわしい',
    answer: 'kegarawashii',
    explantion: '\n      汉字: 汚らわしい\n      读音: けがらわしい\n      意思: filthy\n      来源:  unfair\n      同义词: 汚らわしい, 穢らわしい\n    ',
  },
  {
    question: '汚れ',
    answer: 'kegare',
    explantion: '\n      汉字: 汚れ\n      读音: けがれ\n      意思: uncleanness\n      来源:  impurity\n      同义词: 汚れ, 穢れ\n    ',
  },
  {
    question: '汚れる',
    answer: 'kegareru',
    explantion: '\n      汉字: 汚れる\n      读音: けがれる\n      意思: to get dirty\n      来源:  to become dirty\n      同义词: 汚れる, 穢れる\n    ',
  },
  {
    question: '甥',
    answer: 'oi',
    explantion: '\n      汉字: 甥\n      读音: おい\n      意思: nephew\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '応急',
    answer: 'oukyu',
    explantion: '\n      汉字: 応急\n      读音: おうきゅう\n      意思: emergency\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '応募',
    answer: 'oubo',
    explantion: '\n      汉字: 応募\n      读音: おうぼ\n      意思: subscription\n      来源:  application\n      同义词: 応募\n    ',
  },
  {
    question: '押し寄せる',
    answer: 'oshiyoseru',
    explantion: '\n      汉字: 押し寄せる\n      读音: おしよせる\n      意思: to push aside\n      来源:  to advance on\n      同义词: 押し寄せる, 押寄せる, 押しよせる\n    ',
  },
  {
    question: '押し込む',
    answer: 'oshikomu',
    explantion: '\n      汉字: 押し込む\n      读音: おしこむ\n      意思: to push into\n      来源:  to crowd into\n      同义词: 押し込む, 押しこむ\n    ',
  },
  {
    question: '横綱',
    answer: 'yokozuna',
    explantion: '\n      汉字: 横綱\n      读音: よこづな\n      意思: sumo grand champion\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '殴る',
    answer: 'naguru',
    explantion: '\n      汉字: 殴る\n      读音: なぐる\n      意思: to strike\n      来源:  to hit\n      同义词: 殴る\n    ',
  },
  {
    question: '黄金',
    answer: 'ougon',
    explantion: '\n      汉字: 黄金\n      读音: おうごん\n      意思: gold\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '臆病',
    answer: 'okubyo',
    explantion: '\n      汉字: 臆病\n      读音: おくびょう\n      意思: cowardice\n      来源:  timidity\n      同义词: 臆病, 憶病, おく病\n    ',
  },
  {
    question: '乙',
    answer: 'otsu',
    explantion: '\n      汉字: 乙\n      读音: おつ\n      意思: 1. strange\n      来源:  quaint\n      同义词: 乙, \n    ',
  },
  {
    question: '下がる',
    answer: 'sagaru',
    explantion: '\n      汉字: 下がる\n      读音: さがる\n      意思: to hang down\n      来源:  to abate\n      同义词: 下がる\n    ',
  },
  {
    question: '下らない',
    answer: 'kudaranai',
    explantion: '\n      汉字: 下らない\n      读音: くだらない\n      意思: good-for-nothing\n      来源:  stupid\n      同义词: 下らない\n    ',
  },
  {
    question: '下位',
    answer: 'kai',
    explantion: '\n      汉字: 下位\n      读音: かい\n      意思: low rank\n      来源:  subordinate\n      同义词: 下位\n    ',
  },
  {
    question: '下火',
    answer: 'shitabi',
    explantion: '\n      汉字: 下火\n      读音: したび\n      意思: burning low\n      来源:  waning\n      同义词: 下火\n    ',
  },
  {
    question: '下取り',
    answer: 'shitadori',
    explantion: '\n      汉字: 下取り\n      读音: したどり\n      意思: trade in\n      来源:  part exchange\n      同义词: 下取り\n    ',
  },
  {
    question: '下心',
    answer: 'shitagokoro',
    explantion: '\n      汉字: 下心\n      读音: したごころ\n      意思: secret intention\n      来源:  motive\n      同义词: 下心\n    ',
  },
  {
    question: '下地',
    answer: 'shitaji',
    explantion: '\n      汉字: 下地\n      读音: したじ\n      意思: groundwork\n      来源:  foundation\n      同义词: 下地\n    ',
  },
  {
    question: '下調べ',
    answer: 'shitashirabe',
    explantion: '\n      汉字: 下調べ\n      读音: したしらべ\n      意思: preliminary investigation\n      来源:  preparation\n      同义词: 下調べ\n    ',
  },
  {
    question: '下番',
    answer: 'kaban',
    explantion: '\n      汉字: 下番\n      读音: かばん\n      意思: going off duty\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '下吏',
    answer: 'kari',
    explantion: '\n      汉字: 下吏\n      读音: かり\n      意思: lower official\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '下痢',
    answer: 'geri',
    explantion: '\n      汉字: 下痢\n      读音: げり\n      意思: diarrhoea\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '化ける',
    answer: 'bakeru',
    explantion: '\n      汉字: 化ける\n      读音: ばける\n      意思: to appear in disguise\n      来源:  to take the form of\n      同义词: 化ける\n    ',
  },
  {
    question: '化する',
    answer: 'kasuru',
    explantion: '\n      汉字: 化する\n      读音: かする\n      意思: to change into\n      来源:  to convert into\n      同义词: 化する\n    ',
  },
  {
    question: '化合',
    answer: 'kago',
    explantion: '\n      汉字: 化合\n      读音: かごう\n      意思: chemical combination\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '化石',
    answer: 'kaseki',
    explantion: '\n      汉字: 化石\n      读音: かせき\n      意思: fossil\n      来源:  petrifaction\n      同义词: 化石\n    ',
  },
  {
    question: '化繊',
    answer: 'kasen',
    explantion: '\n      汉字: 化繊\n      读音: かせん\n      意思: synthetic fibres\n      来源: waller\n      同义词: 化纎\n    ',
  },
  {
    question: '何しろ',
    answer: 'nanishiro',
    explantion: '\n      汉字: 何しろ\n      读音: なにしろ\n      意思: at any rate\n      来源:  anyhow\n      同义词: 何しろ\n    ',
  },
  {
    question: '何だか',
    answer: 'nandaka',
    explantion: '\n      汉字: 何だか\n      读音: なんだか\n      意思: a little\n      来源:  somewhat\n      同义词: 何だか, \n    ',
  },
  {
    question: '何だかんだ',
    answer: 'nandakanda',
    explantion: '\n      汉字: 何だかんだ\n      读音: なんだかんだ\n      意思: something or other\n      来源: waller\n      同义词: , , 何だかだ, 何だ彼だ, 何だ彼だ\n    ',
  },
  {
    question: '何て',
    answer: 'nante',
    explantion: '\n      汉字: 何て\n      读音: なんて\n      意思: how...!\n      来源:  what...!\n      同义词: 何て, \n    ',
  },
  {
    question: '何と',
    answer: 'nanto',
    explantion: '\n      汉字: 何と\n      读音: なんと\n      意思: what\n      来源:  how\n      同义词: 何と, \n    ',
  },
  {
    question: '何なり',
    answer: 'nannari',
    explantion: '\n      汉字: 何なり\n      读音: なんなり\n      意思: any\n      来源:  anything\n      同义词: 何なり\n    ',
  },
  {
    question: '何も',
    answer: 'nanimo',
    explantion: '\n      汉字: 何も\n      读音: なにも\n      意思: nothing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '何より',
    answer: 'naniyori',
    explantion: '\n      汉字: 何より\n      读音: なにより\n      意思: most\n      来源:  best\n      同义词: 何より\n    ',
  },
  {
    question: '何れ何れ',
    answer: 'doredore',
    explantion: '\n      汉字: 何れ何れ\n      读音: どれどれ\n      意思: which (emphatic)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '何とも',
    answer: 'nantomo',
    explantion: '\n      汉字: 何とも\n      读音: なんとも\n      意思: nothing (with neg. verb)\n      来源:  quite\n      同义词: 何とも\n    ',
  },
  {
    question: '何時の間にか',
    answer: 'itsunomanika',
    explantion: '\n      汉字: 何時の間にか\n      读音: いつのまにか\n      意思: before one knows\n      来源:  unnoticed\n      同义词: 何時の間にか\n    ',
  },
  {
    question: '何時までも',
    answer: 'itsumademo',
    explantion: '\n      汉字: 何時までも\n      读音: いつまでも\n      意思: forever\n      来源:  for good\n      同义词: 何時までも\n    ',
  },
  {
    question: '何処か',
    answer: 'dokoka',
    explantion: '\n      汉字: 何処か\n      读音: どこか\n      意思: somewhere\n      来源:  anywhere\n      同义词: 何処か\n    ',
  },
  {
    question: '何卒',
    answer: 'nanitozo',
    explantion: '\n      汉字: 何卒\n      读音: なにとぞ\n      意思: please\n      来源: waller\n      同义词: 何卒, 何とぞ\n    ',
  },
  {
    question: '何方',
    answer: 'dochira',
    explantion: '\n      汉字: 何方\n      读音: どちら\n      意思: which\n      来源:  who\n      同义词: 何方\n    ',
  },
  {
    question: '何方',
    answer: 'donata',
    explantion: '\n      汉字: 何方\n      读音: どなた\n      意思: who?\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '佳句',
    answer: 'kaku',
    explantion: '\n      汉字: 佳句\n      读音: かく\n      意思: beautiful passage of literature\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '加工',
    answer: 'kakou',
    explantion: '\n      汉字: 加工\n      读音: かこう\n      意思: manufacturing\n      来源:  processing\n      同义词: 加工\n    ',
  },
  {
    question: '加入',
    answer: 'kaniyuu',
    explantion: '\n      汉字: 加入\n      读音: かにゅう\n      意思: becoming a member\n      来源:  joining\n      同义词: 加入\n    ',
  },
  {
    question: '加味',
    answer: 'kami',
    explantion: '\n      汉字: 加味\n      读音: かみ\n      意思: seasoning\n      来源:  flavoring\n      同义词: 加味\n    ',
  },
  {
    question: '可愛がる',
    answer: 'kawaigaru',
    explantion: '\n      汉字: 可愛がる\n      读音: かわいがる\n      意思: to love\n      来源:  to be affectionate\n      同义词: 可愛がる\n    ',
  },
  {
    question: '可愛らしい',
    answer: 'kawairashii',
    explantion: '\n      汉字: 可愛らしい\n      读音: かわいらしい\n      意思: lovely\n      来源:  sweet\n      同义词: 可愛らしい\n    ',
  },
  {
    question: '可笑しい',
    answer: 'okashii',
    explantion: '\n      汉字: 可笑しい\n      读音: おかしい\n      意思: strange\n      来源:  funny\n      同义词: 可笑しい\n    ',
  },
  {
    question: '家計',
    answer: 'kakei',
    explantion: '\n      汉字: 家計\n      读音: かけい\n      意思: household economy\n      来源:  family finances\n      同义词: 家計\n    ',
  },
  {
    question: '家主',
    answer: 'ienushi',
    explantion: '\n      汉字: 家主\n      读音: いえぬし\n      意思: landlord\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '家出',
    answer: 'iede',
    explantion: '\n      汉字: 家出\n      读音: いえで\n      意思: running away from home\n      来源:  leaving home\n      同义词: 家出\n    ',
  },
  {
    question: '家畜',
    answer: 'kachiku',
    explantion: '\n      汉字: 家畜\n      读音: かちく\n      意思: domestic animals\n      来源:  livestock\n      同义词: 家畜\n    ',
  },
  {
    question: '家来',
    answer: 'kerai',
    explantion: '\n      汉字: 家来\n      读音: けらい\n      意思: retainer\n      来源:  retinue\n      同义词: 家来, 家礼, 家頼\n    ',
  },
  {
    question: '科',
    answer: 'ka',
    explantion: '\n      汉字: 科\n      读音: か\n      意思: department\n      来源:  section\n      同义词: 科\n    ',
  },
  {
    question: '果たす',
    answer: 'hatasu',
    explantion: '\n      汉字: 果たす\n      读音: はたす\n      意思: to accomplish\n      来源:  to fulfill\n      同义词: 果たす, 果す\n    ',
  },
  {
    question: '果て',
    answer: 'hate',
    explantion: '\n      汉字: 果て\n      读音: はて\n      意思: the end\n      来源:  the extremity\n      同义词: 果て\n    ',
  },
  {
    question: '果てる',
    answer: 'hateru',
    explantion: '\n      汉字: 果てる\n      读音: はてる\n      意思: to end\n      来源:  to be finished\n      同义词: 果てる\n    ',
  },
  {
    question: '河川',
    answer: 'kasen',
    explantion: '\n      汉字: 河川\n      读音: かせん\n      意思: rivers\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '火花',
    answer: 'hibana',
    explantion: '\n      汉字: 火花\n      读音: ひばな\n      意思: spark\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '火星',
    answer: 'kasei',
    explantion: '\n      汉字: 火星\n      读音: かせい\n      意思: Mars (planet)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '火燵',
    answer: 'kotatsu',
    explantion: '\n      汉字: 火燵\n      读音: こたつ\n      意思: table with heater\n      来源:  (orig) charcoal brazier in a floor well\n      同义词: 火燵, , 炬燵, \n    ',
  },
  {
    question: 'ヶ月',
    answer: 'kagetsu',
    explantion: '\n      汉字: ヶ月\n      读音: かげつ\n      意思: #NAME?\n      来源: waller\n      同义词: ヵ月, カ月, か月, 箇月, ケ月\n    ',
  },
  {
    question: '花びら',
    answer: 'hanabira',
    explantion: '\n      汉字: 花びら\n      读音: はなびら\n      意思: (flower) petal\n      来源: waller\n      同义词: 花弁, 花弁, 花瓣\n    ',
  },
  {
    question: '花粉',
    answer: 'kafun',
    explantion: '\n      汉字: 花粉\n      读音: かふん\n      意思: pollen\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '苛める',
    answer: 'ijimeru',
    explantion: '\n      汉字: 苛める\n      读音: いじめる\n      意思: to tease\n      来源:  to torment\n      同义词: 苛める\n    ',
  },
  {
    question: '荷',
    answer: 'ni',
    explantion: '\n      汉字: 荷\n      读音: に\n      意思: load\n      来源:  baggage\n      同义词: 荷\n    ',
  },
  {
    question: '荷造り',
    answer: 'nizukuri',
    explantion: '\n      汉字: 荷造り\n      读音: にづくり\n      意思: packing\n      来源:  baling\n      同义词: 荷造り, 荷作り, 荷づくり\n    ',
  },
  {
    question: '華美',
    answer: 'kabi',
    explantion: '\n      汉字: 華美\n      读音: かび\n      意思: pomp\n      来源:  splendor\n      同义词: 華美, 花美\n    ',
  },
  {
    question: '課外',
    answer: 'kagai',
    explantion: '\n      汉字: 課外\n      读音: かがい\n      意思: extracurricular\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '課題',
    answer: 'kadai',
    explantion: '\n      汉字: 課題\n      读音: かだい\n      意思: subject\n      来源:  theme\n      同义词: 課題\n    ',
  },
  {
    question: '貨幣',
    answer: 'kaei',
    explantion: '\n      汉字: 貨幣\n      读音: かへい\n      意思: money\n      来源:  currency\n      同义词: 貨幣\n    ',
  },
  {
    question: '過ぎ',
    answer: 'sugi',
    explantion: '\n      汉字: 過ぎ\n      读音: すぎ\n      意思: past\n      来源:  after\n      同义词: 過ぎ, \n    ',
  },
  {
    question: '過ち',
    answer: 'ayamachi',
    explantion: '\n      汉字: 過ち\n      读音: あやまち\n      意思: fault\n      来源:  error\n      同义词: 過ち, 誤ち\n    ',
  },
  {
    question: '過疎',
    answer: 'kaso',
    explantion: '\n      汉字: 過疎\n      读音: かそ\n      意思: depopulation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '過多',
    answer: 'kata',
    explantion: '\n      汉字: 過多\n      读音: かた\n      意思: excess\n      来源:  superabundance\n      同义词: 過多\n    ',
  },
  {
    question: '過密',
    answer: 'kamitsu',
    explantion: '\n      汉字: 過密\n      读音: かみつ\n      意思: crowded\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '過労',
    answer: 'karo',
    explantion: '\n      汉字: 過労\n      读音: かろう\n      意思: overwork\n      来源:  strain\n      同义词: 過労\n    ',
  },
  {
    question: '霞む',
    answer: 'kasumu',
    explantion: '\n      汉字: 霞む\n      读音: かすむ\n      意思: to grow hazy\n      来源:  to be misty\n      同义词: 霞む, , 翳む\n    ',
  },
  {
    question: '我がまま',
    answer: 'wagamama',
    explantion: '\n      汉字: 我がまま\n      读音: わがまま\n      意思: selfishness\n      来源:  egoism\n      同义词: 我がまま\n    ',
  },
  {
    question: '画',
    answer: 'kaku',
    explantion: '\n      汉字: 画\n      读音: かく\n      意思: stroke\n      来源: waller\n      同义词: 劃\n    ',
  },
  {
    question: '画期',
    answer: 'kakki',
    explantion: '\n      汉字: 画期\n      读音: かっき\n      意思: epoch-making\n      来源: waller\n      同义词: 劃期\n    ',
  },
  {
    question: '雅致',
    answer: 'gachi',
    explantion: '\n      汉字: 雅致\n      读音: がち\n      意思: artistry\n      来源:  good taste\n      同义词: 雅致\n    ',
  },
  {
    question: '介護',
    answer: 'kaigo',
    explantion: '\n      汉字: 介護\n      读音: かいご\n      意思: nursing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '介入',
    answer: 'kainiyuu',
    explantion: '\n      汉字: 介入\n      读音: かいにゅう\n      意思: intervention\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '介抱',
    answer: 'kaiho',
    explantion: '\n      汉字: 介抱\n      读音: かいほう\n      意思: nursing\n      来源:  looking after\n      同义词: 介抱\n    ',
  },
  {
    question: '会',
    answer: 'e',
    explantion: '\n      汉字: 会\n      读音: え\n      意思: understanding\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '会見',
    answer: 'kaiken',
    explantion: '\n      汉字: 会見\n      读音: かいけん\n      意思: interview\n      来源:  audience\n      同义词: 会見\n    ',
  },
  {
    question: '会談',
    answer: 'kaidan',
    explantion: '\n      汉字: 会談\n      读音: かいだん\n      意思: conversation\n      来源:  conference\n      同义词: 会談\n    ',
  },
  {
    question: '解く',
    answer: 'hodoku',
    explantion: '\n      汉字: 解く\n      读音: ほどく\n      意思: to unfasten\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '解除',
    answer: 'kaijiyo',
    explantion: '\n      汉字: 解除\n      读音: かいじょ\n      意思: cancellation\n      来源:  rescinding\n      同义词: 解除\n    ',
  },
  {
    question: '解剖',
    answer: 'kaibou',
    explantion: '\n      汉字: 解剖\n      读音: かいぼう\n      意思: dissection\n      来源:  autopsy\n      同义词: 解剖\n    ',
  },
  {
    question: '回収',
    answer: 'kaishu',
    explantion: '\n      汉字: 回収\n      读音: かいしゅう\n      意思: collection\n      来源:  recovery\n      同义词: 回収\n    ',
  },
  {
    question: '回送',
    answer: 'kaiso',
    explantion: '\n      汉字: 回送\n      读音: かいそう\n      意思: forwarding\n      来源: waller\n      同义词: 廻送\n    ',
  },
  {
    question: '回覧',
    answer: 'kairan',
    explantion: '\n      汉字: 回覧\n      读音: かいらん\n      意思: circulation\n      来源: waller\n      同义词: 廻覧\n    ',
  },
  {
    question: '回路',
    answer: 'kairo',
    explantion: '\n      汉字: 回路\n      读音: かいろ\n      意思: circuit (electric)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '快い',
    answer: 'kokoroyoi',
    explantion: '\n      汉字: 快い\n      读音: こころよい\n      意思: pleasant\n      来源:  agreeable\n      同义词: 快い, 心良い\n    ',
  },
  {
    question: '怪獣',
    answer: 'kaiju',
    explantion: '\n      汉字: 怪獣\n      读音: かいじゅう\n      意思: monster\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '懐く',
    answer: 'natsuku',
    explantion: '\n      汉字: 懐く\n      读音: なつく\n      意思: to become emotionally attached\n      来源: waller\n      同义词: , , 懐く, , 懐く\n    ',
  },
  {
    question: '改まる',
    answer: 'aratamaru',
    explantion: '\n      汉字: 改まる\n      读音: あらたまる\n      意思: to be renewed\n      来源: waller\n      同义词: 革まる\n    ',
  },
  {
    question: '改悪',
    answer: 'kaiaku',
    explantion: '\n      汉字: 改悪\n      读音: かいあく\n      意思: deterioration\n      来源:  changing for the worse\n      同义词: 改悪\n    ',
  },
  {
    question: '改革',
    answer: 'kaikaku',
    explantion: '\n      汉字: 改革\n      读音: かいかく\n      意思: reform\n      来源:  reformation\n      同义词: 改革\n    ',
  },
  {
    question: '改修',
    answer: 'kaishu',
    explantion: '\n      汉字: 改修\n      读音: かいしゅう\n      意思: repair\n      来源:  improvement\n      同义词: 改修\n    ',
  },
  {
    question: '改定',
    answer: 'kaitei',
    explantion: '\n      汉字: 改定\n      读音: かいてい\n      意思: reform\n      来源: waller\n      同义词: 改定\n    ',
  },
  {
    question: '改訂',
    answer: 'kaitei',
    explantion: '\n      汉字: 改訂\n      读音: かいてい\n      意思: revision\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '改良',
    answer: 'kairyo',
    explantion: '\n      汉字: 改良\n      读音: かいりょう\n      意思: improvement\n      来源:  reform\n      同义词: 改良\n    ',
  },
  {
    question: '海運',
    answer: 'kaiun',
    explantion: '\n      汉字: 海運\n      读音: かいうん\n      意思: maritime\n      来源:  marine transportation\n      同义词: 海運\n    ',
  },
  {
    question: '海峡',
    answer: 'kaikyo',
    explantion: '\n      汉字: 海峡\n      读音: かいきょう\n      意思: channel\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '海抜',
    answer: 'kaibatsu',
    explantion: '\n      汉字: 海抜\n      读音: かいばつ\n      意思: height above sea level\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '海流',
    answer: 'kairyu',
    explantion: '\n      汉字: 海流\n      读音: かいりゅう\n      意思: ocean current\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '海路',
    answer: 'umiji',
    explantion: '\n      汉字: 海路\n      读音: うみじ\n      意思: sea route\n      来源: waller\n      同义词: 海路, 海路\n    ',
  },
  {
    question: '灰汁',
    answer: 'aku',
    explantion: '\n      汉字: 灰汁\n      读音: あく\n      意思: puckery juice\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '開催',
    answer: 'kaisai',
    explantion: '\n      汉字: 開催\n      读音: かいさい\n      意思: holding a meeting\n      来源:  open an exhibition\n      同义词: 開催\n    ',
  },
  {
    question: '開拓',
    answer: 'kaitaku',
    explantion: '\n      汉字: 開拓\n      读音: かいたく\n      意思: reclamation (of wasteland)\n      来源:  cultivation\n      同义词: 開拓\n    ',
  },
  {
    question: '開発',
    answer: 'kaihatsu',
    explantion: '\n      汉字: 開発\n      读音: かいはつ\n      意思: development\n      来源:  exploitation\n      同义词: 開発, 開発\n    ',
  },
  {
    question: '階',
    answer: 'kai',
    explantion: '\n      汉字: 階\n      读音: かい\n      意思: -floor (counter)\n      来源:  stories\n      同义词: 階\n    ',
  },
  {
    question: '階級',
    answer: 'kaikyu',
    explantion: '\n      汉字: 階級\n      读音: かいきゅう\n      意思: class\n      来源:  rank\n      同义词: 階級\n    ',
  },
  {
    question: '階層',
    answer: 'kaiso',
    explantion: '\n      汉字: 階層\n      读音: かいそう\n      意思: class\n      来源:  level\n      同义词: 階層\n    ',
  },
  {
    question: '貝殻',
    answer: 'kaigara',
    explantion: '\n      汉字: 貝殻\n      读音: かいがら\n      意思: shell\n      来源: waller\n      同义词: 貝がら, 貝殼\n    ',
  },
  {
    question: '外貨',
    answer: 'gaika',
    explantion: '\n      汉字: 外貨\n      读音: がいか\n      意思: imported goods\n      来源:  foreign money\n      同义词: 外貨\n    ',
  },
  {
    question: '外観',
    answer: 'gaikan',
    explantion: '\n      汉字: 外観\n      读音: がいかん\n      意思: appearance\n      来源:  exterior\n      同义词: 外観\n    ',
  },
  {
    question: '外相',
    answer: 'gaisho',
    explantion: '\n      汉字: 外相\n      读音: がいしょう\n      意思: Foreign Minister\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '外方',
    answer: 'soppo',
    explantion: '\n      汉字: 外方\n      读音: そっぽ\n      意思: look (or turn) the other way\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '外来',
    answer: 'gairai',
    explantion: '\n      汉字: 外来\n      读音: がいらい\n      意思: imported\n      来源:  outpatient clinic\n      同义词: 外来\n    ',
  },
  {
    question: '崖',
    answer: 'gake',
    explantion: '\n      汉字: 崖\n      读音: がけ\n      意思: cliff\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '概説',
    answer: 'gaisetsu',
    explantion: '\n      汉字: 概説\n      读音: がいせつ\n      意思: general statement\n      来源:  outline\n      同义词: 概説\n    ',
  },
  {
    question: '概念',
    answer: 'gainen',
    explantion: '\n      汉字: 概念\n      读音: がいねん\n      意思: general idea\n      来源:  concept\n      同义词: 概念\n    ',
  },
  {
    question: '概略',
    answer: 'gairyaku',
    explantion: '\n      汉字: 概略\n      读音: がいりゃく\n      意思: outline\n      来源:  summary\n      同义词: 概略\n    ',
  },
  {
    question: '街',
    answer: 'gai',
    explantion: '\n      汉字: 街\n      读音: がい\n      意思: ~street\n      来源:  ~quarters\n      同义词: 街\n    ',
  },
  {
    question: '街頭',
    answer: 'gaitou',
    explantion: '\n      汉字: 街頭\n      读音: がいとう\n      意思: in the street\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '街道',
    answer: 'kaido',
    explantion: '\n      汉字: 街道\n      读音: かいどう\n      意思: highway\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '該当',
    answer: 'gaitou',
    explantion: '\n      汉字: 該当\n      读音: がいとう\n      意思: corresponding\n      来源:  answering to\n      同义词: 該当\n    ',
  },
  {
    question: '各種',
    answer: 'kakushu',
    explantion: '\n      汉字: 各種\n      读音: かくしゅ\n      意思: every kind\n      来源:  all sorts\n      同义词: 各種\n    ',
  },
  {
    question: '拡散',
    answer: 'kakusan',
    explantion: '\n      汉字: 拡散\n      读音: かくさん\n      意思: scattering\n      来源:  diffusion\n      同义词: 拡散\n    ',
  },
  {
    question: '格',
    answer: 'kaku',
    explantion: '\n      汉字: 格\n      读音: かく\n      意思: status\n      来源:  character\n      同义词: 格\n    ',
  },
  {
    question: '格差',
    answer: 'kakusa',
    explantion: '\n      汉字: 格差\n      读音: かくさ\n      意思: qualitative difference\n      来源:  disparity\n      同义词: 格差\n    ',
  },
  {
    question: '核',
    answer: 'kaku',
    explantion: '\n      汉字: 核\n      读音: かく\n      意思: nucleus\n      来源:  kernel\n      同义词: 核\n    ',
  },
  {
    question: '獲得',
    answer: 'kakutoku',
    explantion: '\n      汉字: 獲得\n      读音: かくとく\n      意思: acquisition\n      来源:  possession\n      同义词: 獲得\n    ',
  },
  {
    question: '獲物',
    answer: 'emono',
    explantion: '\n      汉字: 獲物\n      读音: えもの\n      意思: game\n      来源:  spoils\n      同义词: 獲物\n    ',
  },
  {
    question: '確信',
    answer: 'kakushin',
    explantion: '\n      汉字: 確信\n      读音: かくしん\n      意思: conviction\n      来源:  confidence\n      同义词: 確信\n    ',
  },
  {
    question: '確定',
    answer: 'kakutei',
    explantion: '\n      汉字: 確定\n      读音: かくてい\n      意思: definition (math)\n      来源:  decision\n      同义词: 確定\n    ',
  },
  {
    question: '確保',
    answer: 'kakuho',
    explantion: '\n      汉字: 確保\n      读音: かくほ\n      意思: guarantee\n      来源:  ensure\n      同义词: 確保\n    ',
  },
  {
    question: '確立',
    answer: 'kakuritsu',
    explantion: '\n      汉字: 確立\n      读音: かくりつ\n      意思: establishment\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '覚え',
    answer: 'oboe',
    explantion: '\n      汉字: 覚え\n      读音: おぼえ\n      意思: memory\n      来源:  sense\n      同义词: 覚え\n    ',
  },
  {
    question: '角',
    answer: 'kaku',
    explantion: '\n      汉字: 角\n      读音: かく\n      意思: 1. angle\n      来源:  2. bishop (shogi)\n      同义词: 角\n    ',
  },
  {
    question: '隔たる',
    answer: 'hedataru',
    explantion: '\n      汉字: 隔たる\n      读音: へだたる\n      意思: to be distant\n      来源: waller\n      同义词: 距たる\n    ',
  },
  {
    question: '革新',
    answer: 'kakushin',
    explantion: '\n      汉字: 革新\n      读音: かくしん\n      意思: reform\n      来源:  innovation\n      同义词: 革新\n    ',
  },
  {
    question: '革命',
    answer: 'kakumei',
    explantion: '\n      汉字: 革命\n      读音: かくめい\n      意思: revolution\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '学芸',
    answer: 'gakugei',
    explantion: '\n      汉字: 学芸\n      读音: がくげい\n      意思: arts and sciences\n      来源:  liberal arts\n      同义词: 学芸\n    ',
  },
  {
    question: '学士',
    answer: 'gakushi',
    explantion: '\n      汉字: 学士\n      读音: がくし\n      意思: university graduate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '学説',
    answer: 'gakusetsu',
    explantion: '\n      汉字: 学説\n      读音: がくせつ\n      意思: theory\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '学歴',
    answer: 'gakureki',
    explantion: '\n      汉字: 学歴\n      读音: がくれき\n      意思: academic background\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '楽しむ',
    answer: 'tanoshimu',
    explantion: '\n      汉字: 楽しむ\n      读音: たのしむ\n      意思: to enjoy oneself\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '楽観',
    answer: 'rakkan',
    explantion: '\n      汉字: 楽観\n      读音: らっかん\n      意思: optimism\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '楽譜',
    answer: 'gakufu',
    explantion: '\n      汉字: 楽譜\n      读音: がくふ\n      意思: score (music)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '顎',
    answer: 'ago',
    explantion: '\n      汉字: 顎\n      读音: あご\n      意思: chin\n      来源: waller\n      同义词: 顎, 頤, 腮, 顋, 齶, 腭, 腭, \n    ',
  },
  {
    question: '掛け',
    answer: 'kake',
    explantion: '\n      汉字: 掛け\n      读音: かけ\n      意思: credit\n      来源: waller\n      同义词: , 懸け, 掛, 懸\n    ',
  },
  {
    question: '活発',
    answer: 'kappatsu',
    explantion: '\n      汉字: 活発\n      读音: かっぱつ\n      意思: vigor\n      来源:  active\n      同义词: 活発, 活溌\n    ',
  },
  {
    question: '滑らか',
    answer: 'nameraka',
    explantion: '\n      汉字: 滑らか\n      读音: なめらか\n      意思: smoothness\n      来源:  glassiness\n      同义词: 滑らか, 滑らか, 滑か, 滑か\n    ',
  },
  {
    question: '滑稽',
    answer: 'kokkei',
    explantion: '\n      汉字: 滑稽\n      读音: こっけい\n      意思: funny\n      来源:  humorous\n      同义词: 滑稽\n    ',
  },
  {
    question: '且つ',
    answer: 'katsu',
    explantion: '\n      汉字: 且つ\n      读音: かつ\n      意思: yet\n      来源:  and\n      同义词: 且つ, , 且\n    ',
  },
  {
    question: '叶う',
    answer: 'kanau',
    explantion: '\n      汉字: 叶う\n      读音: かなう\n      意思: to come true (wish)\n      来源: waller\n      同义词: 適う, 敵う\n    ',
  },
  {
    question: '叶える',
    answer: 'kanaeru',
    explantion: '\n      汉字: 叶える\n      读音: かなえる\n      意思: to grant (request wish)\n      来源: waller\n      同义词: 適える\n    ',
  },
  {
    question: '株式',
    answer: 'kabushiki',
    explantion: '\n      汉字: 株式\n      读音: かぶしき\n      意思: stock (company)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '噛み切る',
    answer: 'kamikiru',
    explantion: '\n      汉字: 噛み切る\n      读音: かみきる\n      意思: to bite off\n      来源:  to gnaw through\n      同义词: 噛み切る, かみ切る\n    ',
  },
  {
    question: '粥',
    answer: 'kayu',
    explantion: '\n      汉字: 粥\n      读音: かゆ\n      意思: (rice) gruel\n      来源: waller\n      同义词: 粥, 粥\n    ',
  },
  {
    question: '乾',
    answer: 'hoshi',
    explantion: '\n      汉字: 乾\n      读音: ほし\n      意思: dried\n      来源:  cured\n      同义词: 乾, 干し, 乾し, 干\n    ',
  },
  {
    question: '干し物',
    answer: 'hoshimono',
    explantion: '\n      汉字: 干し物\n      读音: ほしもの\n      意思: dried washing (clothes)\n      来源: waller\n      同义词: 乾し物, 干物, 乾物\n    ',
  },
  {
    question: '寒気',
    answer: 'kanki',
    explantion: '\n      汉字: 寒気\n      读音: かんき\n      意思: cold\n      来源:  frost\n      同义词: 寒気, 寒気, 寒け\n    ',
  },
  {
    question: '刊行',
    answer: 'kanko',
    explantion: '\n      汉字: 刊行\n      读音: かんこう\n      意思: publication\n      来源:  issue\n      同义词: 刊行\n    ',
  },
  {
    question: '勘弁',
    answer: 'kamben',
    explantion: '\n      汉字: 勘弁\n      读音: かんべん\n      意思: pardon\n      来源:  forgiveness\n      同义词: 勘弁\n    ',
  },
  {
    question: '勧め',
    answer: 'susume',
    explantion: '\n      汉字: 勧め\n      读音: すすめ\n      意思: recommendation\n      来源:  advice\n      同义词: 勧め, 薦め, 奨め\n    ',
  },
  {
    question: '勧告',
    answer: 'kankoku',
    explantion: '\n      汉字: 勧告\n      读音: かんこく\n      意思: advice\n      来源:  counsel\n      同义词: 勧告\n    ',
  },
  {
    question: '勧誘',
    answer: 'kanyuu',
    explantion: '\n      汉字: 勧誘\n      读音: かんゆう\n      意思: invitation\n      来源:  solicitation\n      同义词: 勧誘\n    ',
  },
  {
    question: '巻',
    answer: 'maki',
    explantion: '\n      汉字: 巻\n      读音: まき\n      意思: volume\n      来源: waller\n      同义词: 巻き\n    ',
  },
  {
    question: '耐える',
    answer: 'taeru',
    explantion: '\n      汉字: 耐える\n      读音: たえる\n      意思: to bear\n      来源:  to endure\n      同义词: 耐える, 堪える\n    ',
  },
  {
    question: '堪らない',
    answer: 'tamaranai',
    explantion: '\n      汉字: 堪らない\n      读音: たまらない\n      意思: intolerable\n      来源:  unbearable\n      同义词: 堪らない\n    ',
  },
  {
    question: '喧しい',
    answer: 'yakamashii',
    explantion: '\n      汉字: 喧しい\n      读音: やかましい\n      意思: noisy\n      来源:  strict\n      同义词: 喧しい\n    ',
  },
  {
    question: '官僚',
    answer: 'kanryo',
    explantion: '\n      汉字: 官僚\n      读音: かんりょう\n      意思: bureaucrat\n      来源:  bureaucracy\n      同义词: 官僚\n    ',
  },
  {
    question: '寛容',
    answer: 'kanyo',
    explantion: '\n      汉字: 寛容\n      读音: かんよう\n      意思: forbearance\n      来源:  tolerance\n      同义词: 寛容\n    ',
  },
  {
    question: '干渉',
    answer: 'kansho',
    explantion: '\n      汉字: 干渉\n      读音: かんしょう\n      意思: interference\n      来源:  intervention\n      同义词: 干渉, 関渉\n    ',
  },
  {
    question: '幹線',
    answer: 'kansen',
    explantion: '\n      汉字: 幹線\n      读音: かんせん\n      意思: main line\n      来源:  trunk line\n      同义词: 幹線\n    ',
  },
  {
    question: '幹部',
    answer: 'kanbu',
    explantion: '\n      汉字: 幹部\n      读音: かんぶ\n      意思: management\n      来源:  (executive) staff\n      同义词: 幹部\n    ',
  },
  {
    question: '感慨',
    answer: 'kangai',
    explantion: '\n      汉字: 感慨\n      读音: かんがい\n      意思: strong feelings\n      来源:  deep emotion\n      同义词: 感慨\n    ',
  },
  {
    question: '感触',
    answer: 'kanshoku',
    explantion: '\n      汉字: 感触\n      读音: かんしょく\n      意思: sense of touch\n      来源:  feeling\n      同义词: 感触\n    ',
  },
  {
    question: '感染',
    answer: 'kansen',
    explantion: '\n      汉字: 感染\n      读音: かんせん\n      意思: infection\n      来源:  contagion\n      同义词: 感染\n    ',
  },
  {
    question: '感度',
    answer: 'kando',
    explantion: '\n      汉字: 感度\n      读音: かんど\n      意思: sensitivity\n      来源:  severity (quake)\n      同义词: 感度\n    ',
  },
  {
    question: '感無量',
    answer: 'kanmuryou',
    explantion: '\n      汉字: 感無量\n      读音: かんむりょう\n      意思: deep feeling\n      来源:  inexpressible feeling\n      同义词: 感無量\n    ',
  },
  {
    question: '慣らす',
    answer: 'narasu',
    explantion: '\n      汉字: 慣らす\n      读音: ならす\n      意思: to accustom\n      来源: waller\n      同义词: 馴らす\n    ',
  },
  {
    question: '慣れ',
    answer: 'nare',
    explantion: '\n      汉字: 慣れ\n      读音: なれ\n      意思: practice\n      来源:  experience\n      同义词: 慣れ\n    ',
  },
  {
    question: '慣行',
    answer: 'kanko',
    explantion: '\n      汉字: 慣行\n      读音: かんこう\n      意思: customary practice\n      来源:  habit\n      同义词: 慣行\n    ',
  },
  {
    question: '慣習',
    answer: 'kanshu',
    explantion: '\n      汉字: 慣習\n      读音: かんしゅう\n      意思: usual (historical) custom\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '慣用',
    answer: 'kanyo',
    explantion: '\n      汉字: 慣用\n      读音: かんよう\n      意思: common\n      来源:  customary\n      同义词: 慣用\n    ',
  },
  {
    question: '慣例',
    answer: 'kanrei',
    explantion: '\n      汉字: 慣例\n      读音: かんれい\n      意思: custom\n      来源:  precedent\n      同义词: 慣例\n    ',
  },
  {
    question: '換算',
    answer: 'kansan',
    explantion: '\n      汉字: 換算\n      读音: かんさん\n      意思: conversion\n      来源:  change\n      同义词: 換算, 換算\n    ',
  },
  {
    question: '敢えて',
    answer: 'aete',
    explantion: '\n      汉字: 敢えて\n      读音: あえて\n      意思: dare (to do)\n      来源:  challenge (to do)\n      同义词: 敢えて, , 敢て\n    ',
  },
  {
    question: '歓声',
    answer: 'kansei',
    explantion: '\n      汉字: 歓声\n      读音: かんせい\n      意思: cheer\n      来源:  shout of joy\n      同义词: 歓声\n    ',
  },
  {
    question: '漢語',
    answer: 'kango',
    explantion: '\n      汉字: 漢語\n      读音: かんご\n      意思: Chinese word\n      来源:  Sino-Japanese word\n      同义词: 漢語\n    ',
  },
  {
    question: '甘える',
    answer: 'amaeru',
    explantion: '\n      汉字: 甘える\n      读音: あまえる\n      意思: to behave like a spoiled child\n      来源:  to fawn on\n      同义词: 甘える\n    ',
  },
  {
    question: '甘口',
    answer: 'amakuchi',
    explantion: '\n      汉字: 甘口\n      读音: あまくち\n      意思: sweet flavour\n      来源:  mildness\n      同义词: 甘口\n    ',
  },
  {
    question: '監視',
    answer: 'kanshi',
    explantion: '\n      汉字: 監視\n      读音: かんし\n      意思: observation\n      来源:  guarding\n      同义词: 監視\n    ',
  },
  {
    question: '看護',
    answer: 'kango',
    explantion: '\n      汉字: 看護\n      读音: かんご\n      意思: nursing\n      来源:  (army) nurse\n      同义词: 看護\n    ',
  },
  {
    question: '竿',
    answer: 'sao',
    explantion: '\n      汉字: 竿\n      读音: さお\n      意思: rod\n      来源:  pole (e.g. for drying laundry)\n      同义词: 竿, 棹\n    ',
  },
  {
    question: '簡易',
    answer: 'kani',
    explantion: '\n      汉字: 簡易\n      读音: かんい\n      意思: simplicity\n      来源:  easiness\n      同义词: 簡易\n    ',
  },
  {
    question: '簡潔',
    answer: 'kanketsu',
    explantion: '\n      汉字: 簡潔\n      读音: かんけつ\n      意思: brevity\n      来源:  conciseness\n      同义词: 簡潔\n    ',
  },
  {
    question: '簡素',
    answer: 'kanso',
    explantion: '\n      汉字: 簡素\n      读音: かんそ\n      意思: simplicity\n      来源:  plain\n      同义词: 簡素\n    ',
  },
  {
    question: '緩む',
    answer: 'yurumu',
    explantion: '\n      汉字: 緩む\n      读音: ゆるむ\n      意思: to become loose\n      来源:  to slacken\n      同义词: 緩む, 弛む\n    ',
  },
  {
    question: '緩める',
    answer: 'yurumeru',
    explantion: '\n      汉字: 緩める\n      读音: ゆるめる\n      意思: to loosen\n      来源:  to slow down\n      同义词: 緩める, 弛める\n    ',
  },
  {
    question: '緩やか',
    answer: 'yuruyaka',
    explantion: '\n      汉字: 緩やか\n      读音: ゆるやか\n      意思: lenient\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '緩和',
    answer: 'kanwa',
    explantion: '\n      汉字: 緩和\n      读音: かんわ\n      意思: relief\n      来源:  mitigation\n      同义词: 緩和\n    ',
  },
  {
    question: '観',
    answer: 'kan',
    explantion: '\n      汉字: 観\n      读音: かん\n      意思: look\n      来源:  appearance\n      同义词: 観\n    ',
  },
  {
    question: '観衆',
    answer: 'kanshu',
    explantion: '\n      汉字: 観衆\n      读音: かんしゅう\n      意思: spectators\n      来源:  onlookers\n      同义词: 観衆\n    ',
  },
  {
    question: '観点',
    answer: 'kanten',
    explantion: '\n      汉字: 観点\n      读音: かんてん\n      意思: point of view\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '観覧',
    answer: 'kanran',
    explantion: '\n      汉字: 観覧\n      读音: かんらん\n      意思: viewing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '貫く',
    answer: 'tsuranuku',
    explantion: '\n      汉字: 貫く\n      读音: つらぬく\n      意思: to go through\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '貫禄',
    answer: 'kanroku',
    explantion: '\n      汉字: 貫禄\n      读音: かんろく\n      意思: presence\n      来源:  dignity\n      同义词: 貫禄, 貫録\n    ',
  },
  {
    question: '還元',
    answer: 'kangen',
    explantion: '\n      汉字: 還元\n      读音: かんげん\n      意思: resolution\n      来源:  reduction\n      同义词: 還元\n    ',
  },
  {
    question: '還暦',
    answer: 'kanreki',
    explantion: '\n      汉字: 還暦\n      读音: かんれき\n      意思: 60th birthday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '間もなく',
    answer: 'mamonaku',
    explantion: '\n      汉字: 間もなく\n      读音: まもなく\n      意思: soon\n      来源:  before long\n      同义词: 間もなく\n    ',
  },
  {
    question: '間柄',
    answer: 'aidagara',
    explantion: '\n      汉字: 間柄\n      读音: あいだがら\n      意思: relation(ship)\n      来源: waller\n      同义词: 間がら\n    ',
  },
  {
    question: '関税',
    answer: 'kanzei',
    explantion: '\n      汉字: 関税\n      读音: かんぜい\n      意思: customs\n      来源:  duty\n      同义词: 関税\n    ',
  },
  {
    question: '関与',
    answer: 'kanyo',
    explantion: '\n      汉字: 関与\n      读音: かんよ\n      意思: participation\n      来源:  taking part in\n      同义词: 関与, 干与\n    ',
  },
  {
    question: '館',
    answer: 'tachi',
    explantion: '\n      汉字: 館\n      读音: たち\n      意思: 1. mansion\n      来源:  small castle\n      同义词: 館, 館, 館, 屋形\n    ',
  },
  {
    question: '丸っきり',
    answer: 'marukkiri',
    explantion: '\n      汉字: 丸っきり\n      读音: まるっきり\n      意思: completely\n      来源:  perfectly\n      同义词: 丸っきり, , 丸っ切り\n    ',
  },
  {
    question: '丸で',
    answer: 'marude',
    explantion: '\n      汉字: 丸で\n      读音: まるで\n      意思: quite\n      来源:  entirely\n      同义词: 丸で\n    ',
  },
  {
    question: '丸める',
    answer: 'marumeru',
    explantion: '\n      汉字: 丸める\n      读音: まるめる\n      意思: to make round\n      来源:  to round off\n      同义词: 丸める\n    ',
  },
  {
    question: '丸ごと',
    answer: 'marugoto',
    explantion: '\n      汉字: 丸ごと\n      读音: まるごと\n      意思: in its entirety\n      来源:  whole\n      同义词: 丸ごと, , 丸事, 丸毎\n    ',
  },
  {
    question: '玩具',
    answer: 'omocha',
    explantion: '\n      汉字: 玩具\n      读音: おもちゃ\n      意思: toy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '癌',
    answer: 'gan',
    explantion: '\n      汉字: 癌\n      读音: がん\n      意思: cancer\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '眼科',
    answer: 'ganka',
    explantion: '\n      汉字: 眼科\n      读音: がんか\n      意思: ophthalmology\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '眼球',
    answer: 'gankyu',
    explantion: '\n      汉字: 眼球\n      读音: がんきゅう\n      意思: eyeball\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '岩石',
    answer: 'ganseki',
    explantion: '\n      汉字: 岩石\n      读音: がんせき\n      意思: rock\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '頑固',
    answer: 'ganko',
    explantion: '\n      汉字: 頑固\n      读音: がんこ\n      意思: stubbornness\n      来源:  obstinacy\n      同义词: 頑固\n    ',
  },
  {
    question: '頑丈',
    answer: 'ganjiyou',
    explantion: '\n      汉字: 頑丈\n      读音: がんじょう\n      意思: solid\n      来源:  firm\n      同义词: 頑丈, 岩乗\n    ',
  },
  {
    question: '顔付き',
    answer: 'kaotsuki',
    explantion: '\n      汉字: 顔付き\n      读音: かおつき\n      意思: (outward) looks\n      来源:  features\n      同义词: 顔付き, 顔つき, 顔付\n    ',
  },
  {
    question: '願書',
    answer: 'gansho',
    explantion: '\n      汉字: 願書\n      读音: がんしょ\n      意思: written application or petition\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '企画',
    answer: 'kikaku',
    explantion: '\n      汉字: 企画\n      读音: きかく\n      意思: planning\n      来源:  project\n      同义词: 企画, 企劃\n    ',
  },
  {
    question: '危ぶむ',
    answer: 'ayabumu',
    explantion: '\n      汉字: 危ぶむ\n      读音: あやぶむ\n      意思: to fear\n      来源:  to have misgivings\n      同义词: 危ぶむ\n    ',
  },
  {
    question: '危害',
    answer: 'kigai',
    explantion: '\n      汉字: 危害\n      读音: きがい\n      意思: injury\n      来源:  harm\n      同义词: 危害\n    ',
  },
  {
    question: '危機',
    answer: 'kiki',
    explantion: '\n      汉字: 危機\n      读音: きき\n      意思: crisis\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '喜劇',
    answer: 'kigeki',
    explantion: '\n      汉字: 喜劇\n      读音: きげき\n      意思: comedy\n      来源:  funny show\n      同义词: 喜劇\n    ',
  },
  {
    question: '器',
    answer: 'utsuwa',
    explantion: '\n      汉字: 器\n      读音: うつわ\n      意思: bowl\n      来源:  vessel\n      同义词: 器\n    ',
  },
  {
    question: '器官',
    answer: 'kikan',
    explantion: '\n      汉字: 器官\n      读音: きかん\n      意思: organ (of body)\n      来源:  instrument\n      同义词: 器官\n    ',
  },
  {
    question: '基金',
    answer: 'kikin',
    explantion: '\n      汉字: 基金\n      读音: ききん\n      意思: fund\n      来源:  foundation\n      同义词: 基金\n    ',
  },
  {
    question: '奇数',
    answer: 'kisu',
    explantion: '\n      汉字: 奇数\n      读音: きすう\n      意思: odd number\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '寄与',
    answer: 'kiyo',
    explantion: '\n      汉字: 寄与\n      读音: きよ\n      意思: contribution\n      来源:  service\n      同义词: 寄与\n    ',
  },
  {
    question: '幾多',
    answer: 'ikuta',
    explantion: '\n      汉字: 幾多\n      读音: いくた\n      意思: many\n      来源:  numerous\n      同义词: 幾多\n    ',
  },
  {
    question: '既婚',
    answer: 'kikon',
    explantion: '\n      汉字: 既婚\n      读音: きこん\n      意思: marriage\n      来源:  married\n      同义词: 既婚\n    ',
  },
  {
    question: '期',
    answer: 'ki',
    explantion: '\n      汉字: 期\n      读音: き\n      意思: period\n      来源:  time\n      同义词: 期\n    ',
  },
  {
    question: '期日',
    answer: 'kijitsu',
    explantion: '\n      汉字: 期日\n      读音: きじつ\n      意思: fixed date\n      来源:  settlement date\n      同义词: 期日, 期日, 期日\n    ',
  },
  {
    question: '期末',
    answer: 'kimatsu',
    explantion: '\n      汉字: 期末\n      读音: きまつ\n      意思: end of term\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '棄権',
    answer: 'kiken',
    explantion: '\n      汉字: 棄権\n      读音: きけん\n      意思: abstain from voting\n      来源:  renunciation of a right\n      同义词: 棄権\n    ',
  },
  {
    question: '機',
    answer: 'hata',
    explantion: '\n      汉字: 機\n      读音: はた\n      意思: loom\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '機構',
    answer: 'kiko',
    explantion: '\n      汉字: 機構\n      读音: きこう\n      意思: mechanism\n      来源:  organization\n      同义词: 機構\n    ',
  },
  {
    question: '帰京',
    answer: 'kikyo',
    explantion: '\n      汉字: 帰京\n      读音: ききょう\n      意思: returning to Tokyo\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '気楽',
    answer: 'kiraku',
    explantion: '\n      汉字: 気楽\n      读音: きらく\n      意思: at ease\n      来源:  comfortable\n      同义词: 気楽\n    ',
  },
  {
    question: '気軽',
    answer: 'kigaru',
    explantion: '\n      汉字: 気軽\n      读音: きがる\n      意思: cheerful\n      来源:  buoyant\n      同义词: 気軽\n    ',
  },
  {
    question: '気兼ね',
    answer: 'kigane',
    explantion: '\n      汉字: 気兼ね\n      读音: きがね\n      意思: hesitance\n      来源:  diffidence\n      同义词: 気兼ね, 気がね\n    ',
  },
  {
    question: '気質',
    answer: 'katagi',
    explantion: '\n      汉字: 気質\n      读音: かたぎ\n      意思: spirit\n      来源:  character\n      同义词: 気質, 気質, 形気, 容気\n    ',
  },
  {
    question: '気象',
    answer: 'kisho',
    explantion: '\n      汉字: 気象\n      读音: きしょう\n      意思: weather\n      来源:  climate\n      同义词: 気象, 氣象\n    ',
  },
  {
    question: '気障',
    answer: 'kiza',
    explantion: '\n      汉字: 気障\n      读音: きざ\n      意思: affectation\n      来源:  conceit\n      同义词: 気障, , \n    ',
  },
  {
    question: '気触れる',
    answer: 'kabureru',
    explantion: '\n      汉字: 気触れる\n      读音: かぶれる\n      意思: to react to\n      来源:  to be influenced by\n      同义词: 気触れる, \n    ',
  },
  {
    question: '気配',
    answer: 'kihai',
    explantion: '\n      汉字: 気配\n      读音: きはい\n      意思: indication\n      来源:  market trend\n      同义词: 気配\n    ',
  },
  {
    question: '気品',
    answer: 'kihin',
    explantion: '\n      汉字: 気品\n      读音: きひん\n      意思: aroma\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '気風',
    answer: 'kifu',
    explantion: '\n      汉字: 気風\n      读音: きふう\n      意思: character\n      来源:  traits\n      同义词: 気風\n    ',
  },
  {
    question: '気立て',
    answer: 'kidate',
    explantion: '\n      汉字: 気立て\n      读音: きだて\n      意思: disposition\n      来源:  nature\n      同义词: 気立て, 気だて, 気立\n    ',
  },
  {
    question: '気流',
    answer: 'kiryu',
    explantion: '\n      汉字: 気流\n      读音: きりゅう\n      意思: atmospheric current\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '汽船',
    answer: 'kisen',
    explantion: '\n      汉字: 汽船\n      读音: きせん\n      意思: steamship\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '祈り',
    answer: 'inori',
    explantion: '\n      汉字: 祈り\n      读音: いのり\n      意思: prayer\n      来源:  supplication\n      同义词: 祈り, 祷り\n    ',
  },
  {
    question: '季刊',
    answer: 'kikan',
    explantion: '\n      汉字: 季刊\n      读音: きかん\n      意思: quarterly (e.g. magazine)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '規格',
    answer: 'kikaku',
    explantion: '\n      汉字: 規格\n      读音: きかく\n      意思: standard\n      来源:  norm\n      同义词: 規格\n    ',
  },
  {
    question: '規制',
    answer: 'kisei',
    explantion: '\n      汉字: 規制\n      读音: きせい\n      意思: regulation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '規定',
    answer: 'kitei',
    explantion: '\n      汉字: 規定\n      读音: きてい\n      意思: regulation\n      来源:  provisions\n      同义词: 規定\n    ',
  },
  {
    question: '規模',
    answer: 'kibo',
    explantion: '\n      汉字: 規模\n      读音: きぼ\n      意思: scale\n      来源:  scope\n      同义词: 規模\n    ',
  },
  {
    question: '規約',
    answer: 'kiyaku',
    explantion: '\n      汉字: 規約\n      读音: きやく\n      意思: agreement\n      来源:  rules\n      同义词: 規約\n    ',
  },
  {
    question: '記す',
    answer: 'shirusu',
    explantion: '\n      汉字: 記す\n      读音: しるす\n      意思: to note\n      来源:  to write down\n      同义词: 記す, 記す, 誌す, 識す\n    ',
  },
  {
    question: '記載',
    answer: 'kisai',
    explantion: '\n      汉字: 記載\n      读音: きさい\n      意思: mention\n      来源:  entry\n      同义词: 記載\n    ',
  },
  {
    question: '記述',
    answer: 'kijiyutsu',
    explantion: '\n      汉字: 記述\n      读音: きじゅつ\n      意思: describing\n      来源:  descriptor\n      同义词: 記述\n    ',
  },
  {
    question: '記名',
    answer: 'kimei',
    explantion: '\n      汉字: 記名\n      读音: きめい\n      意思: signature\n      来源:  register\n      同义词: 記名\n    ',
  },
  {
    question: '貴族',
    answer: 'kizoku',
    explantion: '\n      汉字: 貴族\n      读音: きぞく\n      意思: noble\n      来源:  aristocrat\n      同义词: 貴族\n    ',
  },
  {
    question: '貴女',
    answer: 'anata',
    explantion: '\n      汉字: 貴女\n      读音: あなた\n      意思: you\n      来源:  lady\n      同义词: 貴女\n    ',
  },
  {
    question: '起こす',
    answer: 'okosu',
    explantion: '\n      汉字: 起こす\n      读音: おこす\n      意思: to raise\n      来源:  to cause\n      同义词: 起こす\n    ',
  },
  {
    question: '起点',
    answer: 'kiten',
    explantion: '\n      汉字: 起点\n      读音: きてん\n      意思: starting point\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '起伏',
    answer: 'kifuku',
    explantion: '\n      汉字: 起伏\n      读音: きふく\n      意思: undulation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '軌道',
    answer: 'kido',
    explantion: '\n      汉字: 軌道\n      读音: きどう\n      意思: orbit\n      来源:  railroad track\n      同义词: 軌道\n    ',
  },
  {
    question: '偽造',
    answer: 'gizou',
    explantion: '\n      汉字: 偽造\n      读音: ぎぞう\n      意思: forgery\n      来源:  falsification\n      同义词: 偽造\n    ',
  },
  {
    question: '戯曲',
    answer: 'gikyoku',
    explantion: '\n      汉字: 戯曲\n      读音: ぎきょく\n      意思: play\n      来源:  drama\n      同义词: 戯曲\n    ',
  },
  {
    question: '技',
    answer: 'waza',
    explantion: '\n      汉字: 技\n      读音: わざ\n      意思: art\n      来源:  technique\n      同义词: 技, 技, 伎, 伎\n    ',
  },
  {
    question: '技能',
    answer: 'ginou',
    explantion: '\n      汉字: 技能\n      读音: ぎのう\n      意思: technical skill\n      来源:  ability\n      同义词: 技能, 伎能\n    ',
  },
  {
    question: '欺く',
    answer: 'azamuku',
    explantion: '\n      汉字: 欺く\n      读音: あざむく\n      意思: to deceive\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '犠牲',
    answer: 'gisei',
    explantion: '\n      汉字: 犠牲\n      读音: ぎせい\n      意思: sacrifice\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '疑惑',
    answer: 'giwaku',
    explantion: '\n      汉字: 疑惑\n      读音: ぎわく\n      意思: doubt\n      来源:  misgivings\n      同义词: 疑惑\n    ',
  },
  {
    question: '義理',
    answer: 'giri',
    explantion: '\n      汉字: 義理\n      读音: ぎり\n      意思: duty\n      来源:  sense of duty\n      同义词: 義理\n    ',
  },
  {
    question: '議案',
    answer: 'gian',
    explantion: '\n      汉字: 議案\n      读音: ぎあん\n      意思: legislative bill\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '議決',
    answer: 'giketsu',
    explantion: '\n      汉字: 議決\n      读音: ぎけつ\n      意思: resolution\n      来源:  decision\n      同义词: 議決\n    ',
  },
  {
    question: '議事堂',
    answer: 'gijidou',
    explantion: '\n      汉字: 議事堂\n      读音: ぎじどう\n      意思: Diet building\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '議題',
    answer: 'gidai',
    explantion: '\n      汉字: 議題\n      读音: ぎだい\n      意思: topic of discussion\n      来源:  agenda\n      同义词: 議題\n    ',
  },
  {
    question: '掬う',
    answer: 'sukuu',
    explantion: '\n      汉字: 掬う\n      读音: すくう\n      意思: to scoop\n      来源:  to ladle out\n      同义词: 掬う, , 抄う\n    ',
  },
  {
    question: '鞠',
    answer: 'mari',
    explantion: '\n      汉字: 鞠\n      读音: まり\n      意思: ball\n      来源: waller\n      同义词: 毬, 球\n    ',
  },
  {
    question: '吃驚',
    answer: 'bikkuri',
    explantion: '\n      汉字: 吃驚\n      读音: びっくり\n      意思: be surprised\n      来源:  be amazed\n      同义词: 吃驚\n    ',
  },
  {
    question: '喫茶',
    answer: 'kitsusa',
    explantion: '\n      汉字: 喫茶\n      读音: きっさ\n      意思: tea drinking\n      来源:  tea house\n      同义词: 喫茶\n    ',
  },
  {
    question: '詰る',
    answer: 'najiru',
    explantion: '\n      汉字: 詰る\n      读音: なじる\n      意思: to rebuke\n      来源:  to scold\n      同义词: 詰る, \n    ',
  },
  {
    question: '客観',
    answer: 'kyakkan',
    explantion: '\n      汉字: 客観\n      读音: きゃっかん\n      意思: objective\n      来源: waller\n      同义词: 客観, 客観\n    ',
  },
  {
    question: '脚色',
    answer: 'kyakushoku',
    explantion: '\n      汉字: 脚色\n      读音: きゃくしょく\n      意思: dramatization (e.g. film)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '脚本',
    answer: 'kyakuhon',
    explantion: '\n      汉字: 脚本\n      读音: きゃくほん\n      意思: scenario\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '逆転',
    answer: 'gyakuten',
    explantion: '\n      汉字: 逆転\n      读音: ぎゃくてん\n      意思: (sudden) change\n      来源:  reversal\n      同义词: 逆転, 逆点\n    ',
  },
  {
    question: '逆立ち',
    answer: 'sakadachi',
    explantion: '\n      汉字: 逆立ち\n      读音: さかだち\n      意思: handstand\n      来源:  headstand\n      同义词: 逆立ち\n    ',
  },
  {
    question: '丘陵',
    answer: 'kyuryo',
    explantion: '\n      汉字: 丘陵\n      读音: きゅうりょう\n      意思: hill\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '久しい',
    answer: 'hisashii',
    explantion: '\n      汉字: 久しい\n      读音: ひさしい\n      意思: long\n      来源:  long-continued\n      同义词: 久しい\n    ',
  },
  {
    question: '久し振り',
    answer: 'hisashiburi',
    explantion: '\n      汉字: 久し振り\n      读音: ひさしぶり\n      意思: after a long time\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '休める',
    answer: 'yasumeru',
    explantion: '\n      汉字: 休める\n      读音: やすめる\n      意思: to rest\n      来源:  to suspend\n      同义词: 休める\n    ',
  },
  {
    question: '休学',
    answer: 'kyugaku',
    explantion: '\n      汉字: 休学\n      读音: きゅうがく\n      意思: temporary absence from school\n      来源:  suspension\n      同义词: 休学\n    ',
  },
  {
    question: '休戦',
    answer: 'kyusen',
    explantion: '\n      汉字: 休戦\n      读音: きゅうせん\n      意思: truce\n      来源:  armistice\n      同义词: 休戦\n    ',
  },
  {
    question: '及び',
    answer: 'oyobi',
    explantion: '\n      汉字: 及び\n      读音: および\n      意思: and\n      来源:  as well as\n      同义词: 及び, 及\n    ',
  },
  {
    question: '及ぶ',
    answer: 'oyobu',
    explantion: '\n      汉字: 及ぶ\n      读音: およぶ\n      意思: to reach\n      来源:  to come up to\n      同义词: 及ぶ\n    ',
  },
  {
    question: '宮殿',
    answer: 'kyuden',
    explantion: '\n      汉字: 宮殿\n      读音: きゅうでん\n      意思: palace\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '弓',
    answer: 'yumi',
    explantion: '\n      汉字: 弓\n      读音: ゆみ\n      意思: bow (and arrow)\n      来源: waller\n      同义词: 弓\n    ',
  },
  {
    question: '急かす',
    answer: 'sekasu',
    explantion: '\n      汉字: 急かす\n      读音: せかす\n      意思: to hurry\n      来源:  to urge on\n      同义词: 急かす\n    ',
  },
  {
    question: '救い',
    answer: 'sukui',
    explantion: '\n      汉字: 救い\n      读音: すくい\n      意思: help\n      来源:  aid\n      同义词: 救い\n    ',
  },
  {
    question: '救援',
    answer: 'kyuen',
    explantion: '\n      汉字: 救援\n      读音: きゅうえん\n      意思: relief\n      来源:  rescue\n      同义词: 救援\n    ',
  },
  {
    question: '救済',
    answer: 'kyusai',
    explantion: '\n      汉字: 救済\n      读音: きゅうさい\n      意思: relief\n      来源:  aid\n      同义词: 救済\n    ',
  },
  {
    question: '朽ちる',
    answer: 'kuchiru',
    explantion: '\n      汉字: 朽ちる\n      读音: くちる\n      意思: to rot\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '球根',
    answer: 'kyukon',
    explantion: '\n      汉字: 球根\n      读音: きゅうこん\n      意思: (plant) bulb\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '究極',
    answer: 'kyukyoku',
    explantion: '\n      汉字: 究極\n      读音: きゅうきょく\n      意思: ultimate\n      来源:  final\n      同义词: 究極, 窮極\n    ',
  },
  {
    question: '窮屈',
    answer: 'kyukutsu',
    explantion: '\n      汉字: 窮屈\n      读音: きゅうくつ\n      意思: narrow\n      来源:  tight\n      同义词: 窮屈\n    ',
  },
  {
    question: '窮乏',
    answer: 'kyubou',
    explantion: '\n      汉字: 窮乏\n      读音: きゅうぼう\n      意思: poverty\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '給う',
    answer: 'tamau',
    explantion: '\n      汉字: 給う\n      读音: たまう\n      意思: to receive\n      来源:  to grant\n      同义词: 給う, 賜う\n    ',
  },
  {
    question: '給仕',
    answer: 'kyuji',
    explantion: '\n      汉字: 給仕\n      读音: きゅうじ\n      意思: office boy (girl)\n      来源:  page\n      同义词: 給仕\n    ',
  },
  {
    question: '給食',
    answer: 'kyushoku',
    explantion: '\n      汉字: 給食\n      读音: きゅうしょく\n      意思: school lunch\n      来源:  providing a meal\n      同义词: 給食\n    ',
  },
  {
    question: '旧知',
    answer: 'kyuchi',
    explantion: '\n      汉字: 旧知\n      读音: きゅうち\n      意思: old friend\n      来源:  old friendship\n      同义词: 旧知\n    ',
  },
  {
    question: '居住',
    answer: 'kiyojuu',
    explantion: '\n      汉字: 居住\n      读音: きょじゅう\n      意思: residence\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '拒絶',
    answer: 'kiyozetsu',
    explantion: '\n      汉字: 拒絶\n      读音: きょぜつ\n      意思: refusal\n      来源:  rejection\n      同义词: 拒絶\n    ',
  },
  {
    question: '拒否',
    answer: 'kiyohi',
    explantion: '\n      汉字: 拒否\n      读音: きょひ\n      意思: denial\n      来源:  veto\n      同义词: 拒否\n    ',
  },
  {
    question: '許容',
    answer: 'kiyoyou',
    explantion: '\n      汉字: 許容\n      读音: きょよう\n      意思: permission\n      来源:  pardon\n      同义词: 許容\n    ',
  },
  {
    question: '距離',
    answer: 'kiyori',
    explantion: '\n      汉字: 距離\n      读音: きょり\n      意思: distance\n      来源:  range\n      同义词: 距離\n    ',
  },
  {
    question: '鋸',
    answer: 'nokogiri',
    explantion: '\n      汉字: 鋸\n      读音: のこぎり\n      意思: saw\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '漁船',
    answer: 'gyosen',
    explantion: '\n      汉字: 漁船\n      读音: ぎょせん\n      意思: fishing boat\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '漁村',
    answer: 'gyoson',
    explantion: '\n      汉字: 漁村\n      读音: ぎょそん\n      意思: fishing village\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '享受',
    answer: 'kyojiyu',
    explantion: '\n      汉字: 享受\n      读音: きょうじゅ\n      意思: reception\n      来源:  acceptance\n      同义词: 享受\n    ',
  },
  {
    question: '供する',
    answer: 'kyosuru',
    explantion: '\n      汉字: 供する\n      读音: きょうする\n      意思: offer\n      来源:  present\n      同义词: 供する\n    ',
  },
  {
    question: '共稼ぎ',
    answer: 'tomokasegi',
    explantion: '\n      汉字: 共稼ぎ\n      读音: ともかせぎ\n      意思: working together\n      来源:  (husband and wife) earning a living together\n      同义词: 共稼ぎ, 共かせぎ\n    ',
  },
  {
    question: '共学',
    answer: 'kyogaku',
    explantion: '\n      汉字: 共学\n      读音: きょうがく\n      意思: coeducation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '共感',
    answer: 'kyokan',
    explantion: '\n      汉字: 共感\n      读音: きょうかん\n      意思: sympathy\n      来源:  response\n      同义词: 共感\n    ',
  },
  {
    question: '共産',
    answer: 'kyosan',
    explantion: '\n      汉字: 共産\n      读音: きょうさん\n      意思: communism\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '共働き',
    answer: 'tomobataraki',
    explantion: '\n      汉字: 共働き\n      读音: ともばたらき\n      意思: dual income\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '共鳴',
    answer: 'kyomei',
    explantion: '\n      汉字: 共鳴\n      读音: きょうめい\n      意思: resonance\n      来源:  sympathy\n      同义词: 共鳴\n    ',
  },
  {
    question: '凶作',
    answer: 'kyosaku',
    explantion: '\n      汉字: 凶作\n      读音: きょうさく\n      意思: bad harvest\n      来源:  poor crop\n      同义词: 凶作\n    ',
  },
  {
    question: '協会',
    answer: 'kyokai',
    explantion: '\n      汉字: 協会\n      读音: きょうかい\n      意思: association\n      来源:  society\n      同义词: 協会\n    ',
  },
  {
    question: '協議',
    answer: 'kyogi',
    explantion: '\n      汉字: 協議\n      读音: きょうぎ\n      意思: conference\n      来源:  consultation\n      同义词: 協議\n    ',
  },
  {
    question: '協調',
    answer: 'kyochou',
    explantion: '\n      汉字: 協調\n      读音: きょうちょう\n      意思: co-operation\n      来源:  conciliation\n      同义词: 協調\n    ',
  },
  {
    question: '協定',
    answer: 'kyotei',
    explantion: '\n      汉字: 協定\n      读音: きょうてい\n      意思: arrangement\n      来源:  pact\n      同义词: 協定\n    ',
  },
  {
    question: '叫び',
    answer: 'sakebi',
    explantion: '\n      汉字: 叫び\n      读音: さけび\n      意思: shout\n      来源:  scream\n      同义词: 叫び\n    ',
  },
  {
    question: '境遇',
    answer: 'kyoguu',
    explantion: '\n      汉字: 境遇\n      读音: きょうぐう\n      意思: environment\n      来源:  circumstances\n      同义词: 境遇\n    ',
  },
  {
    question: '強いて',
    answer: 'shiite',
    explantion: '\n      汉字: 強いて\n      读音: しいて\n      意思: by force\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '強いる',
    answer: 'shiiru',
    explantion: '\n      汉字: 強いる\n      读音: しいる\n      意思: to force\n      来源:  to compel\n      同义词: 強いる\n    ',
  },
  {
    question: '強まる',
    answer: 'tsuyomaru',
    explantion: '\n      汉字: 強まる\n      读音: つよまる\n      意思: to get strong\n      来源:  to gain strength\n      同义词: 強まる\n    ',
  },
  {
    question: '強める',
    answer: 'tsuyomeru',
    explantion: '\n      汉字: 強める\n      读音: つよめる\n      意思: to strengthen\n      来源:  to emphasize\n      同义词: 強める\n    ',
  },
  {
    question: '強硬',
    answer: 'kyoko',
    explantion: '\n      汉字: 強硬\n      读音: きょうこう\n      意思: firm\n      来源:  vigorous\n      同义词: 強硬\n    ',
  },
  {
    question: '強行',
    answer: 'kyoko',
    explantion: '\n      汉字: 強行\n      读音: きょうこう\n      意思: forcing\n      来源:  enforcement\n      同义词: 強行\n    ',
  },
  {
    question: '強制',
    answer: 'kyosei',
    explantion: '\n      汉字: 強制\n      读音: きょうせい\n      意思: obligation\n      来源:  coercion\n      同义词: 強制\n    ',
  },
  {
    question: '強請る',
    answer: 'nedaru',
    explantion: '\n      汉字: 強請る\n      读音: ねだる\n      意思: to tease\n      来源:  to coax\n      同义词: 強請る, \n    ',
  },
  {
    question: '強烈',
    answer: 'kyoretsu',
    explantion: '\n      汉字: 強烈\n      读音: きょうれつ\n      意思: strong\n      来源:  intense\n      同义词: 強烈\n    ',
  },
  {
    question: '怯える',
    answer: 'obieru',
    explantion: '\n      汉字: 怯える\n      读音: おびえる\n      意思: to become frightened\n      来源:  to have a nightmare\n      同义词: 怯える, 脅える, 悸える\n    ',
  },
  {
    question: '恐らく',
    answer: 'osoraku',
    explantion: '\n      汉字: 恐らく\n      读音: おそらく\n      意思: perhaps\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '恐れ',
    answer: 'osore',
    explantion: '\n      汉字: 恐れ\n      读音: おそれ\n      意思: fear\n      来源:  horror\n      同义词: 恐れ, 虞, 畏れ, 怖れ\n    ',
  },
  {
    question: '恐れ入る',
    answer: 'osoreiru',
    explantion: '\n      汉字: 恐れ入る\n      读音: おそれいる\n      意思: to be filled with awe\n      来源:  to feel small\n      同义词: 恐れ入る, 畏れ入る\n    ',
  },
  {
    question: '教え',
    answer: 'oshie',
    explantion: '\n      汉字: 教え\n      读音: おしえ\n      意思: teachings\n      来源:  precept\n      同义词: 教え, 訓\n    ',
  },
  {
    question: '教員',
    answer: 'kyoin',
    explantion: '\n      汉字: 教員\n      读音: きょういん\n      意思: teaching staff\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '教科',
    answer: 'kyoka',
    explantion: '\n      汉字: 教科\n      读音: きょうか\n      意思: subject\n      来源:  curriculum\n      同义词: 教科\n    ',
  },
  {
    question: '教訓',
    answer: 'kyokun',
    explantion: '\n      汉字: 教訓\n      读音: きょうくん\n      意思: lesson\n      来源:  precept\n      同义词: 教訓\n    ',
  },
  {
    question: '教材',
    answer: 'kyozai',
    explantion: '\n      汉字: 教材\n      读音: きょうざい\n      意思: teaching materials\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '教習',
    answer: 'kyoshu',
    explantion: '\n      汉字: 教習\n      读音: きょうしゅう\n      意思: training\n      来源:  instruction\n      同义词: 教習\n    ',
  },
  {
    question: '教職',
    answer: 'kyoshoku',
    explantion: '\n      汉字: 教職\n      读音: きょうしょく\n      意思: teaching certificate\n      来源:  the teaching profession\n      同义词: 教職\n    ',
  },
  {
    question: '橋渡し',
    answer: 'hashiwatashi',
    explantion: '\n      汉字: 橋渡し\n      读音: はしわたし\n      意思: bridge building\n      来源:  mediation\n      同义词: 橋渡し\n    ',
  },
  {
    question: '況して',
    answer: 'mashite',
    explantion: '\n      汉字: 況して\n      读音: まして\n      意思: still more\n      来源:  still less (with neg. verb)\n      同义词: 況して, , 増して\n    ',
  },
  {
    question: '脅す',
    answer: 'odosu',
    explantion: '\n      汉字: 脅す\n      读音: おどす\n      意思: to threaten\n      来源:  to menace\n      同义词: 脅す, 威す, 嚇す\n    ',
  },
  {
    question: '脅迫',
    answer: 'kyohaku',
    explantion: '\n      汉字: 脅迫\n      读音: きょうはく\n      意思: threat\n      来源:  menace\n      同义词: 脅迫\n    ',
  },
  {
    question: '興じる',
    answer: 'kyojiru',
    explantion: '\n      汉字: 興じる\n      读音: きょうじる\n      意思: to amuse oneself\n      来源:  to make merry\n      同义词: 興じる\n    ',
  },
  {
    question: '興業',
    answer: 'kogyou',
    explantion: '\n      汉字: 興業\n      读音: こうぎょう\n      意思: industrial enterprise\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '興奮',
    answer: 'kofun',
    explantion: '\n      汉字: 興奮\n      读音: こうふん\n      意思: excitement\n      来源:  stimulation\n      同义词: 興奮, 昂奮, 亢奮\n    ',
  },
  {
    question: '郷愁',
    answer: 'kyoshu',
    explantion: '\n      汉字: 郷愁\n      读音: きょうしゅう\n      意思: nostalgia\n      来源:  homesickness\n      同义词: 郷愁\n    ',
  },
  {
    question: '郷里',
    answer: 'kyori',
    explantion: '\n      汉字: 郷里\n      读音: きょうり\n      意思: birth-place\n      来源:  home town\n      同义词: 郷里\n    ',
  },
  {
    question: '驚き',
    answer: 'odoroki',
    explantion: '\n      汉字: 驚き\n      读音: おどろき\n      意思: surprise\n      来源:  astonishment\n      同义词: 驚き, \n    ',
  },
  {
    question: '驚異',
    answer: 'kyoi',
    explantion: '\n      汉字: 驚異\n      读音: きょうい\n      意思: wonder\n      来源:  miracle\n      同义词: 驚異\n    ',
  },
  {
    question: '仰ぐ',
    answer: 'aogu',
    explantion: '\n      汉字: 仰ぐ\n      读音: あおぐ\n      意思: to look up (to)\n      来源:  to respect\n      同义词: 仰ぐ\n    ',
  },
  {
    question: '仰っしゃる',
    answer: 'ossharu',
    explantion: '\n      汉字: 仰っしゃる\n      读音: おっしゃる\n      意思: to say\n      来源:  to speak\n      同义词: 仰っしゃる\n    ',
  },
  {
    question: '凝らす',
    answer: 'kogorasu',
    explantion: '\n      汉字: 凝らす\n      读音: こごらす\n      意思: to freeze\n      来源:  to congeal\n      同义词: 凝らす\n    ',
  },
  {
    question: '凝る',
    answer: 'kogoru',
    explantion: '\n      汉字: 凝る\n      读音: こごる\n      意思: to congeal\n      来源:  to freeze\n      同义词: 凝る\n    ',
  },
  {
    question: '業',
    answer: 'gou',
    explantion: '\n      汉字: 業\n      读音: ごう\n      意思: Buddhist karma\n      来源:  actions committed in a former life\n      同义词: 業\n    ',
  },
  {
    question: '業者',
    answer: 'gyousha',
    explantion: '\n      汉字: 業者\n      读音: ぎょうしゃ\n      意思: trader\n      来源:  merchant\n      同义词: 業者\n    ',
  },
  {
    question: '業績',
    answer: 'gyouseki',
    explantion: '\n      汉字: 業績\n      读音: ぎょうせき\n      意思: achievement\n      来源:  performance\n      同义词: 業績\n    ',
  },
  {
    question: '業務',
    answer: 'gyoumu',
    explantion: '\n      汉字: 業務\n      读音: ぎょうむ\n      意思: business\n      来源:  affairs\n      同义词: 業務\n    ',
  },
  {
    question: '局限',
    answer: 'kyokugen',
    explantion: '\n      汉字: 局限\n      读音: きょくげん\n      意思: limit\n      来源:  localize\n      同义词: 局限\n    ',
  },
  {
    question: '曲',
    answer: 'kyoku',
    explantion: '\n      汉字: 曲\n      读音: きょく\n      意思: tune\n      来源:  piece of music\n      同义词: 曲\n    ',
  },
  {
    question: '曲がる',
    answer: 'magaru',
    explantion: '\n      汉字: 曲がる\n      读音: まがる\n      意思: to turn\n      来源:  to bend\n      同义词: 曲がる\n    ',
  },
  {
    question: '極めて',
    answer: 'kiwamete',
    explantion: '\n      汉字: 極めて\n      读音: きわめて\n      意思: exceedingly\n      来源:  extremely\n      同义词: 極めて\n    ',
  },
  {
    question: '極楽',
    answer: 'gokuraku',
    explantion: '\n      汉字: 極楽\n      读音: ごくらく\n      意思: paradise\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '極端',
    answer: 'kyokutan',
    explantion: '\n      汉字: 極端\n      读音: きょくたん\n      意思: extreme\n      来源:  extremity\n      同义词: 極端\n    ',
  },
  {
    question: '桐',
    answer: 'kiri',
    explantion: '\n      汉字: 桐\n      读音: きり\n      意思: paulownia tree\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '勤まる',
    answer: 'tsutomaru',
    explantion: '\n      汉字: 勤まる\n      读音: つとまる\n      意思: to be fit for\n      来源:  to be equal to\n      同义词: 勤まる, 務まる\n    ',
  },
  {
    question: '勤め先',
    answer: 'tsutomesaki',
    explantion: '\n      汉字: 勤め先\n      读音: つとめさき\n      意思: place of work\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '勤勉',
    answer: 'kinben',
    explantion: '\n      汉字: 勤勉\n      读音: きんべん\n      意思: industry\n      来源:  diligence\n      同义词: 勤勉\n    ',
  },
  {
    question: '勤務',
    answer: 'kinmu',
    explantion: '\n      汉字: 勤務\n      读音: きんむ\n      意思: service\n      来源:  duty\n      同义词: 勤務\n    ',
  },
  {
    question: '勤労',
    answer: 'kinro',
    explantion: '\n      汉字: 勤労\n      读音: きんろう\n      意思: labor\n      来源:  exertion\n      同义词: 勤労\n    ',
  },
  {
    question: '均衡',
    answer: 'kinkou',
    explantion: '\n      汉字: 均衡\n      读音: きんこう\n      意思: equilibrium\n      来源:  balance\n      同义词: 均衡\n    ',
  },
  {
    question: '禁じる',
    answer: 'kinjiru',
    explantion: '\n      汉字: 禁じる\n      读音: きんじる\n      意思: to prohibit\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '禁ずる',
    answer: 'kinzuru',
    explantion: '\n      汉字: 禁ずる\n      读音: きんずる\n      意思: to forbid\n      来源:  to suppress\n      同义词: 禁ずる\n    ',
  },
  {
    question: '禁物',
    answer: 'kinmotsu',
    explantion: '\n      汉字: 禁物\n      读音: きんもつ\n      意思: taboo\n      来源:  forbidden thing\n      同义词: 禁物\n    ',
  },
  {
    question: '緊急',
    answer: 'kinkyu',
    explantion: '\n      汉字: 緊急\n      读音: きんきゅう\n      意思: urgent\n      来源:  pressing\n      同义词: 緊急\n    ',
  },
  {
    question: '近付く',
    answer: 'chikazuku',
    explantion: '\n      汉字: 近付く\n      读音: ちかづく\n      意思: to approach\n      来源:  to get near\n      同义词: 近付く, 近づく, 近付く\n    ',
  },
  {
    question: '近眼',
    answer: 'kingan',
    explantion: '\n      汉字: 近眼\n      读音: きんがん\n      意思: nearsightedness\n      来源:  shortsightedness\n      同义词: 近眼, 近眼, 近目\n    ',
  },
  {
    question: '近郊',
    answer: 'kinkou',
    explantion: '\n      汉字: 近郊\n      读音: きんこう\n      意思: suburbs\n      来源:  outskirts\n      同义词: 近郊\n    ',
  },
  {
    question: '近視',
    answer: 'kinshi',
    explantion: '\n      汉字: 近視\n      读音: きんし\n      意思: shortsightedness\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '吟味',
    answer: 'ginmi',
    explantion: '\n      汉字: 吟味\n      读音: ぎんみ\n      意思: testing\n      来源:  scrutiny\n      同义词: 吟味\n    ',
  },
  {
    question: '区',
    answer: 'ku',
    explantion: '\n      汉字: 区\n      读音: く\n      意思: ward\n      来源:  district\n      同义词: 区\n    ',
  },
  {
    question: '区間',
    answer: 'kukan',
    explantion: '\n      汉字: 区間\n      读音: くかん\n      意思: section (of track etc)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '区切り',
    answer: 'kugiri',
    explantion: '\n      汉字: 区切り\n      读音: くぎり\n      意思: an end\n      来源:  a stop\n      同义词: 区切り, 句切り\n    ',
  },
  {
    question: '苦しめる',
    answer: 'kurushimeru',
    explantion: '\n      汉字: 苦しめる\n      读音: くるしめる\n      意思: to torment\n      来源:  to harass\n      同义词: 苦しめる\n    ',
  },
  {
    question: '駆けっこ',
    answer: 'kakekko',
    explantion: '\n      汉字: 駆けっこ\n      读音: かけっこ\n      意思: (foot) race\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '駆ける',
    answer: 'kakeru',
    explantion: '\n      汉字: 駆ける\n      读音: かける\n      意思: to run (race esp. horse)\n      来源:  to gallop\n      同义词: 駆ける, 駈ける\n    ',
  },
  {
    question: '駆け足',
    answer: 'kakeashi',
    explantion: '\n      汉字: 駆け足\n      读音: かけあし\n      意思: running fast\n      来源:  double time\n      同义词: 駆け足, 駆足, 駈け足, 駈足, かけ足\n    ',
  },
  {
    question: '愚か',
    answer: 'oroka',
    explantion: '\n      汉字: 愚か\n      读音: おろか\n      意思: foolish\n      来源:  stupid\n      同义词: 愚か\n    ',
  },
  {
    question: '愚痴',
    answer: 'guchi',
    explantion: '\n      汉字: 愚痴\n      读音: ぐち\n      意思: idle complaint\n      来源:  grumble\n      同义词: 愚痴, 愚癡\n    ',
  },
  {
    question: '空しい',
    answer: 'munashii',
    explantion: '\n      汉字: 空しい\n      读音: むなしい\n      意思: vacant\n      来源:  futile\n      同义词: 空しい, 虚しい\n    ',
  },
  {
    question: '空腹',
    answer: 'kuufuku',
    explantion: '\n      汉字: 空腹\n      读音: くうふく\n      意思: hunger\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '屈折',
    answer: 'kussetsu',
    explantion: '\n      汉字: 屈折\n      读音: くっせつ\n      意思: bending\n      来源:  indentation\n      同义词: 屈折\n    ',
  },
  {
    question: '君主',
    answer: 'kunshiyu',
    explantion: '\n      汉字: 君主\n      读音: くんしゅ\n      意思: ruler\n      来源:  monarch\n      同义词: 君主\n    ',
  },
  {
    question: '群',
    answer: 'gun',
    explantion: '\n      汉字: 群\n      读音: ぐん\n      意思: group (math)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '群がる',
    answer: 'muragaru',
    explantion: '\n      汉字: 群がる\n      读音: むらがる\n      意思: to swarm\n      来源:  to gather\n      同义词: 群がる, 叢がる, 簇がる\n    ',
  },
  {
    question: '軍艦',
    answer: 'gunkan',
    explantion: '\n      汉字: 軍艦\n      读音: ぐんかん\n      意思: warship\n      来源:  battleship\n      同义词: 軍艦\n    ',
  },
  {
    question: '軍事',
    answer: 'gunji',
    explantion: '\n      汉字: 軍事\n      读音: ぐんじ\n      意思: military affairs\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '軍備',
    answer: 'gumbi',
    explantion: '\n      汉字: 軍備\n      读音: ぐんび\n      意思: armaments\n      来源:  military preparations\n      同义词: 軍備\n    ',
  },
  {
    question: '軍服',
    answer: 'gumpuku',
    explantion: '\n      汉字: 軍服\n      读音: ぐんぷく\n      意思: military or naval uniform\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '傾ける',
    answer: 'katamukeru',
    explantion: '\n      汉字: 傾ける\n      读音: かたむける\n      意思: to incline\n      来源:  to list\n      同义词: 傾ける\n    ',
  },
  {
    question: '傾斜',
    answer: 'keisha',
    explantion: '\n      汉字: 傾斜\n      读音: けいしゃ\n      意思: inclination\n      来源:  slant\n      同义词: 傾斜\n    ',
  },
  {
    question: '刑',
    answer: 'kei',
    explantion: '\n      汉字: 刑\n      读音: けい\n      意思: penalty\n      来源:  sentence\n      同义词: 刑\n    ',
  },
  {
    question: '刑罰',
    answer: 'keibatsu',
    explantion: '\n      汉字: 刑罰\n      读音: けいばつ\n      意思: judgement\n      来源:  penalty\n      同义词: 刑罰\n    ',
  },
  {
    question: '契る',
    answer: 'chigiru',
    explantion: '\n      汉字: 契る\n      读音: ちぎる\n      意思: to pledge\n      来源:  to promise\n      同义词: 契る\n    ',
  },
  {
    question: '契機',
    answer: 'keiki',
    explantion: '\n      汉字: 契機\n      读音: けいき\n      意思: opportunity\n      来源:  chance\n      同义词: 契機\n    ',
  },
  {
    question: '形勢',
    answer: 'keisei',
    explantion: '\n      汉字: 形勢\n      读音: けいせい\n      意思: condition\n      来源:  situation\n      同义词: 形勢\n    ',
  },
  {
    question: '形成',
    answer: 'keisei',
    explantion: '\n      汉字: 形成\n      读音: けいせい\n      意思: formation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '形態',
    answer: 'keitai',
    explantion: '\n      汉字: 形態\n      读音: けいたい\n      意思: form\n      来源:  shape\n      同义词: 形態, 形体\n    ',
  },
  {
    question: '恵み',
    answer: 'megumi',
    explantion: '\n      汉字: 恵み\n      读音: めぐみ\n      意思: blessing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '恵む',
    answer: 'megumu',
    explantion: '\n      汉字: 恵む\n      读音: めぐむ\n      意思: to bless\n      来源:  to show mercy to\n      同义词: 恵む, 恤む\n    ',
  },
  {
    question: '掲げる',
    answer: 'kakageru',
    explantion: '\n      汉字: 掲げる\n      读音: かかげる\n      意思: to publish\n      来源:  to print\n      同义词: 掲げる\n    ',
  },
  {
    question: '掲載',
    answer: 'keisai',
    explantion: '\n      汉字: 掲載\n      读音: けいさい\n      意思: appearance (e.g. article in paper)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '携わる',
    answer: 'tazusawaru',
    explantion: '\n      汉字: 携わる\n      读音: たずさわる\n      意思: to participate\n      来源:  to take part\n      同义词: 携わる\n    ',
  },
  {
    question: '携帯',
    answer: 'keitai',
    explantion: '\n      汉字: 携帯\n      读音: けいたい\n      意思: carrying something\n      来源: waller\n      同义词: , , \n    ',
  },
  {
    question: '敬具',
    answer: 'keigu',
    explantion: '\n      汉字: 敬具\n      读音: けいぐ\n      意思: Sincerely yours\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '系',
    answer: 'kei',
    explantion: '\n      汉字: 系\n      读音: けい\n      意思: system\n      来源:  lineage\n      同义词: 系\n    ',
  },
  {
    question: '経る',
    answer: 'heru',
    explantion: '\n      汉字: 経る\n      读音: へる\n      意思: to pass\n      来源:  to elapse\n      同义词: 経る, 歴る\n    ',
  },
  {
    question: '経緯',
    answer: 'ikisatsu',
    explantion: '\n      汉字: 経緯\n      读音: いきさつ\n      意思: 1. details\n      来源:  whole story\n      同义词: 経緯, 経緯, 経緯, 経緯\n    ',
  },
  {
    question: '経過',
    answer: 'keika',
    explantion: '\n      汉字: 経過\n      读音: けいか\n      意思: passage\n      来源:  expiration\n      同义词: 経過\n    ',
  },
  {
    question: '経費',
    answer: 'keii',
    explantion: '\n      汉字: 経費\n      读音: けいひ\n      意思: expenses\n      来源:  cost\n      同义词: 経費\n    ',
  },
  {
    question: '経歴',
    answer: 'keireki',
    explantion: '\n      汉字: 経歴\n      读音: けいれき\n      意思: personal history\n      来源:  career\n      同义词: 経歴\n    ',
  },
  {
    question: '経路',
    answer: 'keiro',
    explantion: '\n      汉字: 経路\n      读音: けいろ\n      意思: course\n      来源:  route\n      同义词: 経路, 径路, 逕路\n    ',
  },
  {
    question: '継ぐ',
    answer: 'tsugu',
    explantion: '\n      汉字: 継ぐ\n      读音: つぐ\n      意思: to succeed\n      来源: waller\n      同义词: 嗣ぐ, 続ぐ, 襲ぐ\n    ',
  },
  {
    question: '継ぎ目',
    answer: 'tsugime',
    explantion: '\n      汉字: 継ぎ目\n      读音: つぎめ\n      意思: a joint\n      来源:  joining point\n      同义词: 継ぎ目, 継目\n    ',
  },
  {
    question: '茎',
    answer: 'kuki',
    explantion: '\n      汉字: 茎\n      读音: くき\n      意思: stalk\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '計器',
    answer: 'keiki',
    explantion: '\n      汉字: 計器\n      读音: けいき\n      意思: meter\n      来源:  gauge\n      同义词: 計器\n    ',
  },
  {
    question: '警戒',
    answer: 'keikai',
    explantion: '\n      汉字: 警戒\n      读音: けいかい\n      意思: warning\n      来源:  admonition\n      同义词: 警戒\n    ',
  },
  {
    question: '警部',
    answer: 'keibu',
    explantion: '\n      汉字: 警部\n      读音: けいぶ\n      意思: police inspector\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '軽快',
    answer: 'keikai',
    explantion: '\n      汉字: 軽快\n      读音: けいかい\n      意思: rhythmical (e.g. melody)\n      来源:  casual (e.g. dress)\n      同义词: 軽快\n    ',
  },
  {
    question: '軽減',
    answer: 'keigen',
    explantion: '\n      汉字: 軽減\n      读音: けいげん\n      意思: abatement\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '軽蔑',
    answer: 'keibetsu',
    explantion: '\n      汉字: 軽蔑\n      读音: けいべつ\n      意思: scorn\n      来源:  disdain\n      同义词: 軽蔑, 軽べつ\n    ',
  },
  {
    question: '軽率',
    answer: 'keisotsu',
    explantion: '\n      汉字: 軽率\n      读音: けいそつ\n      意思: rash\n      来源:  thoughtless\n      同义词: 軽率, 軽卒\n    ',
  },
  {
    question: '劇団',
    answer: 'gekidan',
    explantion: '\n      汉字: 劇団\n      读音: げきだん\n      意思: troupe\n      来源:  theatrical company\n      同义词: 劇団\n    ',
  },
  {
    question: '激励',
    answer: 'gekirei',
    explantion: '\n      汉字: 激励\n      读音: げきれい\n      意思: encouragement\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '欠く',
    answer: 'kaku',
    explantion: '\n      汉字: 欠く\n      读音: かく\n      意思: to lack\n      来源:  to break\n      同义词: 欠く, 闕く\n    ',
  },
  {
    question: '欠乏',
    answer: 'ketsubou',
    explantion: '\n      汉字: 欠乏\n      读音: けつぼう\n      意思: want\n      来源:  shortage\n      同义词: 欠乏\n    ',
  },
  {
    question: '決まり悪い',
    answer: 'kimariwarui',
    explantion: '\n      汉字: 決まり悪い\n      读音: きまりわるい\n      意思: feeling awkward\n      来源:  being ashamed\n      同义词: 決まり悪い, きまり悪い, 決り悪い, 極まり悪い\n    ',
  },
  {
    question: '決意',
    answer: 'ketsui',
    explantion: '\n      汉字: 決意\n      读音: けつい\n      意思: decision\n      来源:  determination\n      同义词: 決意\n    ',
  },
  {
    question: '決議',
    answer: 'ketsugi',
    explantion: '\n      汉字: 決議\n      读音: けつぎ\n      意思: resolution\n      来源:  vote\n      同义词: 決議\n    ',
  },
  {
    question: '決行',
    answer: 'kekko',
    explantion: '\n      汉字: 決行\n      读音: けっこう\n      意思: doing (with resolve)\n      来源:  carrying out (i.e. a plan)\n      同义词: 決行\n    ',
  },
  {
    question: '決算',
    answer: 'kessan',
    explantion: '\n      汉字: 決算\n      读音: けっさん\n      意思: balance sheet\n      来源:  settlement of accounts\n      同义词: 決算\n    ',
  },
  {
    question: '決勝',
    answer: 'kessho',
    explantion: '\n      汉字: 決勝\n      读音: けっしょう\n      意思: decision of a contest\n      来源:  finals (in sports)\n      同义词: 決勝\n    ',
  },
  {
    question: '決断',
    answer: 'ketsudan',
    explantion: '\n      汉字: 決断\n      读音: けつだん\n      意思: decision\n      来源:  determination\n      同义词: 決断\n    ',
  },
  {
    question: '結び',
    answer: 'musubi',
    explantion: '\n      汉字: 結び\n      读音: むすび\n      意思: ending\n      来源:  conclusion\n      同义词: 結び\n    ',
  },
  {
    question: '結び付き',
    answer: 'musubitsuki',
    explantion: '\n      汉字: 結び付き\n      读音: むすびつき\n      意思: connection\n      来源:  relation\n      同义词: 結び付き, 結びつき\n    ',
  },
  {
    question: '結び付く',
    answer: 'musubitsuku',
    explantion: '\n      汉字: 結び付く\n      读音: むすびつく\n      意思: to be connected or related\n      来源:  to join together\n      同义词: 結び付く, 結びつく\n    ',
  },
  {
    question: '結び付ける',
    answer: 'musubitsukeru',
    explantion: '\n      汉字: 結び付ける\n      读音: むすびつける\n      意思: to combine\n      来源:  to join\n      同义词: 結び付ける, 結びつける\n    ',
  },
  {
    question: '結核',
    answer: 'kekkaku',
    explantion: '\n      汉字: 結核\n      读音: けっかく\n      意思: tuberculosis\n      来源:  tubercule\n      同义词: 結核\n    ',
  },
  {
    question: '結合',
    answer: 'ketsugo',
    explantion: '\n      汉字: 結合\n      读音: けつごう\n      意思: combination\n      来源:  union\n      同义词: 結合\n    ',
  },
  {
    question: '結晶',
    answer: 'kessho',
    explantion: '\n      汉字: 結晶\n      读音: けっしょう\n      意思: crystal\n      来源:  crystallization\n      同义词: 結晶\n    ',
  },
  {
    question: '結成',
    answer: 'kessei',
    explantion: '\n      汉字: 結成\n      读音: けっせい\n      意思: formation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '結束',
    answer: 'kessoku',
    explantion: '\n      汉字: 結束\n      读音: けっそく\n      意思: union\n      来源:  unity\n      同义词: 結束\n    ',
  },
  {
    question: '血管',
    answer: 'kekkan',
    explantion: '\n      汉字: 血管\n      读音: けっかん\n      意思: blood vessel\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '月謝',
    answer: 'getsusha',
    explantion: '\n      汉字: 月謝\n      读音: げっしゃ\n      意思: monthly tuition fee\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '月賦',
    answer: 'geppu',
    explantion: '\n      汉字: 月賦\n      读音: げっぷ\n      意思: monthly installment\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '月並み',
    answer: 'tsukinami',
    explantion: '\n      汉字: 月並み\n      读音: つきなみ\n      意思: every month\n      来源:  common\n      同义词: 月並み, 月並, 月次, 月次\n    ',
  },
  {
    question: '件',
    answer: 'kudan',
    explantion: '\n      汉字: 件\n      读音: くだん\n      意思: example\n      来源:  precedent\n      同义词: 件, \n    ',
  },
  {
    question: '倹約',
    answer: 'kenyaku',
    explantion: '\n      汉字: 倹約\n      读音: けんやく\n      意思: thrift\n      来源:  economy\n      同义词: 倹約\n    ',
  },
  {
    question: '健やか',
    answer: 'sukoyaka',
    explantion: '\n      汉字: 健やか\n      读音: すこやか\n      意思: vigorous\n      来源:  healthy\n      同义词: 健やか\n    ',
  },
  {
    question: '健在',
    answer: 'kenzai',
    explantion: '\n      汉字: 健在\n      读音: けんざい\n      意思: in good health\n      来源:  well\n      同义词: 健在\n    ',
  },
  {
    question: '健全',
    answer: 'kenzen',
    explantion: '\n      汉字: 健全\n      读音: けんぜん\n      意思: health\n      来源:  soundness\n      同义词: 健全\n    ',
  },
  {
    question: '兼用',
    answer: 'kenyo',
    explantion: '\n      汉字: 兼用\n      读音: けんよう\n      意思: multi-use\n      来源:  combined use\n      同义词: 兼用\n    ',
  },
  {
    question: '圏',
    answer: 'ken',
    explantion: '\n      汉字: 圏\n      读音: けん\n      意思: sphere\n      来源:  circle\n      同义词: 圏\n    ',
  },
  {
    question: '厭らしい',
    answer: 'iyarashii',
    explantion: '\n      汉字: 厭らしい\n      读音: いやらしい\n      意思: detestable\n      来源:  disagreeable\n      同义词: 厭らしい, , 嫌らしい, , 嫌らしい, 厭らしい\n    ',
  },
  {
    question: '懸賞',
    answer: 'kensho',
    explantion: '\n      汉字: 懸賞\n      读音: けんしょう\n      意思: offering prizes\n      来源:  winning\n      同义词: 懸賞\n    ',
  },
  {
    question: '捲る',
    answer: 'makuru',
    explantion: '\n      汉字: 捲る\n      读音: まくる\n      意思: verb suffix to indicate reckless abandon to the activity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '検事',
    answer: 'kenji',
    explantion: '\n      汉字: 検事\n      读音: けんじ\n      意思: public prosecutor\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '権',
    answer: 'ken',
    explantion: '\n      汉字: 権\n      读音: けん\n      意思: authority\n      来源:  the right (to do something)\n      同义词: 権\n    ',
  },
  {
    question: '権威',
    answer: 'keni',
    explantion: '\n      汉字: 権威\n      读音: けんい\n      意思: authority\n      来源:  power\n      同义词: 権威\n    ',
  },
  {
    question: '権限',
    answer: 'kengen',
    explantion: '\n      汉字: 権限\n      读音: けんげん\n      意思: power\n      来源:  authority\n      同义词: 権限\n    ',
  },
  {
    question: '権力',
    answer: 'kenriyoku',
    explantion: '\n      汉字: 権力\n      读音: けんりょく\n      意思: power\n      来源:  authority\n      同义词: 権力\n    ',
  },
  {
    question: '見すぼらしい',
    answer: 'misuborashii',
    explantion: '\n      汉字: 見すぼらしい\n      读音: みすぼらしい\n      意思: shabby\n      来源:  seedy\n      同义词: 見すぼらしい, , 見窄らしい\n    ',
  },
  {
    question: '見せびらかす',
    answer: 'misebirakasu',
    explantion: '\n      汉字: 見せびらかす\n      读音: みせびらかす\n      意思: to show off\n      来源:  to flaunt\n      同义词: 見せびらかす\n    ',
  },
  {
    question: '見せ物',
    answer: 'misemono',
    explantion: '\n      汉字: 見せ物\n      读音: みせもの\n      意思: show\n      来源:  exhibition\n      同义词: 見せ物, 見世物\n    ',
  },
  {
    question: '見っともない',
    answer: 'mittomonai',
    explantion: '\n      汉字: 見っともない\n      读音: みっともない\n      意思: shameful\n      来源:  indecent\n      同义词: 見っともない\n    ',
  },
  {
    question: '見苦しい',
    answer: 'migurushii',
    explantion: '\n      汉字: 見苦しい\n      读音: みぐるしい\n      意思: unsightly\n      来源:  ugly\n      同义词: 見苦しい\n    ',
  },
  {
    question: '見合い',
    answer: 'miai',
    explantion: '\n      汉字: 見合い\n      读音: みあい\n      意思: formal marriage interview\n      来源: waller\n      同义词: 見合\n    ',
  },
  {
    question: '見合わせる',
    answer: 'miawaseru',
    explantion: '\n      汉字: 見合わせる\n      读音: みあわせる\n      意思: to exchange glances\n      来源:  to postpone\n      同义词: 見合わせる, 見合せる\n    ',
  },
  {
    question: '見晴らし',
    answer: 'miharashi',
    explantion: '\n      汉字: 見晴らし\n      读音: みはらし\n      意思: view\n      来源: waller\n      同义词: 見晴し, 見はらし\n    ',
  },
  {
    question: '見地',
    answer: 'kenchi',
    explantion: '\n      汉字: 見地\n      读音: けんち\n      意思: point of view\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '見渡す',
    answer: 'miwatasu',
    explantion: '\n      汉字: 見渡す\n      读音: みわたす\n      意思: to look out over\n      来源:  to survey (scene)\n      同义词: 見渡す, 見わたす\n    ',
  },
  {
    question: '見方',
    answer: 'mikata',
    explantion: '\n      汉字: 見方\n      读音: みかた\n      意思: viewpoint\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '見落とす',
    answer: 'miotosu',
    explantion: '\n      汉字: 見落とす\n      读音: みおとす\n      意思: to overlook\n      来源:  to fail to notice\n      同义词: 見落とす, 見落す\n    ',
  },
  {
    question: '賢明',
    answer: 'kemmei',
    explantion: '\n      汉字: 賢明\n      读音: けんめい\n      意思: wisdom\n      来源:  intelligence\n      同义词: 賢明\n    ',
  },
  {
    question: '軒並み',
    answer: 'nokinami',
    explantion: '\n      汉字: 軒並み\n      读音: のきなみ\n      意思: row of houses\n      来源: waller\n      同义词: 軒並\n    ',
  },
  {
    question: 'やり遂げる',
    answer: 'yaritogeru',
    explantion: '\n      汉字: やり遂げる\n      读音: やりとげる\n      意思: to accomplish\n      来源: waller\n      同义词: 遣り遂げる\n    ',
  },
  {
    question: '遣り通す',
    answer: 'yaritoosu',
    explantion: '\n      汉字: 遣り通す\n      读音: やりとおす\n      意思: to carry through\n      来源:  to achieve\n      同义词: 遣り通す, やり通す\n    ',
  },
  {
    question: '元首',
    answer: 'genshiyu',
    explantion: '\n      汉字: 元首\n      读音: げんしゅ\n      意思: ruler\n      来源:  sovereign\n      同义词: 元首\n    ',
  },
  {
    question: '元年',
    answer: 'gannen',
    explantion: '\n      汉字: 元年\n      读音: がんねん\n      意思: first year (of a specific reign)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '元来',
    answer: 'ganrai',
    explantion: '\n      汉字: 元来\n      读音: がんらい\n      意思: originally\n      来源:  primarily\n      同义词: 元来\n    ',
  },
  {
    question: '原',
    answer: 'gen',
    explantion: '\n      汉字: 原\n      读音: げん\n      意思: original\n      来源:  primitive\n      同义词: 原\n    ',
  },
  {
    question: '原っぱ',
    answer: 'warappa',
    explantion: '\n      汉字: 原っぱ\n      读音: はらっぱ\n      意思: open field\n      来源:  empty lot\n      同义词: 原っぱ\n    ',
  },
  {
    question: '原形',
    answer: 'genkei',
    explantion: '\n      汉字: 原形\n      读音: げんけい\n      意思: original form\n      来源:  base form\n      同义词: 原形\n    ',
  },
  {
    question: '原作',
    answer: 'gensaku',
    explantion: '\n      汉字: 原作\n      读音: げんさく\n      意思: original work\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '原子',
    answer: 'genshi',
    explantion: '\n      汉字: 原子\n      读音: げんし\n      意思: atom\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '原書',
    answer: 'gensho',
    explantion: '\n      汉字: 原書\n      读音: げんしょ\n      意思: original document\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '原則',
    answer: 'gensoku',
    explantion: '\n      汉字: 原則\n      读音: げんそく\n      意思: principle\n      来源:  general rule\n      同义词: 原則\n    ',
  },
  {
    question: '原典',
    answer: 'genten',
    explantion: '\n      汉字: 原典\n      读音: げんてん\n      意思: original (text)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '原点',
    answer: 'genten',
    explantion: '\n      汉字: 原点\n      读音: げんてん\n      意思: origin (coordinates)\n      来源:  starting point\n      同义词: 原点\n    ',
  },
  {
    question: '原爆',
    answer: 'genbaku',
    explantion: '\n      汉字: 原爆\n      读音: げんばく\n      意思: atomic bomb\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '原文',
    answer: 'genbun',
    explantion: '\n      汉字: 原文\n      读音: げんぶん\n      意思: the text\n      来源:  original\n      同义词: 原文\n    ',
  },
  {
    question: '原油',
    answer: 'genyu',
    explantion: '\n      汉字: 原油\n      读音: げんゆ\n      意思: crude oil\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '厳か',
    answer: 'ogosoka',
    explantion: '\n      汉字: 厳か\n      读音: おごそか\n      意思: austere\n      来源:  majestic\n      同义词: 厳か\n    ',
  },
  {
    question: '厳密',
    answer: 'genmitsu',
    explantion: '\n      汉字: 厳密\n      读音: げんみつ\n      意思: strict\n      来源:  close\n      同义词: 厳密\n    ',
  },
  {
    question: '減少',
    answer: 'gensho',
    explantion: '\n      汉字: 減少\n      读音: げんしょう\n      意思: decrease\n      来源:  reduction\n      同义词: 減少\n    ',
  },
  {
    question: '減点',
    answer: 'genten',
    explantion: '\n      汉字: 減点\n      读音: げんてん\n      意思: subtract\n      来源:  give a demerit\n      同义词: 減点\n    ',
  },
  {
    question: '源',
    answer: 'minamoto',
    explantion: '\n      汉字: 源\n      读音: みなもと\n      意思: source\n      来源:  origin\n      同义词: 源\n    ',
  },
  {
    question: '玄人',
    answer: 'kuroto',
    explantion: '\n      汉字: 玄人\n      读音: くろうと\n      意思: expert\n      来源:  professional\n      同义词: 玄人, 玄人, 黒人, 黒人\n    ',
  },
  {
    question: '現われる',
    answer: 'arawareru',
    explantion: '\n      汉字: 現われる\n      读音: あらわれる\n      意思: to appear\n      来源:  to come in sight\n      同义词: 現われる\n    ',
  },
  {
    question: '現行',
    answer: 'genkou',
    explantion: '\n      汉字: 現行\n      读音: げんこう\n      意思: present\n      来源:  current\n      同义词: 現行\n    ',
  },
  {
    question: '現場',
    answer: 'genjiyou',
    explantion: '\n      汉字: 現場\n      读音: げんじょう\n      意思: actual spot\n      来源:  scene\n      同义词: 現場\n    ',
  },
  {
    question: '現像',
    answer: 'genzou',
    explantion: '\n      汉字: 現像\n      读音: げんぞう\n      意思: developing (film)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '現地',
    answer: 'genchi',
    explantion: '\n      汉字: 現地\n      读音: げんち\n      意思: actual place\n      来源:  local\n      同义词: 現地\n    ',
  },
  {
    question: '言伝',
    answer: 'kotozute',
    explantion: '\n      汉字: 言伝\n      读音: ことづて\n      意思: declaration\n      来源:  hearsay\n      同义词: 言伝, 言伝て, 言づて\n    ',
  },
  {
    question: '言論',
    answer: 'genron',
    explantion: '\n      汉字: 言論\n      读音: げんろん\n      意思: discussion\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '限定',
    answer: 'gentei',
    explantion: '\n      汉字: 限定\n      读音: げんてい\n      意思: limit\n      来源:  restriction\n      同义词: 限定\n    ',
  },
  {
    question: '個性',
    answer: 'kosei',
    explantion: '\n      汉字: 個性\n      读音: こせい\n      意思: individuality\n      来源:  personality\n      同义词: 個性\n    ',
  },
  {
    question: '個別',
    answer: 'kobetsu',
    explantion: '\n      汉字: 個別\n      读音: こべつ\n      意思: particular case\n      来源: waller\n      同义词: 箇別\n    ',
  },
  {
    question: '古',
    answer: 'inishie',
    explantion: '\n      汉字: 古\n      读音: いにしえ\n      意思: antiquity\n      来源:  ancient times\n      同义词: 古, 古え\n    ',
  },
  {
    question: '古代',
    answer: 'kodai',
    explantion: '\n      汉字: 古代\n      读音: こだい\n      意思: ancient times\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '呼び止める',
    answer: 'yobitomeru',
    explantion: '\n      汉字: 呼び止める\n      读音: よびとめる\n      意思: to challenge\n      来源:  to call somebody to halt\n      同义词: 呼び止める, 呼びとめる, 呼び留める, 呼止める, 呼留める\n    ',
  },
  {
    question: '固める',
    answer: 'katameru',
    explantion: '\n      汉字: 固める\n      读音: かためる\n      意思: to harden\n      来源:  to freeze\n      同义词: 固める, 堅める\n    ',
  },
  {
    question: '固体',
    answer: 'kotai',
    explantion: '\n      汉字: 固体\n      读音: こたい\n      意思: solid (body)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '固定',
    answer: 'kotei',
    explantion: '\n      汉字: 固定\n      读音: こてい\n      意思: fixation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '固有',
    answer: 'koyuu',
    explantion: '\n      汉字: 固有\n      读音: こゆう\n      意思: characteristic\n      来源:  tradition\n      同义词: 固有\n    ',
  },
  {
    question: '孤児',
    answer: 'koji',
    explantion: '\n      汉字: 孤児\n      读音: こじ\n      意思: orphan\n      来源: waller\n      同义词: 孤児, 孤, みなし子\n    ',
  },
  {
    question: '孤独',
    answer: 'kodoku',
    explantion: '\n      汉字: 孤独\n      读音: こどく\n      意思: isolation\n      来源:  loneliness\n      同义词: 孤独\n    ',
  },
  {
    question: '孤立',
    answer: 'koritsu',
    explantion: '\n      汉字: 孤立\n      读音: こりつ\n      意思: isolation\n      来源:  helplessness\n      同义词: 孤立\n    ',
  },
  {
    question: '戸籍',
    answer: 'koseki',
    explantion: '\n      汉字: 戸籍\n      读音: こせき\n      意思: census\n      来源:  family register\n      同义词: 戸籍\n    ',
  },
  {
    question: '戸締り',
    answer: 'tojimari',
    explantion: '\n      汉字: 戸締り\n      读音: とじまり\n      意思: closing up\n      来源:  fastening the doors\n      同义词: 戸締り, 戸締まり\n    ',
  },
  {
    question: '故',
    answer: 'ko',
    explantion: '\n      汉字: 故\n      读音: こ\n      意思: the late (deceased)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '故人',
    answer: 'kojin',
    explantion: '\n      汉字: 故人\n      读音: こじん\n      意思: the deceased\n      来源:  old friend\n      同义词: 故人\n    ',
  },
  {
    question: '股',
    answer: 'mata',
    explantion: '\n      汉字: 股\n      读音: また\n      意思: groin\n      来源:  crotch\n      同义词: 股, 胯, 叉, 俣\n    ',
  },
  {
    question: '誇る',
    answer: 'hokoru',
    explantion: '\n      汉字: 誇る\n      读音: ほこる\n      意思: to boast of\n      来源:  to be proud of\n      同义词: 誇る\n    ',
  },
  {
    question: '誇張',
    answer: 'kochou',
    explantion: '\n      汉字: 誇張\n      读音: こちょう\n      意思: exaggeration\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '跨ぐ',
    answer: 'matagu',
    explantion: '\n      汉字: 跨ぐ\n      读音: またぐ\n      意思: to straddle\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '雇用',
    answer: 'koyo',
    explantion: '\n      汉字: 雇用\n      读音: こよう\n      意思: employment (long term)\n      来源:  hire\n      同义词: 雇用, 雇傭\n    ',
  },
  {
    question: '顧みる',
    answer: 'kaerimiru',
    explantion: '\n      汉字: 顧みる\n      读音: かえりみる\n      意思: to look back\n      来源:  to turn around\n      同义词: 顧みる, 顧る\n    ',
  },
  {
    question: '呉れ呉れも',
    answer: 'kureguremo',
    explantion: '\n      汉字: 呉れ呉れも\n      读音: くれぐれも\n      意思: repeatedly\n      来源:  sincerely\n      同义词: 呉れ呉れも\n    ',
  },
  {
    question: '後回し',
    answer: 'atomawashi',
    explantion: '\n      汉字: 後回し\n      读音: あとまわし\n      意思: putting off\n      来源:  postponing\n      同义词: 後回し\n    ',
  },
  {
    question: '後悔',
    answer: 'kokai',
    explantion: '\n      汉字: 後悔\n      读音: こうかい\n      意思: regret\n      来源:  repentance\n      同义词: 後悔\n    ',
  },
  {
    question: '後退',
    answer: 'kotai',
    explantion: '\n      汉字: 後退\n      读音: こうたい\n      意思: retreat\n      来源:  backspace (BS)\n      同义词: 後退\n    ',
  },
  {
    question: '御',
    answer: 'go',
    explantion: '\n      汉字: 御\n      读音: ご\n      意思: go-\n      来源:  honourable\n      同义词: 御, \n    ',
  },
  {
    question: 'お蔭様で',
    answer: 'okagesamade',
    explantion: '\n      汉字: お蔭様で\n      读音: おかげさまで\n      意思: Thanks to god\n      来源:  thanks to you\n      同义词: お蔭様で\n    ',
  },
  {
    question: 'ご馳走さま',
    answer: 'gochisosama',
    explantion: '\n      汉字: ご馳走さま\n      读音: ごちそうさま\n      意思: feast\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'ご無沙汰',
    answer: 'gobusata',
    explantion: '\n      汉字: ご無沙汰\n      读音: ごぶさた\n      意思: not writing or contacting for a while\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '御免なさい',
    answer: 'gomennasai',
    explantion: '\n      汉字: 御免なさい\n      读音: ごめんなさい\n      意思: I beg your pardon\n      来源:  excuse me\n      同义词: 御免なさい\n    ',
  },
  {
    question: '御免ください',
    answer: 'gomenkudasai',
    explantion: '\n      汉字: 御免ください\n      读音: ごめんください\n      意思: May I come in?\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '御覧なさい',
    answer: 'gorannasai',
    explantion: '\n      汉字: 御覧なさい\n      读音: ごらんなさい\n      意思: (please) look\n      来源:  (please) try to do\n      同义词: 御覧なさい, ご覧なさい, \n    ',
  },
  {
    question: 'お襁褓',
    answer: 'omutsu',
    explantion: '\n      汉字: お襁褓\n      读音: おむつ\n      意思: diaper\n      来源:  nappy\n      同义词: お襁褓, , 御襁褓, \n    ',
  },
  {
    question: '悟る',
    answer: 'satoru',
    explantion: '\n      汉字: 悟る\n      读音: さとる\n      意思: to attain enlightenment\n      来源:  to perceive\n      同义词: 悟る, 覚る\n    ',
  },
  {
    question: '碁盤',
    answer: 'goban',
    explantion: '\n      汉字: 碁盤\n      读音: ごばん\n      意思: Go board\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '語句',
    answer: 'goku',
    explantion: '\n      汉字: 語句\n      读音: ごく\n      意思: words\n      来源:  phrases\n      同义词: 語句\n    ',
  },
  {
    question: '語源',
    answer: 'gogen',
    explantion: '\n      汉字: 語源\n      读音: ごげん\n      意思: word root\n      来源:  word derivation\n      同义词: 語源, 語原\n    ',
  },
  {
    question: '語彙',
    answer: 'goi',
    explantion: '\n      汉字: 語彙\n      读音: ごい\n      意思: vocabulary\n      来源:  glossary\n      同义词: 語彙, 語い\n    ',
  },
  {
    question: '誤る',
    answer: 'ayamaru',
    explantion: '\n      汉字: 誤る\n      读音: あやまる\n      意思: to make a mistake\n      来源: waller\n      同义词: 謬る\n    ',
  },
  {
    question: '誤差',
    answer: 'gosa',
    explantion: '\n      汉字: 誤差\n      读音: ごさ\n      意思: error\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '誤魔化す',
    answer: 'gomakasu',
    explantion: '\n      汉字: 誤魔化す\n      读音: ごまかす\n      意思: to deceive\n      来源:  to falsify\n      同义词: 誤魔化す, , 誤摩化す, 胡麻化す, 誤魔かす, 胡魔化す\n    ',
  },
  {
    question: '護衛',
    answer: 'goei',
    explantion: '\n      汉字: 護衛\n      读音: ごえい\n      意思: guard\n      来源:  convoy\n      同义词: 護衛\n    ',
  },
  {
    question: '交える',
    answer: 'majieru',
    explantion: '\n      汉字: 交える\n      读音: まじえる\n      意思: to mix\n      来源:  to converse with\n      同义词: 交える, 混える, 雑える\n    ',
  },
  {
    question: '交わる',
    answer: 'majiwaru',
    explantion: '\n      汉字: 交わる\n      读音: まじわる\n      意思: to cross\n      来源:  to intersect\n      同义词: 交わる\n    ',
  },
  {
    question: '交易',
    answer: 'koeki',
    explantion: '\n      汉字: 交易\n      读音: こうえき\n      意思: trade\n      来源:  commerce\n      同义词: 交易\n    ',
  },
  {
    question: '交互',
    answer: 'kogo',
    explantion: '\n      汉字: 交互\n      读音: こうご\n      意思: mutual\n      来源:  reciprocal\n      同义词: 交互\n    ',
  },
  {
    question: '交渉',
    answer: 'kosho',
    explantion: '\n      汉字: 交渉\n      读音: こうしょう\n      意思: negotiations\n      来源:  discussions\n      同义词: 交渉\n    ',
  },
  {
    question: '交付',
    answer: 'kofu',
    explantion: '\n      汉字: 交付\n      读音: こうふ\n      意思: delivering\n      来源:  furnishing (with copies)\n      同义词: 交付\n    ',
  },
  {
    question: '光沢',
    answer: 'kotaku',
    explantion: '\n      汉字: 光沢\n      读音: こうたく\n      意思: brilliance\n      来源:  polish\n      同义词: 光沢\n    ',
  },
  {
    question: '光熱費',
    answer: 'konetsuhi',
    explantion: '\n      汉字: 光熱費\n      读音: こうねつひ\n      意思: cost of fuel and light\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '公',
    answer: 'oyake',
    explantion: '\n      汉字: 公\n      读音: おおやけ\n      意思: official\n      来源:  public\n      同义词: 公\n    ',
  },
  {
    question: '公演',
    answer: 'koen',
    explantion: '\n      汉字: 公演\n      读音: こうえん\n      意思: public performance\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '公開',
    answer: 'kokai',
    explantion: '\n      汉字: 公開\n      读音: こうかい\n      意思: presenting to the public\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '公然',
    answer: 'kozen',
    explantion: '\n      汉字: 公然\n      读音: こうぜん\n      意思: open (e.g. secret)\n      来源:  public\n      同义词: 公然\n    ',
  },
  {
    question: '公団',
    answer: 'kodan',
    explantion: '\n      汉字: 公団\n      读音: こうだん\n      意思: public corporation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '公認',
    answer: 'konin',
    explantion: '\n      汉字: 公認\n      读音: こうにん\n      意思: official recognition\n      来源:  authorization\n      同义词: 公認\n    ',
  },
  {
    question: '公募',
    answer: 'kobo',
    explantion: '\n      汉字: 公募\n      读音: こうぼ\n      意思: public appeal\n      来源:  public contribution\n      同义词: 公募\n    ',
  },
  {
    question: '公用',
    answer: 'koyo',
    explantion: '\n      汉字: 公用\n      读音: こうよう\n      意思: government business\n      来源:  public use\n      同义词: 公用\n    ',
  },
  {
    question: '公立',
    answer: 'koritsu',
    explantion: '\n      汉字: 公立\n      读音: こうりつ\n      意思: public (institution)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '効率',
    answer: 'koritsu',
    explantion: '\n      汉字: 効率\n      读音: こうりつ\n      意思: efficiency\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '口ずさむ',
    answer: 'kuchizusamu',
    explantion: '\n      汉字: 口ずさむ\n      读音: くちずさむ\n      意思: to hum something\n      来源:  to sing to oneself\n      同义词: 口ずさむ, 口遊む, 口吟む, 口号む\n    ',
  },
  {
    question: '口述',
    answer: 'kojutsu',
    explantion: '\n      汉字: 口述\n      读音: こうじゅつ\n      意思: verbal statement\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '口頭',
    answer: 'koto',
    explantion: '\n      汉字: 口頭\n      读音: こうとう\n      意思: oral\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '向き',
    answer: 'muki',
    explantion: '\n      汉字: 向き\n      读音: むき\n      意思: direction\n      来源:  situation\n      同义词: 向き\n    ',
  },
  {
    question: '向け',
    answer: 'muke',
    explantion: '\n      汉字: 向け\n      读音: むけ\n      意思: for ~\n      来源:  oriented towards ~\n      同义词: 向け\n    ',
  },
  {
    question: '向上',
    answer: 'kojiyou',
    explantion: '\n      汉字: 向上\n      读音: こうじょう\n      意思: elevation\n      来源:  rise\n      同义词: 向上\n    ',
  },
  {
    question: '垢',
    answer: 'aka',
    explantion: '\n      汉字: 垢\n      读音: あか\n      意思: dirt\n      来源:  filth\n      同义词: 垢\n    ',
  },
  {
    question: 'いい加減',
    answer: 'ikagen',
    explantion: '\n      汉字: いい加減\n      读音: いいかげん\n      意思: moderate\n      来源:  right\n      同义词: いい加減, 好い加減, 好加減\n    ',
  },
  {
    question: '好ましい',
    answer: 'konomashii',
    explantion: '\n      汉字: 好ましい\n      读音: このましい\n      意思: nice\n      来源:  likeable\n      同义词: 好ましい\n    ',
  },
  {
    question: '好意',
    answer: 'koi',
    explantion: '\n      汉字: 好意\n      读音: こうい\n      意思: good will\n      来源:  favor\n      同义词: 好意\n    ',
  },
  {
    question: '好況',
    answer: 'kokyo',
    explantion: '\n      汉字: 好況\n      读音: こうきょう\n      意思: prosperous conditions\n      来源:  healthy economy\n      同义词: 好況\n    ',
  },
  {
    question: '好調',
    answer: 'kochou',
    explantion: '\n      汉字: 好調\n      读音: こうちょう\n      意思: favourable\n      来源:  promising\n      同义词: 好調\n    ',
  },
  {
    question: '好評',
    answer: 'kohyou',
    explantion: '\n      汉字: 好評\n      读音: こうひょう\n      意思: popularity\n      来源:  favorable reputation\n      同义词: 好評\n    ',
  },
  {
    question: '工学',
    answer: 'kogaku',
    explantion: '\n      汉字: 工学\n      读音: こうがく\n      意思: engineering\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '工作',
    answer: 'kosaku',
    explantion: '\n      汉字: 工作\n      读音: こうさく\n      意思: work\n      来源:  construction\n      同义词: 工作\n    ',
  },
  {
    question: '巧み',
    answer: 'takumi',
    explantion: '\n      汉字: 巧み\n      读音: たくみ\n      意思: skill\n      来源:  cleverness\n      同义词: 巧み\n    ',
  },
  {
    question: '巧妙',
    answer: 'komyo',
    explantion: '\n      汉字: 巧妙\n      读音: こうみょう\n      意思: ingenious\n      来源:  skillful\n      同义词: 巧妙\n    ',
  },
  {
    question: '広まる',
    answer: 'hiromaru',
    explantion: '\n      汉字: 広まる\n      读音: ひろまる\n      意思: to spread\n      来源:  to be propagated\n      同义词: 広まる, 弘まる\n    ',
  },
  {
    question: '慌ただしい',
    answer: 'awatadashii',
    explantion: '\n      汉字: 慌ただしい\n      读音: あわただしい\n      意思: busy\n      来源:  hurried\n      同义词: 慌ただしい\n    ',
  },
  {
    question: '慌てる',
    answer: 'awateru',
    explantion: '\n      汉字: 慌てる\n      读音: あわてる\n      意思: to become confused (disconcerted disorganized)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '抗議',
    answer: 'kougi',
    explantion: '\n      汉字: 抗議\n      读音: こうぎ\n      意思: protest\n      来源:  objection\n      同义词: 抗議\n    ',
  },
  {
    question: '抗争',
    answer: 'koso',
    explantion: '\n      汉字: 抗争\n      读音: こうそう\n      意思: dispute\n      来源:  resistance\n      同义词: 抗争\n    ',
  },
  {
    question: '拘束',
    answer: 'kosoku',
    explantion: '\n      汉字: 拘束\n      读音: こうそく\n      意思: restriction\n      来源:  restraint\n      同义词: 拘束\n    ',
  },
  {
    question: '控える',
    answer: 'hikaeru',
    explantion: '\n      汉字: 控える\n      读音: ひかえる\n      意思: to draw in\n      来源:  to hold back\n      同义词: 控える, 扣える\n    ',
  },
  {
    question: '控除',
    answer: 'kojiyo',
    explantion: '\n      汉字: 控除\n      读音: こうじょ\n      意思: subsidy\n      来源:  deduction\n      同义词: 控除, 扣除\n    ',
  },
  {
    question: '攻め',
    answer: 'seme',
    explantion: '\n      汉字: 攻め\n      读音: せめ\n      意思: attack\n      来源:  offence\n      同义词: 攻め, \n    ',
  },
  {
    question: '構え',
    answer: 'kamae',
    explantion: '\n      汉字: 構え\n      读音: かまえ\n      意思: posture\n      来源:  pose\n      同义词: 構え, 構\n    ',
  },
  {
    question: '構える',
    answer: 'kamaeru',
    explantion: '\n      汉字: 構える\n      读音: かまえる\n      意思: to set up\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '構想',
    answer: 'koso',
    explantion: '\n      汉字: 構想\n      读音: こうそう\n      意思: plan\n      来源:  plot\n      同义词: 構想\n    ',
  },
  {
    question: '洪水',
    answer: 'kozui',
    explantion: '\n      汉字: 洪水\n      读音: こうずい\n      意思: flood\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '溝',
    answer: 'ko',
    explantion: '\n      汉字: 溝\n      读音: こう\n      意思: 10^38\n      来源:  hundred undecillion (American)\n      同义词: 溝\n    ',
  },
  {
    question: '皇居',
    answer: 'kokyo',
    explantion: '\n      汉字: 皇居\n      读音: こうきょ\n      意思: Imperial Palace\n      来源: waller\n      同义词: 皇居\n    ',
  },
  {
    question: '耕作',
    answer: 'kosaku',
    explantion: '\n      汉字: 耕作\n      读音: こうさく\n      意思: cultivation\n      来源:  farming\n      同义词: 耕作\n    ',
  },
  {
    question: '考古学',
    answer: 'kokogaku',
    explantion: '\n      汉字: 考古学\n      读音: こうこがく\n      意思: archaeology\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '航海',
    answer: 'kokai',
    explantion: '\n      汉字: 航海\n      读音: こうかい\n      意思: sail\n      来源:  voyage\n      同义词: 航海\n    ',
  },
  {
    question: '荒っぽい',
    answer: 'arappoi',
    explantion: '\n      汉字: 荒っぽい\n      读音: あらっぽい\n      意思: rough\n      来源:  rude\n      同义词: 荒っぽい, 粗っぽい\n    ',
  },
  {
    question: '荒らす',
    answer: 'arasu',
    explantion: '\n      汉字: 荒らす\n      读音: あらす\n      意思: to lay waste\n      来源:  to devastate\n      同义词: 荒らす, 荒す\n    ',
  },
  {
    question: '荒廃',
    answer: 'kohai',
    explantion: '\n      汉字: 荒廃\n      读音: こうはい\n      意思: ruin\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '行',
    answer: 'gyou',
    explantion: '\n      汉字: 行\n      读音: ぎょう\n      意思: line\n      来源:  row\n      同义词: 行\n    ',
  },
  {
    question: '行為',
    answer: 'koi',
    explantion: '\n      汉字: 行為\n      读音: こうい\n      意思: act\n      来源:  deed\n      同义词: 行為\n    ',
  },
  {
    question: '行員',
    answer: 'koin',
    explantion: '\n      汉字: 行員\n      读音: こういん\n      意思: bank clerk\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '行進',
    answer: 'koshin',
    explantion: '\n      汉字: 行進\n      读音: こうしん\n      意思: march\n      来源:  parade\n      同义词: 行進\n    ',
  },
  {
    question: '行き成り',
    answer: 'ikinari',
    explantion: '\n      汉字: 行き成り\n      读音: いきなり\n      意思: suddenly\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '行政',
    answer: 'gyosei',
    explantion: '\n      汉字: 行政\n      读音: ぎょうせい\n      意思: administration\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '講習',
    answer: 'koshu',
    explantion: '\n      汉字: 講習\n      读音: こうしゅう\n      意思: short course\n      来源:  training\n      同义词: 講習\n    ',
  },
  {
    question: '講読',
    answer: 'kodoku',
    explantion: '\n      汉字: 講読\n      读音: こうどく\n      意思: reading\n      来源:  translation\n      同义词: 講読\n    ',
  },
  {
    question: '購読',
    answer: 'kodoku',
    explantion: '\n      汉字: 購読\n      读音: こうどく\n      意思: subscription (e.g. magazine)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '購入',
    answer: 'koniyuu',
    explantion: '\n      汉字: 購入\n      读音: こうにゅう\n      意思: purchase\n      来源:  buy\n      同义词: 購入\n    ',
  },
  {
    question: '購買',
    answer: 'kobai',
    explantion: '\n      汉字: 購買\n      读音: こうばい\n      意思: purchase\n      来源:  buy\n      同义词: 購買, 校売\n    ',
  },
  {
    question: '鉱業',
    answer: 'kogyou',
    explantion: '\n      汉字: 鉱業\n      读音: こうぎょう\n      意思: mining industry\n      来源: waller\n      同义词: 礦業\n    ',
  },
  {
    question: '鉱山',
    answer: 'kozan',
    explantion: '\n      汉字: 鉱山\n      读音: こうざん\n      意思: mine (ore)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '降水',
    answer: 'kosui',
    explantion: '\n      汉字: 降水\n      读音: こうすい\n      意思: rainfall\n      来源:  precipitation\n      同义词: 降水\n    ',
  },
  {
    question: '降伏',
    answer: 'kofuku',
    explantion: '\n      汉字: 降伏\n      读音: こうふく\n      意思: capitulation\n      来源:  surrender\n      同义词: 降伏, 降服\n    ',
  },
  {
    question: '香辛料',
    answer: 'koshinryo',
    explantion: '\n      汉字: 香辛料\n      读音: こうしんりょう\n      意思: spices\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '高まる',
    answer: 'takamaru',
    explantion: '\n      汉字: 高まる\n      读音: たかまる\n      意思: to rise\n      来源:  to swell\n      同义词: 高まる\n    ',
  },
  {
    question: '高原',
    answer: 'kogen',
    explantion: '\n      汉字: 高原\n      读音: こうげん\n      意思: tableland\n      来源:  plateau\n      同义词: 高原\n    ',
  },
  {
    question: '高尚',
    answer: 'kosho',
    explantion: '\n      汉字: 高尚\n      读音: こうしょう\n      意思: high\n      来源:  noble\n      同义词: 高尚\n    ',
  },
  {
    question: '号',
    answer: 'gou',
    explantion: '\n      汉字: 号\n      读音: ごう\n      意思: number\n      来源:  issue\n      同义词: 号, 號\n    ',
  },
  {
    question: '合わす',
    answer: 'awasu',
    explantion: '\n      汉字: 合わす\n      读音: あわす\n      意思: to join together\n      来源:  to face\n      同义词: 合わす, 合す\n    ',
  },
  {
    question: '合わせ',
    answer: 'awase',
    explantion: '\n      汉字: 合わせ\n      读音: あわせ\n      意思: joint together\n      来源:  opposite\n      同义词: 合わせ\n    ',
  },
  {
    question: '合意',
    answer: 'goui',
    explantion: '\n      汉字: 合意\n      读音: ごうい\n      意思: agreement\n      来源:  consent\n      同义词: 合意\n    ',
  },
  {
    question: '合間',
    answer: 'aima',
    explantion: '\n      汉字: 合間\n      读音: あいま\n      意思: interval\n      来源: waller\n      同义词: 合い間\n    ',
  },
  {
    question: '合議',
    answer: 'gogi',
    explantion: '\n      汉字: 合議\n      读音: ごうぎ\n      意思: consultation\n      来源:  conference\n      同义词: 合議\n    ',
  },
  {
    question: '合唱',
    answer: 'gasshou',
    explantion: '\n      汉字: 合唱\n      读音: がっしょう\n      意思: chorus\n      来源:  singing in a chorus\n      同义词: 合唱\n    ',
  },
  {
    question: '合成',
    answer: 'gousei',
    explantion: '\n      汉字: 合成\n      读音: ごうせい\n      意思: synthesis\n      来源:  composition\n      同义词: 合成\n    ',
  },
  {
    question: '合致',
    answer: 'gatchi',
    explantion: '\n      汉字: 合致\n      读音: がっち\n      意思: agreement\n      来源:  concurrence\n      同义词: 合致\n    ',
  },
  {
    question: '告げる',
    answer: 'tsugeru',
    explantion: '\n      汉字: 告げる\n      读音: つげる\n      意思: to inform\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '告白',
    answer: 'kokuhaku',
    explantion: '\n      汉字: 告白\n      读音: こくはく\n      意思: confession\n      来源:  acknowledgement\n      同义词: 告白\n    ',
  },
  {
    question: '国境',
    answer: 'kunizakai',
    explantion: '\n      汉字: 国境\n      读音: くにざかい\n      意思: national or state border\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '国交',
    answer: 'kotsuko',
    explantion: '\n      汉字: 国交\n      读音: こっこう\n      意思: diplomatic relations\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '国産',
    answer: 'kokusan',
    explantion: '\n      汉字: 国産\n      读音: こくさん\n      意思: domestic products\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '国定',
    answer: 'kokutei',
    explantion: '\n      汉字: 国定\n      读音: こくてい\n      意思: state-sponsored\n      来源:  national\n      同义词: 国定\n    ',
  },
  {
    question: '国土',
    answer: 'kokudo',
    explantion: '\n      汉字: 国土\n      读音: こくど\n      意思: realm\n      来源: waller\n      同义词: 国土\n    ',
  },
  {
    question: '国防',
    answer: 'kokubou',
    explantion: '\n      汉字: 国防\n      读音: こくぼう\n      意思: national defence\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '国有',
    answer: 'kokuyuu',
    explantion: '\n      汉字: 国有\n      读音: こくゆう\n      意思: national ownership\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '国連',
    answer: 'kokuren',
    explantion: '\n      汉字: 国連\n      读音: こくれん\n      意思: U.N.\n      来源:  United Nations\n      同义词: 国連\n    ',
  },
  {
    question: '黒字',
    answer: 'kuroji',
    explantion: '\n      汉字: 黒字\n      读音: くろじ\n      意思: balance (figure) in the black\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '忽ち',
    answer: 'tachimachi',
    explantion: '\n      汉字: 忽ち\n      读音: たちまち\n      意思: at once\n      来源:  in a moment\n      同义词: 忽ち\n    ',
  },
  {
    question: '骨',
    answer: 'kotsu',
    explantion: '\n      汉字: 骨\n      读音: こつ\n      意思: knack\n      来源:  skill\n      同义词: 骨, , \n    ',
  },
  {
    question: '骨董品',
    answer: 'kottohin',
    explantion: '\n      汉字: 骨董品\n      读音: こっとうひん\n      意思: curio\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '込める',
    answer: 'komeru',
    explantion: '\n      汉字: 込める\n      读音: こめる\n      意思: to include\n      来源:  to put into\n      同义词: 込める, 籠める, 篭める, 罩める\n    ',
  },
  {
    question: '今更',
    answer: 'imasara',
    explantion: '\n      汉字: 今更\n      读音: いまさら\n      意思: now\n      来源:  at this late hour\n      同义词: 今更, 今さら\n    ',
  },
  {
    question: '今日は',
    answer: 'konnichiwa',
    explantion: '\n      汉字: 今日は\n      读音: こんにちは\n      意思: hello\n      来源:  good day (daytime greeting id)\n      同义词: 今日は\n    ',
  },
  {
    question: '今晩は',
    answer: 'kombanwa',
    explantion: '\n      汉字: 今晩は\n      读音: こんばんは\n      意思: good evening\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '昆虫',
    answer: 'konchiyuu',
    explantion: '\n      汉字: 昆虫\n      读音: こんちゅう\n      意思: insect\n      来源:  bug\n      同义词: 昆虫\n    ',
  },
  {
    question: '根回し',
    answer: 'nemawashi',
    explantion: '\n      汉字: 根回し\n      读音: ねまわし\n      意思: making necessary arrangements\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '根気',
    answer: 'konki',
    explantion: '\n      汉字: 根気\n      读音: こんき\n      意思: patience\n      来源:  perseverance\n      同义词: 根気\n    ',
  },
  {
    question: '根拠',
    answer: 'konkiyo',
    explantion: '\n      汉字: 根拠\n      读音: こんきょ\n      意思: basis\n      来源:  foundation\n      同义词: 根拠\n    ',
  },
  {
    question: '根底',
    answer: 'kontei',
    explantion: '\n      汉字: 根底\n      读音: こんてい\n      意思: root\n      来源:  basis\n      同义词: 根底, 根柢\n    ',
  },
  {
    question: '混血',
    answer: 'konketsu',
    explantion: '\n      汉字: 混血\n      读音: こんけつ\n      意思: mixed race\n      来源:  mixed parentage\n      同义词: 混血\n    ',
  },
  {
    question: '混同',
    answer: 'kondou',
    explantion: '\n      汉字: 混同\n      读音: こんどう\n      意思: confusion\n      来源:  mixing\n      同义词: 混同\n    ',
  },
  {
    question: '左様なら',
    answer: 'sayonara',
    explantion: '\n      汉字: 左様なら\n      读音: さようなら\n      意思: good-bye\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '差し引く',
    answer: 'sashihiku',
    explantion: '\n      汉字: 差し引く\n      读音: さしひく\n      意思: to deduct\n      来源: waller\n      同义词: 差引く\n    ',
  },
  {
    question: '差し掛かる',
    answer: 'sashikakaru',
    explantion: '\n      汉字: 差し掛かる\n      读音: さしかかる\n      意思: to come near to\n      来源:  to approach\n      同义词: 差し掛かる, 差しかかる, 差し掛る\n    ',
  },
  {
    question: '差し支える',
    answer: 'sashitsukaeru',
    explantion: '\n      汉字: 差し支える\n      读音: さしつかえる\n      意思: to interfere\n      来源:  to hinder\n      同义词: 差し支える, 差支える\n    ',
  },
  {
    question: '差し出す',
    answer: 'sashidasu',
    explantion: '\n      汉字: 差し出す\n      读音: さしだす\n      意思: to present\n      来源:  to submit\n      同义词: 差し出す, 差出す, さし出す, 差しだす\n    ',
  },
  {
    question: '差異',
    answer: 'sai',
    explantion: '\n      汉字: 差異\n      读音: さい\n      意思: difference\n      来源:  disparity\n      同义词: 差異, 差違\n    ',
  },
  {
    question: '差額',
    answer: 'sagaku',
    explantion: '\n      汉字: 差額\n      读音: さがく\n      意思: balance\n      来源:  difference\n      同义词: 差額\n    ',
  },
  {
    question: '砂利',
    answer: 'jari',
    explantion: '\n      汉字: 砂利\n      读音: じゃり\n      意思: gravel\n      来源:  ballast\n      同义词: 砂利, , 砂利\n    ',
  },
  {
    question: '詐欺',
    answer: 'sagi',
    explantion: '\n      汉字: 詐欺\n      读音: さぎ\n      意思: fraud\n      来源:  swindle\n      同义词: 詐欺\n    ',
  },
  {
    question: '座談会',
    answer: 'zadankai',
    explantion: '\n      汉字: 座談会\n      读音: ざだんかい\n      意思: symposium\n      来源:  round-table discussion\n      同义词: 座談会\n    ',
  },
  {
    question: '催す',
    answer: 'moyoosu',
    explantion: '\n      汉字: 催す\n      读音: もよおす\n      意思: to hold (a meeting)\n      来源:  to give (a dinner)\n      同义词: 催す\n    ',
  },
  {
    question: '再',
    answer: 'sai',
    explantion: '\n      汉字: 再\n      读音: さい\n      意思: re-\n      来源:  again\n      同义词: 再\n    ',
  },
  {
    question: '再会',
    answer: 'saikai',
    explantion: '\n      汉字: 再会\n      读音: さいかい\n      意思: another meeting\n      来源:  meeting again\n      同义词: 再会\n    ',
  },
  {
    question: '再建',
    answer: 'saiken',
    explantion: '\n      汉字: 再建\n      读音: さいけん\n      意思: rebuilding\n      来源:  reconstruction\n      同义词: 再建\n    ',
  },
  {
    question: '再現',
    answer: 'saigen',
    explantion: '\n      汉字: 再現\n      读音: さいげん\n      意思: reappearance\n      来源:  reproduction\n      同义词: 再現\n    ',
  },
  {
    question: '再生',
    answer: 'saisei',
    explantion: '\n      汉字: 再生\n      读音: さいせい\n      意思: playback\n      来源:  regeneration\n      同义词: 再生\n    ',
  },
  {
    question: '再発',
    answer: 'saihatsu',
    explantion: '\n      汉字: 再発\n      读音: さいはつ\n      意思: return\n      来源:  relapse\n      同义词: 再発\n    ',
  },
  {
    question: '最善',
    answer: 'saizen',
    explantion: '\n      汉字: 最善\n      读音: さいぜん\n      意思: the very best\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '最早',
    answer: 'mohaya',
    explantion: '\n      汉字: 最早\n      读音: もはや\n      意思: already\n      来源:  now\n      同义词: 最早, \n    ',
  },
  {
    question: '採掘',
    answer: 'saikutsu',
    explantion: '\n      汉字: 採掘\n      读音: さいくつ\n      意思: mining\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '採決',
    answer: 'saiketsu',
    explantion: '\n      汉字: 採決\n      读音: さいけつ\n      意思: vote\n      来源:  roll call\n      同义词: 採決\n    ',
  },
  {
    question: '採算',
    answer: 'saisan',
    explantion: '\n      汉字: 採算\n      读音: さいさん\n      意思: profit\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '採集',
    answer: 'saishu',
    explantion: '\n      汉字: 採集\n      读音: さいしゅう\n      意思: collecting\n      来源:  gathering\n      同义词: 採集\n    ',
  },
  {
    question: '採択',
    answer: 'saitaku',
    explantion: '\n      汉字: 採択\n      读音: さいたく\n      意思: adoption\n      来源:  selection\n      同义词: 採択\n    ',
  },
  {
    question: '採用',
    answer: 'saiyo',
    explantion: '\n      汉字: 採用\n      读音: さいよう\n      意思: use\n      来源:  adopt\n      同义词: 採用\n    ',
  },
  {
    question: '栽培',
    answer: 'saibai',
    explantion: '\n      汉字: 栽培\n      读音: さいばい\n      意思: cultivation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '歳',
    answer: 'sai',
    explantion: '\n      汉字: 歳\n      读音: さい\n      意思: #NAME?\n      来源: waller\n      同义词: 才\n    ',
  },
  {
    question: '済ます',
    answer: 'sumasu',
    explantion: '\n      汉字: 済ます\n      读音: すます\n      意思: to finish\n      来源:  to get it over with\n      同义词: 済ます\n    ',
  },
  {
    question: '済みません',
    answer: 'sumimasen',
    explantion: '\n      汉字: 済みません\n      读音: すみません\n      意思: sorry\n      来源:  excuse me\n      同义词: 済みません\n    ',
  },
  {
    question: '災害',
    answer: 'saigai',
    explantion: '\n      汉字: 災害\n      读音: さいがい\n      意思: calamity\n      来源:  disaster\n      同义词: 災害\n    ',
  },
  {
    question: '細やか',
    answer: 'komayaka',
    explantion: '\n      汉字: 細やか\n      读音: こまやか\n      意思: friendly\n      来源: waller\n      同义词: 濃やか\n    ',
  },
  {
    question: '細菌',
    answer: 'saikin',
    explantion: '\n      汉字: 細菌\n      读音: さいきん\n      意思: bacillus\n      来源:  bacterium\n      同义词: 細菌\n    ',
  },
  {
    question: '細工',
    answer: 'saiku',
    explantion: '\n      汉字: 細工\n      读音: さいく\n      意思: work\n      来源:  craftsmanship\n      同义词: 細工\n    ',
  },
  {
    question: '細胞',
    answer: 'saibou',
    explantion: '\n      汉字: 細胞\n      读音: さいぼう\n      意思: cell (biology)\n      来源: waller\n      同义词: 細胞\n    ',
  },
  {
    question: '裁く',
    answer: 'sabaku',
    explantion: '\n      汉字: 裁く\n      读音: さばく\n      意思: to judge\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '際',
    answer: 'kiwa',
    explantion: '\n      汉字: 際\n      读音: きわ\n      意思: edge\n      来源:  brink\n      同义词: 際, 際\n    ',
  },
  {
    question: '在庫',
    answer: 'zaiko',
    explantion: '\n      汉字: 在庫\n      读音: ざいこ\n      意思: stockpile\n      来源:  stock\n      同义词: 在庫\n    ',
  },
  {
    question: '財',
    answer: 'zai',
    explantion: '\n      汉字: 財\n      读音: ざい\n      意思: fortune\n      来源:  riches\n      同义词: 財\n    ',
  },
  {
    question: '財源',
    answer: 'zaigen',
    explantion: '\n      汉字: 財源\n      读音: ざいげん\n      意思: source of funds\n      来源:  resources\n      同义词: 財源\n    ',
  },
  {
    question: '財政',
    answer: 'zaisei',
    explantion: '\n      汉字: 財政\n      读音: ざいせい\n      意思: economy\n      来源:  financial affairs\n      同义词: 財政\n    ',
  },
  {
    question: '冴える',
    answer: 'saeru',
    explantion: '\n      汉字: 冴える\n      读音: さえる\n      意思: to be clear\n      来源:  to be serene\n      同义词: 冴える, 冱える\n    ',
  },
  {
    question: '作',
    answer: 'saku',
    explantion: '\n      汉字: 作\n      读音: さく\n      意思: a work\n      来源:  a harvest\n      同义词: 作\n    ',
  },
  {
    question: '作り',
    answer: 'tsukuri',
    explantion: '\n      汉字: 作り\n      读音: つくり\n      意思: make-up\n      来源:  sliced raw fish\n      同义词: 作り, 造り\n    ',
  },
  {
    question: '作戦',
    answer: 'sakusen',
    explantion: '\n      汉字: 作戦\n      读音: さくせん\n      意思: military or naval operations\n      来源:  tactics\n      同义词: 作戦, 策戦\n    ',
  },
  {
    question: '作物',
    answer: 'sakubutsu',
    explantion: '\n      汉字: 作物\n      读音: さくぶつ\n      意思: literary work\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '作用',
    answer: 'sayo',
    explantion: '\n      汉字: 作用\n      读音: さよう\n      意思: action\n      来源:  operation\n      同义词: 作用\n    ',
  },
  {
    question: '削減',
    answer: 'sakugen',
    explantion: '\n      汉字: 削減\n      读音: さくげん\n      意思: cut\n      来源:  reduction\n      同义词: 削減\n    ',
  },
  {
    question: '柵',
    answer: 'saku',
    explantion: '\n      汉字: 柵\n      读音: さく\n      意思: fence\n      来源:  paling\n      同义词: 柵\n    ',
  },
  {
    question: '策',
    answer: 'saku',
    explantion: '\n      汉字: 策\n      读音: さく\n      意思: plan\n      来源:  policy\n      同义词: 策\n    ',
  },
  {
    question: '錯覚',
    answer: 'sakkaku',
    explantion: '\n      汉字: 錯覚\n      读音: さっかく\n      意思: optical illusion\n      来源:  hallucination\n      同义词: 錯覚\n    ',
  },
  {
    question: '錯誤',
    answer: 'sakugo',
    explantion: '\n      汉字: 錯誤\n      读音: さくご\n      意思: mistake\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '冊',
    answer: 'satsu',
    explantion: '\n      汉字: 冊\n      读音: さつ\n      意思: counter for books\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '察する',
    answer: 'sassuru',
    explantion: '\n      汉字: 察する\n      读音: さっする\n      意思: to guess\n      来源:  to sense\n      同义词: 察する\n    ',
  },
  {
    question: '擦れ違い',
    answer: 'surechigai',
    explantion: '\n      汉字: 擦れ違い\n      读音: すれちがい\n      意思: chance encounter\n      来源: waller\n      同义词: すれ違い\n    ',
  },
  {
    question: '殺人',
    answer: 'satsujin',
    explantion: '\n      汉字: 殺人\n      读音: さつじん\n      意思: murder\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '雑',
    answer: 'zatsu',
    explantion: '\n      汉字: 雑\n      读音: ざつ\n      意思: rough\n      来源:  crude\n      同义词: 雑\n    ',
  },
  {
    question: '雑貨',
    answer: 'zakka',
    explantion: '\n      汉字: 雑貨\n      读音: ざっか\n      意思: miscellaneous goods\n      来源:  general goods\n      同义词: 雑貨\n    ',
  },
  {
    question: '雑談',
    answer: 'zatsudan',
    explantion: '\n      汉字: 雑談\n      读音: ざつだん\n      意思: chatting\n      来源:  idle talk\n      同义词: 雑談\n    ',
  },
  {
    question: '雑木',
    answer: 'zatsuboku',
    explantion: '\n      汉字: 雑木\n      读音: ざつぼく\n      意思: various kinds of small trees\n      来源:  assorted trees\n      同义词: 雑木, 雑木, 雑木\n    ',
  },
  {
    question: '三日月',
    answer: 'mikazuki',
    explantion: '\n      汉字: 三日月\n      读音: みかずき\n      意思: new moon\n      来源:  crescent moon\n      同义词: 三日月\n    ',
  },
  {
    question: '参議院',
    answer: 'sangiin',
    explantion: '\n      汉字: 参議院\n      读音: さんぎいん\n      意思: House of Councillors\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '参照',
    answer: 'sansho',
    explantion: '\n      汉字: 参照\n      读音: さんしょう\n      意思: reference\n      来源:  consultation\n      同义词: 参照\n    ',
  },
  {
    question: '参上',
    answer: 'sanjou',
    explantion: '\n      汉字: 参上\n      读音: さんじょう\n      意思: calling on\n      来源:  visiting\n      同义词: 参上\n    ',
  },
  {
    question: '山岳',
    answer: 'sangaku',
    explantion: '\n      汉字: 山岳\n      读音: さんがく\n      意思: mountains\n      来源: waller\n      同义词: 山嶽\n    ',
  },
  {
    question: '山腹',
    answer: 'sampuku',
    explantion: '\n      汉字: 山腹\n      读音: さんぷく\n      意思: hillside\n      来源:  mountainside\n      同义词: 山腹\n    ',
  },
  {
    question: '山脈',
    answer: 'sanmyaku',
    explantion: '\n      汉字: 山脈\n      读音: さんみゃく\n      意思: mountain range\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '惨め',
    answer: 'mijime',
    explantion: '\n      汉字: 惨め\n      读音: みじめ\n      意思: miserable\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '桟橋',
    answer: 'sankyo',
    explantion: '\n      汉字: 桟橋\n      读音: さんきょう\n      意思: wharf\n      来源:  bridge\n      同义词: 桟橋, 桟橋, 棧橋, 棧橋\n    ',
  },
  {
    question: '産休',
    answer: 'sankyu',
    explantion: '\n      汉字: 産休\n      读音: さんきゅう\n      意思: maternity leave\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '産後',
    answer: 'sango',
    explantion: '\n      汉字: 産後\n      读音: さんご\n      意思: postpartum\n      来源:  after childbirth\n      同义词: 産後\n    ',
  },
  {
    question: '産出',
    answer: 'sanshutsu',
    explantion: '\n      汉字: 産出\n      读音: さんしゅつ\n      意思: yield\n      来源:  produce\n      同义词: 産出\n    ',
  },
  {
    question: '産婦人科',
    answer: 'sanfujinka',
    explantion: '\n      汉字: 産婦人科\n      读音: さんふじんか\n      意思: maternity and gynecology department\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '産物',
    answer: 'sanbutsu',
    explantion: '\n      汉字: 産物\n      读音: さんぶつ\n      意思: product\n      来源:  result\n      同义词: 産物\n    ',
  },
  {
    question: '賛美',
    answer: 'sanbi',
    explantion: '\n      汉字: 賛美\n      读音: さんび\n      意思: praise\n      来源:  adoration\n      同义词: 賛美, 讚美, 讃美\n    ',
  },
  {
    question: '酸',
    answer: 'san',
    explantion: '\n      汉字: 酸\n      读音: さん\n      意思: acid\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '酸っぱい',
    answer: 'suppai',
    explantion: '\n      汉字: 酸っぱい\n      读音: すっぱい\n      意思: sour\n      来源:  acid\n      同义词: 酸っぱい\n    ',
  },
  {
    question: '酸化',
    answer: 'sanka',
    explantion: '\n      汉字: 酸化\n      读音: さんか\n      意思: oxidation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '暫く',
    answer: 'shibaraku',
    explantion: '\n      汉字: 暫く\n      读音: しばらく\n      意思: little while\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '残金',
    answer: 'zankin',
    explantion: '\n      汉字: 残金\n      读音: ざんきん\n      意思: remaining money\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '残高',
    answer: 'zandaka',
    explantion: '\n      汉字: 残高\n      读音: ざんだか\n      意思: (bank) balance\n      来源:  remainder\n      同义词: 残高\n    ',
  },
  {
    question: '残酷',
    answer: 'zankoku',
    explantion: '\n      汉字: 残酷\n      读音: ざんこく\n      意思: cruelty\n      来源:  harshness\n      同义词: 残酷, 残刻, 惨酷\n    ',
  },
  {
    question: '仕える',
    answer: 'tsukaeru',
    explantion: '\n      汉字: 仕える\n      读音: つかえる\n      意思: to serve\n      来源:  to work for\n      同义词: 仕える, 事える\n    ',
  },
  {
    question: '仕掛ける',
    answer: 'shikakeru',
    explantion: '\n      汉字: 仕掛ける\n      读音: しかける\n      意思: to commence\n      来源:  to lay (mines)\n      同义词: 仕掛ける, 仕かける, し掛ける\n    ',
  },
  {
    question: '仕上がり',
    answer: 'shiagari',
    explantion: '\n      汉字: 仕上がり\n      读音: しあがり\n      意思: finish\n      来源:  end\n      同义词: 仕上がり, 仕上り\n    ',
  },
  {
    question: '仕上げる',
    answer: 'shiageru',
    explantion: '\n      汉字: 仕上げる\n      读音: しあげる\n      意思: to finish up\n      来源:  to complete\n      同义词: 仕上げる\n    ',
  },
  {
    question: '仕切る',
    answer: 'shikiru',
    explantion: '\n      汉字: 仕切る\n      读音: しきる\n      意思: to partition\n      来源:  to divide\n      同义词: 仕切る\n    ',
  },
  {
    question: '仕入れる',
    answer: 'shiireru',
    explantion: '\n      汉字: 仕入れる\n      读音: しいれる\n      意思: to lay in stock\n      来源:  to replenish stock\n      同义词: 仕入れる\n    ',
  },
  {
    question: '仕付ける',
    answer: 'shitsukeru',
    explantion: '\n      汉字: 仕付ける\n      读音: しつける\n      意思: to be used to a job\n      来源:  to begin to do\n      同义词: 仕付ける, , 為付ける\n    ',
  },
  {
    question: '仕様',
    answer: 'shiyo',
    explantion: '\n      汉字: 仕様\n      读音: しよう\n      意思: way\n      来源:  method\n      同义词: 仕様, 仕樣\n    ',
  },
  {
    question: '仕立てる',
    answer: 'shitateru',
    explantion: '\n      汉字: 仕立てる\n      读音: したてる\n      意思: to tailor\n      来源:  to make\n      同义词: 仕立てる\n    ',
  },
  {
    question: '遣い',
    answer: 'tsukai',
    explantion: '\n      汉字: 遣い\n      读音: つかい\n      意思: mission\n      来源:  simple task\n      同义词: 遣い, 使い\n    ',
  },
  {
    question: '使い道',
    answer: 'tsukaimichi',
    explantion: '\n      汉字: 使い道\n      读音: つかいみち\n      意思: use\n      来源: waller\n      同义词: 使いみち, 使い途\n    ',
  },
  {
    question: '使命',
    answer: 'shimei',
    explantion: '\n      汉字: 使命\n      读音: しめい\n      意思: mission\n      来源:  errand\n      同义词: 使命\n    ',
  },
  {
    question: '使用人',
    answer: 'shiyonin',
    explantion: '\n      汉字: 使用人\n      读音: しようにん\n      意思: employee\n      来源:  servant\n      同义词: 使用人\n    ',
  },
  {
    question: '刺繍',
    answer: 'shishu',
    explantion: '\n      汉字: 刺繍\n      读音: ししゅう\n      意思: embroidery\n      来源: waller\n      同义词: 刺しゅう, 刺繡\n    ',
  },
  {
    question: '司る',
    answer: 'tsukasadoru',
    explantion: '\n      汉字: 司る\n      读音: つかさどる\n      意思: to rule\n      来源:  to govern\n      同义词: 司る, 掌る, 司どる\n    ',
  },
  {
    question: '司法',
    answer: 'shiho',
    explantion: '\n      汉字: 司法\n      读音: しほう\n      意思: administration of justice\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '始発',
    answer: 'shihatsu',
    explantion: '\n      汉字: 始発\n      读音: しはつ\n      意思: first train\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '始末',
    answer: 'shimatsu',
    explantion: '\n      汉字: 始末\n      读音: しまつ\n      意思: management\n      来源:  dealing\n      同义词: 始末, 仕末\n    ',
  },
  {
    question: '児',
    answer: 'ko',
    explantion: '\n      汉字: 児\n      读音: こ\n      意思: child\n      来源:  the young of animals\n      同义词: 児\n    ',
  },
  {
    question: '子息',
    answer: 'shisoku',
    explantion: '\n      汉字: 子息\n      读音: しそく\n      意思: son\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '市街',
    answer: 'shigai',
    explantion: '\n      汉字: 市街\n      读音: しがい\n      意思: urban areas\n      来源:  the streets\n      同义词: 市街\n    ',
  },
  {
    question: '志',
    answer: 'kokorozashi',
    explantion: '\n      汉字: 志\n      读音: こころざし\n      意思: will\n      来源:  intention\n      同义词: 志\n    ',
  },
  {
    question: '志す',
    answer: 'kokorozasu',
    explantion: '\n      汉字: 志す\n      读音: こころざす\n      意思: to plan\n      来源:  to intend\n      同义词: 志す\n    ',
  },
  {
    question: '志向',
    answer: 'shiko',
    explantion: '\n      汉字: 志向\n      读音: しこう\n      意思: intention\n      来源:  aim\n      同义词: 志向\n    ',
  },
  {
    question: '志望',
    answer: 'shibou',
    explantion: '\n      汉字: 志望\n      读音: しぼう\n      意思: wish\n      来源:  desire\n      同义词: 志望\n    ',
  },
  {
    question: '思い付き',
    answer: 'omoitsuki',
    explantion: '\n      汉字: 思い付き\n      读音: おもいつき\n      意思: plan\n      来源:  idea\n      同义词: 思い付き, 思いつき\n    ',
  },
  {
    question: '思考',
    answer: 'shiko',
    explantion: '\n      汉字: 思考\n      读音: しこう\n      意思: thought\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '指揮',
    answer: 'shiki',
    explantion: '\n      汉字: 指揮\n      读音: しき\n      意思: command\n      来源:  direction\n      同义词: 指揮, 指麾\n    ',
  },
  {
    question: '指差す',
    answer: 'yubisasu',
    explantion: '\n      汉字: 指差す\n      读音: ゆびさす\n      意思: to point at\n      来源: waller\n      同义词: 指さす\n    ',
  },
  {
    question: '指示',
    answer: 'shiji',
    explantion: '\n      汉字: 指示\n      读音: しじ\n      意思: indication\n      来源:  instruction\n      同义词: 指示, 指示\n    ',
  },
  {
    question: '指図',
    answer: 'sashizu',
    explantion: '\n      汉字: 指図\n      读音: さしず\n      意思: instruction\n      来源:  mandate\n      同义词: 指図, 指し図\n    ',
  },
  {
    question: '指摘',
    answer: 'shiteki',
    explantion: '\n      汉字: 指摘\n      读音: してき\n      意思: pointing out\n      来源:  identification\n      同义词: 指摘\n    ',
  },
  {
    question: '指令',
    answer: 'shirei',
    explantion: '\n      汉字: 指令\n      读音: しれい\n      意思: orders\n      来源:  instructions\n      同义词: 指令\n    ',
  },
  {
    question: '支持',
    answer: 'shiji',
    explantion: '\n      汉字: 支持\n      读音: しじ\n      意思: support\n      来源:  maintenance\n      同义词: 支持\n    ',
  },
  {
    question: '施す',
    answer: 'hodokosu',
    explantion: '\n      汉字: 施す\n      读音: ほどこす\n      意思: to donate\n      来源:  to give\n      同义词: 施す\n    ',
  },
  {
    question: '施設',
    answer: 'shisetsu',
    explantion: '\n      汉字: 施設\n      读音: しせつ\n      意思: institution\n      来源:  establishment\n      同义词: 施設\n    ',
  },
  {
    question: '甘い',
    answer: 'umai',
    explantion: '\n      汉字: 甘い\n      读音: うまい\n      意思: delicious\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '死',
    answer: 'shi',
    explantion: '\n      汉字: 死\n      读音: し\n      意思: death\n      来源:  decease\n      同义词: 死\n    ',
  },
  {
    question: '死刑',
    answer: 'shikei',
    explantion: '\n      汉字: 死刑\n      读音: しけい\n      意思: death penalty\n      来源:  capital punishment\n      同义词: 死刑\n    ',
  },
  {
    question: '氏',
    answer: 'uji',
    explantion: '\n      汉字: 氏\n      读音: うじ\n      意思: family name\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '私',
    answer: 'atashi',
    explantion: '\n      汉字: 私\n      读音: あたし\n      意思: I (fem)\n      来源: waller\n      同义词: , , 私, , 私, 私\n    ',
  },
  {
    question: '私物',
    answer: 'shibutsu',
    explantion: '\n      汉字: 私物\n      读音: しぶつ\n      意思: private property\n      来源:  personal effects\n      同义词: 私物\n    ',
  },
  {
    question: '私有',
    answer: 'shiyuu',
    explantion: '\n      汉字: 私有\n      读音: しゆう\n      意思: private ownership\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '私用',
    answer: 'shiyo',
    explantion: '\n      汉字: 私用\n      读音: しよう\n      意思: personal use\n      来源:  private business\n      同义词: 私用\n    ',
  },
  {
    question: '脂肪',
    answer: 'shibou',
    explantion: '\n      汉字: 脂肪\n      读音: しぼう\n      意思: fat\n      来源:  grease\n      同义词: 脂肪\n    ',
  },
  {
    question: '至って',
    answer: 'itatsute',
    explantion: '\n      汉字: 至って\n      读音: いたって\n      意思: very much\n      来源:  exceedingly\n      同义词: 至って\n    ',
  },
  {
    question: '視覚',
    answer: 'shikaku',
    explantion: '\n      汉字: 視覚\n      读音: しかく\n      意思: sense of sight\n      来源:  vision\n      同义词: 視覚\n    ',
  },
  {
    question: '視察',
    answer: 'shisatsu',
    explantion: '\n      汉字: 視察\n      读音: しさつ\n      意思: inspection\n      来源:  observation\n      同义词: 視察\n    ',
  },
  {
    question: '視点',
    answer: 'shiten',
    explantion: '\n      汉字: 視点\n      读音: してん\n      意思: opinion\n      来源:  point of view\n      同义词: 視点\n    ',
  },
  {
    question: '視野',
    answer: 'shiya',
    explantion: '\n      汉字: 視野\n      读音: しや\n      意思: field of vision\n      来源:  outlook\n      同义词: 視野\n    ',
  },
  {
    question: '試み',
    answer: 'kokoromi',
    explantion: '\n      汉字: 試み\n      读音: こころみ\n      意思: trial\n      来源:  experiment\n      同义词: 試み\n    ',
  },
  {
    question: '試みる',
    answer: 'kokoromiru',
    explantion: '\n      汉字: 試みる\n      读音: こころみる\n      意思: to try\n      来源:  to test\n      同义词: 試みる, 心見る\n    ',
  },
  {
    question: '諮る',
    answer: 'hakaru',
    explantion: '\n      汉字: 諮る\n      读音: はかる\n      意思: to consult with\n      来源:  to confer\n      同义词: 諮る\n    ',
  },
  {
    question: '資格',
    answer: 'shikaku',
    explantion: '\n      汉字: 資格\n      读音: しかく\n      意思: qualifications\n      来源:  requirements\n      同义词: 資格\n    ',
  },
  {
    question: '資金',
    answer: 'shikin',
    explantion: '\n      汉字: 資金\n      读音: しきん\n      意思: funds\n      来源:  capital\n      同义词: 資金\n    ',
  },
  {
    question: '資産',
    answer: 'shisan',
    explantion: '\n      汉字: 資産\n      读音: しさん\n      意思: property\n      来源:  fortune\n      同义词: 資産\n    ',
  },
  {
    question: '賜る',
    answer: 'tamawaru',
    explantion: '\n      汉字: 賜る\n      读音: たまわる\n      意思: to grant\n      来源:  to bestow\n      同义词: 賜る, 賜わる, 給わる\n    ',
  },
  {
    question: '雌',
    answer: 'mesu',
    explantion: '\n      汉字: 雌\n      读音: めす\n      意思: female (animal)\n      来源: waller\n      同义词: , , 雌, 牝, 牝, 牸, 牸, \n    ',
  },
  {
    question: '飼育',
    answer: 'shiiku',
    explantion: '\n      汉字: 飼育\n      读音: しいく\n      意思: breeding\n      来源:  raising\n      同义词: 飼育\n    ',
  },
  {
    question: '歯科',
    answer: 'shika',
    explantion: '\n      汉字: 歯科\n      读音: しか\n      意思: dentistry\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '事業',
    answer: 'jigyou',
    explantion: '\n      汉字: 事業\n      读音: じぎょう\n      意思: project\n      来源:  enterprise\n      同义词: 事業, 事業\n    ',
  },
  {
    question: '事項',
    answer: 'jiko',
    explantion: '\n      汉字: 事項\n      读音: じこう\n      意思: matter\n      来源:  item\n      同义词: 事項\n    ',
  },
  {
    question: '事前',
    answer: 'jizen',
    explantion: '\n      汉字: 事前\n      读音: じぜん\n      意思: prior\n      来源:  beforehand\n      同义词: 事前\n    ',
  },
  {
    question: '事柄',
    answer: 'kotogara',
    explantion: '\n      汉字: 事柄\n      读音: ことがら\n      意思: matter\n      来源:  thing\n      同义词: 事柄, 事がら\n    ',
  },
  {
    question: '似通う',
    answer: 'nikayou',
    explantion: '\n      汉字: 似通う\n      读音: にかよう\n      意思: to resemble closely\n      来源: waller\n      同义词: 似かよう\n    ',
  },
  {
    question: '侍',
    answer: 'samurai',
    explantion: '\n      汉字: 侍\n      读音: さむらい\n      意思: Samurai\n      来源:  warrior\n      同义词: 侍, 侍, 士\n    ',
  },
  {
    question: '字',
    answer: 'aza',
    explantion: '\n      汉字: 字\n      读音: あざ\n      意思: section of village\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '字体',
    answer: 'jitai',
    explantion: '\n      汉字: 字体\n      读音: じたい\n      意思: type\n      来源:  font\n      同义词: 字体\n    ',
  },
  {
    question: '持ち切り',
    answer: 'mochikiri',
    explantion: '\n      汉字: 持ち切り\n      读音: もちきり\n      意思: hot topic\n      来源:  talk of the town\n      同义词: 持ち切り, 持ちきり\n    ',
  },
  {
    question: '持てる',
    answer: 'moteru',
    explantion: '\n      汉字: 持てる\n      读音: もてる\n      意思: to be well liked\n      来源:  to be popular\n      同义词: 持てる\n    ',
  },
  {
    question: '持て成す',
    answer: 'motenasu',
    explantion: '\n      汉字: 持て成す\n      读音: もてなす\n      意思: to entertain\n      来源:  to make welcome\n      同义词: 持て成す, , 持てなす\n    ',
  },
  {
    question: '持続',
    answer: 'jizoku',
    explantion: '\n      汉字: 持続\n      读音: じぞく\n      意思: continuation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '時刻表',
    answer: 'jikokuhyou',
    explantion: '\n      汉字: 時刻表\n      读音: じこくひょう\n      意思: table\n      来源:  diagram\n      同义词: 時刻表\n    ',
  },
  {
    question: '時差',
    answer: 'jisa',
    explantion: '\n      汉字: 時差\n      读音: じさ\n      意思: time difference\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '次いで',
    answer: 'tsuide',
    explantion: '\n      汉字: 次いで\n      读音: ついで\n      意思: next\n      来源:  secondly\n      同义词: 次いで\n    ',
  },
  {
    question: '治まる',
    answer: 'osamaru',
    explantion: '\n      汉字: 治まる\n      读音: おさまる\n      意思: to be at peace\n      来源:  to clamp down\n      同义词: 治まる\n    ',
  },
  {
    question: '治安',
    answer: 'chian',
    explantion: '\n      汉字: 治安\n      读音: ちあん\n      意思: public order\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '治療',
    answer: 'chiriyou',
    explantion: '\n      汉字: 治療\n      读音: ちりょう\n      意思: medical treatment\n      来源: waller\n      同义词: 治療\n    ',
  },
  {
    question: '磁器',
    answer: 'jiki',
    explantion: '\n      汉字: 磁器\n      读音: じき\n      意思: porcelain\n      来源:  china\n      同义词: 磁器\n    ',
  },
  {
    question: '磁気',
    answer: 'jiki',
    explantion: '\n      汉字: 磁気\n      读音: じき\n      意思: magnetism\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '耳鼻科',
    answer: 'jibika',
    explantion: '\n      汉字: 耳鼻科\n      读音: じびか\n      意思: otolaryngology\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '自ずから',
    answer: 'onozukara',
    explantion: '\n      汉字: 自ずから\n      读音: おのずから\n      意思: naturally\n      来源:  as a matter of course\n      同义词: 自ずから, , 自ら, 自から\n    ',
  },
  {
    question: '自我',
    answer: 'jiga',
    explantion: '\n      汉字: 自我\n      读音: じが\n      意思: self\n      来源:  the ego\n      同义词: 自我\n    ',
  },
  {
    question: '自覚',
    answer: 'jikaku',
    explantion: '\n      汉字: 自覚\n      读音: じかく\n      意思: self-conscious\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '自己',
    answer: 'jiko',
    explantion: '\n      汉字: 自己\n      读音: じこ\n      意思: self\n      来源:  oneself\n      同义词: 自己\n    ',
  },
  {
    question: '自惚れ',
    answer: 'unubore',
    explantion: '\n      汉字: 自惚れ\n      读音: うぬぼれ\n      意思: pretension\n      来源:  conceit\n      同义词: 自惚れ, , 己惚れ, 自惚\n    ',
  },
  {
    question: '自在',
    answer: 'jizai',
    explantion: '\n      汉字: 自在\n      读音: じざい\n      意思: freely\n      来源:  at will\n      同义词: 自在\n    ',
  },
  {
    question: '自主',
    answer: 'jishiyu',
    explantion: '\n      汉字: 自主\n      读音: じしゅ\n      意思: independence\n      来源:  autonomy\n      同义词: 自主\n    ',
  },
  {
    question: '自首',
    answer: 'jishiyu',
    explantion: '\n      汉字: 自首\n      读音: じしゅ\n      意思: surrender\n      来源:  give oneself up\n      同义词: 自首\n    ',
  },
  {
    question: '自信',
    answer: 'jishin',
    explantion: '\n      汉字: 自信\n      读音: じしん\n      意思: self-confidence\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '自尊心',
    answer: 'jisonshin',
    explantion: '\n      汉字: 自尊心\n      读音: じそんしん\n      意思: self-respect\n      来源:  conceit\n      同义词: 自尊心\n    ',
  },
  {
    question: '自転',
    answer: 'jiten',
    explantion: '\n      汉字: 自転\n      读音: じてん\n      意思: rotation\n      来源:  spin\n      同义词: 自転\n    ',
  },
  {
    question: '自動詞',
    answer: 'jidoshi',
    explantion: '\n      汉字: 自動詞\n      读音: じどうし\n      意思: intransitive verb (no direct obj)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '自立',
    answer: 'jiritsu',
    explantion: '\n      汉字: 自立\n      读音: じりつ\n      意思: independence\n      来源:  self-reliance\n      同义词: 自立\n    ',
  },
  {
    question: '辞職',
    answer: 'jishoku',
    explantion: '\n      汉字: 辞職\n      读音: じしょく\n      意思: resignation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '辞退',
    answer: 'jitai',
    explantion: '\n      汉字: 辞退\n      读音: じたい\n      意思: refusal\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '式場',
    answer: 'shikijiyou',
    explantion: '\n      汉字: 式場\n      读音: しきじょう\n      意思: ceremonial hall\n      来源:  place of ceremony (e.g. marriage)\n      同义词: 式場\n    ',
  },
  {
    question: '軸',
    answer: 'jiku',
    explantion: '\n      汉字: 軸\n      读音: じく\n      意思: axis\n      来源:  stem\n      同义词: 軸\n    ',
  },
  {
    question: '失格',
    answer: 'shikkaku',
    explantion: '\n      汉字: 失格\n      读音: しっかく\n      意思: disqualification\n      来源:  elimination\n      同义词: 失格\n    ',
  },
  {
    question: '失調',
    answer: 'shitsuchou',
    explantion: '\n      汉字: 失調\n      读音: しっちょう\n      意思: lack of harmony\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '嫉妬',
    answer: 'shitto',
    explantion: '\n      汉字: 嫉妬\n      读音: しっと\n      意思: jealousy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '室',
    answer: 'shitsu',
    explantion: '\n      汉字: 室\n      读音: しつ\n      意思: room\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '湿気る',
    answer: 'shikeru',
    explantion: '\n      汉字: 湿気る\n      读音: しける\n      意思: to be damp\n      来源:  to be moist\n      同义词: 湿気る, 湿気る\n    ',
  },
  {
    question: '疾っくに',
    answer: 'tokkuni',
    explantion: '\n      汉字: 疾っくに\n      读音: とっくに\n      意思: long ago\n      来源:  already\n      同义词: 疾っくに\n    ',
  },
  {
    question: '質疑',
    answer: 'shitsugi',
    explantion: '\n      汉字: 質疑\n      读音: しつぎ\n      意思: question\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '質素',
    answer: 'shisso',
    explantion: '\n      汉字: 質素\n      读音: しっそ\n      意思: simplicity\n      来源:  modesty\n      同义词: 質素\n    ',
  },
  {
    question: '実',
    answer: 'jitsu',
    explantion: '\n      汉字: 実\n      读音: じつ\n      意思: truth\n      来源:  reality\n      同义词: 実, 実\n    ',
  },
  {
    question: '実業家',
    answer: 'jitsugyouka',
    explantion: '\n      汉字: 実業家\n      读音: じつぎょうか\n      意思: industrialist\n      来源:  businessman\n      同义词: 実業家\n    ',
  },
  {
    question: '実質',
    answer: 'jisshitsu',
    explantion: '\n      汉字: 実質\n      读音: じっしつ\n      意思: substance\n      来源:  essence\n      同义词: 実質\n    ',
  },
  {
    question: '実践',
    answer: 'jissen',
    explantion: '\n      汉字: 実践\n      读音: じっせん\n      意思: practice\n      来源:  put into practice\n      同义词: 実践\n    ',
  },
  {
    question: '実態',
    answer: 'jitsutai',
    explantion: '\n      汉字: 実態\n      读音: じったい\n      意思: truth\n      来源:  fact\n      同义词: 実態\n    ',
  },
  {
    question: '実費',
    answer: 'jitsupi',
    explantion: '\n      汉字: 実費\n      读音: じっぴ\n      意思: actual expense\n      来源:  cost price\n      同义词: 実費\n    ',
  },
  {
    question: '芝',
    answer: 'shiba',
    explantion: '\n      汉字: 芝\n      读音: しば\n      意思: lawn\n      来源:  sod\n      同义词: 芝\n    ',
  },
  {
    question: '写し',
    answer: 'utsushi',
    explantion: '\n      汉字: 写し\n      读音: うつし\n      意思: copy\n      来源:  duplicate\n      同义词: 写し\n    ',
  },
  {
    question: '斜面',
    answer: 'shamen',
    explantion: '\n      汉字: 斜面\n      读音: しゃめん\n      意思: slope\n      来源:  slanting surface\n      同义词: 斜面\n    ',
  },
  {
    question: '社',
    answer: 'yashiro',
    explantion: '\n      汉字: 社\n      读音: やしろ\n      意思: Shinto shrine\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '社交',
    answer: 'shako',
    explantion: '\n      汉字: 社交\n      读音: しゃこう\n      意思: social life\n      来源:  social intercourse\n      同义词: 社交\n    ',
  },
  {
    question: '社宅',
    answer: 'shataku',
    explantion: '\n      汉字: 社宅\n      读音: しゃたく\n      意思: company owned house\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '謝絶',
    answer: 'shiyazetsu',
    explantion: '\n      汉字: 謝絶\n      读音: しゃぜつ\n      意思: refusal\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '遮る',
    answer: 'saegiru',
    explantion: '\n      汉字: 遮る\n      读音: さえぎる\n      意思: to interrupt\n      来源:  to intercept\n      同义词: 遮る, 遮る\n    ',
  },
  {
    question: '借り',
    answer: 'kari',
    explantion: '\n      汉字: 借り\n      读音: かり\n      意思: borrowing\n      来源:  debt\n      同义词: 借り\n    ',
  },
  {
    question: '若しくは',
    answer: 'moshikuwa',
    explantion: '\n      汉字: 若しくは\n      读音: もしくは\n      意思: or\n      来源:  otherwise\n      同义词: 若しくは, \n    ',
  },
  {
    question: '若干',
    answer: 'jakkan',
    explantion: '\n      汉字: 若干\n      读音: じゃっかん\n      意思: some\n      来源:  few\n      同义词: 若干, 若干, 若干, 若干, 幾許, 幾許\n    ',
  },
  {
    question: '弱',
    answer: 'jaku',
    explantion: '\n      汉字: 弱\n      读音: じゃく\n      意思: weakness\n      来源:  the weak\n      同义词: 弱\n    ',
  },
  {
    question: '弱まる',
    answer: 'yowamaru',
    explantion: '\n      汉字: 弱まる\n      读音: よわまる\n      意思: to abate\n      来源:  to weaken\n      同义词: 弱まる\n    ',
  },
  {
    question: '弱める',
    answer: 'yowameru',
    explantion: '\n      汉字: 弱める\n      读音: よわめる\n      意思: to weaken\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '弱る',
    answer: 'yowaru',
    explantion: '\n      汉字: 弱る\n      读音: よわる\n      意思: to weaken\n      来源:  to be troubled\n      同义词: 弱る\n    ',
  },
  {
    question: '主演',
    answer: 'shiyuen',
    explantion: '\n      汉字: 主演\n      读音: しゅえん\n      意思: starring\n      来源:  playing the leading part\n      同义词: 主演\n    ',
  },
  {
    question: '主観',
    answer: 'shiyukan',
    explantion: '\n      汉字: 主観\n      读音: しゅかん\n      意思: subjectivity\n      来源:  subject\n      同义词: 主観\n    ',
  },
  {
    question: '主権',
    answer: 'shiyuken',
    explantion: '\n      汉字: 主権\n      读音: しゅけん\n      意思: sovereignty\n      来源:  supremacy\n      同义词: 主権, 主權\n    ',
  },
  {
    question: '主催',
    answer: 'shiyusai',
    explantion: '\n      汉字: 主催\n      读音: しゅさい\n      意思: organization\n      来源:  sponsorship\n      同义词: 主催\n    ',
  },
  {
    question: '主食',
    answer: 'shushoku',
    explantion: '\n      汉字: 主食\n      读音: しゅしょく\n      意思: staple food\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '主人公',
    answer: 'shiyujinkou',
    explantion: '\n      汉字: 主人公\n      读音: しゅじんこう\n      意思: protagonist\n      来源:  main character\n      同义词: 主人公\n    ',
  },
  {
    question: '主体',
    answer: 'shiyutai',
    explantion: '\n      汉字: 主体\n      读音: しゅたい\n      意思: subject\n      来源:  main constituent\n      同义词: 主体\n    ',
  },
  {
    question: '主題',
    answer: 'shiyudai',
    explantion: '\n      汉字: 主題\n      读音: しゅだい\n      意思: subject\n      来源:  theme\n      同义词: 主題\n    ',
  },
  {
    question: '主導',
    answer: 'shiyudou',
    explantion: '\n      汉字: 主導\n      读音: しゅどう\n      意思: main leadership\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '主任',
    answer: 'shiyunin',
    explantion: '\n      汉字: 主任\n      读音: しゅにん\n      意思: person in charge\n      来源:  responsible official\n      同义词: 主任\n    ',
  },
  {
    question: '取り扱う',
    answer: 'toriatsukau',
    explantion: '\n      汉字: 取り扱う\n      读音: とりあつかう\n      意思: to treat\n      来源:  to handle\n      同义词: 取り扱う, 取扱う\n    ',
  },
  {
    question: '取り巻く',
    answer: 'torimaku',
    explantion: '\n      汉字: 取り巻く\n      读音: とりまく\n      意思: to surround\n      来源:  to circle\n      同义词: 取り巻く, 取巻く, 取りまく\n    ',
  },
  {
    question: '取り寄せる',
    answer: 'toriyoseru',
    explantion: '\n      汉字: 取り寄せる\n      读音: とりよせる\n      意思: to order\n      来源:  to send away for\n      同义词: 取り寄せる, 取寄せる\n    ',
  },
  {
    question: '取り混ぜる',
    answer: 'torimazeru',
    explantion: '\n      汉字: 取り混ぜる\n      读音: とりまぜる\n      意思: to mix\n      来源:  to put together\n      同义词: 取り混ぜる, 取混ぜる\n    ',
  },
  {
    question: '取り次ぐ',
    answer: 'toritsugu',
    explantion: '\n      汉字: 取り次ぐ\n      读音: とりつぐ\n      意思: to act as an agent for\n      来源:  to announce (someone)\n      同义词: 取り次ぐ, 取次ぐ, 取りつぐ, 取り継ぐ, 取継ぐ\n    ',
  },
  {
    question: '取り除く',
    answer: 'torinozoku',
    explantion: '\n      汉字: 取り除く\n      读音: とりのぞく\n      意思: to remove\n      来源:  to take away\n      同义词: 取り除く, 取除く, とり除く, 取りのぞく\n    ',
  },
  {
    question: '取り組む',
    answer: 'torikumu',
    explantion: '\n      汉字: 取り組む\n      读音: とりくむ\n      意思: to tackle\n      来源:  to wrestle with\n      同义词: 取り組む, 取組む\n    ',
  },
  {
    question: '取り調べる',
    answer: 'torishiraberu',
    explantion: '\n      汉字: 取り調べる\n      读音: とりしらべる\n      意思: to investigate\n      来源:  to examine\n      同义词: 取り調べる, 取調べる\n    ',
  },
  {
    question: '取り締まる',
    answer: 'torishimaru',
    explantion: '\n      汉字: 取り締まる\n      读音: とりしまる\n      意思: to manage\n      来源:  to control\n      同义词: 取り締まる, 取締る, 取締まる\n    ',
  },
  {
    question: '取り戻す',
    answer: 'torimodosu',
    explantion: '\n      汉字: 取り戻す\n      读音: とりもどす\n      意思: to take back\n      来源:  to regain\n      同义词: 取り戻す, 取戻す, とり戻す\n    ',
  },
  {
    question: '取り立てる',
    answer: 'toritateru',
    explantion: '\n      汉字: 取り立てる\n      读音: とりたてる\n      意思: to collect\n      来源:  to extort\n      同义词: 取り立てる, 取立てる, 取りたてる\n    ',
  },
  {
    question: '取材',
    answer: 'shiyuzai',
    explantion: '\n      汉字: 取材\n      读音: しゅざい\n      意思: choice of subject\n      来源:  collecting data\n      同义词: 取材\n    ',
  },
  {
    question: '守衛',
    answer: 'shiyuei',
    explantion: '\n      汉字: 守衛\n      读音: しゅえい\n      意思: security guard\n      来源:  doorkeeper\n      同义词: 守衛\n    ',
  },
  {
    question: '守備',
    answer: 'shubi',
    explantion: '\n      汉字: 守備\n      读音: しゅび\n      意思: defense\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '手回し',
    answer: 'temawashi',
    explantion: '\n      汉字: 手回し\n      读音: てまわし\n      意思: preparations\n      来源:  arrangements\n      同义词: 手回し\n    ',
  },
  {
    question: '手掛ける',
    answer: 'tegakeru',
    explantion: '\n      汉字: 手掛ける\n      读音: てがける\n      意思: to handle\n      来源:  to manage\n      同义词: 手掛ける, 手がける, 手懸ける\n    ',
  },
  {
    question: '手近',
    answer: 'tejika',
    explantion: '\n      汉字: 手近\n      读音: てぢか\n      意思: near\n      来源:  handy\n      同义词: 手近, 手近, 手近か, 手近か\n    ',
  },
  {
    question: '手軽',
    answer: 'tegaru',
    explantion: '\n      汉字: 手軽\n      读音: てがる\n      意思: easy\n      来源:  simple\n      同义词: 手軽\n    ',
  },
  {
    question: '手芸',
    answer: 'shiyugei',
    explantion: '\n      汉字: 手芸\n      读音: しゅげい\n      意思: handicrafts\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '手元',
    answer: 'temoto',
    explantion: '\n      汉字: 手元\n      读音: てもと\n      意思: on hand\n      来源:  at hand\n      同义词: 手元, 手許, 手もと\n    ',
  },
  {
    question: '手際',
    answer: 'tegiwa',
    explantion: '\n      汉字: 手際\n      读音: てぎわ\n      意思: performance\n      来源:  skill\n      同义词: 手際, 手ぎわ\n    ',
  },
  {
    question: '手順',
    answer: 'tejun',
    explantion: '\n      汉字: 手順\n      读音: てじゅん\n      意思: process\n      来源:  procedure\n      同义词: 手順\n    ',
  },
  {
    question: '手錠',
    answer: 'tejiyou',
    explantion: '\n      汉字: 手錠\n      读音: てじょう\n      意思: handcuffs\n      来源:  manacles\n      同义词: 手錠\n    ',
  },
  {
    question: '手数',
    answer: 'tekazu',
    explantion: '\n      汉字: 手数\n      读音: てかず\n      意思: number of moves\n      来源:  trouble\n      同义词: 手数, 手数\n    ',
  },
  {
    question: '手遅れ',
    answer: 'teokure',
    explantion: '\n      汉字: 手遅れ\n      读音: ておくれ\n      意思: too late\n      来源:  belated treatment\n      同义词: 手遅れ, 手後れ, 手おくれ\n    ',
  },
  {
    question: '手配',
    answer: 'tehai',
    explantion: '\n      汉字: 手配\n      读音: てはい\n      意思: arrangement\n      来源:  search (by police)\n      同义词: 手配\n    ',
  },
  {
    question: '手筈',
    answer: 'tehazu',
    explantion: '\n      汉字: 手筈\n      读音: てはず\n      意思: arrangement\n      来源:  plan\n      同义词: 手筈, 手はず\n    ',
  },
  {
    question: '手分け',
    answer: 'tewake',
    explantion: '\n      汉字: 手分け\n      读音: てわけ\n      意思: division of labour\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '手法',
    answer: 'shiyuhou',
    explantion: '\n      汉字: 手法\n      读音: しゅほう\n      意思: technique\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '手本',
    answer: 'tehon',
    explantion: '\n      汉字: 手本\n      读音: てほん\n      意思: model\n      来源:  pattern\n      同义词: 手本\n    ',
  },
  {
    question: '殊に',
    answer: 'kotoni',
    explantion: '\n      汉字: 殊に\n      读音: ことに\n      意思: especially\n      来源:  above all\n      同义词: 殊に, 異に\n    ',
  },
  {
    question: '種',
    answer: 'shiyu',
    explantion: '\n      汉字: 種\n      读音: しゅ\n      意思: kind\n      来源:  variety\n      同义词: 種\n    ',
  },
  {
    question: '腫れる',
    answer: 'hareru',
    explantion: '\n      汉字: 腫れる\n      读音: はれる\n      意思: to swell (from inflammation)\n      来源:  to become swollen\n      同义词: 腫れる, 脹れる\n    ',
  },
  {
    question: '趣',
    answer: 'omomuki',
    explantion: '\n      汉字: 趣\n      读音: おもむき\n      意思: meaning\n      来源:  tenor\n      同义词: 趣, 趣き\n    ',
  },
  {
    question: '趣旨',
    answer: 'shiyushi',
    explantion: '\n      汉字: 趣旨\n      读音: しゅし\n      意思: object\n      来源:  meaning\n      同义词: 趣旨, 主旨\n    ',
  },
  {
    question: '首飾り',
    answer: 'kubikazari',
    explantion: '\n      汉字: 首飾り\n      读音: くびかざり\n      意思: necklace\n      来源: waller\n      同义词: 頸飾り, 頚飾り\n    ',
  },
  {
    question: '首脳',
    answer: 'shiyunou',
    explantion: '\n      汉字: 首脳\n      读音: しゅのう\n      意思: head\n      来源:  brains\n      同义词: 首脳, 主脳\n    ',
  },
  {
    question: '首輪',
    answer: 'kubiwa',
    explantion: '\n      汉字: 首輪\n      读音: くびわ\n      意思: necklace\n      来源:  choker\n      同义词: 首輪, 頸環, 頸輪, 頚輪\n    ',
  },
  {
    question: '受かる',
    answer: 'ukaru',
    explantion: '\n      汉字: 受かる\n      读音: うかる\n      意思: to pass (examination)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '受け継ぐ',
    answer: 'uketsugu',
    explantion: '\n      汉字: 受け継ぐ\n      读音: うけつぐ\n      意思: to inherit\n      来源:  to succeed\n      同义词: 受け継ぐ, 受けつぐ\n    ',
  },
  {
    question: '受け止める',
    answer: 'uketomeru',
    explantion: '\n      汉字: 受け止める\n      读音: うけとめる\n      意思: to catch\n      来源:  to stop the blow\n      同义词: 受け止める, 受けとめる\n    ',
  },
  {
    question: '受け入れ',
    answer: 'ukeire',
    explantion: '\n      汉字: 受け入れ\n      读音: うけいれ\n      意思: receiving\n      来源:  acceptance\n      同义词: 受け入れ, 受入れ, 受入\n    ',
  },
  {
    question: '受け入れる',
    answer: 'ukeireru',
    explantion: '\n      汉字: 受け入れる\n      读音: うけいれる\n      意思: to accept\n      来源:  to receive\n      同义词: 受け入れる, 受入れる, 受け容れる, 受けいれる, 受容れる\n    ',
  },
  {
    question: '受け付ける',
    answer: 'uketsukeru',
    explantion: '\n      汉字: 受け付ける\n      读音: うけつける\n      意思: to be accepted\n      来源:  to receive (an application)\n      同义词: 受け付ける, 受けつける, 受付ける\n    ',
  },
  {
    question: '受け取り',
    answer: 'uketori',
    explantion: '\n      汉字: 受け取り\n      读音: うけとり\n      意思: receipt\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '受身',
    answer: 'ukemi',
    explantion: '\n      汉字: 受身\n      读音: うけみ\n      意思: passive\n      来源:  passive voice\n      同义词: 受身, 受け身\n    ',
  },
  {
    question: '授ける',
    answer: 'sazukeru',
    explantion: '\n      汉字: 授ける\n      读音: さずける\n      意思: to grant\n      来源:  to award\n      同义词: 授ける\n    ',
  },
  {
    question: '樹木',
    answer: 'jiyumoku',
    explantion: '\n      汉字: 樹木\n      读音: じゅもく\n      意思: trees and shrubs\n      来源:  arbour\n      同义词: 樹木\n    ',
  },
  {
    question: '樹立',
    answer: 'jiyuritsu',
    explantion: '\n      汉字: 樹立\n      读音: じゅりつ\n      意思: establish\n      来源:  create\n      同义词: 樹立\n    ',
  },
  {
    question: '収まる',
    answer: 'osamaru',
    explantion: '\n      汉字: 収まる\n      读音: おさまる\n      意思: to be obtained\n      来源:  to end\n      同义词: 収まる, 納まる\n    ',
  },
  {
    question: '収益',
    answer: 'shiyuueki',
    explantion: '\n      汉字: 収益\n      读音: しゅうえき\n      意思: earnings\n      来源:  proceeds\n      同义词: 収益\n    ',
  },
  {
    question: '収支',
    answer: 'shushi',
    explantion: '\n      汉字: 収支\n      读音: しゅうし\n      意思: income and expenditure\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '収容',
    answer: 'shuyo',
    explantion: '\n      汉字: 収容\n      读音: しゅうよう\n      意思: accommodation\n      来源:  reception\n      同义词: 収容\n    ',
  },
  {
    question: '周',
    answer: 'shu',
    explantion: '\n      汉字: 周\n      读音: しゅう\n      意思: circuit\n      来源:  lap\n      同义词: 周\n    ',
  },
  {
    question: '周期',
    answer: 'shuki',
    explantion: '\n      汉字: 周期\n      读音: しゅうき\n      意思: cycle\n      来源:  period\n      同义词: 周期\n    ',
  },
  {
    question: '就業',
    answer: 'shugyo',
    explantion: '\n      汉字: 就業\n      读音: しゅうぎょう\n      意思: employment\n      来源:  starting work\n      同义词: 就業\n    ',
  },
  {
    question: '修学',
    answer: 'shugaku',
    explantion: '\n      汉字: 修学\n      读音: しゅうがく\n      意思: learning\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '修士',
    answer: 'shushi',
    explantion: '\n      汉字: 修士\n      读音: しゅうし\n      意思: Masters degree program\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '修飾',
    answer: 'shushoku',
    explantion: '\n      汉字: 修飾\n      读音: しゅうしょく\n      意思: ornamentation\n      来源:  embellishment\n      同义词: 修飾\n    ',
  },
  {
    question: '修了',
    answer: 'shuryo',
    explantion: '\n      汉字: 修了\n      读音: しゅうりょう\n      意思: completion (of a course)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '終始',
    answer: 'shushi',
    explantion: '\n      汉字: 終始\n      读音: しゅうし\n      意思: beginning and end\n      来源:  from beginning to end\n      同义词: 終始\n    ',
  },
  {
    question: '終日',
    answer: 'shiyuujitsu',
    explantion: '\n      汉字: 終日\n      读音: しゅうじつ\n      意思: all day\n      来源: waller\n      同义词: 終日, 終日, 終日\n    ',
  },
  {
    question: '衆',
    answer: 'shu',
    explantion: '\n      汉字: 衆\n      读音: しゅう\n      意思: masses\n      来源:  great number\n      同义词: 衆, 衆\n    ',
  },
  {
    question: '衆議院',
    answer: 'shiyuugiin',
    explantion: '\n      汉字: 衆議院\n      读音: しゅうぎいん\n      意思: Lower House\n      来源:  House of Representatives\n      同义词: 衆議院\n    ',
  },
  {
    question: '襲う',
    answer: 'oso',
    explantion: '\n      汉字: 襲う\n      读音: おそう\n      意思: to attack\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '襲撃',
    answer: 'shugeki',
    explantion: '\n      汉字: 襲撃\n      读音: しゅうげき\n      意思: attack\n      来源:  charge\n      同义词: 襲撃\n    ',
  },
  {
    question: '蹴飛ばす',
    answer: 'ketobasu',
    explantion: '\n      汉字: 蹴飛ばす\n      读音: けとばす\n      意思: to kick away\n      来源:  to kick off\n      同义词: 蹴飛ばす, 蹴とばす\n    ',
  },
  {
    question: '集まる',
    answer: 'atsumaru',
    explantion: '\n      汉字: 集まる\n      读音: あつまる\n      意思: to gather\n      来源:  to collect\n      同义词: 集まる\n    ',
  },
  {
    question: '集計',
    answer: 'shukei',
    explantion: '\n      汉字: 集計\n      读音: しゅうけい\n      意思: totalization\n      来源:  aggregate\n      同义词: 集計\n    ',
  },
  {
    question: '住',
    answer: 'ju',
    explantion: '\n      汉字: 住\n      读音: じゅう\n      意思: dwelling\n      来源:  living\n      同义词: 住\n    ',
  },
  {
    question: '充実',
    answer: 'jujitsu',
    explantion: '\n      汉字: 充実\n      读音: じゅうじつ\n      意思: fullness\n      来源:  completion\n      同义词: 充実\n    ',
  },
  {
    question: '十字路',
    answer: 'jujiro',
    explantion: '\n      汉字: 十字路\n      读音: じゅうじろ\n      意思: crossroads\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '十分',
    answer: 'jitsupun',
    explantion: '\n      汉字: 十分\n      读音: じっぷん\n      意思: 10 minutes\n      来源: waller\n      同义词: １０分, １０分, 十分\n    ',
  },
  {
    question: '従業員',
    answer: 'jugyouin',
    explantion: '\n      汉字: 従業員\n      读音: じゅうぎょういん\n      意思: employee\n      来源:  worker\n      同义词: 従業員\n    ',
  },
  {
    question: '従事',
    answer: 'juji',
    explantion: '\n      汉字: 従事\n      读音: じゅうじ\n      意思: engaging\n      来源:  pursuing\n      同义词: 従事\n    ',
  },
  {
    question: '従来',
    answer: 'jurai',
    explantion: '\n      汉字: 従来\n      读音: じゅうらい\n      意思: up to now\n      来源:  so far\n      同义词: 従来\n    ',
  },
  {
    question: '柔軟',
    answer: 'junan',
    explantion: '\n      汉字: 柔軟\n      读音: じゅうなん\n      意思: flexible\n      来源:  lithe\n      同义词: 柔軟\n    ',
  },
  {
    question: '渋い',
    answer: 'shibui',
    explantion: '\n      汉字: 渋い\n      读音: しぶい\n      意思: 1. tasteful (clothing)\n      来源:  cool\n      同义词: 渋い, 澁い\n    ',
  },
  {
    question: '獣',
    answer: 'kedamono',
    explantion: '\n      汉字: 獣\n      读音: けだもの\n      意思: beast\n      来源:  brute\n      同义词: 獣, 獣, 獣, \n    ',
  },
  {
    question: '重',
    answer: 'e',
    explantion: '\n      汉字: 重\n      读音: え\n      意思: -fold\n      来源:  -ply\n      同义词: 重\n    ',
  },
  {
    question: '重んじる',
    answer: 'omonjiru',
    explantion: '\n      汉字: 重んじる\n      读音: おもんじる\n      意思: to respect\n      来源:  to honor\n      同义词: 重んじる\n    ',
  },
  {
    question: '重んずる',
    answer: 'omonzuru',
    explantion: '\n      汉字: 重んずる\n      读音: おもんずる\n      意思: to honor\n      来源:  to respect\n      同义词: 重んずる\n    ',
  },
  {
    question: '重役',
    answer: 'omoyaku',
    explantion: '\n      汉字: 重役\n      读音: おもやく\n      意思: heavy responsibilities\n      来源:  director\n      同义词: 重役\n    ',
  },
  {
    question: '宿命',
    answer: 'shukumei',
    explantion: '\n      汉字: 宿命\n      读音: しゅくめい\n      意思: fate\n      来源:  destiny\n      同义词: 宿命\n    ',
  },
  {
    question: '祝賀',
    answer: 'shukuga',
    explantion: '\n      汉字: 祝賀\n      读音: しゅくが\n      意思: celebration\n      来源:  congratulations\n      同义词: 祝賀\n    ',
  },
  {
    question: '縮まる',
    answer: 'chijimaru',
    explantion: '\n      汉字: 縮まる\n      读音: ちぢまる\n      意思: to be shortened\n      来源:  to be contracted\n      同义词: 縮まる\n    ',
  },
  {
    question: '塾',
    answer: 'jiyuku',
    explantion: '\n      汉字: 塾\n      读音: じゅく\n      意思: coaching school\n      来源:  lessons\n      同义词: 塾\n    ',
  },
  {
    question: '出くわす',
    answer: 'dekuwasu',
    explantion: '\n      汉字: 出くわす\n      读音: でくわす\n      意思: to happen to meet\n      来源:  to come across\n      同义词: 出くわす, 出会す, 出喰わす\n    ',
  },
  {
    question: '出演',
    answer: 'shutsuen',
    explantion: '\n      汉字: 出演\n      读音: しゅつえん\n      意思: performance\n      来源:  stage appearance\n      同义词: 出演\n    ',
  },
  {
    question: '出血',
    answer: 'shukketsu',
    explantion: '\n      汉字: 出血\n      读音: しゅっけつ\n      意思: bleeding\n      来源:  haemorrhage\n      同义词: 出血\n    ',
  },
  {
    question: '出産',
    answer: 'shussan',
    explantion: '\n      汉字: 出産\n      读音: しゅっさん\n      意思: (child)birth\n      来源:  delivery\n      同义词: 出産\n    ',
  },
  {
    question: '出社',
    answer: 'shussha',
    explantion: '\n      汉字: 出社\n      读音: しゅっしゃ\n      意思: arrival (in a country at work etc.)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '出世',
    answer: 'shusse',
    explantion: '\n      汉字: 出世\n      读音: しゅっせ\n      意思: promotion\n      来源:  successful career\n      同义词: 出世\n    ',
  },
  {
    question: '出切る',
    answer: 'dekiru',
    explantion: '\n      汉字: 出切る\n      读音: できる\n      意思: to be out of\n      来源:  to have no more at hand\n      同义词: 出切る\n    ',
  },
  {
    question: '出題',
    answer: 'shutsudai',
    explantion: '\n      汉字: 出題\n      读音: しゅつだい\n      意思: proposing a question\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '出鱈目',
    answer: 'detarame',
    explantion: '\n      汉字: 出鱈目\n      读音: でたらめ\n      意思: irresponsible utterance\n      来源:  nonsense\n      同义词: 出鱈目\n    ',
  },
  {
    question: '出直し',
    answer: 'denaoshi',
    explantion: '\n      汉字: 出直し\n      读音: でなおし\n      意思: adjustment\n      来源:  touch up\n      同义词: 出直し\n    ',
  },
  {
    question: '出動',
    answer: 'shutsudo',
    explantion: '\n      汉字: 出動\n      读音: しゅつどう\n      意思: sailing\n      来源:  marching\n      同义词: 出動\n    ',
  },
  {
    question: '出費',
    answer: 'shuppi',
    explantion: '\n      汉字: 出費\n      读音: しゅっぴ\n      意思: expenses\n      来源:  disbursements\n      同义词: 出費\n    ',
  },
  {
    question: '出品',
    answer: 'shuppin',
    explantion: '\n      汉字: 出品\n      读音: しゅっぴん\n      意思: exhibit\n      来源:  display\n      同义词: 出品\n    ',
  },
  {
    question: '準じる',
    answer: 'junjiru',
    explantion: '\n      汉字: 準じる\n      读音: じゅんじる\n      意思: to follow\n      来源:  to conform\n      同义词: 準じる, 准じる\n    ',
  },
  {
    question: '準ずる',
    answer: 'junzuru',
    explantion: '\n      汉字: 準ずる\n      读音: じゅんずる\n      意思: to apply correspondingly\n      来源:  to correspond to\n      同义词: 準ずる, 准ずる\n    ',
  },
  {
    question: '準急',
    answer: 'junkyu',
    explantion: '\n      汉字: 準急\n      读音: じゅんきゅう\n      意思: local express (train slower than an express)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '潤う',
    answer: 'uruou',
    explantion: '\n      汉字: 潤う\n      读音: うるおう\n      意思: to be moist\n      来源:  to be damp\n      同义词: 潤う, 霑う\n    ',
  },
  {
    question: '盾',
    answer: 'tate',
    explantion: '\n      汉字: 盾\n      读音: たて\n      意思: shield\n      来源:  buckler\n      同义词: 盾, 楯\n    ',
  },
  {
    question: '処置',
    answer: 'shiyochi',
    explantion: '\n      汉字: 処置\n      读音: しょち\n      意思: treatment\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '処罰',
    answer: 'shobatsu',
    explantion: '\n      汉字: 処罰\n      读音: しょばつ\n      意思: punishment\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '処分',
    answer: 'shobun',
    explantion: '\n      汉字: 処分\n      读音: しょぶん\n      意思: disposal\n      来源:  dealing\n      同义词: 処分\n    ',
  },
  {
    question: '初',
    answer: 'hatsu',
    explantion: '\n      汉字: 初\n      读音: はつ\n      意思: first\n      来源:  new\n      同义词: 初, 初\n    ',
  },
  {
    question: '初耳',
    answer: 'watsumimi',
    explantion: '\n      汉字: 初耳\n      读音: はつみみ\n      意思: something heard for the first time\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '初版',
    answer: 'shohan',
    explantion: '\n      汉字: 初版\n      读音: しょはん\n      意思: first edition\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '所で',
    answer: 'tokorode',
    explantion: '\n      汉字: 所で\n      读音: ところで\n      意思: by the way\n      来源:  even if\n      同义词: 所で\n    ',
  },
  {
    question: '所謂',
    answer: 'iwayuru',
    explantion: '\n      汉字: 所謂\n      读音: いわゆる\n      意思: the so-called\n      来源:  so to speak\n      同义词: 所謂\n    ',
  },
  {
    question: '所在',
    answer: 'shiyozai',
    explantion: '\n      汉字: 所在\n      读音: しょざい\n      意思: whereabouts\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '所持',
    answer: 'shoji',
    explantion: '\n      汉字: 所持\n      读音: しょじ\n      意思: possession\n      来源:  owning\n      同义词: 所持\n    ',
  },
  {
    question: '所属',
    answer: 'shiyozoku',
    explantion: '\n      汉字: 所属\n      读音: しょぞく\n      意思: attached to\n      来源:  belong to\n      同义词: 所属\n    ',
  },
  {
    question: '所定',
    answer: 'shotei',
    explantion: '\n      汉字: 所定\n      读音: しょてい\n      意思: fixed\n      来源:  prescribed\n      同义词: 所定\n    ',
  },
  {
    question: '所得',
    answer: 'shotoku',
    explantion: '\n      汉字: 所得\n      读音: しょとく\n      意思: income\n      来源:  earnings\n      同义词: 所得\n    ',
  },
  {
    question: '庶民',
    answer: 'shomin',
    explantion: '\n      汉字: 庶民\n      读音: しょみん\n      意思: masses\n      来源:  common people\n      同义词: 庶民\n    ',
  },
  {
    question: '庶務',
    answer: 'shomu',
    explantion: '\n      汉字: 庶務\n      读音: しょむ\n      意思: general affairs\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '書き取る',
    answer: 'kakitoru',
    explantion: '\n      汉字: 書き取る\n      读音: かきとる\n      意思: to write down\n      来源:  to take dictation\n      同义词: 書き取る, 書取る\n    ',
  },
  {
    question: '書評',
    answer: 'shohyou',
    explantion: '\n      汉字: 書評\n      读音: しょひょう\n      意思: book review\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '諸',
    answer: 'sho',
    explantion: '\n      汉字: 諸\n      读音: しょ\n      意思: various\n      来源:  many\n      同义词: 諸\n    ',
  },
  {
    question: '諸君',
    answer: 'shokun',
    explantion: '\n      汉字: 諸君\n      读音: しょくん\n      意思: Gentlemen!\n      来源:  Ladies!\n      同义词: 諸君\n    ',
  },
  {
    question: '助',
    answer: 'jiyo',
    explantion: '\n      汉字: 助\n      读音: じょ\n      意思: help\n      来源:  rescue\n      同义词: 助\n    ',
  },
  {
    question: '助け',
    answer: 'tasuke',
    explantion: '\n      汉字: 助け\n      读音: たすけ\n      意思: assistance\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '助詞',
    answer: 'joshi',
    explantion: '\n      汉字: 助詞\n      读音: じょし\n      意思: particle\n      来源:  postposition\n      同义词: 助詞\n    ',
  },
  {
    question: '助動詞',
    answer: 'jiyodoushi',
    explantion: '\n      汉字: 助動詞\n      读音: じょどうし\n      意思: auxiliary verb\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '女史',
    answer: 'joshi',
    explantion: '\n      汉字: 女史\n      读音: じょし\n      意思: Ms.\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '女子',
    answer: 'onago',
    explantion: '\n      汉字: 女子\n      读音: おなご\n      意思: woman\n      来源:  girl\n      同义词: 女子\n    ',
  },
  {
    question: '徐行',
    answer: 'jiyokou',
    explantion: '\n      汉字: 徐行\n      读音: じょこう\n      意思: going slowly\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '除外',
    answer: 'jiyogai',
    explantion: '\n      汉字: 除外\n      读音: じょがい\n      意思: exception\n      来源:  exclusion\n      同义词: 除外\n    ',
  },
  {
    question: '勝利',
    answer: 'shori',
    explantion: '\n      汉字: 勝利\n      读音: しょうり\n      意思: victory\n      来源:  triumph\n      同义词: 勝利, 捷利\n    ',
  },
  {
    question: '召す',
    answer: 'mesu',
    explantion: '\n      汉字: 召す\n      读音: めす\n      意思: to call\n      来源:  to send for\n      同义词: 召す\n    ',
  },
  {
    question: '商',
    answer: 'sho',
    explantion: '\n      汉字: 商\n      读音: しょう\n      意思: quotient\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '唱える',
    answer: 'tonaeru',
    explantion: '\n      汉字: 唱える\n      读音: となえる\n      意思: to recite\n      来源:  to chant\n      同义词: 唱える\n    ',
  },
  {
    question: '奨励',
    answer: 'shorei',
    explantion: '\n      汉字: 奨励\n      读音: しょうれい\n      意思: encouragement\n      来源:  promotion\n      同义词: 奨励\n    ',
  },
  {
    question: '小児科',
    answer: 'shonika',
    explantion: '\n      汉字: 小児科\n      读音: しょうにか\n      意思: pediatrics\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '小切手',
    answer: 'kogitsute',
    explantion: '\n      汉字: 小切手\n      读音: こぎって\n      意思: cheque\n      来源:  check\n      同义词: 小切手\n    ',
  },
  {
    question: '小銭',
    answer: 'kozeni',
    explantion: '\n      汉字: 小銭\n      读音: こぜに\n      意思: coins\n      来源:  small change\n      同义词: 小銭\n    ',
  },
  {
    question: '小柄',
    answer: 'kogara',
    explantion: '\n      汉字: 小柄\n      读音: こがら\n      意思: short (build)\n      来源: waller\n      同义词: 小がら\n    ',
  },
  {
    question: '少数',
    answer: 'shosu',
    explantion: '\n      汉字: 少数\n      读音: しょうすう\n      意思: minority\n      来源:  few\n      同义词: 少数\n    ',
  },
  {
    question: '尚',
    answer: 'nao',
    explantion: '\n      汉字: 尚\n      读音: なお\n      意思: furthermore\n      来源:  still\n      同义词: 尚, , 猶, 尚お, 猶お\n    ',
  },
  {
    question: '尚更',
    answer: 'naosara',
    explantion: '\n      汉字: 尚更\n      读音: なおさら\n      意思: all the more\n      来源:  still less\n      同义词: 尚更, , なお更, 尚さら, 猶更, 猶さら\n    ',
  },
  {
    question: '床',
    answer: 'toko',
    explantion: '\n      汉字: 床\n      读音: とこ\n      意思: bed\n      来源:  sickbed\n      同义词: 床\n    ',
  },
  {
    question: '承諾',
    answer: 'shodaku',
    explantion: '\n      汉字: 承諾\n      读音: しょうだく\n      意思: consent\n      来源:  acquiescence\n      同义词: 承諾\n    ',
  },
  {
    question: '招き',
    answer: 'maneki',
    explantion: '\n      汉字: 招き\n      读音: まねき\n      意思: invitation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '昇進',
    answer: 'shoshin',
    explantion: '\n      汉字: 昇進\n      读音: しょうしん\n      意思: promotion\n      来源: waller\n      同义词: 昇進, 陞進, 陞進\n    ',
  },
  {
    question: '梢',
    answer: 'kozue',
    explantion: '\n      汉字: 梢\n      读音: こずえ\n      意思: treetop\n      来源: waller\n      同义词: 杪\n    ',
  },
  {
    question: '沼',
    answer: 'numa',
    explantion: '\n      汉字: 沼\n      读音: ぬま\n      意思: swamp\n      来源:  bog\n      同义词: 沼\n    ',
  },
  {
    question: '消去',
    answer: 'shiyoukyo',
    explantion: '\n      汉字: 消去\n      读音: しょうきょ\n      意思: elimination\n      来源:  erasing\n      同义词: 消去\n    ',
  },
  {
    question: '消息',
    answer: 'shosoku',
    explantion: '\n      汉字: 消息\n      读音: しょうそく\n      意思: news\n      来源:  letter\n      同义词: 消息, 消息\n    ',
  },
  {
    question: '焦げ茶',
    answer: 'kogecha',
    explantion: '\n      汉字: 焦げ茶\n      读音: こげちゃ\n      意思: black tea\n      来源: waller\n      同义词: こげ茶, 焦茶\n    ',
  },
  {
    question: '焦る',
    answer: 'aseru',
    explantion: '\n      汉字: 焦る\n      读音: あせる\n      意思: to be in a hurry\n      来源:  to be impatient\n      同义词: 焦る\n    ',
  },
  {
    question: '照り返す',
    answer: 'terikaesu',
    explantion: '\n      汉字: 照り返す\n      读音: てりかえす\n      意思: to reflect\n      来源:  to throw back light\n      同义词: 照り返す\n    ',
  },
  {
    question: '照合',
    answer: 'shogou',
    explantion: '\n      汉字: 照合\n      读音: しょうごう\n      意思: collation\n      来源:  comparison\n      同义词: 照合\n    ',
  },
  {
    question: '照明',
    answer: 'shomei',
    explantion: '\n      汉字: 照明\n      读音: しょうめい\n      意思: illumination\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '症',
    answer: 'sho',
    explantion: '\n      汉字: 症\n      读音: しょう\n      意思: illness\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '称する',
    answer: 'shosuru',
    explantion: '\n      汉字: 称する\n      读音: しょうする\n      意思: to pretend\n      来源:  to take the name of\n      同义词: 称する\n    ',
  },
  {
    question: '衝撃',
    answer: 'shogeki',
    explantion: '\n      汉字: 衝撃\n      读音: しょうげき\n      意思: shock\n      来源:  crash\n      同义词: 衝撃\n    ',
  },
  {
    question: '証',
    answer: 'akashi',
    explantion: '\n      汉字: 証\n      读音: あかし\n      意思: proof\n      来源:  evidence\n      同义词: 証, 証, 証し\n    ',
  },
  {
    question: '証拠',
    answer: 'shoko',
    explantion: '\n      汉字: 証拠\n      读音: しょうこ\n      意思: evidence\n      来源:  proof\n      同义词: 証拠, 證據\n    ',
  },
  {
    question: '証言',
    answer: 'shogen',
    explantion: '\n      汉字: 証言\n      读音: しょうげん\n      意思: evidence\n      来源:  testimony\n      同义词: 証言\n    ',
  },
  {
    question: '証人',
    answer: 'shonin',
    explantion: '\n      汉字: 証人\n      读音: しょうにん\n      意思: witness\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '詳細',
    answer: 'shosai',
    explantion: '\n      汉字: 詳細\n      读音: しょうさい\n      意思: detail\n      来源:  particulars\n      同义词: 詳細\n    ',
  },
  {
    question: '象',
    answer: 'sho',
    explantion: '\n      汉字: 象\n      读音: しょう\n      意思: phenomenon\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '象徴',
    answer: 'shochou',
    explantion: '\n      汉字: 象徴\n      读音: しょうちょう\n      意思: symbol\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '障る',
    answer: 'sawaru',
    explantion: '\n      汉字: 障る\n      读音: さわる\n      意思: to hinder\n      来源:  to interfere with\n      同义词: 障る\n    ',
  },
  {
    question: '上がり',
    answer: 'agari',
    explantion: '\n      汉字: 上がり\n      读音: あがり\n      意思: 1. slope\n      来源:  advance income\n      同义词: 上がり, , 揚がり\n    ',
  },
  {
    question: '上がる',
    answer: 'agaru',
    explantion: '\n      汉字: 上がる\n      读音: あがる\n      意思: to enter\n      来源:  to go up\n      同义词: 上がる\n    ',
  },
  {
    question: '上位',
    answer: 'jiyoui',
    explantion: '\n      汉字: 上位\n      读音: じょうい\n      意思: superior (rank not class)\n      来源:  higher order (e.g. byte)\n      同义词: 上位\n    ',
  },
  {
    question: '上演',
    answer: 'jiyouen',
    explantion: '\n      汉字: 上演\n      读音: じょうえん\n      意思: performance (e.g. music)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '上下',
    answer: 'ueshita',
    explantion: '\n      汉字: 上下\n      读音: うえした\n      意思: high and low\n      来源:  up and down\n      同义词: 上下\n    ',
  },
  {
    question: '上回る',
    answer: 'uwamawaru',
    explantion: '\n      汉字: 上回る\n      读音: うわまわる\n      意思: to exceed\n      来源: waller\n      同义词: 上まわる, 上廻る\n    ',
  },
  {
    question: '上空',
    answer: 'jiyoukuu',
    explantion: '\n      汉字: 上空\n      读音: じょうくう\n      意思: sky\n      来源:  the skies\n      同义词: 上空\n    ',
  },
  {
    question: '上司',
    answer: 'joshi',
    explantion: '\n      汉字: 上司\n      读音: じょうし\n      意思: superior authorities\n      来源:  boss\n      同义词: 上司\n    ',
  },
  {
    question: '上昇',
    answer: 'joshiyou',
    explantion: '\n      汉字: 上昇\n      读音: じょうしょう\n      意思: rising\n      来源:  ascending\n      同义词: 上昇\n    ',
  },
  {
    question: '上陸',
    answer: 'jiyouriku',
    explantion: '\n      汉字: 上陸\n      读音: じょうりく\n      意思: landing\n      来源:  disembarkation\n      同义词: 上陸\n    ',
  },
  {
    question: '丈',
    answer: 'take',
    explantion: '\n      汉字: 丈\n      读音: たけ\n      意思: height\n      来源:  stature\n      同义词: 丈, 丈, 長, 長\n    ',
  },
  {
    question: '乗っ取る',
    answer: 'nottoru',
    explantion: '\n      汉字: 乗っ取る\n      读音: のっとる\n      意思: to capture\n      来源:  to occupy\n      同义词: 乗っ取る, 乗っとる\n    ',
  },
  {
    question: '乗り込む',
    answer: 'norikomu',
    explantion: '\n      汉字: 乗り込む\n      读音: のりこむ\n      意思: to board\n      来源:  to embark on\n      同义词: 乗り込む, 乗りこむ, 乗込む\n    ',
  },
  {
    question: '城下',
    answer: 'jiyouka',
    explantion: '\n      汉字: 城下\n      读音: じょうか\n      意思: land near the castle\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '嬢',
    answer: 'jiyou',
    explantion: '\n      汉字: 嬢\n      读音: じょう\n      意思: young woman\n      来源: waller\n      同义词: 娘\n    ',
  },
  {
    question: '情',
    answer: 'jiyou',
    explantion: '\n      汉字: 情\n      读音: じょう\n      意思: feelings\n      来源:  emotion\n      同义词: 情\n    ',
  },
  {
    question: '情け',
    answer: 'nasake',
    explantion: '\n      汉字: 情け\n      读音: なさけ\n      意思: sympathy\n      来源:  compassion\n      同义词: 情け\n    ',
  },
  {
    question: '情勢',
    answer: 'jiyousei',
    explantion: '\n      汉字: 情勢\n      读音: じょうせい\n      意思: state of things\n      来源:  condition\n      同义词: 情勢, 状勢\n    ',
  },
  {
    question: '情熱',
    answer: 'jiyounetsu',
    explantion: '\n      汉字: 情熱\n      读音: じょうねつ\n      意思: passion\n      来源:  enthusiasm\n      同义词: 情熱\n    ',
  },
  {
    question: '条約',
    answer: 'jiyouyaku',
    explantion: '\n      汉字: 条約\n      读音: じょうやく\n      意思: treaty\n      来源:  pact\n      同义词: 条約\n    ',
  },
  {
    question: '杖',
    answer: 'tsue',
    explantion: '\n      汉字: 杖\n      读音: つえ\n      意思: cane\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '状',
    answer: 'jiyou',
    explantion: '\n      汉字: 状\n      读音: じょう\n      意思: shape\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '畳',
    answer: 'jiyou',
    explantion: '\n      汉字: 畳\n      读音: じょう\n      意思: #NAME?\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '蒸留',
    answer: 'joryu',
    explantion: '\n      汉字: 蒸留\n      读音: じょうりゅう\n      意思: distillation\n      来源: waller\n      同义词: 蒸溜, 蒸餾\n    ',
  },
  {
    question: '譲歩',
    answer: 'jiyouho',
    explantion: '\n      汉字: 譲歩\n      读音: じょうほ\n      意思: concession\n      来源:  conciliation\n      同义词: 譲歩\n    ',
  },
  {
    question: '植わる',
    answer: 'uwaru',
    explantion: '\n      汉字: 植わる\n      读音: うわる\n      意思: to be planted\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '植民地',
    answer: 'shiyokuminchi',
    explantion: '\n      汉字: 植民地\n      读音: しょくみんち\n      意思: colony\n      来源: waller\n      同义词: 殖民地\n    ',
  },
  {
    question: '織る',
    answer: 'oru',
    explantion: '\n      汉字: 織る\n      读音: おる\n      意思: to weave\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '織物',
    answer: 'orimono',
    explantion: '\n      汉字: 織物\n      读音: おりもの\n      意思: textile\n      来源:  fabric\n      同义词: 織物\n    ',
  },
  {
    question: '職員',
    answer: 'shokuin',
    explantion: '\n      汉字: 職員\n      读音: しょくいん\n      意思: staff member\n      来源:  personnel\n      同义词: 職員\n    ',
  },
  {
    question: '職務',
    answer: 'shokumu',
    explantion: '\n      汉字: 職務\n      读音: しょくむ\n      意思: professional duties\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '色彩',
    answer: 'shikisai',
    explantion: '\n      汉字: 色彩\n      读音: しきさい\n      意思: colour\n      来源:  hue\n      同义词: 色彩\n    ',
  },
  {
    question: '食い違う',
    answer: 'kuichigau',
    explantion: '\n      汉字: 食い違う\n      读音: くいちがう\n      意思: to cross each other\n      来源:  to run counter to\n      同义词: 食い違う, くい違う, 食いちがう, 食違う\n    ',
  },
  {
    question: '尻尾',
    answer: 'shippo',
    explantion: '\n      汉字: 尻尾\n      读音: しっぽ\n      意思: tail (animal)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '信者',
    answer: 'shinja',
    explantion: '\n      汉字: 信者\n      读音: しんじゃ\n      意思: believer\n      来源:  adherent\n      同义词: 信者\n    ',
  },
  {
    question: '信任',
    answer: 'shinnin',
    explantion: '\n      汉字: 信任\n      读音: しんにん\n      意思: trust\n      来源:  confidence\n      同义词: 信任\n    ',
  },
  {
    question: '侵す',
    answer: 'okasu',
    explantion: '\n      汉字: 侵す\n      读音: おかす\n      意思: to invade\n      来源:  to raid\n      同义词: 侵す\n    ',
  },
  {
    question: '寝かせる',
    answer: 'nekaseru',
    explantion: '\n      汉字: 寝かせる\n      读音: ねかせる\n      意思: to put to bed\n      来源:  to lay down\n      同义词: 寝かせる\n    ',
  },
  {
    question: '審議',
    answer: 'shingi',
    explantion: '\n      汉字: 審議\n      读音: しんぎ\n      意思: deliberation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '審査',
    answer: 'shinsa',
    explantion: '\n      汉字: 審査\n      读音: しんさ\n      意思: judging\n      来源:  inspection\n      同义词: 審査\n    ',
  },
  {
    question: '審判',
    answer: 'shinban',
    explantion: '\n      汉字: 審判\n      读音: しんばん\n      意思: refereeing\n      来源:  trial\n      同义词: 審判\n    ',
  },
  {
    question: '心掛け',
    answer: 'kokorogake',
    explantion: '\n      汉字: 心掛け\n      读音: こころがけ\n      意思: readiness\n      来源:  intention\n      同义词: 心掛け, 心がけ, 心懸け\n    ',
  },
  {
    question: '心掛ける',
    answer: 'kokorogakeru',
    explantion: '\n      汉字: 心掛ける\n      读音: こころがける\n      意思: to bear in mind\n      来源:  to aim to do\n      同义词: 心掛ける, 心がける, 心懸ける\n    ',
  },
  {
    question: '心強い',
    answer: 'kokorozuyoi',
    explantion: '\n      汉字: 心強い\n      读音: こころづよい\n      意思: heartening\n      来源:  reassuring\n      同义词: 心強い\n    ',
  },
  {
    question: '心細い',
    answer: 'kokorobosoi',
    explantion: '\n      汉字: 心細い\n      读音: こころぼそい\n      意思: helpless\n      来源:  forlorn\n      同义词: 心細い\n    ',
  },
  {
    question: '心情',
    answer: 'shinjiyou',
    explantion: '\n      汉字: 心情\n      读音: しんじょう\n      意思: mentality\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '心地',
    answer: 'kokochi',
    explantion: '\n      汉字: 心地\n      读音: ここち\n      意思: feeling\n      来源:  sensation\n      同义词: 心地\n    ',
  },
  {
    question: '心中',
    answer: 'shinju',
    explantion: '\n      汉字: 心中\n      读音: しんじゅう\n      意思: double suicide\n      来源:  lovers suicide\n      同义词: 心中, 心中\n    ',
  },
  {
    question: '心得',
    answer: 'kokoroe',
    explantion: '\n      汉字: 心得\n      读音: こころえ\n      意思: knowledge\n      来源:  information\n      同义词: 心得\n    ',
  },
  {
    question: '振り',
    answer: 'furi',
    explantion: '\n      汉字: 振り\n      读音: ふり\n      意思: pretence\n      来源:  show\n      同义词: 振り, , 風\n    ',
  },
  {
    question: '振興',
    answer: 'shinko',
    explantion: '\n      汉字: 振興\n      读音: しんこう\n      意思: promotion\n      来源:  encouragement\n      同义词: 振興\n    ',
  },
  {
    question: '振動',
    answer: 'shindo',
    explantion: '\n      汉字: 振動\n      读音: しんどう\n      意思: oscillation\n      来源:  vibration\n      同义词: 振動\n    ',
  },
  {
    question: '新',
    answer: 'shin',
    explantion: '\n      汉字: 新\n      读音: しん\n      意思: new\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '新興',
    answer: 'shinko',
    explantion: '\n      汉字: 新興\n      读音: しんこう\n      意思: rising\n      来源:  developing\n      同义词: 新興\n    ',
  },
  {
    question: '新婚',
    answer: 'shinkon',
    explantion: '\n      汉字: 新婚\n      读音: しんこん\n      意思: newly-wed\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '新人',
    answer: 'shinjin',
    explantion: '\n      汉字: 新人\n      读音: しんじん\n      意思: new face\n      来源:  newcomer\n      同义词: 新人\n    ',
  },
  {
    question: '新築',
    answer: 'shinchiku',
    explantion: '\n      汉字: 新築\n      读音: しんちく\n      意思: new building\n      来源:  new construction\n      同义词: 新築\n    ',
  },
  {
    question: '新入生',
    answer: 'shinnyusei',
    explantion: '\n      汉字: 新入生\n      读音: しんにゅうせい\n      意思: freshman\n      来源:  first-year student\n      同义词: 新入生\n    ',
  },
  {
    question: '浸す',
    answer: 'hitasu',
    explantion: '\n      汉字: 浸す\n      读音: ひたす\n      意思: to soak\n      来源:  to dip\n      同义词: 浸す\n    ',
  },
  {
    question: '深める',
    answer: 'fukameru',
    explantion: '\n      汉字: 深める\n      读音: ふかめる\n      意思: to deepen\n      来源:  to heighten\n      同义词: 深める\n    ',
  },
  {
    question: '申出',
    answer: 'moshide',
    explantion: '\n      汉字: 申出\n      读音: もうしで\n      意思: proposal\n      来源:  request\n      同义词: 申出, 申し出\n    ',
  },
  {
    question: '申し出る',
    answer: 'moshideru',
    explantion: '\n      汉字: 申し出る\n      读音: もうしでる\n      意思: to report to\n      来源:  to tell\n      同义词: 申し出る, 申出る\n    ',
  },
  {
    question: '申し入れる',
    answer: 'moshiireru',
    explantion: '\n      汉字: 申し入れる\n      读音: もうしいれる\n      意思: to propose\n      来源:  to suggest\n      同义词: 申し入れる\n    ',
  },
  {
    question: '申し分',
    answer: 'moshibun',
    explantion: '\n      汉字: 申し分\n      读音: もうしぶん\n      意思: objection\n      来源:  shortcomings\n      同义词: 申し分\n    ',
  },
  {
    question: '申告',
    answer: 'shinkoku',
    explantion: '\n      汉字: 申告\n      读音: しんこく\n      意思: report\n      来源:  statement\n      同义词: 申告\n    ',
  },
  {
    question: '真っ二つ',
    answer: 'mapputatsu',
    explantion: '\n      汉字: 真っ二つ\n      读音: まっぷたつ\n      意思: in two equal parts\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '真ん丸い',
    answer: 'mammarui',
    explantion: '\n      汉字: 真ん丸い\n      读音: まんまるい\n      意思: perfectly circular\n      来源: waller\n      同义词: まん丸い, 真ん円い, まん円い\n    ',
  },
  {
    question: '真ん前',
    answer: 'mammae',
    explantion: '\n      汉字: 真ん前\n      读音: まんまえ\n      意思: right in front\n      来源:  under the nose\n      同义词: 真ん前, まん前\n    ',
  },
  {
    question: '真下',
    answer: 'mashita',
    explantion: '\n      汉字: 真下\n      读音: ました\n      意思: right under\n      来源:  directly below\n      同义词: 真下\n    ',
  },
  {
    question: '真実',
    answer: 'shinjitsu',
    explantion: '\n      汉字: 真実\n      读音: しんじつ\n      意思: truth\n      来源:  reality\n      同义词: 真実, 真実\n    ',
  },
  {
    question: '真珠',
    answer: 'shinjiyu',
    explantion: '\n      汉字: 真珠\n      读音: しんじゅ\n      意思: pearl\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '真上',
    answer: 'maue',
    explantion: '\n      汉字: 真上\n      读音: まうえ\n      意思: just above\n      来源:  right overhead\n      同义词: 真上, ま上\n    ',
  },
  {
    question: '真心',
    answer: 'makokoro',
    explantion: '\n      汉字: 真心\n      读音: まこころ\n      意思: sincerity\n      来源:  devotion\n      同义词: 真心, 真心\n    ',
  },
  {
    question: '真相',
    answer: 'shinso',
    explantion: '\n      汉字: 真相\n      读音: しんそう\n      意思: truth\n      来源:  real situation\n      同义词: 真相\n    ',
  },
  {
    question: '真理',
    answer: 'shinri',
    explantion: '\n      汉字: 真理\n      读音: しんり\n      意思: truth\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '神聖',
    answer: 'shinsei',
    explantion: '\n      汉字: 神聖\n      读音: しんせい\n      意思: holiness\n      来源:  sacredness\n      同义词: 神聖\n    ',
  },
  {
    question: '神殿',
    answer: 'shinden',
    explantion: '\n      汉字: 神殿\n      读音: しんでん\n      意思: temple\n      来源:  sacred place\n      同义词: 神殿\n    ',
  },
  {
    question: '神秘',
    answer: 'shinpi',
    explantion: '\n      汉字: 神秘\n      读音: しんぴ\n      意思: mystery\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '紳士',
    answer: 'shinshi',
    explantion: '\n      汉字: 紳士\n      读音: しんし\n      意思: gentleman\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '親しむ',
    answer: 'shitashimu',
    explantion: '\n      汉字: 親しむ\n      读音: したしむ\n      意思: to be intimate with\n      来源:  to befriend\n      同义词: 親しむ\n    ',
  },
  {
    question: '親善',
    answer: 'shinzen',
    explantion: '\n      汉字: 親善\n      读音: しんぜん\n      意思: friendship\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '診療',
    answer: 'shinryo',
    explantion: '\n      汉字: 診療\n      读音: しんりょう\n      意思: medical examination and treatment\n      来源:  diagnosis\n      同义词: 診療\n    ',
  },
  {
    question: '身なり',
    answer: 'minari',
    explantion: '\n      汉字: 身なり\n      读音: みなり\n      意思: personal appearance\n      来源: waller\n      同义词: 身形\n    ',
  },
  {
    question: '身近',
    answer: 'mijika',
    explantion: '\n      汉字: 身近\n      读音: みぢか\n      意思: near oneself\n      来源:  close to one\n      同义词: 身近\n    ',
  },
  {
    question: '身振り',
    answer: 'miburi',
    explantion: '\n      汉字: 身振り\n      读音: みぶり\n      意思: gesture\n      来源: waller\n      同义词: 身ぶり, 身振\n    ',
  },
  {
    question: '辛うじて',
    answer: 'karojite',
    explantion: '\n      汉字: 辛うじて\n      读音: かろうじて\n      意思: barely\n      来源:  narrowly\n      同义词: 辛うじて, \n    ',
  },
  {
    question: '辛抱',
    answer: 'shimbo',
    explantion: '\n      汉字: 辛抱\n      读音: しんぼう\n      意思: patience\n      来源:  endurance\n      同义词: 辛抱, 辛棒\n    ',
  },
  {
    question: '進み',
    answer: 'susumi',
    explantion: '\n      汉字: 進み\n      读音: すすみ\n      意思: progress\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '進化',
    answer: 'shinka',
    explantion: '\n      汉字: 進化\n      读音: しんか\n      意思: evolution\n      来源:  progress\n      同义词: 進化\n    ',
  },
  {
    question: '進行',
    answer: 'shinko',
    explantion: '\n      汉字: 進行\n      读音: しんこう\n      意思: advance\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '進出',
    answer: 'shinshutsu',
    explantion: '\n      汉字: 進出\n      读音: しんしゅつ\n      意思: advance\n      来源:  step forward\n      同义词: 進出\n    ',
  },
  {
    question: '進呈',
    answer: 'shintei',
    explantion: '\n      汉字: 進呈\n      读音: しんてい\n      意思: presentation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '進展',
    answer: 'shinten',
    explantion: '\n      汉字: 進展\n      读音: しんてん\n      意思: progress\n      来源:  development\n      同义词: 進展\n    ',
  },
  {
    question: '進度',
    answer: 'shindo',
    explantion: '\n      汉字: 進度\n      读音: しんど\n      意思: progress\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '進路',
    answer: 'shinro',
    explantion: '\n      汉字: 進路\n      读音: しんろ\n      意思: course\n      来源:  route\n      同义词: 進路\n    ',
  },
  {
    question: '震わせる',
    answer: 'furuwaseru',
    explantion: '\n      汉字: 震わせる\n      读音: ふるわせる\n      意思: to be shaking\n      来源:  to be trembling\n      同义词: 震わせる\n    ',
  },
  {
    question: '人',
    answer: 'jin',
    explantion: '\n      汉字: 人\n      读音: じん\n      意思: man\n      来源:  person\n      同义词: 人\n    ',
  },
  {
    question: '人格',
    answer: 'jinkaku',
    explantion: '\n      汉字: 人格\n      读音: じんかく\n      意思: personality\n      来源:  character\n      同义词: 人格\n    ',
  },
  {
    question: '人材',
    answer: 'jinzai',
    explantion: '\n      汉字: 人材\n      读音: じんざい\n      意思: man of talent\n      来源: waller\n      同义词: 人財\n    ',
  },
  {
    question: '人質',
    answer: 'hitojichi',
    explantion: '\n      汉字: 人質\n      读音: ひとじち\n      意思: hostage\n      来源:  prisoner\n      同义词: 人質\n    ',
  },
  {
    question: '人情',
    answer: 'ninjo',
    explantion: '\n      汉字: 人情\n      读音: にんじょう\n      意思: humanity\n      来源:  empathy\n      同义词: 人情\n    ',
  },
  {
    question: '人体',
    answer: 'jintai',
    explantion: '\n      汉字: 人体\n      读音: じんたい\n      意思: human body\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '人柄',
    answer: 'hitogara',
    explantion: '\n      汉字: 人柄\n      读音: ひとがら\n      意思: personality\n      来源:  character\n      同义词: 人柄\n    ',
  },
  {
    question: '人民',
    answer: 'jinmin',
    explantion: '\n      汉字: 人民\n      读音: じんみん\n      意思: people\n      来源:  public\n      同义词: 人民\n    ',
  },
  {
    question: '刃',
    answer: 'wa',
    explantion: '\n      汉字: 刃\n      读音: は\n      意思: edge (of a sword)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '塵取り',
    answer: 'chiritori',
    explantion: '\n      汉字: 塵取り\n      读音: ちりとり\n      意思: dustpan\n      来源: waller\n      同义词: ちり取り, ちり取\n    ',
  },
  {
    question: '甚だ',
    answer: 'hanahada',
    explantion: '\n      汉字: 甚だ\n      读音: はなはだ\n      意思: very\n      来源:  greatly\n      同义词: 甚だ, \n    ',
  },
  {
    question: '尽きる',
    answer: 'tsukiru',
    explantion: '\n      汉字: 尽きる\n      读音: つきる\n      意思: to be used up\n      来源:  to be run out\n      同义词: 尽きる, 竭きる\n    ',
  },
  {
    question: '尽くす',
    answer: 'tsukusu',
    explantion: '\n      汉字: 尽くす\n      读音: つくす\n      意思: to exhaust\n      来源:  to run out\n      同义词: 尽くす, 尽す, 盡す\n    ',
  },
  {
    question: '迅速',
    answer: 'jinsoku',
    explantion: '\n      汉字: 迅速\n      读音: じんそく\n      意思: quick\n      来源:  fast\n      同义词: 迅速\n    ',
  },
  {
    question: '吹奏',
    answer: 'suiso',
    explantion: '\n      汉字: 吹奏\n      读音: すいそう\n      意思: playing wind instruments\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '垂れる',
    answer: 'tareru',
    explantion: '\n      汉字: 垂れる\n      读音: たれる\n      意思: to hang\n      来源:  to droop\n      同义词: 垂れる\n    ',
  },
  {
    question: '推進',
    answer: 'suishin',
    explantion: '\n      汉字: 推進\n      读音: すいしん\n      意思: propulsion\n      来源:  driving force\n      同义词: 推進\n    ',
  },
  {
    question: '推測',
    answer: 'suisoku',
    explantion: '\n      汉字: 推測\n      读音: すいそく\n      意思: guess\n      来源:  conjecture\n      同义词: 推測\n    ',
  },
  {
    question: '推理',
    answer: 'suiri',
    explantion: '\n      汉字: 推理\n      读音: すいり\n      意思: reasoning\n      来源:  inference\n      同义词: 推理\n    ',
  },
  {
    question: '水気',
    answer: 'suiki',
    explantion: '\n      汉字: 水気\n      读音: すいき\n      意思: 1. moisture\n      来源:  dampness\n      同义词: 水気, 水気, 水け\n    ',
  },
  {
    question: '水源',
    answer: 'suigen',
    explantion: '\n      汉字: 水源\n      读音: すいげん\n      意思: source of river\n      来源:  fountainhead\n      同义词: 水源\n    ',
  },
  {
    question: '水洗',
    answer: 'suisen',
    explantion: '\n      汉字: 水洗\n      读音: すいせん\n      意思: flushing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '水田',
    answer: 'suiden',
    explantion: '\n      汉字: 水田\n      读音: すいでん\n      意思: (water-filled) paddy field\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '粋',
    answer: 'iki',
    explantion: '\n      汉字: 粋\n      读音: いき\n      意思: chic\n      来源:  style\n      同义词: 粋\n    ',
  },
  {
    question: '衰える',
    answer: 'otoroeru',
    explantion: '\n      汉字: 衰える\n      读音: おとろえる\n      意思: to become weak\n      来源:  to decline\n      同义词: 衰える\n    ',
  },
  {
    question: '遂げる',
    answer: 'togeru',
    explantion: '\n      汉字: 遂げる\n      读音: とげる\n      意思: to accomplish\n      来源:  to achieve\n      同义词: 遂げる\n    ',
  },
  {
    question: '崇拝',
    answer: 'suhai',
    explantion: '\n      汉字: 崇拝\n      读音: すうはい\n      意思: worship\n      来源:  adoration\n      同义词: 崇拝\n    ',
  },
  {
    question: '嵩む',
    answer: 'kasamu',
    explantion: '\n      汉字: 嵩む\n      读音: かさむ\n      意思: to pile up\n      来源:  to increase\n      同义词: 嵩む, \n    ',
  },
  {
    question: '嵩張る',
    answer: 'kasabaru',
    explantion: '\n      汉字: 嵩張る\n      读音: かさばる\n      意思: to be bulky\n      来源:  to be unwieldy\n      同义词: 嵩張る, , かさ張る\n    ',
  },
  {
    question: '数詞',
    answer: 'suushi',
    explantion: '\n      汉字: 数詞\n      读音: すうし\n      意思: numeral\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '据える',
    answer: 'sueru',
    explantion: '\n      汉字: 据える\n      读音: すえる\n      意思: to set (table)\n      来源:  to lay (foundation)\n      同义词: 据える\n    ',
  },
  {
    question: '据え付ける',
    answer: 'suetsukeru',
    explantion: '\n      汉字: 据え付ける\n      读音: すえつける\n      意思: to install\n      来源:  to equip\n      同义词: 据え付ける, 据えつける\n    ',
  },
  {
    question: '裾',
    answer: 'suso',
    explantion: '\n      汉字: 裾\n      读音: すそ\n      意思: (trouser) cuff\n      来源:  (skirt) hem\n      同义词: 裾\n    ',
  },
  {
    question: '澄ます',
    answer: 'sumasu',
    explantion: '\n      汉字: 澄ます\n      读音: すます\n      意思: to clear\n      来源:  to make clear\n      同义词: 澄ます, 清ます\n    ',
  },
  {
    question: '世辞',
    answer: 'seji',
    explantion: '\n      汉字: 世辞\n      读音: せじ\n      意思: flattery\n      来源:  compliment\n      同义词: 世辞\n    ',
  },
  {
    question: '世帯',
    answer: 'setai',
    explantion: '\n      汉字: 世帯\n      读音: せたい\n      意思: household\n      来源: waller\n      同义词: 世帯, 所帯\n    ',
  },
  {
    question: '世代',
    answer: 'sedai',
    explantion: '\n      汉字: 世代\n      读音: せだい\n      意思: generation\n      来源:  the world\n      同义词: 世代\n    ',
  },
  {
    question: '是正',
    answer: 'zesei',
    explantion: '\n      汉字: 是正\n      读音: ぜせい\n      意思: correction\n      来源:  revision\n      同义词: 是正\n    ',
  },
  {
    question: '制',
    answer: 'sei',
    explantion: '\n      汉字: 制\n      读音: せい\n      意思: system\n      来源:  organization\n      同义词: 制\n    ',
  },
  {
    question: '制する',
    answer: 'seisuru',
    explantion: '\n      汉字: 制する\n      读音: せいする\n      意思: to control\n      来源:  to command\n      同义词: 制する\n    ',
  },
  {
    question: '制裁',
    answer: 'seisai',
    explantion: '\n      汉字: 制裁\n      读音: せいさい\n      意思: restraint\n      来源:  sanctions\n      同义词: 制裁\n    ',
  },
  {
    question: '制定',
    answer: 'seitei',
    explantion: '\n      汉字: 制定\n      读音: せいてい\n      意思: enactment\n      来源:  establishment\n      同义词: 制定\n    ',
  },
  {
    question: '制服',
    answer: 'seifuku',
    explantion: '\n      汉字: 制服\n      读音: せいふく\n      意思: uniform\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '制約',
    answer: 'seiyaku',
    explantion: '\n      汉字: 制約\n      读音: せいやく\n      意思: limitation\n      来源:  restriction\n      同义词: 制約\n    ',
  },
  {
    question: '勢力',
    answer: 'seiriyoku',
    explantion: '\n      汉字: 勢力\n      读音: せいりょく\n      意思: influence\n      来源:  power\n      同义词: 勢力\n    ',
  },
  {
    question: '姓名',
    answer: 'seimei',
    explantion: '\n      汉字: 姓名\n      读音: せいめい\n      意思: full name\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '征服',
    answer: 'seifuku',
    explantion: '\n      汉字: 征服\n      读音: せいふく\n      意思: conquest\n      来源:  subjugation\n      同义词: 征服\n    ',
  },
  {
    question: '成り立つ',
    answer: 'naritatsu',
    explantion: '\n      汉字: 成り立つ\n      读音: なりたつ\n      意思: to conclude\n      来源:  to consist of\n      同义词: 成り立つ, 成立つ\n    ',
  },
  {
    question: '成るべく',
    answer: 'narubeku',
    explantion: '\n      汉字: 成るべく\n      读音: なるべく\n      意思: as much as possible\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '成る丈',
    answer: 'narutake',
    explantion: '\n      汉字: 成る丈\n      读音: なるたけ\n      意思: as much as possible\n      来源:  if possible\n      同义词: 成る丈, , , 成る丈, 成るたけ\n    ',
  },
  {
    question: '成果',
    answer: 'seika',
    explantion: '\n      汉字: 成果\n      读音: せいか\n      意思: results\n      来源:  fruits\n      同义词: 成果\n    ',
  },
  {
    question: '成熟',
    answer: 'seijiyuku',
    explantion: '\n      汉字: 成熟\n      读音: せいじゅく\n      意思: maturity\n      来源:  ripeness\n      同义词: 成熟\n    ',
  },
  {
    question: '成年',
    answer: 'seinen',
    explantion: '\n      汉字: 成年\n      读音: せいねん\n      意思: majority\n      来源:  adult age\n      同义词: 成年\n    ',
  },
  {
    question: '政権',
    answer: 'seiken',
    explantion: '\n      汉字: 政権\n      读音: せいけん\n      意思: administration\n      来源:  political power\n      同义词: 政権\n    ',
  },
  {
    question: '政策',
    answer: 'seisaku',
    explantion: '\n      汉字: 政策\n      读音: せいさく\n      意思: political measures\n      来源:  policy\n      同义词: 政策\n    ',
  },
  {
    question: '整える',
    answer: 'totonoeru',
    explantion: '\n      汉字: 整える\n      读音: ととのえる\n      意思: to put in order\n      来源:  to get ready\n      同义词: 整える, 調える, 斉える\n    ',
  },
  {
    question: '整然',
    answer: 'seizen',
    explantion: '\n      汉字: 整然\n      读音: せいぜん\n      意思: orderly\n      来源:  regular\n      同义词: 整然, 井然\n    ',
  },
  {
    question: '整列',
    answer: 'seiretsu',
    explantion: '\n      汉字: 整列\n      读音: せいれつ\n      意思: stand in a row\n      来源:  form a line\n      同义词: 整列\n    ',
  },
  {
    question: '星座',
    answer: 'seiza',
    explantion: '\n      汉字: 星座\n      读音: せいざ\n      意思: constellation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '晴天',
    answer: 'seiten',
    explantion: '\n      汉字: 晴天\n      读音: せいてん\n      意思: fine weather\n      来源: waller\n      同义词: 晴天\n    ',
  },
  {
    question: '正しく',
    answer: 'masashiku',
    explantion: '\n      汉字: 正しく\n      读音: まさしく\n      意思: surely\n      来源:  no doubt\n      同义词: 正しく, \n    ',
  },
  {
    question: '正に',
    answer: 'masani',
    explantion: '\n      汉字: 正に\n      读音: まさに\n      意思: correctly\n      来源:  surely\n      同义词: 正に\n    ',
  },
  {
    question: '正解',
    answer: 'seikai',
    explantion: '\n      汉字: 正解\n      读音: せいかい\n      意思: correct\n      来源:  right\n      同义词: 正解\n    ',
  },
  {
    question: '正規',
    answer: 'seiki',
    explantion: '\n      汉字: 正規\n      读音: せいき\n      意思: regular\n      来源:  legal\n      同义词: 正規\n    ',
  },
  {
    question: '正義',
    answer: 'seigi',
    explantion: '\n      汉字: 正義\n      读音: せいぎ\n      意思: justice\n      来源:  right\n      同义词: 正義\n    ',
  },
  {
    question: '正常',
    answer: 'seijo',
    explantion: '\n      汉字: 正常\n      读音: せいじょう\n      意思: normalcy\n      来源:  normality\n      同义词: 正常\n    ',
  },
  {
    question: '正当',
    answer: 'seitou',
    explantion: '\n      汉字: 正当\n      读音: せいとう\n      意思: just\n      来源:  justifiable\n      同义词: 正当\n    ',
  },
  {
    question: '清らか',
    answer: 'kiyoraka',
    explantion: '\n      汉字: 清らか\n      读音: きよらか\n      意思: clean\n      来源:  pure\n      同义词: 清らか\n    ',
  },
  {
    question: '清算',
    answer: 'seisan',
    explantion: '\n      汉字: 清算\n      读音: せいさん\n      意思: liquidation\n      来源:  settlement\n      同义词: 清算\n    ',
  },
  {
    question: '清純',
    answer: 'seijun',
    explantion: '\n      汉字: 清純\n      读音: せいじゅん\n      意思: purity\n      来源:  innocence\n      同义词: 清純\n    ',
  },
  {
    question: '清濁',
    answer: 'seidaku',
    explantion: '\n      汉字: 清濁\n      读音: せいだく\n      意思: good and evil\n      来源:  purity and impurity\n      同义词: 清濁\n    ',
  },
  {
    question: '生',
    answer: 'ki',
    explantion: '\n      汉字: 生\n      读音: き\n      意思: pure\n      来源:  undiluted\n      同义词: 生\n    ',
  },
  {
    question: '生やす',
    answer: 'hayasu',
    explantion: '\n      汉字: 生やす\n      读音: はやす\n      意思: to grow\n      来源:  to cultivate\n      同义词: 生やす\n    ',
  },
  {
    question: '生まれつき',
    answer: 'umaretsuki',
    explantion: '\n      汉字: 生まれつき\n      读音: うまれつき\n      意思: by nature\n      来源:  by birth\n      同义词: 生まれつき, 生れつき, 生まれ付き, 生れ付き\n    ',
  },
  {
    question: '生育',
    answer: 'seiiku',
    explantion: '\n      汉字: 生育\n      读音: せいいく\n      意思: growth\n      来源:  development\n      同义词: 生育\n    ',
  },
  {
    question: '生温い',
    answer: 'namanurui',
    explantion: '\n      汉字: 生温い\n      读音: なまぬるい\n      意思: lukewarm\n      来源:  halfhearted\n      同义词: 生温い, 生ぬるい\n    ',
  },
  {
    question: '生計',
    answer: 'seikei',
    explantion: '\n      汉字: 生計\n      读音: せいけい\n      意思: livelihood\n      来源:  living\n      同义词: 生計\n    ',
  },
  {
    question: '生死',
    answer: 'seishi',
    explantion: '\n      汉字: 生死\n      读音: せいし\n      意思: life and death\n      来源: waller\n      同义词: 生死, 生死\n    ',
  },
  {
    question: '生臭い',
    answer: 'namagusai',
    explantion: '\n      汉字: 生臭い\n      读音: なまぐさい\n      意思: smelling of fish or blood\n      来源:  fish or meat\n      同义词: 生臭い, 腥い\n    ',
  },
  {
    question: '生真面目',
    answer: 'kimajime',
    explantion: '\n      汉字: 生真面目\n      读音: きまじめ\n      意思: too serious\n      来源:  person who is too serious\n      同义词: 生真面目, 生まじめ, 気まじめ, 気真面目\n    ',
  },
  {
    question: '生身',
    answer: 'namami',
    explantion: '\n      汉字: 生身\n      读音: なまみ\n      意思: living flesh\n      来源:  flesh and blood\n      同义词: 生身, 生身\n    ',
  },
  {
    question: '生理',
    answer: 'seiri',
    explantion: '\n      汉字: 生理\n      读音: せいり\n      意思: physiology\n      来源:  menses\n      同义词: 生理\n    ',
  },
  {
    question: '盛り上がる',
    answer: 'moriagaru',
    explantion: '\n      汉字: 盛り上がる\n      读音: もりあがる\n      意思: to rouse\n      来源:  to swell\n      同义词: 盛り上がる, 盛りあがる, 盛り上る, 盛上がる, 盛上る\n    ',
  },
  {
    question: '盛る',
    answer: 'sakaru',
    explantion: '\n      汉字: 盛る\n      读音: さかる\n      意思: to prosper\n      来源:  to flourish\n      同义词: 盛る\n    ',
  },
  {
    question: '盛装',
    answer: 'seiso',
    explantion: '\n      汉字: 盛装\n      读音: せいそう\n      意思: be dressed up\n      来源:  wear rich clothes\n      同义词: 盛装\n    ',
  },
  {
    question: '盛大',
    answer: 'seidai',
    explantion: '\n      汉字: 盛大\n      读音: せいだい\n      意思: grand\n      来源:  prosperous\n      同义词: 盛大\n    ',
  },
  {
    question: '精巧',
    answer: 'seiko',
    explantion: '\n      汉字: 精巧\n      读音: せいこう\n      意思: elaborate\n      来源:  delicate\n      同义词: 精巧\n    ',
  },
  {
    question: '精密',
    answer: 'seimitsu',
    explantion: '\n      汉字: 精密\n      读音: せいみつ\n      意思: precise\n      来源:  exact\n      同义词: 精密\n    ',
  },
  {
    question: '聖書',
    answer: 'seisho',
    explantion: '\n      汉字: 聖書\n      读音: せいしょ\n      意思: Bible\n      来源:  scriptures\n      同义词: 聖書\n    ',
  },
  {
    question: '声明',
    answer: 'seimei',
    explantion: '\n      汉字: 声明\n      读音: せいめい\n      意思: declaration\n      来源:  statement\n      同义词: 声明\n    ',
  },
  {
    question: '製',
    answer: 'sei',
    explantion: '\n      汉字: 製\n      读音: せい\n      意思: -made\n      来源:  make\n      同义词: 製\n    ',
  },
  {
    question: '製鉄',
    answer: 'seitetsu',
    explantion: '\n      汉字: 製鉄\n      读音: せいてつ\n      意思: iron manufacture\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '製法',
    answer: 'seiho',
    explantion: '\n      汉字: 製法\n      读音: せいほう\n      意思: manufacturing method\n      来源:  recipe\n      同义词: 製法\n    ',
  },
  {
    question: '西日',
    answer: 'nishibi',
    explantion: '\n      汉字: 西日\n      读音: にしび\n      意思: westering sun\n      来源: waller\n      同义词: 西陽\n    ',
  },
  {
    question: '真に',
    answer: 'makotoni',
    explantion: '\n      汉字: 真に\n      读音: まことに\n      意思: truly\n      来源:  actually\n      同义词: 真に, 誠に, 真に, 寔に, 洵に\n    ',
  },
  {
    question: '誠実',
    answer: 'seijitsu',
    explantion: '\n      汉字: 誠実\n      读音: せいじつ\n      意思: sincere\n      来源:  honest\n      同义词: 誠実\n    ',
  },
  {
    question: '青春',
    answer: 'seishun',
    explantion: '\n      汉字: 青春\n      读音: せいしゅん\n      意思: youth\n      来源:  springtime of life\n      同义词: 青春\n    ',
  },
  {
    question: '静止',
    answer: 'seishi',
    explantion: '\n      汉字: 静止\n      读音: せいし\n      意思: stillness\n      来源:  repose\n      同义词: 静止\n    ',
  },
  {
    question: '静的',
    answer: 'seiteki',
    explantion: '\n      汉字: 静的\n      读音: せいてき\n      意思: static\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '税務署',
    answer: 'zeimusho',
    explantion: '\n      汉字: 税務署\n      读音: ぜいむしょ\n      意思: tax office\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '脆い',
    answer: 'moroi',
    explantion: '\n      汉字: 脆い\n      读音: もろい\n      意思: brittle\n      来源:  fragile\n      同义词: 脆い, \n    ',
  },
  {
    question: '惜しむ',
    answer: 'oshimu',
    explantion: '\n      汉字: 惜しむ\n      读音: おしむ\n      意思: to be frugal\n      来源:  to value\n      同义词: 惜しむ, 吝しむ, 愛しむ\n    ',
  },
  {
    question: '責務',
    answer: 'sekimu',
    explantion: '\n      汉字: 責務\n      读音: せきむ\n      意思: duty\n      来源:  obligation\n      同义词: 責務\n    ',
  },
  {
    question: '赤ちゃん',
    answer: 'akachan',
    explantion: '\n      汉字: 赤ちゃん\n      读音: あかちゃん\n      意思: baby\n      来源:  infant\n      同义词: 赤ちゃん\n    ',
  },
  {
    question: '赤らむ',
    answer: 'akaramu',
    explantion: '\n      汉字: 赤らむ\n      读音: あからむ\n      意思: to become red\n      来源:  to redden\n      同义词: 赤らむ\n    ',
  },
  {
    question: '赤字',
    answer: 'akaji',
    explantion: '\n      汉字: 赤字\n      读音: あかじ\n      意思: deficit\n      来源:  go in the red\n      同义词: 赤字\n    ',
  },
  {
    question: '跡継ぎ',
    answer: 'atotsugi',
    explantion: '\n      汉字: 跡継ぎ\n      读音: あとつぎ\n      意思: heir\n      来源:  successor\n      同义词: 跡継ぎ, 後継ぎ, 跡継, 後継\n    ',
  },
  {
    question: '切ない',
    answer: 'setsunai',
    explantion: '\n      汉字: 切ない\n      读音: せつない\n      意思: painful\n      来源:  trying\n      同义词: 切ない\n    ',
  },
  {
    question: '切り',
    answer: 'kiri',
    explantion: '\n      汉字: 切り\n      读音: きり\n      意思: limits\n      来源:  end\n      同义词: 切り, , 限り, 切, 限\n    ',
  },
  {
    question: '切開',
    answer: 'sekkai',
    explantion: '\n      汉字: 切開\n      读音: せっかい\n      意思: clearing (land)\n      来源:  opening up\n      同义词: 切開\n    ',
  },
  {
    question: '切実',
    answer: 'setsujitsu',
    explantion: '\n      汉字: 切実\n      读音: せつじつ\n      意思: compelling\n      来源:  serious\n      同义词: 切実\n    ',
  },
  {
    question: '接ぐ',
    answer: 'tsugu',
    explantion: '\n      汉字: 接ぐ\n      读音: つぐ\n      意思: to join\n      来源:  to piece together\n      同义词: 接ぐ\n    ',
  },
  {
    question: '接触',
    answer: 'sesshoku',
    explantion: '\n      汉字: 接触\n      读音: せっしょく\n      意思: touch\n      来源:  contact\n      同义词: 接触\n    ',
  },
  {
    question: '接続詞',
    answer: 'setsuzokushi',
    explantion: '\n      汉字: 接続詞\n      读音: せつぞくし\n      意思: conjunction\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '折り返す',
    answer: 'orikaesu',
    explantion: '\n      汉字: 折り返す\n      读音: おりかえす\n      意思: to turn up\n      来源:  to fold back\n      同义词: 折り返す, 折返す\n    ',
  },
  {
    question: '折衷',
    answer: 'setchu',
    explantion: '\n      汉字: 折衷\n      读音: せっちゅう\n      意思: compromise\n      来源:  cross\n      同义词: 折衷, 折中\n    ',
  },
  {
    question: '設ける',
    answer: 'mokeru',
    explantion: '\n      汉字: 設ける\n      读音: もうける\n      意思: to create\n      来源:  to establish\n      同义词: 設ける\n    ',
  },
  {
    question: '設置',
    answer: 'setchi',
    explantion: '\n      汉字: 設置\n      读音: せっち\n      意思: establishment\n      来源:  institution\n      同义词: 設置\n    ',
  },
  {
    question: '設定',
    answer: 'settei',
    explantion: '\n      汉字: 設定\n      读音: せってい\n      意思: establishment\n      来源:  creation\n      同义词: 設定\n    ',
  },
  {
    question: '設立',
    answer: 'setsuritsu',
    explantion: '\n      汉字: 設立\n      读音: せつりつ\n      意思: establishment\n      来源:  foundation\n      同义词: 設立\n    ',
  },
  {
    question: '節',
    answer: 'setsu',
    explantion: '\n      汉字: 節\n      读音: せつ\n      意思: node\n      来源:  section\n      同义词: 節\n    ',
  },
  {
    question: '説く',
    answer: 'toku',
    explantion: '\n      汉字: 説く\n      读音: とく\n      意思: to explain\n      来源:  to advocate\n      同义词: 説く\n    ',
  },
  {
    question: '説得',
    answer: 'settoku',
    explantion: '\n      汉字: 説得\n      读音: せっとく\n      意思: persuasion\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '雪崩',
    answer: 'nadare',
    explantion: '\n      汉字: 雪崩\n      读音: なだれ\n      意思: avalanche\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '絶える',
    answer: 'taeru',
    explantion: '\n      汉字: 絶える\n      读音: たえる\n      意思: to die out\n      来源:  to peter out\n      同义词: 絶える, 断える\n    ',
  },
  {
    question: '絶版',
    answer: 'zeppan',
    explantion: '\n      汉字: 絶版\n      读音: ぜっぱん\n      意思: out of print\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '絶望',
    answer: 'zetsubou',
    explantion: '\n      汉字: 絶望\n      读音: ぜつぼう\n      意思: despair\n      来源:  hopelessness\n      同义词: 絶望\n    ',
  },
  {
    question: '仙',
    answer: 'sen',
    explantion: '\n      汉字: 仙\n      读音: せん\n      意思: hermit\n      来源:  wizard\n      同义词: 仙\n    ',
  },
  {
    question: '先に',
    answer: 'sakini',
    explantion: '\n      汉字: 先に\n      读音: さきに\n      意思: before\n      来源:  earlier than\n      同义词: 先に, 曩に\n    ',
  },
  {
    question: '先行',
    answer: 'senko',
    explantion: '\n      汉字: 先行\n      读音: せんこう\n      意思: preceding\n      来源:  going first\n      同义词: 先行\n    ',
  },
  {
    question: '先代',
    answer: 'sendai',
    explantion: '\n      汉字: 先代\n      读音: せんだい\n      意思: family predecessor\n      来源:  previous age\n      同义词: 先代\n    ',
  },
  {
    question: '先だって',
    answer: 'sendatte',
    explantion: '\n      汉字: 先だって\n      读音: せんだって\n      意思: recently\n      来源:  the other day\n      同义词: 先だって, 先達て\n    ',
  },
  {
    question: '先着',
    answer: 'senchaku',
    explantion: '\n      汉字: 先着\n      读音: せんちゃく\n      意思: first arrival\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '先天的',
    answer: 'sententeki',
    explantion: '\n      汉字: 先天的\n      读音: せんてんてき\n      意思: a priori\n      来源:  inborn\n      同义词: 先天的\n    ',
  },
  {
    question: '占領',
    answer: 'senryo',
    explantion: '\n      汉字: 占領\n      读音: せんりょう\n      意思: occupation\n      来源:  capture\n      同义词: 占領\n    ',
  },
  {
    question: '宣教',
    answer: 'senkyo',
    explantion: '\n      汉字: 宣教\n      读音: せんきょう\n      意思: religious mission\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '宣言',
    answer: 'sengen',
    explantion: '\n      汉字: 宣言\n      读音: せんげん\n      意思: declaration\n      来源:  proclamation\n      同义词: 宣言\n    ',
  },
  {
    question: '専ら',
    answer: 'moppara',
    explantion: '\n      汉字: 専ら\n      读音: もっぱら\n      意思: wholly\n      来源:  solely\n      同义词: 専ら, , , 専ら\n    ',
  },
  {
    question: '専修',
    answer: 'senshu',
    explantion: '\n      汉字: 専修\n      读音: せんしゅう\n      意思: specialization\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '戦災',
    answer: 'sensai',
    explantion: '\n      汉字: 戦災\n      读音: せんさい\n      意思: war damage\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '戦術',
    answer: 'senjutsu',
    explantion: '\n      汉字: 戦術\n      读音: せんじゅつ\n      意思: tactics\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '戦闘',
    answer: 'sento',
    explantion: '\n      汉字: 戦闘\n      读音: せんとう\n      意思: battle\n      来源:  fight\n      同义词: 戦闘\n    ',
  },
  {
    question: '戦力',
    answer: 'senriyoku',
    explantion: '\n      汉字: 戦力\n      读音: せんりょく\n      意思: war potential\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '浅ましい',
    answer: 'asamashii',
    explantion: '\n      汉字: 浅ましい\n      读音: あさましい\n      意思: wretched\n      来源:  miserable\n      同义词: 浅ましい, 浅間しい\n    ',
  },
  {
    question: '染まる',
    answer: 'somaru',
    explantion: '\n      汉字: 染まる\n      读音: そまる\n      意思: to dye\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '染みる',
    answer: 'shimiru',
    explantion: '\n      汉字: 染みる\n      读音: しみる\n      意思: to pierce\n      来源:  to permeate\n      同义词: 染みる, , 沁みる, 滲みる, 浸みる, 泌みる\n    ',
  },
  {
    question: '染める',
    answer: 'someru',
    explantion: '\n      汉字: 染める\n      读音: そめる\n      意思: to dye\n      来源:  to colour\n      同义词: 染める\n    ',
  },
  {
    question: '潜水',
    answer: 'sensui',
    explantion: '\n      汉字: 潜水\n      读音: せんすい\n      意思: diving\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '潜入',
    answer: 'senniyuu',
    explantion: '\n      汉字: 潜入\n      读音: せんにゅう\n      意思: infiltration\n      来源:  sneaking in\n      同义词: 潜入\n    ',
  },
  {
    question: '煽てる',
    answer: 'odateru',
    explantion: '\n      汉字: 煽てる\n      读音: おだてる\n      意思: to stir up\n      来源:  to instigate\n      同义词: 煽てる, \n    ',
  },
  {
    question: '繊維',
    answer: 'seni',
    explantion: '\n      汉字: 繊維\n      读音: せんい\n      意思: fibre\n      来源:  fiber\n      同义词: 繊維, 線維\n    ',
  },
  {
    question: '船舶',
    answer: 'sempaku',
    explantion: '\n      汉字: 船舶\n      读音: せんぱく\n      意思: ship\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '選挙',
    answer: 'senkiyo',
    explantion: '\n      汉字: 選挙\n      读音: せんきょ\n      意思: election\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '選考',
    answer: 'senko',
    explantion: '\n      汉字: 選考\n      读音: せんこう\n      意思: selection\n      来源:  screening\n      同义词: 選考, 銓衡, 詮衡\n    ',
  },
  {
    question: '鮮やか',
    answer: 'azayaka',
    explantion: '\n      汉字: 鮮やか\n      读音: あざやか\n      意思: vivid\n      来源:  clear\n      同义词: 鮮やか, 鮮か, 彩やか\n    ',
  },
  {
    question: '前',
    answer: 'zen',
    explantion: '\n      汉字: 前\n      读音: ぜん\n      意思: before\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '前置き',
    answer: 'maeoki',
    explantion: '\n      汉字: 前置き\n      读音: まえおき\n      意思: preface\n      来源:  introduction\n      同义词: 前置き\n    ',
  },
  {
    question: '前提',
    answer: 'zentei',
    explantion: '\n      汉字: 前提\n      读音: ぜんてい\n      意思: preamble\n      来源:  premise\n      同义词: 前提\n    ',
  },
  {
    question: '前途',
    answer: 'zento',
    explantion: '\n      汉字: 前途\n      读音: ぜんと\n      意思: future prospects\n      来源:  outlook\n      同义词: 前途\n    ',
  },
  {
    question: '前例',
    answer: 'zenrei',
    explantion: '\n      汉字: 前例\n      读音: ぜんれい\n      意思: precedent\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '善良',
    answer: 'zenryo',
    explantion: '\n      汉字: 善良\n      读音: ぜんりょう\n      意思: goodness\n      来源:  excellence\n      同义词: 善良\n    ',
  },
  {
    question: '然も',
    answer: 'samo',
    explantion: '\n      汉字: 然も\n      读音: さも\n      意思: with gusto\n      来源:  with satisfaction\n      同义词: 然も, \n    ',
  },
  {
    question: '左程',
    answer: 'sahodo',
    explantion: '\n      汉字: 左程\n      读音: さほど\n      意思: (not) very\n      来源:  (not) much\n      同义词: 左程, , 然程\n    ',
  },
  {
    question: '全快',
    answer: 'zenkai',
    explantion: '\n      汉字: 全快\n      读音: ぜんかい\n      意思: complete recovery of health\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '全盛',
    answer: 'zensei',
    explantion: '\n      汉字: 全盛\n      读音: ぜんせい\n      意思: height of prosperity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '全滅',
    answer: 'zenmetsu',
    explantion: '\n      汉字: 全滅\n      读音: ぜんめつ\n      意思: annihilation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '禅',
    answer: 'zen',
    explantion: '\n      汉字: 禅\n      读音: ぜん\n      意思: Zen (Buddhism)\n      来源: waller\n      同义词: 禪\n    ',
  },
  {
    question: '繕う',
    answer: 'tsukuro',
    explantion: '\n      汉字: 繕う\n      读音: つくろう\n      意思: to mend\n      来源:  to repair\n      同义词: 繕う\n    ',
  },
  {
    question: '膳',
    answer: 'zen',
    explantion: '\n      汉字: 膳\n      读音: ぜん\n      意思: (small) table\n      来源:  tray\n      同义词: 膳\n    ',
  },
  {
    question: '措置',
    answer: 'sochi',
    explantion: '\n      汉字: 措置\n      读音: そち\n      意思: measure\n      来源:  step\n      同义词: 措置\n    ',
  },
  {
    question: '疎か',
    answer: 'orosoka',
    explantion: '\n      汉字: 疎か\n      读音: おろそか\n      意思: neglect\n      来源:  negligence\n      同义词: 疎か, \n    ',
  },
  {
    question: '粗筋',
    answer: 'arasuji',
    explantion: '\n      汉字: 粗筋\n      读音: あらすじ\n      意思: outline\n      来源:  summary\n      同义词: 粗筋\n    ',
  },
  {
    question: '素材',
    answer: 'sozai',
    explantion: '\n      汉字: 素材\n      读音: そざい\n      意思: raw materials\n      来源:  subject matter\n      同义词: 素材\n    ',
  },
  {
    question: '素早い',
    answer: 'subayai',
    explantion: '\n      汉字: 素早い\n      读音: すばやい\n      意思: fast\n      来源:  quick\n      同义词: 素早い, 素速い, す早い, す速い\n    ',
  },
  {
    question: '素敵',
    answer: 'suteki',
    explantion: '\n      汉字: 素敵\n      读音: すてき\n      意思: lovely\n      来源:  dreamy\n      同义词: 素敵\n    ',
  },
  {
    question: '素朴',
    answer: 'soboku',
    explantion: '\n      汉字: 素朴\n      读音: そぼく\n      意思: simplicity\n      来源:  artlessness\n      同义词: 素朴, 素樸\n    ',
  },
  {
    question: '組み合わせる',
    answer: 'kumiawaseru',
    explantion: '\n      汉字: 組み合わせる\n      读音: くみあわせる\n      意思: to join together\n      来源:  to combine\n      同义词: 組み合わせる, 組合わせる, 組み合せる, 組合せる\n    ',
  },
  {
    question: '組み込む',
    answer: 'kumikomu',
    explantion: '\n      汉字: 組み込む\n      读音: くみこむ\n      意思: to insert\n      来源:  to include\n      同义词: 組み込む, 組込む, 組みこむ\n    ',
  },
  {
    question: '訴え',
    answer: 'uttae',
    explantion: '\n      汉字: 訴え\n      读音: うったえ\n      意思: lawsuit\n      来源:  complaint\n      同义词: 訴え\n    ',
  },
  {
    question: '訴訟',
    answer: 'sosho',
    explantion: '\n      汉字: 訴訟\n      读音: そしょう\n      意思: litigation\n      来源:  lawsuit\n      同义词: 訴訟\n    ',
  },
  {
    question: '阻む',
    answer: 'habamu',
    explantion: '\n      汉字: 阻む\n      读音: はばむ\n      意思: to keep someone from doing\n      来源:  to stop\n      同义词: 阻む, 沮む\n    ',
  },
  {
    question: '阻止',
    answer: 'soshi',
    explantion: '\n      汉字: 阻止\n      读音: そし\n      意思: obstruction\n      来源:  check\n      同义词: 阻止, 沮止\n    ',
  },
  {
    question: '逆上る',
    answer: 'sakanoboru',
    explantion: '\n      汉字: 逆上る\n      读音: さかのぼる\n      意思: to go back\n      来源:  to go upstream\n      同义词: 逆上る\n    ',
  },
  {
    question: '鼠',
    answer: 'nezu',
    explantion: '\n      汉字: 鼠\n      读音: ねず\n      意思: 1. mouse\n      来源:  rat\n      同义词: 鼠\n    ',
  },
  {
    question: '僧',
    answer: 'so',
    explantion: '\n      汉字: 僧\n      读音: そう\n      意思: monk\n      来源:  priest\n      同义词: 僧\n    ',
  },
  {
    question: '創刊',
    answer: 'sokan',
    explantion: '\n      汉字: 創刊\n      读音: そうかん\n      意思: launching (e.g. newspaper)\n      来源:  first issue\n      同义词: 創刊\n    ',
  },
  {
    question: '創造',
    answer: 'sozou',
    explantion: '\n      汉字: 創造\n      读音: そうぞう\n      意思: creation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '創立',
    answer: 'soritsu',
    explantion: '\n      汉字: 創立\n      读音: そうりつ\n      意思: establishment\n      来源:  founding\n      同义词: 創立\n    ',
  },
  {
    question: '壮大',
    answer: 'sodai',
    explantion: '\n      汉字: 壮大\n      读音: そうだい\n      意思: magnificent\n      来源:  grand\n      同义词: 壮大\n    ',
  },
  {
    question: '爽やか',
    answer: 'sawayaka',
    explantion: '\n      汉字: 爽やか\n      读音: さわやか\n      意思: fresh\n      来源:  refreshing\n      同义词: 爽やか\n    ',
  },
  {
    question: '捜査',
    answer: 'sosa',
    explantion: '\n      汉字: 捜査\n      读音: そうさ\n      意思: search (esp. in criminal investigations)\n      来源:  investigation\n      同义词: 捜査\n    ',
  },
  {
    question: '捜索',
    answer: 'sosaku',
    explantion: '\n      汉字: 捜索\n      读音: そうさく\n      意思: search (esp. for someone or something missing)\n      来源:  investigation\n      同义词: 捜索\n    ',
  },
  {
    question: '掻き回す',
    answer: 'kakimawasu',
    explantion: '\n      汉字: 掻き回す\n      读音: かきまわす\n      意思: to stir up\n      来源:  to churn\n      同义词: 掻き回す, かき回す, 掻きまわす, 搔き回す\n    ',
  },
  {
    question: '操る',
    answer: 'ayatsuru',
    explantion: '\n      汉字: 操る\n      读音: あやつる\n      意思: to manipulate\n      来源:  to operate\n      同义词: 操る\n    ',
  },
  {
    question: '操縦',
    answer: 'soju',
    explantion: '\n      汉字: 操縦\n      读音: そうじゅう\n      意思: management\n      来源:  handling\n      同义词: 操縦\n    ',
  },
  {
    question: '漕ぐ',
    answer: 'kogu',
    explantion: '\n      汉字: 漕ぐ\n      读音: こぐ\n      意思: to row\n      来源:  to scull\n      同义词: 漕ぐ, \n    ',
  },
  {
    question: '争い',
    answer: 'arasoi',
    explantion: '\n      汉字: 争い\n      读音: あらそい\n      意思: dispute\n      来源:  strife\n      同义词: 争い\n    ',
  },
  {
    question: '相',
    answer: 'ai',
    explantion: '\n      汉字: 相\n      读音: あい\n      意思: together\n      来源:  mutually\n      同义词: 相\n    ',
  },
  {
    question: '相応',
    answer: 'soou',
    explantion: '\n      汉字: 相応\n      读音: そうおう\n      意思: suitability\n      来源:  fitness\n      同义词: 相応\n    ',
  },
  {
    question: '相応しい',
    answer: 'fusawashii',
    explantion: '\n      汉字: 相応しい\n      读音: ふさわしい\n      意思: appropriate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '相場',
    answer: 'soba',
    explantion: '\n      汉字: 相場\n      读音: そうば\n      意思: market price\n      来源:  speculation\n      同义词: 相場\n    ',
  },
  {
    question: '相対',
    answer: 'aitai',
    explantion: '\n      汉字: 相対\n      读音: あいたい\n      意思: confrontation\n      来源:  facing\n      同义词: 相対\n    ',
  },
  {
    question: '相変わらず',
    answer: 'aikawarazu',
    explantion: '\n      汉字: 相変わらず\n      读音: あいかわらず\n      意思: as ever\n      来源:  as usual\n      同义词: 相変わらず\n    ',
  },
  {
    question: '総',
    answer: 'so',
    explantion: '\n      汉字: 総\n      读音: そう\n      意思: whole\n      来源:  all\n      同义词: 総\n    ',
  },
  {
    question: '総会',
    answer: 'sokai',
    explantion: '\n      汉字: 総会\n      读音: そうかい\n      意思: general meeting\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '葬る',
    answer: 'homuru',
    explantion: '\n      汉字: 葬る\n      读音: ほうむる\n      意思: to bury\n      来源:  to inter\n      同义词: 葬る, 葬る\n    ',
  },
  {
    question: '装飾',
    answer: 'soshoku',
    explantion: '\n      汉字: 装飾\n      读音: そうしょく\n      意思: ornament\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '装備',
    answer: 'sobi',
    explantion: '\n      汉字: 装備\n      读音: そうび\n      意思: equipment\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '走行',
    answer: 'soko',
    explantion: '\n      汉字: 走行\n      读音: そうこう\n      意思: running a wheeled vehicle (e.g. car)\n      来源:  traveling\n      同义词: 走行\n    ',
  },
  {
    question: '送金',
    answer: 'sokin',
    explantion: '\n      汉字: 送金\n      读音: そうきん\n      意思: remittance\n      来源:  sending money\n      同义词: 送金\n    ',
  },
  {
    question: '遭難',
    answer: 'sonan',
    explantion: '\n      汉字: 遭難\n      读音: そうなん\n      意思: disaster\n      来源:  shipwreck\n      同义词: 遭難\n    ',
  },
  {
    question: '騒動',
    answer: 'sodo',
    explantion: '\n      汉字: 騒動\n      读音: そうどう\n      意思: strife\n      来源:  riot\n      同义词: 騒動\n    ',
  },
  {
    question: '像',
    answer: 'zou',
    explantion: '\n      汉字: 像\n      读音: ぞう\n      意思: statue\n      来源:  image\n      同义词: 像\n    ',
  },
  {
    question: '増強',
    answer: 'zoukyo',
    explantion: '\n      汉字: 増強\n      读音: ぞうきょう\n      意思: augment\n      来源:  reinforce\n      同义词: 増強\n    ',
  },
  {
    question: '増進',
    answer: 'zoshin',
    explantion: '\n      汉字: 増進\n      读音: ぞうしん\n      意思: promoting\n      来源:  increase\n      同义词: 増進\n    ',
  },
  {
    question: '悪い',
    answer: 'nikui',
    explantion: '\n      汉字: 悪い\n      读音: にくい\n      意思: hateful\n      来源:  abominable\n      同义词: 悪い\n    ',
  },
  {
    question: '憎しみ',
    answer: 'nikushimi',
    explantion: '\n      汉字: 憎しみ\n      读音: にくしみ\n      意思: hatred\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '蔵相',
    answer: 'zosho',
    explantion: '\n      汉字: 蔵相\n      读音: ぞうしょう\n      意思: Minister of Finance\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '促す',
    answer: 'unagasu',
    explantion: '\n      汉字: 促す\n      读音: うながす\n      意思: to urge\n      来源:  to press\n      同义词: 促す\n    ',
  },
  {
    question: '促進',
    answer: 'sokushin',
    explantion: '\n      汉字: 促進\n      读音: そくしん\n      意思: promotion\n      来源:  acceleration\n      同义词: 促進\n    ',
  },
  {
    question: '側面',
    answer: 'sokumen',
    explantion: '\n      汉字: 側面\n      读音: そくめん\n      意思: side\n      来源:  flank\n      同义词: 側面\n    ',
  },
  {
    question: '即する',
    answer: 'sokusuru',
    explantion: '\n      汉字: 即する\n      读音: そくする\n      意思: to conform to\n      来源:  to agree with\n      同义词: 即する, 則する\n    ',
  },
  {
    question: '即ち',
    answer: 'sunawachi',
    explantion: '\n      汉字: 即ち\n      读音: すなわち\n      意思: that is\n      来源:  namely\n      同义词: 即ち\n    ',
  },
  {
    question: '即座に',
    answer: 'sokuzani',
    explantion: '\n      汉字: 即座に\n      读音: そくざに\n      意思: immediately\n      来源:  right away\n      同义词: 即座に\n    ',
  },
  {
    question: '束の間',
    answer: 'tsukanoma',
    explantion: '\n      汉字: 束の間\n      读音: つかのま\n      意思: moment\n      来源:  brief time\n      同义词: 束の間, つかの間\n    ',
  },
  {
    question: '束縛',
    answer: 'sokubaku',
    explantion: '\n      汉字: 束縛\n      读音: そくばく\n      意思: restraint\n      来源:  shackles\n      同义词: 束縛\n    ',
  },
  {
    question: '足し算',
    answer: 'tashizan',
    explantion: '\n      汉字: 足し算\n      读音: たしざん\n      意思: addition\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '其の儘',
    answer: 'sonomama',
    explantion: '\n      汉字: 其の儘\n      读音: そのまま\n      意思: without change\n      来源:  as it is (i.e. now)\n      同义词: 其の儘\n    ',
  },
  {
    question: '其れでは',
    answer: 'soredewa',
    explantion: '\n      汉字: 其れでは\n      读音: それでは\n      意思: in that situation\n      来源:  well then ...\n      同义词: 其れでは\n    ',
  },
  {
    question: '其れでも',
    answer: 'soredemo',
    explantion: '\n      汉字: 其れでも\n      读音: それでも\n      意思: but (still)\n      来源:  and yet\n      同义词: 其れでも\n    ',
  },
  {
    question: '其れ故',
    answer: 'soreyue',
    explantion: '\n      汉字: 其れ故\n      读音: それゆえ\n      意思: therefore\n      来源:  for that reason\n      同义词: 其れ故, , それ故\n    ',
  },
  {
    question: '其処で',
    answer: 'sokode',
    explantion: '\n      汉字: 其処で\n      读音: そこで\n      意思: so (conj)\n      来源:  accordingly\n      同义词: 其処で\n    ',
  },
  {
    question: '揃い',
    answer: 'soroi',
    explantion: '\n      汉字: 揃い\n      读音: そろい\n      意思: set\n      来源:  suit\n      同义词: 揃い\n    ',
  },
  {
    question: '存続',
    answer: 'sonzoku',
    explantion: '\n      汉字: 存続\n      读音: そんぞく\n      意思: duration\n      来源:  continuance\n      同义词: 存続\n    ',
  },
  {
    question: '損失',
    answer: 'sonshitsu',
    explantion: '\n      汉字: 損失\n      读音: そんしつ\n      意思: loss\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '他意',
    answer: 'tai',
    explantion: '\n      汉字: 他意\n      读音: たい\n      意思: ill will\n      来源:  malice\n      同义词: 他意\n    ',
  },
  {
    question: '他動詞',
    answer: 'tadoshi',
    explantion: '\n      汉字: 他動詞\n      读音: たどうし\n      意思: transitive verb (direct obj)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '他方',
    answer: 'taho',
    explantion: '\n      汉字: 他方\n      读音: たほう\n      意思: another side\n      来源:  different direction\n      同义词: 他方\n    ',
  },
  {
    question: '多数決',
    answer: 'tasuketsu',
    explantion: '\n      汉字: 多数決\n      读音: たすうけつ\n      意思: majority rule\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '多忙',
    answer: 'tabou',
    explantion: '\n      汉字: 多忙\n      读音: たぼう\n      意思: busy\n      来源:  pressure of work\n      同义词: 多忙\n    ',
  },
  {
    question: '多様',
    answer: 'tayo',
    explantion: '\n      汉字: 多様\n      读音: たよう\n      意思: diversity\n      来源:  variety\n      同义词: 多様\n    ',
  },
  {
    question: '唾',
    answer: 'tsuba',
    explantion: '\n      汉字: 唾\n      读音: つば\n      意思: saliva\n      来源:  sputum\n      同义词: 唾, 唾, 唾, 唾, 唾, 唾, 唾き, 唾き\n    ',
  },
  {
    question: '妥協',
    answer: 'dakyo',
    explantion: '\n      汉字: 妥協\n      读音: だきょう\n      意思: compromise\n      来源:  giving in\n      同义词: 妥協\n    ',
  },
  {
    question: '妥結',
    answer: 'daketsu',
    explantion: '\n      汉字: 妥結\n      读音: だけつ\n      意思: agreement\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '打ち切る',
    answer: 'uchikiru',
    explantion: '\n      汉字: 打ち切る\n      读音: うちきる\n      意思: to stop\n      来源:  to abort\n      同义词: 打ち切る, 打切る\n    ',
  },
  {
    question: '打開',
    answer: 'dakai',
    explantion: '\n      汉字: 打開\n      读音: だかい\n      意思: break in the deadlock\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '打撃',
    answer: 'dageki',
    explantion: '\n      汉字: 打撃\n      读音: だげき\n      意思: 1. blow\n      来源:  shock\n      同义词: 打撃\n    ',
  },
  {
    question: '駄作',
    answer: 'dasaku',
    explantion: '\n      汉字: 駄作\n      读音: ださく\n      意思: poor work\n      来源:  rubbish\n      同义词: 駄作\n    ',
  },
  {
    question: '身体',
    answer: 'karada',
    explantion: '\n      汉字: 身体\n      读音: からだ\n      意思: the body\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '体',
    answer: 'tei',
    explantion: '\n      汉字: 体\n      读音: てい\n      意思: appearance\n      来源:  air\n      同义词: 体, 態\n    ',
  },
  {
    question: '体格',
    answer: 'taikaku',
    explantion: '\n      汉字: 体格\n      读音: たいかく\n      意思: physique\n      来源:  constitution\n      同义词: 体格\n    ',
  },
  {
    question: '体験',
    answer: 'taiken',
    explantion: '\n      汉字: 体験\n      读音: たいけん\n      意思: personal experience\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '体裁',
    answer: 'teisai',
    explantion: '\n      汉字: 体裁\n      读音: ていさい\n      意思: decency\n      来源:  style\n      同义词: 体裁, 体裁\n    ',
  },
  {
    question: '体付き',
    answer: 'karadatsuki',
    explantion: '\n      汉字: 体付き\n      读音: からだつき\n      意思: body build\n      来源:  figure\n      同义词: 体付き, 体つき, 身体つき, 身体付き\n    ',
  },
  {
    question: '体力',
    answer: 'tairiyoku',
    explantion: '\n      汉字: 体力\n      读音: たいりょく\n      意思: physical strength\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '対して',
    answer: 'taishite',
    explantion: '\n      汉字: 対して\n      读音: たいして\n      意思: for\n      来源:  in regard to\n      同义词: 対して, 對して\n    ',
  },
  {
    question: '対応',
    answer: 'taiou',
    explantion: '\n      汉字: 対応\n      读音: たいおう\n      意思: interaction\n      来源:  correspondence\n      同义词: 対応\n    ',
  },
  {
    question: '対決',
    answer: 'taiketsu',
    explantion: '\n      汉字: 対決\n      读音: たいけつ\n      意思: confrontation\n      来源:  showdown\n      同义词: 対決\n    ',
  },
  {
    question: '対抗',
    answer: 'taikou',
    explantion: '\n      汉字: 対抗\n      读音: たいこう\n      意思: opposition\n      来源:  antagonism\n      同义词: 対抗\n    ',
  },
  {
    question: '対処',
    answer: 'taisho',
    explantion: '\n      汉字: 対処\n      读音: たいしょ\n      意思: deal with\n      来源:  cope\n      同义词: 対処\n    ',
  },
  {
    question: '対談',
    answer: 'taidan',
    explantion: '\n      汉字: 対談\n      读音: たいだん\n      意思: talk\n      来源:  dialogue\n      同义词: 対談\n    ',
  },
  {
    question: '対等',
    answer: 'taito',
    explantion: '\n      汉字: 対等\n      读音: たいとう\n      意思: equivalent\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '対比',
    answer: 'taihi',
    explantion: '\n      汉字: 対比\n      读音: たいひ\n      意思: contrast\n      来源:  comparison\n      同义词: 対比\n    ',
  },
  {
    question: '対面',
    answer: 'taimen',
    explantion: '\n      汉字: 対面\n      读音: たいめん\n      意思: interview\n      来源:  meeting\n      同义词: 対面, 対面\n    ',
  },
  {
    question: '対話',
    answer: 'taiwa',
    explantion: '\n      汉字: 対話\n      读音: たいわ\n      意思: interactive\n      来源:  interaction\n      同义词: 対話\n    ',
  },
  {
    question: '帯びる',
    answer: 'obiru',
    explantion: '\n      汉字: 帯びる\n      读音: おびる\n      意思: to wear\n      来源:  to carry\n      同义词: 帯びる\n    ',
  },
  {
    question: '待ち遠しい',
    answer: 'machidoshii',
    explantion: '\n      汉字: 待ち遠しい\n      读音: まちどおしい\n      意思: looking forward to\n      来源: waller\n      同义词: 待ち遠しい, 待ちどうしい, 待遠しい, 待遠しい\n    ',
  },
  {
    question: '待ち合わせ',
    answer: 'machiawase',
    explantion: '\n      汉字: 待ち合わせ\n      读音: まちあわせ\n      意思: appointment\n      来源: waller\n      同义词: 待ちあわせ\n    ',
  },
  {
    question: '待ち望む',
    answer: 'machinozomu',
    explantion: '\n      汉字: 待ち望む\n      读音: まちのぞむ\n      意思: to look anxiously for\n      来源:  to wait eagerly for\n      同义词: 待ち望む, 待望む\n    ',
  },
  {
    question: '待遇',
    answer: 'taiguu',
    explantion: '\n      汉字: 待遇\n      读音: たいぐう\n      意思: treatment\n      来源:  reception\n      同义词: 待遇\n    ',
  },
  {
    question: '待望',
    answer: 'taibou',
    explantion: '\n      汉字: 待望\n      读音: たいぼう\n      意思: expectant waiting\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '怠慢',
    answer: 'taiman',
    explantion: '\n      汉字: 怠慢\n      读音: たいまん\n      意思: negligence\n      来源:  procrastination\n      同义词: 怠慢\n    ',
  },
  {
    question: '態と',
    answer: 'wazato',
    explantion: '\n      汉字: 態と\n      读音: わざと\n      意思: on purpose\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '態勢',
    answer: 'taisei',
    explantion: '\n      汉字: 態勢\n      读音: たいせい\n      意思: attitude\n      来源:  conditions\n      同义词: 態勢\n    ',
  },
  {
    question: '戴きます',
    answer: 'itadakimasu',
    explantion: '\n      汉字: 戴きます\n      读音: いただきます\n      意思: expression of gratitude before meals\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '滞る',
    answer: 'todokoru',
    explantion: '\n      汉字: 滞る\n      读音: とどこおる\n      意思: to stagnate\n      来源:  to be delayed\n      同义词: 滞る\n    ',
  },
  {
    question: '滞納',
    answer: 'taino',
    explantion: '\n      汉字: 滞納\n      读音: たいのう\n      意思: non-payment\n      来源:  default\n      同义词: 滞納, 怠納\n    ',
  },
  {
    question: '退ける',
    answer: 'shirizokeru',
    explantion: '\n      汉字: 退ける\n      读音: しりぞける\n      意思: to repel\n      来源:  to drive away\n      同义词: 退ける, 斥ける, 却ける\n    ',
  },
  {
    question: '退化',
    answer: 'taika',
    explantion: '\n      汉字: 退化\n      读音: たいか\n      意思: degeneration\n      来源:  retrogression\n      同义词: 退化\n    ',
  },
  {
    question: '退学',
    answer: 'taigaku',
    explantion: '\n      汉字: 退学\n      读音: たいがく\n      意思: dropping out of school\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '退治',
    answer: 'taiji',
    explantion: '\n      汉字: 退治\n      读音: たいじ\n      意思: extermination\n      来源: waller\n      同义词: 対治\n    ',
  },
  {
    question: '退職',
    answer: 'taishoku',
    explantion: '\n      汉字: 退職\n      读音: たいしょく\n      意思: retirement (from office)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '代',
    answer: 'shiro',
    explantion: '\n      汉字: 代\n      读音: しろ\n      意思: price\n      来源:  materials\n      同义词: 代\n    ',
  },
  {
    question: '代弁',
    answer: 'daiben',
    explantion: '\n      汉字: 代弁\n      读音: だいべん\n      意思: pay by proxy\n      来源:  act for another\n      同义词: 代弁, 代辨, 代辯\n    ',
  },
  {
    question: '代用',
    answer: 'daiyo',
    explantion: '\n      汉字: 代用\n      读音: だいよう\n      意思: substitution\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '台本',
    answer: 'daihon',
    explantion: '\n      汉字: 台本\n      读音: だいほん\n      意思: libretto\n      来源:  scenario\n      同义词: 台本\n    ',
  },
  {
    question: '台無し',
    answer: 'dainashi',
    explantion: '\n      汉字: 台無し\n      读音: だいなし\n      意思: mess\n      来源:  spoiled\n      同义词: 台無し, 台なし, 臺なし, 臺無し\n    ',
  },
  {
    question: '大ざっぱ',
    answer: 'ozappa',
    explantion: '\n      汉字: 大ざっぱ\n      读音: おおざっぱ\n      意思: rough (as in not precise)\n      来源:  broad\n      同义词: 大ざっぱ\n    ',
  },
  {
    question: '大概',
    answer: 'taigai',
    explantion: '\n      汉字: 大概\n      读音: たいがい\n      意思: in general\n      来源:  mainly\n      同义词: 大概\n    ',
  },
  {
    question: '大筋',
    answer: 'osuji',
    explantion: '\n      汉字: 大筋\n      读音: おおすじ\n      意思: outline\n      来源:  summary\n      同义词: 大筋\n    ',
  },
  {
    question: '大金',
    answer: 'taikin',
    explantion: '\n      汉字: 大金\n      读音: たいきん\n      意思: great cost\n      来源: waller\n      同义词: 大金\n    ',
  },
  {
    question: '大空',
    answer: 'oozora',
    explantion: '\n      汉字: 大空\n      读音: おおぞら\n      意思: heaven\n      来源:  firmament\n      同义词: 大空\n    ',
  },
  {
    question: '大衆',
    answer: 'taishu',
    explantion: '\n      汉字: 大衆\n      读音: たいしゅう\n      意思: general public\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大人しい',
    answer: 'otonashii',
    explantion: '\n      汉字: 大人しい\n      读音: おとなしい\n      意思: obedient\n      来源:  docile\n      同义词: 大人しい\n    ',
  },
  {
    question: '大水',
    answer: 'omizu',
    explantion: '\n      汉字: 大水\n      读音: おおみず\n      意思: flood\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '大胆',
    answer: 'daitan',
    explantion: '\n      汉字: 大胆\n      读音: だいたん\n      意思: bold\n      来源:  daring\n      同义词: 大胆\n    ',
  },
  {
    question: '大部',
    answer: 'taibu',
    explantion: '\n      汉字: 大部\n      读音: たいぶ\n      意思: most (e.g. most part)\n      来源:  greater\n      同义词: 大部, 大部\n    ',
  },
  {
    question: '大幅',
    answer: 'owaba',
    explantion: '\n      汉字: 大幅\n      读音: おおはば\n      意思: full width\n      来源:  large scale\n      同义词: 大幅, 大巾\n    ',
  },
  {
    question: '大柄',
    answer: 'ogara',
    explantion: '\n      汉字: 大柄\n      读音: おおがら\n      意思: large build\n      来源:  large pattern\n      同义词: 大柄\n    ',
  },
  {
    question: '大便',
    answer: 'daiben',
    explantion: '\n      汉字: 大便\n      读音: だいべん\n      意思: feces\n      来源:  excrement\n      同义词: 大便\n    ',
  },
  {
    question: '大方',
    answer: 'okata',
    explantion: '\n      汉字: 大方\n      读音: おおかた\n      意思: perhaps\n      来源:  almost all\n      同义词: 大方\n    ',
  },
  {
    question: '第',
    answer: 'dai',
    explantion: '\n      汉字: 第\n      读音: だい\n      意思: ordinal\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '沢山',
    answer: 'takusan',
    explantion: '\n      汉字: 沢山\n      读音: たくさん\n      意思: many\n      来源:  a lot\n      同义词: 沢山\n    ',
  },
  {
    question: '達者',
    answer: 'tassha',
    explantion: '\n      汉字: 達者\n      读音: たっしゃ\n      意思: skillful\n      来源:  in good health\n      同义词: 達者\n    ',
  },
  {
    question: '達成',
    answer: 'tassei',
    explantion: '\n      汉字: 達成\n      读音: たっせい\n      意思: achievement\n      来源: waller\n      同义词: たっ成\n    ',
  },
  {
    question: '脱する',
    answer: 'dassuru',
    explantion: '\n      汉字: 脱する\n      读音: だっする\n      意思: to escape from\n      来源:  to get out\n      同义词: 脱する\n    ',
  },
  {
    question: '脱出',
    answer: 'dasshutsu',
    explantion: '\n      汉字: 脱出\n      读音: だっしゅつ\n      意思: escape\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '脱退',
    answer: 'dattai',
    explantion: '\n      汉字: 脱退\n      读音: だったい\n      意思: secession\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '辿り着く',
    answer: 'tadoritsuku',
    explantion: '\n      汉字: 辿り着く\n      读音: たどりつく\n      意思: to grope along to\n      来源:  to struggle on to\n      同义词: 辿り着く, たどり着く, 辿りつく\n    ',
  },
  {
    question: '辿る',
    answer: 'tadoru',
    explantion: '\n      汉字: 辿る\n      读音: たどる\n      意思: to follow (road)\n      来源:  to pursue (course)\n      同义词: 辿る, \n    ',
  },
  {
    question: '誰',
    answer: 'tare',
    explantion: '\n      汉字: 誰\n      读音: たれ\n      意思: adjectival suffix for a person\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '単一',
    answer: 'tanitsu',
    explantion: '\n      汉字: 単一\n      读音: たんいつ\n      意思: single\n      来源:  simple\n      同义词: 単一\n    ',
  },
  {
    question: '単調',
    answer: 'tanchou',
    explantion: '\n      汉字: 単調\n      读音: たんちょう\n      意思: monotony\n      来源:  monotone\n      同义词: 単調\n    ',
  },
  {
    question: '単独',
    answer: 'tandoku',
    explantion: '\n      汉字: 単独\n      读音: たんどく\n      意思: sole\n      来源:  independence\n      同义词: 単独\n    ',
  },
  {
    question: '嘆く',
    answer: 'nageku',
    explantion: '\n      汉字: 嘆く\n      读音: なげく\n      意思: to sigh\n      来源:  to lament\n      同义词: 嘆く, 歎く\n    ',
  },
  {
    question: '担架',
    answer: 'tanka',
    explantion: '\n      汉字: 担架\n      读音: たんか\n      意思: stretcher\n      来源:  litter\n      同义词: 担架\n    ',
  },
  {
    question: '旦那',
    answer: 'danna',
    explantion: '\n      汉字: 旦那\n      读音: だんな\n      意思: master (of house)\n      来源:  husband (informal)\n      同义词: 旦那, 檀那\n    ',
  },
  {
    question: '炭素',
    answer: 'tanso',
    explantion: '\n      汉字: 炭素\n      读音: たんそ\n      意思: carbon (C)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '短歌',
    answer: 'tanka',
    explantion: '\n      汉字: 短歌\n      读音: たんか\n      意思: tanka\n      来源:  31-syllable Japanese poem\n      同义词: 短歌, 短歌\n    ',
  },
  {
    question: '短気',
    answer: 'tanki',
    explantion: '\n      汉字: 短気\n      读音: たんき\n      意思: quick temper\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '短縮',
    answer: 'tanshuku',
    explantion: '\n      汉字: 短縮\n      读音: たんしゅく\n      意思: shortening\n      来源:  abbreviation\n      同义词: 短縮\n    ',
  },
  {
    question: '短大',
    answer: 'tandai',
    explantion: '\n      汉字: 短大\n      读音: たんだい\n      意思: junior college\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '短波',
    answer: 'tanpa',
    explantion: '\n      汉字: 短波\n      读音: たんぱ\n      意思: short wave\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '箪笥',
    answer: 'tansu',
    explantion: '\n      汉字: 箪笥\n      读音: たんす\n      意思: chest of drawers\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '綻びる',
    answer: 'hokorobiru',
    explantion: '\n      汉字: 綻びる\n      读音: ほころびる\n      意思: to come apart at the seams\n      来源:  to begin to open\n      同义词: 綻びる, \n    ',
  },
  {
    question: '蛋白質',
    answer: 'tanpakushitsu',
    explantion: '\n      汉字: 蛋白質\n      读音: たんぱくしつ\n      意思: protein\n      来源: waller\n      同义词: タンパク質, たんぱく質, たん白質\n    ',
  },
  {
    question: '鍛える',
    answer: 'kitaeru',
    explantion: '\n      汉字: 鍛える\n      读音: きたえる\n      意思: to forge\n      来源:  to drill\n      同义词: 鍛える\n    ',
  },
  {
    question: '団結',
    answer: 'danketsu',
    explantion: '\n      汉字: 団結\n      读音: だんけつ\n      意思: unity\n      来源:  union\n      同义词: 団結\n    ',
  },
  {
    question: '団扇',
    answer: 'uchiwa',
    explantion: '\n      汉字: 団扇\n      读音: うちわ\n      意思: fan\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '壇',
    answer: 'dan',
    explantion: '\n      汉字: 壇\n      读音: だん\n      意思: 1. platform\n      来源:  podium\n      同义词: 壇\n    ',
  },
  {
    question: '弾く',
    answer: 'hajiku',
    explantion: '\n      汉字: 弾く\n      读音: はじく\n      意思: to flip\n      来源:  to snap\n      同义词: 弾く, \n    ',
  },
  {
    question: '弾む',
    answer: 'hazumu',
    explantion: '\n      汉字: 弾む\n      读音: はずむ\n      意思: to spring\n      来源:  to bound\n      同义词: 弾む, 勢む\n    ',
  },
  {
    question: '弾力',
    answer: 'danriyoku',
    explantion: '\n      汉字: 弾力\n      读音: だんりょく\n      意思: elasticity\n      来源:  flexibility\n      同义词: 弾力\n    ',
  },
  {
    question: '断言',
    answer: 'dangen',
    explantion: '\n      汉字: 断言\n      读音: だんげん\n      意思: declaration\n      来源:  affirmation\n      同义词: 断言\n    ',
  },
  {
    question: '断然',
    answer: 'danzen',
    explantion: '\n      汉字: 断然\n      读音: だんぜん\n      意思: firmly\n      来源:  absolutely\n      同义词: 断然\n    ',
  },
  {
    question: '断面',
    answer: 'danmen',
    explantion: '\n      汉字: 断面\n      读音: だんめん\n      意思: cross section\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '値打ち',
    answer: 'neuchi',
    explantion: '\n      汉字: 値打ち\n      读音: ねうち\n      意思: value\n      来源:  worth\n      同义词: 値打ち, 値打, 値うち\n    ',
  },
  {
    question: '知性',
    answer: 'chisei',
    explantion: '\n      汉字: 知性\n      读音: ちせい\n      意思: intelligence\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '知的',
    answer: 'chiteki',
    explantion: '\n      汉字: 知的\n      读音: ちてき\n      意思: intellectual\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '地形',
    answer: 'jigyou',
    explantion: '\n      汉字: 地形\n      读音: じぎょう\n      意思: terrain\n      来源:  geographical features\n      同义词: 地形, 地形\n    ',
  },
  {
    question: '地元',
    answer: 'jimoto',
    explantion: '\n      汉字: 地元\n      读音: じもと\n      意思: local\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '地獄',
    answer: 'jigoku',
    explantion: '\n      汉字: 地獄\n      读音: じごく\n      意思: hell\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '地主',
    answer: 'jinushi',
    explantion: '\n      汉字: 地主\n      读音: じぬし\n      意思: landlord\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '弛み',
    answer: 'tarumi',
    explantion: '\n      汉字: 弛み\n      读音: たるみ\n      意思: slack\n      来源:  slackening\n      同义词: 弛み, \n    ',
  },
  {
    question: '弛む',
    answer: 'tarumu',
    explantion: '\n      汉字: 弛む\n      读音: たるむ\n      意思: to slacken\n      来源:  to loosen\n      同义词: 弛む, , , 弛む\n    ',
  },
  {
    question: '恥',
    answer: 'haji',
    explantion: '\n      汉字: 恥\n      读音: はじ\n      意思: shame\n      来源:  embarrassment\n      同义词: 恥, 辱, 辱, 羞, 耻, 恥じ\n    ',
  },
  {
    question: '恥じらう',
    answer: 'hajirau',
    explantion: '\n      汉字: 恥じらう\n      读音: はじらう\n      意思: to feel shy\n      来源:  to be bashful\n      同义词: 恥じらう, 羞じらう, 恥らう\n    ',
  },
  {
    question: '恥じる',
    answer: 'hajiru',
    explantion: '\n      汉字: 恥じる\n      读音: はじる\n      意思: to feel ashamed\n      来源: waller\n      同义词: 羞じる, 耻じる, 愧じる, 慙じる\n    ',
  },
  {
    question: '遅くとも',
    answer: 'osokutomo',
    explantion: '\n      汉字: 遅くとも\n      读音: おそくとも\n      意思: at the latest\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '遅らす',
    answer: 'okurasu',
    explantion: '\n      汉字: 遅らす\n      读音: おくらす\n      意思: to retard\n      来源:  to delay\n      同义词: 遅らす, 後らす, 遅す\n    ',
  },
  {
    question: '遅れ',
    answer: 'okure',
    explantion: '\n      汉字: 遅れ\n      读音: おくれ\n      意思: delay\n      来源:  lag\n      同义词: 遅れ, 後れ\n    ',
  },
  {
    question: '築く',
    answer: 'kizuku',
    explantion: '\n      汉字: 築く\n      读音: きずく\n      意思: to build\n      来源:  to pile up\n      同义词: 築く\n    ',
  },
  {
    question: '畜産',
    answer: 'chikusan',
    explantion: '\n      汉字: 畜産\n      读音: ちくさん\n      意思: animal husbandry\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '畜生',
    answer: 'chikusho',
    explantion: '\n      汉字: 畜生\n      读音: ちくしょう\n      意思: beast\n      来源:  brute\n      同义词: 畜生, , 畜生, \n    ',
  },
  {
    question: '蓄積',
    answer: 'chikuseki',
    explantion: '\n      汉字: 蓄積\n      读音: ちくせき\n      意思: accumulation\n      来源:  accumulate\n      同义词: 蓄積\n    ',
  },
  {
    question: '秩序',
    answer: 'chitsujiyo',
    explantion: '\n      汉字: 秩序\n      读音: ちつじょ\n      意思: order\n      来源:  regularity\n      同义词: 秩序\n    ',
  },
  {
    question: '窒息',
    answer: 'chissoku',
    explantion: '\n      汉字: 窒息\n      读音: ちっそく\n      意思: suffocation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '茶の間',
    answer: 'chanoma',
    explantion: '\n      汉字: 茶の間\n      读音: ちゃのま\n      意思: living room (Japanese style)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '茶の湯',
    answer: 'chanoyu',
    explantion: '\n      汉字: 茶の湯\n      读音: ちゃのゆ\n      意思: tea ceremony\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '着工',
    answer: 'chakko',
    explantion: '\n      汉字: 着工\n      读音: ちゃっこう\n      意思: start of (construction) work\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '着手',
    answer: 'chiyakushu',
    explantion: '\n      汉字: 着手\n      读音: ちゃくしゅ\n      意思: embarkation\n      来源:  launch\n      同义词: 着手\n    ',
  },
  {
    question: '着飾る',
    answer: 'kikazaru',
    explantion: '\n      汉字: 着飾る\n      读音: きかざる\n      意思: to dress up\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '着色',
    answer: 'chakushoku',
    explantion: '\n      汉字: 着色\n      读音: ちゃくしょく\n      意思: colouring\n      来源:  coloring\n      同义词: 着色\n    ',
  },
  {
    question: '着席',
    answer: 'chakuseki',
    explantion: '\n      汉字: 着席\n      读音: ちゃくせき\n      意思: sit down\n      来源:  seat\n      同义词: 着席\n    ',
  },
  {
    question: '着目',
    answer: 'chiyakumoku',
    explantion: '\n      汉字: 着目\n      读音: ちゃくもく\n      意思: attention\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '着陸',
    answer: 'chakuriku',
    explantion: '\n      汉字: 着陸\n      读音: ちゃくりく\n      意思: landing\n      来源:  alighting\n      同义词: 着陸\n    ',
  },
  {
    question: '中継',
    answer: 'chiyuukei',
    explantion: '\n      汉字: 中継\n      读音: ちゅうけい\n      意思: relay\n      来源:  hook-up\n      同义词: 中継\n    ',
  },
  {
    question: '中傷',
    answer: 'chusho',
    explantion: '\n      汉字: 中傷\n      读音: ちゅうしょう\n      意思: slander\n      来源:  libel\n      同义词: 中傷\n    ',
  },
  {
    question: '中枢',
    answer: 'chusu',
    explantion: '\n      汉字: 中枢\n      读音: ちゅうすう\n      意思: centre\n      来源:  pivot\n      同义词: 中枢\n    ',
  },
  {
    question: '中断',
    answer: 'chiyuudan',
    explantion: '\n      汉字: 中断\n      读音: ちゅうだん\n      意思: interruption\n      来源:  suspension\n      同义词: 中断, 仲断\n    ',
  },
  {
    question: '中程',
    answer: 'nakahodo',
    explantion: '\n      汉字: 中程\n      读音: なかほど\n      意思: middle\n      来源:  midway\n      同义词: 中程, 中ほど\n    ',
  },
  {
    question: '中毒',
    answer: 'chiyuudoku',
    explantion: '\n      汉字: 中毒\n      读音: ちゅうどく\n      意思: poisoning\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '中っ腹',
    answer: 'chiyuuppara',
    explantion: '\n      汉字: 中っ腹\n      读音: ちゅうっぱら\n      意思: irritated\n      来源:  offended\n      同义词: 中っ腹, 中っ腹\n    ',
  },
  {
    question: '中立',
    answer: 'chiyuuritsu',
    explantion: '\n      汉字: 中立\n      读音: ちゅうりつ\n      意思: neutrality\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '中和',
    answer: 'chiyuuwa',
    explantion: '\n      汉字: 中和\n      读音: ちゅうわ\n      意思: neutralize\n      来源:  counteract\n      同义词: 中和\n    ',
  },
  {
    question: '仲人',
    answer: 'chiyuunin',
    explantion: '\n      汉字: 仲人\n      读音: ちゅうにん\n      意思: go-between\n      来源:  matchmaker\n      同义词: 仲人, 仲人, 媒人, 媒\n    ',
  },
  {
    question: '宙返り',
    answer: 'chiyuugaeri',
    explantion: '\n      汉字: 宙返り\n      读音: ちゅうがえり\n      意思: somersault\n      来源:  looping-the-loop\n      同义词: 宙返り\n    ',
  },
  {
    question: '忠告',
    answer: 'chiyuukoku',
    explantion: '\n      汉字: 忠告\n      读音: ちゅうこく\n      意思: advice\n      来源:  warning\n      同义词: 忠告\n    ',
  },
  {
    question: '抽選',
    answer: 'chusen',
    explantion: '\n      汉字: 抽選\n      读音: ちゅうせん\n      意思: lottery\n      来源:  raffle\n      同义词: 抽選, 抽籤, 抽せん\n    ',
  },
  {
    question: '昼飯',
    answer: 'chiyuuhan',
    explantion: '\n      汉字: 昼飯\n      读音: ちゅうはん\n      意思: lunch\n      来源:  midday meal\n      同义词: 昼飯, 昼飯, 昼飯, 昼めし\n    ',
  },
  {
    question: '柱',
    answer: 'hashira',
    explantion: '\n      汉字: 柱\n      读音: はしら\n      意思: pillar\n      来源:  post\n      同义词: 柱\n    ',
  },
  {
    question: '著しい',
    answer: 'ichijirushii',
    explantion: '\n      汉字: 著しい\n      读音: いちじるしい\n      意思: remarkable\n      来源:  considerable\n      同义词: 著しい\n    ',
  },
  {
    question: '著書',
    answer: 'chosho',
    explantion: '\n      汉字: 著書\n      读音: ちょしょ\n      意思: literary work\n      来源:  book\n      同义词: 著書\n    ',
  },
  {
    question: '著名',
    answer: 'chomei',
    explantion: '\n      汉字: 著名\n      读音: ちょめい\n      意思: well-known\n      来源:  noted\n      同义词: 著名\n    ',
  },
  {
    question: '恰度',
    answer: 'chodo',
    explantion: '\n      汉字: 恰度\n      读音: ちょうど\n      意思: just\n      来源:  right\n      同义词: 恰度\n    ',
  },
  {
    question: '丁目',
    answer: 'choume',
    explantion: '\n      汉字: 丁目\n      读音: ちょうめ\n      意思: district of a town\n      来源:  city block (of irregular size)\n      同义词: 丁目\n    ',
  },
  {
    question: '萎む',
    answer: 'shibomu',
    explantion: '\n      汉字: 萎む\n      读音: しぼむ\n      意思: to wither\n      来源:  to fade (away)\n      同义词: 萎む\n    ',
  },
  {
    question: '喋る',
    answer: 'shaberu',
    explantion: '\n      汉字: 喋る\n      读音: しゃべる\n      意思: to talk\n      来源:  to chat\n      同义词: 喋る\n    ',
  },
  {
    question: '庁',
    answer: 'chou',
    explantion: '\n      汉字: 庁\n      读音: ちょう\n      意思: government office\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '張り紙',
    answer: 'harigami',
    explantion: '\n      汉字: 張り紙\n      读音: はりがみ\n      意思: paper patch\n      来源:  paper backing\n      同义词: 張り紙, 貼り紙, はり紙, 張紙, 貼紙\n    ',
  },
  {
    question: '徴収',
    answer: 'choushu',
    explantion: '\n      汉字: 徴収\n      读音: ちょうしゅう\n      意思: collection\n      来源:  levy\n      同义词: 徴収\n    ',
  },
  {
    question: '懲りる',
    answer: 'koriru',
    explantion: '\n      汉字: 懲りる\n      读音: こりる\n      意思: to learn by experience\n      来源:  to be disgusted with\n      同义词: 懲りる\n    ',
  },
  {
    question: '挑む',
    answer: 'idomu',
    explantion: '\n      汉字: 挑む\n      读音: いどむ\n      意思: to challenge\n      来源:  to contend for\n      同义词: 挑む\n    ',
  },
  {
    question: '挑戦',
    answer: 'chosen',
    explantion: '\n      汉字: 挑戦\n      读音: ちょうせん\n      意思: challenge\n      来源:  defiance\n      同义词: 挑戦\n    ',
  },
  {
    question: '朝寝坊',
    answer: 'asanebou',
    explantion: '\n      汉字: 朝寝坊\n      读音: あさねぼう\n      意思: oversleeping\n      来源:  late riser\n      同义词: 朝寝坊\n    ',
  },
  {
    question: '潮',
    answer: 'ushio',
    explantion: '\n      汉字: 潮\n      读音: うしお\n      意思: tide\n      来源: waller\n      同义词: 潮, 汐\n    ',
  },
  {
    question: '聴覚',
    answer: 'choukaku',
    explantion: '\n      汉字: 聴覚\n      读音: ちょうかく\n      意思: the sense of hearing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '聴講',
    answer: 'chouko',
    explantion: '\n      汉字: 聴講\n      读音: ちょうこう\n      意思: lecture attendance\n      来源:  auditing\n      同义词: 聴講\n    ',
  },
  {
    question: '聴診器',
    answer: 'choushinki',
    explantion: '\n      汉字: 聴診器\n      读音: ちょうしんき\n      意思: stethoscope\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '腸',
    answer: 'chou',
    explantion: '\n      汉字: 腸\n      读音: ちょう\n      意思: guts\n      来源:  bowels\n      同义词: 腸, 腸, 腸\n    ',
  },
  {
    question: '蝶',
    answer: 'chou',
    explantion: '\n      汉字: 蝶\n      读音: ちょう\n      意思: butterfly\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '調べ',
    answer: 'shirabe',
    explantion: '\n      汉字: 調べ\n      读音: しらべ\n      意思: preparation\n      来源:  investigation\n      同义词: 調べ\n    ',
  },
  {
    question: '調印',
    answer: 'chouin',
    explantion: '\n      汉字: 調印\n      读音: ちょういん\n      意思: signature\n      来源:  sign\n      同义词: 調印\n    ',
  },
  {
    question: '調停',
    answer: 'choutei',
    explantion: '\n      汉字: 調停\n      读音: ちょうてい\n      意思: arbitration\n      来源:  conciliation\n      同义词: 調停\n    ',
  },
  {
    question: '調理',
    answer: 'chouri',
    explantion: '\n      汉字: 調理\n      读音: ちょうり\n      意思: cooking\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '調和',
    answer: 'chouwa',
    explantion: '\n      汉字: 調和\n      读音: ちょうわ\n      意思: harmony\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '超',
    answer: 'chou',
    explantion: '\n      汉字: 超\n      读音: ちょう\n      意思: super-\n      来源:  ultra-\n      同义词: 超, \n    ',
  },
  {
    question: '長官',
    answer: 'chokan',
    explantion: '\n      汉字: 長官\n      读音: ちょうかん\n      意思: chief\n      来源:  (government) secretary\n      同义词: 長官\n    ',
  },
  {
    question: '長閑',
    answer: 'nodoka',
    explantion: '\n      汉字: 長閑\n      读音: のどか\n      意思: tranquil\n      来源:  calm\n      同义词: 長閑, \n    ',
  },
  {
    question: '長編',
    answer: 'chouhen',
    explantion: '\n      汉字: 長編\n      读音: ちょうへん\n      意思: long (e.g. novel film)\n      来源: waller\n      同义词: 長篇\n    ',
  },
  {
    question: '頂',
    answer: 'itadaki',
    explantion: '\n      汉字: 頂\n      读音: いただき\n      意思: (top of) head\n      来源:  summit\n      同义词: 頂, 頂き, 戴き\n    ',
  },
  {
    question: '鳥居',
    answer: 'torii',
    explantion: '\n      汉字: 鳥居\n      读音: とりい\n      意思: torii (Shinto shrine archway)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '捗る',
    answer: 'hakadoru',
    explantion: '\n      汉字: 捗る\n      读音: はかどる\n      意思: to make progress\n      来源:  to move right ahead (with the work)\n      同义词: 捗る, \n    ',
  },
  {
    question: '直ぐ',
    answer: 'sugu',
    explantion: '\n      汉字: 直ぐ\n      读音: すぐ\n      意思: immediately\n      来源:  soon\n      同义词: 直ぐ, \n    ',
  },
  {
    question: '直感',
    answer: 'chokkan',
    explantion: '\n      汉字: 直感\n      读音: ちょっかん\n      意思: intuition\n      来源: waller\n      同义词: 直観\n    ',
  },
  {
    question: '直面',
    answer: 'chokumen',
    explantion: '\n      汉字: 直面\n      读音: ちょくめん\n      意思: confrontation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '沈める',
    answer: 'shizumeru',
    explantion: '\n      汉字: 沈める\n      读音: しずめる\n      意思: to sink\n      来源:  to submerge\n      同义词: 沈める\n    ',
  },
  {
    question: '沈殿',
    answer: 'chinden',
    explantion: '\n      汉字: 沈殿\n      读音: ちんでん\n      意思: precipitation\n      来源:  settlement\n      同义词: 沈殿, 沈澱\n    ',
  },
  {
    question: '沈没',
    answer: 'chinbotsu',
    explantion: '\n      汉字: 沈没\n      读音: ちんぼつ\n      意思: sinking\n      来源:  foundering\n      同义词: 沈没\n    ',
  },
  {
    question: '沈黙',
    answer: 'chinmoku',
    explantion: '\n      汉字: 沈黙\n      读音: ちんもく\n      意思: silence\n      来源:  reticence\n      同义词: 沈黙\n    ',
  },
  {
    question: '賃金',
    answer: 'chingin',
    explantion: '\n      汉字: 賃金\n      读音: ちんぎん\n      意思: wages\n      来源: waller\n      同义词: 賃金, 賃銀\n    ',
  },
  {
    question: '陳列',
    answer: 'chinretsu',
    explantion: '\n      汉字: 陳列\n      读音: ちんれつ\n      意思: exhibition\n      来源:  display\n      同义词: 陳列\n    ',
  },
  {
    question: '津波',
    answer: 'tsunami',
    explantion: '\n      汉字: 津波\n      读音: つなみ\n      意思: tsunami\n      来源:  tidal wave\n      同义词: 津波, 津浪, 海嘯\n    ',
  },
  {
    question: '墜落',
    answer: 'tsuiraku',
    explantion: '\n      汉字: 墜落\n      读音: ついらく\n      意思: falling\n      来源:  crashing\n      同义词: 墜落\n    ',
  },
  {
    question: '追い込む',
    answer: 'oikomu',
    explantion: '\n      汉字: 追い込む\n      读音: おいこむ\n      意思: to herd\n      来源:  to corner\n      同义词: 追い込む\n    ',
  },
  {
    question: '追い出す',
    answer: 'oidasu',
    explantion: '\n      汉字: 追い出す\n      读音: おいだす\n      意思: to expel\n      来源:  to drive out\n      同义词: 追い出す\n    ',
  },
  {
    question: '追及',
    answer: 'tsuikyu',
    explantion: '\n      汉字: 追及\n      读音: ついきゅう\n      意思: gaining on\n      来源:  carrying out\n      同义词: 追及\n    ',
  },
  {
    question: '追跡',
    answer: 'tsuiseki',
    explantion: '\n      汉字: 追跡\n      读音: ついせき\n      意思: pursuit\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '追放',
    answer: 'tsuiho',
    explantion: '\n      汉字: 追放\n      读音: ついほう\n      意思: exile\n      来源:  banishment\n      同义词: 追放\n    ',
  },
  {
    question: '痛む',
    answer: 'itamu',
    explantion: '\n      汉字: 痛む\n      读音: いたむ\n      意思: to hurt\n      来源:  to feel a pain\n      同义词: 痛む, 傷む\n    ',
  },
  {
    question: '痛める',
    answer: 'itameru',
    explantion: '\n      汉字: 痛める\n      读音: いためる\n      意思: to hurt\n      来源:  to injure\n      同义词: 痛める, 傷める\n    ',
  },
  {
    question: '痛感',
    answer: 'tsukan',
    explantion: '\n      汉字: 痛感\n      读音: つうかん\n      意思: feeling keenly\n      来源:  fully realizing\n      同义词: 痛感\n    ',
  },
  {
    question: '痛切',
    answer: 'tsusetsu',
    explantion: '\n      汉字: 痛切\n      读音: つうせつ\n      意思: keen\n      来源:  acute\n      同义词: 痛切\n    ',
  },
  {
    question: '通',
    answer: 'tsu',
    explantion: '\n      汉字: 通\n      读音: つう\n      意思: connoisseur\n      来源:  counter for letters\n      同义词: 通\n    ',
  },
  {
    question: '通りかかる',
    answer: 'torikakaru',
    explantion: '\n      汉字: 通りかかる\n      读音: とおりかかる\n      意思: to happen to pass by\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '通常',
    answer: 'tsujiyou',
    explantion: '\n      汉字: 通常\n      读音: つうじょう\n      意思: common\n      来源:  general\n      同义词: 通常\n    ',
  },
  {
    question: '辻褄',
    answer: 'tsujitsuma',
    explantion: '\n      汉字: 辻褄\n      读音: つじつま\n      意思: coherence\n      来源:  consistency\n      同义词: 辻褄, \n    ',
  },
  {
    question: '綴じる',
    answer: 'tojiru',
    explantion: '\n      汉字: 綴じる\n      读音: とじる\n      意思: to bind\n      来源:  to file\n      同义词: 綴じる\n    ',
  },
  {
    question: '壷',
    answer: 'tsubo',
    explantion: '\n      汉字: 壷\n      读音: つぼ\n      意思: tsubo jar\n      来源:  pot\n      同义词: 壷, 壺, , 壺, , 壺, , 壷, 壷, 壼, 壼, 壼, \n    ',
  },
  {
    question: '吊るす',
    answer: 'tsurusu',
    explantion: '\n      汉字: 吊るす\n      读音: つるす\n      意思: to hang\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '釣り',
    answer: 'tsuri',
    explantion: '\n      汉字: 釣り\n      读音: つり\n      意思: fishing\n      来源:  angling\n      同义词: 釣り\n    ',
  },
  {
    question: '釣鐘',
    answer: 'tsurigane',
    explantion: '\n      汉字: 釣鐘\n      读音: つりがね\n      意思: hanging bell\n      来源: waller\n      同义词: 釣り鐘, 吊り鐘\n    ',
  },
  {
    question: '停滞',
    answer: 'teitai',
    explantion: '\n      汉字: 停滞\n      读音: ていたい\n      意思: stagnation\n      来源:  tie-up\n      同义词: 停滞\n    ',
  },
  {
    question: '堤防',
    answer: 'teibou',
    explantion: '\n      汉字: 堤防\n      读音: ていぼう\n      意思: bank\n      来源:  weir\n      同义词: 堤防\n    ',
  },
  {
    question: '定まる',
    answer: 'sadamaru',
    explantion: '\n      汉字: 定まる\n      读音: さだまる\n      意思: to become settled\n      来源:  to be fixed\n      同义词: 定まる\n    ',
  },
  {
    question: '定める',
    answer: 'sadameru',
    explantion: '\n      汉字: 定める\n      读音: さだめる\n      意思: to decide\n      来源:  to establish\n      同义词: 定める\n    ',
  },
  {
    question: '定義',
    answer: 'teigi',
    explantion: '\n      汉字: 定義\n      读音: ていぎ\n      意思: definition\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '定食',
    answer: 'teishoku',
    explantion: '\n      汉字: 定食\n      读音: ていしょく\n      意思: set meal\n      来源:  special (of the day)\n      同义词: 定食\n    ',
  },
  {
    question: '定年',
    answer: 'teinen',
    explantion: '\n      汉字: 定年\n      读音: ていねん\n      意思: retirement age\n      来源: waller\n      同义词: 停年\n    ',
  },
  {
    question: '提供',
    answer: 'teikyo',
    explantion: '\n      汉字: 提供\n      读音: ていきょう\n      意思: offer\n      来源:  tender\n      同义词: 提供\n    ',
  },
  {
    question: '提携',
    answer: 'teikei',
    explantion: '\n      汉字: 提携\n      读音: ていけい\n      意思: cooperation\n      来源:  tie-up\n      同义词: 提携\n    ',
  },
  {
    question: '提示',
    answer: 'teiji',
    explantion: '\n      汉字: 提示\n      读音: ていじ\n      意思: presentation\n      来源:  exhibit\n      同义词: 提示\n    ',
  },
  {
    question: '梯子',
    answer: 'teishi',
    explantion: '\n      汉字: 梯子\n      读音: ていし\n      意思: ladder\n      来源:  stairs\n      同义词: 梯子\n    ',
  },
  {
    question: '訂正',
    answer: 'teisei',
    explantion: '\n      汉字: 訂正\n      读音: ていせい\n      意思: correction\n      来源:  revision\n      同义词: 訂正\n    ',
  },
  {
    question: '諦め',
    answer: 'akirame',
    explantion: '\n      汉字: 諦め\n      读音: あきらめ\n      意思: resignation\n      来源:  acceptance\n      同义词: 諦め\n    ',
  },
  {
    question: '邸宅',
    answer: 'teitaku',
    explantion: '\n      汉字: 邸宅\n      读音: ていたく\n      意思: mansion\n      来源:  residence\n      同义词: 邸宅, 第宅\n    ',
  },
  {
    question: '雫',
    answer: 'shizuku',
    explantion: '\n      汉字: 雫\n      读音: しずく\n      意思: drop (of water)\n      来源: waller\n      同义词: 滴\n    ',
  },
  {
    question: '的',
    answer: 'teki',
    explantion: '\n      汉字: 的\n      读音: てき\n      意思: -like\n      来源:  typical\n      同义词: 的\n    ',
  },
  {
    question: '的',
    answer: 'mato',
    explantion: '\n      汉字: 的\n      读音: まと\n      意思: mark\n      来源:  target\n      同义词: 的\n    ',
  },
  {
    question: '適応',
    answer: 'tekiou',
    explantion: '\n      汉字: 適応\n      读音: てきおう\n      意思: adaptation\n      来源:  accommodation\n      同义词: 適応\n    ',
  },
  {
    question: '適宜',
    answer: 'tekigi',
    explantion: '\n      汉字: 適宜\n      读音: てきぎ\n      意思: suitability\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '適性',
    answer: 'tekisei',
    explantion: '\n      汉字: 適性\n      读音: てきせい\n      意思: aptitude\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '鉄鋼',
    answer: 'tetsuko',
    explantion: '\n      汉字: 鉄鋼\n      读音: てっこう\n      意思: iron and steel\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '天津',
    answer: 'amatsu',
    explantion: '\n      汉字: 天津\n      读音: あまつ\n      意思: heavenly\n      来源:  imperial\n      同义词: 天津, 天つ\n    ',
  },
  {
    question: '天井',
    answer: 'tenjo',
    explantion: '\n      汉字: 天井\n      读音: てんじょう\n      意思: ceiling\n      来源:  ceiling price\n      同义词: 天井\n    ',
  },
  {
    question: '天国',
    answer: 'tengoku',
    explantion: '\n      汉字: 天国\n      读音: てんごく\n      意思: paradise\n      来源:  heaven\n      同义词: 天国\n    ',
  },
  {
    question: '天才',
    answer: 'tensai',
    explantion: '\n      汉字: 天才\n      读音: てんさい\n      意思: genius\n      来源:  prodigy\n      同义词: 天才\n    ',
  },
  {
    question: '天災',
    answer: 'tensai',
    explantion: '\n      汉字: 天災\n      读音: てんさい\n      意思: natural calamity\n      来源:  disaster\n      同义词: 天災\n    ',
  },
  {
    question: '天体',
    answer: 'tentai',
    explantion: '\n      汉字: 天体\n      读音: てんたい\n      意思: heavenly body\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '展示',
    answer: 'tenji',
    explantion: '\n      汉字: 展示\n      读音: てんじ\n      意思: exhibition\n      来源:  display\n      同义词: 展示\n    ',
  },
  {
    question: '展望',
    answer: 'tembo',
    explantion: '\n      汉字: 展望\n      读音: てんぼう\n      意思: view\n      来源:  outlook\n      同义词: 展望\n    ',
  },
  {
    question: '添う',
    answer: 'so',
    explantion: '\n      汉字: 添う\n      读音: そう\n      意思: to accompany\n      来源:  to become married\n      同义词: 添う, 副う\n    ',
  },
  {
    question: '纏まり',
    answer: 'matomari',
    explantion: '\n      汉字: 纏まり\n      读音: まとまり\n      意思: conclusion\n      来源:  settlement\n      同义词: 纏まり, \n    ',
  },
  {
    question: '纏め',
    answer: 'matome',
    explantion: '\n      汉字: 纏め\n      读音: まとめ\n      意思: settlement\n      来源:  conclusion\n      同义词: 纏め, \n    ',
  },
  {
    question: '転じる',
    answer: 'tenjiru',
    explantion: '\n      汉字: 転じる\n      读音: てんじる\n      意思: to turn\n      来源:  to shift\n      同义词: 転じる\n    ',
  },
  {
    question: '転回',
    answer: 'tenkai',
    explantion: '\n      汉字: 転回\n      读音: てんかい\n      意思: revolution\n      来源:  rotation\n      同义词: 転回\n    ',
  },
  {
    question: '転換',
    answer: 'tenkan',
    explantion: '\n      汉字: 転換\n      读音: てんかん\n      意思: convert\n      来源:  divert\n      同义词: 転換\n    ',
  },
  {
    question: '転居',
    answer: 'tenkiyo',
    explantion: '\n      汉字: 転居\n      读音: てんきょ\n      意思: moving\n      来源:  changing residence\n      同义词: 転居\n    ',
  },
  {
    question: '転勤',
    answer: 'tenkin',
    explantion: '\n      汉字: 転勤\n      读音: てんきん\n      意思: transfer\n      来源:  transmission\n      同义词: 転勤\n    ',
  },
  {
    question: '転校',
    answer: 'tenko',
    explantion: '\n      汉字: 転校\n      读音: てんこう\n      意思: change schools\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '転任',
    answer: 'tennin',
    explantion: '\n      汉字: 転任\n      读音: てんにん\n      意思: change of post\n      来源: waller\n      同义词: 轉任\n    ',
  },
  {
    question: '転落',
    answer: 'tenraku',
    explantion: '\n      汉字: 転落\n      读音: てんらく\n      意思: fall\n      来源:  degradation\n      同义词: 転落, 顛落\n    ',
  },
  {
    question: '点火',
    answer: 'tenka',
    explantion: '\n      汉字: 点火\n      读音: てんか\n      意思: ignition\n      来源:  lighting\n      同义词: 点火\n    ',
  },
  {
    question: '点検',
    answer: 'tenken',
    explantion: '\n      汉字: 点検\n      读音: てんけん\n      意思: inspection\n      来源:  examination\n      同义词: 点検\n    ',
  },
  {
    question: '点線',
    answer: 'tensen',
    explantion: '\n      汉字: 点線\n      读音: てんせん\n      意思: dotted line\n      来源:  perforated line\n      同义词: 点線\n    ',
  },
  {
    question: '伝説',
    answer: 'densetsu',
    explantion: '\n      汉字: 伝説\n      读音: でんせつ\n      意思: tradition\n      来源:  legend\n      同义词: 伝説\n    ',
  },
  {
    question: '伝達',
    answer: 'dentatsu',
    explantion: '\n      汉字: 伝達\n      读音: でんたつ\n      意思: transmission (e.g. news)\n      来源:  communication\n      同义词: 伝達\n    ',
  },
  {
    question: '伝来',
    answer: 'denrai',
    explantion: '\n      汉字: 伝来\n      读音: でんらい\n      意思: ancestral\n      来源:  hereditary\n      同义词: 伝来\n    ',
  },
  {
    question: '殿',
    answer: 'shingari',
    explantion: '\n      汉字: 殿\n      读音: しんがり\n      意思: rear\n      来源:  rear unit guard\n      同义词: 殿\n    ',
  },
  {
    question: '殿様',
    answer: 'tonosama',
    explantion: '\n      汉字: 殿様\n      读音: とのさま\n      意思: feudal lord\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '田園',
    answer: 'denen',
    explantion: '\n      汉字: 田園\n      读音: でんえん\n      意思: country\n      来源:  rural districts\n      同义词: 田園, 田園, 田苑, 田苑\n    ',
  },
  {
    question: '電源',
    answer: 'dengen',
    explantion: '\n      汉字: 電源\n      读音: でんげん\n      意思: source of electricity\n      来源:  power (button on TV etc.)\n      同义词: 電源\n    ',
  },
  {
    question: '電線',
    answer: 'densen',
    explantion: '\n      汉字: 電線\n      读音: でんせん\n      意思: electric line\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '兎に角',
    answer: 'tonikaku',
    explantion: '\n      汉字: 兎に角\n      读音: とにかく\n      意思: anyhow\n      来源:  at any rate\n      同义词: 兎に角\n    ',
  },
  {
    question: '兎も角',
    answer: 'tomokaku',
    explantion: '\n      汉字: 兎も角\n      读音: ともかく\n      意思: anyhow\n      来源:  anyway\n      同义词: 兎も角\n    ',
  },
  {
    question: '兎角',
    answer: 'tokaku',
    explantion: '\n      汉字: 兎角\n      读音: とかく\n      意思: anyhow\n      来源:  anyway\n      同义词: 兎角, , 左右\n    ',
  },
  {
    question: '吐く',
    answer: 'tsuku',
    explantion: '\n      汉字: 吐く\n      读音: つく\n      意思: 1. to breathe\n      来源:  2. to tell (lies)\n      同义词: 吐く, \n    ',
  },
  {
    question: '妬む',
    answer: 'netamu',
    explantion: '\n      汉字: 妬む\n      读音: ねたむ\n      意思: to be jealous\n      来源:  to be envious\n      同义词: 妬む, 嫉む\n    ',
  },
  {
    question: '徒歩',
    answer: 'toho',
    explantion: '\n      汉字: 徒歩\n      读音: とほ\n      意思: walking\n      来源:  going on foot\n      同义词: 徒歩\n    ',
  },
  {
    question: '渡り鳥',
    answer: 'wataridori',
    explantion: '\n      汉字: 渡り鳥\n      读音: わたりどり\n      意思: migratory bird\n      来源:  bird of passage\n      同义词: 渡り鳥\n    ',
  },
  {
    question: '登校',
    answer: 'touko',
    explantion: '\n      汉字: 登校\n      读音: とうこう\n      意思: attendance (at school)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '登録',
    answer: 'touroku',
    explantion: '\n      汉字: 登録\n      读音: とうろく\n      意思: registration\n      来源:  register\n      同义词: 登録\n    ',
  },
  {
    question: '賭ける',
    answer: 'kakeru',
    explantion: '\n      汉字: 賭ける\n      读音: かける\n      意思: to wager\n      来源:  to bet\n      同义词: 賭ける\n    ',
  },
  {
    question: '途上',
    answer: 'tojiyou',
    explantion: '\n      汉字: 途上\n      读音: とじょう\n      意思: en route\n      来源:  half way\n      同义词: 途上\n    ',
  },
  {
    question: '途絶える',
    answer: 'todaeru',
    explantion: '\n      汉字: 途絶える\n      读音: とだえる\n      意思: to stop\n      来源:  to cease\n      同义词: 途絶える, 跡絶える\n    ',
  },
  {
    question: '努めて',
    answer: 'tsutomete',
    explantion: '\n      汉字: 努めて\n      读音: つとめて\n      意思: make an effort!\n      来源:  work hard!\n      同义词: 努めて, 勉めて, 力めて\n    ',
  },
  {
    question: '度忘れ',
    answer: 'dowasure',
    explantion: '\n      汉字: 度忘れ\n      读音: どわすれ\n      意思: lapse of memory\n      来源:  forget for a moment\n      同义词: 度忘れ, ど忘れ, ド忘れ\n    ',
  },
  {
    question: '土手',
    answer: 'dote',
    explantion: '\n      汉字: 土手\n      读音: どて\n      意思: embankment\n      来源:  bank\n      同义词: 土手\n    ',
  },
  {
    question: '土台',
    answer: 'dodai',
    explantion: '\n      汉字: 土台\n      读音: どだい\n      意思: foundation\n      来源:  base\n      同义词: 土台\n    ',
  },
  {
    question: '土俵',
    answer: 'dohyou',
    explantion: '\n      汉字: 土俵\n      读音: どひょう\n      意思: arena\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '土木',
    answer: 'doboku',
    explantion: '\n      汉字: 土木\n      读音: どぼく\n      意思: public works\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '奴',
    answer: 'yakko',
    explantion: '\n      汉字: 奴\n      读音: やっこ\n      意思: servant\n      来源:  fellow\n      同义词: 奴\n    ',
  },
  {
    question: '怒り',
    answer: 'ikari',
    explantion: '\n      汉字: 怒り\n      读音: いかり\n      意思: anger\n      来源:  hatred\n      同义词: 怒り\n    ',
  },
  {
    question: '怒る',
    answer: 'ikaru',
    explantion: '\n      汉字: 怒る\n      读音: いかる\n      意思: to get angry\n      来源:  to be angry\n      同义词: 怒る\n    ',
  },
  {
    question: '怒鳴る',
    answer: 'donaru',
    explantion: '\n      汉字: 怒鳴る\n      读音: どなる\n      意思: to shout\n      来源:  to yell\n      同义词: 怒鳴る\n    ',
  },
  {
    question: '倒産',
    answer: 'tosan',
    explantion: '\n      汉字: 倒産\n      读音: とうさん\n      意思: (corporate) bankruptcy\n      来源:  insolvency\n      同义词: 倒産\n    ',
  },
  {
    question: '冬眠',
    answer: 'toumin',
    explantion: '\n      汉字: 冬眠\n      读音: とうみん\n      意思: hibernation\n      来源:  winter sleep\n      同义词: 冬眠\n    ',
  },
  {
    question: '投げ出す',
    answer: 'nagedasu',
    explantion: '\n      汉字: 投げ出す\n      读音: なげだす\n      意思: to throw down\n      来源:  to abandon\n      同义词: 投げ出す\n    ',
  },
  {
    question: '投資',
    answer: 'toushi',
    explantion: '\n      汉字: 投資\n      读音: とうし\n      意思: investment\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '投入',
    answer: 'toniyuu',
    explantion: '\n      汉字: 投入\n      读音: とうにゅう\n      意思: throw\n      来源:  investment\n      同义词: 投入\n    ',
  },
  {
    question: '東',
    answer: 'azuma',
    explantion: '\n      汉字: 東\n      读音: あずま\n      意思: east\n      来源:  Eastern Japan\n      同义词: 東, 東, 吾妻, 吾妻, 吾嬬, 吾嬬\n    ',
  },
  {
    question: '棟',
    answer: 'tou',
    explantion: '\n      汉字: 棟\n      读音: とう\n      意思: place\n      来源:  section\n      同义词: 棟\n    ',
  },
  {
    question: '盗み',
    answer: 'nusumi',
    explantion: '\n      汉字: 盗み\n      读音: ぬすみ\n      意思: stealing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '当たり',
    answer: 'atari',
    explantion: '\n      汉字: 当たり\n      读音: あたり\n      意思: hit\n      来源:  success\n      同义词: 当たり, 当り, 中り, 中たり\n    ',
  },
  {
    question: '当たり前',
    answer: 'atarimae',
    explantion: '\n      汉字: 当たり前\n      读音: あたりまえ\n      意思: usual\n      来源:  common\n      同义词: 当たり前\n    ',
  },
  {
    question: '宛',
    answer: 'ate',
    explantion: '\n      汉字: 宛\n      读音: あて\n      意思: addressed to\n      来源: waller\n      同义词: 当て, , 宛て\n    ',
  },
  {
    question: '当て字',
    answer: 'ateji',
    explantion: '\n      汉字: 当て字\n      读音: あてじ\n      意思: phonetic-equivalent character\n      来源:  substitute character\n      同义词: 当て字, あて字, 宛字, 宛て字, 当字\n    ',
  },
  {
    question: '当てはまる',
    answer: 'atehamaru',
    explantion: '\n      汉字: 当てはまる\n      读音: あてはまる\n      意思: to apply (a rule)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '当人',
    answer: 'tonin',
    explantion: '\n      汉字: 当人\n      读音: とうにん\n      意思: the one concerned\n      来源:  the said person\n      同义词: 当人\n    ',
  },
  {
    question: '当選',
    answer: 'tosen',
    explantion: '\n      汉字: 当選\n      读音: とうせん\n      意思: being elected\n      来源:  winning the prize\n      同义词: 当選\n    ',
  },
  {
    question: '等級',
    answer: 'tokyu',
    explantion: '\n      汉字: 等級\n      读音: とうきゅう\n      意思: grade\n      来源:  class\n      同义词: 等級\n    ',
  },
  {
    question: '答え',
    answer: 'kotae',
    explantion: '\n      汉字: 答え\n      读音: こたえ\n      意思: answer\n      来源:  response\n      同义词: 答え\n    ',
  },
  {
    question: '筒',
    answer: 'tsutsu',
    explantion: '\n      汉字: 筒\n      读音: つつ\n      意思: pipe\n      来源:  tube\n      同义词: 筒\n    ',
  },
  {
    question: '統合',
    answer: 'tougou',
    explantion: '\n      汉字: 統合\n      读音: とうごう\n      意思: integration\n      来源:  unification\n      同义词: 統合\n    ',
  },
  {
    question: '統治',
    answer: 'toji',
    explantion: '\n      汉字: 統治\n      读音: とうじ\n      意思: rule\n      来源:  reign\n      同义词: 統治, 統治\n    ',
  },
  {
    question: '統制',
    answer: 'tousei',
    explantion: '\n      汉字: 統制\n      读音: とうせい\n      意思: regulation\n      来源:  control\n      同义词: 統制\n    ',
  },
  {
    question: '統率',
    answer: 'tousotsu',
    explantion: '\n      汉字: 統率\n      读音: とうそつ\n      意思: command\n      来源:  lead\n      同义词: 統率\n    ',
  },
  {
    question: '到達',
    answer: 'toutatsu',
    explantion: '\n      汉字: 到達\n      读音: とうたつ\n      意思: reaching\n      来源:  attaining\n      同义词: 到達\n    ',
  },
  {
    question: '到底',
    answer: 'totei',
    explantion: '\n      汉字: 到底\n      读音: とうてい\n      意思: (cannot) possibly\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '討議',
    answer: 'tougi',
    explantion: '\n      汉字: 討議\n      读音: とうぎ\n      意思: debate\n      来源:  discussion\n      同义词: 討議\n    ',
  },
  {
    question: '討論',
    answer: 'touron',
    explantion: '\n      汉字: 討論\n      读音: とうろん\n      意思: debate\n      来源:  discussion\n      同义词: 討論\n    ',
  },
  {
    question: '踏まえる',
    answer: 'fumaeru',
    explantion: '\n      汉字: 踏まえる\n      读音: ふまえる\n      意思: to be based on\n      来源:  to have origin in\n      同义词: 踏まえる\n    ',
  },
  {
    question: '逃げ出す',
    answer: 'nigedasu',
    explantion: '\n      汉字: 逃げ出す\n      读音: にげだす\n      意思: to run away\n      来源:  to escape from\n      同义词: 逃げ出す, 逃げだす, 逃出す, にげ出す\n    ',
  },
  {
    question: '逃す',
    answer: 'nogasu',
    explantion: '\n      汉字: 逃す\n      读音: のがす\n      意思: to let loose\n      来源:  to set free\n      同义词: 逃す, 遁す\n    ',
  },
  {
    question: '逃れる',
    answer: 'nogareru',
    explantion: '\n      汉字: 逃れる\n      读音: のがれる\n      意思: to escape\n      来源: waller\n      同义词: 遁れる\n    ',
  },
  {
    question: '逃走',
    answer: 'touso',
    explantion: '\n      汉字: 逃走\n      读音: とうそう\n      意思: flight\n      来源:  desertion\n      同义词: 逃走\n    ',
  },
  {
    question: '逃亡',
    answer: 'toubou',
    explantion: '\n      汉字: 逃亡\n      读音: とうぼう\n      意思: escape\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '陶器',
    answer: 'toki',
    explantion: '\n      汉字: 陶器\n      读音: とうき\n      意思: pottery\n      来源:  ceramics\n      同义词: 陶器\n    ',
  },
  {
    question: '動き',
    answer: 'ugoki',
    explantion: '\n      汉字: 動き\n      读音: うごき\n      意思: movement\n      来源:  activity\n      同义词: 動き\n    ',
  },
  {
    question: '動員',
    answer: 'doin',
    explantion: '\n      汉字: 動員\n      读音: どういん\n      意思: mobilization\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '動機',
    answer: 'doki',
    explantion: '\n      汉字: 動機\n      读音: どうき\n      意思: motive\n      来源:  incentive\n      同义词: 動機\n    ',
  },
  {
    question: '動向',
    answer: 'doko',
    explantion: '\n      汉字: 動向\n      读音: どうこう\n      意思: trend\n      来源:  tendency\n      同义词: 動向\n    ',
  },
  {
    question: '動的',
    answer: 'doteki',
    explantion: '\n      汉字: 動的\n      读音: どうてき\n      意思: dynamic\n      来源:  kinetic\n      同义词: 動的\n    ',
  },
  {
    question: '動揺',
    answer: 'doyo',
    explantion: '\n      汉字: 動揺\n      读音: どうよう\n      意思: disturbance\n      来源:  unrest\n      同义词: 動揺\n    ',
  },
  {
    question: '動力',
    answer: 'douriyoku',
    explantion: '\n      汉字: 動力\n      读音: どうりょく\n      意思: power\n      来源:  motive power\n      同义词: 動力\n    ',
  },
  {
    question: '同',
    answer: 'do',
    explantion: '\n      汉字: 同\n      读音: どう\n      意思: the same\n      来源:  the said\n      同义词: 同\n    ',
  },
  {
    question: '同い年',
    answer: 'onaidoshi',
    explantion: '\n      汉字: 同い年\n      读音: おないどし\n      意思: of the same age\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '同意',
    answer: 'doi',
    explantion: '\n      汉字: 同意\n      读音: どうい\n      意思: agreement\n      来源:  consent\n      同义词: 同意\n    ',
  },
  {
    question: '同感',
    answer: 'dokan',
    explantion: '\n      汉字: 同感\n      读音: どうかん\n      意思: agreement\n      来源:  same opinion\n      同义词: 同感\n    ',
  },
  {
    question: '同級',
    answer: 'dokyu',
    explantion: '\n      汉字: 同級\n      读音: どうきゅう\n      意思: the same grade\n      来源:  same class\n      同义词: 同級\n    ',
  },
  {
    question: '同居',
    answer: 'dokiyo',
    explantion: '\n      汉字: 同居\n      读音: どうきょ\n      意思: living together\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '同士',
    answer: 'doshi',
    explantion: '\n      汉字: 同士\n      读音: どうし\n      意思: fellow\n      来源:  companion\n      同义词: 同士, 同士\n    ',
  },
  {
    question: '同志',
    answer: 'doshi',
    explantion: '\n      汉字: 同志\n      读音: どうし\n      意思: same mind\n      来源:  comrade\n      同义词: 同志\n    ',
  },
  {
    question: '同情',
    answer: 'dojiyou',
    explantion: '\n      汉字: 同情\n      读音: どうじょう\n      意思: sympathy\n      来源:  compassion\n      同义词: 同情\n    ',
  },
  {
    question: '同調',
    answer: 'dochou',
    explantion: '\n      汉字: 同調\n      读音: どうちょう\n      意思: sympathy\n      来源:  agree with\n      同义词: 同調\n    ',
  },
  {
    question: '同等',
    answer: 'dotou',
    explantion: '\n      汉字: 同等\n      读音: どうとう\n      意思: equality\n      来源:  equal\n      同义词: 同等\n    ',
  },
  {
    question: '同封',
    answer: 'dofuu',
    explantion: '\n      汉字: 同封\n      读音: どうふう\n      意思: enclosure (e.g. in a letter)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '導く',
    answer: 'michibiku',
    explantion: '\n      汉字: 導く\n      读音: みちびく\n      意思: to be guided\n      来源:  to be shown\n      同义词: 導く\n    ',
  },
  {
    question: '導入',
    answer: 'doniyuu',
    explantion: '\n      汉字: 導入\n      读音: どうにゅう\n      意思: introduction\n      来源:  bringing in\n      同义词: 導入\n    ',
  },
  {
    question: '憧れ',
    answer: 'akogare',
    explantion: '\n      汉字: 憧れ\n      读音: あこがれ\n      意思: yearning\n      来源:  longing\n      同义词: 憧れ, 憬れ\n    ',
  },
  {
    question: '胴',
    answer: 'do',
    explantion: '\n      汉字: 胴\n      读音: どう\n      意思: trunk\n      来源:  body\n      同义词: 胴\n    ',
  },
  {
    question: '道場',
    answer: 'dojiyou',
    explantion: '\n      汉字: 道場\n      读音: どうじょう\n      意思: dojo\n      来源:  hall used for martial arts training\n      同义词: 道場\n    ',
  },
  {
    question: '得点',
    answer: 'tokuten',
    explantion: '\n      汉字: 得点\n      读音: とくてん\n      意思: score\n      来源:  points made\n      同义词: 得点\n    ',
  },
  {
    question: '特技',
    answer: 'tokugi',
    explantion: '\n      汉字: 特技\n      读音: とくぎ\n      意思: special skill\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '特許',
    answer: 'tokkyo',
    explantion: '\n      汉字: 特許\n      读音: とっきょ\n      意思: special permission\n      来源:  patent\n      同义词: 特許\n    ',
  },
  {
    question: '特権',
    answer: 'totsuken',
    explantion: '\n      汉字: 特権\n      读音: とっけん\n      意思: privilege\n      来源:  special right\n      同义词: 特権\n    ',
  },
  {
    question: '特産',
    answer: 'tokusan',
    explantion: '\n      汉字: 特産\n      读音: とくさん\n      意思: specialty\n      来源:  special product\n      同义词: 特産\n    ',
  },
  {
    question: '特集',
    answer: 'tokushu',
    explantion: '\n      汉字: 特集\n      读音: とくしゅう\n      意思: feature (e.g. newspaper)\n      来源:  special edition\n      同义词: 特集, 特輯\n    ',
  },
  {
    question: '特派',
    answer: 'tokuwa',
    explantion: '\n      汉字: 特派\n      读音: とくは\n      意思: send specially\n      来源:  special envoy\n      同义词: 特派\n    ',
  },
  {
    question: '特有',
    answer: 'tokuyuu',
    explantion: '\n      汉字: 特有\n      读音: とくゆう\n      意思: characteristic (of)\n      来源:  peculiar (to)\n      同义词: 特有\n    ',
  },
  {
    question: '一人でに',
    answer: 'hitorideni',
    explantion: '\n      汉字: 一人でに\n      读音: ひとりでに\n      意思: by itself\n      来源:  automatically\n      同义词: 一人でに\n    ',
  },
  {
    question: '独裁',
    answer: 'dokusai',
    explantion: '\n      汉字: 独裁\n      读音: どくさい\n      意思: dictatorship\n      来源:  despotism\n      同义词: 独裁\n    ',
  },
  {
    question: '独自',
    answer: 'dokuji',
    explantion: '\n      汉字: 独自\n      读音: どくじ\n      意思: original\n      来源:  peculiar\n      同义词: 独自\n    ',
  },
  {
    question: '独占',
    answer: 'dokusen',
    explantion: '\n      汉字: 独占\n      读音: どくせん\n      意思: monopoly\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '独創',
    answer: 'dokuso',
    explantion: '\n      汉字: 独創\n      读音: どくそう\n      意思: originality\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '読み上げる',
    answer: 'yomiageru',
    explantion: '\n      汉字: 読み上げる\n      读音: よみあげる\n      意思: to read out loud (and clearly)\n      来源:  to call a roll\n      同义词: 読み上げる, 読上げる\n    ',
  },
  {
    question: '読者',
    answer: 'dokusha',
    explantion: '\n      汉字: 読者\n      读音: どくしゃ\n      意思: reader\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '突く',
    answer: 'tsutsuku',
    explantion: '\n      汉字: 突く\n      读音: つつく\n      意思: 1. to thrust\n      来源:  to strike\n      同义词: 突く, , 突付く, 突つく\n    ',
  },
  {
    question: '突如',
    answer: 'totsujo',
    explantion: '\n      汉字: 突如\n      读音: とつじょ\n      意思: suddenly\n      来源:  all of a sudden\n      同义词: 突如\n    ',
  },
  {
    question: '突破',
    answer: 'toppa',
    explantion: '\n      汉字: 突破\n      读音: とっぱ\n      意思: breaking through\n      来源:  breakthrough\n      同义词: 突破\n    ',
  },
  {
    question: '鈍感',
    answer: 'donkan',
    explantion: '\n      汉字: 鈍感\n      读音: どんかん\n      意思: thickheadedness\n      来源:  stolidity\n      同义词: 鈍感\n    ',
  },
  {
    question: '内閣',
    answer: 'naikaku',
    explantion: '\n      汉字: 内閣\n      读音: ないかく\n      意思: cabinet\n      来源:  (government) ministry\n      同义词: 内閣\n    ',
  },
  {
    question: '内臓',
    answer: 'naizou',
    explantion: '\n      汉字: 内臓\n      读音: ないぞう\n      意思: internal organs\n      来源:  intestines\n      同义词: 内臓\n    ',
  },
  {
    question: '内部',
    answer: 'naibu',
    explantion: '\n      汉字: 内部\n      读音: ないぶ\n      意思: interior\n      来源:  inside\n      同义词: 内部\n    ',
  },
  {
    question: '内訳',
    answer: 'uchiwake',
    explantion: '\n      汉字: 内訳\n      读音: うちわけ\n      意思: the items\n      来源:  breakdown\n      同义词: 内訳\n    ',
  },
  {
    question: '内乱',
    answer: 'nairan',
    explantion: '\n      汉字: 内乱\n      读音: ないらん\n      意思: civil war\n      来源:  insurrection\n      同义词: 内乱\n    ',
  },
  {
    question: '内陸',
    answer: 'nairiku',
    explantion: '\n      汉字: 内陸\n      读音: ないりく\n      意思: inland\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '馴れ馴れしい',
    answer: 'narenareshii',
    explantion: '\n      汉字: 馴れ馴れしい\n      读音: なれなれしい\n      意思: over-familiar\n      来源: waller\n      同义词: 馴々しい\n    ',
  },
  {
    question: '難',
    answer: 'nan',
    explantion: '\n      汉字: 難\n      读音: なん\n      意思: difficulty\n      来源:  hardships\n      同义词: 難\n    ',
  },
  {
    question: '賑わう',
    answer: 'nigiwau',
    explantion: '\n      汉字: 賑わう\n      读音: にぎわう\n      意思: to prosper\n      来源:  to flourish\n      同义词: 賑わう\n    ',
  },
  {
    question: '肉親',
    answer: 'nikushin',
    explantion: '\n      汉字: 肉親\n      读音: にくしん\n      意思: blood relationship\n      来源:  blood relative\n      同义词: 肉親\n    ',
  },
  {
    question: '肉体',
    answer: 'nikutai',
    explantion: '\n      汉字: 肉体\n      读音: にくたい\n      意思: the body\n      来源:  the flesh\n      同义词: 肉体\n    ',
  },
  {
    question: '日の丸',
    answer: 'hinomaru',
    explantion: '\n      汉字: 日の丸\n      读音: ひのまる\n      意思: the Japanese flag\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '日向',
    answer: 'hinata',
    explantion: '\n      汉字: 日向\n      读音: ひなた\n      意思: sunny place\n      来源:  in the sun\n      同义词: 日向, 日なた\n    ',
  },
  {
    question: '日頃',
    answer: 'higoro',
    explantion: '\n      汉字: 日頃\n      读音: ひごろ\n      意思: normally\n      来源:  habitually\n      同义词: 日頃, 日ごろ\n    ',
  },
  {
    question: '日取り',
    answer: 'hidori',
    explantion: '\n      汉字: 日取り\n      读音: ひどり\n      意思: fixed date\n      来源:  appointed day\n      同义词: 日取り, 日どり\n    ',
  },
  {
    question: '日当',
    answer: 'nitto',
    explantion: '\n      汉字: 日当\n      读音: にっとう\n      意思: daily allowance\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '日夜',
    answer: 'nichiya',
    explantion: '\n      汉字: 日夜\n      读音: にちや\n      意思: day and night\n      来源:  always\n      同义词: 日夜\n    ',
  },
  {
    question: '乳',
    answer: 'chichi',
    explantion: '\n      汉字: 乳\n      读音: ちち\n      意思: milk\n      来源:  breast\n      同义词: 乳, 乳\n    ',
  },
  {
    question: '入る',
    answer: 'iru',
    explantion: '\n      汉字: 入る\n      读音: いる\n      意思: to get in\n      来源:  to go in\n      同义词: 入る\n    ',
  },
  {
    question: '入手',
    answer: 'niyuushu',
    explantion: '\n      汉字: 入手\n      读音: にゅうしゅ\n      意思: obtaining\n      来源:  coming to hand\n      同义词: 入手\n    ',
  },
  {
    question: '入賞',
    answer: 'niyuushou',
    explantion: '\n      汉字: 入賞\n      读音: にゅうしょう\n      意思: winning a prize or place (in a contest)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '入浴',
    answer: 'niyuuyoku',
    explantion: '\n      汉字: 入浴\n      读音: にゅうよく\n      意思: bathe\n      来源:  bathing\n      同义词: 入浴\n    ',
  },
  {
    question: '如何して',
    answer: 'doshite',
    explantion: '\n      汉字: 如何して\n      读音: どうして\n      意思: why?\n      来源:  for what reason\n      同义词: 如何して\n    ',
  },
  {
    question: '如何しても',
    answer: 'doshitemo',
    explantion: '\n      汉字: 如何しても\n      读音: どうしても\n      意思: by all means\n      来源:  at any cost\n      同义词: 如何しても\n    ',
  },
  {
    question: '如何に',
    answer: 'ikani',
    explantion: '\n      汉字: 如何に\n      读音: いかに\n      意思: how?\n      来源:  in what way?\n      同义词: 如何に, \n    ',
  },
  {
    question: '尿',
    answer: 'niyou',
    explantion: '\n      汉字: 尿\n      读音: にょう\n      意思: urine\n      来源: waller\n      同义词: 尿, 尿, 尿, 尿, 尿, 尿, 尿\n    ',
  },
  {
    question: '任す',
    answer: 'makasu',
    explantion: '\n      汉字: 任す\n      读音: まかす\n      意思: to entrust\n      来源:  to leave to a person\n      同义词: 任す\n    ',
  },
  {
    question: '任務',
    answer: 'ninmu',
    explantion: '\n      汉字: 任務\n      读音: にんむ\n      意思: duty\n      来源:  function\n      同义词: 任務\n    ',
  },
  {
    question: '任命',
    answer: 'ninmei',
    explantion: '\n      汉字: 任命\n      读音: にんめい\n      意思: appointment\n      来源:  nomination\n      同义词: 任命\n    ',
  },
  {
    question: '妊娠',
    answer: 'ninshin',
    explantion: '\n      汉字: 妊娠\n      读音: にんしん\n      意思: conception\n      来源:  pregnancy\n      同义词: 妊娠\n    ',
  },
  {
    question: '認める',
    answer: 'shitatameru',
    explantion: '\n      汉字: 認める\n      读音: したためる\n      意思: to write up\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '認識',
    answer: 'ninshiki',
    explantion: '\n      汉字: 認識\n      读音: にんしき\n      意思: recognition\n      来源:  cognizance\n      同义词: 認識\n    ',
  },
  {
    question: '熱意',
    answer: 'netsui',
    explantion: '\n      汉字: 熱意\n      读音: ねつい\n      意思: zeal\n      来源:  enthusiasm\n      同义词: 熱意\n    ',
  },
  {
    question: '熱湯',
    answer: 'netto',
    explantion: '\n      汉字: 熱湯\n      读音: ねっとう\n      意思: boiling water\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '熱量',
    answer: 'netsuryo',
    explantion: '\n      汉字: 熱量\n      读音: ねつりょう\n      意思: temperature\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '年鑑',
    answer: 'nenkan',
    explantion: '\n      汉字: 年鑑\n      读音: ねんかん\n      意思: yearbook\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '年号',
    answer: 'nengou',
    explantion: '\n      汉字: 年号\n      读音: ねんごう\n      意思: name of an era\n      来源:  year number\n      同义词: 年号\n    ',
  },
  {
    question: '年頃',
    answer: 'toshigoro',
    explantion: '\n      汉字: 年頃\n      读音: としごろ\n      意思: age\n      来源:  marriageable age\n      同义词: 年頃, 年ごろ\n    ',
  },
  {
    question: '年生',
    answer: 'nensei',
    explantion: '\n      汉字: 年生\n      读音: ねんせい\n      意思: pupil in .... year\n      来源:  student in .... year\n      同义词: 年生\n    ',
  },
  {
    question: '年長',
    answer: 'nenchou',
    explantion: '\n      汉字: 年長\n      读音: ねんちょう\n      意思: seniority\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '年輪',
    answer: 'nenrin',
    explantion: '\n      汉字: 年輪\n      读音: ねんりん\n      意思: annual tree ring\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '念',
    answer: 'nen',
    explantion: '\n      汉字: 念\n      读音: ねん\n      意思: sense\n      来源:  idea\n      同义词: 念\n    ',
  },
  {
    question: '燃焼',
    answer: 'nensho',
    explantion: '\n      汉字: 燃焼\n      读音: ねんしょう\n      意思: burning\n      来源:  combustion\n      同义词: 燃焼\n    ',
  },
  {
    question: '燃料',
    answer: 'nenryo',
    explantion: '\n      汉字: 燃料\n      读音: ねんりょう\n      意思: fuel\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '粘り',
    answer: 'nebari',
    explantion: '\n      汉字: 粘り\n      读音: ねばり\n      意思: stickyness\n      来源:  viscosity\n      同义词: 粘り\n    ',
  },
  {
    question: '粘る',
    answer: 'nebaru',
    explantion: '\n      汉字: 粘る\n      读音: ねばる\n      意思: to be sticky\n      来源:  to be adhesive\n      同义词: 粘る\n    ',
  },
  {
    question: '乃至',
    answer: 'naishi',
    explantion: '\n      汉字: 乃至\n      读音: ないし\n      意思: from...to\n      来源:  between...and\n      同义词: 乃至, \n    ',
  },
  {
    question: '悩ましい',
    answer: 'nayamashii',
    explantion: '\n      汉字: 悩ましい\n      读音: なやましい\n      意思: seductive\n      来源:  melancholy\n      同义词: 悩ましい\n    ',
  },
  {
    question: '悩ます',
    answer: 'nayamasu',
    explantion: '\n      汉字: 悩ます\n      读音: なやます\n      意思: to afflict\n      来源:  to torment\n      同义词: 悩ます\n    ',
  },
  {
    question: '悩み',
    answer: 'nayami',
    explantion: '\n      汉字: 悩み\n      读音: なやみ\n      意思: trouble(s)\n      来源:  worry\n      同义词: 悩み\n    ',
  },
  {
    question: '納入',
    answer: 'nouniyuu',
    explantion: '\n      汉字: 納入\n      读音: のうにゅう\n      意思: payment\n      来源:  supply\n      同义词: 納入\n    ',
  },
  {
    question: '脳',
    answer: 'no',
    explantion: '\n      汉字: 脳\n      读音: のう\n      意思: brain\n      来源:  memory\n      同义词: 脳\n    ',
  },
  {
    question: '農耕',
    answer: 'noko',
    explantion: '\n      汉字: 農耕\n      读音: のうこう\n      意思: farming\n      来源:  agriculture\n      同义词: 農耕\n    ',
  },
  {
    question: '農場',
    answer: 'noujiyou',
    explantion: '\n      汉字: 農場\n      读音: のうじょう\n      意思: farm (agriculture)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '農地',
    answer: 'nouchi',
    explantion: '\n      汉字: 農地\n      读音: のうち\n      意思: agricultural land\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '把握',
    answer: 'waaku',
    explantion: '\n      汉字: 把握\n      读音: はあく\n      意思: grasp\n      来源:  catch\n      同义词: 把握\n    ',
  },
  {
    question: '派',
    answer: 'wa',
    explantion: '\n      汉字: 派\n      读音: は\n      意思: clique\n      来源:  faction\n      同义词: 派\n    ',
  },
  {
    question: '派遣',
    answer: 'haken',
    explantion: '\n      汉字: 派遣\n      读音: はけん\n      意思: dispatch\n      来源:  send\n      同义词: 派遣\n    ',
  },
  {
    question: '破壊',
    answer: 'wakai',
    explantion: '\n      汉字: 破壊\n      读音: はかい\n      意思: destruction\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '破棄',
    answer: 'haki',
    explantion: '\n      汉字: 破棄\n      读音: はき\n      意思: revocation\n      来源:  annulment\n      同义词: 破棄, 破毀\n    ',
  },
  {
    question: '破損',
    answer: 'wason',
    explantion: '\n      汉字: 破損\n      读音: はそん\n      意思: damage\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '破裂',
    answer: 'haretsu',
    explantion: '\n      汉字: 破裂\n      读音: はれつ\n      意思: explosion\n      来源:  rupture\n      同义词: 破裂\n    ',
  },
  {
    question: '罵る',
    answer: 'nonoshiru',
    explantion: '\n      汉字: 罵る\n      读音: ののしる\n      意思: to speak ill of\n      来源:  to abuse\n      同义词: 罵る\n    ',
  },
  {
    question: '馬鹿馬鹿しい',
    answer: 'bakabakashii',
    explantion: '\n      汉字: 馬鹿馬鹿しい\n      读音: ばかばかしい\n      意思: stupid\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '廃れる',
    answer: 'sutareru',
    explantion: '\n      汉字: 廃れる\n      读音: すたれる\n      意思: to go out of use\n      来源:  to become obsolete\n      同义词: 廃れる, 頽れる\n    ',
  },
  {
    question: '廃棄',
    answer: 'haiki',
    explantion: '\n      汉字: 廃棄\n      读音: はいき\n      意思: annullment\n      来源:  disposal\n      同义词: 廃棄\n    ',
  },
  {
    question: '廃止',
    answer: 'haishi',
    explantion: '\n      汉字: 廃止\n      读音: はいし\n      意思: abolition\n      来源:  repeal\n      同义词: 廃止\n    ',
  },
  {
    question: '拝啓',
    answer: 'haikei',
    explantion: '\n      汉字: 拝啓\n      读音: はいけい\n      意思: Dear (so and so)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '拝借',
    answer: 'haishaku',
    explantion: '\n      汉字: 拝借\n      读音: はいしゃく\n      意思: borrowing\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '排除',
    answer: 'haijiyo',
    explantion: '\n      汉字: 排除\n      读音: はいじょ\n      意思: exclusion\n      来源:  removal\n      同义词: 排除\n    ',
  },
  {
    question: '排水',
    answer: 'haisui',
    explantion: '\n      汉字: 排水\n      读音: はいすい\n      意思: drainage\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '敗戦',
    answer: 'haisen',
    explantion: '\n      汉字: 敗戦\n      读音: はいせん\n      意思: defeat\n      来源:  losing a war\n      同义词: 敗戦\n    ',
  },
  {
    question: '杯',
    answer: 'sakazuki',
    explantion: '\n      汉字: 杯\n      读音: さかずき\n      意思: wine cups\n      来源: waller\n      同义词: 杯, 盃, 盃, 坏, 坏, 巵, 巵, 卮, 卮, 盞, 盞, 盞, 觚, 觚, 觴, 觴, 酒盃, 酒盃\n    ',
  },
  {
    question: '背く',
    answer: 'somuku',
    explantion: '\n      汉字: 背く\n      读音: そむく\n      意思: to run counter to\n      来源:  to go against\n      同义词: 背く, 叛く\n    ',
  },
  {
    question: '背景',
    answer: 'haikei',
    explantion: '\n      汉字: 背景\n      读音: はいけい\n      意思: background\n      来源:  scenery\n      同义词: 背景\n    ',
  },
  {
    question: '背後',
    answer: 'haigo',
    explantion: '\n      汉字: 背後\n      读音: はいご\n      意思: back\n      来源:  rear\n      同义词: 背後\n    ',
  },
  {
    question: '背負う',
    answer: 'sho',
    explantion: '\n      汉字: 背負う\n      读音: しょう\n      意思: to be burdened with\n      来源:  to carry on back or shoulder\n      同义词: 背負う\n    ',
  },
  {
    question: '肺',
    answer: 'hai',
    explantion: '\n      汉字: 肺\n      读音: はい\n      意思: lung\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '配給',
    answer: 'haikyu',
    explantion: '\n      汉字: 配給\n      读音: はいきゅう\n      意思: distribution (eg. films rice)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '配偶者',
    answer: 'haigushiya',
    explantion: '\n      汉字: 配偶者\n      读音: はいぐうしゃ\n      意思: spouse\n      来源:  wife\n      同义词: 配偶者\n    ',
  },
  {
    question: '配置',
    answer: 'haichi',
    explantion: '\n      汉字: 配置\n      读音: はいち\n      意思: arrangement (of resources)\n      来源:  disposition\n      同义词: 配置\n    ',
  },
  {
    question: '配布',
    answer: 'haifu',
    explantion: '\n      汉字: 配布\n      读音: はいふ\n      意思: distribution\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '配分',
    answer: 'haibun',
    explantion: '\n      汉字: 配分\n      读音: はいぶん\n      意思: distribution\n      来源:  allotment\n      同义词: 配分\n    ',
  },
  {
    question: '配慮',
    answer: 'hairiyo',
    explantion: '\n      汉字: 配慮\n      读音: はいりょ\n      意思: consideration\n      来源:  concern\n      同义词: 配慮\n    ',
  },
  {
    question: '配列',
    answer: 'hairetsu',
    explantion: '\n      汉字: 配列\n      读音: はいれつ\n      意思: arrangement\n      来源:  array (programming)\n      同义词: 配列, 排列\n    ',
  },
  {
    question: '倍率',
    answer: 'bairitsu',
    explantion: '\n      汉字: 倍率\n      读音: ばいりつ\n      意思: diameter\n      来源:  magnification\n      同义词: 倍率\n    ',
  },
  {
    question: '梅干',
    answer: 'umeboshi',
    explantion: '\n      汉字: 梅干\n      读音: うめぼし\n      意思: dried plum\n      来源: waller\n      同义词: 梅干し\n    ',
  },
  {
    question: '売り出す',
    answer: 'uridasu',
    explantion: '\n      汉字: 売り出す\n      读音: うりだす\n      意思: to put on sale\n      来源:  to market\n      同义词: 売り出す, 売出す\n    ',
  },
  {
    question: '賠償',
    answer: 'baisho',
    explantion: '\n      汉字: 賠償\n      读音: ばいしょう\n      意思: reparations\n      来源:  indemnity\n      同义词: 賠償\n    ',
  },
  {
    question: '剥げる',
    answer: 'hageru',
    explantion: '\n      汉字: 剥げる\n      读音: はげる\n      意思: to come off\n      来源:  to be worn off\n      同义词: 剥げる, , 剝げる\n    ',
  },
  {
    question: '白状',
    answer: 'wakujiyou',
    explantion: '\n      汉字: 白状\n      读音: はくじょう\n      意思: confession\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '薄弱',
    answer: 'wakujaku',
    explantion: '\n      汉字: 薄弱\n      读音: はくじゃく\n      意思: feebleness\n      来源:  weakness\n      同义词: 薄弱\n    ',
  },
  {
    question: '迫害',
    answer: 'hakugai',
    explantion: '\n      汉字: 迫害\n      读音: はくがい\n      意思: persecution\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '漠然',
    answer: 'bakuzen',
    explantion: '\n      汉字: 漠然\n      读音: ばくぜん\n      意思: obscure\n      来源:  vague\n      同义词: 漠然, ばく然\n    ',
  },
  {
    question: '爆弾',
    answer: 'bakudan',
    explantion: '\n      汉字: 爆弾\n      读音: ばくだん\n      意思: bomb\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '爆破',
    answer: 'bakuwa',
    explantion: '\n      汉字: 爆破\n      读音: ばくは\n      意思: blast\n      来源:  explosion\n      同义词: 爆破\n    ',
  },
  {
    question: '発',
    answer: 'hatsu',
    explantion: '\n      汉字: 発\n      读音: はつ\n      意思: departure\n      来源:  beginning\n      同义词: 発\n    ',
  },
  {
    question: '発育',
    answer: 'hatsuiku',
    explantion: '\n      汉字: 発育\n      读音: はついく\n      意思: (physical) growth\n      来源:  development\n      同义词: 発育\n    ',
  },
  {
    question: '発芽',
    answer: 'hatsuga',
    explantion: '\n      汉字: 発芽\n      读音: はつが\n      意思: burgeoning\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '発掘',
    answer: 'hakkutsu',
    explantion: '\n      汉字: 発掘\n      读音: はっくつ\n      意思: excavation\n      来源:  exhumation\n      同义词: 発掘\n    ',
  },
  {
    question: '発言',
    answer: 'watsugen',
    explantion: '\n      汉字: 発言\n      读音: はつげん\n      意思: utterance\n      来源:  speech\n      同义词: 発言\n    ',
  },
  {
    question: '発作',
    answer: 'hotsusa',
    explantion: '\n      汉字: 発作\n      读音: ほっさ\n      意思: fit\n      来源:  spasm\n      同义词: 発作\n    ',
  },
  {
    question: '発生',
    answer: 'hassei',
    explantion: '\n      汉字: 発生\n      读音: はっせい\n      意思: outbreak\n      来源:  spring forth\n      同义词: 発生\n    ',
  },
  {
    question: '発病',
    answer: 'hatsubyo',
    explantion: '\n      汉字: 発病\n      读音: はつびょう\n      意思: attack (disease)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '罰',
    answer: 'bachi',
    explantion: '\n      汉字: 罰\n      读音: ばち\n      意思: (divine) punishment\n      来源:  curse\n      同义词: 罰\n    ',
  },
  {
    question: '抜かす',
    answer: 'nukasu',
    explantion: '\n      汉字: 抜かす\n      读音: ぬかす\n      意思: to omit\n      来源:  to leave out\n      同义词: 抜かす, 吐かす\n    ',
  },
  {
    question: '抜け出す',
    answer: 'nukedasu',
    explantion: '\n      汉字: 抜け出す\n      读音: ぬけだす\n      意思: to slip out\n      来源:  to sneak away\n      同义词: 抜け出す, 抜けだす, 脱け出す\n    ',
  },
  {
    question: '伴う',
    answer: 'tomonau',
    explantion: '\n      汉字: 伴う\n      读音: ともなう\n      意思: to accompany\n      来源:  to bring with\n      同义词: 伴う, 伴なう\n    ',
  },
  {
    question: '判',
    answer: 'ban',
    explantion: '\n      汉字: 判\n      读音: ばん\n      意思: size (of paper or books)\n      来源: waller\n      同义词: 判\n    ',
  },
  {
    question: '判決',
    answer: 'hanketsu',
    explantion: '\n      汉字: 判決\n      读音: はんけつ\n      意思: judicial decision\n      来源:  judgement\n      同义词: 判決\n    ',
  },
  {
    question: '判定',
    answer: 'hantei',
    explantion: '\n      汉字: 判定\n      读音: はんてい\n      意思: judgement\n      来源:  decision\n      同义词: 判定\n    ',
  },
  {
    question: '半端',
    answer: 'hanpa',
    explantion: '\n      汉字: 半端\n      读音: はんぱ\n      意思: remnant\n      来源:  fragment\n      同义词: 半端\n    ',
  },
  {
    question: '反',
    answer: 'tan',
    explantion: '\n      汉字: 反\n      读音: たん\n      意思: roll of cloth (c. 10 yds.)\n      来源:  .245 acres\n      同义词: 反, 段\n    ',
  },
  {
    question: '反する',
    answer: 'hansuru',
    explantion: '\n      汉字: 反する\n      读音: はんする\n      意思: to be inconsistent with\n      来源:  to oppose\n      同义词: 反する, 叛する\n    ',
  },
  {
    question: '反り',
    answer: 'sori',
    explantion: '\n      汉字: 反り\n      读音: そり\n      意思: warp\n      来源:  curvature\n      同义词: 反り\n    ',
  },
  {
    question: '反応',
    answer: 'hanno',
    explantion: '\n      汉字: 反応\n      读音: はんのう\n      意思: reaction\n      来源:  response\n      同义词: 反応, 反応\n    ',
  },
  {
    question: '反感',
    answer: 'hankan',
    explantion: '\n      汉字: 反感\n      读音: はんかん\n      意思: antipathy\n      来源:  revolt\n      同义词: 反感\n    ',
  },
  {
    question: '反響',
    answer: 'hankyo',
    explantion: '\n      汉字: 反響\n      读音: はんきょう\n      意思: echo\n      来源:  reverberation\n      同义词: 反響\n    ',
  },
  {
    question: '反撃',
    answer: 'hangeki',
    explantion: '\n      汉字: 反撃\n      读音: はんげき\n      意思: counterattack\n      来源:  counteroffensive\n      同义词: 反撃\n    ',
  },
  {
    question: '反射',
    answer: 'hansha',
    explantion: '\n      汉字: 反射\n      读音: はんしゃ\n      意思: reflection\n      来源:  reverberation\n      同义词: 反射\n    ',
  },
  {
    question: '反発',
    answer: 'hampatsu',
    explantion: '\n      汉字: 反発\n      读音: はんぱつ\n      意思: repelling\n      来源:  rebound\n      同义词: 反発, 反撥\n    ',
  },
  {
    question: '反乱',
    answer: 'hanran',
    explantion: '\n      汉字: 反乱\n      读音: はんらん\n      意思: insurrection\n      来源:  mutiny\n      同义词: 反乱, 叛乱\n    ',
  },
  {
    question: '氾濫',
    answer: 'hanran',
    explantion: '\n      汉字: 氾濫\n      读音: はんらん\n      意思: overflowing\n      来源:  flood\n      同义词: 氾濫, 汎濫, はん濫, 氾らん, \n    ',
  },
  {
    question: '版',
    answer: 'han',
    explantion: '\n      汉字: 版\n      读音: はん\n      意思: edition\n      来源: waller\n      同义词: 版\n    ',
  },
  {
    question: '版画',
    answer: 'hanga',
    explantion: '\n      汉字: 版画\n      读音: はんが\n      意思: art print\n      来源: waller\n      同义词: 板画\n    ',
  },
  {
    question: '犯す',
    answer: 'okasu',
    explantion: '\n      汉字: 犯す\n      读音: おかす\n      意思: to commit\n      来源:  to perpetrate\n      同义词: 犯す\n    ',
  },
  {
    question: '班',
    answer: 'han',
    explantion: '\n      汉字: 班\n      读音: はん\n      意思: group\n      来源:  party\n      同义词: 班\n    ',
  },
  {
    question: '繁栄',
    answer: 'hanei',
    explantion: '\n      汉字: 繁栄\n      读音: はんえい\n      意思: prospering\n      来源:  prosperity\n      同义词: 繁栄\n    ',
  },
  {
    question: '繁殖',
    answer: 'hanshoku',
    explantion: '\n      汉字: 繁殖\n      读音: はんしょく\n      意思: breed\n      来源:  multiply\n      同义词: 繁殖, 蕃殖\n    ',
  },
  {
    question: '繁盛',
    answer: 'hanjiyou',
    explantion: '\n      汉字: 繁盛\n      读音: はんじょう\n      意思: prosperity\n      来源:  flourishing\n      同义词: 繁盛, 繁盛, 繁昌, 蕃昌\n    ',
  },
  {
    question: '五月蝿い',
    answer: 'urusai',
    explantion: '\n      汉字: 五月蝿い\n      读音: うるさい\n      意思: noisy\n      来源:  loud\n      同义词: 五月蝿い\n    ',
  },
  {
    question: '煩わしい',
    answer: 'wazurawashii',
    explantion: '\n      汉字: 煩わしい\n      读音: わずらわしい\n      意思: troublesome\n      来源:  annoying\n      同义词: 煩わしい\n    ',
  },
  {
    question: '番目',
    answer: 'banme',
    explantion: '\n      汉字: 番目\n      读音: ばんめ\n      意思: cardinal number suffix\n      来源: waller\n      同义词: 番め\n    ',
  },
  {
    question: '卑しい',
    answer: 'iyashii',
    explantion: '\n      汉字: 卑しい\n      读音: いやしい\n      意思: greedy\n      来源:  vulgar\n      同义词: 卑しい, 賤しい\n    ',
  },
  {
    question: '否決',
    answer: 'hiketsu',
    explantion: '\n      汉字: 否決\n      读音: ひけつ\n      意思: rejection\n      来源:  negation\n      同义词: 否決\n    ',
  },
  {
    question: '彼方',
    answer: 'achira',
    explantion: '\n      汉字: 彼方\n      读音: あちら\n      意思: 1. there\n      来源:  yonder\n      同义词: 彼方\n    ',
  },
  {
    question: '悲観',
    answer: 'hikan',
    explantion: '\n      汉字: 悲観\n      读音: ひかん\n      意思: pessimism\n      来源:  disappointment\n      同义词: 悲観\n    ',
  },
  {
    question: '悲惨',
    answer: 'hisan',
    explantion: '\n      汉字: 悲惨\n      读音: ひさん\n      意思: misery\n      来源: waller\n      同义词: 悲酸\n    ',
  },
  {
    question: '悲鳴',
    answer: 'himei',
    explantion: '\n      汉字: 悲鳴\n      读音: ひめい\n      意思: shriek\n      来源:  scream\n      同义词: 悲鳴\n    ',
  },
  {
    question: '扉',
    answer: 'tobira',
    explantion: '\n      汉字: 扉\n      读音: とびら\n      意思: door\n      来源:  opening\n      同义词: 扉, 闔\n    ',
  },
  {
    question: '非難',
    answer: 'hinan',
    explantion: '\n      汉字: 非難\n      读音: ひなん\n      意思: blame\n      来源:  attack\n      同义词: 非難, 批難\n    ',
  },
  {
    question: '比重',
    answer: 'hiju',
    explantion: '\n      汉字: 比重\n      读音: ひじゅう\n      意思: specific gravity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '比率',
    answer: 'hiritsu',
    explantion: '\n      汉字: 比率\n      读音: ひりつ\n      意思: ratio\n      来源:  proportion\n      同义词: 比率\n    ',
  },
  {
    question: '比例',
    answer: 'hirei',
    explantion: '\n      汉字: 比例\n      读音: ひれい\n      意思: proportion\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '疲労',
    answer: 'hirou',
    explantion: '\n      汉字: 疲労\n      读音: ひろう\n      意思: fatigue\n      来源:  weariness\n      同义词: 疲労\n    ',
  },
  {
    question: '秘書',
    answer: 'hisho',
    explantion: '\n      汉字: 秘書\n      读音: ひしょ\n      意思: (private) secretary\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '肥料',
    answer: 'hiryo',
    explantion: '\n      汉字: 肥料\n      读音: ひりょう\n      意思: manure\n      来源:  fertilizer\n      同义词: 肥料\n    ',
  },
  {
    question: '費',
    answer: 'hi',
    explantion: '\n      汉字: 費\n      读音: ひ\n      意思: cost\n      来源:  expense\n      同义词: 費\n    ',
  },
  {
    question: '費やす',
    answer: 'tsuiyasu',
    explantion: '\n      汉字: 費やす\n      读音: ついやす\n      意思: to spend\n      来源:  to devote\n      同义词: 費やす\n    ',
  },
  {
    question: '避難',
    answer: 'hinan',
    explantion: '\n      汉字: 避難\n      读音: ひなん\n      意思: taking refuge\n      来源:  finding shelter\n      同义词: 避難\n    ',
  },
  {
    question: '非',
    answer: 'hi',
    explantion: '\n      汉字: 非\n      读音: ひ\n      意思: faulty-\n      来源:  non-\n      同义词: 非\n    ',
  },
  {
    question: '非行',
    answer: 'hiko',
    explantion: '\n      汉字: 非行\n      读音: ひこう\n      意思: delinquency\n      来源:  misconduct\n      同义词: 非行\n    ',
  },
  {
    question: '備え付ける',
    answer: 'sonaetsukeru',
    explantion: '\n      汉字: 備え付ける\n      读音: そなえつける\n      意思: to provide\n      来源:  to furnish\n      同义词: 備え付ける, 備えつける\n    ',
  },
  {
    question: '尾',
    answer: 'o',
    explantion: '\n      汉字: 尾\n      读音: お\n      意思: tail\n      来源:  ridge\n      同义词: 尾\n    ',
  },
  {
    question: '微笑',
    answer: 'bisho',
    explantion: '\n      汉字: 微笑\n      读音: びしょう\n      意思: smile\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '微塵',
    answer: 'mijin',
    explantion: '\n      汉字: 微塵\n      读音: みじん\n      意思: particle\n      来源:  atom\n      同义词: 微塵, 微塵\n    ',
  },
  {
    question: '微量',
    answer: 'biriyou',
    explantion: '\n      汉字: 微量\n      读音: びりょう\n      意思: minuscule amount\n      来源:  extremely small quantity\n      同义词: 微量\n    ',
  },
  {
    question: '眉',
    answer: 'mayu',
    explantion: '\n      汉字: 眉\n      读音: まゆ\n      意思: eyebrow\n      来源: waller\n      同义词: 眉\n    ',
  },
  {
    question: '美',
    answer: 'bi',
    explantion: '\n      汉字: 美\n      读音: び\n      意思: beauty\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '美術',
    answer: 'bijutsu',
    explantion: '\n      汉字: 美術\n      读音: びじゅつ\n      意思: art\n      来源:  fine arts\n      同义词: 美術\n    ',
  },
  {
    question: '美味しい',
    answer: 'oishii',
    explantion: '\n      汉字: 美味しい\n      读音: おいしい\n      意思: delicious\n      来源:  tasty\n      同义词: 美味しい\n    ',
  },
  {
    question: '匹敵',
    answer: 'hitteki',
    explantion: '\n      汉字: 匹敵\n      读音: ひってき\n      意思: comparing with\n      来源:  match\n      同义词: 匹敵\n    ',
  },
  {
    question: '必修',
    answer: 'hitsushu',
    explantion: '\n      汉字: 必修\n      读音: ひっしゅう\n      意思: required (subject)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '必然',
    answer: 'hitsuzen',
    explantion: '\n      汉字: 必然\n      读音: ひつぜん\n      意思: inevitable\n      来源:  necessary\n      同义词: 必然\n    ',
  },
  {
    question: '標語',
    answer: 'hyougo',
    explantion: '\n      汉字: 標語\n      读音: ひょうご\n      意思: motto\n      来源:  slogan\n      同义词: 標語\n    ',
  },
  {
    question: '漂う',
    answer: 'tadayo',
    explantion: '\n      汉字: 漂う\n      读音: ただよう\n      意思: to drift about\n      来源:  to float\n      同义词: 漂う\n    ',
  },
  {
    question: '票',
    answer: 'hyou',
    explantion: '\n      汉字: 票\n      读音: ひょう\n      意思: label\n      来源:  ballot\n      同义词: 票\n    ',
  },
  {
    question: '描写',
    answer: 'byosha',
    explantion: '\n      汉字: 描写\n      读音: びょうしゃ\n      意思: depiction\n      来源:  description\n      同义词: 描写, 描寫\n    ',
  },
  {
    question: '病',
    answer: 'yamai',
    explantion: '\n      汉字: 病\n      读音: やまい\n      意思: illness\n      来源:  disease\n      同义词: 病\n    ',
  },
  {
    question: '病む',
    answer: 'yamu',
    explantion: '\n      汉字: 病む\n      读音: やむ\n      意思: to fall ill\n      来源:  to be ill\n      同义词: 病む\n    ',
  },
  {
    question: '苗',
    answer: 'nae',
    explantion: '\n      汉字: 苗\n      读音: なえ\n      意思: rice seedling\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '品質',
    answer: 'hinshitsu',
    explantion: '\n      汉字: 品質\n      读音: ひんしつ\n      意思: quality\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '品種',
    answer: 'hinshiyu',
    explantion: '\n      汉字: 品種\n      读音: ひんしゅ\n      意思: brand\n      来源:  kind\n      同义词: 品種\n    ',
  },
  {
    question: '浜',
    answer: 'hama',
    explantion: '\n      汉字: 浜\n      读音: はま\n      意思: beach\n      来源:  seashore\n      同义词: 浜, , \n    ',
  },
  {
    question: '浜辺',
    answer: 'hamabe',
    explantion: '\n      汉字: 浜辺\n      读音: はまべ\n      意思: beach\n      来源:  foreshore\n      同义词: 浜辺, 浜べ\n    ',
  },
  {
    question: '貧困',
    answer: 'hinkon',
    explantion: '\n      汉字: 貧困\n      读音: ひんこん\n      意思: poverty\n      来源:  lack\n      同义词: 貧困\n    ',
  },
  {
    question: '貧弱',
    answer: 'hinjaku',
    explantion: '\n      汉字: 貧弱\n      读音: ひんじゃく\n      意思: poor\n      来源:  meagre\n      同义词: 貧弱\n    ',
  },
  {
    question: '貧乏',
    answer: 'binbou',
    explantion: '\n      汉字: 貧乏\n      读音: びんぼう\n      意思: poverty\n      来源:  destitute\n      同义词: 貧乏, 貧之\n    ',
  },
  {
    question: '頻繁',
    answer: 'himpan',
    explantion: '\n      汉字: 頻繁\n      读音: ひんぱん\n      意思: frequency\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '敏感',
    answer: 'binkan',
    explantion: '\n      汉字: 敏感\n      读音: びんかん\n      意思: sensibility\n      来源:  susceptibility\n      同义词: 敏感\n    ',
  },
  {
    question: '瓶',
    answer: 'kame',
    explantion: '\n      汉字: 瓶\n      读音: かめ\n      意思: earthenware pot\n      来源: waller\n      同义词: 甕\n    ',
  },
  {
    question: '不意',
    answer: 'fui',
    explantion: '\n      汉字: 不意\n      读音: ふい\n      意思: sudden\n      来源:  abrupt\n      同义词: 不意\n    ',
  },
  {
    question: '不可欠',
    answer: 'fukaketsu',
    explantion: '\n      汉字: 不可欠\n      读音: ふかけつ\n      意思: indispensable\n      来源:  essential\n      同义词: 不可欠\n    ',
  },
  {
    question: '不吉',
    answer: 'fukitsu',
    explantion: '\n      汉字: 不吉\n      读音: ふきつ\n      意思: ominous\n      来源:  sinister\n      同义词: 不吉\n    ',
  },
  {
    question: '不況',
    answer: 'fukyo',
    explantion: '\n      汉字: 不況\n      读音: ふきょう\n      意思: recession\n      来源:  depression\n      同义词: 不況\n    ',
  },
  {
    question: '不景気',
    answer: 'fukeiki',
    explantion: '\n      汉字: 不景気\n      读音: ふけいき\n      意思: business recession\n      来源:  hard times\n      同义词: 不景気\n    ',
  },
  {
    question: '不在',
    answer: 'fuzai',
    explantion: '\n      汉字: 不在\n      读音: ふざい\n      意思: absence\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '不順',
    answer: 'fujiyun',
    explantion: '\n      汉字: 不順\n      读音: ふじゅん\n      意思: irregularity\n      来源:  unseasonableness\n      同义词: 不順\n    ',
  },
  {
    question: '不審',
    answer: 'fushin',
    explantion: '\n      汉字: 不審\n      读音: ふしん\n      意思: incomplete understanding\n      来源:  doubt\n      同义词: 不審\n    ',
  },
  {
    question: '不振',
    answer: 'fushin',
    explantion: '\n      汉字: 不振\n      读音: ふしん\n      意思: dullness\n      来源:  depression\n      同义词: 不振\n    ',
  },
  {
    question: '不調',
    answer: 'fuchiyou',
    explantion: '\n      汉字: 不調\n      读音: ふちょう\n      意思: bad condition\n      来源:  not to work out (ie a deal)\n      同义词: 不調\n    ',
  },
  {
    question: '不当',
    answer: 'futo',
    explantion: '\n      汉字: 不当\n      读音: ふとう\n      意思: injustice\n      来源:  impropriety\n      同义词: 不当\n    ',
  },
  {
    question: '不動産',
    answer: 'fudosan',
    explantion: '\n      汉字: 不動産\n      读音: ふどうさん\n      意思: real estate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '不評',
    answer: 'fuhyou',
    explantion: '\n      汉字: 不評\n      读音: ふひょう\n      意思: bad reputation\n      来源:  disgrace\n      同义词: 不評\n    ',
  },
  {
    question: '不服',
    answer: 'fufuku',
    explantion: '\n      汉字: 不服\n      读音: ふふく\n      意思: dissatisfaction\n      来源:  discontent\n      同义词: 不服\n    ',
  },
  {
    question: '不明',
    answer: 'fumei',
    explantion: '\n      汉字: 不明\n      读音: ふめい\n      意思: unknown\n      来源:  obscure\n      同义词: 不明\n    ',
  },
  {
    question: '不良',
    answer: 'furyo',
    explantion: '\n      汉字: 不良\n      读音: ふりょう\n      意思: badness\n      来源:  delinquent\n      同义词: 不良\n    ',
  },
  {
    question: '付け加える',
    answer: 'tsukekuwaeru',
    explantion: '\n      汉字: 付け加える\n      读音: つけくわえる\n      意思: to add one thing to another\n      来源: waller\n      同义词: つけ加える, 付加える, 付けくわえる, 附加える, 附け加える\n    ',
  },
  {
    question: '富',
    answer: 'tomi',
    explantion: '\n      汉字: 富\n      读音: とみ\n      意思: wealth\n      来源:  fortune\n      同义词: 富, 富み\n    ',
  },
  {
    question: '富む',
    answer: 'tomu',
    explantion: '\n      汉字: 富む\n      读音: とむ\n      意思: to be rich\n      来源:  to become rich\n      同义词: 富む\n    ',
  },
  {
    question: '富豪',
    answer: 'fugou',
    explantion: '\n      汉字: 富豪\n      读音: ふごう\n      意思: wealthy person\n      来源:  millionaire\n      同义词: 富豪\n    ',
  },
  {
    question: '布巾',
    answer: 'fukin',
    explantion: '\n      汉字: 布巾\n      读音: ふきん\n      意思: tea-towel\n      来源:  dish cloth\n      同义词: 布巾\n    ',
  },
  {
    question: '布告',
    answer: 'fukoku',
    explantion: '\n      汉字: 布告\n      读音: ふこく\n      意思: edict\n      来源:  ordinance\n      同义词: 布告\n    ',
  },
  {
    question: '扶養',
    answer: 'fuyou',
    explantion: '\n      汉字: 扶養\n      读音: ふよう\n      意思: support\n      来源:  maintenance\n      同义词: 扶養\n    ',
  },
  {
    question: '浮かぶ',
    answer: 'ukabu',
    explantion: '\n      汉字: 浮かぶ\n      读音: うかぶ\n      意思: to float\n      来源:  to rise to surface\n      同义词: 浮かぶ\n    ',
  },
  {
    question: '浮気',
    answer: 'uwaki',
    explantion: '\n      汉字: 浮気\n      读音: うわき\n      意思: flighty\n      来源:  fickle\n      同义词: 浮気, うわ気, 上気\n    ',
  },
  {
    question: '浮力',
    answer: 'furiyoku',
    explantion: '\n      汉字: 浮力\n      读音: ふりょく\n      意思: buoyancy\n      来源:  floating power\n      同义词: 浮力\n    ',
  },
  {
    question: '父母',
    answer: 'chichiwawa',
    explantion: '\n      汉字: 父母\n      读音: ちちはは\n      意思: father and mother\n      来源:  parents\n      同义词: 父母\n    ',
  },
  {
    question: '腐敗',
    answer: 'fuhai',
    explantion: '\n      汉字: 腐敗\n      读音: ふはい\n      意思: decay\n      来源:  depravity\n      同义词: 腐敗\n    ',
  },
  {
    question: '負う',
    answer: 'ou',
    explantion: '\n      汉字: 負う\n      读音: おう\n      意思: to bear\n      来源:  to owe\n      同义词: 負う\n    ',
  },
  {
    question: '負かす',
    answer: 'makasu',
    explantion: '\n      汉字: 負かす\n      读音: まかす\n      意思: to defeat\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '負債',
    answer: 'fusai',
    explantion: '\n      汉字: 負債\n      读音: ふさい\n      意思: debt\n      来源:  liabilities\n      同义词: 負債\n    ',
  },
  {
    question: '負傷',
    answer: 'fusho',
    explantion: '\n      汉字: 負傷\n      读音: ふしょう\n      意思: injury\n      来源:  wound\n      同义词: 負傷\n    ',
  },
  {
    question: '負担',
    answer: 'futan',
    explantion: '\n      汉字: 負担\n      读音: ふたん\n      意思: burden\n      来源:  charge\n      同义词: 負担\n    ',
  },
  {
    question: '赴く',
    answer: 'omomuku',
    explantion: '\n      汉字: 赴く\n      读音: おもむく\n      意思: to go\n      来源:  to proceed\n      同义词: 赴く, 赴く, 趣く, 趣く, 趨く, 趨く\n    ',
  },
  {
    question: '赴任',
    answer: 'funin',
    explantion: '\n      汉字: 赴任\n      读音: ふにん\n      意思: (proceeding to) new appointment\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '侮辱',
    answer: 'bujiyoku',
    explantion: '\n      汉字: 侮辱\n      读音: ぶじょく\n      意思: insult\n      来源:  contempt\n      同义词: 侮辱\n    ',
  },
  {
    question: '武装',
    answer: 'buso',
    explantion: '\n      汉字: 武装\n      读音: ぶそう\n      意思: arms\n      来源:  armament\n      同义词: 武装\n    ',
  },
  {
    question: '武力',
    answer: 'buriyoku',
    explantion: '\n      汉字: 武力\n      读音: ぶりょく\n      意思: armed might\n      来源:  military power\n      同义词: 武力\n    ',
  },
  {
    question: '舞う',
    answer: 'mau',
    explantion: '\n      汉字: 舞う\n      读音: まう\n      意思: to dance\n      来源:  to flutter about\n      同义词: 舞う\n    ',
  },
  {
    question: '部',
    answer: 'bu',
    explantion: '\n      汉字: 部\n      读音: ぶ\n      意思: department\n      来源:  part\n      同义词: 部\n    ',
  },
  {
    question: '部下',
    answer: 'buka',
    explantion: '\n      汉字: 部下\n      读音: ぶか\n      意思: subordinate person\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '部門',
    answer: 'bumon',
    explantion: '\n      汉字: 部門\n      读音: ぶもん\n      意思: class\n      来源:  group\n      同义词: 部門\n    ',
  },
  {
    question: '封',
    answer: 'fu',
    explantion: '\n      汉字: 封\n      读音: ふう\n      意思: seal\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '封建',
    answer: 'hoken',
    explantion: '\n      汉字: 封建\n      读音: ほうけん\n      意思: feudalistic\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '封鎖',
    answer: 'fuusa',
    explantion: '\n      汉字: 封鎖\n      读音: ふうさ\n      意思: blockade\n      来源:  freezing (funds)\n      同义词: 封鎖\n    ',
  },
  {
    question: '風習',
    answer: 'fushu',
    explantion: '\n      汉字: 風習\n      读音: ふうしゅう\n      意思: custom\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '風俗',
    answer: 'fuzoku',
    explantion: '\n      汉字: 風俗\n      读音: ふうぞく\n      意思: 1. manners\n      来源:  customs\n      同义词: 風俗, \n    ',
  },
  {
    question: '風土',
    answer: 'fuudo',
    explantion: '\n      汉字: 風土\n      读音: ふうど\n      意思: natural features\n      来源:  topography\n      同义词: 風土\n    ',
  },
  {
    question: '復活',
    answer: 'fukkatsu',
    explantion: '\n      汉字: 復活\n      读音: ふっかつ\n      意思: revival (e.g. musical)\n      来源:  restoration\n      同义词: 復活\n    ',
  },
  {
    question: '復旧',
    answer: 'fukukyu',
    explantion: '\n      汉字: 復旧\n      读音: ふくきゅう\n      意思: restoration\n      来源:  restitution\n      同义词: 復旧, 復旧\n    ',
  },
  {
    question: '復興',
    answer: 'fukko',
    explantion: '\n      汉字: 復興\n      读音: ふっこう\n      意思: revival\n      来源:  renaissance\n      同义词: 復興\n    ',
  },
  {
    question: '福',
    answer: 'fuku',
    explantion: '\n      汉字: 福\n      读音: ふく\n      意思: good fortune\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '福祉',
    answer: 'fukushi',
    explantion: '\n      汉字: 福祉\n      读音: ふくし\n      意思: welfare\n      来源:  well-being\n      同义词: 福祉, 福祉\n    ',
  },
  {
    question: '腹立ち',
    answer: 'haradachi',
    explantion: '\n      汉字: 腹立ち\n      读音: はらだち\n      意思: anger\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '複合',
    answer: 'fukugou',
    explantion: '\n      汉字: 複合\n      读音: ふくごう\n      意思: composite\n      来源:  complex\n      同义词: 複合\n    ',
  },
  {
    question: '覆す',
    answer: 'kutsugaesu',
    explantion: '\n      汉字: 覆す\n      读音: くつがえす\n      意思: to overturn\n      来源:  to upset\n      同义词: 覆す\n    ',
  },
  {
    question: '覆面',
    answer: 'fukumen',
    explantion: '\n      汉字: 覆面\n      读音: ふくめん\n      意思: mask\n      来源:  veil\n      同义词: 覆面\n    ',
  },
  {
    question: '沸騰',
    answer: 'futto',
    explantion: '\n      汉字: 沸騰\n      读音: ふっとう\n      意思: boiling\n      来源:  seething\n      同义词: 沸騰\n    ',
  },
  {
    question: '仏',
    answer: 'futsu',
    explantion: '\n      汉字: 仏\n      读音: ふつ\n      意思: French\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '仏像',
    answer: 'butsuzou',
    explantion: '\n      汉字: 仏像\n      读音: ぶつぞう\n      意思: Buddhist image (statue)\n      来源: waller\n      同义词: 佛像\n    ',
  },
  {
    question: '物議',
    answer: 'butsugi',
    explantion: '\n      汉字: 物議\n      读音: ぶつぎ\n      意思: public discussion (criticism)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '物好き',
    answer: 'monozuki',
    explantion: '\n      汉字: 物好き\n      读音: ものずき\n      意思: curiosity\n      来源: waller\n      同义词: もの好き, 物数奇\n    ',
  },
  {
    question: '物資',
    answer: 'butsushi',
    explantion: '\n      汉字: 物資\n      读音: ぶっし\n      意思: goods\n      来源:  materials\n      同义词: 物資\n    ',
  },
  {
    question: '物足りない',
    answer: 'monotarinai',
    explantion: '\n      汉字: 物足りない\n      读音: ものたりない\n      意思: unsatisfied\n      来源:  unsatisfactory\n      同义词: 物足りない\n    ',
  },
  {
    question: '物体',
    answer: 'buttai',
    explantion: '\n      汉字: 物体\n      读音: ぶったい\n      意思: body\n      来源:  object\n      同义词: 物体\n    ',
  },
  {
    question: '物置き',
    answer: 'monooki',
    explantion: '\n      汉字: 物置き\n      读音: ものおき\n      意思: storeroom\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '分',
    answer: 'fun',
    explantion: '\n      汉字: 分\n      读音: ふん\n      意思: minute\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '分業',
    answer: 'bungyou',
    explantion: '\n      汉字: 分業\n      读音: ぶんぎょう\n      意思: division of labor\n      来源:  specialization\n      同义词: 分業\n    ',
  },
  {
    question: '分散',
    answer: 'bunsan',
    explantion: '\n      汉字: 分散\n      读音: ぶんさん\n      意思: dispersion\n      来源:  decentralization\n      同义词: 分散\n    ',
  },
  {
    question: '分子',
    answer: 'bunshi',
    explantion: '\n      汉字: 分子\n      读音: ぶんし\n      意思: numerator\n      来源:  molecule\n      同义词: 分子\n    ',
  },
  {
    question: '分担',
    answer: 'buntan',
    explantion: '\n      汉字: 分担\n      读音: ぶんたん\n      意思: apportionment\n      来源:  sharing\n      同义词: 分担\n    ',
  },
  {
    question: '分配',
    answer: 'bumpai',
    explantion: '\n      汉字: 分配\n      读音: ぶんぱい\n      意思: division\n      来源:  sharing\n      同义词: 分配\n    ',
  },
  {
    question: '分母',
    answer: 'bunbo',
    explantion: '\n      汉字: 分母\n      读音: ぶんぼ\n      意思: denominator\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '分離',
    answer: 'bunri',
    explantion: '\n      汉字: 分離\n      读音: ぶんり\n      意思: separation\n      来源:  detachment\n      同义词: 分離\n    ',
  },
  {
    question: '分裂',
    answer: 'bunretsu',
    explantion: '\n      汉字: 分裂\n      读音: ぶんれつ\n      意思: split\n      来源:  division\n      同义词: 分裂\n    ',
  },
  {
    question: '噴出',
    answer: 'funshutsu',
    explantion: '\n      汉字: 噴出\n      读音: ふんしゅつ\n      意思: spewing\n      来源:  gushing\n      同义词: 噴出\n    ',
  },
  {
    question: '憤慨',
    answer: 'fungai',
    explantion: '\n      汉字: 憤慨\n      读音: ふんがい\n      意思: indignation\n      来源:  resentment\n      同义词: 憤慨\n    ',
  },
  {
    question: '焚火',
    answer: 'takibi',
    explantion: '\n      汉字: 焚火\n      读音: たきび\n      意思: (open) fire\n      来源: waller\n      同义词: 焚き火, たき火\n    ',
  },
  {
    question: '奮闘',
    answer: 'funtou',
    explantion: '\n      汉字: 奮闘\n      读音: ふんとう\n      意思: hard struggle\n      来源:  strenuous effort\n      同义词: 奮闘\n    ',
  },
  {
    question: '粉末',
    answer: 'funmatsu',
    explantion: '\n      汉字: 粉末\n      读音: ふんまつ\n      意思: fine powder\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '紛らわしい',
    answer: 'magirawashii',
    explantion: '\n      汉字: 紛らわしい\n      读音: まぎらわしい\n      意思: confusing\n      来源:  misleading\n      同义词: 紛らわしい\n    ',
  },
  {
    question: '紛れる',
    answer: 'magireru',
    explantion: '\n      汉字: 紛れる\n      读音: まぎれる\n      意思: to be diverted\n      来源:  to slip into\n      同义词: 紛れる\n    ',
  },
  {
    question: '紛失',
    answer: 'funshitsu',
    explantion: '\n      汉字: 紛失\n      读音: ふんしつ\n      意思: losing something\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '紛争',
    answer: 'funso',
    explantion: '\n      汉字: 紛争\n      读音: ふんそう\n      意思: dispute\n      来源:  trouble\n      同义词: 紛争, 紛諍\n    ',
  },
  {
    question: '文',
    answer: 'fumi',
    explantion: '\n      汉字: 文\n      读音: ふみ\n      意思: letter\n      来源:  writings\n      同义词: 文, 書\n    ',
  },
  {
    question: '文化財',
    answer: 'bunkazai',
    explantion: '\n      汉字: 文化財\n      读音: ぶんかざい\n      意思: cultural assets\n      来源:  cultural property\n      同义词: 文化財\n    ',
  },
  {
    question: '文語',
    answer: 'bungo',
    explantion: '\n      汉字: 文語\n      读音: ぶんご\n      意思: written language\n      来源:  literary language\n      同义词: 文語\n    ',
  },
  {
    question: '聞き取り',
    answer: 'kikitori',
    explantion: '\n      汉字: 聞き取り\n      读音: ききとり\n      意思: listening comprehension\n      来源: waller\n      同义词: 聴き取り, 聞取り, 聴取り\n    ',
  },
  {
    question: '然しながら',
    answer: 'shikashinagara',
    explantion: '\n      汉字: 然しながら\n      读音: しかしながら\n      意思: nevertheless\n      来源:  however\n      同义词: 然しながら, , 併し乍ら, 然し乍ら\n    ',
  },
  {
    question: '而も',
    answer: 'shikamo',
    explantion: '\n      汉字: 而も\n      读音: しかも\n      意思: moreover\n      来源:  furthermore\n      同义词: 而も\n    ',
  },
  {
    question: '兵器',
    answer: 'eiki',
    explantion: '\n      汉字: 兵器\n      读音: へいき\n      意思: arms\n      来源:  weapons\n      同义词: 兵器\n    ',
  },
  {
    question: '兵士',
    answer: 'heishi',
    explantion: '\n      汉字: 兵士\n      读音: へいし\n      意思: soldier\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '平たい',
    answer: 'hiratai',
    explantion: '\n      汉字: 平たい\n      读音: ひらたい\n      意思: flat\n      来源:  even\n      同义词: 平たい, 扁たい\n    ',
  },
  {
    question: '平常',
    answer: 'eijiyou',
    explantion: '\n      汉字: 平常\n      读音: へいじょう\n      意思: normal\n      来源:  usual\n      同义词: 平常\n    ',
  },
  {
    question: '平方',
    answer: 'heiho',
    explantion: '\n      汉字: 平方\n      读音: へいほう\n      意思: square (e.g. metre)\n      来源:  square\n      同义词: 平方\n    ',
  },
  {
    question: '並びに',
    answer: 'narabini',
    explantion: '\n      汉字: 並びに\n      读音: ならびに\n      意思: and\n      来源: waller\n      同义词: 並に\n    ',
  },
  {
    question: '並列',
    answer: 'eiretsu',
    explantion: '\n      汉字: 並列\n      读音: へいれつ\n      意思: arrangement\n      来源:  parallel\n      同义词: 並列\n    ',
  },
  {
    question: '閉口',
    answer: 'eiko',
    explantion: '\n      汉字: 閉口\n      读音: へいこう\n      意思: shut mouth\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '閉鎖',
    answer: 'eisa',
    explantion: '\n      汉字: 閉鎖\n      读音: へいさ\n      意思: closing\n      来源:  closure\n      同义词: 閉鎖\n    ',
  },
  {
    question: '偏',
    answer: 'hen',
    explantion: '\n      汉字: 偏\n      读音: へん\n      意思: side\n      来源:  left radical of a character\n      同义词: 偏\n    ',
  },
  {
    question: '偏見',
    answer: 'henken',
    explantion: '\n      汉字: 偏見\n      读音: へんけん\n      意思: prejudice\n      来源:  narrow view\n      同义词: 偏見\n    ',
  },
  {
    question: '変革',
    answer: 'henkaku',
    explantion: '\n      汉字: 変革\n      读音: へんかく\n      意思: change\n      来源:  reform\n      同义词: 変革\n    ',
  },
  {
    question: '変遷',
    answer: 'hensen',
    explantion: '\n      汉字: 変遷\n      读音: へんせん\n      意思: change\n      来源:  transition\n      同义词: 変遷\n    ',
  },
  {
    question: '変動',
    answer: 'hendo',
    explantion: '\n      汉字: 変動\n      读音: へんどう\n      意思: change\n      来源:  fluctuation\n      同义词: 変動\n    ',
  },
  {
    question: '片言',
    answer: 'katakoto',
    explantion: '\n      汉字: 片言\n      读音: かたこと\n      意思: a smattering\n      来源:  talk like a baby\n      同义词: 片言, \n    ',
  },
  {
    question: '片付け',
    answer: 'katazuke',
    explantion: '\n      汉字: 片付け\n      读音: かたづけ\n      意思: tidying up\n      来源:  finishing\n      同义词: 片付け, 片づけ\n    ',
  },
  {
    question: '編',
    answer: 'hen',
    explantion: '\n      汉字: 編\n      读音: へん\n      意思: compilation\n      来源:  editing\n      同义词: 編, 篇\n    ',
  },
  {
    question: '返る',
    answer: 'kaeru',
    explantion: '\n      汉字: 返る\n      读音: かえる\n      意思: to return\n      来源:  to come back\n      同义词: 返る\n    ',
  },
  {
    question: '返還',
    answer: 'henkan',
    explantion: '\n      汉字: 返還\n      读音: へんかん\n      意思: return\n      来源:  restoration\n      同义词: 返還\n    ',
  },
  {
    question: '返済',
    answer: 'hensai',
    explantion: '\n      汉字: 返済\n      读音: へんさい\n      意思: repayment\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '返答',
    answer: 'hento',
    explantion: '\n      汉字: 返答\n      读音: へんとう\n      意思: reply\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '便宜',
    answer: 'bengi',
    explantion: '\n      汉字: 便宜\n      读音: べんぎ\n      意思: convenience\n      来源:  accommodation\n      同义词: 便宜, 便宜\n    ',
  },
  {
    question: '弁解',
    answer: 'benkai',
    explantion: '\n      汉字: 弁解\n      读音: べんかい\n      意思: explanation\n      来源:  justification\n      同义词: 弁解, 辯解\n    ',
  },
  {
    question: '弁護',
    answer: 'bengo',
    explantion: '\n      汉字: 弁護\n      读音: べんご\n      意思: defense\n      来源:  pleading\n      同义词: 弁護\n    ',
  },
  {
    question: '弁償',
    answer: 'bensho',
    explantion: '\n      汉字: 弁償\n      读音: べんしょう\n      意思: next word\n      来源:  compensation\n      同义词: 弁償\n    ',
  },
  {
    question: '弁論',
    answer: 'benron',
    explantion: '\n      汉字: 弁論\n      读音: べんろん\n      意思: discussion\n      来源:  debate\n      同义词: 弁論, 辯論\n    ',
  },
  {
    question: '保つ',
    answer: 'tamotsu',
    explantion: '\n      汉字: 保つ\n      读音: たもつ\n      意思: to keep\n      来源:  to preserve\n      同义词: 保つ, 保つ\n    ',
  },
  {
    question: '保育',
    answer: 'hoiku',
    explantion: '\n      汉字: 保育\n      读音: ほいく\n      意思: nursing\n      来源:  nurturing\n      同义词: 保育, 哺育\n    ',
  },
  {
    question: '保温',
    answer: 'hon',
    explantion: '\n      汉字: 保温\n      读音: ほおん\n      意思: retaining warmth\n      来源:  keeping heat in\n      同义词: 保温\n    ',
  },
  {
    question: '保管',
    answer: 'hokan',
    explantion: '\n      汉字: 保管\n      读音: ほかん\n      意思: charge\n      来源:  custody\n      同义词: 保管\n    ',
  },
  {
    question: '保険',
    answer: 'hoken',
    explantion: '\n      汉字: 保険\n      读音: ほけん\n      意思: insurance\n      来源:  guarantee\n      同义词: 保険\n    ',
  },
  {
    question: '保護',
    answer: 'hogo',
    explantion: '\n      汉字: 保護\n      读音: ほご\n      意思: care\n      来源:  protection\n      同义词: 保護\n    ',
  },
  {
    question: '保守',
    answer: 'hoshiyu',
    explantion: '\n      汉字: 保守\n      读音: ほしゅ\n      意思: conservative\n      来源:  maintaining\n      同义词: 保守\n    ',
  },
  {
    question: '保養',
    answer: 'hoyo',
    explantion: '\n      汉字: 保養\n      读音: ほよう\n      意思: health preservation\n      来源:  recuperation\n      同义词: 保養\n    ',
  },
  {
    question: '舗装',
    answer: 'hoso',
    explantion: '\n      汉字: 舗装\n      读音: ほそう\n      意思: pavement\n      来源:  road surface\n      同义词: 舗装, 鋪装\n    ',
  },
  {
    question: '捕獲',
    answer: 'hokaku',
    explantion: '\n      汉字: 捕獲\n      读音: ほかく\n      意思: capture\n      来源:  seizure\n      同义词: 捕獲\n    ',
  },
  {
    question: '捕鯨',
    answer: 'hogei',
    explantion: '\n      汉字: 捕鯨\n      读音: ほげい\n      意思: whaling\n      来源:  whale fishing\n      同义词: 捕鯨\n    ',
  },
  {
    question: '捕虜',
    answer: 'horiyo',
    explantion: '\n      汉字: 捕虜\n      读音: ほりょ\n      意思: prisoner (of war)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '歩',
    answer: 'fu',
    explantion: '\n      汉字: 歩\n      读音: ふ\n      意思: pawn (in chess or shogi)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '歩み',
    answer: 'ayumi',
    explantion: '\n      汉字: 歩み\n      读音: あゆみ\n      意思: walking\n      来源: waller\n      同义词: 歩\n    ',
  },
  {
    question: '歩む',
    answer: 'ayumu',
    explantion: '\n      汉字: 歩む\n      读音: あゆむ\n      意思: to walk\n      来源:  to go on foot\n      同义词: 歩む\n    ',
  },
  {
    question: '補給',
    answer: 'hokyu',
    explantion: '\n      汉字: 補給\n      读音: ほきゅう\n      意思: supply\n      来源:  supplying\n      同义词: 補給\n    ',
  },
  {
    question: '補強',
    answer: 'hokyo',
    explantion: '\n      汉字: 補強\n      读音: ほきょう\n      意思: compensation\n      来源:  reinforcement\n      同义词: 補強\n    ',
  },
  {
    question: '補充',
    answer: 'hoju',
    explantion: '\n      汉字: 補充\n      读音: ほじゅう\n      意思: supplementation\n      来源:  supplement\n      同义词: 補充\n    ',
  },
  {
    question: '補助',
    answer: 'hojo',
    explantion: '\n      汉字: 補助\n      读音: ほじょ\n      意思: assistance\n      来源:  support\n      同义词: 補助\n    ',
  },
  {
    question: '補償',
    answer: 'hosho',
    explantion: '\n      汉字: 補償\n      读音: ほしょう\n      意思: compensation\n      来源:  reparation\n      同义词: 補償\n    ',
  },
  {
    question: '補足',
    answer: 'hosoku',
    explantion: '\n      汉字: 補足\n      读音: ほそく\n      意思: supplement\n      来源:  complement\n      同义词: 補足\n    ',
  },
  {
    question: '穂',
    answer: 'ho',
    explantion: '\n      汉字: 穂\n      读音: ほ\n      意思: ear (of plant)\n      来源:  head (of plant)\n      同义词: 穂, 穗\n    ',
  },
  {
    question: '募る',
    answer: 'tsunoru',
    explantion: '\n      汉字: 募る\n      读音: つのる\n      意思: to invite\n      来源:  to solicit help participation etc\n      同义词: 募る\n    ',
  },
  {
    question: '募金',
    answer: 'bokin',
    explantion: '\n      汉字: 募金\n      读音: ぼきん\n      意思: fund-raising\n      来源:  collection of funds\n      同义词: 募金\n    ',
  },
  {
    question: '慕う',
    answer: 'shitau',
    explantion: '\n      汉字: 慕う\n      读音: したう\n      意思: to yearn for\n      来源:  to miss\n      同义词: 慕う\n    ',
  },
  {
    question: '母校',
    answer: 'boko',
    explantion: '\n      汉字: 母校\n      读音: ぼこう\n      意思: alma mater\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '呆れる',
    answer: 'akireru',
    explantion: '\n      汉字: 呆れる\n      读音: あきれる\n      意思: to be amazed\n      来源:  to be shocked\n      同义词: 呆れる\n    ',
  },
  {
    question: '呆気ない',
    answer: 'akkenai',
    explantion: '\n      汉字: 呆気ない\n      读音: あっけない\n      意思: not enough\n      来源:  too quick (short long etc.)\n      同义词: 呆気ない, \n    ',
  },
  {
    question: '呆然',
    answer: 'bozen',
    explantion: '\n      汉字: 呆然\n      读音: ぼうぜん\n      意思: dumbfounded\n      来源:  overcome with surprise\n      同义词: 呆然, 茫然, ぼう然, 惘然, 惘然, \n    ',
  },
  {
    question: '報じる',
    answer: 'hojiru',
    explantion: '\n      汉字: 報じる\n      读音: ほうじる\n      意思: to inform\n      来源:  to report\n      同义词: 報じる\n    ',
  },
  {
    question: '報ずる',
    answer: 'hozuru',
    explantion: '\n      汉字: 報ずる\n      读音: ほうずる\n      意思: to inform\n      来源:  to report\n      同义词: 報ずる\n    ',
  },
  {
    question: '報酬',
    answer: 'hoshu',
    explantion: '\n      汉字: 報酬\n      读音: ほうしゅう\n      意思: remuneration\n      来源:  recompense\n      同义词: 報酬\n    ',
  },
  {
    question: '報道',
    answer: 'hodo',
    explantion: '\n      汉字: 報道\n      读音: ほうどう\n      意思: information\n      来源:  report\n      同义词: 報道\n    ',
  },
  {
    question: '奉仕',
    answer: 'hoshi',
    explantion: '\n      汉字: 奉仕\n      读音: ほうし\n      意思: attendance\n      来源:  service\n      同义词: 奉仕\n    ',
  },
  {
    question: '峰',
    answer: 'mine',
    explantion: '\n      汉字: 峰\n      读音: みね\n      意思: peak\n      来源:  ridge\n      同义词: 峰, 嶺, 峯\n    ',
  },
  {
    question: '崩壊',
    answer: 'hokai',
    explantion: '\n      汉字: 崩壊\n      读音: ほうかい\n      意思: collapse\n      来源:  decay (physics)\n      同义词: 崩壊, 崩潰\n    ',
  },
  {
    question: '捧げる',
    answer: 'sasageru',
    explantion: '\n      汉字: 捧げる\n      读音: ささげる\n      意思: to lift up\n      来源:  to give\n      同义词: 捧げる, 献げる\n    ',
  },
  {
    question: '放り込む',
    answer: 'horikomu',
    explantion: '\n      汉字: 放り込む\n      读音: ほうりこむ\n      意思: to throw into\n      来源: waller\n      同义词: ほうり込む\n    ',
  },
  {
    question: '放り出す',
    answer: 'horidasu',
    explantion: '\n      汉字: 放り出す\n      读音: ほうりだす\n      意思: to throw out\n      来源:  to fire\n      同义词: 放り出す, ほうり出す\n    ',
  },
  {
    question: '放棄',
    answer: 'hoki',
    explantion: '\n      汉字: 放棄\n      读音: ほうき\n      意思: abandonment\n      来源:  renunciation\n      同义词: 放棄, 抛棄\n    ',
  },
  {
    question: '放射',
    answer: 'hosha',
    explantion: '\n      汉字: 放射\n      读音: ほうしゃ\n      意思: radiation\n      来源:  emission\n      同义词: 放射\n    ',
  },
  {
    question: '放射能',
    answer: 'hoshano',
    explantion: '\n      汉字: 放射能\n      读音: ほうしゃのう\n      意思: radioactivity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '放出',
    answer: 'hoshutsu',
    explantion: '\n      汉字: 放出\n      读音: ほうしゅつ\n      意思: release\n      来源:  emit\n      同义词: 放出\n    ',
  },
  {
    question: '放置',
    answer: 'houchi',
    explantion: '\n      汉字: 放置\n      读音: ほうち\n      意思: leave as is\n      来源:  leave to chance\n      同义词: 放置\n    ',
  },
  {
    question: '方策',
    answer: 'hosaku',
    explantion: '\n      汉字: 方策\n      读音: ほうさく\n      意思: plan\n      来源:  policy\n      同义词: 方策\n    ',
  },
  {
    question: '方式',
    answer: 'hoshiki',
    explantion: '\n      汉字: 方式\n      读音: ほうしき\n      意思: form\n      来源:  method\n      同义词: 方式\n    ',
  },
  {
    question: '法案',
    answer: 'hoan',
    explantion: '\n      汉字: 法案\n      读音: ほうあん\n      意思: bill (law)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '法学',
    answer: 'hogaku',
    explantion: '\n      汉字: 法学\n      读音: ほうがく\n      意思: law\n      来源:  jurisprudence\n      同义词: 法学\n    ',
  },
  {
    question: '法廷',
    answer: 'hotei',
    explantion: '\n      汉字: 法廷\n      读音: ほうてい\n      意思: courtroom\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '蜂蜜',
    answer: 'hachimitsu',
    explantion: '\n      汉字: 蜂蜜\n      读音: はちみつ\n      意思: honey\n      来源: waller\n      同义词: , , 蜂蜜, はち蜜, \n    ',
  },
  {
    question: '褒美',
    answer: 'hobi',
    explantion: '\n      汉字: 褒美\n      读音: ほうび\n      意思: reward\n      来源:  prize\n      同义词: 褒美\n    ',
  },
  {
    question: '訪れる',
    answer: 'otozureru',
    explantion: '\n      汉字: 訪れる\n      读音: おとずれる\n      意思: to visit\n      来源: waller\n      同义词: 訪れる\n    ',
  },
  {
    question: '豊作',
    answer: 'hosaku',
    explantion: '\n      汉字: 豊作\n      读音: ほうさく\n      意思: abundant harvest\n      来源:  bumper crop\n      同义词: 豊作\n    ',
  },
  {
    question: '飽和',
    answer: 'howa',
    explantion: '\n      汉字: 飽和\n      读音: ほうわ\n      意思: saturation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '妨害',
    answer: 'bougai',
    explantion: '\n      汉字: 妨害\n      读音: ぼうがい\n      意思: disturbance\n      来源:  obstruction\n      同义词: 妨害, 妨碍, 妨礙\n    ',
  },
  {
    question: '暴動',
    answer: 'boudo',
    explantion: '\n      汉字: 暴動\n      读音: ぼうどう\n      意思: insurrection\n      来源:  rebellion\n      同义词: 暴動\n    ',
  },
  {
    question: '暴風',
    answer: 'boufu',
    explantion: '\n      汉字: 暴風\n      读音: ぼうふう\n      意思: storm\n      来源:  windstorm\n      同义词: 暴風, 暴風\n    ',
  },
  {
    question: '暴力',
    answer: 'bouriyoku',
    explantion: '\n      汉字: 暴力\n      读音: ぼうりょく\n      意思: violence\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '望ましい',
    answer: 'nozomashii',
    explantion: '\n      汉字: 望ましい\n      读音: のぞましい\n      意思: desirable\n      来源:  hoped for\n      同义词: 望ましい\n    ',
  },
  {
    question: '冒頭',
    answer: 'bouto',
    explantion: '\n      汉字: 冒頭\n      读音: ぼうとう\n      意思: beginning\n      来源:  start\n      同义词: 冒頭\n    ',
  },
  {
    question: '紡績',
    answer: 'bouseki',
    explantion: '\n      汉字: 紡績\n      读音: ぼうせき\n      意思: spinning\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '膨脹',
    answer: 'bocho',
    explantion: '\n      汉字: 膨脹\n      读音: ぼうちょう\n      意思: expansion\n      来源:  swelling\n      同义词: 膨脹, 膨張, ぼう張\n    ',
  },
  {
    question: '防衛',
    answer: 'bouei',
    explantion: '\n      汉字: 防衛\n      读音: ぼうえい\n      意思: defense\n      来源:  protection\n      同义词: 防衛\n    ',
  },
  {
    question: '防火',
    answer: 'bouka',
    explantion: '\n      汉字: 防火\n      读音: ぼうか\n      意思: fire prevention\n      来源:  fire fighting\n      同义词: 防火\n    ',
  },
  {
    question: '頬っぺた',
    answer: 'hoppeta',
    explantion: '\n      汉字: 頬っぺた\n      读音: ほっぺた\n      意思: cheek\n      来源: waller\n      同义词: , 頰っぺた, 頬っ辺, 頰っ辺\n    ',
  },
  {
    question: '僕',
    answer: 'shimobe',
    explantion: '\n      汉字: 僕\n      读音: しもべ\n      意思: manservant\n      来源:  servant (of God)\n      同义词: 僕, , 下部, 隷\n    ',
  },
  {
    question: '牧師',
    answer: 'bokushi',
    explantion: '\n      汉字: 牧師\n      读音: ぼくし\n      意思: pastor\n      来源:  minister\n      同义词: 牧師\n    ',
  },
  {
    question: '没収',
    answer: 'bosshu',
    explantion: '\n      汉字: 没収\n      读音: ぼっしゅう\n      意思: forfeited\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '没落',
    answer: 'botsuraku',
    explantion: '\n      汉字: 没落\n      读音: ぼつらく\n      意思: ruin\n      来源:  fall\n      同义词: 没落, 沒落\n    ',
  },
  {
    question: '殆ど',
    answer: 'hotondo',
    explantion: '\n      汉字: 殆ど\n      读音: ほとんど\n      意思: mostly\n      来源:  almost\n      同义词: 殆ど\n    ',
  },
  {
    question: '本音',
    answer: 'honne',
    explantion: '\n      汉字: 本音\n      读音: ほんね\n      意思: real intention\n      来源:  motive\n      同义词: 本音\n    ',
  },
  {
    question: '本格',
    answer: 'honkaku',
    explantion: '\n      汉字: 本格\n      读音: ほんかく\n      意思: propriety\n      来源:  fundamental rules\n      同义词: 本格\n    ',
  },
  {
    question: '本館',
    answer: 'honkan',
    explantion: '\n      汉字: 本館\n      读音: ほんかん\n      意思: main building\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '本気',
    answer: 'honki',
    explantion: '\n      汉字: 本気\n      读音: ほんき\n      意思: seriousness\n      来源:  truth\n      同义词: 本気\n    ',
  },
  {
    question: '本質',
    answer: 'honshitsu',
    explantion: '\n      汉字: 本質\n      读音: ほんしつ\n      意思: essence\n      来源:  true nature\n      同义词: 本質\n    ',
  },
  {
    question: '本場',
    answer: 'honba',
    explantion: '\n      汉字: 本場\n      读音: ほんば\n      意思: home\n      来源:  habitat\n      同义词: 本場\n    ',
  },
  {
    question: '本体',
    answer: 'hontai',
    explantion: '\n      汉字: 本体\n      读音: ほんたい\n      意思: substance\n      来源:  real form\n      同义词: 本体, 本体\n    ',
  },
  {
    question: '本能',
    answer: 'honnou',
    explantion: '\n      汉字: 本能\n      读音: ほんのう\n      意思: instinct\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '本名',
    answer: 'honmyo',
    explantion: '\n      汉字: 本名\n      读音: ほんみょう\n      意思: real name\n      来源: waller\n      同义词: 本名\n    ',
  },
  {
    question: '凡そ',
    answer: 'oyoso',
    explantion: '\n      汉字: 凡そ\n      读音: およそ\n      意思: about\n      来源:  roughly\n      同义词: 凡そ\n    ',
  },
  {
    question: '麻',
    answer: 'asa',
    explantion: '\n      汉字: 麻\n      读音: あさ\n      意思: flax\n      来源:  linen\n      同义词: 麻, 麻, 苧\n    ',
  },
  {
    question: '埋め込む',
    answer: 'umekomu',
    explantion: '\n      汉字: 埋め込む\n      读音: うめこむ\n      意思: to bury\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '埋蔵',
    answer: 'maizou',
    explantion: '\n      汉字: 埋蔵\n      读音: まいぞう\n      意思: buried property\n      来源:  treasure trove\n      同义词: 埋蔵\n    ',
  },
  {
    question: '枚',
    answer: 'mai',
    explantion: '\n      汉字: 枚\n      读音: まい\n      意思: counter for flat objects (e.g. sheets of paper)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '毎',
    answer: 'goto',
    explantion: '\n      汉字: 毎\n      读音: ごと\n      意思: each respectively\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '膜',
    answer: 'maku',
    explantion: '\n      汉字: 膜\n      读音: まく\n      意思: membrane\n      来源:  film\n      同义词: 膜\n    ',
  },
  {
    question: '末',
    answer: 'ura',
    explantion: '\n      汉字: 末\n      读音: うら\n      意思: top end\n      来源:  tip\n      同义词: 末\n    ',
  },
  {
    question: '万',
    answer: 'ban',
    explantion: '\n      汉字: 万\n      读音: ばん\n      意思: many\n      来源:  all\n      同义词: 万\n    ',
  },
  {
    question: '満たす',
    answer: 'mitasu',
    explantion: '\n      汉字: 満たす\n      读音: みたす\n      意思: to satisfy\n      来源:  to ingratiate\n      同义词: 満たす, 充たす\n    ',
  },
  {
    question: '満月',
    answer: 'mangetsu',
    explantion: '\n      汉字: 満月\n      读音: まんげつ\n      意思: full moon\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '満場',
    answer: 'manjiyou',
    explantion: '\n      汉字: 満場\n      读音: まんじょう\n      意思: unanimous\n      来源:  whole audience\n      同义词: 満場\n    ',
  },
  {
    question: '味わい',
    answer: 'ajiwai',
    explantion: '\n      汉字: 味わい\n      读音: あじわい\n      意思: flavour\n      来源:  meaning\n      同义词: 味わい\n    ',
  },
  {
    question: '味覚',
    answer: 'mikaku',
    explantion: '\n      汉字: 味覚\n      读音: みかく\n      意思: taste\n      来源:  palate\n      同义词: 味覚\n    ',
  },
  {
    question: '未',
    answer: 'hitsuji',
    explantion: '\n      汉字: 未\n      读音: ひつじ\n      意思: eighth sign of Chinese zodiac (The Ram 1pm-3pm south-southwest June)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '未だ',
    answer: 'imada',
    explantion: '\n      汉字: 未だ\n      读音: いまだ\n      意思: as yet\n      来源:  hitherto\n      同义词: 未だ\n    ',
  },
  {
    question: '未開',
    answer: 'mikai',
    explantion: '\n      汉字: 未開\n      读音: みかい\n      意思: savage land\n      来源:  backward region\n      同义词: 未開\n    ',
  },
  {
    question: '未婚',
    answer: 'mikon',
    explantion: '\n      汉字: 未婚\n      读音: みこん\n      意思: unmarried\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '未熟',
    answer: 'mijiyuku',
    explantion: '\n      汉字: 未熟\n      读音: みじゅく\n      意思: inexperience\n      来源:  unripeness\n      同义词: 未熟\n    ',
  },
  {
    question: '未知',
    answer: 'michi',
    explantion: '\n      汉字: 未知\n      读音: みち\n      意思: not yet known\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '未定',
    answer: 'mitei',
    explantion: '\n      汉字: 未定\n      读音: みてい\n      意思: not yet fixed\n      来源:  undecided\n      同义词: 未定\n    ',
  },
  {
    question: '未練',
    answer: 'miren',
    explantion: '\n      汉字: 未練\n      读音: みれん\n      意思: lingering affection\n      来源:  attachment\n      同义词: 未練\n    ',
  },
  {
    question: '密集',
    answer: 'misshu',
    explantion: '\n      汉字: 密集\n      读音: みっしゅう\n      意思: crowd\n      来源:  close formation\n      同义词: 密集\n    ',
  },
  {
    question: '密接',
    answer: 'missetsu',
    explantion: '\n      汉字: 密接\n      读音: みっせつ\n      意思: related\n      来源:  connected\n      同义词: 密接, 蜜接\n    ',
  },
  {
    question: '密度',
    answer: 'mitsudo',
    explantion: '\n      汉字: 密度\n      读音: みつど\n      意思: density\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '脈',
    answer: 'myaku',
    explantion: '\n      汉字: 脈\n      读音: みゃく\n      意思: pulse\n      来源: waller\n      同义词: 脉\n    ',
  },
  {
    question: '民主',
    answer: 'minshiyu',
    explantion: '\n      汉字: 民主\n      读音: みんしゅ\n      意思: democratic\n      来源:  the head of the nation\n      同义词: 民主\n    ',
  },
  {
    question: '民宿',
    answer: 'minshuku',
    explantion: '\n      汉字: 民宿\n      读音: みんしゅく\n      意思: private home providing lodging for travelers\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '眠たい',
    answer: 'nemutai',
    explantion: '\n      汉字: 眠たい\n      读音: ねむたい\n      意思: sleepy\n      来源: waller\n      同义词: 眠たい, 睡たい, 睡たい\n    ',
  },
  {
    question: '無闇に',
    answer: 'muyamini',
    explantion: '\n      汉字: 無闇に\n      读音: むやみに\n      意思: unreasonably\n      来源:  absurdly\n      同义词: 無闇に, , 無暗に\n    ',
  },
  {
    question: '無意味',
    answer: 'muimi',
    explantion: '\n      汉字: 無意味\n      读音: むいみ\n      意思: nonsense\n      来源:  no meaning\n      同义词: 無意味\n    ',
  },
  {
    question: '無言',
    answer: 'mugon',
    explantion: '\n      汉字: 無言\n      读音: むごん\n      意思: silence\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '無効',
    answer: 'muko',
    explantion: '\n      汉字: 無効\n      读音: むこう\n      意思: invalid\n      来源:  no effect\n      同义词: 無効\n    ',
  },
  {
    question: '無口',
    answer: 'mukuchi',
    explantion: '\n      汉字: 無口\n      读音: むくち\n      意思: reticence\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '無邪気',
    answer: 'mujaki',
    explantion: '\n      汉字: 無邪気\n      读音: むじゃき\n      意思: innocence\n      来源:  simple-mindedness\n      同义词: 無邪気\n    ',
  },
  {
    question: '無線',
    answer: 'musen',
    explantion: '\n      汉字: 無線\n      读音: むせん\n      意思: wireless\n      来源:  radio\n      同义词: 無線\n    ',
  },
  {
    question: '無駄遣い',
    answer: 'mudazukai',
    explantion: '\n      汉字: 無駄遣い\n      读音: むだづかい\n      意思: waste money on\n      来源:  squander money on\n      同义词: 無駄遣い, 無駄使い, 無駄づかい, むだ遣い, むだ使い, 徒遣い\n    ',
  },
  {
    question: '無断',
    answer: 'mudan',
    explantion: '\n      汉字: 無断\n      读音: むだん\n      意思: without permission\n      来源:  without notice\n      同义词: 無断\n    ',
  },
  {
    question: '無知',
    answer: 'muchi',
    explantion: '\n      汉字: 無知\n      读音: むち\n      意思: ignorance\n      来源: waller\n      同义词: 無智\n    ',
  },
  {
    question: '無茶',
    answer: 'mucha',
    explantion: '\n      汉字: 無茶\n      读音: むちゃ\n      意思: absurd\n      来源:  unreasonable\n      同义词: 無茶, 無茶\n    ',
  },
  {
    question: '無茶苦茶',
    answer: 'muchakucha',
    explantion: '\n      汉字: 無茶苦茶\n      读音: むちゃくちゃ\n      意思: confused\n      来源:  jumbled\n      同义词: 無茶苦茶, , \n    ',
  },
  {
    question: '無難',
    answer: 'bunan',
    explantion: '\n      汉字: 無難\n      读音: ぶなん\n      意思: safety\n      来源:  security\n      同义词: 無難\n    ',
  },
  {
    question: '無念',
    answer: 'munen',
    explantion: '\n      汉字: 無念\n      读音: むねん\n      意思: chagrin\n      来源:  regret\n      同义词: 無念\n    ',
  },
  {
    question: '無能',
    answer: 'munou',
    explantion: '\n      汉字: 無能\n      读音: むのう\n      意思: inefficiency\n      来源:  incompetence\n      同义词: 無能\n    ',
  },
  {
    question: '無用',
    answer: 'muyou',
    explantion: '\n      汉字: 無用\n      读音: むよう\n      意思: useless\n      来源:  futility\n      同义词: 無用\n    ',
  },
  {
    question: '無礼',
    answer: 'burei',
    explantion: '\n      汉字: 無礼\n      读音: ぶれい\n      意思: impolite\n      来源:  rude\n      同义词: 無礼\n    ',
  },
  {
    question: '無論',
    answer: 'muron',
    explantion: '\n      汉字: 無論\n      读音: むろん\n      意思: of course\n      来源:  naturally\n      同义词: 無論\n    ',
  },
  {
    question: '婿',
    answer: 'muko',
    explantion: '\n      汉字: 婿\n      读音: むこ\n      意思: son-in-law\n      来源: waller\n      同义词: 聟, 壻\n    ',
  },
  {
    question: '名高い',
    answer: 'nadakai',
    explantion: '\n      汉字: 名高い\n      读音: なだかい\n      意思: famous\n      来源:  celebrated\n      同义词: 名高い\n    ',
  },
  {
    question: '名札',
    answer: 'nafuda',
    explantion: '\n      汉字: 名札\n      读音: なふだ\n      意思: name plate\n      来源:  name tag\n      同义词: 名札\n    ',
  },
  {
    question: '名産',
    answer: 'meisan',
    explantion: '\n      汉字: 名産\n      读音: めいさん\n      意思: noted product\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '名残',
    answer: 'nagori',
    explantion: '\n      汉字: 名残\n      读音: なごり\n      意思: remains\n      来源:  traces\n      同义词: 名残, 名残り\n    ',
  },
  {
    question: '名称',
    answer: 'meisho',
    explantion: '\n      汉字: 名称\n      读音: めいしょう\n      意思: name\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '名付ける',
    answer: 'nazukeru',
    explantion: '\n      汉字: 名付ける\n      读音: なづける\n      意思: to name (someone)\n      来源: waller\n      同义词: 名づける\n    ',
  },
  {
    question: '名簿',
    answer: 'meibo',
    explantion: '\n      汉字: 名簿\n      读音: めいぼ\n      意思: register of names\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '名誉',
    answer: 'meiyo',
    explantion: '\n      汉字: 名誉\n      读音: めいよ\n      意思: honor\n      来源:  credit\n      同义词: 名誉\n    ',
  },
  {
    question: '命中',
    answer: 'meichiyuu',
    explantion: '\n      汉字: 命中\n      读音: めいちゅう\n      意思: a hit\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '明かす',
    answer: 'akasu',
    explantion: '\n      汉字: 明かす\n      读音: あかす\n      意思: to pass\n      来源:  spend\n      同义词: 明かす\n    ',
  },
  {
    question: '明くる',
    answer: 'akuru',
    explantion: '\n      汉字: 明くる\n      读音: あくる\n      意思: next\n      来源:  following\n      同义词: 明くる, , 翌る\n    ',
  },
  {
    question: '明るい',
    answer: 'akarui',
    explantion: '\n      汉字: 明るい\n      读音: あかるい\n      意思: bright\n      来源:  cheerful\n      同义词: 明るい\n    ',
  },
  {
    question: '明瞭',
    answer: 'meiryo',
    explantion: '\n      汉字: 明瞭\n      读音: めいりょう\n      意思: clarity\n      来源: waller\n      同义词: 明りょう, 明亮, 明了\n    ',
  },
  {
    question: '明朗',
    answer: 'meiro',
    explantion: '\n      汉字: 明朗\n      读音: めいろう\n      意思: bright\n      来源:  clear\n      同义词: 明朗\n    ',
  },
  {
    question: '滅茶苦茶',
    answer: 'mechakucha',
    explantion: '\n      汉字: 滅茶苦茶\n      读音: めちゃくちゃ\n      意思: absurd\n      来源:  unreasonable\n      同义词: 滅茶苦茶\n    ',
  },
  {
    question: '滅亡',
    answer: 'metsubou',
    explantion: '\n      汉字: 滅亡\n      读音: めつぼう\n      意思: downfall\n      来源:  ruin\n      同义词: 滅亡\n    ',
  },
  {
    question: '免除',
    answer: 'menjiyo',
    explantion: '\n      汉字: 免除\n      读音: めんじょ\n      意思: exemption\n      来源:  exoneration\n      同义词: 免除\n    ',
  },
  {
    question: '面する',
    answer: 'mensuru',
    explantion: '\n      汉字: 面する\n      读音: めんする\n      意思: to face on\n      来源:  to look out on to\n      同义词: 面する\n    ',
  },
  {
    question: '面会',
    answer: 'menkai',
    explantion: '\n      汉字: 面会\n      读音: めんかい\n      意思: interview\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '面白い',
    answer: 'omoshiroi',
    explantion: '\n      汉字: 面白い\n      读音: おもしろい\n      意思: interesting\n      来源:  amusing\n      同义词: 面白い\n    ',
  },
  {
    question: '面目',
    answer: 'memboku',
    explantion: '\n      汉字: 面目\n      读音: めんぼく\n      意思: face\n      来源:  honour\n      同义词: 面目, 面目, 面目\n    ',
  },
  {
    question: '面皰',
    answer: 'nikibi',
    explantion: '\n      汉字: 面皰\n      读音: にきび\n      意思: pimple\n      来源:  acne\n      同义词: 面皰, , , 面皰, \n    ',
  },
  {
    question: '模型',
    answer: 'mokei',
    explantion: '\n      汉字: 模型\n      读音: もけい\n      意思: model\n      来源:  dummy\n      同义词: 模型\n    ',
  },
  {
    question: '模索',
    answer: 'mosaku',
    explantion: '\n      汉字: 模索\n      读音: もさく\n      意思: groping (for)\n      来源: waller\n      同义词: 摸索\n    ',
  },
  {
    question: '模範',
    answer: 'mohan',
    explantion: '\n      汉字: 模範\n      读音: もはん\n      意思: exemplar\n      来源:  exemplification\n      同义词: 模範\n    ',
  },
  {
    question: '模倣',
    answer: 'moho',
    explantion: '\n      汉字: 模倣\n      读音: もほう\n      意思: imitation\n      来源:  copying\n      同义词: 模倣, 摸倣\n    ',
  },
  {
    question: '猛烈',
    answer: 'mouretsu',
    explantion: '\n      汉字: 猛烈\n      读音: もうれつ\n      意思: violent\n      来源:  vehement\n      同义词: 猛烈\n    ',
  },
  {
    question: '盲点',
    answer: 'moten',
    explantion: '\n      汉字: 盲点\n      读音: もうてん\n      意思: blind spot\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '網',
    answer: 'ami',
    explantion: '\n      汉字: 網\n      读音: あみ\n      意思: net\n      来源:  network\n      同义词: 網\n    ',
  },
  {
    question: '木綿',
    answer: 'kiwata',
    explantion: '\n      汉字: 木綿\n      读音: きわた\n      意思: cotton\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '目覚める',
    answer: 'mezameru',
    explantion: '\n      汉字: 目覚める\n      读音: めざめる\n      意思: to wake up\n      来源: waller\n      同义词: 目ざめる, 目醒める\n    ',
  },
  {
    question: '目付き',
    answer: 'metsuki',
    explantion: '\n      汉字: 目付き\n      读音: めつき\n      意思: look\n      来源:  expression of the eyes\n      同义词: 目付き, 目つき, 眼つき, 眼付き, 眼付\n    ',
  },
  {
    question: '目方',
    answer: 'mekata',
    explantion: '\n      汉字: 目方\n      读音: めかた\n      意思: weight\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '目録',
    answer: 'mokuroku',
    explantion: '\n      汉字: 目録\n      读音: もくろく\n      意思: catalogue\n      来源:  catalog\n      同义词: 目録\n    ',
  },
  {
    question: '目論見',
    answer: 'mokuromi',
    explantion: '\n      汉字: 目論見\n      读音: もくろみ\n      意思: a plan\n      来源:  a scheme\n      同义词: 目論見, 目論み\n    ',
  },
  {
    question: '問い合わせる',
    answer: 'toiawaseru',
    explantion: '\n      汉字: 問い合わせる\n      读音: といあわせる\n      意思: to enquire\n      来源:  to seek information\n      同义词: 問い合わせる, 問合わせる, 問合せる, 問い合せる\n    ',
  },
  {
    question: '問う',
    answer: 'tou',
    explantion: '\n      汉字: 問う\n      读音: とう\n      意思: to ask\n      来源:  to question\n      同义词: 問う, 訪う\n    ',
  },
  {
    question: '夜具',
    answer: 'yagu',
    explantion: '\n      汉字: 夜具\n      读音: やぐ\n      意思: bedding\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '野外',
    answer: 'yagai',
    explantion: '\n      汉字: 野外\n      读音: やがい\n      意思: fields\n      来源:  outskirts\n      同义词: 野外\n    ',
  },
  {
    question: '野心',
    answer: 'yashin',
    explantion: '\n      汉字: 野心\n      读音: やしん\n      意思: ambition\n      来源:  aspiration\n      同义词: 野心\n    ',
  },
  {
    question: '野生',
    answer: 'yasei',
    explantion: '\n      汉字: 野生\n      读音: やせい\n      意思: wild\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '野党',
    answer: 'yatou',
    explantion: '\n      汉字: 野党\n      读音: やとう\n      意思: opposition party\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '矢',
    answer: 'ya',
    explantion: '\n      汉字: 矢\n      读音: や\n      意思: arrow\n      来源: waller\n      同义词: 矢, 箭, 箭\n    ',
  },
  {
    question: '矢鱈',
    answer: 'yatara',
    explantion: '\n      汉字: 矢鱈\n      读音: やたら\n      意思: randomly\n      来源:  recklessly\n      同义词: 矢鱈\n    ',
  },
  {
    question: '役',
    answer: 'eki',
    explantion: '\n      汉字: 役\n      读音: えき\n      意思: war\n      来源:  campaign\n      同义词: 役, 役\n    ',
  },
  {
    question: '役場',
    answer: 'yakuba',
    explantion: '\n      汉字: 役場\n      读音: やくば\n      意思: town hall\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '役職',
    answer: 'yakushoku',
    explantion: '\n      汉字: 役職\n      读音: やくしょく\n      意思: post\n      来源:  managerial position\n      同义词: 役職\n    ',
  },
  {
    question: '役立つ',
    answer: 'yakudatsu',
    explantion: '\n      汉字: 役立つ\n      读音: やくだつ\n      意思: to be useful\n      来源:  to be helpful\n      同义词: 役立つ, 役だつ\n    ',
  },
  {
    question: '油絵',
    answer: 'aburae',
    explantion: '\n      汉字: 油絵\n      读音: あぶらえ\n      意思: oil painting\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '優',
    answer: 'yasa',
    explantion: '\n      汉字: 優\n      读音: やさ\n      意思: gentle\n      来源:  affectionate\n      同义词: 優\n    ',
  },
  {
    question: '優位',
    answer: 'yuui',
    explantion: '\n      汉字: 優位\n      读音: ゆうい\n      意思: predominance\n      来源:  ascendancy\n      同义词: 優位\n    ',
  },
  {
    question: '優越',
    answer: 'yuuetsu',
    explantion: '\n      汉字: 優越\n      读音: ゆうえつ\n      意思: supremacy\n      来源:  predominance\n      同义词: 優越\n    ',
  },
  {
    question: '優勢',
    answer: 'yusei',
    explantion: '\n      汉字: 優勢\n      读音: ゆうせい\n      意思: superiority\n      来源:  superior power\n      同义词: 優勢\n    ',
  },
  {
    question: '優先',
    answer: 'yusen',
    explantion: '\n      汉字: 優先\n      读音: ゆうせん\n      意思: preference\n      来源:  priority\n      同义词: 優先\n    ',
  },
  {
    question: '優美',
    answer: 'yuubi',
    explantion: '\n      汉字: 優美\n      读音: ゆうび\n      意思: grace\n      来源:  refinement\n      同义词: 優美\n    ',
  },
  {
    question: '勇敢',
    answer: 'yuukan',
    explantion: '\n      汉字: 勇敢\n      读音: ゆうかん\n      意思: bravery\n      来源:  heroism\n      同义词: 勇敢\n    ',
  },
  {
    question: '幽霊',
    answer: 'yuurei',
    explantion: '\n      汉字: 幽霊\n      读音: ゆうれい\n      意思: ghost\n      来源:  specter\n      同义词: 幽霊\n    ',
  },
  {
    question: '有する',
    answer: 'yusuru',
    explantion: '\n      汉字: 有する\n      读音: ゆうする\n      意思: to own\n      来源:  to be endowed with\n      同义词: 有する\n    ',
  },
  {
    question: '有りのまま',
    answer: 'arinomama',
    explantion: '\n      汉字: 有りのまま\n      读音: ありのまま\n      意思: the truth\n      来源:  fact\n      同义词: 有りのまま, , 有りの儘\n    ',
  },
  {
    question: '有様',
    answer: 'arisama',
    explantion: '\n      汉字: 有様\n      读音: ありさま\n      意思: state\n      来源:  condition\n      同义词: 有様, 有様, 有り様, 有り様, あり様, あり様, 有りさま\n    ',
  },
  {
    question: '有益',
    answer: 'yueki',
    explantion: '\n      汉字: 有益\n      读音: ゆうえき\n      意思: beneficial\n      来源:  profitable\n      同义词: 有益\n    ',
  },
  {
    question: '有機',
    answer: 'yuuki',
    explantion: '\n      汉字: 有機\n      读音: ゆうき\n      意思: organic\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '有望',
    answer: 'yuubou',
    explantion: '\n      汉字: 有望\n      读音: ゆうぼう\n      意思: good prospects\n      来源:  full of hope\n      同义词: 有望\n    ',
  },
  {
    question: '有力',
    answer: 'yuuriyoku',
    explantion: '\n      汉字: 有力\n      读音: ゆうりょく\n      意思: 1. influence\n      来源:  prominence\n      同义词: 有力\n    ',
  },
  {
    question: '誘導',
    answer: 'yuudo',
    explantion: '\n      汉字: 誘導\n      读音: ゆうどう\n      意思: guidance\n      来源:  leading\n      同义词: 誘導\n    ',
  },
  {
    question: '誘惑',
    answer: 'yuuwaku',
    explantion: '\n      汉字: 誘惑\n      读音: ゆうわく\n      意思: temptation\n      来源:  allurement\n      同义词: 誘惑\n    ',
  },
  {
    question: '遊牧',
    answer: 'yuuboku',
    explantion: '\n      汉字: 遊牧\n      读音: ゆうぼく\n      意思: nomadism\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '融資',
    answer: 'yuushi',
    explantion: '\n      汉字: 融資\n      读音: ゆうし\n      意思: financing\n      来源:  loan\n      同义词: 融資\n    ',
  },
  {
    question: '夕焼け',
    answer: 'yuuyake',
    explantion: '\n      汉字: 夕焼け\n      读音: ゆうやけ\n      意思: sunset\n      来源: waller\n      同义词: 夕焼\n    ',
  },
  {
    question: '夕暮れ',
    answer: 'yugure',
    explantion: '\n      汉字: 夕暮れ\n      读音: ゆうぐれ\n      意思: evening\n      来源:  (evening) twilight\n      同义词: 夕暮れ, 夕暮, 夕ぐれ\n    ',
  },
  {
    question: '兼ねて',
    answer: 'kanete',
    explantion: '\n      汉字: 兼ねて\n      读音: かねて\n      意思: simultaneously\n      来源: waller\n      同义词: , 予て\n    ',
  },
  {
    question: '予め',
    answer: 'arakajime',
    explantion: '\n      汉字: 予め\n      读音: あらかじめ\n      意思: beforehand\n      来源:  in advance\n      同义词: 予め, \n    ',
  },
  {
    question: '予感',
    answer: 'yokan',
    explantion: '\n      汉字: 予感\n      读音: よかん\n      意思: presentiment\n      来源:  premonition\n      同义词: 予感\n    ',
  },
  {
    question: '予想',
    answer: 'yoso',
    explantion: '\n      汉字: 予想\n      读音: よそう\n      意思: expectation\n      来源:  anticipation\n      同义词: 予想\n    ',
  },
  {
    question: '余暇',
    answer: 'yoka',
    explantion: '\n      汉字: 余暇\n      读音: よか\n      意思: leisure\n      来源:  leisure time\n      同义词: 余暇\n    ',
  },
  {
    question: '余興',
    answer: 'yokyo',
    explantion: '\n      汉字: 余興\n      读音: よきょう\n      意思: side show\n      来源:  entertainment\n      同义词: 余興\n    ',
  },
  {
    question: '余所見',
    answer: 'yosomi',
    explantion: '\n      汉字: 余所見\n      读音: よそみ\n      意思: looking away\n      来源:  looking aside\n      同义词: 余所見, よそ見\n    ',
  },
  {
    question: '余地',
    answer: 'yochi',
    explantion: '\n      汉字: 余地\n      读音: よち\n      意思: place\n      来源:  room\n      同义词: 余地, 餘地\n    ',
  },
  {
    question: '与党',
    answer: 'yotou',
    explantion: '\n      汉字: 与党\n      读音: よとう\n      意思: government party\n      来源:  (ruling) party in power\n      同义词: 与党\n    ',
  },
  {
    question: '預金',
    answer: 'yokin',
    explantion: '\n      汉字: 預金\n      读音: よきん\n      意思: deposit\n      来源:  bank account\n      同义词: 預金\n    ',
  },
  {
    question: '容易い',
    answer: 'tayasui',
    explantion: '\n      汉字: 容易い\n      读音: たやすい\n      意思: easy\n      来源:  simple\n      同义词: 容易い, , た易い\n    ',
  },
  {
    question: '揺さぶる',
    answer: 'yusaburu',
    explantion: '\n      汉字: 揺さぶる\n      读音: ゆさぶる\n      意思: to shake\n      来源:  to jolt\n      同义词: 揺さぶる, 揺さ振る\n    ',
  },
  {
    question: '揺らぐ',
    answer: 'yuragu',
    explantion: '\n      汉字: 揺らぐ\n      读音: ゆらぐ\n      意思: to swing\n      来源:  to sway\n      同义词: 揺らぐ\n    ',
  },
  {
    question: '様',
    answer: 'sama',
    explantion: '\n      汉字: 様\n      读音: さま\n      意思: Mr. or Mrs.\n      来源:  manner\n      同义词: 様, 方, 状\n    ',
  },
  {
    question: '様式',
    answer: 'yoshiki',
    explantion: '\n      汉字: 様式\n      读音: ようしき\n      意思: style\n      来源:  form\n      同义词: 様式\n    ',
  },
  {
    question: '様相',
    answer: 'yoso',
    explantion: '\n      汉字: 様相\n      读音: ようそう\n      意思: aspect\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '洋風',
    answer: 'yofu',
    explantion: '\n      汉字: 洋風\n      读音: ようふう\n      意思: western style\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '溶液',
    answer: 'yoeki',
    explantion: '\n      汉字: 溶液\n      读音: ようえき\n      意思: solution (liquid)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '用件',
    answer: 'yoken',
    explantion: '\n      汉字: 用件\n      读音: ようけん\n      意思: business\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '用紙',
    answer: 'yoshi',
    explantion: '\n      汉字: 用紙\n      读音: ようし\n      意思: blank form\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '用品',
    answer: 'yohin',
    explantion: '\n      汉字: 用品\n      读音: ようひん\n      意思: articles\n      来源:  supplies\n      同义词: 用品\n    ',
  },
  {
    question: '用法',
    answer: 'yoho',
    explantion: '\n      汉字: 用法\n      读音: ようほう\n      意思: directions\n      来源:  rules of use\n      同义词: 用法\n    ',
  },
  {
    question: '要する',
    answer: 'yosuru',
    explantion: '\n      汉字: 要する\n      读音: ようする\n      意思: to demand\n      来源:  to require\n      同义词: 要する\n    ',
  },
  {
    question: '要因',
    answer: 'yoin',
    explantion: '\n      汉字: 要因\n      读音: よういん\n      意思: primary factor\n      来源:  main cause\n      同义词: 要因\n    ',
  },
  {
    question: '要請',
    answer: 'yosei',
    explantion: '\n      汉字: 要請\n      读音: ようせい\n      意思: claim\n      来源:  demand\n      同义词: 要請\n    ',
  },
  {
    question: '要望',
    answer: 'yobou',
    explantion: '\n      汉字: 要望\n      读音: ようぼう\n      意思: demand for\n      来源:  request\n      同义词: 要望\n    ',
  },
  {
    question: '遥か',
    answer: 'haruka',
    explantion: '\n      汉字: 遥か\n      读音: はるか\n      意思: far\n      来源:  far-away\n      同义词: 遥か, , 遙か\n    ',
  },
  {
    question: '養う',
    answer: 'yashinau',
    explantion: '\n      汉字: 養う\n      读音: やしなう\n      意思: to rear\n      来源:  to maintain\n      同义词: 養う\n    ',
  },
  {
    question: '養成',
    answer: 'yosei',
    explantion: '\n      汉字: 養成\n      读音: ようせい\n      意思: training\n      来源:  development\n      同义词: 養成\n    ',
  },
  {
    question: '抑圧',
    answer: 'yokuatsu',
    explantion: '\n      汉字: 抑圧\n      读音: よくあつ\n      意思: check\n      来源:  restraint\n      同义词: 抑圧\n    ',
  },
  {
    question: '抑制',
    answer: 'yokusei',
    explantion: '\n      汉字: 抑制\n      读音: よくせい\n      意思: suppression\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '欲深い',
    answer: 'yokufukai',
    explantion: '\n      汉字: 欲深い\n      读音: よくふかい\n      意思: greedy\n      来源: waller\n      同义词: 欲深い\n    ',
  },
  {
    question: '欲望',
    answer: 'yokubou',
    explantion: '\n      汉字: 欲望\n      读音: よくぼう\n      意思: desire\n      来源:  appetite\n      同义词: 欲望, 慾望\n    ',
  },
  {
    question: '浴室',
    answer: 'yokushitsu',
    explantion: '\n      汉字: 浴室\n      读音: よくしつ\n      意思: bathroom\n      来源:  bath\n      同义词: 浴室\n    ',
  },
  {
    question: '裸足',
    answer: 'hadashi',
    explantion: '\n      汉字: 裸足\n      读音: はだし\n      意思: barefoot\n      来源: waller\n      同义词: 跣, 跣足, 跣足\n    ',
  },
  {
    question: '絡む',
    answer: 'karamu',
    explantion: '\n      汉字: 絡む\n      读音: からむ\n      意思: to entangle\n      来源:  to entwine\n      同义词: 絡む, 搦む\n    ',
  },
  {
    question: '落ちる',
    answer: 'ochiru',
    explantion: '\n      汉字: 落ちる\n      读音: おちる\n      意思: to fail (e.g. exam)\n      来源:  to fall down\n      同义词: 落ちる\n    ',
  },
  {
    question: '落ち込む',
    answer: 'ochikomu',
    explantion: '\n      汉字: 落ち込む\n      读音: おちこむ\n      意思: to fall into\n      来源:  to feel down (sad)\n      同义词: 落ち込む, 落込む, 落ちこむ\n    ',
  },
  {
    question: '落ち着き',
    answer: 'ochitsuki',
    explantion: '\n      汉字: 落ち着き\n      读音: おちつき\n      意思: calm\n      来源:  composure\n      同义词: 落ち着き, 落着き, 落ち付き, 落付き\n    ',
  },
  {
    question: '落下',
    answer: 'rakka',
    explantion: '\n      汉字: 落下\n      读音: らっか\n      意思: fall\n      来源:  drop\n      同义词: 落下\n    ',
  },
  {
    question: '酪農',
    answer: 'rakuno',
    explantion: '\n      汉字: 酪農\n      读音: らくのう\n      意思: dairy (farm)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '乱す',
    answer: 'midasu',
    explantion: '\n      汉字: 乱す\n      读音: みだす\n      意思: to throw out of order\n      来源:  to disarrange\n      同义词: 乱す, 紊す\n    ',
  },
  {
    question: '乱れる',
    answer: 'midareru',
    explantion: '\n      汉字: 乱れる\n      读音: みだれる\n      意思: to get confused\n      来源:  to be disordered\n      同义词: 乱れる, 紊れる\n    ',
  },
  {
    question: '濫用',
    answer: 'ranyo',
    explantion: '\n      汉字: 濫用\n      读音: らんよう\n      意思: abuse\n      来源:  misuse\n      同义词: 濫用, 乱用, らん用\n    ',
  },
  {
    question: '利子',
    answer: 'rishi',
    explantion: '\n      汉字: 利子\n      读音: りし\n      意思: interest (bank)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '利潤',
    answer: 'rijun',
    explantion: '\n      汉字: 利潤\n      读音: りじゅん\n      意思: profit\n      来源:  returns\n      同义词: 利潤\n    ',
  },
  {
    question: '利息',
    answer: 'risoku',
    explantion: '\n      汉字: 利息\n      读音: りそく\n      意思: interest (bank)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '利点',
    answer: 'riten',
    explantion: '\n      汉字: 利点\n      读音: りてん\n      意思: advantage\n      来源:  point in favor\n      同义词: 利点\n    ',
  },
  {
    question: '履歴',
    answer: 'rireki',
    explantion: '\n      汉字: 履歴\n      读音: りれき\n      意思: personal history\n      来源:  background\n      同义词: 履歴\n    ',
  },
  {
    question: '理性',
    answer: 'risei',
    explantion: '\n      汉字: 理性\n      读音: りせい\n      意思: reason\n      来源:  sense\n      同义词: 理性\n    ',
  },
  {
    question: '理論',
    answer: 'riron',
    explantion: '\n      汉字: 理論\n      读音: りろん\n      意思: theory\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '裏返し',
    answer: 'uragaeshi',
    explantion: '\n      汉字: 裏返し\n      读音: うらがえし\n      意思: inside out\n      来源:  upside down\n      同义词: 裏返し\n    ',
  },
  {
    question: '率いる',
    answer: 'hikiiru',
    explantion: '\n      汉字: 率いる\n      读音: ひきいる\n      意思: to lead\n      来源:  to spearhead (a group)\n      同义词: 率いる\n    ',
  },
  {
    question: '立ち寄る',
    answer: 'tachiyoru',
    explantion: '\n      汉字: 立ち寄る\n      读音: たちよる\n      意思: to stop by\n      来源:  to drop in for a short visit\n      同义词: 立ち寄る, 立寄る, 立ちよる\n    ',
  },
  {
    question: '立体',
    answer: 'ritsutai',
    explantion: '\n      汉字: 立体\n      读音: りったい\n      意思: solid body\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '立方',
    answer: 'tachikata',
    explantion: '\n      汉字: 立方\n      读音: たちかた\n      意思: dancing (geisha)\n      来源: waller\n      同义词: 立ち方\n    ',
  },
  {
    question: '立法',
    answer: 'rippo',
    explantion: '\n      汉字: 立法\n      读音: りっぽう\n      意思: legislation\n      来源:  lawmaking\n      同义词: 立法\n    ',
  },
  {
    question: '略語',
    answer: 'ryakugo',
    explantion: '\n      汉字: 略語\n      读音: りゃくご\n      意思: abbreviation\n      来源:  acronym\n      同义词: 略語\n    ',
  },
  {
    question: '流',
    answer: 'ryu',
    explantion: '\n      汉字: 流\n      读音: りゅう\n      意思: styleof\n      来源:  method of\n      同义词: 流\n    ',
  },
  {
    question: '流し',
    answer: 'nagashi',
    explantion: '\n      汉字: 流し\n      读音: ながし\n      意思: sink\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '流通',
    answer: 'ryutsu',
    explantion: '\n      汉字: 流通\n      读音: りゅうつう\n      意思: circulation of money or goods\n      来源:  flow of water or air\n      同义词: 流通\n    ',
  },
  {
    question: '溜まり',
    answer: 'tamari',
    explantion: '\n      汉字: 溜まり\n      读音: たまり\n      意思: collected things\n      来源:  gathering place\n      同义词: 溜まり, 溜り\n    ',
  },
  {
    question: '旅客',
    answer: 'riyokaku',
    explantion: '\n      汉字: 旅客\n      读音: りょかく\n      意思: passenger (transport)\n      来源: waller\n      同义词: 旅客\n    ',
  },
  {
    question: '旅券',
    answer: 'riyoken',
    explantion: '\n      汉字: 旅券\n      读音: りょけん\n      意思: passport\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '了',
    answer: 'ryo',
    explantion: '\n      汉字: 了\n      读音: りょう\n      意思: finish\n      来源:  completion\n      同义词: 了\n    ',
  },
  {
    question: '了解',
    answer: 'ryokai',
    explantion: '\n      汉字: 了解\n      读音: りょうかい\n      意思: comprehension\n      来源:  consent\n      同义词: 了解, 諒解, 領解, 領会\n    ',
  },
  {
    question: '両極',
    answer: 'ryokyoku',
    explantion: '\n      汉字: 両極\n      读音: りょうきょく\n      意思: both extremities\n      来源:  north and south poles\n      同义词: 両極\n    ',
  },
  {
    question: '両立',
    answer: 'ryoritsu',
    explantion: '\n      汉字: 両立\n      读音: りょうりつ\n      意思: compatibility\n      来源:  coexistence\n      同义词: 両立\n    ',
  },
  {
    question: '凌ぐ',
    answer: 'shinogu',
    explantion: '\n      汉字: 凌ぐ\n      读音: しのぐ\n      意思: to outdo\n      来源:  to surpass\n      同义词: 凌ぐ\n    ',
  },
  {
    question: '料',
    answer: 'ryo',
    explantion: '\n      汉字: 料\n      读音: りょう\n      意思: material\n      来源:  charge\n      同义词: 料\n    ',
  },
  {
    question: '良好',
    answer: 'ryoko',
    explantion: '\n      汉字: 良好\n      读音: りょうこう\n      意思: favorable\n      来源:  satisfactory\n      同义词: 良好\n    ',
  },
  {
    question: '良識',
    answer: 'ryoshiki',
    explantion: '\n      汉字: 良識\n      读音: りょうしき\n      意思: good sense\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '良質',
    answer: 'ryoshitsu',
    explantion: '\n      汉字: 良質\n      读音: りょうしつ\n      意思: good quality\n      来源:  superior quality\n      同义词: 良質\n    ',
  },
  {
    question: '良心',
    answer: 'ryoshin',
    explantion: '\n      汉字: 良心\n      读音: りょうしん\n      意思: conscience\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '領域',
    answer: 'ryoiki',
    explantion: '\n      汉字: 領域\n      读音: りょういき\n      意思: area\n      来源:  domain\n      同义词: 領域\n    ',
  },
  {
    question: '領地',
    answer: 'ryochi',
    explantion: '\n      汉字: 領地\n      读音: りょうち\n      意思: territory\n      来源:  dominion\n      同义词: 領地\n    ',
  },
  {
    question: '領土',
    answer: 'ryodo',
    explantion: '\n      汉字: 領土\n      读音: りょうど\n      意思: dominion\n      来源:  territory\n      同义词: 領土\n    ',
  },
  {
    question: '林業',
    answer: 'ringyou',
    explantion: '\n      汉字: 林業\n      读音: りんぎょう\n      意思: forestry\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '臨む',
    answer: 'nozomu',
    explantion: '\n      汉字: 臨む\n      读音: のぞむ\n      意思: to look out on\n      来源:  to face\n      同义词: 臨む\n    ',
  },
  {
    question: '輪',
    answer: 'rin',
    explantion: '\n      汉字: 輪\n      读音: りん\n      意思: counter for wheels and flowers\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '類似',
    answer: 'ruiji',
    explantion: '\n      汉字: 類似\n      读音: るいじ\n      意思: analogous\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '類推',
    answer: 'ruisui',
    explantion: '\n      汉字: 類推\n      读音: るいすい\n      意思: analogy\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '冷やかす',
    answer: 'hiyakasu',
    explantion: '\n      汉字: 冷やかす\n      读音: ひやかす\n      意思: to banter\n      来源:  to make fun of\n      同义词: 冷やかす, 冷かす, 素見す\n    ',
  },
  {
    question: '冷酷',
    answer: 'reikoku',
    explantion: '\n      汉字: 冷酷\n      读音: れいこく\n      意思: cruelty\n      来源:  coldheartedness\n      同义词: 冷酷\n    ',
  },
  {
    question: '冷蔵',
    answer: 'reizou',
    explantion: '\n      汉字: 冷蔵\n      读音: れいぞう\n      意思: cold storage\n      来源:  refrigeration\n      同义词: 冷蔵\n    ',
  },
  {
    question: '冷淡',
    answer: 'reitan',
    explantion: '\n      汉字: 冷淡\n      读音: れいたん\n      意思: coolness\n      来源:  indifference\n      同义词: 冷淡\n    ',
  },
  {
    question: '励ます',
    answer: 'hagemasu',
    explantion: '\n      汉字: 励ます\n      读音: はげます\n      意思: to encourage\n      来源:  to cheer\n      同义词: 励ます\n    ',
  },
  {
    question: '励む',
    answer: 'hagemu',
    explantion: '\n      汉字: 励む\n      读音: はげむ\n      意思: to be zealous\n      来源:  to brace oneself\n      同义词: 励む\n    ',
  },
  {
    question: '零す',
    answer: 'kobosu',
    explantion: '\n      汉字: 零す\n      读音: こぼす\n      意思: to spill\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '暦',
    answer: 'koyomi',
    explantion: '\n      汉字: 暦\n      读音: こよみ\n      意思: calendar\n      来源:  almanac\n      同义词: 暦, 暦\n    ',
  },
  {
    question: '裂ける',
    answer: 'sakeru',
    explantion: '\n      汉字: 裂ける\n      读音: さける\n      意思: to split\n      来源:  to tear\n      同义词: 裂ける, 割ける\n    ',
  },
  {
    question: '恋愛',
    answer: 'renai',
    explantion: '\n      汉字: 恋愛\n      读音: れんあい\n      意思: love\n      来源:  love-making\n      同义词: 恋愛\n    ',
  },
  {
    question: '練る',
    answer: 'neru',
    explantion: '\n      汉字: 練る\n      读音: ねる\n      意思: to knead\n      来源:  to work over\n      同义词: 練る, 煉る\n    ',
  },
  {
    question: '蓮',
    answer: 'hasu',
    explantion: '\n      汉字: 蓮\n      读音: はす\n      意思: lotus\n      来源: waller\n      同义词: , , 蓮, 藕, \n    ',
  },
  {
    question: '連なる',
    answer: 'tsuranaru',
    explantion: '\n      汉字: 連なる\n      读音: つらなる\n      意思: to extend\n      来源:  to stretch out\n      同义词: 連なる, 列なる\n    ',
  },
  {
    question: '連ねる',
    answer: 'tsuraneru',
    explantion: '\n      汉字: 連ねる\n      读音: つらねる\n      意思: to link\n      来源:  to join\n      同义词: 連ねる, 列ねる\n    ',
  },
  {
    question: '連休',
    answer: 'renkyu',
    explantion: '\n      汉字: 連休\n      读音: れんきゅう\n      意思: consecutive holidays\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '連帯',
    answer: 'rentai',
    explantion: '\n      汉字: 連帯\n      读音: れんたい\n      意思: solidarity\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '連中',
    answer: 'renju',
    explantion: '\n      汉字: 連中\n      读音: れんじゅう\n      意思: colleagues\n      来源:  company\n      同义词: 連中, 連中, 連中\n    ',
  },
  {
    question: '連日',
    answer: 'renjitsu',
    explantion: '\n      汉字: 連日\n      读音: れんじつ\n      意思: every day\n      来源:  prolonged\n      同义词: 連日\n    ',
  },
  {
    question: '連邦',
    answer: 'renpo',
    explantion: '\n      汉字: 連邦\n      读音: れんぽう\n      意思: commonwealth\n      来源:  federation of states\n      同义词: 連邦, 聯邦\n    ',
  },
  {
    question: '連盟',
    answer: 'renmei',
    explantion: '\n      汉字: 連盟\n      读音: れんめい\n      意思: league\n      来源:  union\n      同义词: 連盟, 聯盟\n    ',
  },
  {
    question: '露',
    answer: 'tsuyu',
    explantion: '\n      汉字: 露\n      读音: つゆ\n      意思: dew\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '露骨',
    answer: 'rokotsu',
    explantion: '\n      汉字: 露骨\n      读音: ろこつ\n      意思: 1. frank\n      来源:  blunt\n      同义词: 露骨\n    ',
  },
  {
    question: '労る',
    answer: 'itawaru',
    explantion: '\n      汉字: 労る\n      读音: いたわる\n      意思: to pity\n      来源:  to sympathize with\n      同义词: 労る, , 労わる\n    ',
  },
  {
    question: '労力',
    answer: 'rouriyoku',
    explantion: '\n      汉字: 労力\n      读音: ろうりょく\n      意思: labour\n      来源:  effort\n      同义词: 労力\n    ',
  },
  {
    question: '弄る',
    answer: 'ijiru',
    explantion: '\n      汉字: 弄る\n      读音: いじる\n      意思: to touch\n      来源:  to tamper with\n      同义词: 弄る, , , 弄る\n    ',
  },
  {
    question: '朗読',
    answer: 'rodoku',
    explantion: '\n      汉字: 朗読\n      读音: ろうどく\n      意思: reading aloud\n      来源:  recitation\n      同义词: 朗読\n    ',
  },
  {
    question: '浪費',
    answer: 'rohi',
    explantion: '\n      汉字: 浪費\n      读音: ろうひ\n      意思: waste\n      来源:  extravagance\n      同义词: 浪費\n    ',
  },
  {
    question: '漏る',
    answer: 'moru',
    explantion: '\n      汉字: 漏る\n      读音: もる\n      意思: to leak\n      来源:  to run out\n      同义词: 漏る, 洩る\n    ',
  },
  {
    question: '老いる',
    answer: 'oiru',
    explantion: '\n      汉字: 老いる\n      读音: おいる\n      意思: to age\n      来源:  to grow old\n      同义词: 老いる\n    ',
  },
  {
    question: '老ける',
    answer: 'fukeru',
    explantion: '\n      汉字: 老ける\n      读音: ふける\n      意思: to age\n      来源: waller\n      同义词: 化ける\n    ',
  },
  {
    question: '老衰',
    answer: 'rousui',
    explantion: '\n      汉字: 老衰\n      读音: ろうすい\n      意思: senility\n      来源:  senile decay\n      同义词: 老衰\n    ',
  },
  {
    question: '論議',
    answer: 'rongi',
    explantion: '\n      汉字: 論議\n      读音: ろんぎ\n      意思: discussion\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '論理',
    answer: 'ronri',
    explantion: '\n      汉字: 論理\n      读音: ろんり\n      意思: logic\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '和',
    answer: 'wa',
    explantion: '\n      汉字: 和\n      读音: わ\n      意思: sum\n      来源:  harmony\n      同义词: 和, 倭\n    ',
  },
  {
    question: '和やか',
    answer: 'nagoyaka',
    explantion: '\n      汉字: 和やか\n      读音: なごやか\n      意思: mild\n      来源:  calm\n      同义词: 和やか\n    ',
  },
  {
    question: '和らげる',
    answer: 'yawarageru',
    explantion: '\n      汉字: 和らげる\n      读音: やわらげる\n      意思: to soften\n      来源:  to moderate\n      同义词: 和らげる\n    ',
  },
  {
    question: '和風',
    answer: 'wafu',
    explantion: '\n      汉字: 和風\n      读音: わふう\n      意思: Japanese style\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '和文',
    answer: 'wabun',
    explantion: '\n      汉字: 和文\n      读音: わぶん\n      意思: Japanese text\n      来源:  sentence in Japanese\n      同义词: 和文\n    ',
  },
  {
    question: '賄う',
    answer: 'makanau',
    explantion: '\n      汉字: 賄う\n      读音: まかなう\n      意思: to give board to\n      来源:  to provide meals\n      同义词: 賄う\n    ',
  },
  {
    question: '惑星',
    answer: 'wakusei',
    explantion: '\n      汉字: 惑星\n      读音: わくせい\n      意思: planet\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '枠',
    answer: 'waku',
    explantion: '\n      汉字: 枠\n      读音: わく\n      意思: frame\n      来源:  slide\n      同义词: 枠, 框\n    ',
  },
  {
    question: '詫び',
    answer: 'wabi',
    explantion: '\n      汉字: 詫び\n      读音: わび\n      意思: apology\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '藁',
    answer: 'wara',
    explantion: '\n      汉字: 藁\n      读音: わら\n      意思: straw\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '腕前',
    answer: 'udemae',
    explantion: '\n      汉字: 腕前\n      读音: うでまえ\n      意思: ability\n      来源:  skill\n      同义词: 腕前, 腕まえ\n    ',
  },
  {
    question: '几帳面',
    answer: 'kichomen',
    explantion: '\n      汉字: 几帳面\n      读音: きちょうめん\n      意思: methodical\n      来源:  punctual\n      同义词: 几帳面\n    ',
  },
  {
    question: '凭れる',
    answer: 'motareru',
    explantion: '\n      汉字: 凭れる\n      读音: もたれる\n      意思: to lean against\n      来源:  to lean on\n      同义词: 凭れる\n    ',
  },
  {
    question: '咎める',
    answer: 'togameru',
    explantion: '\n      汉字: 咎める\n      读音: とがめる\n      意思: to blame\n      来源:  to find fault\n      同义词: 咎める\n    ',
  },
  {
    question: '呟く',
    answer: 'tsubuyaku',
    explantion: '\n      汉字: 呟く\n      读音: つぶやく\n      意思: to mutter\n      来源:  to murmur\n      同义词: 呟く, \n    ',
  },
  {
    question: '咄嗟',
    answer: 'tossa',
    explantion: '\n      汉字: 咄嗟\n      读音: とっさ\n      意思: moment\n      来源:  instant\n      同义词: 咄嗟, \n    ',
  },
  {
    question: '唸る',
    answer: 'unaru',
    explantion: '\n      汉字: 唸る\n      读音: うなる\n      意思: to groan\n      来源:  to moan\n      同义词: 唸る\n    ',
  },
  {
    question: '嗚呼',
    answer: 'a',
    explantion: '\n      汉字: 嗚呼\n      读音: ああ\n      意思: Ah!\n      来源:  Oh!\n      同义词: 嗚呼, , 噫, 嗟, , , , , \n    ',
  },
  {
    question: '嗜好',
    answer: 'shiko',
    explantion: '\n      汉字: 嗜好\n      读音: しこう\n      意思: taste\n      来源:  liking\n      同义词: 嗜好\n    ',
  },
  {
    question: '嘴',
    answer: 'kuchibashi',
    explantion: '\n      汉字: 嘴\n      读音: くちばし\n      意思: beak\n      来源:  bill\n      同义词: 嘴, , , 嘴, 喙, 觜, \n    ',
  },
  {
    question: 'あざ笑う',
    answer: 'azawarau',
    explantion: '\n      汉字: あざ笑う\n      读音: あざわらう\n      意思: to sneer at\n      来源:  to ridicule\n      同义词: あざ笑う, 嘲笑う, 嘲う\n    ',
  },
  {
    question: '嘸',
    answer: 'sazo',
    explantion: '\n      汉字: 嘸\n      读音: さぞ\n      意思: I am sure\n      来源:  certainly\n      同义词: 嘸, \n    ',
  },
  {
    question: '囀る',
    answer: 'saezuru',
    explantion: '\n      汉字: 囀る\n      读音: さえずる\n      意思: to sing\n      来源:  to chirp\n      同义词: 囀る, \n    ',
  },
  {
    question: '夥しい',
    answer: 'obitadashii',
    explantion: '\n      汉字: 夥しい\n      读音: おびただしい\n      意思: abundantly\n      来源:  innumerably\n      同义词: 夥しい, \n    ',
  },
  {
    question: '傲る',
    answer: 'ogoru',
    explantion: '\n      汉字: 傲る\n      读音: おごる\n      意思: to be proud\n      来源: waller\n      同义词: , 奢る, 驕る\n    ',
  },
  {
    question: '婉曲',
    answer: 'enkyoku',
    explantion: '\n      汉字: 婉曲\n      读音: えんきょく\n      意思: euphemistic\n      来源:  circumlocution\n      同义词: 婉曲\n    ',
  },
  {
    question: '嫋か',
    answer: 'shinayaka',
    explantion: '\n      汉字: 嫋か\n      读音: しなやか\n      意思: supple\n      来源:  flexible\n      同义词: 嫋か, , 靭やか, 靱やか\n    ',
  },
  {
    question: '何れ',
    answer: 'izure',
    explantion: '\n      汉字: 何れ\n      读音: いずれ\n      意思: where\n      来源:  which\n      同义词: 何れ\n    ',
  },
  {
    question: '屎尿',
    answer: 'shiniyou',
    explantion: '\n      汉字: 屎尿\n      读音: しにょう\n      意思: excreta\n      来源:  raw sewage\n      同义词: 屎尿, し尿\n    ',
  },
  {
    question: '填める',
    answer: 'hameru',
    explantion: '\n      汉字: 填める\n      读音: はめる\n      意思: to get in\n      来源:  to insert\n      同义词: 填める\n    ',
  },
  {
    question: '抓る',
    answer: 'tsuneru',
    explantion: '\n      汉字: 抓る\n      读音: つねる\n      意思: to pinch\n      来源: waller\n      同义词: , , 抓る, 抓める\n    ',
  },
  {
    question: '拗れる',
    answer: 'kojireru',
    explantion: '\n      汉字: 拗れる\n      读音: こじれる\n      意思: to get complicated\n      来源:  to grow worse\n      同义词: 拗れる, \n    ',
  },
  {
    question: '拵える',
    answer: 'koshiraeru',
    explantion: '\n      汉字: 拵える\n      读音: こしらえる\n      意思: to make\n      来源:  to manufacture\n      同义词: 拵える\n    ',
  },
  {
    question: '揉める',
    answer: 'momeru',
    explantion: '\n      汉字: 揉める\n      读音: もめる\n      意思: to disagree\n      来源:  to dispute\n      同义词: 揉める, \n    ',
  },
  {
    question: '揶揄う',
    answer: 'karakau',
    explantion: '\n      汉字: 揶揄う\n      读音: からかう\n      意思: to ridicule\n      来源:  to tease\n      同义词: 揶揄う\n    ',
  },
  {
    question: '檻',
    answer: 'ori',
    explantion: '\n      汉字: 檻\n      读音: おり\n      意思: cage\n      来源:  pen\n      同义词: 檻\n    ',
  },
  {
    question: '鬱陶しい',
    answer: 'uttoshii',
    explantion: '\n      汉字: 鬱陶しい\n      读音: うっとうしい\n      意思: gloomy\n      来源:  depressing\n      同义词: 鬱陶しい, , , 鬱陶しい\n    ',
  },
  {
    question: '毟る',
    answer: 'mushiru',
    explantion: '\n      汉字: 毟る\n      读音: むしる\n      意思: to pluck\n      来源:  to pick\n      同义词: 毟る, 挘る\n    ',
  },
  {
    question: '洒落',
    answer: 'sharaku',
    explantion: '\n      汉字: 洒落\n      读音: しゃらく\n      意思: frank\n      来源:  open-hearted\n      同义词: 洒落, 灑落\n    ',
  },
  {
    question: '洒落る',
    answer: 'shareru',
    explantion: '\n      汉字: 洒落る\n      读音: しゃれる\n      意思: to joke\n      来源:  to play on words\n      同义词: 洒落る\n    ',
  },
  {
    question: '涸れる',
    answer: 'kareru',
    explantion: '\n      汉字: 涸れる\n      读音: かれる\n      意思: to dry up\n      来源:  to run out\n      同义词: 涸れる\n    ',
  },
  {
    question: '滲む',
    answer: 'nijimu',
    explantion: '\n      汉字: 滲む\n      读音: にじむ\n      意思: to run\n      来源:  to blur\n      同义词: 滲む, \n    ',
  },
  {
    question: '炙る',
    answer: 'aburu',
    explantion: '\n      汉字: 炙る\n      读音: あぶる\n      意思: to scorch\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '炒める',
    answer: 'itameru',
    explantion: '\n      汉字: 炒める\n      读音: いためる\n      意思: to stir-fry\n      来源: waller\n      同义词: 煠める\n    ',
  },
  {
    question: '煌々',
    answer: 'koko',
    explantion: '\n      汉字: 煌々\n      读音: こうこう\n      意思: brilliantly\n      来源:  brightly\n      同义词: 煌々, 煌煌, 晃々, 晃晃\n    ',
  },
  {
    question: '痒い',
    answer: 'kayui',
    explantion: '\n      汉字: 痒い\n      读音: かゆい\n      意思: itchy\n      来源:  itching\n      同义词: 痒い\n    ',
  },
  {
    question: '痺れる',
    answer: 'shibireru',
    explantion: '\n      汉字: 痺れる\n      读音: しびれる\n      意思: to become numb\n      来源:  to go to sleep (i.e. a limb)\n      同义词: 痺れる\n    ',
  },
  {
    question: '皺',
    answer: 'shiwa',
    explantion: '\n      汉字: 皺\n      读音: しわ\n      意思: wrinkles\n      来源:  creases\n      同义词: 皺, , 皴, \n    ',
  },
  {
    question: '眩しい',
    answer: 'mabushii',
    explantion: '\n      汉字: 眩しい\n      读音: まぶしい\n      意思: dazzling\n      来源:  radiant\n      同义词: 眩しい\n    ',
  },
  {
    question: '目眩',
    answer: 'memai',
    explantion: '\n      汉字: 目眩\n      读音: めまい\n      意思: dizziness\n      来源:  giddiness\n      同义词: 目眩\n    ',
  },
  {
    question: '目蓋',
    answer: 'mabuta',
    explantion: '\n      汉字: 目蓋\n      读音: まぶた\n      意思: eyelid\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '碌に',
    answer: 'rokuni',
    explantion: '\n      汉字: 碌に\n      读音: ろくに\n      意思: well\n      来源:  enough\n      同义词: 碌に, , 陸に\n    ',
  },
  {
    question: '稍',
    answer: 'yaya',
    explantion: '\n      汉字: 稍\n      读音: やや\n      意思: a little\n      来源:  partially\n      同义词: 稍, , 漸\n    ',
  },
  {
    question: '籤引',
    answer: 'kujibiki',
    explantion: '\n      汉字: 籤引\n      读音: くじびき\n      意思: lottery\n      来源:  drawn lot\n      同义词: 籤引, くじ引き, 籤引き\n    ',
  },
  {
    question: '煌びやか',
    answer: 'kirabiyaka',
    explantion: '\n      汉字: 煌びやか\n      读音: きらびやか\n      意思: gorgeous\n      来源:  gaudy\n      同义词: 煌びやか, , 綺羅びやか\n    ',
  },
  {
    question: '翔る',
    answer: 'kakeru',
    explantion: '\n      汉字: 翔る\n      读音: かける\n      意思: to run (race esp. horse)\n      来源:  to gallop\n      同义词: 翔る, 翔ける\n    ',
  },
  {
    question: '聳える',
    answer: 'sobieru',
    explantion: '\n      汉字: 聳える\n      读音: そびえる\n      意思: to rise\n      来源:  to tower\n      同义词: 聳える, \n    ',
  },
  {
    question: '嘗める',
    answer: 'nameru',
    explantion: '\n      汉字: 嘗める\n      读音: なめる\n      意思: to lick\n      来源:  to taste\n      同义词: 嘗める, 舐める, , 甞める\n    ',
  },
  {
    question: '茹でる',
    answer: 'yuderu',
    explantion: '\n      汉字: 茹でる\n      读音: ゆでる\n      意思: to boil\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '蕾',
    answer: 'tsubomi',
    explantion: '\n      汉字: 蕾\n      读音: つぼみ\n      意思: bud\n      来源:  flower bud\n      同义词: 蕾, 莟\n    ',
  },
  {
    question: '誂える',
    answer: 'atsuraeru',
    explantion: '\n      汉字: 誂える\n      读音: あつらえる\n      意思: to give an order\n      来源:  to place an order\n      同义词: 誂える, \n    ',
  },
  {
    question: '諄い',
    answer: 'kudoi',
    explantion: '\n      汉字: 諄い\n      读音: くどい\n      意思: verbose\n      来源:  importunate\n      同义词: 諄い\n    ',
  },
  {
    question: '貶す',
    answer: 'kenasu',
    explantion: '\n      汉字: 貶す\n      读音: けなす\n      意思: to speak ill of\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '齎らす',
    answer: 'motarasu',
    explantion: '\n      汉字: 齎らす\n      读音: もたらす\n      意思: to bring\n      来源:  to take\n      同义词: 齎らす, , 齎す\n    ',
  },
  {
    question: '踵',
    answer: 'kakato',
    explantion: '\n      汉字: 踵\n      读音: かかと\n      意思: (shoe) heel\n      来源: waller\n      同义词: , , 踵, , 踵, , 踵\n    ',
  },
  {
    question: '躊躇う',
    answer: 'tamerau',
    explantion: '\n      汉字: 躊躇う\n      读音: ためらう\n      意思: to hesitate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '躓く',
    answer: 'tsumazuku',
    explantion: '\n      汉字: 躓く\n      读音: つまずく\n      意思: to stumble\n      来源:  to trip\n      同义词: 躓く\n    ',
  },
  {
    question: '躾',
    answer: 'shitsuke',
    explantion: '\n      汉字: 躾\n      读音: しつけ\n      意思: home discipline\n      来源:  training\n      同义词: 躾, \n    ',
  },
  {
    question: '軋む',
    answer: 'kishimu',
    explantion: '\n      汉字: 軋む\n      读音: きしむ\n      意思: to jar\n      来源:  to creak\n      同义词: 軋む, \n    ',
  },
  {
    question: '辟易',
    answer: 'hekieki',
    explantion: '\n      汉字: 辟易\n      读音: へきえき\n      意思: wince\n      来源:  shrink back\n      同义词: 辟易, \n    ',
  },
  {
    question: '逞しい',
    answer: 'takumashii',
    explantion: '\n      汉字: 逞しい\n      读音: たくましい\n      意思: burly\n      来源:  strong\n      同义词: 逞しい, \n    ',
  },
  {
    question: '霰',
    answer: 'arare',
    explantion: '\n      汉字: 霰\n      读音: あられ\n      意思: kind of cookie\n      来源:  cartoon character\n      同义词: 霰, \n    ',
  },
  {
    question: '饂飩',
    answer: 'udon',
    explantion: '\n      汉字: 饂飩\n      读音: うどん\n      意思: noodles (Japanese)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '騙す',
    answer: 'damasu',
    explantion: '\n      汉字: 騙す\n      读音: だます\n      意思: to trick\n      来源:  to cheat\n      同义词: 騙す\n    ',
  },
  {
    question: '黴菌',
    answer: 'baikin',
    explantion: '\n      汉字: 黴菌\n      读音: ばいきん\n      意思: bacteria\n      来源:  germ(s)\n      同义词: 黴菌, ばい菌, バイ菌\n    ',
  },
  {
    question: '鼾',
    answer: 'ibiki',
    explantion: '\n      汉字: 鼾\n      读音: いびき\n      意思: snoring\n      来源: waller\n      同义词: , \n    ',
  },
  {
    question: '愛想',
    answer: 'aiso',
    explantion: '\n      汉字: 愛想\n      读音: あいそ\n      意思: civility\n      来源:  courtesy\n      同义词: 愛想, 愛想\n    ',
  },
  {
    question: '愛憎',
    answer: 'aizou',
    explantion: '\n      汉字: 愛憎\n      读音: あいぞう\n      意思: likes and dislikes\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '悪口',
    answer: 'atsuko',
    explantion: '\n      汉字: 悪口\n      读音: あっこう\n      意思: abuse\n      来源:  insult\n      同义词: 悪口\n    ',
  },
  {
    question: '悪日',
    answer: 'akubi',
    explantion: '\n      汉字: 悪日\n      读音: あくび\n      意思: unlucky day\n      来源: waller\n      同义词: 悪日\n    ',
  },
  {
    question: '依存',
    answer: 'ison',
    explantion: '\n      汉字: 依存\n      读音: いそん\n      意思: dependence\n      来源:  dependent\n      同义词: 依存, 依存\n    ',
  },
  {
    question: '一筋',
    answer: 'hitosuji',
    explantion: '\n      汉字: 一筋\n      读音: ひとすじ\n      意思: a line\n      来源:  earnestly\n      同义词: 一筋, 一条, ひと筋, 一すじ, ひと条\n    ',
  },
  {
    question: '一言',
    answer: 'ichigen',
    explantion: '\n      汉字: 一言\n      读音: いちげん\n      意思: single word\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '一昨昨日',
    answer: 'sakiototoi',
    explantion: '\n      汉字: 一昨昨日\n      读音: さきおととい\n      意思: two days before yesterday\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '一人',
    answer: 'ichinin',
    explantion: '\n      汉字: 一人\n      读音: いちにん\n      意思: one person\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '一日',
    answer: 'ichijitsu',
    explantion: '\n      汉字: 一日\n      读音: いちじつ\n      意思: 1. one day\n      来源:  2. first of month\n      同义词: 一日\n    ',
  },
  {
    question: '卯',
    answer: 'bou',
    explantion: '\n      汉字: 卯\n      读音: ぼう\n      意思: fourth sign of Chinese zodiac (The Hare 5am-7am east February)\n      来源: waller\n      同义词: 卯\n    ',
  },
  {
    question: '円滑',
    answer: 'enkatsu',
    explantion: '\n      汉字: 円滑\n      读音: えんかつ\n      意思: harmony\n      来源:  smoothness\n      同义词: 円滑, 円滑\n    ',
  },
  {
    question: '黄色',
    answer: 'oushoku',
    explantion: '\n      汉字: 黄色\n      读音: おうしょく\n      意思: yellow\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '俺',
    answer: 'ore',
    explantion: '\n      汉字: 俺\n      读音: おれ\n      意思: I (ego) (boastful first-person pronoun)\n      来源: waller\n      同义词: 俺, 俺, 己\n    ',
  },
  {
    question: '音',
    answer: 'ne',
    explantion: '\n      汉字: 音\n      读音: ね\n      意思: sound\n      来源:  note\n      同义词: 音\n    ',
  },
  {
    question: '音色',
    answer: 'neiro',
    explantion: '\n      汉字: 音色\n      读音: ねいろ\n      意思: tone color\n      来源:  tone quality\n      同义词: 音色, 音色, 音いろ\n    ',
  },
  {
    question: '何故',
    answer: 'naze',
    explantion: '\n      汉字: 何故\n      读音: なぜ\n      意思: why\n      来源:  how\n      同义词: 何故\n    ',
  },
  {
    question: '何時でも',
    answer: 'itsudemo',
    explantion: '\n      汉字: 何時でも\n      读音: いつでも\n      意思: (at) any time\n      来源:  always\n      同义词: 何時でも\n    ',
  },
  {
    question: '何処',
    answer: 'doko',
    explantion: '\n      汉字: 何処\n      读音: どこ\n      意思: where\n      来源:  what place\n      同义词: 何処\n    ',
  },
  {
    question: '可愛い',
    answer: 'kawaii',
    explantion: '\n      汉字: 可愛い\n      读音: かわいい\n      意思: pretty\n      来源:  cute\n      同义词: 可愛い\n    ',
  },
  {
    question: '暇',
    answer: 'itoma',
    explantion: '\n      汉字: 暇\n      读音: いとま\n      意思: free time\n      来源:  leisure\n      同义词: 暇\n    ',
  },
  {
    question: '火傷',
    answer: 'kasho',
    explantion: '\n      汉字: 火傷\n      读音: かしょう\n      意思: burn\n      来源:  scald\n      同义词: 火傷\n    ',
  },
  {
    question: '冠',
    answer: 'kan',
    explantion: '\n      汉字: 冠\n      读音: かん\n      意思: crown\n      来源:  diadem\n      同义词: 冠\n    ',
  },
  {
    question: '幹',
    answer: 'kan',
    explantion: '\n      汉字: 幹\n      读音: かん\n      意思: (tree) trunk\n      来源: waller\n      同义词: 幹\n    ',
  },
  {
    question: '管',
    answer: 'kan',
    explantion: '\n      汉字: 管\n      读音: かん\n      意思: pipe\n      来源:  tube\n      同义词: 管\n    ',
  },
  {
    question: '眼鏡',
    answer: 'gankyo',
    explantion: '\n      汉字: 眼鏡\n      读音: がんきょう\n      意思: spectacles\n      来源:  glasses\n      同义词: 眼鏡\n    ',
  },
  {
    question: '寄贈',
    answer: 'kisou',
    explantion: '\n      汉字: 寄贈\n      读音: きそう\n      意思: donation\n      来源:  presentation\n      同义词: 寄贈, 寄贈\n    ',
  },
  {
    question: '贋物',
    answer: 'ganbutsu',
    explantion: '\n      汉字: 贋物\n      读音: がんぶつ\n      意思: imitation\n      来源:  counterfeit\n      同义词: 贋物, 偽物, 偽物, 偽物, 贋物, 贋物, ニセ物, ニセ物, にせ物, にせ物, , \n    ',
  },
  {
    question: '敵',
    answer: 'kataki',
    explantion: '\n      汉字: 敵\n      读音: かたき\n      意思: enemy\n      来源:  rival\n      同义词: 敵, 仇\n    ',
  },
  {
    question: '旧事',
    answer: 'kuji',
    explantion: '\n      汉字: 旧事\n      读音: くじ\n      意思: past events\n      来源:  bygones\n      同义词: 旧事, 旧事\n    ',
  },
  {
    question: '共',
    answer: 'tomo',
    explantion: '\n      汉字: 共\n      读音: とも\n      意思: both\n      来源:  neither (neg)\n      同义词: 共, \n    ',
  },
  {
    question: '共存',
    answer: 'kyoson',
    explantion: '\n      汉字: 共存\n      读音: きょうそん\n      意思: coexistence\n      来源: waller\n      同义词: 共存\n    ',
  },
  {
    question: '脅かす',
    answer: 'odokasu',
    explantion: '\n      汉字: 脅かす\n      读音: おどかす\n      意思: to threaten\n      来源:  to coerce\n      同义词: 脅かす\n    ',
  },
  {
    question: '近々',
    answer: 'kinkin',
    explantion: '\n      汉字: 近々\n      读音: きんきん\n      意思: nearness\n      来源:  before long\n      同义词: 近々\n    ',
  },
  {
    question: '金庫',
    answer: 'kanegura',
    explantion: '\n      汉字: 金庫\n      读音: かねぐら\n      意思: safe\n      来源:  vault\n      同义词: 金庫, 金蔵, 金蔵\n    ',
  },
  {
    question: '傾く',
    answer: 'katabuku',
    explantion: '\n      汉字: 傾く\n      读音: かたぶく\n      意思: to incline toward\n      来源:  to slant\n      同义词: 傾く\n    ',
  },
  {
    question: '兼業',
    answer: 'kengyou',
    explantion: '\n      汉字: 兼業\n      读音: けんぎょう\n      意思: side line\n      来源:  second business\n      同义词: 兼業\n    ',
  },
  {
    question: '行き違い',
    answer: 'ikichigai',
    explantion: '\n      汉字: 行き違い\n      读音: いきちがい\n      意思: misunderstanding\n      来源:  estrangement\n      同义词: 行き違い, 行き違い, 行違い, 行違い\n    ',
  },
  {
    question: '合併',
    answer: 'gappei',
    explantion: '\n      汉字: 合併\n      读音: がっぺい\n      意思: combination\n      来源:  union\n      同义词: 合併\n    ',
  },
  {
    question: '哉',
    answer: 'kana',
    explantion: '\n      汉字: 哉\n      读音: かな\n      意思: question mark\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '三',
    answer: 'mi',
    explantion: '\n      汉字: 三\n      读音: み\n      意思: (num) three\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '三味線',
    answer: 'samisen',
    explantion: '\n      汉字: 三味線\n      读音: さみせん\n      意思: three-stringed Japanese guitar\n      来源:  shamisen\n      同义词: 三味線, 三味線\n    ',
  },
  {
    question: '姉妹',
    answer: 'kyodai',
    explantion: '\n      汉字: 姉妹\n      读音: きょうだい\n      意思: sisters\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '施行',
    answer: 'shigyou',
    explantion: '\n      汉字: 施行\n      读音: しぎょう\n      意思: 1. execution\n      来源:  enforcing\n      同义词: 施行, 施行, 施行, 施行\n    ',
  },
  {
    question: '次',
    answer: 'ji',
    explantion: '\n      汉字: 次\n      读音: じ\n      意思: order\n      来源:  sequence\n      同义词: 次\n    ',
  },
  {
    question: '七日',
    answer: 'nanuka',
    explantion: '\n      汉字: 七日\n      读音: なぬか\n      意思: seven days\n      来源:  the seventh day (of the month)\n      同义词: 七日\n    ',
  },
  {
    question: '重複',
    answer: 'jufuku',
    explantion: '\n      汉字: 重複\n      读音: じゅうふく\n      意思: duplication\n      来源:  repetition\n      同义词: 重複, 重複\n    ',
  },
  {
    question: '重宝',
    answer: 'juho',
    explantion: '\n      汉字: 重宝\n      读音: じゅうほう\n      意思: priceless treasure\n      来源:  convenience\n      同义词: 重宝, 重宝\n    ',
  },
  {
    question: '出生',
    answer: 'shutsusho',
    explantion: '\n      汉字: 出生\n      读音: しゅっしょう\n      意思: birth\n      来源: waller\n      同义词: 出生\n    ',
  },
  {
    question: '出来物',
    answer: 'dekimono',
    explantion: '\n      汉字: 出来物\n      读音: できもの\n      意思: able man\n      来源:  tumour\n      同义词: 出来物, \n    ',
  },
  {
    question: '瞬き',
    answer: 'matataki',
    explantion: '\n      汉字: 瞬き\n      读音: またたき\n      意思: wink\n      来源:  twinkling (of stars)\n      同义词: 瞬き, 瞬き, 瞬き, 瞬き\n    ',
  },
  {
    question: '助言',
    answer: 'jogen',
    explantion: '\n      汉字: 助言\n      读音: じょげん\n      意思: advice\n      来源:  suggestion\n      同义词: 助言, 助言\n    ',
  },
  {
    question: '商人',
    answer: 'akiudo',
    explantion: '\n      汉字: 商人\n      读音: あきうど\n      意思: trader\n      来源:  shopkeeper\n      同义词: 商人\n    ',
  },
  {
    question: '少女',
    answer: 'otome',
    explantion: '\n      汉字: 少女\n      读音: おとめ\n      意思: daughter\n      来源:  young lady\n      同义词: 少女\n    ',
  },
  {
    question: '掌',
    answer: 'tanagokoro',
    explantion: '\n      汉字: 掌\n      读音: たなごころ\n      意思: the palm\n      来源: waller\n      同义词: 手のひら, 掌, 掌, 手の平\n    ',
  },
  {
    question: '消耗',
    answer: 'shoko',
    explantion: '\n      汉字: 消耗\n      读音: しょうこう\n      意思: exhaustion\n      来源:  consumption\n      同义词: 消耗\n    ',
  },
  {
    question: '上手',
    answer: 'uwate',
    explantion: '\n      汉字: 上手\n      读音: うわて\n      意思: 1. upper part\n      来源:  upper stream\n      同义词: 上手, 上手\n    ',
  },
  {
    question: '丈夫',
    answer: 'jofu',
    explantion: '\n      汉字: 丈夫\n      读音: じょうふ\n      意思: 1. hero\n      来源:  gentleman\n      同义词: 丈夫, 丈夫, 益荒男\n    ',
  },
  {
    question: '乗客',
    answer: 'jiyoukaku',
    explantion: '\n      汉字: 乗客\n      读音: じょうかく\n      意思: passenger\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '情緒',
    answer: 'joshiyo',
    explantion: '\n      汉字: 情緒\n      读音: じょうしょ\n      意思: emotion\n      来源:  feeling\n      同义词: 情緒, 情緒\n    ',
  },
  {
    question: '誠',
    answer: 'makoto',
    explantion: '\n      汉字: 誠\n      读音: まこと\n      意思: truth\n      来源:  faith\n      同义词: 誠, 実\n    ',
  },
  {
    question: '人目',
    answer: 'jinmoku',
    explantion: '\n      汉字: 人目\n      读音: じんもく\n      意思: glimpse\n      来源:  public gaze\n      同义词: 人目, 人目, 人眼\n    ',
  },
  {
    question: '善し悪し',
    answer: 'yoshiashi',
    explantion: '\n      汉字: 善し悪し\n      读音: よしあし\n      意思: good or bad\n      来源:  merits or demerits\n      同义词: 善し悪し, 良し悪し, 良し悪し, 善し悪し, 良しあし, 善しあし, よし悪し\n    ',
  },
  {
    question: '嘗て',
    answer: 'katsute',
    explantion: '\n      汉字: 嘗て\n      读音: かつて\n      意思: once\n      来源:  ever\n      同义词: 嘗て, , 曾て, , 曾て, 都て\n    ',
  },
  {
    question: '早急',
    answer: 'sakkyu',
    explantion: '\n      汉字: 早急\n      读音: さっきゅう\n      意思: urgent\n      来源: waller\n      同义词: 早急\n    ',
  },
  {
    question: '側',
    answer: 'kawa',
    explantion: '\n      汉字: 側\n      读音: かわ\n      意思: side\n      来源:  row\n      同义词: 側, 側\n    ',
  },
  {
    question: '他人',
    answer: 'adabito',
    explantion: '\n      汉字: 他人\n      读音: あだびと\n      意思: another person\n      来源:  unrelated person\n      同义词: 他人\n    ',
  },
  {
    question: '打ち込む',
    answer: 'uchikomu',
    explantion: '\n      汉字: 打ち込む\n      读音: うちこむ\n      意思: to drive in (e.g. nail stake)\n      来源:  to devote oneself to\n      同义词: 打ち込む, 打ちこむ, 打込む, うち込む\n    ',
  },
  {
    question: '濯ぐ',
    answer: 'susugu',
    explantion: '\n      汉字: 濯ぐ\n      读音: すすぐ\n      意思: to rinse\n      来源:  to wash out\n      同义词: 濯ぐ, , , 濯ぐ, , 濯ぐ, 雪ぐ, 雪ぐ\n    ',
  },
  {
    question: '値',
    answer: 'atai',
    explantion: '\n      汉字: 値\n      读音: あたい\n      意思: value\n      来源:  price\n      同义词: 値, 価, 價\n    ',
  },
  {
    question: '中指',
    answer: 'chushi',
    explantion: '\n      汉字: 中指\n      读音: ちゅうし\n      意思: middle finger\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '昼間',
    answer: 'chiyuukan',
    explantion: '\n      汉字: 昼間\n      读音: ちゅうかん\n      意思: daytime\n      来源:  during the day\n      同义词: 昼間\n    ',
  },
  {
    question: '剃る',
    answer: 'suru',
    explantion: '\n      汉字: 剃る\n      读音: する\n      意思: to shave\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '天地',
    answer: 'ametsuchi',
    explantion: '\n      汉字: 天地\n      读音: あめつち\n      意思: heaven and earth\n      来源:  the universe\n      同义词: 天地, 天地\n    ',
  },
  {
    question: '店',
    answer: 'ten',
    explantion: '\n      汉字: 店\n      读音: てん\n      意思: store\n      来源:  shop\n      同义词: 店\n    ',
  },
  {
    question: '伝言',
    answer: 'dengon',
    explantion: '\n      汉字: 伝言\n      读音: でんごん\n      意思: verbal message\n      来源:  rumor\n      同义词: 伝言\n    ',
  },
  {
    question: '等',
    answer: 'tou',
    explantion: '\n      汉字: 等\n      读音: とう\n      意思: et cetera\n      来源:  etc.\n      同义词: 等\n    ',
  },
  {
    question: '銅',
    answer: 'akagane',
    explantion: '\n      汉字: 銅\n      读音: あかがね\n      意思: copper\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '鈍る',
    answer: 'namaru',
    explantion: '\n      汉字: 鈍る\n      读音: なまる\n      意思: to become less capable\n      来源:  to grow dull\n      同义词: 鈍る, 鈍る\n    ',
  },
  {
    question: '難い',
    answer: 'katai',
    explantion: '\n      汉字: 難い\n      读音: かたい\n      意思: difficult\n      来源:  hard\n      同义词: 難い\n    ',
  },
  {
    question: '二人',
    answer: 'ninin',
    explantion: '\n      汉字: 二人\n      读音: ににん\n      意思: two persons\n      来源:  two people\n      同义词: 二人\n    ',
  },
  {
    question: '入口',
    answer: 'irikuchi',
    explantion: '\n      汉字: 入口\n      读音: いりくち\n      意思: entrance\n      来源:  gate\n      同义词: 入口\n    ',
  },
  {
    question: '剥ぐ',
    answer: 'hagu',
    explantion: '\n      汉字: 剥ぐ\n      读音: はぐ\n      意思: to tear off\n      来源:  to peel off\n      同义词: 剥ぐ, 剥ぐ, 剝ぐ, 折ぐ\n    ',
  },
  {
    question: '発足',
    answer: 'hassoku',
    explantion: '\n      汉字: 発足\n      读音: はっそく\n      意思: starting\n      来源:  inauguration\n      同义词: 発足, 発足\n    ',
  },
  {
    question: '斑',
    answer: 'buchi',
    explantion: '\n      汉字: 斑\n      读音: ぶち\n      意思: spots\n      来源:  speckles\n      同义词: 斑, , , 斑, , 斑, , 斑, 駁, 駁, 駮, 駮\n    ',
  },
  {
    question: '否',
    answer: 'ie',
    explantion: '\n      汉字: 否\n      读音: いいえ\n      意思: no\n      来源:  nay\n      同义词: 否\n    ',
  },
  {
    question: '匹',
    answer: 'hiki',
    explantion: '\n      汉字: 匹\n      读音: ひき\n      意思: head\n      来源:  small animal counter\n      同义词: 匹, 匹, 疋, 疋\n    ',
  },
  {
    question: '付き',
    answer: 'tsuki',
    explantion: '\n      汉字: 付き\n      读音: つき\n      意思: attached to\n      来源:  impression\n      同义词: 付き, , 付き, , 付, 付, \n    ',
  },
  {
    question: '風車',
    answer: 'kazaguruma',
    explantion: '\n      汉字: 風車\n      读音: かざぐるま\n      意思: 1. windmill\n      来源:  2. pinwheel\n      同义词: 風車, 風車, , \n    ',
  },
  {
    question: '文書',
    answer: 'bunsho',
    explantion: '\n      汉字: 文書\n      读音: ぶんしょ\n      意思: document\n      来源:  writing\n      同义词: 文書, 文書, 文書\n    ',
  },
  {
    question: '墓地',
    answer: 'wakachi',
    explantion: '\n      汉字: 墓地\n      读音: はかち\n      意思: cemetery\n      来源:  graveyard\n      同义词: 墓地, 墓地\n    ',
  },
  {
    question: '奉る',
    answer: 'tatematsuru',
    explantion: '\n      汉字: 奉る\n      读音: たてまつる\n      意思: to offer\n      来源:  to present\n      同义词: 奉る, 奉る, 献る\n    ',
  },
  {
    question: '乏しい',
    answer: 'toboshii',
    explantion: '\n      汉字: 乏しい\n      读音: とぼしい\n      意思: meagre\n      来源:  scarce\n      同义词: 乏しい, 乏しい\n    ',
  },
  {
    question: '本文',
    answer: 'honbun',
    explantion: '\n      汉字: 本文\n      读音: ほんぶん\n      意思: text (of document)\n      来源:  body (of letter)\n      同义词: 本文, 本文\n    ',
  },
  {
    question: '埋まる',
    answer: 'uzumaru',
    explantion: '\n      汉字: 埋まる\n      读音: うずまる\n      意思: to be buried\n      来源:  to be surrounded\n      同义词: 埋まる, 埋まる\n    ',
  },
  {
    question: '万人',
    answer: 'banjin',
    explantion: '\n      汉字: 万人\n      读音: ばんじん\n      意思: all people\n      来源:  everybody\n      同义词: 万人, 万人, 万人\n    ',
  },
  {
    question: '万能',
    answer: 'banno',
    explantion: '\n      汉字: 万能\n      读音: ばんのう\n      意思: all-purpose\n      来源:  almighty\n      同义词: 万能, 万能\n    ',
  },
  {
    question: '明後日',
    answer: 'asatte',
    explantion: '\n      汉字: 明後日\n      读音: あさって\n      意思: day after tomorrow\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '免れる',
    answer: 'manukareru',
    explantion: '\n      汉字: 免れる\n      读音: まぬかれる\n      意思: to escape from\n      来源:  to be rescued from\n      同义词: 免れる, 免れる\n    ',
  },
  {
    question: '面',
    answer: 'omo',
    explantion: '\n      汉字: 面\n      读音: おも\n      意思: face\n      来源: waller\n      同义词: 面, 面, 面\n    ',
  },
  {
    question: '問屋',
    answer: 'toiya',
    explantion: '\n      汉字: 問屋\n      读音: といや\n      意思: wholesale store\n      来源: waller\n      同义词: 問屋\n    ',
  },
  {
    question: '門',
    answer: 'kado',
    explantion: '\n      汉字: 門\n      读音: かど\n      意思: gate\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '夜行',
    answer: 'yagyou',
    explantion: '\n      汉字: 夜行\n      读音: やぎょう\n      意思: walking around at night\n      来源:  night train\n      同义词: 夜行\n    ',
  },
  {
    question: '夜中',
    answer: 'yachiyuu',
    explantion: '\n      汉字: 夜中\n      读音: やちゅう\n      意思: all night\n      来源:  the whole night\n      同义词: 夜中\n    ',
  },
  {
    question: '融通',
    answer: 'yuzu',
    explantion: '\n      汉字: 融通\n      读音: ゆうずう\n      意思: lending (money)\n      来源:  accommodation\n      同义词: 融通, 融通, 融通\n    ',
  },
  {
    question: '余り',
    answer: 'ammari',
    explantion: '\n      汉字: 余り\n      读音: あんまり\n      意思: not very (this form only used as adverb)\n      来源:  not much\n      同义词: 余り\n    ',
  },
  {
    question: '捻子',
    answer: 'neji',
    explantion: '\n      汉字: 捻子\n      读音: ねじ\n      意思: screw\n      来源:  helix\n      同义词: 捻子\n    ',
  },
  {
    question: '来場',
    answer: 'raijiyou',
    explantion: '\n      汉字: 来場\n      读音: らいじょう\n      意思: attendance\n      来源: waller\n      同义词: 来場\n    ',
  },
  {
    question: '雷',
    answer: 'ikazuchi',
    explantion: '\n      汉字: 雷\n      读音: いかずち\n      意思: thunder\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '落ち葉',
    answer: 'ochiba',
    explantion: '\n      汉字: 落ち葉\n      读音: おちば\n      意思: fallen leaves\n      来源:  leaf litter\n      同义词: 落ち葉, 落葉, 落葉\n    ',
  },
  {
    question: '六',
    answer: 'mu',
    explantion: '\n      汉字: 六\n      读音: む\n      意思: (num) six\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '歪む',
    answer: 'igamu',
    explantion: '\n      汉字: 歪む\n      读音: いがむ\n      意思: to warp\n      来源:  to swerve\n      同义词: 歪む, 歪む\n    ',
  },
  {
    question: '伜',
    answer: 'segare',
    explantion: '\n      汉字: 伜\n      读音: せがれ\n      意思: son\n      来源:  my son\n      同义词: 伜, 倅, 悴\n    ',
  },
  {
    question: '偖',
    answer: 'sate',
    explantion: '\n      汉字: 偖\n      读音: さて\n      意思: well\n      来源:  now\n      同义词: 偖\n    ',
  },
  {
    question: '吝嗇',
    answer: 'kechi',
    explantion: '\n      汉字: 吝嗇\n      读音: けち\n      意思: stinginess\n      来源:  miser\n      同义词: 吝嗇, 吝嗇, 悋嗇, 悋嗇\n    ',
  },
  {
    question: '瞑る',
    answer: 'tsuburu',
    explantion: '\n      汉字: 瞑る\n      读音: つぶる\n      意思: to close the eyes\n      来源: waller\n      同义词: , , 瞑る, 暝る, 暝る\n    ',
  },
  {
    question: '当てはめる',
    answer: 'atehameru',
    explantion: '\n      汉字: 当てはめる\n      读音: あてはめる\n      意思: to apply\n      来源:  to adapt\n      同义词: 当てはめる\n    ',
  },
  {
    question: '凡ゆる',
    answer: 'arayuru',
    explantion: '\n      汉字: 凡ゆる\n      读音: あらゆる\n      意思: all\n      来源:  every\n      同义词: 凡ゆる\n    ',
  },
  {
    question: '有難う',
    answer: 'arigato',
    explantion: '\n      汉字: 有難う\n      读音: ありがとう\n      意思: Thank you\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '或る',
    answer: 'aru',
    explantion: '\n      汉字: 或る\n      读音: ある\n      意思: a certain...\n      来源:  some...\n      同义词: 或る\n    ',
  },
  {
    question: '或いは',
    answer: 'aruiwa',
    explantion: '\n      汉字: 或いは\n      读音: あるいは\n      意思: or\n      来源:  possibly\n      同义词: 或いは\n    ',
  },
  {
    question: '言い訳',
    answer: 'iwake',
    explantion: '\n      汉字: 言い訳\n      读音: いいわけ\n      意思: excuse\n      来源:  explanation\n      同义词: 言い訳, 言いわけ, 言訳, 言い分け, 言分け\n    ',
  },
  {
    question: '生かす',
    answer: 'ikasu',
    explantion: '\n      汉字: 生かす\n      读音: いかす\n      意思: to revive\n      来源:  to resuscitate\n      同义词: 生かす, 活かす\n    ',
  },
  {
    question: '軍',
    answer: 'ikusa',
    explantion: '\n      汉字: 軍\n      读音: いくさ\n      意思: war\n      来源:  battle\n      同义词: 軍, 兵, 戦\n    ',
  },
  {
    question: '育成',
    answer: 'ikusei',
    explantion: '\n      汉字: 育成\n      读音: いくせい\n      意思: rearing\n      来源:  training\n      同义词: 育成, 育生\n    ',
  },
  {
    question: '活ける',
    answer: 'ikeru',
    explantion: '\n      汉字: 活ける\n      读音: いける\n      意思: to arrange (flowers)\n      来源: waller\n      同义词: 生ける\n    ',
  },
  {
    question: '意向',
    answer: 'iko',
    explantion: '\n      汉字: 意向\n      读音: いこう\n      意思: intention\n      来源:  idea\n      同义词: 意向, 意嚮\n    ',
  },
  {
    question: '位地',
    answer: 'ichi',
    explantion: '\n      汉字: 位地\n      读音: いち\n      意思: place\n      来源:  situation\n      同义词: 位地\n    ',
  },
  {
    question: '一々',
    answer: 'ichiichi',
    explantion: '\n      汉字: 一々\n      读音: いちいち\n      意思: one by one\n      来源:  separately\n      同义词: 一々\n    ',
  },
  {
    question: '厭々',
    answer: 'iyaiya',
    explantion: '\n      汉字: 厭々\n      读音: いやいや\n      意思: unwillingly\n      来源:  grudgingly\n      同义词: 厭々, , 嫌々, 嫌嫌, 厭厭\n    ',
  },
  {
    question: '愈々',
    answer: 'iyoiyo',
    explantion: '\n      汉字: 愈々\n      读音: いよいよ\n      意思: more and more\n      来源:  all the more\n      同义词: 愈々\n    ',
  },
  {
    question: '意欲',
    answer: 'iyoku',
    explantion: '\n      汉字: 意欲\n      读音: いよく\n      意思: will\n      来源:  desire\n      同义词: 意欲, 意慾\n    ',
  },
  {
    question: '苛々',
    answer: 'iraira',
    explantion: '\n      汉字: 苛々\n      读音: いらいら\n      意思: getting nervous\n      来源:  irritation\n      同义词: 苛々\n    ',
  },
  {
    question: '威力',
    answer: 'iriyoku',
    explantion: '\n      汉字: 威力\n      读音: いりょく\n      意思: power\n      来源:  might\n      同义词: 威力, 偉力\n    ',
  },
  {
    question: '色々',
    answer: 'iroiro',
    explantion: '\n      汉字: 色々\n      读音: いろいろ\n      意思: various\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '打ち合わせ',
    answer: 'uchiawase',
    explantion: '\n      汉字: 打ち合わせ\n      读音: うちあわせ\n      意思: business meeting\n      来源:  previous arrangement\n      同义词: 打ち合わせ\n    ',
  },
  {
    question: '打ち合わせる',
    answer: 'uchiawaseru',
    explantion: '\n      汉字: 打ち合わせる\n      读音: うちあわせる\n      意思: to knock together\n      来源:  to arrange\n      同义词: 打ち合わせる, 打ち合せる, 打合せる, 打合わせる\n    ',
  },
  {
    question: '打ち消し',
    answer: 'uchikeshi',
    explantion: '\n      汉字: 打ち消し\n      读音: うちけし\n      意思: negation\n      来源:  denial\n      同义词: 打ち消し, 打消し, 打消\n    ',
  },
  {
    question: '空ろ',
    answer: 'utsuro',
    explantion: '\n      汉字: 空ろ\n      读音: うつろ\n      意思: blank\n      来源:  cavity\n      同义词: 空ろ, 虚ろ, 洞ろ, 洞\n    ',
  },
  {
    question: '産む',
    answer: 'umu',
    explantion: '\n      汉字: 産む\n      读音: うむ\n      意思: to give birth\n      来源:  to deliver\n      同义词: 産む, 生む\n    ',
  },
  {
    question: '売り出し',
    answer: 'uridashi',
    explantion: '\n      汉字: 売り出し\n      读音: うりだし\n      意思: (bargain) sale\n      来源: waller\n      同义词: 売出し, 売出\n    ',
  },
  {
    question: '売れ行き',
    answer: 'ureyuki',
    explantion: '\n      汉字: 売れ行き\n      读音: うれゆき\n      意思: sales\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '運送',
    answer: 'unso',
    explantion: '\n      汉字: 運送\n      读音: うんそう\n      意思: shipping\n      来源:  marine transportation\n      同义词: 運送, 運漕\n    ',
  },
  {
    question: '云々',
    answer: 'unnun',
    explantion: '\n      汉字: 云々\n      读音: うんぬん\n      意思: and so on\n      来源:  and so forth\n      同义词: 云々, 云云\n    ',
  },
  {
    question: '襟',
    answer: 'eri',
    explantion: '\n      汉字: 襟\n      读音: えり\n      意思: neck\n      来源:  collar\n      同义词: 襟, 衿, 領\n    ',
  },
  {
    question: '大げさ',
    answer: 'ogesa',
    explantion: '\n      汉字: 大げさ\n      读音: おおげさ\n      意思: grandiose\n      来源:  exaggerated\n      同义词: 大げさ, 大袈裟\n    ',
  },
  {
    question: 'お菜',
    answer: 'okazu',
    explantion: '\n      汉字: お菜\n      读音: おかず\n      意思: side dish\n      来源:  accompaniment for rice dishes\n      同义词: お菜\n    ',
  },
  {
    question: '行い',
    answer: 'okonai',
    explantion: '\n      汉字: 行い\n      读音: おこない\n      意思: deed\n      来源:  conduct\n      同义词: 行い, 行ない\n    ',
  },
  {
    question: '押さえる',
    answer: 'osaeru',
    explantion: '\n      汉字: 押さえる\n      读音: おさえる\n      意思: to stop\n      来源:  to restrain\n      同义词: 押さえる\n    ',
  },
  {
    question: '雄',
    answer: 'osu',
    explantion: '\n      汉字: 雄\n      读音: おす\n      意思: male (animal)\n      来源: waller\n      同义词: , , 雄, 牡, 牡, \n    ',
  },
  {
    question: '落とす',
    answer: 'otosu',
    explantion: '\n      汉字: 落とす\n      读音: おとす\n      意思: to drop\n      来源:  to lose\n      同义词: 落とす\n    ',
  },
  {
    question: '重なる',
    answer: 'omonaru',
    explantion: '\n      汉字: 重なる\n      读音: おもなる\n      意思: main\n      来源:  principal\n      同义词: 重なる, 主なる\n    ',
  },
  {
    question: 'お八',
    answer: 'oyatsu',
    explantion: '\n      汉字: お八\n      读音: おやつ\n      意思: 1. (uk) between meal snack\n      来源:  afternoon refreshment\n      同义词: お八\n    ',
  },
  {
    question: '終わる',
    answer: 'owaru',
    explantion: '\n      汉字: 終わる\n      读音: おわる\n      意思: to finish\n      来源:  to close\n      同义词: 終わる\n    ',
  },
  {
    question: '温和',
    answer: 'onwa',
    explantion: '\n      汉字: 温和\n      读音: おんわ\n      意思: gentle\n      来源:  mild\n      同义词: 温和, 穏和\n    ',
  },
  {
    question: '係り',
    answer: 'kakari',
    explantion: '\n      汉字: 係り\n      读音: かかり\n      意思: official\n      来源:  duty\n      同义词: 係り\n    ',
  },
  {
    question: '書き取り',
    answer: 'kakitori',
    explantion: '\n      汉字: 書き取り\n      读音: かきとり\n      意思: dictation\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '賭け',
    answer: 'kake',
    explantion: '\n      汉字: 賭け\n      读音: かけ\n      意思: betting\n      来源:  gambling\n      同义词: 賭け, 賭\n    ',
  },
  {
    question: '箇所',
    answer: 'kasho',
    explantion: '\n      汉字: 箇所\n      读音: かしょ\n      意思: passage\n      来源:  place\n      同义词: 箇所\n    ',
  },
  {
    question: '箇条書き',
    answer: 'kajiyougaki',
    explantion: '\n      汉字: 箇条書き\n      读音: かじょうがき\n      意思: itemized form\n      来源:  itemization\n      同义词: 箇条書き, 個条書き, 箇条書\n    ',
  },
  {
    question: '微か',
    answer: 'kasuka',
    explantion: '\n      汉字: 微か\n      读音: かすか\n      意思: faint\n      来源:  dim\n      同义词: 微か, , 幽か\n    ',
  },
  {
    question: '片思い',
    answer: 'kataomoi',
    explantion: '\n      汉字: 片思い\n      读音: かたおもい\n      意思: unrequited love\n      来源: waller\n      同义词: 片想い\n    ',
  },
  {
    question: '偏る',
    answer: 'katayoru',
    explantion: '\n      汉字: 偏る\n      读音: かたよる\n      意思: to be one-sided\n      来源:  to incline\n      同义词: 偏る\n    ',
  },
  {
    question: '傍ら',
    answer: 'katawara',
    explantion: '\n      汉字: 傍ら\n      读音: かたわら\n      意思: beside(s)\n      来源:  while\n      同义词: 傍ら, , 側ら, 傍, 旁, 側, 脇\n    ',
  },
  {
    question: '花壇',
    answer: 'kadan',
    explantion: '\n      汉字: 花壇\n      读音: かだん\n      意思: flower bed\n      来源: waller\n      同义词: 花だん\n    ',
  },
  {
    question: '可成',
    answer: 'kanari',
    explantion: '\n      汉字: 可成\n      读音: かなり\n      意思: considerably\n      来源:  fairly\n      同义词: 可成\n    ',
  },
  {
    question: '加留多',
    answer: 'karuta',
    explantion: '\n      汉字: 加留多\n      读音: かるた\n      意思: (pt:) (n) playing cards (pt: carta)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '可哀想',
    answer: 'kawaiso',
    explantion: '\n      汉字: 可哀想\n      读音: かわいそう\n      意思: poor\n      来源:  pitiable\n      同义词: 可哀想\n    ',
  },
  {
    question: '交わす',
    answer: 'kawasu',
    explantion: '\n      汉字: 交わす\n      读音: かわす\n      意思: to exchange (messages)\n      来源:  to dodge\n      同义词: 交わす, 交す\n    ',
  },
  {
    question: '代わる',
    answer: 'kawaru',
    explantion: '\n      汉字: 代わる\n      读音: かわる\n      意思: to take the place of\n      来源:  to relieve\n      同义词: 代わる\n    ',
  },
  {
    question: '代わる代わる',
    answer: 'kawarugawaru',
    explantion: '\n      汉字: 代わる代わる\n      读音: かわるがわる\n      意思: alternately\n      来源: waller\n      同义词: 代る代る\n    ',
  },
  {
    question: '肝心',
    answer: 'kanjin',
    explantion: '\n      汉字: 肝心\n      读音: かんじん\n      意思: essential\n      来源:  fundamental\n      同义词: 肝心, 肝腎\n    ',
  },
  {
    question: '完璧',
    answer: 'kanpeki',
    explantion: '\n      汉字: 完璧\n      读音: かんぺき\n      意思: perfection\n      来源:  completeness\n      同义词: 完璧, 完ぺき, 完壁, 完壁\n    ',
  },
  {
    question: '効き目',
    answer: 'kikime',
    explantion: '\n      汉字: 効き目\n      读音: ききめ\n      意思: effect\n      来源:  virtue\n      同义词: 効き目, 利き目, きき眼, 効目, 利目\n    ',
  },
  {
    question: '起源',
    answer: 'kigen',
    explantion: '\n      汉字: 起源\n      读音: きげん\n      意思: origin\n      来源:  beginning\n      同义词: 起源, 起原\n    ',
  },
  {
    question: '兆し',
    answer: 'kizashi',
    explantion: '\n      汉字: 兆し\n      读音: きざし\n      意思: signs\n      来源:  omen\n      同义词: 兆し, 萌し\n    ',
  },
  {
    question: '傷付く',
    answer: 'kizutsuku',
    explantion: '\n      汉字: 傷付く\n      读音: きずつく\n      意思: to be hurt\n      来源:  to be wounded\n      同义词: 傷付く, 傷つく, 疵つく, 疵付く\n    ',
  },
  {
    question: '来る',
    answer: 'kitaru',
    explantion: '\n      汉字: 来る\n      读音: きたる\n      意思: to come\n      来源:  to arrive\n      同义词: 来る, 来たる\n    ',
  },
  {
    question: '切っ掛け',
    answer: 'kikkake',
    explantion: '\n      汉字: 切っ掛け\n      读音: きっかけ\n      意思: chance\n      来源:  start\n      同义词: 切っ掛け\n    ',
  },
  {
    question: '規範',
    answer: 'kihan',
    explantion: '\n      汉字: 規範\n      读音: きはん\n      意思: model\n      来源:  standard\n      同义词: 規範, 軌範\n    ',
  },
  {
    question: '気まぐれ',
    answer: 'kimagure',
    explantion: '\n      汉字: 気まぐれ\n      读音: きまぐれ\n      意思: whim\n      来源:  caprice\n      同义词: 気まぐれ, 気紛れ\n    ',
  },
  {
    question: '決まる',
    answer: 'kimaru',
    explantion: '\n      汉字: 決まる\n      读音: きまる\n      意思: to be decided\n      来源:  to be settled\n      同义词: 決まる\n    ',
  },
  {
    question: '切り替える',
    answer: 'kirikaeru',
    explantion: '\n      汉字: 切り替える\n      读音: きりかえる\n      意思: to change\n      来源:  to exchange\n      同义词: 切り替える, 切替える, 切り換える, 切りかえる, 切換える, 切り変える\n    ',
  },
  {
    question: '奇麗',
    answer: 'kirei',
    explantion: '\n      汉字: 奇麗\n      读音: きれい\n      意思: pretty\n      来源:  clean\n      同义词: 奇麗\n    ',
  },
  {
    question: '切れ目',
    answer: 'kireme',
    explantion: '\n      汉字: 切れ目\n      读音: きれめ\n      意思: break\n      来源:  pause\n      同义词: 切れ目\n    ',
  },
  {
    question: '僅々',
    answer: 'kinkin',
    explantion: '\n      汉字: 僅々\n      读音: きんきん\n      意思: a little\n      来源:  small quantity\n      同义词: 僅々, 僅僅\n    ',
  },
  {
    question: '区画',
    answer: 'kukaku',
    explantion: '\n      汉字: 区画\n      读音: くかく\n      意思: division\n      来源:  section\n      同义词: 区画, 区劃, 區劃\n    ',
  },
  {
    question: '組み合わせ',
    answer: 'kumiawase',
    explantion: '\n      汉字: 組み合わせ\n      读音: くみあわせ\n      意思: combination\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '蔵',
    answer: 'kura',
    explantion: '\n      汉字: 蔵\n      读音: くら\n      意思: warehouse\n      来源:  cellar\n      同义词: 蔵, 倉, 庫\n    ',
  },
  {
    question: '群集',
    answer: 'gunshuu',
    explantion: '\n      汉字: 群集\n      读音: ぐんしゅう\n      意思: (social) group\n      来源:  crowd\n      同义词: 群集, 群聚\n    ',
  },
  {
    question: '元素',
    answer: 'genso',
    explantion: '\n      汉字: 元素\n      读音: げんそ\n      意思: chemical element\n      来源: waller\n      同义词: 原素\n    ',
  },
  {
    question: '小売',
    answer: 'kori',
    explantion: '\n      汉字: 小売\n      读音: こうり\n      意思: retail\n      来源: waller\n      同义词: 小売り\n    ',
  },
  {
    question: '個々',
    answer: 'koko',
    explantion: '\n      汉字: 個々\n      读音: ここ\n      意思: individual\n      来源:  one by one\n      同义词: 個々, 個個, 箇々, 箇箇\n    ',
  },
  {
    question: '粉々',
    answer: 'konagona',
    explantion: '\n      汉字: 粉々\n      读音: こなごな\n      意思: in very small pieces\n      来源: waller\n      同义词: 粉粉\n    ',
  },
  {
    question: '篭る',
    answer: 'komoru',
    explantion: '\n      汉字: 篭る\n      读音: こもる\n      意思: to seclude oneself\n      来源:  to be confined in\n      同义词: 篭る, , 籠もる, 篭もる, 籠る, 隠る\n    ',
  },
  {
    question: 'ご馳走',
    answer: 'gochiso',
    explantion: '\n      汉字: ご馳走\n      读音: ごちそう\n      意思: feast\n      来源:  treating (someone)\n      同义词: ご馳走\n    ',
  },
  {
    question: '些事',
    answer: 'saji',
    explantion: '\n      汉字: 些事\n      读音: さじ\n      意思: something small or petty\n      来源:  trifle\n      同义词: 些事, 瑣事\n    ',
  },
  {
    question: '錆び',
    answer: 'sabi',
    explantion: '\n      汉字: 錆び\n      读音: さび\n      意思: rust (colour)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '拐う',
    answer: 'sarau',
    explantion: '\n      汉字: 拐う\n      读音: さらう\n      意思: to carry off\n      来源:  to run away with\n      同义词: 拐う, , 攫う, 掠う\n    ',
  },
  {
    question: '仕上げ',
    answer: 'shiage',
    explantion: '\n      汉字: 仕上げ\n      读音: しあげ\n      意思: end\n      来源:  finishing touches\n      同义词: 仕上げ, 仕上\n    ',
  },
  {
    question: '明々後日',
    answer: 'shiasatte',
    explantion: '\n      汉字: 明々後日\n      读音: しあさって\n      意思: two days after tomorrow\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '仕掛け',
    answer: 'shikake',
    explantion: '\n      汉字: 仕掛け\n      读音: しかけ\n      意思: device\n      来源:  trick\n      同义词: 仕掛け, 仕掛\n    ',
  },
  {
    question: '為来り',
    answer: 'shikitari',
    explantion: '\n      汉字: 為来り\n      读音: しきたり\n      意思: customs\n      来源: waller\n      同义词: , 仕来り, 仕来たり, 為来たり\n    ',
  },
  {
    question: '仕組み',
    answer: 'shikumi',
    explantion: '\n      汉字: 仕組み\n      读音: しくみ\n      意思: devising\n      来源:  plan\n      同义词: 仕組み, 仕組\n    ',
  },
  {
    question: '確り',
    answer: 'shikkari',
    explantion: '\n      汉字: 確り\n      读音: しっかり\n      意思: firmly\n      来源:  tightly\n      同义词: 確り\n    ',
  },
  {
    question: '仕舞',
    answer: 'shimai',
    explantion: '\n      汉字: 仕舞\n      读音: しまい\n      意思: end\n      来源:  termination\n      同义词: 仕舞\n    ',
  },
  {
    question: '締め切り',
    answer: 'shimekiri',
    explantion: '\n      汉字: 締め切り\n      读音: しめきり\n      意思: closing\n      来源:  cut-off\n      同义词: 締め切り\n    ',
  },
  {
    question: '収集',
    answer: 'shushu',
    explantion: '\n      汉字: 収集\n      读音: しゅうしゅう\n      意思: gathering up\n      来源:  collection\n      同义词: 収集, 蒐集, 拾集, 蒐輯\n    ',
  },
  {
    question: '執着',
    answer: 'shujaku',
    explantion: '\n      汉字: 執着\n      读音: しゅうじゃく\n      意思: attachment\n      来源:  adhesion\n      同义词: 執着, 執着, 執著, 執著\n    ',
  },
  {
    question: '種々',
    answer: 'kusagusa',
    explantion: '\n      汉字: 種々\n      读音: くさぐさ\n      意思: variety\n      来源: waller\n      同义词: 種々, 種種, 種種\n    ',
  },
  {
    question: '知り合い',
    answer: 'shiriai',
    explantion: '\n      汉字: 知り合い\n      读音: しりあい\n      意思: acquaintance\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '退く',
    answer: 'shirizoku',
    explantion: '\n      汉字: 退く\n      读音: しりぞく\n      意思: to retreat\n      来源:  to recede\n      同义词: 退く, 退く, 斥く, 斥く\n    ',
  },
  {
    question: '侵略',
    answer: 'shinryaku',
    explantion: '\n      汉字: 侵略\n      读音: しんりゃく\n      意思: aggression\n      来源:  invasion\n      同义词: 侵略, 侵掠\n    ',
  },
  {
    question: '実情',
    answer: 'jitsujo',
    explantion: '\n      汉字: 実情\n      读音: じつじょう\n      意思: real condition\n      来源:  actual circumstances\n      同义词: 実情, 実状\n    ',
  },
  {
    question: '清々しい',
    answer: 'sugasugashii',
    explantion: '\n      汉字: 清々しい\n      读音: すがすがしい\n      意思: fresh\n      来源:  refreshing\n      同义词: 清々しい, 清清しい\n    ',
  },
  {
    question: '少なくとも',
    answer: 'sukunakutomo',
    explantion: '\n      汉字: 少なくとも\n      读音: すくなくとも\n      意思: at least\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'すれ違う',
    answer: 'surechigau',
    explantion: '\n      汉字: すれ違う\n      读音: すれちがう\n      意思: to pass by one another\n      来源:  to disagree\n      同义词: すれ違う\n    ',
  },
  {
    question: '擦れる',
    answer: 'sureru',
    explantion: '\n      汉字: 擦れる\n      读音: すれる\n      意思: to rub\n      来源:  to chafe\n      同义词: 擦れる, 磨れる, 摩れる, 擂れる\n    ',
  },
  {
    question: '図々しい',
    answer: 'zuzushii',
    explantion: '\n      汉字: 図々しい\n      读音: ずうずうしい\n      意思: impudent\n      来源:  shameless\n      同义词: 図々しい\n    ',
  },
  {
    question: '先先月',
    answer: 'sensengetsu',
    explantion: '\n      汉字: 先先月\n      读音: せんせんげつ\n      意思: month before last\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '専用',
    answer: 'senyo',
    explantion: '\n      汉字: 専用\n      读音: せんよう\n      意思: exclusive use\n      来源:  personal use\n      同义词: 専用\n    ',
  },
  {
    question: '総合',
    answer: 'sogou',
    explantion: '\n      汉字: 総合\n      读音: そうごう\n      意思: synthesis\n      来源:  coordination\n      同义词: 総合, 綜合\n    ',
  },
  {
    question: '添える',
    answer: 'soeru',
    explantion: '\n      汉字: 添える\n      读音: そえる\n      意思: to add to\n      来源:  to attach\n      同义词: 添える, 副える\n    ',
  },
  {
    question: '損なう',
    answer: 'sokonau',
    explantion: '\n      汉字: 損なう\n      读音: そこなう\n      意思: to harm\n      来源:  to hurt\n      同义词: 損なう, 害う, 損う\n    ',
  },
  {
    question: '素っ気ない',
    answer: 'sokkenai',
    explantion: '\n      汉字: 素っ気ない\n      读音: そっけない\n      意思: cold\n      来源:  short\n      同义词: 素っ気ない, , 素っ気無い, 素気ない, 素気無い\n    ',
  },
  {
    question: '率直',
    answer: 'sotsuchoku',
    explantion: '\n      汉字: 率直\n      读音: そっちょく\n      意思: frankness\n      来源:  candour\n      同义词: 率直\n    ',
  },
  {
    question: '備わる',
    answer: 'sonawaru',
    explantion: '\n      汉字: 備わる\n      读音: そなわる\n      意思: to be furnished with\n      来源:  to be endowed with\n      同义词: 備わる, 具わる\n    ',
  },
  {
    question: '類',
    answer: 'tagui',
    explantion: '\n      汉字: 類\n      读音: たぐい\n      意思: a kind\n      来源: waller\n      同义词: , 類い, 比い, 比\n    ',
  },
  {
    question: '絶つ',
    answer: 'tatsu',
    explantion: '\n      汉字: 絶つ\n      读音: たつ\n      意思: to sever\n      来源:  to cut off\n      同义词: 絶つ, 断つ, 斷つ\n    ',
  },
  {
    question: '建前',
    answer: 'tatemae',
    explantion: '\n      汉字: 建前\n      读音: たてまえ\n      意思: face\n      来源:  official stance\n      同义词: 建前, 建て前, 立前, 立て前\n    ',
  },
  {
    question: '仮令',
    answer: 'tatoe',
    explantion: '\n      汉字: 仮令\n      读音: たとえ\n      意思: example\n      来源:  even if\n      同义词: 仮令, , , 仮令, 縦え, 縦令, 縦令\n    ',
  },
  {
    question: '煙草',
    answer: 'tabako',
    explantion: '\n      汉字: 煙草\n      读音: たばこ\n      意思: (pt:) (n) (uk) tobacco (pt: tabaco)\n      来源:  cigarettes\n      同义词: 煙草\n    ',
  },
  {
    question: '度々',
    answer: 'tabitabi',
    explantion: '\n      汉字: 度々\n      读音: たびたび\n      意思: often\n      来源:  repeatedly\n      同义词: 度々\n    ',
  },
  {
    question: '探検',
    answer: 'tanken',
    explantion: '\n      汉字: 探検\n      读音: たんけん\n      意思: exploration\n      来源:  expedition\n      同义词: 探検, 探険\n    ',
  },
  {
    question: '段々',
    answer: 'dandan',
    explantion: '\n      汉字: 段々\n      读音: だんだん\n      意思: gradually\n      来源:  by degrees\n      同义词: 段々, , 段段\n    ',
  },
  {
    question: '着',
    answer: 'chaku',
    explantion: '\n      汉字: 着\n      读音: ちゃく\n      意思: counter for suits of clothing\n      来源:  arriving at ..\n      同义词: 着\n    ',
  },
  {
    question: '丁々',
    answer: 'toto',
    explantion: '\n      汉字: 丁々\n      读音: とうとう\n      意思: clashing of swords\n      来源:  felling of trees\n      同义词: 丁々, 丁々, 丁丁, 丁丁\n    ',
  },
  {
    question: '貯蓄',
    answer: 'chochiku',
    explantion: '\n      汉字: 貯蓄\n      读音: ちょちく\n      意思: savings\n      来源: waller\n      同义词: 儲蓄\n    ',
  },
  {
    question: '付き合う',
    answer: 'tsukiau',
    explantion: '\n      汉字: 付き合う\n      读音: つきあう\n      意思: to associate with\n      来源:  to keep company with\n      同义词: 付き合う\n    ',
  },
  {
    question: '慎む',
    answer: 'tsutsushimu',
    explantion: '\n      汉字: 慎む\n      读音: つつしむ\n      意思: to be careful\n      来源:  to be chaste or discreet\n      同义词: 慎む, 謹む, 虔む\n    ',
  },
  {
    question: '摘む',
    answer: 'tsumamu',
    explantion: '\n      汉字: 摘む\n      读音: つまむ\n      意思: to pinch\n      来源:  to hold\n      同义词: 摘む, , 摘まむ, 撮む, 抓む\n    ',
  },
  {
    question: '手当て',
    answer: 'teate',
    explantion: '\n      汉字: 手当て\n      读音: てあて\n      意思: allowance\n      来源:  compensation\n      同义词: 手当て, 手当\n    ',
  },
  {
    question: '手掛かり',
    answer: 'tegakari',
    explantion: '\n      汉字: 手掛かり\n      读音: てがかり\n      意思: contact\n      来源:  trail\n      同义词: 手掛かり, 手がかり, 手掛り, 手懸かり, 手懸り\n    ',
  },
  {
    question: '徹する',
    answer: 'tessuru',
    explantion: '\n      汉字: 徹する\n      读音: てっする\n      意思: to sink in\n      来源:  to penetrate\n      同义词: 徹する\n    ',
  },
  {
    question: '手引き',
    answer: 'tebiki',
    explantion: '\n      汉字: 手引き\n      读音: てびき\n      意思: guidance\n      来源:  guide\n      同义词: 手引き, 手引\n    ',
  },
  {
    question: '出合う',
    answer: 'deau',
    explantion: '\n      汉字: 出合う\n      读音: であう\n      意思: to meet by chance\n      来源:  to come across\n      同义词: 出合う\n    ',
  },
  {
    question: '出入り口',
    answer: 'deiriguchi',
    explantion: '\n      汉字: 出入り口\n      读音: でいりぐち\n      意思: exit and entrance\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '尊い',
    answer: 'tattoi',
    explantion: '\n      汉字: 尊い\n      读音: たっとい\n      意思: precious\n      来源:  valuable\n      同义词: 尊い, 尊い, 貴い, 貴い\n    ',
  },
  {
    question: '尊ぶ',
    answer: 'tattobu',
    explantion: '\n      汉字: 尊ぶ\n      读音: たっとぶ\n      意思: to value\n      来源:  to prize\n      同义词: 尊ぶ, 貴ぶ, 貴ぶ, 尊ぶ\n    ',
  },
  {
    question: '時折',
    answer: 'tokiori',
    explantion: '\n      汉字: 時折\n      读音: ときおり\n      意思: sometimes\n      来源: waller\n      同义词: 時折, 時おり, 時折り, 時折り\n    ',
  },
  {
    question: '跡切れる',
    answer: 'togireru',
    explantion: '\n      汉字: 跡切れる\n      读音: とぎれる\n      意思: to pause\n      来源:  to be interrupted\n      同义词: 跡切れる, 途切れる\n    ',
  },
  {
    question: '研ぐ',
    answer: 'togu',
    explantion: '\n      汉字: 研ぐ\n      读音: とぐ\n      意思: to sharpen\n      来源:  to grind\n      同义词: 研ぐ, 磨ぐ, 砥ぐ\n    ',
  },
  {
    question: '刺',
    answer: 'toge',
    explantion: '\n      汉字: 刺\n      读音: とげ\n      意思: thorn\n      来源:  splinter\n      同义词: 刺, 棘, \n    ',
  },
  {
    question: '所々',
    answer: 'shosho',
    explantion: '\n      汉字: 所々\n      读音: しょしょ\n      意思: here and there\n      来源:  some parts (of something)\n      同义词: 所々\n    ',
  },
  {
    question: '年寄り',
    answer: 'toshiyori',
    explantion: '\n      汉字: 年寄り\n      读音: としより\n      意思: old people\n      来源:  the aged\n      同义词: 年寄り\n    ',
  },
  {
    question: '取っ手',
    answer: 'totsute',
    explantion: '\n      汉字: 取っ手\n      读音: とって\n      意思: handle\n      来源:  grip\n      同义词: 取っ手, 把手, 把手, 把っ手, 取手\n    ',
  },
  {
    question: '届け',
    answer: 'todoke',
    explantion: '\n      汉字: 届け\n      读音: とどけ\n      意思: report\n      来源:  notification\n      同义词: 届け, 届\n    ',
  },
  {
    question: '留める',
    answer: 'todomeru',
    explantion: '\n      汉字: 留める\n      读音: とどめる\n      意思: to stop\n      来源:  to cease\n      同义词: 留める, 停める, 止める\n    ',
  },
  {
    question: '捕らえる',
    answer: 'toraeru',
    explantion: '\n      汉字: 捕らえる\n      读音: とらえる\n      意思: to seize\n      来源:  to grasp\n      同义词: 捕らえる\n    ',
  },
  {
    question: '取りあえず',
    answer: 'toriaezu',
    explantion: '\n      汉字: 取りあえず\n      读音: とりあえず\n      意思: at once\n      来源:  first of all\n      同义词: 取りあえず, , 取り敢えず, 取敢えず\n    ',
  },
  {
    question: '取り扱い',
    answer: 'toriatsukai',
    explantion: '\n      汉字: 取り扱い\n      读音: とりあつかい\n      意思: treatment\n      来源:  service\n      同义词: 取り扱い, 取扱い, 取り扱, 取扱\n    ',
  },
  {
    question: '取り替え',
    answer: 'torikae',
    explantion: '\n      汉字: 取り替え\n      读音: とりかえ\n      意思: swap\n      来源:  exchange\n      同义词: 取り替え, 取替\n    ',
  },
  {
    question: '取り締まり',
    answer: 'torishimari',
    explantion: '\n      汉字: 取り締まり\n      读音: とりしまり\n      意思: control\n      来源:  management\n      同义词: 取り締まり, 取締まり, 取り締り, 取締り, 取締\n    ',
  },
  {
    question: '取り引き',
    answer: 'torihiki',
    explantion: '\n      汉字: 取り引き\n      读音: とりひき\n      意思: transactions\n      来源:  dealings\n      同义词: 取り引き, 取引, 取引き\n    ',
  },
  {
    question: '取り分け',
    answer: 'toriwake',
    explantion: '\n      汉字: 取り分け\n      读音: とりわけ\n      意思: especially\n      来源:  above all\n      同义词: 取り分け, , 取分け, 取分, 取りわけ\n    ',
  },
  {
    question: '蕩ける',
    answer: 'torokeru',
    explantion: '\n      汉字: 蕩ける\n      读音: とろける\n      意思: to be enchanted with\n      来源: waller\n      同义词: , 盪ける, 溶ろける\n    ',
  },
  {
    question: '堂々',
    answer: 'dodo',
    explantion: '\n      汉字: 堂々\n      读音: どうどう\n      意思: magnificent\n      来源:  grand\n      同义词: 堂々, 堂堂\n    ',
  },
  {
    question: '同盟',
    answer: 'domei',
    explantion: '\n      汉字: 同盟\n      读音: どうめい\n      意思: alliance\n      来源:  union\n      同义词: 同盟\n    ',
  },
  {
    question: '長々',
    answer: 'naganaga',
    explantion: '\n      汉字: 長々\n      读音: ながなが\n      意思: long\n      来源:  drawn-out\n      同义词: 長々, 長長, 永永, 永々\n    ',
  },
  {
    question: '情け深い',
    answer: 'nasakebukai',
    explantion: '\n      汉字: 情け深い\n      读音: なさけぶかい\n      意思: tender-hearted\n      来源:  compassionate\n      同义词: 情け深い, 情深い\n    ',
  },
  {
    question: '何気ない',
    answer: 'nanigenai',
    explantion: '\n      汉字: 何気ない\n      读音: なにげない\n      意思: casual\n      来源:  unconcerned\n      同义词: 何気ない, 何気無い\n    ',
  },
  {
    question: '並み',
    answer: 'nami',
    explantion: '\n      汉字: 並み\n      读音: なみ\n      意思: average\n      来源:  medium\n      同义词: 並み, 並\n    ',
  },
  {
    question: '何となく',
    answer: 'nantonaku',
    explantion: '\n      汉字: 何となく\n      读音: なんとなく\n      意思: somehow or other\n      来源:  for some reason or another\n      同义词: 何となく\n    ',
  },
  {
    question: '担う',
    answer: 'ninau',
    explantion: '\n      汉字: 担う\n      读音: になう\n      意思: to carry on shoulder\n      来源:  to bear (burden)\n      同义词: 担う, 荷う, 荷なう\n    ',
  },
  {
    question: '俄か',
    answer: 'niwaka',
    explantion: '\n      汉字: 俄か\n      读音: にわか\n      意思: sudden\n      来源:  abrupt\n      同义词: 俄か\n    ',
  },
  {
    question: '捻じれる',
    answer: 'nejireru',
    explantion: '\n      汉字: 捻じれる\n      读音: ねじれる\n      意思: to twist\n      来源:  to wrench\n      同义词: 捻じれる, , 捩れる, 捻れる, 拗れる, 捩じれる\n    ',
  },
  {
    question: '値引き',
    answer: 'nebiki',
    explantion: '\n      汉字: 値引き\n      读音: ねびき\n      意思: price reduction\n      来源:  discount\n      同义词: 値引き, 値引\n    ',
  },
  {
    question: '飲み込む',
    answer: 'nomikomu',
    explantion: '\n      汉字: 飲み込む\n      读音: のみこむ\n      意思: to gulp down\n      来源:  to swallow deeply\n      同义词: 飲み込む, 呑み込む, 飲みこむ, 呑みこむ, のみ込む, 飲込む, 呑込む\n    ',
  },
  {
    question: '乗り換え',
    answer: 'norikae',
    explantion: '\n      汉字: 乗り換え\n      读音: のりかえ\n      意思: transfer (trains buses etc.)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '映える',
    answer: 'haeru',
    explantion: '\n      汉字: 映える\n      读音: はえる\n      意思: to shine\n      来源:  to look attractive\n      同义词: 映える, 栄える\n    ',
  },
  {
    question: '果ない',
    answer: 'hakanai',
    explantion: '\n      汉字: 果ない\n      读音: はかない\n      意思: fleeting\n      来源:  transient\n      同义词: 果ない, , 儚い, 果敢ない, 果敢無い, 果無い, 果敢い\n    ',
  },
  {
    question: '図る',
    answer: 'hakaru',
    explantion: '\n      汉字: 図る\n      读音: はかる\n      意思: to plot\n      来源:  to attempt\n      同义词: 図る, 謀る\n    ',
  },
  {
    question: '剥がす',
    answer: 'hagasu',
    explantion: '\n      汉字: 剥がす\n      读音: はがす\n      意思: to tear off\n      来源:  to peel off\n      同义词: 剥がす\n    ',
  },
  {
    question: '果たして',
    answer: 'hatashite',
    explantion: '\n      汉字: 果たして\n      读音: はたして\n      意思: as was expected\n      来源:  really\n      同义词: 果たして\n    ',
  },
  {
    question: '話し合い',
    answer: 'hanashiai',
    explantion: '\n      汉字: 話し合い\n      读音: はなしあい\n      意思: discussion\n      来源:  conference\n      同义词: 話し合い\n    ',
  },
  {
    question: '華々しい',
    answer: 'hanabanashii',
    explantion: '\n      汉字: 華々しい\n      读音: はなばなしい\n      意思: brilliant\n      来源:  magnificent\n      同义词: 華々しい, 花々しい, 花花しい, 華華しい\n    ',
  },
  {
    question: '華やか',
    answer: 'hanayaka',
    explantion: '\n      汉字: 華やか\n      读音: はなやか\n      意思: gay\n      来源:  showy\n      同义词: 華やか, 花やか\n    ',
  },
  {
    question: '填まる',
    answer: 'hamaru',
    explantion: '\n      汉字: 填まる\n      读音: はまる\n      意思: to get into\n      来源:  to go into\n      同义词: 填まる, , 嵌まる, 嵌る, 填る, \n    ',
  },
  {
    question: '歯磨',
    answer: 'wamigaki',
    explantion: '\n      汉字: 歯磨\n      读音: はみがき\n      意思: dentifrice\n      来源:  toothpaste\n      同义词: 歯磨\n    ',
  },
  {
    question: '早める',
    answer: 'wayameru',
    explantion: '\n      汉字: 早める\n      读音: はやめる\n      意思: to hasten\n      来源:  to quicken\n      同义词: 早める, 速める\n    ',
  },
  {
    question: '暴露',
    answer: 'bakuro',
    explantion: '\n      汉字: 暴露\n      读音: ばくろ\n      意思: disclosure\n      来源:  exposure\n      同义词: 暴露, 曝露\n    ',
  },
  {
    question: '散蒔く',
    answer: 'baramaku',
    explantion: '\n      汉字: 散蒔く\n      读音: ばらまく\n      意思: to disseminate\n      来源:  to scatter\n      同义词: 散蒔く, , ばら撒く, ばら蒔く, 散播く\n    ',
  },
  {
    question: '控室',
    answer: 'hikaeshitsu',
    explantion: '\n      汉字: 控室\n      读音: ひかえしつ\n      意思: waiting room\n      来源: waller\n      同义词: 控え室\n    ',
  },
  {
    question: '引き上げる',
    answer: 'hikiageru',
    explantion: '\n      汉字: 引き上げる\n      读音: ひきあげる\n      意思: to withdraw\n      来源:  to leave\n      同义词: 引き上げる, 引上げる, 引き揚げる, 引きあげる, 引揚げる, ひき上げる\n    ',
  },
  {
    question: '引き受ける',
    answer: 'hikiukeru',
    explantion: '\n      汉字: 引き受ける\n      读音: ひきうける\n      意思: to undertake\n      来源:  to take up\n      同义词: 引き受ける\n    ',
  },
  {
    question: '引き下げる',
    answer: 'hikisageru',
    explantion: '\n      汉字: 引き下げる\n      读音: ひきさげる\n      意思: to pull down\n      来源:  to lower\n      同义词: 引き下げる, 引下げる\n    ',
  },
  {
    question: '左利き',
    answer: 'hidarikiki',
    explantion: '\n      汉字: 左利き\n      读音: ひだりきき\n      意思: left-handedness\n      来源:  sake drinker\n      同义词: 左利き, 左利\n    ',
  },
  {
    question: '単',
    answer: 'hitoe',
    explantion: '\n      汉字: 単\n      读音: ひとえ\n      意思: one layer\n      来源:  single\n      同义词: 単, 一重\n    ',
  },
  {
    question: '一まず',
    answer: 'hitomazu',
    explantion: '\n      汉字: 一まず\n      读音: ひとまず\n      意思: for the present\n      来源:  once\n      同义词: 一まず\n    ',
  },
  {
    question: '酷い',
    answer: 'hidoi',
    explantion: '\n      汉字: 酷い\n      读音: ひどい\n      意思: cruel\n      来源:  awful\n      同义词: 酷い\n    ',
  },
  {
    question: '日々',
    answer: 'hibi',
    explantion: '\n      汉字: 日々\n      读音: ひび\n      意思: every day\n      来源:  daily\n      同义词: 日々, 日々, 日日, 日日\n    ',
  },
  {
    question: '百科辞典',
    answer: 'hiyakkajiten',
    explantion: '\n      汉字: 百科辞典\n      读音: ひゃっかじてん\n      意思: encyclopedia\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '日焼け',
    answer: 'hiyake',
    explantion: '\n      汉字: 日焼け\n      读音: ひやけ\n      意思: sunburn\n      来源: waller\n      同义词: 日やけ, 陽焼け, 日焼\n    ',
  },
  {
    question: '膨れる',
    answer: 'fukureru',
    explantion: '\n      汉字: 膨れる\n      读音: ふくれる\n      意思: to get cross\n      来源:  to get sulky\n      同义词: 膨れる, 脹れる\n    ',
  },
  {
    question: '付属',
    answer: 'fuzoku',
    explantion: '\n      汉字: 付属\n      读音: ふぞく\n      意思: attached\n      来源:  belonging\n      同义词: 付属\n    ',
  },
  {
    question: '不便',
    answer: 'fubin',
    explantion: '\n      汉字: 不便\n      读音: ふびん\n      意思: pity\n      来源:  compassion\n      同义词: 不便, 不憫, 不愍\n    ',
  },
  {
    question: '普遍',
    answer: 'fuhen',
    explantion: '\n      汉字: 普遍\n      读音: ふへん\n      意思: universality\n      来源:  ubiquity\n      同义词: 普遍, 普偏, 普辺\n    ',
  },
  {
    question: '振り出し',
    answer: 'furidashi',
    explantion: '\n      汉字: 振り出し\n      读音: ふりだし\n      意思: outset\n      来源:  starting point\n      同义词: 振り出し, 振出し, 振出, 振り出\n    ',
  },
  {
    question: '付録',
    answer: 'furoku',
    explantion: '\n      汉字: 付録\n      读音: ふろく\n      意思: appendix\n      来源:  supplement\n      同义词: 付録, 附録\n    ',
  },
  {
    question: '謙る',
    answer: 'herikudaru',
    explantion: '\n      汉字: 謙る\n      读音: へりくだる\n      意思: to deprecate oneself and praise the listener\n      来源: waller\n      同义词: , 遜る\n    ',
  },
  {
    question: '保障',
    answer: 'hosho',
    explantion: '\n      汉字: 保障\n      读音: ほしょう\n      意思: guarantee\n      来源:  security\n      同义词: 保障\n    ',
  },
  {
    question: '保母',
    answer: 'hobo',
    explantion: '\n      汉字: 保母\n      读音: ほぼ\n      意思: day care worker in a kindergarten nursery school etc.\n      来源: waller\n      同义词: 保姆\n    ',
  },
  {
    question: '滅びる',
    answer: 'horobiru',
    explantion: '\n      汉字: 滅びる\n      读音: ほろびる\n      意思: to be ruined\n      来源:  to go under\n      同义词: 滅びる, 亡びる\n    ',
  },
  {
    question: '滅ぼす',
    answer: 'horobosu',
    explantion: '\n      汉字: 滅ぼす\n      读音: ほろぼす\n      意思: to destroy\n      来源:  to overthrow\n      同义词: 滅ぼす, 亡ぼす, 滅す\n    ',
  },
  {
    question: '坊ちゃん',
    answer: 'botsuchan',
    explantion: '\n      汉字: 坊ちゃん\n      读音: ぼっちゃん\n      意思: son (of others)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '前売り',
    answer: 'maeuri',
    explantion: '\n      汉字: 前売り\n      读音: まえうり\n      意思: advance sale\n      来源:  booking\n      同义词: 前売り, 前売\n    ',
  },
  {
    question: '前もって',
    answer: 'maemotte',
    explantion: '\n      汉字: 前もって\n      读音: まえもって\n      意思: in advance\n      来源:  beforehand\n      同义词: 前もって, 前以て, 前以って\n    ',
  },
  {
    question: '勝る',
    answer: 'masaru',
    explantion: '\n      汉字: 勝る\n      读音: まさる\n      意思: to excel\n      来源:  to surpass\n      同义词: 勝る, 優る\n    ',
  },
  {
    question: '麻酔',
    answer: 'masui',
    explantion: '\n      汉字: 麻酔\n      读音: ますい\n      意思: anaesthesia\n      来源: waller\n      同义词: 痲酔, 麻睡\n    ',
  },
  {
    question: '益々',
    answer: 'masumasu',
    explantion: '\n      汉字: 益々\n      读音: ますます\n      意思: increasingly\n      来源:  more and more\n      同义词: 益々\n    ',
  },
  {
    question: '跨がる',
    answer: 'matagaru',
    explantion: '\n      汉字: 跨がる\n      读音: またがる\n      意思: to extend over or into\n      来源:  to straddle\n      同义词: 跨がる, , 跨る, 股がる\n    ',
  },
  {
    question: '区々',
    answer: 'machimachi',
    explantion: '\n      汉字: 区々\n      读音: まちまち\n      意思: 1. several\n      来源:  various\n      同义词: 区々, , 区区\n    ',
  },
  {
    question: '末期',
    answer: 'matsuki',
    explantion: '\n      汉字: 末期\n      读音: まっき\n      意思: closing years (period days)\n      来源:  last stage\n      同义词: 末期, 末季\n    ',
  },
  {
    question: '麻痺',
    answer: 'mahi',
    explantion: '\n      汉字: 麻痺\n      读音: まひ\n      意思: paralysis\n      来源:  palsy\n      同义词: 麻痺, 痲痺, \n    ',
  },
  {
    question: '間々',
    answer: 'mama',
    explantion: '\n      汉字: 間々\n      读音: まま\n      意思: occasionally\n      来源:  frequently\n      同义词: 間々, 間間\n    ',
  },
  {
    question: '丸々',
    answer: 'marumaru',
    explantion: '\n      汉字: 丸々\n      读音: まるまる\n      意思: completely\n      来源: waller\n      同义词: 丸丸\n    ',
  },
  {
    question: '見掛ける',
    answer: 'mikakeru',
    explantion: '\n      汉字: 見掛ける\n      读音: みかける\n      意思: to (happen to) see\n      来源:  to notice\n      同义词: 見掛ける, 見かける\n    ',
  },
  {
    question: '見込み',
    answer: 'mikomi',
    explantion: '\n      汉字: 見込み\n      读音: みこみ\n      意思: hope\n      来源:  prospects\n      同义词: 見込み, 見込\n    ',
  },
  {
    question: '見積り',
    answer: 'mitsumori',
    explantion: '\n      汉字: 見積り\n      读音: みつもり\n      意思: estimation\n      来源:  quotation\n      同义词: 見積り, 見積もり, 見積\n    ',
  },
  {
    question: '見通し',
    answer: 'mitoshi',
    explantion: '\n      汉字: 見通し\n      读音: みとおし\n      意思: perspective\n      来源:  unobstructed view\n      同义词: 見通し, 見透し, 見通\n    ',
  },
  {
    question: '見逃す',
    answer: 'minogasu',
    explantion: '\n      汉字: 見逃す\n      读音: みのがす\n      意思: to miss\n      来源:  to overlook\n      同义词: 見逃す, 見のがす, 見遁す, 見逃がす\n    ',
  },
  {
    question: '見舞',
    answer: 'mimai',
    explantion: '\n      汉字: 見舞\n      读音: みまい\n      意思: enquiry\n      来源:  expression of sympathy\n      同义词: 見舞\n    ',
  },
  {
    question: '民族',
    answer: 'minzoku',
    explantion: '\n      汉字: 民族\n      读音: みんぞく\n      意思: people\n      来源:  race\n      同义词: 民族\n    ',
  },
  {
    question: '民俗',
    answer: 'minzoku',
    explantion: '\n      汉字: 民俗\n      读音: みんぞく\n      意思: people\n      来源:  race\n      同义词: 民俗\n    ',
  },
  {
    question: '目覚しい',
    answer: 'mezamashii',
    explantion: '\n      汉字: 目覚しい\n      读音: めざましい\n      意思: brilliant\n      来源:  splendid\n      同义词: 目覚しい, 目覚ましい, 目ざましい, 目醒しい\n    ',
  },
  {
    question: '目盛',
    answer: 'memori',
    explantion: '\n      汉字: 目盛\n      读音: めもり\n      意思: scale\n      来源:  gradations\n      同义词: 目盛, 目盛り\n    ',
  },
  {
    question: '申し込み',
    answer: 'moshikomi',
    explantion: '\n      汉字: 申し込み\n      读音: もうしこみ\n      意思: application\n      来源:  entry\n      同义词: 申し込み, 申込み, 申込\n    ',
  },
  {
    question: '物体ない',
    answer: 'mottainai',
    explantion: '\n      汉字: 物体ない\n      读音: もったいない\n      意思: too good\n      来源:  more than one deserves\n      同义词: 物体ない\n    ',
  },
  {
    question: '腿',
    answer: 'momo',
    explantion: '\n      汉字: 腿\n      读音: もも\n      意思: thigh\n      来源:  femur\n      同义词: 腿, 股\n    ',
  },
  {
    question: '漏らす',
    answer: 'morasu',
    explantion: '\n      汉字: 漏らす\n      读音: もらす\n      意思: to let leak\n      来源:  to reveal\n      同义词: 漏らす, 洩らす\n    ',
  },
  {
    question: '漏れる',
    answer: 'moreru',
    explantion: '\n      汉字: 漏れる\n      读音: もれる\n      意思: to leak out\n      来源:  to escape\n      同义词: 漏れる, 洩れる\n    ',
  },
  {
    question: '屋敷',
    answer: 'yashiki',
    explantion: '\n      汉字: 屋敷\n      读音: やしき\n      意思: mansion\n      来源: waller\n      同义词: 邸\n    ',
  },
  {
    question: '憂鬱',
    answer: 'yuutsu',
    explantion: '\n      汉字: 憂鬱\n      读音: ゆううつ\n      意思: depression\n      来源:  melancholy\n      同义词: 憂鬱, 憂うつ, 憂欝, 悒鬱, 幽鬱, 幽欝, 悒欝\n    ',
  },
  {
    question: '世',
    answer: 'yo',
    explantion: '\n      汉字: 世\n      读音: よ\n      意思: world\n      来源:  society\n      同义词: 世, 代\n    ',
  },
  {
    question: '好い',
    answer: 'yoi',
    explantion: '\n      汉字: 好い\n      读音: よい\n      意思: good\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '養護',
    answer: 'yogo',
    explantion: '\n      汉字: 養護\n      读音: ようご\n      意思: protection\n      来源:  nursing\n      同义词: 養護\n    ',
  },
  {
    question: '依って',
    answer: 'yotte',
    explantion: '\n      汉字: 依って\n      读音: よって\n      意思: therefore\n      来源:  consequently\n      同义词: 依って, , 因って, 仍って, 依て, 仍て\n    ',
  },
  {
    question: '余程',
    answer: 'yohodo',
    explantion: '\n      汉字: 余程\n      读音: よほど\n      意思: very\n      来源:  greatly\n      同义词: 余程, \n    ',
  },
  {
    question: '夜更かし',
    answer: 'yofukashi',
    explantion: '\n      汉字: 夜更かし\n      读音: よふかし\n      意思: staying up late\n      来源:  keeping late hours\n      同义词: 夜更かし, 夜更し, 夜ふかし\n    ',
  },
  {
    question: '夜更け',
    answer: 'yofuke',
    explantion: '\n      汉字: 夜更け\n      读音: よふけ\n      意思: late at night\n      来源: waller\n      同义词: 夜ふけ, 夜深け\n    ',
  },
  {
    question: '寄り掛かる',
    answer: 'yorikakaru',
    explantion: '\n      汉字: 寄り掛かる\n      读音: よりかかる\n      意思: to lean against\n      来源:  to recline on\n      同义词: 寄り掛かる, 寄りかかる, 寄り掛る, 倚り懸かる, 凭り掛かる\n    ',
  },
  {
    question: '世論',
    answer: 'seron',
    explantion: '\n      汉字: 世論\n      读音: せろん\n      意思: public opinion\n      来源: waller\n      同义词: 世論, 世論, 輿論\n    ',
  },
  {
    question: '理屈',
    answer: 'rikutsu',
    explantion: '\n      汉字: 理屈\n      读音: りくつ\n      意思: theory\n      来源:  reason\n      同义词: 理屈, 理窟\n    ',
  },
  {
    question: '略奪',
    answer: 'ryakudatsu',
    explantion: '\n      汉字: 略奪\n      读音: りゃくだつ\n      意思: pillage\n      来源:  plunder\n      同义词: 略奪, 掠奪\n    ',
  },
  {
    question: '了承',
    answer: 'ryosho',
    explantion: '\n      汉字: 了承\n      读音: りょうしょう\n      意思: acknowledgement\n      来源:  understanding (e.g. please be understanding of the mess during our renovation)\n      同义词: 了承, 諒承, 領承\n    ',
  },
  {
    question: '態々',
    answer: 'wazawaza',
    explantion: '\n      汉字: 態々\n      读音: わざわざ\n      意思: expressly\n      来源:  specially\n      同义词: 態々, , 態態\n    ',
  },
  {
    question: '割り当て',
    answer: 'wariate',
    explantion: '\n      汉字: 割り当て\n      读音: わりあて\n      意思: allotment\n      来源:  assignment\n      同义词: 割り当て, 割当て, 割当, 割当\n    ',
  },
  {
    question: '割り込む',
    answer: 'warikomu',
    explantion: '\n      汉字: 割り込む\n      读音: わりこむ\n      意思: to cut in\n      来源:  to thrust oneself into\n      同义词: 割り込む, 割込む, 割りこむ, わり込む\n    ',
  },
  {
    question: '割り算',
    answer: 'warizan',
    explantion: '\n      汉字: 割り算\n      读音: わりざん\n      意思: division (math)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '割引き',
    answer: 'waribiki',
    explantion: '\n      汉字: 割引き\n      读音: わりびき\n      意思: discount\n      来源:  reduction\n      同义词: 割引き\n    ',
  },
  {
    question: '隔週',
    answer: 'kakushuu',
    explantion: '\n      汉字: 隔週\n      读音: かくしゅう\n      意思: every other week\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '愛でたい',
    answer: 'medetai',
    explantion: '\n      汉字: 愛でたい\n      读音: めでたい\n      意思: auspicious\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '値する',
    answer: 'ataisuru',
    explantion: '\n      汉字: 値する\n      读音: あたいする\n      意思: to be worth\n      来源:  to deserve\n      同义词: 値する, 価する\n    ',
  },
  {
    question: '一挙に',
    answer: 'ikkyoni',
    explantion: '\n      汉字: 一挙に\n      读音: いっきょに\n      意思: at a stroke\n      来源:  with a single swoop\n      同义词: 一挙に\n    ',
  },
  {
    question: '害する',
    answer: 'gaisuru',
    explantion: '\n      汉字: 害する\n      读音: がいする\n      意思: to injure\n      来源:  to damage\n      同义词: 害する\n    ',
  },
  {
    question: '月日',
    answer: 'gatsupi',
    explantion: '\n      汉字: 月日\n      读音: がっぴ\n      意思: (the) date\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '潜る',
    answer: 'kuguru',
    explantion: '\n      汉字: 潜る\n      读音: くぐる\n      意思: 1. to drive\n      来源:  to pass through\n      同义词: 潜る, \n    ',
  },
  {
    question: '恋する',
    answer: 'koisuru',
    explantion: '\n      汉字: 恋する\n      读音: こいする\n      意思: to fall in love with\n      来源:  to love\n      同义词: 恋する\n    ',
  },
  {
    question: '済まない',
    answer: 'sumanai',
    explantion: '\n      汉字: 済まない\n      读音: すまない\n      意思: sorry (phrase)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '沿い',
    answer: 'zoi',
    explantion: '\n      汉字: 沿い\n      读音: ぞい\n      意思: along\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '頼み',
    answer: 'tanomi',
    explantion: '\n      汉字: 頼み\n      读音: たのみ\n      意思: request\n      来源:  favor\n      同义词: 頼み, 恃み, 憑み\n    ',
  },
  {
    question: '長大',
    answer: 'chodai',
    explantion: '\n      汉字: 長大\n      读音: ちょうだい\n      意思: very long\n      来源:  great length\n      同义词: 長大\n    ',
  },
  {
    question: '突っ張る',
    answer: 'tsupparu',
    explantion: '\n      汉字: 突っ張る\n      读音: つっぱる\n      意思: to support\n      来源:  to become stiff\n      同义词: 突っ張る\n    ',
  },
  {
    question: '詰まり',
    answer: 'tsumari',
    explantion: '\n      汉字: 詰まり\n      读音: つまり\n      意思: in short\n      来源:  in brief\n      同义词: 詰まり\n    ',
  },
  {
    question: '現われ',
    answer: 'araware',
    explantion: '\n      汉字: 現われ\n      读音: あらわれ\n      意思: embodiment\n      来源:  materialization\n      同义词: 現われ\n    ',
  },
  {
    question: '噛る',
    answer: 'kajiru',
    explantion: '\n      汉字: 噛る\n      读音: かじる\n      意思: to chew\n      来源:  to bite (at)\n      同义词: 噛る\n    ',
  },
  {
    question: '是非とも',
    answer: 'zehitomo',
    explantion: '\n      汉字: 是非とも\n      读音: ぜひとも\n      意思: by all means (with sense of not taking no for an answer)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '増し',
    answer: 'mashi',
    explantion: '\n      汉字: 増し\n      读音: まし\n      意思: extra\n      来源:  additional\n      同义词: 増し, , \n    ',
  },
  {
    question: '間違う',
    answer: 'machigau',
    explantion: '\n      汉字: 間違う\n      读音: まちがう\n      意思: to make a mistake\n      来源:  to be incorrect\n      同义词: 間違う\n    ',
  },
  {
    question: '若しも',
    answer: 'moshimo',
    explantion: '\n      汉字: 若しも\n      读音: もしも\n      意思: if\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '持ち',
    answer: 'mochi',
    explantion: '\n      汉字: 持ち\n      读音: もち\n      意思: 1. hold\n      来源:  charge\n      同义词: 持ち\n    ',
  },
  {
    question: '止むを得ない',
    answer: 'yamuoenai',
    explantion: '\n      汉字: 止むを得ない\n      读音: やむをえない\n      意思: cannot be helped\n      来源:  unavoidable\n      同义词: 止むを得ない\n    ',
  },
  {
    question: '領海',
    answer: 'ryokai',
    explantion: '\n      汉字: 領海\n      读音: りょうかい\n      意思: territorial waters\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '碌な',
    answer: 'rokuna',
    explantion: '\n      汉字: 碌な\n      读音: ろくな\n      意思: satisfactory\n      来源:  decent\n      同义词: 碌な, , 陸な\n    ',
  },
  {
    question: '割合に',
    answer: 'wariaini',
    explantion: '\n      汉字: 割合に\n      读音: わりあいに\n      意思: comparatively\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '密か',
    answer: 'hisoka',
    explantion: '\n      汉字: 密か\n      读音: ひそか\n      意思: secret\n      来源:  private\n      同义词: 密か, 秘か, 窃か, 私か\n    ',
  },
  {
    question: '彼方此方',
    answer: 'achirakochira',
    explantion: '\n      汉字: 彼方此方\n      读音: あちらこちら\n      意思: here and there\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '彼此',
    answer: 'arekore',
    explantion: '\n      汉字: 彼此\n      读音: あれこれ\n      意思: one thing or another\n      来源:  this and that\n      同义词: 彼此\n    ',
  },
  {
    question: 'お休み',
    answer: 'oyasumi',
    explantion: '\n      汉字: お休み\n      读音: おやすみ\n      意思: holiday\n      来源:  absence\n      同义词: お休み\n    ',
  },
  {
    question: 'ご座います',
    answer: 'gozaimasu',
    explantion: '\n      汉字: ご座います\n      读音: ございます\n      意思: to be (polite)\n      来源:  to exist\n      同义词: ご座います, , 御座います\n    ',
  },
  {
    question: 'お早う',
    answer: 'ohayo',
    explantion: '\n      汉字: お早う\n      读音: おはよう\n      意思: Good morning\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '然うして',
    answer: 'soshite',
    explantion: '\n      汉字: 然うして\n      读音: そうして\n      意思: and\n      来源:  like that\n      同义词: 然うして\n    ',
  },
  {
    question: 'にも拘らず',
    answer: 'nimokakawarazu',
    explantion: '\n      汉字: にも拘らず\n      读音: にもかかわらず\n      意思: in spite of\n      来源:  nevertheless\n      同义词: にも拘らず, , にも関わらず, にも拘わらず, にも関らず, にも掛かわらず\n    ',
  },
  {
    question: '馬鹿らしい',
    answer: 'bakarashii',
    explantion: '\n      汉字: 馬鹿らしい\n      读音: ばからしい\n      意思: absurd\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: 'やっ付ける',
    answer: 'yattsukeru',
    explantion: '\n      汉字: やっ付ける\n      读音: やっつける\n      意思: to beat\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '衣類',
    answer: 'irui',
    explantion: '\n      汉字: 衣類\n      读音: いるい\n      意思: clothes\n      来源:  clothing\n      同义词: 衣類\n    ',
  },
  {
    question: '艶',
    answer: 'en',
    explantion: '\n      汉字: 艶\n      读音: えん\n      意思: charming\n      来源:  fascinating\n      同义词: 艶\n    ',
  },
  {
    question: '始めまして',
    answer: 'hajimemashite',
    explantion: '\n      汉字: 始めまして\n      读音: はじめまして\n      意思: How do you do?\n      来源:  I am glad to meet you\n      同义词: 始めまして\n    ',
  },
  {
    question: '此れ',
    answer: 'kore',
    explantion: '\n      汉字: 此れ\n      读音: これ\n      意思: this\n      来源: waller\n      同义词: , 是, 是れ, 之, 之れ, 維, 惟, 此\n    ',
  },
  {
    question: '共和',
    answer: 'kyowa',
    explantion: '\n      汉字: 共和\n      读音: きょうわ\n      意思: republicanism\n      来源:  cooperation\n      同义词: 共和\n    ',
  },
  {
    question: '高',
    answer: 'taka',
    explantion: '\n      汉字: 高\n      读音: たか\n      意思: quantity\n      来源:  amount\n      同义词: 高, 高\n    ',
  },
  {
    question: '問',
    answer: 'mon',
    explantion: '\n      汉字: 問\n      读音: もん\n      意思: problem\n      来源:  question\n      同义词: 問\n    ',
  },
  {
    question: '偶に',
    answer: 'tamani',
    explantion: '\n      汉字: 偶に\n      读音: たまに\n      意思: occasionally\n      来源:  once in a while\n      同义词: 偶に\n    ',
  },
  {
    question: '擦る',
    answer: 'kasuru',
    explantion: '\n      汉字: 擦る\n      读音: かする\n      意思: to touch lightly\n      来源:  to take a percentage (from)\n      同义词: 擦る, , 掠る\n    ',
  },
  {
    question: '座標',
    answer: 'zahyou',
    explantion: '\n      汉字: 座標\n      读音: ざひょう\n      意思: coordinate(s)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '均し',
    answer: 'narashi',
    explantion: '\n      汉字: 均し\n      读音: ならし\n      意思: equilibrium\n      来源:  balance\n      同义词: 均し, 平し\n    ',
  },
  {
    question: '蜜',
    answer: 'mitsu',
    explantion: '\n      汉字: 蜜\n      读音: みつ\n      意思: nectar\n      来源:  honey\n      同义词: 蜜, 蜜\n    ',
  },
  {
    question: '対辺',
    answer: 'taihen',
    explantion: '\n      汉字: 対辺\n      读音: たいへん\n      意思: (geometrical) opposite side\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '刷り',
    answer: 'suri',
    explantion: '\n      汉字: 刷り\n      读音: すり\n      意思: printing\n      来源: waller\n      同义词: 摺り, 刷\n    ',
  },
  {
    question: '戸',
    answer: 'ko',
    explantion: '\n      汉字: 戸\n      读音: こ\n      意思: counter for houses\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '空間',
    answer: 'akima',
    explantion: '\n      汉字: 空間\n      读音: あきま\n      意思: vacancy\n      来源:  room for rent or lease\n      同义词: 空間, 空き間\n    ',
  },
  {
    question: '鉄棒',
    answer: 'kanabou',
    explantion: '\n      汉字: 鉄棒\n      读音: かなぼう\n      意思: iron rod\n      来源:  crowbar\n      同义词: 鉄棒, 金棒\n    ',
  },
  {
    question: '捕吏',
    answer: 'hori',
    explantion: '\n      汉字: 捕吏\n      读音: ほり\n      意思: constable\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '御負け',
    answer: 'omake',
    explantion: '\n      汉字: 御負け\n      读音: おまけ\n      意思: 1. a discount\n      来源:  a prize\n      同义词: 御負け, , お負け\n    ',
  },
  {
    question: '土産',
    answer: 'dosan',
    explantion: '\n      汉字: 土産\n      读音: どさん\n      意思: product of the land\n      来源: waller\n      同义词: 土産\n    ',
  },
  {
    question: '碑',
    answer: 'ishibumi',
    explantion: '\n      汉字: 碑\n      读音: いしぶみ\n      意思: stone monument bearing an inscription\n      来源: waller\n      同义词: 碑, 石文\n    ',
  },
  {
    question: '転転',
    answer: 'tenten',
    explantion: '\n      汉字: 転転\n      读音: てんてん\n      意思: rolling about\n      来源:  moving from place to place\n      同义词: 転転\n    ',
  },
  {
    question: '一見',
    answer: 'ichigen',
    explantion: '\n      汉字: 一見\n      读音: いちげん\n      意思: unfamiliar\n      来源:  never before met\n      同义词: 一見, 一現\n    ',
  },
  {
    question: '宝器',
    answer: 'hoki',
    explantion: '\n      汉字: 宝器\n      读音: ほうき\n      意思: treasured article or vessel\n      来源:  outstanding individual\n      同义词: 宝器\n    ',
  },
  {
    question: '利根',
    answer: 'rikon',
    explantion: '\n      汉字: 利根\n      读音: りこん\n      意思: intelligence\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '吊り革',
    answer: 'tsurikawa',
    explantion: '\n      汉字: 吊り革\n      读音: つりかわ\n      意思: strap\n      来源: waller\n      同义词: つり革, 吊革, 釣り革, 釣革\n    ',
  },
  {
    question: '鉄片',
    answer: 'teppen',
    explantion: '\n      汉字: 鉄片\n      读音: てっぺん\n      意思: iron scraps\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '金槌',
    answer: 'kanazuchi',
    explantion: '\n      汉字: 金槌\n      读音: かなづち\n      意思: 1. (iron) hammer\n      来源:  2. punishment\n      同义词: 金槌, , 金づち, 鉄鎚, \n    ',
  },
  {
    question: '強気',
    answer: 'gogi',
    explantion: '\n      汉字: 強気\n      读音: ごうぎ\n      意思: great\n      来源:  grand\n      同义词: 強気, 豪儀, 豪儀, 豪気, 豪気, 強気\n    ',
  },
  {
    question: '先先週',
    answer: 'sensenshu',
    explantion: '\n      汉字: 先先週\n      读音: せんせんしゅう\n      意思: week before last\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '歎',
    answer: 'tan',
    explantion: '\n      汉字: 歎\n      读音: たん\n      意思: grief\n      来源:  sigh\n      同义词: 歎, 嘆\n    ',
  },
  {
    question: '泊',
    answer: 'haku',
    explantion: '\n      汉字: 泊\n      读音: はく\n      意思: counter for nights of a stay\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '玉',
    answer: 'gyoku',
    explantion: '\n      汉字: 玉\n      读音: ぎょく\n      意思: king (shogi)\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '織',
    answer: 'ori',
    explantion: '\n      汉字: 織\n      读音: おり\n      意思: weave\n      来源:  weaving\n      同义词: 織, 織り\n    ',
  },
  {
    question: '館',
    answer: 'kan',
    explantion: '\n      汉字: 館\n      读音: かん\n      意思: house\n      来源:  hall\n      同义词: 館\n    ',
  },
  {
    question: '濠',
    answer: 'gou',
    explantion: '\n      汉字: 濠\n      读音: ごう\n      意思: moat\n      来源: waller\n      同义词: 壕\n    ',
  },
  {
    question: '著',
    answer: 'cho',
    explantion: '\n      汉字: 著\n      读音: ちょ\n      意思: counter for suits of clothing\n      来源:  arriving at ..\n      同义词: 著\n    ',
  },
  {
    question: '魂',
    answer: 'kon',
    explantion: '\n      汉字: 魂\n      读音: こん\n      意思: soul\n      来源:  spirit\n      同义词: 魂\n    ',
  },
  {
    question: '頃',
    answer: 'kei',
    explantion: '\n      汉字: 頃\n      读音: けい\n      意思: time\n      来源:  about\n      同义词: 頃\n    ',
  },
  {
    question: '基',
    answer: 'motoi',
    explantion: '\n      汉字: 基\n      读音: もとい\n      意思: basis\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '個',
    answer: 'ka',
    explantion: '\n      汉字: 個\n      读音: か\n      意思: article counter\n      来源: waller\n      同义词: 箇, 个, \n    ',
  },
  {
    question: '伊',
    answer: 'i',
    explantion: '\n      汉字: 伊\n      读音: い\n      意思: that one\n      来源:  Italy\n      同义词: 伊\n    ',
  },
  {
    question: '校',
    answer: 'ko',
    explantion: '\n      汉字: 校\n      读音: こう\n      意思: -school\n      来源:  proof\n      同义词: 校\n    ',
  },
  {
    question: '甲',
    answer: 'kinoe',
    explantion: '\n      汉字: 甲\n      读音: きのえ\n      意思: 1st in rank\n      来源:  first sign of the Chinese calendar\n      同义词: 甲\n    ',
  },
  {
    question: '秭',
    answer: 'shi',
    explantion: '\n      汉字: 秭\n      读音: し\n      意思: 10^24 (kanji is JIS X 0212 kuten 4906)\n      来源:  septillion (American)\n      同义词: 秭\n    ',
  },
  {
    question: '伝言',
    answer: 'tsutekoto',
    explantion: '\n      汉字: 伝言\n      读音: つてこと\n      意思: verbal message\n      来源:  rumor\n      同义词: 伝言\n    ',
  },
  {
    question: '帳',
    answer: 'tobari',
    explantion: '\n      汉字: 帳\n      读音: とばり\n      意思: curtain\n      来源: waller\n      同义词: , 帷, 幄, 幌\n    ',
  },
  {
    question: '長',
    answer: 'osa',
    explantion: '\n      汉字: 長\n      读音: おさ\n      意思: chief\n      来源:  head\n      同义词: 長\n    ',
  },
  {
    question: '修行',
    answer: 'shugyo',
    explantion: '\n      汉字: 修行\n      读音: しゅぎょう\n      意思: pursuit of knowledge\n      来源:  studying\n      同义词: 修行, 修行\n    ',
  },
  {
    question: '止まる',
    answer: 'todomaru',
    explantion: '\n      汉字: 止まる\n      读音: とどまる\n      意思: to be limited to\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '例',
    answer: 'tameshi',
    explantion: '\n      汉字: 例\n      读音: ためし\n      意思: instance\n      来源:  example\n      同义词: 例, 様, 例し\n    ',
  },
  {
    question: '打付ける',
    answer: 'butsukeru',
    explantion: '\n      汉字: 打付ける\n      读音: ぶつける\n      意思: to knock\n      来源:  to run into\n      同义词: 打付ける\n    ',
  },
  {
    question: '華奢',
    answer: 'kasha',
    explantion: '\n      汉字: 華奢\n      读音: かしゃ\n      意思: luxury\n      来源:  pomp\n      同义词: 華奢\n    ',
  },
  {
    question: '事によると',
    answer: 'kotoniyoruto',
    explantion: '\n      汉字: 事によると\n      读音: ことによると\n      意思: depending on the circumstances\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '地方',
    answer: 'jikata',
    explantion: '\n      汉字: 地方\n      读音: じかた\n      意思: area\n      来源:  locality\n      同义词: 地方\n    ',
  },
  {
    question: '含嗽',
    answer: 'ugai',
    explantion: '\n      汉字: 含嗽\n      读音: うがい\n      意思: gargle\n      来源:  rinse mouth\n      同义词: 含嗽, 含嗽, 含漱\n    ',
  },
  {
    question: '一目',
    answer: 'ichimoku',
    explantion: '\n      汉字: 一目\n      读音: いちもく\n      意思: a glance\n      来源:  a look\n      同义词: 一目\n    ',
  },
  {
    question: '各',
    answer: 'onoono',
    explantion: '\n      汉字: 各\n      读音: おのおの\n      意思: each\n      来源:  every\n      同义词: 各\n    ',
  },
  {
    question: '予言',
    answer: 'kanegoto',
    explantion: '\n      汉字: 予言\n      读音: かねごと\n      意思: prediction\n      来源:  promise\n      同义词: 予言, 兼言, 兼ね言\n    ',
  },
  {
    question: '堪える',
    answer: 'kotaeru',
    explantion: '\n      汉字: 堪える\n      读音: こたえる\n      意思: to bear\n      来源:  to stand\n      同义词: 堪える, 堪える\n    ',
  },
  {
    question: '余っ程',
    answer: 'yoppodo',
    explantion: '\n      汉字: 余っ程\n      读音: よっぽど\n      意思: very\n      来源:  greatly\n      同义词: 余っ程, \n    ',
  },
  {
    question: '包む',
    answer: 'kurumu',
    explantion: '\n      汉字: 包む\n      读音: くるむ\n      意思: to be engulfed in\n      来源:  to be enveloped by\n      同义词: 包む\n    ',
  },
  {
    question: '大事',
    answer: 'ogoto',
    explantion: '\n      汉字: 大事\n      读音: おおごと\n      意思: important\n      来源:  valuable\n      同义词: 大事, 大ごと\n    ',
  },
  {
    question: '流行',
    answer: 'hayari',
    explantion: '\n      汉字: 流行\n      读音: はやり\n      意思: fashionable\n      来源:  fad\n      同义词: 流行, 流行り\n    ',
  },
  {
    question: '平行',
    answer: 'eiko',
    explantion: '\n      汉字: 平行\n      读音: へいこう\n      意思: (going) side by side\n      来源:  concurrent\n      同义词: 平行\n    ',
  },
  {
    question: '省みる',
    answer: 'kaerimiru',
    explantion: '\n      汉字: 省みる\n      读音: かえりみる\n      意思: to reflect\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '傑',
    answer: 'ketsu',
    explantion: '\n      汉字: 傑\n      读音: けつ\n      意思: excellence\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '弟',
    answer: 'oto',
    explantion: '\n      汉字: 弟\n      读音: おと\n      意思: younger brother\n      来源: waller\n      同义词: 乙\n    ',
  },
  {
    question: '天皇',
    answer: 'sumeragi',
    explantion: '\n      汉字: 天皇\n      读音: すめらぎ\n      意思: Emperor of Japan\n      来源: waller\n      同义词: 天皇, 天皇, 天皇\n    ',
  },
  {
    question: '辺り',
    answer: 'hotori',
    explantion: '\n      汉字: 辺り\n      读音: ほとり\n      意思: (in the) neighbourhood\n      来源:  vicinity\n      同义词: 辺り, , 辺, 畔\n    ',
  },
  {
    question: '如何',
    answer: 'ikaga',
    explantion: '\n      汉字: 如何\n      读音: いかが\n      意思: how\n      来源:  in what way\n      同义词: 如何\n    ',
  },
  {
    question: '雛',
    answer: 'hina',
    explantion: '\n      汉字: 雛\n      读音: ひな\n      意思: young bird\n      来源:  chick\n      同义词: 雛, , \n    ',
  },
  {
    question: '塩',
    answer: 'en',
    explantion: '\n      汉字: 塩\n      读音: えん\n      意思: salt\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '根本',
    answer: 'konpon',
    explantion: '\n      汉字: 根本\n      读音: こんぽん\n      意思: origin\n      来源:  source\n      同义词: 根本, 根本\n    ',
  },
  {
    question: '混む',
    answer: 'komu',
    explantion: '\n      汉字: 混む\n      读音: こむ\n      意思: to be crowded\n      来源: waller\n      同义词: \n    ',
  },
  {
    question: '灯',
    answer: 'tomoshibi',
    explantion: '\n      汉字: 灯\n      读音: ともしび\n      意思: light\n      来源: waller\n      同义词: 灯火, 燭, 燈火, 灯し火\n    ',
  },
  {
    question: '南',
    answer: 'nan',
    explantion: '\n      汉字: 南\n      读音: なん\n      意思: south\n      来源: waller\n      同义词: 於, 仮, 割, 乾, 蓋, 傾, 巨, 傷, 働, 伐, 倣\n    ',
  },
]

const chunkSize = 100

export default (() => {
  const dbList = chunk(n1, chunkSize)
  const questionMap: { [key: string]: QuestionList } = {}

  dbList.map((list, index) => {
    const data = {
      title: `N1-${index + 1}-${list.length}`,
      name: `N1-${index + 1}-${list.length}`,
      data: list,
    }
    return data
  })
    .forEach((data) => {
      questionMap[data.name] = data
    })
  return questionMap
})()
