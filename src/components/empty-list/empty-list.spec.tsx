import React from 'react';
import { render } from '@testing-library/react';
import { EmptyList } from './empty-list';

describe('Empty List', () => {
  it('applies title & description of empty list', () => {
    const { getByText } = render(
      <EmptyList>
        <EmptyList.Body>
          <EmptyList.Title>
            Sorry, we couldn’t find what you are looking for
          </EmptyList.Title>
          <EmptyList.Description>
            Please try searching with another term
          </EmptyList.Description>
        </EmptyList.Body>
      </EmptyList>
    );

    expect(
      getByText('Sorry, we couldn’t find what you are looking for')
    ).toBeInTheDocument();
    expect(
      getByText('Please try searching with another term')
    ).toBeInTheDocument();
  });
});
