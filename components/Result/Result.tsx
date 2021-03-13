import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { State, clearLottery } from '@/store';

import { S } from './styles';

export default function Result() {
  const router = useRouter();
  const winner = useSelector((state: State) => state.winner);
  const dispatch = useDispatch();

  const goBack = () => {
    router.replace('/');
  };

  useEffect(() => {
    if (!winner.name) {
      goBack();
    }
  }, [winner?.name]);

  if (!winner.name) {
    return null;
  }

  const onBackClick = () => {
    dispatch(clearLottery());
  };

  return (
    <S.Container>
      <S.Title>抽獎結果</S.Title>
      <S.UserSection>
        <S.UserAvatar src={winner.avatar} alt="Avatar" />
        <S.UserName>{winner.name}</S.UserName>
      </S.UserSection>
      <S.Back onClick={onBackClick}>返回</S.Back>
    </S.Container>
  );
}
