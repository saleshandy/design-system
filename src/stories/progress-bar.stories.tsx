import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ProgressBar, ProgressBarProps } from '../components/progress-bar';
import {
  progressBarBaseColor,
  progressBarDefaultBreakPoints,
  progressBarDefaultColors,
} from '../components/progress-bar/helper';

export default {
  title: 'Components/Progress Bar',
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = ({ width, height, ...args }) => (
  <ProgressBar width={width} height={height} {...args} />
);

export const Default = Template.bind({});

Default.args = {
  percentage: 80,
  baseColor: progressBarBaseColor,
  hasBreakPoints: true,
  breakPoints: progressBarDefaultBreakPoints,
  colors: progressBarDefaultColors,
  width: 399,
  height: 10,
};
