import { createClient } from 'microcms-js-sdk';

/**
 * microCMS クライアント
 * 環境変数から設定を読み込む
 */
export const client = createClient({
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
});
