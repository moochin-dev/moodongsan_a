import { ContentsWrapper } from "./Contents.styles";
import { IContentsProps } from "./Contents.types";

export const Contents = (props: IContentsProps) => {
  return <ContentsWrapper>{props.children}</ContentsWrapper>;
};
