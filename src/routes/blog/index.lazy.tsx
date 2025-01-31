import { useState, useEffect } from 'react';

import { createLazyFileRoute, Link } from '@tanstack/react-router';

import { getAllPosts } from './-utils/blogData';

export const BlogList = () => {
  const [posts, setPosts] = useState<
    { date: string; excerpt: string; slug: string; title: string }[]
  >([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ブログ一覧</h1>
      <ul>
        {posts.map((post) => (
          <li className="mb-4" key={post.slug}>
            <Link
              className="text-blue-500 hover:underline"
              to={`/blog/${post.slug}`}
            >
              <h2 className="text-xl font-bold">{post.title}</h2>
            </Link>
            <p className="text-gray-500">{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Route = createLazyFileRoute('/blog/')({
  component: BlogList,
});
