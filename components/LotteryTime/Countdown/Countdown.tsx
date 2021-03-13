import { useRouter } from 'next/router';
import { forwardRef, memo, useImperativeHandle } from 'react';
import { useDispatch } from 'react-redux';

import useDidUpdate from '@/hooks/useDidUpdate';
import { updateLottery } from '@/store';

import { formatTime } from '../utils';
import { S } from './styles';
import useCountdown from './useCountdown';

interface Props {}

export interface RefProps {
  setTime: (time: number) => void;
}

function Countdown(_props: Readonly<Props>, ref) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { time: countdownTime, setTime } = useCountdown();
  const displayTime = formatTime(countdownTime);

  useImperativeHandle(
    ref,
    () => ({
      setTime,
    }),
    []
  );

  useDidUpdate(() => {
    if (countdownTime <= 0) {
      dispatch(updateLottery());
      router.push('/result');
    }
  }, [countdownTime]);

  return <S.Time>{displayTime}</S.Time>;
}

export default memo(forwardRef(Countdown));
