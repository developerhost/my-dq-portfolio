import { useEffect } from 'react';

import { useLocation } from '@tanstack/react-router';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-FSSXRWL3SD'; // あなたの Google Analytics 測定 ID

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics の初期化は一度だけ行う
    ReactGA.initialize(TRACKING_ID);
  }, []);

  useEffect(() => {
    // ページビューを送信
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);
};

export default usePageTracking;
