import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import HomePageView from "@/components/Home/HomePage";
import { prefetchHomeData } from "@/lib/UseHomePrefetch";

export default async function HomePage() {
  const queryClient = new QueryClient();
  await prefetchHomeData(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePageView />
    </HydrationBoundary>
  );
}
