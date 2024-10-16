// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string,
}

// const useGenre = () => useData<Genre>("/genres");
// const useGenre = () => ({ data: genres, error: null, isLoading: false })

const useGenre = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
  staleTime: 24 * 10 * 10 * 1000, //24h
  initialData: { count: genres.length, results: genres }
})


export default useGenre
