import { createFileRoute } from '@tanstack/react-router';
import type { Article } from './Articles';
import { FaBookOpen } from 'react-icons/fa';

type ArticleListProps = {
  title: string;
  articles: Article[];
};

export const Route = createFileRoute('/sns/ArticleList')({
  component: () => <div>Hello /sns/ArticleList!</div>,
});

export const ArticleList = ({ title, articles }: ArticleListProps) => {
  return (
    <div className="bg-black border-2 border-white rounded-md p-6 w-72 mt-2">
      <div className="flex flex-col items-center justify-center mb-4">
        <FaBookOpen className="w-8 h-8" />
        <h3 className="text-xl font-bold ml-2 mb-2">{title}の記事</h3>
        <ul className="space-y-4 overflow-y-auto max-h-64 w-full">
          {articles.map((article, index) => (
            <a
              key={`${article.site}-${index}`}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-lg p-4 shadow-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="flex items-center">
                <img
                  src={article.favicon}
                  alt={`${article.site} Icon`}
                  className="w-6 h-6 mr-2"
                />
                <span>{article.title}</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                更新日: {new Date(article.date).toLocaleDateString()}
              </p>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};
