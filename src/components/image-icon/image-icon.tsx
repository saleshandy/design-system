import React from 'react';
import PropTypes from 'prop-types';

import { ImageIconProps } from './types';
import classNames from 'classnames';
import { ComponentClassNames } from '../../utils/constants';

export const ImageIcon = React.forwardRef<HTMLImageElement, ImageIconProps>(
  ({ src, alt, className, ...rest }, ref) => {
    const imageIconClassNames = classNames([
      ComponentClassNames.ImageIcon,
      className,
    ]);

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={imageIconClassNames}
        {...rest}
      />
    );
  }
);

ImageIcon.displayName = 'ImageIcon';

ImageIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

ImageIcon.defaultProps = {
  src: '',
  alt: '',
};
