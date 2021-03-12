import produce from 'immer';

export interface State {
  a: string;
}

const DEFAULT_STATE = { a: 'test' };

const reducer = produce((draft, action) => {
  switch (action.payload) {
    default:
      break;
  }
}, DEFAULT_STATE);

export default reducer;
