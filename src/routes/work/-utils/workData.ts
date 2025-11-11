import type { MicroCMSBlog, MicroCMSListResponse } from '@/types/microcms';

import { client } from '@/lib/microcms';

/**
 * 実績一覧を取得する
 * getAllContentsメソッドを使用して全件取得
 */
export const getWorks = async (): Promise<
  MicroCMSListResponse<MicroCMSBlog>
> => {
  // getAllContentsで全件取得（自動的にページネーション処理される）
  const contents = await client.getAllContents<MicroCMSBlog>({
    endpoint: 'blogs',
  });

  // 既存のコードとの互換性を保つためにMicroCMSListResponse形式で返す
  return {
    contents,
    limit: contents.length,
    offset: 0,
    totalCount: contents.length,
  };
};

/**
 * 実績詳細を取得する
 */
export const getWork = async (id: string): Promise<MicroCMSBlog> => {
  const response = await client.get<MicroCMSBlog>({
    contentId: id,
    endpoint: 'blogs',
  });

  return response;
};
