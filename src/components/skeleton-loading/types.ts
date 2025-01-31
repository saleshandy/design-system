import { CSSProperties } from 'react';

export interface SkeletonLoadingProps {
  width?: number | string;
  height?: number | string;
  baseColor?: string;
  highlightColor?: string;
  className?: string;
  circle?: boolean;
  enableAnimation?: boolean;
  count?: number;
  borderRadius?: number;
  style?: CSSProperties;
}
