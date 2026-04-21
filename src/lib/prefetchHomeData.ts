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

/** Prefetch que não derruba o RSC se a Kitsu falhar (rede, 5xx, dev offline). */
async function prefetchSafe(
  queryClient: QueryClient,
  opts: { queryKey: readonly unknown[]; queryFn: () => Promise<unknown> }
) {
  try {
    await queryClient.prefetchQuery(opts);
  } catch (err) {
    console.warn("[prefetchHomeData] ignorado:", JSON.stringify(opts.queryKey), err);
  }
}

export async function prefetchHomeData(queryClient: QueryClient) {
  await Promise.all([
    prefetchSafe(queryClient, { queryKey: queryKeys.trending, queryFn: getTrendingAnime }),
    prefetchSafe(queryClient, { queryKey: queryKeys.airing, queryFn: getAiringAnime }),
    prefetchSafe(queryClient, { queryKey: queryKeys.rated, queryFn: getRatedAnime }),
    prefetchSafe(queryClient, { queryKey: queryKeys.coming, queryFn: getComingAnime }),
    prefetchSafe(queryClient, { queryKey: queryKeys.genres, queryFn: getGenres }),
    prefetchSafe(queryClient, { queryKey: queryKeys.popularity, queryFn: getPopularityAnime }),
  ]);
}
