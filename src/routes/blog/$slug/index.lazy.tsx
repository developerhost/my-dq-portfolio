import { useEffect, useState } from 'react';

import { createLazyFileRoute, useParams } from '@tanstack/react-router';

import { getPostBySlug } from '../-utils/blogData';
import { parseMarkdown } from '../-utils/markdownParser';
import 'zenn-content-css';

export const BlogPost = () => {
  const { slug } = useParams({
    from: '/blog/$slug/', // ルートのパスを指定
  });

  const [post, setPost] = useState<{
    content: string;
    date: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPostBySlug(slug);
      if (fetchedPost) {
        setPost({
          ...fetchedPost,
          content: parseMarkdown(fetchedPost.content || ''),
        });
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      {/* eslint-disable-next-line react/no-danger */}
      <div className="znc" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export const Route = createLazyFileRoute('/blog/$slug/')({
  component: BlogPost,
});
