import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Accordion, AccordionProps } from '../components/accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => (
  <Accordion {...args}>
    <Accordion.Item>
      <Accordion.ItemHeading>
        <Accordion.ItemButton>
          This is an accordion title 1 -{' '}
          <Accordion.ItemState>
            {({ expanded }) => (expanded ? 'Expanded' : 'Collapsed')}
          </Accordion.ItemState>
        </Accordion.ItemButton>
      </Accordion.ItemHeading>
      <Accordion.ItemPanel>
        This is the accordion description
      </Accordion.ItemPanel>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.ItemHeading>
        <Accordion.ItemButton>
          This is an accordion title 2
        </Accordion.ItemButton>
      </Accordion.ItemHeading>
      <Accordion.ItemPanel>
        This is the accordion description
      </Accordion.ItemPanel>
    </Accordion.Item>
  </Accordion>
);

export const Default = Template.bind({});

Default.args = {
  allowMultipleExpanded: true,
  allowZeroExpanded: true,
};
