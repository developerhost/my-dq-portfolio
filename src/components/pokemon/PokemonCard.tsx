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
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;

    // マウスの位置を取得
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // 回転の値を計算
    const rotateXValue = (deltaY / cardRect.height) * 20; // Y軸に基づく回転
    const rotateYValue = (deltaX / cardRect.width) * -20; // X軸に基づく回転

    // 計算された値をconsole.logで確認
    console.log(`deltaX: ${deltaX}, deltaY: ${deltaY}`);
    console.log(`rotateXValue: ${rotateXValue}, rotateYValue: ${rotateYValue}`);

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  return (
    <div
      className={`relative w-72 h-96 border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`, // rotateとscaleを一つのtransformで適用
        transformOrigin: 'center center', // 回転の基準をカードの中心に設定
      }}
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
        className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
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
