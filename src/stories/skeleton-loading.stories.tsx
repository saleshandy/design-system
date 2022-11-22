import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  SkeletonLoading,
  SkeletonLoadingProps,
} from '../components/skeleton-loading';

export default {
  title: 'Components/Skeleton Loading',
  component: SkeletonLoading,
} as Meta;

const Template: Story<SkeletonLoadingProps> = ({ width, height, ...args }) => (
  <SkeletonLoading width={width} height={height} {...args} />
);

export const Default = Template.bind({});

Default.args = {
  width: 50,
  height: 14,
};
