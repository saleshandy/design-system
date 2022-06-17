import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Welcome, WelcomeProps } from '../src';

const meta: Meta = {
  title: 'Designs',
  component: Welcome,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<WelcomeProps> = (args) => <Welcome {...args} />;

export const Saleshandy = Template.bind({});

Saleshandy.args = {};
