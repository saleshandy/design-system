import React from 'react';
import { IProps } from './types';

const ImageIcon: React.FC<IProps> = ({
  src,
  alt,
  height,
  onClick,
  ...props
}) => <img {...props} src={src} alt={alt} height={height} onClick={onClick} />;

export default ImageIcon;
