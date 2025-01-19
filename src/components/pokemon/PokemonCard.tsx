import { useState } from 'react';

type PokemonCardProps = {
  back: string;
  description: string;
  id: string;
  img: string;
  name: string;
};

const PokemonCard = ({ card }: { card: PokemonCardProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-72 h-96 border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* カードの表面 */}
      <div className="absolute inset-0 bg-black">
        <img
          alt={card.name}
          className="w-full h-full object-cover"
          src={card.img}
        />
      </div>
      {/* カードの裏面 */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center ${
          isHovered ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}
      >
        <img alt="Pokémon Card Back" className="w-2/3 h-auto" src={card.back} />
      </div>
      {/* カード情報 */}
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
          <h2 className="text-lg font-bold">{card.name}</h2>
          <p className="text-sm">{card.description}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
