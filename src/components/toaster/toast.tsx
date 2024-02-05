import React, { ReactElement } from 'react';
import classNames from 'classnames';
import toast from 'react-hot-toast';

import { ToastProps } from './types';
import { ComponentClassNames } from '../../utils/constants';
import {
  getClassNameByModifier,
  getClassNameByModifierBasedOnFlag,
} from '../../utils/classname-modifiers';
import { AlertTriangle, Checks, Cross, InfoCircle } from '@saleshandy/icons';

export const getToast = ({
  variant = 'info',
  showCloseButton = false,
  duration = 3000,
  content,
  position = 'bottom-center',
}: ToastProps): string => {
  const TOAST_DURATION = showCloseButton && duration === 3000 ? 5000 : duration;

  const componentClasses = classNames(
    ComponentClassNames.Toast,
    getClassNameByModifier(ComponentClassNames.Toast, variant),
    getClassNameByModifierBasedOnFlag(
      ComponentClassNames.Toast,
      'showCloseButton',
      showCloseButton
    )
  );

  const getToastIconIdentifier = (): ReactElement => {
    if (variant === 'success') {
      return <Checks />;
    }
    if (variant === 'error') {
      return <AlertTriangle />;
    }
    return <InfoCircle />;
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
          {getToastIconIdentifier()}

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
            <Cross />
          </button>
        )}
      </>
    ),
    { position, duration: TOAST_DURATION, className: componentClasses }
  );
};
