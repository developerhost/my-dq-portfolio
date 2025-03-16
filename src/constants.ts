import { FaHome, FaUser, FaShareAlt, FaBriefcase, FaBlog, FaMusic } from "react-icons/fa";
import { SiCodeigniter } from "react-icons/si";

export const TILES = {
  HERO: 0, // 勇者タイル
  MURABITO: 1, // 村人タイル
  CAT: 2, // 猫タイル
  OUT_OF_MAP: 3, // マップ外タイル
  TREASURE_RED_GOLD: 4, // 宝箱オブジェクト①
  TREASURE_GREEN_GOLD: 5, // 宝箱オブジェクト②
  BED: 6, // ベッドタイル
  FLOOR: 8, // 床タイル
  WALL: 9, // 壁タイル
  SOLDER_RED: 10, // 赤色の兵士
  SOLDER_BLUE: 11, // 青色の兵士
  TREASURE_RED_GOLD2: 13, // 宝箱オブジェクト③
  PILLAR_TOP: 14, // 柱の上部
  CARPET_TOP_LEFT: 15, // カーペットの左上
  CARPET_TOP_RIGHT: 16, // カーペットの右上
  CARPET_BOTTOM_LEFT: 17, // カーペットの左下
  CARPET_BOTTOM_RIGHT: 18, // カーペットの右下
  CARPET_TOP: 19, // カーペットの上
  CARPET_BOTTOM: 20, // カーペットの下
  CARPET_LEFT: 21, // カーペットの左
  CARPET_RIGHT: 22, // カーペットの右
  CARPET_MIDDLE: 23, // カーペットの中央
  FLOOR_ICE: 24, // 氷の床
  MONSTER: 25, // モンスタータイル
} as const;

export const linkItems = [
  { title: 'Home', url: '/', icon: FaHome },
  { title: 'Profile', url: '/profile', icon: FaUser },
  { title: 'SNS', url: '/sns', icon: FaShareAlt },
  { title: 'Portfolio', url: '/portfolio', icon: FaBriefcase },
  { title: 'Developer', url: '/developer', icon: SiCodeigniter },
  { title: 'Blog', url: '/blog', icon: FaBlog },
  { title: 'Music', url: '/music', icon: FaMusic },
];