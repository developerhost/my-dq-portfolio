import PokemonCard from './PokemonCard';

type PokemonCardListProps = {
  cards: {
    back: string;
    description: string;
    id: string;
    img: string;
    name: string;
  }[];
};

const PokemonCardList = ({ cards }: PokemonCardListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
      {cards.map((card) => (
        <PokemonCard card={card} key={card.id} />
      ))}
    </div>
  );
};

export default PokemonCardList;
