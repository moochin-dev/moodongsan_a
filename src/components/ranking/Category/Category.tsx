import React from "react";
import { DropdownWithRadio } from "../../common/DropdownWithRadio/DropdownWithRadio";
import { CATEGORY_NAME, categoryList } from "./Category.constants";

export const Category = () => {
  return (
    <DropdownWithRadio
      initialState={CATEGORY_NAME.PRICE_PER_AREA}
      stateList={categoryList}
      buttonWidth={100}
      buttonHeight={36}
      dropdownWidth={100}
      dropdownHeight={316}
    />
  );
};
