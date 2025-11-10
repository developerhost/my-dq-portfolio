import React from 'react';

import { useLongPress } from '@/hooks/useLongPress';

interface GameControllerProps {
  moveHero: (
    direction: 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'
  ) => void;
  onAButtonPress: () => void;
}

const GameController: React.FC<GameControllerProps> = ({
  moveHero,
  onAButtonPress,
}) => {
  const handleUp = useLongPress({
    onClick: () => moveHero('ArrowUp'), // 短押し
    onLongPress: () => moveHero('ArrowUp'), // 長押し
    delay: 100, // 長押し時の連続コール間隔
    threshold: 300, // 短押し判定のための閾値(ミリ秒)
  });

  const handleDown = useLongPress({
    onClick: () => moveHero('ArrowDown'),
    onLongPress: () => moveHero('ArrowDown'),
    delay: 100,
    threshold: 300,
  });

  const handleLeft = useLongPress({
    onClick: () => moveHero('ArrowLeft'),
    onLongPress: () => moveHero('ArrowLeft'),
    delay: 100,
    threshold: 300,
  });

  const handleRight = useLongPress({
    onClick: () => moveHero('ArrowRight'),
    onLongPress: () => moveHero('ArrowRight'),
    delay: 100,
    threshold: 300,
  });

  return (
    <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-lg border-4 border-gray-800 w-full max-w-md mx-auto">
      <div className="flex justify-between items-center w-full">
        {/* 矢印ボタンエリア */}
        <div className="relative w-32 h-32 bg-gray-800 rounded-full border-4 border-gray-800 flex items-center justify-center">
          <button
            aria-label="上"
            className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-md shadow-inner hover:bg-gray-400 active:bg-gray-500"
            {...handleUp}
            style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
          />
          <button
            aria-label="下"
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-md shadow-inner hover:bg-gray-400 active:bg-gray-500"
            {...handleDown}
            style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
          />
          <button
            aria-label="左"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-300 rounded-md shadow-inner hover:bg-gray-400 active:bg-gray-500"
            {...handleLeft}
            style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
          />
          <button
            aria-label="右"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-300 rounded-md shadow-inner hover:bg-gray-400 active:bg-gray-500"
            {...handleRight}
            style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
          />
        </div>

        <button
          aria-label="Aボタン"
          className="ml-8 w-16 h-16 bg-red-800 hover:bg-red-900 active:bg-red-800 rounded-full shadow-md border-4 border-red-900 flex items-center justify-center text-white font-bold text-xl"
          onClick={onAButtonPress}
          style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
        >
          A
        </button>
      </div>
    </div>
  );
};

export default GameController;
