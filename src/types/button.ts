import { HTMLAttributes, ReactNode } from 'react';
import { Sizes } from './base';

export type ButtonSizes = Sizes;
export type ButtonTypes = 'button' | 'reset' | 'submit';
export type ButtonThemes = 'solid' | 'ghost';
export type ButtonVariants = 'default' | 'primary' | 'success' | 'danger';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * custom content, defaults to 'Saleshandy Design System'
   */
  children: ReactNode;

  /**
   * Changes the button type
   * @default "button"
   */
  type?: ButtonTypes;

  /**
   * Changes the size of the button.
   * @default "md"
   */
  size?: ButtonSizes;

  /**
   * Changes the theme of the button.
   * @default "solid"
   */
  theme?: ButtonThemes;

  /**
   * Changes the visual weight of the button.
   * @default "default"
   */
  variant?: ButtonVariants;

  /**
   * If `true`, the button will be disabled.
   */
  isDisabled?: boolean;

  /**
   * If `true`, the button will take up the full width of its container.
   */
  isFullWidth?: boolean;

  /**
   * If `true`, the button will show a spinner.
   */
  isLoading?: boolean;

  /**
   * The label to show in the button when `loading` is true
   * If no text is passed, it only shows the spinner
   */
  loadingText?: string;

  /**
   * Button click event handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * custom icon display on left side of children
   */
  iconLeft?: ReactNode;

  /**
   * custom icon display on right side of children
   */
  iconRight?: ReactNode;

  /**
   * custom className to the button
   */
  className?: string;
}
