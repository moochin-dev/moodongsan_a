import React from "react";
import { SCOPE_NAME, scopeList } from "./Scope.constants";
import { DropdownWithRadio } from "../../common/DropdownWithRadio/DropdownWithRadio";

export const Scope = () => {
  return (
    <DropdownWithRadio
      paramKey={"scope"}
      serialize={(x: SCOPE_NAME) => x as string}
      deserialize={(x) => x as SCOPE_NAME}
      initialState={SCOPE_NAME.CITY}
      stateList={scopeList}
      buttonWidth={100}
      buttonHeight={44}
      buttonFontSize={20}
      buttonFontWeight={600}
      dropdownWidth={100}
      dropdownHeight={192}
    />
  );
};
