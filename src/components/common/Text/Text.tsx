import { ITextProps, ITextWrapperProps } from "./Text.types";
import { TextWrapper } from "./Text.styles";

export const Text = (props: ITextProps) => {
  const TextWrapperProps: ITextWrapperProps = {
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    lineHeight: props.lineHeight,
    color: props.color,
  };

  return <TextWrapper {...TextWrapperProps}>{props.children}</TextWrapper>;
};
