import React, { useState } from 'react';
import classNames from 'classnames';
import { SearchInputProps } from './types';
import { Search, CircleCross } from '@saleshandy/icons';
import { ComponentClassNames } from '../../utils/constants';

export const SearchInput = React.forwardRef<HTMLDivElement, SearchInputProps>(({
  placeholder = "Search",
  label,
  variant = 'bg-light',
  className = '',
  onSearch,
  onClearSearch,
  ...rest
}, ref) => {
  const [value, setValue] = useState('');

  const componentClasses = classNames(
    ComponentClassNames.SearchInput,
    className
  );

  const inputClasses = classNames(
    'input',
    variant
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch();
    }
  };

  const handleClear = () => {
    setValue('');
    if (onClearSearch) {
      onClearSearch();
    }
  };

  return (
    <div className={componentClasses} {...rest} ref={ref}>
      <div className="search-input--wrapper shd-search-input">
        <Search className="search-icon" />
        <input
          id="search-input"
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        {value && <CircleCross className="cross-icon" onClick={handleClear} />}
      </div>
    </div>
  );
});

SearchInput.displayName = 'SearchInput';
