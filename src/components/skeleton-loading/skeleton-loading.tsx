import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

import { SkeletonLoadingProps } from './types';

export const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({
  circle,
  width,
  height,
  borderRadius,
  baseColor,
  highlightColor,
  enableAnimation,
  count,
  className,
  style,
}) => {
  return (
    <Skeleton
      circle={circle}
      width={width}
      height={height}
      borderRadius={borderRadius}
      className={className}
      baseColor={baseColor}
      highlightColor={highlightColor}
      enableAnimation={enableAnimation}
      count={count}
      style={style}
    />
  );
};

SkeletonLoading.displayName = 'SkeletonLoading';

SkeletonLoading.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  baseColor: PropTypes.string,
  highlightColor: PropTypes.string,
  circle: PropTypes.bool,
  enableAnimation: PropTypes.bool,
  count: PropTypes.number,
  borderRadius: PropTypes.number,
  style: PropTypes.object,
};

SkeletonLoading.defaultProps = {
  width: 50,
  height: 14,
  baseColor: '#F3F4F6',
  highlightColor: '#E2E4E8',
  circle: false,
  enableAnimation: true,
  count: 1,
  borderRadius: 4,
  style: {},
};
