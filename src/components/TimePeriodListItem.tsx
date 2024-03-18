import { HStack, MenuItem } from "@chakra-ui/react";
import { Year } from "./TimePeriodSelector";
import { TiTick } from "react-icons/ti";
import { useState } from "react";

interface Props {
  year: Year;
  onSelectYear: (yearQuery: string) => void;
}

const TimePeriodListItem = ({ year, onSelectYear }: Props) => {
  const [timeSelected, setTimeSelected] = useState(false);
  const toggle = () => {
    setTimeSelected(!timeSelected);
    onSelectYear(year.query);
  };
  return (
    <HStack key={year.label}>
      <MenuItem
        justifyContent={"space-between"}
        onClick={toggle}
        key={year.label}
      >
        {year.label}
        {timeSelected && <TiTick key={year.query} />}
      </MenuItem>
    </HStack>
  );
};

export default TimePeriodListItem;
