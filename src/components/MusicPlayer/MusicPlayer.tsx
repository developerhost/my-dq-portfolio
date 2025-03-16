/* eslint-disable react/jsx-sort-props */
import { useState, useEffect, useCallback } from 'react';

import { useQuery } from '@tanstack/react-query';

import { CLIENT_ID, CLIENT_SECRET, PLAYLIST_ID } from './constants';

import type { Artist, TrackItem, ArtistDetails } from './type';

/*
  注意: この実装はデモ用です。本番環境ではクライアント側で Client Secret を扱うのはセキュリティ上好ましくないため、
  サーバー経由でアクセストークンを取得する実装に変更してください。
  下記の Spotify API のクライアントクレデンシャルは .env ファイルから読み込みます。
*/

const MusicPlayer = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [artistData, setArtistData] = useState<ArtistDetails | null>(null);

  const clientId = CLIENT_ID;
  const clientSecret = CLIENT_SECRET;
  const playlistId = PLAYLIST_ID;

  const fetchPlaylist = async (): Promise<TrackItem[]> => {
    console.log('Fetching access token for playlist...');
    // アクセストークン取得
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
    const accessToken = tokenData.access_token;
    console.log('Access token received:', accessToken);

    console.log('Fetching playlist data...');
    // プレイリストのトラック情報を取得
    const playlistResponse = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    );
    const playlistData = await playlistResponse.json();
    console.log('Playlist data:', playlistData);
    return playlistData.tracks.items;
  };

  const {
    data: tracks = [],
    isLoading,
    error,
  } = useQuery<TrackItem[]>({
    queryKey: ['playlist'],
    queryFn: fetchPlaylist,
  });

  // 新たなデバッグ用関数: アーティスト情報を取得して state に保存する
  const fetchArtist = useCallback(async () => {
    try {
      console.log('Fetching access token for artist...');
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
      const accessToken = tokenData.access_token;
      console.log('Access token for artist:', accessToken);

      console.log('Fetching artist data for ID: 0TnOYISbd1XYRBk9myaseg...');
      const artistResponse = await fetch(
        'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );
      const artistData = await artistResponse.json();
      console.log('Artist data:', artistData);
      setArtistData(artistData);
    } catch (error) {
      console.error('Error fetching artist data:', error);
    }
  }, [clientId, clientSecret]);

  useEffect(() => {
    fetchArtist();
  }, [fetchArtist]);

  const handlePlay = (previewUrl: string) => {
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(previewUrl);
    setAudio(newAudio);
    newAudio.play();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Music Player</h1>

      {artistData && (
        <div className="mb-4 p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Artist Info</h2>
          <p>
            <strong>Name:</strong> {artistData.name}
          </p>
          <p>
            <strong>Followers:</strong> {artistData.followers.total}
          </p>
          {artistData.images && artistData.images[0] && (
            <img
              alt={artistData.name}
              className="w-32 h-32 object-cover"
              src={artistData.images[0].url}
            />
          )}
          <p>
            <strong>Popularity:</strong> {artistData.popularity}
          </p>
          <p>
            <strong>Spotify URI:</strong> {artistData.uri}
          </p>
        </div>
      )}
      {isLoading ? (
        <p>Loading playlist...</p>
      ) : error ? (
        <p>Error loading playlist.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tracks.map((item: TrackItem, index: number) => {
            const track = item.track;
            return (
              <div key={index} className="border rounded p-4 shadow">
                {track.album.images && track.album.images[0] && (
                  <img
                    alt={track.name}
                    className="w-full h-48 object-cover mb-2"
                    src={track.album.images[0].url}
                  />
                )}
                <h2 className="text-lg font-semibold">{track.name}</h2>
                <p className="text-sm text-gray-600">
                  {track.artists
                    .map((artist: Artist) => artist.name)
                    .join(', ')}
                </p>
                {track.preview_url ? (
                  <button
                    className="bg-blue-500 hover:bg-blue-600 mt-2 px-4 py-2 rounded text-white"
                    onClick={() =>
                      track.preview_url && handlePlay(track.preview_url)
                    }
                  >
                    再生
                  </button>
                ) : (
                  <p className="mt-2 text-red-500">プレビューなし</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
