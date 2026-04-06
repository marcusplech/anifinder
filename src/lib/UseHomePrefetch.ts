import { QueryClient } from "@tanstack/react-query";
import {
  getAiringAnime,
  getComingAnime,
  getGenres,
  getPopularityAnime,
  getRatedAnime,
  getTrendingAnime,
} from "./KitsuClient";
import { queryKeys } from "./QueryKeys";

export async function prefetchHomeData(queryClient: QueryClient) {
  await Promise.all([
    queryClient.prefetchQuery({ queryKey: queryKeys.trending, queryFn: getTrendingAnime }),
    queryClient.prefetchQuery({ queryKey: queryKeys.airing, queryFn: getAiringAnime }),
    queryClient.prefetchQuery({ queryKey: queryKeys.rated, queryFn: getRatedAnime }),
    queryClient.prefetchQuery({ queryKey: queryKeys.coming, queryFn: getComingAnime }),
    queryClient.prefetchQuery({ queryKey: queryKeys.genres, queryFn: getGenres }),
    queryClient.prefetchQuery({ queryKey: queryKeys.popularity, queryFn: getPopularityAnime }),
  ]);
}
