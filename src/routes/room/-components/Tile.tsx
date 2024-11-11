import Floor from '@/assets/img/tile/floor.svg';
import { TILES } from '@/constants';
import TileContent from './TileContent';

interface TileProps {
  type: number;
  onClick: () => void;
  isTreasureRedGoldTaken: boolean;
  isTreasureGreenGoldTaken: boolean;
}

export function Tile({
  type,
  onClick,
  isTreasureRedGoldTaken,
  isTreasureGreenGoldTaken,
}: TileProps) {
  return (
    <div className="relative w-full h-full" onClick={onClick}>
      <TileContent
        type={type}
        isTreasureRedGoldTaken={isTreasureRedGoldTaken}
        isTreasureGreenGoldTaken={isTreasureGreenGoldTaken}
        onClick={onClick}
      />
      {type !== TILES.WALL && (
        <img src={Floor} alt="Floor" className="w-full h-full absolute z-0" />
      )}
    </div>
  );
}
