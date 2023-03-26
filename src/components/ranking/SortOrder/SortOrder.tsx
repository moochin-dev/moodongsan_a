import { DropdownWithRadio } from "../../common/DropdownWithRadio/DropdownWithRadio";
import { SORT_ORDER_NAME, sortOrderList } from "./SortOrder.constants";

export const SortOrder = () => {
  return (
    <DropdownWithRadio
      paramKey={"sort-order"}
      serialize={(x: SORT_ORDER_NAME) => x as string}
      deserialize={(x) => x as SORT_ORDER_NAME}
      initialState={SORT_ORDER_NAME.HIGHER_PRICE}
      stateList={sortOrderList}
      buttonWidth={100}
      buttonHeight={36}
      dropdownWidth={100}
      dropdownHeight={88}
    />
  );
};
