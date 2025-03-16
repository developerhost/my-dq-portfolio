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

export interface ArtistDetails {
  external_urls: { spotify: string };
  followers: { total: number };
  genres: string[];
  href: string;
  id: string;
  images: AlbumImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}