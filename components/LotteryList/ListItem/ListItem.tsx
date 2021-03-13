import { S } from './styles';

interface Props {
  name: string;
}

export default function ListItem({ name }: Readonly<Props>) {
  return (
    <S.Container>
      <S.Avatar src="/avatar.png" alt="Avatar" />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
}
