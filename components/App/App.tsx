import LotteryList from '../LotteryList';
import LotteryTime from '../LotteryTime';
import { S } from './styles';

export default function App() {
  return (
    <S.Container>
      <LotteryTime />
      <LotteryList />
    </S.Container>
  );
}
