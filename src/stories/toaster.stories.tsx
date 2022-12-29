import React from 'react';
import { Story, Meta } from '@storybook/react';
import { toaster, ToastManager, ToastOptions } from '../components/toaster';
import { Button } from '../components/button';

/**
 *  Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.
 *
 *  There are different types of toasts depending on the message they must show:
 *  Info: this toast has the scope of letting the user know about a neutral and informative change
 *  Success: this toast is indicative that the user just performed a successful or positive action
 *  Error: this toast indicates a potentially negative action that the user must take notice of
 *
 *  Best practices -
 *
 *  Use toasts to notify the user of information that is either time-sensitive or relevant to the action the user is performing
 *
 *  DEVELOPER NOTE: For more information about the props, check react-hot-toast
 *
 *  */

export default {
  title: 'Components/Toaster',
  argTypes: {
    position: {
      description: 'The position of the toaster on the screen.',
      defaultValue: 'bottom-center',
      control: {
        type: 'select',
        options: [
          'top-left',
          'top-center',
          'top-right',
          'bottom-left',
          'bottom-center',
          'bottom-right',
        ],
      },
    },
    showCloseButton: {
      description: 'Render close button to dismiss the toaster.',
      defaultValue: false,
    },
    duration: {
      description:
        'The duration in seconds after which the toaster will auto hide.',
      defaultValue: 3000,
    },
  },
} as Meta;

const Template: Story<ToastOptions> = (args) => {
  const showInfoToast = () =>
    toaster.info('Please note this simple info', args);
  const showSuccessToast = () =>
    toaster.success('Please note this is done', args);
  const showErrorToast = () =>
    toaster.error('Please note this urgent issue', args);

  return (
    <div className="toaster-story__container">
      <ToastManager bindActions={toaster.bindActions} />
      <Button onClick={showInfoToast}>Info</Button>
      <Button onClick={showSuccessToast}>Success</Button>
      <Button onClick={showErrorToast}>Error</Button>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  position: 'bottom-center',
  showCloseButton: false,
  duration: 3000,
};
