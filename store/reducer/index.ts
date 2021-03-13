import produce from 'immer';

export interface State {}

const DEFAULT_STATE: State = {};

const reducer = produce((draft: State, action) => {
  switch (action.type) {
    default:
      break;
  }
}, DEFAULT_STATE);

export default reducer;
