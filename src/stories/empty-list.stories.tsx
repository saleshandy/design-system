import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EmptyList, EmptyListProps } from '../components/empty-list';
import { ImageIcon } from '../components/image-icon';

export default {
  title: 'Components/EmptyList',
  component: EmptyList,
  subcomponents: {
    'EmptyList.Image': EmptyList.Image,
    'EmptyList.Body': EmptyList.Body,
    'EmptyList.Title': EmptyList.Title,
    'EmptyList.Description': EmptyList.Description,
  },
} as Meta;

const Template: Story<EmptyListProps> = (args) => (
  <EmptyList {...args}>
    <EmptyList.Image>
      <ImageIcon
        src="https://v3app.lifeisgoodforlearner.com/static/media/no-result.f0adb046.svg"
        alt="Image"
      />
    </EmptyList.Image>
    <EmptyList.Body>
      <EmptyList.Title>
        Sorry, we couldn’t find what you are looking for
      </EmptyList.Title>
      <EmptyList.Description>
        Please try searching with another term
      </EmptyList.Description>
    </EmptyList.Body>
  </EmptyList>
);

export const Default = Template.bind({});

export const Horizontal = Template.bind({});
Horizontal.args = { isHorizontal: true };
