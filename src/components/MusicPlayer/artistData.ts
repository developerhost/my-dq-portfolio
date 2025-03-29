/**
 * アーティストデータの共通定義
 *
 * このファイルでは、アプリ内で利用するアーティストのデータを一元管理しています。
 * 新しいアーティストを追加する場合も、このファイルにオブジェクトを追加するだけで簡単に対応可能です。
 *
 * 例:
 *   {
 *     id: 'artist3',
 *     name: 'アーティスト３',
 *     image: '/assets/img/artist3.jpg',
 *     description: 'アーティスト３の説明文'
 *   }
 */

import { Artist } from "./type";

export const artists: Artist[] = [
  {
    id: "artist1",
    name: "アーティスト１",
    image: "/assets/img/artist1.jpg",
    description: "アーティスト１の特徴や説明文をここに記述します。",
  },
  {
    id: "artist2",
    name: "アーティスト２",
    image: "/assets/img/artist2.jpg",
    description: "アーティスト２の特徴や説明文をここに記述します。",
  },
  // ここに新しいアーティスト情報を追加してください
];
