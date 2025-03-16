import { useEffect, useState } from 'react';

import type { Artist, TrackItem } from './type';

/*
  注意: この実装はデモ用です。クライアント側でClient Secretを扱うのはセキュリティ上好ましくありません。
  本番環境ではサーバー経由でアクセストークンを取得する実装に変更してください。
*/

const MusicPlayer = () => {
  const [tracks, setTracks] = useState<TrackItem[]>([]);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Spotify API のクライアントクレデンシャル（デモ用）
  const clientId = '0a10e72ff1c842d68e860cb7ba600d17';
  const clientSecret = '422bc96446304e54857c70db48404ec8';
  // サンプルプレイリスト ID（例として）
  const playlistId = '37i9dQZF1DXcBWIGoYBM5M';

  useEffect(() => {
    const fetchTokenAndPlaylist = async () => {
      try {
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
        setTracks(playlistData.tracks.items);
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
      }
    };

    fetchTokenAndPlaylist();
  }, []);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map((item, index) => {
          const track = item.track;
          return (
            <div className="border rounded p-4 shadow" key={index}>
              {track.album.images && track.album.images[0] && (
                <img
                  alt={track.name}
                  className="w-full h-48 object-cover mb-2"
                  src={track.album.images[0].url}
                />
              )}
              <h2 className="text-lg font-semibold">{track.name}</h2>
              <p className="text-sm text-gray-600">
                {track.artists.map((artist: Artist) => artist.name).join(', ')}
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
    </div>
  );
};

export default MusicPlayer;
