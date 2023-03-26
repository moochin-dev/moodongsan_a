import React from "react";
import { DropdownWithRadio } from "../../common/DropdownWithRadio/DropdownWithRadio";
import { CATEGORY_NAME, categoryList } from "./Category.constants";

export const Category = () => {
  return (
    <DropdownWithRadio
      paramKey={"category"}
      serialize={(x: CATEGORY_NAME) => x as string}
      deserialize={(x) => x as CATEGORY_NAME}
      initialState={CATEGORY_NAME.PRICE_PER_AREA}
      stateList={categoryList}
      buttonWidth={100}
      buttonHeight={44}
      buttonFontSize={20}
      buttonFontWeight={600}
      dropdownWidth={100}
      dropdownHeight={400}
    />
  );
};
