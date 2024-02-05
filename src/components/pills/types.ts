export interface PillsProps extends React.ComponentPropsWithoutRef<'div'> {
  theme?: 'solid' | 'outline';
  size?: 'sm' | 'md';
  // variant?:
  //   | 'primary'
  //   | 'secondary';
  icon?: React.FC;
  label?: string;
  showCloseIcon?: boolean;
  onClose?: VoidFunction;
}
