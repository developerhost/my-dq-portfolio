import { useRef } from 'react';

type LongPressSet = {
  onContextMenu: (event: React.MouseEvent) => void;
  onMouseDown: () => void;
  onMouseLeave: () => void;
  onMouseUp: () => void;
  onTouchEnd: () => void;
  onTouchStart: () => void;
};

interface UseLongPressOptions {
  delay?: number; // 長押し時の連続コール間隔（ミリ秒）
  onClick: () => void;
  onLongPress: () => void;
  threshold?: number; // 短押し判定の閾値（ミリ秒）
}

/**
 * 長押しイベントを処理するカスタムフック。
 *
 * @param options - 短押し・長押しのコールバック関数、および設定オプション。
 * @returns 長押しイベントを処理するためのイベントハンドラを含むオブジェクト。
 */
export const useLongPress = ({
  onClick,
  onLongPress,
  delay = 100,
  threshold = 300,
}: UseLongPressOptions): LongPressSet => {
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const interval = useRef<NodeJS.Timeout | null>(null);
  const isLongPress = useRef(false);

  const start = () => {
    isLongPress.current = false;
    timeout.current = setTimeout(() => {
      isLongPress.current = true;
      onLongPress();
      interval.current = setInterval(onLongPress, delay);
    }, threshold);
  };

  const stop = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  const handleRelease = () => {
    stop();
    if (!isLongPress.current) {
      onClick();
    }
  };

  const preventContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return {
    onMouseDown: start,
    onMouseUp: handleRelease,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: handleRelease,
    onContextMenu: preventContextMenu,
  };
};
