const markdownFiles = import.meta.glob('/src/_posts/*.md', {
  eager: true,
  as: 'raw',
});

type Post = {
  content?: string;
  date: string;
  excerpt: string;
  slug: string;
  title: string;
};

// 記事データを格納する配列
const allPosts: Post[] = Object.entries(markdownFiles).map(
  ([filePath, content]) => {
    const slug = filePath.split('/').pop()?.replace('.md', '') || '';

    // Markdown のメタデータを手動で抽出
    const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)/.exec(content as string);
    if (!match) {
      throw new Error(`Invalid frontmatter in ${slug}.md`);
    }

    const frontMatterLines = match[1].split('\n').filter(Boolean);
    const metadata: Record<string, string> = {};
    frontMatterLines.forEach((line) => {
      const [key, ...value] = line.split(': ');
      metadata[key.trim()] = value.join(': ').trim();
    });

    return {
      slug,
      title: metadata.title || 'No Title',
      date: metadata.date || 'Unknown Date',
      excerpt: metadata.excerpt || '',
      content: match[2].trim(),
    };
  }
);

// 記事一覧を取得
export const getAllPosts = async () => {
  return allPosts.map(({ slug, title, date, excerpt }) => ({
    slug,
    title,
    date,
    excerpt,
  }));
};

// スラグから記事を取得
export const getPostBySlug = async (slug: string) => {
  return allPosts.find((post) => post.slug === slug) || null;
};
