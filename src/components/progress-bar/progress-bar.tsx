import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ProgressBarProps } from './types';
import {
  progressBarDefaultBreakPoints,
  progressBarDefaultColors,
  progressBarBaseColor,
} from './helper';

export const ProgressBar: React.FC<ProgressBarProps> = React.forwardRef<
  HTMLDivElement,
  ProgressBarProps
>(
  (
    {
      percentage,
      baseColor = progressBarBaseColor,
      hasBreakPoints = true,
      breakPoints = progressBarDefaultBreakPoints,
      colors = progressBarDefaultColors,
    },
    ref
  ) => {
    const [bgColor, setBgColor] = useState<string>(baseColor);

    useEffect(() => {
      if (hasBreakPoints) {
        breakPoints.forEach((point, index) => {
          if (percentage >= point) {
            setBgColor(colors[index]);
          }
        });
      }

      return () => {
        setBgColor(baseColor);
      };
    }, [percentage, hasBreakPoints, breakPoints, baseColor, colors]);

    return (
      <div ref={ref} className="progress-bar-wrapper">
        <span style={{ width: `${percentage}%` }}>
          <span
            className="progress-bar-wrapper__bar"
            style={{ backgroundColor: bgColor }}
          />
        </span>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  hasBreakPoints: PropTypes.bool,
  breakPoints: PropTypes.arrayOf(PropTypes.number.isRequired),
  colors: PropTypes.arrayOf(PropTypes.string.isRequired),
  baseColor: PropTypes.string,
};

ProgressBar.defaultProps = {
  percentage: 80,
  baseColor: progressBarBaseColor,
  hasBreakPoints: true,
  breakPoints: progressBarDefaultBreakPoints,
  colors: progressBarDefaultColors,
};
