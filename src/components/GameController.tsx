import React from 'react';

import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

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
  return (
    <div className="flex items-center justify-between w-full max-w-md p-4 bg-white rounded-lg shadow-md">
      {/* 矢印ボタン */}
      <div className="w-32 h-32 relative">
        <button
          aria-label="上"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => moveHero('ArrowUp')}
        >
          <ChevronUp className="w-4 h-4 text-gray-700" />
        </button>
        <button
          aria-label="下"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => moveHero('ArrowDown')}
        >
          <ChevronDown className="w-4 h-4 text-gray-700" />
        </button>
        <button
          aria-label="左"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => moveHero('ArrowLeft')}
        >
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>
        <button
          aria-label="右"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => moveHero('ArrowRight')}
        >
          <ChevronRight className="w-4 h-4 text-gray-700" />
        </button>
      </div>
      {/* Aボタン */}
      <button
        aria-label="Aボタン"
        className="w-16 h-16 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-full flex items-center justify-center text-white font-bold text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={onAButtonPress}
      >
        A
      </button>
    </div>
  );
};

export default GameController;
