import { act, fireEvent, render } from '@testing-library/react';
import * as nextRouter from 'next/router';
import * as reactRedux from 'react-redux';

import { clearLottery } from '@/store';

import Result from '../Result';

describe('Result', () => {
  const mockDispatch = jest.fn();
  const mockRouterReplace = jest.fn();

  const doMockReactRedux = (mockWinner = {}) => {
    Object.defineProperties(reactRedux, {
      useSelector: { value: () => mockWinner },
      useDispatch: { value: () => mockDispatch },
    });
  };

  const doMockRouterReplace = () => {
    Object.defineProperty(nextRouter, 'useRouter', {
      value: () => ({ replace: mockRouterReplace }),
    });
  };

  const createWrapper = () => render(<Result />);

  beforeEach(() => {
    doMockRouterReplace();
  });

  afterEach(() => {
    mockRouterReplace.mockClear();
  });

  it('should replace url to "/" if there is no winner', () => {
    doMockReactRedux();
    createWrapper();

    expect(mockRouterReplace).toBeCalledWith('/');
  });

  it('should render nice', () => {
    const mockUser = { name: 'name', avatar: '' };

    doMockReactRedux(mockUser);

    const { queryByText } = createWrapper();

    expect(queryByText(mockUser.name)).not.toBeNull();
  });

  fit('should call dispatch when go back is clicked', () => {
    const mockUser = { name: 'name', avatar: '' };

    doMockReactRedux(mockUser);

    const { getByText } = createWrapper();

    act(() => {
      fireEvent.click(getByText('返回'));
    });

    expect(mockDispatch).toBeCalledWith(clearLottery());
  });
});
