import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../components/button';
import { Icon } from '../components/icon';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    subtitle: 'Button atoms for specific use cases',
    status: 'current',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0sIKDeMN2ztmlqvd1SWlEM/Design-system-v1.0-%F0%9F%93%81?node-id=10795%3A25308&t=JZWQfA6dmdQyjelD-0',
    },
  },
} as Meta;

export const Example: Story<ButtonProps> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

Example.args = {
  children: 'Example',
  variant: 'primary',
  disabled: false,
  isFullWidth: false,
  isLoading: false,
  loadingText: 'Loading...',
};

export const Variants: Story<ButtonProps> = () => (
  <div className="buttons-story__container">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
    <Button variant="link">Link</Button>
    <Button variant="link-subtle">Link Subtle</Button>
    <Button variant="danger">Danger</Button>
  </div>
);

export const Disabled: Story<ButtonProps> = () => (
  <div className="buttons-story__container">
    <Button variant="primary" disabled={true}>
      Primary
    </Button>
    <Button variant="secondary" disabled={true}>
      Secondary
    </Button>
    <Button variant="tertiary" disabled={true}>
      Tertiary
    </Button>
    <Button variant="link" disabled={true}>
      Link
    </Button>
    <Button variant="link-subtle" disabled={true}>
      Link Subtle
    </Button>
    <Button variant="danger" disabled={true}>
      Danger
    </Button>
  </div>
);

export const Loading: Story<ButtonProps> = () => (
  <div className="buttons-story__container">
    <Button variant="primary" isLoading={true} loadingText="Saving...">
      Primary
    </Button>
    <Button variant="secondary" isLoading={true} loadingText="Saving...">
      Secondary
    </Button>
    <Button variant="tertiary" isLoading={true} loadingText="Saving...">
      Tertiary
    </Button>
    <Button variant="link" isLoading={true} loadingText="Opening...">
      Link
    </Button>
    <Button variant="link-subtle" isLoading={true} loadingText="Opening...">
      Link Subtle
    </Button>
    <Button variant="danger" isLoading={true} loadingText="Deleting...">
      Danger
    </Button>
  </div>
);

export const IconOnly: Story<ButtonProps> = () => (
  <div className="buttons-story__container">
    <Button variant="primary">
      <Icon identifier="target" />
    </Button>
    <Button variant="secondary">
      <Icon identifier="target" />
    </Button>
    <Button variant="tertiary">
      <Icon identifier="target" />
    </Button>
    <Button variant="danger">
      <Icon identifier="target" />
    </Button>
  </div>
);

export const WithIconAndLabel: Story<ButtonProps> = () => (
  <>
    <div className="buttons-story__container">
      <Button variant="primary" iconIdentifier="target" iconPlacement="left">
        Primary
      </Button>
      <Button variant="secondary" iconIdentifier="target" iconPlacement="left">
        Secondary
      </Button>
      <Button variant="tertiary" iconIdentifier="target" iconPlacement="left">
        Tertiary
      </Button>
      <Button variant="danger" iconIdentifier="target" iconPlacement="left">
        Danger
      </Button>
    </div>
    <div className="buttons-story__container">
      <Button variant="primary" iconIdentifier="target" iconPlacement="right">
        Primary
      </Button>
      <Button variant="secondary" iconIdentifier="target" iconPlacement="right">
        Secondary
      </Button>
      <Button variant="tertiary" iconIdentifier="target" iconPlacement="right">
        Tertiary
      </Button>
      <Button variant="danger" iconIdentifier="target" iconPlacement="right">
        Danger
      </Button>
    </div>
  </>
);

export const FullWidth: Story<ButtonProps> = () => (
  <div className="buttons-story__container">
    <Button variant="primary" isFullWidth={true}>
      Primary
    </Button>
    <Button variant="secondary" isFullWidth={true}>
      Secondary
    </Button>
    <Button variant="tertiary" isFullWidth={true}>
      Tertiary
    </Button>
    <Button variant="link" isFullWidth={true}>
      Link
    </Button>
    <Button variant="link-subtle" isFullWidth={true}>
      Link Subtle
    </Button>
    <Button variant="danger" isFullWidth={true}>
      Danger
    </Button>
  </div>
);
