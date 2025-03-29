/**
 * 定数の共通定義
 *
 * このファイルでは、Spotify API に必要なクライアントIDやシークレット、
 * およびアーティスト名などの定数を管理しています。
 */

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || '';
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET || '';

// アーティスト名の定数
export const AVICII_NAME = 'Avicii';
export const MRCHILDREN_NAME = 'Mr.Children';
export const CLOUDY_NAME = 'Cloudy';
