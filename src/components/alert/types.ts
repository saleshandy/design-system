import React from 'react';

export interface AlertProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: 'info' | 'alert' | 'warning' | 'tricks' | 'success';
  icon?: React.FC;
  title?: React.ReactNode;
  description: React.ReactNode;
  size?: 'sm' | 'lg';
}
