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
  eyecatch?: MicroCMSImage;
  id: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
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
