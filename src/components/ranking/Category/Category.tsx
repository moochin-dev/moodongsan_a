import { Button } from "../../common/Button/Button";
import { Text } from "../../common/Text/Text";
import { Dropdown } from "../../common/Dropdown/Dropdown";
import React, { useState } from "react";
import { useDropdown } from "../../../custom-hooks/useDropdown";
import { CATEGORY_NAME, categoryValues } from "./Category.constants";
import { CategoryWrapper, DropdownContentsWrapper } from "./Category.styles";
import { IDropdownProps } from "../../common/Dropdown/Dropdown.types";
import { IButtonProps } from "../../common/Button/Button.types";

export const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState<CATEGORY_NAME>(
    CATEGORY_NAME.PRICE_PER_AREA
  );

  const {
    buttonRef,
    dropdownRef,
    isDropdownOpen,
    handleButtonClick,
    handleDropdownClose,
  } = useDropdown();

  const handleDropdownContentClick = (value: CATEGORY_NAME) => {
    if (value !== selectedCategory) {
      setSelectedCategory(value);
      handleDropdownClose();
    }
  };

  const [buttonWidth, buttonHeight] = [100, 36];

  const buttonProps: IButtonProps = {
    width: buttonWidth,
    height: buttonHeight,
    onClick: handleButtonClick,
  };

  const [dropdownWidth, dropdownHeight] = [100, 316];

  const dropdownProps: IDropdownProps = {
    width: dropdownWidth,
    height: dropdownHeight,
  };

  const dropdownContent = (
    <DropdownContentsWrapper>
      {categoryValues.map((categoryValue) => (
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
    <CategoryWrapper>
      <Button ref={buttonRef} {...buttonProps}>
        <Text>{selectedCategory}</Text>
      </Button>
      {isDropdownOpen && (
        <Dropdown ref={dropdownRef} {...dropdownProps}>
          {dropdownContent}
        </Dropdown>
      )}
    </CategoryWrapper>
  );
};
