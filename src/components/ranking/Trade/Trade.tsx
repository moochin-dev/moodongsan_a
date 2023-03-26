import { DropdownWithRadio } from "../../common/DropdownWithRadio/DropdownWithRadio";
import { TRADE_NAME, tradeList } from "./Trade.constants";

export const Trade = () => {
  return (
    <DropdownWithRadio
      paramKey={"trade"}
      serialize={(x: TRADE_NAME) => x as string}
      deserialize={(x) => x as TRADE_NAME}
      initialState={TRADE_NAME.TRADE}
      stateList={tradeList}
      buttonWidth={100}
      buttonHeight={36}
      dropdownWidth={100}
      dropdownHeight={88}
    />
  );
};
