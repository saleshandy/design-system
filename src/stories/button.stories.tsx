import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../components/button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps & { disabled: boolean }> = (args) => (
  <Button {...args}>Default</Button>
);

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  variant: 'primary',
  size: 'large',
  isFullWidth: false,
  isLoading: false,
};
