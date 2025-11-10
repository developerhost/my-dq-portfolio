/**
 * microCMS API レスポンスの型定義
 */

/**
 * 画像の型定義
 */
export type MicroCMSImage = {
  height: number;
  url: string;
  width: number;
};

/**
 * カテゴリーの型定義
 */
export type MicroCMSCategory = {
  createdAt: string;
  id: string;
  name: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

/**
 * ブログコンテンツの型定義
 */
export type MicroCMSBlog = {
  category?: MicroCMSCategory;
  content: string;
  createdAt: string;
  end?: string;
  eyecatch?: MicroCMSImage;
  id: string;
  languages?: string[];
  libraries?: string[];
  publishedAt: string;
  revisedAt: string;
  server?: string[];
  start?: string;
  title: string;
  tools?: string[];
  updatedAt: string;
};

/**
 * リストレスポンスの型定義
 */
export type MicroCMSListResponse<T> = {
  contents: T[];
  limit: number;
  offset: number;
  totalCount: number;
};
