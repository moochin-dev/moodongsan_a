import { IDropdownProps, IDropdownWrapperProps } from "./Dropdown.types";
import { DropdownWrapper } from "./Dropdown.styles";
import React from "react";

export const Dropdown = React.forwardRef(
  (props: IDropdownProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const dropdownWrapperProps: IDropdownWrapperProps = {
      width: props.width,
      height: props.height,
    };
    return (
      <DropdownWrapper ref={ref} {...dropdownWrapperProps}>
        {props.children}
      </DropdownWrapper>
    );
  }
);
