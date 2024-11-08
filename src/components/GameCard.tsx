import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticBadge from "./CriticBadge";
import getCroppedImage from "../services/image-urls";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)}></Image>
      <CardBody>
        <HStack justify="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticBadge score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={'/games/' + game.slug}>{game.name} </Link>
          <Emoji rating={game.rating_top} /></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
