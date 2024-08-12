import { createLazyFileRoute } from '@tanstack/react-router';
import { Tile } from './Tile';
import ChatMessage from '@/components/ChatMessage';
import { useHeroMovement } from '@/hooks/useHeroMovement';
import { useMessage } from './-hooks/useMessage';
import { TILES } from '@/constants';

export const Route = createLazyFileRoute('/room/')({
  component: Room,
});

export function Room() {
  const roomMap = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 4, 5, 8, 8, 8, 0, 6, 9],
    [9, 8, 8, 8, 8, 8, 8, 8, 9],
    [9, 8, 8, 8, 1, 8, 8, 2, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
  ];

  const initialPosition = { row: 1, col: 6 };

  const heroPosition = useHeroMovement(initialPosition, roomMap);
  const {
    message,
    handleTileClick,
    treasureRedGoldTaken,
    treasureGreenGoldTaken,
  } = useMessage();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
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
                key={`${rowIndex}-${colIndex}`}
                className="flex items-center justify-center w-8 h-8 bg-gray-800 border border-gray-700"
              >
                <Tile
                  type={type}
                  onClick={() => handleTileClick(type)}
                  isTreasureRedGoldTaken={treasureRedGoldTaken}
                  isTreasureGreenGoldTaken={treasureGreenGoldTaken}
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
}
