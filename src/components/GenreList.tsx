import useGenre, { Genre } from "../hooks/useGenre";
import { Button, Heading, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImage from "../services/image-urls";
import GenereCardSkeleton from "./GenereCardSkeleton";

interface Props {
  onSelectGenre: (genere: Genre) => void;
  selectedGenre: Genre | null
}

const genreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  const skelectons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  if (error) return null;
  // load spinner
  // if (isLoading) return <Spinner />

  return (
    <>
      {isLoading && skelectons.map(skeleton => <GenereCardSkeleton key={skeleton} />)}
      <>
        <Heading fontSize="2xl" marginBottom={3}>Genre</Heading>
        <List>
          {data?.results.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image objectFit='cover' boxSize="32px" borderRadius={8} src={getCroppedImage(genre.image_background)} />
                <Button whiteSpace="normal" textAlign="left" fontWeight={selectedGenre?.id == genre.id ? "bold" : "normal"} onClick={() => onSelectGenre(genre)} variant='link' fontSize="lg">{genre.name}</Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </>
    </>
  );
};

export default genreList;
