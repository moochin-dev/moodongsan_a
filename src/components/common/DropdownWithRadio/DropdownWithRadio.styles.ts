import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const DropdownContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 36px;
  }
`;
