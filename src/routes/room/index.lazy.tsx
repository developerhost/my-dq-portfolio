import { createLazyFileRoute } from '@tanstack/react-router';

import { Tile } from './-components/Tile';
import { initialPosition, ROOM_MAP } from './-const/const';
import { useMessage } from './-hooks/useMessage';

import ChatMessage from '@/components/ChatMessage';
import GameController from '@/components/GameController';
import { TILES } from '@/constants';
import { useHeroMovement } from '@/hooks/useHeroMovement';

export const Room = () => {
  const { heroPosition, moveHero } = useHeroMovement(initialPosition, ROOM_MAP);
  const {
    message,
    handleTileClick,
    handleAButtonPress,
    treasureRedGoldTaken,
    treasureGreenGoldTaken,
  } = useMessage();

  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center"
      style={{
        WebkitUserSelect: 'none' /* Safari */,
        userSelect: 'none',
      }}
    >
      {/* ゲーム画面 */}
      <div
        className="relative w-full max-w-4xl aspect-[4/3] lg:aspect-video  bg-black border-2 border-gray-700 md:mt-8"
        style={{
          WebkitUserSelect: 'none' /* Safari */,
          userSelect: 'none',
        }}
      >
        {/* タイル表示 */}
        <div
          className="grid grid-cols-9 gap-0.5 w-full h-full"
          style={{
            WebkitUserSelect: 'none' /* Safari */,
            userSelect: 'none',
          }}
        >
          {ROOM_MAP.flatMap((row, rowIndex) =>
            row.map((tile, colIndex) => {
              const isHeroPosition =
                rowIndex === heroPosition.row && colIndex === heroPosition.col;
              const isPreviousHeroPosition = ROOM_MAP[rowIndex][colIndex] === 0;

              const type = isHeroPosition
                ? TILES.HERO
                : isPreviousHeroPosition
                  ? TILES.FLOOR
                  : tile;

              return (
                <div
                  className="flex items-center justify-center bg-gray-800 border border-gray-700"
                  key={`${rowIndex}-${colIndex}`}
                  style={{
                    WebkitUserSelect: 'none' /* Safari */,
                    userSelect: 'none',
                  }}
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
        {/* チャット表示 */}
        {message && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 bg-black bg-opacity-70 p-4 rounded border border-gray-500">
            <ChatMessage message={message} />
          </div>
        )}
      </div>
      <GameController
        moveHero={moveHero}
        onAButtonPress={() => handleAButtonPress(heroPosition, ROOM_MAP)}
      />
    </div>
  );
};

export const Route = createLazyFileRoute('/room/')({
  component: Room,
});
