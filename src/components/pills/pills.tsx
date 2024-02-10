import React from 'react';
import classNames from 'classnames';

import { PillsProps } from './types';
import { ComponentClassNames } from '../../utils/constants';
import {
  getClassNameByModifier,
  getClassNameByModifierBasedOnFlag,
} from '../../utils/classname-modifiers';
import { Cross } from '@saleshandy/icons';

export const Pills = React.forwardRef<HTMLDivElement, PillsProps>(
  (
    {
      className = '',
      theme = 'solid',
      size = 'sm',
      label = '',
      showCloseIcon = false,
      icon: Icon,
      onClose,
      ...rest
    },
    ref
  ) => {
    const componentClasses = classNames(
      ComponentClassNames.Pills,
      getClassNameByModifier(ComponentClassNames.Pills, theme),
      getClassNameByModifier(ComponentClassNames.Pills, size),
      getClassNameByModifierBasedOnFlag(
        ComponentClassNames.Pills,
        'showCloseIcon',
        showCloseIcon
      ),
      className
    );

    return (
      <div ref={ref} className={componentClasses} {...rest}>
        {Icon && <Icon />}
        <span className="pills-label">{label}</span>
        {showCloseIcon && <Cross className="pills-close" onClick={onClose} />}
      </div>
    );
  }
);

Pills.displayName = 'Pills';
