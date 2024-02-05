import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ImageIcon, ImageIconProps } from '../components/image-icon';

export default {
  title: 'Components/ImageIcon',
  component: ImageIcon,
} as Meta;

const Template: StoryFn<ImageIconProps> = (args) => <ImageIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: 'https://www.saleshandy.com/wp-content/uploads/2022/11/header-icon-new.svg',
  alt: 'Icon',
};
