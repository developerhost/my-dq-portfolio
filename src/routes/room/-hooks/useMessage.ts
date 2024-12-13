import { useState } from 'react';

import type { GameGrid, Position } from '../-types/types';

import { TILES } from '@/constants';

/**
 * メッセージを表示するためのカスタムフック
 */
export function useMessage() {
  const [message, setMessage] = useState('');
  const [treasureRedGoldTaken, setTreasureRedGoldTaken] = useState(false);
  const [treasureRedGoldTaken2, setTreasureRedGoldTaken2] = useState(false);
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
      case TILES.TREASURE_RED_GOLD2:
        if (treasureRedGoldTaken2) {
          setMessage('宝箱は空のようだ');
        } else {
          setMessage('Next.jsを手に入れた!');
          setTreasureRedGoldTaken2(true);
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
      case TILES.SOLDER_RED:
        setMessage(
          '兵士1: 橋田至はSTEINS;GATEのキャラクターから名前を取ったらしい'
        );
        break;
      case TILES.SOLDER_BLUE:
        setMessage('兵士2: 他のページのリンクも見てみるといいぞ');
        break;
      case TILES.MONSTER:
        setMessage('モンスター: 良かったら私のGitHubを見ていってください');
        break;
      default:
        setMessage('');
        break;
    }
  };

  const handleAButtonPress = <T extends GameGrid>(
    heroPosition: Position<T>,
    map: T
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

    // 有効なタイルを見つけるためのフラグ
    let foundValidTile = false;

    for (const { rowOffset, colOffset } of directions) {
      const row = heroPosition.row + rowOffset;
      const col = heroPosition.col + colOffset;

      // 範囲外チェック
      if (row < 0 || row >= map.length || col < 0 || col >= map[0].length) {
        continue;
      }

      const tileType = map[row][col];

      // 壁と床以外のタイルであれば有効とする
      if (
        tileType !== TILES.FLOOR &&
        tileType !== TILES.WALL &&
        tileType !== TILES.FLOOR_ICE &&
        tileType !== TILES.CARPET_TOP_LEFT &&
        tileType !== TILES.CARPET_TOP_RIGHT &&
        tileType !== TILES.CARPET_BOTTOM_LEFT &&
        tileType !== TILES.CARPET_BOTTOM_RIGHT &&
        tileType !== TILES.CARPET_TOP &&
        tileType !== TILES.CARPET_BOTTOM &&
        tileType !== TILES.CARPET_LEFT &&
        tileType !== TILES.CARPET_RIGHT &&
        tileType !== TILES.CARPET_MIDDLE
      ) {
        handleTileClick(tileType);
        foundValidTile = true;
        break;
      }
    }

    if (!foundValidTile) {
      setMessage('近くに何もないようだ');
    }
  };

  return {
    message,
    handleTileClick,
    handleAButtonPress,
    treasureRedGoldTaken,
    treasureRedGoldTaken2,
    treasureGreenGoldTaken,
  };
}
