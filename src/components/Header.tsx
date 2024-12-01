import { Link } from '@tanstack/react-router';
import { FaHome, FaShareAlt, FaUser, FaBriefcase } from 'react-icons/fa';

import { BgmPlayer } from '@/components/BgmPlayer';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-2 flex gap-2 justify-between bg-opacity-10 shadow-md z-10 border-2">
      <div className="flex gap-2">
        <Link className="[&.active]:font-bold flex items-center gap-1" to="/">
          <FaHome /> Home
        </Link>
        <Link
          className="[&.active]:font-bold flex items-center gap-1"
          to="/profile"
        >
          <FaUser /> Profile
        </Link>
        <Link
          className="[&.active]:font-bold flex items-center gap-1"
          to="/sns"
        >
          <FaShareAlt /> SNS
        </Link>
        <Link
          className="[&.active]:font-bold flex items-center gap-1"
          to="/portfolio"
        >
          <FaBriefcase /> Portfolio
        </Link>
      </div>
      <BgmPlayer src="/bgm/8bit-jo-jokyoku.mp3" />
    </header>
  );
};
