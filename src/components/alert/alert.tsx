import React from 'react';
import { AlertProps } from './types';
import classNames from 'classnames';
import { ComponentClassNames } from '../../utils/constants';
import { getClassNameByModifier } from '../../utils/classname-modifiers';

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className = '',
      variant = '',
      title = '',
      description = '',
      size = 'lg',
      icon = ""
    },
    ref
  ) => {
    const componentClasses = classNames(
      ComponentClassNames.Alert,
      getClassNameByModifier(ComponentClassNames.Alert, variant),
      getClassNameByModifier(ComponentClassNames.Alert, size),
      className
    );

    return (
      <div ref={ref} className={componentClasses}>
        {icon && <div className="alert-icon">{icon}</div>}
        <div className="alert-text">
          {title && <div className="alert-title">{title}</div>}
            <div className="alert-description">{description}</div>
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
