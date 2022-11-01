import React from 'react';
import { render } from '@testing-library/react';
import EmptyList from './empty-list';

describe('Empty List', () => {
  it('applies title & description of empty list', () => {
    const { getByText } = render(
      <EmptyList
        title="Empty List Title"
        description="Empty List Description"
      />
    );

    expect(getByText('Empty List Title')).toBeInTheDocument();
    expect(getByText('Empty List Description')).toBeInTheDocument();
  });
});
