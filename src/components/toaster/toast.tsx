import React from 'react';
import classNames from 'classnames';
import toast from 'react-hot-toast';

import { ToastProps } from './types';
import { ComponentClassNames } from '../../utils/constants';
import {
  getClassNameByModifier,
  getClassNameByModifierBasedOnFlag,
} from '../../utils/classname-modifiers';
import { Icon } from '../icon';

export const getToast = ({
  variant = 'info',
  showCloseButton = false,
  duration = 2500,
  content,
  position = 'bottom-center',
}: ToastProps): string => {
  const componentClasses = classNames(
    ComponentClassNames.Toast,
    getClassNameByModifier(ComponentClassNames.Toast, variant),
    getClassNameByModifierBasedOnFlag(
      ComponentClassNames.Toast,
      'showCloseButton',
      showCloseButton
    )
  );

  const getToastIconIdentifier = (): string => {
    if (variant === 'success') {
      return 'checks';
    }
    if (variant === 'error') {
      return 'alert-triangle';
    }
    return 'info-circle';
  };

  return toast(
    (t) => (
      <>
        <div
          className={getClassNameByModifier(
            ComponentClassNames.Toast,
            'content'
          )}
        >
          <Icon identifier={getToastIconIdentifier()} />

          <span>{content}</span>
        </div>

        {showCloseButton && (
          <button
            className={getClassNameByModifier(
              ComponentClassNames.Toast,
              'close-btn'
            )}
            onClick={() => toast.dismiss(t.id)}
          >
            <Icon identifier="close" />
          </button>
        )}
      </>
    ),
    { position, duration, className: componentClasses }
  );
};
