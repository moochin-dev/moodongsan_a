import { IButtonProps, IButtonWrapperProps } from "./Button.types";
import { ButtonWrapper } from "./Button.styles";
import React from "react";

export const Button = React.forwardRef(
  (props: IButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const buttonWrapperProps: IButtonWrapperProps = {
      width: props.width,
      height: props.height,
      onClick: props.onClick,
    };

    return (
      <ButtonWrapper ref={ref} {...buttonWrapperProps}>
        {props.children}
      </ButtonWrapper>
    );
  }
);
