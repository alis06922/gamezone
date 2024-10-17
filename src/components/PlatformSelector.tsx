import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'
import userPlatforms from '../hooks/userPlatforms'
import { Platform } from '../hooks/userPlatforms'

interface Props {
    onselectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number
}

const PlatformSelector = ({ onselectPlatform, selectedPlatformId }: Props) => {
    const { data, error } = userPlatforms();
    const platforms = userPlatforms();
    const selectedPlatform = platforms.data?.results.find(p => p.id == selectedPlatformId)

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