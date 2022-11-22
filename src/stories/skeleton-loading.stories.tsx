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
  circle: false,
  enableAnimation: true,
  count: 1,
  borderRadius: 4,
  baseColor: '#F3F4F6',
  highlightColor: 'rgba(213, 216, 221, .6)',
};

export const Circle = Template.bind({});

Circle.args = {
  width: 50,
  height: 50,
  circle: true,
  enableAnimation: true,
  count: 1,
};

export const Colored = Template.bind({});

Colored.args = {
  baseColor: 'purple',
  highlightColor: 'red',
};
