import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '../components/avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    firstName: {
      description: 'First name of the user',
    },
    lastName: {
      description: 'Last name of the user',
    },
    size: {
      description: 'The size of the avatar',
      defaultValue: 'sm',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0sIKDeMN2ztmlqvd1SWlEM/Design-system-v1.0-%F0%9F%93%81?node-id=10795%3A28278&t=wX6Go73Oxm3KB0m7-0',
    },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  firstName: 'Shoaib',
  lastName: 'Sayyed',
  size: 'sm',
};
