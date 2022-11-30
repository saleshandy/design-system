import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { getClassNameByModifier } from '../../../utils/classname-modifiers';
import { ComponentClassNames } from '../../../utils/constants';

export type EmptyListDescriptionProps = React.ComponentPropsWithoutRef<'div'>;

const EmptyListDescription = React.forwardRef<
  HTMLDivElement,
  EmptyListDescriptionProps
>(({ children, className, ...rest }, ref) => {
  const emptyListDescriptionClassName = classNames([
    getClassNameByModifier(ComponentClassNames.EmptyList, 'description'),
    className,
  ]);

  return (
    <div ref={ref} className={emptyListDescriptionClassName} {...rest}>
      {children}
    </div>
  );
});

EmptyListDescription.displayName = 'EmptyListDescription';

EmptyListDescription.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default EmptyListDescription;
