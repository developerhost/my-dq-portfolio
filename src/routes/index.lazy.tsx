import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h1 className="text-4xl mb-8">橋田至のポートフォリオサイト</h1>
    </div>
  );
}
