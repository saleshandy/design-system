import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { getClassNameByModifier } from '../../../utils/classname-modifiers';
import { ComponentClassNames } from '../../../utils/constants';

export type EmptyListBodyProps = React.ComponentPropsWithoutRef<'div'>;

const EmptyListBody = React.forwardRef<HTMLDivElement, EmptyListBodyProps>(
  ({ children, className, ...rest }, ref) => {
    const emptyListBodyClassName = classNames([
      getClassNameByModifier(ComponentClassNames.EmptyList, 'body'),
      className,
    ]);

    return (
      <div ref={ref} className={emptyListBodyClassName} {...rest}>
        {children}
      </div>
    );
  }
);

EmptyListBody.displayName = 'EmptyListBody';

EmptyListBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default EmptyListBody;
