import { render } from '@testing-library/react';
import React from 'react';

import ListItem from '../ListItem';

describe('ListItem', () => {
  const defaultProps = {
    user: {
      name: '1',
      avatar: '',
    },
  };
  const createWrapper = (testProps = {}) => {
    const props = {
      ...defaultProps,
      ...testProps,
    };

    return render(<ListItem {...props} />);
  };

  it('should render correct', () => {
    const { queryByText } = createWrapper();

    expect(queryByText(defaultProps.user.name)).not.toBeNull();
  });
});
