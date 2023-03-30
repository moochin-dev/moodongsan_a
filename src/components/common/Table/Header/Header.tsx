import { HeaderElemWrapper, HeaderWrapper } from "./Header.styles";
import { IHeaderProps } from "./Header.types";
import { Text } from "../../Text/Text";

export const Header = (props: IHeaderProps) => {
  return (
    <HeaderWrapper>
      {props.widthList.map((width, index) => (
        <HeaderElemWrapper key={index} width={width}>
          <Text>{props.headerTextList[index]}</Text>
        </HeaderElemWrapper>
      ))}
    </HeaderWrapper>
  );
};
