import type { NumberRange, Prettify } from '@/types';

/* ゲームのマップを表す2次元配列を表します */
export type GameGrid = ReadonlyArray<ReadonlyArray<number>>;

/* ゲームのマップ上の行を表します */
export type Row<T extends GameGrid> = Prettify<NumberRange<0, T['length']>> &
  number;

/* ゲームのマップ上の列を表します */
export type Col<T extends GameGrid> = Prettify<
  NumberRange<0, T[number]['length']>
> &
  number;

/* ゲームのマップ上の位置を表します */
export type Position<T extends GameGrid> = {
  col: Col<T>;
  row: Row<T>;
};

/* ゲームのマップ上の方向を表します */
export const Direction = [
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
] as const;

export type Direction = (typeof Direction)[number];
