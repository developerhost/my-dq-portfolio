import { useState } from 'react';

/**
 * メッセージを表示するためのカスタムフック
 */
export function useMessage() {
  const [message, setMessage] = useState('');

  const handleTileClick = (type: number) => {
    switch (type) {
      case 0:
        setMessage('こんにちは、私は橋田至です！');
        break;
      case 1:
        setMessage('村人: ようこそ、冒険者！');
        break;
      case 2:
        setMessage('猫: にゃーん');
        break;
      default:
        setMessage('');
        break;
    }
  };

  return { message, handleTileClick };
}
