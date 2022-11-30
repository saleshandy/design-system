import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './icon';

describe('Icon', () => {
  it('should applies class name based on identifier', () => {
    render(<Icon data-testid="icon" identifier="wand" />);

    expect(screen.getByTestId('icon')).toHaveClass('sh-wand');
  });
});
