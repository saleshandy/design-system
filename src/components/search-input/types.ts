import React from 'react';

export interface SearchInputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  variant?: 'bg-light' | 'bg-gray';
  onSearch: () => void;
  onClearSearch?: () => void;
} 
