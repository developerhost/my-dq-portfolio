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

  const handleAButtonPress = (
    heroPosition: { col: number; row: number },
    roomMap: number[][]
  ) => {
    if (message) {
      // メッセージがすでに表示されている場合はクリア
      setMessage('');
      return;
    }

    const directions = [
      { rowOffset: -1, colOffset: 0 }, // 上
      { rowOffset: 1, colOffset: 0 }, // 下
      { rowOffset: 0, colOffset: -1 }, // 左
      { rowOffset: 0, colOffset: 1 }, // 右
    ];

    for (const { rowOffset, colOffset } of directions) {
      const neighborRow = heroPosition.row + rowOffset;
      const neighborCol = heroPosition.col + colOffset;

      if (
        neighborRow >= 0 &&
        neighborRow < roomMap.length &&
        neighborCol >= 0 &&
        neighborCol < roomMap[0].length
      ) {
        const tileType = roomMap[neighborRow][neighborCol];
        if (tileType !== TILES.FLOOR && tileType !== TILES.WALL) {
          handleTileClick(tileType);
          return; // 最初に見つかったオブジェクトのメッセージを表示
        }
      }
    }

    setMessage('近くに何もないようだ');
  };

  return {
    message,
    handleTileClick,
    handleAButtonPress,
    treasureRedGoldTaken,
    treasureGreenGoldTaken,
  };
}
