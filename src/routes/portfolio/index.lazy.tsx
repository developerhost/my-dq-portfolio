import { createLazyFileRoute } from '@tanstack/react-router';
import { FaBriefcase, FaChevronDown } from 'react-icons/fa';

import ImageSlideshow from './-components/ImageSlideshow';
import { portfolioSites } from './-utils/portfolioSites';

import { pokemonCards } from '@/components/pokemon/cards';
import PokemonCardList from '@/components/pokemon/PokemonCardList';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <ImageSlideshow />

      {/* 注意書きの追加 */}
      <div className="mb-6 w-full px-4">
        <Collapsible>
          <CollapsibleTrigger className="flex items-center text-lg font-semibold cursor-pointer">
            注意書き
            <span className="ml-2">
              <FaChevronDown />
            </span>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
              <p className="text-sm text-gray-300">
                <strong>タイトル:</strong> ポケモンカードをReactで実装してみた
              </p>
              <p className="mt-2 text-sm text-gray-400">
                本記事では、ポケモンカードの表示の実装方法、実装した理由を解説しています
              </p>
              <a
                className="mt-4 inline-block text-blue-400 hover:underline"
                href="https://zenn.dev/dirtyman/articles/d8f920ce595e95"
                rel="noopener noreferrer"
                target="_blank"
              >
                記事を読む
              </a>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <PokemonCardList cards={pokemonCards} />
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
