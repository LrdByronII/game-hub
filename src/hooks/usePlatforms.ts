import { useQuery } from "@tanstack/react-query";
import { Response } from "./useData";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => 
        apiClient
            .get<Response<Platform>>('/platforms/lists/parents')
            .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms
})

export default usePlatforms;