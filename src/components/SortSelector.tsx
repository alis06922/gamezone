import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'
import useGameQueryStore from '../store'


const SortSelector = () => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ]
    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
    const setSordOrder = useGameQueryStore(s => s.setSordOrder);

    const selectedOrderObj = sortOrders.find((order) => order.value == sortOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronRight />}>
                Order by : {selectedOrderObj?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => <MenuItem onClick={() => setSordOrder(order.value)} key={order.value} value={order.value} >{order.label}</MenuItem>)}
            </MenuList>
        </Menu >
    )
}

export default SortSelector