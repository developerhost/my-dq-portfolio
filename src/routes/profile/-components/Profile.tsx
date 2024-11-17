import { useRef, useState } from 'react';
import { useKey } from 'react-use';
import { differenceInYears } from 'date-fns';
import { FaUser } from 'react-icons/fa';

import ChatMessage from '@/components/ChatMessage';
import { useArrowNavigation } from '@/hooks/useArrowNavigation';

const birthDate = new Date(1996, 6, 9);

export default function Profile() {
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
  ];

  const { selectedIndex, updateIndex } = useArrowNavigation(fields.length);
  const selectedIndexRef = useRef(selectedIndex);
  selectedIndexRef.current = selectedIndex;
  const [selectedMessage, setSelectedMessage] = useState('');

  const handleSelect = (index: number) => {
    updateIndex(index);
    setSelectedMessage(messages[index]);
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
            <p
              key={index}
              className="flex items-center mb-2"
              onClick={() => handleSelect(index)}
              tabIndex={0}
            >
              {selectedIndex === index && (
                <span className="mr-2 animate-blink">{'▶️'}</span>
              )}
              {field}
            </p>
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
}
