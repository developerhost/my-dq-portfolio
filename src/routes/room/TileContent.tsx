import Hero from '@/assets/img/character/hero.svg';
import Murabito from '@/assets/img/character/murabito.svg';
import Cat from '@/assets/img/character/cat.svg';
import Bed from '@/assets/img/object/bed.svg';
import TreasureRedGold from '@/assets/img/treasure/treasure_red_gold.svg';
import TreasureRedGoldEmpty from '@/assets/img/treasure/treasure_red_gold_empty.svg';
import TreasureGreenGold from '@/assets/img/treasure/treasure_green_gold.svg';
import TreasureGreenGoldEmpty from '@/assets/img/treasure/treasure_green_gold_empty.svg';
import Wall from '@/assets/img/tile/wall.svg';
import Floor from '@/assets/img/tile/floor.svg';
import { TILES } from '@/constants';
import { createFileRoute } from '@tanstack/react-router';

interface TileContentProps {
  type: number;
  onClick: () => void;
  isTreasureRedGoldTaken: boolean;
  isTreasureGreenGoldTaken: boolean;
}

export const Route = createFileRoute('/room/TileContent')({
  component: () => TileContent,
});

const TileContent = ({
  type,
  isTreasureRedGoldTaken,
  isTreasureGreenGoldTaken,
  onClick,
}: TileContentProps) => {
  switch (type) {
    case TILES.HERO:
      return (
        <img
          src={Hero}
          alt="Hero"
          onClick={onClick}
          className="w-full h-full absolute z-10"
        />
      );
    case TILES.MURABITO:
      return (
        <img
          src={Murabito}
          alt="Murabito"
          onClick={onClick}
          className="w-full h-full absolute z-10"
        />
      );
    case TILES.CAT:
      return (
        <img
          src={Cat}
          alt="Cat"
          onClick={onClick}
          className="w-full h-full absolute z-10"
        />
      );
    case TILES.TREASURE_RED_GOLD:
      return (
        <img
          src={isTreasureRedGoldTaken ? TreasureRedGoldEmpty : TreasureRedGold}
          alt="Treasure Red Gold"
          onClick={onClick}
          className="w-full h-full absolute z-10"
        />
      );
    case TILES.TREASURE_GREEN_GOLD:
      return (
        <img
          src={
            isTreasureGreenGoldTaken
              ? TreasureGreenGoldEmpty
              : TreasureGreenGold
          }
          alt="Treasure Green Gold"
          onClick={onClick}
          className="w-full h-full absolute z-10"
        />
      );
    case TILES.BED:
      return (
        <img src={Bed} alt="Bed" className="w-full h-full absolute z-10" />
      );
    case TILES.WALL:
      return <img src={Wall} alt="Wall" />;
    default:
      return <img src={Floor} alt="Floor" className="w-full h-full absolute" />;
  }
};

export default TileContent;
