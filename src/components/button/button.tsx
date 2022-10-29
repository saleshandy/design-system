import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ComponentClassNames } from '../../utils/constants';
import {
  getClassNameByModifier,
  getClassNameByModifierBasedOnFlag,
} from '../../utils/classname-modifiers';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
  isLoading?: boolean;
  iconIdentifier?: string;
  iconPlacement?: 'left' | 'right';
}

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 *
 * Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:
 * <br /> - Modal windows
 * <br /> - Forms
 * <br /> - Cards
 * <br /> - Toolbars
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      variant,
      isFullWidth,
      disabled,
      isLoading,
      children,
      iconIdentifier,
      iconPlacement,
      ...rest
    },
    ref
  ) => {
    const componentClasses = classNames(
      ComponentClassNames.Button,
      getClassNameByModifier(ComponentClassNames.Button, variant),
      getClassNameByModifier(ComponentClassNames.Button, size),
      getClassNameByModifierBasedOnFlag(
        ComponentClassNames.Button,
        'disabled',
        disabled || isLoading
      ),
      getClassNameByModifierBasedOnFlag(
        ComponentClassNames.Button,
        'loading',
        isLoading
      ),
      getClassNameByModifierBasedOnFlag(
        ComponentClassNames.Button,
        'fullwidth',
        isFullWidth
      ),
      className
    );

    return (
      <button
        ref={ref}
        className={componentClasses}
        disabled={disabled || isLoading}
        type="button"
        {...rest}
      >
        {isLoading ? (
          <span>Loading..</span>
        ) : (
          <>
            {iconPlacement === 'left' && (
              <span>Icon Left {iconIdentifier}</span>
            )}
            {children}
            {iconPlacement === 'right' && (
              <span>Icon Right {iconIdentifier}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  iconIdentifier: PropTypes.string,
  iconPlacement: PropTypes.oneOf(['left', 'right']),
};

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
  isLoading: false,
  iconIdentifier: '',
};
