import ReactGA from 'react-ga4';

const useGA = () => {
  const initGA = (key: string, url?: string) => {
    ReactGA.initialize(key);
    ReactGA.set({ page: url ?? window?.location?.pathname });
  };

  const logPageView = (url: string) => {
    ReactGA.send({ hitType: 'pageView', page: url});
  }

  const logEvent = (category: string, action: string) => {
    ReactGA.event({ category, action });
  }

  return { initGA, logPageView, logEvent };
};

export default useGA;