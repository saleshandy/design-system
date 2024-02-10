import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Pills, PillsProps } from '../components/pills';

export default {
  title: 'Components/Pills',
  component: Pills,
  argTypes: {
    theme: {
      description: 'Theme of the pill',
      defaultValue: 'solid',
      control: {
        type: 'select',
        options: ['solid', 'outline'],
      },
    },
    size: {
      description: 'Size of the pill',
      defaultValue: 'sm',
      control: {
        type: 'select',
        options: ['sm', 'md'],
      },
    },
    label: {
      description: 'Text label of the pill',
    },
    showCloseIcon: {
      description: 'Show or hide close icon in the pill',
      defaultValue: false,
    },
  },
} as Meta;

const Template: StoryFn<PillsProps> = (args) => <Pills {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'solid',
  size: 'sm',
  label: 'Outbound Cold Email',
  showCloseIcon: false,
  onClose: () => alert('Pill will be removed'),
};
