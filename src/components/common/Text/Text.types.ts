import React from "react";

export interface ITextProps extends ITextWrapperProps {
  children: React.ReactNode;
}

export interface ITextWrapperProps {
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  color?: string;
}
