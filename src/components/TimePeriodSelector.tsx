import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useYear from "../hooks/useYear";
import useYears from "../hooks/useYears";
import useGameQueryStore from "../store";

export interface Year {
  label: string;
  query: string;
}

const TimePeriodSelector = () => {
  const selectedYearQuery = useGameQueryStore(
    (s) => s.gameQuery.selectedYearQuery
  );
  const setSelectedYearQuery = useGameQueryStore((s) => s.setSelectedYearQuery);

  const years = useYears();
  const selectedYear = useYear(selectedYearQuery);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"From: "}
        {selectedYear?.label || "Any Year"}
      </MenuButton>
      <MenuList>
        {years.map((year) => (
          <MenuItem
            onClick={() => setSelectedYearQuery(year.query)}
            key={year.query}
          >
            {year.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TimePeriodSelector;
