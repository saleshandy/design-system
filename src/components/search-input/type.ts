import React from 'react';

export interface SearchInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  variant?: 'bg-light' | 'bg-gray';
  onSearch: () => void;
  onClearSearch: () => void;
  search: string;
  setSearch: (value: string) => void;
}
