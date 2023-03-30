import { FiltersWrapper, FilterWrapper } from "./Filters.styles";
import { IFiltersProps } from "./Filters.types";
import { Text } from "../Text/Text";

export const Filters = (props: IFiltersProps) => {
  return (
    <FiltersWrapper>
      {props.selectedFilters.map((filter, index) => (
        <FilterWrapper key={index}>
          <Text fontWeight={400} fontSize={16}>
            {filter}
          </Text>
        </FilterWrapper>
      ))}
    </FiltersWrapper>
  );
};
