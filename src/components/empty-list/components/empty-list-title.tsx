import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { getClassNameByModifier } from '../../../utils/classname-modifiers';
import { ComponentClassNames } from '../../../utils/constants';

export type EmptyListTitleProps = React.ComponentPropsWithoutRef<'h1'>;

const EmptyListTitle = React.forwardRef<
  HTMLHeadingElement,
  EmptyListTitleProps
>(({ children, className, ...rest }, ref) => {
  const emptyListTitleClassName = classNames([
    getClassNameByModifier(ComponentClassNames.EmptyList, 'title'),
    className,
  ]);

  return (
    <h1 ref={ref} className={emptyListTitleClassName} {...rest}>
      {children}
    </h1>
  );
});

EmptyListTitle.displayName = 'EmptyListTitle';

EmptyListTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default EmptyListTitle;
