import { useState } from 'react';
import { useKey } from 'react-use';

export function useArrowNavigation(length: number) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useKey('ArrowUp', () => {
    setSelectedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : length - 1
    );
  });

  useKey('ArrowDown', () => {
    setSelectedIndex((prevIndex) =>
      prevIndex < length - 1 ? prevIndex + 1 : 0
    );
  });

  return selectedIndex;
}
