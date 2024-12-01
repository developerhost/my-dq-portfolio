import { useState } from 'react';

import { TILES } from '@/constants';

/**
 * メッセージを表示するためのカスタムフック
 */
export function useMessage() {
  const [message, setMessage] = useState('');
  const [treasureRedGoldTaken, setTreasureRedGoldTaken] = useState(false);
  const [treasureGreenGoldTaken, setTreasureGreenGoldTaken] = useState(false);

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
        if (treasureRedGoldTaken) {
          setMessage('宝箱は空のようだ');
        } else {
          setMessage('TypeScriptを手に入れた!');
          setTreasureRedGoldTaken(true);
        }
        break;
      case TILES.TREASURE_GREEN_GOLD:
        if (treasureGreenGoldTaken) {
          setMessage('宝箱は空のようだ');
        } else {
          setMessage('Reactを手に入れた!');
          setTreasureGreenGoldTaken(true);
        }
        break;
      default:
        setMessage('');
        break;
    }
  };

  return {
    message,
    handleTileClick,
    treasureRedGoldTaken,
    treasureGreenGoldTaken,
  };
}
