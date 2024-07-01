import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Alert, AlertProps } from '../components/alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

export const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

Template.args = {
  header: '',
  variant: 'info',
  description: '',
  header: '',
  size: 'lg',
};

export const Variants: StoryFn<AlertProps> = () => (
  <div className="alert-story__container">
    <Alert
      variant="info"
      description="All prospects matching domains/emails from this list will be blacklisted in all sequences (including client’s sequences) and will not be contacted further."
    ></Alert>
    <Alert
      variant="info"
      header="Domain setup is in progress!"
      description="It can take up to 48 hours. Explore the product in the meantime, and we'll notify you when your brand domain is ready."
    ></Alert>
    <Alert
      variant="alert"
      description="All prospects matching domains/emails from this list will be blacklisted in all sequences (including client’s sequences) and will not be contacted further."
    ></Alert>
    <Alert
      variant="warning"
      description="All prospects matching domains/emails from this list will be blacklisted in all sequences (including client’s sequences) and will not be contacted further."
    ></Alert>
    <Alert
      variant="tricks"
      description="All prospects matching domains/emails from this list will be blacklisted in all sequences (including client’s sequences) and will not be contacted further."
    ></Alert>
    <Alert
      variant="success"
      header="Domain setup is in progress!"
      description="All set! Login with your brand domain now. Click here"
    ></Alert>
  </div>
);
