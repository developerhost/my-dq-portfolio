import TileContent from './TileContent';

import { TILES } from '@/constants';

interface TileProps {
  isTreasureGreenGoldTaken: boolean;
  isTreasureRedGoldTaken: boolean;
  isTreasureRedGoldTaken2: boolean;
  onClick: () => void;
  type: number;
}

export const Tile = ({
  type,
  onClick,
  isTreasureRedGoldTaken,
  isTreasureGreenGoldTaken,
  isTreasureRedGoldTaken2,
}: TileProps) => {
  return (
    <div
      className={`relative w-full h-full ${type !== TILES.WALL ? 'bg-transparent' : ''}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(); // Enterキーまたはスペースキーでクリックをシミュレート
        }
      }}
      role="button"
      style={{
        WebkitUserSelect: 'none' /* Safari */,
        userSelect: 'none',
      }}
      tabIndex={0}
    >
      <TileContent
        isTreasureGreenGoldTaken={isTreasureGreenGoldTaken}
        isTreasureRedGoldTaken={isTreasureRedGoldTaken}
        isTreasureRedGoldTaken2={isTreasureRedGoldTaken2}
        onClick={onClick}
        type={type}
      />
    </div>
  );
};
