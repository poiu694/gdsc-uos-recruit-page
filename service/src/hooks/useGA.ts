import ReactGA from 'react-ga4';

const useGA = () => {
  const initGA = (key: string) => {
    ReactGA.initialize(key);
  };

  const logPageView = (url: string) => {
    ReactGA.send({ hitType: 'pageview', page: url});
  }

  const logEvent = (category: string, action: string) => {
    ReactGA.event({ category, action });
  }

  return { initGA, logPageView, logEvent };
};

export default useGA;