import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronRight } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import userPlatforms, { Platform } from '../hooks/usePlatforms';
import useGameQueryStore from '../store';


const PlatformSelector = () => {
    const { data, error } = userPlatforms();
    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
    const selectedPlatform = usePlatform(selectedPlatformId);

    const setPlatformId = useGameQueryStore(s => s.setPlatformId);

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronRight />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data?.results.map(plaform => <MenuItem onClick={() => setPlatformId(plaform.id)} key={plaform.id}>{plaform.name}</MenuItem>)}
            </MenuList>
        </Menu >
    )
}

export default PlatformSelector