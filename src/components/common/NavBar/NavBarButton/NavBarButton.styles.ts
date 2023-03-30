import styled from "styled-components";

export const NavBarButtonWrapper = styled.button<{
  isActive: boolean;
  isDotted?: boolean;
}>`
  width: 60px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  border: ${(props) => (props.isDotted ? "1px dashed #000000" : "none")};
  background-color: ${(props) => (props.isActive ? "black" : "transparent")};
`;
