//CREDIT TO DAN ABRAMOV (https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

import { useEffect, useRef } from 'react';

export default function useInterval(callback: any, delay: number) {
  const savedCallback: any = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback) savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
