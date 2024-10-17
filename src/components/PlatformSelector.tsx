import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronRight } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import userPlatforms, { Platform } from '../hooks/usePlatforms';

interface Props {
    onselectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number
}

const PlatformSelector = ({ onselectPlatform, selectedPlatformId }: Props) => {
    const { data, error } = userPlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId);

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