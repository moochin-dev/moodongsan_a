import React from "react";
import { SCOPE_NAME, scopeList } from "./Scope.constants";
import { DropdownWithRadio } from "../../common/DropdownWithRadio/DropdownWithRadio";

export const Scope = () => {
  return (
    <DropdownWithRadio
      initialState={SCOPE_NAME.CITY}
      stateList={scopeList}
      buttonWidth={80}
      buttonHeight={36}
      dropdownWidth={80}
      dropdownHeight={156}
    />
  );
};
