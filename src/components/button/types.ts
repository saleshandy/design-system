export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'link'
    | 'link-subtle';
  isFullWidth?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.FC;
  iconPlacement?: 'left' | 'right';
}
