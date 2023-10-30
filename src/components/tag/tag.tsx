import React from 'react';
import type { TagProps } from './types';

export const Tag: React.FC<TagProps> = ({ text, variant, className }) => {
  const getTagStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#EFF6FF',
          color: '#3B82F6',
        };
      case 'secondary':
        return {
          backgroundColor: '#ECFEFF',
          color: '#0891B2',
        };
      case 'tertiary':
        return {
          backgroundColor: '#FFFBEB',
          color: '#D97706',
        };
      case 'danger':
        return {
          backgroundColor: '#FEF2F2',
          color: '#DC2626',
        };
      default:
        return {
          backgroundColor: '#EFF6FF',
          color: '#3B82F6',
        };
    }
  };

  return (
    <span
      className={`tag font-12 font-medium ${className}`}
      style={getTagStyle()}
    >
      {text}
    </span>
  );
};
