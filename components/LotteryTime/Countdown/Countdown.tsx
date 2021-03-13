import { forwardRef, memo, useImperativeHandle } from 'react';

import { formatTime } from '../utils';
import { S } from './styles';
import useCountdown from './useCountdown';

interface Props {}

export interface RefProps {
  setTime: (time: number) => void;
}

function Countdown(_props: Readonly<Props>, ref) {
  const { time: countdownTime, setTime } = useCountdown();
  const displayTime = formatTime(countdownTime);

  useImperativeHandle(
    ref,
    () => ({
      setTime,
    }),
    []
  );

  return <S.Time>{displayTime}</S.Time>;
}

export default memo(forwardRef(Countdown));
