import { useRef } from 'react';

type LongPressSet = {
  onContextMenu: (event: React.MouseEvent) => void;
  onMouseDown: () => void;
  onMouseLeave: () => void;
  onMouseUp: () => void;
  onTouchEnd: () => void;
  onTouchStart: () => void;
};

/**
 * 長押しイベントを処理するためのカスタムフック。
 *
 * @param callback - 長押しが発生したときに呼び出されるコールバック関数。
 * @param ms - 長押しと見なすまでの時間（ミリ秒）。
 * @returns 長押しイベントを処理するためのイベントハンドラを含むオブジェクト。
 */
export const useLongPress = (
  callback: () => void,
  ms: number
): LongPressSet => {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (timeout.current) return; // すでにタイマーが動作中の場合は何もしない
    timeout.current = setInterval(callback, ms);
  };

  const stop = () => {
    if (timeout.current) {
      clearInterval(timeout.current);
      timeout.current = null;
    }
  };

  const preventContextMenu = (event: React.MouseEvent) => {
    event.preventDefault(); // 右クリックメニューを無効化
  };

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
    onContextMenu: preventContextMenu,
  };
};
