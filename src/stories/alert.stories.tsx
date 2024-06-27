import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Alert, AlertProps } from '../components/alert';

export default {
  component: Alert,
} as Meta;

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});

Default.args = {
 title:"",
 description: "",
 size : "lg"
};
