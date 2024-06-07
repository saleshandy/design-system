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
        <Search className="search-icon" />
        <input
          className='input'
          placeholder={placeholder}
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {search && <CircleCross className="cross-icon" onClick={handleClear} />}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

// import React, { useState } from 'react';
// import { Search, CircleCross } from '@saleshandy/icons';
// import classNames from 'classnames';
// import { SearchInputProps } from './type';
// import { ComponentClassNames } from '../../utils/constants';
// import { getClassNameByModifier } from '../../utils/classname-modifiers';

// export const SearchInput = React.forwardRef<HTMLDivElement, SearchInputProps>(
//   (
//     {
//       placeholder = 'Search',
//       variant = 'bg-light',
//       className = '',
//       onSearch,
//       onClearSearch,
//       search,
//       setSearch,
//       ...rest
//     },
//     ref
//   ) => {
//     const [inputValue, setInputValue] = useState(search);

//     const componentClasses = classNames(
//       ComponentClassNames.SearchInput,
//       getClassNameByModifier(ComponentClassNames.SearchInput, variant),
//       className
//     );

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       const value = event.target.value;
//       setInputValue(value);
//       setSearch(value);
//     };

//     const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//       if (event.key === 'Enter' && onSearch) {
//         onSearch();
//       }
//     };

//     const handleClear = () => {
//       setInputValue('');
//       setSearch('');
//       if (onClearSearch) {
//         onClearSearch();
//       }
//     };

//     return (
//       <div className={componentClasses} {...rest} ref={ref}>
//         <Search className="search-icon" />
//         <input
//           id="search-input"
//           className="input"
//           placeholder={placeholder}
//           value={inputValue}
//           onChange={handleChange}
//           onKeyDown={handleKeyDown}
//         />
//         {inputValue && (
//           <CircleCross className="cross-icon" onClick={handleClear} />
//         )}
//       </div>
//     );
//   }
// );

// SearchInput.displayName = 'SearchInput';
