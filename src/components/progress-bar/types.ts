export interface ProgressBarProps
  extends React.ComponentPropsWithoutRef<'div'> {
  percentage: number;
  baseColor?: string;
  hasBreakPoints?: boolean;
  className?: string;
  breakPoints?: number[];
  colors?: string[];
}
