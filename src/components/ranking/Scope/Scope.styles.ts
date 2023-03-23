import styled from "styled-components";

export const ScopeWrapper = styled.div`
  position: relative;
`;

export const DropdownContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  button.dropdown-content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36px;
  }
`;
