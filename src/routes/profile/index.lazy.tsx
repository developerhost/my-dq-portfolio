import ChatMessage from '@/components/ChatMessage';
import { useArrowNavigation } from '../../hooks/useArrowNavigation';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useRef, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useKey } from 'react-use';

export const Route = createLazyFileRoute('/profile/')({
  component: Profile,
});

function Profile() {
  const fields = [
    '名前: 橋田至',
    'Lv: 28',
    '職業: エンジニア',
    '趣味: スマブラ・ピアノ',
    '好きな食べ物: ラーメン二郎・天下一品・麻婆豆腐',
  ];
  const messages = [
    '橋田至はペンネームです',
    '誕生日は6/9です。ロックの日とおぼえてください',
    'エンジニアとしてフロントエンドをメインに活動しています。',
    'スマブラの持ちキャラはドンキーコング。ピアノで好きな曲は久石譲のSummerです',
    '味の濃い食べ物はだいたいなんでも好きです',
  ];

  const selectedIndex = useArrowNavigation(fields.length);
  const selectedIndexRef = useRef(selectedIndex);
  selectedIndexRef.current = selectedIndex;
  const [selectedMessage, setSelectedMessage] = useState('');

  const handleSelect = (index: number) => {
    setSelectedMessage(messages[index]);
  };

  useKey('Enter', () => {
    handleSelect(selectedIndexRef.current);
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-black border-2 border-white rounded-md p-6 w-72">
        <div className="flex items-center justify-center mb-4">
          <FaUser className="w-8 h-8" />
          <h2 className="text-xl font-bold ml-2">Profile</h2>
        </div>
        <div className="text-left">
          {fields.map((field, index) => (
            <p
              key={index}
              className="flex items-center"
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
      {selectedMessage && (
        <div className=" border-2 border-white rounded p-4 w-72 mt-6">
          <ChatMessage message={selectedMessage} />
        </div>
      )}
    </div>
  );
}
