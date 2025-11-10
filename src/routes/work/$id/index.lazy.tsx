/* eslint-disable react/no-danger */
import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute, Link, useParams } from '@tanstack/react-router';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';

import { getWork } from '../-utils/workData';
import 'zenn-content-css';

export const WorkDetail = () => {
  const { id } = useParams({
    from: '/work/$id/',
  });

  const {
    data: work,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => getWork(id),
    queryKey: ['work', id],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-lg">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-lg text-red-500">
            エラーが発生しました: {error.message}
          </p>
        </div>
      </div>
    );
  }

  if (!work) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-lg">実績が見つかりませんでした</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      {/* 戻るボタン */}
      <Link
        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-6 transition-colors"
        to="/work"
      >
        <ArrowLeft size={20} />
        実績一覧に戻る
      </Link>

      {/* アイキャッチ画像 */}
      {work.eyecatch && (
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-6 bg-gray-200 dark:bg-gray-700">
          <img
            alt={work.title}
            className="w-full h-full object-cover"
            src={work.eyecatch.url}
          />
        </div>
      )}

      {/* タイトル */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{work.title}</h1>

      {/* メタ情報 */}
      <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-gray-600 dark:text-gray-400">
        {/* カテゴリー */}
        {work.category && (
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
            {work.category.name}
          </span>
        )}

        {/* 公開日 */}
        <time dateTime={work.publishedAt}>
          {format(new Date(work.publishedAt), 'yyyy年MM月dd日')}
        </time>

        {/* 更新日（公開日と異なる場合のみ表示） */}
        {work.publishedAt !== work.updatedAt && (
          <span className="text-xs">
            (更新: {format(new Date(work.updatedAt), 'yyyy年MM月dd日')})
          </span>
        )}
      </div>

      {/* コンテンツ */}
      <div className="border-t dark:border-gray-700 pt-6">
        <div
          className="znc prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: work.content }}
        />
      </div>

      {/* 戻るボタン（下部） */}
      <div className="mt-12 pt-8 border-t dark:border-gray-700">
        <Link
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
          to="/work"
        >
          <ArrowLeft size={20} />
          実績一覧に戻る
        </Link>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/work/$id/')({
  component: WorkDetail,
});
