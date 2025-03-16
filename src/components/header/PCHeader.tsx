import { Link } from '@tanstack/react-router';
import {
  FaHome,
  FaShareAlt,
  FaUser,
  FaBriefcase,
  FaBlog,
  FaMusic,
} from 'react-icons/fa';
import { SiCodeigniter } from 'react-icons/si';

import { BgmPlayer } from '@/components/BgmPlayer';

export const PCHeader = () => {
  return (
    <header className="hidden md:flex fixed top-0 left-0 w-full p-2 justify-between bg-opacity-10 shadow-md z-10 border-2">
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
        <Link
          className="[&.active]:font-bold flex items-center gap-1"
          to="/developer"
        >
          <SiCodeigniter /> Developer
        </Link>
        <Link
          className="[&.active]:font-bold flex items-center gap-1"
          to="/blog"
        >
          <FaBlog /> Blog
        </Link>
        <Link
          className="[&.active]:font-bold flex items-center gap-1"
          to="/music"
        >
          <FaMusic /> Music
        </Link>
      </div>
      <BgmPlayer src="/bgm/8bit-jo-jokyoku.mp3" />
    </header>
  );
};
