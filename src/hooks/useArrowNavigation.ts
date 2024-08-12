import { useState, useRef } from 'react';
import { useKey } from 'react-use';

/**
 * useRefを使用して、矢印キーで選択中のインデックスを更新するカスタムフック
 * @param length 選択肢の数
 * @returns 選択中のインデックス
 */
export function useArrowNavigation(length: number) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedIndexRef = useRef(selectedIndex);

  const updateIndex = (newIndex: number) => {
    setSelectedIndex(newIndex);
    selectedIndexRef.current = newIndex;
  };

  useKey('ArrowUp', () => {
    updateIndex(
      selectedIndexRef.current > 0 ? selectedIndexRef.current - 1 : length - 1
    );
  });

  useKey('ArrowDown', () => {
    updateIndex(
      selectedIndexRef.current < length - 1 ? selectedIndexRef.current + 1 : 0
    );
  });

  return selectedIndex;
}
