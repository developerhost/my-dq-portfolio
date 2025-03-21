/* eslint-disable react/jsx-sort-props */
import { useState, useEffect, useCallback } from 'react';

import { ArtistCard } from './ArtistCard';
import { CLIENT_ID, CLIENT_SECRET } from './constants';

import type { Track, ArtistDetails } from './type';

/*
  注意: この実装はデモ用です。本番環境ではクライアント側で Client Secret を扱うのはセキュリティ上好ましくないため、
  サーバー経由でアクセストークンを取得する実装に変更してください。
  下記の Spotify API のクライアントクレデンシャルは .env ファイルから読み込みます。
*/

// アーティスト名で検索する
const AVICII_NAME = 'Avicii';
const MRCHILDREN_NAME = 'Mr.Children';

const MusicPlayer = () => {
  const [aviciiData, setAviciiData] = useState<{
    artist: ArtistDetails;
    topTrack: Track;
  } | null>(null);
  const [mrChildrenData, setMrChildrenData] = useState<{
    artist: ArtistDetails;
    topTrack: Track;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const clientId = CLIENT_ID;
  const clientSecret = CLIENT_SECRET;

  // アクセストークンを取得する共通関数
  const fetchAccessToken = useCallback(async (): Promise<string> => {
    const tokenResponse = await fetch(
      'https://accounts.spotify.com/api/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
        },
        body: 'grant_type=client_credentials',
      }
    );
    const tokenData = await tokenResponse.json();
    return tokenData.access_token;
  }, [clientId, clientSecret]);

  // 指定したアーティスト名で検索し、IDを取得する関数
  const getArtistIdByName = useCallback(
    async (artistName: string): Promise<string> => {
      const accessToken = await fetchAccessToken();
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
      return items[0].id;
    },
    [fetchAccessToken]
  );

  // 指定したアーティスト名のトップトラックを取得する関数（国コードはJP）
  const fetchTopTrack = useCallback(
    async (
      artistName: string
    ): Promise<{ artist: ArtistDetails; topTrack: Track }> => {
      const accessToken = await fetchAccessToken();
      const artistId = await getArtistIdByName(artistName);
      // アーティストの情報取得
      const artistResponse = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}`,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );
      const artistData: ArtistDetails = await artistResponse.json();
      // アーティストのトップトラック取得
      const topTracksResponse = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=JP`,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );
      const topTracksData = await topTracksResponse.json();
      // 一番人気のトラック（配列の先頭を使用）
      const topTrack: Track = topTracksData.tracks[0];
      return { artist: artistData, topTrack };
    },
    [fetchAccessToken, getArtistIdByName]
  );

  // 両アーティストの情報とトップトラックを一括取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [avicii, mrChildren] = await Promise.all([
          fetchTopTrack(AVICII_NAME),
          fetchTopTrack(MRCHILDREN_NAME),
        ]);
        setAviciiData(avicii);
        setMrChildrenData(mrChildren);
      } catch (err) {
        console.error('Error fetching top tracks:', err);
        setError('トップトラックの取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchTopTrack]);

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
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
