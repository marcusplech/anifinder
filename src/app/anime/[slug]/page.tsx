import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import AnimeDetails from "@/components/Anime/AnimeDetails";
import { getAnimeBySlug } from "@/lib/KitsuClient";
import { queryKeys } from "@/lib/QueryKeys";

export default async function AnimeDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.single(slug),
    queryFn: () => getAnimeBySlug(slug),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnimeDetails slug={slug} />
    </HydrationBoundary>
  );
}
