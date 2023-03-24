import React from "react";

export interface IDropdownWithRadioProps<T> {
  children?: React.ReactNode;
  initialState: T;
  stateList: T[];
  buttonWidth: number;
  buttonHeight: number;
  dropdownWidth: number;
  dropdownHeight: number;
}
