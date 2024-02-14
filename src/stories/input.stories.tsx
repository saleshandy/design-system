import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Input, InputProps } from '../components/input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: {
      description: 'Text label of the pill',
    },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'First Name',
};
