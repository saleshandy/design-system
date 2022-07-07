import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Welcome as WelcomeReact } from './utils/welcome';

const meta: Meta = {
  title: 'Welcome',
  component: WelcomeReact,
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export default meta;

export const Welcome: Story = () => <WelcomeReact />;
