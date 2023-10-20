import React from 'react';
import { Story, Meta } from '@storybook/react';
import { RangeInput, RangeInputType } from '../components/range-input';

export default {
  title: 'Components/Range Input',
  component: RangeInput,
} as Meta;

const Template: Story<{}> = ({ ...args }) => <RangeInput {...args} />;

export const Default = Template.bind({});
