import { HomeCardsSkeleton } from "@/components/layout/AnimeGridSkeleton";

export default function Loading() {
  return (
    <div className="min-h-[50vh] w-full py-6">
      <HomeCardsSkeleton sections={2} cardsPerSection={6} label="Carregando página…" />
    </div>
  );
}
