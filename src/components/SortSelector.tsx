import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'


interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ]

    const selectedOrderObj = sortOrders.find((order) => order.value == sortOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronRight />}>
                Order by : {selectedOrderObj?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value} >{order.label}</MenuItem>)}
            </MenuList>
        </Menu >
    )
}

export default SortSelector