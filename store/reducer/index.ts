import faker from 'faker/locale/en';
import produce from 'immer';

import { CLEAR_LOTTERY, UPDATE_LOTTERY } from '../actions';

function createUserList(len: number) {
  return new Array(len)
    .fill('')
    .map(() => ({ name: faker.name.findName(), avatar: '/avatar.png' }));
}

export interface User {
  name: string;
  avatar: string;
}

export interface State {
  list: User[];
  winner: User;
}

const DEFAULT_STATE: State = {
  list: createUserList(7),
  winner: {} as User,
};

const reducer = produce((draft: State, action) => {
  switch (action.type) {
    case UPDATE_LOTTERY: {
      const { list } = draft;
      const listLen = list.length;
      const random = Math.floor(Math.random() * listLen) + 1;

      draft.winner = list[random];
      break;
    }
    case CLEAR_LOTTERY: {
      draft.winner = {} as User;
      break;
    }
    default:
      break;
  }
}, DEFAULT_STATE);

export default reducer;
