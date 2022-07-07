import React, { FC } from 'react';
import classNames from 'classnames';

import { ButtonProps } from './types';
import { ComponentClassNames } from '../../shared/utils/constants';
import {
  classNameModifier,
  classNameModifierByFlag,
} from '../../shared/utils/classname-modifiers';
import { Icon } from '../icon';

/**
 * This is a special button
 */
export const Button: FC<ButtonProps> = ({
  className,
  size,
  type,
  theme,
  variant,
  isFullWidth,
  isDisabled,
  isLoading,
  loadingText,
  children,
  leftIconIdentifier,
  rightIconIdentifier,
  ...rest
}) => {
  const componentClasses = classNames(
    ComponentClassNames.Button,
    classNameModifier(ComponentClassNames.Button, theme),
    classNameModifier(ComponentClassNames.Button, variant),
    classNameModifier(ComponentClassNames.Button, size),
    classNameModifierByFlag(
      ComponentClassNames.Button,
      'disabled',
      isDisabled || isLoading
    ),
    classNameModifierByFlag(ComponentClassNames.Button, 'loading', isLoading),
    classNameModifierByFlag(
      ComponentClassNames.Button,
      'fullwidth',
      isFullWidth
    ),
    className
  );

  console.log('🚀 > ComponentClassNames', ComponentClassNames);

  const iconClasses = classNames(
    ComponentClassNames.Icon,
    classNameModifier(ComponentClassNames.Icon, leftIconIdentifier),
    classNameModifier(ComponentClassNames.Icon, rightIconIdentifier)
  );

  return (
    <button
      className={componentClasses}
      disabled={isDisabled || isLoading}
      type={type}
      {...rest}
    >
      {isLoading && loadingText ? (
        <span>Loading..</span>
      ) : (
        <>
          {leftIconIdentifier !== '' && (
            <span className={iconClasses}>
              <Icon identifier={leftIconIdentifier} />
            </span>
          )}
          {children}
          {rightIconIdentifier !== '' && (
            <span className={iconClasses}>
              <Icon identifier={rightIconIdentifier} />
            </span>
          )}
        </>
      )}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  size: 'md',
  type: 'button',
  theme: 'solid',
  variant: 'default',
  isFullWidth: false,
  isDisabled: false,
  isLoading: false,
  loadingText: '',
  leftIconIdentifier: '',
  rightIconIdentifier: '',
};
