import { useState } from 'react';
import ReactHowler from 'react-howler';
import { FaPlay, FaPause } from 'react-icons/fa';

export function BgmPlayer({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const volume = 0.3;

  const toggleBGM = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <button
        onClick={toggleBGM}
        className="bg-gray-200 p-2 rounded text-center text-black"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <ReactHowler src={src} playing={isPlaying} loop={true} volume={volume} />
    </div>
  );
}
