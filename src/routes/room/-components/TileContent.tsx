import Cat from '@/assets/img/character/cat.svg';
import Hero from '@/assets/img/character/hero.svg';
import Murabito from '@/assets/img/character/murabito.svg';
import SoldierBlue from '@/assets/img/character/soldier_blue.svg';
import SoldierRed from '@/assets/img/character/soldier_red.svg';
import Bed from '@/assets/img/object/bed.svg';
import Floor from '@/assets/img/tile/floor.svg';
import Wall from '@/assets/img/tile/wall.svg';
import TreasureGreenGold from '@/assets/img/treasure/treasure_green_gold.svg';
import TreasureGreenGoldEmpty from '@/assets/img/treasure/treasure_green_gold_empty.svg';
import TreasureRedGold from '@/assets/img/treasure/treasure_red_gold.svg';
import TreasureRedGoldEmpty from '@/assets/img/treasure/treasure_red_gold_empty.svg';
import { TILES } from '@/constants';

interface TileContentProps {
  isTreasureGreenGoldTaken: boolean;
  isTreasureRedGoldTaken: boolean;
  onClick: () => void;
  type: number;
}

const TileContent = ({
  type,
  isTreasureRedGoldTaken,
  isTreasureGreenGoldTaken,
  onClick,
}: TileContentProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  const interactiveProps = {
    role: 'button',
    tabIndex: 0,
    onClick,
    onKeyDown: handleKeyDown,
  };

  switch (type) {
    case TILES.HERO:
      return (
        <img
          alt="Hero"
          className="w-full h-full absolute z-10"
          src={Hero}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
          {...interactiveProps}
        />
      );
    case TILES.MURABITO:
      return (
        <img
          alt="Murabito"
          className="w-full h-full absolute z-10"
          src={Murabito}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
          {...interactiveProps}
        />
      );
    case TILES.CAT:
      return (
        <img
          alt="Cat"
          className="w-full h-full absolute z-10"
          src={Cat}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
          {...interactiveProps}
        />
      );
    case TILES.TREASURE_RED_GOLD:
      return (
        <img
          alt="Treasure Red Gold"
          className="w-full h-full absolute z-10"
          src={isTreasureRedGoldTaken ? TreasureRedGoldEmpty : TreasureRedGold}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
          {...interactiveProps}
        />
      );
    case TILES.TREASURE_GREEN_GOLD:
      return (
        <img
          alt="Treasure Green Gold"
          className="w-full h-full absolute z-10"
          src={
            isTreasureGreenGoldTaken
              ? TreasureGreenGoldEmpty
              : TreasureGreenGold
          }
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
          {...interactiveProps}
        />
      );
    case TILES.SOLDER_RED:
      return (
        <img
          alt="Soldier Red"
          className="w-full h-full absolute z-10"
          src={SoldierRed}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
          {...interactiveProps}
        />
      );
    case TILES.SOLDER_BLUE:
      return (
        <img
          alt="Soldier Blue"
          className="w-full h-full absolute z-10"
          src={SoldierBlue}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
          {...interactiveProps}
        />
      );
    case TILES.BED:
      return (
        <img
          alt="Bed"
          className="w-full h-full absolute z-10"
          src={Bed}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
    case TILES.WALL:
      return <img alt="Wall" src={Wall} />;
    default:
      return (
        <img
          alt="Floor"
          className="w-full h-full absolute"
          src={Floor}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
  }
};

export default TileContent;
