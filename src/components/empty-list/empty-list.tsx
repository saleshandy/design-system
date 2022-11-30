import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { EmptyListProps } from './types';

import { ComponentClassNames } from '../../utils/constants';
import { getClassNameByModifierBasedOnFlag } from '../../utils/classname-modifiers';

import EmptyListImage from './components/empty-list-image';
import EmptyListBody from './components/empty-list-body';
import EmptyListTitle from './components/empty-list-title';
import EmptyListDescription from './components/empty-list-description';

export interface EmptyListComposition {
  Image: typeof EmptyListImage;
  Body: typeof EmptyListBody;
  Title: typeof EmptyListTitle;
  Description: typeof EmptyListDescription;
}

export const EmptyList: React.FC<EmptyListProps> & EmptyListComposition = ({
  children,
  isHorizontal,
  ...rest
}) => {
  const emptyListClassNames = classNames([
    ComponentClassNames.EmptyList,
    getClassNameByModifierBasedOnFlag(
      ComponentClassNames.EmptyList,
      'horizontal',
      isHorizontal
    ),
  ]);

  return (
    <div className={emptyListClassNames} {...rest}>
      {children}
    </div>
  );
};

EmptyList.displayName = 'EmptyList';

EmptyList.Image = EmptyListImage;
EmptyList.Body = EmptyListBody;
EmptyList.Title = EmptyListTitle;
EmptyList.Description = EmptyListDescription;

EmptyList.propTypes = {
  children: PropTypes.node,
  isHorizontal: PropTypes.bool,
};

EmptyList.defaultProps = {
  isHorizontal: false,
};
