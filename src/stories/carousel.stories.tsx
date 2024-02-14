import React, { CSSProperties } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Carousel, CarouselProps } from '../components/carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

const defaultStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: 250,
  color: '#1F2937',
  fontSize: 32,
  fontWeight: 'bold',
};

const Template: StoryFn<CarouselProps> = (args) => (
  <Carousel {...args}>
    <div style={{ ...defaultStyles, backgroundColor: '#ffadad' }}>
      <span>1</span>
    </div>
    <div style={{ ...defaultStyles, backgroundColor: '#caffbf' }}>
      <span>2</span>
    </div>
    <div style={{ ...defaultStyles, backgroundColor: '#abc4ff' }}>
      <span>3</span>
    </div>
  </Carousel>
);

export const Default = Template.bind({});

Default.args = {
  showArrows: false,
  showStatus: false,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: true,
  autoPlay: true,
  dynamicHeight: true,
  emulateTouch: true,
  showIndicators: true,
  stopOnHover: true,
  swipeable: true,
  autoFocus: false,
  thumbWidth: 100,
  interval: 3000,
  transitionTime: 500,
  swipeScrollTolerance: 5,
};
