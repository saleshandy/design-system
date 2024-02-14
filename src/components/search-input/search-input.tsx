import React, { useState } from 'react';
import { Search, CircleCross } from '@saleshandy/icons';
import classNames from 'classnames';
import { SearchInputProps } from './type';
import { ComponentClassNames } from '../../utils/constants';
import { getClassNameByModifier } from '../../utils/classname-modifiers';

export const SearchInput = React.forwardRef<HTMLDivElement, SearchInputProps>(
  (
    {
      placeholder = 'Search',
      variant = 'bg-light',
      className = '',
      onSearch,
      onClearSearch,
      searchValue,
      setSearchValue,
      initialValue = '',
      ...rest
    },
    ref
  ) => {
    const [value, setValue] = useState(initialValue);

    const componentClasses = classNames(
      ComponentClassNames.SearchInput,
      getClassNameByModifier(ComponentClassNames.SearchInput, variant),
      className
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
        <Search className="search-icon" />
        <input
          id="search-input"
          className="input"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {value && <CircleCross className="cross-icon" onClick={handleClear} />}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
