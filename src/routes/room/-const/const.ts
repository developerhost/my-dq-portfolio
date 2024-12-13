import type { GameGrid, Position } from '../-types/types';

export const ROOM_MAP = [
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 1, 2, 8, 8, 8, 0, 6, 9],
  [9, 8, 8, 8, 8, 8, 8, 8, 9],
  [9, 8, 8, 8, 8, 8, 8, 8, 9],
  [9, 8, 8, 4, 5, 13, 8, 8, 9],
  [9, 8, 8, 8, 8, 8, 8, 8, 9],
  [9, 8, 8, 8, 8, 8, 8, 8, 9],
  [9, 8, 8, 10, 8, 11, 8, 8, 9],
  [9, 9, 9, 9, 8, 9, 9, 9, 9],
] as const satisfies GameGrid;

export const initialPosition = { row: 1, col: 6 } as const satisfies Position<
  typeof ROOM_MAP
>;
