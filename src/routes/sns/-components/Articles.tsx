import { ArticleList } from './ArticleList';
import articlesData from '../../../rss/data.json';

export type Article = {
  date: string;
  favicon: string;
  site: string;
  thumbnail?: string;
  title: string;
  url: string;
};

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
        <ArticleList articles={articlesBySite.zenn} title="Zenn" />
        <ArticleList articles={articlesBySite.qiita} title="Qiita" />
        <ArticleList articles={articlesBySite.note} title="note" />
      </div>
    </div>
  );
};
