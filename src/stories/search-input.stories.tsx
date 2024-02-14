import { StoryFn, Meta } from '@storybook/react';
import { SearchInput, SearchInputProps } from '../components/search-input';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  argTypes: {
    label: {
      description: 'Text label of the search input',
    },
    variant: {
      control: 'select',
      options: ['bg-light', 'bg-gray'], 
      description: 'Background variant of the search input',
    },
  },
} as Meta;

const Template: StoryFn<SearchInputProps> = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'bg-light',
};

export const BgGray = Template.bind({});
BgGray.args = {
  variant: 'bg-gray',
};
