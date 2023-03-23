import styled from "styled-components";
import { IButtonWrapperProps } from "./Button.types";

export const ButtonWrapper = styled.button<IButtonWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
