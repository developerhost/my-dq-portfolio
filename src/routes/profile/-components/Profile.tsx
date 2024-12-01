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
  ];
  const messages = [
    '橋田至はペンネームです',
    '誕生日は6/9です。ロックの日とおぼえてください',
    'エンジニアとしてフロントエンドをメインに活動しています。',
    `・応用情報
    ・基本情報
    ・ITパスポート
    ・AWS Certified Cloud Practitioner
    ・Salesforce 認定 Platform デベロッパー`,
    `・スマブラ
    ・ピアノ
    ・漫画

スマブラの持ちキャラはドンキーコング。
ピアノで好きな曲は久石譲のSummerです`,
    `・ラーメン二郎
    ・天下一品
    ・麻婆豆腐

    味の濃い食べ物が好きです`,
    `・左ききのエレン
    ・BECK
    ・SLAM DUNK
    ・おやすみプンプン
    ・ボーイズオンザラン`,
    `・情熱プログラマー
    ・プリンシプルオブプログラミング
    ・プログラマー脳`,
    `・Fear, and Loathing in Las Vegas
    ・MOROHA
    ・Avicii
    ・703号室
    ・Cloudy
    ・iCO
    ・チョーキューメイ
    ・秋山黄色
    ・My Hair is Bad
    ・Måneskin`,
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
      ・NHKへようこそ!`,
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
