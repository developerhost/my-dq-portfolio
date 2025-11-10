import type { MicroCMSBlog, MicroCMSListResponse } from '@/types/microcms';

import { client } from '@/lib/microcms';

/**
 * 実績一覧を取得する
 */
export const getWorks = async (): Promise<
  MicroCMSListResponse<MicroCMSBlog>
> => {
  const response = await client.get<MicroCMSListResponse<MicroCMSBlog>>({
    endpoint: 'blogs',
  });

  return response;
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
