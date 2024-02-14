import React from 'react';

export interface SearchInputProps extends React.ComponentPropsWithoutRef<'input'> {
  variant?: 'bg-light' | 'bg-gray';
  onSearch: () => void;
  onClearSearch: () => void;
  searchValue: string;
  setSearchValue : (value : string) => void,
  initialValue?: string,
} 