import { FaBookOpen } from 'react-icons/fa';

import type { Article } from './Articles';

type ArticleListProps = {
  articles: Article[];
  title: string;
};

export const ArticleList = ({ title, articles }: ArticleListProps) => {
  return (
    <div className="bg-black border-2 border-white rounded-md p-6 w-72 mt-2">
      <div className="flex flex-col items-center justify-center mb-4">
        <FaBookOpen className="w-8 h-8" />
        <h3 className="text-xl font-bold ml-2 mb-2">{title}の記事</h3>
        <ul className="space-y-4 overflow-y-auto max-h-64 w-full">
          {articles.map((article, index) => (
            <a
              className="block bg-gray-800 rounded-lg p-4 shadow-lg hover:bg-gray-700 transition-colors duration-200"
              href={article.url}
              key={`${article.site}-${index}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center">
                <img
                  alt={`${article.site} Icon`}
                  className="w-6 h-6 mr-2"
                  src={article.favicon}
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
