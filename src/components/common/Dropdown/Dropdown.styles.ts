import styled from "styled-components";
import { IDropdownWrapperProps } from "./Dropdown.types";

export const DropdownWrapper = styled.div<IDropdownWrapperProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: absolute;
  top: 44px;
  left: 0;
  z-index: 999;
  background: gray;
`;
