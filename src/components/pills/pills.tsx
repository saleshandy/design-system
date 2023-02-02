import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { PillsProps } from './types';
import { ComponentClassNames } from '../../utils/constants';
import {
  getClassNameByModifier,
  getClassNameByModifierBasedOnFlag,
} from '../../utils/classname-modifiers';
import { Icon } from '../icon';

export const Pills = React.forwardRef<HTMLDivElement, PillsProps>(
  (
    {
      className = '',
      theme = 'solid',
      size = 'sm',
      label = '',
      showCloseIcon = false,
      iconIdentifier = '',
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
        {iconIdentifier && (
          <Icon className="pills-icon" identifier={iconIdentifier} />
        )}
        <span className="pills-label">{label}</span>
        {showCloseIcon && (
          <Icon className="pills-close" identifier="cross" onClick={onClose} />
        )}
      </div>
    );
  }
);

Pills.displayName = 'Pills';

Pills.propTypes = {
  theme: PropTypes.oneOf(['solid', 'outline']),
  size: PropTypes.oneOf(['sm', 'md']),
  label: PropTypes.string,
  iconIdentifier: PropTypes.string,
  showCloseIcon: PropTypes.bool,
  onClose: PropTypes.func,
};
