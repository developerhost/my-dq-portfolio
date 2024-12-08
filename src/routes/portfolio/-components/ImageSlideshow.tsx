import { useState, useEffect } from 'react';

import image1 from '@/assets/img/slide/1.png';
import image10 from '@/assets/img/slide/10.png';
import image11 from '@/assets/img/slide/11.png';
import image12 from '@/assets/img/slide/12.png';
import image13 from '@/assets/img/slide/13.png';
import image14 from '@/assets/img/slide/14.png';
import image15 from '@/assets/img/slide/15.png';
import image2 from '@/assets/img/slide/2.png';
import image3 from '@/assets/img/slide/3.png';
import image4 from '@/assets/img/slide/4.png';
import image5 from '@/assets/img/slide/5.png';
import image6 from '@/assets/img/slide/6.png';
import image7 from '@/assets/img/slide/7.png';
import image8 from '@/assets/img/slide/8.png';
import image9 from '@/assets/img/slide/9.png';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
];

const ImageSlideshow = () => {
  // スライドショーの間隔
  const interval = 150;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 画像を一定間隔で切り替える
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // クリーンアップ
  }, [isPaused]);

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <button
      className="rounded-md mb-4 w-full h-72 object-cover cursor-pointer focus:outline-none"
      onClick={handleTogglePause}
      type="button"
    >
      <img
        alt={`スライドショーの画像 ${currentIndex + 1}`}
        className="rounded-md w-full h-72 object-cover"
        src={images[currentIndex]} // 現在のインデックスの画像を表示
      />
    </button>
  );
};

export default ImageSlideshow;
