import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IconProps } from './types';
import { ComponentClassNames } from '../../utils/constants';

export const Icon = React.forwardRef<HTMLElement, IconProps>(
  ({ identifier, className, ...rest }, ref) => {
    const prefix = identifier === 'dot' ? '' : 'sh-';

    const identifierClass = `${prefix}${identifier}`;
    const iconClass = classNames([
      ComponentClassNames.Icon,
      identifierClass,
      className,
    ]);

    return <i ref={ref} className={iconClass} {...rest} />;
  }
);

Icon.displayName = 'Icon';

Icon.propTypes = {
  identifier: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  identifier: '',
};
