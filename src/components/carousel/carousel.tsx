import React from 'react';
import classNames from 'classnames';
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

import { CarouselProps } from './types';
import { ComponentClassNames } from '../../utils/constants';

export const Carousel: React.FC<CarouselProps> = ({
  className = '',
  children,
  showArrows = false,
  showStatus = false,
  infiniteLoop = true,
  showThumbs = false,
  useKeyboardArrows = true,
  autoPlay = true,
  dynamicHeight = true,
  emulateTouch = true,
  ...rest
}) => {
  const componentClasses = classNames(ComponentClassNames.Carousel, className);

  return (
    <ReactResponsiveCarousel
      className={componentClasses}
      showArrows={showArrows}
      showStatus={showStatus}
      infiniteLoop={infiniteLoop}
      showThumbs={showThumbs}
      useKeyboardArrows={useKeyboardArrows}
      autoPlay={autoPlay}
      dynamicHeight={dynamicHeight}
      emulateTouch={emulateTouch}
      {...rest}
    >
      {children}
    </ReactResponsiveCarousel>
  );
};

Carousel.displayName = 'Carousel';
