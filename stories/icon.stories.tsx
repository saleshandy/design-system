import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, IconProps } from '../src';
import { saleshandyIcons } from './utils/saleshandy-icons';
import './scss/storybook.scss';

const meta: Meta = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    className: {
      defaultValue: '',
    },
    identifier: {
      defaultValue: 'like',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IconProps> = ({ identifier }) => (
  <Icon className="icon" identifier={identifier} />
);

export const Default = Template.bind({
  identifier: 'like',
});

export const AllIcons = () => (
  <>
    <p className="note">Click on any Icon to copy the identifier</p>
    <div className="icons-container">
      {saleshandyIcons.map((identifier) => (
        <div
          className="icon-wrapper"
          onClick={() => {
            navigator.clipboard.writeText(identifier);
          }}
        >
          <Icon className="icon" identifier={identifier} />
        </div>
      ))}
    </div>
  </>
);
