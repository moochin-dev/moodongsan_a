import { DropdownWithRadio } from "../../common/DropdownWithRadio/DropdownWithRadio";
import { AVERAGE_OPTION_NAME, averageOptionList } from "./Average.constants";

export const Average = () => {
  return (
    <DropdownWithRadio
      paramKey={"average"}
      serialize={(x: AVERAGE_OPTION_NAME) => x as string}
      deserialize={(x) => x as AVERAGE_OPTION_NAME}
      initialState={AVERAGE_OPTION_NAME.THIS_MONTH}
      stateList={averageOptionList}
      buttonWidth={100}
      buttonHeight={36}
      dropdownWidth={100}
      dropdownHeight={140}
    />
  );
};
