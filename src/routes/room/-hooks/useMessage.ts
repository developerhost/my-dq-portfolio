import { useState } from 'react';
import { TILES } from '@/constants';

/**
 * メッセージを表示するためのカスタムフック
 */
export function useMessage() {
  const [message, setMessage] = useState('');

  const handleTileClick = (type: number) => {
    switch (type) {
      case TILES.HERO:
        setMessage('こんにちは、私は橋田至です！');
        break;
      case TILES.MURABITO:
        setMessage('村人: ようこそ、冒険者！');
        break;
      case TILES.CAT:
        setMessage('猫: にゃーん');
        break;
      case TILES.TREASURE_RED_GOLD:
        setMessage('TypeScriptを手に入れた!');
        break;
      case TILES.TREASURE_GREEN_GOLD:
        setMessage('Reactを手に入れた!');
        break;
      default:
        setMessage('');
        break;
    }
  };

  return { message, handleTileClick };
}
