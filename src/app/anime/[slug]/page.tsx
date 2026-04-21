import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import AnimeDetails from "@/components/anime/AnimeDetails";
import { getAnimeBySlug } from "@/lib/KitsuClient";
import { queryKeys } from "@/lib/QueryKeys";

export default async function AnimeDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: queryKeys.single(slug),
      queryFn: () => getAnimeBySlug(slug),
    });
  } catch (err) {
    console.warn("[anime page] prefetch Kitsu falhou:", slug, err);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnimeDetails slug={slug} />
    </HydrationBoundary>
  );
}
