import { useState } from 'react';

import type { ArtistDetails, Track } from './type';

/** 共通化されたアーティストカードコンポーネント
 * このコンポーネントは、アーティストの情報を表示するためのものです。
 */
export const ArtistCard = ({
  title,
  data,
}: {
  data: { artist: ArtistDetails; topTrack: Track };
  title: string;
}) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handlePlay = (previewUrl: string) => {
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(previewUrl);
    setAudio(newAudio);
    newAudio.play();
  };

  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      {data.artist.images && data.artist.images[0] && (
        <img
          alt={data.artist.name}
          className="w-32 h-32 object-cover mb-2"
          src={data.artist.images[0].url}
        />
      )}
      <p>
        <strong>トップトラック:</strong> {data.topTrack.name}
      </p>
      {data.topTrack.album.images && data.topTrack.album.images[0] && (
        <img
          alt={data.topTrack.name}
          className="w-full h-48 object-cover mb-2"
          src={data.topTrack.album.images[0].url}
        />
      )}
      {data.topTrack.preview_url ? (
        <button
          className="bg-blue-500 hover:bg-blue-600 mt-2 px-4 py-2 rounded text-white"
          onClick={() => {
            const url = data.topTrack.preview_url;
            if (url) {
              handlePlay(url);
            }
          }}
        >
          再生
        </button>
      ) : (
        <p className="mt-2 text-red-500">♫</p>
      )}
    </div>
  );
};
