import { createLazyFileRoute } from '@tanstack/react-router';
import { FaBriefcase } from 'react-icons/fa';

export const Route = createLazyFileRoute('/portfolio/')({
  component: Portfolio,
});

function Portfolio() {
  const portfolioSites = [
    {
      title: 'ランダム指名くん',
      description: '生徒をランダム指名できます',
      image:
        'https://firebasestorage.googleapis.com/v0/b/seat-99688.appspot.com/o/ogp.jpeg?alt=media&token=8e7cc982-f801-44a2-8ed5-b1b9f56185aa',
      link: 'https://seat-99688.web.app/',
    },
    {
      title: 'エンジニア自己紹介カードメーカー',
      description: 'エンジニアの自己紹介カードを簡単にカスタマイズできます',
      image:
        'https://firebasestorage.googleapis.com/v0/b/it-intro-67781.appspot.com/o/comp288.png?alt=media&token=59fc1ade-5a83-45b8-9224-f76b981ab881',
      link: 'https://it-intro-67781.web.app/',
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
        <FaBriefcase /> 制作サイト
      </h1>
      <div className="flex flex-col gap-4">
        {portfolioSites.map((site, index) => (
          <div className="border-2 border-white rounded-md p-6 w-72">
            <a
              key={index}
              href={site.link}
              target="_blank"
              className="border-2 rounded-md p-4 shadow-lg w-full max-w-md flex flex-col items-center border-black"
            >
              <h2 className="text-xl font-bold mb-2">{site.title}</h2>
              <img
                src={site.image}
                alt={site.title}
                className="rounded-md mb-4 w-full h-72 object-cover"
              />
              <p className="text-gray-500 text-center">{site.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
