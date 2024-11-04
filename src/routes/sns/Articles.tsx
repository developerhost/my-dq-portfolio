import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { FaBookOpen } from 'react-icons/fa';
import QiitaIcon from '@/assets/icon/qiita-icon.png';

type Article = {
  id: string;
  title: string;
  url: string;
  updated_at: string;
};

export const Route = createFileRoute('/sns/Articles')({
  component: () => Articles,
});

const fetchArticles = async (): Promise<Article[]> => {
  const token = import.meta.env.VITE_QIITA_ACCESS_TOKEN;

  const headers: HeadersInit = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  const qiitaUserId = 'app_js';
  const url = `https://qiita.com/api/v2/items?query=user:${qiitaUserId}&page=1&per_page=5`;

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
};

export const Articles = () => {
  const {
    data: articles,
    isLoading,
    isError,
    error,
  } = useQuery<Article[], Error>({
    queryKey: ['articles'],
    queryFn: fetchArticles,
  });

  console.log('articles', articles);

  return (
    <div className="bg-black border-2 border-white rounded-md p-6 w-72 mt-2">
      <div className="flex flex-col items-center justify-center mb-4">
        <FaBookOpen className="w-8 h-8" />
        <h2 className="text-xl font-bold ml-2 mb-2">記事一覧</h2>
        {isLoading ? (
          <p>読み込み中...</p>
        ) : isError ? (
          <p>エラーが発生しました: {error.message}</p>
        ) : (
          <ul className="space-y-4">
            {articles?.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800 rounded-lg p-4 shadow-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <img
                    src={QiitaIcon}
                    alt="Qiita Icon"
                    className="w-6 h-6 mr-2"
                  />
                  <span>{article.title}</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  更新日: {new Date(article.updated_at).toLocaleDateString()}
                </p>
              </a>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
