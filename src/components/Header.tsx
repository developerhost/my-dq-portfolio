import { Link } from '@tanstack/react-router';
import { FaHome, FaShareAlt, FaUser } from 'react-icons/fa';
import { BgmPlayer } from '@/components/BgmPlayer';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-2 flex gap-2 justify-between bg-opacity-10 shadow-md z-10 border-2">
      <div className="flex gap-2">
        <Link to="/" className="[&.active]:font-bold flex items-center gap-1">
          <FaHome /> Home
        </Link>
        <Link
          to="/profile"
          className="[&.active]:font-bold flex items-center gap-1"
        >
          <FaUser /> Profile
        </Link>
        <Link
          to="/sns"
          className="[&.active]:font-bold flex items-center gap-1"
        >
          <FaShareAlt /> SNS
        </Link>
      </div>
      <BgmPlayer src="/bgm/8bit-jo-jokyoku.mp3" />
    </header>
  );
};
