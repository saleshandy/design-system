import React from 'react';
import classNames from 'classnames';
import { IconProps } from './types';
import { accessibleOnClick } from '../../shared/utils/accessible-on-click';

export const Icon = React.forwardRef<HTMLElement, IconProps>(
  ({ identifier, onClick, className, ...rest }, ref) => {
    // patch for not adding prefix for dot icon.
    const prefix = identifier === 'dot' ? '' : 'sh-';

    const identifierClass = `${prefix}${identifier}`;
    const iconClass = classNames([identifierClass, className]);

    return (
      <i
        ref={ref}
        className={iconClass}
        {...accessibleOnClick(onClick)}
        {...rest}
      />
    );
  }
);
