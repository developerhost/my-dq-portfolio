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

      {/* アフィリエイトリンクを記事の最後に追加 */}
      <div className="mt-8 text-center">
        <p className="text-lg font-semibold">
          フリーランスにおすすめのサービス
        </p>
        <div className="mt-4 mx-auto">
          {/* フリーランス */}
          <a
            href="https://px.a8.net/svt/ejp?a8mat=35AZCF+5JG8FM+47L8+63WO1"
            rel="nofollow"
          >
            <img
              alt="広告"
              className="mx-auto"
              height="250"
              src="https://www23.a8.net/svt/bgt?aid=190308975335&wid=001&eno=01&mid=s00000019646001026000&mc=1"
              width="300"
            />
          </a>
          <img
            alt="広告"
            className="mx-auto"
            height="1"
            src="https://www11.a8.net/0.gif?a8mat=35AZCF+5JG8FM+47L8+63WO1"
            width="1"
          />
        </div>

        <div className="mt-4 mx-auto">
          {/* クラウドソーシング */}
          <a
            href="https://px.a8.net/svt/ejp?a8mat=44Z73C+DYHVCI+4F8I+C28PT"
            rel="nofollow"
          >
            <img
              alt="広告"
              className="mx-auto"
              height="250"
              src="https://www23.a8.net/svt/bgt?aid=250225320844&wid=001&eno=01&mid=s00000020637002026000&mc=1"
              width="300"
            />
          </a>
          <img
            alt="広告"
            className="mx-auto"
            height="1"
            src="https://www11.a8.net/0.gif?a8mat=44Z73C+DYHVCI+4F8I+C28PT"
            width="1"
          />
        </div>
        <div className="mt-4 mx-auto">
          {/* VPN */}
          <a
            href="https://px.a8.net/svt/ejp?a8mat=44Z8NE+9ALMR6+7QW+1ZJ8C1"
            rel="nofollow"
          >
            <img
              alt=""
              className="mx-auto"
              height="250"
              src="https://www24.a8.net/svt/bgt?aid=250227338562&wid=001&eno=01&mid=s00000001004012015000&mc=1"
              width="250"
            />
          </a>
          <img
            alt=""
            className="mx-auto"
            height="1"
            src="https://www16.a8.net/0.gif?a8mat=44Z8NE+9ALMR6+7QW+1ZJ8C1"
            width="1"
          />
        </div>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/blog/$slug/')({
  component: BlogPost,
});
