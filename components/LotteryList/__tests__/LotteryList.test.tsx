import { render } from '@testing-library/react';
import React from 'react';
import * as reactRedux from 'react-redux';

import LotteryList from '../LotteryList';

jest.mock('../ListItem', () => () => <p>ListItem</p>);

describe('LotteryList', () => {
  const createWrapper = () => render(<LotteryList />);

  it('should render the correct number LotteryList', () => {
    const mockList = [{ name: '1' }, { name: '2' }, { name: '3' }];

    Object.defineProperty(reactRedux, 'useSelector', { value: () => mockList });

    const { queryAllByText } = createWrapper();

    expect(queryAllByText('ListItem').length).toBe(mockList.length);
  });
});
