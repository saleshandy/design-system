export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
  isLoading?: boolean;
  iconIdentifier?: string;
  iconPlacement?: 'left' | 'right';
}
