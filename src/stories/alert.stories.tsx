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
  size: 'lg',
};

export const Variants: StoryFn<AlertProps> = () => (
  <div className="alert-story__container">
    <Alert variant="info" description=""></Alert>
    <Alert variant="alert" description=""></Alert>
    <Alert variant="warning" description=""></Alert>
    <Alert variant="tricks" description=""></Alert>
    <Alert variant="success" description=""></Alert>
  </div>
);
