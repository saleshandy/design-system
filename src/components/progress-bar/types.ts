export interface ProgressBarProps {
  percentage: number;
  baseColor?: string;
  hasBreakPoints?: boolean;
  width?: number;
  height?: number;
  className?: string;
  breakPoints?: number[];
  colors?: string[];
}
