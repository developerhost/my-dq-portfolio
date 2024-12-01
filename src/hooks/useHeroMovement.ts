import { useState } from 'react';

import { useKey } from 'react-use';

import { TILES } from '@/constants';

interface Position {
  col: number;
  row: number;
}

interface DirectionMap {
  ArrowDown: 'ArrowDown';
  ArrowLeft: 'ArrowLeft';
  ArrowRight: 'ArrowRight';
  ArrowUp: 'ArrowUp';
}

type Direction = DirectionMap[keyof DirectionMap];

function canMoveToTile(tile: number): boolean {
  return tile === TILES.HERO || tile === TILES.FLOOR;
}

export function useHeroMovement(
  initialPosition: Position,
  roomMap: number[][]
) {
  const [heroPosition, setHeroPosition] = useState(initialPosition);

  const moveHero = (direction: Direction) => {
    setHeroPosition((prevPosition) => {
      const { row, col } = prevPosition;

      // 0と8のタイルは通行可能
      const moveMap: Record<Direction, Position> = {
        ArrowUp:
          row > 0 && canMoveToTile(roomMap[row - 1][col])
            ? { row: row - 1, col }
            : prevPosition,
        ArrowDown:
          row < roomMap.length - 1 && canMoveToTile(roomMap[row + 1][col])
            ? { row: row + 1, col }
            : prevPosition,
        ArrowLeft:
          col > 0 && canMoveToTile(roomMap[row][col - 1])
            ? { row, col: col - 1 }
            : prevPosition,
        ArrowRight:
          col < roomMap[row].length - 1 && canMoveToTile(roomMap[row][col + 1])
            ? { row, col: col + 1 }
            : prevPosition,
      };

      return moveMap[direction];
    });
  };

  // キーボード入力を監視してキャラクターを移動させる
  useKey('ArrowUp', () => moveHero('ArrowUp'));
  useKey('ArrowDown', () => moveHero('ArrowDown'));
  useKey('ArrowLeft', () => moveHero('ArrowLeft'));
  useKey('ArrowRight', () => moveHero('ArrowRight'));

  return { heroPosition, moveHero };
}
