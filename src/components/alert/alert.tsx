import React from 'react';
import { AlertProps } from './types';
import classNames from 'classnames';
import { ComponentClassNames } from '../../utils/constants';
import { getClassNameByModifier } from '../../utils/classname-modifiers';

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className = '',
      variant = 'info',
      header = '',
      description = '',
      size = 'lg',
      icon: Icon,
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
        {Icon && (
          <div className={`${ComponentClassNames.Alert}--icon`}>
            <Icon />
          </div>
        )}
        <div className={`${ComponentClassNames.Alert}--text`}>
          {header && (
            <div className={`${ComponentClassNames.Alert}--header`}>
              {header}
            </div>
          )}
          <div className={`${ComponentClassNames.Alert}--description`}>
            {description}
          </div>
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
