/* eslint-disable react/jsx-sort-props */
import { useState, useEffect, useCallback } from 'react';

import { ArtistCard } from './ArtistCard';
import { CLIENT_ID, CLIENT_SECRET, AVICII_NAME, MRCHILDREN_NAME, CLOUDY_NAME } from './constants';
import { useArtistData } from '../../hooks/useArtistData';

import type { Track, ArtistDetails } from './type';


const MusicPlayer = () => {
  // 各アーティストのデータ管理用のフック
  const [aviciiData, setAviciiData] = useArtistData();
  const [mrChildrenData, setMrChildrenData] = useArtistData();
  const [cloudyData, setCloudyData] = useArtistData();

  // 読み込み状態とエラー状態の管理
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // アクセストークンを取得する共通関数
  const fetchAccessToken = useCallback(async (): Promise<string> => {
    const tokenResponse = await fetch(
      'https://accounts.spotify.com/api/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
        },
        body: 'grant_type=client_credentials',
      }
    );
    const tokenData = await tokenResponse.json();
    return tokenData.access_token;
  }, []);

  // 指定したアーティスト名で検索し、該当アーティストの情報とトップトラックを取得する関数
  const fetchTopTrack = useCallback(
    async (
      artistName: string
    ): Promise<{ artist: ArtistDetails; topTrack: Track }> => {
      const accessToken = await fetchAccessToken();

      // アーティスト検索
      const searchResponse = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent('artist:' + artistName)}&type=artist`,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );
      const searchData = await searchResponse.json();
      const items = searchData.artists.items;
      if (!items || items.length === 0) {
        throw new Error('No artist found for ' + artistName);
      }
      const artistId = items[0].id;

      // アーティスト情報の取得
      const artistResponse = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}`,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );
      const artistData: ArtistDetails = await artistResponse.json();

      // トップトラックの取得（国コードJP）
      const topTracksResponse = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=JP`,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );
      const topTracksData = await topTracksResponse.json();
      const topTrack: Track = topTracksData.tracks[0];

      return { artist: artistData, topTrack };
    },
    [fetchAccessToken]
  );

  // データの一括取得をuseEffectで実行
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [avicii, mrChildren, cloudy] = await Promise.all([
          fetchTopTrack(AVICII_NAME),
          fetchTopTrack(MRCHILDREN_NAME),
          fetchTopTrack(CLOUDY_NAME),
        ]);
        setAviciiData(avicii);
        setMrChildrenData(mrChildren);
        setCloudyData(cloudy);
      } catch (err) {
        console.error('Error fetching top tracks:', err);
        setError('トップトラックの取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchTopTrack, setAviciiData, setMrChildrenData, setCloudyData]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Music Player</h1>
      {loading ? (
        <p>データを読み込み中...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="space-y-8">
          {aviciiData && <ArtistCard title="Avicii" data={aviciiData} />}
          {mrChildrenData && (
            <ArtistCard title="Mr.Children" data={mrChildrenData} />
          )}
          {cloudyData && <ArtistCard title="Cloudy" data={cloudyData} />}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
