import ListItem from './ListItem';
import { S } from './styles';

const list = [
  'Dylan1',
  'Dylan2',
  'Dylan3',
  'Dylan4',
  'Dylan5',
  'Dylan6',
  'Dylan7',
];

export default function LotteryList() {
  return (
    <S.Container>
      <S.Title>參與抽獎名單</S.Title>
      <S.List>
        {list.map(name => (
          <ListItem key={name} name={name} />
        ))}
      </S.List>
    </S.Container>
  );
}
