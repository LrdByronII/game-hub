import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import TimePeriodListItem from "./TimePeriodListItem";

interface Props {
  onSelectYear: (year: string) => void;
  selectedYearProp: string;
}

export interface Year {
  label: string;
  query: string;
}

const TimePeriodSelector = ({ onSelectYear, selectedYearProp }: Props) => {
  const years: Year[] = [];
  for (let year = 2024; year >= 1990; year--)
    years.push({ label: `${year}`, query: `${year}-01-01,${year}-12-31` });

  const currentSelectedYears = selectedYearProp
    ?.substring(0, selectedYearProp.length - 1)
    .split(".")
    .map((selectedYear) => years.find((year) => year.query === selectedYear));

  console.log(
    "Current selected years: " + JSON.stringify(currentSelectedYears)
  );

  let YearsList = "";
  currentSelectedYears?.map((year) => (YearsList += year?.label + ", "));
  console.log("Yearslist: " + YearsList);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        From:{" "}
        {selectedYearProp
          ? YearsList.substring(0, YearsList.length - 2)
          : "Any year"}
      </MenuButton>
      <MenuList>
        {years.map((year) => (
          <TimePeriodListItem
            year={year}
            onSelectYear={onSelectYear}
            key={year.query}
          />
        ))}
      </MenuList>
    </Menu>
  );
};

export default TimePeriodSelector;
