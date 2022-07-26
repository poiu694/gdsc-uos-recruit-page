import { useEffect, useState } from 'react';
import { debounce } from './utils';

interface Size {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Size>({ width: 0, height: 0});

  useEffect(()=> {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      const handleResizeEvent = debounce(handleResize, 100);
      window.addEventListener('resize', handleResizeEvent);

      return () => window.removeEventListener('resize', handleResizeEvent);
    }
  }, []);

  return windowSize;
};

export default useWindowSize;