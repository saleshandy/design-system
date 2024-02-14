// import React, { useState } from 'react';
// import { Input } from '../input';
// import { SearchInputProps } from './types';
// import { Search, CircleCross } from '@saleshandy/icons';

// export const SearchInput: React.FC<SearchInputProps> = ({ label, ...rest }) => {
//   const [value, setValue] = useState('');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value);
//   };

//   const handleClear = () => {
//     setValue('');
//   };

//   return (
//     <div className="search-input-container">
//       {label && <label>{label}</label>}
//       <div className="input-wrapper">
//         <div className="search-icon">
//           <Search />
//         </div>
//         <Input
//           id="search-input"
//           className="input-field"
//           placeholder="Search"
//           value={value}
//           onChange={handleChange}
//           {...rest}
//         />
//         {value && (
//           <div className="clear-icon" onClick={handleClear}>
//             <CircleCross className="cross-icon" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// Input.displayName = 'SearchInput';


// new component without Input
import React, { useState } from 'react';
import classNames from 'classnames';
import { SearchInputProps } from './types';
import { Search, CircleCross } from '@saleshandy/icons';
import { ComponentClassNames } from '../../utils/constants';

export const SearchInput: React.FC<SearchInputProps> = ({ label, className = '', ...rest }) => {
  const [value, setValue] = useState('');

  const componentClasses = classNames(ComponentClassNames.Input, 'search-input', className);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  return (
    <div className={componentClasses} {...rest}>
      <label htmlFor="search-input" className="shd-input--label">
        {label}
      </label>
      <div className="search-input--wrapper">
        <Search className="search-icon" />
        <input
          id="search-input"
          className="input"
          placeholder="Search"
          value={value}
          onChange={handleChange}
        />
        {value && <CircleCross className="cross-icon" onClick={handleClear} />}
      </div>
    </div>
  );
};

SearchInput.displayName = 'SearchInput';
