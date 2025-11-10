/* eslint-disable react/no-danger */
import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute, Link, useParams } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import MarkdownIt from 'markdown-it';

import { getWork } from '../-utils/workData';

import { Badge } from '@/components/ui/badge';
import { formatPeriod } from '@/lib/format';

import 'zenn-content-css';

const md = new MarkdownIt({
  breaks: true,
  html: true,
  linkify: true,
});

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

      {/* メタ情報セクション */}
      <div className="space-y-4 mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        {/* 参画期間 */}
        {(work.start || work.end) && (
          <div className="flex items-start gap-3">
            <span className="font-semibold min-w-[100px] text-gray-700 dark:text-gray-300">
              参画期間:
            </span>
            <span className="text-gray-900 dark:text-gray-100">
              {formatPeriod(work.start, work.end)}
            </span>
          </div>
        )}

        {/* ポジション */}
        {work.position && (
          <div className="flex items-start gap-3">
            <span className="font-semibold min-w-[100px] text-gray-700 dark:text-gray-300">
              ポジション:
            </span>
            <span className="text-gray-900 dark:text-gray-100">
              {work.position}
            </span>
          </div>
        )}

        {/* カテゴリー */}
        {work.category && work.category.length > 0 && (
          <div className="flex items-start gap-3">
            <span className="font-semibold min-w-[100px] text-gray-700 dark:text-gray-300">
              カテゴリー:
            </span>
            <div className="flex flex-wrap gap-2">
              {work.category.map((cat, index) => (
                <Badge key={index} variant="default">
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* 言語 */}
        {work.languages && work.languages.length > 0 && (
          <div className="flex items-start gap-3">
            <span className="font-semibold min-w-[100px] text-gray-700 dark:text-gray-300">
              言語:
            </span>
            <div className="flex flex-wrap gap-2">
              {work.languages.map((lang, index) => (
                <Badge key={index} variant="default">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* ライブラリ */}
        {work.libraries && work.libraries.length > 0 && (
          <div className="flex items-start gap-3">
            <span className="font-semibold min-w-[100px] text-gray-700 dark:text-gray-300">
              ライブラリ:
            </span>
            <div className="flex flex-wrap gap-2">
              {work.libraries.map((lib, index) => (
                <Badge key={index} variant="default">
                  {lib}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* サーバー */}
        {work.server && work.server.length > 0 && (
          <div className="flex items-start gap-3">
            <span className="font-semibold min-w-[100px] text-gray-700 dark:text-gray-300">
              サーバー:
            </span>
            <div className="flex flex-wrap gap-2">
              {work.server.map((srv, index) => (
                <Badge key={index} variant="default">
                  {srv}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* ツール */}
        {work.tools && work.tools.length > 0 && (
          <div className="flex items-start gap-3">
            <span className="font-semibold min-w-[100px] text-gray-700 dark:text-gray-300">
              ツール:
            </span>
            <div className="flex flex-wrap gap-2">
              {work.tools.map((tool, index) => (
                <Badge key={index} variant="default">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* クレジット */}
        {work.credit && (
          <div className="flex items-start gap-3">
            <span className="font-semibold min-w-[100px] text-gray-700 dark:text-gray-300">
              Credit:
            </span>
            <span className="text-gray-900 dark:text-gray-100">
              {work.credit}
            </span>
          </div>
        )}
      </div>

      {/* コンテンツ */}
      {work.content && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">
            概要
          </h2>
          <div
            className="znc prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: work.content }}
          />
        </div>
      )}

      {/* 担当工程 */}
      {work.responsibleProcesses && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">
            担当工程
          </h2>
          <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap">
            {work.responsibleProcesses}
          </div>
        </div>
      )}

      {/* 業務詳細 */}
      {work.workDetail && (
        <div className="mb-8">
          <div
            className="znc prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: md.render(work.workDetail),
            }}
          />
        </div>
      )}

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
