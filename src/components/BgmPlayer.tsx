import { useState } from 'react';

import ReactHowler from 'react-howler';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export const BgmPlayer = ({ src }: { src: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const volume = 0.3;

  const toggleBGM = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-gray-200 p-2 rounded text-center text-black"
        onClick={toggleBGM}
      >
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
      <ReactHowler loop playing={isPlaying} src={src} volume={volume} />
    </div>
  );
}
