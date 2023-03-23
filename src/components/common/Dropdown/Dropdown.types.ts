import React from "react";

export interface IDropdownWrapperProps {
  width: number;
  height: number;
}

export interface IDropdownProps extends IDropdownWrapperProps {
  children?: React.ReactNode;
}
