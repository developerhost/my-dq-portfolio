import { createLazyFileRoute, Link } from '@tanstack/react-router';

import ChatMessage from '@/components/ChatMessage';
import SafeSuspense from '@/components/SafeSuspense';

const Home = () => {
  const message =
    'ようこそ、橋田至の冒険へ！\nここでは、私の冒険の記録を見ることができます。';
  return (
    <SafeSuspense>
      <div className="flex flex-col justify-between min-h-[calc(100vh-200px)] p-2">
        <h1 className="text-4xl mb-8 text-center">
          橋田至の冒険 <br /> ~Tales Of Hashida~
        </h1>
        <Link
          className="flex items-center space-x-2 border-2 p-2 rounded w-1/2"
          to="/room"
        >
          <span>▶︎</span>
          <span>冒険をする</span>
        </Link>
        <div className="flex items-center space-x-2 border-2 p-2 rounded mt-auto z-20">
          <ChatMessage message={message} />
        </div>
      </div>
    </SafeSuspense>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Home,
});
