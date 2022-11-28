import { CSSProperties } from 'react';

export interface SkeletonLoadingProps {
  width?: number;
  height?: number;
  baseColor?: string;
  highlightColor?: string;
  className?: string;
  circle?: boolean;
  enableAnimation?: boolean;
  count?: number;
  borderRadius?: number;
  style?: CSSProperties;
}
