import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ImageIcon, ImageIconProps } from '../components/image-icon';

export default {
  title: 'Components/ImageIcon',
  component: ImageIcon,
} as Meta;

const Template: Story<ImageIconProps> = (args) => <ImageIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: 'https://www.saleshandy.com/wp-content/uploads/2022/11/header-icon-new.svg',
  alt: 'Icon',
};
