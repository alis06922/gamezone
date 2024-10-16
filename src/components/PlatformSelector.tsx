import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'
import userPlatforms from '../hooks/userPlatforms'
import { PlatForm } from '../hooks/useGames'

interface Props {
    onselectPlatform: (platform: PlatForm) => void;
    selectedPlatform: PlatForm | null
}

const PlatformSelector = ({ onselectPlatform, selectedPlatform }: Props) => {
    const { data, error } = userPlatforms();

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronRight />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data?.results.map(plaform => <MenuItem onClick={() => onselectPlatform(plaform)} key={plaform.id}>{plaform.name}</MenuItem>)}
            </MenuList>
        </Menu >
    )
}

export default PlatformSelector