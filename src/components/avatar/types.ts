export interface AvatarProps extends React.ComponentPropsWithoutRef<'div'> {
  firstName: string;
  lastName: string;
  size?: 'sm' | 'md' | 'lg';
}
