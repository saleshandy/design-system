import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from './avatar';

describe('Button', () => {
  it('should renders the initials', () => {
    const { getByText } = render(
      <Avatar data-testid="avatar" firstName="Shoaib" lastName="Sayyed" />
    );

    expect(getByText('SS')).toBeInTheDocument();
  });

  it('should have small size by default', () => {
    render(<Avatar firstName="Shoaib" lastName="Sayyed" />);

    expect(screen.getByTestId('avatar')).toHaveClass('shd-avatar--sm');
  });

  it('should have the size from prop', () => {
    render(<Avatar firstName="Shoaib" lastName="Sayyed" size="lg" />);

    expect(screen.getByTestId('avatar')).toHaveClass('shd-avatar--lg');
  });
});
