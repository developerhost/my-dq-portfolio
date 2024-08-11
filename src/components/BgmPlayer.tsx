import { useState } from 'react';
import ReactHowler from 'react-howler';
import { FaPlay, FaPause } from 'react-icons/fa';

export function BgmPlayer({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);

  const toggleBGM = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event: { target: { value: string } }) => {
    setVolume(parseFloat(event.target.value));
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <button
        onClick={toggleBGM}
        className="bg-gray-200 p-2 rounded text-center text-black"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="mt-2"
      />
      <ReactHowler src={src} playing={isPlaying} loop={true} volume={volume} />
    </div>
  );
}
