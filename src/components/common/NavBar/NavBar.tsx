import { NavBarSubWrapper, NavBarWrapper } from "./NavBar.styles";
import { NavBarButton } from "./NavBarButton/NavBarButton";
import { DropupArrowIcon } from "../../../icons/DropupArrowIcon";

export const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarSubWrapper>
        <NavBarButton
          isActive={true}
          onClick={() => {
            console.log("랭킹");
          }}
        >
          랭킹
        </NavBarButton>
        <NavBarButton
          isActive={false}
          onClick={() => {
            console.log("차트");
          }}
        >
          차트
        </NavBarButton>
        <NavBarButton
          isActive={false}
          onClick={() => {
            console.log("가격");
          }}
        >
          가격
        </NavBarButton>
        <NavBarButton
          isActive={false}
          onClick={() => {
            console.log("검색");
          }}
        >
          검색
        </NavBarButton>
        <NavBarButton
          isActive={false}
          onClick={() => {
            console.log("필터");
          }}
          isDotted={true}
        >
          <DropupArrowIcon />
        </NavBarButton>
      </NavBarSubWrapper>
    </NavBarWrapper>
  );
};
