// 参考:https://zenn.dev/jinkutoriu/articles/573b2ac519cd0c

// 与えられた数字になるまで、配列に配列自身の長さを組み込んでいき、
// 最終的に、配列の長さと与えられた数字が一致した場合、配列の中身をすべて返却する

/**
 * 与えられた型 T をそのまま展開し、読みやすく整形した型を生成します。
 * @template T - 整形したい型
 * @example
 * type Example = Prettify<{ a: string, b: number }>;
 * // => { a: string, b: number }
 */
export type Prettify<T> = { [K in keyof T]: T[K] };

/**
 * 与えられた数字 N に対して、0 から (N-1) までの数値の列挙型を生成します。
 * 再帰的に配列の長さを増やすことで実現しています。
 *
 * @template N - 列挙する最大値（この値は含まれません）
 * @template Acc - 再帰的に構築される配列（内部使用のため指定する必要はありません）
 * @example
 * type Example = Enumerate<5>;
 * // => 0 | 1 | 2 | 3 | 4
 */
export type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

/**
 * 指定された範囲 [F, T) 内の数値を列挙する型を生成します。
 * 開始値 F は含まれ、終了値 T は含まれません。
 *
 * @template F - 範囲の開始値
 * @template T - 範囲の終了値（この値は含まれません）
 * @example
 * type Example = NumberRange<2, 5>;
 * // => 2 | 3 | 4
 */
export type NumberRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;
