import { createFileRoute } from '@tanstack/react-router';
import { FaBoxOpen, FaBox } from 'react-icons/fa';
import Wall from '@/assets/img/tile/wall.svg';
import Floor from '@/assets/img/tile/floor.svg';
import Hero from '@/assets/img/character/hero.svg';
import Murabito from '@/assets/img/character/murabito.svg';
import Cat from '@/assets/img/character/cat.svg';
import Bed from '@/assets/img/object/bed.svg';

export const Route = createFileRoute('/room/Tile')({
  component: () => Tile,
});

interface TileProps {
  type: number;
  onClick: () => void;
}

export function Tile({ type, onClick }: TileProps) {
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
        return <FaBoxOpen className="text-yellow-500 absolute z-10" />; // 宝箱オブジェクト①
      case 5:
        return <FaBox className="text-yellow-700 absolute z-10" />; // 宝箱オブジェクト②
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
