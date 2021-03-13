import { useEffect, useRef, useState } from 'react';

export default function useCountdown() {
  const [time, setTime] = useState(0);
  const timer = useRef<NodeJS.Timer | null>(null);

  const _clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const handleSetTime = (value: number) => {
    _clearTimer();
    setTime(value);

    if (value > 0) {
      timer.current = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }
  };

  useEffect(() => _clearTimer, []);

  useEffect(() => {
    if (time <= 0) {
      _clearTimer();
    }
  }, [time]);

  return { time, setTime: handleSetTime };
}
