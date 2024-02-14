import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import { Input } from './input';

describe('Input component', () => {
  test('renders with default props', () => {
    render(<Input />);

    // Check if the label and input are rendered with default values
    expect(screen.getByLabelText('')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  test('renders with provided props', () => {
    const label = 'Username';
    const placeholder = 'Type your username';

    render(<Input label={label} placeholder={placeholder} />);

    // Check if the label and input are rendered with provided values
    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  test('applies custom className', () => {
    const customClassName = 'custom-class';

    render(<Input className={customClassName} />);

    // Check if the custom class is applied to the container
    expect(screen.getByTestId('input-container')).toHaveClass(customClassName);
  });

  test('handles input change', () => {
    render(<Input />);

    // Simulate user typing
    const inputElement = screen.getByPlaceholderText('Enter text');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    // Check if the input value is updated
    expect(inputElement).toHaveValue('Hello');
  });
});
