import { describe, test, expect } from 'vitest';

import { moveHero } from './moveHero';

describe('moveHero 関数のテスト', () => {
  const roomMap = [
    [9, 9, 9],
    [9, 0, 9],
    [9, 8, 9],
  ] as const;

  test('上に移動できる場合', () => {
    const initialPosition = { row: 2, col: 1 } as const;
    const newPosition = moveHero(roomMap, 'ArrowUp', initialPosition);
    expect(newPosition).toEqual({ row: 1, col: 1 });
  });

  test('下に移動できる場合', () => {
    const initialPosition = { row: 1, col: 1 } as const;
    const newPosition = moveHero(roomMap, 'ArrowDown', initialPosition);
    expect(newPosition).toEqual({ row: 2, col: 1 });
  });

  test('左に移動できる場合', () => {
    const initialPosition = { row: 1, col: 2 } as const;
    const newPosition = moveHero(roomMap, 'ArrowLeft', initialPosition);
    expect(newPosition).toEqual({ row: 1, col: 1 });
  });

  test('右に移動できる場合', () => {
    const initialPosition = { row: 1, col: 0 } as const;
    const newPosition = moveHero(roomMap, 'ArrowRight', initialPosition);
    expect(newPosition).toEqual({ row: 1, col: 1 });
  });

  test('移動できない場合', () => {
    const initialPosition = { row: 1, col: 1 } as const;
    const newPosition = moveHero(roomMap, 'ArrowUp', initialPosition);
    expect(newPosition).toEqual(initialPosition);
  });
});
