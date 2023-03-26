import React from "react";

export interface IDropdownWithRadioProps<T> {
  children?: React.ReactNode;
  paramKey: string;
  serialize: (x: T) => string;
  deserialize: (x: string | null) => T;
  initialState: T;
  stateList: T[];
  buttonWidth: number;
  buttonHeight: number;
  buttonFontSize?: number;
  buttonFontWeight?: number;
  buttonLineHeight?: number;
  buttonFontColor?: string;
  dropdownWidth: number;
  dropdownHeight: number;
}
