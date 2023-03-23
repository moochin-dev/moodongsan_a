import React, { useState } from "react";
import { useDropdown } from "../../../custom-hooks/useDropdown";
import { IButtonProps } from "../../common/Button/Button.types";
import { IDropdownProps } from "../../common/Dropdown/Dropdown.types";
import { ScopeWrapper, DropdownContentsWrapper } from "./Scope.styles";
import { Text } from "../../common/Text/Text";
import { Button } from "../../common/Button/Button";
import { Dropdown } from "../../common/Dropdown/Dropdown";
import { SCOPE_NAME, scopeValues } from "./Scope.constants";

export const Scope = () => {
  const [selectedScope, setSelectedScope] = useState<SCOPE_NAME>(
    SCOPE_NAME.CITY
  );

  const {
    buttonRef,
    dropdownRef,
    isDropdownOpen,
    handleButtonClick,
    handleDropdownClose,
  } = useDropdown();

  const handleDropdownContentClick = (value: SCOPE_NAME) => {
    if (value !== selectedScope) {
      setSelectedScope(value);
      handleDropdownClose();
    }
  };

  const [buttonWidth, buttonHeight] = [80, 36];

  const buttonProps: IButtonProps = {
    width: buttonWidth,
    height: buttonHeight,
    onClick: handleButtonClick,
  };

  const [dropdownWidth, dropdownHeight] = [80, 156];

  const dropdownProps: IDropdownProps = {
    width: dropdownWidth,
    height: dropdownHeight,
  };

  const dropdownContent = (
    <DropdownContentsWrapper>
      {scopeValues.map((categoryValue) => (
        <button
          className={"dropdown-content-wrapper"}
          key={categoryValue}
          onClick={() => {
            handleDropdownContentClick(categoryValue);
          }}
        >
          <Text>{categoryValue}</Text>
        </button>
      ))}
    </DropdownContentsWrapper>
  );

  return (
    <ScopeWrapper>
      <Button ref={buttonRef} {...buttonProps}>
        <Text>{selectedScope}</Text>
      </Button>
      {isDropdownOpen && (
        <Dropdown ref={dropdownRef} {...dropdownProps}>
          {dropdownContent}
        </Dropdown>
      )}
    </ScopeWrapper>
  );
};
