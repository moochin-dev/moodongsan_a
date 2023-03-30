import { NavBarButtonWrapper } from "./NavBarButton.styles";
import { INavBarButtonProps } from "./NavBarButton.types";
import { Text } from "../../Text/Text";

export const NavBarButton = (props: INavBarButtonProps) => {
  return (
    <NavBarButtonWrapper
      isActive={props.isActive}
      onClick={props.onClick}
      isDotted={props.isDotted}
    >
      <Text
        color={props.isActive ? "#ffffff" : "#000000"}
        fontWeight={700}
        fontSize={20}
      >
        {props.children}
      </Text>
    </NavBarButtonWrapper>
  );
};
