import { createFileRoute } from '@tanstack/react-router';
import articlesData from '../../rss/data.json';
import { ArticleList } from './ArticleList';

export type Article = {
  title: string;
  url: string;
  date: string;
  thumbnail?: string;
  favicon: string;
  site: string;
};

export const Route = createFileRoute('/sns/Articles')({
  component: () => Articles,
});

export const Articles = () => {
  const articles = articlesData as Article[];
  const articlesBySite = {
    zenn: articles.filter((article) => article.site === 'zenn'),
    qiita: articles.filter((article) => article.site === 'qiita'),
    note: articles.filter((article) => article.site === 'note'),
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold mt-4">記事一覧</h2>
      <div className="grid gap-4">
        <ArticleList title="Zenn" articles={articlesBySite.zenn} />
        <ArticleList title="Qiita" articles={articlesBySite.qiita} />
        <ArticleList title="note" articles={articlesBySite.note} />
      </div>
    </div>
  );
};
