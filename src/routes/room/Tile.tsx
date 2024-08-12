import { createFileRoute } from '@tanstack/react-router';
import Wall from '@/assets/img/tile/wall.svg';
import Floor from '@/assets/img/tile/floor.svg';
import Hero from '@/assets/img/character/hero.svg';
import Murabito from '@/assets/img/character/murabito.svg';
import Cat from '@/assets/img/character/cat.svg';
import Bed from '@/assets/img/object/bed.svg';
import TreasureRedGold from '@/assets/img/treasure/treasure_red_gold.svg';
import TreasureRedGoldEmpty from '@/assets/img/treasure/treasure_red_gold_empty.svg';
import TreasureGreenGold from '@/assets/img/treasure/treasure_green_gold.svg';
import TreasureGreenGoldEmpty from '@/assets/img/treasure/treasure_green_gold_empty.svg';

export const Route = createFileRoute('/room/Tile')({
  component: () => Tile,
});

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
  const renderTileContent = () => {
    switch (type) {
      case 0:
        return (
          <img
            src={Hero}
            alt="Hero"
            className="w-full h-full absolute z-10"
            onClick={onClick}
          />
        );
      case 1:
        return (
          <img
            src={Murabito}
            alt="Murabito"
            className="w-full h-full absolute z-10"
            onClick={onClick}
          />
        );
      case 2:
        return (
          <img
            src={Cat}
            alt="Cat"
            className="w-full h-full absolute z-10"
            onClick={onClick}
          />
        );
      case 3:
        return <div className="bg-black w-full h-full absolute z-10" />; // マップ外
      case 4:
        return (
          <img
            src={
              isTreasureRedGoldTaken ? TreasureRedGoldEmpty : TreasureRedGold
            }
            alt={
              isTreasureRedGoldTaken
                ? 'TreasureRedGoldEmpty'
                : 'TreasureRedGold'
            }
            className="w-full h-full absolute z-10"
            onClick={onClick}
          />
        ); // 宝箱オブジェクト①
      case 5:
        return (
          <img
            src={
              isTreasureGreenGoldTaken
                ? TreasureGreenGoldEmpty
                : TreasureGreenGold
            }
            alt={
              isTreasureGreenGoldTaken
                ? 'TreasureGreenGoldEmpty'
                : 'TreasureGreenGold'
            }
            className="w-full h-full absolute z-10"
            onClick={onClick}
          />
        ); // 宝箱オブジェクト②
      case 6:
        return (
          <img src={Bed} alt="Bed" className="w-full h-full absolute z-10" />
        );
      case 9:
        return (
          <img src={Wall} alt="Wall" className="w-full h-full absolute z-10" />
        );
      default:
        return <img src={Floor} alt="Floor" className="w-full h-full" />; // デフォルト: 床
    }
  };

  return (
    <div className="relative w-full h-full" onClick={onClick}>
      {type !== 9 && (
        <img src={Floor} alt="Floor" className="w-full h-full absolute" />
      )}{' '}
      {/* Floorを背景として表示 */}
      {renderTileContent()}
    </div>
  );
}
