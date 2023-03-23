import React from "react";

export interface IButtonWrapperProps {
  width: number;
  height: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IButtonProps extends IButtonWrapperProps {
  children?: React.ReactNode;
}
