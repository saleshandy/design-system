import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('applies default type of button', () => {
    render(<Button>hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('applies specific type if provided', () => {
    render(<Button type="submit">hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('applies valid attribute to element', () => {
    render(<Button aria-label="Test">Hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Test');
  });
});
