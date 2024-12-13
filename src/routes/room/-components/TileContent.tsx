import Cat from '@/assets/img/character/cat.svg';
import Monster from '@/assets/img/character/character_monster_dragon_03_red.svg';
import Hero from '@/assets/img/character/hero.svg';
import Murabito from '@/assets/img/character/murabito.svg';
import SoldierBlue from '@/assets/img/character/soldier_blue.svg';
import SoldierRed from '@/assets/img/character/soldier_red.svg';
import Bed from '@/assets/img/object/bed.svg';
import PillarTop from '@/assets/img/object/pillar_top.svg';
import CarpetBottom from '@/assets/img/tile/carpet/maptile_carpet_red_bottom.svg';
import CarpetBottomLeft from '@/assets/img/tile/carpet/maptile_carpet_red_bottom_left.svg';
import CarpetBottomRight from '@/assets/img/tile/carpet/maptile_carpet_red_bottom_right.svg';
import CarpetLeft from '@/assets/img/tile/carpet/maptile_carpet_red_left.svg';
import CarpetMiddle from '@/assets/img/tile/carpet/maptile_carpet_red_middle.svg';
import CarpetRight from '@/assets/img/tile/carpet/maptile_carpet_red_right.svg';
import CarpetTop from '@/assets/img/tile/carpet/maptile_carpet_red_top.svg';
import CarpetTopLeft from '@/assets/img/tile/carpet/maptile_carpet_red_top_left.svg';
import CarpetTopRight from '@/assets/img/tile/carpet/maptile_carpet_red_top_right.svg';
import Floor from '@/assets/img/tile/floor.svg';
import FloorIce from '@/assets/img/tile/maptile_hyoheki.svg';
import Wall from '@/assets/img/tile/wall.svg';
import TreasureGreenGold from '@/assets/img/treasure/treasure_green_gold.svg';
import TreasureGreenGoldEmpty from '@/assets/img/treasure/treasure_green_gold_empty.svg';
import TreasureRedGold from '@/assets/img/treasure/treasure_red_gold.svg';
import TreasureRedGoldEmpty from '@/assets/img/treasure/treasure_red_gold_empty.svg';
import { TILES } from '@/constants';

interface TileContentProps {
  isTreasureGreenGoldTaken: boolean;
  isTreasureRedGoldTaken: boolean;
  isTreasureRedGoldTaken2: boolean;
  onClick: () => void;
  type: number;
}

const TileContent = ({
  type,
  isTreasureRedGoldTaken,
  isTreasureRedGoldTaken2,
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
    case TILES.TREASURE_RED_GOLD2:
      return (
        <img
          alt="Treasure Red Gold"
          className="w-full h-full absolute z-10"
          src={isTreasureRedGoldTaken2 ? TreasureRedGoldEmpty : TreasureRedGold}
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
    case TILES.MONSTER:
      return (
        <img
          alt="Monster"
          className="w-full h-full absolute z-10"
          src={Monster}
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
    case TILES.PILLAR_TOP:
      return (
        <img
          alt="Pillar Top"
          className="w-full h-full absolute z-10"
          src={PillarTop}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
    case TILES.WALL:
      return <img alt="Wall" src={Wall} />;
    case TILES.CARPET_TOP_LEFT:
      return (
        <img
          alt="Carpet Top Left"
          className="w-full h-full absolute z-10"
          src={CarpetTopLeft}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
    case TILES.CARPET_TOP_RIGHT:
      return (
        <img
          alt="Carpet Top Right"
          className="w-full h-full absolute z-10"
          src={CarpetTopRight}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
    case TILES.CARPET_BOTTOM_LEFT:
      return (
        <img
          alt="Carpet Bottom Left"
          className="w-full h-full absolute z-10"
          src={CarpetBottomLeft}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
    case TILES.CARPET_BOTTOM_RIGHT:
      return (
        <img
          alt="Carpet Bottom Right"
          className="w-full h-full absolute z-10"
          src={CarpetBottomRight}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
    case TILES.CARPET_TOP:
      return (
        <img
          alt="Carpet Top"
          className="w-full h-full absolute z-10"
          src={CarpetTop}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
    case TILES.CARPET_BOTTOM:
      return (
        <img
          alt="Carpet Bottom"
          className="w-full h-full absolute z-10"
          src={CarpetBottom}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
    case TILES.CARPET_LEFT:
      return (
        <img
          alt="Carpet Left"
          className="w-full h-full absolute z-10"
          src={CarpetLeft}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
    case TILES.CARPET_RIGHT:
      return (
        <img
          alt="Carpet Right"
          className="w-full h-full absolute z-10"
          src={CarpetRight}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
    case TILES.CARPET_MIDDLE:
      return (
        <img
          alt="Carpet Middle"
          className="w-full h-full absolute z-10"
          src={CarpetMiddle}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
    case TILES.FLOOR_ICE:
      return (
        <img
          alt="Floor Ice"
          className="w-full h-full absolute z-10"
          src={FloorIce}
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        />
      );
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
