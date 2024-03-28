import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { Response } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useQuery<Response<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => 
        apiClient
            .get<Response<Game>>('/games', {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                dates: gameQuery.selectedYear,
                search: gameQuery.searchText
            },
        })
            .then(res => res.data),
    staleTime: 60 * 1000,
})


export default useGames;