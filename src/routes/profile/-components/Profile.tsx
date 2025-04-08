import { useRef, useState } from 'react';

import { differenceInYears } from 'date-fns';
import { FaUser } from 'react-icons/fa';
import { useKey } from 'react-use';

import ChatMessage from '@/components/ChatMessage';
import { useArrowNavigation } from '@/hooks/useArrowNavigation';

const birthDate = new Date(1996, 6, 9);

export const Profile = () => {
  const currentAge = differenceInYears(new Date(), birthDate);

  const fields = [
    '名前: 橋田至',
    `LV: ${currentAge}`,
    '職業: エンジニア',
    '取得資格',
    '趣味',
    '好きな食べ物',
    '好きな漫画',
    '好きな書籍',
    '好きなアーティスト',
    '好きなYoutubeチャンネル',
    '好きなアニメ',
    '好きなゲーム',
    '好きなMC',
  ];
  const messages = [
    '橋田至はペンネームです。少しだけ変わっています。',
    '平成8年。96年生まれです。',
    'エンジニアとしてフロントエンドをメインに活動しています。',
    `
    ・応用情報
    ・基本情報
    ・ITパスポート
    ・AWS Certified Cloud Practitioner
    ・Salesforce 認定 Platform デベロッパー
    `,
    `
    ・スマブラ
    ・ピアノ
    ・漫画
    ・海外の人と話すこと
    ・個人開発
    ・将棋
    ・音楽
    ・DJ
    ・ラップバトル
    ・銭湯
    `,
    `・ラーメン二郎
    ・天下一品
    ・麻婆豆腐
    ・神座
    ・ココスの朝食バイキング
    ・しゃぶ葉

    味の濃い食べ物が好きです`,
    `・左ききのエレン
      →かっぴー
    ・BECK
    →ハロルド作石
    ・SLAM DUNK
    →井上雄彦
    ・おやすみプンプン
    →浅野いにお
    ・ボーイズオンザラン
    →花沢健吾
    ・20世紀少年
    →浦沢直樹
    ・PLUTO
    →浦沢直樹
    ・DEATH NOTE
    →大場つぐみ
    ・闇金ウシジマくん
    ・九条の大罪
    →真鍋昌平
    ・住みにごり
    →たかたけし
    ・新宿スワン
    →和久井健
    ・エルフェンリート
    →岡本倫
    ・ハチワンダイバー
    →柴田ヨクサル
    ・はじめの一歩
    →森川ジョージ
    ・グラップラー刃牙
    →板垣恵介
    `,
    `・情熱プログラマー
    ・プリンシプルオブプログラミング
    ・プログラマー脳
    ・利己的な遺伝子
    ・生命科学的思考
    ・サラバ
    ・ザ・ゲーム
    ・GIVE&TAKE
    ・ハッカーと画家
    `,
    `・Fear, and Loathing in Las Vegas
    ・MOROHA
    ・Avicii
    ・703号室
    ・Cloudy
    ・iCO
    ・チョーキューメイ
    ・秋山黄色
    ・My Hair is Bad
    ・Måneskin
    ・不可思議/wonderboy
    `,
    `・100秒tech
      ・ゆるコンピュータ科学ラジオ
      ・バキ童
      ・幕末志士
      ・VAIENCE
      ・ブライトサイド
      ・うしゃすらいむ
      ・ぐんぐにるチャンネル
      ・TSKaigi
      ・戦極MCBATTLE
      ・やがみ
      ・宮永えいと
      ・小西詠斗
      ・三科光平
      ・えびすじゃっぷ
      ・Make up GYUTAE
      ・プログラミングチュートリアル
      ・Code With Antonio
      ・ムーザルちゃんねる
      ・ラムダ技術部
      ・フェルミ漫画研究所
      ・デルタのゆっくり科学
      ・3Blue1BrownJapan
      ・霊夢の3分ハッキング
      ・破壊兄弟
      ・でんどろ
      ・FORESTちゃんねる
      ・ごりたん
      ・ふぅ
      ・TED
      ・PIVOT
      ・ダストマン
      ・あるごめとりい
      ・キリン
      ・ヨビノリ
      ・WIRED.jp
      ・丸山ゴンザレスの裏社会ジャーニー
      ・じゅじゅ
      ・iamSHUM
      ・ゼパ
      ・陽介`,
    `・STEINS;GATE
      ・四畳半神話大系
      ・NHKへようこそ!
      ・輪るピングドラム
      `,
    `## ドラゴンクエストシリーズ
       ・ドラゴンクエスト1
       ・ドラゴンクエスト2
       ・ドラゴンクエスト4
       ・ドラゴンクエスト5(一番好き)
       ・ドラゴンクエスト6
       ・ドラゴンクエスト7
       ・ドラゴンクエスト8
       ・ドラゴンクエスト9
       ・ドラゴンクエスト・キャラクターズ トルネコの大冒険3 ~不思議のダンジョン~
      ・ドラゴンクエストモンスターズ テリーのワンダーランド
      ・スライムもりもりドラゴンクエスト2 大戦車としっぽ団
    ## スマブラシリーズ
        ・ニンテンドウオールスター!大乱闘スマッシュブラザーズ(64)
        ・大乱闘スマッシュブラザーズDX(ゲームキューブ)
        ・大乱闘スマッシュブラザーズX(Wii)
        ・大乱闘スマッシュブラザーズ SPECIAL(switch)
    ## モンスターハンターシリーズ
        ・モンスターハンターG
        ・モンスターハンターポータブル2nd G
        ・モンスターハンターポータブル 3rd
        ・モンスターハンターダブルクロス
        ・モンスターハンター：ワールド
        ・モンスターハンターライズ
    ・ Fall Guys: Ultimate Knockout
    ## マリオシリーズ
    ・スーパーマリオワールド
    ・スーパーマリオ64
    ・スーパーマリオサンシャイン
    ・スーパーマリオギャラクシー
    ・ペーパーマリオ
    ・スーパーマリオRPG
    ・マリオストーリー
    ・ワリオランド3不思議なオルゴール
    `,
    `・SAM
      ・SKRYU
      ・鎮座DOPENESS
      ・韻マン
      ・じょう
      ・U-mallow
      ・CHEHON
      ・MU-TON
      ・ミメイ
      ・fork
      ・ゆうま
    `,
  ];

  const { selectedIndex, updateIndex } = useArrowNavigation(fields.length);
  const selectedIndexRef = useRef(selectedIndex);
  selectedIndexRef.current = selectedIndex;
  const [selectedMessage, setSelectedMessage] = useState('');

  const handleSelect = (index: number) => {
    updateIndex(index);
    setSelectedMessage(messages[index]);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSelect(index);
    }
  };

  useKey('Enter', () => {
    handleSelect(selectedIndexRef.current);
  });

  return (
    <div>
      <div className="bg-black border-2 border-white rounded-md p-6 w-72">
        <div className="flex items-center justify-center mb-4">
          <FaUser className="w-8 h-8" />
          <h2 className="text-xl font-bold ml-2">Profile</h2>
        </div>
        <div className="text-left">
          {fields.map((field, index) => (
            <button
              className="flex items-center mb-2 text-left w-full bg-transparent border-none focus:outline-none"
              key={index}
              onClick={() => handleSelect(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {selectedIndex === index && (
                <span className="mr-2 animate-blink">▶️</span>
              )}
              {field}
            </button>
          ))}
        </div>
      </div>
      <div className="my-2">
        {selectedMessage && (
          <div className=" border-2 border-white rounded p-4 w-72 mt-6">
            <ChatMessage message={selectedMessage} typeSpeed={10} />
          </div>
        )}
      </div>
    </div>
  );
};
