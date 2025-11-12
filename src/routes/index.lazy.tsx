import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute, Link } from '@tanstack/react-router';

import ChatMessage from '@/components/ChatMessage';
import SafeSuspense from '@/components/SafeSuspense';
import { linkItems } from '@/constants';
import { formatPeriod } from '@/lib/format';
import { getWorks } from '@/routes/work/-utils/workData';
import articlesData from '@/rss/data.json';

const Home = () => {
  const message =
    'ようこそ、橋田至の冒険へ！\nここでは、私の冒険の記録を見ることができます。';

  // workの実績を取得
  const { data: worksData } = useQuery({
    queryFn: getWorks,
    queryKey: ['works'],
  });

  // 最新の実績を取得（最新の3件）
  const latestWorks = (worksData?.contents || [])
    .sort((a, b) => {
      if (!a.start && !b.start) return 0;
      if (!a.start) return 1;
      if (!b.start) return -1;
      return new Date(b.start).getTime() - new Date(a.start).getTime();
    })
    .slice(0, 3);

  // 最新の記事を取得（最新の4件）
  const latestArticles = articlesData.slice(0, 4);

  return (
    <SafeSuspense>
      <div className="flex flex-col justify-between min-h-[calc(100vh-200px)] p-2 pb-8 mx-16">
        <h1 className="text-4xl mb-8 text-center">
          橋田至の冒険 <br /> ~Tales Of Hashida~
        </h1>
        <Link
          className="flex items-center space-x-2 border-2 p-2 rounded w-1/2"
          to="/room"
        >
          <span>▶︎</span>
          <span>冒険をする</span>
        </Link>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {linkItems.map((item) => (
            <Link
              className="flex items-center space-x-2 border-2 p-2 rounded w-full hover:bg-gray-100 dark:hover:bg-gray-800"
              key={item.title}
              to={item.url}
            >
              <item.icon />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>

        {/* 最新の実績セクション */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">最新の実績</h2>
            <Link
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              to="/work"
            >
              もっと見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {latestWorks.map((work) => (
              <Link
                className="block border-2 p-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                key={work.id}
                params={{ id: work.id }}
                to="/work/$id"
              >
                {work.eyecatch && (
                  <img
                    alt={work.title}
                    className="w-full h-32 object-cover rounded mb-3"
                    src={work.eyecatch.url}
                  />
                )}
                <h3 className="font-semibold mb-2 line-clamp-2">
                  {work.title}
                </h3>
                {(work.start || work.end) && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {work.end ? '参画期間' : '公開日'}{' '}
                    {formatPeriod(work.start, work.end)}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* 最新の記事セクション */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">最新の記事</h2>
            <Link
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              to="/sns"
            >
              もっと見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {latestArticles.map((article, index) => (
              <a
                className="border-2 p-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors block"
                href={article.url}
                key={index}
                rel="noopener noreferrer"
                target="_blank"
              >
                {article.thumbnail && (
                  <img
                    alt={article.title}
                    className="w-full h-32 object-cover rounded mb-3"
                    src={article.thumbnail}
                  />
                )}
                <h3 className="font-semibold line-clamp-2 mb-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  {article.favicon && (
                    <img
                      alt={article.site}
                      className="w-4 h-4"
                      src={article.favicon}
                    />
                  )}
                  <span>
                    {new Date(article.date).toLocaleDateString('ja-JP')}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2 border-2 p-2 rounded mt-12 z-20">
          <ChatMessage message={message} />
        </div>
      </div>
    </SafeSuspense>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Home,
});
