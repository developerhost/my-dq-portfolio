export interface Artist {
  name: string;
}

export interface AlbumImage {
  url: string;
}

export interface Album {
  images: AlbumImage[];
}

export interface Track {
  album: Album;
  artists: Artist[];
  name: string;
  preview_url?: string;
}

export interface TrackItem {
  track: Track;
}
