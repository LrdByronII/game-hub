import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Response } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => 
        apiClient
            .get<Response<Genre>>('/genres')
            .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres
})

export default useGenres;