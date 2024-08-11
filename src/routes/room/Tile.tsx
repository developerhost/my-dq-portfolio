import { createFileRoute } from '@tanstack/react-router';
import { FaUser, FaBoxOpen, FaBox } from 'react-icons/fa';
import { GiStoneWall } from 'react-icons/gi';

export const Route = createFileRoute('/room/Tile')({
  component: () => Tile,
});

export function Tile({ type }: { type: number }) {
  switch (type) {
    case 0:
      return <FaUser className="text-green-500" />; // キャラクター
    case 1:
      return <FaUser className="text-blue-500" />; // 人オブジェクト
    case 2:
      return <div className="bg-gray-300 w-full h-full" />; // 床オブジェクト
    case 3:
      return <div className="bg-black w-full h-full" />; // マップ外
    case 4:
      return <FaBoxOpen className="text-yellow-500" />; // 宝箱オブジェクト①
    case 5:
      return <FaBox className="text-yellow-700" />; // 宝箱オブジェクト②
    case 9:
      return <GiStoneWall className="text-gray-700" />; // 壁オブジェクト
    default:
      return <div className="bg-gray-300 w-full h-full" />; // デフォルト: 床
  }
}
