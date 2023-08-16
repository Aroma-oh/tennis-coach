import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

export const GaTracker = () => {
  const [initialized, setInitialized] = useState(false);
  const gaTrackingId = import.meta.env.VITE_GA;
  console.log(gaTrackingId);

  // 초기화 (localhost는 무시)
  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(gaTrackingId);
      setInitialized(true);
    }
  }, []);

  // pageview 이벤트 전송
  useEffect(() => {
    if (initialized) {
      ReactGA.send("page_view");
    }
  }, [initialized]);

  // 개발용 (localhost에서도 이벤트 전송)
  useEffect(() => {
    ReactGA.initialize(gaTrackingId);
    ReactGA.send('page_view');
  }, []);
};
