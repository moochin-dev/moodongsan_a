import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
`;

export const HeaderElemWrapper = styled.div<{ width: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: 100%;
`;
