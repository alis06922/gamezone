import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface PlatForm {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
}

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder
      }
    },
    [gameQuery]
  );

export default useGames;
