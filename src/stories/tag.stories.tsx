import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tag, TagProps } from '../components/tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: {
      description: 'Variant of the tag',
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'danger'],
      },
    },
    text: {
      description: 'Tag text',
    },
  },
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: 'primary',
  text: 'Normal',
};
