import { writeFileSync } from 'fs';

import Parser from 'rss-parser';
const parser = new Parser();

(async () => {
  const rssFeed = {
    zenn: {
      label: 'Zenn',
      url: 'https://zenn.dev/dirtyman/feed',
      favicon: 'https://zenn.dev/images/logo-transparent.png',
    },
    qiita: {
      label: 'Qiita',
      url: 'https://qiita.com/app_js/feed',
      favicon:
        'https://cdn.qiita.com/assets/favicons/public/production-c620d3e403342b1022967ba5e3db1aaa.ico',
    },
    note: {
      label: 'Note',
      url: 'https://note.com/dall_develop/rss',
      favicon:
        'https://assets.st-note.com/poc-image/manual/note-common-images/production/svg/production.ico',
    },
  };

  const allArticles = [];

  for (const [site, info] of Object.entries(rssFeed)) {
    try {
      const feed = await parser.parseURL(info.url);
      const articles = feed.items.map((item) => ({
        title: item.title || '',
        url: item.link || '',
        date: item.isoDate || '',
        thumbnail: item.enclosure?.url || '',
        favicon: info.favicon,
        site,
      }));
      allArticles.push(...articles);
    } catch (error) {
      console.error(`Error fetching feed for ${site}:`, error.message);
    }
  }

  writeFileSync('src/rss/data.json', JSON.stringify(allArticles, null, 2));
})();
