import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AvatarProps } from './types';
import { ComponentClassNames } from '../../utils/constants';
import { getClassNameByModifier } from '../../utils/classname-modifiers';

/**
 * An avatar is a visual representation of a user or entity.
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ firstName, lastName, size = 'sm', className = '', ...rest }, ref) => {
    const componentClasses = classNames(
      ComponentClassNames.Avatar,
      getClassNameByModifier(ComponentClassNames.Avatar, size),
      className
    );

    let initials = '';

    if (firstName) {
      initials = firstName[0]?.toUpperCase();
    }

    if (lastName) {
      initials = initials.concat(lastName[0]?.toUpperCase());
    }

    return (
      <div ref={ref} className={componentClasses} {...rest}>
        <span>{initials || 'N/A'}</span>
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
