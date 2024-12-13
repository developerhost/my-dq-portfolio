import type { GameGrid, Position } from '../-types/types';

export const ROOM_MAP = [
  [9, 24, 15, 19, 19, 19, 16, 24, 9],
  [9, 1, 2, 23, 25, 23, 0, 6, 9],
  [9, 24, 21, 23, 23, 23, 22, 24, 9],
  [9, 24, 21, 23, 23, 23, 22, 24, 9],
  [9, 24, 21, 4, 5, 13, 22, 24, 9],
  [9, 24, 21, 23, 23, 23, 22, 24, 9],
  [9, 24, 21, 14, 23, 14, 22, 24, 9],
  [9, 24, 17, 10, 23, 11, 18, 24, 9],
  [9, 9, 9, 9, 23, 9, 9, 9, 9],
] as const satisfies GameGrid;

export const initialPosition = { row: 1, col: 6 } as const satisfies Position<
  typeof ROOM_MAP
>;
