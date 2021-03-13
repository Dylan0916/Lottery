import { useSelector } from 'react-redux';

import { State } from '@/store';

import ListItem from './ListItem';
import { S } from './styles';

export default function LotteryList() {
  const list = useSelector((state: State) => state.list);

  return (
    <S.Container>
      <S.Title>參與抽獎名單</S.Title>
      <S.List>
        {list.map(user => (
          <ListItem key={user.name} user={user} />
        ))}
      </S.List>
    </S.Container>
  );
}
