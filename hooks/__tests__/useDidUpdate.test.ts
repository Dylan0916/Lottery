import { renderHook } from '@testing-library/react-hooks';

import useDidUpdate from '../useDidUpdate';

describe('useDidUpdate', () => {
  const mockCallback = jest.fn();
  let mockState = 0;

  const createHook = () =>
    renderHook(() => useDidUpdate(mockCallback, [mockState]));

  beforeEach(() => {
    mockState = 1;
  });

  afterEach(() => {
    mockCallback.mockClear();
  });

  it('should not call callback on mount', () => {
    createHook();

    expect(mockCallback).not.toBeCalled();
  });

  it('should not call callback on unmount', () => {
    const { unmount } = createHook();

    expect(mockCallback).not.toBeCalled();

    unmount();

    expect(mockCallback).not.toBeCalled();
  });

  it('should call callback on rerender', () => {
    const { rerender } = createHook();

    expect(mockCallback).not.toBeCalled();

    mockState = 2;
    rerender();

    expect(mockCallback).toBeCalled();
  });
});
