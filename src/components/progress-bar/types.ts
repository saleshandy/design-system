export interface ProgressBarProps
  extends React.ComponentPropsWithoutRef<'div'> {
  percentage: number;
  baseColor?: string;
  hasBreakPoints?: boolean;
  width?: number;
  height?: number;
  className?: string;
  breakPoints?: number[];
  colors?: string[];
}
