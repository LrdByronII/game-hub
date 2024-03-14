import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectYear: (year: number) => void;
    selectedYear: number;
}

const TimePeriodSelector = ({ onSelectYear, selectedYear }: Props) => {
    const years = []
    for (let year = 2024; year >= 1990; year--) years.push(year);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>From: {selectedYear ? selectedYear : 'Any year'}</MenuButton>
            <MenuList>
                {years.map(year => <MenuItem onClick={() => onSelectYear(year)} key={year}>{year}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default TimePeriodSelector