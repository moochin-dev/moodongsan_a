import { IDropdownWithRadioProps } from "./DropdownWithRadio.types";
import { IDropdownProps } from "../Dropdown/Dropdown.types";
import React, { useState } from "react";
import { useDropdown } from "../../../custom-hooks/useDropdown";
import { IButtonProps } from "../Button/Button.types";
import { Wrapper, DropdownContentsWrapper } from "./DropdownWithRadio.styles";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";

export const DropdownWithRadio = <T extends React.ReactNode>(
  props: IDropdownWithRadioProps<T>
) => {
  const [state, setState] = useState(props.initialState);

  const {
    buttonRef,
    dropdownRef,
    isDropdownOpen,
    handleButtonClick,
    handleDropdownClose,
  } = useDropdown();

  const handleDropdownContentClick = (value: T) => {
    if (value !== state) {
      setState(value);
      handleDropdownClose();
    }
  };

  const buttonProps: IButtonProps = {
    width: props.buttonWidth,
    height: props.buttonHeight,
    onClick: handleButtonClick,
  };

  const dropdownProps: IDropdownProps = {
    width: props.dropdownWidth,
    height: props.dropdownHeight,
  };

  const dropdownContent = (
    <DropdownContentsWrapper>
      {props.stateList.map((element, index) => (
        <label key={index}>
          <input
            type={"radio"}
            checked={element === state}
            onChange={() => {
              handleDropdownContentClick(element);
            }}
          />
          <Text>{element}</Text>
        </label>
      ))}
    </DropdownContentsWrapper>
  );

  return (
    <Wrapper>
      <Button ref={buttonRef} {...buttonProps}>
        <Text>{state}</Text>
      </Button>
      {isDropdownOpen && (
        <Dropdown ref={dropdownRef} {...dropdownProps}>
          {dropdownContent}
        </Dropdown>
      )}
    </Wrapper>
  );
};
