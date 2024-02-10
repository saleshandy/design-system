import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './types';
import { ComponentClassNames } from '../../utils/constants';
import {
  getClassNameByModifier,
  getClassNameByModifierBasedOnFlag,
} from '../../utils/classname-modifiers';

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 * A button triggers an event or action. This let users know what will happen next.
 * They are typically placed throughout your UI, in places like:
 * <br /> - Modal windows
 * <br /> - Forms
 * <br /> - Cards
 * <br /> - Toolbars
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      isFullWidth = false,
      disabled = false,
      isLoading = false,
      loadingText = 'Loading...',
      children,
      icon: Icon,
      iconPlacement,
      ...rest
    },
    ref
  ) => {
    const componentClasses = classNames(
      ComponentClassNames.Button,
      getClassNameByModifier(ComponentClassNames.Button, variant),
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
        'fullWidth',
        isFullWidth
      ),
      className
    );

    const renderLoader = () => (
      <div className="shd-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
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
          <>
            {renderLoader()}
            <span>{loadingText}</span>
          </>
        ) : (
          <>
            {iconPlacement === 'left' && Icon && <Icon />}
            <span>{children}</span>
            {iconPlacement === 'right' && Icon && <Icon />}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
