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
  const handleUp = useLongPress(() => moveHero('ArrowUp'), 100);
  const handleDown = useLongPress(() => moveHero('ArrowDown'), 100);
  const handleLeft = useLongPress(() => moveHero('ArrowLeft'), 100);
  const handleRight = useLongPress(() => moveHero('ArrowRight'), 100);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-lg border-4 border-gray-800 w-full ">
      <div className="flex justify-between items-center w-full">
        {/* 矢印ボタンエリア */}
        <div className="relative w-32 h-32 bg-gray-800 rounded-full border-4 border-gray-800 flex items-center justify-center">
          <button
            aria-label="上"
            className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-md shadow-inner hover:bg-gray-400 active:bg-gray-500"
            {...handleUp}
          />
          <button
            aria-label="下"
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-md shadow-inner hover:bg-gray-400 active:bg-gray-500"
            {...handleDown}
          />
          <button
            aria-label="左"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-300 rounded-md shadow-inner hover:bg-gray-400 active:bg-gray-500"
            {...handleLeft}
          />
          <button
            aria-label="右"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-300 rounded-md shadow-inner hover:bg-gray-400 active:bg-gray-500"
            {...handleRight}
          />
        </div>

        <button
          aria-label="Aボタン"
          className="ml-8 w-16 h-16 bg-red-800 hover:bg-red-900 active:bg-red-800 rounded-full shadow-md border-4 border-red-900 flex items-center justify-center text-white font-bold text-xl"
          onClick={onAButtonPress}
        >
          A
        </button>
      </div>
    </div>
  );
};

export default GameController;
