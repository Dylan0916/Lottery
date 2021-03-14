import { CLEAR_LOTTERY, UPDATE_LOTTERY } from '@/store/actions';

import reducer, { DEFAULT_STATE, createUserList } from '../';

describe('reducer', () => {
  describe('createUserList', () => {
    it('should return a list of the correct length', () => {
      expect(createUserList(7).length).toBe(7);
    });
  });

  describe('UPDATE_LOTTERY', () => {
    it('should set the winner correctly', () => {
      const mockAction = { type: UPDATE_LOTTERY };
      const result = reducer(DEFAULT_STATE, mockAction);

      expect(Object.keys(result.winner).length).not.toBe(0);
    });
  });

  describe('CLEAR_LOTTERY', () => {
    it('should set the winner correctly', () => {
      const mockAction = { type: CLEAR_LOTTERY };
      const result = reducer(DEFAULT_STATE, mockAction);

      expect(Object.keys(result.winner).length).toBe(0);
    });
  });
});
