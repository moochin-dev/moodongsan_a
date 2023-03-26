import styled from "styled-components";
import { ITextWrapperProps } from "./Text.types";

export const TextWrapper = styled.div<ITextWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 16)}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1)};
  color: ${(props) => (props.color ? props.color : "#333d4b")};
`;
