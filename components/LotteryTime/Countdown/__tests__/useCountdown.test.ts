import { act, renderHook } from '@testing-library/react-hooks';

import useCountdown from '../useCountdown';

describe('useCountdown', () => {
  const createHook = () => renderHook(() => useCountdown());

  it('should return the value correctly', () => {
    const { result } = createHook();

    expect(result.current.time).toBe(0);
  });

  it('should work correctly when setTime', () => {
    jest.useFakeTimers();

    const { result } = createHook();

    act(() => {
      result.current.setTime(1);
    });

    expect(result.current.time).toBe(1);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.time).toBe(0);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.time).toBe(0);

    jest.clearAllTimers();
  });
});
