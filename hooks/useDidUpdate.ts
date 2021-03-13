import { EffectCallback, useEffect, useRef } from 'react';

export default function useDidUpdate(
  callback: EffectCallback,
  conditions: any[]
) {
  const didMounted = useRef(false);

  useEffect(() => {
    if (didMounted.current) {
      callback();
    } else {
      didMounted.current = true;
    }
  }, conditions);
}
