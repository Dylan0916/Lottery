import { User } from '@/store/reducer';

import { S } from './styles';

interface Props {
  user: User;
}

export default function ListItem({ user: { name, avatar } }: Readonly<Props>) {
  return (
    <S.Container>
      <S.Avatar src={avatar} alt="Avatar" />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
}
