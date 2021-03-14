import faker from 'faker/locale/en';
import produce from 'immer';

import { CLEAR_LOTTERY, UPDATE_LOTTERY } from '../actions';

export function createUserList(len: number) {
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

export const DEFAULT_STATE: State = {
  list: createUserList(7),
  winner: {} as User,
};

console.log('== DEFAULT_STATE ==');
console.log(DEFAULT_STATE);

const reducer = produce((draft: State, action) => {
  switch (action.type) {
    case UPDATE_LOTTERY: {
      const { list } = draft;
      const listLen = list.length;
      const random = Math.floor(Math.random() * listLen);

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
