import Countdown from './Countdown';
import { S } from './styles';

export default function LotteryTime() {
  return (
    <S.Container>
      <S.Title>抽獎時間</S.Title>
      <S.InputSection>
        <S.TimeInput />
        <S.TimeText>分鐘</S.TimeText>
        <S.TimeSubmit>設定</S.TimeSubmit>
      </S.InputSection>
      <Countdown />
    </S.Container>
  );
}
