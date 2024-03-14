import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectYear: (year: string) => void;
    selectedYear: string;
}

const TimePeriodSelector = ({ onSelectYear, selectedYear }: Props) => {
    const years = []
    for (let year = 2024; year >= 1990; year--) years.push({label:`${year}`, query:`${year}-01-01,${year}-12-31`});

    const currentSelectedYear = years.find(year => year.query === selectedYear)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>From: {currentSelectedYear ? currentSelectedYear.label : 'Any year'}</MenuButton>
            <MenuList>
                {years.map(year => <MenuItem onClick={() => onSelectYear(year.query)} key={year.label}>{year.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default TimePeriodSelector