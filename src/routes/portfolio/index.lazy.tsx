import { createLazyFileRoute } from '@tanstack/react-router';
import { FaBriefcase } from 'react-icons/fa';

import ImageSlideshow from './-components/ImageSlideshow';
import { portfolioSites } from './-utils/portfolioSites';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <ImageSlideshow />

      {/* 制作サイト一覧 */}
      <h1 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
        <FaBriefcase /> 制作サイト
      </h1>
      <div className="flex flex-col gap-4">
        {portfolioSites.map((site, index) => (
          <div
            className="border-2 border-white rounded-md p-6 w-72"
            key={index}
          >
            <a
              className="border-2 rounded-md p-4 shadow-lg w-full max-w-md flex flex-col items-center border-black"
              href={site.link}
              key={index}
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="text-xl font-bold mb-2">{site.title}</h2>
              <img
                alt={site.title}
                className="rounded-md mb-4 w-full h-72 object-cover"
                src={site.image}
              />
              <p className="text-gray-500 text-center">{site.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/portfolio/')({
  component: Portfolio,
});
