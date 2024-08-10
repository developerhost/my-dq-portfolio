import { createLazyFileRoute } from '@tanstack/react-router';
import { Typewriter } from 'react-simple-typewriter';

export const Route = createLazyFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="p-2" style={{ whiteSpace: 'pre-line' }}>
      <h1 className="text-4xl mb-8 text-center">
        橋田至のポートフォリオサイト
      </h1>
      <div style={{ whiteSpace: 'pre-line' }}>
        <Typewriter
          words={[
            'ようこそ、橋田至の冒険へ！\nここでは、私の冒険の記録を見ることができます。',
          ]}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          delaySpeed={1000}
        />
      </div>
    </div>
  );
}
