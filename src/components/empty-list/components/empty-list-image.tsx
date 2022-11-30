import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { getClassNameByModifier } from '../../../utils/classname-modifiers';
import { ComponentClassNames } from '../../../utils/constants';

export type EmptyListImageProps = React.ComponentPropsWithoutRef<'div'>;

const EmptyListImage = React.forwardRef<HTMLDivElement, EmptyListImageProps>(
  ({ children, className, ...rest }, ref) => {
    const emptyListImageClassName = classNames([
      getClassNameByModifier(ComponentClassNames.EmptyList, 'image'),
      className,
    ]);

    return (
      <div ref={ref} className={emptyListImageClassName} {...rest}>
        {children}
      </div>
    );
  }
);

EmptyListImage.displayName = 'EmptyListImage';

EmptyListImage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default EmptyListImage;
