import { ChangeEvent, useRef, useState } from 'react';

import Countdown, { RefProps } from './Countdown';
import { S } from './styles';

export default function LotteryTime() {
  const [time, setTime] = useState('');
  const countdownRef = useRef<RefProps>();

  const onTimeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = value.replace(/[^0-9\.]/g, '');

    setTime(formattedValue);
  };

  const onClick = () => {
    if (countdownRef.current) {
      const formatTime = +time * 60;

      countdownRef.current?.setTime(formatTime);
    }
  };

  return (
    <S.Container>
      <S.Title>抽獎時間</S.Title>
      <S.InputSection>
        <S.TimeInput type="number" min={0} value={time} onInput={onTimeInput} />
        <S.TimeText>分鐘</S.TimeText>
        <S.TimeSubmit onClick={onClick}>設定</S.TimeSubmit>
      </S.InputSection>
      <Countdown ref={countdownRef} />
    </S.Container>
  );
}
