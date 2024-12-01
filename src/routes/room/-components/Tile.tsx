import TileContent from './TileContent';

import Floor from '@/assets/img/tile/floor.svg';
import { TILES } from '@/constants';

interface TileProps {
  isTreasureGreenGoldTaken: boolean;
  isTreasureRedGoldTaken: boolean;
  onClick: () => void;
  type: number;
}

export const Tile = ({
  type,
  onClick,
  isTreasureRedGoldTaken,
  isTreasureGreenGoldTaken,
}: TileProps) => {
  return (
    <div
      className="relative w-full h-full"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(); // Enterキーまたはスペースキーでクリックをシミュレート
        }
      }}
      role="button"
      tabIndex={0}
    >
      <TileContent
        isTreasureGreenGoldTaken={isTreasureGreenGoldTaken}
        isTreasureRedGoldTaken={isTreasureRedGoldTaken}
        onClick={onClick}
        type={type}
      />
      {type !== TILES.WALL && (
        <img alt="Floor" className="w-full h-full absolute z-0" src={Floor} />
      )}
    </div>
  );
};
