import { formatTime } from '../utils';

describe('LotteryTime utils', () => {
  describe('formatTime', () => {
    it('should return the value correctly', () => {
      const inputs = [12, 60, 0.3];
      const expected = ['00:12', '01:00', '00:00'];

      expected.forEach((v, index) => {
        expect(formatTime(inputs[index])).toBe(v);
      });
    });
  });
});
