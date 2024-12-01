import { createLazyFileRoute } from '@tanstack/react-router';

import { Tile } from './-components/Tile';
import { useMessage } from './-hooks/useMessage';

import ChatMessage from '@/components/ChatMessage';
import GameController from '@/components/GameController';
import { TILES } from '@/constants';
import { useHeroMovement } from '@/hooks/useHeroMovement';

export const Room = () => {
  const roomMap = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 4, 5, 8, 8, 8, 0, 6, 9],
    [9, 8, 8, 8, 8, 8, 8, 8, 9],
    [9, 8, 8, 8, 1, 8, 8, 2, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
  ];

  const initialPosition = { row: 1, col: 6 };

  const { heroPosition, moveHero } = useHeroMovement(initialPosition, roomMap);
  const {
    message,
    handleTileClick,
    treasureRedGoldTaken,
    treasureGreenGoldTaken,
  } = useMessage();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <GameController moveHero={moveHero} />
      <div className="grid grid-cols-9 bg-black p-4">
        {roomMap.flatMap((row, rowIndex) =>
          row.map((tile, colIndex) => {
            const isHeroPosition =
              rowIndex === heroPosition.row && colIndex === heroPosition.col;
            const isPreviousHeroPosition = roomMap[rowIndex][colIndex] === 0;

            const type = isHeroPosition
              ? TILES.HERO
              : isPreviousHeroPosition
                ? TILES.FLOOR
                : tile;

            return (
              <div
                className="flex items-center justify-center w-8 h-8 bg-gray-800 border border-gray-700"
                key={`${rowIndex}-${colIndex}`}
              >
                <Tile
                  isTreasureGreenGoldTaken={treasureGreenGoldTaken}
                  isTreasureRedGoldTaken={treasureRedGoldTaken}
                  onClick={() => handleTileClick(type)}
                  type={type}
                />
              </div>
            );
          })
        )}
      </div>
      {message && (
        <div className="mt-4 p-4 border-2 rounded">
          <ChatMessage message={message} />
        </div>
      )}
    </div>
  );
};

export const Route = createLazyFileRoute('/room/')({
  component: Room,
});
