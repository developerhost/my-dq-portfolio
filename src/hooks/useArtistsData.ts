/**
 * このフックは、複数のアーティストの詳細情報とトップトラック情報を一括して管理するためのものです。
 *
 * 各アーティストごとにキー（例: "avicii", "mrChildren", "cloudy"）を指定してデータの取得・更新が可能です。
 * 初期値は空のオブジェクトとしており、必要に応じて各アーティストのデータを設定してください。
 *
 * 使用例:
 * const [artistsData, setArtistData] = useArtistsData();
 *
 * // aviciiのデータを設定する場合
 * setArtistData("avicii", {
 *   artist: { ... }, // ArtistDetails型のデータ
 *   topTrack: { ... } // Track型のデータ
 * });
 *
 * // mrChildrenのデータをリセットする場合
 * setArtistData("mrChildren", undefined);
 *
 * @returns [artistsData, setArtistData] アーティストデータのオブジェクトと更新関数
 */

import { useState } from 'react';

import type { ArtistDetails, Track } from '../components/MusicPlayer/type';

export type ArtistsData = {
  [key: string]:
    | {
        artist: ArtistDetails;
        topTrack: Track;
      }
    | undefined;
};

export const useArtistsData = (): [
  ArtistsData,
  (
    key: string,
    data: { artist: ArtistDetails; topTrack: Track } | undefined
  ) => void,
] => {
  const [data, setData] = useState<ArtistsData>({});

  const setArtistData = (
    key: string,
    artistData: { artist: ArtistDetails; topTrack: Track } | undefined
  ) => {
    setData((prev) => ({ ...prev, [key]: artistData }));
  };

  return [data, setArtistData];
};
