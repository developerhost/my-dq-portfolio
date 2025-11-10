import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

import { getWorks } from './-utils/workData';

import { Badge } from '@/components/ui/badge';

/**
 * 参画期間をフォーマットする
 */
const formatPeriod = (start?: string, end?: string): string => {
  if (!start && !end) return '';

  const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), 'yyyy年M月', { locale: ja });
  };

  if (start && end) {
    return `参画期間 ${formatDate(start)}~${formatDate(end)}`;
  } else if (start) {
    return `参画期間 ${formatDate(start)}~`;
  }

  return '';
};

export const WorkList = () => {
  const { data, error, isLoading } = useQuery({
    queryFn: getWorks,
    queryKey: ['works'],
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

  const works = data?.contents || [];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex gap-4">
        <h1 className="text-3xl font-bold mb-8">実績一覧</h1>
        <p>今までのお仕事の実績や自主制作アプリ</p>
      </div>

      {works.length === 0 ? (
        <p className="text-gray-500">実績がまだありません。</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <Link
              className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              key={work.id}
              params={{ id: work.id }}
              to="/work/$id"
            >
              {/* アイキャッチ画像 */}
              {work.eyecatch && (
                <div className="aspect-video w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={work.eyecatch.url}
                  />
                </div>
              )}

              <div className="p-4">
                {/* タイトル */}
                <h2 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors line-clamp-2">
                  {work.title}
                </h2>

                {/* 参画期間 */}
                {(work.start || work.end) && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {formatPeriod(work.start, work.end)}
                  </p>
                )}

                {/* タグセクション */}
                <div className="space-y-2">
                  {/* カテゴリー */}
                  {work.category && work.category.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {work.category.map((cat, index) => (
                        <Badge key={index} variant="default">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* 言語 */}
                  {work.languages && work.languages.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {work.languages.map((lang, index) => (
                        <Badge key={index} variant="default">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* ライブラリ */}
                  {work.libraries && work.libraries.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {work.libraries.map((lib, index) => (
                        <Badge key={index} variant="default">
                          {lib}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* サーバー */}
                  {work.server && work.server.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {work.server.map((srv, index) => (
                        <Badge key={index} variant="default">
                          {srv}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* ツール */}
                  {work.tools && work.tools.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {work.tools.map((tool, index) => (
                        <Badge key={index} variant="default">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* 総件数 */}
      <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
        <p>全 {data?.totalCount || 0} 件</p>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/work/')({
  component: WorkList,
});
