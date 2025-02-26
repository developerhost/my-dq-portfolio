import { useEffect } from 'react';

import { useRouterState } from '@tanstack/react-router';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-FSSXRWL3SD'; // あなたの Google Analytics 測定 ID

const usePageTracking = () => {
  const routerState = useRouterState() as {
    location: { pathname: string; searchStr?: string };
  };
  const { location } = routerState;
  const pathname = location.pathname;
  const search = location.searchStr ?? ''; // `search` の型エラーを避けるため `searchStr` を使用

  useEffect(() => {
    // Google Analytics の初期化は一度だけ行う
    ReactGA.initialize(TRACKING_ID);
  }, []);

  useEffect(() => {
    // ページビューを送信
    ReactGA.send({
      hitType: 'pageview',
      page: pathname + search,
    });
  }, [pathname, search]);
};

export default usePageTracking;
