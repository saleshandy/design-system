import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Default',
      control: {
        type: 'text',
      },
    },
    type: {
      defaultValue: 'button',
    },
    size: {
      defaultValue: 'md',
    },
    theme: {
      defaultValue: 'solid',
    },
    variant: {
      defaultValue: 'default',
    },
    isDisabled: {
      defaultValue: false,
    },
    isFullWidth: {
      defaultValue: false,
    },
    isLoading: {
      defaultValue: false,
    },
    loadingText: {
      defaultValue: '',
    },
    className: {
      defaultValue: '',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});
