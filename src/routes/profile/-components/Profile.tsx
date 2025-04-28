import { useRef, useState } from 'react';

import { FaUser } from 'react-icons/fa';
import { useKey } from 'react-use';

import { getCurrentAge, getFields, messages } from './profileData';
import ChatMessage from '../../../components/ChatMessage';
import { useArrowNavigation } from '../../../hooks/useArrowNavigation';

/**
 * Profileコンポーネント
 * ユーザーのプロフィール情報と詳細メッセージを表示する。
 */
export const Profile = () => {
  // 現在の年齢を取得し、フィールドの配列を生成する
  const currentAge = getCurrentAge();
  const fields = getFields(currentAge);

  const { selectedIndex, updateIndex } = useArrowNavigation(fields.length);
  const selectedIndexRef = useRef(selectedIndex);
  selectedIndexRef.current = selectedIndex;
  const [selectedMessage, setSelectedMessage] = useState('');

  /**
   * 指定されたインデックスに応じて選択状態を更新し、対応するメッセージを表示する
   * @param index 選択された項目のインデックス
   */
  const handleSelect = (index: number) => {
    updateIndex(index);
    setSelectedMessage(messages[index]);
  };

  /**
   * キーボード操作時のイベントハンドラ
   * Enterキーまたはスペースキーで選択処理を実行する
   * @param event キーボードイベント
   * @param index 対象の項目のインデックス
   */
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSelect(index);
    }
  };

  // Enterキー押下で現在選択されている項目を処理する
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
          <div className="border-2 border-white rounded p-4 w-72 mt-6">
            {}
            <ChatMessage message={selectedMessage} typeSpeed={10} />
          </div>
        )}
      </div>
    </div>
  );
};
