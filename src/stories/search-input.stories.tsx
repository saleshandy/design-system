import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SearchInput, SearchInputProps } from '../components/search-input/';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  argTypes: {
    label: {
      description: 'Text label of the pill',
    },
  },
} as Meta;

const Template: StoryFn<SearchInputProps> = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Search Input',
};
