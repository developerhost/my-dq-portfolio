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
}

const GameController: React.FC<GameControllerProps> = ({ moveHero }) => {
  return (
    <div className="w-24 h-24 relative">
      <button
        onClick={() => moveHero('ArrowUp')}
        aria-label="上"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <ChevronUp className="w-4 h-4 text-gray-700" />
      </button>
      <button
        onClick={() => moveHero('ArrowDown')}
        aria-label="下"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <ChevronDown className="w-4 h-4 text-gray-700" />
      </button>
      <button
        onClick={() => moveHero('ArrowLeft')}
        aria-label="左"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <ChevronLeft className="w-4 h-4 text-gray-700" />
      </button>
      <button
        onClick={() => moveHero('ArrowRight')}
        aria-label="右"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <ChevronRight className="w-4 h-4 text-gray-700" />
      </button>
    </div>
  );
};

export default GameController;
