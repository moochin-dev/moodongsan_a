import { IDropdownWithRadioProps } from "./DropdownWithRadio.types";
import React from "react";
import { useDropdown } from "../../../custom-hooks/useDropdown";
import { Wrapper, DropdownContentsWrapper } from "./DropdownWithRadio.styles";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { useSearchParams } from "react-router-dom";

export const DropdownWithRadio = <T extends React.ReactNode>(
  props: IDropdownWithRadioProps<T>
) => {
  const [state, setState] = useSearchParams({
    [props.paramKey]: props.serialize(props.initialState),
  });

  const {
    buttonRef,
    dropdownRef,
    isDropdownOpen,
    handleButtonClick,
    handleDropdownClose,
  } = useDropdown();

  const handleDropdownContentClick = (value: T) => {
    if (value !== props.deserialize(state.get(props.paramKey))) {
      setState({ [props.paramKey]: props.serialize(value) });
      handleDropdownClose();
    }
  };

  const dropdownContent = (
    <DropdownContentsWrapper>
      {props.stateList.map((element, index) => (
        <label key={index}>
          <input
            type={"radio"}
            checked={element === props.deserialize(state.get(props.paramKey))}
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
      <Button
        ref={buttonRef}
        width={props.buttonWidth}
        height={props.buttonHeight}
        onClick={handleButtonClick}
      >
        <Text
          fontSize={props.buttonFontSize}
          fontWeight={props.buttonFontWeight}
          lineHeight={props.buttonLineHeight}
          color={props.buttonFontColor}
        >
          {state.get(props.paramKey)}
        </Text>
      </Button>
      {isDropdownOpen && (
        <Dropdown
          ref={dropdownRef}
          width={props.dropdownWidth}
          height={props.dropdownHeight}
        >
          {dropdownContent}
        </Dropdown>
      )}
    </Wrapper>
  );
};
