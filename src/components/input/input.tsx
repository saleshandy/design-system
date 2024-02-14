import React from 'react';
import classNames from 'classnames';

import { InputProps } from './types';
import { ComponentClassNames } from '../../utils/constants';

export const Input = React.forwardRef<HTMLDivElement, InputProps>(
  (
    { className = '', label = '', placeholder = 'Enter text', ...rest },
    ref
  ) => {
    const componentClasses = classNames(ComponentClassNames.Input, className);

    return (
      <div
        data-testid="input-container"
        ref={ref}
        className={componentClasses}
        {...rest}
      >
        <label htmlFor="text-input" className="shd-input--label">
          {label}
        </label>
        <input id="text-input" className="input" placeholder={placeholder} />
      </div>
    );
  }
);

Input.displayName = 'Input';
