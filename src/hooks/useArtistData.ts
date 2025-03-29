/**
 * このフックは、アーティストの詳細情報とトップトラック情報の状態管理を行います。
 *
 * 複数のアーティストのデータ（例: Avicii、Mr.Children、Cloudy 等）を共通化するために利用します。
 * 初期値は null としており、必要に応じてデータを更新することで各アーティストの情報を管理できます。
 *
 * @returns [artistData, setArtistData] アーティストデータの state と更新関数
 */

import { useState } from 'react';

import type { ArtistDetails, Track } from '../components/MusicPlayer/type';

export type ArtistData = {
  artist: ArtistDetails;
  topTrack: Track;
} | null;

export const useArtistData = (): [
  ArtistData,
  React.Dispatch<React.SetStateAction<ArtistData>>,
] => {
  return useState<ArtistData>(null);
};
