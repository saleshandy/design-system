import React from 'react';
import { Search, CircleX } from '@saleshandy/icons';
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
      search,
      setSearch,
      ...rest
    },
    ref
  ) => {
    const componentClasses = classNames(
      ComponentClassNames.SearchInput,
      getClassNameByModifier(ComponentClassNames.SearchInput, variant),
      className
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && onSearch) {
        onSearch();
      }
    };

    const handleClear = () => {
      setSearch('');
      if (onClearSearch) {
        onClearSearch();
      }
    };

    return (
      <div className={componentClasses} {...rest} ref={ref}>
        <div className="search-icon">
          <Search />
        </div>
        <div className="input">
          <input
            placeholder={placeholder}
            value={search}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="cross-icon">
          {search && <CircleX onClick={handleClear} />}
        </div>
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
