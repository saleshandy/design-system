import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface WelcomeProps extends HTMLAttributes<HTMLHeadingElement> {
  /** custom content, defaults to 'Saleshandy Design System' */
  children?: ReactChild;
}

export const Welcome: FC<WelcomeProps> = ({ children }) => {
  return (
    <h1 className="welcome">
      {children || `Welcome To Saleshandy Design System`}
    </h1>
  );
};
