import React from 'react';
import { Toaster } from 'react-hot-toast';
import { getToast } from './toast';
import { ToastProps } from './types';

type ToastManagerProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bindActions: (...args: any[]) => any;
};

export class ToastManager extends React.Component<ToastManagerProps> {
  constructor(props: ToastManagerProps) {
    super(props);

    this.renderToast = this.renderToast.bind(this);

    const { bindActions } = this.props;
    bindActions(this.renderToast);
  }

  renderToast = ({
    content,
    variant,
    showCloseButton,
    duration,
    position,
  }: ToastProps): void => {
    getToast({
      content,
      variant,
      showCloseButton,
      duration,
      position,
    });
  };

  render(): React.ReactElement {
    return <Toaster />;
  }
}
