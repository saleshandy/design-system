import React from 'react';

declare type ToastVariant = 'info' | 'success' | 'error';
declare type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToastProps {
  variant?: ToastVariant;
  duration?: number;
  showCloseButton?: boolean;
  content: React.ReactNode;
  position?: ToastPosition;
}

export type ToastOptions = {
  variant?: ToastVariant;
  duration?: number;
  showCloseButton?: boolean;
  position?: ToastPosition;
};

export type ToastOptionsWithoutVariant = {
  duration?: number;
  showCloseButton?: boolean;
  position?: ToastPosition;
};
