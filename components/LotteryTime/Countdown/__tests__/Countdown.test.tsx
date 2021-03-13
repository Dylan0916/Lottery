import { act, render } from '@testing-library/react';
import React from 'react';

import { updateLottery } from '@/store';

import Countdown from '../Countdown';

const mockDispatch = jest.fn();
const mockRouter = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));
jest.mock('next/router', () => ({
  useRouter: () => ({ push: mockRouter }),
}));

describe('Countdown', () => {
  it('should display correct text', () => {
    let countdownRef;

    const { queryByText } = render(
      <Countdown ref={ref => (countdownRef = ref)} />
    );

    act(() => {
      countdownRef.setTime(60);
    });

    expect(queryByText('01:00')).not.toBeNull();
  });

  it('should call dispatch and push to result page when countdownTime change to 0', () => {
    jest.useFakeTimers();

    let countdownRef;

    render(<Countdown ref={ref => (countdownRef = ref)} />);

    act(() => {
      countdownRef.setTime(1);
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(mockDispatch).toBeCalledWith(updateLottery());
    expect(mockRouter).toBeCalledWith('/result');

    jest.clearAllTimers();
  });
});
