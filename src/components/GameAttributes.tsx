import { SimpleGrid, Text } from '@chakra-ui/react'
import CriticBadge from './CriticBadge'
import DefinitionItem from './DefinitionItem'
import { Game } from '../entities/Game';

interface Props {
    game: Game;
}
function GameAttributes({ game }: Props) {
    return <SimpleGrid columns={2} as="dl">
        <DefinitionItem terms="Platforms">
            {game.parent_platforms?.map(({ platform }) => <Text key={platform.id}>{platform.name}</Text>)}
        </DefinitionItem>
        <DefinitionItem terms="Metascore">
            <CriticBadge score={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem terms="Genres">
            {game.genres?.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
        </DefinitionItem>
        <DefinitionItem terms="Publishers">
            {game.publishers?.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)}
        </DefinitionItem>
    </SimpleGrid>
}

export default GameAttributes