import React, { FC } from "react";
import ButtonCore, { ButtonProps as Props } from '@mui/material/Button'

export type ButtonProps = Props;

export const Button: FC<ButtonProps> = ({ children, ...rest}) => {
  return (
    <ButtonCore
        { ...rest }
    >
      {children}
    </ButtonCore>
  );
};