import React, { ReactNode } from 'react';

import { ToastOptions, ToastOptionsWithoutVariant } from './types';

class ToastHelper {
  private _renderToast;

  bindActions = (renderToast: (props: ToastOptions) => React.FC): void => {
    this._renderToast = renderToast;
  };

  toast = (content: ReactNode, options?: ToastOptions): React.FC => {
    return this._renderToast && this._renderToast({ content, ...options });
  };

  info = (content: ReactNode, options?: ToastOptionsWithoutVariant): React.FC =>
    this.toast(content, { ...options, variant: 'info' });

  success = (
    content: ReactNode,
    options?: ToastOptionsWithoutVariant
  ): React.FC => this.toast(content, { ...options, variant: 'success' });

  error = (
    content: ReactNode,
    options?: ToastOptionsWithoutVariant
  ): React.FC => this.toast(content, { ...options, variant: 'error' });
}

export default ToastHelper;
