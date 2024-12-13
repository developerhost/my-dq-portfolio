import type {
  GameGrid,
  Col,
  Position,
  Row,
  Direction,
} from '@/routes/room/-types/types';

import { TILES } from '@/constants';

function canMoveToTile(tile: number | undefined): boolean {
  return (
    tile === TILES.HERO ||
    tile === TILES.FLOOR ||
    tile === TILES.CARPET_TOP_LEFT ||
    tile === TILES.CARPET_TOP_RIGHT ||
    tile === TILES.CARPET_BOTTOM_LEFT ||
    tile === TILES.CARPET_BOTTOM_RIGHT ||
    tile === TILES.CARPET_TOP ||
    tile === TILES.CARPET_BOTTOM ||
    tile === TILES.CARPET_LEFT ||
    tile === TILES.CARPET_RIGHT ||
    tile === TILES.CARPET_MIDDLE ||
    tile === TILES.FLOOR_ICE
  );
}

const decrementRow = <T extends GameGrid>(row: Row<T>): Row<T> =>
  Math.max(row - 1, 0) as Row<T>;
const incrementRow = <T extends GameGrid>(map: T, row: Row<T>): Row<T> =>
  Math.min(map.length - 1, row + 1) as Row<T>;
const decrementCol = <T extends GameGrid>(col: Col<T>): Col<T> =>
  Math.max(col - 1, 0) as Col<T>;
const incrementCol = <T extends GameGrid>(map: T, col: Col<T>): Col<T> =>
  Math.min(map[0]?.length ?? 0 - 1, col + 1) as Col<T>;

export function moveHero<T extends GameGrid>(
  map: T,
  direction: Direction,
  prevPosition: Position<T>
): Position<T> {
  const { row, col } = prevPosition;

  const targetMap = {
    ArrowUp: { row: decrementRow<T>(row), col },
    ArrowDown: { row: incrementRow(map, row), col },
    ArrowLeft: { row, col: decrementCol(col) },
    ArrowRight: { row, col: incrementCol(map, col) },
  } as const satisfies Record<Direction, Position<T>>;

  const targetPosition: Position<T> = targetMap[direction];
  const targetTile = map[targetPosition.row]?.[targetPosition.col];
  return canMoveToTile(targetTile) ? targetPosition : prevPosition;
}
